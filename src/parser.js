const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "their",
  "they",
  "this",
  "to",
  "was",
  "what",
  "when",
  "which",
  "with",
  "would",
]);

const GENERIC_NETWORK_WORDS = new Set([
  "access",
  "allow",
  "allows",
  "application",
  "applications",
  "business",
  "client",
  "company",
  "computer",
  "computers",
  "connection",
  "connections",
  "data",
  "device",
  "devices",
  "enable",
  "enables",
  "feature",
  "features",
  "global",
  "host",
  "hosts",
  "internet",
  "local",
  "mobile",
  "network",
  "networked",
  "networks",
  "organization",
  "organizations",
  "provide",
  "provides",
  "remote",
  "security",
  "secure",
  "service",
  "services",
  "system",
  "systems",
  "traffic",
  "user",
  "users",
  "wireless",
  "work",
  "workstation",
  "workstations",
]);

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalize(text)
    .split(" ")
    .filter((token) => token && !STOP_WORDS.has(token));
}

function splitSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function scoreOption(option, question, context) {
  const optionTokens = tokenize(option);
  const contextTokens = new Set(tokenize(context));
  const questionTokens = new Set(tokenize(question));
  const tokenFrequency = new Map();

  for (const token of optionTokens) {
    tokenFrequency.set(token, (tokenFrequency.get(token) ?? 0) + 1);
  }

  let score = 0;

  for (const token of optionTokens) {
    if (!contextTokens.has(token)) {
      continue;
    }

    const frequencyPenalty = tokenFrequency.get(token) ?? 1;
    const genericPenalty = GENERIC_NETWORK_WORDS.has(token) ? 0.25 : 1;
    const questionPenalty = questionTokens.has(token) ? 0.4 : 1;
    score += (genericPenalty * questionPenalty) / frequencyPenalty;
  }

  return score;
}

function selectAnswers(question, explanation, options, selectionCount) {
  const sentences = splitSentences(explanation);
  const pickedIndices = new Set();
  const selected = [];

  for (const sentence of sentences) {
    let bestIndex = -1;
    let bestScore = 0;

    options.forEach((option, index) => {
      if (pickedIndices.has(index)) return;
      const score = scoreOption(option, question, sentence);
      if (score > bestScore) {
        bestScore = score;
        bestIndex = index;
      }
    });

    if (bestIndex >= 0 && bestScore > 0 && !pickedIndices.has(bestIndex)) {
      pickedIndices.add(bestIndex);
      selected.push({ index: bestIndex, score: bestScore });
    }

    if (selected.length >= selectionCount) {
      break;
    }
  }

  if (selected.length < selectionCount) {
    const fallbackScores = options.map((option, index) => ({
      index,
      score: scoreOption(option, question, explanation),
    }));

    fallbackScores
      .sort((left, right) => right.score - left.score || left.index - right.index)
      .forEach((entry) => {
        if (selected.length >= selectionCount) {
          return;
        }
        if (pickedIndices.has(entry.index)) {
          return;
        }
        if (entry.score <= 0) {
          return;
        }
        pickedIndices.add(entry.index);
        selected.push(entry);
      });
  }

  if (selected.length < selectionCount) {
    options
      .map((option, index) => ({ index, score: scoreOption(option, question, explanation) }))
      .sort((left, right) => right.score - left.score || left.index - right.index)
      .forEach((entry) => {
        if (selected.length >= selectionCount) {
          return;
        }
        if (pickedIndices.has(entry.index)) {
          return;
        }
        pickedIndices.add(entry.index);
        selected.push(entry);
      });
  }

  return selected
    .sort((left, right) => left.index - right.index)
    .map((entry) => options[entry.index]);
}

function getSelectionCount(question) {
  if (/choose\s+two/i.test(question)) {
    return 2;
  }

  if (/choose\s+three/i.test(question)) {
    return 3;
  }

  if (/choose\s+four/i.test(question)) {
    return 4;
  }

  return 1;
}

export function parseQuizMarkdown(markdown, moduleLabel) {
  const normalized = markdown.replace(/\r\n/g, "\n").trim();
  const matches = [...normalized.matchAll(/^\s*(\d+)\.\s/gm)];
  const cards = [];

  matches.forEach((match, index) => {
    const start = match.index ?? 0;
    const end = index + 1 < matches.length ? matches[index + 1].index ?? normalized.length : normalized.length;
    const block = normalized.slice(start, end).trim();
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);

    const firstLine = lines.shift() ?? "";
    const number = Number(firstLine.match(/^(\d+)\./)?.[1] ?? 0);
    const question = firstLine.replace(/^\d+\.\s*/, "").trim();
    const selectionCount = getSelectionCount(question);
    const options = [];
    const explanationParts = [];

    let inExplanation = false;

    for (const line of lines) {
      if (/^Explanation:/i.test(line)) {
        inExplanation = true;
        explanationParts.push(line.replace(/^Explanation:\s*/i, ""));
        continue;
      }

      if (inExplanation) {
        explanationParts.push(line);
      } else {
        options.push(line);
      }
    }

    const explanation = explanationParts.join(" ").trim();
    const answers = selectAnswers(question, explanation, options, selectionCount);

    cards.push({
      number,
      module: moduleLabel,
      question,
      options,
      explanation,
      selectionCount,
      answers,
    });
  });

  return cards;
}

export function shuffleCards(cards, seed = Date.now()) {
  const shuffled = [...cards];
  let state = seed % 2147483647;

  const random = () => {
    state = (state * 48271) % 2147483647;
    return state / 2147483647;
  };

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}
