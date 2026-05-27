import modules1To3 from "../CCNA1_v7_Modules_1-3.json";
import modules4To7 from "../CCNA1_v7_Modules_4-7.json";
import modules8To10 from "../CCNA1_v7_Modules_8-10.json";
import modules11To13 from "../CCNA1_v7_Modules_11-13.json";
import modules14To15 from "../CCNA1_v7_Modules_14-15.json";
import modules16To17 from "../CCNA1_v7_Modules_16-17.json";
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
  isCorrect,
  scheduleProgress,
  scoreSession,
} from "./decks.js";
import { getNavigationAction } from "./navigation.js";
import { createProgressBackup, loadStoredProgress, parseProgressPayload, saveStoredProgress } from "./storage.js";
import "./styles.css";

const STORAGE_KEY = "quizos-v2-progress";
const STORAGE_BACKUP_KEY = "quizos-v2-progress-backup";
const EXAM_LIMIT = 24;

const moduleSources = {
  "m1-3": modules1To3,
  "m4-7": modules4To7,
  "m8-10": modules8To10,
  "m11-13": modules11To13,
  "m14-15": modules14To15,
  "m16-17": modules16To17,
};

const decks = createDecks(moduleSources);
const deckById = new Map(decks.map((deck) => [deck.id, deck]));
const app = document.querySelector("#app");

const state = {
  screen: "home",
  deckId: "midterm-1",
  progress: loadProgress(),
  session: null,
  savedAt: Number(localStorage.getItem(`${STORAGE_KEY}-saved-at`) ?? 0),
  saveError: "",
};

function loadProgress() {
  return loadStoredProgress(localStorage, STORAGE_KEY, STORAGE_BACKUP_KEY);
}

function saveProgress() {
  try {
    state.savedAt = saveStoredProgress(localStorage, STORAGE_KEY, STORAGE_BACKUP_KEY, state.progress);
    localStorage.setItem(`${STORAGE_KEY}-saved-at`, String(state.savedAt));
    state.saveError = "";
  } catch {
    state.saveError = "Could not save progress on this device.";
  }
}

function currentDeck() {
  return deckById.get(state.deckId) ?? decks[0];
}

function currentQuestion() {
  return state.session?.questions[state.session.index] ?? null;
}

function selectedFor(question) {
  if (!question || !state.session) return [];
  return state.session.answers[question.id] ?? [];
}

function answeredCount(session = state.session) {
  if (!session) return 0;
  return session.questions.filter((question) => (session.answers[question.id] ?? []).length > 0).length;
}

function setScreen(screen) {
  state.screen = screen;
  state.session = null;
  render();
}

function navigate(screen) {
  const action = getNavigationAction(screen);

  if (action.type === "start-session") {
    startSession(action.mode);
  } else {
    setScreen(action.screen);
  }
}

function selectDeck(deckId) {
  state.deckId = deckId;
  render();
}

function startSession(mode) {
  const deck = currentDeck();
  state.screen = mode;
  state.session = buildSession(deck, {
    mode,
    limit: EXAM_LIMIT,
    seed: Date.now(),
  });
  render();
}

function startPracticeQueue(questions) {
  if (questions.length === 0) return;

  state.screen = "practice";
  state.session = {
    deckId: state.deckId,
    mode: "practice",
    questions,
    index: 0,
    answers: {},
    revealed: false,
    submitted: false,
    seed: Date.now(),
  };
  render();
}

function startFocusSession() {
  const recommended = getRecommendedDeck(decks, state.progress) ?? currentDeck();
  state.deckId = recommended.id;
  const questions = buildSmartReview(recommended, state.progress, {
    limit: EXAM_LIMIT,
    seed: Date.now(),
  });

  if (questions.length > 0) {
    startPracticeQueue(questions);
  } else {
    startSession("practice");
  }
}

function startDueReview() {
  const dueQuestions = getDueQuestions(currentDeck(), state.progress);
  if (dueQuestions.length > 0) startPracticeQueue(dueQuestions.slice(0, EXAM_LIMIT));
}

