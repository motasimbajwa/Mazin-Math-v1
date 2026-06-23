const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

// It's a JS file. We want to extract the array, filter unique IDs, and write back.
// Since it's big and has backticks, we could just evaluate it.
const moduleContent = content.replace('export const courseContent =', 'module.exports = ');
fs.writeFileSync('temp_data.cjs', moduleContent);

const data = require('./temp_data.cjs');
const uniqueIds = new Set();
const cleanedData = [];

for (const item of data) {
    if (!uniqueIds.has(item.id)) {
        uniqueIds.add(item.id);
        cleanedData.push(item);
    }
}

// Write back to `src/data.ts`
const outConfig = 'export const courseContent = ' + JSON.stringify(cleanedData, null, 2) + ';';
fs.writeFileSync('src/data.ts', outConfig);
console.log('Cleaned duplicates!');
