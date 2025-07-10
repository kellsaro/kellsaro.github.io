# CLAUDE.md - Project Context for Claude Code

> **Context file for future Claude Code sessions**  
> This file provides comprehensive context about this Jekyll site, its structure, and ongoing projects.

## 🏗️ Site Overview

**Site Type**: Personal GitHub Pages site (Jekyll)  
**Owner**: Maykell Sánchez Romero (@kellsaro)  
**Theme**: Beautiful Jekyll  
**Domain**: kellsaro.github.io  
**Repository**: https://github.com/kellsaro/kellsaro.github.io

### Purpose
- Professional personal website and technical blog
- Software development content and tutorials
- Bilingual educational content (Spanish/English)
- Career showcase and contact point

## 👨‍💻 Author Profile

**Maykell Sánchez Romero**
- **Experience**: 20+ years in software development
- **Specialties**: Ruby on Rails (15+ years), Java (20+ years), System Architecture, Full Stack Development
- **Current Focus**: AI-aided development, MCP development, N8N integrations, Elixir/Phoenix skills improvement
- **Languages**: Spanish (native), English (professional), French/Italian (basic)
- **Location**: Remote work, global collaboration experience

### Professional Background
- Senior Software Developer with extensive backend experience
- Government systems architecture (SIMIEC - national immigration system)
- Healthcare systems (HL7 integrations)
- ERP development and customization
- Team leadership and mentoring experience

## 🚀 Current Major Project: Elixir Lessons Series

### Overview
Comprehensive bilingual tutorial series covering the Elixir ecosystem from basics to advanced topics.

### Series Structure (47 lessons total)
1. **Fundamentos del Lenguaje Elixir** (Lessons 1-8)
2. **Concurrencia y Procesos** (Lessons 9-13)  
3. **Persistencia con Ecto** (Lessons 14-20)
4. **Desarrollo Web con Phoenix** (Lessons 21-28)
5. **Testing y Buenas Prácticas** (Lessons 29-31)
6. **Ash Framework** (Lessons 32-37)
7. **Producción y DevOps** (Lessons 38-42)
8. **Avanzado / Mastery** (Lessons 43-47)

### Progress Status
- **Completed**: Lesson 01 (Introduction to Elixir and BEAM)
- **Next**: Lesson 02 (Basic Data Types)
- **Tracking**: `_ideas/todo_lecciones_elixir.md`

### Content Guidelines
- Always include both theoretical and practical exercises
- Minimum 5 theoretical + 10 practical exercises per lesson
- Continuous numbering across exercise types (no restarts)
- Use difficulty labels: *(Básico)*, *(Intermedio)*, *(Avanzado)*
- Include complete answers at the end
- Add relevant references and links
- Mark unreleased lessons as *(próximamente)* / *(coming soon)*

## 🌐 Bilingual Infrastructure

### Complete Implementation
The site has a fully functional bilingual article system implemented in January 2025.

### Key Components
- **`_includes/bilingual_header.html`**: Reusable component with embedded CSS/JS
- **`_templates/bilingual_article_template.md`**: Template for new bilingual articles
- **`_templates/README.md`**: Comprehensive documentation and best practices
- **`assets/css/bilingual.css`**: Standalone CSS (reference)
- **`assets/js/bilingual.js`**: Standalone JavaScript (reference)

