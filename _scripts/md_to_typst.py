#!/usr/bin/env python3
"""Render the site's editorial Markdown as individual and collected Typst PDFs.

The Markdown files remain the only source of editorial content.  This renderer
supports the small, consistent Markdown subset used in _content and has no
third-party Python dependencies.
"""
from __future__ import annotations

import argparse
import hashlib
import html
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = {
    "activitats": ("activitats", "Activitats"),
    "tutorials": ("tutorials", "Tutorials"),
    "guies": ("guies", "Guies docents"),
    "robots": ("robots", "Fitxes de robots"),
    "situacions": ("situacions", "Situacions d’aprenentatge"),
}
WEB_GROUPS = {
    "activitats": "Pensament computacional",
    "tutorials": "Robòtica educativa",
    "guies": "Robòtica educativa",
    "robots": "Robòtica educativa",
    "situacions": "Situacions d’aprenentatge",
}


def front_matter(source: str) -> tuple[dict[str, str], str]:
    if not source.startswith("---\n"):
        return {}, source
    end = source.find("\n---", 4)
    if end < 0:
        return {}, source
    values: dict[str, str] = {}
    for line in source[4:end].splitlines():
        match = re.match(r"^([\w-]+):\s*(.*)$", line)
        if match:
            key, value = match.groups()
            value = value.strip()
            if value.startswith(("'", '"')) and value.endswith(value[0]):
                value = value[1:-1]
            values[key] = value
    return values, source[end + 4:].lstrip("\n")


def typst_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def typst_text(value: str) -> str:
    value = value.replace("\\", "\\\\")
    for char in ("#", "$", "@", "<", ">", "*", "_"):
        value = value.replace(char, "\\" + char)
    return value


def inline(text: str, md_path: Path, typ_dir: Path) -> str:
    """Convert the inline Markdown constructs used by the editorial content."""
    # Keep code spans out of the subsequent emphasis/link substitutions.
    code_spans: list[str] = []
    text = re.sub(r"`([^`]+)`", lambda m: _stash(code_spans, f"#raw({typst_string(m.group(1))})"), text)
    text = html.unescape(text)
    pattern = re.compile(r"(!?)\[([^\]]*)\]\(([^)]+)\)|\*\*([^*]+)\*\*|(?<![\w_])__([^_\s](?:[^_]*?[^_\s])?)__(?![\w_])|\*([^*]+)\*|(?<![\w_])_([^_\s](?:[^_]*?[^_\s])?)_(?![\w_])")
    result: list[str] = []
    pos = 0
    for match in pattern.finditer(text):
        result.append(typst_text(text[pos:match.start()]))
        image_mark, label, target, bold1, bold2, italic1, italic2 = match.groups()
        if label is not None:
            if image_mark:
                image_path = (md_path.parent / target).resolve()
                if not image_path.exists():
                    image_path = (ROOT / target.lstrip("./")).resolve()
                if not image_path.is_file():
                    raise FileNotFoundError(f"Imatge no trobada en {md_path.relative_to(ROOT)}: {target}")
                try:
                    rel = os.path.relpath(image_path, typ_dir)
                except ValueError:
                    rel = str(image_path)
                image_format = None
                signature = image_path.read_bytes()[:12]
                detected = (
                    "png" if signature.startswith(b"\x89PNG\r\n\x1a\n") else
                    "jpg" if signature.startswith(b"\xff\xd8\xff") else
                    "gif" if signature.startswith((b"GIF87a", b"GIF89a")) else
                    "webp" if signature.startswith(b"RIFF") and signature[8:12] == b"WEBP" else
                    "svg" if b"<svg" in signature.lower() else None
                )
                if detected and image_path.suffix.lower().lstrip(".") not in (detected, "jpeg" if detected == "jpg" else detected):
                    image_format = f", format: {typst_string(detected)}"
                result.append(f"#figure(image({typst_string(rel)}{image_format or ''}, width: 82%, alt: {typst_string(label)}), caption: [#text(size: 9pt)[{typst_text(label)}]])")
            else:
                result.append(f"#link({typst_string(target)})[{inline(label, md_path, typ_dir)}]")
        elif bold1 is not None or bold2 is not None:
            result.append(f"#strong[{typst_text(bold1 if bold1 is not None else bold2)}]")
        else:
            result.append(f"#emph[{typst_text(italic1 if italic1 is not None else italic2)}]")
        pos = match.end()
    result.append(typst_text(text[pos:]))
    rendered = "".join(result)
    for index, code in enumerate(code_spans):
        rendered = rendered.replace(f"\u0000{index}\u0000", code)
    return rendered


