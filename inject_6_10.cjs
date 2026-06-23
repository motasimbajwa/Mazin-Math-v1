const fs = require('fs');

const { ch6 } = require('./ch6.cjs');
const { ch7 } = require('./ch7.cjs');
const { ch8 } = require('./ch8.cjs');
const { ch9 } = require('./ch9.cjs');
const { ch10 } = require('./ch10.cjs');

// Read existing data
const txt = fs.readFileSync('src/data.ts', 'utf8');

// The Chapters payload
const chapters = [ch6, ch7, ch8, ch9, ch10];

// Prepare the JSON strings
const chaptersStr = chapters.map(ch => {
  return `{
    id: ${JSON.stringify(ch.id)},
    title: ${JSON.stringify(ch.title)},
    progress: ${ch.progress},
    subheadings: ${JSON.stringify(ch.subheadings, null, 2)},
    markdown: \`${ch.markdown}\`
  }`;
}).join(',\n');


// We want to insert them AFTER chapter 5 inside the array.
// But it's easier to just insert BEFORE the original "chapter-0" which was at the start.
// To find where chapter 5 ended, or we can just append them after chapters 1-5 block.
// Let's just find the string 'id: "chapter-0"' and insert right before it.
// This ensures chapters 6-10 are placed directly after 1-5, preserving 1-10 order. 

const insertionPoint = txt.indexOf('{', txt.indexOf('id: "chapter-0"'));

if (insertionPoint === -1) {
  console.log("Could not find chapter-0 ! Trying to insert at start...");
  const fallback = txt.indexOf('export const courseContent = [') + 'export const courseContent = ['.length;
  const newTxt = txt.substring(0, fallback) + '\n' + chaptersStr + ',\n' + txt.substring(fallback);
  fs.writeFileSync('src/data.ts', newTxt, 'utf8');
} else {
  const newTxt = txt.substring(0, insertionPoint) + chaptersStr + ',\n  ' + txt.substring(insertionPoint);
  fs.writeFileSync('src/data.ts', newTxt, 'utf8');
}

console.log("Successfully injected chapters 6 to 10");
