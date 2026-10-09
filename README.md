# CS Portfolio System

A configuration-driven, static portfolio for a computer scientist / AI researcher. Edit config and data files only; components never need to change.

**Stack:** React 18, Vite, TypeScript, Tailwind CSS 3, Framer Motion, Lucide. No backend, no external APIs.

## Architecture

```
src/config/   site, theme, sections, navigation (global switches)
src/data/     profile, education, research, projects, ... (your content)
src/types/    TypeScript interfaces for every data file
src/utils/    theme -> CSS variables, section visibility, asset paths
src/components/<section>/   one folder per section; read-only consumers of data
```

- `theme.config.ts` becomes CSS variables (`--c-primary` etc.) at startup; Tailwind colours reference them. Change `primary` and the whole site follows.
- A section renders only if it is `true` in `sections.config.ts` **and** its data file is non-empty. Navigation, section numbering, hero buttons and the command palette follow automatically.
- Empty strings in `site.config.ts` (links, email) hide the matching icon or button.

## Customization guide

| To change | Edit |
|---|---|
| Name, tagline, email, social links, resume path, SEO | `src/config/site.config.ts` |
| Colours, fonts (typewriter by default), glow/grid/particles, corner radius | `src/config/theme.config.ts` |
| Enable/disable sections, section order, headings | `src/config/sections.config.ts` |
| Nav items | `src/config/navigation.config.ts` |
| Bio, roles, interests, terminal card | `src/data/profile.ts` |
| Education | `src/data/education.ts` |
| Research areas (also drives hero panel + research map) | `src/data/research.ts` (`currentlyExploring: true` shows in hero) |
| Projects (filters are generated from this data) | `src/data/projects.ts` |
| Publications | `src/data/publications.ts` |
| Experience | `src/data/experience.ts` |
| Skills (optional `level`, `years`, `projects`) | `src/data/skills.ts` |
| Achievements / certificates / notes / talks / repos | `achievements.ts`, `certifications.ts`, `notes.ts`, `talks.ts`, `repos.ts` |

Each empty data file contains a commented example entry. Only fields you fill in are displayed (metrics, links, images, etc.).

**Profile image:** put `public/profile.jpg`, then set `profileImage: '/profile.jpg'` in `site.config.ts`.
**Resume:** replace `public/resume.pdf` (or change `resume` in `site.config.ts`).
**Certificates / project images / paper PDFs:** drop files in `public/certificates`, `public/projects`, `public/publications` and reference them as `/certificates/x.pdf`.

## Develop

```
npm install
npm run dev
npm run build   # type-check + production build
npm run lint
```

## Deploy to GitHub Pages

Live URL: https://cs25m116.github.io/portfolio/

Everything in this folder (including `.github/`) must sit at the **root** of the repo.

1. `deploy.repoName` in `src/config/site.config.ts` = repository name (`portfolio`).
2. Push to `main`:
   ```
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/cs25m116/portfolio.git
   git push -u origin main --force
   ```
3. GitHub: **Settings > Pages > Source: GitHub Actions**.
4. Each push to `main` rebuilds and publishes the site (see the **Actions** tab).

## Keyboard

`Ctrl/Cmd + K` opens the command palette (disable with `features.commandPalette: false`).

The play/pause button in the navbar overrides the OS "reduce motion" setting for the animated background and typing effect.
