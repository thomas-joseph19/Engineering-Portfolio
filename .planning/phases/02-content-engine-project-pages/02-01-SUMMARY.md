---
phase: 2
plan: 1
subsystem: "Content Engine"
tags: ["html", "css", "js", "markdown", "gallery"]
provides: ["markdown-rendering", "project-viewer", "project-listing", "lightbox-gallery"]
affects: ["projects-system"]
tech-stack:
  added: ["marked.js", "js-yaml.js"]
  patterns: ["client-side-markdown-parsing", "query-parameter-routing", "regex-fallback-parser"]
key-files:
  created: ["projects.html", "project.html", "projects/projects.json", "projects/project-template/project.md"]
  modified: ["css/style.css", "js/main.js"]
key-decisions: ["Used query parameters for dynamic routing (project.html?project=slug) to maintain zero build steps and compat with GitHub Pages", "Added client-side Markdown and YAML parsing to remove static HTML redundancy"]
patterns-established: ["Prefix-based markdown image grouping (e.g. 2-col:, 3-col:) parsed dynamically into grid containers", "Global lightbox overlay modal instantiated dynamically via JS"]
duration: "25min"
completed: 2026-07-08
---

# Phase 2: content-engine-project-pages Summary

**Created a fully functional client-side content management system that renders project catalogs from JSON index files, dynamically parses markdown files with YAML frontmatter, displays custom column image galleries, and implements a fullscreen lightbox viewer.**

## Performance

- **Duration:** 25min
- **Tasks:** 3 completed
- **Files modified:** 6

## Accomplishments

- Configured dynamic query-param routing on `project.html` to fetch and parse markdown files on the fly.
- Designed `projects.html` catalog list view with date sorting and responsive category filtering tabs.
- Created `projects.json` index database and standard project markdown templates.
- Built a post-processing image parser that translates custom prefix syntax into styled two- and three-column grids with subtitles.
- Implemented global lightbox modal overlay for zoom-on-click image behavior.

## Task Commits

1. **Task 1: Create Projects Index and Project Template** - `4770625`
2. **Task 2: Create Projects Listing Page and Card Renderer** - `5aadcb3`
3. **Task 3: Create Project Viewer Page and Markdown Engine** - `6e09b2a`

## Files Created/Modified

- `projects.html` - Catalog overview with category filter tabs
- `project.html` - Dynamic markdown details viewer loading CDNs
- `projects/projects.json` - Metadata index for portfolio projects
- `projects/project-template/project.md` - Template structure with guidelines
- `css/style.css` - Card grid and badge styling, gallery grids, and lightbox styles
- `js/main.js` - Dynamic fetch, markdown/yaml parsers, category filter triggers, image grid grouping, and lightbox close/open controls

## Decisions & Deviations

- Added fallback parsing logic in `js/main.js` to ensure metadata extracts correctly even if the external JS-YAML library fails to load.

## Next Phase Readiness

- The core project engine is complete. We can now add secondary pages (About, Resume with PDF viewer, and Contact links) in Phase 3.
