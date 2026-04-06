import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";
import { getOptionState, hydrateCards, summarizeProgress } from "../src/study.js";

test("hydrates all module cards with complete answer keys", () => {
  const modules = [
    { id: "mod1", label: "Module 1", file: "mod1.md" },
    { id: "mod2", label: "Module 2", file: "mod2.md" },
    { id: "mod3", label: "Module 3", file: "mod3.md" },
  ];

  for (const module of modules) {
    const markdown = fs.readFileSync(new URL(`../${module.file}`, import.meta.url), "utf8");
    const cards = hydrateCards(module.id, module.label, markdown);

    assert.ok(cards.length > 0, `${module.id} should produce cards`);

    for (const card of cards) {
      assert.equal(card.answers.length, card.selectionCount, `${card.id} should have ${card.selectionCount} answers`);
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
