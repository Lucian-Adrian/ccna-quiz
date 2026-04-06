import mod1 from "../mod1.md?raw";
import mod2 from "../mod2.md?raw";
import mod3 from "../mod3.md?raw";
import { shuffleCards } from "./parser.js";
import { getOptionState, hydrateCards, summarizeProgress } from "./study.js";
import "./styles.css";

const STORAGE_KEY = "cisco-flashcards-progress-v2";

const modules = [
  { id: "mod1", label: "Module 1", markdown: mod1 },
  { id: "mod2", label: "Module 2", markdown: mod2 },
  { id: "mod3", label: "Module 3", markdown: mod3 },
];

const moduleCards = modules.map((module) => ({
  ...module,
  cards: hydrateCards(module.id, module.label, module.markdown),
}));

const allCards = moduleCards.flatMap((module) => module.cards);
const app = document.querySelector("#app");

const state = {
  moduleFilter: "all",
  focusFilter: "all",
  mode: "quiz",
  orderSeed: Date.now(),
  order: [],
  index: 0,
  revealed: false,
  selected: [],
  progress: loadProgress(),
  notice: "Quiz mode shows options first. Flip mode hides them until you reveal the back.",
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function getProgress(card) {
  return state.progress[card.id] ?? { streak: 0, seen: 0, correct: 0, wrong: 0 };
}

function matchesFocus(card) {
  const progress = getProgress(card);

  if (state.focusFilter === "new") {
    return progress.seen === 0;
  }

  if (state.focusFilter === "needs-work") {
    return progress.wrong > 0 && progress.streak < 2;
  }

  if (state.focusFilter === "mastered") {
    return progress.streak >= 3;
  }

  return true;
}

function getFilteredCards() {
  return allCards.filter((card) => {
    const moduleMatch = state.moduleFilter === "all" || card.moduleId === state.moduleFilter;
    return moduleMatch && matchesFocus(card);
  });
}

function buildOrder() {
  const cards = getFilteredCards().map((card) => ({
    ...card,
    progress: getProgress(card),
  }));

  if (cards.length === 0) {
    state.order = [];
    state.index = 0;
    state.revealed = false;
    state.selected = [];
    return;
  }

  const groups = new Map();
  for (const card of cards) {
    const key = Math.min(card.progress.streak, 5);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(card);
  }

  const ordered = [];
  const sortedKeys = [...groups.keys()].sort((left, right) => left - right);
  for (const key of sortedKeys) {
    ordered.push(...shuffleCards(groups.get(key), state.orderSeed + key));
  }

  state.order = ordered;
  state.index = 0;
  state.revealed = false;
  state.selected = [];
}

function currentCard() {
  return state.order[state.index];
}

function selectedMatches(card) {
  const selected = new Set(state.selected.map(normalize));
  const answers = new Set(card.answers.map(normalize));

  if (selected.size !== answers.size) {
    return false;
  }

  for (const answer of answers) {
    if (!selected.has(answer)) {
      return false;
    }
  }

  return true;
}

function toggleSelection(option) {
  const card = currentCard();
  if (!card || state.revealed || state.mode !== "quiz") {
    return;
  }

  const existing = state.selected.includes(option);

  if (card.selectionCount === 1) {
    state.selected = existing ? [] : [option];
  } else if (existing) {
    state.selected = state.selected.filter((item) => item !== option);
  } else if (state.selected.length < card.selectionCount) {
    state.selected = [...state.selected, option];
  } else {
    state.notice = `Pick up to ${card.selectionCount} answers for this card.`;
    return;
  }

  state.notice = state.selected.length
    ? `${state.selected.length} of ${card.selectionCount} selected.`
    : "Selection cleared.";

  render();
}

function revealCard() {
  const card = currentCard();
  if (!card) {
    return;
  }

  state.revealed = true;

  if (state.mode === "quiz") {
    state.notice = selectedMatches(card)
      ? "Strong read. Check the explanation, then mark it got it."
      : "Review the correct answer, then send it back again or mark it got it.";
  } else {
    state.notice = "Back side open. Read the explanation, then score yourself.";
  }

  render();
}

function advanceCard(isSuccess) {
  const card = currentCard();
  if (!card) {
    return;
  }

  const entry = getProgress(card);
  const nextEntry = {
    ...entry,
    seen: entry.seen + 1,
    streak: isSuccess ? Math.min(entry.streak + 1, 5) : 0,
    correct: entry.correct + (isSuccess ? 1 : 0),
    wrong: entry.wrong + (isSuccess ? 0 : 1),
  };

  state.progress[card.id] = nextEntry;
  saveProgress();

  state.index += 1;
  state.revealed = false;
  state.selected = [];

  if (state.index >= state.order.length) {
    state.orderSeed = Date.now();
    buildOrder();
    state.notice = isSuccess
      ? "Round complete. Starting another pass with the weakest cards first."
      : "Round complete. Starting a fresh review pass.";
  } else {
    state.notice = isSuccess ? "Logged as got it. Next card." : "Logged for more practice. Next card.";
  }

  render();
}

function skipCard() {
  if (!state.order.length) {
    return;
  }

  state.index += 1;
  state.revealed = false;
  state.selected = [];

  if (state.index >= state.order.length) {
    state.orderSeed = Date.now();
    buildOrder();
    state.notice = "Skipped to a fresh review pass.";
  } else {
    state.notice = "Skipped.";
  }

  render();
}

function resetProgress() {
  state.progress = {};
  localStorage.removeItem(STORAGE_KEY);
  state.orderSeed = Date.now();
  buildOrder();
  state.notice = "Progress reset. You are starting from a clean deck.";
  render();
}

function setModuleFilter(filter) {
  state.moduleFilter = filter;
  state.orderSeed = Date.now();
  buildOrder();
  state.notice = `Deck changed to ${filter === "all" ? "all modules" : modules.find((module) => module.id === filter)?.label ?? filter}.`;
  render();
}

function setFocusFilter(filter) {
  state.focusFilter = filter;
  state.orderSeed = Date.now();
  buildOrder();
  state.notice = `Focus changed to ${filter.replace("-", " ")}.`;
  render();
}

function setMode(mode) {
  state.mode = mode;
  state.revealed = false;
  state.selected = [];
  state.notice =
    mode === "quiz"
      ? "Quiz mode is on. Pick an answer first, then reveal."
      : "Flashcard mode is on. Reveal the back when you are ready.";
  render();
}

function formatProgress(card) {
  const progress = getProgress(card);
  return `Seen ${progress.seen} · Streak ${progress.streak} · Right ${progress.correct} · Missed ${progress.wrong}`;
}

function render() {
  const card = currentCard();
  const total = state.order.length;
  const remaining = Math.max(total - state.index - 1, 0);
  const summary = summarizeProgress(allCards, state.progress);

  app.innerHTML = `
    <main class="shell">
      <section class="hero">
        <div>
          <p class="eyebrow">Cisco CCNA study deck</p>
          <h1>Train the three markdown modules on one phone-ready page.</h1>
          <p class="lede">Everything is local and static. Open the Vite network URL on your phone, then drill in quiz mode or flip through classic flashcards.</p>
        </div>
        <div class="hero-metrics">
          <div class="metric">
            <span>Total cards</span>
            <strong>${allCards.length}</strong>
          </div>
          <div class="metric">
            <span>Mastered</span>
            <strong>${summary.mastered}</strong>
          </div>
          <div class="metric">
            <span>Need work</span>
            <strong>${summary.needsWork}</strong>
          </div>
          <div class="metric">
            <span>Seen</span>
            <strong>${summary.seen}</strong>
          </div>
        </div>
      </section>

      <section class="control-grid">
        <div class="control-group">
          <span class="group-label">Module</span>
          <div class="toolbar">
            ${renderChip("module", "all", "All modules", state.moduleFilter)}
            ${moduleCards.map((module) => renderChip("module", module.id, module.label, state.moduleFilter)).join("")}
          </div>
        </div>

        <div class="control-group">
          <span class="group-label">Focus</span>
          <div class="toolbar">
            ${renderChip("focus", "all", "Mixed", state.focusFilter)}
            ${renderChip("focus", "new", "New", state.focusFilter)}
            ${renderChip("focus", "needs-work", "Need work", state.focusFilter)}
            ${renderChip("focus", "mastered", "Mastered", state.focusFilter)}
          </div>
        </div>

        <div class="control-group">
          <span class="group-label">Mode</span>
          <div class="toolbar">
            ${renderChip("mode", "quiz", "Quiz", state.mode)}
            ${renderChip("mode", "flash", "Flashcard", state.mode)}
            <button class="chip danger" type="button" data-action="reset">Reset progress</button>
          </div>
        </div>
      </section>

      <section class="statusbar" aria-live="polite">
        <span>${state.notice}</span>
        <span>${remaining} left in this pass</span>
      </section>

      ${card ? renderCard(card, total) : renderEmpty()}
    </main>
  `;

  wireEvents();
}

function renderChip(group, value, label, currentValue) {
  const active = currentValue === value ? "active" : "";
  return `<button class="chip ${active}" type="button" data-group="${group}" data-value="${value}">${label}</button>`;
}

function renderCard(card, total) {
  return `
    <article class="card ${state.revealed ? "revealed" : ""}">
      <div class="card-top">
        <div>
          <p class="card-kicker">${card.module}</p>
          <h2>Question ${card.number}</h2>
        </div>
        <div class="badge">${state.mode === "quiz" ? (card.selectionCount === 1 ? "single answer" : `choose ${card.selectionCount}`) : "flip + self-grade"}</div>
      </div>

      <p class="question">${card.question}</p>

      <div class="progress-line" aria-hidden="true">
        <span style="width:${Math.min(getProgress(card).streak * 20, 100)}%"></span>
      </div>

      <div class="round-note">
        <span>Card ${Math.min(state.index + 1, total)} of ${Math.max(total, 1)}</span>
        <span>${formatProgress(card)}</span>
      </div>

      ${
        state.mode === "quiz"
          ? renderQuizAnswers(card)
          : `<section class="flash-face">
              <p class="flash-hint">Front side</p>
              <p class="flash-copy">Say the answer out loud before you reveal the back. This works especially well for quick phone review sessions.</p>
            </section>`
      }

      <div class="card-actions">
        ${
          state.revealed
            ? `
              <button type="button" class="action ghost" data-action="again">Again</button>
              <button type="button" class="action primary" data-action="gotit">Got it</button>
            `
            : `
              <button type="button" class="action primary" data-action="reveal">${state.mode === "quiz" ? "Check and reveal" : "Flip card"}</button>
            `
        }
        <button type="button" class="action ghost" data-action="skip">Skip</button>
      </div>

      <div class="review-panel ${state.revealed ? "show" : ""}">
        <div class="review-head">
          <span>Back side</span>
          <strong>${card.answers.length > 1 ? "Correct answers" : "Correct answer"}</strong>
        </div>
        <p class="review-selection">Correct: ${card.answers.join(" • ")}</p>
        ${state.mode === "quiz" ? `<p class="review-selection muted">Your pick: ${state.selected.length ? state.selected.join(" • ") : "none"}</p>` : ""}
        <p>${card.explanation || "This card came without an explanation in the markdown source, so the app is using the verified answer key only."}</p>
      </div>
    </article>
  `;
}

function renderQuizAnswers(card) {
  return `
    <div class="answers" role="list" aria-label="Answer choices">
      ${card.options
        .map((option) => {
          const optionState = getOptionState(card, state.selected, option, state.revealed);
          const classes = ["answer"];

          if (optionState.selected) {
            classes.push("selected");
          }
          if (optionState.correct) {
            classes.push("correct");
          }
          if (optionState.wrong) {
            classes.push("wrong");
          }

          return `
            <button type="button" class="${classes.join(" ")}" data-option="${escapeHtml(option)}">
              <span class="answer-letter">${optionLetter(card, option)}</span>
              <span class="answer-text">${option}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderEmpty() {
  return `
    <section class="card empty">
      <h2>No cards match this filter.</h2>
      <p>Switch back to Mixed or All modules to keep studying.</p>
    </section>
  `;
}

function optionLetter(card, option) {
  const index = card.options.indexOf(option);
  return String.fromCharCode(65 + index);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function unescapeHtml(value) {
  const parser = new DOMParser();
  return parser.parseFromString(`<!doctype html><body>${value}`, "text/html").body.textContent || "";
}

function wireEvents() {
  app.querySelectorAll("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.group;
      const value = button.dataset.value ?? "";

      if (group === "module") {
        setModuleFilter(value);
      } else if (group === "focus") {
        setFocusFilter(value);
      } else if (group === "mode") {
        setMode(value);
      }
    });
  });

  app.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleSelection(unescapeHtml(button.dataset.option ?? ""));
    });
  });

  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;

      if (action === "reveal") {
        revealCard();
      } else if (action === "again") {
        advanceCard(false);
      } else if (action === "gotit") {
        advanceCard(true);
      } else if (action === "skip") {
        skipCard();
      } else if (action === "reset") {
        resetProgress();
      }
    });
  });
}

buildOrder();
render();
