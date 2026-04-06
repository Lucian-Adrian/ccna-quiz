import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";
import { buildCheckpointLibrary } from "../src/checkpoints.js";
import { buildCollectionFocus, buildFocusSnapshot, buildPracticeDeck } from "../src/focus.js";
import { getOptionState, hydrateCards, summarizeProgress } from "../src/study.js";
import { buildModuleLibrary, buildStatsSnapshot, getReviewQueue, recordAttempt, summarizeModules, theorySectionsForModule } from "../src/progress.js";

test("hydrates all module cards with complete answer keys", () => {
  const modules = [
    { id: "mod1", label: "Module 1", file: "../modules/mod1.md" },
    { id: "mod2", label: "Module 2", file: "../modules/mod2.md" },
    { id: "mod3", label: "Module 3", file: "../modules/mod3.md" },
    { id: "mod4", label: "Module 4", file: "../modules/mod4.md" },
    { id: "mod5", label: "Module 5", file: "../modules/mod5.md" },
    { id: "mod6", label: "Module 6", file: "../modules/mod6.md" },
    { id: "mod7", label: "Module 7", file: "../modules/mod7.md" },
  ];

  for (const module of modules) {
    const markdown = fs.readFileSync(new URL(module.file, import.meta.url), "utf8");
    const cards = hydrateCards(module.id, module.label, markdown);

    assert.ok(cards.length > 0, `${module.id} should produce cards`);

    for (const card of cards) {
      assert.equal(card.answers.length, card.selectionCount, `${card.id} should have ${card.selectionCount} answers`);
      assert.ok(card.explanation.length > 0, `${card.id} should have an explanation`);
      for (const answer of card.answers) {
        assert.ok(card.options.includes(answer), `${card.id} answer should exist in options`);
      }
    }
  }
});

test("marks selected and correct options after reveal", () => {
  const card = {
    answers: ["VPN"],
  };

  assert.deepEqual(getOptionState(card, ["ACL"], "ACL", false), {
    selected: true,
    correct: false,
    wrong: false,
  });

  assert.deepEqual(getOptionState(card, ["ACL"], "ACL", true), {
    selected: true,
    correct: false,
    wrong: true,
  });

  assert.deepEqual(getOptionState(card, ["ACL"], "VPN", true), {
    selected: false,
    correct: true,
    wrong: false,
  });
});

test("summarizes mastered cards and cards that still need work", () => {
  const cards = [{ id: "a" }, { id: "b" }, { id: "c" }];
  const progress = {
    a: { streak: 3, seen: 4, wrong: 0 },
    b: { streak: 0, seen: 2, wrong: 2 },
    c: { streak: 1, seen: 1, wrong: 0 },
  };

  assert.deepEqual(summarizeProgress(cards, progress), {
    mastered: 1,
    needsWork: 1,
    seen: 3,
  });
});

test("builds a seven-module library with theory sections", () => {
  const moduleSources = [
    { id: "mod1", label: "Module 1", markdown: fs.readFileSync(new URL("../modules/mod1.md", import.meta.url), "utf8") },
    { id: "mod2", label: "Module 2", markdown: fs.readFileSync(new URL("../modules/mod2.md", import.meta.url), "utf8") },
    { id: "mod3", label: "Module 3", markdown: fs.readFileSync(new URL("../modules/mod3.md", import.meta.url), "utf8") },
    { id: "mod4", label: "Module 4", markdown: fs.readFileSync(new URL("../modules/mod4.md", import.meta.url), "utf8") },
    { id: "mod5", label: "Module 5", markdown: fs.readFileSync(new URL("../modules/mod5.md", import.meta.url), "utf8") },
    { id: "mod6", label: "Module 6", markdown: fs.readFileSync(new URL("../modules/mod6.md", import.meta.url), "utf8") },
    { id: "mod7", label: "Module 7", markdown: fs.readFileSync(new URL("../modules/mod7.md", import.meta.url), "utf8") },
  ];
  const library = buildModuleLibrary(moduleSources);

  assert.equal(library.modules.length, 7);
  assert.ok(library.cards.length >= 100);

  for (const module of library.modules) {
    const theory = theorySectionsForModule(module.id);
    assert.ok(theory.overview.length > 40, `${module.id} overview should be present`);
    assert.ok(theory.keyIdeas.length >= 3, `${module.id} should have key ideas`);
    assert.ok(theory.glossary.length >= 3, `${module.id} should have glossary entries`);
  }
});

test("exposes structured answer and explanation content for the runtime UI", () => {
  const moduleSources = [
    { id: "mod1", label: "Module 1", markdown: fs.readFileSync(new URL("../modules/mod1.md", import.meta.url), "utf8") },
  ];
  const library = buildModuleLibrary(moduleSources);
  const firstCard = library.modules[0].cards[0];

  assert.equal(typeof firstCard.explanation, "object");
  assert.equal(typeof firstCard.explanation.eli5, "string");
  assert.equal(typeof firstCard.explanation.ccna, "string");
  assert.ok(firstCard.explanation.eli5.length > 20);
  assert.ok(firstCard.explanation.ccna.length > 20);

  const firstAnswer = firstCard.answers[0];
  assert.equal(typeof firstAnswer, "object");
  assert.equal(typeof firstAnswer.text, "string");
  assert.equal(typeof firstAnswer.explanation.eli5, "string");
  assert.equal(typeof firstAnswer.explanation.ccna, "string");
});

