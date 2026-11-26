// Out of Tokens, Mid-Sentence — make.fun entry
// Reads the one-line error message from entry.txt and writes it to
// <output-dir>/entry.txt for the sealed scorer to judge.
// Standard library only; runs on Node 22.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

// Resolve the output directory: the grader's writable output dir first,
// then the bot dir, then the sandbox default /output.
function resolveOutputDir(): string {
  const candidates = [
    process.env.MAKEFUN_OUTPUT_DIR,
    process.env.MAKEFUN_BOT_DIR,
    "/output",
  ];
  for (const candidate of candidates) {
    if (candidate && candidate.trim().length > 0) {
      return candidate;
    }
  }
  return "/output";
}

function main(): void {
  const entryPath = resolve(here, "entry.txt");
  const raw = readFileSync(entryPath, "utf8");
  // Strip every trailing line break (the file may end with more than one)
  // but keep every other character byte-for-byte: the judged text is
  // exactly what remains.
  const line = raw.replace(/(\r?\n)+$/, "");

  if (line.length < 1 || line.length > 140) {
    throw new Error(
      `entry.txt must be 1 to 140 characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry.txt must not be only whitespace");
  }
  if (/[\n\r\t]/.test(line)) {
    throw new Error("entry.txt must be a single line with no control characters");
  }

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");
  console.log(`Wrote ${line.length} characters to ${outPath}`);
  console.log(line);
}

main();