def _stash(items: list[str], value: str) -> str:
    index = len(items)
    items.append(value)
    return f"\u0000{index}\u0000"


def markdown_to_typst(source: str, md_path: Path, typ_dir: Path) -> str:
    # Dades internes de les fitxes: mai formen part del document imprimible.
    source = re.sub(r"(?m)^<!-- (?:Inici|Codi|Objectiu|Resposta de control|Proposta): .+ -->[ \t]*$", "", source)
    source_lines = source.replace("\r\n", "\n").split("\n")
    tables: list[list[list[str]]] = []
    lines: list[str] = []
    source_index = 0
    table_separator = re.compile(r"^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$")
    while source_index < len(source_lines):
        current = source_lines[source_index]
        if ("|" in current and source_index + 1 < len(source_lines)
                and table_separator.match(source_lines[source_index + 1])):
            raw_rows = [current]
            source_index += 2
            while source_index < len(source_lines) and "|" in source_lines[source_index] and source_lines[source_index].strip():
                raw_rows.append(source_lines[source_index])
                source_index += 1
            tables.append([[cell.strip() for cell in row.strip().strip("|").split("|")] for row in raw_rows])
            lines.append(f"\x01TABLE{len(tables) - 1}\x01")
            continue
        lines.append(current)
        source_index += 1
    out: list[str] = []
    paragraph: list[str] = []
    list_kind: str | None = None
    fence: str | None = None
    code: list[str] = []
    session_number = 0

    def flush_paragraph() -> None:
        nonlocal paragraph
        if paragraph:
            rendered = " ".join(line.strip() for line in paragraph)
            callout = re.match(r"^\*\*(Evidència|Pregunta docent|Vocabulari):\*\*\s*(.*)$", rendered, re.I)
            if callout:
                label, content = callout.groups()
                themes = {
                    "evidència": ("#eff6ff", "#2563eb"),
                    "pregunta docent": ("#f5f3ff", "#7c3aed"),
                    "vocabulari": ("#f4f6f8", "#64748b"),
                }
                fill, accent = themes[label.lower()]
                out.append(f'#block(breakable: false, fill: rgb("{fill}"), stroke: (left: 2pt + rgb("{accent}"), rest: 0.5pt + rgb("#e5e9ee")), radius: 5pt, inset: (x: 9pt, y: 7pt))[#text(size: 7.5pt, weight: "bold", fill: rgb("{accent}"), tracking: 0.4pt)[{label.upper()}] #v(3pt) {inline(content, md_path, typ_dir)}]')
            else:
                out.append(inline(rendered, md_path, typ_dir))
            out.append("")
            paragraph = []

    def close_list() -> None:
        nonlocal list_kind
        if list_kind:
            out.append("")
            list_kind = None

    for line in lines:
        table_marker = re.fullmatch(r"\x01TABLE(\d+)\x01", line)
        if table_marker:
            flush_paragraph()
            close_list()
            rows = tables[int(table_marker.group(1))]
            columns = max(len(row) for row in rows)
            cells_out = []
            for row_index, row in enumerate(rows):
                row += [""] * (columns - len(row))
                for cell in row:
                    rendered_cell = inline(cell, md_path, typ_dir)
                    cells_out.append(f"[#strong[{rendered_cell}]]" if row_index == 0 else f"[{rendered_cell}]")
            out.append(f"#set text(size: 9pt)\n#table(columns: {columns}, stroke: 0.5pt + luma(205), inset: 5pt, fill: (x, y) => if y == 0 {{ rgb(\"#eaf2ff\") }} else {{ white }}, {', '.join(cells_out)})\n#set text(size: 10.5pt)")
            out.append("")
            continue
        fence_match = re.match(r"^\s*```\s*([\w+-]*)\s*$", line)
        if fence_match:
            flush_paragraph()
            close_list()
            if fence is None:
                fence = fence_match.group(1).lower()
                code = []
            else:
                labels = {"makecode": "MakeCode", "spikeapp": "SPIKE App", "mblock": "mBlock"}
                language = {"makecode": "js"}.get(fence, fence if fence not in labels else "")
                raw = "\n".join(code)
                label = labels.get(fence, "Codi")
                out.append(f"#block(breakable: false, fill: rgb(\"#f4f6f8\"), stroke: (left: 2.5pt + rgb(\"#2563eb\"), rest: 0.6pt + rgb(\"#e5e9ee\")), radius: 7pt, inset: (x: 12pt, y: 10pt))[#text(size: 8pt, weight: \"bold\", fill: rgb(\"#2563eb\"))[ {label.upper()} ] #v(4pt) #raw({typst_string(raw)}, lang: {typst_string(language)})]")
                out.append("")
                fence = None
            continue
        if fence is not None:
            code.append(line)
            continue
        if not line.strip():
            flush_paragraph()
            close_list()
            continue
        heading = re.match(r"^(#{1,6})\s+(.+?)\s*#*\s*$", line)
        if heading:
            flush_paragraph()
            close_list()
            level = len(heading.group(1))
            if md_path.parent.name == "situacions" and level == 3:
                session_number += 1
                session_title = inline(heading.group(2), md_path, typ_dir)
                out.append(f'#block(sticky: true, fill: rgb("#eff6ff"), stroke: (left: 2.5pt + rgb("#2563eb"), rest: 0.5pt + rgb("#dbeafe")), radius: 6pt, inset: (x: 10pt, y: 7pt))[#text(size: 7.5pt, weight: "bold", fill: rgb("#2563eb"), tracking: 0.5pt)[SESSIÓ {session_number:02d}] #v(3pt) #heading(level: 3, outlined: false)[{session_title}]]')
            else:
                out.append(f"#heading(level: {min(level, 4)}, outlined: false)[{inline(heading.group(2), md_path, typ_dir)}]")
            out.append("")
            continue
        if re.match(r"^\s*(---+|\*\*\*+)\s*$", line):
            flush_paragraph()
            close_list()
            out.extend(["#line(length: 100%, stroke: 0.6pt + luma(210))", ""])
            continue
        quote = re.match(r"^>\s?(.*)$", line)
        if quote:
            flush_paragraph()
            close_list()
            quoted = [quote.group(1)]
            out.append(f"#quote(block: true, attribution: none)[{inline(' '.join(quoted), md_path, typ_dir)}]")
            out.append("")
            continue
        item = re.match(r"^(\s*)([-+*]|\d+[.)])\s+(.*)$", line)
        if item:
            flush_paragraph()
            kind = "ordered" if item.group(2)[0].isdigit() else "unordered"
            if list_kind and list_kind != kind:
                close_list()
            list_kind = kind
            marker = "+" if kind == "ordered" else "-"
            item_text = item.group(3)
            check = re.match(r"\[([ xX])\]\s*(.*)$", item_text)
            if check:
                item_text = ("☑ " if check.group(1).strip() else "☐ ") + check.group(2)
            out.append(f"{marker} {inline(item_text, md_path, typ_dir)}")
            continue
        close_list()
        paragraph.append(line)
    if fence is not None:
        raw = "\n".join(code)
        out.append(f"#block(fill: rgb(\"#f1f5f9\"), inset: 10pt)[#raw({typst_string(raw)})]")
    flush_paragraph()
    close_list()
    return "\n".join(out).strip()


