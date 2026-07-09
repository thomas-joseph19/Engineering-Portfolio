# Phase 3: Core Pages - Context

**Gathered:** 2026-07-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the 4 core routes/pages using the profile data structure:
1. About Me (`/`): Contains biography, profile photo (using placeholder with rule comment), skills snapshot chips, facts/goals, and professional timeline.
2. Resume (`/resume`): Direct rendering of resume content and a download button linking to the physical PDF placeholder.
3. Contact (`/contact`): Clean listing of links and details (static page layout).
4. Projects (`/projects`): Kept completely blank except for the centered "Projects coming soon!" message.

</domain>

<decisions>
## Implementation Decisions

### Data Integration
- **D-01:** Place profile details in a single file (`src/data/profile.js`) to support easy maintainability and replacement.
- **D-02:** Import and read data in `App.jsx` page components.

### Page Components
- **D-03:** Extract About, Resume, Contact, and Projects page components out of `App.jsx` and place them in their own files under `src/pages/` (e.g. `AboutPage.jsx`, `ResumePage.jsx`, `ContactPage.jsx`, `ProjectsPage.jsx`).
- **D-04:** Use standard Tailwind layout components (grid, cards, flex boxes) for maximum premium visual appeal.
- **D-05:** Highlight the profile image with styling (e.g. border-2 border-brand-accent-primary, shadow-lg, rounded-full) and make sure it has an inline comment above the tag pointing to the placeholder rule: `/* PLACEHOLDER: profile-photo-PLACEHOLDER.jpg must exist in public/assets/images/ */`.
- **D-06:** Resume Download button has download action linking to `/assets/documents/resume-PLACEHOLDER.pdf` and an inline comment above the tag pointing to the placeholder rule.
- **D-07:** Projects page remains exactly matching requirements (centered text).

</decisions>

<canonical_refs>
## Canonical References

### Project Specifications
- `.planning/PROJECT.md` — Core values and stacks
- `.planning/REQUIREMENTS.md` — Detail mappings of pages, about me, resume, and contact specs

</canonical_refs>

<code_context>
## Existing Code Insights

- `src/App.jsx` — Currently hosts inline placeholder route components. These will be refactored to point to the new `src/pages/` components.
- `src/data/profile.js` — Core data file containing the Thomas Joseph engineering student profile details.

</code_context>

---

*Phase: 03-core-pages*
*Context gathered: 2026-07-09*
