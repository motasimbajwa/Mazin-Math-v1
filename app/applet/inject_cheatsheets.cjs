const fs = require('fs');
let dataPath = 'src/data.ts';
let content = fs.readFileSync(dataPath, 'utf-8');

const injections = {
  "14.1": `
---
## THE MASTER TUTOR'S CHEAT SHEET: FUNCTIONS OF SEVERAL VARIABLES

### 1. Sketching the Domain: Defining the 2D Floor Plan
When defining domains, watch out for these **Algebraic Traps**:
1. **Square Roots:** Inside must be $\\ge 0$. (No imaginary space).
2. **Denominators:** Bottom $\\neq 0$. (The divide-by-zero black hole).

**The Visual Boundary Rules:**
*   **Solid Lines [Inclusive]:** Represents $\\ge$, $\\le$, or $=$. (You can stand exactly on this border.)
*   **Dashed Lines [Exclusive]:** Represents $>$, $<$, or $\\neq$. (An invisible electric fence; get close, but do not touch!)

**Example:** Domain of $f(x,y) = \\sqrt{y - x^2}$
*Constraint:* $y - x^2 \\ge 0 \\Rightarrow y \\ge x^2$. 
*Mental Sketch:* A solid upward-facing parabola $y=x^2$. The domain is everything strictly **inside/above** the parabola.

### 2. Level Curves: Topographic Maps for Math
**Core Concept:** A Level Curve is what you get when you set your 3D height to a constant number: $f(x,y) = c$.
Think of slicing a saddle surface ($x^2 - y^2 = c$):
*   **$c = 0$ (Sea Level):** $x^2 - y^2 = 0 \\Rightarrow y^2 = x^2 \\Rightarrow y = x$ and $y = -x$. (Two crossing lines).
*   **$c = 1$ (Walking Uphill):** $x^2 - y^2 = 1$. (Hyperbolas opening left/right).
*   **$c = -1$ (Walking Downhill into the Valley):** $x^2 - y^2 = -1 \\Rightarrow y^2 - x^2 = 1$. (Hyperbolas opening up/down).

*Tutor Note:* Always trace level curves to understand the 3D geometry without ever needing to mentally render 3D!
`,
  "14.2": `
---
## THE MASTER TUTOR'S CHEAT SHEET: LIMIT PATHS & SURFACES

### Limit Paths: Approaching the Origin (The Trail Analogy)
**The Golden Rule:** In 3D calculus, a limit must yield the exact same answer from an infinite number of approach directions to exist. 

**The Trail Analogy:** If walking up the north trail (y-axis) leads you to an elevation of 5ft, but walking up the east trail (x-axis) leads you to a cliff face at 10ft, the surfaces do not connect. **The limit does not exist.**

**Surgical Path Testing (Approaching $(0,0)$):**
If plugging in numbers yields $0/0$, systematically test paths:
*   **Path 1:** Walking flat along the X-Axis ($y=0$).
*   **Path 2:** Walking flat along the Y-Axis ($x=0$).
*   **Path 3:** Walking diagonally along any straight line ($y=mx$).
*   **Path 4:** Curving into the origin along a parabola ($y=x^2$).

If *any* two paths give different limits, you are done. The limit DNE.

*Tutor Note:* Stop trying to do complex algebra immediately! Test $y=0$, then test $x=0$. If they yield different numbers, grab your points and move to the next question.
`,
  "14.3": `
---
## THE MASTER TUTOR'S CHEAT SHEET: PARTIAL DERIVATIVES

### Glossary of Terms (The "What's What")
Master the terminology using the **Pizza Analogy** to understand the hierarchy of variables:
*   **Dependent Variable ($w, z$):** The final output you care about. *(The finished pizza).*
*   **Intermediate Variable ($x, y$):** A middleman – depends on independents and influences the dependent variable. *(Ingredients: dough, cheese).*
*   **Independent Variable ($t, u, v$):** The foundational knobs you turn at the end of the line. *(The control dial: hunger level, oven temp).*
*   **Partial Derivative ($\\partial$):** Rate of change while holding all other variables constant. *(Changing only the cheese amount, keeping dough fixed).*
*   **Total Derivative ($d/dt$):** The complete rate of change through all possible paths. *(Overall change in pizza quality when turning the hunger dial).*
*   **Implicit Function:** Variables tangled in one equation that cannot easily solve for $z$. *(A knot of strings - pull one, all move).*

### Clairaut's Theorem (Mixed Partials)
Mixed partials are equal if continuous: $f_{xy} = f_{yx}$.
*ELI5:* The order of operations doesn't matter. (Order of stirring then heating = heating then stirring).

*Tutor Note:* Partial derivatives are just selective blindness. Pretend the other variables are just numbers. Multiply down, add across. That's the entire secret.
`,
  "14.4": `
---
## THE MASTER TUTOR'S DASHBOARD: CHAIN RULE DIAGNOSTICS

### The 6-Word Rule
The multivariable chain rule is a navigation system. You must follow every path.
**MULTIPLY down a branch. ADD parallel branches.**

### Diagnostic Key: Recognizing the Tell-Tale Signs
Before writing a single equation, Read the problem prompt. Identify the trigger. Deploy the correct tactical blueprint:
*   **Find $dw/dt$:** *Mathematical Meaning:* Bottom of tree has only ONE independent variable ($t$). *Tactical Action:* **Total Derivative.** Draw tree ending at one point. Sum ALL paths.
*   **Find $\\partial w/\\partial u$:** *Mathematical Meaning:* Bottom of tree splits into MULTIPLE independent variables ($u, v$). *Tactical Action:* **Partial Derivative.** Draw a tree with multiple bottom targets. Trace ONLY paths ending at $u$. Ignore $v$.
*   **Evaluate at $t = \\pi/4$ or $(1,1)$:** *Mathematical Meaning:* Question wants a numeric scalar. *Tactical Action:* **Shortcut Alert.** Plug numeric values into intermediate formulas BEFORE differentiating heavily.
*   **Variables locked ($x^2y + yz^2 = 3$):** *Mathematical Meaning:* **Implicit Function.** *Tactical Action:* **Skip the tree.** Move all terms to one side $\\rightarrow F(x,y,z) = 0$. Deploy negative ratio formula: $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$.
*   **Find $\\partial^2 z / \\partial u^2$:** *Mathematical Meaning:* **Second-Order.** *Tactical Action:* Differentiate once. Then apply chain rule AGAIN to $f_x$ and $f_y$.

### Exam Point-Loss Traps (The Point-Loss Matrix)
The math isn't what costs you points—it's skipping the blueprint rules.
*   **[Hazard 1] Forgetting a branch in the tree.** *Fix:* Visual Audit. Count the physical arrows from the middle row to the bottom row BEFORE you write your formula.
*   **[Hazard 2] Confusing 'd' and '$\\partial$'.** *Fix:* The Bottom-Node Rule. Use 'd' when the bottom row has only ONE independent variable. Use '$\\partial$' when there are MULTIPLE.
*   **[Hazard 3] Omitting the negative sign in Implicit.** *Fix:* Non-Negotiable Start. Always write $-F_x / F_z$ first. The negative is built into the formula!
*   **[Hazard 4] Canceling variables without checking zero.** *Fix:* Factor, Never Cancel. Treat $x=0$ as a separate, parallel case. You lose valid mathematical solutions if you divide by $x$.
*   **[Hazard 5] Plugging numbers too late.** *Fix:* Evaluate Early. If a point is given, evaluate $x$, $y$, $z$ at that point BEFORE taking the final massive derivative combinations.

### Final Tactical Axioms
The chain rule is not magic - it is just path tracking.
1. **Draw the tree first** - it forces you to see all dependencies.
2. **Multiply down, add across** - that's the entire chain rule in six words.
3. **Numbers early, symbols late** - if a point is given, use it immediately to kill algebra.
4. **Implicit = negative ratio** - never forget the minus.
5. **Second order = apply chain rule twice** - the first derivative creates new functions that also depend on the intermediates!
`,
  "14.5": `
---
## THE MASTER TUTOR'S CHEAT SHEET: GRADIENT VECTORS

### Gradient Vectors: The Uphill Compass
**The Definition:** The Gradient ($\\nabla f$) is a 2D vector made entirely of partial derivatives: $\\nabla f = \\langle f_x, f_y \\rangle$.

**The Geometric Rules (The "Why"):**
1.  **Points Uphill:** It points in the exact direction of steepest ascent. (It is the exact opposite of a ball rolling downhill).
2.  **Orthogonal Intersection:** It always crosses Level Curves at exactly $90^\\circ$.

**Execution Example:** $f(x,y) = x^2 + y^2$
*   *Step 1:* Find the partials to build the gradient vector. $\\nabla f = \\langle 2x, 2y \\rangle$.
*   *Step 2:* Evaluate the vector at a specific coordinate, like $(1,1)$. $\\nabla f = \\langle 2(1), 2(1) \\rangle = \\langle 2, 2 \\rangle$.
*   *Conclusion:* If you are standing at coordinates $(1,1)$ on this bowl, taking a step in the direction of vector $\\langle 2, 2 \\rangle$ will make you climb the 3D bowl as fast as humanly possible!

*Tutor Note:* The directional derivative is perfectly maximized when you walk exactly in the direction of the gradient vector. The directional derivative is just the dot product of the gradient and your direction vector!
`,
  "14.6": `
---
## THE MASTER TUTOR'S CHEAT SHEET: TANGENT PLANES

### The Core Concept
A tangent plane is the 3D equivalent of a tangent line. It is the flat plane that perfectly "kisses" the curved surface at a single point, providing the best linear approximation of the surface nearby.

### Tactical Blueprint: Finding the Tangent Plane
*   **Determine Surface Type:**
    *   *Type A (Explicit):* $z = f(x,y)$. The surface is defined as a height function.
    *   *Type B (Implicit):* $F(x,y,z) = c$. The surface is a level surface of a 4D function.
*   **The Normal Vector ($\\vec{n}$):** The normal vector is the hero. It points perfectly straight out of the surface.
    *   For Type A: $\\vec{n} = \\langle f_x, f_y, -1 \\rangle$.
    *   For Type B: $\\vec{n} = \\nabla F = \\langle F_x, F_y, F_z \\rangle$.
*   **The Equation Formula:** Once you have the normal vector $\\vec{n} = \\langle A, B, C \\rangle$ and your point $(x_0, y_0, z_0)$, assemble the plane:
    $$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$

*Tutor Note:* Don't memorize two different plane formulas. Always remember that the Gradient Vector ($\\nabla F$) of an implicit surface is AUTOMATICALLY the normal vector to the tangent plane! This is the most powerful shortcut in geometry.
`,
  "14.7": `
---
## THE MASTER TUTOR'S CHEAT SHEET: EXTREME VALUES & SADDLES

### The Topographic Peak & Valley Hunter
Finding max/mins on a 3D surface is just finding the flat spots where the tangent plane is perfectly horizontal.

### Execute The 3-Step Blueprint
1.  **Find Critical Points (The "Flat Spots"):** Set BOTH partial derivatives to zero simultaneously.
    $$f_x(x,y) = 0 \\quad \\text{AND} \\quad f_y(x,y) = 0$$
    Solve this system of equations to find coordinates like $(a,b)$.
2.  **The Second Derivative Test (The "Discriminant" $D$):**
    Calculate the second partials: $f_{xx}$, $f_{yy}$, and the mixed $f_{xy}$.
    Calculate the Discriminant at $(a,b)$:
    $$D = f_{xx}f_{yy} - (f_{xy})^2$$
3.  **Diagnose the Point:**
    *   **$D > 0$ and $f_{xx} > 0$:** Local Minimum (A valley).
    *   **$D > 0$ and $f_{xx} < 0$:** Local Maximum (A peak).
    *   **$D < 0$:** Saddle Point (A mountain pass).
    *   **$D = 0$:** Inconclusive (The mathematical shrug).

*Tutor Note (Point-Loss Trap):* Always check the boundary curves if you are asked for absolute maximums! The peak of the mountain might be outside the fence, so the absolute maximum within the fence is located directly on the boundary wire.
`,
  "14.8": `
---
## THE MASTER TUTOR'S CHEAT SHEET: LAGRANGE MULTIPLIERS

### The Alignment Principle
**The Concept:** You want to find the highest point on a mountain $f(x,y)$, but you are forced to strictly walk along a designated trail $g(x,y) = c$. The maximum/minimum heights occur exactly where the contour lines of the mountain are perfectly parallel to the trail.
**Mathematically:** Parallel lines mean their gradient vectors point in the same direction!

### The Lagrange Execution Protocol
1.  **Identify the Objective Function:** The function you want to maximize/minimize. Call it $f(x,y,z)$.
2.  **Identify the Constraint Function:** The strict boundary you must follow. Set it to a constant: $g(x,y,z) = c$.
3.  **Set up the System of Equations (The Alignment):**
    $$\\nabla f = \\lambda \\nabla g$$
    $$g(x,y,z) = c$$
    This expands into:
    *   $f_x = \\lambda g_x$
    *   $f_y = \\lambda g_y$
    *   $f_z = \\lambda g_z$
    *   $g(x,y,z) = c$
4.  **Solve the Algebra:** This is the hardest part. *Pro Tip:* Try to solve the first few equations for $\\lambda$ and set them equal to each other, or factor aggressively! NEVER cancel variables without treating them as a zero-case.

*Tutor Note:* Lagrange Multipliers are just a fancy way of forcing your uphill compass ($\\nabla f$) to line up with the fence's compass ($\\nabla g$). The scaling factor $\\lambda$ just accounts for the fact that the vectors might be different lengths!
`
};

for (const [ch, payload] of Object.entries(injections)) {
  const chapterHead = \`title: "Chapter \${ch}\`;
  const idx = content.indexOf(chapterHead);
  if (idx !== -1) {
    const nextChapterIdx = content.indexOf('title: "Chapter 14.', idx + 20);
    const endBound = nextChapterIdx !== -1 ? nextChapterIdx : content.length;
    
    let chapterText = content.substring(idx, endBound);
    if (chapterText.includes("## Chapter Assessment")) {
      chapterText = chapterText.replace("## Chapter Assessment", payload + "\\n\\n## Chapter Assessment");
    } else {
      // Find the end of markdown backtick before the next chapter
      const lastBacktick = chapterText.lastIndexOf('\`');
      if (lastBacktick !== -1) {
         chapterText = chapterText.substring(0, lastBacktick) + "\\n" + payload + "\\n" + chapterText.substring(lastBacktick);
      }
    }
    content = content.substring(0, idx) + chapterText + content.substring(endBound);
  }
}

fs.writeFileSync(dataPath, content, 'utf-8');
console.log("Patched correctly");
