import modules1To3 from "../CCNA1_v7_Modules_1-3.json";
import modules4To7 from "../CCNA1_v7_Modules_4-7.json";
import modules8To10 from "../CCNA1_v7_Modules_8-10.json";
import modules11To13 from "../CCNA1_v7_Modules_11-13.json";
import modules14To15 from "../CCNA1_v7_Modules_14-15.json";
import modules16To17 from "../CCNA1_v7_Modules_16-17.json";
import {
  buildSession,
  createDecks,
  isCorrect,
  scoreSession,
  summarizeDeckProgress,
} from "./decks.js";
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

function setScreen(screen) {
  state.screen = screen;
  state.session = null;
  render();
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
  const current = state.progress[question.id] ?? { seen: 0, correct: 0, wrong: 0 };
  state.progress[question.id] = {
    seen: current.seen + 1,
    correct: current.correct + (correct ? 1 : 0),
    wrong: current.wrong + (correct ? 0 : 1),
  };
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
  const summary = summarizeDeckProgress(deck, state.progress);

  return `
    <section class="topbar">
      <div>
        <h1>Choose what to practice</h1>
        <p>${deck.title} · ${deck.count} questions</p>
      </div>
      <button class="primary desktop-only" type="button" data-start="practice">Start</button>
    </section>

    <section class="content">
      <section class="hero-panel">
        <div>
          <span class="eyebrow">Selected</span>
          <h2>${deck.title}</h2>
          <p>Modules ${deck.range}</p>
        </div>
        <div class="hero-actions">
          <button class="primary" type="button" data-start="practice">Practice</button>
          <button class="secondary" type="button" data-start="exam">Exam</button>
        </div>
      </section>

      <section class="metrics">
        <div><span>Questions</span><strong>${deck.count}</strong></div>
        <div><span>Seen</span><strong>${summary.seen}</strong></div>
        <div><span>Accuracy</span><strong>${summary.percent}%</strong></div>
        <div><span>Missed</span><strong class="danger">${summary.wrong}</strong></div>
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
  const progress = summarizeDeckProgress(deck, state.progress);

  return `
    <button class="deck-card ${selected ? "selected" : ""}" type="button" data-deck="${deck.id}">
      <span>${deck.title}</span>
      <strong>${deck.count}</strong>
      <small>${progress.percent}% accuracy</small>
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
  const answerCount = question.correctAnswers.length;
  const hasChoices = question.options.length > 0;

  return `
    <section class="trainer ${mode}">
      <header class="question-top">
        <button class="back-button" type="button" data-screen="home">Back</button>
        <div>
          <h1>${mode === "exam" ? "Exam" : "Practice"}</h1>
          <p>${deck.title} · ${state.session.index + 1}/${state.session.questions.length}</p>
        </div>
        ${mode === "exam" ? `<button class="secondary" type="button" data-action="submit-exam">Submit</button>` : ""}
      </header>

      ${
        examDone
          ? renderExamResult(score)
          : `
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
            const progress = summarizeDeckProgress(deck, state.progress);
            return `
              <div class="stat-row">
                <div>
                  <strong>${deck.title}</strong>
                  <small>${progress.seen}/${deck.count} seen</small>
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
    button.addEventListener("click", () => setScreen(button.dataset.screen));
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
    });
  });
}

render();
