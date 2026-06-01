import finalExamInfra from "../CCNA1_v7_Final_Exam_infra.json";
import finalExamItexam from "../CCNA1_v7_Final_Exam_itexam.json";
import modules1To3Infra from "../CCNA1_v7_Modules_1-3_infra.json";
import modules1To3Itexam from "../CCNA1_v7_Modules_1-3_itexam.json";
import modules4To7Infra from "../CCNA1_v7_Modules_4-7_infra.json";
import modules4To7Itexam from "../CCNA1_v7_Modules_4-7_itexam.json";
import modules8To10Infra from "../CCNA1_v7_Modules_8-10_infra.json";
import modules8To10Itexam from "../CCNA1_v7_Modules_8-10_itexam.json";
import modules11To13Infra from "../CCNA1_v7_Modules_11-13_infra.json";
import modules11To13Itexam from "../CCNA1_v7_Modules_11-13_itexam.json";
import modules14To15Infra from "../CCNA1_v7_Modules_14-15_infra.json";
import modules14To15Itexam from "../CCNA1_v7_Modules_14-15_itexam.json";
import modules16To17Infra from "../CCNA1_v7_Modules_16-17_infra.json";
import modules16To17Itexam from "../CCNA1_v7_Modules_16-17_itexam.json";
import practiceFinalInfra from "../CCNA1_v7_Practice_Final_infra.json";
import practiceFinalItexam from "../CCNA1_v7_Practice_Final_itexam.json";
import {
  buildSmartReview,
  buildSession,
  createCombinedDecks,
  createDecks,
  formatMatchingAnswer,
  getDueQuestions,
  getExamEligibleQuestions,
  getLearningSummary,
  getNewQuestions,
  getWeakQuestions,
  isCorrect,
  scheduleProgress,
  scoreSession,
  splitMatchingImages,
} from "./decks.js";
import { getNavigationAction } from "./navigation.js";
import { createProgressBackup, loadStoredProgress, parseProgressPayload, saveStoredProgress } from "./storage.js";
import "./styles.css";

const STORAGE_KEY = "quizos-v2-progress";
const STORAGE_BACKUP_KEY = "quizos-v2-progress-backup";
const DECK_KEY = "quizos-v2-selected-deck";
const BANK_KEY = "quizos-v2-selected-bank";
const EXAM_LIMIT = 24;

const itexamSources = {
  "m1-3": modules1To3Itexam,
  "m4-7": modules4To7Itexam,
  "m8-10": modules8To10Itexam,
  "m11-13": modules11To13Itexam,
  "m14-15": modules14To15Itexam,
  "m16-17": modules16To17Itexam,
};

const infraSources = {
  "m1-3": modules1To3Infra,
  "m4-7": modules4To7Infra,
  "m8-10": modules8To10Infra,
  "m11-13": modules11To13Infra,
  "m14-15": modules14To15Infra,
  "m16-17": modules16To17Infra,
};

const itexamDecks = createDecks(itexamSources, {
  bankId: "itexam",
  bankTitle: "ITExam",
  finalSources: {
    "practice-final": practiceFinalItexam,
    "final-exam": finalExamItexam,
  },
});

const infraDecks = createDecks(infraSources, {
  bankId: "infra",
  bankTitle: "Infra",
  deckPrefix: "infra",
  sourcePrefix: "infra",
  finalSources: {
    "practice-final": practiceFinalInfra,
    "final-exam": finalExamInfra,
  },
});

const bankDecks = {
  combined: createCombinedDecks([itexamDecks, infraDecks], {
    bankId: "combined",
    bankTitle: "Combined",
    deckPrefix: "combined",
  }),
  itexam: itexamDecks,
  infra: infraDecks,
};

const questionBanks = [
  { id: "combined", title: "Combined", subtitle: "Both sources", decks: bankDecks.combined },
  { id: "itexam", title: "ITExam", subtitle: "Original set", decks: bankDecks.itexam },
  { id: "infra", title: "Infra", subtitle: "Primary set", decks: bankDecks.infra },
];

const savedBankId = loadBankId();
let decks = decksForBank(savedBankId);
let deckById = new Map(decks.map((deck) => [deck.id, deck]));
const app = document.querySelector("#app");

