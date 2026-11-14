# Design decisions

## Reference and assets

- Desktop frame: `2:7`, 1280 × 5691.4385.
- Mobile frame: `2:4195`, 402 × 7798.8711.
- Both frames were inspected for layout, typography, image placement and interactions. Neither frame contained prototype reactions.
- 56 asset references across the two frames resolve to 32 unique exported binaries. All are bundled locally. `asset-manifest.json` records their original hashes, dimensions and source node IDs.
- Exported files were identified by content, not URL extension. JPEG payloads have `.jpg` filenames. Original binaries and SVG geometry were retained.
- The ten community photographs retain their individual crops and responsive positions. The faint geometric decorations use the exported SVGs and CSS primitives present in the source design.

## Responsive behavior

The content container has 20px mobile gutters, 32px tablet gutters and up to 80px desktop gutters. At 1024px, the main layouts switch to their desktop arrangements; category cards use an intermediate two-column layout from 640px. Mobile puts the hero photograph above the copy, stacks the feature and contact areas, arranges statistics horizontally and hides the final CTA’s decorative shapes.

Section heights are driven by content and padding. The source contains fixed-height text wrappers that are a few pixels shorter than their line boxes. These were not reproduced as clipping constraints. The exported implementation is consequently a few pixels taller in some sections, particularly the category cards. This preserves legibility with text scaling and longer content.

The source’s featured-course columns extend 16px beyond the standard desktop content grid; this is preserved through that section’s wider container. Layout remains bounded at narrower widths. The statistics use slightly smaller type below the design’s mobile width to prevent overlap at 320px.

## Intentional corrections

1. Desktop learning steps all say “Step 01”; they are numbered 01, 02 and 03 consistently.
2. Mobile and desktop contact placeholders differ in language. The implementation uses consistent English labels and feedback.
3. The small gray-on-warm text and pale text on blue measured just below 4.5:1 contrast. Learning-step labels, response-time text and input placeholders use the darker existing gray; the featured link uses white.
4. Desktop and mobile secondary wording has minor inconsistencies. One canonical course description and community CTA is used across breakpoints.
5. No prototype destinations were supplied. Main navigation uses page anchors; category/course buttons open clearly identified local previews; account and informational links open small explanatory dialogs.
6. Category-card buttons derive their accessible names from their visible contents. A shortened `aria-label` was removed after the broader Storybook scan flagged a visible-label mismatch; this also helps speech-input users.

The original community placeholder paragraph, rating, testimonial, learner counts and email address remain visible to match the design. They should be replaced with approved content before any real commercial launch.

## Boundaries and tradeoffs

This is a statically prerendered marketing page with isolated client interactions. It deliberately has no global state layer or API abstraction until a real shared-state or service requirement exists. Local course data is typed and separated from layout to make later replacement straightforward.

Contact validation does not deliver messages. It checks the locally entered values, reports errors accessibly and explicitly states that valid demo data has not been sent or saved. A production endpoint would need independent server validation, abuse controls, delivery handling and appropriate consent/retention decisions.

Native `<dialog>` supplies modal semantics and makes the rest of the document inert. Small explicit Tab handling provides predictable focus wrapping across iframe and browser behavior. Escape, close-button and backdrop dismissal restore focus; following an in-page link moves focus to the destination section.
