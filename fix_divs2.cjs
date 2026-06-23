const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

// Replace Example Walkthrough div
data = data.replace(/<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm text-sm self-center">/g, 
  '<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm text-sm self-center">\\n');

// Replace inner divs
// <div class="space-y-3"> -> <div class="space-y-3">\n
data = data.replace(/<div class="space-y-3">/g, '<div class="space-y-3">\\n');

// And <div class="user-quiz" ...>
data = data.replace(/(<div class="user-quiz"[^>]*>)/g, '$1\\n');

// And closing divs
data = data.replace(/([\\s\\S]*?)(<\\/div>)/g, function(match, p1, p2) {
  // Wait, global replace with [\\s\\S]*? is bad.
});

