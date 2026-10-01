---
layout: page
title: "Fundación Telefónica Ecuador: KPIs for educational programs"
subtitle: Measuring how effective educational programs are, with Apache Hop pipelines and Looker Studio dashboards.
permalink: /projects/fundacion-telefonica/
css: ["/assets/css/projects.css"]
description: "KPIs on the effectiveness of Fundación Telefónica Ecuador's educational programs, with Apache Hop ETL pipelines and Looker Studio dashboards."
share-img: "/assets/img/projects/fundacion-telefonica/p-01.jpg"
---

{% assign img = "/assets/img/projects/fundacion-telefonica/" %}

This project was about **KPIs on the effectiveness of educational programs**. **Fundación Telefónica Ecuador** runs programs in digital education, employability, culture and volunteering, and every year each program commits to concrete goals: how many children take part in activities, how many teachers complete training, how many people attend events, and so on. Those numbers come from many different sources and teams.

As a data analyst for the foundation, I built the **ETL processes in Apache Hop** that collect and consolidate that data, and the **Looker Studio** dashboards that visualize it as KPIs. The core idea behind every screen is the same: put the **plan** next to what **really** happened, month by month, so anyone can see at a glance which goals are on track and which need attention.

<ul class="project-meta">
  <li>KPIs for educational programs</li>
  <li>Apache Hop (ETL)</li>
  <li>Looker Studio (visualization)</li>
  <li>Plan vs. real tracking</li>
  <li>18 report screens</li>
  <li>5 program areas</li>
</ul>

<section class="project-step" markdown="1">
<span class="step-label">Start here</span>

## The indicators overview

The first screen is a single scorecard for the whole foundation. Each program area gets its own table with every indicator, its **annual progress** as a percentage of the goal, and a **monthly status** color: green when on track, yellow when at risk, red when behind. Each table also shows the date its data was last updated, so readers know how fresh the numbers are.

{% include project-figure.html dir=img file="p-01.jpg" alt="Indicators overview with five tables, one per program area, showing annual progress percentages and a green, yellow or red monthly status for every indicator" caption="The indicators overview: every goal of every program area on one screen." %}

Every indicator in this overview has its own detail screen, described below. They share a consistent layout: a monthly **plan vs. real** bar chart (blue for plan, orange for real), a gauge with the overall progress, and breakdowns by status, gender or school where they apply.
</section>

<section class="project-step" markdown="1">
<span class="step-label">Program area 1</span>

## ProFuturo: digital education

ProFuturo is the digital education program for children and teachers in schools. Its screens follow children and teachers taking part in activities, teachers whose training reaches their classroom, and the children who benefit indirectly. The charts break results down by gender and by schools planned vs. reached, and some screens can be filtered by training call (*convocatoria*) and course.

For example, the program planned 23,400 children taking part in activities and reached 31,453, a progress of **134%**.

<div class="project-gallery">
{% include project-figure.html dir=img file="p-02.jpg" alt="Children doing activities: monthly plan vs. real, 134% progress, gender split and schools reached" caption="Children doing activities" %}
{% include project-figure.html dir=img file="p-03.jpg" alt="Teachers doing activities: monthly plan vs. real, 108% progress, gender split and schools reached" caption="Teachers doing activities" %}
{% include project-figure.html dir=img file="p-04.jpg" alt="Teachers whose training benefits the classroom: monthly plan vs. real, training status and gender distribution" caption="Teachers whose training benefits the classroom" %}
{% include project-figure.html dir=img file="p-05.jpg" alt="The same indicator filtered by training call and course, with totals by status and gender" caption="Filtered by training call and course" %}
{% include project-figure.html dir=img file="p-06.jpg" alt="Line chart of teachers by training status (finished, in progress, not started) across the year" caption="Teachers by training status" %}
{% include project-figure.html dir=img file="p-07.jpg" alt="Children impacted indirectly: monthly plan vs. real, 243% progress and schools reached" caption="Children impacted indirectly" %}
</div>
</section>

<section class="project-step" markdown="1">
<span class="step-label">Program area 2</span>

## Employability and educational innovation

These screens track people taking part in training, educators trained in employability projects, and the people who benefit from those educators. The participant views can be filtered by **partner organization** and **course**, and show how many participants passed, are in progress, have not started or dropped out.

<div class="project-gallery">
{% include project-figure.html dir=img file="p-08.jpg" alt="Training participants: monthly plan vs. real, 144% progress, status and gender distribution" caption="Training participants" %}
{% include project-figure.html dir=img file="p-09.jpg" alt="Training participants filtered by organization and course, with totals by status and gender" caption="Participants by organization and course" %}
{% include project-figure.html dir=img file="p-10.jpg" alt="Training participants for planned organizations: monthly plan vs. real and 69% progress" caption="Participants in planned organizations" %}
{% include project-figure.html dir=img file="p-11.jpg" alt="Educators trained in employability projects: monthly plan vs. real, 126% progress, status and gender" caption="Educators trained in employability projects" %}
{% include project-figure.html dir=img file="p-12.jpg" alt="Beneficiaries of educator training: monthly plan vs. real and 126% progress" caption="Beneficiaries of educator training" %}
</div>
</section>

<section class="project-step" markdown="1">
<span class="step-label">Program area 3</span>

## Communication

The communication screens follow the foundation's audience across Facebook, X (Twitter), LinkedIn, Instagram and other social networks, plus audio and video reach: unique visitors, YouTube plays and plays on social networks. Line charts make the steady growth (or a sudden data gap) easy to spot.

<div class="project-gallery">
{% include project-figure.html dir=img file="p-13.jpg" alt="Facebook and Twitter followers, plan vs. real across the year" caption="Facebook and X (Twitter) followers" %}
{% include project-figure.html dir=img file="p-14.jpg" alt="LinkedIn, Instagram and other social network followers, plan vs. real across the year" caption="LinkedIn, Instagram and other networks" %}
{% include project-figure.html dir=img file="p-15.jpg" alt="Audio and video reach: unique visitors, YouTube plays and social network plays with progress gauges" caption="Audio and video reach" %}
</div>
</section>

<section class="project-step" markdown="1">
<span class="step-label">Program area 4</span>

## Knowledge and culture

The culture program is measured both in person and online: event attendance, online event followers, streaming followers, YouTube views, podcast listeners, visitors to digital exhibitions, publication downloads and online readings.

<div class="project-gallery">
{% include project-figure.html dir=img file="p-16.jpg" alt="In-person event attendees and online event followers, monthly plan vs. real" caption="In-person and online event attendance" %}
{% include project-figure.html dir=img file="p-17.jpg" alt="Streaming followers and YouTube views, monthly plan vs. real" caption="Streaming and YouTube" %}
{% include project-figure.html dir=img file="p-18.jpg" alt="Audio and podcast listeners, digital exhibitions, publication downloads and online readings with progress gauges" caption="Podcasts, exhibitions, downloads and readings" %}
</div>
</section>

<section class="project-step" markdown="1">
<span class="step-label">Program area 5</span>

## Volunteering

Volunteering (direct beneficiaries, active volunteers, volunteering hours and participation in activities) is tracked in the indicators overview alongside the other four areas.
</section>

## Full report

Prefer to see it as one document? You can [download the complete report as a PDF]({{ '/assets/docs/Fundacion_Telefonica_Dashboard.pdf' | relative_url }}) (18 pages, 6 MB).
