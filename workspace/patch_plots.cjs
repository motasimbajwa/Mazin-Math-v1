const fs = require('fs');

let content = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');

const replacements = {
  'saddle_point': `
      tourSteps = [
         { text: "This is a classic **Saddle Point**. Notice how the shape curves like a Pringles chip." },
         { 
           text: "Exactly in the center (where the black dot is), the ground is completely flat. Here, the gradient $\\\\nabla f = 0$. This is a **Critical Point**.",
           highlights: [0, 1],
           changes: {
              layout: {
                 scene: {
                    annotations: [{
                       x: 0, y: 0, z: 0, text: 'Critical Point ∇f=0', showarrow: true, arrowhead: 2, ax: 40, ay: -50, bgcolor: 'rgba(255,255,255,0.8)'
                    }]
                 }
              }
           }
         },
         {
           text: "However, it is NOT a peak or a valley. Look along the x-axis: it curves *upwards* like a bowl.",
           changes: {
              layout: {
                 scene: {
                    annotations: [{ x: 1.5, y: 0, z: 1.5*1.5, text: 'Curves Up', showarrow: true, arrowhead: 2, arrowcolor: 'green', ax: 30, ay: -30, bgcolor: 'rgba(255,255,255,0.8)' }]
                 }
              }
           }
         },
         {
           text: "Now look along the y-axis: it curves *downwards* into a valley. Because it goes up in one direction and down in another, the Second Derivative Test discriminant D is less than 0!",
           changes: {
              layout: {
                 scene: {
                    annotations: [{ x: 0, y: 1.5, z: -1.5*1.5, text: 'Curves Down', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: -30, ay: -30, bgcolor: 'rgba(255,255,255,0.8)' }]
                 }
              }
           }
         }
      ];`,
      
  'lagrange_multiplier': `
      tourSteps = [
         { text: "With **Lagrange Multipliers**, we want to maximize or minimize a function $f(x,y)$ subject to a constraint. The blue background shows the contour level curves of our objective function." },
         { 
           text: "The red loop is our constraint curve $g(x,y)=c$. You can think of it as a walking trail. We want to find the highest or lowest contour value we reach while staying on this trail.",
           changes: { layout: { annotations: [{ x: 1.8, y: 1.5, text: 'Constraint Path', showarrow: true, arrowhead: 2, ax: 50, ay: 0 }] } }
         },
         { 
           text: "The extreme values happen exactly where a blue contour level is **tangent** to the red constraint line.",
           changes: { layout: { annotations: [{ x: -0.7, y: 1.7, text: 'Point of Tangency', showarrow: true, arrowhead: 3, arrowcolor: 'green', ax: -50, ay: -50, bgcolor: 'white' }] } }
         },
         { 
           text: "At these tangent points, their normal vectors (the gradients) point in the exact same direction. This geometric reality gives us the equation: $\\\\nabla f = \\\\lambda \\\\nabla g$!" 
         }
      ];`,

  'double_integral': `
      tourSteps = [
         { text: "A **Double Integral** perfectly sums up infinite microscopic volume blocks to find the total volume trapped between the xy-plane and a 3D surface." },
         { 
           text: "This 3D surface is given by $z = f(x,y)$. Notice how the height of the surface changes as you move around.",
           changes: { layout: { scene: { annotations: [{ x: 1.5, y: 1.5, z: 2.5, text: 'Surface Roof z=f(x,y)', showarrow: true, arrowhead: 2, ax: 50, ay: -30, bgcolor: 'rgba(255,255,255,0.8)' }] } } }
         },
         { 
           text: "$$\\\\iint_R f(x,y) dA$$ can be evaluated via **Fubini\\'s Theorem** as iterated 1D integrals. We integrate along one axis first, sweeping out a 2D sheet, and then integrate those sheets along the other axis.",
           changes: { layout: { scene: { annotations: [{ x: 0, y: 0, z: 0, text: 'Base Area dA', showarrow: true, arrowhead: 2, ax: -50, ay: 20, bgcolor: 'rgba(255,255,255,0.8)' }] } } }
         },
         { text: "The differential area $dA$ in the xy-plane becomes our block's base, and the function $f(x,y)$ provides its height. Summing them all up gives us the precise volume!" }
      ];`,

  'center_of_mass': `
      tourSteps = [
         { text: "Using Double Integrals, we can find the exact **Center of Mass** (Centroid) of any 2D shape." },
         { 
           text: "This blue triangle represents a thin plate with uniform density. First, we integrate over the region to find its total mass $M$.",
           changes: { layout: { annotations: [{ x: 1, y: 0.5, text: 'Total Mass M', showarrow: true, arrowhead: 1, ax: 50, ay: -30, bgcolor: 'white' }] } }
         },
         { 
           text: "Then, we compute the 'Moments' $M_x$ and $M_y$, which measure the plate's tendency to rotate around the axes. By dividing these moments by the total mass, we find the balance coordinates: $\\\\bar{x} = M_y / M$." 
         },
         { 
           text: "The red crosshair marks this exact geometric balance point. If you placed this plate on a pinpoint right there, it would balance perfectly!",
           changes: { layout: { annotations: [{ x: 0.66, y: 0.66, text: 'Center of Mass (Centroid)', showarrow: true, arrowhead: 3, arrowcolor: 'red', ax: 50, ay: -50, bgcolor: 'rgba(255,255,255,1)' }] } }
         }
      ];`,
      
  'contour_paraboloid': `
      tourSteps = [
         { text: "This is a **Contour Plot**—a 2D map of our 3D paraboloid mountain from above." },
         { 
           text: "Each circle represents a specific altitude (a constant z value). Looking at topographic maps works exactly this way.",
           changes: { layout: { annotations: [{ x: 5, y: 0, text: 'Level Curve (z=constant)', showarrow: true, arrowhead: 2, ax: 60, ay: 30, bgcolor: 'white' }] } }
         },
         { 
           text: "Notice how the distance between rings changes. Closer lines mean a steeper slope in 3D!",
           changes: { layout: { annotations: [
              { x: 9, y: 0, text: 'Steeper (lines close)', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: 50, ay: -30, bgcolor: 'white' },
              { x: 2, y: 0, text: 'Flatter', showarrow: true, arrowhead: 2, arrowcolor: 'green', ax: 50, ay: 30, bgcolor: 'white' }
           ] } }
         }
      ];`
};

for (const [caseName, newCode] of Object.entries(replacements)) {
  const caseHeader = "case '" + caseName + "':";
  let startIdx = content.indexOf(caseHeader);
  if (startIdx === -1) {
    console.error("Could not find", caseName);
    continue;
  }
  
  const stepsStartStr = "tourSteps = [";
  const stepsStart = content.indexOf(stepsStartStr, startIdx);
  if (stepsStart === -1 || stepsStart > content.indexOf("break;", startIdx)) {
    console.error("Could not find tourSteps inside", caseName);
    continue;
  }
  
  const endSteps = content.indexOf("];\n", stepsStart) + 2;
  
  content = content.substring(0, stepsStart) + newCode.trim() + content.substring(endSteps);
  console.log("Patched", caseName);
}

fs.writeFileSync('src/InteractivePlot.tsx', content, 'utf8');
console.log("Done");