function startNewCards() {
  const newQuestions = getNewQuestions(currentDeck(), state.progress);
  if (newQuestions.length > 0) startPracticeQueue(newQuestions.slice(0, EXAM_LIMIT));
}

function startWeakReview() {
  const deck = currentDeck();
  const weakQuestions = getWeakQuestions(deck, state.progress);
  if (weakQuestions.length === 0) return;

  startPracticeQueue(weakQuestions.slice(0, EXAM_LIMIT));
}

function toggleAnswer(option) {
  const question = currentQuestion();
  if (!question || !state.session || state.session.submitted) return;
  if (state.session.mode === "practice" && state.session.revealed) return;

  const selected = selectedFor(question);
  const exists = selected.includes(option);
  const answerCount = Math.max(question.correctAnswers.length, 1);

  if (answerCount === 1) {
    state.session.answers[question.id] = exists ? [] : [option];
  } else if (exists) {
    state.session.answers[question.id] = selected.filter((item) => item !== option);
  } else if (selected.length < answerCount) {
    state.session.answers[question.id] = [...selected, option];
  }

  render();
}

function setMatchingAnswer(left, right) {
  const question = currentQuestion();
  if (!question || !state.session || state.session.submitted) return;
  if (state.session.mode === "practice" && state.session.revealed) return;

  const selected = selectedFor(question).filter((answer) => !answer.startsWith(`${left} => `));
  if (right) selected.push(formatMatchingAnswer(left, right));
  state.session.answers[question.id] = selected;
  render();
}

function revealPracticeAnswer() {
  const question = currentQuestion();
  if (!question || !state.session) return;
  if (question.options.length > 0 && selectedFor(question).length === 0) return;
  if ((question.matchingPairs?.length ?? 0) > 0 && selectedFor(question).length < question.matchingPairs.length) return;

  state.session.revealed = true;
  writeProgress(
    question,
    question.options.length === 0 && (question.matchingPairs?.length ?? 0) === 0
      ? true
      : isCorrect(question, selectedFor(question)),
  );
  render();
}

function nextQuestion() {
  if (!state.session) return;

  if (state.session.index < state.session.questions.length - 1) {
    state.session.index += 1;
    state.session.revealed = false;
  } else if (state.session.mode === "practice") {
    state.screen = "home";
    state.session = null;
  }

  render();
}

function previousQuestion() {
  if (!state.session || state.session.index === 0) return;
  state.session.index -= 1;
  state.session.revealed = false;
  render();
}

function submitExam() {
  if (!state.session) return;

  state.session.submitted = true;
  for (const question of state.session.questions) {
    writeProgress(question, isCorrect(question, selectedFor(question)));
  }
  render();
}

function restartExamMisses() {
  if (!state.session) return;
  const misses = state.session.questions.filter((question) => !isCorrect(question, selectedFor(question)));
  if (misses.length === 0) return;

  state.session = {
    deckId: state.deckId,
    mode: "practice",
    questions: misses,
    index: 0,
    answers: {},
    revealed: false,
    submitted: false,
    seed: Date.now(),
  };
  state.screen = "practice";
  render();
}

function writeProgress(question, correct) {
  state.progress[question.id] = scheduleProgress(state.progress[question.id], correct);
  saveProgress();
}

function resetProgress() {
  state.progress = {};
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_BACKUP_KEY);
  localStorage.removeItem(`${STORAGE_KEY}-saved-at`);
  state.savedAt = 0;
  state.saveError = "";
  render();
}

function exportProgress() {
  const backup = createProgressBackup(state.progress);
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `quizos-progress-${new Date(backup.savedAt).toISOString().slice(0, 10)}.json`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      state.progress = parseProgressPayload(String(reader.result ?? "{}"));
      saveProgress();
      state.screen = "stats";
      state.session = null;
      render();
    } catch {
      state.saveError = "Could not import that progress file.";
      render();
    }
  });
  reader.readAsText(file);
}

