const fs = require('fs');
let content = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');
const replacements = {
  'tangent_line': "      tourSteps = [        { text: \"A **Derivative** measures the exact slope of a function at a single point.\" },        { text: \"As we zoom in on the blue curve f(x)=x² around the point x=1, it begins to look like a straight line.\", changes: { layout: { annotations: [{ x: 1, y: 1, text: 'Zoom in here', showarrow: true, arrowhead: 2, ax: -40, ay: -40 }] } } },        { text: \"The red dashed line is the **Tangent Line**. It perfectly matches the curve's slope at exactly x=1.\", changes: { layout: { annotations: [{ x: 0.5, y: -0.5, text: 'Slope = f(1) = 2', showarrow: true, arrowhead: 2, ax: 40, ay: 20 }] } } },        { text: \"This line allows us to approximate the function linearly!\" }      ];",
  'limit_hole': "      tourSteps = [        { text: \"Consider the function f(x) = (x²-4)/(x-2). It is identical to the line x+2 everywhere...\" },        { text: \"Except at exactly x=2, where it becomes 0/0. Mathematically, the function does not exist there!\", changes: { layout: { annotations: [{ x: 2, y: 4, text: 'Undefined Hole', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: -40, ay: 40 }] } } },        { text: \"However, the **Limit** as we approach x=2 from both the left and the right converges perfectly to 4.\", changes: { layout: { annotations: [{ x: 1, y: 3, text: 'Approach from left', showarrow: true, arrowhead: 2, ax: -40, ay: -40 }, { x: 3, y: 5, text: 'Approach from right', showarrow: true, arrowhead: 2, ax: 40, ay: -40 }] } } }      ];"
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
