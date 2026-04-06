import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCardOverride } from "../src/answer-key.js";
import { MODULE_THEORY } from "../src/module-theory.js";
import { parseQuizMarkdown } from "../src/parser.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const modules = [
  "mod1",
  "mod2",
  "mod3",
  "mod4",
  "mod5",
  "mod6",
  "mod7",
];

function getQuizTitle(markdown) {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find(Boolean);
}

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function getFormalExplanation(card) {
  const explanation = normalizeText(card.explanation);
  if (!explanation) {
    return `The correct answer is "${card.options[card.answerIndices?.[0] ?? 0] ?? ""}".`;
  }

  return explanation;
}

function getEli5Explanation(question, answerText, formalExplanation, selectionCount) {
  const lead = selectionCount > 1 ? `For "${question}", this choice is correct` : `For "${question}", this answer is correct`;
  const base = formalExplanation
    .replace(/^Reference Topic\s+\d+(?:\.\d+)*\.?\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();

  const sentence = base.endsWith(".") ? base : `${base}.`;
  const prefix = `${lead}: "${answerText}".`;

  if (!base) {
    return `${lead}: "${answerText}" matches the question.`;
  }

  return `${prefix} In simple terms, ${sentence.charAt(0).toLowerCase()}${sentence.slice(1)}`;
}

function getCardEli5(question, selectionCount, formalExplanation) {
  const lead = selectionCount > 1 ? `For "${question}", these choices are correct` : `For "${question}", this answer is correct`;
  const base = formalExplanation
    .replace(/^Reference Topic\s+\d+(?:\.\d+)*\.?\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!base) {
    return lead;
  }

  const sentence = base.endsWith(".") ? base : `${base}.`;
  return `${lead} because ${sentence.charAt(0).toLowerCase()}${sentence.slice(1)}`;
}

function buildModuleData(moduleId) {
  const markdownPath = path.join(repoRoot, "modules", `${moduleId}.md`);
  const markdown = fs.readFileSync(markdownPath, "utf8");
  const cards = parseQuizMarkdown(markdown, `${moduleId}.md`);
  const theory = MODULE_THEORY[moduleId];
  const quizTitle = getQuizTitle(markdown);

  return {
    schemaVersion: 2,
    moduleId,
    displayName: `Module ${moduleId.slice(3)}`,
    title: theory.title,
    quizTitle,
    sourceMarkdown: `${moduleId}.md`,
    cards: cards.map((card) => {
      const override = getCardOverride(moduleId, card.number);
      const answerIndices = override?.answerIndices ?? card.answers.map((answer) => card.options.indexOf(answer));
      const formalExplanation = getFormalExplanation({
        ...card,
        explanation: override?.explanation ?? card.explanation,
        answerIndices,
        options: card.options,
      });
      const answers = answerIndices.map((index) => {
        const answerText = card.options[index];

        return {
          index,
          text: answerText,
          explanation: {
            eli5: getEli5Explanation(card.question, answerText, formalExplanation, card.selectionCount),
            ccna: formalExplanation,
          },
        };
      });

      return {
        id: `${moduleId}-${card.number}`,
        number: card.number,
        question: card.question,
        options: card.options,
        selectionCount: card.selectionCount,
        answerIndices,
        answers,
        explanation: {
          eli5: getCardEli5(card.question, card.selectionCount, formalExplanation),
          ccna: formalExplanation,
        },
      };
    }),
  };
}

const manifest = {
  schemaVersion: 2,
  modules: modules.map((moduleId) => {
    const data = buildModuleData(moduleId);

    return {
      id: data.moduleId,
      displayName: data.displayName,
      title: data.title,
      quizTitle: data.quizTitle,
      file: `${moduleId}.json`,
      sourceMarkdown: data.sourceMarkdown,
      cardCount: data.cards.length,
      schemaVersion: data.schemaVersion,
    };
  }),
};

for (const moduleId of modules) {
  const data = buildModuleData(moduleId);
  const outputPath = path.join(repoRoot, "modules", `${moduleId}.json`);
  fs.writeFileSync(outputPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

const manifestPath = path.join(repoRoot, "modules", "index.json");
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Wrote ${modules.length} module JSON files and modules/index.json`);