const state = {
  screen: "home",
  bankId: savedBankId,
  deckId: loadDeckId(savedBankId),
  progress: loadProgress(),
  session: null,
  savedAt: Number(localStorage.getItem(`${STORAGE_KEY}-saved-at`) ?? 0),
  saveError: "",
};

function loadBankId() {
  const savedBankId = localStorage.getItem(BANK_KEY);
  return questionBanks.some((bank) => bank.id === savedBankId) ? savedBankId : "infra";
}

function loadDeckId(bankId) {
  const savedDeckId = localStorage.getItem(`${DECK_KEY}-${bankId}`);
  const fallback = decks.find((deck) => deck.logicalId === "midterm-1")?.id ?? decks[0]?.id;
  return savedDeckId && deckById.has(savedDeckId) ? savedDeckId : fallback;
}

function decksForBank(bankId) {
  return bankDecks[bankId] ?? bankDecks.combined;
}

function currentBank() {
  return questionBanks.find((bank) => bank.id === state.bankId) ?? questionBanks[0];
}

function loadProgress() {
  return loadStoredProgress(localStorage, STORAGE_KEY, STORAGE_BACKUP_KEY);
}

function saveProgress() {
  try {
    state.savedAt = saveStoredProgress(localStorage, STORAGE_KEY, STORAGE_BACKUP_KEY, state.progress);
    localStorage.setItem(`${STORAGE_KEY}-saved-at`, String(state.savedAt));
    state.saveError = "";
  } catch {
    state.saveError = "Could not save progress on this device.";
  }
}

function currentDeck() {
  return deckById.get(state.deckId) ?? decks[0];
}

function currentQuestion() {
  return state.session?.questions[state.session.index] ?? null;
}

function selectedFor(question) {
  if (!question || !state.session) return [];
  return state.session.answers[question.id] ?? [];
}

function answeredCount(session = state.session) {
  if (!session) return 0;
  return session.questions.filter((question) => (session.answers[question.id] ?? []).length > 0).length;
}

function setScreen(screen) {
  state.screen = screen;
  state.session = null;
  render();
}

function navigate(screen) {
  const action = getNavigationAction(screen);

  if (action.type === "start-session") {
    startSession(action.mode);
  } else {
    setScreen(action.screen);
  }
}

function selectDeck(deckId) {
  if (!deckById.has(deckId)) return;
  state.deckId = deckId;
  localStorage.setItem(`${DECK_KEY}-${state.bankId}`, deckId);
  localStorage.setItem(DECK_KEY, deckId);
  render();
}

function selectBank(bankId) {
  if (!bankDecks[bankId]) return;

  const currentLogicalId = currentDeck()?.logicalId ?? "midterm-1";
  state.bankId = bankId;
  localStorage.setItem(BANK_KEY, bankId);
  decks = decksForBank(bankId);
  deckById = new Map(decks.map((deck) => [deck.id, deck]));

  const savedDeckId = localStorage.getItem(`${DECK_KEY}-${bankId}`);
  const matchingDeck = decks.find((deck) => deck.logicalId === currentLogicalId);
  state.deckId = savedDeckId && deckById.has(savedDeckId) ? savedDeckId : matchingDeck?.id ?? decks[0]?.id;
  localStorage.setItem(`${DECK_KEY}-${bankId}`, state.deckId);
  render();
}

function startSession(mode) {
  const deck = currentDeck();
  state.screen = mode;
  state.session = buildSession(deck, {
    mode,
    limit: EXAM_LIMIT,
    seed: Date.now(),
  });
  render();
}

function startFullExam() {
  const deck = currentDeck();
  state.screen = "exam";
  state.session = buildSession(deck, {
    mode: "exam",
    limit: getExamEligibleQuestions(deck).length,
    seed: Date.now(),
  });
  render();
}

function startPracticeQueue(questions) {
  if (questions.length === 0) return;

  state.screen = "practice";
  state.session = {
    deckId: state.deckId,
    mode: "practice",
    questions,
    index: 0,
    answers: {},
    revealed: false,
    submitted: false,
    seed: Date.now(),
  };
  render();
}

function startFocusSession() {
  const deck = currentDeck();
  const questions = buildSmartReview(deck, state.progress, {
    limit: EXAM_LIMIT,
    seed: Date.now(),
  });

  if (questions.length > 0) {
    startPracticeQueue(questions);
  } else {
    startSession("practice");
  }
}

