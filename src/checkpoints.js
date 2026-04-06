function normalizeText(text = "") {
  return String(text).replace(/\s+/g, " ").trim();
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
  const answerIndices = normalizeAnswerIndices(question, options);
  const answers = answerIndices
    .map((index) => options[index])
    .filter(Boolean)
    .map((option) => ({
      index: option.index,
      text: option.text,
      explanation: {
        eli5: normalizeText(question.explanation?.eli5),
        ccna: normalizeText(question.explanation?.ccna),
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
    explanation: {
      eli5: normalizeText(question.explanation?.eli5),
      ccna: normalizeText(question.explanation?.ccna),
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
