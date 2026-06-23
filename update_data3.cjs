const fs = require('fs');

function updateData() {
    let content = fs.readFileSync('src/data.ts', 'utf-8');

    const new_14_1_raw = `## Introduction: Escaping Flatland

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
- **Open region** – Contains only interior points (inequalities like \`<\` or \`>\`).
- **Closed region** – Contains all its boundary points (inequalities like \`≤\` or \`≥\`).
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
- Open: strict inequalities (\`<\`, \`>\`) – no boundary.
- Closed: inclusive inequalities (\`≤\`, \`≥\`) – includes boundary.
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

## 10 Worked Exercises

**Example 1: Evaluating a Multivariable Function**
* **Problem:** Find the value of $f(x,y,z) = \\sqrt{x^2+y^2+z^2}$ at the coordinate $(x=3, y=0, z=4)$.
* **Thinking Method:** Just like in 1D algebra where you plug a number into $x$, here you simply plug all three numbers into their respective slots at the exact same time. It's just a recipe!
* **Worked-Out Solution:** 
  1. Replace every $x$ with $3$. You get $3^2 = 9$.
  2. Replace every $y$ with $0$. You get $0^2 = 0$.
  3. Replace every $z$ with $4$. You get $4^2 = 16$.
  4. Add them together inside the square root: $9 + 0 + 16 = 25$.
  5. The square root of $25$ is exactly $5$. So, $f(3,0,4) = 5$.
* **Key Takeaway:** Multivariable evaluation is literally just 1D evaluation multiplied by the number of variables. If you can plug in one number, you can plug in three!
* **Figure Reference: Figure 14.3 shows a similar domain (parabola boundary).**

**Example 2: Determining Domain**
* **Problem:** Find the domain of the function $w = \\sqrt{y - x^2}$.
* **Thinking Method:** The "domain" simply asks: "What inputs are mathematically legal?" The only rule here is that you cannot take the square root of a negative number in the real world. So, whatever is inside the square root *must* be zero or perfectly positive.
* **Worked-Out Solution:** 
  1. Take the inside stuff: $y - x^2$. 
  2. Force it to be legal by writing mathematically that it must be greater than or equal to zero: $y - x^2 \\ge 0$.
  3. Move $x^2$ to the other side by adding it: $y \\ge x^2$.
  4. What does this mean geometrically? Draw the standard parabola $y = x^2$. The domain is every single point exactly *on* that curved line, plus every point *above* it (the inside of the bowl)! Any point below the parabola breaks the machine and gives an error.
* **Key Takeaway:** Inequalities physically carve out legal regions of land on our 2D maps!
* **Figure Reference: Figure 14.4 illustrates level curves of a paraboloid.**

**Example 3: Graphing Level Curves**
* **Problem:** Find and plot the level curve $f(x,y) = 75$ for the mountain surface defined by $f(x,y) = 100 - x^2 - y^2$.
* **Thinking Method:** A level curve is just a horizontal slice of a mountain at a exact height. The problem says "the height is 75." So, replace the height function $f(x,y)$ with the number 75 and see what 2D shape is left over!
* **Worked-Out Solution:** 
  1. Start with the mountain equation: $Height = 100 - x^2 - y^2$.
  2. Force the height to be 75: $75 = 100 - x^2 - y^2$.
  3. This looks messy. Let's move the letters to the left and numbers to the right. Add $x^2 + y^2$ to the left side: $x^2 + y^2 + 75 = 100$.
  4. Subtract 75 from both sides: $x^2 + y^2 = 25$.
  5. **The Final Conclusion:** Do you recognize this algebraic fingerprint? From basic geometry, the equation $x^2 + y^2 = R^2$ creates a perfect circle with radius $R$. Since $25 = 5^2$, our radius is 5.
  6. **What does this tell us?** If you hike exactly 5 miles outward in a circle from the center of this mountain, your elevation will strictly remain at a height of 75 feet the entire time!
* **Key Takeaway:** Level curves translate complex 3D heights into simple, recognizable 2D shapes you studied years ago.
* **Common mistake: Forgetting that the domain is open (strict inequality) because denominator cannot be zero.**

**Example 4: Formulating Level Surfaces**
* **Problem:** Describe the "level surfaces" of the 4D function $w = \\ln(x^2 + y^2 + z^2)$.
* **Thinking Method:** It works exactly like a level curve, but bumped up a dimension. Instead of slicing a 3D mountain to get a 2D line, we are slicing a 4D hyperspace to get a 3D object. We just set the output $w$ to a constant letter $c$.
* **Worked-Out Solution:** 
  1. Set output to $c$: $c = \\ln(x^2 + y^2 + z^2)$.
  2. We need to crack open that natural log ($\\ln$). The mathematical crowbar for $\\ln$ is taking the exponent base $e$ of both sides.
  3. Doing so cancels the $\\ln$ on the right side: $e^c = x^2 + y^2 + z^2$.
  4. **The Final Conclusion:** The equation $x^2 + y^2 + z^2 = (\\text{some number})$ is the standard blueprint for a hollow 3D sphere. Since $c$ can be any number, $e^c$ is just a positive number acting as the sphere's radius. As we increase $c$, the sphere expands. They form infinite layers of shells, like a Russian nesting doll or an onion!
* **Key Takeaway:** Level surfaces are just 3D shapes acting as "contour lines" for 4-dimensional data.
* **Figure Reference: Figure 14.7 shows concentric spheres as level surfaces.**

**Example 5: Classification**
* **Problem:** Is the domain of the function $f(x,y) = \\frac{1}{xy}$ open, closed, or neither?
* **Thinking Method:** What breaks this fraction? Division by zero! We must find where the bottom is zero, exclude those points, and see what type of geometry is left over.
* **Worked-Out Solution:** 
  1. The denominator is $xy$. This breaks if $x = 0$ (the entire y-axis) OR if $y = 0$ (the entire x-axis). 
  2. So, our legal map consists of all four quadrants of the coordinate plane, but the axes themselves are strictly forbidden dead zones.
  3. Does our legal grass map include any fences (boundary points)? A boundary point here would be a point exactly on the axis. But wait! The axes are forbidden. 
  4. Since the map does not include the fences (boundaries) that surround it, it consists *entirely* of interior points.
  5. By definition, a region made of *only* inside points is called an "Open" region.
* **Key Takeaway:** If the boundary walls are physically impossible to stand on, the region is purely open.
* **Common mistake: Including origin in domain of ln(x²+y²).**

**Example 6: Determining Domain**
* **Problem:** Find the domain of the function $f(x,y) = \\ln(y - x^2)$.
* **Thinking Method:** Same as Example 2, but with logs.
* **Worked-Out Solution:**
  1. The argument of the log must be strictly positive: $y - x^2 > 0$.
  2. This means $y > x^2$.
  3. The domain is the region exactly above the parabola $y = x^2$. The parabola itself is NOT included.
* **Key Takeaway:** Unlike square roots, logs require strict inequality!
* **Figure Reference: Figure 14.1 explains interior/boundary points.**

**Example 7: Graphing Level Curves**
* **Problem:** Find and plot the level curve $f(x,y) = 2$ for $f(x,y) = 2x^2 + y^2$.
* **Thinking Method:** Set to 2, check the resulting equation shape.
* **Worked-Out Solution:**
  1. $2 = 2x^2 + y^2$.
  2. Divide by 2: $1 = x^2 + \\frac{y^2}{2}$.
  3. This is an ellipse!
* **Key Takeaway:** Different coefficients on $x^2$ and $y^2$ stretch the level curves into ellipses instead of circles.
* **Common mistake: Thinking level curves of ellipsoid are circles.**

**Example 8: Classification**
* **Problem:** Is the domain of $f(x,y) = \\sqrt{1 - x^2 - y^2}$ bounded?
* **Thinking Method:** Check the inequality, see if it fits in a finite disk.
* **Worked-Out Solution:**
  1. $1 - x^2 - y^2 \\ge 0 \\implies x^2 + y^2 \\le 1$.
  2. This describes a solid disk of radius 1 centered at origin.
  3. Because it's completely enclosed in a finite boundary, it is **bounded**.
* **Key Takeaway:** "Bounded" just means "not infinite".
* **Figure Reference: Figure 14.2 – unit disk interior vs boundary.**

**Example 9: Domain with two conditions**
* **Problem:** $f(x,y) = \\frac{\\sqrt{y}}{x - 1}$. Find the domain and classify it (open/closed).
* **Thinking Method:** Two hazards: root and fraction.
* **Worked-Out Solution:**
  1. Numerator root: $y \\ge 0$.
  2. Denominator: $x - 1 \\ne 0 \\implies x \\ne 1$.
  3. The region is the upper half-plane, excluding the vertical line piece at $x=1$.
  4. It contains the boundary $y=0$ (except at $(1,0)$), but is missing the "fences" at $x=1$. So it's neither open nor closed!
* **Key Takeaway:** Regions can easily be neither open nor closed if they have some, but not all, boundary points.
* **Common mistake: Misidentifying open vs closed when boundary is partially included.**

**Example 10: 3D Level Surfaces**
* **Problem:** Describe level surfaces of $f(x,y,z) = x^2 + y^2 - z$.
* **Thinking Method:** Set to $c$ and analyze shape.
* **Worked-Out Solution:**
  1. $c = x^2 + y^2 - z \\implies z = x^2 + y^2 - c$.
  2. These are all paraboloids shifted vertically along the z-axis!
* **Key Takeaway:** Sometimes the whole shape moves instead of just changing radius.
* **Figure Reference: Figure 14.8 for 3D interior/boundary.**

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
- Ellipse: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$
- Parabola: $y = x^2$ (or $x = y^2$)

**Watch out for these common mistakes:**
- Including points where denominator = 0 in the domain.
- Forgetting that $\\ln(x^2+y^2)$ is undefined at the origin.
- Confusing open/closed: strict inequality = open, inclusive = closed.
- Thinking level curves are 3D – they are 2D curves in the domain.

## Chapter Assessment (5 exam‑level questions)

> **QUIZ:** Find the domain of f(x,y) = ln(4 - x² - y²). Is it open or closed? Bounded?
>
> 1. Find the domain of $f(x,y) = \\ln(4 - x^2 - y^2)$. Is it open or closed? Bounded?
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
> 4. The volume of a cylinder is $V(r,h) = \\pi r^2 h$. Describe the level curve $V = 100$. What does it represent physically?
> *(EE application)*

> **QUIZ:** Determine if the region { (x,y) | 1 < x² + y² ≤ 4 } is open, closed, or neither. Is it bounded?
>
> 5. Determine if the region $\\{ (x,y) \\mid 1 < x^2 + y^2 \\le 4 \\}$ is open, closed, or neither. Is it bounded?
> *(Source: COMSATS FA24 Q2c)*

\`▓▓▓░░░░░░░ 28%\` Course Progress
\`▓░░░░░░░░░ 10%\` Reinforcement Load
`

    const idx_ch14_1_start = content.indexOf('id: "chapter-14-1"');
    const md_start = content.indexOf('markdown: `', idx_ch14_1_start) + 'markdown: `\n'.length;
    const md_end = content.indexOf('\n`', md_start);
    
    content = content.substring(0, md_start) + new_14_1_raw.replace(/\\/g, '\\\\') + content.substring(md_end);

    const adds = {
        '14-2': `> **QUIZ:** Use polar coordinates to evaluate lim_{(x,y)->(0,0)} (x² y)/(x² + y²).
>
> 4. Use polar coordinates to evaluate $\\lim_{(x,y)\\to(0,0)} \\frac{x^2 y}{x^2 + y^2}$.
> *(Source: CUI Lahore SP22 Q2b)*

> **QUIZ:** Is the function f(x,y) = { (x³ - y³)/(x² + y²) for (x,y)≠(0,0), 0 at (0,0) } continuous at the origin? Justify.
>
> 5. Is the function $f(x,y) = \\begin{cases} \\frac{x^3 - y^3}{x^2 + y^2}, & (x,y) \\neq (0,0) \\\\ 0, & (x,y) = (0,0) \\end{cases}$ continuous at the origin? Justify.
> *(Original)*

`,
        '14-3': `> **QUIZ:** Find f_xy and f_yx for f(x,y) = e^{xy} sin(x+y). Verify Clairaut’s theorem.
>
> 4. Find $f_{xy}$ and $f_{yx}$ for $f(x,y) = e^{xy} \\sin(x+y)$. Verify Clairaut’s theorem.
> *(Source: COMSATS FA24 Q3b)*

> **QUIZ:** If z = x³ y² + 2x y⁴, find ∂²z/∂x∂y at (1, -1).
>
> 5. If $z = x^3 y^2 + 2x y^4$, find $\\frac{\\partial^2 z}{\\partial x \\partial y}$ at $(1, -1)$.
> *(Original)*

`,
        '14-4': `> **QUIZ:** If w = e^{xy} ln(z), x = t², y = sin t, z = cos t, find dw/dt at t = 0.
>
> 4. If $w = e^{xy} \\ln(z)$, $x = t^2$, $y = \\sin t$, $z = \\cos t$, find $\\frac{dw}{dt}$ at $t = 0$.
> *(Source: CUI Sahiwal FA25 Q4a)*

> **QUIZ:** Use implicit differentiation to find ∂z/∂y for x² y + y z² + z x = 0 at (1,1,-1).
>
> 5. Use implicit differentiation to find $\\frac{\\partial z}{\\partial y}$ for $x^2 y + y z^2 + z x = 0$ at $(1,1,-1)$.
> *(Original)*

`,
        '14-5': `> **QUIZ:** Find the direction(s) of zero change for f(x,y) = x² - 2xy + y² at (1,1).
>
> 4. Find the direction(s) of zero change for $f(x,y) = x^2 - 2xy + y^2$ at $(1,1)$.
> *(Source: CUI Lahore SP22 Q5a)*

> **QUIZ:** The temperature in a room is T(x,y,z) = 100 - x² - y² - z². A bug at (1,2,2) wants to cool fastest. In which direction should it move? What is the rate of cooling?
>
> 5. The temperature in a room is $T(x,y,z) = 100 - x^2 - y^2 - z^2$. A bug at $(1,2,2)$ wants to cool fastest. In which direction should it move? What is the rate of cooling?
> *(EE application)*

`,
        '14-6': `> **QUIZ:** Find the linear approximation of f(x,y) = √(x² + y²) at (3,4) and use it to estimate √(3.1² + 3.9²).
>
> 4. Find the linear approximation of $f(x,y) = \\sqrt{x^2 + y^2}$ at $(3,4)$ and use it to estimate $\\sqrt{3.1^2 + 3.9^2}$.
> *(Source: CUI Lahore SP22 Q4a)*

> **QUIZ:** The resistance of a wire is R = ρ L / A. If ρ = 1.68×10⁻⁸ Ω·m, L = 10.0 m with error ±0.1 m, A = 2.0×10⁻⁶ m² with error ±0.05×10⁻⁶, estimate the maximum possible error in R.
>
> 5. The resistance of a wire is $R = \\rho L / A$. If $\\rho = 1.68\\times10^{-8} \\Omega\\cdot\\text{m}$, $L = 10.0\\text{ m}$ with error $\\pm0.1\\text{ m}$, $A = 2.0\\times10^{-6}\\text{ m}^2$ with error $\\pm0.05\\times10^{-6}$, estimate the maximum possible error in $R$.
> *(EE application)*

`,
        '14-7': `> **QUIZ:** Find all critical points of f(x,y) = x³ + y³ - 3xy and classify them.
>
> 4. Find all critical points of $f(x,y) = x^3 + y^3 - 3xy$ and classify them.
> *(Source: COMSATS FA24 Q5b)*

> **QUIZ:** Find the absolute maximum and minimum of f(x,y) = x² + 2y² - x on the disk x² + y² ≤ 1.
>
> 5. Find the absolute maximum and minimum of $f(x,y) = x^2 + 2y^2 - x$ on the disk $x^2 + y^2 \\le 1$.
> *(Original)*

`
    };

    ['14-2', '14-3', '14-4', '14-5', '14-6', '14-7'].forEach(ch_suffix => {
        const chapter_id = 'id: "chapter-' + ch_suffix + '"';
        const idx_ch_start = content.indexOf(chapter_id);
        
        let md_end_for_ch = content.indexOf('\\n<br/>', idx_ch_start);
        if (md_end_for_ch === -1) {
            md_end_for_ch = content.indexOf('<br/>', idx_ch_start);
            if (md_end_for_ch === -1) {
                // Find end
                md_end_for_ch = content.indexOf('\\n`\\n', idx_ch_start);
                // Adjust back
                const pBar = content.lastIndexOf('`▓▓', md_end_for_ch);
                if (pBar > 0) {
                     md_end_for_ch = content.lastIndexOf('\\n', pBar - 1);
                }
            }
        }
        
        let text_to_insert = adds[ch_suffix].replace(/\\\\/g, '\\\\\\\\'); 
        // We actually want the final string to have \\lim so writing to file with \\lim is enough if we don't backtick escape it further.
        // But since we are replacing the raw string of the file, and that file uses backticks...
        
        content = content.substring(0, md_end_for_ch) + '\\n' + adds[ch_suffix].replace(/\\/g, '\\\\') + content.substring(md_end_for_ch);
    });

    fs.writeFileSync('src/data.ts', content, 'utf-8');
}

updateData();
