const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

function replaceMarkdown(chapterId, newMarkdown) {
    const rx = new RegExp(`(id:\\s*"${chapterId}"[\\s\\S]*?markdown:\\s*\\`)([\\s\\S]*?)(\\*\\*Visuals \\/ Graphs\\*\\*[\\s\\S]*?\\`\\n\\s*\\},|\\`\\n\\s*\\},|\\}\\]\\n\\s*\\)$)`);
    
    // Instead of completely doing regex on the whole thing, let's just locate the chapter and replace its markdown entirely manually using string split.
    const startIdx = content.indexOf(`id: "${chapterId}"`);
    if (startIdx === -1) return;
    const mdStartStr = 'markdown: `';
    const mdStartIdx = content.indexOf(mdStartStr, startIdx) + mdStartStr.length;
    // find the end of the markdown string. To be safe, look for `\n  },\n  {\n    id: "chapter-`
    let nextChapIdx = content.indexOf(`\n  },\n  {\n    id: "chapter-`, mdStartIdx);
    if (nextChapIdx === -1) {
        nextChapIdx = content.lastIndexOf(`\n  }\n]`);
    }
    const mdEndIdx = content.lastIndexOf('`', nextChapIdx);
    
    content = content.substring(0, mdStartIdx) + "\n" + newMarkdown + "\n" + content.substring(mdEndIdx);
}

