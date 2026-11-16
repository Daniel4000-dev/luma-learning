# Lighthouse Audits

This directory contains automated Lighthouse performance, accessibility, best practices, and SEO audit configurations for Luma Learning.

## Running Audits Locally

The repository includes a dedicated Lighthouse audit script (`scripts/lighthouse.mjs`) configured with pinned Lighthouse 13.6.0.

### Prerequisites

Ensure you have a production build running locally:

```bash
npm run build
npm start
```

### Executing the Audit

In a separate terminal, trigger the automated audit run:

```bash
npm run audit:lighthouse
```

To target a different port or a deployed preview URL:

```bash
npm run audit:lighthouse -- http://localhost:3001
```

## Generated Reports

The script runs both mobile (Moto G Power simulation) and desktop configurations, outputting:
- `lighthouse-mobile.report.html` and `.json`
- `lighthouse-desktop.report.html` and `.json`

*Note: The demo uses `noindex` metadata to prevent test indexing, which is intentionally reflected in the SEO audit.*
