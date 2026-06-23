const fs = require('fs');
const txt = fs.readFileSync('src/data.ts', 'utf8');
const idx = txt.indexOf('id: "chapter-0"');
console.log(txt.substring(idx - 100, idx + 3000));