function render() {
  app.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      <main class="main">
        ${state.screen === "home" ? renderHome() : ""}
        ${state.screen === "practice" ? renderTrainer("practice") : ""}
        ${state.screen === "exam" ? renderTrainer("exam") : ""}
        ${state.screen === "stats" ? renderStats() : ""}
      </main>
      ${renderBottomNav()}
    </div>
  `;

  wireEvents();
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <button class="brand" type="button" data-screen="home"><span>Q</span>QuizOS</button>
      <nav class="side-nav" aria-label="Main">
        ${navButton("home", "Home")}
        ${navButton("practice", "Practice")}
        ${navButton("exam", "Exam")}
        ${navButton("stats", "Stats")}
      </nav>
      <button class="small-reset" type="button" data-action="reset-progress">Reset progress</button>
    </aside>
  `;
}

function navButton(screen, label) {
  const active =
    state.screen === screen ||
    (screen === "home" && !["practice", "exam", "stats"].includes(state.screen));
  return `<button class="${active ? "active" : ""}" type="button" data-screen="${screen}">${label}</button>`;
}

function renderBottomNav() {
  return `
    <nav class="bottom-nav" aria-label="Mobile navigation">
      ${navButton("home", "Home")}
      ${navButton("practice", "Practice")}
      ${navButton("exam", "Exam")}
      ${navButton("stats", "Stats")}
    </nav>
  `;
}

function renderHome() {
  const deck = currentDeck();
  const summary = getLearningSummary(deck, state.progress);
  const recommended = getRecommendedDeck(decks, state.progress) ?? deck;
  const recommendedSummary = getLearningSummary(recommended, state.progress);
  const weakCount = getWeakQuestions(deck, state.progress).length;
  const dueCount = getDueQuestions(deck, state.progress).length;
  const newCount = getNewQuestions(deck, state.progress).length;

  return `
    <section class="topbar">
      <div>
        <h1>Study</h1>
        <p>${deck.title} selected</p>
      </div>
      <button class="primary desktop-only" type="button" data-action="start-focus">Start focus</button>
    </section>

    <section class="content">
      <section class="study-board">
        <div class="next-line">
          <span>Next</span>
          <strong>${dueCount ? "Review due" : recommended.title}</strong>
          <small>${dueCount ? `${dueCount} due now · ${weakCount} weak` : `${recommendedSummary.unseen} unseen · ${recommendedSummary.weak} weak`}</small>
        </div>
        <div class="hero-actions compact">
          <button class="primary" type="button" data-action="${dueCount ? "review-due" : "start-focus"}">${dueCount ? "Review due" : "Smart review"}</button>
          <button class="secondary" type="button" data-action="review-weak" ${weakCount === 0 ? "disabled" : ""}>Weak</button>
          <button class="secondary" type="button" data-start="exam">Exam</button>
        </div>
      </section>

      <section class="learning-strip" aria-label="Learning state">
        <div><span>Due</span><strong class="${summary.due ? "danger" : ""}">${summary.due}</strong></div>
        <div><span>New</span><strong>${newCount}</strong></div>
        <div><span>Weak</span><strong class="${summary.weak ? "danger" : ""}">${summary.weak}</strong></div>
        <div><span>Mastered</span><strong>${summary.masteryPercent}%</strong></div>
      </section>

      <section class="selected-line">
        <div>
          <strong>${deck.title}</strong>
          <span>${deck.count} questions · ${summary.due} due · ${summary.unseen} unseen</span>
        </div>
        <div class="hero-actions compact">
          <button class="primary" type="button" data-action="start-focus">Smart</button>
          <button class="secondary" type="button" data-action="learn-new" ${newCount === 0 ? "disabled" : ""}>New</button>
          <button class="secondary" type="button" data-start="exam">Exam</button>
        </div>
      </section>

      <h2 class="section-title">Midterms</h2>
      <section class="deck-grid featured">
        ${decks.filter((item) => item.type === "midterm").map(renderDeckButton).join("")}
      </section>

      <h2 class="section-title">Modules</h2>
      <section class="deck-grid">
        ${decks.filter((item) => item.type === "module").map(renderDeckButton).join("")}
      </section>

      <section class="all-row">
        ${renderDeckButton(decks.find((item) => item.id === "all"))}
      </section>
    </section>
  `;
}

