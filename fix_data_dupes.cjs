const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

const target = 'export const courseContent = [';
const lastIndex = content.lastIndexOf(target);

if (lastIndex !== -1) {
  let cleanContent = content.substring(lastIndex);
  
  // Re-run the fix for flowcharts on this clean content because they might have been destroyed or left as ASCII
  // Wait, let's just save it first.
  fs.writeFileSync('src/data.ts', cleanContent, 'utf8');
  console.log("Cleaned up duplicates!");
}
