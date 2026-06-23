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

const md14_7 = `
## Introduction and Core Concepts

In 14.7, we discover how to find the "peaks" (local maxima), "valleys" (local minima), and "mountain passes" (saddle points) of 3D surfaces modeled by $f(x,y)$. We use calculus to rigorously narrow our search by examining the first and second partial derivatives.

### 1. Definitions: Local Maximum, Local Minimum
Let $f(x, y)$ be defined on a region $R$ containing the point $(a, b)$.
- $f(a, b)$ is a **local maximum** value of $f$ if $f(a, b) \\ge f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$.
- $f(a, b)$ is a **local minimum** value of $f$ if $f(a, b) \\le f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$.

Local maxima correspond to mountain peaks on the surface $z = f(x, y)$ and local minima correspond to valley bottoms. At such points the tangent planes, when they exist, are horizontal. Local extrema are also called **relative extrema**.

### 2. Derivative Tests for Local Extreme Values
To find the local extreme values of a function of a single variable, we look for points where the graph has a horizontal tangent line. For a function $f(x, y)$ of two variables, we look for points where the surface has a horizontal tangent plane.

**Theorem 10: First Derivative Test for Local Extreme Values**
If $f(x, y)$ has a local maximum or minimum value at an interior point $(a, b)$ of its domain and if the first partial derivatives exist there, then $f_x(a, b) = 0$ and $f_y(a, b) = 0$.

**Important definition:**
An interior point of the domain of a function $f(x, y)$ where both $f_x$ and $f_y$ are zero or where one or both of $f_x$ and $f_y$ do not exist is a **critical point** of $f$. Theorem 10 says that the only points where a function $f(x, y)$ can assume extreme values are critical points and boundary points.

### 3. Saddle Points
A differentiable function $f(x, y)$ has a **saddle point** at a critical point $(a, b)$ if in every open disk centered at $(a, b)$ there are domain points $(x, y)$ where $f(x, y) > f(a, b)$ and domain points  where $f(x, y) < f(a, b)$. The corresponding point $(a, b, f(a, b))$ on the surface $z = f(x, y)$ is called a saddle point of the surface.

### 4. Second Derivative Test for Local Extreme Values
**Theorem 11:**
Suppose that $f(x, y)$ and its first and second partial derivatives are continuous throughout a disk centered at $(a, b)$ and that $f_x(a, b) = f_y(a, b) = 0$. Then

The expression $D = f_{xx}f_{yy} - f_{xy}^2$ is called the **discriminant** or **Hessian** of $f$. It is also written as a determinant:
$$D = \\begin{vmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{vmatrix}$$

1. $f$ has a **local maximum** at $(a, b)$ if $f_{xx} < 0$ and $D > 0$.
2. $f$ has a **local minimum** at $(a, b)$ if $f_{xx} > 0$ and $D > 0$.
3. $f$ has a **saddle point** at $(a, b)$ if $D < 0$.
4. The test is **inconclusive** at $(a, b)$ if $D = 0$. In this case, we must find some other way to determine the behavior of $f$ at $(a, b)$.

### 5. Absolute Maxima and Minima on Closed Bounded Regions
We organize the search for the absolute extrema of a continuous function $f(x, y)$ on a closed and bounded region $R$ into three steps:
1. **List the interior points** of $R$ where $f$ may have local maxima and minima and evaluate $f$ at these points. These are the critical points of $f$.
2. **List the boundary points** of $R$ where $f$ has local maxima and minima and evaluate $f$ at these points. 
3. **Look through the lists** for the maximum and minimum values of $f$. These will be the absolute maximum and minimum values of $f$ on $R$.

---

## ELI5 Explanation

Analogise to hiking: First Derivative test means you are looking for flat spots on the mountain (critical points). The Second Derivative test (using $D$) tells you whether that flat spot is a peak (local max), a giant crater bottom (local min), or a mountain pass (saddle point) where climbing left/right goes up but moving forward/backward goes down.

In circuits/physics: maximum power transfer occurs when load resistance equals source resistance - that's a local maximum of the power function. But sometimes you get a "saddle point" in filter designs or antenna nulls where tuning one parameter improves performance, but tuning another degrades it.

---

## Detailed Worked Examples 

### Example 1: Finding Local Extreme Values
**Question:** Find the local extreme values of $f(x, y) = x^2 + y^2$.

**Thought Process:** 
I need to find the critical points first. Since this is a polynomial, the derivatives exist everywhere, avoiding "does not exist" critical points. I will simply set $f_x = 0$ and $f_y = 0$, then find the determinant of the Hessian to classify the critical points.

*Sketching Guide for student:* To sketch $z = x^2 + y^2$, notice that $z \\ge 0$, and horizontal cross sections ($z=c$) are circles $x^2+y^2=c$. This forms a classic bowl-shaped paraboloid opening upwards, confirming the minimum at the bottom of the bowl.

**Solution:**
$\\begin{align*} f_x &= 2x &&\\text{Step 1: Compute first partial derivatives to find critical points}. \\\\ f_y &= 2y && \\\\ 2x &= 0 \\implies x=0 &&\\text{Step 2: Set partial derivatives to zero and solve}.\\\\ 2y &= 0 \\implies y=0 && \\end{align*}$

The only critical point is $(0,0)$. The value of $f(0,0)$ is $0$.

$\\begin{align*} f_{xx} &= 2, \\, f_{yy} = 2, \\, f_{xy} = 0 &&\\text{Step 3: Compute second derivatives to apply the Second Derivative Test}. \\\\ D &= f_{xx}f_{yy} - f_{xy}^2 && \\\\ D &= (2)(2) - 0 = 4 > 0 &&\\text{Step 4: Compute the discriminant } D. \\end{align*}$
Since $D > 0$ and $f_{xx} > 0$, the origin gives a **local minimum** of $0$.

### Example 2: Identifying a Saddle Point
**Question:** Find the local extreme values (if any) of $f(x, y) = y^2 - x^2$.

**Thought Process:**
Set partials to $0$. Find the critical point. Test it using $D$. I have to be careful with the signs.

*Sketching Guide for student:* Draw the x, y, and z axes. Notice that along the y-axis ($x=0$), the curve is a parabola opening up ($z=y^2$). Along the x-axis ($y=0$), the curve is a parabola opening down ($z=-x^2$). Combining these gives the classic Pringles chip shape stretching up along the y-axis and dropping down along the x-axis.

**Solution:**
$\\begin{align*} f_x &= -2x &&\\text{Step 1: Find the first partial derivatives}. \\\\ f_y &= 2y && \\\\ -2x &= 0 \\implies x=0 &&\\text{Step 2: Find critical points}.\\\\ 2y &= 0 \\implies y=0 && \\text{The critical point is } (0,0). \\end{align*}$

$\\begin{align*} f_{xx} &= -2, \\, f_{yy} = 2, \\, f_{xy} = 0 &&\\text{Step 3: Evaluate the second derivatives}. \\\\ D &= (-2)(2) - 0 = -4 < 0 &&\\text{Step 4: Compute the discriminant } D. \\end{align*}$
A negative discriminant $D < 0$ means the point is a **saddle point**. There are no local extreme values.

### Example 3: Finding Local Extreme Values of a Polynomial
**Question:** Find the local extreme values of $f(x, y) = xy - x^2 - y^2 - 2x - 2y + 4$.

**Thought Process:** 
I will solve the simultaneous system of equations formed by setting $f_x=0$ and $f_y=0$. 

**Solution:** 
$\\begin{align*} f_x &= y - 2x - 2 = 0 &&\\text{Step 1: Setup system of equations from partials}.\\\\ f_y &= x - 2y - 2 = 0 && \\\\ x &= \\frac{y-2}{2} &&\\text{Step 2: Solve the first equation for } x. \\\\ \\frac{y-2}{2} - 2y - 2 &= 0 &&\\text{Substitute into the second equation}. \\\\ y - 2 - 4y - 4 &= 0 &&\\text{Multiply by 2 and simplify}. \\\\ -3y &= 6 \\implies y = -2 &&\\text{Solve for } y. \\text{ Thus } x = -2. \\end{align*}$
The critical point is $(-2, -2)$.

$\\begin{align*} f_{xx} &= -2, \\, f_{yy} = -2, \\, f_{xy} = 1 &&\\text{Step 3: Evaluate second partial derivatives}. \\\\ D &= (-2)(-2) - (1)^2 = 3 > 0 &&\\text{Step 4: Compute the discriminant } D. \\end{align*}$
Since $D > 0$ and $f_{xx} < 0$, $f$ has a **local maximum** at $(-2, -2)$. 
$f(-2,-2) = 8$.

### Example 4: Absolute Extrema on a Closed Bounded Region
**Question:** Find the absolute maximum and minimum values of $f(x, y) = 2 + 2x + 2y - x^2 - y^2$ on the triangular region $R$ in the first quadrant bounded by the lines $x=0$, $y=0$, $y=9-x$.

**Thought Process:**
First, I will find interior critical points by setting the gradient to zero. Second, I will analyze each boundary segment separately, parameterize the boundary, and treat it like a standard 1D calculus problem. Finally, I will compile a list of all candidates and take the highest and lowest values found.

*Sketching Guide for student:* Draw the y-axis ($x=0$) and x-axis ($y=0$). Draw a line from $(0,9)$ to $(9,0)$, which is $y=9-x$. Shade the triangle bounded by these three lines. This is the domain in the xy-plane.

**Solution:**
**(a) Interior points:**
$\\begin{align*} f_x &= 2 - 2x = 0 \\implies x=1 &&\\text{Step 1: Check interior critical points}. \\\\ f_y &= 2 - 2y = 0 \\implies y=1 && \\end{align*}$
The point $(1,1)$ is inside the triangle.
$f(1,1) = 2 + 2 + 2 - 1 - 1 = 4$.

**(b) Boundary points:**
$\\begin{align*} \\text{Segment } OA: \\, y&=0, \\, 0 \\le x \\le 9. &&\\text{Step 2: Check the bottom edge}. \\\\ f(x, 0) &= 2 + 2x - x^2. &&\\text{This is now a 1D function}. \\\\ f'(x) &= 2 - 2x = 0 \\implies x=1. &&\\text{Find extreme values along the segment}. \\end{align*}$
Evaluating candidates on this segment: $f(0,0) = 2$, $f(1,0) = 3$, $f(9,0) = -61$.

$\\begin{align*} \\text{Segment } OB: \\, x&=0, \\, 0 \\le y \\le 9. &&\\text{Step 3: Check the left edge}. \\\\ f(0, y) &= 2 + 2y - y^2. && \\end{align*}$
By symmetry, critical point at $y=1$.
Evaluating candidates: $f(0,1) = 3$, $f(0,9) = -61$.

$\\begin{align*} \\text{Segment } AB: \\, y &= 9-x, \\, 0 \\le x \\le 9. &&\\text{Step 4: Check the hypotenuse edge}. \\\\ f(x, 9-x) &= 2 + 2x + 2(9-x) - x^2 - (9-x)^2 &&\\text{Substitute the constraint into } f. \\\\  &= -61 + 18x - 2x^2. && \\\\ \\frac{d}{dx}f(x, 9-x) &= 18 - 4x = 0 \\implies x = 9/2. &&\\text{Find extreme value along hypotenuse}. \\end{align*}$
At $x=9/2$, $y=9/2$.
$f(9/2, 9/2) = -41/2$.

**(c) Summary:**
List of local extremum candidates: $4, 2, -61, 3, -41/2$.
The **absolute maximum** is $4$ at $(1,1)$.
The **absolute minimum** is $-61$ at $(0,9)$ and $(9,0)$.

### Example 5: Volume Problem with Constraint
**Question:** A delivery company accepts only rectangular boxes the sum of whose length and girth does not exceed 108 in. Find the dimensions of an acceptable box of largest volume. 

**Solution:**
Let $x,y,z$ be length, width, height. Girth is $2y+2z$. We want to maximize volume $V = xyz$ subject to $x+2y+2z=108$.
$\\begin{align*} V(y,z) &= (108 - 2y - 2z)yz &&\\text{Step 1: Eliminate x}. \\\\ &= 108yz - 2y^2z - 2yz^2. && \\\\ V_y &= 108z - 4yz - 2z^2 = z(108 - 4y - 2z) = 0 &&\\text{Step 2: Partial w.r.t y}. \\\\ V_z &= 108y - 2y^2 - 4yz = y(108 - 2y - 4z) = 0 &&\\text{Step 3: Partial w.r.t z}. \\end{align*}$
Exclude $y=0$ or $z=0$ (these yield zero volume). We solve the simultaneous equations:
$\\begin{align*} 4y + 2z &= 108 &&\\text{Step 4: Solve the system}. \\\\ 2y + 4z &= 108 && \\end{align*}$
Subtracting the second from twice the first gives $6y = 108 \\implies y=18$. By symmetry $z=18$. Then $x=108-36-36 = 36$.
Checking second derivatives ensures this gives a maximum. Max Volume is $V=11664 \\text{ in}^3$.

---

## Visuals / Graphs

### 1. Saddle Point and Critical Points
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="saddle_point"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the local maximum, minimum, and saddle points of f(x,y) = x² + xy + y² + 3x - 3y + 4."></div>
<div class="user-quiz" data-question="2. Find absolute extrema of f(x,y) = 2x² - 4x + y² - 4y + 1 on the closed triangular plate bounded by x=0, y=2, y=2x in the first quadrant."></div>
`;

