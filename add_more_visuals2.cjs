const fs = require('fs');

let targetFile = 'src/InteractivePlot.tsx';
let txt = fs.readFileSync(targetFile, 'utf8');
if (!txt.includes('case 'divergence_cuboid':')) {
  let idx = txt.lastIndexOf('    default:');
  if (idx !== -1) {
    let before = txt.substring(0, idx);
    let after = txt.substring(idx);
    const moreCases = fs.readFileSync('add_more_details.txt', 'utf8');
    fs.writeFileSync(targetFile, before + moreCases + after);
    console.log('Added more visual cases to InteractivePlot.tsx');
  }
}
