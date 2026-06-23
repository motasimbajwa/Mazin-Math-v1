const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const md14_7 = `## Introduction and Core Concepts

In section 14.7, we turn our attention from calculating derivatives to applying them to find the peaks and valleys of surfaces in 3D space: the highest and lowest points. This corresponds perfectly to finding mountain peaks and valley bottoms on a topographic map.

### 1. Local Maxima and Minima
Let $f(x, y)$ be defined on a region $R$ containing the point $(a, b)$.
- $f(a, b)$ is a **local maximum** if $f(a,b) \\ge f(x,y)$ for all domain points in an open disk centered at $(a, b)$. Geometrically, this is a mountain peak on the surface $z = f(x,y)$.
- $f(a, b)$ is a **local minimum** if $f(a,b) \\le f(x,y)$ for all domain points in an open disk centered at $(a, b)$. Geometrically, this is a valley bottom.
At both of these points, if the tangent plane exists, it is perfectly horizontal!

### 2. First Derivative Test and Critical Points
Since a horizontal tangent plane implies that the surface is flat at that instant, both partial derivatives must be zero.
**First Derivative Test:** If $f(x,y)$ has a local extreme value at an interior point $(a,b)$, then $f_x(a,b) = 0$ and $f_y(a,b) = 0$.

A point where both partial derivatives are zero, or where one or both fail to exist, is called a **Critical Point**. 

### 3. Saddle Points
Not every critical point is a local extremum. Just like $y=x^3$ has a flat spot at $x=0$ but no extremum, a 3D surface can have a flat spot where the surface curves UP in one direction but DOWN in another direction. This looks exactly like a horse's saddle.
**Saddle Point Definition:** A point where the surface crosses its own horizontal tangent plane. Every open disk around the point contains both higher and lower values.

### 4. Second Derivative Test (The Hessian)
To classify a critical point $(a,b)$ where $f_x=0$ and $f_y=0$, we use the discriminant (or Hessian determinant), which is constructed from the second partial derivatives:
$$ D = f_{xx}(a,b) \\cdot f_{yy}(a,b) - [f_{xy}(a,b)]^2 $$
Or in determinant form:
$$ D = \\begin{vmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{vmatrix} $$

**The Test:**
If $D > 0$, the surface curves the *same way* in all directions.
- **Local Maximum:** $D > 0$ and $f_{xx} < 0$ (curving downward).
- **Local Minimum:** $D > 0$ and $f_{xx} > 0$ (curving upward).

If $D < 0$, the surface curves opposite ways in different directions.
- **Saddle Point:** $D < 0$.

If $D = 0$, the test is **inconclusive**.

### 5. Absolute Extrema on Closed, Bounded Regions
To find the absolute highest and lowest points on a closed region:
1. **List the interior points:** Find all critical points inside the region and evaluate $f$ there.
2. **List the boundary points:** Evaluate $f$ along the boundary lines/curves. This often requires parameterizing the boundary to turn it into a 1D calculus problem.
3. **Compare lists:** The largest evaluated value is the absolute maximum, and the smallest is the absolute minimum.

### 6. Least Squares and Regression Lines
An elegant application of minimizing a function of 2 variables is finding the line of best fit $y = mx + b$ for a set of data points $(x_1, y_1), \\dots, (x_n, y_n)$.
The "error" or sum of square vertical deviations is a function of the two variables $m$ and $b$:
$$ w(m, b) = \\sum_{k=1}^n (mx_k + b - y_k)^2 $$
To minimize this error, we take partial derivatives with respect to $m$ and $b$, set them to $0$, and solve the resulting system. The solution gives the **least squares line**:
$$ m = \\frac{(\\sum x_k)(\\sum y_k) - n \\sum x_k y_k}{(\\sum x_k)^2 - n \\sum x_k^2} $$
$$ b = \\frac{1}{n} \\left( \\sum y_k - m \\sum x_k \\right) $$

---

## ELI5 Explanation

Finding peaks and valleys (extrema) on a 3D surface is like exploring a mountain range. 
When you reach a peak, the ground beneath you is totally flat for an instant. That means your slope facing North-South ($f_y$) is zero, and your slope facing East-West ($f_x$) is zero. That flat spot is a **Critical Point**.
But beware! Just because it is flat doesn't mean it's a peak. You might be resting in a mountain pass between two higher peaks (a **Saddle Point**). If you walk North you go up, but if you walk East you go down. To verify if it's a true peak, we use the **Second Derivative Test** ($D$) to check if the ground curves downwards away from you in *every* direction.

---

## Detailed Worked Examples 

### Example 1: Finding Local Extreme Values
**Question:** Find the local extreme values of $f(x, y) = x^2 + xy + y^2 + 3x - 3y + 4$.

**Thought Process:** 
I am looking for local extrema, so my first step is always finding the critical points by setting both first partial derivatives $f_x$ and $f_y$ to zero. Since it is a polynomial, there are no points where the derivative doesn't exist. Once I find the critical point(s), I must calculate the second derivatives $f_{xx}, f_{yy}, f_{xy}$ to compute the discriminant $D$. Depending on the sign of $D$ and $f_{xx}$, I classify the point.

*Sketching Guide for student:* Imagine a bowl shifted in 3D space. Since $x^2$ and $y^2$ are positive and dominate at large values, the surface ultimately curves upwards everywhere, implying we will likely find a single valley bottom (minimum). Let's prove it algebraically.

**Solution:**
$$
\\begin{align*} f_x &= 2x + y + 3 = 0 &&\\text{Step 1: Compute first partial derivatives}. \\\\ f_y &= x + 2y - 3 = 0 && \\end{align*}
$$
Multiply the second equation by 2 giving $2x + 4y - 6 = 0$. Subtract the first equation from it:
$$
\\begin{align*} (2x + 4y - 6) - (2x + y + 3) &= 0 \\\\ 3y - 9 &= 0 \\implies y = 3. &&\\text{Step 2: Solve the system of linear equations}. \\end{align*}
$$
Plug $y=3$ back into the first equation: $2x + 3 + 3 = 0 \\implies 2x = -6 \\implies x = -3$.
The only critical point is $(-3, 3)$.

$$
\\begin{align*} f_{xx} &= 2, \\quad f_{yy} = 2, \\quad f_{xy} = 1 &&\\text{Step 3: Analyze using Second Derivative Test}. \\\\ D &= f_{xx}f_{yy} - (f_{xy})^2 = (2)(2) - (1)^2 = 3 && \\end{align*}
$$

Since $D = 3 > 0$ and $f_{xx} = 2 > 0$, the point $(-3, 3)$ gives a **local minimum**.
The minimum value is $f(-3,3) = (-3)^2 + (-3)(3) + (3)^2 + 3(-3) - 3(3) + 4 = -5$.

### Example 2: Identifying Saddle Points
**Question:** Find the local extreme values of $f(x,y) = y^2 - x^2$.

**Thought Process:**
A classic hyperbola! I expect a saddle point at the origin. I will take partials, find the critical point, and verify using the discriminant $D$. I must pay close attention to negative signs.

*Sketching Guide for student:* Draw the axes. If you slice it along the y-axis ($x=0$), it looks like $z = y^2$, a bowl opening upwards. If you slice it along the x-axis ($y=0$), it looks like $z = -x^2$, a bowl opening downwards. Combining these creates a Pringles chip shape (a saddle) crossing at the origin.

**Solution:**
$$
\\begin{align*} f_x &= -2x = 0 \\implies x = 0 &&\\text{Step 1: Find critical points}. \\\\ f_y &= 2y = 0 \\implies y = 0 && \\end{align*}
$$
Critical point is $(0,0)$.

$$
\\begin{align*} f_{xx} &= -2, \\quad f_{yy} = 2, \\quad f_{xy} = 0 &&\\text{Step 2: Compute discriminant } D. \\\\ D &= (-2)(2) - 0 = -4 < 0 && \\end{align*}
$$
Since $D < 0$, the function has a **saddle point** at $(0,0)$. It has no local extreme values.

### Example 3: Absolute Extrema on a Closed Region
**Question:** Find the absolute maximum and minimum values of $f(x, y) = 2 + 2x + 2y - x^2 - y^2$ on the closed triangular region in the first quadrant bounded by $x=0$, $y=0$, and $y = 9 - x$.

**Thought Process:**
This takes three major steps. First, the interior: find critical points where the gradient is zero and verify they lie inside the triangle. Second, the boundary: split the triangle into 3 segments. Parameterize each segment, substitute into $f(x,y)$ to create a 1D function, and use Calc 1 methods to find the maximum/minimum on that segment. Finally, pool all candidates together and select the largest and smallest.

*Sketching Guide for student:* Plot the x and y axes. Draw a line from $(9,0)$ to $(0,9)$. That line is $y = 9-x$. Shade the triangle bounded by the two axes and this hypotenuse. We must check the inner area AND walk along the three fence lines!

**Solution:**
**(a) Interior Points**
$$
\\begin{align*} f_x &= 2 - 2x = 0 \\implies x=1 \\\\ f_y &= 2 - 2y = 0 \\implies y=1 \\end{align*}
$$
The point $(1,1)$ lies strictly inside our triangle. We evaluate the function here:
$f(1,1) = 2 + 2(1) + 2(1) - 1^2 - 1^2 = 4$.

**(b) Boundary Segments**
**Segment 1: Bottom edge $y=0, 0 \\le x \\le 9$**
$f(x,0) = 2 + 2x - x^2$. This is a 1D parabola.
Derivative: $f'(x) = 2 - 2x = 0 \\implies x=1$.
Candidates on this edge are the endpoints and the critical point:
$f(0,0) = 2$
$f(1,0) = 3$
$f(9,0) = 2 + 18 - 81 = -61$

**Segment 2: Left edge $x=0, 0 \\le y \\le 9$**
Due to symmetry, $f(0,y) = 2 + 2y - y^2$. Critical point at $y=1$.
Candidates: $f(0,0)=2, f(0,1)=3, f(0,9)=-61$.

**Segment 3: Hypotenuse $y=9-x, 0 \\le x \\le 9$**
Substitute $y=9-x$ into $f$:
$$
\\begin{align*} f(x, 9-x) &= 2 + 2x + 2(9-x) - x^2 - (9-x)^2 \\\\ &= 20 - x^2 - (81 - 18x + x^2) \\\\ &= -61 + 18x - 2x^2 \\end{align*}
$$
Derivative: $f'(x) = 18 - 4x = 0 \\implies x = \\frac{18}{4} = \\frac{9}{2}$.
This point is $(9/2, 9/2)$.
Evaluate: $f(9/2, 9/2) = -61 + 18(9/2) - 2(81/4) = -61 + 81 - 40.5 = -20.5 = -41/2$.
Endpoints $(9,0)$ and $(0,9)$ are already evaluated as $-61$.

**(c) Summary**
We pool all the values we found: $\\{4, 2, 3, -61, -41/2\\}$.
The **absolute maximum is $4$**, occurring at the interior point $(1,1)$.
The **absolute minimum is $-61$**, occurring at boundary points $(9,0)$ and $(0,9)$.

### Example 4: Solving a Volume Problem with a Constraint (Without Multipliers)
**Question:** A delivery company only accepts rectangular boxes where the sum of the length and the girth (perimeter of a cross-section) does not exceed 108 inches. Find the dimensions of the box of largest volume. 

**Thought Process:**
If length is $x$ and cross section is $y \\times z$, girth is $2y+2z$. The constraint is $x + 2y + 2z = 108$.
I want to maximize volume $V = xyz$. I can eliminate $x$ by substituting $x = 108 - 2y - 2z$ into the volume equation. This turns a 3-variable constrained problem into a 2-variable unconstrained problem!

*Sketching Guide for student:* Sketch a long rectangular box pointing right along the x-axis. Label the front face height and width $z$ and $y$. Draw a red string looping around the $y$ and $z$ face representing girth.

**Solution:**
$$
\\begin{align*} V(y,z) &= (108 - 2y - 2z)yz = 108yz - 2y^2z - 2yz^2 &&\\text{Step 1: Create 2-variable function}. \\\\ V_y &= 108z - 4yz - 2z^2 = z(108 - 4y - 2z) = 0 &&\\text{Step 2: Partial w.r.t y}. \\\\ V_z &= 108y - 2y^2 - 4yz = y(108 - 2y - 4z) = 0 &&\\text{Step 3: Partial w.r.t z}. \\end{align*}
$$
Assuming $y \\neq 0$ and $z \\neq 0$ (which gives 0 volume), we divide out the leading terms yielding:
$108 - 4y - 2z = 0$
$108 - 2y - 4z = 0$

Multiply the first by 2: $216 - 8y - 4z = 0$. Subtract the second:
$(216 - 108) - 8y - (-2y) = 0 \\implies 108 - 6y = 0 \\implies y = 18$.
By symmetry, $z = 18$.
Then length $x = 108 - 2(18) - 2(18) = 108 - 72 = 36$.
The dimensions of maximum volume are $36 \\times 18 \\times 18$ inches. 
Maximum volume $V = 11,664 \\text{ in}^3$.

### Example 5: Least Squares Line 
**Question:** Find the least squares line $y = mx + b$ for the data points $(0,1), (1,3), (2,2), (3,4), (4,5)$.

**Thought Process:**
This is an empirical application. The goal is substituting data points into the predefined derivative sum equations for slope $m$ and y-intercept $b$. I'll build a neat table to calculate $\\sum x_k, \\sum y_k, \\sum x_k^2,$ and $\\sum x_k y_k$, then evaluate the formulas.

**Solution:**
| $k$ | $x_k$ | $y_k$ | $x_k^2$ | $x_k y_k$ |
|---|---|---|---|---|
| 1 | 0 | 1 | 0 | 0 |
| 2 | 1 | 3 | 1 | 3 |
| 3 | 2 | 2 | 4 | 4 |
| 4 | 3 | 4 | 9 | 12 |
| 5 | 4 | 5 | 16 | 20 |
| **Sum** | **$\\sum x = 10$** | **$\\sum y = 15$** | **$\\sum x^2 = 30$** | **$\\sum xy = 39$** |

Using $n = 5$ points:
$$
\\begin{align*} m &= \\frac{(\\sum x)(\\sum y) - n \\sum xy}{(\\sum x)^2 - n \\sum x^2} \\\\ m &= \\frac{(10)(15) - 5(39)}{(10)^2 - 5(30)} = \\frac{150 - 195}{100 - 150} = \\frac{-45}{-50} = 0.9 \\end{align*}
$$
$$
\\begin{align*} b &= \\frac{1}{n} \\left( \\sum y - m \\sum x \\right) \\\\ b &= \\frac{1}{5} (15 - 0.9(10)) = \\frac{15 - 9}{5} = \\frac{6}{5} = 1.2 \\end{align*}
$$

The least squares regression line is **$y = 0.9x + 1.2$**.

---

## Visuals / Graphs

### 1. Saddle Point and Critical Points
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="saddle_point"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the local maximum, minimum, and saddle points of f(x,y) = x^2 + xy + y^2 + 3x - 3y + 4."></div>
<div class="user-quiz" data-question="2. Find absolute extrema of f(x,y) = 2x^2 - 4x + y^2 - 4y + 1 on the closed triangular plate bounded by x=0, y=2, y=2x in the first quadrant."></div>
\`;

function replaceMarkdown(chapterId, newMarkdown) {
    const startIdx = content.indexOf(\`id: "\${chapterId}"\`);
    if (startIdx === -1) {
        console.log("Not found chap: " + chapterId);
        return;
    }
    const mdStartStr = 'markdown: \`';
    const mdStartIdx = content.indexOf(mdStartStr, startIdx) + mdStartStr.length;
    let nextChapIdx = content.indexOf(\`\\n  },\\n  {\\n    id: "chapter-\`, mdStartIdx);
    if (nextChapIdx === -1) {
        nextChapIdx = content.lastIndexOf(\`\\n  }\\n]\`);
    }
    const mdEndIdx = content.lastIndexOf('\`', nextChapIdx);
    
    content = content.substring(0, mdStartIdx) + "\\n" + newMarkdown + "\\n" + content.substring(mdEndIdx);
}

replaceMarkdown('chapter-14-7', md14_7);
fs.writeFileSync('src/data.ts', content, 'utf8');

