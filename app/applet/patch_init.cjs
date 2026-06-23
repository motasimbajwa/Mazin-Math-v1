const fs = require('fs');
const { chapterV0 } = require('./workspace/generate_chapter_v0.cjs');

let data = fs.readFileSync('src/data.ts', 'utf-8');

data = data.replace('export const courseContent = [', 'export const courseContent = [\n' + JSON.stringify(chapterV0, null, 2) + ',');

fs.writeFileSync('src/data.ts', data);
