# Verification record

Date: 13 November 2026. Environment: Linux, Node.js 24.22.1, npm 11.9.0, Chromium browser. Package versions are recorded in `package-lock.json`.

## Build and source checks

| Check | Result |
| --- | --- |
| Fresh dependency installation with `npm ci` | Passed; no peer-dependency overrides used |
| ESLint with Next.js core-web-vitals and TypeScript configurations | Passed with no source errors or warnings |
| Strict TypeScript and generated Next.js route types | Passed |
| Contact validation unit tests | 5 passed: valid data, empty fields, email formats, limits and non-mutation |
| Original asset integrity | All 32 local assets matched the recorded SHA-256 hashes |
| Optimized production build | Passed; `/` and the framework’s not-found page are statically prerendered |
| Production server | Opened and exercised in Chromium using the built output |
| Storybook static build | Passed; 21 stories indexed |
| Production dependency audit | `npm audit --omit=dev --audit-level=high`: 0 known vulnerabilities reported on this date |
| Lighthouse runner | Syntax, local CLI resolution and help command checked; actual audits blocked by the managed browser |

The final dependency graph also passed a fresh `npm ci` (596 packages), without peer overrides. Installation reports ESLint 9 end-of-support and Storybook's transitive `tsconfck` deprecation notices. Storybook's client-side bundler prints `use client` directive warnings; both builds complete. The README explains the lint peer constraint. The workspace npm proxy warning is host-specific and its setting is not shipped.

Storybook initially failed before building because this restricted container denies `os.networkInterfaces()` (`uv_interface_addresses`). A temporary, unshipped Node preload returned an empty interface inventory only for that denied call; no hosts or permissions were added. With that environment-only fallback, the complete `npm run check` succeeded. The delivered scripts use normal Next.js and Storybook commands and contain no environment-specific preload or preview adapter.

## Visual and responsive checks

The desktop and mobile Figma source frames were used as layout references. The browser was checked at 320, 402, 768, 1024 and 1280 CSS-pixel content widths, plus the full browser window. A temporary same-origin iframe harness provided repeatable content widths while accounting for the browser’s 15px scrollbar. The harness and audit scripts are excluded from the delivered application.

- No horizontal page overflow at the checked widths.
- Hero switches from image-first on mobile to side-by-side on desktop.
- Category cards switch between one, two and four columns.
- Feature, learning steps, statistics, collage, contact area, CTA and footer follow the source’s mobile/desktop arrangements.
- Original images load, typography resolves to the self-hosted fonts, and image dimensions/aspect ratios reserve space.
- The 320px statistics were checked after reducing the type size: each value fits its column.
- At 200% Chromium zoom, the page reflowed into its narrower layout, the viewport had no horizontal document overflow, and headings, paragraphs and controls stayed within its width. The hero and contact area were visually inspected. Zoom was restored to 100% afterward.
- The source’s fixed-height text wrappers were replaced with natural content height. At 1280px the initial page is approximately 5713px tall against the 5691px source; this is a small documented difference, not a pixel-perfect claim.

## Interaction checks

| Interaction | Observed result |
| --- | --- |
| Mobile navigation | Opens, reflects expanded state, closes with Escape and after following a link |
| Main links and CTAs | Fragment targets all resolve to real page sections |
| Category and featured-course buttons | Open the correct locally populated preview |
| Modal keyboard behavior | Initial focus on close button; forward/backward Tab wrapping; Escape closes; trigger focus restored |
| Link inside a dialog | Closes the dialog and moves focus to the destination section |
| Contact form with empty fields | Displays three field errors and focuses the name field |
| Contact form with malformed email | Displays the email error and focuses that field |
| Valid contact form | Displays explicit demo feedback that the data was neither sent nor saved |
| Account and privacy buttons | Open clear informational dialogs without dead navigation |

## Accessibility checks

axe-core 4.14.0 was run in Chromium against the production page at desktop and mobile widths using WCAG 2 A/AA, 2.1 AA and 2.2 AA tags. Final page results: **0 violations, 30 passing checks, 0 incomplete checks**. The open course dialog was also scanned: **0 violations, 17 passing checks, 0 incomplete checks**.

The scans identified small color-contrast issues and an invalid contact definition-list structure. Both were corrected and retested. Keyboard testing also led to explicit Tab wrapping in the native dialog. Focus outlines in dialogs retain sufficient contrast even when the trigger is inside a dark or blue section.

The later, broader Storybook scan identified four category buttons whose shortened `aria-label` did not include all visible label text. Removing that override preserves the native accessible name. After the correction, the full desktop canvas reported **0 violations, 39 passes, 0 inconclusive**. Both desktop and mobile page stories rendered successfully; the mobile canvas had no horizontal overflow. The final production build also showed the corrected button names.

Semantic landmarks, labels, image alternatives, focus states and a skip link were inspected. Smooth scrolling and transitions have a reduced-motion CSS override. A screen-reader session and operating-system reduced-motion toggle were not performed; this is not a complete WCAG conformance claim.

## Storybook interaction checks

Eight committed `play` scenarios were opened and showed **PASS** in the Interactions panel:

| Story | Verified behavior |
| --- | --- |
| Button / Primary | Click callback fires once |
| Dialog / Open | Named native dialog becomes visible |
| Dialog / Keyboard And Close | Initial focus, Shift+Tab/Tab wrapping, close and restored focus |
| Contact form / Required Errors | All errors shown and first invalid field focused |
| Contact form / Invalid Email | Email error shown and field focused |
| Contact form / Valid Enquiry | Truthful demo status; editing clears stale feedback |
| Mobile navigation / Expanded | Menu becomes visible |
| Mobile navigation / Escape And Link Dismissal | Escape restores trigger focus; following a link collapses the menu |

The isolated navigation story prevents default fragment navigation out of Storybook's parent-targeted iframe; the component's real dismissal handler executes. Actual page destinations were checked separately. Storybook play tests run in the UI, not through `npm run check` or an unattended test runner.

## Lighthouse status

The native Chromium UI displayed **“Your organization has blocked the use of DevTools on this page”** when the Lighthouse/DevTools route was attempted. The browser restriction was respected. No score or Lighthouse screenshot is available. `npm run audit:lighthouse` and `docs/reports/README.md` provide a reproducible local mobile/desktop audit using pinned Lighthouse 13.6.0. Running that command requires a normal local Chrome installation and the production server; it was not run here.

## Practical limits

- Browser verification was performed in Chromium, not a Safari/Firefox/mobile-device matrix.
- These are focused unit tests, Storybook interaction scenarios and recorded manual browser checks, not an unattended end-to-end suite.
- No Lighthouse score, real-user performance metric or production traffic benchmark is claimed.
- No backend delivery, account creation, payment or course playback service exists in this scope.
- No repository, public deployment or challenge submission was created by exporting this source archive.
