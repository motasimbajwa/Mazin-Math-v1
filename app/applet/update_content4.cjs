const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

function replaceMarkdown(chapterId, newMarkdown) {
    const startIdx = content.indexOf(`id: "${chapterId}"`);
    if (startIdx === -1) {
        console.log("Not found chap: " + chapterId);
        return;
    }
    const mdStartStr = 'markdown: `';
    const mdStartIdx = content.indexOf(mdStartStr, startIdx) + mdStartStr.length;
    let nextChapIdx = content.indexOf(`\n  },\n  {\n    id: "chapter-`, mdStartIdx);
    if (nextChapIdx === -1) {
        nextChapIdx = content.lastIndexOf(`\n  }\n]`);
    }
    const mdEndIdx = content.lastIndexOf('`', nextChapIdx);
    
    content = content.substring(0, mdStartIdx) + "\n" + newMarkdown + "\n" + content.substring(mdEndIdx);
}

const md14_4 = `## Introduction and Core Concepts

In 14.4, we extend the Chain Rule to functions of several variables. When $w = f(x,y,z)$ and $x,y,z$ are functions of $t$ (or even $r, s$), we can calculate the derivative of $w$ with respect to the underlying variables without massive algebraic substitutions.

### 1. Chain Rule for One Independent Variable
If $w = f(x,y)$ is differentiable and $x=x(t)$, $y=y(t)$ are differentiable, then $w$ is a differentiable function of $t$, and:
$$\\frac{dw}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$$

If there are three intermediate variables $x, y, z$:
$$\\frac{dw}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt} + \\frac{\\partial f}{\\partial z}\\frac{dz}{dt}$$

### 2. Chain Rule for Multiple Independent Variables
Suppose $w = f(x,y,z)$ and $x, y, z$ are functions of two variables $r$ and $s$. Then $w$ has partial derivatives with respect to $r$ and $s$:
$$\\frac{\\partial w}{\\partial r} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial r} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial r} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial r}$$
$$\\frac{\\partial w}{\\partial s} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial s} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial s} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial s}$$

### 3. Tree Diagrams
A **tree diagram** provides a systematic way to remember the Chain Rule. 
1. Place the dependent variable ($w$) at the top.
2. Draw branches to the intermediate variables ($x, y, z$).
3. Draw sub-branches from each intermediate variable to the independent variables ($u, v, t, \\text{etc}$).
4. To find the derivative of the top variable with respect to a bottom variable, trace ALL paths connecting them, multiply the derivatives along each path, and sum the paths together.

### 4. Implicit Differentiation Revisited
If $F(x,y) = 0$ defines $y$ implicitly as a function of $x$, and $F$ is differentiable:
$$\\frac{dy}{dx} = -\\frac{F_x}{F_y}$$
provided $F_y \\neq 0$.

If $F(x,y,z) = 0$ defines $z$ implicitly as a function of $x$ and $y$:
$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} \\quad \\text{and} \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$
provided $F_z \\neq 0$.

---

## ELI5 Explanation
Imagine a company where the CEO ($w$) depends on Regional Managers ($x,y,z$) to make profits. Each Regional Manager depends on Local Salesmen ($r,s$). To find out how much the CEO's profit changes when Salesman $r$ sells more, you have to add up the contributions flowing through *every* Regional Manager that Salesman $r$ reports to. That’s exactly what the tree diagram and the summation formula do!

---

## Detailed Worked Examples

### Example 1: Chain Rule (1 Independent Variable)
**Question:** Find $dw/dt$ at $t=\\pi$ given $w = x^2y$, $x = \\cos t$, $y = \\sin t$.

**Thought Process:** 
Use the chain rule formula: $dw/dt = (\\partial w/\\partial x)(dx/dt) + (\\partial w/\\partial y)(dy/dt)$.
Calculate derivatives at $t = \\pi$. First, find $x$ and $y$ at $t = \\pi$.
$x(\\pi) = \\cos(\\pi) = -1$.
$y(\\pi) = \\sin(\\pi) = 0$.

**Solution:**
$\\begin{align*} \\frac{\\partial w}{\\partial x} &= 2xy && \\frac{\\partial w}{\\partial y} = x^2 \\\\ \\frac{dx}{dt} &= -\\sin t && \\frac{dy}{dt} = \\cos t \\\\ \\frac{dw}{dt} &= (2xy)(-\\sin t) + (x^2)(\\cos t) \\end{align*}$
At $t=\\pi$: $x=-1$, $y=0$.
$\\begin{align*} \\frac{dw}{dt} &= (2(-1)(0))(-\\sin \\pi) + ((-1)^2)(\\cos \\pi) \\\\ &= (0)(0) + (1)(-1) = -1. \\end{align*}$

### Example 2: Tree Diagram for Complex Variables
**Question:** If $w=x^2+y^2$, where $x=r-s$ and $y=r+s$, find $\\partial w/ \\partial r$.

**Thought Process:**
Diagram: $w$ branches to $x$ and $y$. Both branch to $r$ and $s$.
Path to $r$: $w \\to x \\to r$ AND $w \\to y \\to r$.
Formula: $(\\partial w/\\partial x)(\\partial x/\\partial r) + (\\partial w/\\partial y)(\\partial y/\\partial r)$.

*Sketching Guide for student:* Draw $w$ at the top node. Draw two downward lines to $x$ and $y$. Draw two lines descending from $x$ to $r$ and $s$, and two from $y$ to $r$ and $s$. Trace the lines arriving at $r$.

**Solution:**
$\\begin{align*} \\frac{\\partial w}{\\partial x} &= 2x  && \\frac{\\partial x}{\\partial r} = 1 \\\\ \\frac{\\partial w}{\\partial y} &= 2y  && \\frac{\\partial y}{\\partial r} = 1 \\\\ \\frac{\\partial w}{\\partial r} &= (2x)(1) + (2y)(1) = 2x + 2y \\end{align*}$
Substitute for $x$ and $y$:
$2(r-s) + 2(r+s) = 2r - 2s + 2r + 2s = 4r$.

### Example 3: Implicit Differentiation
**Question:** Find $\\partial z/\\partial x$ if $x^2 y + y^2 z - z^3 = 5$.

**Thought Process:**
Let $F(x,y,z) = x^2 y + y^2 z - z^3 - 5 = 0$.
The formula is $\\partial z/ \\partial x = -F_x / F_z$.

**Solution:**
$\\begin{align*} F_x &= 2xy \\\\ F_z &= y^2 - 3z^2 \\\\ \\frac{\\partial z}{\\partial x} &= -\\frac{2xy}{y^2 - 3z^2} \\end{align*}$

---

## Visuals / Graphs

### 1. Tree Diagram Logic
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_tree"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute dw/dt if w = xy + z, x = cos t, y = sin t, z = t"></div>
<div class="user-quiz" data-question="2. Find dy/dx implicitly if x^3 - 2y^2 + xy = 0"></div>
`;

