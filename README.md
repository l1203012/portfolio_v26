# portfolio_v26

Apple-inspired, red-accented personal portfolio. Built with React + Vite + TypeScript + Tailwind + Framer Motion. Hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Option A — Push to deploy (recommended)

1. Push this repo to GitHub.
2. In repo settings, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Push to `main`. The `.github/workflows/deploy.yml` workflow builds and publishes automatically.

The site will be available at `https://<your-username>.github.io/<repo-name>/`.

### Option B — Manual

```bash
npm run deploy
```

This uses `gh-pages` to push `dist/` to the `gh-pages` branch. Update the `homepage` field in `package.json` to match your repo URL.

## Customize

All content lives in [`src/data.ts`](src/data.ts) — name, projects, certifications, hobbies, skills, contact. Edit there and rebuild.

The accent red is defined in [`tailwind.config.js`](tailwind.config.js) under `theme.extend.colors.accent`.

## Structure

```
src/
  App.tsx              composes the page
  data.ts              all portfolio content
  components/
    Nav.tsx
    Section.tsx
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Timeline.tsx       chronological project timeline
    Certifications.tsx
    Hobbies.tsx
    Contact.tsx
```
