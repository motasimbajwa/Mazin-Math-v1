const fs = require('fs');
let txt = fs.readFileSync('src/ProblemSolvingFlow.tsx', 'utf8');

txt = txt.replace(/className="flex flex-col items-center"\s*<div className={`/g, 'className="flex flex-col items-center">\n      <div className={`');

fs.writeFileSync('src/ProblemSolvingFlow.tsx', txt, 'utf8');
console.log('Fixed');