def document_typst(title: str, description: str, body: str, eyebrow: str = "", include_outline: bool = False) -> str:
    description_block = f'#v(5pt)\n#text(size: 11pt, fill: rgb("#64748b"))[{typst_text(description)}]\n#v(10pt)' if description else ''
    eyebrow_block = f'#text(size: 8pt, weight: "bold", fill: rgb("#2563eb"), tracking: 0.7pt)[{typst_text(eyebrow.upper())}]' if eyebrow else '#text(size: 8pt, weight: "bold", fill: rgb("#2563eb"), tracking: 0.7pt)[ROBÒTICA PER A DOCENTS]'
    outline_block = '#pagebreak()\n#outline(title: [Índex de recursos], depth: 2)\n#pagebreak()' if include_outline else ''
    return f'''#set document(title: {typst_string(title)}, author: "Robòtica²⁰⁰")
#set page(paper: "a4", margin: (top: 20mm, bottom: 19mm, left: 20mm, right: 20mm), header: context [#text(size: 7pt, weight: "bold", fill: rgb("#2563eb"), tracking: 0.5pt)[ROBÒTICA²⁰⁰] #h(1fr) #text(size: 7pt, fill: rgb("#64748b"))[{typst_text(eyebrow or "MATERIALS PER A DOCENTS")} ] #line(length: 100%, stroke: 0.5pt + rgb("#e5e9ee"))], footer: context [#line(length: 100%, stroke: 0.5pt + rgb("#e5e9ee")) #v(5pt) #text(size: 8pt, weight: "semibold", fill: rgb("#2563eb"))[ROBÒTICA²⁰⁰] #text(size: 8pt, fill: rgb("#64748b"))[ · {typst_text(title)}] #h(1fr) #text(size: 8pt, fill: rgb("#64748b"))[#counter(page).display() / #counter(page).final().at(0)]])
#set text(font: "DejaVu Sans", size: 10.5pt, fill: rgb("#111827"), lang: "ca")
#set par(leading: 0.72em, justify: true, spacing: 0.72em)
#set heading(numbering: none)
#show heading.where(level: 1): set text(font: "DejaVu Sans", size: 19pt, weight: "bold", fill: rgb("#0f172a"))
#show heading.where(level: 2): set text(size: 14pt, weight: "bold", fill: rgb("#1d4ed8"))
#show heading.where(level: 3): set text(size: 11.5pt, weight: "bold", fill: rgb("#1d4ed8"))
#show heading.where(level: 4): set text(size: 10.5pt, weight: "bold", fill: rgb("#1d4ed8"))
#show heading: set block(above: 1.05em, below: 0.48em)
#show heading.where(level: 2): set block(sticky: true, fill: rgb("#eff6ff"), stroke: (left: 2pt + rgb("#2563eb"), rest: 0.5pt + rgb("#dbeafe")), radius: 5pt, inset: (x: 8pt, y: 5pt), above: 1.15em, below: 0.5em)
#show link: set text(fill: rgb("#1d4ed8"))
#set list(indent: 1.2em, body-indent: 0.4em, spacing: 0.48em)
#set enum(indent: 1.2em, body-indent: 0.4em, spacing: 0.48em)
#block(breakable: false, fill: rgb("#eff6ff"), stroke: (left: 3pt + rgb("#2563eb"), rest: 0.6pt + rgb("#dbeafe")), radius: 9pt, inset: (x: 16pt, y: 13pt))[
{eyebrow_block}
#v(7pt)
#heading(level: 1, outlined: false)[{typst_text(title)}]
{description_block}]
#v(12pt)
{outline_block}
{body}
'''


