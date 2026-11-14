import { mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const usage = "Usage: npm run audit:lighthouse -- [http://localhost:3000]\nStart the production server first: npm run build && npm start\nRequires a local Chrome/Chromium installation. Saves mobile and desktop HTML + JSON reports.";
const args = process.argv.slice(2);
if (args.includes("--help")) {
  console.log(usage);
  process.exit(0);
}
if (args.length > 1) throw new Error(usage);
const url = new URL(args[0] ?? "http://localhost:3000");
if (!["http:", "https:"].includes(url.protocol)) throw new Error("Use an HTTP or HTTPS URL.");
if (url.username || url.password) throw new Error("Use a URL without embedded credentials.");

// The pinned local CLI is executed directly, without a shell or global install.
const require = createRequire(import.meta.url);
const cli = require.resolve("lighthouse/cli/index.js");
const reports = fileURLToPath(new URL("../docs/reports/", import.meta.url));
await mkdir(reports, { recursive: true });

for (const mode of ["mobile", "desktop"]) {
  const output = fileURLToPath(new URL(`../docs/reports/lighthouse-${mode}`, import.meta.url));
  const flags = [url.href, "--chrome-flags=--headless", "--no-enable-error-reporting", "--output=html", "--output=json", `--output-path=${output}`];
  if (mode === "desktop") flags.push("--preset=desktop");
  console.log(`Running Lighthouse ${mode} against ${url.href}`);
  const code = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [cli, ...flags], { stdio: "inherit" });
    child.once("error", reject);
    child.once("exit", (code, signal) => resolve(signal ? 1 : code ?? 1));
  });
  if (code !== 0) process.exit(code);
}
console.log("Saved both audits to docs/reports/. Open the HTML reports and capture the score summary for submission.");
