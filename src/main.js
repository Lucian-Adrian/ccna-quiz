import "./styles.css";
import { MODULE_SOURCES } from "./module-sources.js";
import { shuffleCards } from "./parser.js";
import { buildModuleLibrary, getProgressEntry, recordAttempt, summarizeModules, theorySectionsForModule } from "./progress.js";

const STORAGE_KEY = "ccna-study-workspace-v4";
const LEGACY_STORAGE_KEY = "ccna-study-workspace-v3";
const library = buildModuleLibrary(MODULE_SOURCES);
const moduleMap = new Map(library.modules.map((module) => [module.id, module]));
const cardMap = new Map(library.cards.map((card) => [card.id, card]));

const app = document.querySelector("#app");
const pathParts = window.location.pathname.split("/").filter(Boolean);
const siteTrack = pathParts.at(-1) === "third"
  ? "third"
  : pathParts.at(-1) === "second"
    ? "second"
    : pathParts.at(-1) === "initial"
      ? "initial"
      : "local";
const siteLinks = {
  home: siteTrack === "local" ? "/" : "../",
  initial: siteTrack === "local" ? "/" : "../initial/",
  second: siteTrack === "local" ? "/" : "../second/",
  third: siteTrack === "local" ? "/" : "../third/",
};

const initialModule = library.modules[0];
const initialCard = initialModule.cards[0];

const state = {
  activeTab: "learn",
  learnView: "questions",
  currentModuleId: initialModule.id,
  selectedCardId: initialCard.id,
  searchQuery: "",
  questionFilter: "all",
  selectedOptions: [],
  learnChecked: false,
  learnResult: null,
  progress: loadProgress(),
  notice: "Alege o intrebare, raspunde, apoi verifica. Progresul se salveaza local pentru fiecare item.",
  exam: {
    scope: "module",
    length: 20,
    running: false,
    completed: false,
    order: [],
    index: 0,
    selectedOptions: [],
    checked: false,
    results: [],
    startedAt: null,
  },
};

