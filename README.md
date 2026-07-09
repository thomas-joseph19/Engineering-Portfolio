# Thomas Joseph — Engineering Portfolio

A sleek, premium, single-page developer portfolio template designed for mechanical engineering students. Built on a modern static site stack with client-side routing, custom glassmorphism components, and an automated deployment pipeline.

## 🚀 Tech Stack

- **Framework**: React (via Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router (`HashRouter` to prevent sub-route 404s on static hosting)
- **Deployment**: GitHub Actions (auto-deploying builds to the `gh-pages` branch)

## 🛠️ Setup & Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 3. Build & Compile Production Bundle
```bash
npm run build
```
The compiled output is optimized and written to the `dist/` directory.

## 📦 Deployment

This project includes a pre-configured GitHub Actions deploy runner at `.github/workflows/deploy.yml`. 

To activate automated deployment:
1. Ensure your repository settings allow GitHub Actions workflows to write contents (`Settings > Actions > General > Workflow permissions > Read and write permissions`).
2. Push your latest modifications to the `master` branch:
   ```bash
   git push origin master
   ```
3. GitHub Actions will automatically install dependencies, compile the production bundle, and push it to the `gh-pages` branch.
4. Set the GitHub Pages source branch to `gh-pages` in repository settings.

---

## 📝 Placeholder Replacement Checklist

To personalize the portfolio, replace the following placeholder assets and text files:

### 1. Static Asset Files
- [ ] **Favicon**: Replace `/public/favicon-PLACEHOLDER.ico` with your custom browser icon.
- [ ] **Profile Photo**: Replace `/public/assets/images/profile-photo-PLACEHOLDER.jpg` with your profile picture.
- [ ] **Resume PDF**: Replace `/public/assets/documents/resume-PLACEHOLDER.pdf` with your actual CV/Resume PDF file.
- [ ] **Planetary Gear Images**: Replace the 5 images under `/public/assets/images/projects/`:
  - `planet-gear-PLACEHOLDER.jpg`
  - `ring-gear-PLACEHOLDER.jpg`
  - `rotary-gear-PLACEHOLDER.jpg`
  - `sun-gear-PLACEHOLDER.jpg`
  - `final-product-PLACEHOLDER.jpg`
- [ ] **Planetary Gear CAD Files**: Replace the 5 CAD files under `/public/assets/documents/projects/`:
  - `planet-gear-PLACEHOLDER.sldprt`
  - `ring-gear-PLACEHOLDER.sldprt`
  - `rotary-gear-PLACEHOLDER.sldprt`
  - `sun-gear-PLACEHOLDER.sldprt`
  - `final-assembly-PLACEHOLDER.sldasm`

### 2. Branding & Content Text
Open `/src/data/profile.js` and customize the data keys:
- [ ] `name`: Your full name.
- [ ] `tagline`: Your professional subtitle (e.g. Mechanical Engineering Student).
- [ ] `university` & `degree`: Graduation details, expected dates, and GPA.
- [ ] `bio`: Your biography text.
- [ ] `interests`: Array of skills tags (rendered as chips on the About page).
- [ ] `experience`: Chronological array of roles, companies, dates, and bullet descriptions.
- [ ] `contact`: Email address, LinkedIn profile link, and GitHub profile link.

*Note: In-code comments are placed directly above all placeholder assets for easy tracking.*
