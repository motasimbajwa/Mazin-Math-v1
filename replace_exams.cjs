const fs = require('fs');

let code = fs.readFileSync('src/data.ts', 'utf8');

const exams147_new = `---

## Mock Exams (Past Papers)

### Mock Exam 1
<div class="user-quiz" data-question="1. Find local maximum, local minimum and saddle points of f(x,y) = 3 + 2x + 2y - 2x^2 - 2xy - y^2."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- **Goal:** Find all critical points and classify them using the Second Derivative Test.
- **Partial Derivatives:** We first need to compute \\(f_x\\) and \\(f_y\\) and set them to zero.
- **System of Equations:** Since it's a polynomial, it will yield a linear system easily solved.
- **Second Derivative Test:** Compute \\(f_{xx}\\), \\(f_{yy}\\), and \\(f_{xy}\\). Evaluate \\(D = f_{xx}f_{yy} - (f_{xy})^2\\) at each critical point.

**Step-by-Step Solution:**
1. **Find Critical Points**:
   \\(f_x = 2 - 4x - 2y = 0 \implies 2x + y = 1\\)
   \\(f_y = 2 - 2x - 2y = 0 \implies x + y = 1\\)
   Solving the system, subtract the second equation from the first: \\(x = 0\\).
   Substitute \\(x = 0\\) into the second equation: \\(0 + y = 1 \implies y = 1\\).
   Critical point: \\((0, 1)\\).

2. **Compute Second Derivatives**:
   \\(f_{xx} = -4\\)
   \\(f_{yy} = -2\\)
   \\(f_{xy} = -2\\)

3. **Evaluate the Discriminant (D)**:
   \\(D = f_{xx}f_{yy} - (f_{xy})^2 = (-4)(-2) - (-2)^2 = 8 - 4 = 4\\).

4. **Classify the Point**:
   At \\((0,1)\\), \\(D = 4 > 0\\) and \\(f_{xx} = -4 < 0\\). 
   Therefore, \\((0,1)\\) is a **local maximum**. The value is \\(f(0,1) = 3 + 0 + 2 - 0 - 0 - 1 = 4\\).
</details>

<div class="user-quiz" data-question="2. Find all local maxima, local minima and saddle points of f(x,y) = 2x^3 + 2y^3 - 9x^2 + 3y^2 - 12y."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- We need to find points where \\(\\nabla f = 0\\).
- The function is separable into x and y terms, meaning \\(f_x\\) only depends on \\(x\\) and \\(f_y\\) only depends on \\(y\\). This makes finding critical points much easier (decoupled equations).
- We'll then compute \\(D\\) for each combination of \\(x\\) and \\(y\\).

**Step-by-Step Solution:**
1. **Find Critical Points**:
   \\(f_x = 6x^2 - 18x = 6x(x - 3) = 0 \implies x = 0\\) or \\(x = 3\\).
   \\(f_y = 6y^2 + 6y - 12 = 6(y^2 + y - 2) = 6(y + 2)(y - 1) = 0 \implies y = -2\\) or \\(y = 1\\).
   Critical points: \\((0, -2)\\), \\((0, 1)\\), \\((3, -2)\\), \\((3, 1)\\).

2. **Compute Second Derivatives**:
   \\(f_{xx} = 12x - 18\\)
   \\(f_{yy} = 12y + 6\\)
   \\(f_{xy} = 0\\)

3. **Evaluate D at each point**:
   \\(D(x,y) = f_{xx}f_{yy} = (12x - 18)(12y + 6)\\)
   - At \\((0, -2)\\): \\(f_{xx} = -18\\), \\(f_{yy} = -18\\), \\(D = 324 > 0\\). Local **maximum**.
   - At \\((0, 1)\\): \\(f_{xx} = -18\\), \\(f_{yy} = 18\\), \\(D = -324 < 0\\). **Saddle point**.
   - At \\((3, -2)\\): \\(f_{xx} = 18\\), \\(f_{yy} = -18\\), \\(D = -324 < 0\\). **Saddle point**.
   - At \\((3, 1)\\): \\(f_{xx} = 18\\), \\(f_{yy} = 18\\), \\(D = 324 > 0\\). Local **minimum**.
</details>

<div class="user-quiz" data-question="3. Find absolute maximum and absolute minimum of f(x,y) = 2 + 2x + 2y - x^2 - y^2 on the triangular region bounded by x = 0, y = 0, and y = 9 - x."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- **Absolute Extrema on Closed Region:** We must evaluate \\(f\\) at all interior critical points AND on the boundary.
- The boundary has three line segments: \\(C_1\\) (bottom), \\(C_2\\) (left), and \\(C_3\\) (hypotenuse).
- Evaluate interior critical points first, then map \\(f\\) to single variables on each boundary.

**Step-by-Step Solution:**
1. **Interior Critical Points**:
   \\(f_x = 2 - 2x = 0 \implies x = 1\\)
   \\(f_y = 2 - 2y = 0 \implies y = 1\\)
   Point \\((1,1)\\) is inside the triangle. \\(f(1,1) = 2 + 2 + 2 - 1 - 1 = 4\\).

2. **Boundary \\(C_1\\) (\\(y = 0\\), \\(0 \le x \le 9\\))**:
   \\(f(x,0) = 2 + 2x - x^2\\). Let \\(g(x) = 2 + 2x - x^2\\).
   \\(g'(x) = 2 - 2x = 0 \implies x = 1\\).
   Evaluate at \\(x=1\\): \\(f(1,0) = 3\\).
   Endpoints: \\(f(0,0) = 2\\), \\(f(9,0) = 2 + 18 - 81 = -61\\).

3. **Boundary \\(C_2\\) (\\(x = 0\\), \\(0 \le y \le 9\\))**:
   Due to symmetry, \\(f(0,y) = 2 + 2y - y^2\\).
   Critical point \\(y=1\\): \\(f(0,1) = 3\\).
   Endpoints: \\(f(0,0) = 2\\), \\(f(0,9) = -61\\).

4. **Boundary \\(C_3\\) (\\(y = 9 - x\\), \\(0 \le x \le 9\\))**:
   \\(f(x, 9-x) = 2 + 2x + 2(9-x) - x^2 - (9-x)^2\\)
   \\(= 2 + 2x + 18 - 2x - x^2 - (81 - 18x + x^2)\\)
   \\(= 20 - x^2 - 81 + 18x - x^2 = -2x^2 + 18x - 61\\).
   Let \\(h(x) = -2x^2 + 18x - 61\\).
   \\(h'(x) = -4x + 18 = 0 \implies x = 4.5\\).
   \\(y = 9 - 4.5 = 4.5\\).
   \\(f(4.5, 4.5) = -2(4.5)^2 + 18(4.5) - 61 = -20.5\\).

5. **Compare Values**:
   We have values: \\(4, 3, 2, -61, -20.5\\).
   **Absolute Maximum**: \\(4\\) at \\((1,1)\\).
   **Absolute Minimum**: \\(-61\\) at \\((9,0)\\) and \\((0,9)\\).
</details>

### Mock Exam 2
<div class="user-quiz" data-question="1. Find absolute extrema of f(x,y) = x^2 - xy + y^2 + 1 on the triangular region in the first quadrant bounded by the lines: x = 0, y = 4, and y = x."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Region vertices: (0,0), (0,4), and (4,4).
- Find interior critical points.
- Parameterize three boundaries: \\(x=0\\), \\(y=4\\), \\(y=x\\).
- Find critical points on boundaries and check vertices.

**Step-by-Step Solution:**
1. **Interior Critical Points**:
   \\(f_x = 2x - y = 0 \implies y = 2x\\)
   \\(f_y = -x + 2y = 0 \implies x = 2y\\)
   Only solution is \\((0,0)\\), which is on the boundary, not interior.

2. **Boundary 1: \\(x=0\\), \\(0 \le y \le 4\\)**
   \\(f(0,y) = y^2 + 1\\).
   Critical point: \\(y=0\\).
   Endpoints: \\(f(0,0)=1\\), \\(f(0,4)=17\\).

3. **Boundary 2: \\(y=4\\), \\(0 \le x \le 4\\)**
   \\(f(x,4) = x^2 - 4x + 17\\).
   Derivative: \\(2x - 4 = 0 \implies x = 2\\).
   Point: \\((2,4)\\). \\(f(2,4) = 4 - 8 + 17 = 13\\).
   Endpoints: \\((0,4)\\) (checked) and \\((4,4)\\): \\(f(4,4) = 16 - 16 + 16 + 1 = 17\\).

4. **Boundary 3: \\(y=x\\), \\(0 \le x \le 4\\)**
   \\(f(x,x) = x^2 - x^2 + x^2 + 1 = x^2 + 1\\).
   Derivative: \\(2x = 0 \implies x = 0\\).
   Endpoints checked.

5. **Compare Values**:
   Values generated: 1, 17, 13
   **Absolute Max**: 17 at (0,4) and (4,4).
   **Absolute Min**: 1 at (0,0).
</details>

<div class="user-quiz" data-question="2. Find the local extreme values and saddle points of f(x,y) = x^4 + y^4 - 4xy + 1."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Find \\(\\nabla f = 0\\).
- \\(f_x = 4x^3 - 4y = 0 \implies y = x^3\\).
- \\(f_y = 4y^3 - 4x = 0 \implies x = y^3\\).
- Substitute to solve for x. Check Second Derivative Test for each point.

**Step-by-Step Solution**:
1. **Critical Points**: 
   Substitute \\(y = x^3\\) into \\(x = y^3\\): \\(x = (x^3)^3 = x^9\\).
   \\(x^9 - x = 0 \implies x(x^8 - 1) = 0\\).
   Real roots: \\(x = 0, x = 1, x = -1\\).
   Points: \\((0,0)\\), \\((1,1)\\), \\((-1,-1)\\).
2. **Second Derivatives**:
   \\(f_{xx} = 12x^2\\), \\(f_{yy} = 12y^2\\), \\(f_{xy} = -4\\).
   Discriminant \\(D = 144x^2y^2 - 16\\).
3. **Classify**:
   At \\((0,0)\\): \\(D = -16 < 0\\) -> **Saddle Point**.
   At \\((1,1)\\): \\(D = 144 - 16 = 128 > 0\\), \\(f_{xx} = 12 > 0\\) -> **Local Min**, value = -1.
   At \\((-1,-1)\\): \\(D = 128 > 0\\), \\(f_{xx} = 12 > 0\\) -> **Local Min**, value = -1.
</details>

<div class="user-quiz" data-question="3. Find the absolute maximum and minimum values of f(x,y) = 3xy - 6x - 3y + 7 on the closed triangular region R with vertices (0,0), (3,0), and (0,5)."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Verify interior critical points.
- Map boundaries. The triangle is bounded by \\(x=0\\), \\(y=0\\), and line \\(y = -\\frac{5}{3}x + 5\\).

**Step-by-Step Solution**:
1. **Interior Critical Points**:
   \\(f_x = 3y - 6 = 0 \implies y = 2\\)
   \\(f_y = 3x - 3 = 0 \implies x = 1\\)
   Point \\((1,2)\\). Is it inside? \\(y = -5/3(1) + 5 = 10/3 \approx 3.33\\). Yes, \\(y=2 < 3.33\\).
   \\(f(1,2) = 3(1)(2) - 6(1) - 3(2) + 7 = 6 - 6 - 6 + 7 = 1\\).
2. **Boundary \\(y=0, 0 \le x \le 3\\)**:
   \\(g(x) = -6x + 7\\). No critical pts inside. Endpoints: \\(f(0,0)=7\\), \\(f(3,0)=-11\\).
3. **Boundary \\(x=0, 0 \le y \le 5\\)**:
   \\(h(y) = -3y + 7\\). Endpoints: \\(f(0,5)=-8\\).
4. **Boundary \\(y = -\\frac{5}{3}x + 5\\)**:
   \\(f(x) = 3x(-\\frac{5}{3}x + 5) - 6x - 3(-\\frac{5}{3}x + 5) + 7\\)
   \\(= -5x^2 + 15x - 6x + 5x - 15 + 7 = -5x^2 + 14x - 8\\).
   Derivative \\(-10x + 14 = 0 \implies x = 1.4\\).
   \\(y = -5/3(1.4) + 5 = 8/3 \approx 2.67\\).
   \\(f(1.4, 2.67) = -5(1.96) + 14(1.4) - 8 = -9.8 + 19.6 - 8 = 1.8\\).
5. **Compare**: Values: 1, 7, -11, -8, 1.8.
   **Abs Max**: 7 at (0,0).
   **Abs Min**: -11 at (3,0).
</details>
`;