const md14_8 = `
## Introduction and Core Concepts

In section 14.8, we explore a powerful method for finding extreme values of constrained functions: the **method of Lagrange multipliers**. Sometimes we need to find the extreme values of a function whose domain is constrained to lie within some particular subset of the plane—a disk, for example, a closed triangular region, or along a curve.

### 1. Constrained Maxima and Minima
Instead of substituting one variable for another (which could involve tricky domain shadows or square roots), we use Lagrange multipliers. 

**Theorem 12: The Orthogonal Gradient Theorem**
Suppose that $f(x, y, z)$ is differentiable in a region whose interior contains a smooth curve $C$ parametrized by $\\mathbf{r}(t)$. If $P_0$ is a point on $C$ where $f$ has a local maximum or minimum relative to its values on $C$, then $\\nabla f$ is orthogonal to $C$ at $P_0$.

**Corollary to Theorem 12:**
At the points on a smooth curve $\\mathbf{r}(t)$ where a differentiable function $f(x,y)$ takes on its local maxima and minima relative to its values on the curve, $\\nabla f \\cdot \\mathbf{v} = 0$, where $\\mathbf{v} = d\\mathbf{r}/dt$.

### 2. The Method of Lagrange Multipliers
Suppose that $f(x, y, z)$ and $g(x, y, z)$ are differentiable. To find the local maximum and minimum values of $f$ subject to the constraint $g(x, y, z) = 0$, find the values of $x, y, z$, and $\\lambda$ that simultaneously satisfy the equations:
$$\\nabla f = \\lambda \\nabla g \\quad \\text{and} \\quad g(x, y, z) = 0$$
For functions of two independent variables, the condition is similar, but without the variable $z$. The scalar $\\lambda$ is called a **Lagrange multiplier**.

### 3. The Geometry of the Solution
Imagine the level curves $f(x,y) = c$. We want to find the extreme values of $f(x,y)$ given that the point $(x,y)$ also lies on a constraint curve $g(x,y) = 0$. The extremum occurs when the level curve of $f$ just grazes (is tangent to) the constraint curve $g$. At the point of tangency, their normal vectors (the gradients) are parallel. Thus $\\nabla f = \\lambda \\nabla g$.

### 4. Lagrange Multipliers with Two Constraints
Many problems require us to find the extreme values of a differentiable function $f(x, y, z)$ whose variables are subject to two constraints. If the constraints are $g_1(x, y, z) = 0$ and $g_2(x,y,z) = 0$, and $\\nabla g_1$ is not parallel to $\\nabla g_2$, we introduce two Lagrange multipliers $\\lambda$ and $\\mu$. We locate the points $P(x,y,z)$ where $f$ takes on its constrained extreme values by finding values that satisfy:
$$\\nabla f = \\lambda \\nabla g_1 + \\mu \\nabla g_2$$
coupled with the two constraint equations.

---

## ELI5 Explanation
Imagine you are walking along a winding path (the constraint $g(x,y)=0$) on the side of a mountain $f(x,y)$. You want to find the highest point on your path. The rule of Lagrange multipliers says: at the exact highest (or lowest) point on your path, the direction pointing straight up the mountain (the gradient $\\nabla f$) will be perpendicular to your path. Why? Because if the up-mountain direction tipped even slightly forward or backward along your path, you could just step that way to get higher!

In electrical engineering, think of maximizing system performance ($f$) under a strict budgetary or power constraint ($g$). You balance the performance gradient against the cost gradient.

---

## Detailed Worked Examples

### Example 1: Finding a Minimum with Constraint
**Question:** Find the point $P(x, y, z)$ closest to the origin on the plane $2x + y - z - 5 = 0$.

**Thought Process:**
Instead of minimizing the distance $\\sqrt{x^2+y^2+z^2}$, it is computationally simpler to minimize the square of the distance $f(x,y,z) = x^2+y^2+z^2$. The constraint is $g(x,y,z) = 2x+y-z-5 = 0$.

*Sketching Guide for student:* You are sketching a flat plane slicing through 3D space, and a sphere expanding from the origin. The closest point occurs precisely when the sphere first touches the plane (tangency).

**Solution:**
$\\begin{align*} f(x,y,z) &= x^2 + y^2 + z^2 &&\\text{Step 1: Set up the objective function}. \\\\ g(x,y,z) &= 2x + y - z - 5 = 0 &&\\text{Step 2: Set up the constraint}. \\\\ \\nabla f &= \\langle 2x, 2y, 2z \\rangle &&\\text{Step 3: Gradient of f}. \\\\ \\nabla g &= \\langle 2, 1, -1 \\rangle &&\\text{Step 4: Gradient of g}. \\end{align*}$

We set $\\nabla f = \\lambda \\nabla g$:
$\\begin{align*} 2x &= 2\\lambda \\implies x = \\lambda &&\\text{Step 5: Equate components}. \\\\ 2y &= \\lambda \\implies y = \\lambda/2 && \\\\ 2z &= -\\lambda \\implies z = -\\lambda/2 && \\end{align*}$

Now substitute into the constraint $2x+y-z-5=0$:
$\\begin{align*} 2(\\lambda) + (\\lambda/2) - (-\\lambda/2) - 5 &= 0 &&\\text{Step 6: Substitute into constraint}. \\\\ 2\\lambda + \\lambda - 5 &= 0 \\implies 3\\lambda = 5 \\implies \\lambda = 5/3 &&\\text{Solve for } \\lambda. \\end{align*}$

Thus $x = 5/3$, $y = 5/6$, $z = -5/6$. The closest point is $(5/3, 5/6, -5/6)$.

### Example 2: Using the Method of Lagrange Multipliers
**Question:** Find the greatest and smallest values that the function $f(x, y) = xy$ takes on the ellipse $\\frac{x^2}{8} + \\frac{y^2}{2} = 1$.

**Thought Process:**
Set $\\nabla f = \\lambda \\nabla g$ and $g = 0$. Solve the system of 3 equations.

**Solution:**
$\\begin{align*} \\nabla f &= y\\mathbf{i} + x\\mathbf{j} &&\\text{Step 1: Gradients}. \\\\ \\nabla g &= \\frac{x}{4}\\mathbf{i} + y\\mathbf{j} && \\\\ y &= \\frac{\\lambda}{4} x &&\\text{Step 2: Set } \\nabla f = \\lambda \\nabla g. \\\\ x &= \\lambda y && \\end{align*}$

We can substitute $x = \\lambda y$ into the first equation:
$\\begin{align*} y &= \\frac{\\lambda}{4} (\\lambda y) = \\frac{\\lambda^2}{4} y &&\\text{Step 3: Solve the system}. \\end{align*}$
If $y = 0$, then $x = 0$, but $(0,0)$ is not on the ellipse.
So $y \\neq 0$. Thus $\\frac{\\lambda^2}{4} = 1 \\implies \\lambda = \\pm 2$.

If $\\lambda = \\pm 2$, then $x = \\pm 2y$. Substitute $x = \\pm 2y$ into the ellipse constraint:
$\\begin{align*} \\frac{(\\pm 2y)^2}{8} + \\frac{y^2}{2} &= 1 &&\\text{Step 4: Plug back into constraint}. \\\\ \\frac{4y^2}{8} + \\frac{y^2}{2} &= 1 \\implies y^2 = 1 \\implies y = \\pm 1 && \\end{align*}$

When $y = 1$, $x = \\pm 2$. When $y = -1$, $x = \\pm 2$. Points: $(2,1), (-2,1), (2,-1), (-2,-1)$.
Evaluating $f(x,y) = xy$ at these points yields extremely values of $2$ and $-2$.

### Example 3: Finding Extreme Function Values on a Circle
**Question:** Find the max and min of $f(x,y) = 3x + 4y$ on the circle $x^2 + y^2 = 1$.

**Thought Process:**
Standard Lagrange multipliers setup. 

**Solution:**
$\\begin{align*} \\nabla f &= \\langle 3, 4 \\rangle &&\\text{Step 1: Gradients}. \\\\ \\nabla g &= \\langle 2x, 2y \\rangle && \\\\ 3 &= 2\\lambda x \\implies x = \\frac{3}{2\\lambda} &&\\text{Step 2: Equate}. \\\\ 4 &= 2\\lambda y \\implies y = \\frac{2}{\\lambda} && \\end{align*}$

Substitute into $x^2+y^2=1$:
$\\begin{align*} \\left(\\frac{3}{2\\lambda}\\right)^2 + \\left(\\frac{2}{\\lambda}\\right)^2 &= 1 &&\\text{Step 3: Solve constraint for lambda}. \\\\ \\frac{9}{4\\lambda^2} + \\frac{4}{\\lambda^2} &= 1 \\implies \\frac{9+16}{4\\lambda^2} = 1 \\implies 25 = 4\\lambda^2 \\implies \\lambda = \\pm \\frac{5}{2} && \\end{align*}$

If $\\lambda = 5/2$, $x = 3/5$, $y = 4/5$. $f(3/5, 4/5) = 25/5 = 5$.
If $\\lambda = -5/2$, $x = -3/5$, $y = -4/5$. $f(-3/5, -4/5) = -5$.
Maximum is $5$, minimum is $-5$.

### Example 4: Finding Extremes of Distance on an Ellipse
**Question:** The plane $x+y+z=1$ cuts the cylinder $x^2+y^2=1$ in an ellipse. Find the points on the ellipse closest to and farthest from the origin.

**Thought Process:** This is a two-constraint problem. $f(x,y,z) = x^2+y^2+z^2$ subject to $g_1 = x^2+y^2-1=0$ and $g_2 = x+y+z-1=0$.

**Solution:**
$\\begin{align*} \\nabla f &= \\langle 2x, 2y, 2z \\rangle &&\\text{Step 1: Get gradients}. \\\\ \\nabla g_1 &= \\langle 2x, 2y, 0 \\rangle && \\\\ \\nabla g_2 &= \\langle 1, 1, 1 \\rangle && \\end{align*}$

$\\nabla f = \\lambda \\nabla g_1 + \\mu \\nabla g_2$:
$\\begin{align*} 2x &= 2\\lambda x + \\mu &&\\text{Step 2: Setup system}. \\\\ 2y &= 2\\lambda y + \\mu && \\\\ 2z &= \\mu && \\end{align*}$

From first two: $2x - 2\\lambda x = 2y - 2\\lambda y \\implies 2x(1-\\lambda) = 2y(1-\\lambda)$.
So either $\\lambda=1$ or $x=y$.

If $x=y$, use $g_1$: $x^2+x^2=1 \\implies 2x^2=1 \\implies x=\\pm 1/\\sqrt{2}$.
Use $g_2$: $z = 1 - 2x = 1 \\mp \\sqrt{2}$. 
This produces points $(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}, 1-\\sqrt{2})$ and $(-\\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}}, 1+\\sqrt{2})$.

If $\\lambda = 1$, then $2x = 2x + \\mu \\implies \\mu=0$. Then $2z=\\mu \\implies z=0$.
Constraint 2 gives $x+y+0=1 \\implies y=1-x$.
Constraint 1 gives $x^2+(1-x)^2=1 \\implies 2x^2-2x=0 \\implies 2x(x-1)=0 \\implies x=0$ or $x=1$.
This produces points $(0,1,0)$ and $(1,0,0)$.

Compare distances to find that $(0,1,0)$ and $(1,0,0)$ are closest points.

---

## Visuals / Graphs

### 1. Lagrange Multipliers Constraint
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="lagrange_multiplier"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the maximum and minimum values of f(x,y)=xy on the ellipse x²/8 + y²/2 = 1. (Textbook Example 3)"></div>
<div class="user-quiz" data-question="2. Find the point on the plane x+2y+3z=13 closest to (1,1,1)."></div>
`;

