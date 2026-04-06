import mod1 from "../mod1.md?raw";
import mod2 from "../mod2.md?raw";
import mod3 from "../mod3.md?raw";
import { parseQuizMarkdown, shuffleCards } from "./parser.js";
import "./styles.css";

const STORAGE_KEY = "cisco-flashcards-progress-v1";

const modules = [
  { id: "mod1", label: "Module 1", markdown: mod1 },
  { id: "mod2", label: "Module 2", markdown: mod2 },
  { id: "mod3", label: "Module 3", markdown: mod3 },
];

const moduleCards = modules.map((module) => ({
  ...module,
  cards: parseQuizMarkdown(module.markdown, module.label).map((card) => ({
    ...card,
    id: `${module.id}-${card.number}`,
    moduleId: module.id,
  })),
}));

const allCards = moduleCards.flatMap((module) => module.cards);

const app = document.querySelector("#app");

const state = {
  filter: "all",
  orderSeed: Date.now(),
  order: [],
  index: 0,
  revealed: false,
  selected: [],
  progress: loadProgress(),
  notice: "Tap the answers, reveal, then mark yourself.",
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
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

function getFilteredCards() {
  return state.filter === "all"
    ? allCards
    : allCards.filter((card) => card.moduleId === state.filter);
}

function getProgress(card) {
  return state.progress[card.id] ?? { streak: 0, seen: 0, correct: 0, wrong: 0 };
}

function buildOrder() {
  const cards = getFilteredCards().map((card) => ({
    ...card,
    progress: getProgress(card),
  }));

  const groups = new Map();
  for (const card of cards) {
    const key = card.progress.streak;
    if (!groups.has(key)) groups.set(key, []);
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
  if (selected.size !== answers.size) return false;
  for (const answer of answers) {
    if (!selected.has(answer)) return false;
  }
  return true;
}

function toggleSelection(option) {
  const card = currentCard();
  if (!card || state.revealed) return;

  const existing = state.selected.includes(option);

  if (card.selectionCount === 1) {
    state.selected = [option];
  } else if (existing) {
    state.selected = state.selected.filter((item) => item !== option);
  } else if (state.selected.length < card.selectionCount) {
    state.selected = [...state.selected, option];
  } else {
    state.notice = `Pick up to ${card.selectionCount} answers.`;
    return;
  }

  state.notice = state.selected.length
    ? `${state.selected.length} of ${card.selectionCount} selected.`
    : "Selection cleared.";

  render();
}

function revealCard() {
  const card = currentCard();
  if (!card) return;
  state.revealed = true;
  state.notice = "Read the explanation, then mark yourself again or got it.";
  render();
}

function advanceCard(isSuccess) {
  const card = currentCard();
  if (!card) return;

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
    state.notice = isSuccess ? "Round complete. Restarting with the hardest cards first." : "Round complete. Restarting the deck.";
  } else {
    state.notice = isSuccess ? "Nice. Next card." : "Back in the queue.";
  }

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
  const mastered = allCards.filter((item) => getProgress(item).streak >= 3).length;

  app.innerHTML = `
    <main class="shell">
      <section class="hero">
        <div>
          <p class="eyebrow">Cisco CCNA flashcards</p>
          <h1>Practice the markdown modules on your phone.</h1>
          <p class="lede">Tap an option, reveal the answer, then grade yourself. The deck reshuffles so weaker cards come back sooner.</p>
        </div>
        <div class="hero-metrics">
          <div class="metric">
            <span>Cards</span>
            <strong>${allCards.length}</strong>
          </div>
          <div class="metric">
            <span>Mastered</span>
            <strong>${mastered}</strong>
          </div>
          <div class="metric">
            <span>Round</span>
            <strong>${state.index + 1}/${total || 1}</strong>
          </div>
        </div>
      </section>

      <section class="toolbar" aria-label="Deck filters">
        ${renderFilterChip("all", "All modules")}
        ${moduleCards.map((module) => renderFilterChip(module.id, module.label)).join("")}
      </section>

      <section class="statusbar" aria-live="polite">
        <span>${state.notice}</span>
        <span>${remaining} left in this round</span>
      </section>

      ${card ? renderCard(card) : renderEmpty()}
    </main>
  `;

  wireEvents();
}

function renderFilterChip(value, label) {
  const active = state.filter === value ? "active" : "";
  return `<button class="chip ${active}" type="button" data-filter="${value}">${label}</button>`;
}

function renderCard(card) {
  const selectedLookup = new Set(state.selected.map(normalize));

  return `
    <article class="card ${state.revealed ? "revealed" : ""}">
      <div class="card-top">
        <div>
          <p class="card-kicker">${card.module}</p>
          <h2>Question ${card.number}</h2>
        </div>
        <div class="badge">${card.selectionCount === 1 ? "single answer" : `choose ${card.selectionCount}`}</div>
      </div>

      <p class="question">${card.question}</p>

      <div class="progress-line" aria-hidden="true">
        <span style="width:${Math.min(getProgress(card).streak * 20, 100)}%"></span>
      </div>

      <div class="answers" role="list" aria-label="Answer choices">
        ${card.options
          .map((option) => {
            const optionSelected = selectedLookup.has(normalize(option));
            const optionCorrect = answerLookup.has(normalize(option));
            const classes = [
              "answer",
              optionSelected ? "selected" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return `
              <button type="button" class="${classes}" data-option="${escapeHtml(option)}">
                <span class="answer-letter">${optionLetter(card, option)}</span>
                <span class="answer-text">${option}</span>
              </button>
            `;
          })
          .join("")}
      </div>

      <div class="card-actions">
        ${
          state.revealed
            ? `
              <button type="button" class="action ghost" data-action="again">Again</button>
              <button type="button" class="action primary" data-action="gotit">Got it</button>
            `
            : `
              <button type="button" class="action primary" data-action="reveal">Reveal answer</button>
            `
        }
        <button type="button" class="action ghost" data-action="skip">Skip</button>
      </div>

      <div class="review-panel ${state.revealed ? "show" : ""}">
        <div class="review-head">
          <span>Back side</span>
          <strong>Explanation</strong>
        </div>
        <p class="review-selection">Your pick: ${state.selected.length ? state.selected.join(" • ") : "none yet"}</p>
        <p>${card.explanation}</p>
        <p class="review-meta">${formatProgress(card)}</p>
      </div>
    </article>
  `;
}

function renderEmpty() {
  return `
    <section class="card empty">
      <h2>No cards available.</h2>
      <p>Try switching back to all modules.</p>
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

function wireEvents() {
  app.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      state.orderSeed = Date.now();
      buildOrder();
      state.notice = `Filtered to ${button.textContent?.trim() || "all modules"}.`;
      saveProgress();
      render();
    });
  });

  app.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const option = button.dataset.option ?? "";
      toggleSelection(unescapeHtml(option));
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
        state.index += 1;
        state.revealed = false;
        state.selected = [];
        if (state.index >= state.order.length) {
          state.orderSeed = Date.now();
          buildOrder();
          state.notice = "Skipped to a new round.";
        } else {
          state.notice = "Skipped.";
        }
        render();
      }
    });
  });
}

function unescapeHtml(value) {
  const parser = new DOMParser();
  return parser.parseFromString(`<!doctype html><body>${value}`, "text/html").body.textContent || "";
}

buildOrder();
render();
