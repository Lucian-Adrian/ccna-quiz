export const CARD_OVERRIDES = {
  mod1: {
    1: { answerIndices: [3] },
    2: { answerIndices: [2] },
    3: { answerIndices: [2] },
    4: { answerIndices: [0, 3] },
    5: { answerIndices: [1] },
    6: { answerIndices: [1] },
    7: { answerIndices: [3] },
    8: { answerIndices: [1, 3] },
    9: { answerIndices: [0] },
    10: { answerIndices: [1, 2] },
    11: { answerIndices: [1] },
    12: { answerIndices: [2] },
    13: { answerIndices: [2] },
    14: { answerIndices: [2] },
    15: { answerIndices: [2] },
  },
  mod2: {
    1: { answerIndices: [0] },
    2: { answerIndices: [1, 3] },
    3: { answerIndices: [2] },
    4: { answerIndices: [0] },
    5: { answerIndices: [0, 2, 4] },
    6: { answerIndices: [1] },
    7: { answerIndices: [3] },
    8: { answerIndices: [3] },
    9: { answerIndices: [3] },
    10: { answerIndices: [2] },
    11: { answerIndices: [0] },
    12: { answerIndices: [2, 4] },
    13: { answerIndices: [1] },
    14: { answerIndices: [0] },
  },
  mod3: {
    1: { answerIndices: [1] },
    2: { answerIndices: [3] },
    3: { answerIndices: [2] },
    4: { answerIndices: [1] },
    5: { answerIndices: [0, 3] },
    6: { answerIndices: [2] },
    7: { answerIndices: [1] },
    8: { answerIndices: [2] },
    9: { answerIndices: [2, 3] },
    10: { answerIndices: [3] },
    11: { answerIndices: [1] },
    12: { answerIndices: [0, 2, 3] },
    13: { answerIndices: [0] },
    14: { answerIndices: [0] },
    15: { answerIndices: [3] },
    16: {
      answerIndices: [1, 3, 4],
      explanation:
        "Network protocols define how messages are encoded, how large they can be, and how they are delivered across the network.",
    },
    17: {
      answerIndices: [2],
      explanation:
        "Data link layer addresses are used for local delivery on the local network segment.",
    },
    18: {
      answerIndices: [2],
      explanation:
        "In the TCP/IP model, the internet layer is responsible for routing packets and selecting the best path through the network.",
    },
  },
};

export function getCardOverride(moduleId, number) {
  return CARD_OVERRIDES[moduleId]?.[number] ?? null;
}
