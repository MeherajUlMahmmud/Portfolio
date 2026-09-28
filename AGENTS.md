# Repository Guidelines

## Project Structure & Module Organization

`app/` contains Next.js routes and global styles. `components/layout/`, `components/sections/`, and `components/ui/` separate shell, page sections, and reusable elements. Edit portfolio content in `lib/data.ts`; images, videos, and the résumé live in `public/`.

## Build, Test, and Development Commands

Run commands from this project directory. `npm ci` installs locked dependencies; `npm run dev` starts local development; `npm run build` produces the production build; `npm run lint` checks ESLint rules.

## Coding Style & Naming Conventions

Use TypeScript, two-space indentation, PascalCase React components, and camelCase functions. Match nearby quote and semicolon conventions. Keep reusable logic outside page components and use the configured ESLint rules; avoid unrelated formatting changes.

## Testing Guidelines

No automated test script is configured. Run lint and a production build, then inspect desktop and mobile layouts, project media, navigation, and the résumé link. Do not describe a successful build as unit-test coverage.

## Commit & Pull Request Guidelines

Recent commits use imperative descriptions such as “Update experience highlights and trim project list.” Keep commits focused on one change. In pull requests, explain the problem, resulting behavior, and validation performed; link an issue when applicable. Include screenshots for visible UI changes and call out configuration or migration changes. These are contributor expectations, not a claim of enforced branch rules.

## Configuration & Data

Use the Node version in `.nvmrc`. Preserve existing content fields and verify asset paths after replacing media. Read installed Next.js documentation under `node_modules/next/dist/docs/` before changing framework APIs.
