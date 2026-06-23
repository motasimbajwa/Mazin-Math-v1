const v4 = {
  id: "chapter-v4",
  title: "Chapter V4: The Gradient – Steepest Ascent",
  progress: 0,
  subheadings: [
    { id: "v4-intro", title: "Introduction: The Gradient Compass" },
    { id: "v4-eli5", title: "ELI5 Explanation: The Steepest Uphill Arrow" },
    { id: "v4-glossary", title: "Glossary of Key Terms" },
    { id: "v4-why-ee", title: "Why This Matters in Electrical Engineering" },
    { id: "v4-formal", title: "Formal Definitions and Notation" },
    { id: "v4-method", title: "Step-by-Step Method for Finding Gradients" },
    { id: "v4-flowchart", title: "Algorithmic Problem Solving Flow" },
    { id: "v4-triggers", title: "Concept Recall: Trigger Words → Action" },
    { id: "v4-examples", title: "10 Exam-Level Worked Exercises with Inner Voice" },
    { id: "v4-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
    { id: "v4-traps", title: "Common Mistakes (The Examiner's Traps)" },
    { id: "v4-test", title: "Chapter Assessment" }
  ],
  markdown: `
## Introduction: The Gradient Compass

While Divergence and Curl operate on vector fields, the **Gradient** operates on *scalar fields*. It takes a simple scalar function (like temperature or voltage across a room) and creates a *vector field* out of it.

At any given point, the gradient maps out the absolute strongest direction of change. It tells you both "which way" something is increasing the fastest, and "how fast" it is increasing in that specific direction.

In Electrical Engineering, the gradient bridges the gap between voltage (a scalar potential) and the electric field (a vector force). By taking the negative gradient of voltage, we instantly derive the electric field's physical vectors.

## ELI5 Explanation: The Steepest Uphill Arrow

Imagine you are standing on the side of a mountain. Blindfolded.

You want to climb to the summit as fast as possible. You probe the ground with your foot in all directions. One specific direction feels the steepest uphill. You point an arrow in that exact direction, and length of the arrow represents exactly how steep the incline is.

That arrow is the **Gradient** ($\\nabla f$). 

*   The **Direction** of the gradient points exactly toward the steepest uphill ascent.
*   The **Magnitude** (length) of the gradient is the steepness (slope) in that direction.

If you instead walk perfectly horizontally along the side of the mountain (neither gaining nor losing altitude), your path is perpendicular to the gradient. In physics, we call these horizontal paths *level curves* or *equipotential surfaces*.

## Glossary of Key Terms

*   **Gradient ($\\nabla f$):** A vector operator that finds the direction of greatest increase for a scalar function $f$.
*   **Directional Derivative ($df/ds$ or $D_u f$):** The rate of change of a scalar function in one specific, chosen direction $\\hat{u}$.
*   **Level Surface:** A 3D surface where the scalar function evaluates to a constant value ($f(x,y,z) = C$). 
*   **Equipotential Line/Surface:** The EE term for a level surface where Voltage is constant.
*   **Normal Vector:** A perpendicular vector. The gradient $\\nabla f$ is perfectly geometrically normal (perpendicular) to the level surface.

## Why This Matters in Electrical Engineering

1.  **Electric Field and Potential:** The fundamental bridge in electrostatics is $E = -\\nabla V$ (Electric field is the negative gradient of Voltage). The E-field vectors naturally point "downhill" from high voltage to low voltage.
2.  **Current Flow:** Heat and electric current naturally flow down the gradient. $J = -\\sigma \\nabla V$ (Ohm's Law in microscopic form).
3.  **Optimization:** Algorithms in machine learning and antenna design rely on "Gradient Descent" to computationally slide down the steepest path to find minimum error values.

## Formal Definitions and Notation

The gradient of a scalar function $f(x,y,z)$ is defined mathematically using the del operator ($\\nabla$):

$$\\nabla f = i\\frac{\\partial f}{\\partial x} + j\\frac{\\partial f}{\\partial y} + k\\frac{\\partial f}{\\partial z}$$

The **Directional Derivative** is the rate of change of $f$ in a specific unit vector direction $\\hat{u}$. It is uniquely defined as the dot product between the chosen direction and the gradient:

$$D_u f = \\nabla f \\cdot \\hat{u}$$

From the dot product definition $A \\cdot B = |A||B| \\cos \\theta$, the maximum value of $D_u f$ occurs when $\\cos \\theta = 1$, meaning $\\hat{u}$ points exactly in the same direction as $\\nabla f$. Therefore:
*   Maximum rate of change = $|\\nabla f|$
*   Direction of maximum rate = $\\frac{\\nabla f}{|\\nabla f|}$

## Step-by-Step Method for Finding Gradients

1.  **Verify input:** Ensure you are starting with a scalar function $f(x,y,z)$. You cannot take the gradient of a vector field.
2.  **Take $\\partial / \\partial x$:** Derive the mathematical function with respect to $x$, treating $y$ and $z$ as physical constants. Attach an $i$ vector.
3.  **Take $\\partial / \\partial y$:** Derive with respect to $y$, treating $x$ and $z$ as constants. Attach a $j$ vector.
4.  **Take $\\partial / \\partial z$:** Derive with respect to $z$. Attach a $k$ vector.
5.  **Build Vector:** Sum them up: $\\nabla f = i(f_x) + j(f_y) + k(f_z)$.

<div class="plot-interactive" data-plot-id="gradient_field"></div>

## Algorithmic Problem Solving Flow

1.  **Need the Tangent Plane / Normal Vector?**
    *   Set the surface equation equal to a constant: $f(x,y,z) = C$.
    *   Calculate $\\nabla f$. 
    *   Evaluate $\\nabla f$ at the specific point $(x_0, y_0, z_0)$. This gives the perfect geometrical normal vector $n$.
2.  **Need the Directional Derivative?**
    *   Calculate $\\nabla f$. Evaluate it at the point.
    *   Find the direction vector $v$. Ensure it is a UNIT vector by dividing by magnitude: $\\hat{u} = v / |v|$.
    *   Dot product: $\\nabla f \\cdot \\hat{u}$.
3.  **Need the maximum increase?**
    *   Calculate $\\nabla f$.
    *   Magnitude $|\\nabla f|$ is the max rate.
    *   Direction is $\\nabla f$ exactly.

## Concept Recall: Trigger Words → Action

*   *"Find the direction of steepest ascent..."* → Calculate $\\nabla f$. Do not dot it. It is the vector.
*   *"Find the rate of steepest ascent..."* → Calculate magnitude $|\\nabla f|$.
*   *"Find the directional derivative in direction v..."* → Normalize $v$ to $\\hat{u}$. Then compute $\\nabla f \\cdot \\hat{u}$.
*   *"Find the normal to the level surface..."* → Calculate $\\nabla f$ and evaluate it at the point.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Basic Gradient**

**Question:** Find $\\nabla f$ for $f(x,y,z) = x^2 + y^2 + z^2$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Take partial derivatives: $\\partial f/\\partial x = 2x$, $\\partial f/\\partial y = 2y$, $\\partial f/\\partial z = 2z$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$f_x = 2x, f_y = 2y, f_z = 2z$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Attach basis vectors to map scalar directly to vector field.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2x i + 2y j + 2z k$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Directional Derivative**

**Question:** Find $df/ds$ for $f(x,y) = x^2 + y^2$ in direction $\\hat{u} = (i+j)/\\sqrt{2}$ at $(1,1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">First find the master gradient expression. Then evaluate at (1,1).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2x i + 2y j$<br>$\\nabla f(1,1) = 2 i + 2 j$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Dot the gradient with the unit vector $\\hat{u}$. It's correctly normalized already.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$df/ds = (2i+2j) \\cdot (i+j)/\\sqrt{2}$<br>$= (2+2)/\\sqrt{2} = 4/\\sqrt{2} = 2\\sqrt{2}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Maximum Rate of Increase**

**Question:** In what direction does $f(x,y) = x^2 + y^2$ increase fastest at $(1,1)$? What's the rate?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Gradient tells me both the max direction and max value directly.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f(1,1) = 2i + 2j$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Direction is the vector. Rate is magnitude.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Direction = $i + j$<br>Max Rate = $|\\nabla f| = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Gradient as Normal to Level Surface**

**Question:** Find the normal vector to the sphere $f(x,y,z) = x^2 + y^2 + z^2 = 3$ at point $(1,1,1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">By geometric rule, $\\nabla f$ is perfectly perpendicular to the exterior shape of level surfaces $f = C$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2x i + 2y j + 2z k$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Evaluate gradient at $(1,1,1)$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Normal $N = \\nabla f(1,1,1) = 2i + 2j + 2k$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Missing the Normalization Trap**

**Question:** If $\\nabla f = 3i + 4j$ and you want the derivative in the direction of $v = 3i - 4j$, find $df/ds$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">I have the gradient. But the direction $v$ is NOT a unit vector. Its length is 5. I MUST normalize it, or the integral stretches arbitrarily.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\hat{u} = \\frac{3i - 4j}{\\sqrt{3^2 + (-4)^2}} = \\frac{3i - 4j}{5}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Now compute dot product $\\nabla f \\cdot \\hat{u}$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$df/ds = (3i + 4j) \\cdot (\\frac{3i - 4j}{5}) = \\frac{9 - 16}{5} = -\\frac{7}{5}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Zero Directional Derivative**

**Question:** In what direction is the directional derivative precisely $0$ if $\\nabla f = 3i + 4j$?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A directional derivative of 0 means the dot product $\\nabla f \\cdot \\hat{u} = 0$. This means orthogonal direction.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">We need $\\hat{u}$ such that $(3i + 4j) \\cdot \\hat{u} = 0$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">To make dot product zero in 2D, swap the coordinates and flip one sign. $(4, -3)$ or $(-4, 3)$. Then normalize.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Orthogonal vector $v = 4i - 3j$.<br>Normalize: $\\hat{u} = \\frac{4i - 3j}{5}$ or $\\frac{-4i + 3j}{5}$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Electric Field from Potential**

**Question:** If absolute potential is $\\Phi(x,y,z) = \\frac{q}{4\\pi\\varepsilon_0 r}$, calculate electric field $E = -\\nabla \\Phi$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Let $r = \\sqrt{x^2+y^2+z^2}$. $\\partial\\Phi / \\partial x$ demands chain rule.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\Phi = k (x^2+y^2+z^2)^{-1/2}$<br>$\\partial\\Phi/\\partial x = k(-\\frac{1}{2})(x^2+y^2+z^2)^{-3/2}(2x) = -\\frac{kx}{r^3}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Assemble the gradient and negate it.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E = -\\nabla \\Phi = - ( -\\frac{k}{r^3} (xi + yj + zk) )$<br>$E = \\frac{q}{4\\pi\\varepsilon_0} \\frac{\\mathbf{r}}{r^3}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Finding Level Surface Tangent Planes**

**Question:** Equation of the tangent plane to the surface $x^2 + y^2 + z^2 = 9$ at $(2, 2, 1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Tangent planes require a normal vector. $\\nabla f$ provides exactly that.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2xi + 2yj + 2zk$<br>$\\nabla f(2,2,1) = 4i + 4j + 2k$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Plane equation uses $A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$4(x-2) + 4(y-2) + 2(z-1) = 0$<br>$4x + 4y + 2z = 18$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Gradient in Cylindrical Coordinates**

**Question:** Find $\\nabla f$ for $f(r, \\theta, z) = r^2 \\sin \\theta$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Cylindrical gradient formula is $\\hat{e}_r \\frac{\\partial f}{\\partial r} + \\hat{e}_\\theta \\frac{1}{r}\\frac{\\partial f}{\\partial \\theta} + \\hat{e}_z \\frac{\\partial f}{\\partial z}$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = \\hat{e}_r (2r \\sin \\theta) + \\hat{e}_\\theta \\frac{1}{r} (r^2 \\cos \\theta) + \\hat{e}_z (0)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Simplify the $1/r$ term.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2r \\sin \\theta \\hat{e}_r + r \\cos \\theta \\hat{e}_\\theta$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Gradient in Spherical Coordinates**

**Question:** Find $\\nabla f$ for $f(r, \\theta, \\phi) = \\frac{1}{r}$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Spherical gradient formula. Function only depends on r, so $\\partial/\\partial \\theta$ and $\\partial/\\partial \\phi$ are 0.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = \\hat{e}_r \\frac{\\partial}{\\partial r}(r^{-1})$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Take standard power rule derivative.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = -\\frac{1}{r^2} \\hat{e}_r$</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Gradient</div>
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
      <td class="py-3 pr-4 text-slate-800">Find Directional Derivative</td>
      <td class="py-3 pr-4 text-slate-800">Did they give me a unit vector?</td>
      <td class="py-3 pr-4 text-slate-800">Compute $\\nabla f$, divide $v$ by $|v|$, take dot product.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Direction of greatest change</td>
      <td class="py-3 pr-4 text-slate-800">Do I need the dot product?</td>
      <td class="py-3 pr-4 text-slate-800">No, the answer is exactly the gradient $\\nabla f$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Plane tangent to a level surface</td>
      <td class="py-3 pr-4 text-slate-800">What is the normal vector?</td>
      <td class="py-3 pr-4 text-slate-800">Normal $n$ is accurately computed as $\\nabla f$ at that point.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Electric Field from Voltage</td>
      <td class="py-3 pr-4 text-slate-800">Electric field points Downhill?</td>
      <td class="py-3 pr-4 text-slate-800">Use $E = -\\nabla V$.</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: Forgetting to Normalize the Direction Vector.** When calculating directional derivative $D_u f = \\nabla f \\cdot \\hat{u}$, the vector $u$ *MUST* have a magnitude of exactly 1. If it doesn't, you calculate a scaled, incorrect value. This is the #1 easiest mistake in vector calculus.
*   **Trap 2: Ignoring the negative sign in Electric Field.** Voltage is a potential. Positive charges want to fall DOWN the gradient (from high potential to low potential). Therefore, $E = -\\nabla V$. If you drop the minus sign, your entire physics model propagates in reverse.
*   **Trap 3: Mixing Gradient output types.** Divergence is scalar. Curl is vector. Gradient ALWAYS results in a VECTOR. Do NOT sum the derivatives without the $i, j, k$ components separating them.

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the gradient of f(x,y,z) = x y z."></div>
<div class="user-quiz" data-question="2. True or False: The gradient vector points exactly tangent to level surfaces."></div>
<div class="user-quiz" data-question="3. State the relationship between Electric Field vector E and voltage potential V."></div>
<div class="user-quiz" data-question="4. Calculate the directional derivative of f(x,y) = x+y in direction (i+j)/sqrt(2) at any point."></div>
<div class="user-quiz" data-question="5. What mathematical operation gives the absolute maximum rate of ascent for a scalar function?"></div>
`
};
module.exports = v4;
