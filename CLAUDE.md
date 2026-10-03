# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal GitHub Pages site (Jekyll) for Maykell Sanchez Romero. Bilingual (Spanish/English) technical blog with an ongoing Elixir tutorial series. Theme: Beautiful Jekyll v5. Deploys automatically on push to `master`.

## Build and Serve Commands

```bash
# Install dependencies
bundle install

# Local development server (http://localhost:4000)
bundle exec jekyll serve

# Build for production (output: _site/)
bundle exec jekyll build
```

No test suite, linter, or custom build scripts. Ruby 2.7+ required (see `.ruby-version`).

## Architecture

**Jekyll site** using Beautiful Jekyll theme via gemspec. Kramdown (GFM) for Markdown, Rouge for syntax highlighting.

Key directories:
- `_posts/` - Blog articles. Naming: `YYYY-MM-DD-slug-title.md`. Drafts prefixed with underscore.
- `_includes/` - Jekyll partials. `bilingual_header.html` is the bilingual system entry point.
- `_templates/` - Templates for new content. Copy `bilingual_article_template.md` for new bilingual posts.
- `_ideas/` - Planning files. `todo_lecciones_elixir.md` tracks Elixir lesson progress.
- `assets/css/`, `assets/js/` - Static assets including `bilingual.css` and `bilingual.js`.

## Resume (home page)

The home page (`index.md`) is a resume rendered from `_data/resume.yml`: contact, grouped technologies, notable projects, experience summary, education and languages. The same data feeds `llms.txt` and the project pages' structured data (`_includes/structured-data.html`), so edit the YAML rather than the pages. The detailed role descriptions live in `experience.md`, and each project has its own page under `projects/`.

`assets/css/resume.css` holds both the screen design and the print stylesheet: printing the home page (Ctrl+P / "Save as PDF") produces a CV of up to two pages. After changing resume content, run `bin/cv-pdf`: it regenerates the downloadable `assets/docs/Maykell-Sanchez-Romero-CV.pdf` and warns if the CV no longer fits on two pages. The home page uses absolute URLs (`absolute_url`) on purpose, so the PDF's links point to the published site even when generated locally. `bin/social-card` regenerates the 1200x630 link-preview image (`assets/img/social-card.png`) from `tools/social-card.html`; it is the default `share-img` for every page. The Markdown CV for LLMs (`/assets/docs/Maykell-Sanchez-Romero-CV.md`) is generated on every build from `assets/docs/cv-markdown.txt` (a `.txt` so Jekyll does not convert it to HTML), also from `_data/resume.yml`.

## Design system

The site's look lives in `assets/css/custom-styles.css` (tokens and site-wide rules), `assets/css/resume.css` (home page and its print stylesheet) and `assets/css/projects.css` (project pages and How I Work). Direction: a well-kept engineering record. Public Sans for names, headings and interface; Source Serif 4 for reading text; one accent, forest green `#2F6B52`, on ink `#1E2A28`, slate `#5E6B67` and rules `#D5DEDA`. The home page uses the `resume` layout (no theme header). Avoid template tells: no all-caps tracked labels, no middle-dot meta strings, no arrows appended to links, no identical shadowed cards. Key facts on project pages and How I Work are shown as quiet badges (square-ish, mist background), by choice. Numbers only where content is a real sequence. Every page prints cleanly: the site-wide print rules at the end of `custom-styles.css` drop the browser header and footer (zero `@page` margin), the site chrome and the navbar gap, print external link addresses, keep figures whole, swap videos for their poster image (`.print-only`) and add a footer line with the page address; the home page adds its CV print rules in `resume.css`.

## Bilingual System

All new articles use the bilingual infrastructure. The system is self-contained in `_includes/bilingual_header.html` (embedded CSS+JS) with standalone reference files in `assets/`.

Structure for bilingual posts:
```markdown
---
layout: post
title: "English Title | Titulo en Espanol"
description: "Description | Descripcion"
tags: [Topic, Bilingual, Tutorial]
---

{% include bilingual_header.html %}

<div class="lang-content" id="lang-en" markdown="1">
English content...
</div>

<div class="lang-content hidden" id="lang-es" markdown="1">
Spanish content...
</div>
```

English is the site's main language: it goes first in titles and descriptions, and its block is the one shown by default (the language switcher also defaults to English).

The `markdown="1"` attribute on content divs is required for Jekyll to render Markdown inside HTML tags. Do not modify `_includes/bilingual_header.html` without understanding its impact on all bilingual posts.

## Elixir Lessons Series

47-lesson bilingual tutorial series. Check `_ideas/todo_lecciones_elixir.md` for current progress and next lesson. Reference the completed Lesson 01 (`_posts/2025-01-09-elixir-lessons-01-intro-to-elixir-and-beam.md`) as the canonical example for style and structure.

### Lesson structure requirements
1. Front matter with bilingual title/description using `|` separator
2. Introduction and objectives
3. Theoretical concepts with examples
4. Practical examples (progressive difficulty)
5. Best practices section
6. Exercises: minimum 5 theoretical + 10 practical
7. Complete answers for all exercises
8. References and links
9. Next lesson preview (mark unreleased as *(proximamente)* / *(coming soon)*)

### Exercise rules
- **Continuous numbering** across the entire article - never restart numbering in subsections
- Use inline difficulty labels: `1. Question *(Basico)*` (not bold subsection headers)
- Difficulty levels: *(Basico)*, *(Intermedio)*, *(Avanzado)*

## Git Conventions

- Main branch: `master`
- Always include co-authorship: `Co-Authored-By: Maykell <kellsaro@gmail.com>`
- Permalink format: `/:year-:month-:day-:title/`