test("can build the study library directly from exported JSON modules", () => {
  const manifest = JSON.parse(fs.readFileSync(new URL("../modules/index.json", import.meta.url), "utf8"));
  const moduleSources = manifest.modules.map((entry) => {
    const data = JSON.parse(fs.readFileSync(new URL(`../modules/${entry.file}`, import.meta.url), "utf8"));
    return {
      id: entry.id,
      label: entry.displayName,
      title: entry.title,
      cards: data.cards,
    };
  });
  const library = buildModuleLibrary(moduleSources);

  assert.equal(library.modules.length, 7);
  assert.ok(library.cards.length >= 100);
  assert.equal(library.modules[0].cards[0].answers[0].text.length > 0, true);
  assert.equal(library.modules[0].cards[0].explanation.ccna.length > 20, true);
});

test("records per-question progress with timestamps and last choice", () => {
  const before = {};
  const after = recordAttempt(before, {
    cardId: "mod1-2",
    isCorrect: true,
    selectedOptions: ["VPN"],
    mode: "exam",
    now: "2026-04-06T12:00:00.000Z",
  });

  assert.deepEqual(after["mod1-2"], {
    attempts: 1,
    correct: 1,
    wrong: 0,
    streak: 1,
    lastChoice: ["VPN"],
    lastMode: "exam",
    lastSeenAt: "2026-04-06T12:00:00.000Z",
  });
});

test("summarizes modules from saved progress", () => {
  const cards = [
    { id: "mod1-1", moduleId: "mod1" },
    { id: "mod1-2", moduleId: "mod1" },
    { id: "mod2-1", moduleId: "mod2" },
  ];
  const progress = {
    "mod1-1": { attempts: 2, correct: 2, wrong: 0, streak: 2, lastChoice: [], lastMode: "learn", lastSeenAt: "x" },
    "mod1-2": { attempts: 1, correct: 0, wrong: 1, streak: 0, lastChoice: [], lastMode: "learn", lastSeenAt: "x" },
    "mod2-1": { attempts: 3, correct: 2, wrong: 1, streak: 1, lastChoice: [], lastMode: "exam", lastSeenAt: "x" },
  };

  assert.deepEqual(summarizeModules(cards, progress), {
    mod1: { questions: 2, attempted: 2, correct: 2, wrong: 1, accuracy: 67, mastered: 0 },
    mod2: { questions: 1, attempted: 1, correct: 2, wrong: 1, accuracy: 67, mastered: 0 },
  });
});

