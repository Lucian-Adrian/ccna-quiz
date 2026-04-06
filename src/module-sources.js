import manifest from "../modules/index.json";

const moduleFiles = import.meta.glob("../modules/mod*.json", {
  eager: true,
  import: "default",
});

export const MODULE_SOURCES = manifest.modules.map((entry) => {
  const data = moduleFiles[`../modules/${entry.file}`];

  if (!data) {
    throw new Error(`Missing module data for ${entry.file}`);
  }

  return {
    id: entry.id,
    label: entry.displayName,
    title: entry.title,
    quizTitle: entry.quizTitle,
    sourceMarkdown: entry.sourceMarkdown,
    cards: data.cards,
  };
});
