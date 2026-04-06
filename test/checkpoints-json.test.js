import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, relativePath), "utf8"));
}

test("checkpoint 1 exports 76 merged questions with local assets", () => {
  const check1 = readJson("modules/check1.json");

  assert.equal(check1.totalQuestions, 76);
  assert.equal(check1.questions.length, 76);

  const q60 = check1.questions.find((question) => question.number === 60);
  assert.ok(q60, "question 60 should be present");
  assert.deepEqual(q60.correctOptions, ["SOHO network"]);
  assert.equal(q60.explanation?.topic, "1.4.1");

  const q18 = check1.questions.find((question) => question.number === 18);
  assert.ok(q18?.media?.length, "question 18 should have a local exhibit image");
  for (const media of q18.media) {
    assert.ok(media.path.startsWith("assets/check1/"));
    assert.ok(fs.existsSync(path.join(repoRoot, "modules", media.path)));
  }
});

test("checkpoint 2 exports 80 merged questions with local assets", () => {
  const check2 = readJson("modules/check2.json");

  assert.equal(check2.totalQuestions, 80);
  assert.equal(check2.questions.length, 80);

  const q52 = check2.questions.find((question) => question.number === 52);
  assert.ok(q52, "question 52 should be present");

  const q47 = check2.questions.find((question) => question.number === 47);
  assert.ok(q47?.media?.length, "question 47 should have a local PT asset image");
  for (const media of q47.media) {
    assert.ok(media.path.startsWith("assets/check2/"));
    assert.ok(fs.existsSync(path.join(repoRoot, "modules", media.path)));
  }
});
