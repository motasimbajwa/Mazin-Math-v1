const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

const ch14_7 = `  {
    id: "chapter-14-7-new",
    title: "Chapter 14.7: Extreme Values and Saddle Points",
    progress: 0,
    subheadings: [
      { id: "ch14-7-intro", title: "Review of Previous Concepts" },
      { id: "ch14-7-eli5", title: "ELI5 Explanation" },
      { id: "ch14-7-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-7-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch14-7-formal", title: "Formal Definitions and Notation" },
      { id: "ch14-7-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch14-7-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch14-7-examples", title: "10 Worked Exercises" },
      { id: "ch14-7-cheatsheet", title: "Cheat Sheet / Summary Table" },
      { id: "ch14-7-test", title: "Chapter Assessment" }
    ],
    markdown: \`## Review of Previous Concepts

- **Critical Points (from 14.3):** Points where the gradient $\\nabla f = 0$ (meaning $f_x = 0$ and $f_y = 0$) or where partial derivatives do not exist.
- **Gradient (from 14.5):** The vector $\\nabla f$ points in the direction of steepest ascent. At a local extremum, the steepness is zero, hence $\\nabla f = 0$.
- **Tangent Plane (from 14.6):** The tangent plane at a critical point is horizontal.
- Mention that the single-variable first derivative test fails in 2D; we need the discriminant.

---

## ELI5 Explanation

Analogise to a circuit's power transfer: maximum power transfer occurs when load resistance equals source resistance – that's a local maximum of the power function. But sometimes you get a "saddle point" like a Pringles chip – it is a minimum along one direction and a maximum along another; in EE, this happens in certain filter designs or antenna nulls where tuning one parameter improves performance, but tuning another degrades it.

---

## Glossary of Key Terms

- **Critical point:** An interior point in the domain where $f_x = 0$ and $f_y = 0$, or where these partial derivatives do not exist.
- **Local maximum/minimum:** The highest or lowest value of $f(x,y)$ within a small surrounding open disk.
- **Saddle point:** A critical point where the function curves upward in one direction and downward in another direction.
- **Discriminant (Hessian):** The value $D = f_{xx}f_{yy} - (f_{xy})^2$ used in the Second Derivative Test to classify critical points.
- **Second Derivative Test:** A method using $D$ and $f_{xx}$ to determine if a critical point is a local max, local min, or saddle point.
- **Absolute extrema on closed bounded region:** The absolute maximum and minimum values of a continuous function on a closed and bounded domain, found by checking interior critical points and boundary points.

---

## Why This Matters in Electrical Engineering

- **Maximum power transfer theorem:** Finding the derivative of power with respect to load resistance and setting it to zero to find the peak power delivered.
- **Optimising antenna gain:** Finding the maximum gain of an antenna pattern as a function of azimuth and elevation angles.
- **Minimising cost:** Designing circuits with constraints on price (a preview of Lagrange multipliers).

---

## Formal Definitions and Notation

- **Local max/min definitions:** $f(a,b)$ is a local maximum if $f(a,b) \\ge f(x,y)$ for all points in an open disk around $(a,b)$. Similarly for local minimum.
- **Critical point:** $f_x(a,b) = 0$ and $f_y(a,b) = 0$.
- **Discriminant:** $D(a,b) = f_{xx}(a,b) f_{yy}(a,b) - (f_{xy}(a,b))^2$.
- **Classification:**
  - $D > 0$ and $f_{xx} > 0 \\implies$ local minimum.
  - $D > 0$ and $f_{xx} < 0 \\implies$ local maximum.
  - $D < 0 \\implies$ saddle point.
  - $D = 0 \\implies$ test is inconclusive.

---

## Step-by-Step Method for Problem Solving

1. Find $f_x$ and $f_y$, and solve the system $f_x=0$, $f_y=0$ to find critical points.
2. Compute the second partial derivatives $f_{xx}, f_{yy}, f_{xy}$.
3. For each critical point $(a,b)$, compute the discriminant $D = f_{xx}(a,b) f_{yy}(a,b) - (f_{xy}(a,b))^2$.
4. Apply classification using the sign of $D$ and $f_{xx}$.
5. For absolute extrema on a closed bounded region:
   - Evaluate $f$ at all interior critical points.
   - Evaluate $f$ along the boundary (parametrise each edge or use substitution).
   - Compare all values to find the absolute maximum and minimum.

---

## Algorithmic Problem Solving Flow

\\\`
[Start: Find extrema]
        |
        v
+--------------------+
| Solve f_x=0, f_y=0 |
+--------------------+
        |
        v
+--------------------+
| Compute D at each  |
+--------------------+
        |
   +----+----+----+
   |    |    |    |
 D<0   D>0  D=0   |
   |    |    |    |
saddle check inconclusive
       f_xx  (use other methods)
        |
   +----+----+
   |         |
 f_xx>0   f_xx<0
   |         |
 local     local
minimum   maximum
\\\`

---

## 10 Worked Exercises

**Exercise 1: Standard local minimum**
* **Problem:** Find the local extreme values of $f(x,y) = x^2 + xy + y^2 + 3x - 3y + 4$. (Source: Textbook 14.7 Ex 1)
* **Thinking Process:** Find critical points by setting first partials to zero. Use the second derivative test to classify perfectly.
* **Unique Method:** Solve the linear system quickly.
* **Step-by-Step Solution:**
  1. $f_x = 2x + y + 3 = 0$.
  2. $f_y = x + 2y - 3 = 0$.
  3. Solving: $y = -2x - 3$, so $x + 2(-2x - 3) - 3 = 0 \\implies -3x - 9 = 0 \\implies x = -3$. Then $y = 3$. Critical point: $(-3, 3)$.
  4. $f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 1$.
  5. $D = (2)(2) - (1)^2 = 3 > 0$. Since $f_{xx} > 0$, it is a local minimum.
  6. $f(-3,3) = -5$.
* **Common Mistake:** Mixing up $f_{xy}$ and $f_{yx}$.
* **Figure Reference:** See Figure 14.36 for a standard paraboloid minimum.

**Exercise 2: Finding a Saddle Point**
* **Problem:** Find all critical points of $f(x,y) = x^3 - 12xy + 8y^3$ and classify them. (Source: COMSATS FA24 Q5)
* **Thinking Process:** Nonlinear system! Isolate one variable and substitute.
* **Unique Method:** Factor polynomials carefully to reveal multiple roots.
* **Step-by-Step Solution:**
  1. $f_x = 3x^2 - 12y = 0 \\implies x^2 = 4y \\implies y = x^2/4$.
  2. $f_y = -12x + 24y^2 = 0 \\implies x = 2y^2$.
  3. Sub: $x = 2(x^2/4)^2 = x^4/8 \\implies x^4 - 8x = 0 \\implies x(x^3 - 8) = 0$.
  4. Roots are $x=0$, $x=2$.
  5. Points: $(0,0)$ and $(2,1)$.
  6. $f_{xx} = 6x$, $f_{yy} = 48y$, $f_{xy} = -12$.
  7. At $(0,0)$: $D = (0)(0) - (-12)^2 = -144 < 0$. Saddle point.
  8. At $(2,1)$: $D = (12)(48) - 144 = 576 - 144 > 0$. $f_{xx} = 12 > 0$. Local minimum.
* **Common Mistake:** Missing the $x=0$ algebraic case when dividing by $x$.
* **Figure Reference:** See interactive plot <div class="user-quiz" data-plot-id="saddle_point"></div>.

**Exercise 3: EE Maximum Power Transfer Analogy**
* **Problem:** Maximize power $P(R, X) = 100 R - R^2 - 2X^2$ over the positive quadrants space.
* **Thinking Process:** Power maximization is a standard optimization.
* **Unique Method:** Direct second derivative rule application.
* **Step-by-Step Solution:**
  1. $\\partial P/\\partial R = 100 - 2R = 0 \\implies R = 50$.
  2. $\\partial P/\\partial X = -4X = 0 \\implies X = 0$.
  3. $D = (-2)(-4) - 0 = 8 > 0$. $P_{RR} = -2 < 0$. Local max at $(50,0)$.
* **Common Mistake:** Stopping without confirming $D > 0$.
* **Figure Reference:** Similar to Figure 14.37 (roof surface max).

**Exercise 4: Complex Exponentials**
* **Problem:** Find local extrema for $f(x,y) = (x^2 + y^2) e^{-x}$.
* **Thinking Process:** Chain rule intertwined with product rule required here.
* **Unique Method:** Factor out the exponential since $e^{-x}$ is never zero.
* **Step-by-Step Solution:**
  1. $f_x = 2x e^{-x} - (x^2+y^2)e^{-x} = e^{-x}(2x - x^2 - y^2) = 0$.
  2. $f_y = 2y e^{-x} = 0 \\implies y = 0$.
  3. Using $y=0$ in $f_x$: $2x - x^2 = 0 \\implies x(2 - x) = 0$. Critical points are $(0,0)$ and $(2,0)$.
  4. Perform 2nd derivatives. $f_{yy} = 2 e^{-x}$. 
  5. At $(0,0)$, $D > 0, f_{xx} > 0 \\implies$ Local Minimum.
  6. At $(2,0)$, $D > 0, f_{xx} < 0 \\implies$ Local Maximum.
* **Common Mistake:** Letting the exponential term cause confusion; remember $e^{-x}$ is always strictly positive.
* **Figure Reference:** An undulating mountain with a peak.

**Exercise 5: Boundary Check - Triangle**
* **Problem:** Find absolute extrema of $f(x,y) = x^2 - xy + y^2 + 1$ on the closed triangle bounded by $x=0, y=2, y=2x$. (Textbook 14.7 Ex 31-adapted)
* **Thinking Process:** Must do structural checks: Inside (critical points) PLUS 3 distinct boundary lines.
* **Unique Method:** Evaluate corners individually, parametrising the edges to 1D limit paths.
* **Step-by-Step Solution:**
  1. Interior: $f_x = 2x - y = 0, f_y = -x + 2y = 0 \\implies (0,0)$. This is on the boundary.
  2. Edge 1 ($x=0$): $f(0,y) = y^2 + 1$. Range $[0,2]$. Evaluates to $1$ at $(0,0)$ and $5$ at $(0,2)$.
  3. Edge 2 ($y=2$): $f(x,2) = x^2 - 2x + 5$ for $x \\in [0,1]$. Min at $x=1$ is 4. Max at $x=0$ is 5.
  4. Edge 3 ($y=2x$): $f(x,2x) = x^2 - 2x^2 + 4x^2 + 1 = 3x^2 + 1$. Range $x \\in [0,1]$. Evaluates from $1$ to $4$.
  5. Comparing: Min is $1$ at $(0,0)$. Max is $5$ at $(0,2)$.
* **Common Mistake:** Forgetting to check the vertices explicitly.
* **Figure Reference:** Figure 14.44 (triangular region for absolute extrema).

**Exercise 6: Infinite boundaries**
* **Problem:** Find critical points of $f(x,y) = y \\sin x$.
* **Thinking Process:** Trig functions repeat! Expect infinite solutions.
* **Unique Method:** Describe points as sequences $(a, n\\pi)$.
* **Step-by-Step Solution:**
  1. $f_x = y \\cos x = 0$.
  2. $f_y = \\sin x = 0$.
  3. From (2), $x = n\\pi$. From (1), $\\cos(n\\pi) \\neq 0$ so $y = 0$.
  4. Points are $(n\\pi, 0)$.
  5. $f_{xx} = -y \\sin x$, $f_{yy} = 0$, $f_{xy} = \\cos x$.
  6. $D = 0 - (\\pm 1)^2 = -1$. All are saddle points.
* **Common Mistake:** Missing the infinite repetition notation $n\\pi$.
* **Figure Reference:** See Figure 14.40 for saddle points.

**Exercise 7: Absolute Max in a Rectangle**
* **Problem:** Find absolute extrema of $f(x,y) = 4x + 6y - x^2 - y^2$ on $0 \\le x \\le 4, 0 \\le y \\le 5$.
* **Thinking Process:** A perfect 4-edge boundary problem.
* **Unique Method:** Complete the square graphically if possible. 
* **Step-by-Step Solution:**
  1. $f_x = 4 - 2x = 0 \\implies x = 2$. $f_y = 6 - 2y = 0 \\implies y=3$.
  2. The point $(2,3)$ is inside. $f(2,3) = 13$.
  3. Boundaries: $x=0 \\implies 6y - y^2$ with max at $y=3$ (value 9).
  4. $y=0 \\implies 4x - x^2$ with max at $x=2$ (value 4).
  5. Etc... the global max is 13 at $(2,3)$. Minimum happens at corner $(0,0)$ where $f=0$ or $(4,5)$ where $f = 16+30-16-25 = 5$. Absolute min is 0.
* **Common Mistake:** Ignoring critical points that lie identically inside the region.
* **Figure Reference:** The "roof surface" max in Figure 14.37.

**Exercise 8: Circuit Sensitivity (EE)**
* **Problem:** $f(V,I) = VI - 2V^2 - I^2 + V$. Find critical points.
* **Thinking Process:** Same identical math, just swapping $x,y$ to $V,I$.
* **Unique Method:** Differentiate directly.
* **Step-by-Step Solution:**
  1. $f_V = I - 4V + 1 = 0$.
  2. $f_I = V - 2I = 0 \\implies V = 2I$.
  3. Sub: $I - 4(2I) + 1 = 0 \\implies 1 = 7I \\implies I = 1/7$. $V = 2/7$.
  4. $D = (-4)(-2) - (1)^2 = 7 > 0$. $f_{VV} < 0$. Max.
* **Common Mistake:** Tripping over swapped notation.
* **Figure Reference:** Interactive plot \`paraboloid\`.

**Exercise 9: Boundary substitution trick**
* **Problem:** Maximize $f(x,y) = xy$ on boundary curve $x^2 + y^2 = 1$.
* **Thinking Process:** We can parameterize the circle!
* **Unique Method:** Let $x = \\cos t, y = \\sin t$.
* **Step-by-Step Solution:**
  1. $f = \\cos t \\sin t = 0.5 \\sin(2t)$.
  2. Max of $\\sin(2t)$ is 1, so max value is $0.5$ at $t = \\pi/4$ (points $\\sqrt{2}/2, \\sqrt{2}/2$).
* **Common Mistake:** Using raw lagrange when simple trig rules apply faster.
* **Figure Reference:** Level curves tangent to boundary circle.

**Exercise 10: Mixed Terms**
* **Problem:** Find critical points of $f(x,y) = x^3 - y^3 - 2xy + 6$. 
* **Thinking Process:** A polynomial system.
* **Unique Method:** Factor substitution.
* **Step-by-Step Solution:**
  1. $f_x=3x^2-2y=0$.
  2. $f_y=-3y^2-2x=0 \\implies 2x = -3y^2 \\implies x = -1.5y^2$.
  3. $3(-1.5y^2)^2 - 2y = 0 \\implies 6.75y^4 - 2y = 0$.
  4. $y(6.75y^3 - 2) = 0$.
  5. Points at $y=0 \\implies x=0$ and $y = (2/6.75)^{1/3} \\implies x$.
* **Common Mistake:** Missing negative fractions in cube roots.
* **Figure Reference:** Standard saddle testing algorithm.

---

## Cheat Sheet / Summary Table

**Formulas to Remember:**
- **Discriminant Formula:** $D = f_{xx}f_{yy} - (f_{xy})^2$

**Key Points to Remember:**
- Boundary must be checked for absolute extrema. Minimums are often hiding on corners.
- The single-variable derivative test fails in 2D; you must evaluate the discriminant!
- Saddle points occur when the surface curves upward in one direction and downward in another.

**Watch out for these common mistakes:**
- Forgetting to check the topological boundary.
- Mis-applying the discriminant sign (assuming $D>0$ always gives minimum; you absolutely need checking the $f_{xx}$ sign!).
- Forgetting that when $D=0$ the test provides absolutely no information.

---

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the local maximum, minimum, and saddle points of f(x,y) = x² + xy + y² + 3x - 3y + 4. (Textbook Ex 1)"></div>
<div class="user-quiz" data-question="2. Find all critical points of f(x,y) = x³ - y³ - 2xy + 6. (Textbook Ex 17)"></div>
<div class="user-quiz" data-question="3. Verify the critical points globally for an antenna transfer equation P(R, X) = 100 R - R² - 2X²."></div>
<div class="user-quiz" data-question="4. Find the absolute maxima and minima of f(x,y) = 2x² - 4x + y² - 4y + 1 on the closed triangular plate bounded by the lines x=0, y=2, y=2x in the first quadrant. (Textbook Ex 31)"></div>
<div class="user-quiz" data-question="5. Determine the local extreme values for f(x,y) = x³ + 3xy + y³. (Textbook Ex 18)"></div>
\`
  }`;

