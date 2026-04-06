import { hydrateCards } from "./study.js";
import { getModuleTheory } from "./module-theory.js";

export function theorySectionsForModule(moduleId) {
  return getModuleTheory(moduleId);
}

export function buildModuleLibrary(moduleSources) {
  const modules = moduleSources.map((module) => {
    const theory = getModuleTheory(module.id);
    const cards = hydrateCards(module.id, theory?.title ?? module.label, module.markdown);

    return {
      ...module,
      title: theory?.title ?? module.label,
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
