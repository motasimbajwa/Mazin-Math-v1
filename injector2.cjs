const fs = require('fs');

const contentText = fs.readFileSync('inject_cheatsheets.cjs', 'utf8');
const cheatsheetsStr = contentText.substring(contentText.indexOf('const cheatsheets = {'), contentText.indexOf('};\n\nconst txt =') + 1);

// evaluate it safely by appending module.exports
const scriptPath = './temp_cheatsheets.cjs';
fs.writeFileSync(scriptPath, cheatsheetsStr + '\nmodule.exports = cheatsheets;');
const cheatsheets = require(scriptPath);

const txt = fs.readFileSync('src/data.ts', 'utf8');

let newTxt = txt;

Object.keys(cheatsheets).forEach(chapId => {
  const cSheet = "\\n\\n" + cheatsheets[chapId] + "\\n\\n";
  const startIdx = newTxt.indexOf('id: "' + chapId + '"');
  if (startIdx === -1) {
    console.log("Not found:", chapId);
    return;
  }
  
  const assessmentPattern = /## Chapter Assessment/;
  const cheatPattern1 = /## Cheat Sheet(?: \/ Summary Table)?/;
  const cheatPattern2 = /## Ultimate Exam Room Cheat Sheet/;
  const cheatPattern3 = /## Cheat Sheet/;
  
  let endIdx = newTxt.indexOf('id: "chapter-', startIdx + 20);
  if (endIdx === -1) endIdx = newTxt.indexOf('id: "final-cheat-sheet"');
  if (endIdx === -1) endIdx = newTxt.length;
  
  let chapterChunk = newTxt.substring(startIdx, endIdx);
  
  let newChapterChunk = chapterChunk;
  
  const astMatch = newChapterChunk.match(assessmentPattern);
  const ctMatch = newChapterChunk.match(cheatPattern1) || newChapterChunk.match(cheatPattern2) || newChapterChunk.match(cheatPattern3);
  
  if (astMatch) {
    const astIndex = astMatch.index;
    if (ctMatch && ctMatch.index < astIndex) {
      // Remove everything from cheat sheet to assessment
      newChapterChunk = newChapterChunk.substring(0, ctMatch.index) + cSheet + newChapterChunk.substring(astIndex);
    } else {
      // Just insert before assessment
      newChapterChunk = newChapterChunk.substring(0, astIndex) + cSheet + newChapterChunk.substring(astIndex);
    }
  } else {
    // Just append
    newChapterChunk += cSheet;
  }
  
  // Now replace it in the full string
  newTxt = newTxt.substring(0, startIdx) + newChapterChunk + newTxt.substring(endIdx);
});

fs.writeFileSync('src/data.ts', newTxt, 'utf8');
console.log("Done");
