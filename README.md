# Portfolio

Personal portfolio of Meharaj Ul Mahmmud: [meheraj.netlify.app](https://meheraj.netlify.app/).

A single-page, fully static site that follows the system light/dark theme.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) and React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (theme configured in CSS, no `tailwind.config.ts`)
- [react-icons](https://react-icons.github.io/react-icons/) for icons

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload  |
| `npm run build` | Build the production bundle           |
| `npm run start` | Serve the production build locally    |
| `npm run lint`  | Run ESLint                            |

## Project structure

```
app/
  layout.tsx        Root layout, fonts and SEO metadata
  page.tsx          Composes the page from the section components
  globals.css       Theme tokens (colours, fonts) and base styles
  opengraph-image.tsx  Social preview card, rendered at build time
  robots.ts, sitemap.ts  Crawler files generated from lib/data.ts
components/
  layout/           Header, Footer and the page shell
  sections/         Hero, About, Experience, Projects, Skills, Education, Publications, Contact
  ui/               Shared primitives: Badge, Button, Card, Section
lib/
  data.ts           All site content
public/
  resume.pdf        Downloadable résumé
```

## Updating content

All content (profile, experience, projects, skills, education, publications, articles) lives in [`lib/data.ts`](lib/data.ts). Components in `components/sections` only render it, so most updates never touch a component.

- **Add a project:** append to `projects`. Set `featured: true` to show it under the default "Featured" filter.
- **Add a job:** prepend to `experience`. Mark the current role with `current: true`.
- **Update the résumé:** replace `public/resume.pdf`.
- **Colours and fonts:** edit the tokens at the top of [`app/globals.css`](app/globals.css).

## Build and deploy

```bash
npm run build
```

The whole site prerenders as static content (`○ /` in the build output), so it deploys to Netlify or Vercel with the default Next.js settings.
