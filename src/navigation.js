export function getNavigationAction(screen) {
  if (screen === "practice" || screen === "exam") {
    return { type: "start-session", mode: screen };
  }

  return { type: "show-screen", screen };
}
