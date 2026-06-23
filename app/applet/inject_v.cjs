const fs = require('fs');

const v1 = require('./v1.cjs');
const v2 = require('./v2.cjs');
const v3 = require('./v3.cjs');
const v4 = require('./v4.cjs');
const v5 = require('./v5.cjs');

let data = fs.readFileSync('src/data.ts', 'utf8');

// The new chapters should be injected BEFORE chapter-14-1
const targetId = 'id: "chapter-14-1"';
const targetIndex = data.indexOf(targetId);

if (targetIndex !== -1) {
  // Find the exact object `{` starting chapter-14-1
  let insertIndex = data.lastIndexOf('{', targetIndex);
  
  // Format the chapters with proper indentation
  const formatChapter = (ch) => {
    // Generate text replacing \` with \\\` if there are any backticks in strings,
    // actually, JSON.stringify is safer, but we need the markdown to be a template literal
    let txt = `{\n    id: "${ch.id}",\n    title: "${ch.title}",\n    progress: ${ch.progress},\n    subheadings: ${JSON.stringify(ch.subheadings, null, 2).replace(/\n/g, '\n    ')},\n    markdown: \`${ch.markdown.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\`\n  },\n  `;
    return txt;
  };

  const newContentStr = formatChapter(v1) + formatChapter(v2) + formatChapter(v3) + formatChapter(v4) + formatChapter(v5);
  
  const newData = data.substring(0, insertIndex) + newContentStr + data.substring(insertIndex);
  
  // Now replace the `courseContent` with the modified string
  fs.writeFileSync('src/data.ts', newData, 'utf8');
  console.log("Successfully injected chapters V1 to V5 into src/data.ts");
} else {
  console.log("Error: Could not find chapter-14-1 to inject before.");
}

