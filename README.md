# Luma Learning — Buzzvel frontend challenge

One complete responsive page built from the supplied desktop and mobile [Figma design](https://www.figma.com/design/qTt9irBIuEQbjsnSwnAbPC/Buzzvel-FE---Test-2026--Copy-?node-id=0-1), using **Next.js App Router, TypeScript and Tailwind CSS**.

## Install, run and build

Use **Node.js 24** and npm (`nvm use` if available). No environment variables, API keys or backend are required.

```bash
npm ci
npm run dev
```

Open **http://localhost:3000**. For production, stop the development server and run:

```bash
npm run build
npm start
```

Use `npm run dev -- --port 3001` if port 3000 is occupied.

| Command | Purpose |
| --- | --- |
| `npm run check` | Lint, strict types, unit tests, asset integrity, Next.js build and Storybook build |
| `npm test` | Five contact-validation tests with Node’s built-in runner |
| `npm run storybook` | Component catalogue at http://localhost:6006 |
| `npm run build-storybook` | Static catalogue in `storybook-static/` |
| `npm run audit:lighthouse` | Mobile and desktop reports against a running production server; local Chrome required |

Individual `lint`, `typecheck` and `verify:assets` commands are also available. The committed lockfile pins dependencies.

## Key decisions

- `src/app/page.tsx` composes named server-rendered sections. Only the mobile menu, dialog and form opt into client rendering. State stays with its interaction; this page does not need a global store or backend.
- Typed content is in `src/app/_data/`, shared primitives in `src/components/ui/`, and pure validation in `src/lib/`. Design tokens and responsive rules live in `src/app/globals.css`.
- All 32 original Figma exports are local. `next/image` reserves image space, prioritizes the hero and lazily loads lower images. `next/font/local` self-hosts both variable fonts.
- Layout uses normal flow and grid at mobile, tablet and desktop widths. It follows both reference frames while allowing text to grow without clipping.
- Main links use real section anchors. No prototype destinations were supplied, so course/category buttons open local previews. Account and information buttons explain the demo scope.
- Contact validation reports associated field errors and focuses the first invalid input. Valid submissions explicitly say **nothing was sent or saved**.
- Native dialogs provide modal semantics, with explicit focus wrapping and restoration. Semantic landmarks, labels, alt text, visible focus, a skip link and reduced-motion CSS are included.

The few source corrections—step numbering, consistent English form text and small contrast adjustments—are documented in [design notes](docs/design-notes.md).

## Checks and known gaps

The production page was exercised in Chromium at 320, 402, 768, 1024 and 1280px, and at 200% zoom. Automated axe scans found no violations in the checked page/dialog states. Build, test and Storybook results, including their limits, are recorded in [verification](docs/verification.md). The catalogue includes 21 stories and eight interaction scenarios; see [Storybook usage](docs/storybook.md).

**Lighthouse results remain pending:** this environment blocks Chrome DevTools. A pinned local audit runner and [report instructions](docs/reports/README.md) are included; no performance score or screenshot is fabricated. Safari, Firefox, physical devices and a screen reader have not been tested. Automated checks do not establish full WCAG conformance.

This is a recruitment demo: accounts, playback, payments and email delivery are outside scope. Source placeholder copy and business claims are reproduced for fidelity. Metadata intentionally disables indexing. GitHub publication, deployment and submission remain with the candidate.

ESLint 9 is retained for the Next.js configuration’s plugin peer ranges despite its upstream support warning. Storybook also brings a deprecated `tsconfck` dependency. These development-tool notices do not prevent the verified builds; see the verification record before updating the toolchain.

## AI use and approximate time

ChatGPT/Codex assisted with design inspection, asset extraction, implementation, documentation and verification. Results were checked using strict types, lint, focused tests, builds, browser interaction checks and accessibility scans.

Approximately **5–6 hours of AI-assisted implementation and verification sessions**, excluding the long idle gap and the candidate’s later review/submission. This is an estimate, not a measured total of human coding hours. Update it with any subsequent work before submission.

Review the [code walkthrough](docs/code-walkthrough.md) and [requirement coverage](docs/requirements.md), run the project yourself, and be ready to explain the submitted solution. Do not commit `node_modules`, `.next` or `storybook-static`. Original design assets retain their existing rights; font licenses ship with their packages.
