import "./styles.css";
import { MODULE_SOURCES } from "./module-sources.js";
import { shuffleCards } from "./parser.js";
import { buildModuleLibrary, getProgressEntry, recordAttempt, summarizeModules, theorySectionsForModule } from "./progress.js";

const STORAGE_KEY = "ccna-study-workspace-v3";
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
  learnView: "tickets",
  currentModuleId: initialModule.id,
  selectedCardId: initialCard.id,
  searchQuery: "",
  selectedOptions: [],
  learnChecked: false,
  learnResult: null,
  progress: loadProgress(),
  notice: "Alege un bilet, raspunde, apoi verifica. Statisticile se salveaza local pentru fiecare intrebare.",
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
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
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

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function selectedMatches(card, selectedOptions) {
  const selected = new Set(selectedOptions.map(normalize));
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

function currentModule() {
  return moduleMap.get(state.currentModuleId) ?? library.modules[0];
}

function currentCard() {
  return cardMap.get(state.selectedCardId) ?? currentModule().cards[0];
}

function filteredModuleCards() {
  const query = normalize(state.searchQuery);
  const cards = currentModule().cards;

  if (!query) {
    return cards;
  }

  return cards.filter((card) => {
    const haystack = `${card.number} ${card.question} ${card.answers.join(" ")} ${card.explanation}`.toLowerCase();
    return haystack.includes(query);
  });
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

function setModule(moduleId) {
  state.currentModuleId = moduleId;
  state.searchQuery = "";
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
    state.notice = isCorrect ? "Raspuns corect. Continua cu urmatorul bilet." : "Raspuns gresit. Citeste explicatia si incearca din nou mai tarziu.";
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
  state.notice = "Examen pornit. Raspunde, verifica si continua.";
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
    state.notice = "Selecteaza macar un raspuns inainte sa verifici.";
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
  state.notice = isCorrect ? "Corect. Verifica explicatia si continua." : "Gresit. Citeste explicatia si continua.";
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

function hardestQuestions() {
  return library.cards
    .map((card) => ({ card, progress: getProgressEntry(state.progress, card.id) }))
    .filter(({ progress }) => progress.wrong > 0)
    .sort((left, right) => right.progress.wrong - left.progress.wrong || left.card.module.localeCompare(right.card.module))
    .slice(0, 8);
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

function overallAccuracy() {
  const correct = totalCorrect(state.progress);
  const wrong = totalWrong(state.progress);
  return correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
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
  app.innerHTML = `
    <main class="workspace">
      <header class="header">
        <div>
          <p class="kicker">Testare online</p>
          <h1>CCNA Learning Workspace</h1>
          <p class="lede">Minimal, precise, and built for repetition. Every answer updates your local learning analytics question by question.</p>
        </div>
        <div class="header-meta">
          ${siteSwitcher()}
          <div class="stat-strip">
            <span><strong>${library.cards.length}</strong> intrebari</span>
            <span><strong>${totalAttempts(state.progress)}</strong> raspunsuri salvate</span>
            <span><strong>${overallAccuracy()}%</strong> acuratete</span>
          </div>
        </div>
      </header>

      <nav class="top-tabs" aria-label="Primary sections">
        ${renderTopTab("learn", "Educatie")}
        ${renderTopTab("exam", "Examen")}
        ${renderTopTab("stats", "Statistici")}
      </nav>

      <section class="shell">
        <aside class="sidebar">
          <div class="module-list">
            <p class="section-label">Module</p>
            ${library.modules.map((module) => renderModuleButton(module)).join("")}
          </div>
          <div class="mini-theory">
            ${renderMiniTheory()}
          </div>
        </aside>

        <section class="content">
          ${renderMainContent()}
        </section>
      </section>

      <footer class="notice" aria-live="polite">${state.notice}</footer>
    </main>
  `;

  wireEvents();
}

function renderTopTab(value, label) {
  return `<button class="tab ${state.activeTab === value ? "active" : ""}" type="button" data-tab="${value}">${label}</button>`;
}

function renderModuleButton(module) {
  const active = module.id === state.currentModuleId ? "active" : "";
  const moduleStats = summarizeModules(module.cards, state.progress)[module.id] ?? {
    attempted: 0,
    questions: module.cards.length,
    accuracy: 0,
  };

  return `
    <button class="module-button ${active}" type="button" data-module="${module.id}">
      <span class="module-name">${module.title}</span>
      <span class="module-meta">${moduleStats.attempted}/${module.cards.length} lucrate · ${moduleStats.accuracy}%</span>
    </button>
  `;
}

function renderMiniTheory() {
  const theory = theorySectionsForModule(state.currentModuleId);
  return `
    <p class="section-label">Nucleu de teorie</p>
    <h2>${theory.title}</h2>
    <p>${theory.overview}</p>
    <ul class="bullet-list">
      ${theory.keyIdeas.slice(0, 3).map((idea) => `<li>${idea}</li>`).join("")}
    </ul>
  `;
}

function renderMainContent() {
  if (state.activeTab === "learn") {
    return renderLearnView();
  }

  if (state.activeTab === "exam") {
    return renderExamView();
  }

  return renderStatsView();
}

function renderLearnView() {
  const cards = filteredModuleCards();

  return `
    <div class="subtabs">
      <button class="subtab ${state.learnView === "tickets" ? "active" : ""}" type="button" data-learn-view="tickets">Bilete</button>
      <button class="subtab ${state.learnView === "theory" ? "active" : ""}" type="button" data-learn-view="theory">Teorie</button>
    </div>

    ${state.learnView === "tickets" ? renderTicketWorkspace(cards) : renderTheoryWorkspace()}
  `;
}

function renderTicketWorkspace(cards) {
  const card = currentCard();
  const progress = getProgressEntry(state.progress, card.id);
  const theory = theorySectionsForModule(card.moduleId);
  const selectedLookup = new Set(state.selectedOptions.map(normalize));
  const answerLookup = new Set(card.answers.map(normalize));

  return `
    <div class="toolbar-row">
      <label class="search">
        <span>Cauta</span>
        <input type="text" value="${escapeHtml(state.searchQuery)}" placeholder="cuvant cheie, concept, raspuns" data-search />
      </label>
      <div class="legend">
        <span class="legend-item"><i class="dot fresh"></i> Nou</span>
        <span class="legend-item"><i class="dot active"></i> In progres</span>
        <span class="legend-item"><i class="dot mastered"></i> Invatat</span>
        <span class="legend-item"><i class="dot struggling"></i> De repetat</span>
      </div>
    </div>

    <div class="tickets-layout">
      <section class="ticket-grid" aria-label="Question navigator">
        ${cards.map((item) => renderTicket(item)).join("")}
      </section>

      <section class="detail-pane">
        <div class="detail-head">
          <div>
            <p class="detail-kicker">${card.module}</p>
            <h2>Intrebarea ${card.number}</h2>
          </div>
          <div class="detail-stats">
            <span>${progress.attempts} raspunsuri</span>
            <span>${progress.correct} bune</span>
            <span>${progress.wrong} gresite</span>
            <span>${progress.streak} streak</span>
          </div>
        </div>

        <p class="question-copy">${card.question}</p>

        <div class="option-list">
          ${card.options.map((option, index) => {
            const selected = selectedLookup.has(normalize(option));
            const correct = state.learnChecked && answerLookup.has(normalize(option));
            const wrong = state.learnChecked && selected && !correct;

            return `
              <button class="option ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" type="button" data-learn-option="${escapeHtml(option)}">
                <span class="option-index">${index + 1}</span>
                <span>${option}</span>
              </button>
            `;
          }).join("")}
        </div>

        <div class="action-row">
          <button class="primary-action" type="button" data-action="check-learn">Verifica raspunsul</button>
          <button class="secondary-action" type="button" data-action="show-theory">Arata explicatia</button>
          <button class="secondary-action" type="button" data-action="next-learn">Urmatorul bilet</button>
          <button class="secondary-action" type="button" data-action="reset-learn">Reseteaza</button>
        </div>

        <div class="result-line ${state.learnChecked ? "show" : ""}">
          ${
            state.learnChecked
              ? state.learnResult === null
                ? "Ai deschis explicatia fara verificare."
                : state.learnResult
                  ? "Raspuns corect."
                  : "Raspuns gresit."
              : "Selecteaza raspunsul si verifica pentru a salva progresul."
          }
        </div>

        <section class="explanation-pane ${state.learnChecked ? "show" : ""}">
          <h3>Explicatie</h3>
          <p>${card.explanation}</p>
          <h3>Context de baza</h3>
          <p>${theory.overview}</p>
          <ul class="bullet-list">
            ${theory.keyIdeas.slice(0, 2).map((idea) => `<li>${idea}</li>`).join("")}
          </ul>
        </section>
      </section>
    </div>
  `;
}

function renderTicket(card) {
  const active = card.id === state.selectedCardId ? "active" : "";
  const status = questionStatus(card);
  return `<button class="ticket ${active} ${status}" type="button" data-card="${card.id}">${card.number}</button>`;
}

function renderTheoryWorkspace() {
  const theory = theorySectionsForModule(state.currentModuleId);
  const module = currentModule();
  const stats = summarizeModules(module.cards, state.progress)[module.id] ?? {
    questions: module.cards.length,
    attempted: 0,
    accuracy: 0,
    mastered: 0,
  };

  return `
    <article class="theory-layout">
      <div class="theory-header">
        <div>
          <p class="detail-kicker">Fundament</p>
          <h2>${theory.title}</h2>
        </div>
        <div class="detail-stats">
          <span>${stats.questions} intrebari</span>
          <span>${stats.attempted} incercate</span>
          <span>${stats.mastered} invatate</span>
          <span>${stats.accuracy}% acuratete</span>
        </div>
      </div>

      <section class="theory-block">
        <h3>Panorama</h3>
        <p>${theory.overview}</p>
      </section>

      <section class="theory-block">
        <h3>Idei-cheie</h3>
        <ul class="bullet-list">
          ${theory.keyIdeas.map((idea) => `<li>${idea}</li>`).join("")}
        </ul>
      </section>

      <section class="theory-block">
        <h3>Glosar rapid</h3>
        <div class="glossary">
          ${theory.glossary.map((item) => `
            <div class="glossary-row">
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
        <div class="setup-block">
          <p class="section-label">Configurare examen</p>
          <h2>Simulare minimalista</h2>
          <p>Foloseste modulul curent sau toate modulele, alege lungimea sesiunii si incepe un examen cronometrat. Fiecare raspuns se salveaza separat in statistici.</p>
        </div>
        <div class="setup-grid">
          <label class="select-group">
            <span>Scop</span>
            <select data-exam-scope>
              <option value="module" ${state.exam.scope === "module" ? "selected" : ""}>Modul curent</option>
              <option value="all" ${state.exam.scope === "all" ? "selected" : ""}>Toate modulele</option>
            </select>
          </label>
          <label class="select-group">
            <span>Lungime</span>
            <select data-exam-length>
              <option value="10" ${state.exam.length === 10 ? "selected" : ""}>10 intrebari</option>
              <option value="20" ${state.exam.length === 20 ? "selected" : ""}>20 intrebari</option>
              <option value="30" ${state.exam.length === 30 ? "selected" : ""}>30 intrebari</option>
              <option value="0" ${state.exam.length === 0 ? "selected" : ""}>Tot setul</option>
            </select>
          </label>
        </div>
        <div class="action-row">
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
        <div class="theory-header">
          <div>
            <p class="section-label">Rezultat examen</p>
            <h2>${correct}/${state.exam.results.length} corecte</h2>
          </div>
          <div class="detail-stats">
            <span>${accuracy}% acuratete</span>
            <span>${wrong} gresite</span>
            <span>${formatDuration(elapsedExamSeconds())}</span>
          </div>
        </div>
        <div class="summary-list">
          ${state.exam.results.filter((result) => !result.isCorrect).map((result) => {
            const card = cardMap.get(result.cardId);
            return `
              <div class="summary-row">
                <strong>${card.module} · ${card.number}</strong>
                <span>${card.question}</span>
                <span>Raspuns corect: ${card.answers.join(" • ")}</span>
              </div>
            `;
          }).join("") || `<p>Ai terminat fara raspunsuri gresite.</p>`}
        </div>
        <div class="action-row">
          <button class="primary-action" type="button" data-action="restart-exam">Examen nou</button>
          <button class="secondary-action" type="button" data-action="close-exam">Inchide</button>
        </div>
      </section>
    `;
  }

  const card = currentExamCard();
  const selectedLookup = new Set(state.exam.selectedOptions.map(normalize));
  const answerLookup = new Set(card.answers.map(normalize));

  return `
    <section class="exam-live">
      <div class="theory-header">
        <div>
          <p class="section-label">Examen in curs</p>
          <h2>${card.module} · Intrebarea ${state.exam.index + 1}/${state.exam.order.length}</h2>
        </div>
        <div class="detail-stats">
          <span>${formatDuration(elapsedExamSeconds())}</span>
          <span>${card.selectionCount === 1 ? "un raspuns" : `${card.selectionCount} raspunsuri`}</span>
        </div>
      </div>

      <p class="question-copy">${card.question}</p>

      <div class="option-list">
        ${card.options.map((option, index) => {
          const selected = selectedLookup.has(normalize(option));
          const correct = state.exam.checked && answerLookup.has(normalize(option));
          const wrong = state.exam.checked && selected && !correct;

          return `
            <button class="option ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" type="button" data-exam-option="${escapeHtml(option)}">
              <span class="option-index">${index + 1}</span>
              <span>${option}</span>
            </button>
          `;
        }).join("")}
      </div>

      <div class="action-row">
        ${
          state.exam.checked
            ? `<button class="primary-action" type="button" data-action="next-exam">Continua</button>`
            : `<button class="primary-action" type="button" data-action="check-exam">Verifica</button>`
        }
        <button class="secondary-action" type="button" data-action="close-exam">Inchide examenul</button>
      </div>

      <div class="explanation-pane ${state.exam.checked ? "show" : ""}">
        <h3>Explicatie</h3>
        <p>${card.explanation}</p>
      </div>
    </section>
  `;
}

function renderStatsView() {
  const summaryByModule = summarizeModules(library.cards, state.progress);
  const hardest = hardestQuestions();

  return `
    <section class="stats-layout">
      <div class="stats-overview">
        <div class="metric-line"><span>Total raspunsuri</span><strong>${totalAttempts(state.progress)}</strong></div>
        <div class="metric-line"><span>Corecte</span><strong>${totalCorrect(state.progress)}</strong></div>
        <div class="metric-line"><span>Gresite</span><strong>${totalWrong(state.progress)}</strong></div>
        <div class="metric-line"><span>Invatate</span><strong>${totalMastered(state.progress)}</strong></div>
      </div>

      <section class="stats-table">
        <h2>Statistici pe module</h2>
        <div class="table-head">
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
      </section>

      <section class="stats-table">
        <h2>Intrebari dificile</h2>
        ${hardest.map(({ card, progress }) => `
          <div class="summary-row">
            <strong>${card.module} · ${card.number}</strong>
            <span>${card.question}</span>
            <span>${progress.wrong} raspunsuri gresite · corect: ${card.answers.join(" • ")}</span>
          </div>
        `).join("") || `<p>Inca nu exista intrebari dificile salvate.</p>`}
      </section>
    </section>
  `;
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

  app.querySelectorAll("[data-card]").forEach((button) => {
    button.addEventListener("click", () => {
      selectCard(button.dataset.card);
    });
  });

  app.querySelector("[data-search]")?.addEventListener("input", (event) => {
    state.searchQuery = event.target.value;
    const cards = filteredModuleCards();
    if (cards.length && !cards.some((card) => card.id === state.selectedCardId)) {
      state.selectedCardId = cards[0].id;
      state.selectedOptions = [];
      state.learnChecked = false;
      state.learnResult = null;
    }
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
      }
    });
  });
}

function escapeHtml(value) {
  return value
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

render();
