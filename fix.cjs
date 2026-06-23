const fs = require('fs');
let code = fs.readFileSync('generate_chapters.cjs', 'utf8');
code = code.replace(/const splitString =.*/, 'const splitString = "  }\\n];";');
code = code.replace(/const beginning = content\.slice.*/, 'const beginning = content.slice(0, spliceIndex + 4);');
code = code.replace(/const newContent = beginning.*/, 'const newContent = beginning + ",\\n" + ch14_7 + ",\\n" + ch14_8 + ",\\n" + ch14_9 + ",\\n" + ch15_1 + ",\\n" + ch15_2 + "\\n];\\n";');
fs.writeFileSync('generate_chapters.cjs', code);
console.log('Fixed');
