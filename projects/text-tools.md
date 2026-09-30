---
layout: page
title: "Text Tools for Workdocs"
subtitle: A monday.com app to review, transform and replace text without leaving the document.
permalink: /projects/text-tools/
css: ["/assets/css/projects.css"]
description: "Text Tools for Workdocs is a monday.com app that counts, transforms and finds-and-replaces selected text directly inside monday.com Workdocs."
---

{% assign img = "/assets/img/projects/text-tools/" %}

**Text Tools for Workdocs** is an app for [monday.com](https://monday.com) Workdocs, the documents built into the monday.com work platform. It makes formatting, editing and working with text easier and faster: select some text, open the app from the toolbar, and in a few clicks you can **review** it (words, sentences, reading time), **transform** it (upper case, title case, slugs and more) or **find and replace** inside it.

I built it with **React** as part of [montools](https://montools.github.io), a small collection of productivity apps for monday.com. The panel with its three tabs is a React interface that monday.com loads right inside the Workdocs toolbar.

<ul class="project-meta">
  <li>monday.com app</li>
  <li>React</li>
  <li>Runs inside Workdocs</li>
  <li>Review · Transform · Replace</li>
  <li>Works only on the selected text</li>
  <li>No data leaves monday.com</li>
</ul>

{% include project-video.html src="/assets/media/projects/text-tools/full.mp4" poster="/assets/media/projects/text-tools/full-poster.jpg" label="Full walkthrough of Text Tools for Workdocs: opening the app from the toolbar, then reviewing, transforming and replacing text" caption="The full walkthrough (1:25): open the app on a selection, then review, transform and replace text." %}

<section class="project-step" markdown="1">
<span class="step-label">Where it lives</span>

## Right in the Workdocs toolbar

There is nothing to open in another tab. When you select text in a Workdoc, monday.com shows its contextual toolbar above the selection, and Text Tools appears there as its own button. The app opens in a small panel with three tabs, and everything it does applies **only to the selected text**, never to the rest of the document.

{% include project-figure.html dir=img file="overview.png" alt="A monday.com Workdoc with text selected, the contextual toolbar above it, and the Text Tools panel open on the Review tab" caption="The Text Tools panel, opened from the contextual toolbar on a text selection." %}
</section>

<section class="project-step" markdown="1">
<span class="step-label">Tab 1</span>

## Review: analyze the content

The **Review** tab counts the **sentences, words and characters** (with and without spaces) in the selection and estimates its **reading time**, which helps you write for your audience and keep within length limits.

Different tools often give slightly different counts, so the app is transparent about its rules. Sentences are counted by splitting the trimmed text on `.`, `!` and `?`. Words are runs of letters, and compound words joined by `-` or `/` (like *third-party* or *XLS/CSV*) count as one word.

{% include project-video.html src="/assets/media/projects/text-tools/tab-review.mp4" poster="/assets/media/projects/text-tools/tab-review-poster.jpg" label="Opening Text Tools on a selection and reading the Review statistics" caption="Reviewing a selection." %}

<div class="project-narrow">
{% include project-figure.html dir=img file="review.png" alt="Review tab showing sentences, words, characters, characters without spaces and estimated reading time" caption="The Review tab." %}
</div>
</section>

<section class="project-step" markdown="1">
<span class="step-label">Tab 2</span>

## Transform: change the case in one click

The **Transform** tab converts the selection to **Upper Case, Lower Case, Title Case, Sentence Case, Snake Case**, or a URL-friendly **slug**. Each option shows a short hint with an example, so it is clear what it will do before you apply it.

{% include project-video.html src="/assets/media/projects/text-tools/tab-transform.mp4" poster="/assets/media/projects/text-tools/tab-transform-poster.jpg" label="Transforming a selection with the Transform tab" caption="Transforming a selection." %}

<div class="project-gallery">
{% include project-figure.html dir=img file="transform-uppercase.png" alt="Transform tab with Upper Case selected and the hint: Useful for grabbing attention. Ex: HELLO WORLD" caption="Upper Case" %}
{% include project-figure.html dir=img file="transform-lowercase.png" alt="Transform tab with Lower Case selected and its example hint" caption="Lower Case" %}
{% include project-figure.html dir=img file="transform-titlecase.png" alt="Transform tab with Title Case selected and its example hint" caption="Title Case" %}
{% include project-figure.html dir=img file="transform-sentence-case.png" alt="Transform tab with Sentence Case selected and its example hint" caption="Sentence Case" %}
</div>
</section>

<section class="project-step" markdown="1">
<span class="step-label">Tab 3</span>

## Replace: find and replace in the selection

The **Replace** tab searches the selection and replaces matches, with options to **match case**, **match whole words** or use a **regular expression** for more advanced patterns. Because it works on the selection, you can safely change one section of a long document without touching the rest.

{% include project-video.html src="/assets/media/projects/text-tools/tab-replace.mp4" poster="/assets/media/projects/text-tools/tab-replace-poster.jpg" label="Replacing a repeated word in a selection with the Replace tab" caption="Replacing a word throughout a selection." %}

<div class="project-narrow">
{% include project-figure.html dir=img file="replace.png" alt="Replace tab with Find and Replace with fields and options for match case, match whole word and regular expressions" caption="The Replace tab and its options." %}
</div>
</section>

## Private by design

The app processes text locally within the document. It does not store, collect or send any document content outside monday.com, and it does not integrate with any third-party service. That makes it safe to use on internal or sensitive documents.

## Try it

Text Tools for Workdocs has a **free plan** for small teams, paid plans for larger ones, and a 14-day free trial. You can find the details and install it from the [Text Tools page on montools](https://montools.github.io/solutions/text_tools/).
