const fs = require('fs');
let code = fs.readFileSync('src/data.ts', 'utf8');
code = code.replace(/## Mock Exams \(Past Papers\)/g, '## Mock Exams');
fs.writeFileSync('src/data.ts', code);
console.log('Done');
