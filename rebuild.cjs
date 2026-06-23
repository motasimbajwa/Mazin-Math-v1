const fs = require('fs');

const text = fs.readFileSync('src/data.ts', 'utf8');

const regex = /\{\s*id:\s*"chapter-(.*?)"/g;
const matches = [];
let match;
while ((match = regex.exec(text)) !== null) {
    matches.push({ id: match[1], start: match.index });
}

const desired_chapters = [
    "0", "14-1", "14-2", "14-3", "14-4", "14-5", "14-6", "14-7", "14-8", "14-9", "15-1", "15-2", "15-4"
];

const chapter_blocks = {};

for (let i = 0; i < matches.length; i++) {
    const chap_id = matches[i].id;
    const start_idx = matches[i].start;
    
    let block = "";
    if (i + 1 < matches.length) {
        const next_start = matches[i+1].start;
        block = text.substring(start_idx, next_start);
        block = block.replace(/,\s*$/, '');
    } else {
        const end_idx = text.lastIndexOf('];');
        block = text.substring(start_idx, end_idx);
        block = block.replace(/\}\s*$/, '}').trim();
    }
    // Update block to hold latest matched
    chapter_blocks[chap_id] = block;
}

let out = "export const courseContent = [\n";
for (let i = 0; i < desired_chapters.length; i++) {
    const chap = desired_chapters[i];
    if (chapter_blocks[chap]) {
        out += "  " + chapter_blocks[chap];
        if (i < desired_chapters.length - 1) {
            out += ",\n";
        } else {
            out += "\n";
        }
    }
}
out += "];\n";

fs.writeFileSync('src/data.ts', out, 'utf8');
console.log("Rebuilt!");
