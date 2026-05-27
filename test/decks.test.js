import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildSmartReview,
  buildSession,
  createDecks,
  formatMatchingAnswer,
  getDueQuestions,
  getLearningSummary,
  getNewQuestions,
  getRecommendedDeck,
  getWeakQuestions,
  inferMatchingPairs,
  isCorrect,
  scheduleProgress,
  scoreSession,
  splitMatchingImages,
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

test("hydrates table-only matching questions as answerable pairs", () => {
  const rawQuestion = {
    number: 1,
    question: "Refer to the exhibit. Match the network with the correct IP address.",
    options: [],
    correct_answers: [],
    tables: [
      [
        ["Network A", "192.168.0.128 /25"],
        ["Network B", "192.168.0.0 /26"],
      ],
    ],
  };

  const pairs = inferMatchingPairs(rawQuestion);
  const [deck] = createDecks({ "m1-3": [rawQuestion] });
  const [question] = deck.questions;

  assert.deepEqual(pairs, [
    { left: "Network A", right: "192.168.0.128 /25" },
    { left: "Network B", right: "192.168.0.0 /26" },
  ]);
  assert.deepEqual(question.correctAnswers, [
    "Network A => 192.168.0.128 /25",
    "Network B => 192.168.0.0 /26",
  ]);
  assert.equal(isCorrect(question, [formatMatchingAnswer("Network B", "192.168.0.0 /26"), formatMatchingAnswer("Network A", "192.168.0.128 /25")]), true);
  assert.equal(buildSession(deck, { mode: "exam", limit: 10, seed: 1 }).questions.length, 1);
});

test("splits matching images into exhibit and answer assets", () => {
  assert.deepEqual(
    splitMatchingImages({
      matchingPairs: [{ left: "A", right: "B" }],
      imageUrls: ["answer.jpg"],
    }),
    { exhibitImages: [], answerImages: ["answer.jpg"] },
  );

  assert.deepEqual(
    splitMatchingImages({
      matchingPairs: [{ left: "A", right: "B" }],
      imageUrls: ["exhibit.png", "answer.jpg"],
    }),
    { exhibitImages: ["exhibit.png"], answerImages: ["answer.jpg"] },
  );

  assert.deepEqual(splitMatchingImages({ imageUrls: ["ordinary.png"] }), {
    exhibitImages: ["ordinary.png"],
    answerImages: [],
  });
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

test("summarizes unseen, weak, and mastered learning state", () => {
  const deck = createDecks(moduleSources).find((item) => item.id === "all");
  const [mastered, weak, unseen] = deck.questions;
  const progress = {
    [mastered.id]: { seen: 2, correct: 2, wrong: 0 },
    [weak.id]: { seen: 3, correct: 1, wrong: 2 },
  };

  const summary = getLearningSummary(deck, progress);

  assert.equal(summary.seen, 2);
  assert.equal(summary.mastered, 1);
  assert.equal(summary.weak, 1);
  assert.equal(summary.unseen, deck.count - 2);
  assert.equal(summary.due, 1);
  assert.equal(summary.masteryPercent, Math.round((1 / deck.count) * 100));
  assert.equal(unseen.id in progress, false);
});

test("schedules correct answers into the future and misses immediately", () => {
  const now = Date.UTC(2026, 0, 1);

  const firstCorrect = scheduleProgress({}, true, now);
  const miss = scheduleProgress(firstCorrect, false, now + 1000);
  const secondCorrect = scheduleProgress(firstCorrect, true, now + 2000);

  assert.equal(firstCorrect.seen, 1);
  assert.equal(firstCorrect.streak, 1);
  assert.equal(firstCorrect.intervalDays, 1);
  assert.equal(firstCorrect.dueAt, now + 24 * 60 * 60 * 1000);
  assert.equal(miss.streak, 0);
  assert.equal(miss.intervalDays, 0);
  assert.equal(miss.dueAt, now + 1000);
  assert.equal(secondCorrect.intervalDays > firstCorrect.intervalDays, true);
});

test("builds smart review from due, weak, then new questions", () => {
  const deck = createDecks(moduleSources).find((item) => item.id === "all");
  const now = Date.UTC(2026, 0, 10);
  const progress = {
    "m1-3-1": { seen: 2, correct: 2, wrong: 0, dueAt: now - 1000 },
    "m1-3-2": { seen: 2, correct: 1, wrong: 1, dueAt: now + 100000 },
  };

  assert.deepEqual(
    getDueQuestions(deck, progress, now).map((question) => question.id),
    ["m1-3-1"],
  );
  assert.equal(getNewQuestions(deck, progress).length, deck.count - 2);
  const smartReview = buildSmartReview(deck, progress, { limit: 3, now, seed: 1 }).map((question) => question.id);
  assert.deepEqual(smartReview.slice(0, 2), ["m1-3-1", "m1-3-2"]);
  assert.equal(smartReview.length, 3);
  assert.equal(progress[smartReview[2]]?.seen, undefined);
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
