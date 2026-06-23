const fs = require('fs');
const txt = fs.readFileSync('src/data.ts', 'utf8');

const regex = /id: "chapter-0"[\s\S]*?markdown: `([\s\S]*?)`/;
const match = txt.match(regex);
if (match) {
  console.log(match[1].substring(0, 1500));
} else {
  console.log("Not found");
}
