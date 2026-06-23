import fs from 'fs';

let text = fs.readFileSync('src/data.ts', 'utf8');

// The best way is to let TypeScript support literal template strings by carefully escaping ONLY the unescaped backticks.
// A simpler robust way: replace ALL backtick sequences with a unified format.

// First, unescape all backticks inside the file.
text = text.replace(/\\\\\\\\\\\`/g, '\`');
text = text.replace(/\\\\\\`/g, '\`');
text = text.replace(/\\\\\`/g, '\`');
text = text.replace(/\\\`/g, '\`');

// Now, we have RAW backticks everywhere. This will break the TS compiler for \`id: "...", \n markdown: \`...\`
// Let's replace ONLY backticks that appear inside the markdown block.

const parts = text.split(/(markdown:\s*\`)([\s\S]*?)(\`\n\s*\},|\`\n\s*\}\n*\])/g);
let newText = '';
for (let i = 0; i < parts.length; i++) {
    if (i % 4 == 2) { 
        newText += parts[i].replace(/\`/g, '\\`');
    } else {
        newText += parts[i];
    }
}

fs.writeFileSync('src/data.ts', newText);
console.log("Fixed ticks properly");
