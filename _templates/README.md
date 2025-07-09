# Bilingual Article Infrastructure

This directory contains templates and infrastructure for creating bilingual articles in the Jekyll site.

## Files Created

### 1. CSS Styles (`/assets/css/bilingual.css`)
- Responsive language selector buttons
- Smooth transitions between languages
- Dark mode support
- Mobile-friendly design

### 2. JavaScript Functionality (`/assets/js/bilingual.js`)
- Language switching functionality
- URL hash support for direct language linking
- LocalStorage for user preference persistence
- Browser back/forward navigation support

### 3. Jekyll Include (`/_includes/bilingual_header.html`)
- Reusable header component for bilingual articles
- Automatically includes CSS and JavaScript
- Consistent language selector across all articles

### 4. Article Template (`/_templates/bilingual_article_template.md`)
- Complete template for creating new bilingual articles
- Includes proper front matter structure
- Spanish and English content sections
- Exercise and answer sections
- References section

## Usage

### Creating a New Bilingual Article

1. Copy the template:
   ```bash
   cp _templates/bilingual_article_template.md _posts/YYYY-MM-DD-your-article-title.md
   ```

2. Update the front matter:
   - Change title to "Spanish Title | English Title"
   - Update date, description, and tags
   - Ensure description follows "Spanish description | English description"

3. Fill in content in both languages:
   - Spanish content goes in `<div class="lang-content" id="lang-es">`
   - English content goes in `<div class="lang-content hidden" id="lang-en">`

4. Include the bilingual header with `{% include bilingual_header.html %}`

### Features

- **Language Persistence**: User's language preference is saved in localStorage
- **URL Hash Support**: Direct links to specific languages (#es or #en)
- **Responsive Design**: Works on mobile and desktop
- **Dark Mode**: Automatic dark mode support
- **SEO Friendly**: Proper meta tags for both languages

### Example Structure

```markdown
---
layout: post
title: "Título Español | English Title"
date: 2025-01-09
description: "Descripción en español | English description"
tags: [Tag1, Tag2, Bilingual, Tutorial]
---

{% include bilingual_header.html %}

<!-- Spanish Content -->
<div class="lang-content" id="lang-es" markdown="1">
# Título en Español
Content in Spanish...
</div>

<!-- English Content -->
<div class="lang-content hidden" id="lang-en" markdown="1">
# English Title
Content in English...
</div>
```

**Important**: Always include `markdown="1"` in the div attributes to ensure Jekyll processes the markdown content properly within HTML divs.

## Integration

The infrastructure is designed to:
- Work seamlessly with existing Jekyll setup
- Maintain consistency across all bilingual articles
- Provide a smooth user experience
- Support future expansion to more languages

## Best Practices

1. Always provide complete translations for both languages
2. Use descriptive titles that work in both languages
3. Include proper exercise sections with answers
4. Add relevant references for both language audiences
5. Test language switching functionality before publishing
6. **Use continuous numbering for exercises** - don't restart numbering in each subsection (e.g., Theoretical Questions: 1-5, Practical Exercises: 6-20). Use italicized difficulty labels *(Basic)*, *(Intermediate)*, *(Advanced)* instead of bold subsection headers to avoid breaking the numbering.
7. **Mark unreleased lessons appropriately** - Use *(próximamente)* or *(coming soon)* for next lesson references to avoid dead links.