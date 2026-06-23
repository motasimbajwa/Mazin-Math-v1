const fs = require('fs');
let content = fs.readFileSync('/app/applet/src/data.ts', 'utf8');

const chaptersToUpgrade = ['14-1', '14-2', '14-3', '14-4', '14-5', '14-6', '14-7', '14-8', '14-9', '15-1', '15-2', '15-4'];

for (const ch of chaptersToUpgrade) {
  const chString = `id: "chapter-${ch}",`;
  const startIdx = content.indexOf(chString);
  if (startIdx === -1) continue;

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

  const updatedStart = content.indexOf(chString);
  const mdStart = content.indexOf('markdown: `', updatedStart);
  let nextChapStart = content.indexOf('id: "chapter-', mdStart);
  if (nextChapStart === -1) nextChapStart = content.length;
  let mdContent = content.substring(mdStart, nextChapStart);

  mdContent = mdContent.replace(/### 🧠 Neuro-Cognitive Intro & Revision/g, "## Introduction & Core Concepts\n### Neuro-Cognitive Intro & Revision")
                       .replace(/## Introduction and Core Concepts/g, "")
                       .replace(/## Review of Previous Concepts/g, "## Introduction & Core Concepts")
                       .replace(/### 📖 Neuro-Enhanced Glossary(?:\\s*\\(with Analogies\\))?/g, "## Glossary of Key Terms")
                       .replace(/## Glossary of Key Terms/g, "## Glossary of Key Terms")
                       .replace(/## ELI5 Explanation(?:[:].*)?/g, "## ELI5 Explanation (Engineering Analogy)")
                       .replace(/## 5 Exhaustive Worked Examples/g, "## 10 Exam-Level Worked Exercises with Inner Voice")
                       .replace(/## \\d+ Worked Exercises/g, "## 10 Exam-Level Worked Exercises with Inner Voice")
                       .replace(/## Detailed Worked Examples/g, "## 10 Exam-Level Worked Exercises with Inner Voice")
                       .replace(/### Algorithmic Problem Solving Flow/g, "## Algorithmic Problem Solving Flow")
                       .replace(/## THE MASTER TUTOR'S CHEAT SHEET:[^\\n]*/g, "## Ultimate Exam Room Cheat Sheet")
                       .replace(/## Cheat Sheet \\/ Summary Table/g, "## Ultimate Exam Room Cheat Sheet")
                       .replace(/## Step-by-Step Method for Problem Solving/g, "## Step-by-Step Method for Problem Solving")
                       .replace(/## Formal Definitions and Notation/g, "## Formal Definitions and Notation")
                       .replace(/## Why This Matters in Electrical Engineering/g, "## Why This Matters in Electrical Engineering");

  content = content.substring(0, mdStart) + mdContent + content.substring(nextChapStart);
}

fs.writeFileSync('/app/applet/src/data.ts', content, 'utf8');
console.log("Success");
