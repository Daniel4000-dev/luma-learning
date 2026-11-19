# Luma Learning — Buzzvel Frontend Challenge

A responsive, high-performance landing page built to pixel-perfection from the supplied desktop and mobile [Figma design](https://www.figma.com/design/qTt9irBIuEQbjsnSwnAbPC/Buzzvel-FE---Test-2026--Copy-?node-id=0-1) using **Next.js App Router, TypeScript, and Tailwind CSS**.

## Installation, Development & Build

This project requires **Node.js 20+** (tested on Node 20 and 24) and npm (`nvm use` if using nvm). No external API keys or backend services are needed.

```bash
# Install dependencies
npm ci

# Start development server
npm run dev
```

Open **http://localhost:3000** in your browser.

### Production Build & Test Scripts

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

| Command | Purpose |
| --- | --- |
| `npm run check` | Runs complete verification suite: linter, typecheck, unit tests, asset verification, Next.js build, and Storybook build |
| `npm test` | Runs unit tests for contact form validation rules |
| `npm run storybook` | Starts local Storybook component catalogue at http://localhost:6006 |
| `npm run build-storybook` | Generates static Storybook catalogue in `storybook-static/` |
| `npm run audit:lighthouse` | Executes local mobile and desktop Lighthouse audits against a running server |

## Key Architectural Decisions

- **Server Component First Architecture**: `src/app/page.tsx` composes server-rendered sections. Interactivity is isolated strictly to client leaves (`MobileNavigation`, `DialogButton`, and `ContactForm`). State remains encapsulated at the component level without unnecessary global state bloat.
- **Modular Code Organization**: Typed mock data in `src/app/_data/`, shared atomic UI primitives in `src/components/ui/`, pure validation logic in `src/lib/`, and design tokens in `src/app/globals.css`.
- **Local Asset & Typography Optimization**: All 32 original Figma images and SVGs are bundled locally and verified by checksums. `next/image` handles responsive sizing with priority hero preloading. Fonts are self-hosted via `@fontsource-variable` to eliminate external network waterfalls.
- **Fluid & Accessible Layouts**: Flexible grid and flex layouts that fluidly scale across mobile, tablet, and desktop viewports without clipping text on zoom (tested up to 200%).
- **Native Accessible Dialogs**: Native HTML `<dialog>` elements provide accessible modals with automatic background inertia, bidirectional tab focus wrapping, and clean focus restoration on close.
- **Accessible Form Validation**: Pure client-side validation that maps field errors directly to inputs via `aria-describedby` and automatically shifts focus to the first invalid field upon submission.

Full architectural details and design rationale are documented in:
- [Architecture Overview](docs/architecture.md)
- [Design Decisions & Intentional Fixes](docs/design-notes.md)
- [Requirement Traceability](docs/requirements.md)
- [Verification Record](docs/verification.md)

## Checks & Known Gaps

- **Cross-Viewport Testing**: Verified across 320px, 402px, 768px, 1024px, 1280px widths, and 200% zoom reflow.
- **Accessibility**: Zero violations detected by automated `@storybook/addon-a11y` (axe-core) scans on primary states and dialogs. Includes semantic landmarks, visible focus states, skip-to-content links, and `prefers-reduced-motion` compliance.
- **Demo Scope Boundaries**: Accounts, course video playback, and email dispatch are simulated client-side. The contact form validates inputs and provides transparent feedback that data is not retained. Search engine indexing is disabled via `robots: { index: false, follow: false }` for demo purposes.

## AI Tools Used & Time Allocation

In accordance with Buzzvel's challenge guidelines:
- **AI Tooling**: AI assistance (Claude / ChatGPT) was utilized as an accelerator for Figma asset extraction, scaffolding unit tests, and cross-checking accessibility patterns. All architectural boundaries, layout tokens, and interactive logic were structured, reviewed, and verified by me.
- **Approximate Time Spent**: Approximately **10–12 hours** in total, distributed across focused sessions between initial implementation, responsiveness testing down to 320px, Storybook component cataloging, UX refinements, and walkthrough recording.
