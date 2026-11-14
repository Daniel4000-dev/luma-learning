import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const root = new URL("../", import.meta.url);
const manifest = JSON.parse(await readFile(new URL("docs/asset-manifest.json", root), "utf8"));
for (const asset of manifest.assets) {
  const bytes = await readFile(new URL(asset.file, root));
  const hash = createHash("sha256").update(bytes).digest("hex");
  if (!bytes.length || hash !== asset.sha256) throw new Error(`Missing or changed Figma asset: ${asset.file}`);
}
console.log(`Verified ${manifest.assets.length} original Figma assets.`);
