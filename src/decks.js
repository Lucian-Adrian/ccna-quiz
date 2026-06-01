export const MODULE_GROUPS = [
  { id: "m1-3", title: "Modules 1-3", range: "1-3", shortTitle: "1-3" },
  { id: "m4-7", title: "Modules 4-7", range: "4-7", shortTitle: "4-7" },
  { id: "m8-10", title: "Modules 8-10", range: "8-10", shortTitle: "8-10" },
  { id: "m11-13", title: "Modules 11-13", range: "11-13", shortTitle: "11-13" },
  { id: "m14-15", title: "Modules 14-15", range: "14-15", shortTitle: "14-15" },
  { id: "m16-17", title: "Modules 16-17", range: "16-17", shortTitle: "16-17" },
];

export const MIDTERMS = [
  { id: "midterm-1", title: "Midterm 1", range: "1-7", sourceIds: ["m1-3", "m4-7"] },
  { id: "midterm-2", title: "Midterm 2", range: "8-17", sourceIds: ["m8-10", "m11-13", "m14-15", "m16-17"] },
];

export const FINAL_GROUPS = [
  { id: "practice-final", title: "Practice Final", range: "1-17" },
  { id: "final-exam", title: "Final Exam", range: "1-17" },
];

const DAY_MS = 24 * 60 * 60 * 1000;

function prefixedId(prefix, id) {
  return prefix ? `${prefix}-${id}` : id;
}

function isInfraFinalSource(source) {
  return source.bankId === "infra" && ["practice-final", "final-exam"].includes(source.logicalId ?? source.id.replace(/^infra-/, ""));
}

export function normalizeQuestion(rawQuestion, source) {
  const matchingPairs = inferMatchingPairs(rawQuestion);
  const correctAnswers =
    matchingPairs.length > 0
      ? matchingPairs.map((pair) => formatMatchingAnswer(pair.left, pair.right))
      : rawQuestion.correct_answers ?? rawQuestion.answers ?? [];
  const explanation = isInfraFinalSource(source)
    ? buildBeginnerExplanation(rawQuestion, source, correctAnswers, matchingPairs)
    : rawQuestion.explanation ?? "";

  return {
    id: `${source.id}-${rawQuestion.number}`,
    number: rawQuestion.number,
    sourceId: source.id,
    sourceTitle: source.title,
    range: source.range,
    bankId: source.bankId,
    bankTitle: source.bankTitle,
    question: rawQuestion.question,
    options: rawQuestion.options ?? [],
    correctAnswers,
    matchingPairs,
    explanation,
    imageUrls: rawQuestion.image_urls ?? [],
    codeBlocks: rawQuestion.code_blocks ?? [],
    tables: rawQuestion.tables ?? [],
  };
}

export function buildBeginnerExplanation(rawQuestion, source, correctAnswers, matchingPairs = []) {
  const question = cleanupText(rawQuestion.question ?? "");
  const correct = correctAnswers.map(cleanupText).filter(Boolean);
  const options = (rawQuestion.options ?? []).map(cleanupText).filter(Boolean);
  const original = cleanupText(rawQuestion.explanation ?? "");
  const wrongOptions = options.filter((option) => !correct.some((answer) => normalizeAnswer(answer) === normalizeAnswer(option)));
  const concepts = conceptNotes(`${question} ${correct.join(" ")}`);
  const clue = question.replace(/\s+/g, " ").slice(0, 220);

  const sections = [
    "Beginner explanation:",
    `Correct answer${correct.length === 1 ? "" : "s"}: ${correct.join(" | ") || "Review the listed matches."}`,
    `How to reason it out: first identify exactly what the question is asking, then match the key words in the prompt to the networking concept. Here the key prompt is: "${clue}". The correct answer is the option that satisfies that requirement directly; the other options may be real networking terms, but they solve a different problem or belong to a different layer, protocol, or device role.`,
  ];

  if (matchingPairs.length > 0) {
    sections.push(
      `For the matching part, read each left-side item as the requirement and each right-side item as the exact result that fulfills it. The correct pairs are: ${matchingPairs
        .map((pair) => `${cleanupText(pair.left)} -> ${cleanupText(pair.right)}`)
        .join("; ")}.`,
    );
  }

  if (concepts.length > 0) {
    sections.push(`Core concept: ${concepts.join(" ")}`);
  }

  if (wrongOptions.length > 0) {
    sections.push(
      `Why the other choices are not best: ${wrongOptions
        .slice(0, 6)
        .map((option) => `Option "${shorten(option)}" does not answer the exact condition in the prompt.`)
        .join(" ")}`,
    );
  }

  sections.push(
    "Exam tip: do not choose an answer just because it contains a familiar word. Ask: what layer, protocol, address type, device role, or security goal is the question testing?",
  );

  if (original && !sections.join(" ").toLowerCase().includes(original.toLowerCase())) {
    sections.push(`Source note: ${original}`);
  }

  return sections.join("\n\n");
}

