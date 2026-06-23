const fs = require('fs');
let txt = fs.readFileSync('src/data.ts', 'utf8');

// I need to surgically remove chapters 6-10 that were put into the middle of chapter-0.
// Let's just re-read the original file? Do we have a backup?
// If not, I can just write a script to re-create the data.ts from scratch or just extract chapter 0 and 14-X.

// Let's look at the structure strings to figure out where to cut.
