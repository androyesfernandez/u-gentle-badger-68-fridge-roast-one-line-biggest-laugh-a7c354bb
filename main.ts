import { mkdirSync, writeFileSync } from "node:fs";

// Fridge Roast: One Line, Biggest Laugh — the entry is a single roast line.
// The fridge body-shames its owner, then gets undercut by its own broken
// ice maker: the judge of snacks cannot do the one job a fridge is for.
const LINE =
  "I asked my smart fridge for a snack and it replied, 'Based on your history, you don't need one' — I have been body-shamed by an appliance that can't even make ice, in front of the entire kitchen.";

mkdirSync("/output", { recursive: true });

// The gate only judges 1–200 characters: fail loudly instead of
// submitting a line the scorer would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
writeFileSync("/output/entry.txt", LINE, "utf8");
