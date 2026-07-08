---
phase: 4
slug: search-polish-documentation
status: discussed
---

# Phase 4 Context: Search, Polish & Documentation

## Design & Implementation Choices

1. **Client-Side Search**:
   - Add a search input field on `projects.html` styled with a magnifying glass icon.
   - The search filter in `js/main.js` will combine category filters and text search, matching against project titles, summaries, and tags.

2. **Dynamic Homepage**:
   - `index.html` currently has static placeholder sections for Featured Projects, Skills, and Career Timeline.
   - Create JS triggers in `js/main.js` targeting these elements.
   - Fetch `projects/projects.json` on page load:
     - Filter and render projects with `"featured": true`.
     - Extract, flatten, and dedup all tags across projects to populate the "Skills" list automatically.
     - Sort all projects chronologically (oldest to newest) to render a clean vertical timeline.

3. **Owner Documentation**:
   - Create `README.md` detailing the portfolio directory structure.
   - Include a checklist detailing "How to Add a Project" and "How to Edit Personal Information".
