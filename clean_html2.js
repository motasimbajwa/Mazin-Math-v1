const fs = require('fs');

let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(/<div class="user-quiz" data-question="([^"]+)">\\s*([\\s\\S]*?)\\s*<\\/div>/g, 
  '> **QUIZ:** $1\\n>\\n> $2');

data = data.replace(/<div class="bg-slate-50[^>]*>\\s*<h4[^>]*>Example Walkthrough<\\/h4>\\s*<div class="space-y-3">\\s*([\\s\\S]*?)\\s*<\\/div>\\s*<\\/div>/g, 
  function(match, innerText) {
    let text = innerText.replace(/<p><strong>Example:<\\/strong>\\s*([\\s\\S]*?)<\\/p>/g, '**Example:** $1\\n');
    text = text.replace(/<div class="flex items-start"><span[^>]*>(.*?)<\\/span><p>(?:<strong>(.*?)<\\/strong>)?\\s*(.*?)<\\/p><\\/div>/g, '$1. **$2** $3');
    return '> **EXAMPLE_WALKTHROUGH**\\n>\\n> ' + text.trim().split('\\n').filter(x=>x.trim()!=='').join('\\n> ');
  }
);

fs.writeFileSync('src/data_fixed.ts', data);
console.log('Fixed markdown data!');
