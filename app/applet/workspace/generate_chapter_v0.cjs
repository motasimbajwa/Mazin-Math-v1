export const chapterV0 = {
  id: "chapter-0",
  title: "Chapter V0: The Complete Vector & Space Foundation (Thomas Chapter 12)",
  progress: 0,
  subheadings: [
    {
      "id": "v0-intro",
      "title": "Introduction & Core Concepts"
    },
    {
      "id": "v0-part-a",
      "title": "Part A: The \"Stage\" and \"Actors\" (Space & Vectors)"
    },
    {
      "id": "v0-part-b",
      "title": "Part B: The \"Agreement\" Multiplier (Dot Product)"
    },
    {
      "id": "v0-part-c",
      "title": "Part C: The \"Twist\" Multiplier (Cross Product)"
    },
    {
      "id": "v0-part-d",
      "title": "Part D: The Gradient Precursor (Lines & Planes)"
    },
    {
      "id": "v0-glossary",
      "title": "Glossary of Key Terms"
    },
    {
      "id": "v0-why-ee",
      "title": "Why This Matters in Electrical Engineering"
    },
    {
      "id": "v0-examples",
      "title": "10 Exam-Level Worked Exercises with Inner Voice"
    },
    {
      "id": "v0-cheatsheet",
      "title": "Ultimate Exam Room Cheat Sheet"
    },
    {
      "id": "v0-test",
      "title": "Chapter Assessment"
    }
  ],
  markdown: \`
## Introduction & Core Concepts

"What one fool can do, another can." This is our absolute core philosophy. We must erase the fear of dense notation. We will never introduce a mathematical formula without first explaining the physical, real-world action it represents. Mathematics is not just a collection of abstract symbols; it is a language used to describe the mechanics of reality. 

In this chapter, we will translate abstract geometry to reality. We treat 3D space not as an invisible abstract grid, but as a physical, tangible space. Throughout this foundational chapter, we will use practical engineering analogies: we will visualize the casing of a Ziewnic 5G PV-8500 inverter, the heavy magnetic fields flowing around neodymium magnets in an EV motor, and the physical floor plan of an industrial thermoforming section. 

Every single concept covered in Chapter 12 of Thomas' Calculus is taught here as a specific precursor to advanced vector calculus. We are secretly teaching you the physical mechanics of Gradient, Divergence, and Curl before you even realize it. Let us build the foundation carefully, step-by-step.

---

## Part A: The "Stage" and "Actors" (Space & Vectors)

**The Concept:**
Before anything can flow, compress, or twist, we must build the 3D room. We need a stage where the physical actions take place. Here, we must distinguish between two fundamental types of quantities: scalars and vectors. A **scalar** is simply just an amount. For example, 150°C in a thermoforming machine is a scalar. It tells you "how much" heat there is, but not where it is going. A **vector**, on the other hand, is an amount with a physical destination. It tells you how much and in what direction. Imagine heat flowing up and to the left out of a vent. That is a vector. 

Vectors are not just lists of numbers like <x, y, z>. They are physical instructions! When you see a vector <3, 4, 0>, you must read it as an instruction: "Run the heavy-gauge copper wire 3m East, and 4m North." 

**The Visual Delivery:**
To map this properly, I want you to perform a physical action right now. Look at the corner of the room you are sitting in. Imagine the floor lines as the X and Y axes, and the vertical wall line as the Z axis. You must use the **Right-Hand Rule** to map these 3D axes correctly. Point your right fingers along the positive X-axis, curl them towards the positive Y-axis, and your right thumb will point straight UP along the positive Z-axis. 

If you don't map this correctly right now, your EV motor magnetic field calculations next semester will spin completely backward, giving you physically impossible results! Furthermore, visualize holding a physical arrow in your hand. If you walk across the room holding the arrow, its length and its pointing direction do not change. Moving a vector across space does not change its internal instructions. A vector is defined purely by its magnitude and its direction, not its starting location.

---

## Part B: The "Agreement" Multiplier (Dot Product)

**The Concept:**
We are going to completely strip away the terrifying formula $u \\cdot v = |u||v|\\cos(\\theta)$ for a moment. Instead, I want you to learn the Dot Product simply as **"Agreement."** The dot product answers one vital physical question: *How much do these two vectors work together?* 

**The Analogy:**
Imagine you are pushing a heavily loaded cart across a factory floor. 
- If you push perfectly straight in the direction the cart is rolling (an angle of 0°), your push is in 100% agreement with the motion. This yields the maximum possible dot product. Every ounce of your effort helps.
- If you push straight down from above the cart (an angle of 90° to the horizontal), your push does absolutely nothing to move the cart forward. There is 0 agreement. The dot product is exactly 0. 

**The Kick-Start:**
Master this concept right now, because measuring magnetic field 'flow' through a solar panel is just the Dot Product of the field vector and the panel's surface normal. This idea of measuring "how much of this field agrees with this surface" is the absolute heart of Divergence.

---

## Part C: The "Twist" Multiplier (Cross Product)

**The Concept:**
If the Dot Product is "Agreement," the Cross Product is **"Perpendicular Generation."** It asks: *How much do these two vectors fight each other to create a twist in an entirely new, perpendicular direction?* The cross product of two vectors produces a new vector that is perpendicular to both original vectors. 

**The Analogy:**
Visualize using a steel wrench on a stiff bolt. You have Vector **r** (the handle of the wrench, pointing away from the bolt) and Vector **F** (the force you apply with your hand). 
- If you pull parallel to the wrench, nothing turns. The cross product is zero.
- If you push purely perpendicular to the wrench, you generate massive turning force. 

When you cross Vector **r** with Vector **F** (written as $r \\times F$), you are calculating the torque driving the bolt downward into the engine block. The resulting vector points along the axis of the bolt, entirely perpendicular to your wrench and your pushing hand!

**The Kick-Start:**
EV motors use exactly this. Electricity flowing in one direction (a current vector) and magnetic fields pointing in another (a magnetic vector) interact to push the motor's rotor in a perpendicular direction. That is the Cross Product in action. It is the inescapable foundation of "Curl" in electromagnetics.

---

## Part D: The Gradient Precursor (Lines & Planes)

**The Concept:**
What makes a perfectly flat plane in 3D space? A plane is infinitely wide and long, meaning it is impossible to describe by tracing all of its edges. Instead, a plane is entirely defined by one single arrow: the **normal vector** sticking straight out of it. If you know which way "straight up" is, you define the entire flat floor below it.

**The Analogy:**
Imagine a flat piece of sheet metal resting in a manufacturing plant. This massive sheet is completely mathematically defined by the exact direction of a single iron nail driven perfectly straight through its center. If you tilt the nail, the entire piece of sheet metal must tilt to remain perfectly perpendicular. The tilt of the plane is dictated solely by this normal vector.

**The Kick-Start:**
The Gradient ($\\nabla f$) that you will study later is simply the mathematical tool for finding the "Normal Vector" to any curved 3D surface. Think of the Gradient as the compass needle pointing straight outward from the side of a mountain. Once you understand the normal vector of a flat plane today, calculating the normal vector of a curved slope tomorrow will be trivial.

---

## Glossary of Key Terms

- **Scalar:** A physical quantity that only has a magnitude (e.g., Temperature: 150°C).
- **Vector:** A physical instruction containing both a magnitude and a direction (e.g., Velocity: 60 km/h due North).
- **Right-Hand Rule:** The physical method used to determine the orientation of axes or the direction of a cross product.
- **Dot Product ($u \\cdot v$):** The "Agreement Multiplier." A scalar value representing how much two vectors point in the same direction.
- **Cross Product ($u \\times v$):** The "Twist Multiplier." A vector operation that generates a new vector perfectly perpendicular to the initial two vectors.
- **Normal Vector:** An arrow that points perfectly straight out of (perpendicular to) a plane or surface.

---

## Why This Matters in Electrical Engineering
As an Electrical Engineering student preparing for electromagnetics, you are about to encounter Maxwell's equations. Magnetic fields ($B$) and Electric fields ($E$) are not numbers; they are massive invisible oceans of 3D arrows. 
- You need the **Dot Product** to calculate electric flux (how much electric field punches through a solar panel). 
- You need the **Cross Product** to calculate the Lorentz force (the twisting force that drives electric motors). 
- You need the **Normal Vector** to define the boundaries of waveguides and inverter casings. 
If you simply memorize formulas, electromagnetics will break you. But if you visualize the physical wrench, the push, and the twist, you will dominate the subject.

---

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: The Basic Instruction (Vector Addition)**

**Question:** An industrial robot arm moves a component along vector $u = \\langle 2, 4, -1 \\rangle$, then pushes it along vector $v = \\langle -1, 3, 2 \\rangle$. Find the net displacement.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A vector is an instruction. First instruction says: go 2 units X, 4 units Y, down 1 unit Z. The second says: go back 1 unit X, 3 units Y, up 2 units Z. To get the net instruction, I just combine the X's, Y's, and Z's separately.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$u + v = \\langle 2+(-1), 4+3, (-1)+2 \\rangle$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Calculate the simple arithmetic. 2 - 1 = 1. 4 + 3 = 7. -1 + 2 = 1. This is the single, combined instruction.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= \\langle 1, 7, 1 \\rangle$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Perfect Agreement (Dot Product)**

**Question:** A technician pushes a cart with force $F = \\langle 3, 4, 0 \\rangle$ along a path $D = \\langle 6, 8, 0 \\rangle$. Calculate the work done (the dot product $F \\cdot D$).

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Work is how much the force 'agrees' with the path. Let's calculate the agreement multiplier. I just multiply matching components and add them.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$W = F \\cdot D = (3)(6) + (4)(8) + (0)(0)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">18 plus 32 is 50. Total agreement is 50 Joules of work.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= 18 + 32 + 0 = 50$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Checking Orthogonality**

**Question:** Does the magnetic field vector $B = \\langle 2, -1, 4 \\rangle$ pierce perpendicularly through a solar panel oriented along $v = \\langle 1, 6, 1 \\rangle$? Check if they are orthogonal.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Orthogonal means perfectly perpendicular. If they are perfectly perpendicular, they do not 'agree' at all. The agreement multiplier (dot product) must be exactly zero. Let's check it.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$B \\cdot v = (2)(1) + (-1)(6) + (4)(1)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">2 - 6 + 4... equals 0! They share zero agreement. Thus, they are perfectly 90 degrees apart.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= 2 - 6 + 4 = 0$. Yes, they are orthogonal.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Generating the Twist (Cross Product)**

**Question:** Calculate torque $\\tau = r \\times F$ if the wrench handle vector is $r = \\langle 1, 2, 0 \\rangle$ and applied force is $F = \\langle 0, 3, 0 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">I need the twist multiplier. This creates a new vector pushing perpendicular to the wrench. I need to set up the classic determinant matrix with i, j, k at the top.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\tau = \\begin{vmatrix} e_1 & e_2 & e_3 \\\\ 1 & 2 & 0 \\\\ 0 & 3 & 0 \\end{vmatrix}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Cover column 1: $(2)(0) - (0)(3) = 0$. Cover column 2: $- ((1)(0) - (0)(0)) = 0$. Cover column 3: $(1)(3) - (2)(0) = 3$. This means all the torque acts along the Z-axis, perfectly perpendicular to the XY wrench movement.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\tau = 0e_1 - 0e_2 + (3 - 0)e_3 = \\langle 0, 0, 3 \\rangle$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Finding the Normal Nail**

**Question:** Find a vector perfectly perpendicular to the plane formed by $u = \\langle 1, -1, 0 \\rangle$ and $v = \\langle 2, 0, 1 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">I need a vector perpendicular to two existing vectors on a plane. This is exactly what the "Twist Multiplier" (Cross Product) produces! I will compute $u \\times v$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$N = u \\times v = \\begin{vmatrix} e_1 & e_2 & e_3 \\\\ 1 & -1 & 0 \\\\ 2 & 0 & 1 \\end{vmatrix}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Compute the sub-determinants carefully. X: $(-1)(1)-(0) = -1$. Y: $-((1)(1)-(0)) = -1$. Z: $(1)(0)-(-1)(2) = 2$. This vector is our perpendicular "iron nail".</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= \\langle -1, -1, 2 \\rangle$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Trajectory as a Line**

**Question:** An electron gets shot out of a cathode ray tube from position $P(1, 4, -2)$ travelling rigidly along instruction vector $v = \\langle 2, -1, 3 \\rangle$. Write the line equation for its path.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A line equation just asks where I am right now, plus how far I travel along my instruction arrow. Let t be time. Starting point $+$ (time $\\times$ velocity arrow).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$L(t) = P_0 + t \\cdot v$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Just plug the point and vector straight into the format.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$L(t) = \\langle 1, 4, -2 \\rangle + t\\langle 2, -1, 3 \\rangle$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Or separately as parametric equations.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$x(t) = 1 + 2t, y(t) = 4 - t, z(t) = -2 + 3t$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: The Angle of Magnetic Collision**

**Question:** Calculate the angle between a magnetic field trace $B = \\langle 1, 1, 1 \\rangle$ and a sensor face $S = \\langle 1, 0, 0 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">To find angles between spatial arrows, always use the Agreement Multiplier (Dot Product). $\\cos(\\theta) = (B \\cdot S) / (|B||S|)$. First get lengths.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$|B| = \\sqrt{1^2+1^2+1^2} = \\sqrt{3}$<br>$|S| = \\sqrt{1^2} = 1$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Now their dot product. $(1)(1) + (1)(0) + (1)(0) = 1$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$B \\cdot S = 1$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Now construct the arccosine to reveal the physical angle.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\cos(\\theta) = \\frac{1}{\\sqrt{3}(1)} \implies \\theta = \\arccos(\\frac{1}{\\sqrt{3}})$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Building a Perfect Plane**

**Question:** Construct the equation of a sheet of steel (a plane) that passes through point $P(2, 3, 4)$ and has an iron nail (normal vector) pointing perfectly along $n = \\langle 1, -2, 5 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The plane equation just forces any random point $(x,y,z)$ on the plane to form a flat line with the start point P, such that it has ZERO agreement with the normal nail. So, $n \\cdot \\langle x-p_x, y-p_y, z-p_z \\rangle = 0$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$<br>$\\text{Where } \\langle A,B,C \\rangle = n$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Just substitute everything in directly. It's that simple.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$1(x-2) - 2(y-3) + 5(z-4) = 0$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Expand and tidy up the terms to make it neat.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$x - 2y + 5z = 2 - 6 + 20 \implies x - 2y + 5z = 16$</td>
    </tr>
  </tbody>
</table>
</div>


<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Are the Electric Walls Parallel?**

**Question:** Determine if Plane 1: $2x - 4y + 6z = 10$ and Plane 2: $-x + 2y - 3z = 8$ are parallel.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The coefficients of x, y, and z in a plane equation ARE exactly the "iron nail" normal vector. If the nails point in identical (or exactly opposite scaled) directions, the metal sheets themselves MUST be parallel.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$n_1 = \\langle 2, -4, 6 \\rangle$<br>$n_2 = \\langle -1, 2, -3 \\rangle$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Is $n_1$ just a scaled up version of $n_2$? Yes, if I multiply $n_2$ by $-2$, I get exactly $n_1$. They are perfectly aligned (just flipped). Therefore, the planes they secure must be perfectly parallel walls!</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$n_1 = -2 \\cdot n_2$. The normal vectors are parallel, therefore the planes are parallel.</td>
    </tr>
  </tbody>
</table>
</div>


<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Projection (The Shadow Maker)**

**Question:** Find the projection (the vertical shadow) of vector $u = \\langle 1, 1, 2 \\rangle$ falling down directly onto vector $v = \\langle -2, 3, 1 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Projection is asking "How much of u agrees with v", and then taking that amount to stretch a pure unit vector in the direction of v. The formula relies entirely on the Agreement Multiplier (Dot Product).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{proj}_v u = \\left( \\frac{u \\cdot v}{v \\cdot v} \\right) v$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">I need the dot products. $u \\cdot v = -2 + 3 + 2 = 3$. And $v \\cdot v = (-2)^2 + 3^2 + 1^2 = 4 + 9 + 1 = 14$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$u \\cdot v = 3$ <br> $v \\cdot v = 14$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">So the length multiplier is 3/14. I just scale vector v by this amount to get the shadow vector.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{proj}_v u = \\frac{3}{14} \\langle -2, 3, 1 \\rangle = \\langle -\\frac{6}{14}, \\frac{9}{14}, \\frac{3}{14} \\rangle$</td>
    </tr>
  </tbody>
</table>
</div>

---

## Ultimate Exam Room Cheat Sheet

<div class="overflow-x-auto rounded-xl border border-slate-200">
  <table class="w-full text-left border-collapse bg-white">
    <thead>
      <tr class="bg-indigo-50 border-b border-indigo-100">
        <th class="p-4 font-bold text-indigo-900">Concept</th>
        <th class="p-4 font-bold text-indigo-900 border-l border-indigo-100">Formula</th>
        <th class="p-4 font-bold text-indigo-900 border-l border-indigo-100">Check/Test Purpose</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Vector Length / Magnitude</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$|v| = \\sqrt{x^2+y^2+z^2}$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">Finding the direct spatial distance.</td>
      </tr>
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Dot Product (Agreement)</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$u \\cdot v = u_1 v_1 + u_2 v_2 + u_3 v_3$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">If exactly 0, the vectors are **orthognal (perpendicular)**.</td>
      </tr>
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Cross Product (Twist)</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$u \\times v = \\text{det}(e_i, u, v)$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">If exactly $\\langle 0,0,0 \\rangle$, the vectors are **parallel**.</td>
      </tr>
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Line Equation</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$r(t) = P_{start} + t \\cdot v_{dir}$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">Path parameterization of moving objects.</td>
      </tr>
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Plane Equation</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$n_x(x-x_0) + n_y(y-y_0) + n_z(z-z_0) = 0$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">Requires a point $(x_0,y_0,z_0)$ and a Normal vector $n$.</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Chapter Assessment

<div class="user-quiz" data-question="1. A cart is pushed purely vertically downwards while rolling forward. Based on the physical concept of the Dot Product, what is the 'agreement multiplier' and numeric work done?"></div>
<div class="user-quiz" data-question="2. Why must you point your right thumb towards the positive Z-axis when constructing a grid? What physical property does the Cross Product represent?"></div>
<div class="user-quiz" data-question="3. State the core requirement for calculating the equation of a flat 3D plane. What specific vector do you need?"></div>
<div class="user-quiz" data-question="4. If the Dot product evaluates to exactly zero, what physical relationship exists between the two vectors?"></div>
<div class="user-quiz" data-question="5. Explain the wrench analogy to justify why pulling exactly parallel to the wrench handle results in a Cross Product of precisely zero."></div>
  \`
};
