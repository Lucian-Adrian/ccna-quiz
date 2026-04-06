function normalizeText(text = "") {
  return String(text).replace(/\s+/g, " ").trim();
}

function isPlaceholderExplanation(text = "") {
  const normalized = normalizeText(text).toLowerCase();
  return normalized === "the correct answers are the correct answer."
    || normalized === "in simple terms, the correct answers are the correct answer.";
}

function buildFallbackExplanation(question, answerTexts) {
  if (answerTexts.length) {
    const answerLine = answerTexts.join(", ");
    return {
      eli5: `In simple terms, the verified answer is ${answerLine}. Use the CCNA note below to understand why that choice fits the prompt.`,
      ccna: `The source export did not include a clean explanation for this checkpoint item, but the verified answer is ${answerLine}. Review the prompt, the exhibit, and the surrounding CCNA theory before memorizing it.`,
    };
  }

  return {
    eli5: "This checkpoint export does not include a verified answer for this item yet. Use it as a theory prompt instead of trusting a random choice.",
    ccna: "The source material for this checkpoint item is missing a verified answer key. Keep the question for review, but verify it against the original checkpoint or course theory before using it as scored practice.",
  };
}

function checkpointOverride(checkpoint, question) {
  if (checkpoint.id === "check1" && question.number === 20) {
    return {
      answerIndices: [1],
      explanation: {
        eli5: "In simple terms, the answer is exit. The exit command moves you back one level in the Cisco IOS command hierarchy instead of jumping all the way out.",
        ccna: "The correct answer is exit. In Cisco IOS, exit returns the user to the previous command mode. End and Ctrl-Z jump back to privileged EXEC mode, while Ctrl-C stops the command currently in process.",
      },
    };
  }

  return null;
}

function getSelectionCount(question) {
  if (question.kind === "multiple_choice") {
    return question.correctOptionIndices?.length
      ?? question.answer?.correctOptionIndices?.length
      ?? question.correctOptions?.length
      ?? 1;
  }

  return 1;
}

function normalizeChoices(question) {
  return (question.options ?? []).map((option, index) => ({
    index,
    text: typeof option === "string" ? option : option.text,
    correct: typeof option === "object" ? Boolean(option.correct) : false,
  }));
}

function normalizeAnswerIndices(question, options) {
  if (Array.isArray(question.correctOptionIndices)) {
    return question.correctOptionIndices;
  }

  if (Array.isArray(question.answer?.correctOptionIndices)) {
    return question.answer.correctOptionIndices;
  }

  return options.filter((option) => option.correct).map((option) => option.index);
}

function normalizeMedia(media = [], resolveAssetUrl = (path) => path) {
  return media.map((item) => ({
    ...item,
    url: resolveAssetUrl(item.path),
  }));
}

function normalizeMatrix(activity = {}) {
  return {
    prompts: (activity.prompts ?? [])
      .slice()
      .sort((left, right) => left.position - right.position)
      .map((item) => item.text),
    choices: (activity.choices ?? [])
      .slice()
      .sort((left, right) => left.position - right.position)
      .map((item) => item.text),
    mappings: (activity.choices ?? []).map((choice) => ({
      text: choice.text,
      correctSlots: choice.correctSlots ?? [],
    })),
  };
}

export function normalizeCheckpointQuestion(checkpoint, question, resolveAssetUrl = (path) => path) {
  const options = normalizeChoices(question);
  const override = checkpointOverride(checkpoint, question);
  const answerIndices = override?.answerIndices ?? normalizeAnswerIndices(question, options);
  const answerTexts = answerIndices
    .map((index) => options[index]?.text)
    .filter(Boolean);
  const fallbackExplanation = buildFallbackExplanation(question, answerTexts);
  const rawEli5 = normalizeText(question.explanation?.eli5);
  const rawCcna = normalizeText(question.explanation?.ccna);
  const hasMatrixAnswer = question.kind === "matrix_sort" && Boolean(question.answer?.table?.rows?.length);
  const isVerified = answerIndices.length > 0 || hasMatrixAnswer;
  const eli5 = override?.explanation?.eli5 ?? (!rawEli5 || isPlaceholderExplanation(rawEli5) ? fallbackExplanation.eli5 : rawEli5);
  const ccna = override?.explanation?.ccna ?? (!rawCcna || isPlaceholderExplanation(rawCcna) ? fallbackExplanation.ccna : rawCcna);
  const answers = answerIndices
    .map((index) => options[index])
    .filter(Boolean)
    .map((option) => ({
      index: option.index,
      text: option.text,
      explanation: {
        eli5,
        ccna,
      },
    }));

  return {
    id: `${checkpoint.id}-${question.number}`,
    number: question.number,
    sourceType: "checkpoint",
    moduleId: checkpoint.id,
    module: checkpoint.title,
    checkpointId: checkpoint.id,
    checkpointTitle: checkpoint.title,
    question: normalizeText(question.question),
    kind: question.kind ?? "single_choice",
    selectionCount: getSelectionCount({
      ...question,
      correctOptionIndices: answerIndices,
    }),
    options: options.map((option) => option.text),
    answerIndices,
    answers,
    isVerified,
    explanation: {
      eli5,
      ccna,
    },
    media: normalizeMedia(question.media, resolveAssetUrl),
    answerTable: question.answer?.table ?? null,
    matrix: question.kind === "matrix_sort" ? normalizeMatrix(question.activity) : null,
    source: question.source ?? {},
  };
}

export function buildCheckpointLibrary(checkpointSources, resolveAssetUrl = (path) => path) {
  const checkpoints = checkpointSources.map((checkpoint) => {
    const questions = (checkpoint.questions ?? []).map((question) =>
      normalizeCheckpointQuestion(checkpoint, question, resolveAssetUrl),
    );

    return {
      ...checkpoint,
      questions,
    };
  });

  return {
    checkpoints,
    questions: checkpoints.flatMap((checkpoint) => checkpoint.questions),
  };
}
