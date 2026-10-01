"""Report visible exercise-number jumps in Thomas' Calculus chapters.

This is a triage aid, not proof that a question is missing: OCR may put several
questions on one line or hide their numbers inside a math block or an image.
"""

import argparse
import re
from dataclasses import dataclass, field
from pathlib import Path


CHAPTERS = Path(__file__).resolve().parents[1] / "books/thomas-calculus/chapters"
HEADING = re.compile(r"^(#{1,6})\s+(.+)")
QUESTION = re.compile(r"^\s*(?:T\s+)?(\d+)\.(?:\s+|$)")
EXERCISES = re.compile(r"\bexercises\b", re.IGNORECASE)
INSTRUCTION = re.compile(r"^(?:In|For|Use|Graph|Evaluate|Replace|Proof)\b", re.IGNORECASE)


@dataclass
class Section:
    path: Path
    title: str
    line: int
    depth: int
    questions: list[tuple[int, int]] = field(default_factory=list)

    def issues(self):
        for (previous, previous_line), (number, line) in zip(
            self.questions, self.questions[1:]
        ):
            if number > previous + 1:
                yield "jump", previous, number, previous_line, line
            elif number < previous:
                yield "reverse", previous, number, previous_line, line
            elif number == previous:
                yield "duplicate", previous, number, previous_line, line


def scan(path: Path) -> list[Section]:
    sections = []
    active = None
    for line_number, line in enumerate(path.read_text().splitlines(), 1):
        heading = HEADING.match(line)
        if heading:
            depth, title = len(heading[1]), heading[2]
            if active and depth <= active.depth:
                sections.append(active)
                active = None
            if depth <= 3 and EXERCISES.search(title) and not INSTRUCTION.match(title):
                active = Section(path, title, line_number, depth)
        if active:
            question = QUESTION.match(line)
            if question:
                active.questions.append((int(question[1]), line_number))
    if active:
        sections.append(active)
    return sections


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--chapter", type=int, help="only show one chapter number")
    parser.add_argument("--details", action="store_true", help="list individual issues")
    args = parser.parse_args()

    sections = []
    for path in sorted(CHAPTERS.glob("Chapter_*.md")):
        chapter = int(path.name.split("_")[1])
        if args.chapter is None or chapter == args.chapter:
            sections.extend(scan(path))

    totals = {"jump": 0, "reverse": 0, "duplicate": 0}
    for section in sections:
        issues = list(section.issues())
        if not issues:
            continue
        counts = {kind: sum(issue[0] == kind for issue in issues) for kind in totals}
        for kind, count in counts.items():
            totals[kind] += count
        print(
            f"{section.path.name}:{section.line} {section.title}: "
            + ", ".join(f"{kind}={count}" for kind, count in counts.items() if count)
        )
        if args.details:
            for kind, previous, number, previous_line, line in issues:
                print(f"  {kind}: {previous} → {number} (lines {previous_line}, {line})")

    print(
        f"{len(sections)} sections, {sum(len(s.questions) for s in sections)} "
        f"visible questions; " + ", ".join(f"{kind}={count}" for kind, count in totals.items())
    )


if __name__ == "__main__":
    main()
