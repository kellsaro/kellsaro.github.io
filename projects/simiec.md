---
layout: page
title: "SIMIEC: national immigration control for Ecuador"
subtitle: The system behind every entry and exit at Ecuador's borders.
permalink: /projects/simiec/
css: ["/assets/css/projects.css"]
description: "SIMIEC is Ecuador's national immigration control system, a Java platform integrated with passport scanners and fingerprint readers."
---

<ul class="project-meta">
  <li>Ministerio del Interior, Ecuador</li>
  <li>2015 - 2019</li>
  <li>Architect / Backend Java Developer</li>
  <li>Java EE</li>
  <li>EJB</li>
  <li>JPA</li>
  <li>JSF</li>
  <li>JMS</li>
  <li>C# / .NET</li>
  <li>JavaScript</li>
  <li>C++</li>
</ul>

**SIMIEC** is the national immigration control system of Ecuador. It records the people who enter and leave the country, so it has to be accurate, fast at the checkpoint, and available all the time.

## My role

As IT Analyst and Backend Java Developer at the Ministerio del Interior, I **architected SIMIEC** and worked on it for four years.

## What the work involved

The core of SIMIEC is a **Java** platform, but each checkpoint also depends on specialized hardware, so the system combines a Java backend with small, focused modules in other languages wherever it talks to a device.

### The core platform: Java EE

The platform is built on **Java EE**, the standard for enterprise Java at the time, and I architected it using the platform's own building blocks, so every layer follows the same standard:

- **EJB (Enterprise JavaBeans)** hold the business logic of immigration control: registering entries and exits, validating travelers and documents, and keeping the records consistent, with the application server managing transactions.
- **JPA (Java Persistence API)** maps that data to the database.
- **JSF (JavaServer Faces)** provides the screens that officers use at the checkpoints.

### Hardware integration: passports and fingerprints

- **Passport scanners.** This module combines **JavaScript** in the officer's browser with a **C# / .NET** component that communicates with the scanners, so the data read from the document flows straight into the officer's screen without retyping it.
- **Fingerprint readers.** This module was written in **C++**, the language closest to the devices and their drivers, and hands the captured fingerprints to the rest of the system.

### Asynchronous logging: JMS

Every action in an immigration system has to be recorded, but writing those records must never slow down an officer processing a traveler. SIMIEC sends that information through **Java Message Service (JMS)** queues, also part of Java EE, so it is logged **asynchronously**: the checkpoint keeps moving while the records are stored reliably in the background.

### Availability, reporting and practices

- **Critical availability.** SIMIEC serves millions of users, and the infrastructure I managed kept **99.9% uptime**.
- **Reporting and analysis.** I produced reports and dashboards from the system's data with **Jasper Reports** and Excel.
- **Engineering practices.** I set up internal Git repositories for the team.

[Back to all projects]({{ '/' | relative_url }}#notable-projects)
