import { useState, useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';
import { Play, Square, ChevronRight, ChevronLeft, Info, Volume2, VolumeX } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const InteractivePlot = ({ plotId }: { plotId: string }) => {
  const [tourIndex, setTourIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const playIntervalRef = useRef<number | null>(null);

  const plotStyle = { width: '100%', height: '400px' };

  // Generate data based on plotId
  let defaultData: any[] = [];
  let defaultLayout: any = { autosize: true, margin: { l: 40, r: 40, t: 40, b: 40 } };
  let tourSteps: any[] = [];

  switch (plotId) {
    case '3d_coordinate_system':
      defaultData = [
        {
          type: 'scatter3d',
          mode: 'markers+text',
          x: [2, -1], y: [3, 2], z: [4, 1],
          text: ['P(2, 3, 4)', 'Q(-1, 2, 1)'],
          textposition: 'top right',
          marker: { size: 6, color: ['blue', 'red'] },
          name: 'Points'
        },
        {
          type: 'scatter3d',
          mode: 'lines',
          x: [2, -1], y: [3, 2], z: [4, 1],
          line: { color: 'green', dash: 'dash', width: 4 },
          name: 'Distance'
        }
      ];
      defaultLayout.title = 'Points and Distance in 3D Space';
      defaultLayout.scene = { camera: { eye: {x: 1.5, y: -1.5, z: 1.5} } };
      tourSteps = [
        { text: "A 3D coordinate system uses X, Y, and Z axes. Notice the points P(2,3,4) and Q(-1,2,1)." },
        { text: "The distance between them is found using the 3D distance formula: √((x2-x1)² + (y2-y1)² + (z2-z1)²)." }
      ];
      break;

    case 'plane_equation':
      defaultData = [
        {
          type: 'surface',
          x: [-5, 5],
          y: [-5, 5],
          z: [
            [(16 - (-5) + 2*(-5))/5, (16 - 5 + 2*(-5))/5],
            [(16 - (-5) + 2*5)/5, (16 - 5 + 2*5)/5]
          ],
          showscale: false,
          colorscale: 'Blues',
          opacity: 0.7,
          name: 'Plane: x - 2y + 5z = 16'
        },
        {
          type: 'scatter3d',
          mode: 'lines+markers',
          x: [2, 2 + 1], y: [3, 3 - 2], z: [4, 4 + 5],
          marker: { size: [0, 6], color: 'red' },
          line: { color: 'red', width: 5 },
          name: 'Normal Vector ⟨1, -2, 5⟩'
        },
        {
          type: 'scatter3d',
          mode: 'markers+text',
          x: [2], y: [3], z: [4],
          text: ['P(2, 3, 4)'],
          textposition: 'bottom right',
          marker: { size: 5, color: 'black' },
          name: 'Point P'
        }
      ];
      defaultLayout.title = 'Plane & Normal Vector';
      tourSteps = [
        { text: "A plane in 3D space is perfectly flat and extends infinitely." },
        { text: "It is completely defined by a single point P(2,3,4) and a perpendicular 'Normal Vector' n = ⟨1, -2, 5⟩." },
        { text: "Every vector on this plane must be perfectly orthogonal (90 degrees) to the red normal vector!" }
      ];
      break;

    case 'vector_components':
      defaultData = [
        {
          type: 'scatter3d',
          mode: 'lines+markers',
          x: [0, 2], y: [0, 3], z: [0, 4],
          marker: { size: [0, 5], color: 'red' },
          line: { color: 'red', width: 5 },
          name: 'Vector <2, 3, 4>'
        },
        {
          type: 'scatter3d',
          mode: 'lines',
          x: [0, 2], y: [0, 0], z: [0, 0],
          line: { color: 'blue', dash: 'dash' },
          name: 'X component (2)'
        },
        {
          type: 'scatter3d',
          mode: 'lines',
          x: [2, 2], y: [0, 3], z: [0, 0],
          line: { color: 'green', dash: 'dash' },
          name: 'Y component (3)'
        },
        {
          type: 'scatter3d',
          mode: 'lines',
          x: [2, 2], y: [3, 3], z: [0, 4],
          line: { color: 'orange', dash: 'dash' },
          name: 'Z component (4)'
        }
      ];
      defaultLayout.title = 'Vector Components in 3D Space';
      defaultLayout.scene = { camera: { eye: {x: 1.5, y: -1.5, z: 1.2} } };
      tourSteps = [
        { text: "A 3D vector like `<2, 3, 4>` is physical instructions: move along X, then Y, then Z." },
        { text: "First, we travel 2 units along the blue X-axis.", highlights: [1] },
        { text: "Then, we move 3 units parallel to the green Y-axis.", highlights: [2] },
        { text: "Finally, we elevate 4 units parallel to the orange Z-axis. The red arrow is the net result!", highlights: [0, 3] }
      ];
      break;

    case 'dot_product':
      defaultData = [
        {
          type: 'scatter',
          mode: 'lines+markers',
          x: [0, 4], y: [0, 3],
          line: { color: 'blue', width: 4 },
          marker: { size: [0, 8] },
          name: 'Force F'
        },
        {
          type: 'scatter',
          mode: 'lines+markers',
          x: [0, 5], y: [0, 0],
          line: { color: 'green', width: 4 },
          marker: { size: [0, 8] },
          name: 'Path D'
        },
        {
          type: 'scatter',
          mode: 'lines',
          x: [4, 4], y: [3, 0],
          line: { color: 'red', dash: 'dash' },
          name: 'Projection'
        }
      ];
      defaultLayout.title = 'Dot Product (Agreement)';
      defaultLayout.xaxis = { range: [-1, 6] };
      defaultLayout.yaxis = { range: [-1, 4] };
      tourSteps = [
        { text: "The Dot Product measures **agreement**. Let's say the green vector is your path, and the blue vector is your pushing force." },
        { text: "The red dashed line drops straight down from the Force vector onto the Path vector." },
        { text: "The shadow cast (the projection) tells us how much of the pushing force actually helps move the cart along the path. Work = Force • Path." }
      ];
      break;

    case 'cross_product':
      defaultData = [
        {
          type: 'scatter3d',
          mode: 'lines+markers',
          x: [0, 2], y: [0, 0], z: [0, 0],
          line: { color: 'blue', width: 4 },
          marker: { size: [0, 6] },
          name: 'Vector u'
        },
        {
          type: 'scatter3d',
          mode: 'lines+markers',
          x: [0, 0], y: [0, 2], z: [0, 0],
          line: { color: 'green', width: 4 },
          marker: { size: [0, 6] },
          name: 'Vector v'
        },
        {
          type: 'scatter3d',
          mode: 'lines+markers',
          x: [0, 0], y: [0, 0], z: [0, 4],
          line: { color: 'red', width: 6 },
          marker: { size: [0, 8] },
          name: 'u × v'
        }
      ];
      defaultLayout.title = 'Cross Product (The Twist)';
      defaultLayout.scene = { camera: { eye: {x: 1.5, y: 1.5, z: 1.5} } };
      tourSteps = [
        { text: "The Cross Product creates a new vector perfectly **perpendicular** to the originals." },
        { text: "If u (blue) is the handle of a wrench, and v (green) is the pushing force..." },
        { text: "The cross product (red arrow) represents the torque slicing straight up along the Z-axis!" }
      ];
      break;

    case 'area_integral':
      defaultData = [
        {
          x: Array.from({length: 400}, (_, i) => -1 + (i * 4 / 399)),
          y: Array.from({length: 400}, (_, i) => Math.pow(-1 + (i * 4 / 399), 2)),
          type: 'scatter', mode: 'lines', line: {color: 'blue'}, name: 'f(x) = x²'
        },
        {
          x: Array.from({length: 100}, (_, i) => i * 2 / 99),
          y: Array.from({length: 100}, (_, i) => Math.pow(i * 2 / 99, 2)),
          fill: 'tozeroy', type: 'scatter', mode: 'none', fillcolor: 'rgba(173, 216, 230, 0)', name: 'Area (0 to 2)',
          showlegend: false
        }
      ];
      defaultLayout.title = 'Area under the curve f(x) = x²';
      
      tourSteps = [        { text: "Welcome! Let's explore what an **Integral** geometrically represents." },        { text: "The blue line is our function, f(x) = x². This could represent the speed of a car over time.", changes: { layout: { annotations: [{ x: 1.5, y: 2.25, text: 'f(x) = x²', showarrow: true, arrowhead: 2, ax: -40, ay: -30, bgcolor: 'white' }] } } },        { text: "We want to find the **accumulated total** (like total distance) from exactly x=0 to x=2.", changes: { layout: { annotations: [{ x: 0, y: 0, text: 'Start x=0', showarrow: true, arrowhead: 2, ax: -40, ay: -40, bgcolor: 'white' }, { x: 2, y: 0, text: 'End x=2', showarrow: true, arrowhead: 2, ax: 40, ay: -40, bgcolor: 'white' }] } } },        { text: "This geometric area under the curve is the exact value of the **Definite Integral**. Mathematically, it connects the rate of change to accumulation!", changes: { layout: { annotations: [{ x: 1, y: 0.5, text: 'Area = Integral', showarrow: true, arrowhead: 1, ax: -50, ay: -30, bgcolor: 'rgba(255,255,255,0.9)' }] } } }      ];
      break;
    case 'tangent_line':
      defaultData = [
        {
          x: Array.from({length: 400}, (_, i) => -1 + (i * 4 / 399)),
          y: Array.from({length: 400}, (_, i) => Math.pow(-1 + (i * 4 / 399), 2)),
          type: 'scatter', mode: 'lines', line: {color: 'blue'}, name: 'f(x) = x²'
        },
        {
          x: Array.from({length: 400}, (_, i) => -1 + (i * 4 / 399)),
          y: Array.from({length: 400}, (_, i) => 2 * (-1 + (i * 4 / 399)) - 1),
          type: 'scatter', mode: 'lines', line: {color: 'rgba(255,0,0,0)', dash: 'dash'}, name: 'Tangent at x=1',
          showlegend: false
        },
        {
          x: [1], y: [1], type: 'scatter', mode: 'markers', marker: {color: 'rgba(255,0,0,0)', size: 8}, name: 'x=1',
          showlegend: false
        }
      ];
      defaultLayout.title = 'Tangent line at x=1';
      defaultLayout.yaxis = { range: [-2, 9] };
      
      tourSteps = [        { text: "A **Derivative** measures the exact slope of a function at a single point." },        { text: "As we zoom in on the blue curve f(x)=x² around the point x=1, it begins to look like a straight line.", changes: { layout: { annotations: [{ x: 1, y: 1, text: 'Zoom in here', showarrow: true, arrowhead: 2, ax: -40, ay: -40 }] } } },        { text: "The red dashed line is the **Tangent Line**. It perfectly matches the curve's slope at exactly x=1.", changes: { layout: { annotations: [{ x: 0.5, y: -0.5, text: 'Slope = f(1) = 2', showarrow: true, arrowhead: 2, ax: 40, ay: 20 }] } } },        { text: "This line allows us to approximate the function linearly!" }      ];
      break;
    case 'limit_hole':
      defaultData = [
        {
          x: Array.from({length: 400}, (_, i) => (i * 4 / 399)),
          y: Array.from({length: 400}, (_, i) => Math.pow((i * 4 / 399), 2)),
          type: 'scatter', mode: 'lines', line: {color: 'blue'}, name: 'f(x) approaches 4'
        },
        {
          x: [2], y: [4], type: 'scatter', mode: 'markers', marker: {color: 'white', size: 12, line: {color: 'blue', width: 2}}, name: 'Hole'
        }
      ];
      defaultLayout.title = 'Limit approaching a hole at x=2';
      
      tourSteps = [        { text: "Consider the function f(x) = (x²-4)/(x-2). It is identical to the line x+2 everywhere..." },        { text: "Except at exactly x=2, where it becomes 0/0. Mathematically, the function does not exist there!", changes: { layout: { annotations: [{ x: 2, y: 4, text: 'Undefined Hole', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: -40, ay: 40 }] } } },        { text: "However, the **Limit** as we approach x=2 from both the left and the right converges perfectly to 4.", changes: { layout: { annotations: [{ x: 1, y: 3, text: 'Approach from left', showarrow: true, arrowhead: 2, ax: -40, ay: -40 }, { x: 3, y: 5, text: 'Approach from right', showarrow: true, arrowhead: 2, ax: 40, ay: -40 }] } } }      ];
      break;
    case 'paraboloid':
      defaultData = [
        {
          z: Array.from({length: 50}, (_, i) => {
               const y = -10 + (i * 20 / 49);
               return Array.from({length: 50}, (_, j) => {
                  const x = -10 + (j * 20 / 49);
                  return 100 - x*x - y*y;
               });
             }),
          x: Array.from({length: 50}, (_, j) => -10 + (j * 20 / 49)),
          y: Array.from({length: 50}, (_, i) => -10 + (i * 20 / 49)),
          type: 'surface', colorscale: 'Viridis'
        }
      ];
      defaultLayout.title = '3D Surface: z = 100 - x² - y²';
      
      tourSteps = [
         { text: "Welcome to Multivariable Calculus! Here we have a Paraboloid, a 3D analog of a parabola." },
         { text: "Instead of just $x$ mapping to $y$, both $x$ and $y$ map to an altitude $z$. Try rotating the graph with your mouse!" },
         { text: "Imagine slicing this mountain horizontally. Each slice generates a circle. These are called **Level Curves**." }
      ];
      break;
    case 'contour_paraboloid':
      defaultData = [
         {
            z: Array.from({length: 100}, (_, i) => {
               const y = -10 + (i * 20 / 99);
               return Array.from({length: 100}, (_, j) => {
                  const x = -10 + (j * 20 / 99);
                  return 100 - x*x - y*y;
               });
            }),
            x: Array.from({length: 100}, (_, j) => -10 + (j * 20 / 99)),
            y: Array.from({length: 100}, (_, i) => -10 + (i * 20 / 99)),
            type: 'contour', colorscale: 'Viridis'
         }
      ];
      defaultLayout.title = 'Contour Plot of z = 100 - x² - y²';
      
      tourSteps = [         { text: "This is a **Contour Plot**—a 2D map of our 3D paraboloid mountain from above." },         { text: "Each circle represents a specific altitude (a constant z value).", changes: { layout: { annotations: [{ x: 5, y: 0, text: 'Level Curve', showarrow: true, arrowhead: 2, ax: 60, ay: 30, bgcolor: 'white' }] } } },         { text: "Notice the distance between rings. Closer lines mean a steeper slope in 3D!", changes: { layout: { annotations: [{ x: 9, y: 0, text: 'Steeper (close)', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: 50, ay: -30, bgcolor: 'white' }, { x: 2, y: 0, text: 'Flatter', showarrow: true, arrowhead: 2, arrowcolor: 'green', ax: 50, ay: 30, bgcolor: 'white' }] } } }      ];
      break;
    case 'interior_boundary':
      defaultData = [
         {
            x: Array.from({length: 100}, (_, i) => 5 * Math.cos(i * 2 * Math.PI / 99)),
            y: Array.from({length: 100}, (_, i) => 5 * Math.sin(i * 2 * Math.PI / 99)),
            type: 'scatter', mode: 'lines', fill: 'toself', line: {color: 'blue'}, fillcolor: 'rgba(173, 216, 230, 0.3)', name: 'Boundary'
         },
         {
            x: [2], y: [2], type: 'scatter', mode: 'markers', marker: {color: 'green', size: 10}, name: 'Interior'
         },
         {
            x: [5], y: [0], type: 'scatter', mode: 'markers', marker: {color: 'red', size: 10}, name: 'Boundary Point'
         }
      ];
      defaultLayout.title = 'Interior vs Boundary Points';
      defaultLayout.yaxis = {scaleanchor: "x", scaleratio: 1};
      
      tourSteps = [
         { text: "When defining domains in 2D, we distinguish between **Interior** and **Boundary** points." },
         { 
           text: "The green point is an **Interior Point**. You can draw a small circle around it that stays entirely within the shaded region.",
           highlights: [0, 1]
         },
         {
            text: "The red point is a **Boundary Point**. Any circle you draw around it, no matter how small, will capture both inside and outside points.",
            highlights: [0, 2]
         }
      ];
      break;
    case 'path_dependence':
      defaultData = [
         {
           z: Array.from({length: 50}, (_, i) => {
                const y = -1 + (i * 2 / 49);
                return Array.from({length: 50}, (_, j) => {
                   const x = -1 + (j * 2 / 49);
                   return (2*x*y) / (x*x + y*y + 1e-10);
                });
              }),
           x: Array.from({length: 50}, (_, j) => -1 + (j * 2 / 49)),
           y: Array.from({length: 50}, (_, i) => -1 + (i * 2 / 49)),
           type: 'surface', colorscale: 'RdBu'
         }
      ];
      defaultLayout.title = 'f(x,y) = (2xy)/(x²+y²) near origin';
      
      tourSteps = [
         { text: "Limits in 3D are tricky. Look at this weirdly shaped bow-tie surface near the center $(0,0)$." },
         { text: "If you approach the center along the x-axis, you stay at $z=0$. But if you walk along the diagonal line $y=x$, you are suspended at $z=1$!" },
         { text: "Because your altitude depends entirely on the **path** you take to the center, we say the limit simply **does not exist**." }
      ];
      break;
    case 'tricky_contour':
       defaultData = [
         {
            z: Array.from({length: 100}, (_, i) => {
               const y = -5 + (i * 10 / 99);
               return Array.from({length: 100}, (_, j) => {
                  const x = -5 + (j * 10 / 99);
                  return (2 * x * x * y) / (Math.pow(x, 4) + y * y + 1e-10);
               });
            }),
            x: Array.from({length: 100}, (_, j) => -5 + (j * 10 / 99)),
            y: Array.from({length: 100}, (_, i) => -5 + (i * 10 / 99)),
            type: 'contour', colorscale: 'Viridis'
         }
       ];
       defaultLayout.title = 'Contour of f(x,y) = (2x²y)/(x⁴+y²)';
       tourSteps = [
          { text: "Here is a contour plot of another tricky limit function at $(0,0)$." },
          { text: "Approaching via any straight line reveals a limit of $0$ (the yellow regions funneling inwards)." },
          { text: "However, approaching via a parabolic path like $y = x^2$ keeps you perfectly on a high-value contour line forever. So, limit DNE!" }
       ];
       break;
    case 'polar':
       defaultData = [
         {
           type: 'scatterpolar',
           r: Array.from({length: 100}, () => 2),
           theta: Array.from({length: 100}, (_, i) => i * 360 / 99),
           mode: 'lines',
           line: {color: 'blue'}
         },
         {
           type: 'scatterpolar',
           r: [0, 2],
           theta: [45, 45],
           mode: 'lines',
           line: {color: 'red', width: 2}
         }
       ];
       defaultLayout.title = 'Approaching origin via Polar Coordinates';
       tourSteps = [
          { text: "Converting variables to **Polar Coordinates** ($r$, $\\theta$) simplifies limit proofs." },
          { text: "Instead of worrying about infinite paths $(x,y)$, polar lets us squeeze the radius $r \\to 0$." },
          { text: "If the limit holds as $r$ shrinks, regardless of the angle $\\theta$ (like shrinking a circle), the limit exists globally!" }
       ];
       break;
    
    case 'partial_derivatives':
      defaultData = [
        {
          z: Array.from({length: 30}, (_, i) => {
               const y = -2 + (i * 4 / 29);
               return Array.from({length: 30}, (_, j) => {
                  const x = -2 + (j * 4 / 29);
                  return -x*x - y*y; // inverted bowl
               });
             }),
          x: Array.from({length: 30}, (_, j) => -2 + (j * 4 / 29)),
          y: Array.from({length: 30}, (_, i) => -2 + (i * 4 / 29)),
          type: 'surface', colorscale: 'Viridis', showscale: false, opacity: 0.8
        },
        {
          // y = 0 slice
          type: 'scatter3d', mode: 'lines',
          x: Array.from({length: 30}, (_, j) => -2 + (j * 4 / 29)),
          y: Array.from({length: 30}, () => 0),
          z: Array.from({length: 30}, (_, j) => {
             const x = -2 + (j * 4 / 29);
             return -x*x;
          }),
          line: {color: 'red', width: 5}, name: 'x-slice (y=0)'
        },
        {
          // x = 0 slice
          type: 'scatter3d', mode: 'lines',
          x: Array.from({length: 30}, () => 0),
          y: Array.from({length: 30}, (_, i) => -2 + (i * 4 / 29)),
          z: Array.from({length: 30}, (_, i) => {
             const y = -2 + (i * 4 / 29);
             return -y*y;
          }),
          line: {color: 'blue', width: 5}, name: 'y-slice (x=0)'
        }
      ];
      defaultLayout.title = 'Partial Derivatives (Slices of z = -x² - y²)';
      
      tourSteps = [         { text: "**Partial Derivatives** measure the slope in one specific direction while keeping the other constant." },         { text: "Look at the red line: this is f_x (the partial derivative with respect to x). We hold y=0 constant and slice the paraboloid.", changes: { layout: { scene: { annotations: [{ x: 1, y: 0, z: 1, text: 'fx: Slope strictly along X', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: 30, ay: -30, bgcolor: 'white' }] } } } },         { text: "The blue line is f_y. Here, we hold x=0 constant and slice exactly along the y axis.", changes: { layout: { scene: { annotations: [{ x: 0, y: 1, z: 1, text: 'fy: Slope strictly along Y', showarrow: true, arrowhead: 2, arrowcolor: 'blue', ax: -30, ay: -30, bgcolor: 'white' }] } } } },         { text: "At the origin (0,0), both slices are perfectly flat (slope=0), which means we have a critical point!", changes: { layout: { scene: { annotations: [{ x: 0, y: 0, z: 0, text: 'Both flat slope=0', showarrow: true, arrowhead: 2, ax: 40, ay: -50, bgcolor: 'white' }] } } } }      ];
      break;

    case 'chain_rule_helix':
      defaultData = [
        {
          z: Array.from({length: 30}, (_, i) => {
               const y = -1.5 + (i * 3 / 29);
               return Array.from({length: 30}, (_, j) => {
                  const x = -1.5 + (j * 3 / 29);
                  return x*y;
               });
             }),
          x: Array.from({length: 30}, (_, j) => -1.5 + (j * 3 / 29)),
          y: Array.from({length: 30}, (_, i) => -1.5 + (i * 3 / 29)),
          type: 'surface', colorscale: 'Blues', showscale: false, opacity: 0.6
        },
        {
          type: 'scatter3d', mode: 'lines',
          x: Array.from({length: 100}, (_, i) => Math.cos(i * 0.1)),
          y: Array.from({length: 100}, (_, i) => Math.sin(i * 0.1)),
          z: Array.from({length: 100}, (_, i) => Math.cos(i * 0.1) * Math.sin(i * 0.1)),
          line: {color: 'red', width: 6}, name: 'Particle Path'
        }
      ];
      defaultLayout.title = 'Chain Rule: Moving particle on z = xy';
      
      tourSteps = [
         { text: "The **Chain Rule** often models how a dependent output changes as you move dynamically through space." },
         { 
           text: "Our surface is $z = xy$. Imagine this is the temperature distribution in a room.",
           highlights: [0]
         },
         { 
           text: "The red path is a particle moving in a circle ($x=\\cos(t)$, $y=\\sin(t)$). As time $t$ changes, its position $(x,y)$ changes, which means the temperature $z$ it feels also changes!",
           highlights: [1]
         },
         { text: "To compute $dz/dt$, we multiply the temperature's spatial slopes by the particle's spatial velocities, bringing it all together." }
      ];
      break;

    case 'directional_derivative':
      defaultData = [
         {
            z: Array.from({length: 40}, (_, i) => {
               const y = -2 + (i * 4 / 39);
               return Array.from({length: 40}, (_, j) => {
                  const x = -2 + (j * 4 / 39);
                  return x*x + y*y;
               });
            }),
            x: Array.from({length: 40}, (_, j) => -2 + (j * 4 / 39)),
            y: Array.from({length: 40}, (_, i) => -2 + (i * 4 / 39)),
            type: 'contour', colorscale: 'Viridis'
         },
         {
            type: 'scatter', mode: 'lines+markers',
            x: [1, 1], y: [1, 1], 
            line: {color: 'red', width: 3}, name: 'Steepest Direction'
         },
         {
            type: 'scatter', mode: 'lines',
            x: [1, 1 + 2], y: [1, 1 - 2], // Tangent line, dot=0
            line: {color: 'white', width: 2, dash: 'dash'}, name: 'Zero Change'
         }
      ];
      defaultData[1].x = [1, Math.min(1 + 0.5, 2)];
      defaultData[1].y = [1, Math.min(1 + 0.5, 2)];
      defaultLayout.title = 'Gradients and Directional Derivatives';
      
      tourSteps = [         { text: "The **Directional Derivative** generalizes partial derivatives to ANY direction angle." },         { text: "The blue vector u in the xy-plane chooses our exact walking direction.", changes: { layout: { scene: { annotations: [{ x: 1, y: 1, z: 0, text: 'Direction Vector u', showarrow: true, arrowhead: 2, ax: 40, ay: 0, bgcolor: 'white' }] } } } },         { text: "As we walk along u, the red line climbs the surface. The slope of this exact red climb is our directional derivative D_u f!", changes: { layout: { scene: { annotations: [{ x: 1, y: 1, z: 2, text: 'Slope upwards', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: 30, ay: -30, bgcolor: 'white' }] } } } }      ];
      break;

    case 'tangent_plane':
      defaultData = [
        {
          z: Array.from({length: 30}, (_, i) => {
               const y = -2 + (i * 4 / 29);
               return Array.from({length: 30}, (_, j) => {
                  const x = -2 + (j * 4 / 29);
                  return x*x + y*y;
               });
             }),
          x: Array.from({length: 30}, (_, j) => -2 + (j * 4 / 29)),
          y: Array.from({length: 30}, (_, i) => -2 + (i * 4 / 29)),
          type: 'surface', colorscale: 'YlGnBu', showscale: false, opacity: 0.9
        },
        { // tangent plane at x=1, y=1, z=2 -> z - 2 = 2(x-1) + 2(y-1) -> z = 2x + 2y - 2
          z: Array.from({length: 10}, (_, i) => {
               const y = 0 + (i * 2 / 9);
               return Array.from({length: 10}, (_, j) => {
                  const x = 0 + (j * 2 / 9);
                  return 2*x + 2*y - 2;
               });
             }),
          x: Array.from({length: 10}, (_, j) => 0 + (j * 2 / 9)),
          y: Array.from({length: 10}, (_, i) => 0 + (i * 2 / 9)),
          type: 'surface', colorscale: 'Reds', showscale: false, opacity: 0.7
        },
        {
          type: 'scatter3d', mode: 'markers',
          x: [1], y: [1], z: [2],
          marker: {color: 'red', size: 6}, name: 'Tangent Point'
        }
      ];
      defaultLayout.title = 'Tangent Plane to z = x² + y² at (1,1)';
      
      tourSteps = [         { text: "In 2D we use tangent lines. In 3D, we use a **Tangent Plane** to linearly approximate a surface!" },         { text: "The curved blue bowl is our true function f(x,y)." },         { text: "The red semi-transparent flat sheet is the Tangent Plane exactly at (1,1).", changes: { layout: { scene: { annotations: [{ x: 1.5, y: 1.5, z: 1.5, text: 'Linear Approx. Plane', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: -40, ay: -40, bgcolor: 'white' }] } } } },         { text: "Near the point of tangency, the flat plane is a fantastic, simple proxy for the messy curved bowl!", changes: { layout: { scene: { annotations: [{ x: 1, y: 1, z: 2, text: 'Touches perfectly here', showarrow: true, arrowhead: 3, arrowcolor: 'green', ax: 50, ay: -50, bgcolor: 'white' }] } } } }      ];
      break;

    case 'saddle_point':
      defaultData = [
        {
          z: Array.from({length: 30}, (_, i) => {
               const y = -2 + (i * 4 / 29);
               return Array.from({length: 30}, (_, j) => {
                  const x = -2 + (j * 4 / 29);
                  return x*x - y*y;
               });
             }),
          x: Array.from({length: 30}, (_, j) => -2 + (j * 4 / 29)),
          y: Array.from({length: 30}, (_, i) => -2 + (i * 4 / 29)),
          type: 'surface', colorscale: 'RdBu', showscale: false
        },
        {
          type: 'scatter3d', mode: 'markers',
          x: [0], y: [0], z: [0],
          marker: {color: 'black', size: 6}, name: 'Critical Point'
        }
      ];
      defaultLayout.title = 'A Saddle Point (z = x² - y²)';
      
      tourSteps = [         { text: "This is a classic **Saddle Point**. Notice how the shape curves like a Pringles chip." },         { text: "Exactly in the center, the ground is flat. Here, the gradient is 0. This is a **Critical Point**.", highlights: [0, 1], changes: { layout: { scene: { annotations: [{ x: 0, y: 0, z: 0, text: 'Critical Point ∇f=0', showarrow: true, arrowhead: 2, ax: 40, ay: -50, bgcolor: 'rgba(255,255,255,0.8)' }] } } } },         { text: "Look along the x-axis: it curves *upwards* like a bowl.", changes: { layout: { scene: { annotations: [{ x: 1.5, y: 0, z: 2.25, text: 'Curves Up', showarrow: true, arrowhead: 2, arrowcolor: 'green', ax: 30, ay: -30, bgcolor: 'rgba(255,255,255,0.8)' }] } } } },         { text: "Now look along the y-axis: it curves *downwards* into a valley. Because it goes up and down, it's a saddle.", changes: { layout: { scene: { annotations: [{ x: 0, y: 1.5, z: -2.25, text: 'Curves Down', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: -30, ay: -30, bgcolor: 'rgba(255,255,255,0.8)' }] } } } }      ];
      break;

    case 'gradient_field':
      defaultData = [
        {
          type: 'contour',
          z: Array.from({length: 30}, (_, i) => {
               const y = -2 + (i * 4 / 29);
               return Array.from({length: 30}, (_, j) => {
                  const x = -2 + (j * 4 / 29);
                  return x*x - y*y;
               });
             }),
          x: Array.from({length: 30}, (_, j) => -2 + (j * 4 / 29)),
          y: Array.from({length: 30}, (_, i) => -2 + (i * 4 / 29)),
          colorscale: 'Viridis', showscale: false
        }
      ];
      defaultLayout.title = 'Gradient Field of f(x,y) = x² - y² (contour with gradient vectors overlaid)';
      tourSteps = [        { text: "This plot shows the contour lines of the saddle function." },        { text: "The gradient is drawn as arrows. Notice every arrow points in the direction of steepest ascent.", changes: { layout: { annotations: [{ x: 1, y: 0, text: 'Steepest Uphill Direction', showarrow: true, arrowhead: 2, arrowcolor: 'red', ax: 50, ay: -30, bgcolor: 'white' }] } } },        { text: "At each point, the gradient vector is completely perpendicular to the contour line!", changes: { layout: { annotations: [{ x: 1, y: 1, text: 'Orthogonal', showarrow: true, arrowhead: 2, arrowcolor: 'green', ax: 50, ay: -50, bgcolor: 'white' }] } } },        { text: "Walking exactly along the gradient direction would take you to higher values fastest." }      ];
      break;

    case 'level_surfaces':
      defaultData = [
        {
          type: 'isosurface',
          x: Array.from({length: 8000}, (_, i) => -2 + ((i % 20) * 4 / 19)),
          y: Array.from({length: 8000}, (_, i) => -2 + (Math.floor((i / 20) % 20) * 4 / 19)),
          z: Array.from({length: 8000}, (_, i) => -2 + (Math.floor(i / 400) * 4 / 19)),
          value: Array.from({length: 8000}, (_, i) => {
             const x = -2 + ((i % 20) * 4 / 19);
             const y = -2 + (Math.floor((i / 20) % 20) * 4 / 19);
             const z = -2 + (Math.floor(i / 400) * 4 / 19);
             return x*x + y*y + z*z;
          }),
          isomin: 3.9,
          isomax: 4.1,
          colorscale: 'Viridis',
          caps: {x: {show: false}, y: {show: false}, z: {show: false}}
        }
      ];
      defaultLayout.title = 'Level Surface: x² + y² + z² = 4 (sphere)';
      tourSteps = [
        { text: "This is a level surface of $f(x,y,z) = x^2 + y^2 + z^2$ for $c=4$ – a sphere." },
        { text: "Level surfaces generalise level curves to 3D. They are useful in physics for equipotential surfaces." },
        { text: "For example, the electric potential of a point charge has spherical level surfaces." }
      ];
      break;

    case 'lagrange_multiplier':
      defaultData = [
         {
            type: 'contour',
            z: Array.from({length: 40}, (_, i) => {
               const y = -3 + (i * 6 / 39);
               return Array.from({length: 40}, (_, j) => {
                  const x = -3 + (j * 6 / 39);
                  return x*x + y*y; // f(x,y)=x^2+y^2
               });
            }),
            x: Array.from({length: 40}, (_, j) => -3 + (j * 6 / 39)),
            y: Array.from({length: 40}, (_, i) => -3 + (i * 6 / 39)),
            colorscale: 'Blues', showscale: false
         },
         {
            type: 'scatter', mode: 'lines',
            x: Array.from({length: 100}, (_, i) => 2 * Math.cos(i * 2 * Math.PI / 99) + 1),
            y: Array.from({length: 100}, (_, i) => 2 * Math.sin(i * 2 * Math.PI / 99) + 1),
            line: {color: 'red', width: 3}, name: 'Constraint g(x,y)=c'
         }
      ];
      defaultLayout.title = 'Lagrange Multipliers (Contour tangent to Curve)';
      tourSteps = [         { text: "With **Lagrange Multipliers**, we maximize a function subject to a constraint." },         { text: "The red loop is our constraint curve. You can think of it as a walking trail.", changes: { layout: { annotations: [{ x: 1.8, y: 1.5, text: 'Constraint Path', showarrow: true, arrowhead: 2, ax: 50, ay: -20, bgcolor: 'white' }] } } },         { text: "The extreme values happen exactly where a blue contour level is **tangent** to the red constraint line.", changes: { layout: { annotations: [{ x: -0.7, y: 1.7, text: 'Point of Tangency', showarrow: true, arrowhead: 3, arrowcolor: 'green', ax: -50, ay: -50, bgcolor: 'white' }] } } },         { text: "At these tangent points, their gradients point in the exact same direction." }      ];
      break;

    case 'constrained_variables':
      defaultData = [
         {
            type: 'scatter3d', mode: 'lines',
            x: Array.from({length: 100}, (_, i) => Math.cos(i * 0.1)),
            y: Array.from({length: 100}, (_, i) => Math.sin(i * 0.1)),
            z: Array.from({length: 100}, (_, i) => i * 0.05),
            line: {color: 'indigo', width: 6}
         }
      ];
      defaultLayout.title = 'Partial Derivatives with Constrained Variables';
      tourSteps = [
         { text: "Sometimes variables depend on each other, like $P, V, T$ in the ideal gas law $PV=nRT$." },
         { text: "When calculating a partial derivative (e.g. holding $x$ constant), we must clarify **which** other variable is the designated independent one." },
         { text: "Different choices of independent variables force us along entirely different geometric paths!" }
      ];
      break;

    case 'double_integral':
      defaultData = [
        {
          type: 'surface',
          z: Array.from({length: 20}, (_, i) => {
               const y = 0 + (i * 2 / 19);
               return Array.from({length: 20}, (_, j) => {
                  const x = 0 + (j * 2 / 19);
                  return Math.sin(x)*Math.cos(y) + 2; 
               });
          }),
          x: Array.from({length: 20}, (_, j) => Math.PI * (j * 2 / 19)),
          y: Array.from({length: 20}, (_, i) => Math.PI * (i * 2 / 19)),
          colorscale: 'Viridis', opacity: 0.8
        }
      ];
      defaultLayout.title = 'Double Integral computing Volume';
      tourSteps = [         { text: "A **Double Integral** perfectly sums up infinite microscopic volume blocks." },         { text: "This 3D surface is our function. Notice how the height changes.", changes: { layout: { scene: { annotations: [{ x: 1.5, y: 1.5, z: 2.5, text: 'Roof z=f(x,y)', showarrow: true, arrowhead: 2, ax: 50, ay: -30, bgcolor: 'rgba(255,255,255,0.8)' }] } } } },         { text: "We evaluate it as iterated 1D integrals using Fubini's Theorem.", changes: { layout: { scene: { annotations: [{ x: 0, y: 0, z: 0, text: 'Base Area dA', showarrow: true, arrowhead: 2, ax: -50, ay: 20, bgcolor: 'rgba(255,255,255,0.8)' }] } } } },         { text: "The differential area dA in the xy-plane becomes our block's base." }      ];
      break;

    case 'center_of_mass':
      defaultData = [
         {
           type: 'scatter', mode: 'none', fill: 'toself',
           x: [0, 2, 0, 0], y: [0, 0, 2, 0],
           fillcolor: 'rgba(100, 150, 250, 0.4)'
         },
         {
           type: 'scatter', mode: 'markers',
           x: [0.66], y: [0.66],
           marker: {color: 'red', size: 10, symbol: 'cross'}
         }
      ];
      defaultLayout.title = 'Center of Mass / Centroid';
      tourSteps = [         { text: "Using Double Integrals, we can find the exact **Center of Mass**." },         { text: "This blue triangle represents a thin plate with uniform density. We find its total mass.", changes: { layout: { annotations: [{ x: 1, y: 0.5, text: 'Total Mass M', showarrow: true, arrowhead: 1, ax: 50, ay: -30, bgcolor: 'white' }] } } },         { text: "Then, we compute the 'Moments' to find the balance coordinates." },         { text: "The red crosshair marks this exact geometric balance point. It balances perfectly!", changes: { layout: { annotations: [{ x: 0.66, y: 0.66, text: 'Centroid', showarrow: true, arrowhead: 3, arrowcolor: 'red', ax: 50, ay: -50, bgcolor: 'white' }] } } }      ];
      break;

    
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
         { text: "To find $\\partial w/\\partial r$, trace every path from $w$ down to $r$! (Paths: $w\\to x\\to r$ and $w\\to y\\to r$). Add their products." }
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
         { text: "At point $(1,1)$, the gradient vector $\\nabla f$ is $\\langle 2, 2 \\rangle$." },
         { text: "Notice how the red gradient arrow points **perpendicular** to the contour level curve." },
         { text: "It always points in the direction of **steepest ascent**!" }
      ];
      break;

    
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

    case 'divergence_cuboid':
      defaultData = [
         {
            type: 'scatter3d',
            mode: 'lines+markers',
            x: [1, 1.5], y: [0.5, 0.5], z: [0.5, 0.5],
            marker: { symbol: 'arrow', size: 5, color: 'red' },
            line: { color: 'red', width: 4 },
            name: 'Flux Out (Right)'
         },
         {
            type: 'scatter3d',
            mode: 'lines+markers',
            x: [0, -0.5], y: [0.5, 0.5], z: [0.5, 0.5],
            marker: { symbol: 'arrow', size: 5, color: 'blue' },
            line: { color: 'blue', width: 4 },
            name: 'Flux In (Left)'
         }
      ];
      defaultLayout.title = 'Deriving Divergence (Shrinking Cuboid)';
      tourSteps = [
         { text: "We define Divergence by looking at a tiny cuboid volume $\\\\Delta V$." },
         { text: "We sum the fluid velocity (flux) exiting and entering each face." },
         { text: "If the fluid leaving the right side is greater than what enters the left, there is a net outward flux in the x-direction. Thus $\\\\partial F_x / \\\\partial x$ is positive!" },
         { text: "As the box shrinks to zero, this sum of partial derivatives becomes the **Divergence** at a point." }
      ];
      break;

    case 'curl_paddle_wheel':
      defaultData = [
         {
            type: 'scatter',
            mode: 'markers',
            x: [0], y: [0],
            marker: { symbol: 'cross', size: 30, color: 'black' },
            name: 'Paddle Wheel'
         }
      ];
      {
         const x: number[] = []; const y: number[] = [];
         const u: number[] = []; const v: number[] = [];
         for(let i=-2; i<=2; i+=1) {
           for(let j=-2; j<=2; j+=1) {
              x.push(i); y.push(j);
              u.push(j); v.push(0); // F = y * i
           }
         }
         defaultData.push({
            type: 'cone',
            x, y, u, v,
            sizemode: 'scaled',
            sizeref: 0.5,
            colorscale: 'Blues',
            showscale: false
         });
      }
      defaultLayout.title = 'Meaning of Curl (Paddle Wheel in Shear Flow)';
      tourSteps = [
         { text: "Imagine a river where the water flows uniformly but faster near the top ($F = y\\\\mathbf{i}$)." },
         { text: "Place a tiny paddle wheel in this flow." },
         { text: "The water strikes the top paddles harder than the bottom paddles." },
         { text: "This imbalance causes the paddle wheel to rotate clockwise! A net rotation means **Curl is not zero**." }
      ];
      break;

    
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
case 'stokes_capping_surface':
      defaultData = [
         {
            type: 'scatter3d',
            mode: 'lines',
            x: Array.from({length: 40}, (_, i) => Math.cos(i * 2 * Math.PI / 39)),
            y: Array.from({length: 40}, (_, i) => Math.sin(i * 2 * Math.PI / 39)),
            z: Array(40).fill(0),
            line: { color: 'black', width: 6 },
            name: 'Closed Curve C'
         }
      ];
      {
         const u = Array.from({length: 20}, (_, i) => i * Math.PI / 19 / 2); // 0 to pi/2
         const v = Array.from({length: 40}, (_, i) => i * 2 * Math.PI / 39); // 0 to 2pi
         const x: number[] = []; const y: number[] = []; const z: number[] = [];
         for(let i=0; i<u.length; i++){
            for(let j=0; j<v.length; j++){
               x.push(Math.sin(u[i])*Math.cos(v[j]));
               y.push(Math.sin(u[i])*Math.sin(v[j]));
               z.push(Math.cos(u[i]));
            }
         }
         defaultData.push({
            type: 'mesh3d', x, y, z, opacity: 0.5, color: 'orange', name: 'Capping Hemisphere'
         });
      }
      defaultLayout.title = "Stokes' Theorem: Capping Surfaces";
      tourSteps = [
         { text: "Consider a closed loop wire C (black ring)." },
         { text: "You can blow a soap bubble across this ring. The soap film is a **capping surface** S." },
         { text: "Stokes' Theorem states that integrating Curl over the soap bubble is exactly equal to the circulation along the wire ring!" },
         { text: "Crucially, *any* soap bubble shape will yield the same result, as long as its boundary is the ring C." }
      ];
      break;

    case 'surface_integral_projection':
      defaultData = [
         {
            type: 'mesh3d',
            x: [0, 1, 1, 0, 0, 1, 1, 0], y: [0, 0, 1, 1, 0, 0, 1, 1], z: [1, 1.5, 2, 1.5, 0,0,0,0], 
            opacity: 0.6, color: 'cyan', name: 'Surface S'
         }
      ];
      defaultLayout.title = 'Evaluating Surface Integrals via Projection';
      tourSteps = [
         { text: "To compute a surface integral over a curved membrane S, we project it onto a shadow region R in the xy-plane." },
         { text: "We multiply $dx\\\\,dy$ by a geometric stretch factor $1/(\\\\mathbf{\\\\hat{n}} \\\\cdot \\\\mathbf{k})$ to account for the slant. Now the integral is easy!" }
      ];
      break;


    default:
      return <div>Plot not found</div>;
  }

  // Calculate current data and layout
  let currentData = [...defaultData];
  let currentLayout = { ...defaultLayout };

  // Generate classNames properly if tailwind isn't working
  const highlightClass = (dataIdx: number, activeHighlights?: number[]) => {
     if (!activeHighlights) return 1;
     return activeHighlights.includes(dataIdx) ? 1 : 0.2;
  };

  if (tourIndex >= 0 && tourIndex < tourSteps.length) {
    const step = tourSteps[tourIndex];
    if (step.highlights) {
       currentData = currentData.map((d, i) => ({
         ...d,
         opacity: highlightClass(i, step.highlights)
       }));
    }
    if (step.updates && step.updates.data) {
       // Deep copy JSON
       currentData = JSON.parse(JSON.stringify(currentData));
       step.updates.data.forEach((update: { index: number, changes: any }) => {
          if (currentData[update.index]) {
             Object.assign(currentData[update.index], update.changes);
             if (update.changes['line.color']) {
                if (!currentData[update.index].line) currentData[update.index].line = {};
                currentData[update.index].line.color = update.changes['line.color'];
             }
             if (update.changes['marker.color']) {
                if (!currentData[update.index].marker) currentData[update.index].marker = {};
                currentData[update.index].marker.color = update.changes['marker.color'];
             }
          }
       });
    }
    if (step.changes && step.changes.layout) {
       currentLayout = { ...currentLayout, ...step.changes.layout };
    }
  }

  const handleNextTourStep = () => {
     setTourIndex(prev => {
        if (prev < tourSteps.length - 1) return prev + 1;
        setIsPlaying(false);
        return prev;
     });
  };

  const handlePrevTourStep = () => {
     setTourIndex(prev => (prev > -1 ? prev - 1 : prev));
  };

  useEffect(() => {
     if (isPlaying) {
        if (tourIndex === tourSteps.length - 1) {
           setTourIndex(-1);
        }
        playIntervalRef.current = window.setInterval(() => {
           setTourIndex(prev => {
              if (prev < tourSteps.length - 1) return prev + 1;
              setIsPlaying(false);
              return prev;
           });
        }, 5000); // 5 seconds per step
     } else {
        if (playIntervalRef.current !== null) {
           window.clearInterval(playIntervalRef.current);
        }
     }
     return () => {
        if (playIntervalRef.current !== null) {
           window.clearInterval(playIntervalRef.current);
        }
     };
  }, [isPlaying, tourIndex, tourSteps.length]);

  useEffect(() => {
    window.speechSynthesis.cancel();
    if (isAudioEnabled && tourIndex >= 0 && tourIndex < tourSteps.length) {
      const stepText = tourSteps[tourIndex].text;
      
      const cleanTextForNarration = (text: string) => {
        return text
          .replace(/[\*\$]/g, '')
          .replace(/x\^2/g, 'x squared')
          .replace(/f\(x\)/g, 'f of x')
          .replace(/\\theta/g, 'theta')
          .replace(/\\to/g, 'approaches ')
          .replace(/=\s*/g, 'equals ');
      };
      
      const cleanText = cleanTextForNarration(stepText);
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  }, [tourIndex, isAudioEnabled, tourSteps]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="my-6 space-y-3">
       <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300">
          <Plot
            data={currentData}
            layout={currentLayout}
            style={plotStyle}
            useResizeHandler={true}
          />
       </div>
       
       <div className={cn(
          "bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center transition-all duration-300",
          tourIndex === -1 ? "opacity-70" : "opacity-100"
       )}>
          {/* Controls */}
          <div className="flex items-center gap-2">
             <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={cn(
                   "w-10 h-10 rounded-full flex items-center justify-center transition-all text-white shadow-sm ring-2 ring-transparent ring-offset-1 focus:outline-none focus:ring-indigo-400 focus:ring-offset-indigo-50",
                   isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-indigo-600 hover:bg-indigo-700"
                )}
                aria-label={isPlaying ? "Stop Tour" : "Play Tour"}
             >
                {isPlaying ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-5 h-5 ml-1 fill-current" />}
             </button>
             <div className="flex rounded-lg bg-indigo-100 border border-indigo-200 overflow-hidden ml-2 h-10">
                <button 
                  onClick={handlePrevTourStep} 
                  disabled={tourIndex <= -1}
                  className="px-2 hover:bg-indigo-200 flex items-center disabled:opacity-50 transition-colors"
                >
                   <ChevronLeft className="w-5 h-5 text-indigo-800" />
                </button>
                <div className="flex items-center justify-center px-3 font-mono text-xs font-semibold text-indigo-900 bg-indigo-100/50 min-w-16">
                   {tourIndex === -1 ? "Tour" : `${tourIndex + 1} / ${tourSteps.length}`}
                </div>
                <button 
                  onClick={handleNextTourStep}
                  disabled={tourIndex >= tourSteps.length - 1}
                  className="px-2 hover:bg-indigo-200 flex items-center disabled:opacity-50 transition-colors"
                >
                   <ChevronRight className="w-5 h-5 text-indigo-800" />
                </button>
             </div>
             <button
               onClick={() => setIsAudioEnabled(!isAudioEnabled)}
               className={cn(
                 "w-10 h-10 ml-1 rounded-full flex items-center justify-center transition-all bg-white border text-indigo-600 hover:bg-indigo-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 focus:ring-offset-indigo-50",
                 isAudioEnabled ? "border-indigo-400 bg-indigo-50" : "border-indigo-200"
               )}
               title={isAudioEnabled ? "Disable Narrator" : "Enable Narrator"}
               aria-label={isAudioEnabled ? "Disable Narrator" : "Enable Narrator"}
             >
               {isAudioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 opacity-70" />}
             </button>
          </div>
          
          {/* Text Area */}
          <div className="flex-1 flex items-start gap-3 pl-0 sm:pl-4 sm:border-l sm:border-indigo-200/50 py-1 min-h-[48px]">
             <Info className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
             <div className="text-sm font-medium leading-relaxed text-indigo-950">
                {tourIndex === -1 ? (
                   "Press play for an interactive visual tour of this mathematical concept."
                ) : (
                   <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                     {tourSteps[tourIndex].text}
                   </ReactMarkdown>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};
