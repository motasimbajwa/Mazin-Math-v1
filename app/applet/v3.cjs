const v3 = {
  id: "chapter-v3",
  title: "Chapter V3: The Curl – Rotation and Circulation",
  progress: 0,
  subheadings: [
    { id: "v3-intro", title: "Introduction: What is Curl?" },
    { id: "v3-eli5", title: "ELI5 Explanation: The Vortex Detector" },
    { id: "v3-glossary", title: "Glossary of Key Terms" },
    { id: "v3-why-ee", title: "Why This Matters in Electrical Engineering" },
    { id: "v3-formal", title: "Formal Definitions and Notation" },
    { id: "v3-method", title: "Step-by-Step Method for Calculating Curl" },
    { id: "v3-flowchart", title: "Algorithmic Problem Solving Flow" },
    { id: "v3-triggers", title: "Concept Recall: Trigger Words → Action" },
    { id: "v3-examples", title: "10 Exam-Level Worked Exercises with Inner Voice" },
    { id: "v3-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
    { id: "v3-traps", title: "Common Mistakes (The Examiner's Traps)" },
    { id: "v3-test", title: "Chapter Assessment" }
  ],
  markdown: `
## Introduction: What is Curl?

If divergence measures how much a vector field expands outward, **Curl** measures how much it swirls or rotates. The curl maps a *vector function* to another *vector function*. 

At any point in space, the curl tells you the axis around which the field swirls, and its magnitude tells you how fast the swirl is rotating. 

In physics and engineering, curl is vital. Static electric fields have no curl (they are "irrotational"), but magnetic fields are fundamentally characterized by their curl around currents. Time-varying electric fields induce magnetic curls, and time-varying magnetic fields induce electric curls. This interplay is the origin of electromagnetic waves.

## ELI5 Explanation: The Vortex Detector

Imagine throwing a tiny, microscopic paddle wheel (like a water wheel) into a flowing river.

If the paddle wheel flows linearly down the river without spinning, the water there has zero curl.
If the paddle wheel starts freely spinning, it has encountered a vortex. The water has a non-zero curl.

*   The **magnitude** of the curl tells you how fast the paddle wheel spins.
*   The **direction** of the curl vector is the axis the paddle wheel spins around, adhering to the right-hand rule (curl your fingers in the direction of the spin, your thumb points to the curl vector).

In EE, wrapping your right hand around a wire with a current, your fingers point in the direction of the magnetic field's circulation. This is Ampère's Law in physical reality.

## Glossary of Key Terms

*   **Circulation:** The line integral of a vector field around a closed loop ($\\oint_C F \\cdot \\hat{t} \\, ds$). Matches "work done" if $F$ is a force.
*   **Curl ($\\nabla \\times F$):** A microscopic measure of rotation. Vector operator pointing along the axis of rotation.
*   **Irrotational Field:** A vector field where the curl is exactly zero everywhere ($ \\nabla \\times F = 0 $). Also called a conservative field.
*   **Stokes' Theorem:** Relates the circulation of a field around a closed loop to the surface integral of the curl over the capping surface.
*   **Ampère's Law:** $\\nabla \\times B = \\mu_0 J$. The curl of the magnetic field is created by current density $J$.

## Why This Matters in Electrical Engineering

Curl is the mathematical engine behind two of Maxwell's Equations:
1.  **Ampère's Law:** $\\nabla \\times B = \\mu_0 J$. Electric currents cause magnetic fields to circulate around them. This is how electromagnets and motors work.
2.  **Faraday's Law of Induction:** $\\nabla \\times E = - \\frac{\\partial B}{\\partial t}$. A changing magnetic field generates a circulating electric field. This is how transformers, inductors, and generators produce voltage.
3.  **Magnetic Vector Potential:** Because $\\nabla \\cdot B = 0$, we can define $B = \\nabla \\times A$, converting magnetic field problems into a simpler vector potential space.

## Formal Definitions and Notation

The curl of $F$, denoted $\\text{curl} F$ or $\\nabla \\times F$, is formally the limit of circulation per unit area:

$$(\\nabla \\times F) \\cdot \\hat{n} = \\lim_{\\Delta A \\to 0} \\frac{1}{\\Delta A} \\oint_C F \\cdot \\hat{t} \\, ds$$

In Cartesian coordinates, it is famously computed via an elegant determinant mnemonic:

$$\\nabla \\times F = \\begin{vmatrix} i & j & k \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix}$$

Expanding the determinant yields the explicit components:
$$(\\nabla \\times F)_x = \\frac{\\partial F_z}{\\partial y} - \\frac{\\partial F_y}{\\partial z}$$
$$(\\nabla \\times F)_y = \\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x}$$
$$(\\nabla \\times F)_z = \\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y}$$

### Stokes' Theorem
The circulation of $F$ around a closed curve $C$ is identically equal to the surface integral of the curl of $F$ over *any* surface $S$ capped by $C$:
$$\\oint_C F \\cdot \\hat{t} \\, ds = \\iint_S (\\nabla \\times F) \\cdot \\hat{n} \\, dS$$

## Step-by-Step Method for Calculating Curl

1.  **Write the Matrix:** Draw a 3x3 matrix.
    *   Top row: basis vectors $i, j, k$.
    *   Middle row: partial derivative operators $\\frac{\\partial}{\\partial x}, \\frac{\\partial}{\\partial y}, \\frac{\\partial}{\\partial z}$.
    *   Bottom row: the scalar components of the field $F_x, F_y, F_z$.
2.  **Evaluate the $i$ component:** Cross out row 1 and column 1. Subtract the cross-diagonal derivatives: $\\frac{\\partial}{\\partial y} (F_z) - \\frac{\\partial}{\\partial z} (F_y)$. Multiply by $i$.
3.  **Evaluate the $j$ component:** Cross out row 1 and column 2. Apply derivatives similarly, but remember the **negative sign** inherent to the middle determinant expansion: $- [ \\frac{\\partial}{\\partial x} (F_z) - \\frac{\\partial}{\\partial z} (F_x) ] \\cdot j$.
4.  **Evaluate the $k$ component:** Cross out row 1 and column 3. Calculate $\\frac{\\partial}{\\partial x} (F_y) - \\frac{\\partial}{\\partial y} (F_x)$. Multiply by $k$.
5.  **Simplify:** Add all valid i, j, k bits into the final output vector.

<div class="plot-interactive" data-plot-id="curl_visual"></div>

## Algorithmic Problem Solving Flow

1.  **Are you calculating standard curl?**
    *   Always use the 3x3 determinant expansion method mentally or physically to avoid sign errors.
2.  **Are you evaluating a circulation integral $\\oint F \\cdot ds$?**
    *   If taking the path integral directly is an algebraic nightmare, use Stokes' Theorem. Calculate the curl $\\nabla \\times F$, then take the surface integration $\\iint (\\nabla \\times F) \\cdot \\hat{n} \\, dS$.
3.  **Are you checking for path independence (conservative field)?**
    *   Calculate $\\nabla \\times F$. If the curl is the zero vector, line integrals between two points are independent of the path taken.

## Concept Recall: Trigger Words → Action

*   *"Determine if the field is conservative..."* → Calculate $\\nabla \\times F$. If it is $0$, it is conservative (irrotational).
*   *"Find the work done moving a particle around closed loop C..."* → Work = $\\oint F \\cdot ds$. If the loop creates a complex shape, use Stokes' Theorem to evaluate the surface integral of the curl instead.
*   *"Calculate circulation..."* → Another phrase for $\\oint F \\cdot ds$. Use Stokes' theorem.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Basic Curl Calculation**

**Question:** Find $\\nabla \\times F$ for $F(x, y, z) = iy - jx$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">$F_x = y, F_y = -x, F_z = 0$. I will set up the determinant.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times F = | i\\; j\\; k |$<br>$| \\partial_x\\; \\partial_y\\; \\partial_z |$<br>$| y\\; -x\\; 0 |$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">$i$-comp: $\\partial(0)/\\partial y - \\partial(-x)/\\partial z = 0$<br>$j$-comp: $-[\\partial(0)/\\partial x - \\partial(y)/\\partial z] = 0$<br>$k$-comp: $\\partial(-x)/\\partial x - \\partial(y)/\\partial y = -1 - 1 = -2$</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times F = -2k$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Zero Curl (Conservative Field)**

**Question:** Find $\\nabla \\times F$ for $F(x, y, z) = iy + jx$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Set up the $k$ component since $F_z=0$ and everything is flat. $k$: $\\partial_x(x) - \\partial_y(y)$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$k$-component: $\\frac{\\partial}{\\partial x}(x) - \\frac{\\partial}{\\partial y}(y)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">$1 - 1 = 0$. Since all components evaluate to 0, this field is conservative.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times F = 0$. (Irrotational)</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Curl of a Magnetic Field**

**Question:** Given $B = (\\mu_0 I / 2\\pi r) \\hat{e}_\\theta$ for a wire. Explain physically what $\\nabla \\times B$ evaluates to for $r \\neq 0$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Ampère's law says $\\nabla \\times B = \\mu_0 J$. The current $J$ only exists inside the wire at the origin.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">By Ampère's Law, $\\nabla \\times B = \\mu_0 J$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">If I am at $r \\neq 0$, the current density $J$ is zero (in empty space). So curl must be zero.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">For $r \\neq 0$, $J = 0$.<br>Therefore, $\\nabla \\times B = 0$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Interpretation of Curl**

**Question:** If $\\nabla \\times F = 2k$ at a point, what does this mean physically for a paddle wheel?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The vector $k$ is the z-axis. The paddle wheel's axle aligns with $z$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The axis of maximum rotation is along the z-axis.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The curl is twice the angular velocity $\\omega$. So angular velocity is 1.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The paddle wheel spins in the xy plane with angular velocity 1 entirely about the z-axis.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Verifying Stokes' Theorem**

**Question:** Given $F = iy - jx$ and $S$ is a flat disk radius $R$ in the xy-plane. Identify values to verify Stokes.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Surface side: From Ex. 1, $\\nabla \\times F = -2k$. The surface integral of the constant $-2$ over area $\\pi R^2$ is $-2\\pi R^2$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\iint (\\nabla \\times F) \\cdot \\hat{n} \\, dS = -2k \\cdot k (\\pi R^2) = -2\\pi R^2$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Line side: The field opposes the standard counter-clockwise path heavily. Integrating around the perimeter $C$ yields same.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\oint F \\cdot ds = -2\\pi R^2$. Confirmed.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Irrotational Flow Property**

**Question:** If $\\nabla \\times F = 0$, what powerful statement can we make about the line integral of F between points A and B?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">If curl is 0, the field is conservative. This implies a "potential" exists.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The field is irrotational/conservative. Therefore $F = \\nabla \\varphi$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Therefore, walking from A to B requires the same work regardless of path.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The line integral $\\int_{A}^{B} F \\cdot ds$ is universally path-independent.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Vortex Identification**

**Question:** For $F = i(-y) + j(x)$, is this a vortex? Compute $\\nabla \\times F$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">$F_x = -y, F_y = x$. Take the k-component scalar $\\partial(F_y)/\\partial x - \\partial(F_x)/\\partial y$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times F = k(\\frac{\\partial}{\\partial x}(x) - \\frac{\\partial}{\\partial y}(-y))$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">$1 - (-1) = 2$. It is non-zero, so it spins.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= k(1 - (-1)) = 2k$.<br>Yes, it's a vortex.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Ampère's Law Application**

**Question:** Given $\\nabla \\times B = \\mu_0 J$, and $B = (x^2 z) j$, calculate the current density $J$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Compute curl B. $B_x=0$, $B_y=x^2 z$, $B_z=0$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times B = | i\\; j\\; k |$<br>$| \\partial_x\\; \\partial_y\\; \\partial_z |$<br>$| 0\\; x^2z\\; 0 |$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">$i$: $-\\partial(x^2 z)/\\partial z = -x^2$.<br>$j$: $0$.<br>$k$: $\\partial(x^2 z)/\\partial x = 2xz$.<br>Then $J = (1/\\mu_0) \\nabla \\times B$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times B = -x^2 i + 2xz k$<br>$J = \\frac{1}{\\mu_0} (-x^2 i + 2xz k)$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Faraday's Law**

**Question:** Given Faraday's Law $\\nabla \\times E = - \\frac{\\partial B}{\\partial t}$, if $B = t^2 j$, what relates to the electric field?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Take the time derivative of B. $\\partial B / \\partial t = 2t j$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$- \\frac{\\partial B}{\\partial t} = -2t j$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">This must equal the curl of the electric field.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times E = -2t j$.<br>A circulating electric field is induced.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: General Curl Theorem**

**Question:** What is the divergence of the curl of any valid vector field? (Calculate $\\nabla \\cdot (\\nabla \\times F)$).

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">This is a famous vector identity. "Div of Curl is zero." It's like asking "how much does a pure rotation expand outward?" It doesn't.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">By vector identity, the divergence of any curl is 0.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Mathematically, expanding the mixed partial derivatives leads them all to cancel out exactly.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot (\\nabla \\times F) = 0$ over all space.</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Curl</div>
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
      <td class="py-3 pr-4 text-slate-800">Calculate Curl ($\\nabla \\times F$)</td>
      <td class="py-3 pr-4 text-slate-800">Do I remember the determinant?</td>
      <td class="py-3 pr-4 text-slate-800">Draw 3x3 matrix: $i, j, k$ top row. $\\partial_x, \\partial_y, \\partial_z$ middle. $F_x, F_y, F_z$ bottom.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Stokes' Theorem</td>
      <td class="py-3 pr-4 text-slate-800">Is line integral hard?</td>
      <td class="py-3 pr-4 text-slate-800">Convert $\\oint F \\cdot ds$ to $\\iint (\\nabla \\times F) \\cdot dS$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">$\\nabla \\times F = 0$</td>
      <td class="py-3 pr-4 text-slate-800">What does irrotational imply?</td>
      <td class="py-3 pr-4 text-slate-800">$F$ is conservative. Path independent. $F = \\nabla \\varphi$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Ampère's Law</td>
      <td class="py-3 pr-4 text-slate-800">How do forces relate to curl?</td>
      <td class="py-3 pr-4 text-slate-800">$\\nabla \\times B = \\mu_0 J$.</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: The J-component negative sign.** When expanding the determinant, the $j$-component must be subtracted: $-j ( \\frac{\\partial F_z}{\\partial x} - \\frac{\\partial F_x}{\\partial z} )$. Alternatively, swap the internal subtraction: $+j ( \\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x} )$. Failure here ruins the whole vector.
*   **Trap 2: Confusing Curl and Divergence output.** Curl produces a VECTOR (has $i, j, k$). Divergence produces a SCALAR (just a number/function). 
*   **Trap 3: Divergence of Curl.** If asked for $\\nabla \\cdot (\\nabla \\times F)$, don't waste 10 minutes calculating it. The answer is always exactly zero by identity.

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the curl of F = 3z i + 2x j + 5y k."></div>
<div class="user-quiz" data-question="2. True or False: If a field is conservative, its curl is zero."></div>
<div class="user-quiz" data-question="3. State Stokes' theorem relating a line integral to a surface integral."></div>
<div class="user-quiz" data-question="4. In Ampère's Law, what physical quantity determines the curl of the magnetic field?"></div>
<div class="user-quiz" data-question="5. What is the value of the divergence of the curl of F?"></div>
`
};
module.exports = v3;
