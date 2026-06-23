const v2 = {
  id: "chapter-v2",
  title: "Chapter V2: The Divergence – Sources and Sinks",
  progress: 0,
  subheadings: [
    { id: "v2-intro", title: "Introduction: What is Divergence?" },
    { id: "v2-eli5", title: "ELI5 Explanation: The Source/Sink Detector" },
    { id: "v2-glossary", title: "Glossary of Key Terms" },
    { id: "v2-why-ee", title: "Why This Matters in Electrical Engineering" },
    { id: "v2-formal", title: "Formal Definitions and Notation" },
    { id: "v2-method", title: "Step-by-Step Method for Calculating Divergence" },
    { id: "v2-flowchart", title: "Algorithmic Problem Solving Flow" },
    { id: "v2-triggers", title: "Concept Recall: Trigger Words → Action" },
    { id: "v2-examples", title: "10 Exam-Level Worked Exercises with Inner Voice" },
    { id: "v2-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
    { id: "v2-traps", title: "Common Mistakes (The Examiner's Traps)" },
    { id: "v2-test", title: "Chapter Assessment" }
  ],
  markdown: `
## Introduction: What is Divergence?

In our study of vector fields, an immediate geometrical question arises: Is the field expanding away from a point, compressing into a point, or just passing straight through?

The **Divergence** of a vector field is a scalar operation that measures precisely this. It operates on a *vector function* and spits out a *scalar function*. At any point in space, divergence tells you the net rate of "flux" (flow) leaving an infinitesimally small volume around that point.

When we deal with electricity and magnetism, identifying the sources of a field is paramount. Divergence allows us to connect the invisible electric field $E$ directly to the physical electric charges $\\rho$ that create it. This profound connection is Gauss' Law.

## ELI5 Explanation: The Source/Sink Detector

Imagine water flowing out of a hose. At the hose opening, new water is constantly being introduced into the environment. The "divergence" at the hose opening is positive. We call this a **source**.

Conversely, picture water swirling down a drain. The water is leaving the environment at that specific point. The divergence at the drain is negative. We call this a **sink**.

Now, imagine the water steadily flowing down the middle of a straight river. Whatever volume of water enters a patch of the river from the upstream side exactly matches the volume exiting the downstream side. The net accumulation is zero. The divergence here is zero, meaning it's neither a source nor a sink.

The divergence operator $\\text{div} F$ (or $\\nabla \\cdot F$) acts like a mathematical detector probe. Move it around in a vector field, and it reads a positive number over sources, a negative number over sinks, and zero everywhere else.

## Glossary of Key Terms

*   **Flux ($\\Phi$):** The rate of flow of a vector field through a surface.
*   **Unit Normal Vector ($\\hat{n}$):** A vector with length 1 that points perpendicularly outward from a surface.
*   **Divergence ($\\text{div} F$ or $\\nabla \\cdot F$):** A scalar measure of a vector field's tendency to originate from or converge upon a given point.
*   **Divergence Theorem (Gauss' Theorem):** Relates the flux of a field through a closed boundary surface to the volume integral of the divergence inside.
*   **Solenoidal Field:** A vector field with zero divergence everywhere ($\\nabla \\cdot F = 0$). Magnetic fields are always solenoidal.
*   **Charge Density ($\\rho$):** Electric charge per unit volume.

## Why This Matters in Electrical Engineering

Divergence is the mathematical foundation of how charges create electric fields.
1.  **Gauss' Law:** $\\nabla \\cdot E = \\rho / \\varepsilon_0$. The divergence of the electric field at a point is directly proportional to the charge density at that point. Positive charges are sources of the E-field, negative charges are sinks.
2.  **Continuity Equation:** $\\nabla \\cdot J + \\frac{\\partial \\rho}{\\partial t} = 0$. This expresses the conservation of charge. If current $J$ is diverging away from a point, the charge density $\\rho$ at that point must be decreasing over time.
3.  **No Magnetic Monopoles:** $\\nabla \\cdot B = 0$. Magnetic fields have no point sources or sinks. They always form closed loops.

## Formal Definitions and Notation

The divergence is formally defined as the limit of the surface integral of $F$ (flux) over a closed surface $S$ shrinking to a point, divided by the volume $\\Delta V$ enclosed by $S$:

$$\\text{div} F = \\lim_{\\Delta V \\to 0} \\frac{1}{\\Delta V} \\iint_S F \\cdot \\hat{n} \\, dS$$

In manageable Cartesian coordinates, divergence is the dot product of the del operator $\\nabla = i\\frac{\\partial}{\\partial x} + j\\frac{\\partial}{\\partial y} + k\\frac{\\partial}{\\partial z}$ with the vector field $F$:

$$\\text{div} F = \\nabla \\cdot F = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$$

### Cylindrical Coordinates $(r, \\theta, z)$:
$$\\nabla \\cdot F = \\frac{1}{r} \\frac{\\partial}{\\partial r}(r F_r) + \\frac{1}{r} \\frac{\\partial F_\\theta}{\\partial \\theta} + \\frac{\\partial F_z}{\\partial z}$$

### Spherical Coordinates $(r, \\theta, \\phi)$:
$$\\nabla \\cdot F = \\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^2 F_r) + \\frac{1}{r \\sin\\phi} \\frac{\\partial}{\\partial \\phi}(\\sin\\phi F_\\phi) + \\frac{1}{r \\sin\\phi} \\frac{\\partial F_\\theta}{\\partial \\theta}$$

### Divergence Theorem
The surface integral of $F$ over a closed surface $S$ equals the volume integral of the divergence of $F$ over the enclosed volume $V$:
$$\\oiint_S F \\cdot \\hat{n} \\, dS = \\iiint_V (\\nabla \\cdot F) \\, dV$$

## Step-by-Step Method for Calculating Divergence

1.  **Identify Coordinate System:** Is the field $F$ written in terms of $(x,y,z)$, $(r,\\theta,z)$, or $(r,\\theta,\\phi)$?
2.  **Extract Components:** Write down the individual components $F_x$, $F_y$, $F_z$ (or $F_r, F_\\theta$, etc.).
3.  **Select the Right Formula:** Use the divergence formula matching your coordinates.
4.  **Differentiate:** Carefully take the partial derivative of each component with respect to its corresponding variable.
    *   *Warning in non-Cartesian:* Don't forget that inside the derivative, $F_r$ is multiplied by $r$ or $r^2$ before deriving!
5.  **Sum the Results:** Add the partial derivatives together. The result is a scalar function (no $i, j, k$ vectors!).

<div class="plot-interactive" data-plot-id="divergence_visual"></div>

## Algorithmic Problem Solving Flow

1.  **Are you asked to find "Divergence" or "$\\nabla \\cdot F$"?**
    *   Apply the partial derivative formula directly to the components.
2.  **Are you asked for "Flux through a closed surface"?**
    *   Is the integral hard? Use the Divergence Theorem instead: compute $\\nabla \\cdot F$, then integrate that simple scalar over the volume.
3.  **Are you given an electric field and asked for charge density $\\rho$?**
    *   Compute $\\nabla \\cdot E$.
    *   Multiply by $\\varepsilon_0$ because $\\rho = \\varepsilon_0 (\\nabla \\cdot E)$.

## Concept Recall: Trigger Words → Action

*   *"Calculate divergence..."* → Drop the $i, j, k$. Take $\\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.
*   *"Flux through a closed sphere/cylinder/cube..."* → STOP. Don't do a surface integral. Use the Divergence Theorem and integrate over the volume instead.
*   *"Is the field solenoidal?"* → Calculate $\\nabla \\cdot F$. Does it precisely equal 0 everywhere?
*   *"Is it a source or a sink?"* → Check the sign of $\\nabla \\cdot F$. Positive = source, Negative = sink.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Basic Divergence Calculation**

**Question:** Find $\\nabla \\cdot F$ for $F(x, y, z) = ix^2 + jy^2 + kz^2$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Divergence requires summing the spatial derivatives of each basis component.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{\\partial}{\\partial x}(x^2) + \\frac{\\partial}{\\partial y}(y^2) + \\frac{\\partial}{\\partial z}(z^2)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Just apply power rule to each independently. The answer must be a scalar.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 2x + 2y + 2z$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Zero Divergence**

**Question:** Find $\\nabla \\cdot F$ for $F(x, y, z) = iy + jx + k(0)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">$F_x = y$, $F_y = x$. Take $\\partial F_x/\\partial x$ and $\\partial F_y/\\partial y$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{\\partial}{\\partial x}(y) + \\frac{\\partial}{\\partial y}(x) + \\frac{\\partial}{\\partial z}(0)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The derivative of $y$ with respect to $x$ is zero. The field is solenoidal.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 0 + 0 + 0 = 0$<br>This field is solenoidal.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Divergence of an Electric Field**

**Question:** Given $E = \\frac{q}{4\\pi\\varepsilon_0} \\frac{ix + jy + kz}{(x^2+y^2+z^2)^{3/2}}$, state $\\nabla \\cdot E$ for $r \\neq 0$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">This is the field of a point charge at the origin. I know from Gauss' Law that charge only exists at the origin. So everywhere else, charge density $\\rho = 0$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">From physics, this is a point charge field.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Therefore, the divergence must evaluate to zero everywhere except the origin.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot E = 0$ for $r \\neq 0$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Physical Interpretation**

**Question:** A vector field $F$ has $\\nabla \\cdot F = 2$ at point $(1, 1, 1)$. What does this mean?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Divergence evaluates the net outward flux per unit volume. A positive number means expansion.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Positive divergence means net flow out of a small volume around the point.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">It implies something is generating the field at that specific coordinate.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">More flux leaves than enters; there is a **source** at $(1, 1, 1)$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Cylindrical Coordinates**

**Question:** Find $\\nabla \\cdot F$ for $F(r, \\theta, z) = \\hat{e}_r (r^2)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The field is in cylindrical coordinates. The only non-zero component is $F_r = r^2$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{1}{r} \\frac{\\partial}{\\partial r}(r F_r)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">I must multiply $F_r$ by $r$ BEFORE differentiating! So I derive $r \\cdot r^2 = r^3$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{1}{r} \\frac{\\partial}{\\partial r}(r^3) = \\frac{1}{r} (3r^2) = 3r$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Spherical Coordinates**

**Question:** Find $\\nabla \\cdot F$ for $F(r, \\theta, \\phi) = \\hat{e}_r (r^2)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Spherical coordinates. Only $F_r = r^2$ is non-zero. The spherical formula uses a $1/r^2$ multiplier.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^2 F_r)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Multiply $F_r$ by $r^2$ first. Make it $r^4$. Then take derivative.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^4) = \\frac{1}{r^2} (4r^3) = 4r$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Checking Divergence Theorem**

**Question:** Evaluate flux of $F = ix + jy + kz$ through a sphere of radius R using Divergence Theorem.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Instead of surface integral, calculate divergence then integrate over volume.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 1 + 1 + 1 = 3$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Volume integral of the constant 3 is just 3 times the volume of the sphere.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\iiint_V 3 \\, dV = 3 \\cdot (\\frac{4}{3}\\pi R^3) = 4\\pi R^3$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Finding Charge from Divergence**

**Question:** If $\\nabla \\cdot E = \\rho / \\varepsilon_0$ and $E = i(\\alpha x) + j(\\beta y) + k(\\gamma z)$, find charge density $\\rho$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Simply calculate divergence of E, then isolate $\\rho$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot E = \\alpha + \\beta + \\gamma$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Equate to Gauss' Law differential form.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\alpha + \\beta + \\gamma = \\rho / \\varepsilon_0 \\implies \\rho = \\varepsilon_0(\\alpha + \\beta + \\gamma)$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Source/Sink Identification**

**Question:** For $F = i(x) + j(y)$, is the origin a source or sink?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Find the divergence. Evaluate it at (0,0).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 1 + 1 = 2$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">It is a positive constant $2$. Because it is positive, matter is expanding outward.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 2 > 0$.<br>The origin (and everywhere else) is a **source**.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Continuity Equation**

**Question:** If $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot J = 0$ and charge density $\\rho$ is increasing, what is the sign of $\\nabla \\cdot J$?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">If $\\rho$ is increasing, then $\\partial \\rho / \\partial t$ is a positive quantity.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\frac{\\partial \\rho}{\\partial t} > 0$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">To make the equation sum to zero, the divergence of current J must be negative. (Current is flowing inwards, creating a sink for J, which builds up $\\rho$).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot J = - \\frac{\\partial \\rho}{\\partial t} < 0$<br>$\\nabla \\cdot J$ is negative.</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Divergence</div>
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
      <td class="py-3 pr-4 text-slate-800">Cartesian $\\nabla \\cdot F$</td>
      <td class="py-3 pr-4 text-slate-800">Do I just sum derivatives?</td>
      <td class="py-3 pr-4 text-slate-800">Yes, $\\partial F_x / \\partial x + \\partial F_y / \\partial y + \\partial F_z / \\partial z$. Drop the $i, j, k$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Cylindrical $\\nabla \\cdot F$</td>
      <td class="py-3 pr-4 text-slate-800">Did I multiply by $r$ before deriving?</td>
      <td class="py-3 pr-4 text-slate-800">Use formula: $\\frac{1}{r} \\frac{\\partial}{\\partial r}(r F_r)$</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Spherical $\\nabla \\cdot F$</td>
      <td class="py-3 pr-4 text-slate-800">Did I multiply by $r^2$ before deriving?</td>
      <td class="py-3 pr-4 text-slate-800">Use formula: $\\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^2 F_r)$</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Flux through a closed surface</td>
      <td class="py-3 pr-4 text-slate-800">Is calculating normal vectors painful?</td>
      <td class="py-3 pr-4 text-slate-800">Use Divergence Theorem! $\\iiint (\\nabla \\cdot F) dV$</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Gauss' Law</td>
      <td class="py-3 pr-4 text-slate-800">Finding charge density?</td>
      <td class="py-3 pr-4 text-slate-800">$\\rho = \\varepsilon_0 (\\nabla \\cdot E)$</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: Formatting the answer as a vector.** Divergence evaluates to a SCALAR. If your answer has an $i, j$, or $k$ in it, you are wrong and the examiner will show zero mercy.
*   **Trap 2: Ignoring coordinate system modifiers.** In cylindrical, the radial derivative is NOT just $\\partial F_r / \\partial r$. It is $\\frac{1}{r} \\frac{\\partial}{\\partial r}(r F_r)$. If you don't multiply $F_r$ by $r$ first, you fail.
*   **Trap 3: Applying Divergence Theorem to open surfaces.** You can only use it on fully enclosed volumes (like a sphere, box, or capped cylinder). It doesn't work on just the top lid of a box.

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the divergence of F(x,y,z) = 3x i + 2y j + z k."></div>
<div class="user-quiz" data-question="2. Does positive divergence indicate a source or a sink?"></div>
<div class="user-quiz" data-question="3. Write the term for the radial component derivative in spherical coordinates for divergence."></div>
<div class="user-quiz" data-question="4. State the Divergence Theorem equation relating flux to volume integration."></div>
<div class="user-quiz" data-question="5. According to Gauss's Law, what does the divergence of electric field E equal?"></div>
`
};
module.exports = v2;
