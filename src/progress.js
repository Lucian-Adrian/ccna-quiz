import { hydrateCards } from "./study.js";
import { getModuleTheory } from "./module-theory.js";
import { formatQuestionExplanations } from "./quiz-content.js";

export function theorySectionsForModule(moduleId) {
  return getModuleTheory(moduleId);
}

function normalizeText(text = "") {
  return String(text).replace(/\s+/g, " ").trim();
}

function normalizeStructuredAnswers(card, ccnaExplanation) {
  const formatted = formatQuestionExplanations({
    question: card.question,
    selectionCount: card.selectionCount,
    answerTexts: Array.isArray(card.answers)
      ? card.answers.map((answer) => (typeof answer === "string" ? answer : answer.text)).filter(Boolean)
      : [],
    explanation: {
      eli5: card.explanation?.eli5,
      ccna: ccnaExplanation,
    },
  });

  if (Array.isArray(card.answers) && card.answers.length > 0 && typeof card.answers[0] === "object") {
    return card.answers.map((answer) => ({
      index: answer.index,
      text: answer.text,
      explanation: {
        eli5: normalizeText(answer.explanation?.eli5) || formatted.answerEli5,
        ccna: normalizeText(answer.explanation?.ccna) || ccnaExplanation,
      },
    }));
  }

  return (card.answers ?? []).map((answerText) => {
    const index = card.options.indexOf(answerText);

    return {
      index,
      text: answerText,
      explanation: {
        eli5: formatted.answerEli5,
        ccna: ccnaExplanation,
      },
    };
  });
}

function normalizeCard(moduleId, moduleTitle, card) {
  const ccnaExplanation = normalizeText(
    typeof card.explanation === "object" ? card.explanation?.ccna : card.explanation,
  );
  const answers = normalizeStructuredAnswers(card, ccnaExplanation);
  const formatted = formatQuestionExplanations({
    question: card.question,
    selectionCount: card.selectionCount,
    answerTexts: answers.map((answer) => answer.text),
    explanation: {
      eli5: card.explanation?.eli5,
      ccna: ccnaExplanation,
    },
  });

  return {
    ...card,
    id: card.id ?? `${moduleId}-${card.number}`,
    moduleId,
    module: moduleTitle,
    answerIndices: card.answerIndices ?? answers.map((answer) => answer.index).filter((index) => index >= 0),
    answers,
    explanation: {
      eli5: formatted.eli5,
      ccna: formatted.ccna,
    },
  };
}

export function buildModuleLibrary(moduleSources) {
  const modules = moduleSources.map((module) => {
    const theory = getModuleTheory(module.id);
    const title = module.title ?? theory?.title ?? module.label;
    const rawCards = Array.isArray(module.cards)
      ? module.cards
      : hydrateCards(module.id, title, module.markdown);
    const cards = rawCards.map((card) => normalizeCard(module.id, title, card));

    return {
      ...module,
      title,
      theory,
      cards,
    };
  });

  return {
    modules,
    cards: modules.flatMap((module) => module.cards),
  };
}

export function getEmptyProgressEntry() {
  return {
    attempts: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    lastChoice: [],
    lastMode: "learn",
    lastSeenAt: null,
  };
}

export function getProgressEntry(progress, cardId) {
  return progress[cardId] ?? getEmptyProgressEntry();
}

export function recordAttempt(progress, { cardId, isCorrect, selectedOptions, mode, now = new Date().toISOString() }) {
  const current = getProgressEntry(progress, cardId);

  return {
    ...progress,
    [cardId]: {
      attempts: current.attempts + 1,
      correct: current.correct + (isCorrect ? 1 : 0),
      wrong: current.wrong + (isCorrect ? 0 : 1),
      streak: isCorrect ? current.streak + 1 : 0,
      lastChoice: [...selectedOptions],
      lastMode: mode,
      lastSeenAt: now,
    },
  };
}

export function summarizeModules(cards, progress) {
  const summary = {};

  for (const card of cards) {
    if (!summary[card.moduleId]) {
      summary[card.moduleId] = {
        questions: 0,
        attempted: 0,
        correct: 0,
        wrong: 0,
        accuracy: 0,
        mastered: 0,
      };
    }

    const bucket = summary[card.moduleId];
    const entry = progress[card.id];
    bucket.questions += 1;

    if (!entry) {
      continue;
    }

    if ((entry.attempts ?? entry.seen ?? 0) > 0) {
      bucket.attempted += 1;
    }

    bucket.correct += entry.correct ?? 0;
    bucket.wrong += entry.wrong ?? 0;

    const streak = entry.streak ?? 0;
    if (streak >= 3) {
      bucket.mastered += 1;
    }
  }

  for (const bucket of Object.values(summary)) {
    const totalAttempts = bucket.correct + bucket.wrong;
    bucket.accuracy = totalAttempts > 0 ? Math.round((bucket.correct / totalAttempts) * 100) : 0;
  }

  return summary;
}

export function getReviewQueue(cards, progress) {
  return cards
    .filter((card) => (progress[card.id]?.wrong ?? 0) > 0)
    .sort((left, right) => {
      const leftEntry = progress[left.id] ?? getEmptyProgressEntry();
      const rightEntry = progress[right.id] ?? getEmptyProgressEntry();

      return (rightEntry.wrong - leftEntry.wrong)
        || ((leftEntry.correct || 0) - (rightEntry.correct || 0))
        || String(leftEntry.lastSeenAt ?? "").localeCompare(String(rightEntry.lastSeenAt ?? ""))
        || left.moduleId.localeCompare(right.moduleId)
        || left.number - right.number;
    });
}

export function buildStatsSnapshot(cards, progress) {
  const totals = {
    questions: cards.length,
    reviewed: 0,
    attempts: 0,
    correct: 0,
    wrong: 0,
    mastered: 0,
    struggling: 0,
    untouched: 0,
    accuracy: 0,
  };

  const summaryByModule = summarizeModules(cards, progress);
  const modules = Object.entries(summaryByModule);

  for (const card of cards) {
    const entry = progress[card.id];

    if (!entry || (entry.attempts ?? 0) === 0) {
      totals.untouched += 1;
      continue;
    }

    totals.reviewed += 1;
    totals.attempts += entry.attempts ?? 0;
    totals.correct += entry.correct ?? 0;
    totals.wrong += entry.wrong ?? 0;

    if ((entry.streak ?? 0) >= 3) {
      totals.mastered += 1;
    }

    if ((entry.wrong ?? 0) > (entry.correct ?? 0)) {
      totals.struggling += 1;
    }
  }

  const denominator = totals.correct + totals.wrong;
  totals.accuracy = denominator > 0 ? Math.round((totals.correct / denominator) * 100) : 0;

  const weakest = modules
    .slice()
    .sort((left, right) => (left[1].accuracy - right[1].accuracy) || (right[1].wrong - left[1].wrong) || left[0].localeCompare(right[0]))[0];
  const strongest = modules
    .slice()
    .sort((left, right) => (right[1].accuracy - left[1].accuracy) || (left[1].wrong - right[1].wrong) || left[0].localeCompare(right[0]))[0];

  return {
    totals,
    weakestModuleId: weakest?.[0] ?? null,
    strongestModuleId: strongest?.[0] ?? null,
    reviewCount: getReviewQueue(cards, progress).length,
  };
}
