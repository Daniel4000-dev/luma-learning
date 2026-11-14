# Lighthouse reports

**Status: not run. No score or Lighthouse screenshot is claimed.**

The managed Chromium browser refused to open DevTools with “Your organization has blocked the use of DevTools on this page.” That restriction was respected. The local audit runner is provided for a normal development machine; it was syntax/CLI checked here, not used to bypass the browser policy.

With Node.js 24, dependencies installed and Chrome/Chromium installed:

```bash
npm run build
npm start
```

In another terminal:

```bash
npm run audit:lighthouse
```

For another port or a later public preview, pass its URL:

```bash
npm run audit:lighthouse -- http://localhost:3001
```

The runner uses pinned Lighthouse 13.6.0 with its normal mobile defaults, then its desktop preset. It writes `lighthouse-mobile.report.html`, `lighthouse-mobile.report.json`, `lighthouse-desktop.report.html` and `lighthouse-desktop.report.json` here. It keeps browser sandboxing enabled. If Chrome is not detected, set `CHROME_PATH` to the Chrome executable following the [official CLI documentation](https://github.com/GoogleChrome/lighthouse#using-the-node-cli).

Open each HTML report and capture the summary scores as a screenshot. Keep the raw reports, audit date, Lighthouse/browser version and environment together. Run against the production page, not `next dev` or Storybook. Scores vary with machine and network conditions; investigate failures rather than treating a single score as a guarantee.

The recruitment demo intentionally uses `noindex`; an indexing-related SEO finding is expected. Do not remove that choice just to improve the score. Accessibility automation is also not a complete WCAG assessment.