const md14_5 = `## Introduction and Core Concepts

In section 14.5, we introduce the **Directional Derivative**, which calculates the rate of change of a surface in *any* arbitrary direction. The **Gradient Vector** is the magical mathematical tool that points exactly in the direction of steepest ascent!

### 1. Directional Derivatives in the Plane
The derivative of $f(x,y)$ at $P_0(x_0,y_0)$ in the direction of the *unit vector* $\\mathbf{u} = u_1\\mathbf{i} + u_2\\mathbf{j}$ is:
$$D_{\\mathbf{u}} f = \\lim_{s \\to 0} \\frac{f(x_0+su_1, y_0+su_2) - f(x_0,y_0)}{s}$$
This calculates the slope of the surface if you slice it with a vertical plane pointing in the direction $\\mathbf{u}$.

### 2. The Gradient Vector
The **gradient vector** (or gradient) of $f(x,y)$ at a point $P_0(x_0,y_0)$ is the vector comprised of the partial derivatives evaluated at that point:
$$\\nabla f = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j}$$
It is read "del $f$" or "grad $f$".

### 3. Calculating the Directional Derivative
If $f$ is differentiable, the directional derivative is the dot product of the gradient and the unit vector direction!
$$D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u}$$

**IMPORTANT:** The vector defining the direction **must be a unit vector**. If given $\\mathbf{v}$, you must first calculate $\\mathbf{u} = \\mathbf{v}/|\\mathbf{v}|$.

### 4. Properties of the Directional Derivative
Since $D_{\\mathbf{u}} f = |\\nabla f| |\\mathbf{u}| \\cos \\theta = |\\nabla f| \\cos \\theta$:
1. **Maximum Increase:** $f$ increases most rapidly when $\\cos \\theta = 1$. The maximum rate of increase is $|\\nabla f|$ and occurs in the exact direction of $\\nabla f$.
2. **Maximum Decrease:** $f$ decreases most rapidly when $\\cos \\theta = -1$. The maximum rate of decrease is $-|\\nabla f|$ and occurs in the direction $-\\nabla f$.
3. **Zero Change:** Any direction $\\mathbf{u}$ orthogonal to $\\nabla f$ ($\\theta = \\pi/2$) is a direction of zero change ($D_{\\mathbf{u}}f = 0$).

### 5. Gradients and Level Curves
At every point in the domain of a differentiable function, the gradient vector $\\nabla f$ is **normal (perpendicular) to the level curve** passing through that point.
Therefore, the equation of the tangent line to the level curve $f(x,y) = c$ at $(x_0,y_0)$ is:
$$f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) = 0$$

---

## ELI5 Explanation
Imagine you are standing on a ski slope. The gradient $\\nabla f$ is an arrow painted on the ground between your skis. It *always* points straight up the steepest part of the hill. If you want to know how steep your path will be if you turn and walk sideways, you just take the dot product (comparative angle) of your new walking direction $\\mathbf{u}$ against the steep-up arrow! If you walk 90 degrees away from the steep-up arrow, your path is perfectly flat.

---

## Detailed Worked Examples

### Example 1: Calculating the Directional Derivative
**Question:** Find the derivative of $f(x,y) = xe^y + \\cos(xy)$ at $(2,0)$ in the direction of $\\mathbf{v} = 3\\mathbf{i} - 4\\mathbf{j}$.

**Thought Process:** 
First, the direction $\\mathbf{v}$ is NOT a unit vector. I must normalize it.
$\\mathbf{u} = \\frac{\\mathbf{v}}{|\\mathbf{v}|}$.
Then I need to find the gradient $\\nabla f$, plug in the point $(2,0)$, and dot product it with $\\mathbf{u}$.

*Sketching Guide for student:* Draw the $xy$-axes. Mark point $(2,0)$. Draw a tiny direction vector $\\mathbf{u}$ starting from $(2,0)$ pointing mostly right and slightly down. The result will tell us if the 3D surface is rising or falling in that direction!

**Solution:**
$\\begin{align*} |\\mathbf{v}| &= \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5 &&\\text{Step 1: Normalize vector}. \\\\ \\mathbf{u} &= \\frac{3}{5}\\mathbf{i} - \\frac{4}{5}\\mathbf{j} && \\\\ f_x &= e^y - y\\sin(xy) \\implies f_x(2,0) = e^0 - 0 = 1 &&\\text{Step 2: Compute partials}. \\\\ f_y &= xe^y - x\\sin(xy) \\implies f_y(2,0) = 2e^0 - 0 = 2 && \\\\ \\nabla f(2,0) &= 1\\mathbf{i} + 2\\mathbf{j} &&\\text{Step 3: Construct gradient vector}. \\\\ D_{\\mathbf{u}} f &= \\nabla f \\cdot \\mathbf{u} = (1)\\left(\\frac{3}{5}\\right) + (2)\\left(-\\frac{4}{5}\\right) &&\\text{Step 4: Dot product}. \\\\ &= \\frac{3}{5} - \\frac{8}{5} = -1. &&\\text{Step 5: Simplify}. \\end{align*}$
The surface is dropping at a rate of $-1$ in that direction.

### Example 2: Directions of Extreme Change
**Question:** Find the directions in which $f(x,y) = \\frac{x^2}{2} + \\frac{y^2}{2}$ increases most rapidly at $(1,1)$, decreases most rapidly, and the direction of zero change.

**Thought Process:**
Most rapid increase = direction of gradient. 
Most rapid decrease = direction of negative gradient.
Zero change = orthogonal to gradient.

**Solution:**
$\\begin{align*} \\nabla f &= \\langle x, y \\rangle = \\langle 1, 1 \\rangle \\text{ at } (1,1). \\\\ \\text{Increase:}~ & \\mathbf{u} = \\frac{\\langle 1, 1 \\rangle}{\\sqrt{2}} = \\left\\langle \\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}} \\right\\rangle. \\\\ \\text{Decrease:}~ & \\mathbf{u} = -\\left\\langle \\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}} \\right\\rangle = \\left\\langle -\\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}} \\right\\rangle. \\\\ \\text{Zero change:}~ & \\text{Dot product must be 0}. \\langle a, b \\rangle \\cdot \\langle 1, 1 \\rangle = 0 \\implies a = -b. \\\\ & \\text{Unit vectors are } \\left\\langle \\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}} \\right\\rangle \\text{ and } \\left\\langle -\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}} \\right\\rangle. \\end{align*}$

### Example 3: Tangent line to a Level Curve
**Question:** Find an equation for the tangent to the ellipse $\\frac{x^2}{4} + y^2 = 2$ at the point $(-2,1)$.

**Thought Process:**
We can view this ellipse as a level curve $f(x,y) = c$. So, $f(x,y) = x^2/4 + y^2 = 2$.
The gradient is perpendicular to the level curve. Any line perpendicular to a normal vector $\\mathbf{N} = \\langle A, B \\rangle$ has the form $A(x-x_0) + B(y-y_0) = 0$.

*Sketching Guide for student:* Draw the ellipse. Mark $(-2,1)$. Draw the normal vector pointing outward, then draw the tangent line orthogonal across it touching the rim.

**Solution:**
$\\begin{align*} \\nabla f &= \\frac{x}{2}\\mathbf{i} + 2y\\mathbf{j} &&\\text{Step 1: Get general gradient}. \\\\ \\nabla f(-2,1) &= -1\\mathbf{i} + 2\\mathbf{j} &&\\text{Step 2: Gradient at point forms the Normal vector N}. \\\\ A(x-x_0) + B(y-y_0) &= 0 \\implies -1(x + 2) + 2(y - 1) = 0 &&\\text{Step 3: Point-normal form of a line}. \\\\ -x - 2 + 2y - 2 &= 0 \\implies x - 2y = -4 &&\\text{Step 4: Algebraic simplification}. \\end{align*}$

---

## Visuals / Graphs

### 1. Gradients and Ascent Paths
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="gradient_vector"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the directional derivative of f(x,y) = x²y at (1,2) towards the origin."></div>
<div class="user-quiz" data-question="2. Find the direction of steepest descent for z = ln(x²+y²) at (1,1)."></div>
`;

