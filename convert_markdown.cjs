const fs = require('fs');

let data = fs.readFileSync('src/data.ts', 'utf8');

// Replace quiz divs
// Format:
// <div class="user-quiz" data-question="Evaluate limit xy / (x^2 + y^2) at origin">
// 1. Show that the limit of $\\frac{xy}{x^2 + y^2}$ does not exist at origin.
// *(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*
// </div>

const quizRegex = /<div class="user-quiz" data-question="([^"]+)">\\s*([\\s\\S]*?)\\s*<\\/div>/g;

data = data.replace(quizRegex, (match, question, innerText) => {
    return \`> **QUIZ:** \${question}\\n>\\n> \${innerText.trim().split('\\n').join('\\n> ')}\`;
});

// Now for Example Walkthroughs!
// <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm text-sm self-center">
//   <h4 class="font-bold text-lg text-slate-800 mb-4 border-b pb-2">Example Walkthrough</h4>
//   ...
// </div>
// Let's replace the outer div and the inner divs with custom Markdown. Or just a different blockquote?
// > **EXAMPLE_WALKTHROUGH**
// > Example: $\lim_{x \to 2} ...$
// > 1. **Direct Substitution:** Plug in $x=2$ ...

const exampleRegex = /<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm text-[\\s\\S]*?<h4[^>]*>Example Walkthrough<\\/h4>\\s*<div class="space-y-3">\\s*([\\s\\S]*?)\\s*<\\/div>\\s*<\\/div>/g;

data = data.replace(exampleRegex, (match, innerText) => {
    // Inner text contains:
    // <p><strong>Example:</strong> ...</p>
    // <div class="flex items-start"><span class="...">1</span><p><strong>Step:</strong> text</p></div>
    
    // We can clean this up completely to standard markdown!
    let cleaned = innerText.replace(/<p><strong>Example:<\\/strong>([\\s\\S]*?)<\\/p>/g, '**Example:**$1\\n');
    
    cleaned = cleaned.replace(/<div class="flex items-start"><span[^>]*>(.*?)<\\/span><p>(.*?)<\\/p><\\/div>/g, 
        (m, stepNum, stepText) => {
            return \`\${stepNum}. \${stepText}\`;
        });
        
    return \`> **EXAMPLE_WALKTHROUGH**\\n>\\n> \${cleaned.trim().split('\\n').filter(l=>l.trim()!=='').join('\\n> ')}\`;
});

// Do the same for grid examples from my patch_grid if they exist. Oh wait, my patch_grid modified example walkthroughs to be inside a grid!
// Let's see if grid is still there.
// <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
// <div class="flex flex-col items-center ...
// <div class="bg-slate-50... Example Walkthrough

// Wait, the easiest way to avoid regex nightmare is to just provide custom components to ReactMarkdown, and ONLY fix the math parsing.
fs.writeFileSync('src/data_test2.ts', data);
console.log('Converted');
