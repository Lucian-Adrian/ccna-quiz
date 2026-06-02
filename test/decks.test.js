import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildSmartReview,
  buildBeginnerExplanation,
  buildSession,
  createCombinedDecks,
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

test("creates final and combined decks across question banks", () => {
  const itexamDecks = createDecks(moduleSources, {
    finalSources: {
      "practice-final": [{ number: 1, question: "PF", options: ["a"], correct_answers: ["a"] }],
      "final-exam": [{ number: 1, question: "FE", options: ["b"], correct_answers: ["b"] }],
    },
  });
  const infraDecks = createDecks(moduleSources, {
    bankId: "infra",
    bankTitle: "Infra",
    deckPrefix: "infra",
    sourcePrefix: "infra",
    finalSources: {
      "practice-final": [{ number: 1, question: "Infra PF", options: ["a"], correct_answers: ["a"] }],
      "final-exam": [{ number: 1, question: "Infra FE", options: ["b"], correct_answers: ["b"] }],
    },
  });
  const combinedDecks = createCombinedDecks([itexamDecks, infraDecks]);
  const byLogicalId = new Map(combinedDecks.map((deck) => [deck.logicalId, deck]));

  assert.equal(itexamDecks.find((deck) => deck.logicalId === "all").count, 9);
  assert.equal(infraDecks.find((deck) => deck.logicalId === "practice-final").id, "infra-practice-final");
  assert.equal(byLogicalId.get("midterm-1").count, 6);
  assert.equal(byLogicalId.get("practice-final").count, 2);
  assert.equal(byLogicalId.get("all").count, 18);
  assert.equal(byLogicalId.get("all").questions.some((question) => question.id === "infra-m1-3-1"), true);
});

test("adds beginner explanations to Infra practice and final questions", () => {
  const decks = createDecks(moduleSources, {
    bankId: "infra",
    bankTitle: "Infra",
    deckPrefix: "infra",
    sourcePrefix: "infra",
    finalSources: {
      "practice-final": [
        {
          number: 1,
          question: "What characteristic describes spyware?",
          options: ["software that collects information about the user", "an attack that slows a service"],
          correct_answers: ["software that collects information about the user"],
          explanation: "",
        },
      ],
    },
  });
  const question = decks.find((deck) => deck.logicalId === "practice-final").questions[0];

  assert.match(question.explanation, /Beginner explanation:/);
  assert.match(question.explanation, /Correct answer:/);
  assert.match(question.explanation, /Spyware is software/);
});

