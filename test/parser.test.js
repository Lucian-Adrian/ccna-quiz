import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";
import { parseQuizMarkdown } from "../src/parser.js";

test("parses one single-answer card and picks the best answer", () => {
  const markdown = `1. What feature allows secure remote access?

ACL
IPS
VPN
BYOD
Explanation: Virtual private networks (VPN) are used to provide secure access to remote workers.`;

  const [card] = parseQuizMarkdown(markdown, "mod1.md");

  assert.equal(card.number, 1);
  assert.equal(card.question, "What feature allows secure remote access?");
  assert.equal(card.module, "mod1.md");
  assert.equal(card.selectionCount, 1);
  assert.deepEqual(card.answers, ["VPN"]);
});

test("parses choose-two cards and picks the two strongest answers", () => {
  const markdown = `4. What are two functions of end devices on a network? (Choose two.)

They originate the data that flows through the network.
They direct data over alternate paths in the event of link failures.
They filter the flow of data to enhance security.
They are the interface between humans and the communication network.
They provide the channel over which the network message travels.
Explanation: End devices originate the data that flows through the network. They are the interface between humans and the communication network.`;

  const [card] = parseQuizMarkdown(markdown, "mod1.md");

  assert.equal(card.selectionCount, 2);
  assert.deepEqual(card.answers, [
    "They originate the data that flows through the network.",
    "They are the interface between humans and the communication network.",
  ]);
});

test("does not split cards when explanations contain numbered steps", () => {
  const markdown = `4. A web client is sending a request for a webpage to a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to prepare the request for transmission?

HTTP, IP, TCP, Ethernet
HTTP, TCP, IP, Ethernet
Ethernet, TCP, IP, HTTP
Ethernet, IP, TCP, HTTP
Explanation:
1. HTTP governs the way that a web server and client interact.
2. TCP manages individual conversations between web servers and clients.
3. IP is responsible for delivery across the best path to the destination.
4. Ethernet takes the packet from IP and formats it for transmission.

5. What are two benefits of using a layered network model? (Choose two.)

It assists in protocol design.
It speeds up packet delivery.
It prevents designers from creating their own model.
It prevents technology in one layer from affecting other layers.
It ensures a device at one layer can function at the next higher layer.
Explanation: The benefits of using a layered model include protocol design support and keeping changes in one layer from breaking another.`;

  const cards = parseQuizMarkdown(markdown, "mod3.md");

  assert.equal(cards.length, 2);
  assert.equal(cards[0].number, 4);
  assert.equal(cards[0].options.length, 4);
  assert.equal(cards[1].number, 5);
  assert.equal(cards[1].selectionCount, 2);
});

test("parses the real module files into the expected card counts", () => {
  const modules = [
    ["mod1.md", 15],
    ["mod2.md", 14],
    ["mod3.md", 18],
  ];

  for (const [file, expectedCount] of modules) {
    const markdown = fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    const cards = parseQuizMarkdown(markdown, file);
    assert.equal(cards.length, expectedCount, `${file} should parse into ${expectedCount} cards`);
  }
});
