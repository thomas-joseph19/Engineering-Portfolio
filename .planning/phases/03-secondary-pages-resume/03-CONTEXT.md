---
phase: 3
slug: secondary-pages-resume
status: discussed
---

# Phase 3 Context: Secondary Pages & Resume

## Design & Implementation Choices

1. **Profile Data System**:
   - Create `data/profile.json` as the single source of truth for the owner's biography, education, experience, career goals, resume last-updated date, and social contact links.
   - This design follows the editing philosophy: the owner only needs to modify `data/profile.json` (or replace the PDF) to update their personal details, keeping HTML clean and untouched.

2. **Resume Viewer**:
   - Save resume PDF file directly to `assets/resume.pdf`.
   - Embed using `<iframe src="assets/resume.pdf" class="resume-frame">` or an `<embed>` element with fallback.
   - Display a direct download link matching the same file path.

3. **About Page Rendering**:
   - Load `data/profile.json` via fetch at runtime.
   - Parse biography markdown text dynamically (reusing the same `marked.js` library imported in `about.html`).
   - Render lists for education, experiences, and goals.

4. **Contact Page**:
   - Direct mailto link, LinkedIn URL, and GitHub profile URL loaded from `data/profile.json`.
   - Outlined resume download CTA.
