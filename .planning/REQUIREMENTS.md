# Requirements: Engineering Portfolio

**Defined:** 2026-07-09
**Core Value:** Create a sleek, modern, professional developer portfolio with 4 core pages (About Me, Resume, Contact, Projects) and a custom 404 page, ensuring all placeholder assets are clearly labeled and easily replaceable, with a Projects page that remains completely blank except for a "Projects coming soon!" message.

## v1 Requirements

### Foundation & Routing
- [ ] **FOUND-01**: React app initialized via Vite with Tailwind CSS styling.
- [ ] **FOUND-02**: React Router implemented for client-side routing.
- [ ] **FOUND-03**: Responsive layout (mobile, tablet, desktop support).
- [ ] **FOUND-04**: Deep navy/slate background theme with electric blue/violet accent gradients, off-white body text, and full white headings.
- [ ] **FOUND-05**: Smooth page transition fade-in/slide animations and initial load fade-in.

### Navigation & Layout
- [ ] **NAV-01**: Persistent, sticky top navigation bar (or sidebar) present on every page, including 404.
- [ ] **NAV-02**: Site logo/name on the left of nav, and links to the 4 main pages on the right.
- [ ] **NAV-03**: Active page state indicated clearly in the navigation (e.g., color, bold, underline).
- [ ] **NAV-04**: Collapsible hamburger menu for mobile navigation.
- [ ] **FOOT-01**: Slim, persistent footer at the bottom of every page (including 404).
- [ ] **FOOT-02**: Footer contains copyright text `© [PLACEHOLDER: Year] [PLACEHOLDER: Your Name]`.
- [ ] **FOOT-03**: Footer contains small social icons/links (GitHub, LinkedIn, Email) using mailto/profile links with placeholder values.

### Pages Content
- [ ] **ABOUT-01**: Biography section with a headline and 2-3 paragraph placeholder bio marked `[PLACEHOLDER: Replace with your bio]`.
- [ ] **ABOUT-02**: Profile photo placeholder that renders a valid image showing "REPLACE ME - Profile Photo".
- [ ] **ABOUT-03**: Skills snapshot strip: compact horizontal row of small icon+label chips (e.g., Python, React, AWS) marked `[PLACEHOLDER: adjust to your actual stack]`.
- [ ] **RES-01**: Render resume content directly on-page (Experience, Education, Skills sections) using obvious placeholder blocks.
- [ ] **RES-02**: Prominent "Download Resume (PDF)" button linking to `/assets/documents/resume-PLACEHOLDER.pdf`.
- [ ] **RES-03**: Download button points to a valid PDF placeholder that reads "REPLACE THIS FILE WITH YOUR ACTUAL RESUME PDF".
- [ ] **CONT-01**: Contact details section (email, LinkedIn, GitHub URLs) clearly marked as placeholders.
- [ ] **CONT-02**: Mailto links for email and direct links for social media, with icons next to each. No backend contact form (static links only).
- [ ] **PROJ-01**: Projects page is completely blank except for a single centered message: "Projects coming soon!".
- [ ] **PROJ-02**: No sample cards, grids, tag filters, commented-out projects, or scaffolding.
- [ ] **ERR-01**: Catch-all client-side route (`path="*"`) triggering a custom 404 page.
- [ ] **ERR-02**: 404 page shows large "404" heading, friendly message, and a button/link back to About Me (home) page.

### Placeholder & Branding System
- [ ] **ASSET-01**: Folder structure conforms strictly to `/public/favicon-PLACEHOLDER.ico`, `/public/assets/images/profile-photo-PLACEHOLDER.jpg`, `/public/assets/documents/resume-PLACEHOLDER.pdf`.
- [ ] **ASSET-02**: Placeholder assets are actually present on disk and render properly (no broken images or links).
- [ ] **ASSET-03**: Explicit in-code comments flag every placeholder reference.
- [ ] **ASSET-04**: Root `README.md` contains setup instructions, deployment instructions, and a full checklist of placeholders.
- [ ] **ASSET-05**: Favicon placeholder `favicon-PLACEHOLDER.ico` referenced in `index.html` head, with browser tab title set to `[PLACEHOLDER: Your Name] — Engineering Portfolio`.
- [ ] **ASSET-06**: basic `robots.txt` disallowing crawling for private-style deliverable.

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01    | Phase 1 | Pending |
| FOUND-02    | Phase 1 | Pending |
| FOUND-03    | Phase 1 | Pending |
| FOUND-04    | Phase 1 | Pending |
| FOUND-05    | Phase 1 | Pending |
| NAV-01      | Phase 2 | Pending |
| NAV-02      | Phase 2 | Pending |
| NAV-03      | Phase 2 | Pending |
| NAV-04      | Phase 2 | Pending |
| FOOT-01     | Phase 2 | Pending |
| FOOT-02     | Phase 2 | Pending |
| FOOT-03     | Phase 2 | Pending |
| ABOUT-01    | Phase 3 | Pending |
| ABOUT-02    | Phase 3 | Pending |
| ABOUT-03    | Phase 3 | Pending |
| RES-01      | Phase 3 | Pending |
| RES-02      | Phase 3 | Pending |
| RES-03      | Phase 3 | Pending |
| CONT-01     | Phase 3 | Pending |
| CONT-02     | Phase 3 | Pending |
| PROJ-01     | Phase 3 | Pending |
| PROJ-02     | Phase 3 | Pending |
| ERR-01      | Phase 4 | Pending |
| ERR-02      | Phase 4 | Pending |
| ASSET-01    | Phase 4 | Pending |
| ASSET-02    | Phase 4 | Pending |
| ASSET-03    | Phase 4 | Pending |
| ASSET-04    | Phase 4 | Pending |
| ASSET-05    | Phase 4 | Pending |
| ASSET-06    | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 30 total
- Mapped to phases: 30
- Unmapped: 0 ✓

---
*Requirements defined: 2026-07-09*
*Last updated: 2026-07-09 after initial definition*
