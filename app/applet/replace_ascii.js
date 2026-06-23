const fs = require('fs');
let txt = fs.readFileSync('src/data.ts', 'utf8');

txt = txt.replace(/To master Limits, follow this algorithmic flow[\s\S]*?\[Finish\]\n```/, 'To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.\n\n<div className="algorithmic-flow" data-flow="limit"></div>');

txt = txt.replace(/To master Tangent Planes, follow this algorithmic flow[\s\S]*?\[Finish\]\n```/, 'To master Tangent Planes, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.\n\n<div className="algorithmic-flow" data-flow="tangent_plane"></div>');

txt = txt.replace(/To master the Chain Rule, follow this algorithmic flow[\s\S]*?\[Finish\]\n```/, 'To master the Chain Rule, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.\n\n<div className="algorithmic-flow" data-flow="chain_rule"></div>');

txt = txt.replace(/To master Directional Derivatives, follow this algorithmic flow[\s\S]*?\[Finish\]\n```/, 'To master Directional Derivatives, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.\n\n<div className="algorithmic-flow" data-flow="directional_derivative"></div>');

txt = txt.replace(/## Algorithmic Problem Flow\s*`\s*\[Start: Find \(∂w\/∂x\)_indep\][\s\S]*?\[Finish\]\s*`/g, '## Algorithmic Problem Solving Flow\n\n<div className="algorithmic-flow" data-flow="constrained_vars"></div>');

fs.writeFileSync('src/data.ts', txt, 'utf8');
console.log("Replaced flowcharts cleanly!");
