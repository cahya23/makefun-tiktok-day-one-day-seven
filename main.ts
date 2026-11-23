// Entry program for the make.fun "Day one, day seven" TikTok bounty.
// Node 22, standard library only. The entry itself is the video: this
// program only hands the grader the video's address, by copying
// VIDEO.json from the repository into the output directory, byte for
// byte, so the two grader runs always write identical output. Nothing
// else is written, and nothing about the video is scored from here — the
// house reads the video's views and interactions from TikTok directly.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
} catch (error) {
  console.error(`Could not copy VIDEO.json out of ${botDir}: ${error.message}`);
  process.exit(1);
}
