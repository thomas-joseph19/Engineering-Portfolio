# Engineering Portfolio

## What This Is

A personal engineering portfolio website built as a private-style deliverable. It is designed to be viewed only by direct link (cloning/running locally or hosting via GitHub Pages) and showcases the engineer's qualifications. It is built using React (via Vite), Tailwind CSS, and React Router.

## Core Value

Create a sleek, modern, professional developer portfolio with 4 core pages (About Me, Resume, Contact, Projects) and a custom 404 page, ensuring all placeholder assets are clearly labeled and easily replaceable, with a Projects page that remains completely blank except for a "Projects coming soon!" message.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] React (via Vite) + Tailwind CSS + React Router client-side routing
- [ ] Top navigation bar present on all pages with active page highlighting and a mobile hamburger menu
- [ ] Slim persistent footer on all pages with copyright, social icons, and mailto links
- [ ] **About Me Page**: Biography placeholders, profile photo placeholder, skills snapshot strip (icon+label chips)
- [ ] **Resume Page**: Render resume sections on-page, prominent "Download Resume (PDF)" button linking to `/assets/documents/resume-PLACEHOLDER.pdf`
- [ ] **Contact Page**: Social links, email, placeholder text, icons for each contact method (mailto link only, no functional backend form)
- [ ] **Projects Page**: Completely blank page except for a single centered message: "Projects coming soon!"
- [ ] **404 Page**: Custom Catch-all Not Found page with friendly message and button/link back to About Me
- [ ] **Aesthetic**: Dark mode theme (deep navy background `#0F172A`/`#0B0F19`, primary electric blue/cyan accent `#38BDF8`/`#22D3EE`, secondary violet/indigo accent `#818CF8`, off-white body text, full white headings)
- [ ] **Animations**: Tasteful, fast fade-in/slide page transitions and initial load animations
- [ ] **Placeholder System**: Folder structure (`/public/favicon-PLACEHOLDER.ico`, `/public/assets/images/profile-photo-PLACEHOLDER.jpg`, `/public/assets/documents/resume-PLACEHOLDER.pdf`) with obvious placeholders (graphic for image, text for PDF) and in-code comments
- [ ] **Readme**: Setup, run, deployment instructions, and a full checklist of placeholders to replace

### Out of Scope

- [ ] Public SEO optimization / search indexing — Private-style portfolio (disallow all crawling)
- [ ] Contact form with backend — Simple mailto/social links preferred to keep stack static and serverless
- [ ] Project cards or commented-out project lists — Must keep Projects page blank per instructions
- [ ] Real images or real personal information in git history — All details must be clear placeholders

## Context

- The site is a static site hosted on GitHub Pages or run locally.
- The owner is an engineering student who wants a high-quality portfolio that is clean and minimal, without heavy animations.
- The owner wants to easily replace placeholder items by matching the checklist in the README.

## Constraints

- **Tech Stack**: React, Vite, Tailwind CSS, React Router.
- **Cost**: Zero cost for hosting, tools, and libraries.
- **Privacy**: No search indexing (robots.txt disallowing crawling is preferred).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| React (Vite) + Tailwind | Requested stack for lightweight, fast build and modern layout. | — Pending |
| React Router | Standard router for client-side single-page applications. | — Pending |
| Flat blank projects page | Specifically requested by the user, avoids clutter until they are ready. | — Pending |

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
*Last updated: 2026-07-09 after initialization*
