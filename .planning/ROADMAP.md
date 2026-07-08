# Roadmap: Engineering Portfolio

## Overview

Build a static GitHub Pages engineering portfolio from foundation to polish. Start with the core site structure and design system, then build the content engine that generates pages from markdown files, add all secondary pages, and finish with search and final polish. Every phase delivers a working, deployable increment.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Site Foundation & Design System** - Core HTML structure, CSS design system, navigation, responsive layout, and homepage
- [ ] **Phase 2: Content Engine & Project Pages** - Markdown parser, project page generator, image gallery system, and projects listing
- [ ] **Phase 3: Secondary Pages & Resume** - About, Resume, and Contact pages with editable content files
- [ ] **Phase 4: Search, Polish & Documentation** - Client-side search, homepage dynamic sections, performance optimization, and contributor documentation

## Phase Details

### Phase 1: Site Foundation & Design System
**Goal**: Establish the complete visual foundation — design tokens, typography, color palette, responsive grid, navigation component, and a fully styled homepage with static placeholder content.
**Depends on**: Nothing (first phase)
**Requirements**: SITE-01, SITE-02, SITE-03, SITE-04, SITE-05, SITE-06, HOME-01, HOME-02
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Opening index.html in a browser shows a polished homepage with hero section displaying name, UCF, ME student tagline
  2. Navigation bar with Home, Projects, About, Resume, Contact links renders on all pages
  3. Site looks professional on desktop (1440px), tablet (768px), and mobile (375px)
  4. Color palette uses slate/steel blue/white tones with professional typography
  5. Resume and View Projects buttons are visible and styled in the hero section
**Plans**: 3 plans

Plans:
- [ ] 01-01: CSS design system — color tokens, typography scale, spacing, responsive breakpoints, component styles
- [ ] 01-02: HTML page structure — index.html with navigation, hero section, footer, and page shell templates
- [ ] 01-03: Responsive navigation — mobile hamburger menu, sticky header, active page highlighting

### Phase 2: Content Engine & Project Pages
**Goal**: Build the JavaScript engine that reads markdown files with YAML frontmatter and renders project listing cards and individual project pages with full image gallery support.
**Depends on**: Phase 1
**Requirements**: PROJ-01, PROJ-02, PROJ-03, PROJ-04, PAGE-01, PAGE-02, PAGE-03, PAGE-04, IMG-01, IMG-02, IMG-03, IMG-04, IMG-05, IMG-06, CONT-01, CONT-02, CONT-03, CONT-04, CONT-05
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. A `projects/` folder with example project folders containing `project.md` and images exists
  2. Projects page lists all projects as styled cards with thumbnail, title, category, summary, date, and tags
  3. Clicking a project card opens a dedicated project page rendered from the markdown file
  4. Project pages display all markdown content with proper formatting
  5. Images render in configurable layouts (single, 2-col, 3-col, wide) with captions and fullscreen lightbox
  6. Adding a new folder under `projects/` with a `project.md` file makes a new project appear automatically
  7. Category filter buttons on the projects page filter the displayed cards
**Plans**: 3 plans

Plans:
- [ ] 02-01: Markdown/YAML parser and project index — fetch project.md files, parse frontmatter, build project registry, render project listing cards
- [ ] 02-02: Project page renderer — dedicated project page that loads markdown content, renders sections, handles optional sections gracefully
- [ ] 02-03: Image gallery system — layout directives, lightbox viewer, lazy loading, responsive image sizing, captions

### Phase 3: Secondary Pages & Resume
**Goal**: Build the About, Resume, and Contact pages, each pulling content from editable data files so the owner never touches HTML.
**Depends on**: Phase 1
**Requirements**: RESM-01, RESM-02, RESM-03, RESM-04, ABUT-01, ABUT-02, ABUT-03, CTCT-01, CTCT-02, CTCT-03
**Success Criteria** (what must be TRUE):
  1. About page displays biography, education, experience, interests, and career goals from an editable markdown or JSON file
  2. About page shows a profile image
  3. Resume page embeds a PDF and provides a download button
  4. Replacing `resume.pdf` updates the displayed resume without code changes
  5. Contact page shows email, LinkedIn, and GitHub links with optional resume button
**Plans**: 2 plans

Plans:
- [ ] 03-01: About page — load content from `content/about.md`, render biography sections, display profile image
- [ ] 03-02: Resume and Contact pages — PDF embed with download button, last-updated date, contact links layout

### Phase 4: Search, Polish & Documentation
**Goal**: Add client-side search, wire up the homepage dynamic sections (featured projects, skills aggregation, career timeline), optimize performance, and write comprehensive documentation for the owner.
**Depends on**: Phase 2, Phase 3
**Requirements**: SRCH-01, SRCH-02, SRCH-03, HOME-03, HOME-04, HOME-05, SITE-07
**Success Criteria** (what must be TRUE):
  1. Search bar on projects page filters projects by title, description, tags, and categories in real-time
  2. Homepage Featured Projects section auto-populates from projects with `featured: true` in frontmatter
  3. Homepage Skills section aggregates and displays all unique tags from across projects
  4. Homepage Career Timeline renders project milestones chronologically
  5. README.md and inline comments explain how to add projects, replace resume, edit about content, and customize the site
**Plans**: 3 plans

Plans:
- [ ] 04-01: Client-side search — search index builder, fuzzy matching, real-time filtering UI on projects page
- [ ] 04-02: Homepage dynamic sections — featured projects carousel/grid, skills tag cloud, career timeline component
- [ ] 04-03: Documentation and project template — README.md, inline code comments, example project template folder, GitHub Pages deployment guide

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Site Foundation & Design System | 0/3 | Not started | - |
| 2. Content Engine & Project Pages | 0/3 | Not started | - |
| 3. Secondary Pages & Resume | 0/2 | Not started | - |
| 4. Search, Polish & Documentation | 0/3 | Not started | - |