def slug_for(category: str, filename: str) -> str:
    stem = Path(filename).stem
    if category == "guies":
        return re.sub(r"^guia-", "", stem)
    if category == "robots":
        return re.sub(r"^robot-", "", stem)
    return stem


def compress_pdf(pdf_path: Path, gs: str) -> None:
    optimized = pdf_path.with_name(pdf_path.stem + ".optimized.pdf")
    command = [
        gs, "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.7", "-dPDFSETTINGS=/printer",
        "-dDownsampleColorImages=true", "-dColorImageResolution=180",
        "-dColorImageDownsampleType=/Bicubic", "-dAutoFilterColorImages=false",
        "-dColorImageFilter=/DCTEncode", "-dJPEGQ=86", "-dDownsampleGrayImages=true",
        "-dGrayImageResolution=180", "-dNOPAUSE", "-dBATCH", "-dQUIET",
        f"-sOutputFile={optimized}", str(pdf_path),
    ]
    subprocess.run(command, check=True, cwd=ROOT)
    if optimized.stat().st_size < pdf_path.stat().st_size:
        os.replace(optimized, pdf_path)
    else:
        optimized.unlink(missing_ok=True)


def content_digest(doc: dict[str, str], md_path: Path, tool_versions: str) -> str:
    digest = hashlib.sha256()
    digest.update(Path(__file__).read_bytes())
    digest.update(tool_versions.encode("utf-8"))
    digest.update(md_path.read_bytes())
    for match in re.finditer(r"!\[[^\]]*\]\(([^)]+)\)", doc["body"]):
        target = match.group(1)
        if re.match(r"^[a-z][a-z0-9+.-]*:", target, re.I):
            continue
        image_path = (md_path.parent / target).resolve()
        if not image_path.exists():
            image_path = (ROOT / target.lstrip("./")).resolve()
        if not image_path.is_file():
            raise FileNotFoundError(f"Imatge no trobada en {doc['source']}: {target}")
        digest.update(str(image_path.relative_to(ROOT)).encode("utf-8"))
        digest.update(image_path.read_bytes())
    return digest.hexdigest()


