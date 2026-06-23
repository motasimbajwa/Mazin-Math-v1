import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf8');

const questions = {
  "14-7": {
    "Local Maximum": [
      "What is the geometric difference between a local maximum and a local minimum on a 3D surface?",
      "If a tangent plane is horizontal at a point, does it guarantee a local maximum or minimum?",
      "Can a local maximum occur at a point where the partial derivatives do not exist?"
    ],
    "Derivative Test": [
      "What are the two conditions for a point to be considered a critical point?",
      "Why must both partial derivatives fx and fy be zero for a horizontal tangent plane?",
      "Does every critical point correspond to a local extremum?"
    ],
    "Saddle Point": [
      "How would you visually describe a saddle point to a friend?",
      "At a saddle point, what happens if you move in different directions from the critical point?",
      "Is a saddle point considered a local maximum, local minimum, or neither?"
    ],
    "Second Derivative Test": [
      "What does the discriminant (or Hessian) D tell us about the curvature of the surface?",
      "If D > 0 and fxx < 0, what kind of critical point do we have?",
      "What does it mean when the Second Derivative Test is inconclusive (D = 0)?"
    ],
    "Absolute Extrema": [
      "What are the three steps to finding absolute extrema on a closed, bounded region?",
      "Why do we have to check the boundaries of the region?",
      "Can the absolute maximum of a region occur at a saddle point?"
    ]
  },
  "14-8": {
    "Constrained Maxima": [
      "What is the difference between an unconstrained and a constrained optimization problem?",
      "How does a constraint geometrically limit the domain of our function?",
      "Can you give a real-world example of a constraint when maximizing volume?"
    ],
    "Lagrange Multipliers": [
      "What is the core equation used in the Method of Lagrange Multipliers?",
      "What does the Lagrange multiplier (lambda) represent geometrically?",
      "Why do we set the gradients of the function and the constraint to be parallel?"
    ],
    "Geometry": [
      "What is the relationship between the level curves of the objective function and the constraint curve at a maximum/minimum?",
      "Why must the gradient of the function be orthogonal to the constraint curve at the optimal point?",
      "If the gradients are not parallel, what does that imply about moving along the constraint curve?"
    ],
    "Two Constraints": [
      "How does the Lagrange multiplier equation change when there are two constraints?",
      "Geometrically, what does the intersection of two constraint surfaces represent?",
      "Why must the gradient of the objective function lie in the plane formed by the gradients of the two constraints?"
    ]
  },
  "15-1": {
    "Double Integrals": [
      "What does a double integral over a rectangle represent geometrically?",
      "How is calculating volume with a double integral analogous to finding area with a single integral?",
      "What happens to the volume calculation if the function f(x,y) is negative?"
    ],
    "Fubini": [
      "What does Fubini's Theorem allow us to do regarding the order of integration?",
      "Does changing the order of integration (dxdy to dydx) change the final result?",
      "When evaluating an inner integral with respect to x, how do we treat the variable y?"
    ],
    "Stronger Form": [
      "How do the limits of integration differ for a nonrectangular region compared to a rectangular one?",
      "If we integrate with respect to y first, what type of equations do the inner limits represent?",
      "Can the outer limits of integration ever be functions of variables?"
    ],
    "Limits of Integration Method": [
      "What is the first step in setting up the limits of integration for a double integral?",
      "How do we determine the lower and upper bounds for the inner integral?",
      "Why is sketching the region of integration crucial for setting up the limits correctly?"
    ],
    "Properties": [
      "If you double the function being integrated, what happens to the overall double integral?",
      "Can you split a double integral over a region into two separate integrals over non-overlapping subregions?",
      "How do you find the geometric area of a region R using a double integral?"
    ]
  },
  "15-2": {
    "Areas": [
      "How does the double integral of the function f(x,y) = 1 over a region R relate to the area of R?",
      "Why mathematically does integrating 1 dA yield the area?",
      "Can a double integral be used to find the area of complex regions bounded by curves?"
    ],
    "Average Value": [
      "What is the formula for the average value of a function f(x,y) over a region R?",
      "How does the area of the region factor into the calculation of the average value?",
      "Can you explain average value using the analogy of flattening a lumpy mountain?"
    ],
    "Mass": [
      "What represents the density of a thin flat plate in the context of double integrals?",
      "How is the total mass of the plate calculated from its density function?",
      "What are first moments, and how do they relate to the center of mass?"
    ],
    "Moments of Inertia": [
      "What physical property does the moment of inertia represent?",
      "How does the distance from the axis of rotation affect the moment of inertia?",
      "What is the polar moment of inertia, and how does it relate to the x and y moments of inertia?"
    ],
    "Radii": [
      "What is the radius of gyration, and how is it related to the moment of inertia and mass?",
      "If all the mass of an object were concentrated at a single distance from the axis, what would that distance be called?",
      "Why is the radius of gyration a useful metric in structural engineering?"
    ],
    "Centroids": [
      "What is the difference between the center of mass and the centroid of a geometric figure?",
      "Under what condition does the center of mass coincide with the centroid?",
      "How do symmetry and geometric properties help in finding the centroid?"
    ]
  }
};

const chaps = {"14-7": "chapter-14-7", "14-8": "chapter-14-8", "15-1": "chapter-15-1", "15-2": "chapter-15-2"};

for (const [chapKey, chapId] of Object.entries(chaps)) {
  const startIdx = content.indexOf('id: "' + chapId + '"');
  if (startIdx === -1) continue;
  
  const endIdx = content.indexOf('id: "chapter-', startIdx + 15);
  let curBlock = content.substring(startIdx, endIdx !== -1 ? endIdx : undefined);
  
  const qDict = questions[chapKey];
  for (const [conceptKey, qs] of Object.entries(qDict)) {
     const regex = new RegExp('(###\\\\s+\\\\d+\\\\.\\\\s+.*' + conceptKey + '.*\\\\n(?:.|\\\\n)*?)(?=\\\\n###|\\\\n---)', "g");
     let found = false;
     curBlock = curBlock.replace(regex, (match) => {
        found = true;
        let addition = "\\n\\n> **Check Your Understanding:**\\n";
        qs.forEach((q, idx) => {
            addition += '<div class="user-quiz" data-question="' + (idx + 1) + '. ' + q + '"></div>\\n';
        });
        addition += "\\n"
        return match.trimEnd() + addition;
     });
     if(!found) {
        console.log("Could not match concept:", conceptKey, "in " + chapKey);
     }
  }
  
  if (endIdx !== -1) {
    content = content.substring(0, startIdx) + curBlock + content.substring(endIdx);
  } else {
    content = content.substring(0, startIdx) + curBlock;
  }
}

fs.writeFileSync('src/data.ts', content, 'utf8');