const exams148_new = `---

## Mock Exams (Past Papers)

### Mock Exam 1
<div class="user-quiz" data-question="1. Use Lagrange Multipliers method to evaluate the dimensions of a rectangular box, open at the top, having a volume of 32 cubic ft, and requiring the least amount of material for its construction."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- **Variables**: Let dimensions be \\(x, y\\) (base) and \\(z\\) (height).
- **Objective function**: Surface area (requires least material). Since it's open top, \\(S = xy + 2xz + 2yz\\).
- **Constraint**: Volume \\(V = xyz = 32\\). Thus \\(g(x,y,z) = xyz - 32 = 0\\).
- **Lagrange Setup**: \\(\\nabla S = \\lambda \\nabla g\\).

**Step-by-Step Solution**:
1. Compute gradients:
   \\(\\nabla S = \\langle y+2z, x+2z, 2x+2y \\rangle\\)
   \\(\\nabla g = \\langle yz, xz, xy \\rangle\\)

2. Set up equations:
   \\(y+2z = \\lambda yz\\)
   \\(x+2z = \\lambda xz\\)
   \\(2x+2y = \\lambda xy\\)
   \\(xyz = 32\\)

3. Multiply first by x, second by y, third by z:
   \\(xy+2xz = \\lambda xyz\\)
   \\(xy+2yz = \\lambda xyz\\)
   \\(2xz+2yz = \\lambda xyz\\)

   From 1 and 2: \\(xy+2xz = xy+2yz \implies 2xz = 2yz\\). Since \\(z \ne 0\\), \\(x = y\\).
   From 1 and 3: \\(xy+2xz = 2xz+2yz \implies xy = 2yz\\). Since \\(y \ne 0\\), \\(x = 2z\\).
   Thus \\(x = y = 2z\\).

4. Substitute into constraint:
   \\((2z)(2z)(z) = 4z^3 = 32 \implies z^3 = 8 \implies z = 2\\).
   Then \\(x = 4, y = 4\\).

**Answer**: Dimensions are 4 x 4 x 2 ft.
</details>

<div class="user-quiz" data-question="2. Find the extreme values of f(x,y) = x^3 + y^2 on the circle x^2 + y^2 = 1."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process**
- Constraint: \\(g(x,y) = x^2 + y^2 = 1\\).
- \\(\\nabla f = \\langle 3x^2, 2y \\rangle\\), \\(\\nabla g = \\langle 2x, 2y \\rangle\\).
- Check \\(f(x,y)\\) for points generated by Lagrange multipliers.

**Step-by-Step Solution**:
1. Equations:
   \\(3x^2 = \\lambda 2x \implies x(3x - 2\\lambda) = 0\\)
   \\(2y = \\lambda 2y \implies y(1 - \\lambda) = 0\\)
   \\(x^2 + y^2 = 1\\)

2. From second eq, either \\(y = 0\\) or \\(\\lambda = 1\\).
   **Case A: \\(y = 0\\)**
   If \\(y=0\\), first eq gives \\(x^2 = 1 \implies x = \\pm 1\\). 
   Points: \\((1,0), (-1,0)\\).
   
   **Case B: \\(\\lambda = 1\\)**
   From first eq: \\(3x^2 = 2x \implies x(3x - 2) = 0\\).
   Since \\(x=0\\) gives \\(y=\\pm 1\\) (from constraint). Point \\((0,\\pm 1)\\).
   If \\(x=2/3\\), \\(y^2 = 1 - 4/9 = 5/9 \implies y = \\pm \\frac{\\sqrt{5}}{3}\\). Points (2/3, \\pm\\sqrt{5}/3).

3. Evaluate \\(f(x,y) = x^3 + y^2\\):
   \\(f(1,0) = 1\\)
   \\(f(-1,0) = -1\\)
   \\(f(0,\\pm 1) = 1\\)
   \\(f(2/3, \\pm \\sqrt{5}/3) = (2/3)^3 + 5/9 = 8/27 + 15/27 = 23/27 \\approx 0.852\\).

**Conclusion**: Minimum is -1 at (-1, 0). Maximum is 1 at (1,0) and (0, \\pm 1).
</details>

<div class="user-quiz" data-question="3. Find extreme values of f(x,y,z) = x+y-z on the sphere x^2 + y^2 + z^2 = 1 using Lagrange multipliers."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- This is a classical symmetric problem.
- \\(\\nabla f = \\langle 1, 1, -1 \\rangle\\).
- \\(\\nabla g = \\langle 2x, 2y, 2z \\rangle\\).

**Step-by-Step Solution**:
1. Equations:
   \\(1 = 2\\lambda x \implies x = 1/(2\\lambda)\\)
   \\(1 = 2\\lambda y \implies y = 1/(2\\lambda)\\)
   \\(-1 = 2\\lambda z \implies z = -1/(2\\lambda)\\)

2. Substitute into constraint:
   \\(x^2 + y^2 + z^2 = \\frac{1}{4\\lambda^2} + \\frac{1}{4\\lambda^2} + \\frac{1}{4\\lambda^2} = \\frac{3}{4\\lambda^2} = 1\\)
   \\(4\\lambda^2 = 3 \implies \\lambda = \\pm \\frac{\\sqrt{3}}{2}\\)

3. Find Points:
   For \\(\\lambda = \\sqrt{3}/2\\): \\(x = 1/\\sqrt{3}, y = 1/\\sqrt{3}, z = -1/\\sqrt{3}\\). 
   \\(f = 3/\\sqrt{3} = \\sqrt{3}\\).
   
   For \\(\\lambda = -\\sqrt{3}/2\\): \\(x = -1/\\sqrt{3}, y = -1/\\sqrt{3}, z = 1/\\sqrt{3}\\).
   \\(f = -3/\\sqrt{3} = -\\sqrt{3}\\).

**Answer:** Max value is \\(\\sqrt{3}\\), Min value is \\(-\\sqrt{3}\\).
</details>

### Mock Exam 2
<div class="user-quiz" data-question="1. Find the points on the sphere x^2 + y^2 + z^2 = 4 that are closest to and farthest from the point (3, 1, -1)."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Minimize/Maximize the squared distance: \\(f(x,y,z) = (x-3)^2 + (y-1)^2 + (z+1)^2\\).
- Subject to \\(g(x,y,z) = x^2 + y^2 + z^2 = 4\\).

**Step-by-Step Solution:**
1. Gradients:
   \\(2(x-3) = 2\\lambda x \implies x(1-\\lambda) = 3\\)
   \\(2(y-1) = 2\\lambda y \implies y(1-\\lambda) = 1\\)
   \\(2(z+1) = 2\\lambda z \implies z(1-\\lambda) = -1\\)

2. Note that \\(1-\\lambda \\ne 0\\) (else \\(0 = 3\\) etc.). So \\(x = \\frac{3}{1-\\lambda}, y = \\frac{1}{1-\\lambda}, z = \\frac{-1}{1-\\lambda}\\).
   Notice \\(x = 3y\\), and \\(z = -y\\).

3. Substitute into constraint:
   \\((3y)^2 + y^2 + (-y)^2 = 4 \implies 11y^2 = 4 \implies y = \\pm \\frac{2}{\\sqrt{11}}\\).

4. Points:
   \\(P_1 = (\\frac{6}{\\sqrt{11}}, \\frac{2}{\\sqrt{11}}, -\\frac{2}{\\sqrt{11}})\\)
   \\(P_2 = (-\\frac{6}{\\sqrt{11}}, -\\frac{2}{\\sqrt{11}}, \\frac{2}{\\sqrt{11}})\\)

5. Calculate distances (squared) to (3,1,-1):
   Substitute points into \\(f(x,y,z)\\). Since \\(P_1\\) lies in the same octant direction, it is the closest. \\(P_2\\) is the farthest.
</details>

<div class="user-quiz" data-question="2. Use Lagrange multipliers to find the maximum volume of a rectangular box that is inscribed in a sphere of radius R."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Place sphere centered at origin: \\(x^2 + y^2 + z^2 = R^2\\).
- Let the corner in the first octant be \\((x,y,z)\\) with \\(x,y,z > 0\\).
- The volume is \\(V = (2x)(2y)(2z) = 8xyz\\).
- Maximize \\(f(x,y,z) = xyz\\) subject to \\(x^2 + y^2 + z^2 = R^2\\).

**Step-by-Step Solution**:
1. Gradients:
   \\(yz = 2\\lambda x\\)
   \\(xz = 2\\lambda y\\)
   \\(xy = 2\\lambda z\\)
2. Multiply by x, y, z respectively:
   \\(xyz = 2\\lambda x^2\\)
   \\(xyz = 2\\lambda y^2\\)
   \\(xyz = 2\\lambda z^2\\)
3. Therefore \\(x^2 = y^2 = z^2\\). Since x,y,z > 0, we have \\(x = y = z\\).
4. Substitute into constraint:
   \\(3x^2 = R^2 \implies x = R/\\sqrt{3}\\).
   The dimensions are \\(2R/\\sqrt{3} \\times 2R/\\sqrt{3} \\times 2R/\\sqrt{3}\\).
   Maximum Volume = \\(8 (R/\\sqrt{3})^3 = \\frac{8R^3}{3\\sqrt{3}}\\).
</details>

<div class="user-quiz" data-question="3. Find the extreme values of f(x,y) = 2x^2 + 3y^2 on the ellipse 4x^2 + y^2 = 4."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- \\(\\nabla f = \\langle 4x, 6y \\rangle\\)
- \\(\\nabla g = \\langle 8x, 2y \\rangle\\)

**Step-by-Step Solution**:
1. Equations:
   \\(4x = 8\\lambda x \implies x(1 - 2\\lambda) = 0\\)
   \\(6y = 2\\lambda y \implies y(3 - \\lambda) = 0\\)
   \\(4x^2 + y^2 = 4\\)
2. From first Eq: \\(x=0\\) or \\(\\lambda = 1/2\\).
   - If \\(x=0\\), then \\(y^2 = 4 \implies y = \\pm 2\\). At (0, \\pm 2), \\(f = 3(4) = 12\\).
   - If \\(\\lambda = 1/2\\), second Eq becomes \\(y(3 - 1/2) = 0 \implies 2.5y = 0 \implies y=0\\).
     If \\(y=0\\), \\(4x^2 = 4 \implies x = \\pm 1\\). At (\\pm 1, 0), \\(f = 2(1) = 2\\).
3. **Conclusion**:
   Maximum is 12 at (0, \\pm 2). Minimum is 2 at (\\pm 1, 0).
</details>
`;