let timerId = null;

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_STORAGE_KEY);

  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw);
    const normalized = {};

    for (const [cardId, entry] of Object.entries(parsed)) {
      if (!entry || typeof entry !== "object") {
        continue;
      }

      normalized[cardId] = {
        attempts: entry.attempts ?? entry.seen ?? 0,
        correct: entry.correct ?? 0,
        wrong: entry.wrong ?? 0,
        streak: entry.streak ?? 0,
        lastChoice: Array.isArray(entry.lastChoice) ? entry.lastChoice : [],
        lastMode: entry.lastMode ?? "learn",
        lastSeenAt: entry.lastSeenAt ?? null,
      };
    }

    return normalized;
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function normalize(text = "") {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function unescapeHtml(value = "") {
  const parser = new DOMParser();
  return parser.parseFromString(`<!doctype html><body>${value}`, "text/html").body.textContent || "";
}

function getAnswerTexts(card) {
  return card.answers.map((answer) => answer.text);
}

function getCardSearchBlob(card) {
  return [
    card.number,
    card.question,
    ...card.options,
    ...getAnswerTexts(card),
    card.explanation.eli5,
    card.explanation.ccna,
  ].join(" ");
}

function selectedMatches(card, selectedOptions) {
  const selected = new Set(selectedOptions.map(normalize));
  const answers = new Set(getAnswerTexts(card).map(normalize));

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

function currentModule() {
  return moduleMap.get(state.currentModuleId) ?? library.modules[0];
}

function currentCard() {
  return cardMap.get(state.selectedCardId) ?? currentModule().cards[0];
}

function questionStatus(card) {
  const progress = getProgressEntry(state.progress, card.id);

  if (progress.attempts === 0) {
    return "fresh";
  }

  if (progress.streak >= 3) {
    return "mastered";
  }

  if (progress.wrong > progress.correct) {
    return "struggling";
  }

  return "active";
}

function filteredModuleCards() {
  const query = normalize(state.searchQuery);
  const cards = currentModule().cards;

  return cards.filter((card) => {
    const matchesQuery = !query || normalize(getCardSearchBlob(card)).includes(query);
    const matchesFilter = state.questionFilter === "all" || questionStatus(card) === state.questionFilter;
    return matchesQuery && matchesFilter;
  });
}

function ensureVisibleSelection() {
  const visible = filteredModuleCards();

  if (!visible.length) {
    state.selectedCardId = currentModule().cards[0]?.id ?? null;
    return;
  }

  if (!visible.some((card) => card.id === state.selectedCardId)) {
    state.selectedCardId = visible[0].id;
    state.selectedOptions = [];
    state.learnChecked = false;
    state.learnResult = null;
  }
}

function setModule(moduleId) {
  state.currentModuleId = moduleId;
  state.searchQuery = "";
  state.questionFilter = "all";
  state.selectedOptions = [];
  state.learnChecked = false;
  state.learnResult = null;
  state.selectedCardId = currentModule().cards[0].id;
  state.notice = `Ai deschis ${currentModule().title}.`;
  render();
}

function selectCard(cardId) {
  state.selectedCardId = cardId;
  state.selectedOptions = [];
  state.learnChecked = false;
  state.learnResult = null;
  render();
}

function setQuestionFilter(filter) {
  state.questionFilter = filter;
  ensureVisibleSelection();
  render();
}

function toggleLearnOption(option) {
  const card = currentCard();

  if (state.learnChecked) {
    return;
  }

  const exists = state.selectedOptions.includes(option);
  if (card.selectionCount === 1) {
    state.selectedOptions = exists ? [] : [option];
  } else if (exists) {
    state.selectedOptions = state.selectedOptions.filter((item) => item !== option);
  } else if (state.selectedOptions.length < card.selectionCount) {
    state.selectedOptions = [...state.selectedOptions, option];
  } else {
    state.notice = `Intrebarea cere ${card.selectionCount} raspunsuri.`;
    render();
    return;
  }

  render();
}

function checkLearnAnswer(recordStats = true) {
  const card = currentCard();
  const hasSelection = state.selectedOptions.length > 0;
  const isCorrect = hasSelection ? selectedMatches(card, state.selectedOptions) : null;

  if (recordStats && hasSelection) {
    state.progress = recordAttempt(state.progress, {
      cardId: card.id,
      isCorrect,
      selectedOptions: state.selectedOptions,
      mode: "learn",
    });
    saveProgress();
  }

  state.learnChecked = true;
  state.learnResult = isCorrect;

  if (!hasSelection) {
    state.notice = "Ai deschis explicatia fara sa trimiti un raspuns.";
  } else {
    state.notice = isCorrect
      ? "Raspuns corect. Continua cat timp informatia este proaspata."
      : "Raspuns gresit. Citeste explicatia si repeta intrebarea.";
  }

  render();
}

function nextLearnCard() {
  const cards = filteredModuleCards();
  const currentIndex = cards.findIndex((card) => card.id === state.selectedCardId);
  const next = cards[currentIndex + 1] ?? cards[0];

  if (next) {
    selectCard(next.id);
  }
}

function resetLearnPane() {
  state.selectedOptions = [];
  state.learnChecked = false;
  state.learnResult = null;
  render();
}

function currentExamCard() {
  return state.exam.order[state.exam.index] ?? null;
}

function setExamScope(scope) {
  state.exam.scope = scope;
  render();
}

function setExamLength(length) {
  state.exam.length = Number(length);
  render();
}

function buildExamOrder() {
  const sourceCards = state.exam.scope === "module" ? [...currentModule().cards] : [...library.cards];
  const shuffled = shuffleCards(sourceCards, Date.now());
  const limit = state.exam.length === 0 ? shuffled.length : Math.min(state.exam.length, shuffled.length);
  return shuffled.slice(0, limit);
}

function ensureTimer() {
  if (timerId) {
    clearInterval(timerId);
  }

  if (state.exam.running && !state.exam.completed) {
    timerId = window.setInterval(() => {
      render();
    }, 1000);
  }
}

function startExam() {
  state.exam.order = buildExamOrder();
  state.exam.index = 0;
  state.exam.selectedOptions = [];
  state.exam.checked = false;
  state.exam.results = [];
  state.exam.running = true;
  state.exam.completed = false;
  state.exam.startedAt = Date.now();
  state.notice = "Examenul a pornit.";
  ensureTimer();
  render();
}

function stopExam() {
  state.exam.running = false;
  state.exam.completed = false;
  state.exam.order = [];
  state.exam.index = 0;
  state.exam.selectedOptions = [];
  state.exam.checked = false;
  state.exam.results = [];
  state.exam.startedAt = null;
  ensureTimer();
  render();
}

function toggleExamOption(option) {
  const card = currentExamCard();

  if (!card || state.exam.checked) {
    return;
  }

  const exists = state.exam.selectedOptions.includes(option);
  if (card.selectionCount === 1) {
    state.exam.selectedOptions = exists ? [] : [option];
  } else if (exists) {
    state.exam.selectedOptions = state.exam.selectedOptions.filter((item) => item !== option);
  } else if (state.exam.selectedOptions.length < card.selectionCount) {
    state.exam.selectedOptions = [...state.exam.selectedOptions, option];
  } else {
    state.notice = `Examenul cere ${card.selectionCount} raspunsuri pentru aceasta intrebare.`;
  }

  render();
}

function checkExamAnswer() {
  const card = currentExamCard();

  if (!card || state.exam.selectedOptions.length === 0) {
    state.notice = "Selecteaza cel putin un raspuns inainte sa verifici.";
    render();
    return;
  }

  const isCorrect = selectedMatches(card, state.exam.selectedOptions);
  state.progress = recordAttempt(state.progress, {
    cardId: card.id,
    isCorrect,
    selectedOptions: state.exam.selectedOptions,
    mode: "exam",
  });
  saveProgress();

  state.exam.results = [
    ...state.exam.results,
    {
      cardId: card.id,
      isCorrect,
      selectedOptions: [...state.exam.selectedOptions],
    },
  ];
  state.exam.checked = true;
  state.notice = isCorrect ? "Corect. Continua." : "Gresit. Citeste explicatia si continua.";
  render();
}

function nextExamCard() {
  state.exam.index += 1;
  state.exam.selectedOptions = [];
  state.exam.checked = false;

  if (state.exam.index >= state.exam.order.length) {
    state.exam.running = false;
    state.exam.completed = true;
    ensureTimer();
  }

  render();
}

function reviewExamMistakes() {
  const firstWrong = state.exam.results.find((result) => !result.isCorrect);

  if (!firstWrong) {
    state.activeTab = "learn";
    state.learnView = "questions";
    state.notice = "Nu exista intrebari gresite de revizuit.";
    render();
    return;
  }

  const card = cardMap.get(firstWrong.cardId);
  state.activeTab = "learn";
  state.learnView = "questions";
  state.currentModuleId = card.moduleId;
  state.selectedCardId = card.id;
  state.searchQuery = "";
  state.questionFilter = "all";
  state.selectedOptions = [];
  state.learnChecked = true;
  state.learnResult = false;
  state.notice = `Ai revenit la ${card.module}, intrebarea ${card.number}.`;
  render();
}

function totalAttempts(progress) {
  return Object.values(progress).reduce((sum, entry) => sum + (entry.attempts ?? 0), 0);
}

function totalCorrect(progress) {
  return Object.values(progress).reduce((sum, entry) => sum + (entry.correct ?? 0), 0);
}

function totalWrong(progress) {
  return Object.values(progress).reduce((sum, entry) => sum + (entry.wrong ?? 0), 0);
}

function totalMastered(progress) {
  return Object.values(progress).filter((entry) => (entry.streak ?? 0) >= 3).length;
}

function totalReviewed(progress) {
  return Object.values(progress).filter((entry) => (entry.attempts ?? 0) > 0).length;
}

function overallAccuracy() {
  const correct = totalCorrect(state.progress);
  const wrong = totalWrong(state.progress);
  return correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
}

function elapsedExamSeconds() {
  if (!state.exam.startedAt) {
    return 0;
  }

  return Math.max(Math.floor((Date.now() - state.exam.startedAt) / 1000), 0);
}

function formatDuration(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function formatRelativeTime(value) {
  if (!value) {
    return "inca neexersata";
  }

  const diff = Date.now() - new Date(value).getTime();
  const minutes = Math.max(Math.floor(diff / 60000), 0);

  if (minutes < 1) {
    return "acum";
  }

  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} h`;
  }

  const days = Math.floor(hours / 24);
  return `${days} z`;
}

function questionMetrics(card) {
  const progress = getProgressEntry(state.progress, card.id);
  const total = progress.correct + progress.wrong;
  const accuracy = total > 0 ? Math.round((progress.correct / total) * 100) : 0;

  return {
    ...progress,
    accuracy,
    status: questionStatus(card),
  };
}

function hardestQuestions() {
  return library.cards
    .map((card) => ({ card, progress: questionMetrics(card) }))
    .filter(({ progress }) => progress.wrong > 0)
    .sort((left, right) => right.progress.wrong - left.progress.wrong || left.card.module.localeCompare(right.card.module))
    .slice(0, 10);
}

function siteSwitcher() {
  if (siteTrack === "local") {
    return "";
  }

  return `
    <nav class="site-switcher" aria-label="Published branches">
      <a class="site-link" href="${siteLinks.home}">Hub</a>
      <a class="site-link ${siteTrack === "initial" ? "active" : ""}" href="${siteLinks.initial}">Initial</a>
      <a class="site-link ${siteTrack === "second" ? "active" : ""}" href="${siteLinks.second}">Second</a>
      <a class="site-link ${siteTrack === "third" ? "active" : ""}" href="${siteLinks.third}">Third</a>
    </nav>
  `;
}

function render() {
  ensureVisibleSelection();

  app.innerHTML = `
    <main class="app-shell">
      <header class="app-header">
        <div class="brand">
          <p class="eyebrow">CCNA Study System</p>
          <h1>CCNA Focus</h1>
          <p class="subcopy">Structured questions, clearer explanations, and local stats that keep pace with your practice.</p>
        </div>
        <div class="header-side">
          ${siteSwitcher()}
          <div class="metric-row">
            <div class="metric-pill"><span>Questions</span><strong>${library.cards.length}</strong></div>
            <div class="metric-pill"><span>Reviewed</span><strong>${totalReviewed(state.progress)}</strong></div>
            <div class="metric-pill"><span>Accuracy</span><strong>${overallAccuracy()}%</strong></div>
          </div>
        </div>
      </header>

      <nav class="primary-nav" aria-label="Primary sections">
        ${renderPrimaryTab("learn", "Educatie")}
        ${renderPrimaryTab("exam", "Examen")}
        ${renderPrimaryTab("stats", "Statistici")}
      </nav>

      <section class="workspace-frame">
        <aside class="module-rail">
          <div class="rail-block">
            <p class="eyebrow">Module</p>
            ${library.modules.map((module) => renderModuleButton(module)).join("")}
          </div>
          <div class="rail-block rail-theory">
            ${renderRailTheory()}
          </div>
        </aside>

        <section class="workspace-main">
          ${renderActiveView()}
        </section>
      </section>

      <footer class="status-strip" aria-live="polite">${state.notice}</footer>
    </main>
  `;

  wireEvents();
}

function renderPrimaryTab(value, label) {
  return `<button class="primary-tab ${state.activeTab === value ? "active" : ""}" type="button" data-tab="${value}">${label}</button>`;
}

function renderModuleButton(module) {
  const active = module.id === state.currentModuleId ? "active" : "";
  const summary = summarizeModules(module.cards, state.progress)[module.id] ?? {
    attempted: 0,
    questions: module.cards.length,
    accuracy: 0,
    mastered: 0,
  };

  return `
    <button class="module-button ${active}" type="button" data-module="${module.id}">
      <span class="module-label">${module.title}</span>
      <span class="module-meta">${summary.attempted}/${module.cards.length} lucrate · ${summary.accuracy}%</span>
    </button>
  `;
}

function renderRailTheory() {
  const theory = theorySectionsForModule(state.currentModuleId);

  return `
    <p class="eyebrow">Fara zgomot</p>
    <h2>${theory.title}</h2>
    <p class="rail-copy">${theory.overview}</p>
    <ul class="compact-list">
      ${theory.keyIdeas.slice(0, 3).map((idea) => `<li>${idea}</li>`).join("")}
    </ul>
  `;
}

function renderActiveView() {
  if (state.activeTab === "learn") {
    return renderLearnView();
  }

  if (state.activeTab === "exam") {
    return renderExamView();
  }

  return renderStatsView();
}

function renderLearnView() {
  return `
    <section class="view-header">
      <div>
        <p class="eyebrow">Mod curent</p>
        <h2>${currentModule().title}</h2>
      </div>
      <div class="secondary-nav">
        <button class="secondary-tab ${state.learnView === "questions" ? "active" : ""}" type="button" data-learn-view="questions">Intrebari</button>
        <button class="secondary-tab ${state.learnView === "theory" ? "active" : ""}" type="button" data-learn-view="theory">Teorie</button>
      </div>
    </section>
    ${state.learnView === "questions" ? renderQuestionWorkspace() : renderTheoryWorkspace()}
  `;
}

function renderQuestionWorkspace() {
  const cards = filteredModuleCards();

  return `
    <section class="toolbar">
      <label class="search-field">
        <span>Cauta</span>
        <input type="text" value="${escapeHtml(state.searchQuery)}" placeholder="termen, protocol, raspuns" data-search />
      </label>
      <div class="filter-chips" aria-label="Question filters">
        ${renderFilterChip("all", "Toate")}
        ${renderFilterChip("fresh", "Noi")}
        ${renderFilterChip("active", "In progres")}
        ${renderFilterChip("struggling", "De repetat")}
        ${renderFilterChip("mastered", "Invatate")}
      </div>
    </section>
    ${
      cards.length
        ? renderQuestionLayout(cards)
        : `
          <section class="empty-state">
            <h3>Nicio intrebare pentru filtrul curent</h3>
            <p>Scoate filtrul sau cautarea pentru a reveni la setul complet.</p>
          </section>
        `
    }
  `;
}

function renderFilterChip(value, label) {
  return `<button class="filter-chip ${state.questionFilter === value ? "active" : ""}" type="button" data-filter="${value}">${label}</button>`;
}

function renderQuestionLayout(cards) {
  const card = currentCard();
  const metrics = questionMetrics(card);
  const selectedLookup = new Set(state.selectedOptions.map(normalize));
  const answerLookup = new Set(getAnswerTexts(card).map(normalize));

  return `
    <section class="question-layout">
      <aside class="question-index">
        <div class="index-head">
          <div>
            <p class="eyebrow">Bilete</p>
            <h3>${cards.length} vizibile</h3>
          </div>
          <div class="legend">
            <span><i class="status-dot fresh"></i> Nou</span>
            <span><i class="status-dot active"></i> Activ</span>
            <span><i class="status-dot mastered"></i> Invatat</span>
            <span><i class="status-dot struggling"></i> Revino</span>
          </div>
        </div>
        <div class="number-grid">
          ${cards.map((item) => renderQuestionButton(item)).join("")}
        </div>
      </aside>

      <article class="question-stage">
        <div class="stage-top">
          <div>
            <p class="eyebrow">${card.module}</p>
            <h3>Intrebarea ${card.number}</h3>
          </div>
          <div class="stage-stats">
            <span>${metrics.attempts} incercari</span>
            <span>${metrics.accuracy}% corect</span>
            <span>${metrics.streak} streak</span>
            <span>${formatRelativeTime(metrics.lastSeenAt)}</span>
          </div>
        </div>

        <p class="question-text">${card.question}</p>

        <div class="helper-line">
          <span>${card.selectionCount === 1 ? "Alege un raspuns" : `Alege ${card.selectionCount} raspunsuri`}</span>
          <span class="status-tag ${metrics.status}">${statusLabel(metrics.status)}</span>
        </div>

        <div class="answer-list">
          ${card.options.map((option, index) => {
            const selected = selectedLookup.has(normalize(option));
            const correct = state.learnChecked && answerLookup.has(normalize(option));
            const wrong = state.learnChecked && selected && !correct;

            return `
              <button class="answer-option ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" type="button" data-learn-option="${escapeHtml(option)}">
                <span class="answer-index">${index + 1}</span>
                <span>${option}</span>
              </button>
            `;
          }).join("")}
        </div>

        <div class="action-bar">
          <button class="primary-action" type="button" data-action="check-learn">Verifica</button>
          <button class="ghost-action" type="button" data-action="show-theory">Arata explicatia</button>
          <button class="ghost-action" type="button" data-action="next-learn">Urmatoarea</button>
          <button class="ghost-action" type="button" data-action="reset-learn">Reset</button>
        </div>

        <div class="feedback-band ${state.learnChecked ? "show" : ""} ${state.learnResult === false ? "wrong" : "correct"}">
          ${
            state.learnChecked
              ? state.learnResult === null
                ? "Explicatia este deschisa fara verificare."
                : state.learnResult
                  ? "Corect. Intareste acum logica raspunsului."
                  : "Gresit. Citeste logica si mai treci o data prin intrebare."
              : "Verifica raspunsul pentru a salva statistica acestei intrebari."
          }
        </div>

        <section class="explanation-grid ${state.learnChecked ? "show" : ""}">
          <div class="explanation-block">
            <p class="eyebrow">Raspuns corect</p>
            <ul class="answer-key-list">
              ${card.answers.map((answer) => `<li>${answer.text}</li>`).join("")}
            </ul>
          </div>
          <div class="explanation-block">
            <p class="eyebrow">ELI5</p>
            <p>${card.explanation.eli5}</p>
          </div>
          <div class="explanation-block">
            <p class="eyebrow">CCNA</p>
            <p>${card.explanation.ccna}</p>
          </div>
          <div class="explanation-block span-two">
            <p class="eyebrow">Detaliu pe raspuns</p>
            <div class="rationale-list">
              ${card.answers.map((answer) => `
                <article class="rationale-item">
                  <strong>${answer.text}</strong>
                  <p>${answer.explanation.eli5}</p>
                  <p class="rationale-ccna">${answer.explanation.ccna}</p>
                </article>
              `).join("")}
            </div>
          </div>
        </section>
      </article>
    </section>
  `;
}

function renderQuestionButton(card) {
  const active = card.id === state.selectedCardId ? "active" : "";
  const status = questionStatus(card);
  return `<button class="question-chip ${active} ${status}" type="button" data-card="${card.id}">${card.number}</button>`;
}

function renderTheoryWorkspace() {
  const module = currentModule();
  const theory = theorySectionsForModule(module.id);
  const stats = summarizeModules(module.cards, state.progress)[module.id] ?? {
    questions: module.cards.length,
    attempted: 0,
    accuracy: 0,
    mastered: 0,
  };

  return `
    <article class="theory-layout">
      <section class="theory-hero">
        <div>
          <p class="eyebrow">Fundament</p>
          <h3>${theory.title}</h3>
          <p>${theory.overview}</p>
        </div>
        <div class="metric-column">
          <div class="mini-metric"><span>Intrebari</span><strong>${stats.questions}</strong></div>
          <div class="mini-metric"><span>Incercate</span><strong>${stats.attempted}</strong></div>
          <div class="mini-metric"><span>Invatate</span><strong>${stats.mastered}</strong></div>
          <div class="mini-metric"><span>Acuratete</span><strong>${stats.accuracy}%</strong></div>
        </div>
      </section>

      <section class="theory-section">
        <p class="eyebrow">Idei-cheie</p>
        <ul class="compact-list large">
          ${theory.keyIdeas.map((idea) => `<li>${idea}</li>`).join("")}
        </ul>
      </section>

      <section class="theory-section">
        <p class="eyebrow">Glosar</p>
        <div class="glossary-list">
          ${theory.glossary.map((item) => `
            <div class="glossary-item">
              <strong>${item.term}</strong>
              <span>${item.definition}</span>
            </div>
          `).join("")}
        </div>
      </section>
    </article>
  `;
}

function renderExamView() {
  if (!state.exam.running && !state.exam.completed) {
    return `
      <section class="exam-setup">
        <div class="view-header compact">
          <div>
            <p class="eyebrow">Simulare</p>
            <h2>Examen rapid</h2>
          </div>
        </div>
        <p class="subcopy section-copy">Ruleaza o sesiune cronometrata, salveaza fiecare raspuns si revino imediat la intrebarile ratate.</p>
        <div class="setup-row">
          <label class="select-field">
            <span>Scop</span>
            <select data-exam-scope>
              <option value="module" ${state.exam.scope === "module" ? "selected" : ""}>Modul curent</option>
              <option value="all" ${state.exam.scope === "all" ? "selected" : ""}>Toate modulele</option>
            </select>
          </label>
          <label class="select-field">
            <span>Lungime</span>
            <select data-exam-length>
              <option value="10" ${state.exam.length === 10 ? "selected" : ""}>10</option>
              <option value="20" ${state.exam.length === 20 ? "selected" : ""}>20</option>
              <option value="30" ${state.exam.length === 30 ? "selected" : ""}>30</option>
              <option value="0" ${state.exam.length === 0 ? "selected" : ""}>Tot</option>
            </select>
          </label>
        </div>
        <div class="action-bar">
          <button class="primary-action" type="button" data-action="start-exam">Porneste examenul</button>
        </div>
      </section>
    `;
  }

  if (state.exam.completed) {
    const correct = state.exam.results.filter((result) => result.isCorrect).length;
    const wrong = state.exam.results.length - correct;
    const accuracy = state.exam.results.length ? Math.round((correct / state.exam.results.length) * 100) : 0;

    return `
      <section class="exam-summary">
        <div class="stage-top">
          <div>
            <p class="eyebrow">Rezultat</p>
            <h2>${correct}/${state.exam.results.length} corecte</h2>
          </div>
          <div class="stage-stats">
            <span>${accuracy}% acuratete</span>
            <span>${wrong} gresite</span>
            <span>${formatDuration(elapsedExamSeconds())}</span>
          </div>
        </div>

        <div class="summary-list">
          ${state.exam.results.filter((result) => !result.isCorrect).map((result) => {
            const card = cardMap.get(result.cardId);
            return `
              <article class="summary-item">
                <strong>${card.module} · ${card.number}</strong>
                <p>${card.question}</p>
                <span>Corect: ${getAnswerTexts(card).join(" • ")}</span>
              </article>
            `;
          }).join("") || `<p class="subcopy">Ai terminat fara raspunsuri gresite.</p>`}
        </div>

        <div class="action-bar">
          <button class="primary-action" type="button" data-action="restart-exam">Examen nou</button>
          <button class="ghost-action" type="button" data-action="review-mistakes">Revino la greseli</button>
          <button class="ghost-action" type="button" data-action="close-exam">Inchide</button>
        </div>
      </section>
    `;
  }

  const card = currentExamCard();
  const selectedLookup = new Set(state.exam.selectedOptions.map(normalize));
  const answerLookup = new Set(getAnswerTexts(card).map(normalize));

  return `
    <section class="exam-live">
      <div class="stage-top">
        <div>
          <p class="eyebrow">Examen in curs</p>
          <h2>${card.module} · ${state.exam.index + 1}/${state.exam.order.length}</h2>
        </div>
        <div class="stage-stats">
          <span>${formatDuration(elapsedExamSeconds())}</span>
          <span>${card.selectionCount === 1 ? "un raspuns" : `${card.selectionCount} raspunsuri`}</span>
        </div>
      </div>

      <p class="question-text">${card.question}</p>

      <div class="answer-list">
        ${card.options.map((option, index) => {
          const selected = selectedLookup.has(normalize(option));
          const correct = state.exam.checked && answerLookup.has(normalize(option));
          const wrong = state.exam.checked && selected && !correct;

          return `
            <button class="answer-option ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" type="button" data-exam-option="${escapeHtml(option)}">
              <span class="answer-index">${index + 1}</span>
              <span>${option}</span>
            </button>
          `;
        }).join("")}
      </div>

      <div class="action-bar">
        ${
          state.exam.checked
            ? `<button class="primary-action" type="button" data-action="next-exam">Continua</button>`
            : `<button class="primary-action" type="button" data-action="check-exam">Verifica</button>`
        }
        <button class="ghost-action" type="button" data-action="close-exam">Inchide</button>
      </div>

      <section class="explanation-grid ${state.exam.checked ? "show" : ""}">
        <div class="explanation-block">
          <p class="eyebrow">Raspuns corect</p>
          <ul class="answer-key-list">
            ${card.answers.map((answer) => `<li>${answer.text}</li>`).join("")}
          </ul>
        </div>
        <div class="explanation-block">
          <p class="eyebrow">ELI5</p>
          <p>${card.explanation.eli5}</p>
        </div>
        <div class="explanation-block">
          <p class="eyebrow">CCNA</p>
          <p>${card.explanation.ccna}</p>
        </div>
      </section>
    </section>
  `;
}

function renderStatsView() {
  const summaryByModule = summarizeModules(library.cards, state.progress);

  return `
    <section class="stats-view">
      <div class="stats-overview">
        <div class="mini-metric"><span>Total raspunsuri</span><strong>${totalAttempts(state.progress)}</strong></div>
        <div class="mini-metric"><span>Corecte</span><strong>${totalCorrect(state.progress)}</strong></div>
        <div class="mini-metric"><span>Gresite</span><strong>${totalWrong(state.progress)}</strong></div>
        <div class="mini-metric"><span>Invatate</span><strong>${totalMastered(state.progress)}</strong></div>
      </div>

      <section class="stats-section">
        <div class="stage-top">
          <div>
            <p class="eyebrow">Module</p>
            <h2>Rezumat pe module</h2>
          </div>
        </div>
        <div class="table-list">
          <div class="table-row table-head">
            <span>Modul</span>
            <span>Incercate</span>
            <span>Acuratete</span>
            <span>Invatate</span>
          </div>
          ${library.modules.map((module) => {
            const stats = summaryByModule[module.id] ?? { attempted: 0, accuracy: 0, mastered: 0 };
            return `
              <div class="table-row">
                <span>${module.title}</span>
                <span>${stats.attempted}/${module.cards.length}</span>
                <span>${stats.accuracy}%</span>
                <span>${stats.mastered}</span>
              </div>
            `;
          }).join("")}
        </div>
      </section>

      <section class="stats-section">
        <div class="stage-top">
          <div>
            <p class="eyebrow">Focus</p>
            <h2>Intrebari dificile</h2>
          </div>
        </div>
        <div class="summary-list">
          ${hardestQuestions().map(({ card, progress }) => `
            <article class="summary-item">
              <strong>${card.module} · ${card.number}</strong>
              <p>${card.question}</p>
              <span>${progress.wrong} gresite · ${progress.accuracy}% corect · ${formatRelativeTime(progress.lastSeenAt)}</span>
            </article>
          `).join("") || `<p class="subcopy">Inca nu exista intrebari marcate ca dificile.</p>`}
        </div>
      </section>
    </section>
  `;
}

function statusLabel(status) {
  if (status === "fresh") {
    return "noua";
  }

  if (status === "mastered") {
    return "invatata";
  }

  if (status === "struggling") {
    return "de repetat";
  }

  return "activ";
}

function wireEvents() {
  app.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      render();
    });
  });

  app.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => {
      setModule(button.dataset.module);
    });
  });

  app.querySelectorAll("[data-learn-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.learnView = button.dataset.learnView;
      render();
    });
  });

  app.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      setQuestionFilter(button.dataset.filter);
    });
  });

  app.querySelectorAll("[data-card]").forEach((button) => {
    button.addEventListener("click", () => {
      selectCard(button.dataset.card);
    });
  });

  app.querySelector("[data-search]")?.addEventListener("input", (event) => {
    state.searchQuery = event.target.value;
    ensureVisibleSelection();
    render();
  });

  app.querySelectorAll("[data-learn-option]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleLearnOption(unescapeHtml(button.dataset.learnOption));
    });
  });

  app.querySelectorAll("[data-exam-option]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleExamOption(unescapeHtml(button.dataset.examOption));
    });
  });

  app.querySelector("[data-exam-scope]")?.addEventListener("change", (event) => {
    setExamScope(event.target.value);
  });

  app.querySelector("[data-exam-length]")?.addEventListener("change", (event) => {
    setExamLength(event.target.value);
  });

  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;

      if (action === "check-learn") {
        checkLearnAnswer(true);
      } else if (action === "show-theory") {
        checkLearnAnswer(false);
      } else if (action === "next-learn") {
        nextLearnCard();
      } else if (action === "reset-learn") {
        resetLearnPane();
      } else if (action === "start-exam") {
        startExam();
      } else if (action === "check-exam") {
        checkExamAnswer();
      } else if (action === "next-exam") {
        nextExamCard();
      } else if (action === "close-exam") {
        stopExam();
      } else if (action === "restart-exam") {
        state.exam.completed = false;
        startExam();
      } else if (action === "review-mistakes") {
        reviewExamMistakes();
      }
    });
  });
}

render();
