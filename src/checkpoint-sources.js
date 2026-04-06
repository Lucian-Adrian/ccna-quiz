import manifest from "../modules/checkpoints-index.json";

const checkpointFiles = import.meta.glob("../modules/check*.json", {
  import: "default",
});

const assetFiles = import.meta.glob("../modules/assets/**/*.{png,jpg,jpeg,webp,gif,svg}", {
  eager: true,
  import: "default",
});

export const CHECKPOINT_MANIFEST = manifest.files.map((entry) => ({
  id: entry.id,
  title: entry.title,
  file: entry.file,
  totalQuestions: entry.totalQuestions,
  questionsWithMedia: entry.questionsWithMedia,
  mediaItems: entry.mediaItems,
  assetsDir: entry.assetsDir,
}));

export function resolveCheckpointAsset(assetPath) {
  const ref = `../modules/${assetPath}`;
  return assetFiles[ref] ?? assetPath;
}

export async function loadCheckpointSources() {
  const files = await Promise.all(
    CHECKPOINT_MANIFEST.map(async (entry) => {
      const loader = checkpointFiles[`../modules/${entry.file}`];

      if (!loader) {
        throw new Error(`Missing checkpoint data for ${entry.file}`);
      }

      const data = await loader();

      return {
        id: entry.id,
        title: entry.title,
        totalQuestions: entry.totalQuestions,
        questionsWithMedia: entry.questionsWithMedia,
        mediaItems: entry.mediaItems,
        questions: data.questions,
      };
    }),
  );

  return files;
}
