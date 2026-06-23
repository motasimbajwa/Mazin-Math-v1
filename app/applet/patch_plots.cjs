const fs = require('fs');
let text = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');

const missingPlots = `
    case 'chain_rule_tree':
      defaultData = [
         {
            type: 'scatter', mode: 'lines+markers+text',
            x: [2, 1, 3, 0.5, 1.5, 2.5, 3.5],
            y: [3, 2, 2, 1, 1, 1, 1],
            text: ['w', 'x', 'y', 'r', 's', 'r', 's'],
            textfont: {size: 16, color: 'white'},
            marker: {size: 40, color: '#4f46e5'},
            textposition: 'middle center',
            line: {color: '#94a3b8', width: 2}
         },
         // Lines
         {
            type: 'scatter', mode: 'lines',
            x: [2, 1, null, 2, 3, null, 1, 0.5, null, 1, 1.5, null, 3, 2.5, null, 3, 3.5],
            y: [3, 2, null, 3, 2, null, 2, 1, null, 2, 1, null, 2, 1, null, 2, 1],
            line: {color: '#94a3b8', width: 2}, hoverinfo: 'none'
         }
      ];
      defaultLayout.title = 'Chain Rule Tree Diagram';
      defaultLayout.xaxis = {visible: false};
      defaultLayout.yaxis = {visible: false};
      tourSteps = [
         { text: "This is a **Tree Diagram**. The output $w$ is at the top layer, relying on intermediate variables." },
         { text: "Here, $w$ depends on $x$ and $y$. We draw lines downwards to show this connection." },
         { text: "Both $x$ and $y$ depend on independent root variables $r$ and $s$. We branch out further." },
         { text: "To find $\\\\partial w/\\\\partial r$, trace every path from $w$ down to $r$! (Paths: $w\\\\to x\\\\to r$ and $w\\\\to y\\\\to r$). Add their products." }
      ];
      break;

    case 'gradient_vector':
      defaultData = [
         {
            type: 'contour',
            z: Array.from({length: 20}, (_, i) => {
               const y = -2 + (i * 4 / 19);
               return Array.from({length: 20}, (_, j) => {
                  const x = -2 + (j * 4 / 19);
                  return x*x + y*y; 
               });
            }),
            x: Array.from({length: 20}, (_, j) => -2 + (j * 4 / 19)),
            y: Array.from({length: 20}, (_, i) => -2 + (i * 4 / 19)),
            colorscale: 'Viridis'
         },
         {
            type: 'scatter', mode: 'markers+text',
            x: [1], y: [1], marker: {color: 'red', size: 10},
            text: ['(1,1)'], textposition: 'top right'
         },
         {
            type: 'scatter', mode: 'lines',
            x: [1, 2], y: [1, 2],
            line: {color: 'red', width: 4}, name: 'Gradient'
         }
      ];
      defaultLayout.title = 'Gradient Vector and Level Curves';
      tourSteps = [
         { text: "The contour map shows level curves of a bowl $f(x,y) = x^2+y^2$." },
         { text: "At point $(1,1)$, the gradient vector $\\\\nabla f$ is $\\\\langle 2, 2 \\\\rangle$." },
         { text: "Notice how the red gradient arrow points **perpendicular** to the contour level curve." },
         { text: "It always points in the direction of **steepest ascent**!" }
      ];
      break;
`;

if (!text.includes("case 'chain_rule_tree':")) {
    text = text.replace("default:", missingPlots + "\n    default:");
    fs.writeFileSync('src/InteractivePlot.tsx', text, 'utf8');
}
