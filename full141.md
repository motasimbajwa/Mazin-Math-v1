## Introduction: Escaping Flatland

Welcome to Multivariable Calculus. Until now, your mathematical journey has been confined to "Flatland"—a two-dimensional universe where $y$ is simply a slave to $x$. If $x$ moves right, $y$ goes up or down. It was a beautiful, but restricted world.

The jump to Multivariable Calculus is often intimidating, and people notoriously call it "difficult." Let me offer you **absolute assurance**: it is not difficult. It is simply expansive. The core rules—the power rule, the chain rule, the fundamental concepts of slopes and areas—*do not change*. They simply adapt to a broader reality. 

Why do people struggle? Because they try to memorize new formulas instead of visualizing the geometric leap. In 1D calculus, you studied curves on flat paper. Here, you will study rippling curtains, undulating mountains, and sweeping magnetic fields. 

**Always keep this in mind:** If you are ever confused in multivariable calculus, freeze one of the variables. By doing so, you instantly collapse the complex 3D problem into a simple 1D problem you already mastered months ago! Every exercise in this course builds your intuition layer by layer. Understand the geometry first, and the algebra will naturally follow.

## ELI5 Explanation: The Solar Panel Map (EE‑Focused)

Imagine you are designing a solar panel tracking system. The electrical power output $P$ depends on two things: the time of day $x$ (which affects the sun’s angle) and the tilt angle $y$ of the panel. So $P = f(x,y)$. A **level curve** connects all $(x,y)$ pairs that give the same power – for example, all times and tilts that produce exactly 200 watts. On a map, this would look like a contour line. If you walk along that curve, your power stays constant. If you move perpendicular to it, power changes fastest. This is exactly how engineers use level curves to optimise solar farms: they find the tilt that keeps power high for many hours.

## Glossary of Key Terms

- **Multivariable function** – A rule that assigns a single output to two or more inputs. Example: $V = \\pi r^2 h$ gives volume from radius and height.
- **Level curve** – The set of points $(x,y)$ where $f(x,y) = c$. Like a contour line on a topographic map.
- **Level surface** – For three variables, $f(x,y,z) = c$ defines a surface in space (e.g., a sphere for $x^2+y^2+z^2 = c^2$).
- **Interior point** – A point that has a small disk around it lying completely inside the region.
- **Boundary point** – Every disk around it contains points both inside and outside the region.
- **Open region** – Contains only interior points (inequalities like `<` or `>`).
- **Closed region** – Contains all its boundary points (inequalities like `≤` or `≥`).
- **Bounded region** – Fits inside a disk of some fixed radius. Unbounded = infinite.

## Why This Matters in Electrical Engineering

1. **Antenna radiation patterns** – Power density $S(\\theta, \\phi)$ depends on two angles. Level curves map regions of equal signal strength.
2. **Circuit sensitivity** – Output voltage $V_{out}(R_1, R_2)$ depends on resistor values. Contours of constant $V_{out}$ help choose tolerances.
3. **Electric potential** – $V(x,y,z)$ in space. Level surfaces are equipotential surfaces; electric field lines are perpendicular to them.

## Formal Definitions and Notation

- A function of two variables: $z = f(x,y)$, domain $D \\subseteq \\mathbb{R}^2$.
- Level curve: $\\{ (x,y) \\in D \\mid f(x,y) = c \\}$.
- Level surface: $\\{ (x,y,z) \\mid f(x,y,z) = c \\}$.

## Step‑by‑Step Method for Basic Problems

**Finding Domain:**
1. Identify restrictions: square roots (inside ≥ 0), denominators (≠ 0), logarithms (> 0), arcsin/arccos ([−1,1]).
2. Write inequality or condition.
3. Describe the set (e.g., “all points above parabola $y = x^2$”).

**Finding Range:**
1. Consider min and max possible output.
2. Use continuity: if domain is connected, range is an interval.

**Finding Level Curves:**
1. Set $f(x,y) = c$.
2. Simplify to a recognizable equation (circle, line, ellipse, etc.).
3. Identify shape.