### Features
- JavaScript language switching with smooth transitions
- Language preference persistence (localStorage)
- URL hash navigation support (#es, #en)
- Responsive design for mobile/desktop
- Markdown rendering with `markdown="1"` attribute
- Consistent styling across all bilingual content

### Usage Pattern
```markdown
---
layout: post
title: "Spanish Title | English Title"
description: "Spanish description | English description"
tags: [Topic, Bilingual, Tutorial]
---

{% include bilingual_header.html %}

<!-- Spanish Content -->
<div class="lang-content" id="lang-es" markdown="1">
Spanish content here...
</div>

<!-- English Content -->
<div class="lang-content hidden" id="lang-en" markdown="1">
English content here...
</div>
```

## 📂 Site Structure

### Key Directories
- **`_posts/`**: Blog articles (Jekyll posts)
- **`_ideas/`**: Planning and tracking files
  - `todo_lecciones_elixir.md`: Elixir series progress tracking
  - `plan_estudio_elixir.md`: Original study plan
- **`_templates/`**: Bilingual article templates and documentation
- **`_includes/`**: Jekyll includes (including bilingual_header.html)
- **`assets/`**: CSS, JS, and image files
- **`app/`**: SPA applications (separate from blog)

### Important Files
- **`_config.yml`**: Jekyll configuration with SEO optimization
- **`aboutme.md`**: Professional profile and experience
- **`CLAUDE.md`**: This context file
- **`README.md`**: Project documentation

## ⚙️ Technical Configuration

### Jekyll Setup
- **Theme**: Beautiful Jekyll
- **Markdown**: Kramdown with GFM input
- **Highlighter**: Rouge
- **Permalink**: `/:year-:month-:day-:title/`
- **Pagination**: 5 posts per page
- **Timezone**: America/Toronto

### SEO & Social
- **Title**: Maykell Sánchez Romero
- **Description**: Professional software developer blog
- **Keywords**: Ruby on Rails, Java, Full Stack, System Architecture, Technical Blog
- **Social**: GitHub (@kellsaro), LinkedIn (@kellsaro), Email (kellsaro@gmail.com)

### Features Enabled
- Post search functionality
- Social sharing buttons
- Feed with excerpts
- Tag display
- RSS feed

## 🔧 Development Workflow

### Git Workflow
- **Main Branch**: `master`
- **Remote**: GitHub Pages auto-deployment
- **Commit Style**: Descriptive messages with co-authorship
- **Co-Author Format**: `Co-Authored-By: Maykell <kellsaro@gmail.com>`

### Commit Pattern Example
```
Implement comprehensive bilingual infrastructure and fix exercise numbering

- Add bilingual article infrastructure with JavaScript language switching
- Create reusable bilingual_header.html include with embedded CSS/JS
- Fix markdown rendering in bilingual content with markdown="1" attribute
- Implement continuous exercise numbering (1-23) without subsection restarts

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Maykell <kellsaro@gmail.com>
```

## 📝 Content Standards

### Article Structure
1. Front matter with proper tags and description
2. Introduction and objectives
3. Theoretical concepts with examples
4. Practical examples (progressive difficulty)
5. Best practices
6. Exercises (theoretical + practical)
7. Complete answers
8. References and links
9. Next lesson preview (if applicable)

### Exercise Numbering Rules
- **Continuous numbering** throughout entire article
- No restarting in subsections
- Use inline difficulty labels instead of bold headers
- Example: `1. Question *(Básico)*` not `**Básicos:** 1. Question`

### Bilingual Content Rules
- Complete translations for both languages
- Consistent terminology across languages
- Use `markdown="1"` attribute in content divs
- Include bilingual meta tags
- Test language switching functionality

## 🎯 Future Development

### Immediate Priorities
1. **Elixir Lesson 02**: Basic Data Types
2. **Continue series progression** following the 47-lesson plan
3. **Template refinements** based on usage feedback

### Infrastructure Improvements
- Potential automation for bilingual content creation
- Enhanced SEO for bilingual content
- Performance optimizations
- Additional language support consideration

## 📚 Resources & References

### Jekyll & Theme
- [Beautiful Jekyll Documentation](https://beautifuljekyll.com)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Kramdown Syntax](https://kramdown.gettalong.org/syntax.html)

### Elixir Learning Resources
- [Official Elixir Documentation](https://elixir-lang.org/docs.html)
- [Elixir School](https://elixirschool.com/es/)
- [Phoenix Framework](https://phoenixframework.org/)
- [Hex Package Manager](https://hex.pm/)

### Development Tools
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [asdf Version Manager](https://asdf-vm.com/)

## 🚨 Important Notes

### For Future Claude Code Sessions
1. **Always read this file first** to understand project context
2. **Check `_ideas/todo_lecciones_elixir.md`** for current lesson progress
3. **Use bilingual template** for new Elixir lessons
4. **Follow exercise numbering conventions** strictly
5. **Test bilingual functionality** before finalizing articles
6. **Maintain co-authorship** in commits: `Co-Authored-By: Maykell <kellsaro@gmail.com>`

### Critical Infrastructure Files
- **Don't modify** `_includes/bilingual_header.html` without understanding full impact
- **Use templates** in `_templates/` for new content creation
- **Follow** the established patterns in completed Lesson 01

### Content Quality Standards
- Professional tone appropriate for technical audience
- Practical examples with real-world relevance
- Complete exercise solutions
- Proper attribution and references
- SEO-optimized content with relevant keywords

---

**Last Updated**: January 2025  
**Current Project Phase**: Elixir Lessons Series (Lesson 01 completed, Lesson 02 next)  
**Infrastructure Status**: Fully functional bilingual system deployed