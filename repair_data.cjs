const fs = require('fs');

const { ch6 } = require('./ch6.cjs');
const { ch7 } = require('./ch7.cjs');
const { ch8 } = require('./ch8.cjs');
const { ch9 } = require('./ch9.cjs');
const { ch10 } = require('./ch10.cjs');

const chapters = [ch6, ch7, ch8, ch9, ch10];
const chaptersStr = chapters.map(ch => {
  return "{\n" +
  "    id: " + JSON.stringify(ch.id) + ",\n" +
  "    title: " + JSON.stringify(ch.title) + ",\n" +
  "    progress: " + ch.progress + ",\n" +
  "    subheadings: " + JSON.stringify(ch.subheadings, null, 2) + ",\n" +
  "    markdown: `" + ch.markdown + "`\n" +
  "  }";
}).join(',\n');

const insertedStr = chaptersStr + ',\n  ';
let txt = fs.readFileSync('src/data.ts', 'utf8');

txt = txt.replace(insertedStr, '');
const ch0start = txt.lastIndexOf('{', txt.indexOf('id: "chapter-0"'));
txt = txt.substring(0, ch0start) + chaptersStr + ',\n  ' + txt.substring(ch0start);

fs.writeFileSync('src/data.ts', txt, 'utf8');
console.log("Repaired");
