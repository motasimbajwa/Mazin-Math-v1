const v1 = {
  id: "chapter-v1",
  title: "Chapter V1: Vector Functions – The Language of Fields",
  progress: 0,
  subheadings: [
    { id: "v1-intro", title: "Introduction: Why Vector Functions Matter" },
    { id: "v1-eli5", title: "ELI5 Explanation: The Field of Arrows" },
    { id: "v1-glossary", title: "Glossary of Key Terms" },
    { id: "v1-why-ee", title: "Why This Matters in Electrical Engineering" },
    { id: "v1-formal", title: "Formal Definitions and Notation" },
    { id: "v1-method", title: "Step-by-Step Method for Visualizing Vector Fields" },
    { id: "v1-flowchart", title: "Algorithmic Problem Solving Flow" },
    { id: "v1-triggers", title: "Concept Recall: Trigger Words → Action" },
    { id: "v1-examples", title: "10 Exam-Level Worked Exercises with Inner Voice" },
    { id: "v1-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
    { id: "v1-traps", title: "Common Mistakes (The Examiner's Traps)" },
    { id: "v1-test", title: "Chapter Assessment" }
  ],
  markdown: `
## Introduction: Why Vector Functions Matter

In elementary calculus, we dealt extensively with scalar functions—functions like $T(x, y, z)$ that assign a single number (a scalar, like temperature) to every point in space. However, many physical phenomena cannot be described by a single number. Wind has both speed and direction. Gravity pulls with a certain strength and in a specific direction. Electromagnetic fields push charges along specific trajectories. 

To describe these phenomena, mathematics gives us the **vector function**. A vector function assigns a *vector* (a magnitude and a direction) to every point in space. By mastering vector functions, we gain the language necessary to describe the invisible fields that govern the universe, from fluid dynamics to electrostatics.

Our study of electricity and magnetism, which forms the basis of electrical engineering, is completely written in this language. Without vector functions, we have no Maxwell's equations.

## ELI5 Explanation: The Field of Arrows

Imagine walking into a room equipped with thousands of tiny weather vanes, each with a built-in anemometer (wind speed meter). When the wind blows, every weather vane points in the direction the wind is moving at that exact spot, and the anemometer spins to show how fast it's blowing.

If you freeze time and replace every weather vane with an arrow—where the arrow points where the wind is blowing, and its length shows how fast the wind is moving—you have just visualized a vector function. 

A vector function is simply **a field of arrows**. Every point in space gets its own arrow. In Electrical Engineering, the "electric field" is exactly this: an invisible field of arrows that tells any wandering electron which way it will be pushed, and how hard.

## Glossary of Key Terms

*   **Vector Function (Vector Field):** A rule $F(x, y, z)$ that assigns a specific vector to each point $(x, y, z)$ in a region of space.
*   **Scalar Function:** A rule $f(x, y, z)$ that assigns a single number to each point in space.
*   **Components:** The scalar parts multiply the unit vectors $i, j, k$. In $F = i F_x + j F_y + k F_z$, the $F_x, F_y$, and $F_z$ are the components, and each is a scalar function of position.
*   **Radial Field:** A vector field where all vectors point directly toward or away from a central origin point. Example: $F(x, y) = ix + jy$.
*   **Tangential Field:** A vector field where vectors circulate around a central origin, tangent to concentric circles. Example: $F(x, y) = -iy + jx$.
*   **Superposition:** The principle that the net vector field produced by multiple sources is simply the vector sum of the fields produced by each source individually.

## Why This Matters in Electrical Engineering

In EE, almost all fundamental forces and flows are vector fields:
1.  **Electric Field, $E(x, y, z)$:** Determines the force per unit charge experienced by a charged particle. It dictates how electrons move in a wire or a vacuum tube.
2.  **Magnetic Field, $B(x, y, z)$:** Determines the force on moving charges. It governs the operation of motors, generators, and transformers.
3.  **Current Density, $J(x, y, z)$:** A vector field representing the electric current per unit area flowing through a conductor.
4.  **Poynting Vector, $S = E \\times H$:** Represents the directional energy flux (the rate of energy transfer per unit area) of an electromagnetic field.

## Formal Definitions and Notation

A vector function $F$ in three dimensions is defined as:
$F(x, y, z) = i F_x(x, y, z) + j F_y(x, y, z) + k F_z(x, y, z)$

Here:
*   $i, j$, and $k$ are the constant unit vectors pointing in the $+x, +y$, and $+z$ directions respectively.
*   $F_x(x, y, z), F_y(x, y, z)$, and $F_z(x, y, z)$ are scalar functions of position. These are the Cartesian components of $F$.

For example, Coulomb's Law gives the force $F$ exerted by a charge $q$ on a test charge $q_0$ at a distance $r$:
$F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q q_0}{r^2} \\hat{u}$

Where $\\hat{u}$ is the unit vector pointing from $q$ to $q_0$. The Electric Field $E$ is defined as force per unit charge:
$E(r) = \\frac{F(r)}{q_0} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2} \\hat{u}$

Often, the position vector from the origin to $(x, y, z)$ is denoted by $r = ix + jy + kz$. Its magnitude is $|r| = \\sqrt{x^2 + y^2 + z^2}$. The unit vector pointing radially outward is $\\hat{r} = \\frac{r}{|r|}$.

## Step-by-Step Method for Visualizing Vector Fields

1.  **Identify the Components:** Write the field in standard $i, j, k$ format. $F = i F_x + j F_y + k F_z$.
2.  **Check for Symmetry or Patterns:**
    *   Does it only depend on $x$? Then the arrows form vertical identical columns.
    *   Does it look like $ix + jy$? That's the position vector $r$, so it's a radial field extending outward.
    *   Does it look like $-iy + jx$? That's a circulating tangential field.
3.  **Plot Along the Axes:** Evaluate $F$ at points on the $x$-axis ($(x, 0, 0)$), $y$-axis ($(0, y, 0)$), and $z$-axis to get a skeleton frame of the field.
4.  **Check Magnitude Variation:** Calculate $|F| = \\sqrt{F_x^2 + F_y^2 + F_z^2}$. If $|F|$ increases with distance from origin, arrows get longer as you go outward. If it decreases (like $1/r^2$), arrows get shorter.
5.  **Sketch Representative Arrows:** Draw a grid of points and sketch the vector tail starting at each point. 

<div class="plot-interactive" data-plot-id="vector_field_radial"></div>

## Algorithmic Problem Solving Flow

1.  **Are you evaluating a field at a point?**
    *   Substitute the $(x, y, z)$ coordinates into the component functions $F_x, F_y$, and $F_z$. Calculate the resulting vector.
2.  **Are you verifying if a field is radial or tangential?**
    *   Radial fields are parallel to $r = ix + jy + kz$. Take the cross product $F \\times r$. If it is 0, the field is purely radial.
    *   Tangential fields are perpendicular to $r$. Take the dot product $F \\cdot r$. If it is 0, the field is tangential.
3.  **Are you applying superposition?**
    *   Find the vector expression for each individual field.
    *   Add them component by component: $F_{total} = i(F_{1x} + F_{2x}) + j(F_{1y} + F_{2y}) + k(F_{1z} + F_{2z})$.

## Concept Recall: Trigger Words → Action

*   *"Evaluate the vector field..."* → Plug the given coordinate point $(x, y, z)$ into the scalar component functions $F_x, F_y, F_z$.
*   *"Is the field radial?"* → Check if $F$ is a scalar multiple of $r = ix + jy + kz$. Alternatively, check if $F \\times r = 0$.
*   *"Is the field circulating/tangential?"* → Check if the dot product of $F$ and the position vector $r$ is zero ($F \\cdot r = 0$).
*   *"Charge Q is located at... finding field..."* → Use $E = \\frac{Q}{4\\pi\\varepsilon_0} \\frac{\\mathbf{r}}{|r|^3}$, where $\\mathbf{r}$ is the distance vector from the charge to the evaluation point.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Identifying Vector Functions**

**Question:** Determine if $F(x, y) = ix + jy$ is a vector function. Sketch it.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A vector function associates a vector with every point. Here, $F_x=x$ and $F_y=y$. Yes, it's a vector function.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Yes, $F(x, y)$ is a vector function.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">At $(1,0)$ the vector is $i$. At $(0,1)$ it's $j$. At $(x,y)$, the vector points from origin to $(x,y)$ with length $\\sqrt{x^2+y^2}$. This is radiating outwards.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">[Sketch arrows radiating from origin, lengthening as they move further away.]</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Components of a Vector Function**

**Question:** Given $F(x, y, z) = i(z) + j(xy) + k(yz)$, find $F_x, F_y, F_z$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The components are just the scalar functions scaling the basis vectors $i, j$, and $k$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F_x = z$<br>$F_y = xy$<br>$F_z = yz$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Evaluating a Vector Function**

**Question:** Evaluate $F(1, 2, 3)$ for $F(x, y, z) = i(x^2) + j(yz) + k(z^2)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">I need to plug in $x=1, y=2, z=3$ into the component equations.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F(1, 2, 3) = i(1^2) + j(2 \\cdot 3) + k(3^2)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Simplify the multiplication.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= i + 6j + 9k$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Tangential Vector Field**

**Question:** Sketch $F(x, y) = \\frac{-iy + jx}{\\sqrt{x^2 + y^2}}$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Calculate magnitude: $\\frac{\\sqrt{(-y)^2 + x^2}}{\\sqrt{x^2+y^2}} = 1$. So all arrows have length 1.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$|F| = \\frac{\\sqrt{y^2 + x^2}}{\\sqrt{x^2 + y^2}} = 1$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Dot product with position vector $r = ix + jy$: $(-y)(x) + (x)(y) = 0$. They are perpendicular, so the field circles the origin.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F \\cdot r = \\frac{-yx + xy}{\\sqrt{x^2+y^2}} = 0$.<br>[Sketch uniform length arrows circulating counterclockwise around origin]</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Electric Field of a Point Charge**

**Question:** Write the vector function for the electric field of a charge $q$ located at the origin.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Coulomb's law gives field magnitude as proportional to $1/r^2$ and pointing radially via unit vector $\\hat{u}$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{|r|^2} \\hat{u}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Replace $\\hat{u}$ with $\\frac{r}{|r|}$, where $r = ix + jy + kz$ and $|r| = \\sqrt{x^2 + y^2 + z^2}$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E(r) = \\frac{q}{4\\pi\\varepsilon_0} \\frac{ix + jy + kz}{(x^2 + y^2 + z^2)^{3/2}}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Radial vs Tangential**

**Question:** Compare $F_1(x, y) = ix + jy$ and $F_2(x, y) = -iy + jx$. 

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Take the dot product of $F_1$ and $F_2$ to test their angular relationship.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F_1 \\cdot F_2 = (x)(-y) + (y)(x) = -xy + yx = 0$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The dot product being zero means they are orthogonal everywhere. $F_1$ points radially outward from origin, $F_2$ flows tangentially in circles.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F_1$ is purely radial (expansion).<br>$F_2$ is purely tangential (rotation).</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Zero Vector Field**

**Question:** When is $F(x, y, z) = 0$ at all points? Give an example involving components.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A vector is zero only if all orthogonal components are zero.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F = 0$ if and only if $F_x = 0, F_y = 0$, and $F_z = 0$ for all $(x,y,z)$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The zero field has magnitude 0 and no defined direction anywhere.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Example: $F(x,y,z) = i(v - v) + j(0) + k(\\sin(0)) = 0$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Constant Vector Field**

**Question:** Give an example of a constant vector field and sketch it.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A constant field has no spatial variables $(x,y,z)$ in its components.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F(x, y) = i + 2j$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">It's a uniform field. Every arrow is identical, pointing "up 2, right 1".</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">[Sketch uniform arrows pointing Northeast everywhere]</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Converting from Physics**

**Question:** The velocity of water in a river channel is given by $v = i(y) + j(0)$. Is this a vector function? Sketch it for $y$ from $0$ to $10$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The velocity $v_x = y$ depends on the spatial coordinate $y$ (distance from the bank). Because it pairs a vector (velocity) with space $(y)$, it is a vector field.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Yes, $v(x,y) = iy$ is a vector function.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">All arrows point right ($i$). As $y$ increases, magnitude increases. This is a shear flow.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">[Sketch horizontal arrows pointing right, getting longer as $y$ increases.]</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Superposition of Fields**

**Question:** Two charges produce respective electric fields $E_1 = 3i - 2j$ and $E_2 = xi + yj$. What is the total field $E_{total}$ at $(1, 4)$?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Superposition means vector addition of the fields.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E_{total} = E_1 + E_2$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Evaluate $E_2$ at $(1,4)$, then add to the constant field $E_1$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E_2(1,4) = 1i + 4j$<br>$E_{total} = (3i - 2j) + (1i + 4j) = 4i + 2j$</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Vector Functions</div>
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
      <td class="py-3 pr-4 text-slate-800">$F(x,y,z) = iF_x + jF_y + kF_z$</td>
      <td class="py-3 pr-4 text-slate-800">What are the scalar components?</td>
      <td class="py-3 pr-4 text-slate-800">Identify $F_x, F_y, F_z$ separately.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">"$F(x,y) = ix + jy$"</td>
      <td class="py-3 pr-4 text-slate-800">Is this pure expansion?</td>
      <td class="py-3 pr-4 text-slate-800">Yes, it is the radial position vector $r$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">"$F(x,y) = -iy + jx$"</td>
      <td class="py-3 pr-4 text-slate-800">Is this pure rotation?</td>
      <td class="py-3 pr-4 text-slate-800">Yes, dot product with $r$ is $0$, perfectly tangential.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">$|F| = \\sqrt{F_x^2 + F_y^2 + F_z^2}$</td>
      <td class="py-3 pr-4 text-slate-800">Is magnitude constant or variable?</td>
      <td class="py-3 pr-4 text-slate-800">Helps sketch arrow lengths over space.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Superposition</td>
      <td class="py-3 pr-4 text-slate-800">Multiple field sources?</td>
      <td class="py-3 pr-4 text-slate-800">Add fields component by component linearly.</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: Confusing vector functions with scalar functions.** A scalar function $T(x,y,z)=x^2+y^2$ gives one number. A vector function $F(x,y,z) = ix^2 + jy^2$ gives a vector with magnitude and direction. Don't add them.
*   **Trap 2: Forgetting that components are functions.** Don't assume $F_x$ is a constant just because it's attached to the fixed $i$ vector. $F_x$ evaluates to different numbers at different points in space.
*   **Trap 3: Cartesian vs Position Vector Mix-up.** Often, exam questions write $r = ix + jy + kz$ to test if you realize the field points radially.
*   **Trap 4: Incorrect magnitude scaling.** In sketching $1/r^2$ fields (like Coulomb or Gravity), students often draw arrows getting longer as they go outwards. WRONG. They should rapidly shrink.

## Chapter Assessment

<div class="user-quiz" data-question="1. Is F(x,y,z) = i(5) + j(y²) + k(x) a vector function?"></div>
<div class="user-quiz" data-question="2. Given F = 2x i + xz j, find the magnitude of F at (1, 2, 3)."></div>
<div class="user-quiz" data-question="3. State whether G(x,y) = ix + jy is radial, tangential, or neither."></div>
<div class="user-quiz" data-question="4. State whether H(x,y) = -iy + jx is radial, tangential, or neither."></div>
<div class="user-quiz" data-question="5. What principle allows you to find total electric field by adding vector components of individual fields?"></div>
`
};
module.exports = v1;