const md14_6 = `## Introduction and Core Concepts

In section 14.6, we extend the concept of a tangent line to 3D space. Level surfaces map a 4D function $w = f(x,y,z)$ into a physical 3D space. The gradient vector is our master tool for determining perpendicular normals to these surfaces.

### 1. Tangent Planes and Normal Lines
If $f$ is differentiable and $P_0(x_0, y_0, z_0)$ is a point on the surface $f(x,y,z) = c$ where $\\nabla f \\neq 0$, then:
- $\\nabla f|_{P_0}$ is **normal (perpendicular) to the surface**.
- **Tangent Plane Equation:** The plane through $P_0$ normal to $\\nabla f|_{P_0}$:
  $$f_x(P_0)(x - x_0) + f_y(P_0)(y - y_0) + f_z(P_0)(z - z_0) = 0$$
- **Normal Line Equation:** The line through $P_0$ parallel to $\\nabla f|_{P_0}$:
  $$x = x_0 + f_x(P_0)t \\quad y = y_0 + f_y(P_0)t \\quad z = z_0 + f_z(P_0)t$$

### 2. Tangent Planes for $z = f(x,y)$
When a surface is defined explicitly as $z = f(x,y)$, we treat the surface as the level surface $F(x,y,z) = f(x,y) - z = 0$.
The tangent plane equation simplifies beautifully to:
$$f_x(x_0,y_0)(x - x_0) + f_y(x_0,y_0)(y - y_0) - (z - z_0) = 0$$

### 3. Estimating Change (Differentials)
Just as $\\Delta y \\approx f'(x)dx$ in 1D, we can use tangent planes to estimate small changes in 3D functions.
The **total differential** of $f(x,y,z)$ is:
$$df = f_x dx + f_y dy + f_z dz$$
It tells us roughly how much $f$ changes when we step slightly from $P_0(x_0, y_0, z_0)$ to a nearby point $(x_0+dx, y_0+dy, z_0+dz)$.

If $df$ is exactly the change along the flat tangent plane, it serves as a highly accurate linear approximation to the true curved change $\\Delta f$.

**Absolute and Percentage Error:**
- True Variation: $\\Delta f$
- Estimated Variation: $df$
- Percentage Error: $\\frac{df}{f(P_0)} \\times 100\\%$

### 4. Functions of More than Three Variables
In economics and science, functions can have any number of variables. The mathematics is structurally identical: the partial derivatives form the components of the gradient, and the differential $df$ expands by simply summing up $f_{x_i} dx_i$ for all inputs.

---

## ELI5 Explanation
If you balance a flat piece of cardboard on the curved top of a basketball, that cardboard is the **Tangent Plane**. Where the cardboard perfectly kisses the ball is $P_0$. The vector pointing straight up from the cardboard away from the ball's center is the **Normal Vector** ($\\nabla f$). You can use the height of the cardboard to guess the height of the ball for very tiny steps away from $P_0$.

---

## Detailed Worked Examples

### Example 1: Finding a Tangent Plane to a Level Surface
**Question:** Find the tangent plane and normal line of $x^2 + y^2 + z - 9 = 0$ at the point $P_0(1, 2, 4)$.

**Thought Process:** 
Let $f(x,y,z) = x^2+y^2+z-9$. Find the gradient $\\nabla f$ at $(1,2,4)$. The resulting vector components become coefficients $A,B,C$ in the plane equation $A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$. And the components are the velocities in the parametric line equations.

*Sketching Guide for student:* Sketch a paraboloid opening downward $z = 9-x^2-y^2$. Mark $(1,2,4)$ on the slope. Draw a line popping out normal to the surface, and flat plane balanced exactly at the dot!

**Solution:**
$\\begin{align*} \\nabla f &= 2x\\mathbf{i} + 2y\\mathbf{j} + 1\\mathbf{k} &&\\text{Step 1: Calculate partial derivatives}. \\\\ \\nabla f(1,2,4) &= 2(1)\\mathbf{i} + 2(2)\\mathbf{j} + 1\\mathbf{k} = \\langle 2, 4, 1 \\rangle &&\\text{Step 2: Evaluate at } P_0. \\end{align*}$

**Tangent Plane:**
$(2)(x-1) + (4)(y-2) + (1)(z-4) = 0$
$2x - 2 + 4y - 8 + z - 4 = 0 \\implies 2x + 4y + z = 14$.

**Normal Line:**
$x = 1 + 2t, \\quad y = 2 + 4t, \\quad z = 4 + t$.

### Example 2: Tangent Line to intersection of two surfaces
**Question:** The surfaces $f(x,y,z) = x^2+y^2-2=0$ and $g(x,y,z) = x+z-4=0$ meet in an ellipse $E$. Find the parametric equations for the line tangent to $E$ at $P_0(1,1,3)$.

**Thought Process:** 
If the curve represents the intersection of two surfaces, the tangent line to the curve must be perpendicular to the normals of *both* surfaces! Therefore, the direction vector $\\mathbf{v}$ of the tangent line is the cross product of the two gradients: $\\mathbf{v} = \\nabla f \\times \\nabla g$.

*Sketching Guide for student:* Sketch a cylinder. Cut it with a diagonal flat plane! At the intersection (the rim of the cut), the cylinder normal shoots strictly sideways and the plane normal aims diagonally. Their cross product shoots forward along the curve.

**Solution:**
$\\begin{align*} \\nabla f(1,1,3) &= \\langle 2x, 2y, 0 \\rangle = \\langle 2, 2, 0 \\rangle \\\\ \\nabla g(1,1,3) &= \\langle 1, 0, 1 \\rangle \\end{align*}$
Take cross product:
$\\begin{align*} \\mathbf{v} = \\langle 2, 2, 0 \\rangle \\times \\langle 1, 0, 1 \\rangle &= \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 2 & 2 & 0 \\\\ 1 & 0 & 1 \\end{vmatrix} \\\\ &= (2-0)\\mathbf{i} - (2-0)\\mathbf{j} + (0-2)\\mathbf{k} = \\langle 2, -2, -2 \\rangle \\end{align*}$

Tangent Line:
$x = 1 + 2t \\quad y = 1 - 2t \\quad z = 3 - 2t$.

### Example 3: Estimating Change with Differentials
**Question:** A cylindrical can is approximated to have $r = 10\\text{cm}$ and $h = 100\\text{cm}$. Suppose errors in measurements could be $dr = 0.1\\text{cm}$ and $dh = -0.1\\text{cm}$. Use differentials to estimate the maximum absolute error in calculating its volume $V = \\pi r^2 h$.

**Thought Process:**
The total differential $dV = V_r dr + V_h dh$. Compute partials $V_r$ and $V_h$ at $(10, 100)$ and put it all together.

**Solution:**
$\\begin{align*} V_r &= 2\\pi r h = 2\\pi(10)(100) = 2000\\pi &&\\text{Step 1: Calculate partials at operating values}. \\\\ V_h &= \\pi r^2 = \\pi(10)^2 = 100\\pi && \\\\ dV &= V_r dr + V_h dh &&\\text{Step 2: Total differential formula}. \\\\ dV &= (2000\\pi)(0.1) + (100\\pi)(-0.1) &&\\text{Step 3: Plug in measurement deltas}. \\\\ &= 200\\pi - 10\\pi = 190\\pi \\text{ cm}^3 &&\\text{Step 4: Evaluate}. \\end{align*}$
The estimated error in volume is $190\\pi \\approx 597$ cubic cm!

---

## Visuals / Graphs

### 1. Tangent Plane Approximation
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_plane"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Explicitly parameterize the tangent plane to z = x² + 2y² at (1,1,3)."></div>
<div class="user-quiz" data-question="2. Discuss relative error bounds when measuring volume of a cone using differentials."></div>
`;


replaceMarkdown('chapter-14-4', md14_4);
replaceMarkdown('chapter-14-5', md14_5);
replaceMarkdown('chapter-14-6', md14_6);

fs.writeFileSync('src/data.ts', content, 'utf8');