function cleanupText(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function shorten(value, maxLength = 140) {
  const cleaned = cleanupText(value);
  return cleaned.length > maxLength ? `${cleaned.slice(0, maxLength - 3)}...` : cleaned;
}

function conceptNotes(text) {
  const normalized = text.toLowerCase();
  const notes = [
    ["imap", "IMAP uses TCP port 143 and lets an email client read mail stored on a mail server."],
    ["telnet", "Telnet is remote CLI access on port 23 and is not encrypted."],
    ["ssh", "SSH is encrypted remote CLI access, normally using TCP port 22."],
    ["ftp", "FTP transfers files and commonly uses TCP ports 20 and 21."],
    ["dns", "DNS translates human-readable names into IP addresses so hosts can find services."],
    ["dhcp", "DHCP automatically gives hosts IP settings such as address, mask, gateway, and DNS server."],
    ["arp", "ARP maps an IPv4 address to a MAC address on the local network."],
    ["mac address", "A MAC address is the Layer 2 hardware address used inside an Ethernet LAN."],
    ["mac sublayer", "The MAC sublayer builds Ethernet frames, adds MAC addressing, and handles frame access details."],
    ["data link", "The data link layer prepares frames for delivery across one local link."],
    ["network layer", "The network layer uses logical IP addressing and routing between networks."],
    ["transport layer", "The transport layer uses TCP or UDP ports to identify the application conversation."],
    ["tcp", "TCP is connection-oriented and provides reliable delivery with acknowledgments and retransmission."],
    ["udp", "UDP is lightweight and connectionless, used when low overhead matters more than built-in reliability."],
    ["switch", "A switch forwards Ethernet frames using MAC addresses within a LAN."],
    ["router", "A router forwards packets between different IP networks using Layer 3 information."],
    ["default gateway", "The default gateway is the router a host uses to reach remote networks."],
    ["subnet", "A subnet is a smaller IP network created from a larger address block."],
    ["subnet mask", "The subnet mask or prefix length separates the network bits from the host bits."],
    ["ipv4", "IPv4 addresses are 32-bit logical addresses written in dotted decimal form."],
    ["ipv6", "IPv6 addresses are 128-bit logical addresses written in hexadecimal groups."],
    ["vlan", "A VLAN is a separate Layer 2 broadcast domain on switched infrastructure."],
    ["trunk", "A trunk carries traffic for multiple VLANs over one link by tagging frames."],
    ["ethernet", "Ethernet defines common LAN frame formats, MAC addressing, and media access behavior."],
    ["wireless", "Wireless LANs use radio instead of copper or fiber, but still need addressing, access control, and security."],
    ["security", "Network security protects confidentiality, integrity, and availability of systems and data."],
    ["spyware", "Spyware is software that secretly collects information from a user or device."],
    ["malware", "Malware is malicious software designed to damage, steal, spy, or gain unauthorized access."],
    ["firewall", "A firewall permits or blocks traffic based on security rules."],
    ["ips", "An IPS watches traffic and can actively block malicious activity."],
    ["dos", "A denial-of-service attack tries to make a device or service unavailable."],
    ["phishing", "Phishing tricks users into revealing credentials or sensitive information."],
    ["qos", "QoS gives priority treatment to traffic that is sensitive to delay, loss, or jitter."],
    ["intermediary", "Intermediary devices move or protect traffic between end devices; examples include switches, routers, firewalls, wireless controllers, and IPS devices."],
    ["end device", "End devices are the source or destination of user data, such as PCs, phones, servers, printers, and scanners."],
  ];

  return notes.filter(([term]) => normalized.includes(term)).map(([, note]) => note).slice(0, 4);
}

export function inferMatchingPairs(rawQuestion) {
  const questionText = rawQuestion.question ?? "";
  const table = rawQuestion.tables?.[0] ?? [];
  const hasChoiceAnswers = (rawQuestion.options ?? []).length > 0 || (rawQuestion.correct_answers ?? []).length > 0;
  const looksLikeMatching = /match|place the options/i.test(questionText);

  if (hasChoiceAnswers || !looksLikeMatching) return [];
  if (!Array.isArray(table) || table.length < 2) return [];
  if (!table.every((row) => Array.isArray(row) && row.length === 2 && row[0] && row[1])) return [];

  return table.map(([left, right]) => ({
    left: String(left),
    right: String(right),
  }));
}

export function formatMatchingAnswer(left, right) {
  return `${left} => ${right}`;
}

export function splitMatchingImages(question) {
  const imageUrls = question.imageUrls ?? [];
  const hasMatching = (question.matchingPairs?.length ?? 0) > 0;

  if (!hasMatching) return { exhibitImages: imageUrls, answerImages: [] };
  if (imageUrls.length <= 1) return { exhibitImages: [], answerImages: imageUrls };

  return {
    exhibitImages: imageUrls.slice(0, 1),
    answerImages: imageUrls.slice(1),
  };
}

export function createModuleDecks(moduleSources, options = {}) {
  const sourcePrefix = options.sourcePrefix ?? "";

  return MODULE_GROUPS.map((group) => {
    const source = {
      ...group,
      id: prefixedId(sourcePrefix, group.id),
      logicalId: group.id,
      bankId: options.bankId ?? "itexam",
      bankTitle: options.bankTitle ?? "",
    };
    const questions = (moduleSources[group.id] ?? []).map((question) => normalizeQuestion(question, source));

    return {
      ...group,
      id: prefixedId(options.deckPrefix ?? "", group.id),
      logicalId: group.id,
      bankId: options.bankId ?? "itexam",
      bankTitle: options.bankTitle ?? "",
      type: "module",
      questions,
      count: questions.length,
    };
  });
}

export function createDecks(moduleSources, options = {}) {
  const deckPrefix = options.deckPrefix ?? "";
  const moduleDecks = createModuleDecks(moduleSources, options);
  const byLogicalId = new Map(moduleDecks.map((deck) => [deck.logicalId, deck]));

  const midtermDecks = MIDTERMS.map((midterm) => {
    const questions = midterm.sourceIds.flatMap((id) => byLogicalId.get(id)?.questions ?? []);
    return {
      ...midterm,
      id: prefixedId(deckPrefix, midterm.id),
      logicalId: midterm.id,
      bankId: options.bankId ?? "itexam",
      bankTitle: options.bankTitle ?? "",
      type: "midterm",
      questions,
      count: questions.length,
    };
  });

  const finalDecks = FINAL_GROUPS.map((finalGroup) => {
    const source = {
      ...finalGroup,
      id: prefixedId(options.sourcePrefix ?? "", finalGroup.id),
      logicalId: finalGroup.id,
      bankId: options.bankId ?? "itexam",
      bankTitle: options.bankTitle ?? "",
    };
    const questions = (options.finalSources?.[finalGroup.id] ?? []).map((question) => normalizeQuestion(question, source));

    return {
      ...finalGroup,
      id: prefixedId(deckPrefix, finalGroup.id),
      logicalId: finalGroup.id,
      bankId: options.bankId ?? "itexam",
      bankTitle: options.bankTitle ?? "",
      type: "final",
      questions,
      count: questions.length,
    };
  }).filter((deck) => deck.count > 0);

  const allQuestions = [...moduleDecks, ...finalDecks].flatMap((deck) => deck.questions);

  return [
    {
      id: prefixedId(deckPrefix, "all"),
      logicalId: "all",
      title: "All questions",
      range: "1-17",
      type: "all",
      bankId: options.bankId ?? "itexam",
      bankTitle: options.bankTitle ?? "",
      questions: allQuestions,
      count: allQuestions.length,
    },
    ...midtermDecks,
    ...moduleDecks,
    ...finalDecks,
  ];
}

export function createCombinedDecks(bankDecks, options = {}) {
  const deckPrefix = options.deckPrefix ?? "combined";
  const bankId = options.bankId ?? "combined";
  const bankTitle = options.bankTitle ?? "Combined";
  const logicalIds = ["all", ...MIDTERMS.map((item) => item.id), ...MODULE_GROUPS.map((item) => item.id), ...FINAL_GROUPS.map((item) => item.id)];

  return logicalIds
    .map((logicalId) => {
      const parts = bankDecks.map((decks) => decks.find((deck) => deck.logicalId === logicalId)).filter(Boolean);
      if (parts.length === 0) return null;

      const [first] = parts;
      const questions = parts.flatMap((deck) => deck.questions);

      return {
        ...first,
        id: prefixedId(deckPrefix, logicalId),
        logicalId,
        bankId,
        bankTitle,
        questions,
        count: questions.length,
      };
    })
    .filter(Boolean);
}

export function shuffle(items, seed = Date.now()) {
  const shuffled = [...items];
  let state = Math.abs(Math.trunc(seed)) % 2147483647 || 1;

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

export function buildSession(deck, { mode, limit = 24, seed = Date.now() } = {}) {
  const eligibleQuestions = mode === "exam" ? getExamEligibleQuestions(deck) : deck.questions;
  const shuffled = shuffle(eligibleQuestions, seed);
  const questions = mode === "exam" ? shuffled.slice(0, Math.min(limit, shuffled.length)) : shuffled;

  return {
    deckId: deck.id,
    mode,
    questions,
    index: 0,
    answers: {},
    revealed: false,
    submitted: false,
    seed,
  };
}

export function getExamEligibleQuestions(deck) {
  return deck.questions.filter(
    (question) =>
      question.correctAnswers.length > 0 &&
      (question.options.length > 0 || (question.matchingPairs?.length ?? 0) > 0),
  );
}

export function normalizeAnswer(value) {
  return String(value).toLowerCase().replace(/\s+/g, " ").trim();
}

export function isCorrect(question, selectedAnswers = []) {
  const selected = new Set(selectedAnswers.map(normalizeAnswer));
  const correct = new Set(question.correctAnswers.map(normalizeAnswer));

  if (selected.size !== correct.size) return false;

  for (const answer of correct) {
    if (!selected.has(answer)) return false;
  }

  return true;
}

export function scoreSession(questions, answers) {
  const total = questions.length;
  const correct = questions.filter((question) => isCorrect(question, answers[question.id] ?? [])).length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;

  return { total, correct, wrong, percent };
}

export function summarizeDeckProgress(deck, progress) {
  let seen = 0;
  let correct = 0;
  let wrong = 0;

  for (const question of deck.questions) {
    const entry = progress[question.id];
    if (!entry) continue;
    if (entry.seen > 0) seen += 1;
    correct += entry.correct ?? 0;
    wrong += entry.wrong ?? 0;
  }

  const attempts = correct + wrong;
  const percent = attempts ? Math.round((correct / attempts) * 100) : 0;

  return { seen, correct, wrong, attempts, percent };
}

export function getLearningSummary(deck, progress) {
  const base = summarizeDeckProgress(deck, progress);
  let mastered = 0;
  let weak = 0;
  let due = 0;
  let nextDueAt = null;
  const now = Date.now();

  for (const question of deck.questions) {
    const entry = progress[question.id];
    if (!entry) continue;

    const correct = entry.correct ?? 0;
    const wrong = entry.wrong ?? 0;
    const attempts = correct + wrong;
    const accuracy = attempts ? correct / attempts : 0;

    if (attempts >= 2 && accuracy >= 0.8) mastered += 1;
    if (wrong > 0 && accuracy < 0.8) weak += 1;
    if (isQuestionDue(question, progress, now)) due += 1;

    if (entry.dueAt && (!nextDueAt || entry.dueAt < nextDueAt)) {
      nextDueAt = entry.dueAt;
    }
  }

  const unseen = Math.max(deck.count - base.seen, 0);
  const masteryPercent = deck.count ? Math.round((mastered / deck.count) * 100) : 0;

  return { ...base, unseen, mastered, weak, due, nextDueAt, masteryPercent };
}

export function scheduleProgress(entry = {}, correct, now = Date.now()) {
  const currentInterval = entry.intervalDays ?? 0;
  const nextStreak = correct ? (entry.streak ?? 0) + 1 : 0;
  const intervalDays = correct
    ? Math.min(45, Math.max(1, currentInterval ? Math.ceil(currentInterval * (1.8 + nextStreak * 0.12)) : 1))
    : 0;

  return {
    seen: (entry.seen ?? 0) + 1,
    correct: (entry.correct ?? 0) + (correct ? 1 : 0),
    wrong: (entry.wrong ?? 0) + (correct ? 0 : 1),
    streak: nextStreak,
    lapses: (entry.lapses ?? 0) + (correct ? 0 : 1),
    intervalDays,
    lastSeenAt: now,
    dueAt: correct ? now + intervalDays * DAY_MS : now,
  };
}

export function isQuestionDue(question, progress, now = Date.now()) {
  const entry = progress[question.id];
  if (!entry || !entry.seen) return false;

  return (entry.dueAt ?? (entry.wrong > 0 ? 0 : Number.POSITIVE_INFINITY)) <= now;
}

export function getDueQuestions(deck, progress, now = Date.now()) {
  return deck.questions
    .filter((question) => isQuestionDue(question, progress, now))
    .sort((left, right) => {
      const leftEntry = progress[left.id] ?? {};
      const rightEntry = progress[right.id] ?? {};
      const leftDue = leftEntry.dueAt ?? 0;
      const rightDue = rightEntry.dueAt ?? 0;
      return leftDue - rightDue || (rightEntry.wrong ?? 0) - (leftEntry.wrong ?? 0) || left.id.localeCompare(right.id);
    });
}

export function getNewQuestions(deck, progress) {
  return deck.questions.filter((question) => !progress[question.id]?.seen);
}

export function buildSmartReview(deck, progress, { limit = 20, now = Date.now(), seed = Date.now() } = {}) {
  const selected = [];
  const used = new Set();
  const add = (questions) => {
    for (const question of questions) {
      if (used.has(question.id) || selected.length >= limit) continue;
      used.add(question.id);
      selected.push(question);
    }
  };

  add(getDueQuestions(deck, progress, now));
  add(getWeakQuestions(deck, progress));
  add(shuffle(getNewQuestions(deck, progress), seed));

  return selected;
}

export function getWeakQuestions(deck, progress) {
  return deck.questions
    .map((question) => {
      const entry = progress[question.id] ?? { seen: 0, correct: 0, wrong: 0 };
      const attempts = (entry.correct ?? 0) + (entry.wrong ?? 0);
      const accuracy = attempts ? (entry.correct ?? 0) / attempts : 1;
      const priority = (1 - accuracy) * 10 + (entry.wrong ?? 0);
      return { question, entry, priority };
    })
    .filter(({ entry }) => (entry.wrong ?? 0) > 0)
    .sort((left, right) => right.priority - left.priority || left.question.id.localeCompare(right.question.id))
    .map(({ question }) => question);
}

export function getRecommendedDeck(decks, progress) {
  const moduleDecks = decks.filter((deck) => deck.type === "module");

  return moduleDecks
    .map((deck) => {
      const summary = summarizeDeckProgress(deck, progress);
      const coverage = deck.count ? summary.seen / deck.count : 1;
      return { deck, coverage, accuracy: summary.percent };
    })
    .sort((left, right) => left.coverage - right.coverage || left.accuracy - right.accuracy)[0]?.deck;
}