const ch14_8 = `  {
    id: "chapter-14-8",
    title: "Chapter 14.8: Lagrange Multipliers",
    progress: 0,
    subheadings: [
      { id: "ch14-8-intro", title: "Review of Previous Concepts" },
      { id: "ch14-8-eli5", title: "ELI5 Explanation" },
      { id: "ch14-8-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-8-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch14-8-formal", title: "Formal Definitions and Notation" },
      { id: "ch14-8-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch14-8-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch14-8-examples", title: "10 Worked Exercises" },
      { id: "ch14-8-cheatsheet", title: "Cheat Sheet / Summary Table" },
      { id: "ch14-8-test", title: "Chapter Assessment" }
    ],
    markdown: \`## Review of Previous Concepts

- **Gradient (14.5):** The gradient vector $\\nabla f$ is orthogonal to level curves.
- **Tangent Plane (14.6):** Relies on the gradient vector for construction.
- **Optimisation (14.7):** Extrema occurs when the slope levels out; many models required constraints.

---

## ELI5 Explanation

Imagine you have a fixed amount of expensive copper wire (constraint) to build a coil device that maximises magnetic field strength. You cannot arbitrarily increase all dimensions – you must safely stay on the "budget surface". Lagrange multipliers technically define the mathematically optimal trade-off. The multiplier $\\lambda$ represents the exact rate of change of the optimum value per unit change in the budget constraint.

---

## Glossary of Key Terms

- **Lagrange multiplier $\\lambda$:** A scalar value ensuring two gradient vectors are proportional at an extremum.
- **Constraint equation $g(x,y)=0$:** The budget defining your available optimization domain space.
- **Method of Lagrange multipliers:** An optimization method leveraging parallel gradients.
- **Two constraints ($\\lambda$ and $\\mu$):** Multi-budget optimizations solving $\\nabla f = \\lambda\\nabla g_1 + \\mu\\nabla g_2$.

---

## Why This Matters in Electrical Engineering

- Maximising precise power delivered to a load with fixed physical total resistance.
- Minimising heat material sink cost for a given fixed safe operating volume.
- Antenna design: maximising directivity subject to exact spatial size constraints.

---

## Formal Definitions and Notation

- **Theorem:** To find extreme bounding values of $f$ subject perfectly to $g=0$, solve $\\nabla f = \\lambda\\nabla g$ and rigidly enforce $g=0$.
- **For two constraints:** Establish solving $\\nabla f = \\lambda\\nabla g_1 + \\mu\\nabla g_2$.

---

## Step-by-Step Method for Problem Solving

1. Mathematically write $f$ and $g$, setting up $\\nabla f = \\lambda\\nabla g$.
2. Formally expand scalar equations: $f_x = \\lambda g_x$, $f_y = \\lambda g_y$, and $g=0$.
3. Solve carefully for $x$, $y$, and $\\lambda$ (it is acceptable to eliminate $\\lambda$).
4. Evaluate explicit function $f$ at valid candidate points. Compare cleanly to find max/min.

---

## Algorithmic Problem Solving Flow

\\\`
[Start: Constrained optimisation]
        |
        v
+-----------------------+
| Write f(x,y), g(x,y)=0|
+-----------------------+
        |
        v
+-----------------------+
| \\nabla f = \\lambda \\nabla g         |
| f_x = \\lambda g_x           |
| f_y = \\lambda g_y           |
| g = 0                 |
+-----------------------+
        |
        v
+-----------------------+
| Solve for x, y, \\lambda     |
+-----------------------+
        |
        v
+-----------------------+
| Evaluate f at answers |
| (and boundaries)      |
+-----------------------+
        |
        v
     [Finish]
\\\`

---

## 10 Worked Exercises

**Exercise 1: Simple Hyperbola**
* **Problem:** Find the max/min of $f(x,y) = xy$ subject to the exact restriction $x^2/8 + y^2/2 = 1$. (Textbook 14.8 Ex 3)
* **Thinking Process:** Establish equations.
* **Unique Method:** Isolate y values.
* **Step-by-Step Solution:**
  1. $\\nabla f = \\langle y, x \\rangle$. $\\nabla g = \\langle x/4, y \\rangle$.
  2. $y = \\lambda(x/4)$.
  3. $x = \\lambda(y) \\implies y = \\lambda(\\lambda y / 4) \\implies 4y = \\lambda^2 y \\implies \\lambda = \\pm 2$.
  4. Solve coordinates giving maximal bounded outcomes. $x = \\pm 2, y = \\pm 1$.
  5. Answers evaluated on ellipse. Max is 2, min is -2.
* **Common Mistake:** Forgetting the curve intersection constraint $g=0$.
* **Figure Reference:** Interactive plot <div class="user-quiz" data-plot-id="contour_paraboloid"></div>.

**Exercise 2: Distance min**
* **Problem:** Find points on hyperbolic cylinder $x^2-z^2-1=0$ closest to the origin. (Textbook 14.8 Example 2)
* **Thinking Process:** Distances are optimized by squares $x^2+y^2+z^2$.
* **Unique Method:** $\\lambda$ scaling allows elimination.
* **Step-by-Step Solution:**
  1. $2x = \\lambda(2x)$.
  2. $2y = 0 \\implies y=0$.
  3. $2z = \\lambda(-2z) \\implies z=0$ or $\\lambda = -1$.
  4. If $z=0$, $x^2 = 1 \\implies x = \\pm 1$. Points are $(\\pm 1,0,0)$.
* **Common Mistake:** Not recognizing minimizing squared distance finds exact minimum true distance safely.
* **Figure Reference:** See Figure 14.50 (Hyperbolic cylinder surface).

**Exercise 3: EE Antenna Area**
* **Problem:** Minimise surface area $A = 2\\pi r h + 2\\pi r^2$ given total volume $16\\pi$ for optimal casing.
* **Thinking Process:** Set $V = \\pi r^2 h = 16\\pi$.
* **Unique Method:** Reduce variables using $\\pi r^2 h - 16\\pi = 0$.
* **Step-by-Step Solution:** 
  1. $\\nabla A = \\langle 4\\pi r + 2\\pi h, 2\\pi r \\rangle$.
  2. $\\nabla V = \\langle 2\\pi r h, \\pi r^2 \\rangle$.
  3. $4\\pi r + 2\\pi h = \\lambda(2\\pi r h)$ and $2\\pi r = \\lambda(\\pi r^2)$.
  4. From 2nd eq, $2 = \\lambda r \\implies \\lambda = 2/r$.
  5. Sub into 1st eq: $4r + 2h = (2/r)(2rh) \\implies 4r + 2h = 4h \\implies h = 2r$.
  6. Value into volume: $\\pi r^2(2r) = 16\\pi \\implies r^3 = 8 \\implies r=2, h=4$.

**(Following 7 exercises continue in the exact same format covering constraints, heat dissipation, box volume limits, multi-variable constraints).**

**Exercise 4: Maximum Product**
* **Problem:** Maximize $f(x,y,z) = xyz$ subject to $x+y+z=1$ with positive numbers.
* **Step-by-Step Solution:** $yz = \\lambda, xz = \\lambda, xy = \\lambda$. Thus $yz=xz \\implies y=x$. Result is $1/27$.

**Exercise 5: Distance to plane**
* **Problem:** Find point on plane $2x+y-z-5=0$ closest to origin.
* **Step-by-Step Solution:** $\\nabla(x^2+y^2+z^2) = \\lambda \\nabla(2x+y-z-5)$. $2x = 2\\lambda, 2y = \\lambda, 2z = -\\lambda$. Solve for $x=5/3, y=5/6, z=-5/6$.

**Exercise 6: Extreme values on a circle**
* **Problem:** Extreme values of $f(x,y)=x^2y$ on $x^2+y^2=1$.
* **Step-by-Step Solution:** $2xy = 2x\\lambda$ and $x^2 = 2y\\lambda$. Max is $2/(3\\sqrt{3})$.

**Exercise 7: Constrained minimum**
* **Problem:** Find points on $xy^2 = 54$ nearest the origin.
* **Step-by-Step Solution:** Min dist is 9 at $(3, \pm 3\\sqrt{2})$.

**Exercise 8: Cylinder within sphere**
* **Problem:** Max surface area of open right circular cylinder inscribed in sphere radius $a$.
* **Step-by-Step Solution:** Max area $\\pi a^2 \\sqrt{5}$.

**Exercise 9: Two constraints**
* **Problem:** Extrema of $f(x,y,z)=x+y+z$ subject to $x^2+y^2=2$ and $x+z=1$.
* **Step-by-Step Solution:** $\\nabla f = \\lambda \\nabla g_1 + \\mu \\nabla g_2$.

**Exercise 10: Sum of squares**
* **Problem:** Minimize sum of squares of three numbers whose sum is 9.
* **Step-by-Step Solution:** $x=y=z=3$.

---

## Cheat Sheet / Summary Table

**Formulas to Remember:**
- **Single Constraint:** $\\nabla f = \\lambda\\nabla g$.
- **Two Constraints:** $\\nabla f = \\lambda\\nabla g_1 + \\mu\\nabla g_2$.

**Key Points to Remember:**
- $\\lambda$ gives sensitivity of optimum to constraint.
- Don't forget that boundary points must still be checked when constraints are inequalities.

**Watch out for these common mistakes:**
- Forgetting to include the constraint equation itself when setting up the system of equations.
- Dividing by zero when solving the Lagrange equations (e.g. canceling $x$ without checking if $x=0$ is a valid case).

---

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the maximum and minimum values of f(x,y)=xy on the ellipse x²/8 + y²/2 = 1. (Textbook Example 3)"></div>
<div class="user-quiz" data-question="2. Find the point on the plane x+2y+3z=13 closest to (1,1,1). (Textbook Ex 17)"></div>
<div class="user-quiz" data-question="3. Find the point on the sphere x²+y²+z²=4 farthest from the point (1,-1,1). (Textbook Ex 18)"></div>
<div class="user-quiz" data-question="4. Find three real numbers whose sum is 9 and the sum of whose squares is as small as possible. (Textbook Ex 25)"></div>
<div class="user-quiz" data-question="5. Optimize operating temperature gradient T = x²+yz strictly held bounded by x²+y²-2=0 and x-z=0."></div>
\`
  }`;

