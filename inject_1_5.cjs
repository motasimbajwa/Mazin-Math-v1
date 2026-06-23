const fs = require('fs');

const { ch1 } = require('./ch1.cjs');
const { ch2 } = require('./ch2.cjs');
const { ch3 } = require('./ch3.cjs');
const { ch4 } = require('./ch4.cjs');
const { ch5 } = require('./ch5.cjs');

// Read existing data
const txt = fs.readFileSync('src/data.ts', 'utf8');

// The Chapters payload
const chapters = [ch1, ch2, ch3, ch4, ch5];

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


// We want to insert them at the beginning of the `export const courseContent = [` array
const insertionPoint = txt.indexOf('export const courseContent = [') + 'export const courseContent = ['.length;

const newTxt = txt.substring(0, insertionPoint) + '\n' + chaptersStr + ',\n' + txt.substring(insertionPoint);

fs.writeFileSync('src/data.ts', newTxt, 'utf8');
console.log("Successfully injected chapters 1 to 5");
