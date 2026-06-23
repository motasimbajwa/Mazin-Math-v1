const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

// We want to add newlines inside all div tags so markdown parses their contents.
// But some divs might be on a single line!
// For example: <div class="flex items-start"><span>1</span><p>Text</p></div>
// If we add newlines inside, it becomes:
// <div ...>
//
// <span>1</span><p>Text</p>
//
// </div>
// This is fine and will parse.

data = data.replace(/(<div[^>]*>)\\s*/g, '$1\\n\\n');
data = data.replace(/\\s*(<\\/div>)/g, '\\n\\n$1');

fs.writeFileSync('src/data.ts', data);
console.log('Done!');
