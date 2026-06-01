import assert from "node:assert/strict";
import { test } from "node:test";
import { getNavigationAction } from "../src/navigation.js";

test("practice and exam menu items show launchers", () => {
  assert.deepEqual(getNavigationAction("practice"), {
    type: "show-screen",
    screen: "practice-hub",
  });

  assert.deepEqual(getNavigationAction("exam"), {
    type: "show-screen",
    screen: "exam-hub",
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