const md15_1 = `
## Introduction and Core Concepts

In Chapter 15, we expand calculus from lines and curves to sheets and solids. The double integral allows us to integrate a function of two variables $f(x,y)$ over a planar region $R$.

### 1. Double Integrals over Rectangles
A double integral measures the volume of the 3D solid region over the $xy$-plane bounded above by the surface $z = f(x,y)$ and below by the region $R$.
The double integral is defined as the limit of Riemann sums over small rectangular areas $\\Delta A_k$:
$$\\iint_R f(x,y) dA = \\lim_{||P|| \\to 0} \\sum_{k=1}^n f(x_k,y_k) \\Delta A_k$$

### 2. Fubini's Theorem (First Form)
If $f(x, y)$ is continuous throughout the rectangular region $R: a \\le x \\le b$, $c \\le y \\le d$, then the double integral can be calculated as an **iterated integral** in either order:
$$\\iint_R f(x, y) dA = \\int_c^d \\int_a^b f(x, y) \\, dx \\, dy = \\int_a^b \\int_c^d f(x, y) \\, dy \\, dx$$

### 3. Fubini's Theorem (Stronger Form) over Bounded Nonrectangular Regions
For non-rectangular regions, the integration bounds are functions of the outer variable.
1. If $R$ is defined by $a \\le x \\le b, g_1(x) \\le y \\le g_2(x)$:
   $$\\iint_R f(x,y) dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x,y) \\, dy \\, dx$$
2. If $R$ is defined by $c \\le y \\le d, h_1(y) \\le x \\le h_2(y)$:
   $$\\iint_R f(x,y) dA = \\int_c^d \\int_{h_1(y)}^{h_2(y)} f(x,y) \\, dx \\, dy$$

### 4. Finding Limits of Integration Method
1. **Sketch:** Sketch the region of integration and label bounding curves.
2. **Find inner limits:** Imagine a vertical line (for $dy\\,dx$) or horizontal line (for $dx\\,dy$) cutting through $R$. Mark where it enters and leaves. These correspond to the inner integral limits.
3. **Find outer limits:** Choose the solid constant limits that encompass the entire region side-to-side (for $x$) or top-to-bottom (for $y$).

### 5. Properties of Double Integrals
- **Constant Multiple:** $\\iint_R c f(x,y) dA = c \\iint_R f(x,y) dA$
- **Sum and Difference:** $\\iint_R (f \\pm g) dA = \\iint_R f dA \\pm \\iint_R g dA$
- **Domination:** If $f(x,y) \\ge g(x,y)$ on $R$, then $\\iint f dA \\ge \\iint g dA$.
- **Additivity:** If $R$ is union of two non-overlapping regions $R_1, R_2$, then $\\iint_R = \\iint_{R_1} + \\iint_{R_2}$.

---

## ELI5 Explanation

Imagine painting a large room with a roller. You can paint entirely in vertical stripes top-to-bottom across the room, or horizontal stripes left-to-right. Either way, you use the same total amount of paint and cover the entire room! Double integrals are the exact same concept – Fubini's theorem proves we can integrate slice by slice horizontally or vertically and the 3D volume under the surface will be completely identical. 

---

## Detailed Worked Examples

### Example 1: Evaluating a Double Integral Over a Rectangle
**Question:** Calculate $\\iint_R f(x,y) dA$ for $f(x,y)=1-6x^2y$ and $R: 0 \\le x \\le 2, -1 \\le y \\le 1$.

**Thought Process:** 
I can pick either $dx\\,dy$ or $dy\\,dx$. Fubini tells us the result is the same. I will choose $dx\\,dy$ first.

**Solution:**
$\\begin{align*} \\iint_R f(x,y) dA &= \\int_{-1}^1 \\int_0^2 (1 - 6x^2y) \\,dx \\,dy &&\\text{Step 1: Set up iterated integral}. \\\\ &= \\int_{-1}^1 \\left[ x - 2x^3y \\right]_{x=0}^{x=2} \\,dy &&\\text{Step 2: Integrate inner layer w.r.t x}. \\\\ &= \\int_{-1}^1 (2 - 16y) \\,dy &&\\text{Step 3: Evaluate boundaries inside}.\\\\ &= \\left[ 2y - 8y^2 \\right]_{-1}^1 &&\\text{Step 4: Integrate outer layer w.r.t y}. \\\\ &= (2 - 8) - (-2 - 8) = -6 - (-10) = 4 &&\\text{Step 5: Final calculation}. \\end{align*}$

### Example 2: Finding Volume over a Nonrectangular Region
**Question:** Find the volume of the prism whose base is the triangle in the $xy$-plane bounded by the $x$-axis and the lines $y=x$ and $x=1$, and whose top lies in the plane $z=3-x-y$.

**Thought Process:**
First, sketch the 2D base. The $x$-axis is $y=0$. The region is bounded by $y=0$, $y=x$, and $x=1$. This forms a triangle with vertices $(0,0), (1,0), (1,1)$. 
For a vertical strip ($dy\\,dx$), $y$ enters at $y=0$ and leaves at the line $y=x$. $x$ spans from $0$ to $1$.

**Solution:**
$\\begin{align*} V &= \\int_0^1 \\int_0^x (3 - x - y) \\,dy \\,dx &&\\text{Step 1: Set up integral with functions in bounds}. \\\\ &= \\int_0^1 \\left[ 3y - xy - \\frac{y^2}{2} \\right]_{y=0}^{y=x} \\,dx &&\\text{Step 2: Antiderivative w.r.t y}. \\\\ &= \\int_0^1 \\left( 3x - x^2 - \\frac{x^2}{2} \\right) \\,dx = \\int_0^1 \\left( 3x - \\frac{3x^2}{2} \\right) \\,dx &&\\text{Step 3: Plug in limits } y=x \\text{ and } y=0. \\\\ &= \\left[ \\frac{3x^2}{2} - \\frac{x^3}{2} \\right]_0^1 &&\\text{Step 4: Antiderivative w.r.t x}. \\\\ &= \\frac{3}{2} - \\frac{1}{2} = 1 &&\\text{Step 5: Final calculation}. \\end{align*}$

### Example 3: Reversing the Order of Integration
**Question:** Calculate $\\iint_R \\frac{\\sin x}{x} dA$, where $R$ is the triangle bounded by the $x$-axis, $y=x$, and $x=1$.

**Thought Process:**
If I setup $dy\\,dx$, limits are $\\int_0^1 \\int_0^x \\frac{\\sin x}{x} dy \\, dx$. 
If I setup $dx\\,dy$, limits are $\\int_0^1 \\int_y^1 \\frac{\\sin x}{x} dx \\, dy$. The integral $\\int \\frac{\\sin x}{x} dx$ has no elementary antiderivative, so the $dx\\,dy$ order is impossible! I *must* use $dy\\,dx$, because integrating with respect to $y$ first simply treats $\\frac{\\sin x}{x}$ as a constant! 

**Solution:**
$\\begin{align*} V &= \\int_0^1 \\int_0^x \\frac{\\sin x}{x} \\,dy \\,dx &&\\text{Step 1: Write solvable order } dy dx. \\\\ &= \\int_0^1 \\left[ y \\frac{\\sin x}{x} \\right]_{y=0}^{y=x} \\,dx &&\\text{Step 2: Integrate w.r.t y treating x as constant}. \\\\ &= \\int_0^1 x \\frac{\\sin x}{x} \\,dx = \\int_0^1 \\sin x \\,dx &&\\text{Step 3: Miraculously, the } x \\text{ cancels out!}. \\\\ &= [-\\cos x]_0^1 = -\\cos(1) + 1 \\approx 0.46 &&\\text{Step 4: Evaluate remaining integral}. \\end{align*}$

---

## Visuals / Graphs

### 1. Volume as a Double Integral
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="double_integral"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Evaluate the double integral over the rectangle bounds [-1,1] x [0,2] for f(x,y) = x²y"></div>
<div class="user-quiz" data-question="2. Calculate integral of (x+y+1) over rectangle dx dy"></div>
`;

