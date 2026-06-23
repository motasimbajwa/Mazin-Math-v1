const fs = require('fs');
let text = fs.readFileSync('src/data.ts', 'utf8');

const regex = /(?<!\\)\\(?=[a-zA-Z\,{}()[\]])/g;
// Actually I want to avoid replacing \n, \t, \r, but since \nabla needs escaping, 
// let's do a replace using a replacer function.

let newText = text.replace(/(?<!\\)\\([a-zA-Z\,{}()[\]])/g, (match, p1) => {
  // If it's literally \n, \t, \r, don't double it, assuming it's for markdown spacing.
  // Wait, what about \nabla? \nabla is \n + abla.
  // So p1 is 'n'. But the full word is 'nabla'.
  return '\\\\' + p1;
});

// To be safe, let's reverse \n, \t, \r if they were just \n
newText = newText.replace(/\\\\(n|t|r)(?![a-zA-Z])/g, '\\$1');

fs.writeFileSync('src/data.ts', newText, 'utf8');
console.log('done replacing');
