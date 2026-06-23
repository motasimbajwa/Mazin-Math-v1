const fs = require('fs');
let lines = fs.readFileSync('src/data.ts', 'utf8').split('\n');
let inFlowchart = false;
let flowType = '';
let newLines = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.includes('To master Limits, follow this algorithmic flow')) {
    flowType = 'limit';
  } else if (line.includes('To master Tangent Planes, follow this algorithmic flow')) {
    flowType = 'tangent_plane';
  } else if (line.includes('To master the Chain Rule, follow this algorithmic flow')) {
    flowType = 'chain_rule';
  } else if (line.includes('To master Directional Derivatives, follow this algorithmic flow')) {
    flowType = 'directional_derivative';
  } else if (line.includes('[Start: Find (∂w/∂x)_indep]')) {
    flowType = 'constrained_vars';
    // backtrack to remove the preceding ` character
    if (newLines[newLines.length - 1] === '`') {
      newLines.pop();
    }
  }

  if (flowType && (line.includes('```text') || line === '`')) {
    inFlowchart = true;
    newLines.push('<div className="algorithmic-flow" data-flow="' + flowType + '"></div>');
    continue;
  }

  if (inFlowchart && (line.includes('```') || line === '`')) {
    inFlowchart = false;
    flowType = '';
    continue;
  }

  if (!inFlowchart) {
    newLines.push(line);
  }
}

fs.writeFileSync('src/data.ts', newLines.join('\n'), 'utf8');
console.log("Done");
