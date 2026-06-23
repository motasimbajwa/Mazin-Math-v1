import fs from 'fs';

let text = fs.readFileSync('src/data.ts', 'utf8');

// The best way is to find each markdown string, which starts with `markdown: \`\n` and ends with `\n    },\n`
// Or we can just blindly replace all backticks that are not part of `markdown: \`` or `` `\n    }` ``.
// Let's use a replacer that escapes backticks inside the known markdown blocks.

const parts = text.split(/(markdown:\s*\`)([\s\S]*?)(\`\n\s*\},\n|\`\n\s*\}\n*\])/g);
let newText = '';
for (let i = 0; i < parts.length; i++) {
    if (i % 4 == 2) { 
        // This is the inner markdown string
        newText += parts[i].replace(/\`/g, '\\`');
    } else {
        newText += parts[i];
    }
}

fs.writeFileSync('src/data.ts', newText);
console.log("Fixed ticks");
