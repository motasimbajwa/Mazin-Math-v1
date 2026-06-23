const fs = require('fs');
let txt = fs.readFileSync('src/data.ts', 'utf8');

txt = txt.replace('markdown: \\`', 'markdown: `');
txt = txt.replace('curl).\\n  \\`', 'curl).\\n  `');

fs.writeFileSync('src/data.ts', txt);
