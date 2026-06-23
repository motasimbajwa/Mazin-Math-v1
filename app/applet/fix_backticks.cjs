const fs = require('fs');
let c = fs.readFileSync('src/data.ts', 'utf8');
c = c.replace(/markdown: \\\`/g, 'markdown: `');
c = c.replace(/\\\`\n  }/g, '`\n  }');
fs.writeFileSync('src/data.ts', c);
console.log('Fixed');
