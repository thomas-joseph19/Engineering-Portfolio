# Roadmap: Engineering Portfolio

## Overview

Build a static React-based engineering portfolio from scratch using Vite, Tailwind CSS, and React Router. Phase 1 establishes the React app, styling foundation, and routing container. Phase 2 implements persistent navigation headers and footer layouts. Phase 3 populates individual pages (About, Resume, Contact, Projects). Phase 4 adds the Catch-all 404 page, sets up the placeholder asset directories/files, writes the README checklist, and runs the final verifications.

## Phases

- [x] **Phase 1: Foundation & Setup** - Initialize React app with Vite, Tailwind CSS, and Routing setup (completed 2026-07-09)
- [x] **Phase 2: Navigation & Layout** - Build persistent Header, Hamburger menu, and Footer components (completed 2026-07-09)
- [ ] **Phase 3: Core Pages** - Create About Me, Resume, Contact, and Projects pages
- [ ] **Phase 4: Error, Placeholders & Docs** - Add 404 page, actual placeholder files, and README checklist

## Phase Details

### Phase 1: Foundation & Setup
**Goal**: Initialize a styled React application shell with Tailwind CSS and React Router configured.
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05
**Success Criteria**:
  1. React application loads via Vite dev server.
  2. Tailwind CSS works with deep navy/slate background and electric blue accents.
  3. Simple client-side routing works between 4 routes.
  4. Subtle load transition works on initial render.
**Plans**: 1 plan

Plans:
- [x] 01-01: Initialize Vite React app, install Tailwind CSS and React Router, set up routing routes and styling foundation.

### Phase 2: Navigation & Layout
**Goal**: Build a persistent navigation bar and footer with responsive design.
**Depends on**: Phase 1
**Requirements**: NAV-01, NAV-02, NAV-03, NAV-04, FOOT-01, FOOT-02, FOOT-03
**Success Criteria**:
  1. Top navigation bar is sticky and displays the active page state correctly.
  2. Small screen size collapses the nav links into a responsive hamburger menu.
  3. Slim footer is present on all pages containing placeholders for copyright and social media.
**Plans**: 1 plan

Plans:
- [x] 02-01: Create persistent Header and Footer components, configure active page styles and responsive mobile hamburger menu.

### Phase 3: Core Pages
**Goal**: Implement the 4 main pages with placeholder contents, links, and styling.
**Depends on**: Phase 2
**Requirements**: ABOUT-01, ABOUT-02, ABOUT-03, RES-01, RES-02, RES-03, CONT-01, CONT-02, PROJ-01, PROJ-02
**Success Criteria**:
  1. About page shows biography paragraphs, placeholder photo, and skills snapshot strip.
  2. Resume page renders on-page resume text and download button linking to a placeholder PDF.
  3. Contact page displays email and social links with icons (no forms).
  4. Projects page is completely blank except for a single centered "Projects coming soon!" message.
**Plans**: 1 plan

Plans:
- [ ] 03-01: Create About, Resume, Contact, and Projects page components with appropriate contents and custom transition animations.

### Phase 4: Error, Placeholders & Docs
**Goal**: Handle invalid URLs, add physical placeholder files, configure robots.txt, and complete the README.md documentation.
**Depends on**: Phase 3
**Requirements**: ERR-01, ERR-02, ASSET-01, ASSET-02, ASSET-03, ASSET-04, ASSET-05, ASSET-06
**Success Criteria**:
  1. Invalid URLs render a custom 404 page with a link back to About Me page.
  2. Placeholder files exist at `/public/favicon-PLACEHOLDER.ico`, `/public/assets/images/profile-photo-PLACEHOLDER.jpg`, and `/public/assets/documents/resume-PLACEHOLDER.pdf` without broken links.
  3. `robots.txt` disallows crawler indexing.
  4. `README.md` is updated with setup, run, deployment guides and the Placeholder Checklist.
**Plans**: 1 plan

Plans:
- [ ] 04-01: Add 404 routing/page, generate/copy physical placeholder files, write robots.txt, write README.md checklist, and perform final checks.

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Setup | 1/1 | Complete   | 2026-07-09 |
| 2. Navigation & Layout | 1/1 | Complete   | 2026-07-09 |
| 3. Core Pages | 0/1 | Not started | - |
| 4. Error, Placeholders & Docs | 0/1 | Not started | - |
