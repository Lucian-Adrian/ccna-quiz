export const MODULE_GROUPS = [
  { id: "m1-3", title: "Modules 1-3", range: "1-3", shortTitle: "1-3" },
  { id: "m4-7", title: "Modules 4-7", range: "4-7", shortTitle: "4-7" },
  { id: "m8-10", title: "Modules 8-10", range: "8-10", shortTitle: "8-10" },
  { id: "m11-13", title: "Modules 11-13", range: "11-13", shortTitle: "11-13" },
  { id: "m14-15", title: "Modules 14-15", range: "14-15", shortTitle: "14-15" },
  { id: "m16-17", title: "Modules 16-17", range: "16-17", shortTitle: "16-17" },
];

export const MIDTERMS = [
  { id: "midterm-1", title: "Midterm 1", range: "1-7", sourceIds: ["m1-3", "m4-7"] },
  { id: "midterm-2", title: "Midterm 2", range: "8-17", sourceIds: ["m8-10", "m11-13", "m14-15", "m16-17"] },
];

export function normalizeQuestion(rawQuestion, source) {
  const correctAnswers = rawQuestion.correct_answers ?? rawQuestion.answers ?? [];

  return {
    id: `${source.id}-${rawQuestion.number}`,
    number: rawQuestion.number,
    sourceId: source.id,
    sourceTitle: source.title,
    range: source.range,
    question: rawQuestion.question,
    options: rawQuestion.options ?? [],
    correctAnswers,
    explanation: rawQuestion.explanation ?? "",
    imageUrls: rawQuestion.image_urls ?? [],
    codeBlocks: rawQuestion.code_blocks ?? [],
    tables: rawQuestion.tables ?? [],
  };
}

export function createModuleDecks(moduleSources) {
  return MODULE_GROUPS.map((group) => {
    const questions = (moduleSources[group.id] ?? []).map((question) => normalizeQuestion(question, group));

    return {
      ...group,
      type: "module",
      questions,
      count: questions.length,
    };
  });
}

export function createDecks(moduleSources) {
  const moduleDecks = createModuleDecks(moduleSources);
  const byId = new Map(moduleDecks.map((deck) => [deck.id, deck]));

  const midtermDecks = MIDTERMS.map((midterm) => {
    const questions = midterm.sourceIds.flatMap((id) => byId.get(id)?.questions ?? []);
    return {
      ...midterm,
      type: "midterm",
      questions,
      count: questions.length,
    };
  });

  const allQuestions = moduleDecks.flatMap((deck) => deck.questions);

  return [
    {
      id: "all",
      title: "All modules",
      range: "1-17",
      type: "all",
      questions: allQuestions,
      count: allQuestions.length,
    },
    ...midtermDecks,
    ...moduleDecks,
  ];
}

export function shuffle(items, seed = Date.now()) {
  const shuffled = [...items];
  let state = Math.abs(Math.trunc(seed)) % 2147483647 || 1;

  const random = () => {
    state = (state * 48271) % 2147483647;
    return state / 2147483647;
  };

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

export function buildSession(deck, { mode, limit = 24, seed = Date.now() } = {}) {
  const eligibleQuestions =
    mode === "exam"
      ? deck.questions.filter((question) => question.options.length > 0 && question.correctAnswers.length > 0)
      : deck.questions;
  const shuffled = shuffle(eligibleQuestions, seed);
  const questions = mode === "exam" ? shuffled.slice(0, Math.min(limit, shuffled.length)) : shuffled;

  return {
    deckId: deck.id,
    mode,
    questions,
    index: 0,
    answers: {},
    revealed: false,
    submitted: false,
    seed,
  };
}

export function normalizeAnswer(value) {
  return String(value).toLowerCase().replace(/\s+/g, " ").trim();
}

export function isCorrect(question, selectedAnswers = []) {
  const selected = new Set(selectedAnswers.map(normalizeAnswer));
  const correct = new Set(question.correctAnswers.map(normalizeAnswer));

  if (selected.size !== correct.size) return false;

  for (const answer of correct) {
    if (!selected.has(answer)) return false;
  }

  return true;
}

export function scoreSession(questions, answers) {
  const total = questions.length;
  const correct = questions.filter((question) => isCorrect(question, answers[question.id] ?? [])).length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;

  return { total, correct, wrong, percent };
}

export function summarizeDeckProgress(deck, progress) {
  let seen = 0;
  let correct = 0;
  let wrong = 0;

  for (const question of deck.questions) {
    const entry = progress[question.id];
    if (!entry) continue;
    if (entry.seen > 0) seen += 1;
    correct += entry.correct ?? 0;
    wrong += entry.wrong ?? 0;
  }

  const attempts = correct + wrong;
  const percent = attempts ? Math.round((correct / attempts) * 100) : 0;

  return { seen, correct, wrong, attempts, percent };
}

export function getLearningSummary(deck, progress) {
  const base = summarizeDeckProgress(deck, progress);
  let mastered = 0;
  let weak = 0;

  for (const question of deck.questions) {
    const entry = progress[question.id];
    if (!entry) continue;

    const correct = entry.correct ?? 0;
    const wrong = entry.wrong ?? 0;
    const attempts = correct + wrong;
    const accuracy = attempts ? correct / attempts : 0;

    if (attempts >= 2 && accuracy >= 0.8) mastered += 1;
    if (wrong > 0 && accuracy < 0.8) weak += 1;
  }

  const unseen = Math.max(deck.count - base.seen, 0);
  const masteryPercent = deck.count ? Math.round((mastered / deck.count) * 100) : 0;

  return { ...base, unseen, mastered, weak, masteryPercent };
}

export function getWeakQuestions(deck, progress) {
  return deck.questions
    .map((question) => {
      const entry = progress[question.id] ?? { seen: 0, correct: 0, wrong: 0 };
      const attempts = (entry.correct ?? 0) + (entry.wrong ?? 0);
      const accuracy = attempts ? (entry.correct ?? 0) / attempts : 1;
      const priority = (1 - accuracy) * 10 + (entry.wrong ?? 0);
      return { question, entry, priority };
    })
    .filter(({ entry }) => (entry.wrong ?? 0) > 0)
    .sort((left, right) => right.priority - left.priority || left.question.id.localeCompare(right.question.id))
    .map(({ question }) => question);
}

export function getRecommendedDeck(decks, progress) {
  const moduleDecks = decks.filter((deck) => deck.type === "module");

  return moduleDecks
    .map((deck) => {
      const summary = summarizeDeckProgress(deck, progress);
      const coverage = deck.count ? summary.seen / deck.count : 1;
      return { deck, coverage, accuracy: summary.percent };
    })
    .sort((left, right) => left.coverage - right.coverage || left.accuracy - right.accuracy)[0]?.deck;
}
