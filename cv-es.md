---
# published: false keeps this out of the live site: there is no browsable /cv-es/
# page. It exists only as the print source for the Spanish CV PDF, which bin/cv-pdf
# renders by building with --unpublished. The Spanish content is also offered as a
# downloadable Markdown file (assets/docs/cv-markdown-es.txt).
published: false
sitemap: false
layout: resume
permalink: /cv-es/
title: Maykell Sánchez Romero
subtitle: Ingeniero de Software Senior
description: "Ingeniero de Software Senior en Ruby on Rails y Java, con más de 15 años construyendo sistemas en producción mediante una rigurosa ingeniería asistida por IA."
share-title: "Maykell Sánchez Romero | Ingeniero de Software Senior"
css: ["/assets/css/resume.css"]
---
{%- assign resume = site.data.resume_es -%}
{%- assign contact = resume.contact -%}
{%- comment -%}
  Versión en español del CV. Comparte el diseño de la página principal (layout
  resume) pero se alimenta de _data/resume_es.yml y de los includes de fecha en
  español. Los enlaces usan URLs absolutas para que sigan apuntando al sitio
  publicado en el PDF descargado, incluso generado desde una compilación local.
{%- endcomment -%}
{%- capture absolute_link -%}]({{ '/' | absolute_url }}{%- endcapture -%}

<header class="resume-header">
  <div class="resume-header-text">
    <h1>{{ page.title }}</h1>
    <p class="resume-role">{{ page.subtitle }}</p>
    <ul class="resume-contact">
      <li><a href="mailto:{{ contact.email }}">{{ contact.email }}</a></li>
      <li><a href="https://www.{{ contact.linkedin }}">{{ contact.linkedin }}</a></li>
      <li><a href="https://{{ contact.github }}">{{ contact.github }}</a></li>
      <li><a href="https://{{ contact.x }}">{{ contact.x }}</a></li>
      <li class="resume-print-only"><a href="https://{{ contact.website }}">{{ contact.website }}</a></li>
    </ul>
    <p class="resume-location">{{ contact.location }}. {{ contact.availability }}.</p>
  </div>
  <img class="resume-photo" src="{{ site.avatar | relative_url }}" alt="Retrato de {{ page.title }}" width="112" height="112">
</header>

<p class="resume-lead">{{ resume.summary | replace: "](/", absolute_link | markdownify | remove: "<p>" | remove: "</p>" | strip }}</p>

<p class="resume-lead-more resume-screen-only"><a href="{{ '/experience/' | absolute_url }}">Ver experiencia completa</a></p>

<div class="resume-actions">
  <span class="resume-actions-label">Descargar CV:</span>
  <a class="resume-button resume-button-primary" href="{{ '/assets/docs/Maykell-Sanchez-Romero-CV-ES.pdf' | absolute_url }}" download>PDF (ES)</a>
  <a class="resume-button" href="{{ '/assets/docs/Maykell-Sanchez-Romero-CV.pdf' | absolute_url }}" download>PDF (EN)</a>
  <a class="resume-button" href="{{ '/assets/docs/Maykell-Sanchez-Romero-CV-ES.md' | absolute_url }}" download>MD (ES)</a>
</div>

<section class="resume-section resume-screen-only" aria-labelledby="at-a-glance">
  <h2 id="at-a-glance">De un vistazo</h2>
  <dl class="resume-pairs">
  {%- for item in resume.glance %}
    <dt>{{ item.label }}</dt>
    <dd>{{ item.value | replace: "](/", absolute_link | markdownify | remove: "<p>" | remove: "</p>" | strip }}</dd>
  {%- endfor %}
  </dl>
</section>

<section class="resume-section resume-screen-only" aria-labelledby="current-focus">
  <h2 id="current-focus">Foco actual</h2>
  <div class="resume-section-body">
  {%- for item in resume.focus %}
    <p><strong>{{ item.title }}.</strong> {{ item.text }}</p>
  {%- endfor %}
  </div>
</section>

<section class="resume-section" aria-labelledby="technologies">
  <h2 id="technologies">Tecnologías</h2>
  <dl class="resume-pairs resume-tech">
  {%- for group in resume.technologies %}
    <dt>{{ group.group }}</dt>
    <dd>{{ group.items | join: ", " }}</dd>
  {%- endfor %}
  </dl>
</section>

<section class="resume-section" aria-labelledby="notable-projects">
  <h2 id="notable-projects">Proyectos</h2>
  <ul class="resume-projects">
  {%- for project in resume.projects %}
    <li class="resume-project{% if project.web_only %} resume-web-only{% endif %}">
      <h3><a href="{{ project.page | absolute_url }}">{{ project.name }}</a></h3>
      <p>{{ project.summary }}</p>
      <p class="resume-project-meta">{{ project.stack | join: ", " }}{% if project.site %}<span class="resume-project-site">, <a href="{{ project.site }}">{{ project.site | remove: "https://" }}</a></span>{% endif %}</p>
    </li>
  {%- endfor %}
  </ul>
</section>

<section class="resume-section" aria-labelledby="experience">
  <h2 id="experience">Experiencia</h2>
  <ol class="resume-jobs">
  {%- assign earlier_jobs = resume.experience | where: "earlier", true -%}
  {%- for job in resume.experience %}
    {%- if job.earlier %}{% continue %}{% endif %}
    <li class="resume-job">
      <p class="resume-job-when"><span>{% include resume-date-es.html date=job.start %} - {% include resume-date-es.html date=job.end %}</span><span class="resume-job-length">{% include duration-es.html start=job.start end=job.end %}{% if job.location %}, {{ job.location }}{% endif %}</span></p>
      <div class="resume-job-what">
        <h3>{{ job.role }}, <span class="resume-company">{{ job.company }}</span></h3>
        {%- if job.highlights.size == 1 %}
        <p>{{ job.highlights.first | replace: "](/", absolute_link | markdownify | remove: "<p>" | remove: "</p>" | strip }}</p>
        {%- elsif job.highlights %}
        <ul class="resume-job-highlights">
        {%- for item in job.highlights %}
          <li>{{ item | replace: "](/", absolute_link | markdownify | remove: "<p>" | remove: "</p>" | strip }}</li>
        {%- endfor %}
        </ul>
        {%- endif %}
      </div>
    </li>
  {%- endfor %}
  {%- if earlier_jobs.size > 0 %}
    {%- assign first_earlier = earlier_jobs | last -%}
    {%- assign last_earlier = earlier_jobs | first %}
    <li class="resume-job">
      <p class="resume-job-when"><span>{{ first_earlier.start | slice: 0, 4 }} - {{ last_earlier.end | slice: 0, 4 }}</span></p>
      <div class="resume-job-what">
        <h3>Experiencia anterior</h3>
        <p>{{ resume.earlier_summary }}</p>
      </div>
    </li>
  {%- endif %}
  </ol>
</section>

<section class="resume-section" aria-labelledby="education">
  <h2 id="education">Formación</h2>
  <ul class="resume-plain">
  {%- for item in resume.education %}
    <li><strong>{{ item.degree }}</strong>, {{ item.school }}</li>
  {%- endfor %}
  </ul>
</section>

<section class="resume-section" aria-labelledby="certifications">
  <h2 id="certifications">Certificaciones</h2>
  <ul class="resume-plain">
  {%- for item in resume.certifications %}
    <li><strong>{{ item.name }}</strong>{% if item.detail %}, {{ item.detail }}{% endif %}</li>
  {%- endfor %}
  </ul>
</section>

<section class="resume-section" aria-labelledby="languages">
  <h2 id="languages">Idiomas</h2>
  <p class="resume-plain-line">{% for lang in resume.languages %}{{ lang.name }} ({{ lang.level | downcase }}){% unless forloop.last %}, {% endunless %}{% endfor %}</p>
</section>

{%- capture now_ym -%}{{ site.time | date: "%Y-%m" }}{%- endcapture -%}
<p class="resume-footnote resume-screen-only">Actualizado por última vez en {% include resume-date-es.html date=now_ym %}. Esta es la versión en español; también está disponible la <a href="{{ '/' | absolute_url }}">versión en inglés</a>.</p>
