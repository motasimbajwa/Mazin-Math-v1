const fs = require('fs');
let txt = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');

if (!txt.includes("case 'two_path_test':")) {
  let insertIndex = txt.indexOf("case 'stokes_capping_surface':");
  if (insertIndex !== -1) {
    let before = txt.substring(0, insertIndex);
    let after = txt.substring(insertIndex);
    
    let twoPathTest = `
    case 'two_path_test':
      defaultData = [
         { type: 'scatter3d', x: [0, 1.5, 3], y: [0, 1.5, 0], z: [0, 2, 0], mode: 'lines+markers', name: 'Path 1 (Over Mountain)', line: { color: 'red', width: 6 } },
         { type: 'scatter3d', x: [0, 0, 3], y: [0, -2, 0], z: [0, 0, 0], mode: 'lines+markers', name: 'Path 2 (Around Valley)', line: { color: 'blue', width: 6, dash: 'dash' } }
      ];
      defaultLayout.title = 'Path Independence in Conservative Fields';
      defaultLayout.scene = {
         xaxis: { range: [-1, 4] },
         yaxis: { range: [-3, 3] },
         zaxis: { range: [-1, 3] }
      };
      tourSteps = [
         { text: "Here are two different paths starting at (0,0,0) and ending at (3,0,0)." },
         { text: "Path 1 goes over a 'mountain' while Path 2 goes around it in the valley." },
         { text: "If the vector field is **Conservative** (like gravity or static electric field), the total work done along both paths is exactly the same!" }
      ];
      break;
`;
    fs.writeFileSync('src/InteractivePlot.tsx', before + twoPathTest + after);
  }
}
