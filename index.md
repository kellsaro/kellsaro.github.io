---
layout: resume
title: Maykell Sánchez Romero
subtitle: Senior Software Engineer
description: "Senior Software Engineer in Ruby on Rails and Java (Spring Boot), with 15+ years building production systems through rigorous AI-assisted engineering."
share-title: "Maykell Sánchez Romero | Senior Software Engineer"
css: ["/assets/css/resume.css"]
---
{%- assign resume = site.data.resume -%}
{%- assign contact = resume.contact -%}
{%- comment -%}
  Links use absolute URLs so they keep pointing at the published site in the
  printed / downloaded PDF, even when it is generated from a local build.
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
  <img class="resume-photo" src="{{ site.avatar | relative_url }}" alt="Portrait of {{ page.title }}" width="112" height="112">
</header>

<p class="resume-lead">{{ resume.summary | replace: "](/", absolute_link | markdownify | remove: "<p>" | remove: "</p>" | strip }}</p>

<p class="resume-lead-more resume-screen-only"><a href="{{ '/experience/' | absolute_url }}">See full experience</a></p>

{%- assign cover_projects = resume.projects | where_exp: "p", "p.cover" -%}
{%- if cover_projects.size > 0 %}
<div id="systemsCarousel" class="carousel slide resume-carousel resume-screen-only" data-ride="carousel" data-interval="5000" aria-label="Systems I have built">
  <ol class="carousel-indicators">
    {%- for p in cover_projects %}
    <li data-target="#systemsCarousel" data-slide-to="{{ forloop.index0 }}"{% if forloop.first %} class="active"{% endif %} aria-label="{{ p.name | escape }}"></li>
    {%- endfor %}
  </ol>
  <div class="carousel-inner">
    {%- for p in cover_projects %}
    <div class="carousel-item{% if forloop.first %} active{% endif %}">
      <a href="{{ p.page | absolute_url }}" class="resume-carousel-link">
        <img src="{{ p.cover | relative_url }}" alt="{{ p.name | escape }}" loading="lazy">
        <span class="resume-carousel-name">{{ p.name }}</span>
      </a>
    </div>
    {%- endfor %}
  </div>
  <a class="carousel-control-prev" href="#systemsCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#systemsCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{%- endif %}

{% comment %} Download CV section hidden on purpose. CV files are still generated and available at their URLs; re-enable by removing the comment wrapper.
<div class="resume-actions">
  <span class="resume-actions-label">Download CV:</span>
  <a class="resume-button resume-button-primary" href="{{ '/assets/docs/Maykell-Sanchez-Romero-CV.pdf' | absolute_url }}" download>PDF (EN)</a>
  <a class="resume-button" href="{{ '/assets/docs/Maykell-Sanchez-Romero-CV-ES.pdf' | absolute_url }}" download>PDF (ES)</a>
  <a class="resume-button" href="{{ '/assets/docs/Maykell-Sanchez-Romero-CV.md' | absolute_url }}" download>MD (EN)</a>
  <a class="resume-button" href="{{ '/assets/docs/Maykell-Sanchez-Romero-CV-ES.md' | absolute_url }}" download>MD (ES)</a>
</div>
{% endcomment %}

<section class="resume-section resume-screen-only" aria-labelledby="at-a-glance">
  <h2 id="at-a-glance">At a glance</h2>
  <dl class="resume-pairs">
  {%- for item in resume.glance %}
    <dt>{{ item.label }}</dt>
    <dd>{{ item.value | replace: "](/", absolute_link | markdownify | remove: "<p>" | remove: "</p>" | strip }}</dd>
  {%- endfor %}
  </dl>
</section>

<section class="resume-section resume-screen-only" aria-labelledby="current-focus">
  <h2 id="current-focus">Current focus</h2>
  <div class="resume-section-body">
  {%- for item in resume.focus %}
    <p><strong>{{ item.title }}.</strong> {{ item.text }}</p>
  {%- endfor %}
  </div>
</section>

<section class="resume-section" aria-labelledby="technologies">
  <h2 id="technologies">Technologies</h2>
  <dl class="resume-pairs resume-tech">
  {%- for group in resume.technologies %}
    <dt>{{ group.group }}</dt>
    <dd>{{ group.items | join: ", " }}</dd>
  {%- endfor %}
  </dl>
</section>

<section class="resume-section" aria-labelledby="notable-projects">
  <h2 id="notable-projects">Projects</h2>
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
  <h2 id="experience">Experience</h2>
  <ol class="resume-jobs">
  {%- assign earlier_jobs = resume.experience | where: "earlier", true -%}
  {%- for job in resume.experience %}
    {%- if job.earlier %}{% continue %}{% endif %}
    <li class="resume-job">
      <p class="resume-job-when"><span>{% include resume-date.html date=job.start %} - {% include resume-date.html date=job.end %}</span><span class="resume-job-length">{% include duration.html start=job.start end=job.end %}{% if job.location %}, {{ job.location }}{% endif %}</span></p>
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
        <h3>Earlier experience</h3>
        <p>{{ resume.earlier_summary }}</p>
      </div>
    </li>
  {%- endif %}
  </ol>
</section>

<section class="resume-section" aria-labelledby="education">
  <h2 id="education">Education</h2>
  <ul class="resume-plain">
  {%- for item in resume.education %}
    <li><strong>{{ item.degree }}</strong>, {{ item.school }}</li>
  {%- endfor %}
  </ul>
</section>

<section class="resume-section" aria-labelledby="certifications">
  <h2 id="certifications">Certifications</h2>
  <ul class="resume-plain">
  {%- for item in resume.certifications %}
    <li><strong>{{ item.name }}</strong>{% if item.detail %}, {{ item.detail }}{% endif %}</li>
  {%- endfor %}
  </ul>
</section>

<section class="resume-section" aria-labelledby="languages">
  <h2 id="languages">Languages</h2>
  <p class="resume-plain-line">{% for lang in resume.languages %}{{ lang.name }} ({{ lang.level | downcase }}){% unless forloop.last %}, {% endunless %}{% endfor %}</p>
</section>

<p class="resume-footnote resume-screen-only">Last updated {{ site.time | date: "%B %Y" }}. See the <a href="{{ '/experience/' | absolute_url }}">full experience</a> and the <a href="{{ '/technical-expertise/' | absolute_url }}">technical profile</a> for more detail.</p>
