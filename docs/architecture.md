# System Architecture & Technical Walkthrough

This document outlines the architectural decisions, component hierarchy, data flow, and runtime boundaries implemented in Luma Learning.

## 1. Page Composition & Layout Shell

- `src/app/page.tsx` acts as the root orchestrator composing the landing page sections: Header, Hero, Course Categories, Featured Course, Learning Steps (How It Works), Testimonial/Metrics, Community Collage, Contact Area, Final CTA, and Footer.
- `src/app/layout.tsx` configures global HTML structure, variable font definitions via `next/font/local`, OpenGraph/Twitter social metadata, and accessibility primitives like the `#main-content` skip link.
- The route is completely statically prerendered (`○ (Static)`); no runtime server fetches or database dependencies are required to serve the initial page shell.
- Single unified responsive layout: Rather than maintaining separate mobile and desktop component trees, responsive CSS transforms layout flow, grid columns, typography scales, and element ordering across standard breakpoints.

## 2. Server vs. Client Component Boundaries

The project strictly adheres to the principle of minimizing client-side JavaScript:

- **Server Components by Default**: The majority of sections (`HeroSection`, `CourseCategories`, `FeaturedCourse`, `HowItWorks`, `SocialProof`, `Community`, `FinalCta`, `SiteFooter`) remain React Server Components.
- **Scoped Client Islands**: Only components requiring browser APIs, event listeners, or local state opt into `"use client"`:
  - `MobileNavigation`: Manages drawer state, focus lock, and escape key listener.
  - `DialogButton`: Wraps the native HTML `<dialog>` element with keyboard traps, inert backdrop handling, and focus restoration.
  - `ContactForm`: Manages uncontrolled input state, client-side validation lifecycle, and accessible feedback alerts.

Because Server Components can pass server-rendered JSX into a Client Component via `children`, parent sections do not need to be marked `"use client"` to house interactive modals.

## 3. Form Handling & Validation Lifecycle

The contact form implementation prioritizes simplicity, accessibility, and zero-bloat state management:

1. **Uncontrolled Native Inputs**: Utilizes standard uncontrolled HTML input elements with descriptive `<label>`, `autocomplete`, and HTML5 constraint attributes.
2. **Submit Interception**: On submit, `FormData` extracts values cleanly without re-rendering on every keystroke.
3. **Pure Validation Engine (`src/lib/contact-validation.ts`)**: Decoupled from the DOM and tested in isolation. Returns typed error records while enforcing bounds and trimming whitespace.
4. **Accessible Error Reporting**: If validation fails, error states are surfaced immediately, linked to inputs via `aria-describedby`, flagged with `aria-invalid="true"`, and the first invalid field is auto-focused.
5. **Clear Feedback State**: On valid submission, an accessible notification confirms input validity while transparently informing the user that no data was transmitted or retained.

## 4. Native Dialogs & Accessible Focus Management

Modal previews avoid heavy external UI libraries by leveraging the native HTML `<dialog>` element:

- **Modal Lifecycle**: Controlled via ref calls to `dialog.showModal()` and `dialog.close()`, which automatically makes background elements inert to assistive tech.
- **Focus Management**:
  - Automatically focuses the primary close control upon opening.
  - Explicit keyboard handler traps `Tab` navigation strictly within dialog boundaries in both directions (`Tab` and `Shift + Tab`).
  - Native `Escape` listener dismisses the modal and reliably restores focus to the invoking trigger button.
- **Deep Anchors**: Clicking in-page anchor links inside informational modals gracefully dismisses the dialog and transitions focus directly to the target landmark.

## 5. Styling, Tokens & Asset Pipeline

- **Design System (`src/app/globals.css`)**: Built with Tailwind CSS v4 `@theme` directives defining the color palette, font families, and responsive spacing scale derived directly from the Figma specification.
- **Asset Integrity**: All 32 visual assets (SVGs and photography) are exported locally and tracked in `docs/asset-manifest.json` with SHA-256 hashes, eliminating runtime dependency on Figma URLs.
- **Image Optimization**: `next/image` handles responsive `srcset` generation and layout reservation. The hero visual is designated `priority` to protect Largest Contentful Paint (LCP), while below-the-fold media loads lazily.
- **Variable Fonts**: Self-hosted `@fontsource-variable/inter` and `@fontsource-variable/plus-jakarta-sans` eliminate third-party CDN latency and layout shifts.
- **Reduced Motion**: Explicit `@media (prefers-reduced-motion: reduce)` rules disable smooth scrolling and transitions for users requesting low-motion experiences.

## 6. Testing & Quality Assurance

- **Unit Testing**: Node's native test runner (`node --import jiti/register --test`) tests input validation, boundary values, and immutability with zero external runtime overhead.
- **Storybook 10**: Houses 21 stories across design tokens, atomic UI primitives, navigation, forms, and full page compositions, complete with automated `@storybook/addon-a11y` checks.
- **Verification Matrix**: Comprehensive visual, zoom (200%), keyboard, and responsive regression testing documented in `docs/verification.md`.