test("builds matching beginner explanations", () => {
  const explanation = buildBeginnerExplanation(
    {
      question: "Match the MAC sublayer function.",
      options: [],
      explanation: "",
    },
    { id: "infra-final-exam", logicalId: "final-exam", bankId: "infra" },
    ["Frame => MAC address"],
    [{ left: "Frame", right: "MAC address" }],
  );

  assert.match(explanation, /Frame -> MAC address/);
  assert.match(explanation, /MAC sublayer/);
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

test("hydrates infra matching rows into column matching", () => {
  const rawQuestion = {
    number: 25,
    question: "Match the definitions to their respective CLI hot keys and shortcuts.",
    options: [
      "displays the next screen ==>\u00a0\nspace bar",
      "scrolls backwards through previously entered commands ==>\u00a0\nUp Arrow",
      "provides context-sensitive help ==>\u00a0\n?",
      "completes abbreviated commands and parameters ==>\u00a0\nTab",
      "aborts commands such as trace and ping ==>\u00a0\nCtrl-Shift-6",
    ],
    correct_answers: [
      "displays the next screen ==>\u00a0\nspace bar",
      "scrolls backwards through previously entered commands ==>\u00a0\nUp Arrow",
      "provides context-sensitive help ==>\u00a0\n?",
      "completes abbreviated commands and parameters ==>\u00a0\nTab",
      "aborts commands such as trace and ping ==>\u00a0\nCtrl-Shift-6",
    ],
    image_urls: ["answer-sheet.png"],
    is_matching: true,
  };

  const [deck] = createDecks({ "m1-3": [rawQuestion] });
  const [question] = deck.questions;

  assert.deepEqual(question.options, []);
  assert.deepEqual(question.matchingPairs, [
    { left: "displays the next screen", right: "space bar" },
    { left: "scrolls backwards through previously entered commands", right: "Up Arrow" },
    { left: "provides context-sensitive help", right: "?" },
    { left: "completes abbreviated commands and parameters", right: "Tab" },
    { left: "aborts commands such as trace and ping", right: "Ctrl-Shift-6" },
  ]);
  assert.deepEqual(splitMatchingImages(question), {
    exhibitImages: [],
    answerImages: ["answer-sheet.png"],
  });
});

test("hydrates infra subnet matching fragments into one answerable dropdown question", () => {
  const partialPrompt =
    "Three devices are on three different subnets. Match the network address and the broadcast address with each subnet where these devices are located.\n\nDevice 1: IP address 192.168.10.77/28 on subnet 1";
  const fullPrompt =
    "Three devices are on three different subnets. Match the network address and the broadcast address with each subnet where these devices are located.\n\nDevice 1: IP address 192.168.10.77/28 on subnet 1\n\nDevice 2: IP address192.168.10.17/30 on subnet 2\n\nDevice 3: IP address 192.168.10.35/29 on subnet 3";
  const imageUrls = [
    "https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Introduction-to-Networks-Practice-Final-Exam-Answers-004.png",
    "https://infraexam.com/wp-content/uploads/2026/03/CCNA1-Introduction-to-Networks-Practice-Final-Exam-Answers-004-1024x622.png",
  ];
  const decks = createDecks(moduleSources, {
    bankId: "infra",
    deckPrefix: "infra",
    sourcePrefix: "infra",
    finalSources: {
      "practice-final": [
        { number: 35, question: partialPrompt, options: [], correct_answers: [], image_urls: imageUrls, is_matching: true },
        { number: 38, question: fullPrompt, options: [], correct_answers: [], image_urls: imageUrls, is_matching: true },
      ],
    },
  });
  const questions = decks.find((deck) => deck.logicalId === "practice-final").questions;
  const [question] = questions;

  assert.equal(questions.length, 1);
  assert.deepEqual(question.options, []);
  assert.deepEqual(question.matchingPairs, [
    { left: "Subnet 1 network number", right: "192.168.10.64" },
    { left: "Subnet 1 broadcast address", right: "192.168.10.79" },
    { left: "Subnet 2 network number", right: "192.168.10.16" },
    { left: "Subnet 2 broadcast address", right: "192.168.10.19" },
    { left: "Subnet 3 network number", right: "192.168.10.32" },
    { left: "Subnet 3 broadcast address", right: "192.168.10.39" },
  ]);
  assert.deepEqual(splitMatchingImages(question), {
    exhibitImages: [],
    answerImages: imageUrls,
  });
  assert.match(question.explanation, /Device 1 is on subnet 1/);
  assert.match(question.explanation, /192\.168\.10\.64 through 192\.168\.10\.79/);
});

test("adds detailed beginner explanations for IP address classification and /29 broadcast questions", () => {
  const decks = createDecks(moduleSources, {
    bankId: "infra",
    deckPrefix: "infra",
    sourcePrefix: "infra",
    finalSources: {
      "practice-final": [
        {
          number: 33,
          question: "What type of address is 198.133.219.162?",
          options: ["public", "link-local", "loopback", "multicast"],
          correct_answers: ["public"],
          explanation: "",
        },
        {
          number: 39,
          question: "What does the IP address 192.168.1.15/29 represent?",
          options: ["subnetwork address", "multicast address", "unicast address", "broadcast address"],
          correct_answers: ["broadcast address"],
          explanation: "",
        },
      ],
    },
  });
  const questions = decks.find((deck) => deck.logicalId === "practice-final").questions;
  const publicQuestion = questions.find((question) => question.question.includes("198.133.219.162"));
  const broadcastQuestion = questions.find((question) => question.question.includes("192.168.1.15/29"));

  assert.match(publicQuestion.explanation, /not in the private ranges 10\.0\.0\.0\/8/);
  assert.match(publicQuestion.explanation, /169\.254\.0\.0\/16/);
  assert.match(publicQuestion.explanation, /224\.0\.0\.0 through 239\.255\.255\.255/);
  assert.doesNotMatch(publicQuestion.explanation, /first identify exactly/);
  assert.match(broadcastQuestion.explanation, /block size is 8/);
  assert.match(broadcastQuestion.explanation, /192\.168\.1\.8 through 192\.168\.1\.15/);
  assert.match(broadcastQuestion.explanation, /usable host addresses are only 192\.168\.1\.9 through 192\.168\.1\.14/);
  assert.doesNotMatch(broadcastQuestion.explanation, /first identify exactly/);
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
