const fs = require('fs');

function buildChapter({
  num,
  title,
  intro,
  eli5,
  glossary,
  whyEE,
  formal,
  method,
  flowchart,
  triggers,
  examples,
  cheatsheet,
  traps,
  assessment,
  interactiveHtml = ''
}) {
  const subheadings = [
    { id: `ch${num}-intro`, title: "Introduction & Core Concepts" },
    { id: `ch${num}-eli5`, title: "ELI5 Explanation (Engineering Analogy)" },
    { id: `ch${num}-glossary`, title: "Glossary of Key Terms" },
    { id: `ch${num}-why-ee`, title: "Why This Matters in Electrical Engineering" },
    { id: `ch${num}-formal`, title: "Formal Definitions and Notation" },
    { id: `ch${num}-method`, title: "Step\\u2011by\\u2011Step Method for Problem Solving" },
    { id: `ch${num}-flowchart`, title: "Algorithmic Problem Solving Flow" },
    { id: `ch${num}-triggers`, title: "Concept Recall: Trigger Words → Action" },
    { id: `ch${num}-examples`, title: "10 Exam\\u2011Level Worked Exercises with Inner Voice" },
    { id: `ch${num}-cheatsheet`, title: "Ultimate Exam Room Cheat Sheet" },
    { id: `ch${num}-traps`, title: "Common Mistakes (The Examiner's Traps)" },
    { id: `ch${num}-test`, title: "Chapter Assessment" }
  ];

  const glossaryMd = Object.entries(glossary)
    .map(([term, def]) => `- **${term}:** ${def}`)
    .join('\n');

  const triggersMd = `
<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      ${triggers.map((t, i) => `<tr class="${i%2===0 ? '' : 'bg-slate-50'}">
        <td class="p-3 border-b text-sm font-mono">${t.word}</td>
        <td class="p-3 border-b text-sm">${t.action}</td>
      </tr>`).join('')}
    </tbody>
  </table>
</div>
`;

  const examplesMd = examples.map((ex, idx) => `
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example ${idx + 1}: ${ex.title}**

**Question:** ${ex.question}

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>🧠 Inner Voice (What You Think)</strong></div>
  <div><strong>📐 Mathematical Solution (What You Write)</strong></div>
${ex.steps.map(step => `
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">${step.think}</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">${step.write}</div>
`).join('')}
</div>
</div>`).join('\n');

  const trapsMd = `
<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-red-900 text-white">
        <th class="p-3 border-b">❌ Wrong</th>
        <th class="p-3 border-b">✅ Correct</th>
        <th class="p-3 border-b">Why?</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      ${traps.map((tr, i) => `<tr class="${i%2===0 ? '' : 'bg-slate-50'}">
        <td class="p-3 border-b text-sm font-mono text-red-700">${tr.wrong}</td>
        <td class="p-3 border-b text-sm font-mono text-green-700">${tr.correct}</td>
        <td class="p-3 border-b text-sm">${tr.why}</td>
      </tr>`).join('')}
    </tbody>
  </table>
</div>
`;

  const assessmentMd = assessment.map((q, i) => `<div class="user-quiz" data-question="${i+1}. ${q}"></div>`).join('\n');

  const markdown = `
## Introduction & Core Concepts
${intro}

${interactiveHtml}

## ELI5 Explanation (Engineering Analogy)
${eli5}

## Glossary of Key Terms
${glossaryMd}

## Why This Matters in Electrical Engineering
${whyEE}

## Formal Definitions and Notation
${formal}

## Step\\u2011by\\u2011Step Method for Problem Solving
${method}

## Algorithmic Problem Solving Flow
${flowchart}

## Concept Recall: Trigger Words → Action
${triggersMd}

## 10 Exam\\u2011Level Worked Exercises with Inner Voice
${examplesMd}

## Ultimate Exam Room Cheat Sheet
${cheatsheet}

## Common Mistakes (The Examiner's Traps)
${trapsMd}

## Chapter Assessment
${assessmentMd}
`;

  return {
    id: `chapter-${num}`,
    title: `Chapter ${num}: ${title}`,
    progress: 0,
    subheadings,
    markdown
  };
}

module.exports = { buildChapter };
