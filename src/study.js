import { getCardOverride } from "./answer-key.js";
import { parseQuizMarkdown } from "./parser.js";

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

export function hydrateCards(moduleId, moduleLabel, markdown) {
  return parseQuizMarkdown(markdown, moduleLabel).map((card) => {
    const override = getCardOverride(moduleId, card.number);
    const answers = override?.answerIndices?.map((index) => card.options[index]).filter(Boolean) ?? card.answers;

    return {
      ...card,
      id: `${moduleId}-${card.number}`,
      moduleId,
      answers,
      explanation: override?.explanation ?? card.explanation,
    };
  });
}

export function getOptionState(card, selected, option, revealed) {
  const selectedLookup = new Set(selected.map(normalize));
  const answerLookup = new Set(card.answers.map(normalize));
  const normalizedOption = normalize(option);
  const isSelected = selectedLookup.has(normalizedOption);
  const isCorrect = revealed && answerLookup.has(normalizedOption);

  return {
    selected: isSelected,
    correct: isCorrect,
    wrong: revealed && isSelected && !isCorrect,
  };
}

export function summarizeProgress(cards, progress) {
  let mastered = 0;
  let needsWork = 0;
  let seen = 0;

  for (const card of cards) {
    const entry = progress[card.id];
    if (!entry) {
      continue;
    }

    if (entry.seen > 0) {
      seen += 1;
    }

    if (entry.streak >= 3) {
      mastered += 1;
    }

    if (entry.wrong > 0 && entry.streak === 0) {
      needsWork += 1;
    }
  }

  return { mastered, needsWork, seen };
}
