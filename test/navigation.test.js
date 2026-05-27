import assert from "node:assert/strict";
import { test } from "node:test";
import { getNavigationAction } from "../src/navigation.js";

test("practice and exam menu items start sessions", () => {
  assert.deepEqual(getNavigationAction("practice"), {
    type: "start-session",
    mode: "practice",
  });

  assert.deepEqual(getNavigationAction("exam"), {
    type: "start-session",
    mode: "exam",
  });
});

test("home and stats menu items show screens", () => {
  assert.deepEqual(getNavigationAction("home"), {
    type: "show-screen",
    screen: "home",
  });

  assert.deepEqual(getNavigationAction("stats"), {
    type: "show-screen",
    screen: "stats",
  });
});
