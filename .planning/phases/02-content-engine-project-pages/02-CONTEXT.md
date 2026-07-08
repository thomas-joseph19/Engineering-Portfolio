---
phase: 2
slug: content-engine-project-pages
status: discussed
---

# Phase 2 Context: Content Engine & Project Pages

## Design & Implementation Choices

1. **Markdown Parsing**:
   - Use `marked.js` library via CDN for client-side Markdown rendering.
   - Use `js-yaml.js` library via CDN for parsing the frontmatter from project markdown files.

2. **Routing & Dynamic Pages**:
   - Instead of static pages for each project (which would require code updates), use a single `project.html` viewer page that uses a query parameter (e.g., `project.html?id=rover-suspension`).
   - The JavaScript engine will parse the query parameter, fetch `projects/<slug>/project.md`, parse its frontmatter and markdown body, and render it dynamically.
   - The listing page `projects.html` will fetch `projects/projects.json` to get the list of all projects and render them as cards.

3. **Directory Structure**:
   ```
   projects/
     projects.json
     rover-suspension/
       project.md
       thumbnail.jpg
       gallery/
         cad.jpg
         machining.jpg
   ```

4. **Image Layout Grid**:
   - Implement CSS utility styles to handle single images, two-column grids, and three-column grids in the Markdown.
   - For markdown images, parse custom syntax or standard syntax with container layouts. Standard markdown images like `![alt](url)` can be styled.
   - Fullscreen lightbox viewer: A global overlay container in `project.html` that shows up when an image is clicked.

5. **Category Filters**:
   - Filter bar on `projects.html` featuring buttons for All, Mechanical Design, Manufacturing, Programming, Research, Course Projects, Personal Projects.
   - Interactivity in JS filtering cards using `.style.display = 'none'` or CSS classes.
