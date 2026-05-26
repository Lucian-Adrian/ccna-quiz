import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildSession,
  createDecks,
  getRecommendedDeck,
  getWeakQuestions,
  isCorrect,
  scoreSession,
} from "../src/decks.js";

const moduleSources = {
  "m1-3": [
    { number: 1, question: "Q1", options: ["a", "b"], correct_answers: ["a"] },
    { number: 2, question: "Q2", options: ["c", "d"], correct_answers: ["c"] },
  ],
  "m4-7": [{ number: 1, question: "Q3", options: ["e", "f"], correct_answers: ["f"] }],
  "m8-10": [{ number: 1, question: "Q4", options: ["g", "h"], correct_answers: ["g"] }],
  "m11-13": [{ number: 1, question: "Q5", options: ["i", "j"], correct_answers: ["j"] }],
  "m14-15": [{ number: 1, question: "Q6", options: ["k", "l"], correct_answers: ["k"] }],
  "m16-17": [{ number: 1, question: "Q7", options: ["m", "n"], correct_answers: ["n"] }],
};

test("creates module and midterm decks from module sources", () => {
  const decks = createDecks(moduleSources);
  const byId = new Map(decks.map((deck) => [deck.id, deck]));

  assert.equal(byId.get("all").count, 7);
  assert.equal(byId.get("midterm-1").count, 3);
  assert.equal(byId.get("midterm-2").count, 4);
  assert.equal(byId.get("m1-3").questions[0].sourceTitle, "Modules 1-3");
});

test("exam sessions are limited and deterministic", () => {
  const [deck] = createDecks(moduleSources);
  const first = buildSession(deck, { mode: "exam", limit: 3, seed: 123 });
  const second = buildSession(deck, { mode: "exam", limit: 3, seed: 123 });

  assert.equal(first.questions.length, 3);
  assert.deepEqual(
    first.questions.map((question) => question.id),
    second.questions.map((question) => question.id),
  );
});

test("exam sessions skip unanswerable study cards", () => {
  const [deck] = createDecks({
    "m1-3": [
      { number: 1, question: "Study", options: [], correct_answers: [] },
      { number: 2, question: "Choice", options: ["a", "b"], correct_answers: ["a"] },
    ],
  });
  const session = buildSession(deck, { mode: "exam", limit: 10, seed: 1 });

  assert.equal(session.questions.length, 1);
  assert.equal(session.questions[0].question, "Choice");
});

test("scores single and multi-answer selections", () => {
  const question = {
    id: "q1",
    correctAnswers: ["first", "second"],
  };

  assert.equal(isCorrect(question, ["second", "first"]), true);
  assert.equal(isCorrect(question, ["first"]), false);

  assert.deepEqual(scoreSession([question], { q1: ["second", "first"] }), {
    total: 1,
    correct: 1,
    wrong: 0,
    percent: 100,
  });
});

test("finds weak questions by wrong attempts and low accuracy", () => {
  const [deck] = createDecks(moduleSources);
  const weak = getWeakQuestions(deck, {
    "m1-3-1": { seen: 3, correct: 1, wrong: 2 },
    "m1-3-2": { seen: 5, correct: 5, wrong: 0 },
    "m4-7-1": { seen: 1, correct: 0, wrong: 1 },
  });

  assert.deepEqual(
    weak.map((question) => question.id),
    ["m4-7-1", "m1-3-1"],
  );
});

test("recommends the least covered module deck before aggregate decks", () => {
  const decks = createDecks(moduleSources);
  const recommended = getRecommendedDeck(decks, {
    "m1-3-1": { seen: 1, correct: 1, wrong: 0 },
    "m1-3-2": { seen: 1, correct: 1, wrong: 0 },
    "m4-7-1": { seen: 1, correct: 1, wrong: 0 },
  });

  assert.equal(recommended.id, "m8-10");
});
