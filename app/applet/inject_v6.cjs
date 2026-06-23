const fs = require('fs');

let chapterV6 = \`
  },
  {
    id: "chapter-v6",
    title: "Chapter V6: Line Integrals & Path Independence",
    progress: 0,
    subheadings: [
      { id: "v6-intro", title: "Introduction: Walking in a Field" },
      { id: "v6-eli5", title: "ELI5 Explanation: Walking Uphill vs. Around the Hill" },
      { id: "v6-independence", title: "Path Independence & Conservative Fields" },
      { id: "v6-gradient-link", title: "The Gradient Connection (Fundamental Theorem)" }
    ],
    markdown: \\\`
## Introduction: Walking in a Field

When you walk in a vector field, the "work" done by the vector field along your path is given by the **Line Integral**. 

If the vector field represents a force, the line integral computes the total Work: 
$$ W = \\\\int_C \\\\mathbf{F} \\\\cdot d\\\\mathbf{s} $$
which is the tangential component of Force integrated along the path.

## ELI5 Explanation: Walking Uphill vs. Around the Hill

Imagine walking to the top of a mountain. 
1. If you hike straight up the steepest path, it's exhausting (the force of gravity is strong against your path).
2. If you walk horizontally around the mountain, perpendicular to gravity, it takes no extra effort against gravity. 

A line integral adds up the force component strictly pushing or pulling you ALONG your path. 

## Path Independence & Conservative Fields

<div class="plot-interactive my-6" data-plot-id="two_path_test"></div>

A remarkable property of some physical fields (like Electrostatics or Gravity) is **Path Independence**. 
If you start at point A and end at point B, the amount of work done is the exact same, no matter what crazy path you take! 

When a field is path independent, we call it a **Conservative Vector Field**.
For a conservative field, any closed-loop circulation is zero:
$$ \\\\oint_C \\\\mathbf{F} \\\\cdot d\\\\mathbf{s} = 0 $$

If it's an electrostatic field $\\\\mathbf{E}$, then the circulation is always zero. This is a profound statement about the nature of the field!

## The Gradient Connection (Fundamental Theorem)

Why are some fields conservative? Because they are the **Gradient** of some underlying scalar potential $\\\\Phi$. 
If $\\\\mathbf{E} = -\\\\nabla \\\\Phi$, then by the Fundamental Theorem for Line Integrals:
$$ \\\\int_A^B \\\\mathbf{E} \\\\cdot d\\\\mathbf{s} = -[\\\\Phi(B) - \\\\Phi(A)] $$
Because the result only depends on the start and end heights $\\\\Phi$, the path between them doesn't matter! 
Furthermore, if $\\\\mathbf{F} = \\\\nabla \\\\Phi$, then $\\\\nabla \\\\times \\\\mathbf{F} = 0$. A conservative vector field is fundamentally irrotational (zero curl).
\\\`
\`;

let txt = fs.readFileSync('src/data.ts', 'utf8');

// Insert after chapter-v5
let findStr = 'id: "chapter-v5",';
let endIndex = txt.indexOf('id: "chapter-14-1"');
if (endIndex !== -1) {
   let insertPoint = txt.lastIndexOf('},', endIndex);
   if (insertPoint !== -1) {
      let before = txt.substring(0, insertPoint);
      let after = txt.substring(insertPoint);
      fs.writeFileSync('src/data.ts', before + chapterV6 + after);
      console.log("Injected Chapter V6");
   }
}
