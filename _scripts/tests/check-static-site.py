#!/usr/bin/env python3
"""Validate local references and pre-rendered static HTML coverage from Markdown sources."""

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[2]
DIST = ROOT / "dist"
EXPECTED_ROBOTS = {
    "coding-express", "tale-bot", "coding-set", "codey-rocky", "spike", "microbit"
}


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs = []
        self.has_legacy_redirect = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag.lower() == "dialog":
            self.refs.append(("FORBIDDEN", "<dialog> elements are not allowed"))
        if "data-legacy-redirect" in attrs:
            self.has_legacy_redirect = True
        for attr in ("href", "src"):
            value = attrs.get(attr, "").strip()
            if value:
                self.refs.append((attr, value))


def local_target(page: Path, ref: str):
    parsed = urlparse(ref)
    if parsed.scheme or parsed.netloc or ref.startswith(("#", "data:")):
        return None
    path = unquote(parsed.path)
    is_in_dist = DIST in page.parents or page == DIST
    root_base = DIST if is_in_dist else ROOT

    if path.startswith("_assets/"):
        return root_base / path
    if not path:
        return page
    if path.startswith("/"):
        return root_base / path.lstrip("/")
    target = page.parent / path
    if not is_in_dist and not target.exists() and DIST.is_dir():
        try:
            rel = target.resolve().relative_to(ROOT.resolve())
            dist_candidate = DIST / rel
            if dist_candidate.exists():
                return dist_candidate
        except ValueError:
            pass
    return target


def read_frontmatter(path: Path):
    text = path.read_text(encoding="utf-8")
    match = re.match(r"^---\s*\n([\s\S]*?)\n---\s*\n?", text)
    if not match:
        return {}, text
    values = {}
    for item in re.finditer(r"^([A-Za-z0-9_-]+):\s*(.*)$", match.group(1), re.MULTILINE):
        values[item.group(1)] = item.group(2).strip().strip("\"'")
    return values, text[match.end():]