function renderDeckButton(deck) {
  if (!deck) return "";
  const selected = deck.id === state.deckId;
  const progress = getLearningSummary(deck, state.progress);

  return `
    <button class="deck-row ${selected ? "selected" : ""}" type="button" data-deck="${deck.id}">
      <span>${deck.title}</span>
      <strong>${progress.seen}/${deck.count}</strong>
      <small>${progress.due} due · ${progress.weak} weak · ${progress.percent}%</small>
    </button>
  `;
}

function renderTrainer(mode) {
  if (!state.session) {
    startSession(mode);
    return "";
  }

  const question = currentQuestion();
  if (!question) return "";

  const deck = currentDeck();
  const selected = selectedFor(question);
  const checked = mode === "practice" && state.session.revealed;
  const examDone = mode === "exam" && state.session.submitted;
  const score = scoreSession(state.session.questions, state.session.answers);
  const answered = answeredCount();
  const answerCount = question.correctAnswers.length;
  const hasChoices = question.options.length > 0;
  const hasMatching = (question.matchingPairs?.length ?? 0) > 0;

  return `
    <section class="trainer ${mode}">
      <header class="question-top">
        <button class="back-button" type="button" data-screen="home">Back</button>
        <div>
          <h1>${mode === "exam" ? "Exam" : "Practice"}</h1>
          <p>${deck.title} · ${state.session.index + 1}/${state.session.questions.length}${mode === "exam" ? ` · ${answered} answered` : ""}</p>
        </div>
        ${mode === "exam" ? `<button class="secondary" type="button" data-action="submit-exam" ${answered === 0 ? "disabled" : ""}>Finish</button>` : ""}
      </header>

      ${
        examDone
          ? renderExamResult(score)
          : `
        <div class="session-meter" aria-hidden="true">
          <span style="width: ${Math.round(((state.session.index + 1) / state.session.questions.length) * 100)}%"></span>
        </div>
        <article class="question-card">
          <div class="question-meta">
            <span>${question.sourceTitle}</span>
            <span>${hasMatching ? "Matching" : !hasChoices ? "Study card" : answerCount > 1 ? `Choose ${answerCount}` : "Single answer"}</span>
          </div>
          <h2>${escapeHtml(question.question)}</h2>
          ${renderQuestionAssets(question)}
          ${
            hasChoices
              ? `<div class="answers">
                  ${question.options.map((option, index) => renderAnswer(question, option, index, selected, checked)).join("")}
                </div>`
              : hasMatching
                ? renderMatchingQuestion(question, selected, checked)
                : `<div class="study-card-note">Read the prompt, then reveal the answer.</div>`
          }
        </article>

        ${checked ? renderExplanation(question, selected) : ""}

        <footer class="trainer-actions">
          <button class="secondary" type="button" data-action="previous" ${state.session.index === 0 ? "disabled" : ""}>Previous</button>
          ${
            mode === "practice"
              ? state.session.revealed
                ? `<button class="primary" type="button" data-action="next">Next</button>`
                : `<button class="primary" type="button" data-action="reveal" ${
                    (hasChoices && selected.length === 0) || (hasMatching && selected.length < question.matchingPairs.length)
                      ? "disabled"
                      : ""
                  }>${hasChoices || hasMatching ? "Check" : "Show answer"}</button>`
              : `<button class="primary" type="button" data-action="next" ${state.session.index === state.session.questions.length - 1 ? "disabled" : ""}>Next</button>`
          }
        </footer>
      `
      }
    </section>
  `;
}

