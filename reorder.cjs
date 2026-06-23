const fs = require('fs');

const content = fs.readFileSync('src/data.ts', 'utf8');

// I will just use regex to extract everything.
// But another way is to just find the indices.

const original147Start = content.indexOf('  {\n    id: "chapter-14-7",\n    title: "Chapter 14.7: Extreme Values and Saddle Points"');
const finalCheatStart = content.indexOf('  {\n    id: "final-cheat-sheet",');
const mine147Start = content.lastIndexOf('  {\n    id: "chapter-14-7",');

if (original147Start !== -1 && finalCheatStart !== -1 && mine147Start !== -1 && mine147Start > finalCheatStart) {
  // Before original 14.7
  const part1 = content.slice(0, original147Start);
  
  // The original 14.7 (we want to discard this)
  
  // The Final Cheat Sheet
  const finalCheatString = content.slice(finalCheatStart, mine147Start - 3); // -3 for ",\n"
  
  // My new chapters
  const myNewChapters = content.slice(mine147Start);
  
  // Reconstruct: part1 + myNewChapters (without the closing '];') + Final Cheat Sheet + '];'
  
  // wait, myNewChapters goes all the way to the end, including '\n];\n'.
  // let's trim it
  const endBracketIndex = myNewChapters.lastIndexOf('\n];\n');
  const pureNewChapters = myNewChapters.slice(0, endBracketIndex);
  
  const reconstructed = part1 + pureNewChapters + ",\n" + finalCheatString + "\n];\n";
  
  fs.writeFileSync('src/data.ts', reconstructed);
  console.log("Success");
} else {
  console.log("Could not find the expected indices.");
  console.log({ original147Start, finalCheatStart, mine147Start });
}
