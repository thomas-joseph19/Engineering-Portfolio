# Engineering Portfolio

## What This Is

A static portfolio website hosted on GitHub Pages for a Mechanical Engineering student at the University of Central Florida. The site showcases engineering projects through well-documented, visually-rich project pages — all generated from Markdown files. The entire portfolio runs from static files with zero backend, zero build step, and zero paid services. Visitors (recruiters, hiring managers, engineers, professors) see a polished, professional engineering portfolio. The owner simply adds a folder with a markdown file and images to publish a new project.

## Core Value

Adding a new engineering project to the portfolio should require nothing more than creating a folder, writing a markdown file, adding images, and pushing to GitHub — no web development knowledge needed.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- [x] Static site compatible with GitHub Pages (no backend, no build step, no server) (Validated in Phase 1)
- [x] Vanilla HTML/CSS/JS — JavaScript reads markdown at runtime (Validated in Phase 1)
- [x] Navigation: Home, Projects, About, Resume, Contact (consistent across all pages) (Validated in Phase 1)
- [x] Homepage with hero section (name, ME student, UCF, personal statement, Resume + View Projects buttons) (Validated in Phase 1)
- [x] Cool technical visual style (slate, steel blue, white palette — precision engineering feel) (Validated in Phase 1)
- [x] Responsive layout (desktop, tablet, mobile) (Validated in Phase 1)
- [x] Fast loading with lazy-loaded images and minimal JavaScript (Validated in Phase 1)
- [x] Projects listing page with cards (thumbnail, title, category, summary, date, tags) (Validated in Phase 2)
- [x] Projects auto-sort by newest first (Validated in Phase 2)
- [x] Category filters (Mechanical Design, Manufacturing, Programming, Research, Course Projects, Personal Projects) (Validated in Phase 2)
- [x] Dedicated project pages generated from Markdown + YAML frontmatter files (Validated in Phase 2)
- [x] Project pages support unlimited images with attractive auto-layouts (Validated in Phase 2)
- [x] Image features: single, 2-col grid, 3-col grid, wide, captions, fullscreen viewing, zoom, responsive (Validated in Phase 2)
- [x] Project folder structure: `projects/<slug>/project.md`, `thumbnail.jpg`, `gallery/`, `documents/` (Validated in Phase 2)
- [x] Adding a project = adding a folder (no code editing required) (Validated in Phase 2)
- [x] Project template included for easy copying (Validated in Phase 2)

### Active

<!-- Current scope. Building toward these. -->

- [ ] Featured Projects section on homepage (auto-populated from project metadata)
- [ ] Engineering Skills section on homepage (auto-generated from project tags)
- [ ] Career Timeline on homepage (auto-generated from project dates)
- [ ] Client-side search (titles, descriptions, skills, software, tags, categories)
- [ ] Resume page with embedded PDF, download button, easy PDF replacement, last-updated date
- [ ] About page with editable biography, education, experience, interests, goals, profile image
- [ ] Contact page with email, LinkedIn, GitHub links, optional resume button
- [ ] Well-documented code with comments explaining how to add/edit content

### Out of Scope

- Backend / server / database — static files only, GitHub Pages constraint
- Authentication / user accounts — no login needed
- Contact form — simple links instead (no server to process forms)
- Custom domain — GitHub Pages default URL is fine
- Blog — potential future addition, not v1
- Interactive CAD/3D model viewers — potential future addition, not v1
- Content management system — markdown files serve this purpose
- Paid services / subscriptions — everything must be free
- Gaming/cyberpunk aesthetics — professional engineering portfolio
- Heavy animations / flashy effects — clean and minimal

## Context

- **Owner:** Mechanical Engineering student at the University of Central Florida
- **Primary audience:** Engineering internship recruiters, hiring managers, engineers, professors, professional contacts
- **Hosting:** GitHub Pages (free, static files from a GitHub repository)
- **Repository:** https://github.com/thomas-joseph19/Engineering-Portfolio.git
- **Editing philosophy:** Owner is not a web developer. Must never need to edit website code to add projects. Only creates folders, writes markdown, adds images, and pushes.
- **Longevity:** Portfolio should grow throughout undergraduate career — machine design, research, programming, FEA, simulation, robotics, capstone
- **Visual direction:** Cool technical palette (slate, steel blue, white). Think high-end engineering company website. Clean, minimal, organized, modern, professional.
- **Content format:** Markdown with YAML frontmatter for project metadata
- **No build step:** Vanilla HTML/CSS/JS. JavaScript parses markdown at runtime in the browser.

## Constraints

- **Hosting:** GitHub Pages only — static files, no server-side processing
- **Build step:** None — no static site generator, no CI pipeline required for basic operation
- **Cost:** Zero — no paid services, APIs, or subscriptions
- **Technology:** Vanilla HTML, CSS, JavaScript only — no frameworks, no npm
- **Editing:** Content changes must never require modifying HTML/CSS/JS source files
- **Performance:** Must load fast — lazy loading, optimized images, minimal JS

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Vanilla HTML/CSS/JS over static site generator | Zero build step = simplest deployment. Owner just pushes files. | — Pending |
| Markdown + YAML frontmatter for projects | Most natural writing format. Easy to learn, easy to edit. Frontmatter holds metadata. | — Pending |
| Client-side markdown parsing | No build step needed. JS library (marked.js or similar) renders markdown in browser. | — Pending |
| GitHub Pages hosting | Free, integrated with git workflow, reliable CDN. | — Pending |
| Cool technical color palette | Matches mechanical engineering discipline. Communicates precision and professionalism. | — Pending |
| Project-per-folder structure | Adding a project = adding a folder. Clean, predictable, git-friendly. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-08 after initialization*