def reusable_pdf(cache_dir: Path | None, category: str, slug: str, digest: str, output_pdf: Path) -> bool:
    if cache_dir is None:
        return False
    cached_pdf = cache_dir / category / f"{slug}.pdf"
    digest_file = cache_dir / category / f"{slug}.sha256"
    if not cached_pdf.is_file() or not digest_file.is_file() or digest_file.read_text(encoding="ascii").strip() != digest:
        return False
    output_pdf.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(cached_pdf, output_pdf)
    return True


def store_pdf(cache_dir: Path | None, category: str, slug: str, digest: str, pdf_path: Path) -> None:
    if cache_dir is None:
        return
    cached_pdf = cache_dir / category / f"{slug}.pdf"
    cached_pdf.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(pdf_path, cached_pdf)
    cached_pdf.with_suffix(".sha256").write_text(digest + "\n", encoding="ascii")


def prune_cache(cache_dir: Path, valid: set[tuple[str, str]]) -> None:
    if not cache_dir.exists():
        return
    for category_dir in cache_dir.iterdir():
        if not category_dir.is_dir():
            continue
        for cached_file in category_dir.iterdir():
            if cached_file.suffix in (".pdf", ".sha256") and (category_dir.name, cached_file.stem) not in valid:
                cached_file.unlink(missing_ok=True)
        if not any(category_dir.iterdir()):
            category_dir.rmdir()


def collect() -> list[dict[str, str]]:
    docs: list[dict[str, str]] = []
    for folder, (category, label) in CATEGORIES.items():
        directory = ROOT / "_content" / folder
        if not directory.exists():
            continue
        for md_path in sorted(directory.glob("*.md")):
            if md_path.name.startswith(("TEMPLATE-", "README")):
                continue
            meta, body = front_matter(md_path.read_text(encoding="utf-8"))
            if meta.get("active", "true").lower() in ("false", "0", "no", "off"):
                continue
            slug = slug_for(folder, md_path.name)
            title = meta.get("title", slug).strip()
            robot_label = meta.get("robot_label") or meta.get("robot", "").replace("-", " ").title()
            activity_robot = {"tb": "Tale-Bot", "cs": "Coding Set"}.get(slug.split("-")[0], "") if folder == "activitats" else ""
            if activity_robot:
                robot_label = activity_robot
            cycle_label = meta.get("cycle_label", "")
            metadata = [value for value in (robot_label, cycle_label, meta.get("level", ""), meta.get("duration", "")) if value]
            docs.append({
                "category": category,
                "categoryLabel": label,
                "webGroup": "Robòtica educativa" if activity_robot else WEB_GROUPS[folder],
                "slug": slug,
                "title": title,
                "description": meta.get("description", "").strip(),
                "metadata": " · ".join(metadata),
                "source": str(md_path.relative_to(ROOT)),
                "body": body,
            })
    return docs