function startDueReview() {
  const dueQuestions = getDueQuestions(currentDeck(), state.progress);
  if (dueQuestions.length > 0) startPracticeQueue(dueQuestions.slice(0, EXAM_LIMIT));
}

function startNewCards() {
  const newQuestions = getNewQuestions(currentDeck(), state.progress);
  if (newQuestions.length > 0) startPracticeQueue(newQuestions.slice(0, EXAM_LIMIT));
}

function startWeakReview() {
  const deck = currentDeck();
  const weakQuestions = getWeakQuestions(deck, state.progress);
  if (weakQuestions.length === 0) return;

  startPracticeQueue(weakQuestions.slice(0, EXAM_LIMIT));
}

function toggleAnswer(option) {
  const question = currentQuestion();
  if (!question || !state.session || state.session.submitted) return;
  if (state.session.mode === "practice" && state.session.revealed) return;

  const selected = selectedFor(question);
  const exists = selected.includes(option);
  const answerCount = Math.max(question.correctAnswers.length, 1);

  if (answerCount === 1) {
    state.session.answers[question.id] = exists ? [] : [option];
  } else if (exists) {
    state.session.answers[question.id] = selected.filter((item) => item !== option);
  } else if (selected.length < answerCount) {
    state.session.answers[question.id] = [...selected, option];
  }

  render();
}

function setMatchingAnswer(left, right) {
  const question = currentQuestion();
  if (!question || !state.session || state.session.submitted) return;
  if (state.session.mode === "practice" && state.session.revealed) return;

  const selected = selectedFor(question).filter((answer) => !answer.startsWith(`${left} => `));
  if (right) selected.push(formatMatchingAnswer(left, right));
  state.session.answers[question.id] = selected;
  render();
}

function revealPracticeAnswer() {
  const question = currentQuestion();
  if (!question || !state.session) return;
  if (question.options.length > 0 && selectedFor(question).length === 0) return;
  if ((question.matchingPairs?.length ?? 0) > 0 && selectedFor(question).length < question.matchingPairs.length) return;

  state.session.revealed = true;
  writeProgress(
    question,
    question.options.length === 0 && (question.matchingPairs?.length ?? 0) === 0
      ? true
      : isCorrect(question, selectedFor(question)),
  );
  render();
}

function nextQuestion() {
  if (!state.session) return;

  if (state.session.index < state.session.questions.length - 1) {
    state.session.index += 1;
    state.session.revealed = false;
  } else if (state.session.mode === "practice") {
    state.screen = "home";
    state.session = null;
  }

  render();
}

function previousQuestion() {
  if (!state.session || state.session.index === 0) return;
  state.session.index -= 1;
  state.session.revealed = false;
  render();
}

function submitExam() {
  if (!state.session) return;

  state.session.submitted = true;
  for (const question of state.session.questions) {
    writeProgress(question, isCorrect(question, selectedFor(question)));
  }
  render();
}

function restartExamMisses() {
  if (!state.session) return;
  const misses = state.session.questions.filter((question) => !isCorrect(question, selectedFor(question)));
  if (misses.length === 0) return;

  state.session = {
    deckId: state.deckId,
    mode: "practice",
    questions: misses,
    index: 0,
    answers: {},
    revealed: false,
    submitted: false,
    seed: Date.now(),
  };
  state.screen = "practice";
  render();
}

function writeProgress(question, correct) {
  state.progress[question.id] = scheduleProgress(state.progress[question.id], correct);
  saveProgress();
}

function resetProgress() {
  state.progress = {};
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_BACKUP_KEY);
  localStorage.removeItem(`${STORAGE_KEY}-saved-at`);
  state.savedAt = 0;
  state.saveError = "";
  render();
}

function exportProgress() {
  const backup = createProgressBackup(state.progress);
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `quizos-progress-${new Date(backup.savedAt).toISOString().slice(0, 10)}.json`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      state.progress = parseProgressPayload(String(reader.result ?? "{}"));
      saveProgress();
      state.screen = "stats";
      state.session = null;
      render();
    } catch {
      state.saveError = "Could not import that progress file.";
      render();
    }
  });
  reader.readAsText(file);
}

