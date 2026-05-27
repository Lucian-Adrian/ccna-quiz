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
import "./styles.css";

const STORAGE_KEY = "quizos-v2-progress";
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
};

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
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

function revealPracticeAnswer() {
  const question = currentQuestion();
  if (!question || !state.session) return;
  if (question.options.length > 0 && selectedFor(question).length === 0) return;

  state.session.revealed = true;
  writeProgress(question, question.options.length === 0 ? true : isCorrect(question, selectedFor(question)));
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
  render();
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
            <span>${!hasChoices ? "Study card" : answerCount > 1 ? `Choose ${answerCount}` : "Single answer"}</span>
          </div>
          <h2>${escapeHtml(question.question)}</h2>
          ${renderQuestionAssets(question)}
          ${
            hasChoices
              ? `<div class="answers">
                  ${question.options.map((option, index) => renderAnswer(question, option, index, selected, checked)).join("")}
                </div>`
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
                : `<button class="primary" type="button" data-action="reveal" ${hasChoices && selected.length === 0 ? "disabled" : ""}>${hasChoices ? "Check" : "Show answer"}</button>`
              : `<button class="primary" type="button" data-action="next" ${state.session.index === state.session.questions.length - 1 ? "disabled" : ""}>Next</button>`
          }
        </footer>
      `
      }
    </section>
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

function renderQuestionAssets(question) {
  const tables = question.tables
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

  const images = question.imageUrls
    .map((url) => `<img class="question-image" src="${escapeAttr(url)}" alt="">`)
    .join("");

  return `${images}${tables}${code}`;
}

function renderExplanation(question, selected) {
  const correct = isCorrect(question, selected);
  return `
    <section class="explanation ${correct ? "correct" : "wrong"}">
      <strong>${correct ? "Correct" : "Review this"}</strong>
      <p class="correct-answer">${question.correctAnswers.map(escapeHtml).join(" · ")}</p>
      <div>${formatExplanation(question.explanation)}</div>
    </section>
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
        <p>Progress saved on this device</p>
      </div>
      <button class="secondary desktop-only" type="button" data-action="reset-progress">Reset</button>
    </section>
    <section class="content">
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

  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "reveal") revealPracticeAnswer();
      if (action === "next") nextQuestion();
      if (action === "previous") previousQuestion();
      if (action === "submit-exam") submitExam();
      if (action === "practice-misses") restartExamMisses();
      if (action === "reset-progress") resetProgress();
      if (action === "start-focus") startFocusSession();
      if (action === "review-due") startDueReview();
      if (action === "review-weak") startWeakReview();
      if (action === "learn-new") startNewCards();
    });
  });
}

render();