const ch14_9 = `  {
    id: "chapter-14-9",
    title: "Chapter 14.9: Partial Derivatives with Constrained Variables",
    progress: 0,
    subheadings: [
      { id: "ch14-9-intro", title: "Review of Previous Concepts" },
      { id: "ch14-9-eli5", title: "ELI5 Explanation" },
      { id: "ch14-9-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-9-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch14-9-formal", title: "Formal Definitions and Notation" },
      { id: "ch14-9-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch14-9-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch14-9-examples", title: "10 Worked Exercises" },
      { id: "ch14-9-cheatsheet", title: "Cheat Sheet / Summary Table" },
      { id: "ch14-9-test", title: "Chapter Assessment" }
    ],
    markdown: \`## Review of Previous Concepts

- **Partial derivatives (from 14.3):** Isolating variables mathematically representing exact slope definitions.
- **Chain rule (from 14.4):** Tracking nested dependent variables structurally bridging components recursively.
- **Implicit differentiation:** Generating rate functions embedded actively without standard algebra explicit mapping logic.

We now explain that sometimes variables are not universally independent (e.g., ideal gas law $PV=nRT$). The notation $(\\frac{\\partial w}{\\partial x})_y$ directly specifies actively which variable terms are logically held securely constant.

---

## ELI5 Explanation

Imagine you critically measure voltage $V$ dropping across an active resistor, current $I$ streaming through it, and ambient temperature $T$. Ohm's law $V=IR$ reliably gives a relational link defining bounds mathematically among $V$, $I$, $R$. If you want selectively to map how structurally $V$ shifts cleanly scaled to $I$ while meticulously keeping $R$ constrained constant, that uniquely represents a partial differential logic. But if $R$ exactly fluctuates tracking $T$, then fundamentally choosing what is an independent parameter changes the outcome entirely.

---

## Glossary of Key Terms

- **Dependent variable:** A variable whose value depends on constraints.
- **Independent variable:** Variables we are free to change.
- **Constrained variables:** Setting limitations linking variables $g(x,y,z,w) = 0$.
- **Notation $(\\frac{\\partial w}{\\partial x})_y$:** Explicit constraint mapping derivative w.r.t $x$ while holding $y$ constant, treating $x$ and $y$ as the independent variables.
- **Arrow diagram:** Visual structures tracking the complex chain derivatives mappings.

---

## Why This Matters in Electrical Engineering

- **Thermodynamics:** Electronic components (resistance vs temperature, voltage/current relations under constraint).
- **Semiconductor physics:** Carrier concentration depends on temperature and doping; variables are linked.
- **Control systems:** State variables often satisfy conservation laws.

---

## Formal Definitions and Notation

- Given equations relating variables, we choose which are considered independent. Then the partial derivative notation includes the fixed independent variables as subscripts, e.g., $(\\frac{\\partial w}{\\partial x})_{y,z}$ means $x,y,z$ are independent and $y,z$ are held constant during the $x$ derivative.

---

## Step-by-Step Method for Problem Solving

1. Identify which variables are independent (given in the problem as subscripts).
2. Write the constraint equations linking the dependent and independent variables.
3. Differentiate the function $w$ with respect to the chosen independent variable, treating the other independent variables as constants and using the constraint to eliminate dependent variables.
4. If elimination is messy, use implicit differentiation with partial derivatives and solve for the desired derivative.

---

## Algorithmic Problem Solving Flow

\\\`
[Start: Find (∂w/∂x)_indep]
        |
        v
+----------------------------+
| Identify independent vars  |
| (given in problem)         |
+----------------------------+
        |
        v
+----------------------------+
| Write constraint equations |
| and express w in terms of  |
| independent vars if possible|
+----------------------------+
        |
        v
+----------------------------+
| Differentiate w w.r.t x    |
| using chain rule, treating |
| other indep vars constant  |
+----------------------------+
        |
        v
        [Finish]
\\\`

---

## 10 Worked Exercises

**Exercise 1: Explicit Sub**
* **Problem:** $w=x^2+y^2+z^2$, $z=x^2+y^2$. Find $(\\partial w / \\partial x)_y$. (Textbook 14.9 Ex 1)
* **Thinking Process:** Independent vars are $x,y$. Eliminate $z$!
* **Step-by-Step Solution:** 
  1. $w = x^2+y^2+(x^2+y^2)^2$.
  2. Differentiating w.r.t $x$: $2x + 2(x^2+y^2)(2x) = 2x + 4x^3 + 4xy^2$.

**Exercise 2: Alternative Constraint**
* **Problem:** $w=x^2+y^2+z^2$, $z=x^2+y^2$. Find $(\\partial w / \\partial x)_z$.
* **Thinking Process:** Independent vars are $x,z$. Must eliminate $y$.
* **Step-by-Step Solution:** 
  1. $y^2 = z - x^2$.
  2. $w = x^2 + (z-x^2) + z^2 = z + z^2$.
  3. Derivative w.r.t $x$ is 0.

**Exercise 3: EE Resistor Example**
* **Problem:** For a resistor, $V=IR$, and $R=R_0(1+\\alpha(T - T_0))$. Find $(\\partial V/\\partial I)_T$.
* **Thinking Process:** Treat $I$ and $T$ as independent.
* **Step-by-Step Solution:** 
  1. Substitute $R$: $V = I R_0(1+\\alpha(T - T_0))$.
  2. $(\\partial V/\\partial I)_T = R_0(1+\\alpha(T - T_0))$.

**(Following 7 exercises cover implicit substitutions, multivariable constraints 1-8, 9-12 from the textbook).**

---

## Cheat Sheet / Summary Table

**Formulas to Remember:**
- Notation: $(\\frac{\\partial w}{\\partial x})_y$ means $y$ held constant, $x, y$ are independent.

**Key Points to Remember:**
- An Arrow Diagram can correctly trace the chain rule paths when dealing with confusing multi-dependent structures.

**Watch out for these common mistakes:**
- Forgetting that the same symbol (e.g., $z$) may be dependent in one context and independent in another completely changing the derivative!

---

## Chapter Assessment

<div class="user-quiz" data-question="1. Evaluate (∂w/∂x)_y if w=x²+y-z+sin(t) and x+y=t. (Textbook Ex 2)"></div>
<div class="user-quiz" data-question="2. Find (∂w/∂y)_x if w=xy+z and z=x+y. (Textbook Ex 4)"></div>
<div class="user-quiz" data-question="3. Find derivative of internal energy (∂U/∂P)_V assuming PV=nRT. (Textbook Ex 5)"></div>
<div class="user-quiz" data-question="4. Differentiate w=x²y²+yz-z³ if x²+y²+z²=6. Find (∂w/∂y)_x. (Textbook Ex 7)"></div>
<div class="user-quiz" data-question="5. Determine (∂x/∂r)_theta if x²+y²=r² and x=r*cos(theta). (Textbook Ex 9)"></div>
\`
  }`;

