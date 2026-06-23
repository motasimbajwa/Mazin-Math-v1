const fs = require('fs');
let content = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');
const replacements = {
  'area_integral': "      tourSteps = [        { text: \"Welcome! Let's explore what an **Integral** geometrically represents.\" },        { text: \"The blue line is our function, f(x) = x². This could represent the speed of a car over time.\", changes: { layout: { annotations: [{ x: 1.5, y: 2.25, text: 'f(x) = x²', showarrow: true, arrowhead: 2, ax: -40, ay: -30, bgcolor: 'white' }] } } },        { text: \"We want to find the **accumulated total** (like total distance) from exactly x=0 to x=2.\", changes: { layout: { annotations: [{ x: 0, y: 0, text: 'Start x=0', showarrow: true, arrowhead: 2, ax: -40, ay: -40, bgcolor: 'white' }, { x: 2, y: 0, text: 'End x=2', showarrow: true, arrowhead: 2, ax: 40, ay: -40, bgcolor: 'white' }] } } },        { text: \"This geometric area under the curve is the exact value of the **Definite Integral**. Mathematically, it connects the rate of change to accumulation!\", changes: { layout: { annotations: [{ x: 1, y: 0.5, text: 'Area = Integral', showarrow: true, arrowhead: 1, ax: -50, ay: -30, bgcolor: 'rgba(255,255,255,0.9)' }] } } }      ];"
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
