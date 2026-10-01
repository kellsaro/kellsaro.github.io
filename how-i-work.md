---
layout: page
title: How I build software with AI
subtitle: Fast development with accountability. I set the direction, AI agents write the code, and nothing ships without review and quality gates.
permalink: /how-i-work/
css: ["/assets/css/projects.css"]
description: "How Maykell Sánchez Romero builds software with AI coding agents: architecture and specs first, reviewed plans, full test suites, linters and security checks, then staging and QA."
---

I use AI coding agents (mainly **Claude Code**, also **Codex** and **Windsurf**) to build software much faster, without giving up control of the result. The agents write most of the code; **I own the decisions and the quality**. My 15+ years of engineering experience go into what the agents cannot decide on their own: the architecture, the design, what "done" means, and whether a change is good enough to ship.

<ul class="project-meta">
  <li>Architecture first</li>
  <li>Specs with examples and counterexamples</li>
  <li>Reviewed, stored plans</li>
  <li>Full test suite on every change</li>
  <li>Linters, formatters and security checks</li>
  <li>Staging and QA before production</li>
</ul>

## The workflow

<ol class="project-flow project-flow-wide">
  <li><strong>Set the foundations</strong>Architecture, design principles, tools, workflows and the best practices of the stack.</li>
  <li><strong>Specify the feature</strong>The goal, the expected result, examples and counterexamples, and what must be documented.</li>
  <li><strong>Review the plan</strong>The agent proposes a plan; I review it, clarify and correct it, and the approved plan is stored.</li>
  <li><strong>Implement</strong>The agent writes the code, following the approved plan and the project's conventions.</li>
  <li><strong>Verify</strong>New tests for the feature, the full test suite, linters, formatters and a security agent.</li>
  <li><strong>Staging and QA</strong>Only a change that passes every check goes to staging, where QA reviews it.</li>
</ol>

<section class="project-step" markdown="1">
<span class="step-label">Step 1</span>

## Set the foundations

Before any feature, I define the ground rules the agents work within: the **architecture** and **design principles**, the **tools** and libraries, the **development workflows**, and the **best practices** of the technology in use. These live in the project itself, so every agent session starts from the same decisions instead of reinventing them.
</section>

<section class="project-step" markdown="1">
<span class="step-label">Step 2</span>

## Specify the feature

For each feature I describe **what is wanted** and **the expected final result**, and I add **examples and counterexamples**: what the feature must do, and just as important, what it must not do. Counterexamples are where most misunderstandings get caught early. I also require the code to be **documented in its relevant parts**, so the system stays understandable for people and for future agent sessions.
</section>

<section class="project-step" markdown="1">
<span class="step-label">Step 3</span>

## Review the plan before any code

The agent does not start coding right away: first it writes an **implementation plan**. I review it, ask about anything unclear and correct anything I disagree with. Only then is the plan approved, and **the approved plan is stored** with the project, which leaves a written record of what was decided and why.
</section>

<section class="project-step" markdown="1">
<span class="step-label">Steps 4 and 5</span>

## Implement, then verify everything

The agent implements the approved plan. When it finishes, the change has to prove itself:

- A **set of tests for the new development**.
- A run of the **entire test suite** of the system, so nothing that worked before breaks.
- **Linters** and **code formatters**, to keep the code consistent and catch common problems.
- A **security agent** that reviews the change for vulnerabilities.

If anything fails, the change goes back for fixes. Nothing moves forward with failing checks.
</section>

<section class="project-step" markdown="1">
<span class="step-label">Step 6</span>

## Staging and QA

Once every check passes, the change is deployed to a **staging server**, where **QA** reviews it before it reaches production. AI speeds up writing the code; it does not skip the steps that keep a system reliable.
</section>

## Why it works

- **Speed:** the agents write and refactor code in a fraction of the time, so more of my time goes to design and review.
- **Accountability:** every change has an approved plan, tests, automated checks and a human review. The agent is fast, but I am responsible for what ships.
- **Reach beyond my main stack:** this workflow let me build production systems in **Elixir and Phoenix LiveView**, the stack I am moving toward, while my experience guarded the architecture and the quality.

## Where I have applied it

- **[Agonai]({{ '/projects/agonai/' | relative_url }})**: a competitive intelligence and AI Visibility platform in Elixir, Phoenix LiveView and Ash, with tests and coverage, static analysis and security scanning in its checks.
- **[TechRepair]({{ '/projects/techrepair/' | relative_url }})**: the web system and GraphQL API of an operations platform for wind turbine maintenance, with a staging environment before production.
