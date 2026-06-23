const fs = require('fs');

const cases = `
    case 'vector_field_radial':
      {
         const x: number[] = []; const y: number[] = [];
         const u: number[] = []; const v: number[] = [];
         for(let i=-5; i<=5; i+=1.5) {
           for(let j=-5; j<=5; j+=1.5) {
              x.push(i); y.push(j);
              const r = Math.sqrt(i*i + j*j) || 1;
              u.push(i/r); v.push(j/r);
           }
         }
         defaultData = [
            {
               type: 'cone',
               x, y, u, v,
               sizemode: 'scaled',
               sizeref: 0.8,
               colorscale: 'Blues',
               showscale: false
            }
         ];
         defaultLayout.title = 'Radial Vector Field F = r';
         tourSteps = [
            { text: "This is a **Radial Vector Field**. Every arrow points outward from the origin." },
            { text: "In electricity, this resembles the field lines of a positive point charge." }
         ];
      }
      break;

    case 'vector_field_tangential':
      {
         const x: number[] = []; const y: number[] = [];
         const u: number[] = []; const v: number[] = [];
         for(let i=-5; i<=5; i+=1.5) {
           for(let j=-5; j<=5; j+=1.5) {
              x.push(i); y.push(j);
              const r = Math.sqrt(i*i + j*j) || 1;
              u.push(-j/r); v.push(i/r);
           }
         }
         defaultData = [
            {
               type: 'cone',
               x, y, u, v,
               sizemode: 'scaled',
               sizeref: 0.8,
               colorscale: 'Reds',
               showscale: false
            }
         ];
         defaultLayout.title = 'Tangential Vector Field F = -yi + xj';
         tourSteps = [
            { text: "This is a **Tangential Vector Field**. The arrows circulate around the origin." },
            { text: "This represents purely rotational flow, like a whirlpool or a magnetic field around a wire." }
         ];
      }
      break;

    case 'divergence_visual':
      defaultData = [
         {
            type: 'scatter',
            mode: 'markers',
            x: [0], y: [0],
            marker: { size: 40, color: 'blue', opacity: 0.3 }
         },
         {
            type: 'scatter',
            mode: 'lines+markers',
            x: [0, 1], y: [0, 1],
            marker: { symbol: 'arrow', size: 10 }
         },
          {
            type: 'scatter',
            mode: 'lines+markers',
            x: [0, -1], y: [0, 1],
            marker: { symbol: 'arrow', size: 10 }
         },
          {
            type: 'scatter',
            mode: 'lines+markers',
            x: [0, 1], y: [0, -1],
            marker: { symbol: 'arrow', size: 10 }
         },
          {
            type: 'scatter',
            mode: 'lines+markers',
            x: [0, -1], y: [0, -1],
            marker: { symbol: 'arrow', size: 10 }
         }
      ];
      defaultLayout.title = 'Positive Divergence (Source)';
      defaultLayout.showlegend = false;
      tourSteps = [
         { text: "Positive Divergence indicates a **Source**. Stuff is flowing outward from the center." },
         { text: "Net flux through the circular volume is positive!" }
      ];
      break;

    case 'curl_visual':
      {
         const x: number[] = []; const y: number[] = [];
         const u: number[] = []; const v: number[] = [];
         for(let i=-3; i<=3; i+=1) {
           for(let j=-3; j<=3; j+=1) {
              x.push(i); y.push(j);
              u.push(-j); v.push(i);
           }
         }
         defaultData = [
            {
               type: 'cone',
               x, y, u, v,
               sizemode: 'scaled',
               sizeref: 0.3,
               colorscale: 'Viridis',
               showscale: false
            }
         ];
         defaultLayout.title = 'Curl (Rotation)';
         tourSteps = [
            { text: "The field vectors circulate around the center. A paddlewheel placed here would spin." },
            { text: "The **Curl** vector would point straight out of the screen toward you, by the right-hand rule." }
         ];
      }
      break;

    case 'space_transform':
      defaultData = [
         {
            type: 'scatter',
            mode: 'lines',
            x: [-1, 1, 1, -1, -1],
            y: [-1, -1, 1, 1, -1],
            name: 'Original Grid'
         },
         {
            type: 'scatter',
            mode: 'lines',
            x: [-2, 2, 2, -2, -2],
            y: [-1, -1, 1, 1, -1],
            name: 'Transformed Grid',
            line: { color: 'red' }
         }
      ];
      defaultLayout.title = 'Geometric Transformation F(x,y) = (2x, y)';
      tourSteps = [
         { text: "The blue square represents our input domain area." },
         { text: "The red rectangle is the image under the mapping. Notice how $x$ is stretched by 2." },
         { text: "The **Jacobian Determinant** is 2. The area has doubled!" }
      ];
      break;

    case 'electrostatic_field':
    case 'directional_derivative':
    case 'tangent_plane_visual':
    case 'gradient_field':
    {
      const z: number[][] = [];
      for(let i=0; i<=20; i++){
         let row: number[] = [];
         for(let j=0; j<=20; j++){
            let x = -2 + i*0.2;
            let y = -2 + j*0.2;
            row.push(x*x + y*y); // inverted parabola
         }
         z.push(row);
      }
      defaultData = [
         {
            z: z,
            type: 'contour',
            colorscale: 'Jet'
         }
      ];
      defaultLayout.title = 'Gradient Field / Contour';
      tourSteps = [
         { text: "Contours represent constant levels (e.g. constant voltage or elevation)." },
         { text: "The gradient is perfectly orthogonal to these contours everywhere." }
      ];
      break;
    }
`;

let targetFile = 'src/InteractivePlot.tsx';
let txt = fs.readFileSync(targetFile, 'utf8');

if (!txt.includes('case \'vector_field_radial\':')) {
  let idx = txt.lastIndexOf('default:');
  if (idx !== -1) {
    let before = txt.substring(0, idx);
    let after = txt.substring(idx);
    fs.writeFileSync(targetFile, before + cases + '\\n    ' + after);
    console.log("Added visual cases to InteractivePlot.tsx");
  } else {
    console.log("Could not find default switch case.");
  }
} else {
  console.log("Visuals already present");
}
