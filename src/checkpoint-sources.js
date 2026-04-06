import manifest from "../modules/checkpoints-index.json";

const checkpointFiles = import.meta.glob("../modules/check*.json", {
  eager: true,
  import: "default",
});

const assetFiles = import.meta.glob("../modules/assets/**/*.{png,jpg,jpeg,webp,gif,svg}", {
  eager: true,
  import: "default",
});

export function resolveCheckpointAsset(assetPath) {
  const ref = `../modules/${assetPath}`;
  return assetFiles[ref] ?? assetPath;
}

export const CHECKPOINT_SOURCES = manifest.files.map((entry) => {
  const data = checkpointFiles[`../modules/${entry.file}`];

  if (!data) {
    throw new Error(`Missing checkpoint data for ${entry.file}`);
  }

  return {
    id: entry.id,
    title: entry.title,
    totalQuestions: entry.totalQuestions,
    questionsWithMedia: entry.questionsWithMedia,
    mediaItems: entry.mediaItems,
    questions: data.questions,
  };
});
