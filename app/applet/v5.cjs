const v5 = {
  id: "chapter-v5",
  title: "Chapter V5: Visual Transformations – Mapping Space",
  progress: 0,
  subheadings: [
    { id: "v5-intro", title: "Introduction: How Functions Transform Space" },
    { id: "v5-eli5", title: "ELI5 Explanation: The Rubber Sheet Analogy" },
    { id: "v5-glossary", title: "Glossary of Key Terms" },
    { id: "v5-why-ee", title: "Why This Matters in Electrical Engineering" },
    { id: "v5-formal", title: "Formal Definitions and Notation" },
    { id: "v5-method", title: "Step-by-Step Method for Visualising Transformations" },
    { id: "v5-flowchart", title: "Algorithmic Problem Solving Flow" },
    { id: "v5-triggers", title: "Concept Recall: Trigger Words → Action" },
    { id: "v5-examples", title: "10 Exam-Level Worked Exercises with Inner Voice" },
    { id: "v5-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
    { id: "v5-traps", title: "Common Mistakes (The Examiner's Traps)" },
    { id: "v5-test", title: "Chapter Assessment" }
  ],
  markdown: `
## Introduction: How Functions Transform Space

Until now, we have mostly viewed a function $f(x, y)$ as a geometric curve or surface floating above an xy-plane. But what if we treat functions as **mappings** that warp one 2D plane into another 2D plane?

In "Visual Complex Analysis," functions are primarily understood geometrically as transformations. A function $F(x,y) = (u,v)$ maps every input point $(x,y)$ to an output point $(u,v)$. This perspective reveals that the **derivative** is actually a local *linear transformation*—it tells us exactly how a tiny grid infinitesimally close to a point gets rotated, stretched, and scaled as it maps into the output space.

By understanding the Jacobian determinant, we can visualize how area is geometrically expanded or compressed by any given transformation.

## ELI5 Explanation: The Rubber Sheet Analogy

Imagine drawing a perfect, uniform grid on a stretchy rubber sheet. This sheet is the $(x, y)$ input plane.

Now, you apply a mathematical function $f(x, y)$ to the sheet. The function tells you exactly where to pin down every single intersection of the grid into a newly organized sheet (the output $(u, v)$ plane).

*   If the function is **$f(x, y) = (2x, 2y)$**, you stretch the rubber sheet equally in all directions, making the grid squares four times larger.
*   If the function is **$f(x, y) = (-y, x)$**, you pin the grid down rotated 90 degrees.
*   If the function is **$f(x,y) = (x^2, y)$**, you stretch the sheet unevenly. Squares further to the right get stretched massively into rectangles, while squares near zero stay small.

The derivative at a specific point on the rubber sheet tells you precisely what happens to a single microscopic square at that location: how it stretches, how it shears, and how it rotates.

## Glossary of Key Terms

*   **Transformation Mapping:** A function that moves from an input coordinate space $(x,y)$ to an output coordinate space $(u,v)$.
*   **Jacobian Matrix ($J$):** The ultimate multi-variable derivative. A matrix containing all first-order partial derivatives of a vector-valued function.
*   **Jacobian Determinant ($\\text{det}(J)$ or $\\frac{\\partial(u,v)}{\\partial(x,y)}$):** A scalar value representing the local "area scaling factor". If it is 2, a microscopic square of area $dA$ maps to an area of $2\\,dA$.
*   **Local Linearity:** The concept that ANY smooth, differentiable curve or surface looks perfectly flat and linearly stretched if you zoom in close enough.

## Why This Matters in Electrical Engineering

1.  **Coordinate Transformations:** Calculating fields in complex antenna geometries or waveguide boundaries often requires mapping difficult Cartesian shapes into simple polar/spherical boundaries.
2.  **Conformal Mapping:** Used heavily in electrostatics and fluid flow. Conformal maps preserve angles, allowing complex electric field distributions (like around capacitor edges) to be elegantly modeled.
3.  **Circuit Theory Transformations:** Mathematical transformations (like Laplace or Fourier) shift signals across domain spaces to make differential equations linearly solvable.

## Formal Definitions and Notation

A mapping from $\\mathbb{R}^2 \\to \\mathbb{R}^2$ is written as:
$T(x,y) = (u(x,y), v(x,y))$

The **Jacobian Matrix** $J$ describes the best linear approximation (the derivative) of this mapping at any point:

$$J = \\begin{bmatrix} \\frac{\\partial u}{\\partial x} & \\frac{\\partial u}{\\partial y} \\\\ \\frac{\\partial v}{\\partial x} & \\frac{\\partial v}{\\partial y} \\end{bmatrix}$$

The **Jacobian Determinant** tells us how area elements scale under transformation:

$$\\text{Det}(J) = \\frac{\\partial(u,v)}{\\partial(x,y)} = \\frac{\\partial u}{\\partial x}\\frac{\\partial v}{\\partial y} - \\frac{\\partial u}{\\partial y}\\frac{\\partial v}{\\partial x}$$

When evaluating a double integral, switching coordinates from $(x,y)$ to newly defined $(u,v)$ requires multiplying the integral chunks by the absolute value of the Jacobian determinant:

$$\\iint f(x,y) dx dy = \\iint f(x(u,v), y(u,v)) \\left| \\frac{\\partial(x,y)}{\\partial(u,v)} \\right| du dv$$

## Step-by-Step Method for Visualising Transformations

1.  **Map the Boundaries:** Identify the simple boundary shape in the input $(x,y)$ domain (e.g., a unit square from $x=[0,1], y=[0,1]$).
2.  **Evaluate Corners:** Find where the vertices map. (e.g. $(0,0) \\to F(0,0)$). Plot these in the $(u,v)$ plane.
3.  **Evaluate Lines:** Set $x=1$ and see what equation in $(u,v)$ results. Repeat for other boundaries.
4.  **Compute Jacobian:** Calculate the determinant of the partial derivative matrix.
5.  **Interpret Area:** If $\\text{det}(J) > 1$, the region is universally expanding. If $\\text{det}(J) < 1$, it is compressing. If $\\text{det}(J) < 0$, the rubber sheet was flipped entirely upside down (orientation reversed).

<div class="plot-interactive" data-plot-id="space_transform"></div>

## Algorithmic Problem Solving Flow

1.  **Are you mapping a shape from Space A to Space B?**
    *   Parameterize the boundaries in Space A. Apply the transformation equations $u(x,y)$ and $v(x,y)$ to those boundaries to find the corresponding curves in Space B.
2.  **Are you asked for the Area Scaling Factor or double integral change of variables?**
    *   Compute the Jacobian determinant. Take the absolute value.
3.  **Are you finding the linear approximation of a surface?**
    *   Use the multidimensional Taylor expansion (the tangent plane): $L(x,y) = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)$.

## Concept Recall: Trigger Words → Action

*   *"Map the unit square under F..."* → Plug the four corners $(0,0), (1,0), (0,1), (1,1)$ into the function and identify the new boundary limits.
*   *"Find the Jacobian..."* → Construct the $2 \\times 2$ (or $3 \\times 3$) matrix of partial derivatives. Cross multiply and subtract.
*   *"What is the area element $dA$ in polar?"* → Calculate Jacobian of $x = r \\cos\\theta, y = r \\sin\\theta$. Determinant is $r$. So $dA = r \\, dr \\, d\\theta$.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Mapping a Square**

**Question:** Map the unit square $(x,y \\in [0,1])$ under $F(x,y) = (2x, y)$. Describe the result.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Let $u = 2x$ and $v = y$. The inputs $x$ range from 0 to 1, so $u$ goes from 0 to 2. $v$ goes from 0 to 1.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$u = 2x \\implies u \\in [0,2]$<br>$v = y \\implies v \\in [0,1]$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">This stretches the square horizontally by a factor of 2, creating a rectangle.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The square maps to a rectangle of width 2 and height 1.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Rotation Mapping**

**Question:** Map the unit square under $F(x,y) = (-y, x)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Point $(1,0)$ becomes $(0,1)$. Point $(0,1)$ becomes $(-1,0)$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F(1,0) = (0,1)$.<br>$F(0,1) = (-1,0)$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The entire coordinate frame is twisted 90 degrees counter-clockwise.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The unit square rotates $90^\\circ$ counterclockwise into the second quadrant.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Uniform Jacobian Determinant**

**Question:** Find the Jacobian determinant for $F(x,y) = (2x, 3y)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">$u=2x, v=3y$. The matrix is $[[u_x, u_y], [v_x, v_y]]$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$J = \\begin{vmatrix} 2 & 0 \\\\ 0 & 3 \\end{vmatrix}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Determinant is $(2)(3) - (0)(0) = 6$. So area expands universally by a factor of 6.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{det}(J) = 6$. Area scales by factor 6.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Non-linear Jacobian**

**Question:** Compute Jacobian for $F(x,y) = (x^2, y)$. Describe area scaling at $(3,1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Derivatives of $u=x^2$ are $2x, 0$. Derivatives of $v=y$ are $0, 1$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{det}(J) = \\begin{vmatrix} 2x & 0 \\\\ 0 & 1 \\end{vmatrix} = 2x$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">At $x=3$, the scaling factor evaluates to 6. The space is stretched more the further right you go.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">At $(3,1)$, $J = 6$. The area of a tiny square near $(3,1)$ scales by a factor of 6.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Area Scaling in Polar Coordinates**

**Question:** Define the standard mapping $x = r \\cos\\theta, y = r \\sin\\theta$. Calculate its Jacobian.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Create the matrix with derivatives with respect to $r$ and $\\theta$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$J = \\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Cross multiply: $(\\cos\\theta)(r\\cos\\theta) - (\\sin\\theta)(-r\\sin\\theta) = r\\cos^2 + r\\sin^2 = r$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{det}(J) = r(\\cos^2\\theta + \\sin^2\\theta) = r$.<br>Area element $dA = r \\, dr \\, d\\theta$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Linear Approximation (Tangent Plane)**

**Question:** Compute the linear approximation of $f(x,y) = x^2 + y^2$ at $(1,1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Use Taylor formula $L(x,y) = f(a,b) + f_x(x-a) + f_y(y-b)$. Evaluate terms at $(1,1)$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$f(1,1) = 2$ <br> $f_x = 2x \\implies f_x(1,1) = 2$ <br> $f_y = 2y \\implies f_y(1,1) = 2$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Sum them up into a flat plane equation.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$L(x,y) = 2 + 2(x-1) + 2(y-1) = 2x + 2y - 2$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Complex Mapping Output Shape**

**Question:** What is the geometric image of the unit circle under $F(x,y) = (2x, 3y)$?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Unit circle is $x^2 + y^2 = 1$. The transformation gives $u=2x$ and $v=3y$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Let $x = u/2$ and $y = v/3$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Substitute back into the boundary equation to see what the shape looks like in (u,v).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$(u/2)^2 + (v/3)^2 = 1 \\implies \\frac{u^2}{4} + \\frac{v^2}{9} = 1$<br>The circle becomes an ellipse.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Reversing Orientation in Mappings**

**Question:** In $F(x,y) = (x, -y)$, how does this warp a standard square grid?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">This just flips the sign of the y-coordinate. It maps across the x-axis.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">This is a reflection across the x-axis.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Calculate the Jacobian to observe the orientation flip mathematically. it should be negative.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$J_\\text{det} = (1)(-1) - (0)(0) = -1$.<br>The area is preserved, but orientation flips.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Double Mapping Composition**

**Question:** Map the first quadrant unit square $x,y \\in [0,1]$ under the non-linear polar-like map $F(x,y) = (x^2 - y^2, 2xy)$. Find the map of the line $x=1$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Let $x=1$. Then $u = 1 - y^2$ and $v = 2y$. I need to eliminate parameter $y$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">On $x=1$:<br>$u = 1 - y^2$<br>$v = 2y \\implies y = v/2$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Substitute $y=v/2$ into $u$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$u = 1 - (v/2)^2 = 1 - v^2/4$.<br>This boundary maps to a downward facing parabola.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Visualizing 3D Transformations**

**Question:** Compute Jacobian for spherical transformation $x = r\\sin\\phi\\cos\\theta, y = r\\sin\\phi\\sin\\theta, z = r\\cos\\phi$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">This requires building a $3 \\times 3$ determinant matrix and expanding. It's a huge operation so I will summarize the canonical geometric output.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{det} \\begin{vmatrix} x_r & x_\\theta & x_\\phi \\\\ \\dots & \\dots & \\dots \\end{vmatrix}$ evaluates to $r^2 \\sin\\phi$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">This is why the volumetric integral chunk $dV$ in spherical is $r^2 \\sin\\phi \\, dr \\, d\\phi \\, d\\theta$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Volume scaling factor is $r^2 \\sin\\phi$.</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Mapping & Jacobian</div>
<div class="p-4 bg-slate-50">

<table class="w-full text-left border-collapse">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-3 pr-4 font-bold">If you see $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Ask yourself $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Action</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-3 pr-4 text-slate-800">Calculate Area Expansion $dA$</td>
      <td class="py-3 pr-4 text-slate-800">Do I need the Jacobian matrix?</td>
      <td class="py-3 pr-4 text-slate-800">Yes, $dA = |\\text{det}(J)| \\, du \\, dv$. Compute $u_x v_y - u_y v_x$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Jacobian gives a negative value</td>
      <td class="py-3 pr-4 text-slate-800">What does negative Area mean?</td>
      <td class="py-3 pr-4 text-slate-800">Take Absolute magnitude for $dA$. Negative just implies the coordinate system flipped (like a mirror reflection).</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Linearize $f(x,y)$ at a point</td>
      <td class="py-3 pr-4 text-slate-800">Tangent Plane formulation?</td>
      <td class="py-3 pr-4 text-slate-800">$L(x,y) = f(a) + f_x(x-a) + f_y(y-b)$. Stop at first order.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Change of Variables Integral</td>
      <td class="py-3 pr-4 text-slate-800">Did I forget the scaling factor?</td>
      <td class="py-3 pr-4 text-slate-800">Never integrate without adding $|J|$ before the $du\\, dv$.</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: Dropping the Absolute Value on $|J|$.** When computing double integrals, if your Jacobian computes to $-6$, your area element $dA$ is $|-6| = 6$. You cannot have negative physical area.
*   **Trap 2: Creating Tangent Planes but leaving variables squared.** A linear approximation (tangent plane) is LINEAR. Your final equation $L(x,y)$ must solely contain $x$ and $y$ variables. If it contains $x^2$ or $\\sin(y)$, you failed to evaluate the partial derivatives at the target constant point $(a,b)$.
*   **Trap 3: Cartesian / Polar variable mixing.** If you map exactly to $(r, \\theta)$, your Jacobian must only contain $r$ and $\\theta$, no $x$'s or $y$'s surviving.

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the Jacobian determinant of F(x,y) = (4x, -y)."></div>
<div class="user-quiz" data-question="2. What does a Jacobian determinant of exactly 1 geometrically signify in a transformation?"></div>
<div class="user-quiz" data-question="3. State the value of the Jacobian in a standard Cartesian to Polar coordinate transformation."></div>
<div class="user-quiz" data-question="4. In the tangent plane equation L(x,y), what geometric feature do the partial derivatives f_x and f_y represent?"></div>
<div class="user-quiz" data-question="5. True or False: If a transformation's Jacobian is negative, that region's physical volume becomes negative."></div>
`
};
module.exports = v5;
