# Code walkthrough

Use this guide to review and explain the implementation; read the files and try the behavior before submitting.

## Start with the page

`src/app/page.tsx` composes the header, hero, categories, featured course, learning steps, testimonial/statistics, community, contact, final CTA and footer. `layout.tsx` supplies metadata, language, font variables and the skip link. The route is statically prerendered; no data request is needed to render it.

The separate desktop and mobile Figma frames represent the same page. Responsive CSS changes order, columns, padding and type size. The page is not duplicated into separate mobile and desktop component trees.

## Explain the server/client boundary

Most files have no `use client` directive. Their content can render on the server. `MobileNavigation`, `DialogButton` and `ContactForm` need state, events or browser APIs and explicitly opt into client rendering. A server section can pass rendered content into the client dialog’s `children`; the entire parent section does not have to become a client component.

This reduces application JavaScript and keeps state ownership clear. Next.js and `next/image` also supply their own framework code, so “three authored client components” does not mean only three modules reach the browser.

## Follow the form data

1. The user types into native uncontrolled inputs with labels, autocomplete hints and length limits.
2. On submit, `FormData` reads the current values. No request is sent.
3. `validateContact` returns a typed object of errors, without mutating the input. It trims values for validation and checks required fields, email format and limits.
4. React displays the errors, associates each through `aria-describedby`, sets `aria-invalid`, and focuses the first invalid field.
5. Valid values produce a polite status message explicitly explaining the demo behavior. Editing clears that confirmation.

Client validation improves feedback; it is not a security boundary. For real delivery, add a server action/endpoint with independent validation, abuse controls, delivery error handling and an agreed data-retention policy. Do not replace the demo message with “sent” until a real operation succeeds.

## Follow a dialog interaction

`DialogButton` uses refs to call native `showModal()` and `close()`. `useId` associates each dialog with its own title. Opening makes the background inert and focuses the close control. Explicit Tab handling wraps between the first and last visible controls. Escape uses native dialog behavior; close/backdrop dismissal restores trigger focus. Following a section link closes the dialog and focuses its destination instead.

The native element avoids introducing an overlay library for a small scope. Its behavior was checked with a keyboard, including inside the component catalogue.

## Explain styling and assets

Shared design tokens in `globals.css` define color, fonts and recurring sizes. Tailwind utilities express section layout; custom classes cover repeated patterns and more detailed responsive arrangements. Use semantic markup before adding ARIA. Decorative graphics have empty alternatives; meaningful photos and the collage have descriptions.

The 32 original assets are identified and hashed in `docs/asset-manifest.json`. They do not depend on expiring Figma URLs. Next Image creates appropriately sized modern formats, the hero is prioritized, and lower images are lazy. Local variable fonts reserve consistent typography and avoid a third-party font request. Reduced-motion rules remove smooth scrolling and transitions.

## Know what the tests prove

Five unit tests exercise valid data, whitespace, malformed email, exact length boundaries and input non-mutation. Eight Storybook play scenarios exercise button, dialog, form and mobile-menu interactions. Lint/types/builds catch different classes of source and integration errors. Browser checks cover responsive composition and keyboard behavior; axe covers a limited set of automated accessibility rules.

None of those proves real-world speed, every browser, screen-reader usability or production backend behavior. Lighthouse is configured but its reports remain pending because the managed browser blocks DevTools. Explain that gap directly.

## Useful changes to practice

- Add a new category to the typed data and explain why the component does not need another copy.
- Change a design token and trace which elements inherit it.
- Adjust a validation limit and run the boundary test.
- Open a dialog using only the keyboard and show where focus returns.
- Explain why global state, authentication and a CMS were unnecessary for this brief.
- Identify the metadata/content changes needed before a real commercial launch.
