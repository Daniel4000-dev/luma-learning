# Component catalogue

Run `npm run storybook` and open http://localhost:6006. `npm run build-storybook` creates a portable static catalogue in `storybook-static/`; serve that directory over HTTP rather than opening its HTML directly from disk. The production application does not import the catalogue.

## Included stories

| Group | Stories | What to review |
| --- | --- | --- |
| Foundations / Design tokens | Overview | Source palette and typography |
| Components / Button | Primary, Secondary, Yellow, Text, Navigation Link | Variants, native button/link semantics and click callback |
| Components / Section heading | Default, Centered, On Blue | Reusable heading styles |
| Components / Dialog | Closed, Open, Keyboard And Close | Opening, initial focus, bidirectional Tab wrapping, close and focus restoration |
| Forms / Contact form | Empty, Required Errors, Invalid Email, Valid Enquiry | Accessible field errors, focus and truthful demo feedback |
| Navigation / Mobile navigation | Collapsed, Expanded, Escape And Link Dismissal | Expanded state, Escape and link dismissal |
| Pages / Landing page | Desktop, Mobile | Complete composition at the source frame widths |

The eight stories with `play` functions run their interactions when opened. Select the **Interactions** panel to inspect each assertion and its PASS/FAIL result. The Accessibility panel offers an additional axe check for the active canvas. The full production-page axe results are recorded separately in `verification.md`.

These are browser-run component scenarios, not an unattended CI end-to-end suite. `npm run check` builds the catalogue but does **not** execute its browser interactions. `npm test` runs the separate validation unit tests.

Stories reuse the real application components and local assets. Fonts use the same Fontsource packages; Next Image is adapted by the official Next.js/Vite integration. Documentation renders stories in separate iframes so repeated form IDs cannot collide. The isolated mobile-menu story prevents default anchor navigation because Storybook targets the parent frame; the real component’s click/dismiss handler still executes. Production-page anchors were checked separately against real destinations.

Storybook renders the page in a client canvas. Use `npm run build` and `npm start` for actual server-component behavior and performance measurements. The story catalogue is not a substitute for that production check.
