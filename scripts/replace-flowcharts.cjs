const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(/```text\n\[Start: Evaluate Limit\][\s\S]*?\[Finish\]\n```/, '<div class="algorithmic-flow" data-flow="limit"></div>');
content = content.replace(/```text\n\[Start: Tangent Plane\][\s\S]*?\[Finish\]\n```/, '<div class="algorithmic-flow" data-flow="tangent_plane"></div>');
content = content.replace(/```text\n\[Start: Find Derivative\][\s\S]*?\[Finish\]\n```/, '<div class="algorithmic-flow" data-flow="chain_rule"></div>');
content = content.replace(/```text\n\[Start: Find D_u f\][\s\S]*?\[Finish\]\n```/, '<div class="algorithmic-flow" data-flow="directional_derivative"></div>');

content = content.replace(/F\(x\) = ∫_0\^\{x\^2\} sqrt\(t\^4 \+ t\^3\) dt/g, '$F(x) = \\int_0^{x^2} \\sqrt{t^4 + t^3} \\, dt$');
content = content.replace(/f\(g\(x\)\) = sqrt\(\(x\^2\)\^4 \+ \(x\^2\)\^3\) = sqrt\(x\^8 \+ x\^6\)/g, '$f(g(x)) = \\sqrt{(x^2)^4 + (x^2)^3} = \\sqrt{x^8 + x^6}$');
content = content.replace(/2x \* sqrt\(x\^8 \+ x\^6\)/g, '$2x \\sqrt{x^8 + x^6}$');
content = content.replace(/2x sqrt\(x\^8 \+ x\^6\)/g, '$2x \\sqrt{x^8 + x^6}$');
content = content.replace(/f\(t\) = sqrt\(t\^4 \+ t\^3\)/g, '$f(t) = \\sqrt{t^4 + t^3}$');
content = content.replace(/sqrt\(/g, '\\sqrt(');

fs.writeFileSync('src/data.ts', content);
console.log("Replaced flowcharts and fixed math.");
