const fs = require('fs');
const txt = fs.readFileSync('src/data.ts', 'utf8');
const ids = txt.match(/id: "chapter-[0-9\\-]+"/g);
console.log(ids);
