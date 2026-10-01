---
layout: page
title: "TechRepair: operations for wind turbine repair"
subtitle: The operations backbone for wind turbine blade and tower maintenance teams.
permalink: /projects/techrepair/
css: ["/assets/css/projects.css"]
description: "TechRepair is a cloud operations platform for wind turbine blade and tower maintenance teams, from dispatch and field work to approvals and reports."
share-img: "/assets/img/projects/techrepair/00-landing.png"
---

**[TechRepair](https://techrepair.site)** is a cloud platform built for companies that repair and maintain **wind turbine blades**. It gives them one workspace for the whole job: dispatching work to the right blade, running inspections and repairs in the field, approving the work, and delivering reports to the client. Everything revolves around the **work order**, the main operational resource, where projects, teams, field activity and reports converge.

It is built for this industry rather than adapted from a generic tool, or in its own words: *"Wind-native, not bent to fit."*

For **TechRepair LLC**, I am the developer of the **web system** and of the **GraphQL API** that the mobile field app uses. It is an ongoing side project that I keep working on.

<ul class="project-meta">
  <li>Wind turbine maintenance</li>
  <li>Work order lifecycle</li>
  <li>Multi-tenant SaaS</li>
  <li>Field app for technicians</li>
  <li>Approvals with audit trail</li>
  <li>GraphQL API</li>
  <li>Auto-generated client reports</li>
</ul>

<figure class="project-shot">
  <a href="{{ '/assets/img/projects/techrepair/00-landing.png' | relative_url }}"><img src="{{ '/assets/img/projects/techrepair/00-landing.webp' | relative_url }}" alt="TechRepair landing page with the headline 'Deliver wind turbine repairs with real-time control. Operational excellence your clients sign off.' next to a wind turbine illustration" loading="lazy"></a>
  <figcaption>The public site at techrepair.site, built for wind-turbine repair operations: real-time control of the field work, and results the client signs off.</figcaption>
</figure>

## The problem

Wind turbine maintenance teams usually run on generic tools, personal phones and messaging apps, and that breaks down in three predictable ways:

- **Dispatch errors.** Generic tools do not understand how the assets are organized, so technicians end up working on the wrong blade or the wrong defect.
- **Lost approvals.** Photos and sign-offs are scattered across phones and chat groups, which delays audits and client reports.
- **Visibility gaps.** Dashboards show the project plan, not what is really happening in the field, so it is hard to tell which work orders are active and which are stalled.

## Built around the real assets

TechRepair models the equipment exactly as the teams work with it. Each customer's assets are mapped once, and that hierarchy becomes the single source of truth for everything else:

<div class="project-tree">
  <span>Customer</span><span class="arrow">→</span><span>Tower</span><span class="arrow">→</span><span>Blade A / B / C</span>
</div>

Work orders use **cascading selection** over this hierarchy (choose the customer, then the tower, then the blade), so a job always points to one specific blade and a technician cannot end up on the wrong one.

## The work order: where everything converges

The **work order** is the resource that drives all the activity in TechRepair. It belongs to a **project**, is carried out by a **team**, contains the **tasks** the crew executes on a specific tower and blade, collects the **daily checks and evidence** from the field, and produces the **reports** that go to the client. Following a work order through its lifecycle is following the job itself.

Each work order moves through five states:

<div class="project-tree">
  <span>Draft</span><span class="arrow">→</span><span>Approved</span><span class="arrow">→</span><span>Assigned</span><span class="arrow">→</span><span>In progress</span><span class="arrow">→</span><span>Complete</span>
</div>

- **Draft:** the work order is being prepared, with minimal validation.
- **Approved:** it has been reviewed, and has its number, type and project.
- **Assigned:** a team has been assigned and the work is ready to start.
- **In progress:** the crew has started. This happens automatically as soon as any task reports progress.
- **Complete:** all the work is done. This also happens automatically when every task reaches 100%.

Every step records **when** it happened and **who** did it, which gives managers an accurate, real-time picture of the field and gives auditors a complete history.

### A second lifecycle for the paperwork

Finishing the work is not the same as finishing the paperwork: a work order can be 100% done while reports are still missing or waiting for signatures. TechRepair tracks this separately, on its own clock:

<div class="project-tree">
  <span>Reports pending</span><span class="arrow">⇄</span><span>Awaiting approval</span><span class="arrow">→</span><span>Reports complete (sealed)</span>
</div>

When every required report is on file and signed, and the work itself is complete, the work order is **sealed**: it becomes a finished, permanent record that cannot be reopened. The two lifecycles only converge at the end, which is exactly how the job works in real life.

## How it works

The platform follows the natural cycle of a maintenance project:

<ol class="project-flow">
  <li><strong>Onboard</strong>Map the customer's towers and blades once, as the source of truth.</li>
  <li><strong>Dispatch</strong>Create projects and assign work orders down to a specific blade.</li>
  <li><strong>Execute</strong>Field crews run task templates, file daily checks and capture evidence.</li>
  <li><strong>Approve</strong>Supervisors sign off, and client reports are generated automatically.</li>
</ol>

## Main features

- **Asset-aware work orders** with cascading selection from customer to blade.
- **Task templates** for the industry's standard procedures: job safety analysis (JSA), daily rigging inspections, leading-edge inspection and structural repair.
- **Daily check reports** that show the real status of each project.
- **Multi-level approvals** based on each person's role, with a full audit trail.
- **Tech chat** with photo and voice evidence attached to the work.
- **Mobile field app** for technicians, and an **operations dashboard** for project managers.
- **Client reports generated automatically** from the data captured in the field.
- **Integrations** through file exports, scheduled extracts and webhooks, with ERP integration scoped per customer.

## Security and control

- **Per-tenant data isolation:** each customer company's data is kept separate, never in a shared pool.
- **Immutable audit snapshots** with version history, so approved work cannot be silently changed.
- **Fine-grained, role-based permissions:** 49 permissions organized in 11 groups.
- **Authentication** by email and password or by token.

## Under the hood

TechRepair shares its foundations with [Agonai]({{ site.baseurl }}/projects/agonai/), and for the same reasons.

<ul class="project-meta">
  <li>Elixir</li>
  <li>Phoenix LiveView</li>
  <li>Ash Framework</li>
  <li>PostgreSQL</li>
  <li>GraphQL (Absinthe)</li>
  <li>Typst (Imprintor)</li>
  <li>Tailwind CSS</li>
  <li>S3-compatible storage</li>
</ul>

- **Elixir and Phoenix LiveView.** Many people work on the same project at once, from the office and the field. LiveView keeps every screen up to date as work orders, checks and approvals change, without a separate JavaScript frontend.
- **Ash Framework.** The domain (customers, towers, blades, projects, work orders, reports) is described as declarative resources. Ash also provides the **multi-tenancy** that keeps each customer's data isolated, the **authorization policies** behind the role-based permissions, and the **state machines** behind the two work order lifecycles (the work and its paperwork), so a work order can only move through valid steps and a sealed record can never be reopened.
- **GraphQL API with Absinthe.** The mobile field app works through GraphQL endpoints that cover signing in, the technician's active projects and their work orders, work order details, tasks and attachments. The API uses token (JWT) authentication and rate limiting.
- **PostgreSQL** stores all the operational data and the audit history.
- **Typst, through the Imprintor library,** turns field data into polished PDF reports, such as job safety analyses and daily rigging inspection reports, including the approver's signature.
- **S3-compatible object storage** holds the photos and files captured as evidence.

## Learn more

Visit **[techrepair.site](https://techrepair.site)** to see the platform and book a call.
