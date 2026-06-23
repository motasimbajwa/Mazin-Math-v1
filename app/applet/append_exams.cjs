const fs = require('fs');
let code = fs.readFileSync('src/data.ts', 'utf8');

function appendToChapter(id, markdownToAppend) {
    // Find the chapter starting index
    const chStart = code.indexOf(`id: "${id}"`);
    if (chStart === -1) {
        console.log("Could not find chapter: " + id);
        return;
    }
    // Find the end of its markdown literal
    const markdownStr = "markdown: `";
    const mdStart = code.substring(chStart).indexOf(markdownStr);
    if (mdStart === -1) return;

    let searchStart = chStart + mdStart;
    
    // Find the closing backtick sequence \`\n  }
    // Note: the code might have \`\n  } or \`\n  },
    const endingPattern = /`\n\s+\}/;
    const substr = code.substring(searchStart);
    const endMatch = substr.match(endingPattern);
    
    if (endMatch) {
       const insertIndex = searchStart + endMatch.index;
       code = code.substring(0, insertIndex) + '\n\n' + markdownToAppend + '\n' + code.substring(insertIndex);
       console.log("Appended to " + id);
    } else {
       console.log("Could not find end of markdown for " + id);
    }
}

const exams147 = `---

## Mock Exams (Past Papers)

### Mock Exam 1
<div class="user-quiz" data-question="1. Find local maximum, local minimum and saddle points of f(x,y) = 3 + 2x + 2y - 2x^2 - 2xy - y^2."></div>
<div class="user-quiz" data-question="2. Find all local maxima, local minima and saddle points of f(x,y) = 2x^3 + 2y^3 - 9x^2 + 3y^2 - 12y."></div>
<div class="user-quiz" data-question="3. Find absolute maximum and absolute minimum of f(x,y) = 2 + 2x + 2y - x^2 - y^2 on the triangular region in the first quadrant bounded by the lines x = 0, y = 0, and y = 9 - x."></div>

### Mock Exam 2
<div class="user-quiz" data-question="1. Find absolute extrema of f(x,y) = x^2 - xy + y^2 + 1 on the triangular region in the first quadrant bounded by the lines: x = 0, y = 4, and y = x."></div>
<div class="user-quiz" data-question="2. Find the local extreme values and saddle points of f(x,y) = x^4 + y^4 - 4xy + 1."></div>
<div class="user-quiz" data-question="3. Find the absolute maximum and minimum values of f(x,y) = 3xy - 6x - 3y + 7 on the closed triangular region R with vertices (0,0), (3,0), and (0,5)."></div>
`;

const exams148 = `---

## Mock Exams (Past Papers)

### Mock Exam 1
<div class="user-quiz" data-question="1. Use Lagrange Multipliers method to evaluate the dimensions of a rectangular box, open at the top, having a volume of 32 cubic ft, and requiring the least amount of material for its construction."></div>
<div class="user-quiz" data-question="2. Find the extreme values of f(x,y) = x^3 + y^2 on the circle x^2 + y^2 = 1."></div>
<div class="user-quiz" data-question="3. Find extreme values of f(x,y,z) = x+y-z on the sphere x^2 + y^2 + z^2 = 1 using Lagrange multipliers."></div>

### Mock Exam 2
<div class="user-quiz" data-question="1. Find the points on the sphere x^2 + y^2 + z^2 = 4 that are closest to and farthest from the point (3, 1, -1)."></div>
<div class="user-quiz" data-question="2. Use Lagrange multipliers to find the maximum volume of a rectangular box that is inscribed in a sphere of radius R."></div>
<div class="user-quiz" data-question="3. Find the extreme values of f(x,y) = 2x^2 + 3y^2 on the ellipse 4x^2 + y^2 = 4."></div>
`;

const exams151 = `---

## Mock Exams (Past Papers)

### Mock Exam 1
<div class="user-quiz" data-question="1. Sketch the region of integration, reverse the order of integration, and evaluate the integral: ∫ (from 0 to 2) ∫ (from x^2 to 2x) (4x + 2) dy dx."></div>
<div class="user-quiz" data-question="2. Sketch the region of integration and evaluate the integral: ∫ (from 0 to 1) ∫ (from 0 to y^2) 3y^3 e^(xy) dx dy."></div>
<div class="user-quiz" data-question="3. Evaluate the double integral ∬_R (x / y^2) dA, where R = {(x,y) | 0 ≤ x ≤ 2, 1 ≤ y ≤ 2}."></div>

### Mock Exam 2
<div class="user-quiz" data-question="1. Reverse the order of integration and evaluate: ∫ (from 0 to 3) ∫ (from y^2 to 9) y cos(x^2) dx dy."></div>
<div class="user-quiz" data-question="2. Find the volume of the solid bounded above by the paraboloid z = x^2 + y^2 and below by the triangle enclosed by y = x, x = 0, and x + y = 2."></div>
<div class="user-quiz" data-question="3. Sketch the region of integration and reverse the order of integration: ∫ (from 1 to 2) ∫ (from 0 to ln x) f(x,y) dy dx."></div>
`;

const exams152 = `---

## Mock Exams (Past Papers)

### Mock Exam 1
<div class="user-quiz" data-question="1. Evaluate the given Cartesian integral after changing into its equivalent polar form: ∫ (from -1 to 1) ∫ (from -√(1-y^2) to √(1-y^2)) ln(x^2+y^2+1) dx dy."></div>
<div class="user-quiz" data-question="2. Exchange the Cartesian integral into a polar integral then evaluate the integral, also sketch the region of integration: ∫ (from 0 to 2) ∫ (from 0 to √(1-(x-1)^2)) (x+y)/(x^2+y^2) dy dx."></div>
<div class="user-quiz" data-question="3. Find the area of the region that lies inside the circle r = 1 and outside the cardioid r = 1 - cos θ."></div>

### Mock Exam 2
<div class="user-quiz" data-question="1. Changing to polar coordinates, evaluate the integral ∬_R e^(-x^2-y^2) dA, where R is the region bounded by the semicircle y = √(4-x^2) and the x-axis."></div>
<div class="user-quiz" data-question="2. Find the volume of the solid that lies under the paraboloid z = x^2 + y^2, above the xy-plane, and inside the cylinder x^2 + y^2 = 2x."></div>
<div class="user-quiz" data-question="3. Evaluate the Cartesian integral by changing to polar coordinates: ∫ (from 0 to √2) ∫ (from y to √(4-y^2)) xy dx dy."></div>
`;

appendToChapter("chapter-14-7", exams147);
appendToChapter("chapter-14-8", exams148);
appendToChapter("chapter-15-1", exams151);
appendToChapter("chapter-15-2", exams152);

fs.writeFileSync('src/data.ts', code);
console.log('Appended successfully');
