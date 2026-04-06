function normalizeText(text = "") {
  return String(text).replace(/\s+/g, " ").trim();
}

export function isPlaceholderExplanation(text = "") {
  const normalized = normalizeText(text).toLowerCase();
  return !normalized
    || normalized === "the correct answers are the correct answer."
    || normalized === "in simple terms, the correct answers are the correct answer."
    || normalized === "...."
    || normalized.includes("practice the exhibit");
}

function buildNaturalLead(selectionCount, answerTexts) {
  if (!answerTexts.length) {
    return selectionCount > 1 ? "The verified choices fit this prompt." : "The verified answer fits this prompt.";
  }

  const joined = answerTexts.join(", ");
  return selectionCount > 1
    ? `The correct choices are ${joined}.`
    : `The correct answer is ${joined}.`;
}

function stripGeneratedPrefix(text, question) {
  const normalized = normalizeText(text);
  if (!normalized.startsWith(`For "${question}"`)) {
    return rewriteGenericLead(normalized);
  }

  const markerIndex = normalized.toLowerCase().indexOf("in simple terms,");
  if (markerIndex >= 0) {
    return normalized.slice(markerIndex + "in simple terms,".length).trim();
  }

  const becauseIndex = normalized.toLowerCase().indexOf(" because ");
  if (becauseIndex >= 0) {
    return normalized.slice(becauseIndex + " because ".length).trim();
  }

  return rewriteGenericLead(normalized);
}

function rewriteGenericLead(text) {
  const normalized = normalizeText(text);

  if (/^In simple terms,\s+the correct answers are\s+/i.test(normalized)) {
    return normalized.replace(/^In simple terms,\s+the correct answers are\s+/i, "The correct answers are ");
  }

  if (/^In simple terms,\s+the answer is\s+/i.test(normalized)) {
    return normalized.replace(/^In simple terms,\s+the answer is\s+/i, "The correct answer is ");
  }

  return normalized;
}

function buildAnswerEli5(selectionCount, answerTexts, ccnaText) {
  const lead = buildNaturalLead(selectionCount, answerTexts);
  if (!ccnaText) {
    return lead;
  }

  const sentence = ccnaText.endsWith(".") ? ccnaText : `${ccnaText}.`;
  return `${lead} ${sentence}`.trim();
}

export function formatQuestionExplanations({ question, selectionCount, answerTexts = [], explanation = {} }) {
  const ccna = normalizeText(explanation.ccna ?? explanation.sourceText ?? "");
  const rawEli5 = stripGeneratedPrefix(explanation.eli5 ?? "", question);
  const synthesizedEli5 = buildAnswerEli5(selectionCount, answerTexts, ccna);
  const eli5 = isPlaceholderExplanation(rawEli5) ? synthesizedEli5 : rawEli5;
  const answerEli5 = answerTexts.length
    ? buildAnswerEli5(1, [answerTexts[0]], ccna)
    : synthesizedEli5;

  return {
    eli5,
    ccna,
    answerEli5,
  };
}

export function isChoiceSelectionComplete(item, selectedOptions) {
  const required = Math.max(item.selectionCount ?? 1, 1);
  return selectedOptions.length === required;
}

export function getLinearNavigation(cards, selectedCardId) {
  const index = Math.max(cards.findIndex((card) => card.id === selectedCardId), 0);
  const previousId = cards[index - 1]?.id ?? null;
  const nextId = cards[index + 1]?.id ?? null;

  return {
    previousId,
    nextId,
    index,
    total: cards.length,
    isFirst: index === 0,
    isLast: index >= cards.length - 1,
  };
}

export function inferAnswerIndicesFromExplanation(options, explanationText = "") {
  const normalizedExplanation = normalizeText(explanationText).toLowerCase();

  return options
    .map((option, index) => ({ index, text: typeof option === "string" ? option : option.text }))
    .filter((option) => normalizeText(option.text).length > 0)
    .filter((option) => normalizedExplanation.includes(normalizeText(option.text).toLowerCase()))
    .map((option) => option.index);
}