function renderMatchingQuestion(question, selected, checked) {
  const selectedMap = new Map(
    selected.map((answer) => {
      const [left, right] = answer.split(" => ");
      return [left, right];
    }),
  );
  const targets = [...new Set(question.matchingPairs.map((pair) => pair.right))].sort((left, right) =>
    left.localeCompare(right),
  );

  return `
    <div class="matching">
      ${question.matchingPairs
        .map((pair) => {
          const value = selectedMap.get(pair.left) ?? "";
          const correct = value === pair.right;
          return `
            <label class="match-row ${checked ? (correct ? "correct" : "wrong") : ""}">
              <span>${escapeHtml(pair.left)}</span>
              <select data-match-left="${escapeAttr(pair.left)}" ${checked ? "disabled" : ""}>
                <option value="">Choose match</option>
                ${targets
                  .map(
                    (target) =>
                      `<option value="${escapeAttr(target)}" ${target === value ? "selected" : ""}>${escapeHtml(target)}</option>`,
                  )
                  .join("")}
              </select>
              ${checked ? `<small>${correct ? "Correct" : `Answer: ${escapeHtml(pair.right)}`}</small>` : ""}
            </label>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderAnswer(question, option, index, selected, checked) {
  const selectedClass = selected.includes(option) ? "selected" : "";
  const correctClass = checked && question.correctAnswers.includes(option) ? "correct" : "";
  const wrongClass = checked && selected.includes(option) && !question.correctAnswers.includes(option) ? "wrong" : "";

  return `
    <button class="answer ${selectedClass} ${correctClass} ${wrongClass}" type="button" data-option="${escapeAttr(option)}">
      <b>${String.fromCharCode(65 + index)}</b>
      <span>${escapeHtml(option)}</span>
    </button>
  `;
}

function renderQuestionAssets(question, includeAnswerAssets = false) {
  const hasMatching = (question.matchingPairs?.length ?? 0) > 0;
  const visibleTables = hasMatching ? [] : question.tables;
  const tables = visibleTables
    .map((table) => `
      <div class="table-wrap">
        <table>
          ${table
            .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell))}</td>`).join("")}</tr>`)
            .join("")}
        </table>
      </div>
    `)
    .join("");

  const code = question.codeBlocks
    .map((block) => `<pre><code>${escapeHtml(block)}</code></pre>`)
    .join("");

  const visibleImages = hasMatching && !includeAnswerAssets ? question.imageUrls.slice(0, 1) : question.imageUrls;
  const images = visibleImages
    .map((url) => `<img class="question-image" src="${escapeAttr(url)}" alt="">`)
    .join("");

  return `${images}${tables}${code}`;
}

function renderExplanation(question, selected) {
  const correct = isCorrect(question, selected);
  const hasMatching = (question.matchingPairs?.length ?? 0) > 0;
  return `
    <section class="explanation ${correct ? "correct" : "wrong"}">
      <strong>${correct ? "Correct" : "Review this"}</strong>
      <p class="correct-answer">${
        hasMatching ? "Review the correct matches below." : question.correctAnswers.map(escapeHtml).join(" · ")
      }</p>
      ${renderAnswerAssets(question)}
      <div>${formatExplanation(question.explanation)}</div>
    </section>
  `;
}

function renderAnswerAssets(question) {
  if ((question.matchingPairs?.length ?? 0) === 0) return "";
  const answerImages = question.imageUrls.slice(1);
  if (answerImages.length === 0) return "";

  return `
    <div class="answer-assets">
      ${answerImages.map((url) => `<img class="question-image" src="${escapeAttr(url)}" alt="">`).join("")}
    </div>
  `;
}

