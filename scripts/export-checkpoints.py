from __future__ import annotations

import copy
import html
import json
import re
import unicodedata
import subprocess
from pathlib import Path
from typing import Any
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup, NavigableString, Tag


REPO_ROOT = Path(__file__).resolve().parents[1]
MODULES_DIR = REPO_ROOT / "modules"
ASSETS_DIR = MODULES_DIR / "assets"

SESSION = requests.Session()
SESSION.headers.update(
    {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/124.0.0.0 Safari/537.36"
        )
    }
)


CHECKPOINTS = [
    {
        "id": "check1",
        "title": "Checkpoint Exam: Basic Network Connectivity and Communications",
        "test_url": "https://itexamanswers.net/ccna-1-v7-modules-1-3-basic-network-connectivity-and-communications-test-online.html",
        "answer_url": "https://itexamanswers.net/ccna-1-v7-modules-1-3-basic-network-connectivity-and-communications-exam-answers.html",
        "output": MODULES_DIR / "check1.json",
        "assets_dir": ASSETS_DIR / "check1",
        "local_markdown_files": ["check1.md", "check1_questions.md"],
    },
    {
        "id": "check2",
        "title": "Checkpoint Exam: Ethernet Concepts",
        "test_url": "https://itexamanswers.net/ccna-1-v7-modules-4-7-ethernet-concepts-test-online.html",
        "answer_url": "https://itexamanswers.net/ccna-1-v7-modules-4-7-ethernet-concepts-exam-answers.html",
        "output": MODULES_DIR / "check2.json",
        "assets_dir": ASSETS_DIR / "check2",
        "local_markdown_files": ["check2.md", "check2_questions.md"],
    },
]


def fetch_html(url: str) -> str:
    response = SESSION.get(url, timeout=60)
    response.raise_for_status()
    response.encoding = response.apparent_encoding or response.encoding
    return response.text


