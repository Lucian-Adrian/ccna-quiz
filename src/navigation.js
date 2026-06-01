export function getNavigationAction(screen) {
  if (screen === "practice") {
    return { type: "show-screen", screen: "practice-hub" };
  }

  if (screen === "exam") {
    return { type: "show-screen", screen: "exam-hub" };
  }

  return { type: "show-screen", screen };
}