const md14_7 = `
## Introduction and Core Concepts

In 14.7, we discover how to find the "peaks" (local maxima), "valleys" (local minima), and "mountain passes" (saddle points) of 3D surfaces modeled by $f(x,y)$.

### 1. Definitions: Local Maximum, Local Minimum
Let $f(x, y)$ be defined on a region $R$ containing the point $(a, b)$.
- $f(a, b)$ is a **local maximum** value of $f$ if $f(a, b) \\geq f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$.
- $f(a, b)$ is a **local minimum** value of $f$ if $f(a, b) \\leq f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$.

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

The expression $D = f_{xx}f_{yy} - f_{xy}^2$ is called the **discriminant** or **Hessian** of $f$. 
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

In circuits: maximum power transfer occurs when load resistance equals source resistance - that's a local maximum of the power function. But sometimes you get a "saddle point" in filter designs or antenna nulls where tuning one parameter improves performance, but tuning another degrades it.

---

## Detailed Worked Examples 

### Example 1: Finding Local Extreme Values
**Question:** Find the local extreme values of $f(x, y) = x^2 + y^2$.

**Thought Process:** 
I need to find the critical points first. Since this is a polynomial, the derivatives exist everywhere, avoiding "does not exist" critical points. I will simply set $f_x = 0$ and $f_y = 0$, then find the determinant of the Hessian to classify the critical points.

**Solution:**
**Step 1: Compute first partial derivatives:**
$f_x = 2x$
$f_y = 2y$

**Step 2: Find Critical Points:**
$2x = 0 \implies x = 0$
$2y = 0 \implies y = 0$
The only critical point is $(0,0)$. The value of $f(0,0)$ is $0$.

**Step 3: Classify:**
$f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$.
$D = f_{xx}f_{yy} - f_{xy}^2 = (2)(2) - 0 = 4 > 0$.
Since $D > 0$ and $f_{xx} > 0$, the origin gives a **local minimum** of $0$.

*Sketching Guide:* To sketch $z = x^2 + y^2$, notice that $z \ge 0$, and horizontal cross sections ($z=c$) are circles $x^2+y^2=c$. This forms a classic bowl-shaped paraboloid opening upwards, confirming the minimum at the bottom of the bowl.

### Example 2: Identifying a Saddle Point
**Question:** Find the local extreme values (if any) of $f(x, y) = y^2 - x^2$.

**Thought Process:**
Set partials to $0$. Find the critical point. Test it using $D$.

**Solution:**
**Step 1: Partials**
$f_x = -2x$
$f_y = 2y$

**Step 2: Critical points**
$-2x = 0$ and $2y = 0 \implies (0,0)$.

**Step 3: Classify**
$f_{xx} = -2$, $f_{yy} = 2$, $f_{xy} = 0$.
$D = (-2)(2) - 0 = -4 < 0$.
A negative discriminant means the point is a **saddle point**. There are no local extreme values.

*Sketching Guide:* Draw the x, y, and z axes. Along the y-axis ($x=0$), the curve is a parabola opening up ($z=y^2$). Along the x-axis ($y=0$), the curve is a parabola opening down ($z=-x^2$). Combining these gives the classic Pringles chip shape stretching up along the y-axis and dropping down along the x-axis.

### Example 3: Finding Local Extreme Values of a Polynomial
**Question:** Find the local extreme values of $f(x, y) = xy - x^2 - y^2 - 2x - 2y + 4$.

**Thought Process:** 
I will solve the simultaneous system of equations formed by setting $f_x=0$ and $f_y=0$. 

**Solution:** 
**Step 1: Partials**
$f_x = y - 2x - 2 = 0$
$f_y = x - 2y - 2 = 0$

**Step 2: Solve the system**
From the first equation: $x = (y-2)/2$. Substitute into second: 
$((y-2)/2) - 2y - 2 = 0 \implies y - 2 - 4y - 4 = 0 \implies -3y = 6 \implies y = -2$.
Thus $x = -2$. Critical point is $(-2, -2)$.

**Step 3: Classify**
$f_{xx} = -2$, $f_{yy} = -2$, $f_{xy} = 1$.
$D = (-2)(-2) - (1)^2 = 4 - 1 = 3 > 0$.
Since $D > 0$ and $f_{xx} < 0$, $f$ has a **local maximum** at $(-2, -2)$. 
$f(-2,-2) = 8$.

### Example 4: Searching for Local Extreme Values
**Question:** Find the local extreme values of $f(x, y) = xy$.

**Solution:** 
**Step 1:** $f_x = y = 0$, $f_y = x = 0$. Critical point: $(0,0)$.
**Step 2:** $f_{xx} = 0$, $f_{yy} = 0$, $f_{xy} = 1$.
**Step 3:** $D = 0 - 1^2 = -1 < 0$. 
The function has a **saddle point** at $(0,0)$. No local extreme values.

### Example 5: Absolute Extrema on a Closed Bounded Region
**Question:** Find the absolute maximum and minimum values of $f(x, y) = 2 + 2x + 2y - x^2 - y^2$ on the triangular region in the first quadrant bounded by the lines $x=0$, $y=0$, $y=9-x$.

**Thought Process:**
First, find interior critical points by setting gradient to zero. Then, analyze each boundary segment separately, treating it like a standard single-variable calculus problem. Finally, take the highest and lowest values found.

*How to sketch the region:* Draw the y-axis ($x=0$) and x-axis ($y=0$). Draw a line from $(0,9)$ to $(9,0)$, which is $y=9-x$. Shade the triangle bounded by these three lines. This is the domain in the xy-plane.

**Solution:**
**(a) Interior points:**
$f_x = 2 - 2x = 0 \implies x=1$
$f_y = 2 - 2y = 0 \implies y=1$
The point $(1,1)$ is inside the triangle.
$f(1,1) = 2 + 2 + 2 - 1 - 1 = 4$.

**(b) Boundary points:**
**Segment $OA$ (x-axis):** $y=0$, $0 \le x \le 9$.
$f(x, 0) = 2 + 2x - x^2$. 
Max/min of this 1D function on $[0,9]$:
$f'(x) = 2 - 2x = 0 \implies x=1$.
Test endpoints and critical point:
$f(0,0) = 2$.
$f(1,0) = 3$.
$f(9,0) = -61$.

**Segment $OB$ (y-axis):** $x=0$, $0 \le y \le 9$.
$f(0, y) = 2 + 2y - y^2$.
By symmetry, critical point at $y=1$.
$f(0,1) = 3$.
$f(0,9) = -61$.

**Segment $AB$ (hypotenuse):** $y = 9-x$, $0 \le x \le 9$.
$f(x, 9-x) = 2 + 2x + 2(9-x) - x^2 - (9-x)^2 = -61 + 18x - 2x^2$.
Set derivative to 0:
$18 - 4x = 0 \implies x = 18/4 = 9/2$.
At $x=9/2$, $y=9/2$.
$f(9/2, 9/2) = -41/2$.

**(c) Summary:**
List of candidates: $4, 2, -61, 3, -41/2$.
The absolute maximum is $4$ at $(1,1)$.
The absolute minimum is $-61$ at $(0,9)$ and $(9,0)$.

### Example 6: Volume Problem
**Question:** A delivery company accepts only rectangular boxes the sum of whose length and girth does not exceed 108 in. Find the dimensions of an acceptable box of largest volume. 

**Solution:**
Let $x,y,z$ be length, width, height. Girth is $2y+2z$. We want to maximize volume $V = xyz$ subject to $x+2y+2z=108$.
We substitute $x = 108 - 2y - 2z$ into V:
$V(y,z) = (108 - 2y - 2z)yz = 108yz - 2y^2z - 2yz^2$.
Set partials to zero:
$V_y = 108z - 4yz - 2z^2 = z(108 - 4y - 2z) = 0$
$V_z = 108y - 2y^2 - 4yz = y(108 - 2y - 4z) = 0$
Exclude $y=0$ or $z=0$ (zero volume). We solve:
$4y + 2z = 108$
$2y + 4z = 108$
This yields $y=18, z=18$. Then $x=108-36-36 = 36$.
Checking second derivatives ensures this gives a maximum. $V=11664 \text{ in}^3$.

---

## Visuals / Graphs

### 1. Saddle Point and Critical Points
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="saddle_point"></div>


## Chapter Assessment

<div class="user-quiz" data-question="1. Find the local maximum, minimum, and saddle points of f(x,y) = x² + xy + y² + 3x - 3y + 4"></div>
<div class="user-quiz" data-question="2. Find absolute extrema of f(x,y) = 2x² - 4x + y² - 4y + 1 on the closed triangular plate bounded by x=0, y=2, y=2x in the first quadrant"></div>
`;

replaceMarkdown('chapter-14-7', md14_7);

fs.writeFileSync('src/data.ts', content, 'utf8');