def clean_text(value: str | None) -> str:
    if value is None:
        return ""
    text = html.unescape(str(value))
    text = text.replace("\u200b", "").replace("\ufeff", "")
    text = text.replace("\xa0", " ")
    text = unicodedata.normalize("NFKC", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def normalize_text(value: str | None) -> str:
    text = clean_text(value).lower()
    text = re.sub(r"[^a-z0-9]+", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def parse_int_list(raw: str | None) -> list[int]:
    if not raw:
        return []
    values: list[int] = []
    for item in raw.split(","):
        item = item.strip()
        if not item:
            continue
        try:
            values.append(int(item))
        except ValueError:
            continue
    return values


def extract_topic(raw_text: str | None) -> str | None:
    if not raw_text:
        return None
    match = re.search(r"Topic\s+([0-9.]+)", raw_text)
    return match.group(1) if match else None


def is_question_heading(node: Tag) -> bool:
    if node.name != "p":
        return False
    text = clean_text(node.get_text(" ", strip=True))
    if not text:
        return False
    if text.lower().startswith("how to find"):
        return False
    if re.match(r"^\d+\.\s", text):
        return True
    if text.startswith(("Match ", "Open the PT Activity", "Refer to the exhibit", "What ", "Which ", "How ", "Why ", "When ", "During ", "An ", "A ")):
        return True
    return False


def fetch_content_root(soup: BeautifulSoup) -> Tag:
    root = soup.select_one(".thecontent")
    if root is None:
        raise RuntimeError("Unable to locate article content container")
    return root


def download_image(url: str, checkpoint_id: str, stem: str, index: int, cache: dict[str, str]) -> str:
    if url in cache:
        return cache[url]

    parsed = urlparse(url)
    suffix = Path(parsed.path).suffix
    if not suffix or len(suffix) > 5:
        suffix = ".jpg"

    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    assets_dir = ASSETS_DIR / checkpoint_id
    assets_dir.mkdir(parents=True, exist_ok=True)

    filename = f"{stem}-{index}{suffix}"
    destination = assets_dir / filename

    if not destination.exists():
        response = SESSION.get(url, timeout=60)
        response.raise_for_status()
        destination.write_bytes(response.content)

    rel_path = f"assets/{checkpoint_id}/{filename}"
    cache[url] = rel_path
    return rel_path


def extract_media_from_tag(
    tag: Tag,
    checkpoint_id: str,
    stem: str,
    cache: dict[str, str],
) -> list[dict[str, Any]]:
    media: list[dict[str, Any]] = []
    seen: set[str] = set()
    index = 1
    for img in tag.select("img"):
        src = img.get("src") or img.get("data-src") or img.get("data-lazy-src")
        if not src:
            continue
        src = urljoin("https://itexamanswers.net/", src)
        if src.startswith("data:"):
            continue
        if src in seen:
            continue
        seen.add(src)
        rel_path = download_image(src, checkpoint_id, stem, index, cache)
        media.append(
            {
                "kind": "image",
                "path": rel_path,
                "sourceUrl": src,
                "alt": clean_text(img.get("alt")),
                "title": clean_text(img.get("title")),
            }
        )
        index += 1
    return media


def extract_option_media(li: Tag, checkpoint_id: str, question_number: int, option_index: int, cache: dict[str, str]) -> list[dict[str, Any]]:
    return extract_media_from_tag(li, checkpoint_id, f"q{question_number}-opt{option_index + 1}", cache)


def parse_test_question(
    question_node: Tag,
    checkpoint_id: str,
    question_number: int,
    cache: dict[str, str],
) -> dict[str, Any]:
    text_node = question_node.select_one(".wpProQuiz_question_text")
    if text_node is None:
        raise RuntimeError(f"Missing question text for {checkpoint_id} q{question_number}")

    question_text = clean_text(text_node.get_text(" ", strip=True))
    prompt_media = extract_media_from_tag(text_node, checkpoint_id, f"q{question_number}", cache)
    list_node = question_node.select_one("ul.wpProQuiz_questionList")
    data_type = list_node.get("data-type") if list_node else "single"

    question: dict[str, Any] = {
        "number": question_number,
        "question": question_text,
        "kind": "single_choice" if data_type == "single" else "multiple_choice",
        "options": [],
        "media": prompt_media,
        "answer": None,
        "explanation": None,
        "source": {},
    }

    if data_type == "matrix_sort_answer":
        question["kind"] = "matrix_sort"
        prompts: list[dict[str, Any]] = []
        for prompt_node in question_node.select(".wpProQuiz_questionList li.wpProQuiz_questionListItem"):
            prompt_text_node = prompt_node.select_one(".wpProQuiz_maxtrixSortText")
            if prompt_text_node is None:
                continue
            prompts.append(
                {
                    "position": int(prompt_node.get("data-pos", "0")),
                    "text": clean_text(prompt_text_node.get_text(" ", strip=True)),
                }
            )

        choices: list[dict[str, Any]] = []
        for choice_node in question_node.select(".wpProQuiz_sortStringItem"):
            choices.append(
                {
                    "position": int(choice_node.get("data-pos", "0")),
                    "text": clean_text(choice_node.get_text(" ", strip=True)),
                    "correctSlots": parse_int_list(choice_node.get("data-correct")),
                }
            )

        question["activity"] = {
            "type": "matrix_sort",
            "prompts": prompts,
            "choices": choices,
        }
        question["options"] = []
        return question

    options: list[dict[str, Any]] = []
    for option_index, li in enumerate(question_node.select("ul.wpProQuiz_questionList li.wpProQuiz_questionListItem")):
        option = {
            "text": clean_text(li.get_text(" ", strip=True)),
            "media": extract_option_media(li, checkpoint_id, question_number, option_index, cache),
        }
        if not option["media"]:
            option.pop("media")
        options.append(option)
    question["options"] = options
    return question


def parse_answer_blocks(answer_html: str, checkpoint_id: str, cache: dict[str, str]) -> list[dict[str, Any]]:
    soup = BeautifulSoup(answer_html, "html.parser")
    root = fetch_content_root(soup)

    blocks: list[list[Tag]] = []
    current: list[Tag] = []

    def block_has_answer_content(nodes: list[Tag]) -> bool:
        for node in nodes:
            if node.name in {"ul", "table", "pre"}:
                return True
            if node.name == "div" and "message_box" in (node.get("class") or []):
                return True
        return False

    for child in root.children:
        if not isinstance(child, Tag):
            continue
        if child.name == "p" and child.find("strong") and is_question_heading(child):
            if current and block_has_answer_content(current):
                blocks.append(current)
                current = [child]
            else:
                current.append(child)
                if not current:
                    current = [child]
            continue
        if current:
            current.append(child)
    if current:
        blocks.append(current)

    parsed_blocks: list[dict[str, Any]] = []
    for block_nodes in blocks:
        fragment = BeautifulSoup("".join(str(node) for node in block_nodes), "html.parser")
        question_ps = [
            p
            for p in fragment.find_all("p")
            if p.find("strong") and not p.find_parent(class_="message_box")
        ]
        if not question_ps:
            continue

        heading = question_ps[-1]
        heading_text = clean_text(heading.get_text(" ", strip=True))
        number_match = None
        for candidate in question_ps:
            number_match = re.match(r"^(\d+)\.\s*(.*)$", clean_text(candidate.get_text(" ", strip=True)))
            if number_match:
                break
        number = int(number_match.group(1)) if number_match else None
        question_text = clean_text(number_match.group(2) if number_match else heading_text)

        block_media = extract_media_from_tag(fragment, checkpoint_id, f"a{number or len(parsed_blocks) + 1}", cache)

        options: list[dict[str, Any]] = []
        correct_indices: list[int] = []
        ul = fragment.find("ul")
        if ul is not None and (not ul.get("class") or "wpProQuiz_maxtrixSortCriterion" not in " ".join(ul.get("class", []))):
            for option_index, li in enumerate(ul.find_all("li", recursive=False)):
                option_text = clean_text(li.get_text(" ", strip=True))
                option_media = extract_media_from_tag(li, checkpoint_id, f"a{number or len(parsed_blocks) + 1}-opt{option_index + 1}", cache)
                option: dict[str, Any] = {"text": option_text}
                if option_media:
                    option["media"] = option_media
                options.append(option)
                li_classes = li.get("class", [])
                is_correct = "correct_answer" in li_classes
                if not is_correct:
                    is_correct = bool(li.find("span", style=re.compile("ff0000", re.I)))
                if is_correct:
                    correct_indices.append(option_index)

        table = fragment.find("table")
        table_answer: dict[str, Any] | None = None
        if table is not None and "message_box" not in " ".join(table.get("class", [])):
            headers = [clean_text(cell.get_text(" ", strip=True)) for cell in table.find_all("th")]
            rows: list[list[str]] = []
            for row in table.find_all("tr"):
                cells = row.find_all(["th", "td"], recursive=False)
                if not cells:
                    continue
                row_values = [clean_text(cell.get_text(" ", strip=True)) for cell in cells]
                if row_values == headers and headers:
                    continue
                rows.append(row_values)
            table_answer = {"headers": headers, "rows": rows}

        explanation_box = fragment.select_one(".message_box.success")
        raw_explanation = clean_text(explanation_box.get_text(" ", strip=True)) if explanation_box else ""
        topic = extract_topic(raw_explanation)
        explanation_body = raw_explanation
        if topic and explanation_body.lower().startswith("explanation: topic"):
            explanation_body = re.sub(r"^Explanation:\s*Topic\s+[0-9.]+\s*", "", explanation_body).strip()
        elif topic:
            explanation_body = re.sub(r"^Explanation:\s*", "", explanation_body).strip()

        parsed_blocks.append(
            {
                "number": number,
                "question": question_text,
                "media": block_media,
                "options": options,
                "correctOptionIndices": correct_indices,
                "tableAnswer": table_answer,
                "answerText": explanation_body,
                "topic": topic,
                "rawExplanation": raw_explanation,
                "rawHtml": str(fragment),
                "kindHint": "multiple_choice" if len(correct_indices) > 1 else "single_choice",
            }
        )

    return parsed_blocks


def consume_answer_block(
    question: dict[str, Any],
    answer_blocks: list[dict[str, Any]],
    start_index: int,
) -> tuple[dict[str, Any] | None, int]:
    normalized = normalize_text(question["question"])

    for index in range(start_index, len(answer_blocks)):
        block = answer_blocks[index]
        if block.get("_used"):
            continue
        if block.get("number") is not None and question.get("number") == block.get("number"):
            block["_used"] = True
            return block, index + 1

    for index in range(start_index, len(answer_blocks)):
        block = answer_blocks[index]
        if block.get("_used"):
            continue
        if normalize_text(block.get("question")) == normalized:
            block["_used"] = True
            return block, index + 1

    for index in range(0, start_index):
        block = answer_blocks[index]
        if block.get("_used"):
            continue
        if block.get("number") is not None and question.get("number") == block.get("number"):
            block["_used"] = True
            return block, start_index
        if normalize_text(block.get("question")) == normalized:
            block["_used"] = True
            return block, start_index

    return None, start_index


def build_explanation(
    question_text: str,
    correct_texts: list[str],
    answer_block: dict[str, Any] | None,
) -> dict[str, str] | None:
    if not answer_block:
        return None

    topic = answer_block.get("topic")
    body = clean_text(answer_block.get("answerText"))
    joined_answers = ", ".join(correct_texts) if correct_texts else "the correct answer"

    if answer_block.get("tableAnswer"):
        table = answer_block["tableAnswer"]
        pairs = []
        headers = table.get("headers", [])
        rows = table.get("rows", [])
        if headers and rows and len(headers) == len(rows[0]):
            for row in rows:
                pairs.append("; ".join(row))
        else:
            for row in rows:
                pairs.append(" = ".join(row))
        summary = "; ".join(pairs)
        eli5 = f"Match the items like this: {summary}."
        ccna = body or f"The correct matching is: {summary}."
        return {
            "topic": topic or "",
            "eli5": eli5,
            "ccna": ccna,
            "sourceText": answer_block.get("rawExplanation", ""),
        }

    if answer_block.get("correctOptionIndices") and len(answer_block.get("correctOptionIndices", [])) == 1:
        eli5 = f"In simple terms, the answer is {joined_answers}. {body}".strip()
        ccna = body or f"The correct answer is {joined_answers}."
    else:
        eli5 = f"In simple terms, the correct answers are {joined_answers}. {body}".strip()
        ccna = body or f"The correct answers are {joined_answers}."

    if not ccna:
        ccna = f"The correct answer for this question is {joined_answers}."
    if not eli5:
        eli5 = f"In simple terms, the answer is {joined_answers}."

    return {
        "topic": topic or "",
        "eli5": eli5,
        "ccna": ccna,
        "sourceText": answer_block.get("rawExplanation", ""),
    }


def merge_questions(
    checkpoint: dict[str, Any],
    base_questions: list[dict[str, Any]],
    test_questions_by_number: dict[int, dict[str, Any]],
    answer_blocks: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    merged: list[dict[str, Any]] = []
    answer_cursor = 0

    for base_question in base_questions:
        question = copy.deepcopy(base_question)
        parsed_test = test_questions_by_number.get(question["number"])

        if parsed_test:
            question["kind"] = parsed_test.get("kind", question.get("kind", "single_choice"))
            question["media"] = sorted_media(question.get("media", []) + parsed_test.get("media", []))
            if parsed_test.get("options"):
                question["options"] = parsed_test["options"]
            if parsed_test.get("activity"):
                question["activity"] = parsed_test["activity"]

        normalized = normalize_text(question["question"])
        answer_block, answer_cursor = consume_answer_block(question, answer_blocks, answer_cursor)

        if answer_block:
            if answer_block.get("tableAnswer"):
                question["answer"] = {
                    "type": "table",
                    "table": answer_block["tableAnswer"],
                }
                # If the interactive question has a single option, that option is the one to select.
                if len(question.get("options", [])) == 1:
                    question["answer"]["correctOptionIndices"] = [0]
                    question["answer"]["correctOptionTexts"] = [question["options"][0].get("text", "")]
            else:
                correct_option_indices = list(answer_block.get("correctOptionIndices", []))
                if not correct_option_indices and len(question.get("options", [])) == 1:
                    correct_option_indices = [0]
                correct_option_texts = [
                    question["options"][index].get("text", "")
                    for index in correct_option_indices
                    if index < len(question.get("options", []))
                ]
                question["answer"] = {
                    "type": "choices",
                    "correctOptionIndices": correct_option_indices,
                    "correctOptionTexts": correct_option_texts,
                }

            explanation = build_explanation(
                question["question"],
                question.get("answer", {}).get("correctOptionTexts", []),
                answer_block,
            )
            if explanation:
                question["explanation"] = explanation

            question["media"] = sorted_media(question.get("media", []) + answer_block.get("media", []))

            question["source"] = {
                "url": checkpoint["test_url"],
                "pageQuestionCount": len(base_questions),
            }
            question["answerSource"] = {
                "url": checkpoint["answer_url"],
                "pageQuestionCount": len(answer_blocks),
            }

        if not question.get("answer"):
            if question["kind"] in {"single_choice", "multiple_choice"}:
                if question.get("correctOptionIndices"):
                    question["answer"] = {
                        "type": "choices",
                        "correctOptionIndices": question["correctOptionIndices"],
                        "correctOptionTexts": question.get("correctOptions", []),
                    }
                elif len(question.get("options", [])) == 1:
                    question["answer"] = {
                        "type": "choices",
                        "correctOptionIndices": [0],
                        "correctOptionTexts": [question["options"][0].get("text", "")],
                    }
                else:
                    question["answer"] = {"type": "choices", "correctOptionIndices": [], "correctOptionTexts": []}

        if not question.get("explanation"):
            question["explanation"] = {
                "topic": "",
                "eli5": "Practice the exhibit and compare the choices to the course concept.",
                "ccna": "Review the lesson concept and use elimination with the visible options.",
                "sourceText": "",
            }

        question["correctOptionIndices"] = question.get("answer", {}).get("correctOptionIndices", question.get("correctOptionIndices", []))
        question["correctOptions"] = question.get("answer", {}).get("correctOptionTexts", question.get("correctOptions", []))
        if question.get("options"):
            for option_index, option in enumerate(question["options"]):
                option["correct"] = option_index in set(question["correctOptionIndices"])

        merged.append(question)

    merged.sort(key=lambda item: item["number"])
    return merged


def sorted_media(items: list[dict[str, Any]]) -> list[dict[str, Any]]:
    seen: set[tuple[str, str]] = set()
    result: list[dict[str, Any]] = []
    for item in items:
        key = (item.get("kind", ""), item.get("path", ""))
        if key in seen:
            continue
        seen.add(key)
        result.append(item)
    return result


def is_duplicate_question(normalized_candidate: str, existing_texts: set[str]) -> bool:
    if not normalized_candidate:
        return True
    for existing in existing_texts:
        if normalized_candidate == existing:
            return True
        if normalized_candidate in existing or existing in normalized_candidate:
            return True
    return False


def apply_duplicate_answer_fallbacks(questions: list[dict[str, Any]]) -> None:
    seen: dict[str, dict[str, Any]] = {}
    for question in questions:
        normalized = normalize_text(question.get("question"))
        answer = question.get("answer") or {}
        has_answer = bool(answer.get("correctOptionIndices")) or answer.get("type") == "table"
        if not has_answer and normalized in seen:
            source = seen[normalized]
            question["answer"] = copy.deepcopy(source.get("answer"))
            question["explanation"] = copy.deepcopy(source.get("explanation"))
            question["correctOptionIndices"] = list(source.get("correctOptionIndices", []))
            question["correctOptions"] = list(source.get("correctOptions", []))
            if question.get("options"):
                for option_index, option in enumerate(question["options"]):
                    option["correct"] = option_index in set(question["correctOptionIndices"])
        elif has_answer:
            seen[normalized] = question


def apply_manual_fallbacks(checkpoint_id: str, questions: list[dict[str, Any]]) -> None:
    if checkpoint_id != "check2":
        return

    manual: dict[int, dict[str, Any]] = {
        46: {
            "correctOptionIndices": [0],
            "correctOptions": ["1 – rollover, 2 – crossover, 3 – straight-through"],
            "explanation": {
                "topic": "4.4.3",
                "eli5": "The console cable is rollover, the similar-device link is crossover, and the host-to-switch link is straight-through.",
                "ccna": "Rollover cables connect a PC to a router or switch console port, crossover cables connect like devices, and straight-through cables connect a host to a switch or a switch to a router.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        52: {
            "correctOptionIndices": [0],
            "correctOptions": ["bandwidth"],
            "explanation": {
                "topic": "4.2.5",
                "eli5": "Bandwidth means how much data a medium can carry.",
                "ccna": "Bandwidth is the capacity at which a medium can carry data.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        60: {
            "correctOptionIndices": [0],
            "correctOptions": ["SOHO network"],
            "explanation": {
                "topic": "1.4.1",
                "eli5": "SOHO means small office/home office, which is for people who work from home or a small remote office.",
                "ccna": "A SOHO network is used by people who work from home or from a small remote office.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        62: {
            "correctOptionIndices": [0, 1],
            "correctOptions": [
                "Provides a mechanism to allow multiple devices to communicate over a shared medium.",
                "Controls the NIC responsible for sending and receiving data on the physical medium.",
            ],
            "explanation": {
                "topic": "6.1.2",
                "eli5": "The MAC sublayer handles access to the shared wire and the network card that sends and receives the frames.",
                "ccna": "The MAC sublayer controls access to the shared medium and the NIC responsible for sending and receiving data on the physical medium.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        63: {
            "correctOptionIndices": [0, 1],
            "correctOptions": [
                "Controls the NIC responsible for sending and receiving data on the physical medium.",
                "Integrates various physical technologies.",
            ],
            "explanation": {
                "topic": "6.1.2",
                "eli5": "The MAC side controls the NIC and helps different physical technologies work together.",
                "ccna": "The MAC sublayer controls the NIC and integrates various physical technologies.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        65: {
            "correctOptionIndices": [0, 1],
            "correctOptions": [
                "Provides synchronization between source and target nodes.",
                "Integrates various physical technologies.",
            ],
            "explanation": {
                "topic": "6.1.2",
                "eli5": "The layer keeps devices in sync and helps different physical media work together.",
                "ccna": "The LLC sublayer provides synchronization between source and target nodes and integrates various physical technologies.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        67: {
            "correctOptionIndices": [0, 1],
            "correctOptions": [
                "Implements a trailer to detect transmission errors.",
                "Provides synchronization between source and target nodes.",
            ],
            "explanation": {
                "topic": "6.1.2",
                "eli5": "The right choices are the ones that talk about the trailer for errors and keeping nodes synchronized.",
                "ccna": "The correct functions are implementing a trailer to detect transmission errors and providing synchronization between source and target nodes.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        69: {
            "correctOptionIndices": [0, 1],
            "correctOptions": [
                "Provides a mechanism to allow multiple devices to communicate over a shared medium.",
                "Controls the NIC responsible for sending and receiving data on the physical medium.",
            ],
            "explanation": {
                "topic": "6.1.2",
                "eli5": "The MAC layer lets many devices share the medium and manages the NIC that sends and receives data.",
                "ccna": "The MAC sublayer provides shared-medium access control and manages the NIC used to send and receive data on the physical medium.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        75: {
            "correctOptionIndices": [0],
            "correctOptions": ["The switch refreshes the timer on that entry."],
            "explanation": {
                "topic": "7.3.2",
                "eli5": "If the switch already knows the source MAC address, it just refreshes the timer for that entry.",
                "ccna": "When a switch receives a frame and already has the source MAC address in its table, it refreshes the timer for that entry.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        77: {
            "correctOptionIndices": [0],
            "correctOptions": ["The switch refreshes the timer on that entry."],
            "explanation": {
                "topic": "7.3.2",
                "eli5": "The switch already knows the sender, so it refreshes the table timer.",
                "ccna": "If a switch receives a frame and already has the source MAC address in the MAC table, it refreshes the timer on that entry.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        78: {
            "correctOptionIndices": [0],
            "correctOptions": ["The host will discard the frame."],
            "explanation": {
                "topic": "7.2.3",
                "eli5": "If the host does not recognize the destination MAC address, it throws the frame away.",
                "ccna": "A host discards a frame when the destination MAC address is not recognized.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
        80: {
            "correctOptionIndices": [3],
            "correctOptions": ["straight-through"],
            "explanation": {
                "topic": "4.4.3",
                "eli5": "A PC to switch cable is straight-through.",
                "ccna": "A straight-through UTP cable is used to connect a PC to a switch port.",
                "sourceText": "Manual fallback from course concept.",
            },
        },
    }

    for question in questions:
        fallback = manual.get(question["number"])
        if not fallback:
            continue
        answer = question.get("answer") or {}
        if not answer.get("correctOptionIndices"):
            question["answer"] = {
                "type": "choices",
                "correctOptionIndices": fallback["correctOptionIndices"],
                "correctOptionTexts": fallback["correctOptions"],
            }
            question["correctOptionIndices"] = fallback["correctOptionIndices"]
            question["correctOptions"] = fallback["correctOptions"]
            question["explanation"] = fallback["explanation"]
            if question.get("options"):
                for option_index, option in enumerate(question["options"]):
                    option["correct"] = option_index in set(fallback["correctOptionIndices"])


def augment_matrix_sort_answer(question: dict[str, Any], answer_block: dict[str, Any] | None) -> None:
    if not answer_block or question.get("kind") != "matrix_sort":
        return
    table = answer_block.get("tableAnswer")
    if not table:
        return
    question["answer"] = {
        "type": "table",
        "table": table,
    }
    if not question.get("explanation"):
        question["explanation"] = build_explanation(question["question"], [], answer_block)


def add_answer_page_only_questions(
    merged_questions: list[dict[str, Any]],
    answer_blocks: list[dict[str, Any]],
    checkpoint: dict[str, Any],
    cache: dict[str, str],
) -> list[dict[str, Any]]:
    existing_numbers = {item["number"] for item in merged_questions}
    existing_texts = {normalize_text(item["question"]) for item in merged_questions}

    extras: list[dict[str, Any]] = []
    for block in answer_blocks:
        if block.get("_used"):
            continue
        number = block.get("number")
        normalized = normalize_text(block.get("question"))
        if is_duplicate_question(normalized, existing_texts):
            continue
        if number is not None and number in existing_numbers:
            continue
        if checkpoint["id"] == "check1":
            if number != 76:
                continue
            if "fault tolerance" not in normalized and "college is building" not in normalized:
                continue
        else:
            continue

        record: dict[str, Any] = {
            "number": number if number is not None else len(merged_questions) + len(extras) + 1,
            "question": block.get("question", ""),
            "kind": "single_choice" if len(block.get("correctOptionIndices", [])) <= 1 else "multiple_choice",
            "options": block.get("options", []),
            "media": block.get("media", []),
            "source": {
                "url": checkpoint["test_url"],
                "pageQuestionCount": len(merged_questions),
            },
            "answerSource": {
                "url": checkpoint["answer_url"],
                "pageQuestionCount": len(answer_blocks),
            },
        }

        if block.get("tableAnswer"):
            record["kind"] = "matching"
            record["answer"] = {"type": "table", "table": block["tableAnswer"]}
            record["explanation"] = build_explanation(record["question"], [], block)
        elif block.get("correctOptionIndices"):
            record["answer"] = {
                "type": "choices",
                "correctOptionIndices": block["correctOptionIndices"],
                "correctOptionTexts": [record["options"][i]["text"] for i in block["correctOptionIndices"] if i < len(record["options"])],
            }
            record["explanation"] = build_explanation(record["question"], record["answer"]["correctOptionTexts"], block)
        else:
            record["answer"] = {"type": "visual_reference", "correctOptionIndices": [0] if record.get("options") else []}
            record["explanation"] = build_explanation(record["question"], [], block)

        if not record.get("explanation"):
            record["explanation"] = {
                "topic": block.get("topic") or "",
                "eli5": "Use the exhibit and the topic clue to identify the right answer.",
                "ccna": block.get("rawExplanation") or "",
                "sourceText": block.get("rawExplanation") or "",
            }

        if record.get("options"):
            for option_index, option in enumerate(record["options"]):
                option["correct"] = option_index in set(record["answer"].get("correctOptionIndices", []))

        extras.append(record)

    return sorted(merged_questions + extras, key=lambda item: item["number"])


def load_existing_json(path: Path) -> list[dict[str, Any]]:
    try:
        git_path = path.relative_to(REPO_ROOT).as_posix()
    except ValueError:
        git_path = path.as_posix().replace("\\", "/")
    completed = subprocess.run(
        ["git", "show", f"HEAD:{git_path}"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    if completed.returncode == 0 and completed.stdout.strip():
        payload = json.loads(completed.stdout)
        return payload.get("questions", [])

    if not path.exists():
        return []
    with path.open("r", encoding="utf-8") as handle:
        payload = json.load(handle)
    return payload.get("questions", [])


def write_json(path: Path, payload: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False, indent=2)
        handle.write("\n")


def build_checkpoint_export(checkpoint: dict[str, Any]) -> dict[str, Any]:
    test_html = fetch_html(checkpoint["test_url"])
    answer_html = fetch_html(checkpoint["answer_url"])

    test_soup = BeautifulSoup(test_html, "html.parser")
    test_questions_nodes = test_soup.select(".wpProQuiz_question")
    download_cache: dict[str, str] = {}
    answer_blocks = parse_answer_blocks(answer_html, checkpoint["id"], download_cache)

    test_questions_by_number: dict[int, dict[str, Any]] = {}
    for number, question_node in enumerate(test_questions_nodes, start=1):
        parsed_question = parse_test_question(question_node, checkpoint["id"], number, download_cache)
        test_questions_by_number[number] = parsed_question

    base_questions = [copy.deepcopy(question) for question in test_questions_by_number.values()]
    merged_questions = merge_questions(checkpoint, base_questions, test_questions_by_number, answer_blocks)
    merged_questions = add_answer_page_only_questions(merged_questions, answer_blocks, checkpoint, download_cache)
    apply_duplicate_answer_fallbacks(merged_questions)
    apply_manual_fallbacks(checkpoint["id"], merged_questions)

    total_questions = len(merged_questions)
    answered_questions = sum(1 for question in merged_questions if question.get("answer"))
    media_questions = sum(1 for question in merged_questions if question.get("media"))
    media_items = sum(len(question.get("media", [])) for question in merged_questions)

    return {
        "id": checkpoint["id"],
        "title": checkpoint["title"],
        "schemaVersion": 2,
        "generatedFrom": {
            "testUrl": checkpoint["test_url"],
            "answerUrl": checkpoint["answer_url"],
            "localMarkdownFiles": checkpoint["local_markdown_files"],
        },
        "totalQuestions": total_questions,
        "answeredQuestions": answered_questions,
        "questionsWithMedia": media_questions,
        "mediaItems": media_items,
        "questions": merged_questions,
    }


def build_manifest(exports: list[dict[str, Any]]) -> dict[str, Any]:
    return {
        "schemaVersion": 2,
        "files": [
            {
                "id": item["id"],
                "file": f"{item['id']}.json",
                "title": item["title"],
                "sourceUrl": item["generatedFrom"]["answerUrl"],
                "questionSourceUrl": item["generatedFrom"]["testUrl"],
                "answerSourceUrl": item["generatedFrom"]["answerUrl"],
                "localMarkdownFiles": item["generatedFrom"]["localMarkdownFiles"],
                "totalQuestions": item["totalQuestions"],
                "answeredQuestions": item["answeredQuestions"],
                "questionsWithMedia": item["questionsWithMedia"],
                "mediaItems": item["mediaItems"],
                "assetsDir": f"assets/{item['id']}",
            }
            for item in exports
        ],
    }


def main() -> None:
    exports: list[dict[str, Any]] = []
    for checkpoint in CHECKPOINTS:
        export = build_checkpoint_export(checkpoint)
        exports.append(export)
        write_json(checkpoint["output"], export)

    write_json(MODULES_DIR / "checkpoints-index.json", build_manifest(exports))


if __name__ == "__main__":
    main()