test("builds a stats snapshot and prioritizes the review queue from wrong answers", () => {
  const cards = [
    { id: "mod1-1", moduleId: "mod1", module: "Networking Today", number: 1, question: "Q1" },
    { id: "mod1-2", moduleId: "mod1", module: "Networking Today", number: 2, question: "Q2" },
    { id: "mod2-1", moduleId: "mod2", module: "Protocols and Models", number: 1, question: "Q3" },
    { id: "mod2-2", moduleId: "mod2", module: "Protocols and Models", number: 2, question: "Q4" },
  ];
  const progress = {
    "mod1-1": { attempts: 4, correct: 1, wrong: 3, streak: 0, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:00:00.000Z" },
    "mod1-2": { attempts: 5, correct: 5, wrong: 0, streak: 4, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:00:00.000Z" },
    "mod2-1": { attempts: 3, correct: 1, wrong: 2, streak: 0, lastChoice: [], lastMode: "exam", lastSeenAt: "2026-04-06T12:05:00.000Z" },
    "mod2-2": { attempts: 1, correct: 0, wrong: 1, streak: 0, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:10:00.000Z" },
  };

  assert.deepEqual(getReviewQueue(cards, progress).map((card) => card.id), [
    "mod1-1",
    "mod2-1",
    "mod2-2",
  ]);

  assert.deepEqual(buildStatsSnapshot(cards, progress), {
    totals: {
      questions: 4,
      reviewed: 4,
      attempts: 13,
      correct: 7,
      wrong: 6,
      mastered: 1,
      struggling: 3,
      untouched: 0,
      accuracy: 54,
    },
    weakestModuleId: "mod2",
    strongestModuleId: "mod1",
    reviewCount: 3,
  });
});

test("normalizes checkpoint exams with media and matrix prompts for the runtime", () => {
  const checkpointSources = [
    {
      id: "check1",
      title: "Checkpoint Exam 1",
      questions: [
        {
          number: 5,
          kind: "matrix_sort",
          question: "Match the requirements.",
          options: [],
          media: [{ kind: "image", path: "assets/check1/a5-1.jpg" }],
          answer: {
            type: "table",
            table: {
              headers: [],
              rows: [["fault tolerance", "Provide redundant links and devices."]],
            },
          },
          explanation: { eli5: "eli5", ccna: "ccna" },
          activity: {
            type: "matrix_sort",
            prompts: [{ position: 0, text: "Provide redundant links and devices." }],
            choices: [{ position: 0, text: "fault tolerance", correctSlots: [0] }],
          },
        },
      ],
    },
  ];

  const library = buildCheckpointLibrary(checkpointSources, (assetPath) => `/resolved/${assetPath}`);
  const [question] = library.questions;

  assert.equal(library.checkpoints.length, 1);
  assert.equal(question.id, "check1-5");
  assert.equal(question.sourceType, "checkpoint");
  assert.equal(question.kind, "matrix_sort");
  assert.equal(question.media[0].url, "/resolved/assets/check1/a5-1.jpg");
  assert.deepEqual(question.matrix.prompts, ["Provide redundant links and devices."]);
  assert.deepEqual(question.matrix.choices, ["fault tolerance"]);
  assert.deepEqual(question.answerTable.rows, [["fault tolerance", "Provide redundant links and devices."]]);
});

test("builds a recommended practice deck that surfaces weak cards before fresh and stable ones", () => {
  const cards = [
    { id: "m1-1", moduleId: "m1", module: "Module 1", number: 1 },
    { id: "m1-2", moduleId: "m1", module: "Module 1", number: 2 },
    { id: "m1-3", moduleId: "m1", module: "Module 1", number: 3 },
    { id: "m1-4", moduleId: "m1", module: "Module 1", number: 4 },
  ];
  const progress = {
    "m1-1": { attempts: 4, correct: 1, wrong: 3, streak: 0, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:00:00.000Z" },
    "m1-3": { attempts: 2, correct: 2, wrong: 0, streak: 2, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:03:00.000Z" },
    "m1-4": { attempts: 5, correct: 5, wrong: 0, streak: 4, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:04:00.000Z" },
  };

  assert.deepEqual(buildPracticeDeck(cards, progress, "recommended").map((card) => card.id), [
    "m1-1",
    "m1-2",
    "m1-3",
    "m1-4",
  ]);
});

test("builds a focus snapshot with counts that can drive the new study workspace", () => {
  const cards = [
    { id: "m1-1", moduleId: "m1", module: "Module 1", number: 1 },
    { id: "m1-2", moduleId: "m1", module: "Module 1", number: 2 },
    { id: "m1-3", moduleId: "m1", module: "Module 1", number: 3 },
    { id: "m1-4", moduleId: "m1", module: "Module 1", number: 4 },
  ];
  const progress = {
    "m1-1": { attempts: 4, correct: 1, wrong: 3, streak: 0, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:00:00.000Z" },
    "m1-3": { attempts: 2, correct: 2, wrong: 0, streak: 2, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:03:00.000Z" },
    "m1-4": { attempts: 5, correct: 5, wrong: 0, streak: 4, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:04:00.000Z" },
  };

  assert.deepEqual(buildFocusSnapshot(cards, progress), {
    total: 4,
    fresh: 1,
    review: 1,
    active: 1,
    mastered: 1,
    recommended: 3,
  });
});

test("builds collection focus summaries with a clear next card and workload signal", () => {
  const cards = [
    { id: "mod1-1", moduleId: "mod1", module: "Networking Today", number: 1 },
    { id: "mod1-2", moduleId: "mod1", module: "Networking Today", number: 2 },
    { id: "check1-1", moduleId: "check1", module: "Checkpoint 1", checkpointId: "check1", sourceType: "checkpoint", number: 1 },
    { id: "check1-2", moduleId: "check1", module: "Checkpoint 1", checkpointId: "check1", sourceType: "checkpoint", number: 2 },
  ];
  const progress = {
    "mod1-1": { attempts: 1, correct: 0, wrong: 1, streak: 0, lastChoice: [], lastMode: "learn", lastSeenAt: "2026-04-06T12:00:00.000Z" },
    "check1-1": { attempts: 2, correct: 2, wrong: 0, streak: 2, lastChoice: [], lastMode: "exam", lastSeenAt: "2026-04-06T12:10:00.000Z" },
  };
  const collections = [
    { id: "mod1", title: "Networking Today", kind: "module" },
    { id: "check1", title: "Checkpoint Exam 1", kind: "checkpoint" },
  ];

  assert.deepEqual(buildCollectionFocus(collections, cards, progress), [
    {
      id: "mod1",
      title: "Networking Today",
      kind: "module",
      total: 2,
      recommended: 2,
      review: 1,
      fresh: 1,
      mastered: 0,
      accuracy: 0,
      nextCardId: "mod1-1",
    },
    {
      id: "check1",
      title: "Checkpoint Exam 1",
      kind: "checkpoint",
      total: 2,
      recommended: 2,
      review: 0,
      fresh: 1,
      mastered: 0,
      accuracy: 100,
      nextCardId: "check1-2",
    },
  ]);
});