function render() {
  app.innerHTML = `
    <div class="app-shell screen-${state.screen}">
      ${renderSidebar()}
      <main class="main">
        ${state.screen === "home" ? renderHome() : ""}
        ${state.screen === "practice-hub" ? renderPracticeHub() : ""}
        ${state.screen === "exam-hub" ? renderExamHub() : ""}
        ${state.screen === "practice" ? renderTrainer("practice") : ""}
        ${state.screen === "exam" ? renderTrainer("exam") : ""}
        ${state.screen === "stats" ? renderStats() : ""}
      </main>
      ${renderBottomNav()}
    </div>
  `;

  wireEvents();
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <button class="brand" type="button" data-screen="home"><span>Q</span>QuizOS</button>
      <nav class="side-nav" aria-label="Main">
        ${navButton("home", "Home")}
        ${navButton("practice", "Practice")}
        ${navButton("exam", "Exam")}
        ${navButton("stats", "Stats")}
      </nav>
      <button class="small-reset" type="button" data-action="reset-progress">Reset progress</button>
    </aside>
  `;
}

function navButton(screen, label) {
  const active =
    state.screen === screen ||
    (screen === "practice" && state.screen === "practice-hub") ||
    (screen === "exam" && state.screen === "exam-hub") ||
    (screen === "home" && !["practice", "practice-hub", "exam", "exam-hub", "stats"].includes(state.screen));
  return `<button class="${active ? "active" : ""}" type="button" data-screen="${screen}">${label}</button>`;
}

function renderBottomNav() {
  return `
    <nav class="bottom-nav" aria-label="Mobile navigation">
      ${navButton("home", "Home")}
      ${navButton("practice", "Practice")}
      ${navButton("exam", "Exam")}
      ${navButton("stats", "Stats")}
    </nav>
  `;
}

function renderHome() {
  const deck = currentDeck();
  const bank = currentBank();
  const summary = getLearningSummary(deck, state.progress);
  const weakCount = getWeakQuestions(deck, state.progress).length;
  const dueCount = getDueQuestions(deck, state.progress).length;
  const newCount = getNewQuestions(deck, state.progress).length;
  const primaryAction = dueCount ? "review-due" : "start-focus";
  const primaryLabel = dueCount ? "Review due" : "Start review";
  const nextDetail = `${dueCount} due · ${newCount} new · ${weakCount} weak`;

  return `
    <section class="topbar">
      <div>
        <h1>Study</h1>
        <p>${bank.title} · ${deck.title}</p>
      </div>
    </section>

    <section class="content">
      <section class="bank-switch" aria-label="Question bank">
        ${questionBanks.map(renderBankButton).join("")}
      </section>

      <section class="study-board">
        <div class="next-line">
          <span>Next up</span>
          <strong>${dueCount ? "Review due" : deck.title}</strong>
          <small>${nextDetail}</small>
        </div>
        <div class="study-actions">
          <button class="primary primary-action" type="button" data-action="${primaryAction}">${primaryLabel}</button>
          <div class="secondary-actions">
            ${weakCount > 0 ? `<button class="secondary" type="button" data-action="review-weak">Weak</button>` : ""}
            ${newCount > 0 ? `<button class="secondary" type="button" data-action="learn-new">New</button>` : ""}
          <button class="secondary" type="button" data-start="exam">Exam</button>
          ${deck.count > EXAM_LIMIT ? `<button class="secondary" type="button" data-action="full-exam">Full exam</button>` : ""}
          </div>
        </div>
      </section>

      <section class="learning-strip" aria-label="Learning state">
        <div><span>Due</span><strong class="${summary.due ? "danger" : ""}">${summary.due}</strong></div>
        <div><span>New</span><strong>${newCount}</strong></div>
        <div><span>Weak</span><strong class="${summary.weak ? "danger" : ""}">${summary.weak}</strong></div>
        <div><span>Mastered</span><strong>${summary.masteryPercent}%</strong></div>
      </section>

      <section class="selected-line">
        <div>
          <span class="scope-label">Current scope</span>
          <strong>${deck.title}</strong>
          <span>${bank.title} bank · choose exactly what you want to train.</span>
        </div>
        <strong class="scope-count">${deck.count}<span>questions</span></strong>
      </section>

      ${renderScopePicker()}
    </section>
  `;
}

function renderPracticeHub() {
  const deck = currentDeck();
  const bank = currentBank();
  const summary = getLearningSummary(deck, state.progress);
  const weakCount = getWeakQuestions(deck, state.progress).length;
  const dueCount = getDueQuestions(deck, state.progress).length;
  const newCount = getNewQuestions(deck, state.progress).length;
  const primaryAction = dueCount ? "review-due" : "start-focus";
  const primaryLabel = dueCount ? "Review due" : "Start smart review";

  return `
    <section class="topbar">
      <div>
        <h1>Practice</h1>
        <p>${bank.title} · ${deck.title}</p>
      </div>
    </section>

    <section class="content">
      <section class="bank-switch" aria-label="Question bank">
        ${questionBanks.map(renderBankButton).join("")}
      </section>

      <section class="mode-panel practice-panel">
        <div class="mode-copy">
          <span class="eyebrow">Selected scope</span>
          <h2>${deck.title}</h2>
          <p>${summary.due} due · ${summary.unseen} new · ${summary.weak} weak</p>
        </div>
        <div class="mode-options">
          <button class="primary primary-action" type="button" data-action="${primaryAction}">${primaryLabel}</button>
          <button class="secondary" type="button" data-action="learn-new" ${newCount === 0 ? "disabled" : ""}>New only</button>
          <button class="secondary" type="button" data-action="review-weak" ${weakCount === 0 ? "disabled" : ""}>Weak only</button>
          <button class="secondary" type="button" data-start="practice">Shuffle all</button>
        </div>
      </section>

      <section class="learning-strip compact-strip" aria-label="Learning state">
        <div><span>Due</span><strong class="${summary.due ? "danger" : ""}">${summary.due}</strong></div>
        <div><span>New</span><strong>${newCount}</strong></div>
        <div><span>Weak</span><strong class="${summary.weak ? "danger" : ""}">${summary.weak}</strong></div>
        <div><span>Done</span><strong>${summary.percent}%</strong></div>
      </section>

      ${renderScopePicker("Change practice scope")}
    </section>
  `;
}

function renderExamHub() {
  const deck = currentDeck();
  const bank = currentBank();
  const eligibleCount = getExamEligibleQuestions(deck).length;
  const quickCount = Math.min(EXAM_LIMIT, eligibleCount);

  return `
    <section class="topbar">
      <div>
        <h1>Exam</h1>
        <p>${bank.title} · ${deck.title}</p>
      </div>
    </section>

    <section class="content">
      <section class="bank-switch" aria-label="Question bank">
        ${questionBanks.map(renderBankButton).join("")}
      </section>

      <section class="mode-panel exam-panel">
        <div class="mode-copy">
          <span class="eyebrow">Selected scope</span>
          <h2>${deck.title}</h2>
          <p>No answers until you finish. Missed questions come back with explanations.</p>
        </div>
        <div class="mode-options exam-options">
          <button class="primary primary-action" type="button" data-start="exam" ${eligibleCount === 0 ? "disabled" : ""}>Quick exam</button>
          <button class="secondary" type="button" data-action="full-exam" ${eligibleCount === 0 ? "disabled" : ""}>Full exam</button>
        </div>
      </section>

      <section class="exam-choice-grid">
        <div class="exam-choice">
          <span>Quick exam</span>
          <strong>${quickCount}</strong>
          <small>Random questions for a focused check.</small>
        </div>
        <div class="exam-choice">
          <span>Full exam</span>
          <strong>${eligibleCount}</strong>
          <small>Every answerable question in this scope.</small>
        </div>
      </section>

      ${renderScopePicker("Change exam scope")}
    </section>
  `;
}

function renderScopePicker(title = "Choose scope") {
  return `
    <h2 class="section-title">${title}</h2>
    <h3 class="subsection-title">Midterms</h3>
    <section class="deck-grid featured">
      ${decks.filter((item) => item.type === "midterm").map(renderDeckButton).join("")}
    </section>

    <h3 class="subsection-title">Modules</h3>
    <section class="deck-grid">
      ${decks.filter((item) => item.type === "module").map(renderDeckButton).join("")}
    </section>

    <h3 class="subsection-title">Finals</h3>
    <section class="deck-grid featured">
      ${decks.filter((item) => item.type === "final").map(renderDeckButton).join("")}
    </section>

    <section class="all-row">
      ${renderDeckButton(decks.find((item) => item.logicalId === "all"))}
    </section>
  `;
}

function renderBankButton(bank) {
  const selected = bank.id === state.bankId;
  const total = bank.decks.find((deck) => deck.logicalId === "all")?.count ?? 0;

  return `
    <button class="bank-option ${selected ? "selected" : ""}" type="button" data-bank="${bank.id}" aria-pressed="${selected}">
      <strong>${bank.title}</strong>
      <span>${total} questions · ${bank.subtitle}</span>
    </button>
  `;
}

function renderDeckButton(deck) {
  if (!deck) return "";
  const selected = deck.id === state.deckId;
  const progress = getLearningSummary(deck, state.progress);

  return `
    <button class="deck-row ${selected ? "selected" : ""}" type="button" data-deck="${deck.id}" aria-pressed="${selected}">
      <span class="deck-title">${deck.title}</span>
      <span class="deck-row-action">${selected ? "Selected" : "Choose"}</span>
      <small>${progress.due} due · ${progress.unseen} new · ${progress.percent}% done</small>
    </button>
  `;
}

function renderTrainer(mode) {
  const question = currentQuestion();
  if (!question) return "";

  const deck = currentDeck();
  const selected = selectedFor(question);
  const checked = mode === "practice" && state.session.revealed;
  const examDone = mode === "exam" && state.session.submitted;
  const score = scoreSession(state.session.questions, state.session.answers);
  const answered = answeredCount();
  const answerCount = question.correctAnswers.length;
  const hasChoices = question.options.length > 0;
  const hasMatching = (question.matchingPairs?.length ?? 0) > 0;
  const needsSelection = (hasChoices && selected.length === 0) || (hasMatching && selected.length < question.matchingPairs.length);
  const practiceHint = state.session.revealed
    ? "Review the explanation, then continue."
    : hasMatching
      ? "Match every row, then check."
      : hasChoices
        ? "Choose an answer, then check."
        : "Reveal the answer when ready.";

  return `
    <section class="trainer ${mode}">
      <header class="question-top">
        <button class="back-button" type="button" data-screen="home">Back</button>
        <div>
          <h1>${mode === "exam" ? "Exam" : "Practice"}</h1>
          <p>${deck.title} · ${state.session.index + 1}/${state.session.questions.length}${mode === "exam" ? ` · ${answered} answered` : ""}</p>
        </div>
        ${mode === "exam" ? `<button class="secondary" type="button" data-action="submit-exam" ${answered === 0 ? "disabled" : ""}>Finish</button>` : ""}
      </header>

      ${
        examDone
          ? renderExamResult(score)
          : `
        <div class="session-meter" aria-hidden="true">
          <span style="width: ${Math.round(((state.session.index + 1) / state.session.questions.length) * 100)}%"></span>
        </div>
        <article class="question-card">
          <div class="question-meta">
            <span>${question.sourceTitle}</span>
            <span>${hasMatching ? "Matching" : !hasChoices ? "Study card" : answerCount > 1 ? `Choose ${answerCount}` : "Single answer"}</span>
          </div>
          <h2>${escapeHtml(question.question)}</h2>
          ${renderQuestionAssets(question)}
          ${
            hasChoices
              ? `<div class="answers">
                  ${question.options.map((option, index) => renderAnswer(question, option, index, selected, checked)).join("")}
                </div>`
              : hasMatching
                ? renderMatchingQuestion(question, selected, checked)
                : `<div class="study-card-note">Read the prompt, then reveal the answer.</div>`
          }
        </article>

        ${checked ? renderExplanation(question, selected) : ""}

        <footer class="trainer-actions">
          <span class="session-hint">${mode === "practice" ? practiceHint : `${answered}/${state.session.questions.length} answered`}</span>
          <button class="secondary" type="button" data-action="previous" ${state.session.index === 0 ? "disabled" : ""}>Previous</button>
          ${
            mode === "practice"
              ? state.session.revealed
                ? `<button class="primary" type="button" data-action="next">Next card</button>`
                : `<button class="primary" type="button" data-action="reveal" ${needsSelection ? "disabled" : ""}>${
                    hasChoices || hasMatching ? "Check answer" : "Show answer"
                  }</button>`
              : `<button class="primary" type="button" data-action="next" ${state.session.index === state.session.questions.length - 1 ? "disabled" : ""}>Next</button>`
          }
        </footer>
      `
      }
    </section>
  `;
}

function renderMatchingQuestion(question, selected, checked) {
  const selectedMap = new Map(
    selected.map((answer) => {
      const [left, right] = answer.split(" => ");
      return [left, right];
    }),
  );
  const targets = [...new Set(question.matchingPairs.map((pair) => pair.right))].sort((left, right) =>
    left.localeCompare(right),
  );

  return `
    <div class="matching">
      ${question.matchingPairs
        .map((pair) => {
          const value = selectedMap.get(pair.left) ?? "";
          const correct = value === pair.right;
          return `
            <label class="match-row ${checked ? (correct ? "correct" : "wrong") : ""}">
              <span>${escapeHtml(pair.left)}</span>
              <select data-match-left="${escapeAttr(pair.left)}" ${checked ? "disabled" : ""}>
                <option value="">Choose match</option>
                ${targets
                  .map(
                    (target) =>
                      `<option value="${escapeAttr(target)}" ${target === value ? "selected" : ""}>${escapeHtml(target)}</option>`,
                  )
                  .join("")}
              </select>
              ${checked ? `<small>${correct ? "Correct" : `Answer: ${escapeHtml(pair.right)}`}</small>` : ""}
            </label>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderAnswer(question, option, index, selected, checked) {
  const selectedClass = selected.includes(option) ? "selected" : "";
  const correctClass = checked && question.correctAnswers.includes(option) ? "correct" : "";
  const wrongClass = checked && selected.includes(option) && !question.correctAnswers.includes(option) ? "wrong" : "";

  return `
    <button class="answer ${selectedClass} ${correctClass} ${wrongClass}" type="button" data-option="${escapeAttr(option)}">
      <b>${String.fromCharCode(65 + index)}</b>
      <span>${escapeHtml(option)}</span>
    </button>
  `;
}

function renderQuestionAssets(question, includeAnswerAssets = false) {
  const hasMatching = (question.matchingPairs?.length ?? 0) > 0;
  const visibleTables = hasMatching ? [] : question.tables;
  const tables = visibleTables
    .map((table) => `
      <div class="table-wrap">
        <table>
          ${table
            .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell))}</td>`).join("")}</tr>`)
            .join("")}
        </table>
      </div>
    `)
    .join("");

  const code = question.codeBlocks
    .map((block) => `<pre><code>${escapeHtml(block)}</code></pre>`)
    .join("");

  const { exhibitImages } = splitMatchingImages(question);
  const visibleImages = hasMatching && !includeAnswerAssets ? exhibitImages : question.imageUrls;
  const images = visibleImages
    .map((url) => `<img class="question-image" src="${escapeAttr(url)}" alt="">`)
    .join("");

  return `${images}${tables}${code}`;
}

function renderExplanation(question, selected) {
  const correct = isCorrect(question, selected);
  const hasMatching = (question.matchingPairs?.length ?? 0) > 0;
  return `
    <section class="explanation ${correct ? "correct" : "wrong"}">
      <strong>${correct ? "Correct" : "Review this"}</strong>
      ${renderCorrectAnswerLine(question)}
      ${renderAnswerAssets(question)}
      <div>${formatExplanation(question.explanation)}</div>
    </section>
  `;
}

function renderCorrectAnswerLine(question) {
  const hasMatching = (question.matchingPairs?.length ?? 0) > 0;
  return `<p class="correct-answer">${
    hasMatching ? "Review the correct matches below." : question.correctAnswers.map(escapeHtml).join(" · ")
  }</p>`;
}

function renderAnswerAssets(question) {
  if ((question.matchingPairs?.length ?? 0) === 0) return "";
  const { answerImages } = splitMatchingImages(question);
  if (answerImages.length === 0) return "";

  return `
    <div class="answer-assets">
      ${answerImages.map((url) => `<img class="question-image" src="${escapeAttr(url)}" alt="">`).join("")}
    </div>
  `;
}

function renderExamResult(score) {
  const missedQuestions =
    state.session?.questions.filter((question) => !isCorrect(question, selectedFor(question))) ?? [];

  return `
    <section class="result-card">
      <span class="eyebrow">Result</span>
      <h2>${score.percent}%</h2>
      <p>${score.correct} correct · ${score.wrong} missed · ${score.total} total</p>
      <div class="hero-actions">
        <button class="primary" type="button" data-start="exam">New exam</button>
        <button class="secondary" type="button" data-action="practice-misses" ${score.wrong === 0 ? "disabled" : ""}>Practice misses</button>
      </div>
    </section>
    ${
      missedQuestions.length
        ? `<section class="missed-list">
            <h2 class="section-title">Missed</h2>
            ${missedQuestions
              .map(
                (question) => `
                  <article class="missed-item">
                    <strong>${escapeHtml(question.question)}</strong>
                    ${renderCorrectAnswerLine(question)}
                    <details open>
                      <summary>Explanation</summary>
                      <div>${formatExplanation(question.explanation)}</div>
                    </details>
                  </article>
                `,
              )
              .join("")}
          </section>`
        : `<section class="missed-list">
            <h2 class="section-title">Clean exam</h2>
            <p>No missed questions in this attempt.</p>
          </section>`
    }
  `;
}

function renderStats() {
  return `
    <section class="topbar">
      <div>
        <h1>Stats</h1>
        <p>${state.saveError || progressSaveLabel()}</p>
      </div>
      <button class="secondary desktop-only" type="button" data-action="reset-progress">Reset</button>
    </section>
    <section class="content">
      <section class="save-panel">
        <div>
          <strong>Local progress</strong>
          <span>${progressSaveLabel()}</span>
        </div>
        <div class="hero-actions compact">
          <button class="secondary" type="button" data-action="export-progress">Export</button>
          <label class="secondary import-button">
            Import
            <input type="file" accept="application/json" data-import-progress>
          </label>
        </div>
      </section>
      <div class="stats-list">
        ${decks
          .filter((deck) => deck.type !== "all")
          .map((deck) => {
            const progress = getLearningSummary(deck, state.progress);
            return `
              <div class="stat-row">
                <div>
                  <strong>${deck.title}</strong>
                  <small>${progress.seen}/${deck.count} seen · ${progress.due} due · ${progress.weak} weak · ${progress.mastered} mastered</small>
                  <span class="progress-track"><i style="width: ${progress.masteryPercent}%"></i></span>
                </div>
                <span>${progress.percent}%</span>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function progressSaveLabel() {
  if (state.saveError) return state.saveError;
  if (!state.savedAt) return "Progress is saved locally on this device";

  return `Saved locally ${new Date(state.savedAt).toLocaleString()}`;
}

function formatExplanation(explanation) {
  if (!explanation) return "<p>No explanation provided.</p>";

  return explanation
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${inlineMarkdown(paragraph)}</p>`)
    .join("");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function decodeAttr(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function wireEvents() {
  app.querySelectorAll("[data-screen]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.screen));
  });

  app.querySelectorAll("[data-deck]").forEach((button) => {
    button.addEventListener("click", () => selectDeck(button.dataset.deck));
  });

  app.querySelectorAll("[data-bank]").forEach((button) => {
    button.addEventListener("click", () => selectBank(button.dataset.bank));
  });

  app.querySelectorAll("[data-start]").forEach((button) => {
    button.addEventListener("click", () => startSession(button.dataset.start));
  });

  app.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => toggleAnswer(decodeAttr(button.dataset.option ?? "")));
  });

  app.querySelectorAll("[data-match-left]").forEach((select) => {
    select.addEventListener("change", () =>
      setMatchingAnswer(decodeAttr(select.dataset.matchLeft ?? ""), decodeAttr(select.value)),
    );
  });

  app.querySelectorAll("[data-import-progress]").forEach((input) => {
    input.addEventListener("change", () => importProgress(input.files?.[0]));
  });

  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "reveal") revealPracticeAnswer();
      if (action === "next") nextQuestion();
      if (action === "previous") previousQuestion();
      if (action === "submit-exam") submitExam();
      if (action === "practice-misses") restartExamMisses();
      if (action === "reset-progress") resetProgress();
      if (action === "export-progress") exportProgress();
      if (action === "start-focus") startFocusSession();
      if (action === "review-due") startDueReview();
      if (action === "review-weak") startWeakReview();
      if (action === "learn-new") startNewCards();
      if (action === "full-exam") startFullExam();
    });
  });
}

render();
