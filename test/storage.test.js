import assert from "node:assert/strict";
import { test } from "node:test";
import { createProgressBackup, loadStoredProgress, parseProgressPayload, saveStoredProgress } from "../src/storage.js";

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) {
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
  };
}

test("parses plain progress and backup payloads", () => {
  const progress = { q1: { seen: 1 } };

  assert.deepEqual(parseProgressPayload(JSON.stringify(progress)), progress);
  assert.deepEqual(parseProgressPayload(JSON.stringify(createProgressBackup(progress, 123))), progress);
  assert.deepEqual(parseProgressPayload("null"), {});
});

test("loads progress from backup when primary is corrupted", () => {
  const progress = { q2: { seen: 2, correct: 1 } };
  const storage = memoryStorage({
    primary: "{broken",
    backup: JSON.stringify(createProgressBackup(progress, 456)),
  });

  assert.deepEqual(loadStoredProgress(storage, "primary", "backup"), progress);
});

test("saves progress to primary and backup keys", () => {
  const progress = { q3: { seen: 3 } };
  const storage = memoryStorage();

  saveStoredProgress(storage, "primary", "backup", progress, 789);

  assert.deepEqual(JSON.parse(storage.getItem("primary")), progress);
  assert.deepEqual(JSON.parse(storage.getItem("backup")), {
    version: 1,
    savedAt: 789,
    progress,
  });
});
