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
- `app/` - Experimental SPAs (placeholder, not actively developed).
- `assets/css/`, `assets/js/` - Static assets including `bilingual.css` and `bilingual.js`.

## Bilingual System

All new articles use the bilingual infrastructure. The system is self-contained in `_includes/bilingual_header.html` (embedded CSS+JS) with standalone reference files in `assets/`.

Structure for bilingual posts:
```markdown
---
layout: post
title: "Titulo en Espanol | English Title"
description: "Descripcion | Description"
tags: [Topic, Bilingual, Tutorial]
---

{% include bilingual_header.html %}

<div class="lang-content" id="lang-es" markdown="1">
Spanish content...
</div>

<div class="lang-content hidden" id="lang-en" markdown="1">
English content...
</div>
```

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