def main():
    problems = []
    robot_counts = Counter()
    if not DIST.is_dir():
        print("Static site validation failed: dist/ directory not found (run node _scripts/build.js)")
        return 1

    pages = sorted(p for p in DIST.rglob("*.html") if not any(part.startswith(".") for part in p.relative_to(DIST).parts))

    redirect_routes = {
        Path("situacio/index.html"),
        Path("activitat/index.html"),
        Path("tutorial/index.html"),
        Path("robot/index.html"),
        Path("guia/index.html"),
    }

    for page in pages:
        parser = PageParser()
        parser.feed(page.read_text(encoding="utf-8"))
        relative = page.relative_to(DIST)
        for kind, ref in parser.refs:
            if kind == "FORBIDDEN":
                problems.append(f"{relative}: {ref}")
                continue
            target = local_target(page, ref)
            if target is not None and not target.exists():
                problems.append(f"{relative}: missing local {kind} {ref}")
        if relative in redirect_routes and not parser.has_legacy_redirect:
            problems.append(f"{relative}: missing data-legacy-redirect compatibility section")

    shared_content = {
        "activitat": ("activity", "activitats", ""),
        "tutorial": ("tutorial", "tutorials", ""),
        "robot": ("robot", "robots", "robot-"),
        "guia": ("guide", "guies", "guia-"),
    }
    required_fields = {
        "activity": ("title", "description", "topic", "cycle_label", "duration", "order"),
        "tutorial": ("title", "description", "robot", "level", "duration", "order", "image"),
        "robot": ("title",),
        "guide": ("title",),
    }

    for route, (kind, folder, prefix) in shared_content.items():
        paths = sorted(p for p in (ROOT / "_content" / folder).glob(f"{prefix}*.md")
                       if not p.name.startswith(("README", "TEMPLATE-")))
        if kind == "guide":
            paths = [p for p in paths if p.stem in {
                "guia-pensament-computacional",
                "guia-robotica-educativa",
                "guia-situacions-aprenentatge",
                "guia-fira-descobertes",
            }]
        if not paths:
            problems.append(f"_content/{folder}: no Markdown records for {kind}")
        for markdown_path in paths:
            editorial, body = read_frontmatter(markdown_path)
            if editorial.get("active", "true").lower() != "true":
                continue
            slug = markdown_path.stem.removeprefix(prefix)
            rendered_page = DIST / route / slug / "index.html"
            if not rendered_page.is_file():
                problems.append(f"{markdown_path.relative_to(ROOT)}: missing pre-rendered HTML at {rendered_page.relative_to(ROOT)} (run node _scripts/build.js)")
            for required in required_fields.get(kind, ("title",)):
                if not editorial.get(required):
                    problems.append(f"{markdown_path.relative_to(ROOT)}: missing front matter '{required}'")
            for ref in re.findall(r"(?<!!)\[[^\]]+\]\(([^)]+)\)|!\[[^\]]*\]\(([^)]+)\)", body):
                link = ref[0] or ref[1]
                target = local_target(markdown_path, link)
                if target is not None and not target.exists():
                    problems.append(f"{markdown_path.relative_to(ROOT)}: missing Markdown reference {link}")

    content_dir = ROOT / "_content/situacions"
    active = []
    situations_catalog_html = (DIST / "situacions-aprenentatge/index.html").read_text(encoding="utf-8")
    for markdown_path in sorted(content_dir.glob("*.md")):
        if markdown_path.name.startswith("TEMPLATE-"):
            continue
        editorial, body = read_frontmatter(markdown_path)
        if editorial.get("active", "").lower() != "true":
            continue
        active.append(markdown_path)
        slug = markdown_path.stem
        rendered_page = DIST / "situacio" / slug / "index.html"
        if not rendered_page.is_file():
            problems.append(f"{markdown_path.relative_to(ROOT)}: missing pre-rendered HTML at {rendered_page.relative_to(ROOT)} (run node _scripts/build.js)")
        if f"../situacio/{slug}/index.html" not in situations_catalog_html:
            problems.append(f"situacions-aprenentatge/index.html: missing card link for {slug} (run node _scripts/build.js)")
        for required in ("title", "description", "robot", "cycle", "subject", "theme", "duration", "challenge"):
            if not editorial.get(required):
                problems.append(f"{markdown_path.relative_to(ROOT)}: missing front matter '{required}'")
        robot = editorial.get("robot", "").lower()
        if robot != "desendollat":
            robot_counts[robot] += 1
        images = re.findall(r"!\[([^\]]*)\]\(([^)]+)\)", body)
        if not images:
            problems.append(f"{markdown_path.relative_to(ROOT)}: missing editorial image")
        for alt, ref in images:
            if not alt.strip():
                problems.append(f"{markdown_path.relative_to(ROOT)}: Markdown image needs descriptive alt text")
            target = local_target(markdown_path, ref)
            if target is not None and not target.exists():
                problems.append(f"{markdown_path.relative_to(ROOT)}: missing Markdown image {ref}")
        for ref in re.findall(r"(?<!!)\[[^\]]+\]\(([^)]+)\)", body):
            target = local_target(markdown_path, ref)
            if target is not None and not target.exists():
                problems.append(f"{markdown_path.relative_to(ROOT)}: missing Markdown link {ref}")

    for robot in sorted(EXPECTED_ROBOTS):
        if robot_counts[robot] < 5:
            problems.append(f"robot {robot}: expected at least 5 situations, found {robot_counts[robot]}")
        icon = ROOT / "_assets/icons" / f"{robot}.webp"
        if not icon.is_file():
            problems.append(f"robot {robot}: missing WebP icon at {icon.relative_to(ROOT)}")
    if not (ROOT / "_assets/icons/desendollat.webp").is_file():
        problems.append("disconnected activities: missing WebP icon _assets/icons/desendollat.webp")

    if problems:
        print("Static site validation failed:")
        for problem in problems:
            print(f"- {problem}")
        return 1
    print(f"Static site validation passed: {len(pages)} pre-rendered HTML pages, {len(active)} active Markdown situations, no broken local references.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