**Open/Closed/Bounded:**
- Open: strict inequalities (`<`, `>`) – no boundary.
- Closed: inclusive inequalities (`≤`, `≥`) – includes boundary.
- Bounded: can be enclosed in a large disk.

## Visuals / Graphs

### 1. Paraboloid and Level Curves
*(Interactive Visualization)*

> **Side Note: What is a Paraboloid?** 
> Imagine taking a flexible 2D parabola curve (like a happy face smile $y=x^2$) and spinning it around its vertical center post like a top. The 3D bowl shape it rapidly spins out is a "paraboloid". It's the exact same shape mathematically used for satellite dishes because it perfectly bounces signals into the receiver center!

<div class="plot-interactive" data-plot-id="paraboloid"></div>

### 2. Contour Plot
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="contour_paraboloid"></div>

### 3. Interior and Boundary Points
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="interior_boundary"></div>

[WILL BE REPLACED WITH EXISTING 5 + REFS]

## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Identify Hazards<br><span class="text-xs font-normal text-slate-300">Look for fractions, roots, logs</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Set Constraints<br><span class="text-xs font-normal">Denominator ≠ 0, Root ≥ 0, Log > 0</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Solve Inequalities<br><span class="text-xs font-normal">Isolate y or x to define boundary</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Map the Region<br><span class="text-xs font-normal">Solid/Dashed lines, Open/Closed set</span>
  </div>
</div>

**Key Points to Remember:**
- Domain restrictions: square root → inside ≥ 0; log → argument > 0; denominator ≠ 0.
- Level curves are always in the domain (xy‑plane), not on the surface.
- A region is open if it contains **no** boundary points; closed if it contains **all** boundary points.
- Bounded means you can draw a circle around the entire region.

**Formulas to Remember:**
- Circle: $x^2 + y^2 = R^2$
- Ellipse: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$
- Parabola: $y = x^2$ (or $x = y^2$)

**Watch out for these common mistakes:**
- Including points where denominator = 0 in the domain.
- Forgetting that $\ln(x^2+y^2)$ is undefined at the origin.
- Confusing open/closed: strict inequality = open, inclusive = closed.
- Thinking level curves are 3D – they are 2D curves in the domain.

## Chapter Assessment (5 exam‑level questions)

> **QUIZ:** Find the domain of f(x,y) = ln(4 - x² - y²). Is it open or closed? Bounded?
>
> 1. Find the domain of $f(x,y) = \ln(4 - x^2 - y^2)$. Is it open or closed? Bounded?
> *(Source: CUI Sahiwal FA25 Q2a – adapted)*

> **QUIZ:** Describe the level curves of f(x,y) = x² - y² for c = -1, 0, 1.
>
> 2. Describe the level curves of $f(x,y) = x^2 - y^2$ for $c = -1, 0, 1$.
> *(Source: COMSATS FA24 Q2b)*

> **QUIZ:** Find the equation of the level surface of f(x,y,z) = x² + y² - z² that passes through (2,1,1).
>
> 3. Find the equation of the level surface of $f(x,y,z) = x^2 + y^2 - z^2$ that passes through $(2,1,1)$.
> *(Original)*

> **QUIZ:** The volume of a cylinder is V(r,h) = π r² h. Describe the level curve V = 100. What does it represent?
>
> 4. The volume of a cylinder is $V(r,h) = \pi r^2 h$. Describe the level curve $V = 100$. What does it represent physically?
> *(EE application)*

> **QUIZ:** Determine if the region { (x,y) | 1 < x² + y² ≤ 4 } is open, closed, or neither. Is it bounded?
>
> 5. Determine if the region $\{ (x,y) \mid 1 < x^2 + y^2 \le 4 \}$ is open, closed, or neither. Is it bounded?
> *(Source: COMSATS FA24 Q2c)*

<br/>
\`▓▓▓░░░░░░░ 28%\` Course Progress
\`▓░░░░░░░░░ 10%\` Reinforcement Load
