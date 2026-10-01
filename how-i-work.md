---
layout: page
title: How I build software with AI
subtitle: Fast development with accountability. I set the direction, AI agents write the code, and nothing ships without review and quality gates.
permalink: /how-i-work/
css: ["/assets/css/projects.css"]
description: "How Maykell Sánchez Romero builds software with AI coding agents: architecture and specs first, reviewed plans, step-by-step checkpoints, cross-review by two agents, full test suites and security checks, then staging and QA."
---

I use AI coding agents (mainly **Claude Code**, also **Codex** and **Windsurf**) to build software much faster, without giving up control of the result. The agents write most of the code; **I own the decisions and the quality**. My 15+ years of engineering experience go into what the agents cannot decide on their own: the architecture, the design, what "done" means, and whether a change is good enough to ship.

<ul class="project-meta">
  <li>Architecture first</li>
  <li>Specs with examples and counterexamples</li>
  <li>Reviewed, stored plans</li>
  <li>Checkpoints with traceability</li>
  <li>Code review plus cross-review by two agents</li>
  <li>Full test suite on every change</li>
  <li>Linters, formatters and security checks</li>
  <li>Staging and QA before production</li>
  <li>Rules and skills that improve the process</li>
</ul>

## The workflow

<ol class="project-flow project-flow-wide">
  <li><strong>Set the foundations</strong>Architecture, design principles, tools, workflows and the best practices of the stack.</li>
  <li><strong>Specify the feature</strong>The goal, the expected result, examples and counterexamples, and what must be documented.</li>
  <li><strong>Review the plan</strong>The agent proposes a plan; I review it, clarify and correct it, and the approved plan is stored.</li>
  <li><strong>Implement with checkpoints</strong>The agent works point by point with traceability, and stops at each one for my review.</li>
  <li><strong>Verify</strong>My code review, a cross-review by a second agent, new tests, the full test suite, linters, formatters and a security agent.</li>
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
<span class="step-label">Step 4</span>

## Implement with checkpoints

The agent implements the approved plan **point by point**, with **traceability** between each point of the plan and the changes that implement it. It **stops at every checkpoint** so I can review that step before it continues, which keeps the work aligned with the plan and catches deviations while they are still small.
</section>

<section class="project-step" markdown="1">
<span class="step-label">Step 5</span>

## Verify everything

When the implementation is done, the change has to prove itself:

- **I read the code.** I review the changes myself, with particular depth in the technologies I know best.
- **A second agent cross-reviews it.** I ask a different AI agent to review the work, so two independent reviewers look at every change.
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

## Improving the process

The workflow gets better with every project:

- **When a problem repeats, it becomes a rule.** If an agent makes the same mistake or a convention keeps coming up, I turn it into a written rule of the project, so future sessions follow it from the start.
- **When a task repeats, it becomes a skill.** Recurring tasks are packaged as reusable agent skills, so they are done the same, reviewed way every time.

## Why it works

- **Speed:** the agents write and refactor code in a fraction of the time, so more of my time goes to design and review.
- **Accountability:** every change has an approved plan, checkpoints, tests, automated checks, a cross-review between agents and my own review. The agent is fast, but I am responsible for what ships.
- **Reach beyond my main stack:** this workflow let me build production systems in **Elixir and Phoenix LiveView**, the stack I am moving toward, while my experience guarded the architecture and the quality.

## Where I have applied it

- **[Agonai]({{ '/projects/agonai/' | relative_url }})**: a competitive intelligence and AI Visibility platform in Elixir, Phoenix LiveView and Ash, with tests and coverage, static analysis and security scanning in its checks.
- **[TechRepair]({{ '/projects/techrepair/' | relative_url }})**: the web system and GraphQL API of an operations platform for wind turbine maintenance, with a staging environment before production.
