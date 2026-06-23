const fs = require('fs');
let content = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');
const replacements = {
  'partial_derivatives': "      tourSteps = [         { text: \"**Partial Derivatives** measure the slope in one specific direction while keeping the other constant.\" },         { text: \"Look at the red line: this is f_x (the partial derivative with respect to x). We hold y=0 constant and slice the paraboloid.\", changes: { layout: { scene: { annotations: [{ x: 1, y: 0, z: 1, text: 'fx: Slope strictly along X', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: 30, ay: -30, bgcolor: 'white' }] } } } },         { text: \"The blue line is f_y. Here, we hold x=0 constant and slice exactly along the y axis.\", changes: { layout: { scene: { annotations: [{ x: 0, y: 1, z: 1, text: 'fy: Slope strictly along Y', showarrow: true, arrowhead: 2, arrowcolor: 'blue', ax: -30, ay: -30, bgcolor: 'white' }] } } } },         { text: \"At the origin (0,0), both slices are perfectly flat (slope=0), which means we have a critical point!\", changes: { layout: { scene: { annotations: [{ x: 0, y: 0, z: 0, text: 'Both flat slope=0', showarrow: true, arrowhead: 2, ax: 40, ay: -50, bgcolor: 'white' }] } } } }      ];",
  'directional_derivative': "      tourSteps = [         { text: \"The **Directional Derivative** generalizes partial derivatives to ANY direction angle.\" },         { text: \"The blue vector u in the xy-plane chooses our exact walking direction.\", changes: { layout: { scene: { annotations: [{ x: 1, y: 1, z: 0, text: 'Direction Vector u', showarrow: true, arrowhead: 2, ax: 40, ay: 0, bgcolor: 'white' }] } } } },         { text: \"As we walk along u, the red line climbs the surface. The slope of this exact red climb is our directional derivative D_u f!\", changes: { layout: { scene: { annotations: [{ x: 1, y: 1, z: 2, text: 'Slope upwards', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: 30, ay: -30, bgcolor: 'white' }] } } } }      ];",
  'tangent_plane': "      tourSteps = [         { text: \"In 2D we use tangent lines. In 3D, we use a **Tangent Plane** to linearly approximate a surface!\" },         { text: \"The curved blue bowl is our true function f(x,y).\" },         { text: \"The red semi-transparent flat sheet is the Tangent Plane exactly at (1,1).\", changes: { layout: { scene: { annotations: [{ x: 1.5, y: 1.5, z: 1.5, text: 'Linear Approx. Plane', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: -40, ay: -40, bgcolor: 'white' }] } } } },         { text: \"Near the point of tangency, the flat plane is a fantastic, simple proxy for the messy curved bowl!\", changes: { layout: { scene: { annotations: [{ x: 1, y: 1, z: 2, text: 'Touches perfectly here', showarrow: true, arrowhead: 3, arrowcolor: 'green', ax: 50, ay: -50, bgcolor: 'white' }] } } } }      ];"
};
for (const [caseName, newCode] of Object.entries(replacements)) {
  const caseHeader = "case '" + caseName + "':";
  let startIdx = content.indexOf(caseHeader);
  if (startIdx !== -1) {
    const stepsStartStr = "tourSteps = [";
    const stepsStart = content.indexOf(stepsStartStr, startIdx);
    const endSteps = content.indexOf("];\n", stepsStart);
    if(stepsStart !== -1 && endSteps !== -1) {
       content = content.substring(0, stepsStart) + newCode.trim() + content.substring(endSteps + 2);
    }
  }
}
fs.writeFileSync('src/InteractivePlot.tsx', content, 'utf8');
