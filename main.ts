import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh entry — one funny line, at most 140 characters.
// Judge brief: a stand-up comedy editor weighing the laugh first, then
// the turn, the tightness, the freshness and the clarity.
// Chosen line: the smartwatch praises 10,000 steps, and the turn is that
// every step was pacing in circles while the build failed — the fitness
// win is really a debugging failure, and "in circles" lands the futility.
// The line is 99 characters, inside the 140-character gate.
const LINE =
  "My smartwatch praised my 10,000 steps today — all of them pacing in circles while the build failed.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
