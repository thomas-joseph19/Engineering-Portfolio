# Engineering Portfolio

## What This Is

A personal engineering portfolio website built as a private-style deliverable. It is designed to be viewed only by direct link (cloning/running locally or hosting via GitHub Pages) and showcases the engineer's qualifications. It is built using React (via Vite), Tailwind CSS, and React Router.

## Core Value

Create a sleek, modern, professional developer portfolio with 4 core pages (About Me, Resume, Contact, Projects) and a custom 404 page, ensuring all placeholder assets are clearly labeled and easily replaceable, with a Projects page that displays the SolidWorks planetary gear project and redirects to detailed steps.

## Current State

- **Milestone v1.0 (Shipped: 2026-07-09)**: Sleek, responsive static template with About, Resume, Contact, and custom 404 page. Includes automated GitHub Actions workflow and crawler exclusions.
- **Milestone v1.1 (Shipped: 2026-07-09)**: Added Planetary Gear project card on main projects page and details sub-route `/projects/planetary-gear` with step-by-step descriptions and CAD download links.

## Next Milestone Goals

- Populate projects page with additional CAD models, FEA simulations, and university research case studies.
- Implement contact mail form integration.

## Requirements

### Validated

- **[v1.0]** React (via Vite) + Tailwind CSS + React Router client-side routing.
- **[v1.0]** Sticky transparent header with active link highlights and responsive mobile hamburger overlay.
- **[v1.0]** Slim footer with copyright year, social SVGs, and email links.
- **[v1.0]** **About Me page**: Biography, interests chips, education info, experience timeline, and profile photo.
- **[v1.0]** **Resume page**: On-page resume sections and PDF download trigger linking to physical placeholder file.
- **[v1.0]** **Contact page**: Email, LinkedIn, GitHub icons and static address details.
- **[v1.0]** **404 page**: radial glow layout and home redirect button.
- **[v1.0]** **Branding & Privacy**: robots.txt block, favicon, assets placeholder system, and deployment workflows.
- **[v1.1]** **Planetary Gear Project**: Card entry on projects page showing CAD final image, brief description, and skills. No dates.
- **[v1.1]** **Planetary Gear Detail Page**: Route at `/projects/planetary-gear` with step descriptions, 5 placeholder photos, and 5 CAD part/assembly files.

### Active

(None - Milestone v1.1 complete)

### Out of Scope

- Public SEO optimization / search indexing — Private-style portfolio (disallow all crawling).
- Contact form with backend — Simple mailto/social links preferred to keep stack static and serverless.
- Other project cards or commented-out project lists — Only showcase the SolidWorks planetary gear project.
- Real images or real personal information in git history — All details must be clear placeholders.

## Context

- The site is a static site hosted on GitHub Pages or run locally.
- The owner is an engineering student who wants a high-quality portfolio that is clean and minimal.
- The owner wants to easily replace placeholder items by matching the checklist in the README.

## Constraints

- **Tech Stack**: React, Vite, Tailwind CSS, React Router.
- **Cost**: Zero cost for hosting, tools, and libraries.
- **Privacy**: No search indexing (robots.txt disallowing crawling is preferred).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| React (Vite) + Tailwind | Requested stack for lightweight, fast build and modern layout. | Shipped in v1.0 |
| React Router | Standard router for client-side single-page applications. | Shipped in v1.0 |
| Flat blank projects page | Specifically requested by the user, avoids clutter until they are ready. | Shipped in v1.0 |
| Crawl blocking via robots.txt | Restricts crawler bots to keep the portfolio private as desired. | Shipped in v1.0 |
| Sub-route project page | Showcases steps and CAD part downloads for specific assemblies. | Shipped in v1.1 |

---
*Last updated: 2026-07-09 after v1.1 release*