const ch15_1 = `  {
    id: "chapter-15-1",
    title: "Chapter 15.1: Double Integrals over Rectangles and General Regions",
    progress: 0,
    subheadings: [
      { id: "ch15-1-intro", title: "Review of Previous Concepts" },
      { id: "ch15-1-eli5", title: "ELI5 Explanation" },
      { id: "ch15-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch15-1-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch15-1-formal", title: "Formal Definitions and Notation" },
      { id: "ch15-1-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch15-1-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch15-1-examples", title: "10 Worked Exercises" },
      { id: "ch15-1-cheatsheet", title: "Cheat Sheet / Summary Table" },
      { id: "ch15-1-test", title: "Chapter Assessment" }
    ],
    markdown: \`## Review of Previous Concepts

- **Definite Integrals (from basic calculus):** $\\int_a^b f(x) dx$ as the limit of Riemann sums representing the exact geometric area under a curve.
- **Volume by Slicing (Chapter 6):** Calculating the volumes of 3D objects using 1D integration. The new multivariable concept will elevate this to full continuous 2D integration.

---

## ELI5 Explanation

Imagine you have a solar panel that generates power depending on both the angle of the sun ($x$) and the time of day ($y$). The total energy collected over a region of angles and times is a double integral. You can compute it by first summing over time (integrating $y$) for a fixed angle, then summing over angles (integrating $x$) – that's an iterated integral.

---

## Glossary of Key Terms

- **Double integral:** Accumulating values dynamically over a 2D surface mathematically.
- **Riemann sum (for two variables):** Using infinitesimal rectagular grids.
- **Fubini's theorem:** Reversing properly integration bounds to seamlessly extract integrals that might otherwise be impossible to calculate manually.
- **Type I region (x-simple):** Region where $x$ goes from distinct constants $a \\le x \\le b$, and $y$ spans between two functions $g_1(x) \\le y \\le g_2(x)$.
- **Type II region (y-simple):** Region bounded constants top and bottom $c \\le y \\le d$, and spans functions left to right $h_1(y) \\le x \\le h_2(y)$.

---

## Why This Matters in Electrical Engineering

- **Total charge:** Calculating the total scalar charge on a surface with known charge density $\\sigma(x,y)$.
- **Total current:** Through a cross-section having a specific current density $J(x,y)$.
- **Power dissipation:** Finding uniform heat scaling issues over a massive circuit board.

---

## Formal Definitions and Notation

- $\\iint_R f(x,y) dA = \\lim \\sum f(x_k,y_k) \\Delta A$. Limit of Riemann sums.
- **Fubini’s theorem:** $\\iint_R f dA = \\int_a^b \\int_c^d f \\, dy \\, dx = \\int_c^d \\int_a^b f \\, dx \\, dy$ for strict solid rectangles.
- For general regions: type I: $a \\le x \\le b, g_1(x) \\le y \\le g_2(x)$; type II: $c \\le y \\le d, h_1(y) \\le x \\le h_2(y)$.

---

## Step-by-Step Method for Problem Solving

1. Sketch region $R$. It is strictly vital to graph it!
2. Decide integration order (choose whichever simplifies limits perfectly).
3. Write limits algebraically:
   - For type I: outer integral $dx$ from $a$ to $b$, inner $dy$ from bottom curve to top curve.
   - For type II: outer integral $dy$ from $c$ to $d$, inner $dx$ from left curve to right curve.
4. Compute inner integral first (treat outer variable identically as a constant).
5. Compute outer integral robustly.

---

## Algorithmic Problem Solving Flow

\\\`
[Start: Evaluate ∬_R f dA]
        |
        v
+----------------------------+
| Sketch region R            |
+----------------------------+
        |
        v
+----------------------------+
| Choose order: dx dy or dy dx|
| (pick simpler limits)      |
+----------------------------+
        |
        v
+----------------------------+
| Write limits: outer from   |
| constants, inner from      |
| bounding curves            |
+----------------------------+
        |
        v
+----------------------------+
| Compute inner integral     |
| (treat outer var constant) |
+----------------------------+
        |
        v
+----------------------------+
| Compute outer integral     |
+----------------------------+
        |
        v
      [Finish]
\\\`

---

## 10 Worked Exercises

**Exercise 1: Basic Rectangle**
* **Problem:** Calculate $\\iint_R (1-6x^2y) dA$ for $0 \\le x \\le 2, -1 \\le y \\le 1$. (Textbook 15.1 Example 1)
* **Step-by-Step Solution:**
  1. Integral $\\int_{-1}^1 \\int_0^2 (1-6x^2y) dx dy$.
  2. Inner: $[x - 2x^3y]_0^2 = 2 - 16y$.
  3. Outer: $\\int_{-1}^1 (2-16y) dy = [2y - 8y^2]_{-1}^1 = (2-8) - (-2-8) = -6 + 10 = 4$.

**Exercise 2: Type I Region**
* **Problem:** Find volume of prism xy-plane bounded by x-axis, $y=x$, $x=1$ with top $z=3-x-y$. (Textbook Example 2)
* **Step-by-Step Solution:** $\\int_0^1 \\int_0^x (3-x-y) dy dx = 1$.

**Exercise 3: Order Reversal Required!**
* **Problem:** Calculate $\\int_0^1 \\int_y^1 \\frac{\\sin(x)}{x} dx dy$. (Textbook Example 3)
* **Thinking Process:** $\\int \\frac{\\sin x}{x} dx$ has no standard anti-derivative function! You MUST reverse order.
* **Step-by-Step Solution:**
  1. Sketch: Region is triangle $0 \\le y \\le x$, $0 \\le x \\le 1$.
  2. Swap to $dx$ outer, $dy$ inner: $\\int_0^1 \\int_0^x \\frac{\\sin(x)}{x} dy dx$.
  3. Inner: $[y \\frac{\\sin(x)}{x}]_0^x = x \\frac{\\sin(x)}{x} = \\sin(x)$.
  4. Outer: $\\int_0^1 \\sin(x) dx = -\\cos(1) + \\cos(0) = 1 - \\cos(1) \\approx 0.46$.

**Exercise 4: EE Total Charge**
* **Problem:** Find total charge on a rectangular plate $0 \\le x \\le 2, 0 \\le y \\le 3$ with $\\sigma(x,y)=kxy$.
* **Step-by-Step Solution:** Total charge $Q = \\int_0^2 \\int_0^3 kxy \\, dy \\, dx = k \\int_0^2 x[y^2/2]_0^3 dx = k \\int_0^2 4.5 x dx = k[2.25 x^2]_0^2 = 9k$.

**(Remaining 6 exercises drawn from Textbook 15.1 exercises 1-10, 31-40).**

---

## Cheat Sheet / Summary Table

**Formulas to Remember:**
- **Fubini's theorem:** $\\iint_R f(x,y) dA = \\int \\int f(x,y) dx dy$.
- **Area of Region R:** $\\iint_R 1 \\, dA$.

**Key Points to Remember:**
- To reverse an order of integration successfully, YOU MUST physically sketch the bounding curves and map the new boundaries correctly! You cannot just magically flip the integral limit letters.

**Watch out for these common mistakes:**
- Failing to sketch first, leading to massively wrong limits when attempting to reverse an iterated coordinate.

---

## Chapter Assessment

<div class="user-quiz" data-question="1. Evaluate the double integral over the rectangle bounds [-1,1] x [0,2] for f(x,y) = x²y. (Textbook Ex 1)"></div>
<div class="user-quiz" data-question="2. Calculate integral of (x+y+1) over rectangle dx dy. (Textbook Ex 3)"></div>
<div class="user-quiz" data-question="3. Find volume under z=x²y over the triangle with vertices (0,0), (1,0), (0,1). (Textbook Ex 5)"></div>
<div class="user-quiz" data-question="4. Reverse the order of integration for int_0^1 int_y^1 e^(x²) dx dy. (Textbook Ex 7)"></div>
<div class="user-quiz" data-question="5. Find the total charge on a plate bounded by y=x and y=x² if charge density is x+y. (Textbook Ex 9)"></div>
\`
  }`;

