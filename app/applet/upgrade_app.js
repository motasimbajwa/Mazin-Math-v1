const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const chaptersToUpgrade = [
  '14-1', '14-2', '14-3', '14-4', '14-5', '14-6', '14-7', '14-8', '14-9',
  '15-1', '15-2', '15-4'
];

for (const ch of chaptersToUpgrade) {
  const chString = `id: "chapter-${ch}",`;
  const startIdx = content.indexOf(chString);
  if (startIdx === -1) continue;

  // Find subheadings array
  const subheadingsStart = content.indexOf('subheadings: [', startIdx);
  const subheadingsEnd = content.indexOf('],', subheadingsStart) + 2;

  const newSubheadings = `subheadings: [
      { id: "ch${ch}-intro", title: "Introduction & Core Concepts" },
      { id: "ch${ch}-eli5", title: "ELI5 Explanation (Engineering Analogy)" },
      { id: "ch${ch}-glossary", title: "Glossary of Key Terms" },
      { id: "ch${ch}-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch${ch}-formal", title: "Formal Definitions and Notation" },
      { id: "ch${ch}-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch${ch}-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch${ch}-triggers", title: "Concept Recall: Trigger Words -> Action" },
      { id: "ch${ch}-examples", title: "10 Exam-Level Worked Exercises with Inner Voice" },
      { id: "ch${ch}-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch${ch}-traps", title: "Common Mistakes (The Examiner's Traps)" },
      { id: "ch${ch}-test", title: "Chapter Assessment" }
    ],`;

  content = content.substring(0, subheadingsStart) + newSubheadings + content.substring(subheadingsEnd);

  // Now replace headings within the markdown block for this chapter
  // To avoid replacing things outside, we extract the markdown part
  const updatedStart = content.indexOf(chString);
  const mdStart = content.indexOf('markdown: `', updatedStart);
  let nextChapStart = content.indexOf('id: "chapter-', mdStart);
  if (nextChapStart === -1) nextChapStart = content.length;
  
  let mdContent = content.substring(mdStart, nextChapStart);

  // Rename headers
  // Combine intro elements
  mdContent = mdContent.replace(/### 🧠 Neuro-Cognitive Intro & Revision/g, "## Introduction & Core Concepts\n### Neuro-Cognitive Intro & Revision");
  mdContent = mdContent.replace(/## Introduction and Core Concepts/g, "");
  mdContent = mdContent.replace(/## Review of Previous Concepts/g, "## Introduction & Core Concepts");
  
  // Glossary
  mdContent = mdContent.replace(/### 📖 Neuro-Enhanced Glossary(?:\s*\(with Analogies\))?/g, "## Glossary of Key Terms");
  mdContent = mdContent.replace(/## Glossary of Key Terms/g, "## Glossary of Key Terms");
  
  // ELI5
  mdContent = mdContent.replace(/## ELI5 Explanation(?::.*)?/g, "## ELI5 Explanation (Engineering Analogy)");
  
  // Examples
  mdContent = mdContent.replace(/## 5 Exhaustive Worked Examples/g, "## 10 Exam-Level Worked Exercises with Inner Voice");
  mdContent = mdContent.replace(/## \d+ Worked Exercises/g, "## 10 Exam-Level Worked Exercises with Inner Voice");
  mdContent = mdContent.replace(/## Detailed Worked Examples/g, "## 10 Exam-Level Worked Exercises with Inner Voice");

  // Flowchart
  mdContent = mdContent.replace(/### Algorithmic Problem Solving Flow/g, "## Algorithmic Problem Solving Flow");
  
  // Cheatsheet
  mdContent = mdContent.replace(/## THE MASTER TUTOR'S CHEAT SHEET:[^\n]*/g, "## Ultimate Exam Room Cheat Sheet");
  mdContent = mdContent.replace(/## Cheat Sheet \/ Summary Table/g, "## Ultimate Exam Room Cheat Sheet");
  
  // Method
  mdContent = mdContent.replace(/## Step-by-Step Method for Problem Solving/g, "## Step-by-Step Method for Problem Solving");

  // Formal definitions
  mdContent = mdContent.replace(/## Formal Definitions and Notation/g, "## Formal Definitions and Notation");
  
  // Why EE
  mdContent = mdContent.replace(/## Why This Matters in Electrical Engineering/g, "## Why This Matters in Electrical Engineering");

  content = content.substring(0, mdStart) + mdContent + content.substring(nextChapStart);
}

fs.writeFileSync('src/data.ts', content, 'utf8');
console.log("Updated data.ts structure successfully!");
