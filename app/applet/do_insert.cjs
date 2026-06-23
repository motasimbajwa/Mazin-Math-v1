const fs = require('fs');
let txt = fs.readFileSync('src/data.ts', 'utf8');

let endIndex = txt.indexOf('id: "chapter-14-1"');
if (endIndex !== -1) {
    let insertPoint = txt.lastIndexOf('},', endIndex);
    if (insertPoint !== -1) {
        let before = txt.substring(0, insertPoint);
        let after = txt.substring(insertPoint);
        let chapterV6 = fs.readFileSync('app/applet/v6.txt', 'utf8');
        fs.writeFileSync('src/data.ts', before + chapterV6 + after);
        console.log('success');
    }
} else {
    console.log('could not find chapter-14-1');
}
