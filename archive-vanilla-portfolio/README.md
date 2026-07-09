# Thomas Joseph — Engineering Portfolio

A polished, high-performance static engineering portfolio built for GitHub Pages. This portfolio uses a **zero-dependency vanilla HTML/CSS/JS architecture** that parses Markdown content at runtime, allowing the portfolio owner to manage and add content without modifying any code.

---

## 📂 Directory Structure

```text
├── index.html                  # Homepage (featured projects, skills list, timeline)
├── projects.html               # Grid overview catalog with category tabs & search
├── project.html                # Project detail viewer (renders Markdown + YAML)
├── about.html                  # Profile, biography, education, and research experience
├── resume.html                 # Embedded PDF resume viewer with download options
├── contact.html                # Interactive links to email, LinkedIn, and GitHub
├── css/
│   └── style.css               # Centralized stylesheet (custom variables, responsive grids)
├── js/
│   └── main.js                # Interactive logic, search filters, and Markdown compiler
├── data/
│   └── profile.json            # Central profile database (bio, education, links)
├── assets/
│   ├── profile.jpg             # Professional headshot image
│   └── resume.pdf              # Curriculum Vitae PDF file
└── projects/
    ├── projects.json           # Catalog index database (auto-loaded in grids)
    ├── project-template/       # Reference template for creating new projects
    │   └── project.md
    ├── robotic-arm/            # Robotic Arm project folder
    │   └── project.md
    └── fea-wing-spar/          # FEA Wing Spar project folder
        └── project.md
```

---

## 🛠️ Operations & Content Management

This portfolio requires **zero build steps** and **no local build setup (npm, webpack, etc.)**. All page content updates are handled through standard JSON and Markdown edits.

### 1. How to Add a Project

To publish a new project to your website, follow these three steps:

1. **Create the Project Directory**:
   Inside `projects/`, create a new folder named after your project's URL slug (e.g., `projects/my-new-design/`).

2. **Add a Markdown file (`project.md`)**:
   Copy the template from `projects/project-template/project.md` into your new folder and update the frontmatter properties and content:
   ```yaml
   ---
   title: "My New Design"
   date: "2026-07-08"
   category: "Mechanical Design"
   tags: ["SolidWorks", "FEA", "3D Printing"]
   summary: "A brief one-sentence summary of this project."
   featured: true
   ---
   ```
   Add your markdown content below the frontmatter. Consecutive images with alt-text starting with `2-col:` or `3-col:` (e.g. `![2-col: Alt Text](gallery/image.png)`) will automatically group into neat multi-column layout galleries.

3. **Register in the Catalog (`projects/projects.json`)**:
   Add a new entry for your project to `projects/projects.json` matching the slug:
   ```json
   {
     "slug": "my-new-design",
     "title": "My New Design",
     "category": "Mechanical Design",
     "date": "2026-07-08",
     "tags": ["SolidWorks", "FEA", "3D Printing"],
     "thumbnail": "projects/my-new-design/thumbnail.jpg",
     "summary": "A brief one-sentence summary of this project.",
     "featured": true
   }
   ```

### 2. How to Edit Personal Profile Information

To update your biography, contact links, or educational/work milestones:
1. Open `data/profile.json`.
2. Update the properties:
   - **`bio`**: Supports Markdown syntax (bold, links, lists).
   - **`education` / `experience` / `goals`**: Add, remove, or modify items directly.
   - **`contact`**: Update your email, LinkedIn URL, or GitHub URL.
3. Save the file. All changes propagate automatically to `about.html`, `resume.html`, and `contact.html`.

### 3. How to Update Your Resume PDF

1. Replace the file at `assets/resume.pdf` with your new resume PDF. Ensure the file name is kept exactly as `resume.pdf`.
2. Open `data/profile.json` and update the `"lastUpdated"` field under the `"resume"` property (e.g., `"July 2026"`).

---

## 🚀 Deployment to GitHub Pages

Since the site consists of standard static files, deploying is extremely simple:

1. **Commit and Push changes to GitHub**:
   ```bash
   git add .
   git commit -m "feat: add my new project"
   git push origin main
   ```
2. **Enable GitHub Pages**:
   - Go to your repository settings page on GitHub.
   - Click **Pages** in the left sidebar menu.
   - Set the Build and deployment source to **Deploy from a branch**.
   - Under Branch, select **main** and set the folder to `/ (root)`.
   - Click **Save**.
3. Your portfolio will go online at: `https://thomas-joseph19.github.io/Engineering-Portfolio/`
