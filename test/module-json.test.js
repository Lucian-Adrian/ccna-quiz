import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";
import { getCardOverride } from "../src/answer-key.js";
import { MODULE_THEORY } from "../src/module-theory.js";
import { parseQuizMarkdown } from "../src/parser.js";

const modules = [
  ["mod1", "../modules/mod1.md", "../modules/mod1.json"],
  ["mod2", "../modules/mod2.md", "../modules/mod2.json"],
  ["mod3", "../modules/mod3.md", "../modules/mod3.json"],
  ["mod4", "../modules/mod4.md", "../modules/mod4.json"],
  ["mod5", "../modules/mod5.md", "../modules/mod5.json"],
  ["mod6", "../modules/mod6.md", "../modules/mod6.json"],
  ["mod7", "../modules/mod7.md", "../modules/mod7.json"],
];

function getQuizTitle(markdown) {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find(Boolean);
}

function buildExpectedModule(moduleId, markdown) {
  const theory = MODULE_THEORY[moduleId];
  const cards = parseQuizMarkdown(markdown, `${moduleId}.md`);

  return {
    schemaVersion: 2,
    moduleId,
    displayName: `Module ${moduleId.slice(3)}`,
    title: theory.title,
    quizTitle: getQuizTitle(markdown),
    sourceMarkdown: `${moduleId}.md`,
    cards: cards.map((card) => {
      const override = getCardOverride(moduleId, card.number);
      const answerIndices = override?.answerIndices ?? card.answers.map((answer) => card.options.indexOf(answer));
      const explanation = (override?.explanation ?? card.explanation).replace(/\s+/g, " ").trim();
      const makeEli5 = (answerText) => {
        const base = explanation
          .replace(/^Reference Topic\s+\d+(?:\.\d+)*\.?\s*/i, "")
          .replace(/\s+/g, " ")
          .trim();
        const lead = card.selectionCount > 1 ? "this choice is correct" : "this answer is correct";

        if (!base) {
          return `For "${card.question}", ${lead}: "${answerText}".`;
        }

        const sentence = base.endsWith(".") ? base : `${base}.`;
        return `For "${card.question}", ${lead}: "${answerText}". In simple terms, ${sentence.charAt(0).toLowerCase()}${sentence.slice(1)}`;
      };
      const makeCardEli5 = () => {
        const base = explanation
          .replace(/^Reference Topic\s+\d+(?:\.\d+)*\.?\s*/i, "")
          .replace(/\s+/g, " ")
          .trim();
        const lead = card.selectionCount > 1 ? "these choices are correct" : "this answer is correct";

        if (!base) {
          return `For "${card.question}", ${lead}`;
        }

        const sentence = base.endsWith(".") ? base : `${base}.`;
        return `For "${card.question}", ${lead} because ${sentence.charAt(0).toLowerCase()}${sentence.slice(1)}`;
      };

      return {
        id: `${moduleId}-${card.number}`,
        number: card.number,
        question: card.question,
        options: card.options,
        selectionCount: card.selectionCount,
        answerIndices,
        answers: answerIndices.map((index) => ({
          index,
          text: card.options[index],
          explanation: {
            eli5: makeEli5(card.options[index]),
            ccna: explanation,
          },
        })),
        explanation: {
          eli5: makeCardEli5(),
          ccna: explanation,
        },
      };
    }),
  };
}

test("exports the modules as machine-friendly JSON", () => {
  for (const [moduleId, markdownPath, jsonPath] of modules) {
    const markdown = fs.readFileSync(new URL(markdownPath, import.meta.url), "utf8");
    const actual = JSON.parse(fs.readFileSync(new URL(jsonPath, import.meta.url), "utf8"));
    const expected = buildExpectedModule(moduleId, markdown);

    assert.deepEqual(actual, expected, `${moduleId} JSON should match the markdown source`);
  }
});

test("keeps a matching manifest for all migrated modules", () => {
  const manifest = JSON.parse(fs.readFileSync(new URL("../modules/index.json", import.meta.url), "utf8"));

  assert.equal(manifest.schemaVersion, 2);
  assert.equal(manifest.modules.length, modules.length);
  assert.deepEqual(
    manifest.modules.map((entry) => entry.id),
    modules.map(([moduleId]) => moduleId),
  );
  assert.deepEqual(
    manifest.modules.map((entry) => entry.file),
    modules.map(([, , jsonPath]) => jsonPath.split("/").pop()),
  );
  assert.deepEqual(
    manifest.modules.map((entry) => entry.schemaVersion),
    Array(modules.length).fill(2),
  );
});