function renderExamResult(score) {
  const missedQuestions =
    state.session?.questions.filter((question) => !isCorrect(question, selectedFor(question))) ?? [];

  return `
    <section class="result-card">
      <span class="eyebrow">Result</span>
      <h2>${score.percent}%</h2>
      <p>${score.correct} correct · ${score.wrong} missed · ${score.total} total</p>
      <div class="hero-actions">
        <button class="primary" type="button" data-start="exam">New exam</button>
        <button class="secondary" type="button" data-action="practice-misses" ${score.wrong === 0 ? "disabled" : ""}>Practice misses</button>
      </div>
    </section>
    ${
      missedQuestions.length
        ? `<section class="missed-list">
            <h2 class="section-title">Missed</h2>
            ${missedQuestions
              .map(
                (question) => `
                  <article class="missed-item">
                    <strong>${escapeHtml(question.question)}</strong>
                    <span>${question.correctAnswers.map(escapeHtml).join(" · ")}</span>
                  </article>
                `,
              )
              .join("")}
          </section>`
        : `<section class="missed-list">
            <h2 class="section-title">Clean exam</h2>
            <p>No missed questions in this attempt.</p>
          </section>`
    }
  `;
}

function renderStats() {
  return `
    <section class="topbar">
      <div>
        <h1>Stats</h1>
        <p>${state.saveError || progressSaveLabel()}</p>
      </div>
      <button class="secondary desktop-only" type="button" data-action="reset-progress">Reset</button>
    </section>
    <section class="content">
      <section class="save-panel">
        <div>
          <strong>Local progress</strong>
          <span>${progressSaveLabel()}</span>
        </div>
        <div class="hero-actions compact">
          <button class="secondary" type="button" data-action="export-progress">Export</button>
          <label class="secondary import-button">
            Import
            <input type="file" accept="application/json" data-import-progress>
          </label>
        </div>
      </section>
      <div class="stats-list">
        ${decks
          .filter((deck) => deck.type !== "all")
          .map((deck) => {
            const progress = getLearningSummary(deck, state.progress);
            return `
              <div class="stat-row">
                <div>
                  <strong>${deck.title}</strong>
                  <small>${progress.seen}/${deck.count} seen · ${progress.due} due · ${progress.weak} weak · ${progress.mastered} mastered</small>
                  <span class="progress-track"><i style="width: ${progress.masteryPercent}%"></i></span>
                </div>
                <span>${progress.percent}%</span>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function progressSaveLabel() {
  if (state.saveError) return state.saveError;
  if (!state.savedAt) return "Progress is saved locally on this device";

  return `Saved locally ${new Date(state.savedAt).toLocaleString()}`;
}

function formatExplanation(explanation) {
  if (!explanation) return "<p>No explanation provided.</p>";

  return explanation
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${inlineMarkdown(paragraph)}</p>`)
    .join("");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function decodeAttr(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function wireEvents() {
  app.querySelectorAll("[data-screen]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.screen));
  });

  app.querySelectorAll("[data-deck]").forEach((button) => {
    button.addEventListener("click", () => selectDeck(button.dataset.deck));
  });

  app.querySelectorAll("[data-start]").forEach((button) => {
    button.addEventListener("click", () => startSession(button.dataset.start));
  });

  app.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => toggleAnswer(decodeAttr(button.dataset.option ?? "")));
  });

  app.querySelectorAll("[data-match-left]").forEach((select) => {
    select.addEventListener("change", () =>
      setMatchingAnswer(decodeAttr(select.dataset.matchLeft ?? ""), decodeAttr(select.value)),
    );
  });

  app.querySelectorAll("[data-import-progress]").forEach((input) => {
    input.addEventListener("change", () => importProgress(input.files?.[0]));
  });

  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "reveal") revealPracticeAnswer();
      if (action === "next") nextQuestion();
      if (action === "previous") previousQuestion();
      if (action === "submit-exam") submitExam();
      if (action === "practice-misses") restartExamMisses();
      if (action === "reset-progress") resetProgress();
      if (action === "export-progress") exportProgress();
      if (action === "start-focus") startFocusSession();
      if (action === "review-due") startDueReview();
      if (action === "review-weak") startWeakReview();
      if (action === "learn-new") startNewCards();
    });
  });
}

render();