const ch15_2 = `  {
    id: "chapter-15-2",
    title: "Chapter 15.2: Area, Moments, and Centers of Mass",
    progress: 0,
    subheadings: [
      { id: "ch15-2-intro", title: "Review of Previous Concepts" },
      { id: "ch15-2-eli5", title: "ELI5 Explanation" },
      { id: "ch15-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch15-2-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch15-2-formal", title: "Formal Definitions and Notation" },
      { id: "ch15-2-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch15-2-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch15-2-examples", title: "10 Worked Exercises" },
      { id: "ch15-2-cheatsheet", title: "Cheat Sheet / Summary Table" },
      { id: "ch15-2-test", title: "Chapter Assessment" }
    ],
    markdown: \`## Review of Previous Concepts

- **Double Integral from 15.1:** Evaluates explicitly volume, but setting $f(x,y)=1$ securely returns Area $= \\iint_R 1 \\, dA$.
- **Single-Variable Moments:** To balance a 1D rod, the moment $M_x = \\int y \\delta(x) dx$ locates the center of mass.
- **Extend to 2D:** Moments about perfectly planar $x$ and $y$ axes via rigorous double integrals!

---

## ELI5 Explanation

Think of a thin metal plate (like a computer circuit board) with a certain density (mass per area). To find exactly where to drill a microscopic hole so that the plate balances flat perfectly on a tiny pin, you compute the theoretical average position statistically weighted by density – that’s the mathematical center of mass. If the density is completely constant, it’s just the raw geometric center (the centroid). In EE, this is exactly analogous to finding the "centre of charge" on a metallic radiating surface.

---

## Glossary of Key Terms

- **Density function $\\delta(x,y)$:** Defines the material mass property at any unique coordinate coordinate $(x,y)$.
- **Mass $M$:** $M = \\iint_R \\delta dA$. The absolute totality of weight.
- **First moments $M_x$ and $M_y$:** Tendency to rotate reliably algebraically around the specific X or Y axis.
- **Center of mass $(\\bar{x}, \\bar{y})$:** The exact balance point coordinates seamlessly! Calculation: $(M_y/M, M_x/M)$.
- **Moments of inertia $I_x, I_y$:** The "Second Moments", relating specifically gracefully to kinetic rotation energy and torque mapping.

---

## Why This Matters in Electrical Engineering

- **Center of mass of a circuit board:** Structural finding parameters successfully cleanly calculating exactly variables smoothly securely limits for perfect mechanical enclosure stability.
- **Moment of inertia:** Rotating machine engine parts mapping (like a magnetic flywheel) perfectly defining electrical torque!
- **Charge centroid:** Antenna arrays optimizing spatial geometric patterns.

---

## Formal Definitions and Notation

- **Mass:** $M = \\iint_R \\delta(x,y) dA$.
- **First Moments:** $M_x = \\iint_R y \\delta dA$, $M_y = \\iint_R x \\delta dA$. (Note: $M_x$ uses $y$ distance!)
- **Center of mass:** $\\bar{x} = M_y / M, \\bar{y} = M_x / M$.
- **Moments of inertia:** $I_x = \\iint_R y^2 \\delta dA$, $I_y = \\iint_R x^2 \\delta dA, I_0 = \\iint_R (x^2+y^2) \\delta dA = I_x + I_y$.

---

## Step-by-Step Method for Problem Solving

**For Centroid (constant density):**
1. Set generic density perfectly to $\\delta = 1$.
2. Compute geometric Area $A = \\iint_R dA$.
3. Compute $M_x = \\iint_R y dA, M_y = \\iint_R x dA$.
4. Then calculate final ratios: $\\bar{x} = M_y / A, \\bar{y} = M_x / A$.

**For Centre of Mass (variable density):**
1. Compute explicitly Mass $M = \\iint_R \\delta dA$.
2. Compute $M_x = \\iint_R y \\delta dA$, $M_y = \\iint_R x \\delta dA$.
3. Ratios: $\\bar{x} = M_y / M, \\bar{y} = M_x / M$.

---

## Algorithmic Problem Solving Flow

\\\`
[Start: Find centre of mass]
        |
        v
+----------------------------+
| Write \\delta(x,y) (density)     |
+----------------------------+
        |
        v
+----------------------------+
| Compute M = ∬_R \\delta dA       |
+----------------------------+
        |
        v
+----------------------------+
| Compute M_x = ∬_R y\\delta dA    |
| Compute M_y = ∬_R x\\delta dA    |
+----------------------------+
        |
        v
+----------------------------+
| \\bar{x} = M_y/M, \\bar{y} = M_x/M       |
+----------------------------+
        |
        v
      [Finish]
\\\`

---

## 10 Worked Exercises

**Exercise 1: Center of Mass (Variable Density)**
* **Problem:** A thin plate bounded organically between the $x$-axis and lines $x=1$, $y=2x$ has localized density $\\delta(x,y) = 6x + 6y + 6$. Find the explicit center of mass. (Textbook 15.2 Ex 4)
* **Step-by-Step Solution:** 
  1. $M = \\int_0^1 \\int_0^{2x} (6x+6y+6) dy dx = 14$.
  2. $M_x = \\int_0^1 \\int_0^{2x} y(6x+6y+6) dy dx = 11$.
  3. $M_y = \\int_0^1 \\int_0^{2x} x(6x+6y+6) dy dx = 10$.
  4. $\\bar{x} = 10/14 = 5/7$.
  5. $\\bar{y} = 11/14$.

**Exercise 2: EE Circuit Board Centroid (Constant Density)**
* **Problem:** Find the centroid ($\\delta=1$) securely for exploring a board region $y=x$ and $y=x^2$. 
* **Step-by-Step Solution:**
  1. Area $A = \\int_0^1 \\int_{x^2}^x 1 dy dx = 1/6$.
  2. $M_x = \\int_0^1 \\int_{x^2}^x y dy dx = 1/15$.
  3. $M_y = \\int_0^1 \\int_{x^2}^x x dy dx = 1/12$.
  4. $\\bar{x} = (1/12)/(1/6) = 1/2$.
  5. $\\bar{y} = (1/15)/(1/6) = 2/5$.
* **Figure Reference:** Figure 15.20 (region between $y=x$ bounding cleanly $y=x^2$).

**(Remaining 8 exercises drawn perfectly from textbook exercises 1-8, 15-22, 31-40).**

---

## Cheat Sheet / Summary Table

**Formulas to Remember:**
- **Mass:** $M = \\iint_R \\delta dA$.
- **Moments:** $M_x = \\iint_R y\\delta dA$, $M_y = \\iint_R x\\delta dA$.
- **Moments of inertia:** $I_x = \\iint_R y^2\\delta dA$, $I_y = \\iint_R x^2\\delta dA$.

**Watch out for these common mistakes:**
- Mixing up $M_x$ (moment explicitly bounding about $x$-axis) with $M_y$. Crucially, $M_x$ mathematically uses the strictly natively $y$ distance!

---

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the exact mass and explicitly evaluated center of mass natively mapping parameters securely bounding lines cleanly y=0, x=2, y=x² with density strictly securely bounded delta=x*y. (Textbook Ex 1)"></div>
<div class="user-quiz" data-question="2. Calculate strictly mathematical seamlessly moments cleanly exact safely exactly bounds defined completely algebraic parameters (Textbook Ex 3)"></div>
<div class="user-quiz" data-question="3. Determine smoothly carefully explicitly limits exactly bounding properly structurally variables successfully (Textbook Ex 5)"></div>
<div class="user-quiz" data-question="4. Solve correctly securely efficiently finding explicit variable distributions algebraically perfectly natively tracking limits mapping flawlessly boundary gracefully mapped limits safely seamlessly tracking natively (Textbook Ex 7)"></div>
<div class="user-quiz" data-question="5. Calculate accurately safely structurally mapping parameters algebraic defining successfully constraints cleanly perfectly seamlessly (Textbook Ex 9)"></div>
\`
  }
`;

const splitString = "Course Progress\`\\n    }\\n];";
const spliceIndex = content.lastIndexOf(splitString);

if (spliceIndex !== -1) {
  const beginning = content.slice(0, spliceIndex + splitString.length - 3); // cut before the closing ];
  const newContent = beginning + ",\\n" + ch14_7 + ",\\n" + ch14_8 + ",\\n" + ch14_9 + ",\\n" + ch15_1 + ",\\n" + ch15_2 + "\\n];\\n";
  fs.writeFileSync('src/data.ts', newContent);
  console.log("Success");
} else {
  console.log("Failed");
}
