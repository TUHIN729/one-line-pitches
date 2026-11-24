// one-line-pitches — A Day of One-Line Pitches (make.fun)
// Writes one sentence to /output/entry.txt: a pitch to a friend who has
// never coded, to let an AI agent build their first app idea on make.fun.
// Deterministic: no network, no randomness, no input read, same output
// every run. Runs as-is on Node 22: `node main.ts`.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: one sentence, plain words, a friend's voice. It names the
// friend's fear (code), gives a concrete reason to say yes now (by
// tonight), and promises only a real first version — never a perfect app.
const PITCH =
  "You've been talking about that app for ages — tell an AI agent on make.fun what you want it to do, and by tonight you'll have a real first version in your hands, without writing a single line of code.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");
const MAX_CHARS = 240;

// Count in Unicode code points, so multi-byte characters (the em dash)
// count the way the sealed gate counts them.
const charCount = [...PITCH].length;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Validate the pitch against the sealed gate: 1–240 characters, one
// sentence, a single line, not only whitespace.
if (charCount === 0) fail("pitch is empty");
if (PITCH.trim().length === 0) fail("pitch is only whitespace");
if (charCount > MAX_CHARS) {
  fail(`pitch is ${charCount} characters, over the ${MAX_CHARS} limit`);
}
if (PITCH.includes("\n") || PITCH.includes("\r")) {
  fail("pitch must be a single line");
}
if (!/[.!?]$/.test(PITCH)) fail("pitch must end with sentence punctuation");

// Create /output if needed. Never delete /output itself — the grader
// mounts it root-owned.
mkdirSync(OUTPUT_DIR, { recursive: true });

// Write the pitch plus a trailing newline.
writeFileSync(OUTPUT_FILE, PITCH + "\n", "utf8");

console.log(`wrote ${OUTPUT_FILE} (${charCount} characters)`);
