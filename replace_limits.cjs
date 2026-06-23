const fs = require('fs');
let lines = fs.readFileSync('src/data.ts', 'utf8').split('\n');
let inFlowchart = false;
let flowType = '';
let newLines = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.includes('To master Limits, follow this algorithmic flow')) {
    flowType = 'limit';
  } 

  if (flowType && (line.includes('```text') || line.includes('\\`\\`\\`text') || line === '`')) {
    inFlowchart = true;
    newLines.push('<div className="algorithmic-flow" data-flow="' + flowType + '"></div>');
    continue;
  }

  if (inFlowchart && (line.includes('```') || line.includes('\\`\\`\\`') || line === '`')) {
    inFlowchart = false;
    // skip this line
    flowType = '';
    continue;
  }

  if (!inFlowchart) {
    newLines.push(line);
  }
}

fs.writeFileSync('src/data.ts', newLines.join('\n'), 'utf8');
console.log("Done");
