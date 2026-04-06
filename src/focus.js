function progressEntry(progress, cardId) {
  return progress[cardId] ?? {
    attempts: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    lastSeenAt: null,
  };
}

export function getFocusState(card, progress) {
  const entry = progressEntry(progress, card.id);

  if ((entry.attempts ?? 0) === 0) {
    return "fresh";
  }

  if ((entry.streak ?? 0) >= 3) {
    return "mastered";
  }

  if ((entry.wrong ?? 0) > (entry.correct ?? 0)) {
    return "review";
  }

  return "active";
}

function compareRecommended(left, right, progress) {
  const leftEntry = progressEntry(progress, left.id);
  const rightEntry = progressEntry(progress, right.id);
  const leftState = getFocusState(left, progress);
  const rightState = getFocusState(right, progress);
  const rank = { review: 0, fresh: 1, active: 2, mastered: 3 };

  return (rank[leftState] - rank[rightState])
    || ((rightEntry.wrong ?? 0) - (leftEntry.wrong ?? 0))
    || (((leftEntry.correct ?? 0) / Math.max((leftEntry.correct ?? 0) + (leftEntry.wrong ?? 0), 1)) - ((rightEntry.correct ?? 0) / Math.max((rightEntry.correct ?? 0) + (rightEntry.wrong ?? 0), 1)))
    || ((leftEntry.streak ?? 0) - (rightEntry.streak ?? 0))
    || String(leftEntry.lastSeenAt ?? "").localeCompare(String(rightEntry.lastSeenAt ?? ""))
    || left.number - right.number;
}

export function buildPracticeDeck(cards, progress, mode = "recommended") {
  const filtered = cards.filter((card) => {
    const state = getFocusState(card, progress);

    if (mode === "recommended") {
      return true;
    }

    return state === mode;
  });

  if (mode === "recommended") {
    return [...filtered].sort((left, right) => compareRecommended(left, right, progress));
  }

  return [...filtered].sort((left, right) => left.number - right.number);
}

export function buildFocusSnapshot(cards, progress) {
  const snapshot = {
    total: cards.length,
    fresh: 0,
    review: 0,
    active: 0,
    mastered: 0,
    recommended: 0,
  };

  for (const card of cards) {
    const state = getFocusState(card, progress);
    snapshot[state] += 1;
  }

  snapshot.recommended = snapshot.total - snapshot.mastered;
  return snapshot;
}

export function buildCollectionFocus(collections, cards, progress) {
  return collections.map((collection) => {
    const collectionCards = cards.filter((card) => card.moduleId === collection.id);
    const snapshot = buildFocusSnapshot(collectionCards, progress);
    const deck = buildPracticeDeck(collectionCards, progress, "recommended");
    const attempted = collectionCards
      .map((card) => progressEntry(progress, card.id))
      .filter((entry) => (entry.attempts ?? 0) > 0);
    const totalCorrect = attempted.reduce((sum, entry) => sum + (entry.correct ?? 0), 0);
    const totalWrong = attempted.reduce((sum, entry) => sum + (entry.wrong ?? 0), 0);
    const accuracy = totalCorrect + totalWrong > 0 ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) : 0;

    return {
      id: collection.id,
      title: collection.title,
      kind: collection.kind,
      total: snapshot.total,
      recommended: snapshot.recommended,
      review: snapshot.review,
      fresh: snapshot.fresh,
      mastered: snapshot.mastered,
      accuracy,
      nextCardId: deck[0]?.id ?? null,
    };
  }).sort((left, right) => right.review - left.review || right.recommended - left.recommended || left.title.localeCompare(right.title));
}
