# TB Welding — Web Presence for NDT & Welding Services

[![Node.js CI](https://github.com/APoukar/tb-welding/actions/workflows/ci.yml/badge.svg)](https://github.com/APoukar/tb-welding/actions/workflows/ci.yml) [![Coverage Status](https://codecov.io/gh/APoukar/tb-welding/branch/main/graph/badge.svg)](https://codecov.io/gh/APoukar/tb-welding)

TB Welding is a small information site for NDT (non‑destructive testing) and welding services. It is built with React, TypeScript and Vite and demonstrates a simple, responsive single‑page layout with MUI components, animated sections, and accessible UI.

Key features
- Hero / Welcome section with background image and headline
- Menu with smooth navigation (using refs + scrollIntoView)
- Services page describing UT / MT / VT and welding work
- About page and Contact page with phone / email links
- Responsive layout using Material UI (MUI)
- Simple animation when sections enter the viewport (ScrollTrigger)
- Unit and component tests using Vitest + React Testing Library
- Coverage reporting to Codecov via CI

Tech stack
- Vite + React + TypeScript
- Material UI (@mui/material + @mui/icons-material)
- Vitest + @testing-library/react + @testing-library/jest-dom
- Codecov for coverage
- GitHub Actions for CI

Getting started (local)
1. Clone the repo:
   git clone https://github.com/APoukar/tb-welding.git;
2. Install dependencies:
   npm ci;
3. Start dev server:
   npm run dev;
   Open http://localhost:5173 in your browser;

Build & preview
- Build for production:
  npm run build;
- Preview production build locally:
  npm run preview;

Testing
- Run tests (watch):
  npm run test;
- Run tests and generate coverage:
  npm run coverage;
  Generated lcov report is available under ./coverage/lcov.info;

CI / Coverage
- The existing workflow runs tests and uploads coverage to Codecov.
- Add a `CODECOV_TOKEN` secret to GitHub to allow uploads.
- The badge in this README is updated automatically by Codecov.

Project structure (high level)
- src/views — pages (Welcome, Services, AboutMe, Contacts, Menu)
- src/components — shared UI components (headline, menu item, boxes)
- src/contexts — HeadlineContext for section refs used by navigation
- src/views/tests & src/components/tests — Vitest unit tests
- tsconfig.app.json + vite.config.ts — TypeScript path aliases + tsconfigPaths plugin for Vite

Contributing
- Open issues or PRs for improvements, bug fixes or test coverage increases.
- Follow repository lint rules and run tests locally before submitting a PR.