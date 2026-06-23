const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

// A function to add visuals to a chapter
function addVisualsToChapter(chapterId, plotId, title) {
    const chapterRegex = new RegExp(`id:\\s*"${chapterId}"[\\s\\S]*?markdown:\\s*\``);
    const chapterMatch = content.match(chapterRegex);
    if (!chapterMatch) {
       console.log("Could not find chapter " + chapterId);
       return;
    }
    
    // Check if Visuals already exist
    const fullChapterRegex = new RegExp(`id:\\s*"${chapterId}"[\\s\\S]*?(\`\\n\\s*\\},|\\}\\]\\n\\s*\\)$)`);
    const fullContentMatch = content.match(fullChapterRegex);
    if (fullContentMatch && fullContentMatch[0].includes('## Visuals / Graphs')) {
       console.log("Visuals already exist for " + chapterId);
       return;
    }
    
    // 1. Add to subheadings
    content = content.replace(
        new RegExp(`(id:\\s*"${chapterId}"[\\s\\S]*?subheadings:\\s*\\[[\\s\\S]*?)(\\s*\\{ id:\\s*"${chapterId.replace('chapter-', 'ch')}-test")`),
        `$1      { id: "${chapterId.replace('chapter-', 'ch')}-visuals", title: "Visuals / Graphs" },\n$2`
    );

    // 2. Add to markdown before Chapter Assessment
    const visualContent = `
## Visuals / Graphs

### 1. ${title}
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="${plotId}"></div>

`;
    // Insert before ## Chapter Assessment
    content = content.replace(
        new RegExp(`(id:\\s*"${chapterId}"[\\s\\S]*?)(## Chapter Assessment)`),
        `$1${visualContent}$2`
    );
}

addVisualsToChapter('chapter-14-7', 'saddle_point', 'Saddle Point and Critical Points');
addVisualsToChapter('chapter-14-8', 'lagrange_multiplier', 'Lagrange Multipliers Constraint');
addVisualsToChapter('chapter-14-9', 'constrained_variables', 'Constrained Independent Variables');
addVisualsToChapter('chapter-15-1', 'double_integral', 'Volume as a Double Integral');
addVisualsToChapter('chapter-15-2', 'center_of_mass', 'Centroid of a Region');

fs.writeFileSync('src/data.ts', content);
console.log("Done adding visuals");
