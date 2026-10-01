# Maykell Sánchez Romero · Personal site and resume

[![Website](https://img.shields.io/badge/Website-kellsaro.github.io-2f7d5d)](https://kellsaro.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-kellsaro-blue)](https://www.linkedin.com/in/kellsaro)

Source of **[kellsaro.github.io](https://kellsaro.github.io)**: the resume, project pages and technical writing of Maykell Sánchez Romero, Senior Software Engineer specialized in **Ruby on Rails** and **React**, backed by solid **Java** experience, working with a rigorous AI-assisted engineering workflow and moving toward **Elixir/Phoenix LiveView**.

- **Resume:** [kellsaro.github.io](https://kellsaro.github.io), also as a [one-page PDF](https://kellsaro.github.io/assets/docs/Maykell-Sanchez-Romero-CV.pdf) and as [Markdown for LLMs](https://kellsaro.github.io/assets/docs/Maykell-Sanchez-Romero-CV.md)
- **Projects:** Agonai, TechRepair, Fundación Telefónica dashboards, SIMIEC, Text Tools for Workdocs and more, each with its own page
- **How I build software with AI:** [kellsaro.github.io/how-i-work](https://kellsaro.github.io/how-i-work/)
- **Contact:** [kellsaro@gmail.com](mailto:kellsaro@gmail.com)

## How the site is built

A [Jekyll](https://jekyllrb.com/) site on the [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) theme, deployed by GitHub Pages on every push to `master`.

| Path | What it holds |
| --- | --- |
| `_data/resume.yml` | Resume content: contact, technologies, projects, experience, education, languages |
| `index.md` | Home page, rendered as a resume from `_data/resume.yml` |
| `assets/css/resume.css` | Resume design for screen and the print stylesheet (one-page CV) |
| `experience.md` | Detailed experience: role, stack and duration of each position |
| `projects/` | One page per project |
| `how-i-work.md` | The AI-assisted engineering workflow |
| `assets/docs/cv-markdown.txt` | Template of the Markdown CV for LLMs, published as `Maykell-Sanchez-Romero-CV.md` |
| `llms.txt` | Plain-text summary of the profile for AI assistants, generated from the resume data |
| `_includes/structured-data.html` | Schema.org JSON-LD for the profile, projects and posts |
| `_posts/` | Blog posts, including the bilingual Elixir lessons series |
| `bin/` | Scripts that regenerate the CV PDF and the link-preview image |

## Local development

Requires Ruby (see `.ruby-version`) and Bundler.

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

## Regenerating assets

After changing the resume content or its design:

```bash
bin/cv-pdf        # assets/docs/Maykell-Sanchez-Romero-CV.pdf, warns if it no longer fits on one page
bin/social-card   # assets/img/social-card.png, the 1200x630 link-preview image (source: tools/social-card.html)
```

Both use headless Chrome; set `CHROME=/path/to/chrome` if it is not found.

## License

MIT, see [LICENSE](LICENSE). Theme by [Dean Attali](https://github.com/daattali/beautiful-jekyll).