const exams151_new = `---

## Mock Exams (Past Papers)

### Mock Exam 1
<div class="user-quiz" data-question="1. Sketch the region of integration, reverse the order of integration, and evaluate the integral: ∫ (from 0 to 2) ∫ (from x^2 to 2x) (4x + 2) dy dx."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- **Current region:** \\(y\\) goes from \\(x^2\\) (parabola) to \\(2x\\) (line), for \\(0 \\le x \\le 2\\).
- **Sketching:** The parabola \\(y=x^2\\) and line \\(y=2x\\) intersect at \\((0,0)\\) and \\((2,4)\\). The region is bounded between them.
- **Reversing:** To slice horizontally, \\(x\\) goes from the line (left) to the parabola (right). So \\(x = y/2\\) to \\(x = \\sqrt{y}\\). The y-bounds: \\(0 \\le y \\le 4\\).

**Step-by-Step Solution**:
1. Find reverse bounds:
   \\(0 \\le y \\le 4\\)
   \\(y/2 \\le x \\le \\sqrt{y}\\)
2. Evaluate original (or reversed):
   Integral: \\(\\int_0^4 \\int_{y/2}^{\\sqrt{y}} (4x + 2) dx dy\\)
   Inner integral: \\([2x^2 + 2x]\\) evaluated from \\(y/2\\) to \\(\\sqrt{y}\\).
   \\(= (2y + 2\\sqrt{y}) - (2(y^2/4) + 2(y/2)) = 2y + 2\\sqrt{y} - y^2/2 - y = y + 2\\sqrt{y} - y^2/2\\).
3. Outer integral:
   \\(\\int_0^4 (y + 2y^{1/2} - y^2/2) dy = [y^2/2 + \\frac{4}{3}y^{3/2} - y^3/6]_0^4\\)
   \\(= \\frac{16}{2} + \\frac{4}{3}(8) - \\frac{64}{6} = 8 + \\frac{32}{3} - \\frac{32}{3} = 8\\).
   
**Answer**: 8.
</details>

<div class="user-quiz" data-question="2. Sketch the region of integration and evaluate the integral: ∫ (from 0 to 1) ∫ (from 0 to y^2) 3y^3 e^(xy) dx dy."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Evaluate directly: Inner integral dx is straightforward because exponential has x.
- Let's try direct evaluation first since \\(\\int e^{xy} dx = \\frac{1}{y} e^{xy}\\).

**Step-by-Step Solution**:
1. Inner integral:
   \\(\\int_0^{y^2} 3y^3 e^{xy} dx = 3y^3 [\\frac{1}{y} e^{xy}]_0^{y^2} = 3y^2 (e^{y^3} - 1)\\).
2. Outer integral:
   \\(\\int_0^1 (3y^2 e^{y^3} - 3y^2) dy\\)
3. Evaluate:
   \\(\\int 3y^2 e^{y^3} dy = e^{y^3}\\). 
   \\(\\int 3y^2 dy = y^3\\).
   Result: \\([e^{y^3} - y^3]_0^1 = (e^1 - 1) - (e^0 - 0) = e - 1 - 1 = e - 2\\).

**Answer:** \\(e - 2\\).
</details>

<div class="user-quiz" data-question="3. Evaluate the double integral ∬_R (x / y^2) dA, where R = {(x,y) | 0 ≤ x ≤ 2, 1 ≤ y ≤ 2}."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Direct rectangular bounds. Separable function! \\(\\int x dx \\times \\int 1/y^2 dy\\).

**Step-by-Step Solution**:
1. Set up: \\(\\int_0^2 x dx \\int_1^2 y^{-2} dy\\)
2. Evaluate X: \\(\\int_0^2 x dx = [\\frac{x^2}{2}]_0^2 = 2\\).
3. Evaluate Y: \\(\\int_1^2 y^{-2} dy = [-y^{-1}]_1^2 = -1/2 - (-1) = 1/2\\).
4. Product: \\(2 \\times 1/2 = 1\\).

**Answer:** 1.
</details>

### Mock Exam 2
<div class="user-quiz" data-question="1. Reverse the order of integration and evaluate: ∫ (from 0 to 3) ∫ (from y^2 to 9) y cos(x^2) dx dy."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- We cannot integrate \\(\\cos(x^2)\\) with respect to \\(x\\) directly. We MUST reverse the order.
- Current region: \\(y^2 \\le x \\le 9\\) for \\(0 \\le y \\le 3\\).
- Sketch: Right of parabola \\(x = y^2\\), left of line \\(x = 9\\), between \\(y = 0\\) and \\(y = 3\\).
- Reversing: \\(x\\) goes from 0 to 9. \\(y\\) goes from 0 up to the parabola \\(\\sqrt{x}\\).

**Step-by-Step Solution**:
1. New integral:
   \\(\\int_0^9 \\int_0^{\\sqrt{x}} y \\cos(x^2) dy dx\\)
2. Inner integral (dy):
   \\(\\int_0^{\\sqrt{x}} y dy = \\frac{1}{2}y^2 |_0^{\\sqrt{x}} = \\frac{1}{2}x\\)
3. Outer integral (dx):
   \\(\\int_0^9 \\frac{1}{2}x \\cos(x^2) dx\\).
   Let \\(u = x^2\\), \\(du = 2x dx\\), so \\(x dx = du/2\\).
   Bounds: 0 to 81.
   \\( \\frac{1}{4} \\int_0^{81} \\cos(u) du = \\frac{1}{4} \\sin(81)\\).

**Answer:** \\(\\frac{1}{4}\\sin(81)\\).
</details>

<div class="user-quiz" data-question="2. Find the volume of the solid bounded above by the paraboloid z = x^2 + y^2 and below by the triangle enclosed by y = x, x = 0, and x + y = 2."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- The region \\(R\\) in xy-plane is bounded by \\(y=x\\), \\(x=0\\) (y-axis), and \\(y = 2-x\\).
- Intersection of \\(y=x\\) and \\(y=2-x\\) is \\(x=1, y=1\\).
- We slice vertically (dy dx) or horizontally (dx dy).
- Vertical slicing: x goes 0 to 1, y goes from \\(x\\) to \\(2-x\\).

**Step-by-Step Solution**:
1. Integral setup: 
   \\(\\int_0^1 \\int_x^{2-x} (x^2 + y^2) dy dx\\).
2. Inner integral:
   \\([x^2y + y^3/3]_x^{2-x} = (x^2(2-x) + \\frac{(2-x)^3}{3}) - (x^3 + \\frac{x^3}{3})\\)
   \\(= 2x^2 - x^3 + \\frac{8 - 12x + 6x^2 - x^3}{3} - \\frac{4}{3}x^3\\)
   \\(= 2x^2 - x^3 + \\frac{8}{3} - 4x + 2x^2 - \\frac{1}{3}x^3 - \\frac{4}{3}x^3\\)
   \\(= -\\frac{8}{3}x^3 + 4x^2 - 4x + \\frac{8}{3}\\)
3. Outer integral:
   \\(\\int_0^1 (-\\frac{8}{3}x^3 + 4x^2 - 4x + \\frac{8}{3}) dx\\)
   \\(= [-\\frac{2}{3}x^4 + \\frac{4}{3}x^3 - 2x^2 + \\frac{8}{3}x]_0^1\\)
   \\(= -2/3 + 4/3 - 2 + 8/3 = 10/3 - 6/3 = 4/3\\).

**Answer**: 4/3.
</details>
`;

