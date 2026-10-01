---
layout: page
title: Maykell Sánchez Romero
subtitle: Senior Software Engineer · Ruby on Rails & React · 15+ Years of Experience
description: "Senior software engineer specialized in Ruby on Rails and React, backed by solid Java experience, with 15+ years building production systems and a rigorous AI-assisted engineering workflow."
share-title: "Maykell Sánchez Romero | Senior Software Engineer (Ruby on Rails, React)"
css: ["/assets/css/resume.css"]
---
{%- assign resume = site.data.resume -%}
{%- assign contact = resume.contact -%}
{%- comment -%}
  Links use absolute URLs so they keep pointing at the published site in the
  printed / downloaded PDF, even when it is generated from a local build.
{%- endcomment -%}
{%- capture absolute_link -%}]({{ '/' | absolute_url }}{%- endcapture -%}

<div class="resume-contact">
  <span><i class="fas fa-map-marker-alt" aria-hidden="true"></i> {{ contact.location }}</span>
  <a href="mailto:{{ contact.email }}"><i class="fas fa-envelope" aria-hidden="true"></i> {{ contact.email }}</a>
  <a href="https://www.{{ contact.linkedin }}"><i class="fab fa-linkedin" aria-hidden="true"></i> {{ contact.linkedin }}</a>
  <a href="https://{{ contact.github }}"><i class="fab fa-github" aria-hidden="true"></i> {{ contact.github }}</a>
  <a href="https://{{ contact.website }}" class="resume-print-only"><i class="fas fa-globe" aria-hidden="true"></i> {{ contact.website }}</a>
</div>

<p class="resume-lead">Senior software engineer and computer scientist with 15+ years building production systems, from a national immigration platform serving millions of users to AI-powered SaaS products. I specialize in <strong>Ruby on Rails</strong> and <strong>React</strong>, backed by solid <strong>Java</strong> experience, and build products end to end with a rigorous <a href="{{ '/how-i-work/' | absolute_url }}">AI-assisted engineering workflow</a>, which I am also using to move my stack toward <strong>Elixir/Phoenix LiveView</strong>.</p>

<div class="resume-actions">
  <a class="resume-print-button" href="{{ '/assets/docs/Maykell-Sanchez-Romero-CV.pdf' | absolute_url }}" download><i class="fas fa-file-download" aria-hidden="true"></i> Download CV (PDF)</a>
  <button type="button" class="resume-secondary-button" onclick="window.print()"><i class="fas fa-print" aria-hidden="true"></i> Print</button>
  <a href="{{ '/experience/' | absolute_url }}">Full experience</a>
</div>

<h2 id="current-focus">Current Focus</h2>

<ul class="resume-focus">
  <li><strong>AI-assisted software engineering.</strong> Agentic development with LLMs (Claude Code, Codex, etc.) for fast system development with accountability: specs, reviewed plans with checkpoints, cross-review by two agents, full test suites and security checks. <a href="{{ '/how-i-work/' | absolute_url }}" class="resume-screen-only">How I work</a></li>
  <li><strong>Distributed systems.</strong> Distributed systems architecture for fast, scalable, resilient, maintainable solutions.</li>
  <li><strong>Elixir and Phoenix LiveView.</strong> Growing toward Elixir as my next main stack, with two products already built in it.</li>
</ul>

<h2 id="technologies">Technologies</h2>

<dl class="resume-tech">
{%- for group in resume.technologies %}
  <dt>{{ group.group }}</dt>
  <dd>{{ group.items | join: ", " }}</dd>
{%- endfor %}
</dl>

<h2 id="notable-projects">Notable Projects</h2>

<div class="resume-projects">
{%- for project in resume.projects %}
  <article class="resume-project{% if project.web_only %} resume-web-only{% endif %}">
    <h3><a href="{{ project.page | absolute_url }}">{{ project.name }}</a></h3>
    <p>{{ project.summary }}</p>
    <ul class="resume-chips" aria-label="Stack">
      {%- for tech in project.stack %}<li>{{ tech }}</li>{% endfor -%}
    </ul>
    <p class="resume-project-links">
      <a href="{{ project.page | absolute_url }}">Details <span aria-hidden="true">→</span></a>
      {%- if project.site %}
      <a href="{{ project.site }}">{{ project.site | remove: "https://" }} <span aria-hidden="true">↗</span></a>
      {%- endif %}
    </p>
  </article>
{%- endfor %}
</div>

<h2 id="experience">Experience</h2>

<ol class="resume-jobs">
{%- assign earlier_jobs = resume.experience | where: "earlier", true -%}
{%- for job in resume.experience %}
  {%- if job.earlier %}{% continue %}{% endif %}
  <li class="resume-job">
    <div class="resume-job-head">
      <h3>{{ job.role }} <span class="resume-company">· {{ job.company }}</span></h3>
      <p class="resume-job-meta">{% include resume-date.html date=job.start %} - {% include resume-date.html date=job.end %} · {% include duration.html start=job.start end=job.end %}{% if job.location %} · {{ job.location }}{% endif %}</p>
    </div>
    {%- if job.highlight %}
    <p class="resume-job-highlight">{{ job.highlight | replace: "](/", absolute_link | markdownify | remove: "<p>" | remove: "</p>" | strip }}</p>
    {%- endif %}
  </li>
{%- endfor %}
  {%- if earlier_jobs.size > 0 %}
  {%- assign first_earlier = earlier_jobs | last -%}
  {%- assign last_earlier = earlier_jobs | first %}
  <li class="resume-job">
    <div class="resume-job-head">
      <h3>Earlier experience</h3>
      <p class="resume-job-meta">{{ first_earlier.start | slice: 0, 4 }} - {{ last_earlier.end | slice: 0, 4 }}</p>
    </div>
    <p class="resume-job-highlight">{{ resume.earlier_summary }}</p>
  </li>
  {%- endif %}
</ol>

<p class="resume-more">See the <a href="{{ '/experience/' | absolute_url }}">complete experience</a> for the details and stack of each role.</p>

<div class="resume-columns">
  <section>
    <h2 id="education">Education & Certifications</h2>
    <ul class="resume-plain">
    {%- for item in resume.education %}
      <li><strong>{{ item.degree }}</strong><br><span>{{ item.school }}</span></li>
    {%- endfor %}
    {%- for item in resume.certifications %}
      <li><strong>{{ item.name }}</strong>{% if item.detail %}<br><span>{{ item.detail }}</span>{% endif %}</li>
    {%- endfor %}
    </ul>
  </section>
  <section>
    <h2 id="languages">Languages</h2>
    <ul class="resume-plain">
    {%- for lang in resume.languages %}
      <li><strong>{{ lang.name }}</strong> <span>· {{ lang.level }}</span></li>
    {%- endfor %}
    </ul>
  </section>
</div>

<p class="resume-more resume-screen-only">Want more? See my <a href="{{ '/technical-expertise/' | absolute_url }}">technical profile</a>, or <a href="mailto:{{ contact.email }}">email me</a>.</p>
