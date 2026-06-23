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

const md14_1 = `## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \\ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \\ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \\dots x_n$ are the independent variables. 

### 2. Domains and Ranges
Functions of multiple variables have domains constrained by avoiding division by zero and even roots of negative numbers.
- **Interior point:** Center of a disk (or solid ball in 3D) lying entirely in $R$.
- **Boundary point:** Every disk centered at the point contains points inside $R$ and outside $R$.
- **Open region:** Consists entirely of interior points.
- **Closed region:** Contains all its boundary points.
- **Bounded region:** Lies inside a disk of fixed radius. Otherwise unbounded.

### 3. Graphs, Level Curves, and Contours
For $f(x,y)$:
- **Level Curve:** Set of points in the plane where $f(x,y) = c$ (a constant).
- **Surface:** The graph $z = f(x,y)$ in 3D space.
- **Contour Curve:** The curve resulting from the intersection of $z = f(x,y)$ and the plane $z = c$.

For $f(x,y,z)$:
- **Level Surface:** Set of points in space where $f(x,y,z) = c$.

---

## ELI5 Explanation
Imagine a topographic map of a mountain. The mountain itself is a 3D surface (a function of two variables $z = f(x,y)$). The map is flat, but it has lines drawn on it. All points on one line are exactly the same height on the mountain. These are called **level curves**. Level curves let you look at a 2D drawing and fully understand the 3D shape!

---

## Detailed Worked Examples

### Example 1: Describing the Domain
**Question:** Find the domain of $f(x,y) = \\sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \\ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\\ge$).
3. Test a point, say $(0,1)$. $1 \\ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \\ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \\Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \\Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \\Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \\sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \\ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

*Sketching Guide for student:* 
Draw 3D axes. Draw a sphere centered at the origin. Draw a larger sphere around it. Slice a wedge out to show they form concentric shells! The values represent distance from origin.

**Solution:**
The level surfaces are concentric spheres centered at the origin. As $c$ increases, the spheres expand.

---

## Visuals / Graphs

### 1. Paraboloid and Level Curves
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="surface"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Describe the domain and range of f(x,y) = 1 / (xy)"></div>
<div class="user-quiz" data-question="2. Identify the level curves of z = y - x²"></div>
`;

const md14_2 = `## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\\lim_{(x,y) \\to (x_0, y_0)} f(x,y) = L$$
if, for every number $\\epsilon > 0$, there exists a corresponding number $\\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \\epsilon \\quad \\text{whenever} \\quad 0 < \\sqrt{(x-x_0)^2 + (y-y_0)^2} < \\delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\\lim_{(x,y) \\to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\\lim_{(x,y) \\to (x_0,y_0)} f(x,y)$ exists.
3. $\\lim_{(x,y) \\to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\\lim_{(x,y) \\to (0,0)} \\frac{x^2 - xy}{\\sqrt{x} - \\sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\\sqrt{x} + \\sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\\sqrt{x} - \\sqrt{y})(\\sqrt{x} + \\sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \\ge 0, y \\ge 0, x \\neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\\begin{align*} \\lim \\frac{x(x-y)}{\\sqrt{x} - \\sqrt{y}} &= \\lim \\frac{x(\\sqrt{x}-\\sqrt{y})(\\sqrt{x}+\\sqrt{y})}{\\sqrt{x}-\\sqrt{y}} \\\\ &= \\lim x(\\sqrt{x} + \\sqrt{y}) \\\\ &= 0(\\sqrt{0} + \\sqrt{0}) = 0 \\end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\\lim_{(x,y)\\to(0,0)} \\frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \\frac{2x^2(mx)}{x^4+m^2x^2} = \\frac{2mx^3}{x^2(x^2+m^2)} = \\frac{2mx}{x^2+m^2}$.
As $x \\to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\\begin{align*} f(x, kx^2) &= \\frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\\\ &= \\frac{2kx^4}{x^4 + k^2x^4} \\\\ &= \\frac{2k}{1+k^2} \\end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\\lim_{(x,y)\\to(0,0)} \\frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \\cos \\theta$, $y = r \\sin \\theta$. $x^2+y^2 = r^2$. As $(x,y) \\to (0,0)$, $r \\to 0$ independently of $\\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\\begin{align*} \\lim_{r \\to 0} \\frac{r^3 \\cos^3 \\theta}{r^2} &= \\lim_{r \\to 0} r \\cos^3 \\theta \\end{align*}$
Since $|\\cos^3 \\theta| \\le 1$, the expression is bounded by $-r \\le r\\cos^3\\theta \\le r$. By the Squeeze Theorem, as $r \\to 0$, the limit is $0$, regardless of $\\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>
`;

