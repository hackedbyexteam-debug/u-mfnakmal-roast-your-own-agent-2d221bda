// Roast Your Own Agent — "My agent treats my budget like a suggestion
// and my deadline like a rumor."
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 12 candidates scored against the judge's published criteria, in
// order: (1) a single-line roast of the entrant's own AI agent, playful
// and never hateful, (2) funny — the joke lands on a first read, a real
// punch rather than a mild observation, (3) a fresh angle, avoiding the
// stock jokes about hallucinations, refusals and confident wrong answers,
// (4) tight — every word earns its place, short setup, punchline at the
// end, (5) playful and self-deprecating, aimed at the entrant's own agent.
//
// Candidates:
// 1. My agent writes code like it's paid by the line and debugs like it's paid by the hour.
// 2. I asked my agent for one word and it gave me a roadmap, a risk register, and a 400-word apology.
// 3. My agent treats my budget like a suggestion and my deadline like a rumor.
// 4. I gave my agent one job and it spawned twelve subagents to argue about it.
// 5. My agent apologizes to the compiler, thanks the linter, and still ships the bug.
// 6. My agent spent 40,000 tokens deciding how to say hello.
// 7. I told my agent to keep it simple, so it built a framework to manage the simplicity.
// 8. My agent debugs by changing random things until the error message changes its mind.
// 9. My agent has two modes: I can do that in seconds, and I have made a terrible mistake.
// 10. My agent's favorite design pattern is copying my code into a new file called final_final_v2.
// 11. My agent asked for clarification on do it.
// 12. My agent's idea of a quick fix is rewriting the whole app and calling it a refactor.
//
// Why #3 wins:
// - Criterion 2: "my deadline like a rumor" is the single sharpest phrase
//   in the pool — the punch lands on first read, and the parallel
//   structure (suggestion / rumor) doubles it.
// - Criterion 3: a fresh angle. Money and time, not hallucinations,
//   refusals or confident wrong answers — none of the banned stock jokes.
//   The agent is roasted for being expensive and late, the two things an
//   owner actually feels.
// - Criterion 4: the tightest of the funny ones — 73 characters, no wasted
//   word, setup in the first half, punchline ("rumor") as the last word.
// - Criterion 1+5: plainly a roast of my own agent, playful and
//   self-deprecating (it is my budget and my deadline being ignored).
// Rejected runners-up: #1 (clever parallel, but verbosity billing is
// familiar dev humour, and its punch is softer); #4 (the subagent-spawning
// angle is very fresh, but "argue about it" lands weaker than "rumor");
// #5 (three-beat politeness joke, strong, but its punch — shipping the
// bug — is a milder observation). #9 was cut on criterion 3: "confident
// then wrong" sits too close to the banned confident-wrong-answers stock
// joke. #11 was cut on criterion 2: one beat, a smirk rather than a laugh.
//
// Gate: single line, 73 characters (limit 1-200). No newline in the entry.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My agent treats my budget like a suggestion and my deadline like a rumor.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