def write_printables(out: Path, compile_pdf: bool, cache_dir: Path | None = None) -> tuple[list[dict[str, str]], dict[str, int | bool]]:
    docs = collect()
    typst = shutil.which("typst")
    ghostscript = shutil.which("gs")
    if compile_pdf and not typst:
        raise RuntimeError("No s'ha trobat Typst. Instal·la Typst o usa --no-pdf per generar només els .typ.")
    if compile_pdf and not ghostscript:
        raise RuntimeError("No s'ha trobat Ghostscript, necessari per optimitzar els PDF.")
    tool_versions = ""
    if compile_pdf:
        tool_versions = subprocess.check_output([typst, "--version"], text=True).strip() + "\n"
        tool_versions += subprocess.check_output([ghostscript, "--version"], text=True).strip()
    output_root = out / "imprimir"
    output_root.mkdir(parents=True, exist_ok=True)

    generated = 0
    reused = 0
    digests: dict[tuple[str, str], str] = {}
    for doc in docs:
        group_dir = output_root / doc["category"]
        group_dir.mkdir(parents=True, exist_ok=True)
        md_path = ROOT / doc["source"]
        body = markdown_to_typst(doc["body"], md_path, group_dir)
        typ_source = document_typst(doc["title"], doc["description"], body, f'{doc["categoryLabel"]} · {doc["metadata"]}' if doc["metadata"] else doc["categoryLabel"])
        typ_path = group_dir / f'{doc["slug"]}.typ'
        pdf_path = group_dir / f'{doc["slug"]}.pdf'
        typ_path.write_text(typ_source, encoding="utf-8")
        if compile_pdf:
            digest = content_digest(doc, md_path, tool_versions)
            digests[(doc["category"], doc["slug"])] = digest
            if reusable_pdf(cache_dir, doc["category"], doc["slug"], digest, pdf_path):
                reused += 1
            else:
                subprocess.run([typst, "compile", "--root", str(ROOT), str(typ_path), str(pdf_path)], check=True, cwd=ROOT)
                compress_pdf(pdf_path, ghostscript)
                store_pdf(cache_dir, doc["category"], doc["slug"], digest, pdf_path)
                generated += 1
        doc["pdf"] = f'imprimir/{doc["category"]}/{doc["slug"]}.pdf'
        doc["typ"] = f'imprimir/{doc["category"]}/{doc["slug"]}.typ'

    # Collected edition: same visual system as individual documents, with a navigable outline.
    global_typ_dir = output_root
    global_body = []
    current_group = None
    for index, doc in enumerate(docs):
        if index:
            global_body.append("#pagebreak()")
        if doc["webGroup"] != current_group:
            current_group = doc["webGroup"]
            global_body.append(f'#heading(level: 1)[{typst_text(current_group)}]')
        global_body.append(f'#text(size: 8pt, weight: "bold", fill: rgb("#2563eb"), tracking: 0.6pt)[{typst_text(doc["categoryLabel"].upper())}]')
        global_body.append(f'#heading(level: 2)[{typst_text(doc["title"])}]')
        if doc["metadata"]:
            global_body.append(f'#text(size: 8pt, fill: rgb("#64748b"))[{typst_text(doc["metadata"])}]')
        if doc["description"]:
            global_body.append(f'#text(size: 10.5pt, fill: rgb("#64748b"))[{typst_text(doc["description"])}]')
        global_body.append('#line(length: 100%, stroke: 0.6pt + rgb("#dbeafe"))')
        global_body.append(markdown_to_typst(doc["body"], ROOT / doc["source"], global_typ_dir))
    global_source = document_typst(
        "Recull complet de recursos",
        "Activitats, tutorials, guies docents, fitxes de robots i situacions d’aprenentatge.",
        "\n\n".join(global_body),
        "Robòtica per a docents · Recull",
        include_outline=True,
    )
    global_typ = output_root / "robotica200-complet.typ"
    global_pdf = output_root / "robotica200-complet.pdf"
    global_typ.write_text(global_source, encoding="utf-8")
    global_digest = hashlib.sha256()
    global_digest.update(Path(__file__).read_bytes())
    global_digest.update(tool_versions.encode("utf-8"))
    for doc in docs:
        global_digest.update(digests.get((doc["category"], doc["slug"]), "typst-only").encode("ascii"))
    global_digest_value = global_digest.hexdigest()
    global_cached = False
    if compile_pdf:
        global_cached = reusable_pdf(cache_dir, "global", "robotica200-complet", global_digest_value, global_pdf)
        if not global_cached:
            subprocess.run([typst, "compile", "--root", str(ROOT), str(global_typ), str(global_pdf)], check=True, cwd=ROOT)
            compress_pdf(global_pdf, ghostscript)
            store_pdf(cache_dir, "global", "robotica200-complet", global_digest_value, global_pdf)
    if cache_dir is not None and compile_pdf:
        prune_cache(cache_dir, set(digests) | {("global", "robotica200-complet")})
    return docs, {"generated": generated, "reused": reused, "globalCached": global_cached}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "dist")
    parser.add_argument("--cache-dir", type=Path, default=ROOT / ".cache" / "print-pdfs", help="Directori de caché incremental dels PDF")
    parser.add_argument("--no-pdf", action="store_true", help="Genera només fitxers .typ")
    args = parser.parse_args()
    records, stats = write_printables(args.output.resolve(), not args.no_pdf, args.cache_dir.resolve() if not args.no_pdf else None)
    print(json.dumps({"items": [{k: v for k, v in item.items() if k != "body"} for item in records], "stats": stats}, ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except (OSError, subprocess.CalledProcessError, RuntimeError) as exc:
        print(f"Error en generar imprimibles: {exc}", file=sys.stderr)
        raise SystemExit(1)
