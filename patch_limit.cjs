const fs = require('fs');
let lines = fs.readFileSync('src/data.ts', 'utf8').split('\\n');
for (let i = 0; i < lines.length; i++) {
  if (i >= 6750 && i <= 6770 && lines[i].includes('data-plot-id="two_path_test"')) {
    lines[i] = lines[i].replace('two_path_test', 'path_dependence');
  }
}
fs.writeFileSync('src/data.ts', lines.join('\\n'));
