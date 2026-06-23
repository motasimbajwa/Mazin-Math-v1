const fs = require('fs');
let txt = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');
if (!txt.includes('divergence_cuboid')) {
  let idx = txt.lastIndexOf('    default:');
  if (idx !== -1) {
    let before = txt.substring(0, idx);
    let after = txt.substring(idx);
    fs.writeFileSync('src/InteractivePlot.tsx', before + fs.readFileSync('add_more_details.txt', 'utf8') + '\n' + after);
    console.log('success');
  }
}
