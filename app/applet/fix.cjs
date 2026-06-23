const fs = require('fs');
let dataPath = './src/data.ts';
let lines = fs.readFileSync(dataPath, 'utf-8').split('\n');

// 978 is index 977
// 1047 is index 1046
let splicedLines = [...lines.slice(0, 977), ...lines.slice(1047)];

fs.writeFileSync(dataPath, splicedLines.join('\n'), 'utf-8');
console.log('Spliced exactly 70 lines (from line 978 to 1047 inclusive).');
