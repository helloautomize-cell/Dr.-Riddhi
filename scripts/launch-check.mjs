#!/usr/bin/env node
/**
 * Launch gate — fails while unresolved [CONFIRM] facts remain.
 *
 * Scans app/, components/ and lib/ for <Confirm usages. Each one marks a
 * fact the clinic has not yet signed off (see lib/site-config.ts TODO_CONFIRM).
 * The site must not go indexable until this passes; also verifies
 * SITE_INDEXABLE is explicitly set.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const SCAN_DIRS = ["app", "components", "lib"];
const EXT = /\.(tsx?|jsx?)$/;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "node_modules" || name.startsWith(".") || name === "_") continue;
      yield* walk(p);
    } else if (EXT.test(name)) yield p;
  }
}

const hits = [];
for (const d of SCAN_DIRS) {
  const abs = join(ROOT, d);
  for (const f of walk(abs)) {
    const src = readFileSync(f, "utf8");
    const lines = src.split("\n");
    lines.forEach((line, i) => {
      if (/<Confirm\b/.test(line) && !/components\/Confirm\.tsx/.test(f.replace(/\\/g, "/"))) {
        hits.push(`${relative(ROOT, f)}:${i + 1}  ${line.trim().slice(0, 90)}`);
      }
    });
  }
}

console.log("launch-check: unresolved [CONFIRM] scan");
if (hits.length) {
  console.log(`\n  FAIL — ${hits.length} unconfirmed fact(s) still in code:\n`);
  hits.forEach((h) => console.log("   " + h));
  console.log("\n  Resolve every item in lib/site-config.ts TODO_CONFIRM,");
  console.log("  replace <Confirm> chips with the confirmed fact, then re-run.\n");
  process.exit(1);
}

if (process.env.SITE_INDEXABLE !== "1") {
  console.log("\n  FAIL — SITE_INDEXABLE is not set to 1.");
  console.log("  Set it only when the clinic has confirmed every fact and");
  console.log("  approved all AI-assisted images in writing.\n");
  process.exit(1);
}

console.log("\n  PASS — no unconfirmed facts, indexable flag set.\n");