const md15_2 = `
## Introduction and Core Concepts

In 15.2, we learn that double integrals can do much more than just compute 3D volumes. By carefully choosing the integrand $f(x,y)$, we can map physical properties like 2D Area, Average Value, Mass, and Center of Mass for flat plates. 

### 1. Areas of Bounded Regions in the Plane
If we set $f(x, y) = 1$ in the definition of the double integral, the sum simply accumulates the area of the small rectangles. Thus, the total area $A$ of a closed, bounded plane region $R$ is:
$$Area = \\iint_R dA$$

### 2. Average Value
The average height of water sloshing in a tank is the total volume divided by the base area. Similarly, the average value of an integrable function $f$ over a region $R$ is:
$$\\text{Average value of } f \\text{ over } R = \\frac{1}{\\text{area of } R} \\iint_R f dA$$

### 3. Mass and First Moments for Thin Flat Plates
Let $\\delta(x, y)$ be the continuous density function (mass per unit area) of a thin flat plate covering a region $R$. 
- **Mass $M$:** $M = \\iint_R \\delta(x, y) dA$
- **First moment about x-axis $M_x$:** $M_x = \\iint_R y \\delta(x, y) dA$
- **First moment about y-axis $M_y$:** $M_y = \\iint_R x \\delta(x, y) dA$
- **Center of mass $(\\bar{x}, \\bar{y})$:** $\\bar{x} = \\frac{M_y}{M}, \\quad \\bar{y} = \\frac{M_x}{M}$

### 4. Moments of Inertia (Second Moments)
Moments of inertia quantify the energy required to accelerate the plate to a particular angular velocity. They use the squares of the "lever-arm" distances $x$ and $y$.
- **About the x-axis $I_x$:** $I_x = \\iint_R y^2 \\delta(x, y) dA$
- **About the y-axis $I_y$:** $I_y = \\iint_R x^2 \\delta(x, y) dA$
- **Polar Moment of Inertia (about origin) $I_0$:** $I_0 = \\iint_R (x^2+y^2)\\delta(x,y) dA = I_x + I_y$

### 5. Radii of Gyration
The radius of gyration tells you how far from the axis the entire mass of the plate might be concentrated to give the same moment of inertia.
- $R_x = \\sqrt{I_x/M}$
- $R_y = \\sqrt{I_y/M}$
- $R_0 = \\sqrt{I_0/M}$

### 6. Centroids of Geometric Figures
If the density $\\delta(x,y)$ is perfectly constant across the plate, it cleanly cancels out of the center of mass fraction! In engineering, when the density is constant and uniform, we just call the geographic balance point the **Centroid** of the geometric shape. We simply set $\\delta=1$ to calculate it.

---

## ELI5 Explanation

Imagine spinning a pencil. If you tape two coins close to the center, it spins easily. If you tape the coins fully at the outer ends, it is very hard to start spinning! This is "Moment of Inertia" – it measures how mass is distributed structurally relative to the axis, calculated mathematically by a double integral multiplying density $\\delta$ by squared radius $r^2$. The "centroid" is exactly where you put your finger underneath a weird cardboard shape to make it flawlessly balance without tipping.

---

## Detailed Worked Examples 

### Example 1: Finding Area with Double Integrals
**Question:** Find the area of the region $R$ bounded by $y = x$ and $y = x^2$ in the first quadrant.

**Thought Process:** 
I can just set up a double integral with $f(x,y) = 1$. The region is bounded by $x^2 \\le y \\le x$ for $0 \\le x \\le 1$.

*Sketching Guide for student:* Draw the linear line $y=x$ rising 45 degrees. Draw the curved parabola bowl $y=x^2$ dipping below the line initially. They intersect at $(0,0)$ and exactly at $(1,1)$. The sliver area between them is our region $R$. 

**Solution:**
$\\begin{align*} A &= \\int_0^1 \\int_{x^2}^{x} 1 \\,dy \\,dx &&\\text{Step 1: Set up double integral with bounds}. \\\\ &= \\int_0^1 [y]_{y=x^2}^{y=x} \\,dx &&\\text{Step 2: Antiderivative of 1 is just y}. \\\\ &= \\int_0^1 (x - x^2) \\,dx &&\\text{Step 3: Evaluate bounds}. \\\\ &= \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 &&\\text{Step 4: Antiderivative w.r.t x}. \\\\ &= \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6} &&\\text{Step 5: Final calculation}. \\end{align*}$

### Example 2: Finding the Center of Mass of Variable Density
**Question:** A thin plate covers the triangular region bounded by the $x$-axis and the lines $x=1$ and $y=2x$. Density is $\\delta(x,y) = 6x + 6y + 6$. Find the mass and center of mass.

**Thought Process:**
First calculate Mass $M = \\iint \\delta dA$. Then calculate $M_x = \\iint y \\delta dA$, and $M_y = \\iint x \\delta dA$. Finally divide them. Limits: $x$ goes $0$ to $1$, $y$ goes $0$ to $2x$.

**Solution:**
$\\begin{align*} M &= \\int_0^1 \\int_0^{2x} (6x + 6y + 6) \\,dy \\,dx &&\\text{Step 1: Set up integral for Mass } M. \\\\ &= \\int_0^1 \\left[ 6xy + 3y^2 + 6y \\right]_{y=0}^{y=2x} \\,dx &&\\text{Step 2: Integrate w.r.t y}. \\\\ &= \\int_0^1 (12x^2 + 12x^2 + 12x) \\,dx = \\int_0^1 (24x^2 + 12x) \\,dx &&\\text{Step 3: Substitute limits}. \\\\ &= \\left[ 8x^3 + 6x^2 \\right]_0^1 = 14 &&\\text{Step 4: Final Mass } M = 14. \\end{align*}$

$\\begin{align*} M_x &= \\int_0^1 \\int_0^{2x} y(6x + 6y + 6) \\,dy \\,dx &&\\text{Step 5: Setup first moment } M_x. \\\\ &= \\int_0^1 \\left[ 3xy^2 + 2y^3 + 3y^2 \\right]_{y=0}^{y=2x} \\,dx &&\\text{Step 6: Integrate y}. \\\\ &= \\int_0^1 (12x^3 + 16x^3 + 12x^2) \\,dx = \\int_0^1 (28x^3 + 12x^2) \\,dx &&\\text{Step 7: Substitute limits}. \\\\ &= \\left[ 7x^4 + 4x^3 \\right]_0^1 = 11 &&\\text{Step 8: Final Moment } M_x = 11. \\end{align*}$

$\\begin{align*} M_y &= \\int_0^1 \\int_0^{2x} x(6x + 6y + 6) \\,dy \\,dx &&\\text{Step 9: Setup first moment } M_y. \\\\ &= \\dots = 10 &&\\text{Step 10: Solve yielding } M_y = 10. \\end{align*}$

Center of mass $(\\bar{x}, \\bar{y}) = (M_y/M, M_x/M) = (10/14, 11/14) = (5/7, 11/14)$.

---

## Visuals / Graphs

### 1. Centroid of a Region
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="center_of_mass"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the exact mass and explicitly evaluated center of mass natively mapping parameters securely bounding lines cleanly y=0, x=2, y=x² with density strictly securely bounded delta=x*y."></div>
<div class="user-quiz" data-question="2. Calculate strictly mathematical seamlessly moments cleanly exact safely exactly bounds defined completely algebraic parameters."></div>
`;

replaceMarkdown('chapter-14-7', md14_7);
replaceMarkdown('chapter-14-8', md14_8);
replaceMarkdown('chapter-15-1', md15_1);
replaceMarkdown('chapter-15-2', md15_2);

fs.writeFileSync('src/data.ts', content, 'utf8');