const md14_3 = `## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\\frac{\\partial f}{\\partial x}, f_x, \\frac{\\partial z}{\\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\\partial f/\\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\\partial f/\\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\\partial f/\\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \\frac{\\partial^2 f}{\\partial x^2}$
- $f_{yy} = \\frac{\\partial^2 f}{\\partial y^2}$
- $f_{xy} = \\frac{\\partial^2 f}{\\partial y \\partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \\frac{\\partial^2 f}{\\partial x \\partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\\Delta z$ can be expressed as:
$$\\Delta z = f_x \\Delta x + f_y \\Delta y + \\epsilon_1 \\Delta x + \\epsilon_2 \\Delta y$$
where $\\epsilon_1, \\epsilon_2 \\to 0$ as $\\Delta x, \\Delta y \\to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \\sin(xy)$, find $\\partial f / \\partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\\begin{align*} \\frac{\\partial f}{\\partial y} &= \\frac{\\partial}{\\partial y}(y \\sin(xy)) &&\\text{Step 1: Set up product rule}. \\\\ &= y \\cdot \\frac{\\partial}{\\partial y}(\\sin(xy)) + \\sin(xy) \\cdot \\frac{\\partial}{\\partial y}(y) &&\\text{Step 2: Apply product rule}. \\\\ &= y \\cdot (\\cos(xy) \\cdot x) + \\sin(xy) \\cdot 1 &&\\text{Step 3: Chain rule on inner function } xy \\text{ treating x as constant}. \\\\ &= xy \\cos(xy) + \\sin(xy) &&\\text{Step 4: Cleanup}. \\end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\\partial z/\\partial x$ if $yz - \\ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\\begin{align*} \\frac{\\partial}{\\partial x}(yz - \\ln z) &= \\frac{\\partial}{\\partial x}(x + y) &&\\text{Step 1: Differentiate both sides wrt x}. \\\\ y \\frac{\\partial z}{\\partial x} - \\frac{1}{z} \\frac{\\partial z}{\\partial x} &= 1 + 0 &&\\text{Step 2: Normal diff rules, tacking on } \\partial z/\\partial x \\text{ where z is modified}. \\\\ \\frac{\\partial z}{\\partial x} \\left(y - \\frac{1}{z}\\right) &= 1 &&\\text{Step 3: Factor out derivative}. \\\\ \\frac{\\partial z}{\\partial x} &= \\frac{1}{y - \\frac{1}{z}} = \\frac{z}{yz - 1} &&\\text{Step 4: Algebra to clear fractions}. \\end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \\cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\\begin{align*} f_x &= \\cos y + y e^x &&\\text{Step 1: Diff wrt x}. \\\\ f_{xy} &= -\\sin y + e^x &&\\text{Step 2: Diff } f_x \\text{ wrt y}. \\end{align*}$

$\\begin{align*} f_y &= -x \\sin y + e^x &&\\text{Step 3: Diff original wrt y}. \\\\ f_{yx} &= -\\sin y + e^x &&\\text{Step 4: Diff } f_y \\text{ wrt x}. \\end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>
`;

replaceMarkdown('chapter-14-1', md14_1);
replaceMarkdown('chapter-14-2', md14_2);
replaceMarkdown('chapter-14-3', md14_3);

fs.writeFileSync('src/data.ts', content, 'utf8');