const exams152_new = `---

## Mock Exams (Past Papers)

### Mock Exam 1
<div class="user-quiz" data-question="1. Evaluate after changing into polar form: ∫ (from -1 to 1) ∫ (from -√(1-y^2) to √(1-y^2)) ln(x^2+y^2+1) dx dy"></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- The region \\(x = -\\sqrt{1-y^2}\\) to \\(x = \\sqrt{1-y^2}\\) for \\(-1 \\le y \\le 1\\) is the full unit circle \\(x^2 + y^2 \\le 1\\).
- In polar coordinates: \\(0 \\le r \\le 1\\), \\(0 \\le \\theta \\le 2\\pi\\).
- Function: \\(\\ln(r^2+1)\\).
- Jacobian: \\(dx dy = r dr d\\theta\\).

**Step-by-Step Solution**:
1. Integral setup: 
   \\(\\int_0^{2\\pi} \\int_0^1 \\ln(r^2 + 1) r dr d\\theta\\)
2. Handle dθ:
   Since integrand is independent of \\(\\theta\\), it contributes a factor of \\(2\\pi\\).
3. Evaluate Inner Integral:
   \\(\\int_0^1 r \\ln(r^2 + 1) dr\\). 
   Let \\(u = r^2 + 1\\), \\(du = 2r dr \implies r dr = du/2\\).
   Bounds: 1 to 2.
   \\(\\frac{1}{2} \\int_1^2 \\ln(u) du\\).
   Integral of \\(\\ln u\\) is \\(u \\ln u - u\\).
   \\(\\frac{1}{2} [u \\ln u - u]_1^2 = \\frac{1}{2} ( (2\\ln 2 - 2) - (1\\ln 1 - 1) ) = \\frac{1}{2}(2\\ln 2 - 1) = \\ln 2 - \\frac{1}{2}\\).
4. Multiply by \\(2\\pi\\):
   \\(2\\pi (\\ln 2 - 1/2) = \\pi(2\\ln 2 - 1)\\).
</details>

<div class="user-quiz" data-question="2. Exchange into polar integral then evaluate: ∫ (from 0 to 2) ∫ (from 0 to √(1-(x-1)^2)) (x+y)/(x^2+y^2) dy dx."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Look at the region: \\(y\\) goes from 0 to \\(\\sqrt{1-(x-1)^2}\\), meaning \\(y^2 + (x-1)^2 \\le 1\\) and \\(y \\ge 0\\).
- Expand: \\(y^2 + x^2 - 2x + 1 \\le 1 \implies x^2 + y^2 \\le 2x\\).
- In polar coordinates: \\(r^2 \\le 2r \\cos\\theta \implies r \\le 2\\cos\\theta\\).
- The region is the upper half of the circle centered at (1,0) with radius 1. So \\(0 \\le \\theta \\le \\pi/2\\).

**Step-by-Step Solution**:
1. Polar Setup:
   Function: \\(\\frac{r \\cos\\theta + r \\sin\\theta}{r^2} = \\frac{\\cos\\theta + \\sin\\theta}{r}\\).
   Differential: \\(r dr d\\theta\\).
   Integral: \\(\\int_0^{\\pi/2} \\int_0^{2\\cos\\theta} \\frac{\\cos\\theta + \\sin\\theta}{r} r dr d\\theta = \\int_0^{\\pi/2} \\int_0^{2\\cos\\theta} (\\cos\\theta + \\sin\\theta) dr d\\theta\\).
2. Inner Integral:
   \\((\\cos\\theta + \\sin\\theta) [r]_0^{2\\cos\\theta} = 2\\cos\\theta(\\cos\\theta + \\sin\\theta) = 2\\cos^2\\theta + 2\\sin\\theta\\cos\\theta\\).
3. Outer Integral:
   \\(\\int_0^{\\pi/2} (1 + \\cos(2\\theta) + \\sin(2\\theta)) d\\theta\\)
   \\(= [\\theta + \\frac{1}{2}\\sin(2\\theta) - \\frac{1}{2}\\cos(2\\theta)]_0^{\\pi/2}\\)
   Evaluate at \\(\\pi/2\\): \\(\\pi/2 + 0 - (-1/2) = \\pi/2 + 1/2\\).
   Evaluate at 0: \\(0 + 0 - (-1/2) = 1/2\\).
   Value: \\((\\pi/2 + 1/2) - (1/2) = \\pi/2\\).
</details>

### Mock Exam 2
<div class="user-quiz" data-question="1. Changing to polar coordinates, evaluate ∬_R e^(-x^2-y^2) dA, bounded by semicircle y = √(4-x^2) and x-axis."></div>
<details>
<summary>View Detailed Solution & Thinking Process</summary>

**Thinking Process:**
- Region: upper half of circle radius 2. Thus \\(0 \\le r \\le 2\\) and \\(0 \\le \\theta \\le \\pi\\).
- Function: \\(e^{-r^2}\\).
- Differential: \\(r dr d\\theta\\).

**Step-by-Step Solution**:
1. Setup: \\(\\int_0^\\pi \\int_0^2 e^{-r^2} r dr d\\theta\\)
2. Inner Integral:
   Substitute \\(u=-r^2\\), \\(du=-2r dr\\).
   \\(\\int_0^2 r e^{-r^2} dr = [-\\frac{1}{2} e^{-r^2}]_0^2 = -\\frac{1}{2}(e^{-4} - 1) = \\frac{1 - e^{-4}}{2}\\).
3. Outer Integral:
   \\(\\int_0^\\pi \\frac{1 - e^{-4}}{2} d\\theta = \\pi \\frac{1 - e^{-4}}{2}\\).
</details>
`;

function replaceInChapter(id, newExams) {
  const chStart = code.indexOf(`id: "${id}"`);
  if (chStart === -1) return;
  const mockStart = code.indexOf("## Mock Exams (Past Papers)", chStart);
  if (mockStart === -1) return;
  const mdEnd = code.indexOf("\`\n  },", mockStart) > -1 ? code.indexOf("\`\n  },", mockStart) : code.indexOf("\`\n  }", mockStart);
  if (mdEnd === -1) return;

  code = code.substring(0, mockStart) + newExams + code.substring(mdEnd);
}

replaceInChapter("chapter-14-7", exams147_new);
replaceInChapter("chapter-14-8", exams148_new);
replaceInChapter("chapter-15-1", exams151_new);
replaceInChapter("chapter-15-2", exams152_new);

fs.writeFileSync('src/data.ts', code);
console.log('Replaced successfully');
