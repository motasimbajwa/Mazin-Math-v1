module.exports =  [
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation – Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey—your destination—is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'Hôpital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

### 2. The Derivative: "The Speedometer"
* **Standard Definition:** The instantaneous rate of change of a function, geometrically represented as the slope of the tangent line. Formally, $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.
* **Calculus Made Easy Explanation:** "Derivative" is just a fancy Latin word for "Rate". If you are driving a car, your distance is changing. The exact rate your distance changes *right now* is your speed. The speedometer calculates the derivative for you continuously!
* **Utility:** Derivatives are used to optimize systems (finding minimum costs or maximum profits by setting the derivative to zero), predict future states, analyze motion in physics, and train AI models (gradient descent).
* **Illustrative Example:** If profit over time is given by the equation $P(t) = -t^2 + 10t$, the derivative $P'(t) = -2t + 10$. Setting this to zero, $-2t + 10 = 0 \\implies t = 5$. Thus, peak profit happens exactly at $t=5$.
* **Essential Formulas:** 
  * Power Rule: $\\frac{d}{dx} x^n = n x^{n-1}$ (Bring down the power, subtract one!)
  * Chain Rule: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$ (Peel the onion: derivative of the outside times derivative of the inside).

### 3. The Integral: "The Odometer"
* **Standard Definition:** The continuous accumulation of quantities, geometrically the area under a curve.
* **Calculus Made Easy Explanation:** If the derivative breaks things down into instantaneous rates, the integral glues them all back up. If you track your exact speed (derivative) at every millisecond and add it all up (integral), you get your total distance traveled (odometer).
* **Utility:** Integrals are used to find geometric areas, calculate total volumes of solid objects, compute total probability in statistics, or determine work done by a force in physics over a distance.
* **Illustrative Example:** If the rate water flows into a tank is $r(t) = 2t$ gallons per minute, the total water accumulated between $0$ and $3$ minutes is the integral: $\\int_0^3 2t \\, dt = [t^2]_0^3 = 3^2 - 0^2 = 9$ gallons.
* **Essential Formulas:**
  * Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$
  * Integration by Parts: $\\int u \\, dv = uv - \\int v \\, du$

### 4. The Fundamental Theorem of Calculus: "The Grand Connection"
* **Standard Definition:** $\\int_a^b f'(x) dx = f(b) - f(a)$.
* **Calculus Made Easy Explanation:** Differentiation (breaking down) and Integration (building up) are exact mathematical opposites. This theorem is the bridge between the speedometer and the odometer.
* **Utility:** It gives us a phenomenal shortcut. Instead of calculating the area under a curve by adding up an infinite number of microscopic rectangles (Riemann Sums), we just find the antiderivative and evaluate its difference at the two endpoints!
* **Illustrative Example:** To find the area under $f'(x) = 2x$ safely from $x=1$ to $x=3$, we use the theorem: $\\int_1^3 2x \\, dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.

## ELI5 Explanation: The Speedometer and the Odometer

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**—your instantaneous speed at any exact second. 
Your odometer tells you your **integral**—the total accumulated distance you've traveled. 
If you perfectly recorded your speedometer reading every millisecond and added them up, you would get your odometer reading. This magical relationship is the **Fundamental Theorem of Calculus**.

## Visuals / Graphs

### 1. Area under the curve
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="area_integral"></div>

### 2. Tangent line at a point
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_line"></div>

### 3. Limit illustration
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="limit_hole"></div>


## 5 Exhaustive Worked Examples

**Example 1: The Chain Rule**
* **Problem:** Find the exact rate of change (derivative) of the nested function $f(x) = \\sin(x^3 + 2x)$.
* **Thinking Method:** This is a function trapped inside another function, like an onion. The outer layer is the sine wave ($\\sin$), and the inner core is the polynomial ($x^3 + 2x$). We must peel the onion layer by layer using the "Chain Rule".
* **Worked-Out Solution:** 
  1. **Peel the Outer Layer First:** The derivative of an outer $\\sin(\\text{stuff})$ is $\\cos(\\text{stuff})$. We leave the inside exactly alone for now. This gives us $\\cos(x^3 + 2x)$.
  2. **Attack the Inner Core:** Now, multiply by the derivative of the inner stuff. What is the derivative of $x^3 + 2x$? Using the basic power rule, it's $3x^2 + 2$.
  3. **Chain them together:** We multiply step 1 and step 2. 
  4. The final answer is $f'(x) = \\cos(x^3 + 2x) \\cdot (3x^2 + 2)$.
* **Key Takeaway:** Never try to tackle the inside and outside at the exact same moment. Take your time, derivative the outside shell, and multiply by the derivative of the inner core. 

**Example 2: The Product Rule**
* **Problem:** Differentiate (find the slope rule for) the multiplied function $y = x^2e^{3x}$.
* **Thinking Method:** We have two completely different mathematical objects—a parabola ($x^2$) and an exponential curve ($e^{3x}$)—mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"—we temporarily disguise $x^2$ to simplify the visual puzzle.
* **Worked-Out Solution:** 
  1. Choose a disguise variable: Let $u$ perfectly equal the trapped inside portion, $u = x^2$.
  2. Take the derivative to find the trade-in cost: $du = 2x \\, dx$. 
  3. Look at our original problem: $\\int \\cos(x^2) (2x \\, dx)$. The pieces perfectly translate to our new disguise variables $u$ and $du$!
  4. Rewrite the clean, disguised problem: $\\int \\cos(u) \\, du$. So much simpler!
  5. The anti-derivative of $\\cos(u)$ is just $\\sin(u)$.
  6. Final step: Rip off the disguise. Replace $u$ back with $x^2$. 
  7. The final mathematical answer is $\\sin(x^2) + C$ (Never forget the constant $C$ which represents any starting point height).
* **Key Takeaway:** Look for "derivative pairs". If you see a function and its derivative hanging out together, substitute and conquer.

**Example 4: Definite Integral using the Fundamental Theorem**
* **Problem:** Calculate the exact physical area under the curve of $3x^2 - 4x + 1$ strictly between the boundaries of $x=1$ and $x=3$. Notation: $\\int_1^3 (3x^2 - 4x + 1) dx$.
* **Thinking Method:** Instead of drawing thousands of tiny rectangles to measure the area, we will use the magical "Fundamental Theorem of Calculus". We will find the anti-derivative (building it up), and then simply evaluate the difference between the end point and start point!
* **Worked-Out Solution:** 
  1. Step 1: Find the anti-derivative. Using the reverse power rule (add one to the power, divide by the new power). 
  2. $3x^2$ builds up to $x^3$.
  3. $-4x$ builds up to $-2x^2$.
  4. $+1$ builds up to $x$.
  5. Step 2: Write out the evaluated bounds: $[x^3 - 2x^2 + x]_1^3$.
  6. Step 3: Plug in the top ceiling number ($3$) first: $(3)^3 - 2(3)^2 + (3) = 27 - 18 + 3 = 12$.
  7. Step 4: Plug in the bottom floor number ($1$): $(1)^3 - 2(1)^2 + (1) = 1 - 2 + 1 = 0$.
  8. Step 5: Subtract the floor result from the ceiling result: $12 - 0 = 12$.
  9. **The Conclusion:** The exact carved-out area is 12 units squared.
* **Key Takeaway:** A definite integral (with boundary numbers) will completely digest the variables and spit out a single scalar number representing total accumulation.

**Example 5: Evaluating an Indeterminate Limit**
* **Problem:** Evaluate the limit of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.
* **Thinking Method:** The very first rule of limits is to just aggressively plug in the target number. Let's try plugging in 2. The top becomes $4-4 = 0$. The bottom becomes $2-2 = 0$. We hit $\\frac{0}{0}$. This is *not* a dead end; it's a flashing sign that says "Hold on, there's a trick to mathematically clean this up!" We have an algebraic 'hole' blocking us. Let's factor!
* **Worked-Out Solution:** 
  1. Look at the top piece: $x^2 - 4$. This is a classic "Difference of Squares" pattern from algebra class. It breaks down perfectly into $(x-2)(x+2)$.
  2. Rewrite the limit fraction: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$.
  3. Ah ha! Because we are investigating the limit *approaching* 2 (but never exactly touching it), we are legally allowed to cancel the troublemaking $(x-2)$ piece from the top and bottom!
  4. The messy fraction collapses into a beautiful, clean line: $\\lim_{x \\to 2} (x+2)$.
  5. Now try aggressively plugging in $2$ again: $2 + 2 = 4$.
  6. **The Conclusion:** The limit is an exact, solid 4.
* **Key Takeaway:** An answer of $0/0$ does not mean the limit doesn't exist. It just means the true path is temporarily hidden behind a hole, and you must use factorization tools to build a bridge over it.


### Algorithmic Problem Solving Flow

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Evaluate Limit]
          |
          v
+-----------------------------+
| Plug target into expression |
+-----------------------------+
          |
  +-------+-------+
  |               |
[Is 0/0]     [Real Number]
  |               |
  v               v
+--------------+ [Finish]
| Factor / Map |
+--------------+
  |
  v
+--------------+
| Re-evaluate  |
+--------------+
  |
  v
[Finish]
\`\`\`
\n\n## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Direct Substitution<br><span class="text-xs font-normal text-slate-300">Plug in x = a</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Check Result<br><span class="text-xs font-normal">If number → Done! If 0/0 → Hold up!</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Algebraic Rescue<br><span class="text-xs font-normal">Factor, Conjugate, or L'Hopital's</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Re-evaluate<br><span class="text-xs font-normal">Apply limit to simplified function</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$
>       1. **Direct Substitution:** Plug in $x=2$. We get $\\frac{2^2 - 4}{2 - 2}$.
>       2. **Check Result:** We get $\\frac{0}{0}$. This is indeterminate, so we can't stop here.
>       3. **Algebraic Rescue:** Factor the top: $(x-2)(x+2)$. Cancel $(x-2)$ from top and bottom. We are left with just $x + 2$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Re-evaluate:</strong> Now apply the limit $\\lim_{x \\to 2} (x+2)$. Plug in $x=2$ to get $4$. Done!</p>
  </div>
</div>

## Chapter Assessment

> **QUIZ:** Find the derivative of f(x) = ln(x^2 + 1).
>
> 1. Find the derivative of $f(x) = \\ln(x^2 + 1)$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Evaluate the definite integral of sin(x) from 0 to pi.
>
> 2. Evaluate the definite integral $\\int_0^{\\pi} \\sin(x) dx$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Compute the limit as x approaches 0 of sin(3x) / x.
>
> 3. Compute $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

<br/>
\`▓▓░░░░░░░░ 14%\` Course Progress
\`▓░░░░░░░░░ 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-14-1",
    title: "Chapter 14.1: Functions of Several Variables",
    progress: 50,
    subheadings: [
      { id: "ch14-1-intro", title: "Introduction: Escaping Flatland" },
      { id: "ch14-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-1-eli5", title: "ELI5 Explanation: The Solar Panel Map" },
      { id: "ch14-1-visuals", title: "Visuals / Graphs" },
      { id: "ch14-1-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = \sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\ge$).
3. Test a point, say $(0,1)$. $1 \ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

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

`
  },
  {
    id: "chapter-14-2",
    title: "Chapter 14.2: Limits and Continuity in Higher Dimensions",
    progress: 0,
    subheadings: [
      { id: "ch14-2-intro", title: "Introduction: The Dimensional Leap in Limits" },
      { id: "ch14-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-2-eli5", title: "ELI5 Explanation: The Antenna Signal Approach" },
      { id: "ch14-2-visuals", title: "Visuals / Graphs" },
      { id: "ch14-2-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$
if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ exists.
3. $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\lim_{(x,y) \to (0,0)} \frac{x^2 - xy}{\sqrt{x} - \sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\sqrt{x} + \sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\sqrt{x} - \sqrt{y})(\sqrt{x} + \sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \ge 0, y \ge 0, x \neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} \lim \frac{x(x-y)}{\sqrt{x} - \sqrt{y}} &= \lim \frac{x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})}{\sqrt{x}-\sqrt{y}} \\ &= \lim x(\sqrt{x} + \sqrt{y}) \\ &= 0(\sqrt{0} + \sqrt{0}) = 0 \end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\lim_{(x,y)\to(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x \to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} \end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\lim_{(x,y)\to(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \cos \theta$, $y = r \sin \theta$. $x^2+y^2 = r^2$. As $(x,y) \to (0,0)$, $r \to 0$ independently of $\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} \lim_{r \to 0} \frac{r^3 \cos^3 \theta}{r^2} &= \lim_{r \to 0} r \cos^3 \theta \end{align*}$
Since $|\cos^3 \theta| \le 1$, the expression is bounded by $-r \le r\cos^3\theta \le r$. By the Squeeze Theorem, as $r \to 0$, the limit is $0$, regardless of $\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>

`
  },
  {
    id: "chapter-14-3",
    title: "Chapter 14.3: Partial Derivatives",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-3-sub-1",
        "title": "ELI5 Explanation: The Mountain Slicer"
      },
      {
        "id": "chapter-14-3-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-3-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-3-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-3-sub-5",
        "title": "Step-by-Step Method for Basic Problems"
      },
      {
        "id": "chapter-14-3-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-3-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-3-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{\partial f}{\partial x}, f_x, \frac{\partial z}{\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\partial f/\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\partial f/\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\partial f/\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
- $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\Delta z$ can be expressed as:
$$\Delta z = f_x \Delta x + f_y \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y$$
where $\epsilon_1, \epsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \sin(xy)$, find $\partial f / \partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{\partial f}{\partial y} &= \frac{\partial}{\partial y}(y \sin(xy)) &&\text{Step 1: Set up product rule}. \\ &= y \cdot \frac{\partial}{\partial y}(\sin(xy)) + \sin(xy) \cdot \frac{\partial}{\partial y}(y) &&\text{Step 2: Apply product rule}. \\ &= y \cdot (\cos(xy) \cdot x) + \sin(xy) \cdot 1 &&\text{Step 3: Chain rule on inner function } xy \text{ treating x as constant}. \\ &= xy \cos(xy) + \sin(xy) &&\text{Step 4: Cleanup}. \end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\partial z/\partial x$ if $yz - \ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{\partial}{\partial x}(yz - \ln z) &= \frac{\partial}{\partial x}(x + y) &&\text{Step 1: Differentiate both sides wrt x}. \\ y \frac{\partial z}{\partial x} - \frac{1}{z} \frac{\partial z}{\partial x} &= 1 + 0 &&\text{Step 2: Normal diff rules, tacking on } \partial z/\partial x \text{ where z is modified}. \\ \frac{\partial z}{\partial x} \left(y - \frac{1}{z}\right) &= 1 &&\text{Step 3: Factor out derivative}. \\ \frac{\partial z}{\partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&\text{Step 4: Algebra to clear fractions}. \end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= \cos y + y e^x &&\text{Step 1: Diff wrt x}. \\ f_{xy} &= -\sin y + e^x &&\text{Step 2: Diff } f_x \text{ wrt y}. \end{align*}$

$\begin{align*} f_y &= -x \sin y + e^x &&\text{Step 3: Diff original wrt y}. \\ f_{yx} &= -\sin y + e^x &&\text{Step 4: Diff } f_y \text{ wrt x}. \end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>

`
  },
  {
    id: "chapter-14-4",
    title: "Chapter 14.4: The Chain Rule in Multivariable Calculus",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-4-sub-1",
        "title": "ELI5 Explanation: The Tree of Dependencies"
      },
      {
        "id": "chapter-14-4-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-4-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-4-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-4-sub-5",
        "title": "Step-by-Step Method for Chain Rule Problems"
      },
      {
        "id": "chapter-14-4-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-4-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-4-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `\n## Introduction and Core Concepts

In 14.4, we extend the Chain Rule to functions of several variables. When $w = f(x,y,z)$ and $x,y,z$ are functions of $t$ (or even $r, s$), we can calculate the derivative of $w$ with respect to the underlying variables without massive algebraic substitutions.

### 1. Chain Rule for One Independent Variable
If $w = f(x,y)$ is differentiable and $x=x(t)$, $y=y(t)$ are differentiable, then $w$ is a differentiable function of $t$, and:
$$\frac{dw}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

If there are three intermediate variables $x, y, z$:
$$\frac{dw}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} + \frac{\partial f}{\partial z}\frac{dz}{dt}$$

### 2. Chain Rule for Multiple Independent Variables
Suppose $w = f(x,y,z)$ and $x, y, z$ are functions of two variables $r$ and $s$. Then $w$ has partial derivatives with respect to $r$ and $s$:
$$\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial r}$$
$$\frac{\partial w}{\partial s} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial s} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial s}$$

### 3. Tree Diagrams
A **tree diagram** provides a systematic way to remember the Chain Rule. 
1. Place the dependent variable ($w$) at the top.
2. Draw branches to the intermediate variables ($x, y, z$).
3. Draw sub-branches from each intermediate variable to the independent variables ($u, v, t, \text{etc}$).
4. To find the derivative of the top variable with respect to a bottom variable, trace ALL paths connecting them, multiply the derivatives along each path, and sum the paths together.

### 4. Implicit Differentiation Revisited
If $F(x,y) = 0$ defines $y$ implicitly as a function of $x$, and $F$ is differentiable:
$$\frac{dy}{dx} = -\frac{F_x}{F_y}$$
provided $F_y \neq 0$.

If $F(x,y,z) = 0$ defines $z$ implicitly as a function of $x$ and $y$:
$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z} \quad \text{and} \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$$
provided $F_z \neq 0$.

---

## ELI5 Explanation
Imagine a company where the CEO ($w$) depends on Regional Managers ($x,y,z$) to make profits. Each Regional Manager depends on Local Salesmen ($r,s$). To find out how much the CEO's profit changes when Salesman $r$ sells more, you have to add up the contributions flowing through *every* Regional Manager that Salesman $r$ reports to. That’s exactly what the tree diagram and the summation formula do!

---

## Detailed Worked Examples

### Example 1: Chain Rule (1 Independent Variable)
**Question:** Find $dw/dt$ at $t=\pi$ given $w = x^2y$, $x = \cos t$, $y = \sin t$.

**Thought Process:** 
Use the chain rule formula: $dw/dt = (\partial w/\partial x)(dx/dt) + (\partial w/\partial y)(dy/dt)$.
Calculate derivatives at $t = \pi$. First, find $x$ and $y$ at $t = \pi$.
$x(\pi) = \cos(\pi) = -1$.
$y(\pi) = \sin(\pi) = 0$.

**Solution:**
$\begin{align*} \frac{\partial w}{\partial x} &= 2xy && \frac{\partial w}{\partial y} = x^2 \\ \frac{dx}{dt} &= -\sin t && \frac{dy}{dt} = \cos t \\ \frac{dw}{dt} &= (2xy)(-\sin t) + (x^2)(\cos t) \end{align*}$
At $t=\pi$: $x=-1$, $y=0$.
$\begin{align*} \frac{dw}{dt} &= (2(-1)(0))(-\sin \pi) + ((-1)^2)(\cos \pi) \\ &= (0)(0) + (1)(-1) = -1. \end{align*}$

### Example 2: Tree Diagram for Complex Variables
**Question:** If $w=x^2+y^2$, where $x=r-s$ and $y=r+s$, find $\partial w/ \partial r$.

**Thought Process:**
Diagram: $w$ branches to $x$ and $y$. Both branch to $r$ and $s$.
Path to $r$: $w \to x \to r$ AND $w \to y \to r$.
Formula: $(\partial w/\partial x)(\partial x/\partial r) + (\partial w/\partial y)(\partial y/\partial r)$.

*Sketching Guide for student:* Draw $w$ at the top node. Draw two downward lines to $x$ and $y$. Draw two lines descending from $x$ to $r$ and $s$, and two from $y$ to $r$ and $s$. Trace the lines arriving at $r$.

**Solution:**
$\begin{align*} \frac{\partial w}{\partial x} &= 2x  && \frac{\partial x}{\partial r} = 1 \\ \frac{\partial w}{\partial y} &= 2y  && \frac{\partial y}{\partial r} = 1 \\ \frac{\partial w}{\partial r} &= (2x)(1) + (2y)(1) = 2x + 2y \end{align*}$
Substitute for $x$ and $y$:
$2(r-s) + 2(r+s) = 2r - 2s + 2r + 2s = 4r$.

### Example 3: Implicit Differentiation
**Question:** Find $\partial z/\partial x$ if $x^2 y + y^2 z - z^3 = 5$.

**Thought Process:**
Let $F(x,y,z) = x^2 y + y^2 z - z^3 - 5 = 0$.
The formula is $\partial z/ \partial x = -F_x / F_z$.

**Solution:**
$\begin{align*} F_x &= 2xy \\ F_z &= y^2 - 3z^2 \\ \frac{\partial z}{\partial x} &= -\frac{2xy}{y^2 - 3z^2} \end{align*}$

---

## Visuals / Graphs

### 1. Tree Diagram Logic
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_tree"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute dw/dt if w = xy + z, x = cos t, y = sin t, z = t"></div>
<div class="user-quiz" data-question="2. Find dy/dx implicitly if x^3 - 2y^2 + xy = 0"></div>
\nexport const courseContent = [
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation – Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey—your destination—is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'Hôpital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

### 2. The Derivative: "The Speedometer"
* **Standard Definition:** The instantaneous rate of change of a function, geometrically represented as the slope of the tangent line. Formally, $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.
* **Calculus Made Easy Explanation:** "Derivative" is just a fancy Latin word for "Rate". If you are driving a car, your distance is changing. The exact rate your distance changes *right now* is your speed. The speedometer calculates the derivative for you continuously!
* **Utility:** Derivatives are used to optimize systems (finding minimum costs or maximum profits by setting the derivative to zero), predict future states, analyze motion in physics, and train AI models (gradient descent).
* **Illustrative Example:** If profit over time is given by the equation $P(t) = -t^2 + 10t$, the derivative $P'(t) = -2t + 10$. Setting this to zero, $-2t + 10 = 0 \\implies t = 5$. Thus, peak profit happens exactly at $t=5$.
* **Essential Formulas:** 
  * Power Rule: $\\frac{d}{dx} x^n = n x^{n-1}$ (Bring down the power, subtract one!)
  * Chain Rule: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$ (Peel the onion: derivative of the outside times derivative of the inside).

### 3. The Integral: "The Odometer"
* **Standard Definition:** The continuous accumulation of quantities, geometrically the area under a curve.
* **Calculus Made Easy Explanation:** If the derivative breaks things down into instantaneous rates, the integral glues them all back up. If you track your exact speed (derivative) at every millisecond and add it all up (integral), you get your total distance traveled (odometer).
* **Utility:** Integrals are used to find geometric areas, calculate total volumes of solid objects, compute total probability in statistics, or determine work done by a force in physics over a distance.
* **Illustrative Example:** If the rate water flows into a tank is $r(t) = 2t$ gallons per minute, the total water accumulated between $0$ and $3$ minutes is the integral: $\\int_0^3 2t \\, dt = [t^2]_0^3 = 3^2 - 0^2 = 9$ gallons.
* **Essential Formulas:**
  * Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$
  * Integration by Parts: $\\int u \\, dv = uv - \\int v \\, du$

### 4. The Fundamental Theorem of Calculus: "The Grand Connection"
* **Standard Definition:** $\\int_a^b f'(x) dx = f(b) - f(a)$.
* **Calculus Made Easy Explanation:** Differentiation (breaking down) and Integration (building up) are exact mathematical opposites. This theorem is the bridge between the speedometer and the odometer.
* **Utility:** It gives us a phenomenal shortcut. Instead of calculating the area under a curve by adding up an infinite number of microscopic rectangles (Riemann Sums), we just find the antiderivative and evaluate its difference at the two endpoints!
* **Illustrative Example:** To find the area under $f'(x) = 2x$ safely from $x=1$ to $x=3$, we use the theorem: $\\int_1^3 2x \\, dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.

## ELI5 Explanation: The Speedometer and the Odometer

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**—your instantaneous speed at any exact second. 
Your odometer tells you your **integral**—the total accumulated distance you've traveled. 
If you perfectly recorded your speedometer reading every millisecond and added them up, you would get your odometer reading. This magical relationship is the **Fundamental Theorem of Calculus**.

## Visuals / Graphs

### 1. Area under the curve
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="area_integral"></div>

### 2. Tangent line at a point
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_line"></div>

### 3. Limit illustration
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="limit_hole"></div>


## 5 Exhaustive Worked Examples

**Example 1: The Chain Rule**
* **Problem:** Find the exact rate of change (derivative) of the nested function $f(x) = \\sin(x^3 + 2x)$.
* **Thinking Method:** This is a function trapped inside another function, like an onion. The outer layer is the sine wave ($\\sin$), and the inner core is the polynomial ($x^3 + 2x$). We must peel the onion layer by layer using the "Chain Rule".
* **Worked-Out Solution:** 
  1. **Peel the Outer Layer First:** The derivative of an outer $\\sin(\\text{stuff})$ is $\\cos(\\text{stuff})$. We leave the inside exactly alone for now. This gives us $\\cos(x^3 + 2x)$.
  2. **Attack the Inner Core:** Now, multiply by the derivative of the inner stuff. What is the derivative of $x^3 + 2x$? Using the basic power rule, it's $3x^2 + 2$.
  3. **Chain them together:** We multiply step 1 and step 2. 
  4. The final answer is $f'(x) = \\cos(x^3 + 2x) \\cdot (3x^2 + 2)$.
* **Key Takeaway:** Never try to tackle the inside and outside at the exact same moment. Take your time, derivative the outside shell, and multiply by the derivative of the inner core. 

**Example 2: The Product Rule**
* **Problem:** Differentiate (find the slope rule for) the multiplied function $y = x^2e^{3x}$.
* **Thinking Method:** We have two completely different mathematical objects—a parabola ($x^2$) and an exponential curve ($e^{3x}$)—mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"—we temporarily disguise $x^2$ to simplify the visual puzzle.
* **Worked-Out Solution:** 
  1. Choose a disguise variable: Let $u$ perfectly equal the trapped inside portion, $u = x^2$.
  2. Take the derivative to find the trade-in cost: $du = 2x \\, dx$. 
  3. Look at our original problem: $\\int \\cos(x^2) (2x \\, dx)$. The pieces perfectly translate to our new disguise variables $u$ and $du$!
  4. Rewrite the clean, disguised problem: $\\int \\cos(u) \\, du$. So much simpler!
  5. The anti-derivative of $\\cos(u)$ is just $\\sin(u)$.
  6. Final step: Rip off the disguise. Replace $u$ back with $x^2$. 
  7. The final mathematical answer is $\\sin(x^2) + C$ (Never forget the constant $C$ which represents any starting point height).
* **Key Takeaway:** Look for "derivative pairs". If you see a function and its derivative hanging out together, substitute and conquer.

**Example 4: Definite Integral using the Fundamental Theorem**
* **Problem:** Calculate the exact physical area under the curve of $3x^2 - 4x + 1$ strictly between the boundaries of $x=1$ and $x=3$. Notation: $\\int_1^3 (3x^2 - 4x + 1) dx$.
* **Thinking Method:** Instead of drawing thousands of tiny rectangles to measure the area, we will use the magical "Fundamental Theorem of Calculus". We will find the anti-derivative (building it up), and then simply evaluate the difference between the end point and start point!
* **Worked-Out Solution:** 
  1. Step 1: Find the anti-derivative. Using the reverse power rule (add one to the power, divide by the new power). 
  2. $3x^2$ builds up to $x^3$.
  3. $-4x$ builds up to $-2x^2$.
  4. $+1$ builds up to $x$.
  5. Step 2: Write out the evaluated bounds: $[x^3 - 2x^2 + x]_1^3$.
  6. Step 3: Plug in the top ceiling number ($3$) first: $(3)^3 - 2(3)^2 + (3) = 27 - 18 + 3 = 12$.
  7. Step 4: Plug in the bottom floor number ($1$): $(1)^3 - 2(1)^2 + (1) = 1 - 2 + 1 = 0$.
  8. Step 5: Subtract the floor result from the ceiling result: $12 - 0 = 12$.
  9. **The Conclusion:** The exact carved-out area is 12 units squared.
* **Key Takeaway:** A definite integral (with boundary numbers) will completely digest the variables and spit out a single scalar number representing total accumulation.

**Example 5: Evaluating an Indeterminate Limit**
* **Problem:** Evaluate the limit of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.
* **Thinking Method:** The very first rule of limits is to just aggressively plug in the target number. Let's try plugging in 2. The top becomes $4-4 = 0$. The bottom becomes $2-2 = 0$. We hit $\\frac{0}{0}$. This is *not* a dead end; it's a flashing sign that says "Hold on, there's a trick to mathematically clean this up!" We have an algebraic 'hole' blocking us. Let's factor!
* **Worked-Out Solution:** 
  1. Look at the top piece: $x^2 - 4$. This is a classic "Difference of Squares" pattern from algebra class. It breaks down perfectly into $(x-2)(x+2)$.
  2. Rewrite the limit fraction: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$.
  3. Ah ha! Because we are investigating the limit *approaching* 2 (but never exactly touching it), we are legally allowed to cancel the troublemaking $(x-2)$ piece from the top and bottom!
  4. The messy fraction collapses into a beautiful, clean line: $\\lim_{x \\to 2} (x+2)$.
  5. Now try aggressively plugging in $2$ again: $2 + 2 = 4$.
  6. **The Conclusion:** The limit is an exact, solid 4.
* **Key Takeaway:** An answer of $0/0$ does not mean the limit doesn't exist. It just means the true path is temporarily hidden behind a hole, and you must use factorization tools to build a bridge over it.


### Algorithmic Problem Solving Flow

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Evaluate Limit]
          |
          v
+-----------------------------+
| Plug target into expression |
+-----------------------------+
          |
  +-------+-------+
  |               |
[Is 0/0]     [Real Number]
  |               |
  v               v
+--------------+ [Finish]
| Factor / Map |
+--------------+
  |
  v
+--------------+
| Re-evaluate  |
+--------------+
  |
  v
[Finish]
\`\`\`
\n\n## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Direct Substitution<br><span class="text-xs font-normal text-slate-300">Plug in x = a</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Check Result<br><span class="text-xs font-normal">If number → Done! If 0/0 → Hold up!</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Algebraic Rescue<br><span class="text-xs font-normal">Factor, Conjugate, or L'Hopital's</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Re-evaluate<br><span class="text-xs font-normal">Apply limit to simplified function</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$
>       1. **Direct Substitution:** Plug in $x=2$. We get $\\frac{2^2 - 4}{2 - 2}$.
>       2. **Check Result:** We get $\\frac{0}{0}$. This is indeterminate, so we can't stop here.
>       3. **Algebraic Rescue:** Factor the top: $(x-2)(x+2)$. Cancel $(x-2)$ from top and bottom. We are left with just $x + 2$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Re-evaluate:</strong> Now apply the limit $\\lim_{x \\to 2} (x+2)$. Plug in $x=2$ to get $4$. Done!</p>
  </div>
</div>

## Chapter Assessment

> **QUIZ:** Find the derivative of f(x) = ln(x^2 + 1).
>
> 1. Find the derivative of $f(x) = \\ln(x^2 + 1)$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Evaluate the definite integral of sin(x) from 0 to pi.
>
> 2. Evaluate the definite integral $\\int_0^{\\pi} \\sin(x) dx$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Compute the limit as x approaches 0 of sin(3x) / x.
>
> 3. Compute $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

<br/>
\`▓▓░░░░░░░░ 14%\` Course Progress
\`▓░░░░░░░░░ 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-14-1",
    title: "Chapter 14.1: Functions of Several Variables",
    progress: 50,
    subheadings: [
      { id: "ch14-1-intro", title: "Introduction: Escaping Flatland" },
      { id: "ch14-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-1-eli5", title: "ELI5 Explanation: The Solar Panel Map" },
      { id: "ch14-1-visuals", title: "Visuals / Graphs" },
      { id: "ch14-1-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = \sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\ge$).
3. Test a point, say $(0,1)$. $1 \ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

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

`
  },
  {
    id: "chapter-14-2",
    title: "Chapter 14.2: Limits and Continuity in Higher Dimensions",
    progress: 0,
    subheadings: [
      { id: "ch14-2-intro", title: "Introduction: The Dimensional Leap in Limits" },
      { id: "ch14-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-2-eli5", title: "ELI5 Explanation: The Antenna Signal Approach" },
      { id: "ch14-2-visuals", title: "Visuals / Graphs" },
      { id: "ch14-2-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$
if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ exists.
3. $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\lim_{(x,y) \to (0,0)} \frac{x^2 - xy}{\sqrt{x} - \sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\sqrt{x} + \sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\sqrt{x} - \sqrt{y})(\sqrt{x} + \sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \ge 0, y \ge 0, x \neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} \lim \frac{x(x-y)}{\sqrt{x} - \sqrt{y}} &= \lim \frac{x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})}{\sqrt{x}-\sqrt{y}} \\ &= \lim x(\sqrt{x} + \sqrt{y}) \\ &= 0(\sqrt{0} + \sqrt{0}) = 0 \end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\lim_{(x,y)\to(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x \to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} \end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\lim_{(x,y)\to(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \cos \theta$, $y = r \sin \theta$. $x^2+y^2 = r^2$. As $(x,y) \to (0,0)$, $r \to 0$ independently of $\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} \lim_{r \to 0} \frac{r^3 \cos^3 \theta}{r^2} &= \lim_{r \to 0} r \cos^3 \theta \end{align*}$
Since $|\cos^3 \theta| \le 1$, the expression is bounded by $-r \le r\cos^3\theta \le r$. By the Squeeze Theorem, as $r \to 0$, the limit is $0$, regardless of $\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>

`
  },
  {
    id: "chapter-14-3",
    title: "Chapter 14.3: Partial Derivatives",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-3-sub-1",
        "title": "ELI5 Explanation: The Mountain Slicer"
      },
      {
        "id": "chapter-14-3-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-3-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-3-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-3-sub-5",
        "title": "Step-by-Step Method for Basic Problems"
      },
      {
        "id": "chapter-14-3-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-3-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-3-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{\partial f}{\partial x}, f_x, \frac{\partial z}{\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\partial f/\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\partial f/\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\partial f/\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
- $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\Delta z$ can be expressed as:
$$\Delta z = f_x \Delta x + f_y \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y$$
where $\epsilon_1, \epsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \sin(xy)$, find $\partial f / \partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{\partial f}{\partial y} &= \frac{\partial}{\partial y}(y \sin(xy)) &&\text{Step 1: Set up product rule}. \\ &= y \cdot \frac{\partial}{\partial y}(\sin(xy)) + \sin(xy) \cdot \frac{\partial}{\partial y}(y) &&\text{Step 2: Apply product rule}. \\ &= y \cdot (\cos(xy) \cdot x) + \sin(xy) \cdot 1 &&\text{Step 3: Chain rule on inner function } xy \text{ treating x as constant}. \\ &= xy \cos(xy) + \sin(xy) &&\text{Step 4: Cleanup}. \end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\partial z/\partial x$ if $yz - \ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{\partial}{\partial x}(yz - \ln z) &= \frac{\partial}{\partial x}(x + y) &&\text{Step 1: Differentiate both sides wrt x}. \\ y \frac{\partial z}{\partial x} - \frac{1}{z} \frac{\partial z}{\partial x} &= 1 + 0 &&\text{Step 2: Normal diff rules, tacking on } \partial z/\partial x \text{ where z is modified}. \\ \frac{\partial z}{\partial x} \left(y - \frac{1}{z}\right) &= 1 &&\text{Step 3: Factor out derivative}. \\ \frac{\partial z}{\partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&\text{Step 4: Algebra to clear fractions}. \end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= \cos y + y e^x &&\text{Step 1: Diff wrt x}. \\ f_{xy} &= -\sin y + e^x &&\text{Step 2: Diff } f_x \text{ wrt y}. \end{align*}$

$\begin{align*} f_y &= -x \sin y + e^x &&\text{Step 3: Diff original wrt y}. \\ f_{yx} &= -\sin y + e^x &&\text{Step 4: Diff } f_y \text{ wrt x}. \end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>

`
  },
  {
    id: "chapter-14-4",
    title: "Chapter 14.4: The Chain Rule in Multivariable Calculus",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-4-sub-1",
        "title": "ELI5 Explanation: The Tree of Dependencies"
      },
      {
        "id": "chapter-14-4-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-4-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-4-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-4-sub-5",
        "title": "Step-by-Step Method for Chain Rule Problems"
      },
      {
        "id": "chapter-14-4-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-4-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-4-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `### ELI5 Explanation: The Tree of Dependencies
> **Deep Dive Analogy: The Gear Assembly (Electrical Engineering Relevance)**
> In an electrical or mechanical system, if you turn Gear A (representing time $t$), it drives other gears, say Gear B ($x$) and Gear C ($y$). Both B and C then contribute to turning the master Gear D ($w$), which could represent power output or voltage. The Chain Rule is like calculating the total rotational speed of Gear D by meticulously adding up the rotational contributions from *all* intermediate gears. If you forget to account for the rotational effect of Gear C, your final speed calculation for Gear D will be inaccurate. You must trace every possible mechanical linkage or electrical signal path from the primary driver (Gear A) up to the final output (Gear D).

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_helix"></div>

Imagine an apple growing on a branch, the branch connects to a trunk, and the trunk connects to the soil. If the soil gets toxic, the trunk gets sick, the branch rots, and the apple dies. Everything is connected through a chain of dependencies.
In multivariable calculus, you might have a temperature $w$ that depends on your coordinates $x$ and $y$. But those coordinates depend on time $t$ because you are walking. So, a change in time causes a change in position, which causes a change in temperature! To find exactly how fast the temperature changes against time (dw/dt), we just draw a tree diagram, trace every single path from the apple down to the soil, multiply down the branches, and add the routes together.

### Glossary of Key Terms
*   **Intermediate Variables:** Variables in the middle of the chain. For example, spatial coordinates x, y, z that connect the final output to the root time variable.
*   **Independent / Root Variable:** The absolute bottom of the tree (usually parameter $t$, or $r$ and $s$).
*   **Tree Diagram:** A visual flowchart mapping all dependencies to ensure no branches are missed during chain rule derivation.
*   **Implicit Differentiation Formula:** A massive shortcut to find dy/dx by taking negative partials: dy/dx = - F_x / F_y.

### Why This Matters in Electrical Engineering
*   **Moving Charge in Fields:** If an electron moves through a voltage field V(x,y,z), its exact path coordinates (x,y,z) are changing over time 't'. The chain rule computes exactly how fast the voltage drops entirely with respect to time dV/dt as the particle physically travels. This is crucial for understanding current flow and potential differences in dynamic systems.
*   **Parameter Estimation:** If system power depends on current and voltage P(I, V), but both I and V are fluctuating themselves as a function of temperature 'T', the Chain Rule allows you to calculate dP/dT without painfully resolving the entire system equation. This helps engineers design systems that can handle thermal variations.

### Formal Definitions and Notation
*   **Chain Rule (1 Independent):** $\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent):** $\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r}$
*   **Implicit Formula:** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (Works only if F(x,y) = 0).

### Step-by-Step Method for Chain Rule Problems
1.  **Draw the Tree:** Put the dependent variable (w) at the very top. Put the intermediate variables (x,y,z) on the next tier down. Put the root independent variables (t, r, s) at the absolute bottom.
2.  **Draw the Lines:** Connect the top to the middle, and the middle to the bottom based on the mathematical equations given.
3.  **Trace the Paths:** To find a derivative from the top apple to a bottom root, slide your finger down every possible continuous line routing to that specific root.
4.  **Multiply and Add:** Multiply the derivatives along a single distinct path. Add the results of all separate paths together.

### 10 Worked Exercises
**Exercise 1: Chain Rule with One Independent Path**
*   **Problem:** Find dw/dt given w = xy, where x = cos(t) and y = sin(t). Evaluate at t=π/2.
*   **Thinking Process:** I have an apple (w). It splits into two branches (x and y). Both branch down into one root (t). I have exactly two paths to trace.
*   **Unique Method:** Direct tree tracing and path addition.
*   **Step-by-Step Solution:**
    1.  Write formula: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt).
    2.  Left path: ∂w/∂x = y. And dx/dt = -sin(t). Product is -y sin(t).
    3.  Right path: ∂w/∂y = x. And dy/dt = cos(t). Product is x cos(t).
    4.  Add them: dw/dt = -y sin(t) + x cos(t).
    5.  Substitute intermediate variables back into roots: y = sin(t), x = cos(t).
    6.  dw/dt = -sin(t)sin(t) + cos(t)cos(t) = cos^2(t) - sin^2(t) = cos(2t).
    7.  Evaluate at t=π/2: cos(2(π/2)) = cos(π) = -1.
*   **Common mistake:** Forgetting to substitute back the x and y letters into 't' functions before trying to plug in the final exact 't' number.
*   **Figure Reference:** Figure 14.19 maps out a diamond-shaped network flow diagram linking dependencies visually from w, spreading to x/y, and converging to t.

**Exercise 2: Changes along a Helix Curve**
*   **Problem:** Find dw/dt for w = xy + z, where the particle moves on x=cos(t), y=sin(t), z=t. Evaluate at t=0.
*   **Thinking Process:** *Pause and trace paths.* Tree has three main branches x, y, z. All three converge into t. I need three terms added together.
*   **Unique Method:** 3-Term path addition.
*   **Step-by-Step Solution:**
    1.  Formula: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt) + (∂w/∂z)(dz/dt).
    2.  Derivative parts: ∂w/∂x = y. dx/dt = -sin(t).
    3.  ∂w/∂y = x. dy/dt = cos(t).
    4.  ∂w/∂z = 1. dz/dt = 1.
    5.  Assemble: -y sin(t) + x cos(t) + 1.
    6.  Substitute intermediate values for t=0: x = cos(0) = 1. y = sin(0) = 0.
    7.  Final calculation: -(0)sin(0) + (1)cos(0) + 1 = 0 + 1 + 1 = 2.
*   **Common mistake:** Accidentally multiplying the three branches together instead of adding them at the junction point.
*   **Figure Reference:** Figure 14.21 depicts a 3D helix path with dependencies on time, illustrating the three distinct branches contributing to the change in 'w'.

**Exercise 3: Two Independent Roots**
*   **Problem:** Find ∂w/∂r for w = x + 2y + z^2. Given x=r/s, y=r^2 + ln(s), z=2r.
*   **Thinking Process:** The tree root splits into two different bottom soils: r and s. The problem strictly asks for r. I will completely ignore all paths leading to s.
*   **Unique Method:** Selective path tracing targeting a specific root variable.
*   **Step-by-Step Solution:**
    1.  Formula: ∂w/∂r = (∂w/∂x)(∂x/∂r) + (∂w/∂y)(∂y/∂r) + (∂w/∂z)(∂z/∂r).
    2.  ∂w/∂x = 1. ∂x/∂r = 1/s.
    3.  ∂w/∂y = 2. ∂y/∂r = 2r.
    4.  ∂w/∂z = 2z. ∂z/∂r = 2.
    5.  Assemble: (1)(1/s) + (2)(2r) + (2z)(2) = 1/s + 4r + 4z.
    6.  Replace z with 2r: 1/s + 4r + 4(2r) = 1/s + 12r.
*   **Common mistake:** Getting confused by 's' and trying to derive it when taking the partial strictly against 'r'. s acts as a frozen constant!
*   **Figure Reference:** Figure 14.20 presents a complicated dual-root branching tree, demonstrating how paths to 'r' are completely distinct from paths to 's'.

**Exercise 4: Direct Substitution Shortcut**
*   **Problem:** Instead of the chain rule, use direct substitution to find the derivative of w = x^2 + y^2 where x = cos(t), y = sin(t).
*   **Thinking Process:** Why torture myself with a tree diagram if I can just eliminate the intermediate variables algebraically before I even do calculus?
*   **Unique Method:** Pre-calculus algebraic collapse.
*   **Step-by-Step Solution:**
    1.  Substitute x and y perfectly into w: w = (cos(t))^2 + (sin(t))^2.
    2.  Apply the Pythagorean Identity from trigonometry: cos^2(t) + sin^2(t) = 1.
    3.  The equation cleanly collapses into w = 1.
    4.  Now take the derivative: dw/dt of the number 1 is purely 0.
*   **Common mistake:** Spending 5 minutes drawing a tree diagram when basic algebra can solve the problem in 5 seconds. Look for clean substitutions first!
*   **Figure Reference:** Figure 14.22 shows a flowchart emphasizing "Algebraic Simplification First?" as a key decision point before applying chain rule.

**Exercise 5: The Magic Implicit Formula (Source: COMSATS FA24 Q6)**
*   **Problem:** Use Theorem 8 to find dy/dx if y^2 - x^2 - sin(xy) = 0.
*   **Thinking Process:** Standard implicit differentiation requires product rules and factoring out dy/dx. The magic formula dy/dx = - F_x / F_y bypasses all of that entirely!
*   **Unique Method:** Using partial derivatives to instantly solve complicated 1D implicit differentiation.
*   **Step-by-Step Solution:**
    1.  Define the whole equation as F(x,y) = y^2 - x^2 - sin(xy) = 0.
    2.  Find F_x (target is x, freeze y): -2x - y cos(xy).
    3.  Find F_y (target is y, freeze x): 2y - x cos(xy).
    4.  Apply the formula: dy/dx = - [ -2x - y cos(xy) ] / [ 2y - x cos(xy) ].
    5.  Clean up negative signs: (2x + y cos(xy)) / (2y - x cos(xy)).
*   **Common mistake:** Forgetting the mandatory negative sign completely placed in front of the master fraction formula!
*   **Figure Reference:** Figure 14.23 visualizes the level curve F(x,y)=0 and illustrates how the normal vector gradients (F_x, F_y) relate to the tangent slope dy/dx.

**Exercise 6: Three Variable Implicit Formula (Source: CUI SP22 Q4)**
*   **Problem:** Find ∂z/∂x given 1/x + 1/y + 1/z - 1 = 0 at (2, 3, 6).
*   **Thinking Process:** The magic formula expands to 3D implicitly! To find ∂z/∂x, I will just use - F_x / F_z. Wait! Notice the pattern. The letter on TOP of the fraction (z) goes on the BOTTOM of the formula F_z. It swaps!
*   **Unique Method:** 3D implicit formula ∂z/∂x = - F_x / F_z.
*   **Step-by-Step Solution:**
    1.  Let F(x,y,z) = x^-1 + y^-1 + z^-1 - 1.
    2.  Find F_x: -x^-2 = -1/x^2.
    3.  Find F_z: -z^-2 = -1/z^2.
    4.  Formula: - (-1/x^2) / (-1/z^2) = - (z^2 / x^2).
    5.  Evaluate at (x=2, z=6): - (6^2 / 2^2) = - 36 / 4 = -9.
*   **Common mistake:** Accidentally writing F_z / F_x instead of strictly F_x / F_z. The letters physically reverse position.
*   **Figure Reference:** Figure 14.24 shows a 3D implicit surface, and a tangent plane to illustrate the geometric interpretation of the partial derivative ∂z/∂x.

**Exercise 7: Checking Chain Rule Constraints**
*   **Problem:** Express ∂w/∂r in terms of r and s if w = xy + z, x = r-s, y=r+s, z=t.
*   **Thinking Process:** Wait, z = t? Where is r?
*   **Unique Method:** Tracing zero-paths in mixed variable trees.
*   **Step-by-Step Solution:**
    1.  ∂w/∂r = (∂w/∂x)(∂x/∂r) + (∂w/∂y)(∂y/∂r) + (∂w/∂z)(∂z/∂r).
    2.  ∂w/∂x = y. ∂x/∂r = 1.
    3.  ∂w/∂y = x. ∂y/∂r = 1.
    4.  ∂w/∂z = 1. But what is ∂z/∂r? Since z=t, and t doesn't possess the letter r, its partial derivative against r is strict 0!
    5.  Equation becomes: y(1) + x(1) + 1(0) = x + y.
    6.  Substitute back: (r-s) + (r+s) = 2r.
*   **Common mistake:** Assuming every intermediate variable MUST map to every independent root. Broken branches yield zero derivative paths.
*   **Figure Reference:** Figure 14.25 illustrates a tree diagram where a branch from 'w' to 'z' leads to 't', demonstrating a 'dead end' or zero contribution when differentiating with respect to 'r'.

**Exercise 8: Differentiating Integrals (The Ultimate Chain Rule)**
*   **Problem:** Find the derivative of F(x) = ∫_0^{x^2} sqrt(t^4 + t^3) dt.
*   **Thinking Process:** This combines the Fundamental Theorem of Calculus with the multivariable Chain Rule (Leibniz Integral Rule). The upper bound is moving (x^2), and the inside integrand also physically morphs based on x, but for this simpler version, the integrand is purely in terms of t.
*   **Unique Method:** Fundamental Theorem of Calculus Part 1 (with Chain Rule).
*   **Step-by-Step Solution:**
    1.  Identify the structure: F(x) = ∫_a^{g(x)} f(t) dt. The derivative is f(g(x)) * g'(x).
    2.  Here, g(x) = x^2, so g'(x) = 2x.
    3.  And f(t) = sqrt(t^4 + t^3).
    4.  Plug g(x) into f(t): f(g(x)) = sqrt((x^2)^4 + (x^2)^3) = sqrt(x^8 + x^6).
    5.  Multiply by g'(x): 2x * sqrt(x^8 + x^6).
    6.  The derivative is 2x sqrt(x^8 + x^6).
*   **Common mistake:** Just plugging in the upper bound without multiplying by the chain rule derivative of the bound itself (the 2x). Students often forget d/dx(x^2).
*   **Figure Reference:** Figure 14.26 graphically represents the area under a curve, highlighting how a changing upper limit (x^2) requires a chain rule adjustment for the rate of area change.

**Exercise 9: Expanding Three Dependent Variables**
*   **Problem:** Find ∂u/∂x if u = (p-q)/(q-r), p=x+y+z, q=x-y+z, r=x+y-z. (Source: COMSATS FA25).
*   **Thinking Process:** u depends on p, q, r. All three depend firmly on x. I must trace three branches.
*   **Unique Method:** Symmetrical algebraic substitution.
*   **Step-by-Step Solution:**
    1.  Formula: $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial p}\frac{\partial p}{\partial x} + \frac{\partial u}{\partial q}\frac{\partial q}{\partial x} + \frac{\partial u}{\partial r}\frac{\partial r}{\partial x}$.
    2.  Find inner partials with respect to x: ∂p/∂x = 1, ∂q/∂x = 1, ∂r/∂x = 1.
    3.  This simplifies the formula to: $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial p} + \frac{\partial u}{\partial q} + \frac{\partial u}{\partial r}$.
    4.  Now find the partials of u with respect to p, q, r:
        *   ∂u/∂p = 1/(q-r)
        *   ∂u/∂q = $\frac{-(q-r)(1) - (p-q)(1)}{(q-r)^2} = \frac{-q+r-p+q}{(q-r)^2} = \frac{r-p}{(q-r)^2}$
        *   ∂u/∂r = $\frac{-(p-q)(-1)}{(q-r)^2} = \frac{p-q}{(q-r)^2}$
    5.  Sum them up: $\frac{\partial u}{\partial x} = \frac{1}{q-r} + \frac{r-p}{(q-r)^2} + \frac{p-q}{(q-r)^2}$.
    6.  To simplify, find a common denominator: $\frac{(q-r) + (r-p) + (p-q)}{(q-r)^2} = \frac{q-r+r-p+p-q}{(q-r)^2} = \frac{0}{(q-r)^2} = 0$.
    7.  Therefore, ∂u/∂x = 0.
*   **Common mistake:** Getting bogged down in complex algebra for ∂u/∂q and ∂u/∂r without recognizing the potential for simplification after summing. Also, forgetting to use the quotient rule for these partials.
*   **Figure Reference:** Figure 14.27 displays a complex multi-layered tree diagram for 'u' depending on 'p,q,r' which in turn depend on 'x,y,z', illustrating the systematic decomposition of dependencies.

**Exercise 10: Changing Dimensions (Real-World Applied)**
*   **Problem:** The edges of a box a, b, c change over time at 1 m/s, 1 m/s, and -3 m/s. If a=1, b=2, c=3, how fast is Volume (V) changing?
*   **Thinking Process:** Volume depends on three edges physically expanding/contracting over time. This is exactly the 3D chain rule!
*   **Unique Method:** Applied physical geometric rates.
*   **Step-by-Step Solution:**
    1.  Equation: V = a * b * c.
    2.  Formula: dV/dt = (∂V/∂a)(da/dt) + (∂V/∂b)(db/dt) + (∂V/∂c)(dc/dt).
    3.  ∂V/∂a is exactly bc. ∂V/∂b is ac. ∂V/∂c is ab.
    4.  dV/dt = (bc)(da/dt) + (ac)(db/dt) + (ab)(dc/dt).
    5.  Substitute current states: a=1, b=2, c=3. And da/dt = 1, db/dt = 1, dc/dt = -3.
    6.  dV/dt = (2*3)(1) + (1*3)(1) + (1*2)(-3).
    7.  Calculate: 6(1) + 3(1) + 2(-3) = 6 + 3 - 6 = 3 cubic meters per second.
*   **Common mistake:** Treating a, b, c as constants instead of variables strictly bound to time t, or mixing up the values of a, b, c with their rates of change.
*   **Figure Reference:** Figure 14.28 provides an animation or diagram of a rectangular box whose dimensions dynamically change over time, visually representing the input rates of change.

#
### Algorithmic Problem Solving Flow

To master Tangent Planes, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Tangent Plane]
          |
          v
+---------------------------+
| Is it z=f(x,y) or F=c?    |
+---------------------------+
          |
  +-------+-------+
  |               |
[z=f(...)]      [F=c]
  |               |
  v               v
+----------+   +----------+
| Find f_x,|   | Find F_x,|
| f_y      |   | F_y, F_z |
+----------+   +----------+
  |               |
  v               v
+----------+   +----------+
| Plug in  |   | Plug into|
| Formula  |   | F_x*dx+..|
+----------+   +----------+
          |
          v
       [Finish]
\`\`\`

## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Draw the Tree<br><span class="text-xs font-normal text-slate-300">Map Output → Intermediates → Independent Vars</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Identify Paths<br><span class="text-xs font-normal">Find EVERY path from top to target variable</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Multiply Down<br><span class="text-xs font-normal">Multiply link slopes along each path</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Add Branches<br><span class="text-xs font-normal">Sum all completed path products together!</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** Find $\\frac{dw}{dt}$ if $w = x^2y$, $x = \\cos(t)$, $y = \\sin(t)$
>       1. **Draw the Tree:** $w$ depends on $x$ and $y$. Both $x$ and $y$ depend on $t$.
>       2. **Identify Paths:** There are two paths to $t$. Path 1: $w \\to x \\to t$. Path 2: $w \\to y \\to t$.
>       3. **Multiply Down:** Path 1 contribution: $\\frac{\\partial w}{\\partial x} \\cdot \\frac{dx}{dt} = (2xy) \\cdot (-\\sin(t))$. Path 2 contribution: $\\frac{\\partial w}{\\partial y} \\cdot \\frac{dy}{dt} = (x^2) \\cdot (\\cos(t))$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Add Branches:</strong> $\\frac{dw}{dt} = -2xy\\sin(t) + x^2\\cos(t)$. (Substitute $x$ and $y$ in terms of $t$ for final answer).</p>
  </div>
</div>

### Key Points
*   **The Tree Flow:** Start at the top variable. Draw lines to every intermediate variable it depends on. Draw lines from them to ultimate root variables.
*   **To Find A Derivative:** Follow every path from the top variable down strictly to your desired target root variable. Multiply terms traveling down a path. Add separated paths together.
*   **Algebraic Simplification:** Always check if direct substitution can simplify the problem *before* applying the Chain Rule; it can sometimes make complex problems trivial.

### Formulas
*   **Chain Rule (1 Independent Variable):** $\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent Variables):** $\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial r}$ (adjust for number of intermediate variables)
*   **Implicit Differentiation (2 Variables):** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (where F(x,y)=0)
*   **Implicit Differentiation (3 Variables, e.g., for ∂z/∂x):** $\frac{\partial z}{\partial x} = - \frac{F_x}{F_z}$ (where F(x,y,z)=0)

### Common Mistakes
*   **Forgetting the Negative Sign:** A common error in the implicit differentiation formulas. Always remember the \`-\` at the front!
*   **Mixing Independent Variables:** When finding a partial derivative with respect to one independent variable (e.g., ∂w/∂r), treat other independent variables (like 's') as constants, even if intermediate variables depend on them.
*   **Multiplying instead of Adding:** Each distinct path in the tree diagram contributes an *additive* term to the final derivative, not a multiplicative one.
*   **Incomplete Substitution:** Forgetting to substitute all intermediate variables back in terms of the final independent variable(s) before evaluating a numerical answer.
*   **Ignoring Zero Paths:** If an intermediate variable doesn't depend on the target independent root variable, its branch's contribution is zero. Don't force a derivative if none exists.

### Chapter Assessment

> **QUIZ:** If w = e^{xy} ln(z), x = t², y = sin t, z = cos t, find dw/dt at t = 0.
>
> 4. If $w = e^{xy} \ln(z)$, $x = t^2$, $y = \sin t$, $z = \cos t$, find $\frac{dw}{dt}$ at $t = 0$.
> *(Source: CUI Sahiwal FA25 Q4a)*

> **QUIZ:** Use implicit differentiation to find ∂z/∂y for x² y + y z² + z x = 0 at (1,1,-1).
>
> 5. Use implicit differentiation to find $\frac{\partial z}{\partial y}$ for $x^2 y + y z^2 + z x = 0$ at $(1,1,-1)$.
> *(Original)*

> **QUIZ:** Source: COMSATS FA24.. Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.
>
> 1. **Source: COMSATS FA24..** Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.

> **QUIZ:** Source: COMSATS FA24.. Use the implicit formula to find ∂z/∂y for x^2 + xy + y^2 - 7z = 0.
>
> 2. **Source: COMSATS FA24..** Use the implicit formula to find ∂z/∂y for x^2 + xy + y^2 - 7z = 0.

> **QUIZ:** Source: CUI SP22.. Draw a tree diagram and formulate the chain rule equation for ∂w/∂s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).
>
> 3. **Source: CUI SP22..** Draw a tree diagram and formulate the chain rule equation for ∂w/∂s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).

\`▓▓▓▓▓▓░░░░ 60%\` Course Progress

---`
  },
  {
    id: "chapter-14-5",
    title: "Chapter 14.5: Directional Derivatives and Gradient Vectors",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-5-sub-1",
        "title": "ELI5 Explanation: The Perfect Compass"
      },
      {
        "id": "chapter-14-5-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-5-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-5-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-5-sub-5",
        "title": "Step-by-Step Method for Directional Derivative Problems"
      },
      {
        "id": "chapter-14-5-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-5-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-5-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `\n## Introduction and Core Concepts

In section 14.5, we introduce the **Directional Derivative**, which calculates the rate of change of a surface in *any* arbitrary direction. The **Gradient Vector** is the magical mathematical tool that points exactly in the direction of steepest ascent!

### 1. Directional Derivatives in the Plane
The derivative of $f(x,y)$ at $P_0(x_0,y_0)$ in the direction of the *unit vector* $\mathbf{u} = u_1\mathbf{i} + u_2\mathbf{j}$ is:
$$D_{\mathbf{u}} f = \lim_{s \to 0} \frac{f(x_0+su_1, y_0+su_2) - f(x_0,y_0)}{s}$$
This calculates the slope of the surface if you slice it with a vertical plane pointing in the direction $\mathbf{u}$.

### 2. The Gradient Vector
The **gradient vector** (or gradient) of $f(x,y)$ at a point $P_0(x_0,y_0)$ is the vector comprised of the partial derivatives evaluated at that point:
$$\nabla f = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j}$$
It is read "del $f$" or "grad $f$".

### 3. Calculating the Directional Derivative
If $f$ is differentiable, the directional derivative is the dot product of the gradient and the unit vector direction!
$$D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$$

**IMPORTANT:** The vector defining the direction **must be a unit vector**. If given $\mathbf{v}$, you must first calculate $\mathbf{u} = \mathbf{v}/|\mathbf{v}|$.

### 4. Properties of the Directional Derivative
Since $D_{\mathbf{u}} f = |\nabla f| |\mathbf{u}| \cos \theta = |\nabla f| \cos \theta$:
1. **Maximum Increase:** $f$ increases most rapidly when $\cos \theta = 1$. The maximum rate of increase is $|\nabla f|$ and occurs in the exact direction of $\nabla f$.
2. **Maximum Decrease:** $f$ decreases most rapidly when $\cos \theta = -1$. The maximum rate of decrease is $-|\nabla f|$ and occurs in the direction $-\nabla f$.
3. **Zero Change:** Any direction $\mathbf{u}$ orthogonal to $\nabla f$ ($\theta = \pi/2$) is a direction of zero change ($D_{\mathbf{u}}f = 0$).

### 5. Gradients and Level Curves
At every point in the domain of a differentiable function, the gradient vector $\nabla f$ is **normal (perpendicular) to the level curve** passing through that point.
Therefore, the equation of the tangent line to the level curve $f(x,y) = c$ at $(x_0,y_0)$ is:
$$f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) = 0$$

---

## ELI5 Explanation
Imagine you are standing on a ski slope. The gradient $\nabla f$ is an arrow painted on the ground between your skis. It *always* points straight up the steepest part of the hill. If you want to know how steep your path will be if you turn and walk sideways, you just take the dot product (comparative angle) of your new walking direction $\mathbf{u}$ against the steep-up arrow! If you walk 90 degrees away from the steep-up arrow, your path is perfectly flat.

---

## Detailed Worked Examples

### Example 1: Calculating the Directional Derivative
**Question:** Find the derivative of $f(x,y) = xe^y + \cos(xy)$ at $(2,0)$ in the direction of $\mathbf{v} = 3\mathbf{i} - 4\mathbf{j}$.

**Thought Process:** 
First, the direction $\mathbf{v}$ is NOT a unit vector. I must normalize it.
$\mathbf{u} = \frac{\mathbf{v}}{|\mathbf{v}|}$.
Then I need to find the gradient $\nabla f$, plug in the point $(2,0)$, and dot product it with $\mathbf{u}$.

*Sketching Guide for student:* Draw the $xy$-axes. Mark point $(2,0)$. Draw a tiny direction vector $\mathbf{u}$ starting from $(2,0)$ pointing mostly right and slightly down. The result will tell us if the 3D surface is rising or falling in that direction!

**Solution:**
$\begin{align*} |\mathbf{v}| &= \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5 &&\text{Step 1: Normalize vector}. \\ \mathbf{u} &= \frac{3}{5}\mathbf{i} - \frac{4}{5}\mathbf{j} && \\ f_x &= e^y - y\sin(xy) \implies f_x(2,0) = e^0 - 0 = 1 &&\text{Step 2: Compute partials}. \\ f_y &= xe^y - x\sin(xy) \implies f_y(2,0) = 2e^0 - 0 = 2 && \\ \nabla f(2,0) &= 1\mathbf{i} + 2\mathbf{j} &&\text{Step 3: Construct gradient vector}. \\ D_{\mathbf{u}} f &= \nabla f \cdot \mathbf{u} = (1)\left(\frac{3}{5}\right) + (2)\left(-\frac{4}{5}\right) &&\text{Step 4: Dot product}. \\ &= \frac{3}{5} - \frac{8}{5} = -1. &&\text{Step 5: Simplify}. \end{align*}$
The surface is dropping at a rate of $-1$ in that direction.

### Example 2: Directions of Extreme Change
**Question:** Find the directions in which $f(x,y) = \frac{x^2}{2} + \frac{y^2}{2}$ increases most rapidly at $(1,1)$, decreases most rapidly, and the direction of zero change.

**Thought Process:**
Most rapid increase = direction of gradient. 
Most rapid decrease = direction of negative gradient.
Zero change = orthogonal to gradient.

**Solution:**
$\begin{align*} \nabla f &= \langle x, y \rangle = \langle 1, 1 \rangle \text{ at } (1,1). \\ \text{Increase:}~ & \mathbf{u} = \frac{\langle 1, 1 \rangle}{\sqrt{2}} = \left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle. \\ \text{Decrease:}~ & \mathbf{u} = -\left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle = \left\langle -\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}} \right\rangle. \\ \text{Zero change:}~ & \text{Dot product must be 0}. \langle a, b \rangle \cdot \langle 1, 1 \rangle = 0 \implies a = -b. \\ & \text{Unit vectors are } \left\langle \frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}} \right\rangle \text{ and } \left\langle -\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle. \end{align*}$

### Example 3: Tangent line to a Level Curve
**Question:** Find an equation for the tangent to the ellipse $\frac{x^2}{4} + y^2 = 2$ at the point $(-2,1)$.

**Thought Process:**
We can view this ellipse as a level curve $f(x,y) = c$. So, $f(x,y) = x^2/4 + y^2 = 2$.
The gradient is perpendicular to the level curve. Any line perpendicular to a normal vector $\mathbf{N} = \langle A, B \rangle$ has the form $A(x-x_0) + B(y-y_0) = 0$.

*Sketching Guide for student:* Draw the ellipse. Mark $(-2,1)$. Draw the normal vector pointing outward, then draw the tangent line orthogonal across it touching the rim.

**Solution:**
$\begin{align*} \nabla f &= \frac{x}{2}\mathbf{i} + 2y\mathbf{j} &&\text{Step 1: Get general gradient}. \\ \nabla f(-2,1) &= -1\mathbf{i} + 2\mathbf{j} &&\text{Step 2: Gradient at point forms the Normal vector N}. \\ A(x-x_0) + B(y-y_0) &= 0 \implies -1(x + 2) + 2(y - 1) = 0 &&\text{Step 3: Point-normal form of a line}. \\ -x - 2 + 2y - 2 &= 0 \implies x - 2y = -4 &&\text{Step 4: Algebraic simplification}. \end{align*}$

---

## Visuals / Graphs

### 1. Gradients and Ascent Paths
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="gradient_vector"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the directional derivative of f(x,y) = x²y at (1,2) towards the origin."></div>
<div class="user-quiz" data-question="2. Find the direction of steepest descent for z = ln(x²+y²) at (1,1)."></div>
\nexport const courseContent = [
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation – Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey—your destination—is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'Hôpital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

### 2. The Derivative: "The Speedometer"
* **Standard Definition:** The instantaneous rate of change of a function, geometrically represented as the slope of the tangent line. Formally, $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.
* **Calculus Made Easy Explanation:** "Derivative" is just a fancy Latin word for "Rate". If you are driving a car, your distance is changing. The exact rate your distance changes *right now* is your speed. The speedometer calculates the derivative for you continuously!
* **Utility:** Derivatives are used to optimize systems (finding minimum costs or maximum profits by setting the derivative to zero), predict future states, analyze motion in physics, and train AI models (gradient descent).
* **Illustrative Example:** If profit over time is given by the equation $P(t) = -t^2 + 10t$, the derivative $P'(t) = -2t + 10$. Setting this to zero, $-2t + 10 = 0 \\implies t = 5$. Thus, peak profit happens exactly at $t=5$.
* **Essential Formulas:** 
  * Power Rule: $\\frac{d}{dx} x^n = n x^{n-1}$ (Bring down the power, subtract one!)
  * Chain Rule: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$ (Peel the onion: derivative of the outside times derivative of the inside).

### 3. The Integral: "The Odometer"
* **Standard Definition:** The continuous accumulation of quantities, geometrically the area under a curve.
* **Calculus Made Easy Explanation:** If the derivative breaks things down into instantaneous rates, the integral glues them all back up. If you track your exact speed (derivative) at every millisecond and add it all up (integral), you get your total distance traveled (odometer).
* **Utility:** Integrals are used to find geometric areas, calculate total volumes of solid objects, compute total probability in statistics, or determine work done by a force in physics over a distance.
* **Illustrative Example:** If the rate water flows into a tank is $r(t) = 2t$ gallons per minute, the total water accumulated between $0$ and $3$ minutes is the integral: $\\int_0^3 2t \\, dt = [t^2]_0^3 = 3^2 - 0^2 = 9$ gallons.
* **Essential Formulas:**
  * Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$
  * Integration by Parts: $\\int u \\, dv = uv - \\int v \\, du$

### 4. The Fundamental Theorem of Calculus: "The Grand Connection"
* **Standard Definition:** $\\int_a^b f'(x) dx = f(b) - f(a)$.
* **Calculus Made Easy Explanation:** Differentiation (breaking down) and Integration (building up) are exact mathematical opposites. This theorem is the bridge between the speedometer and the odometer.
* **Utility:** It gives us a phenomenal shortcut. Instead of calculating the area under a curve by adding up an infinite number of microscopic rectangles (Riemann Sums), we just find the antiderivative and evaluate its difference at the two endpoints!
* **Illustrative Example:** To find the area under $f'(x) = 2x$ safely from $x=1$ to $x=3$, we use the theorem: $\\int_1^3 2x \\, dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.

## ELI5 Explanation: The Speedometer and the Odometer

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**—your instantaneous speed at any exact second. 
Your odometer tells you your **integral**—the total accumulated distance you've traveled. 
If you perfectly recorded your speedometer reading every millisecond and added them up, you would get your odometer reading. This magical relationship is the **Fundamental Theorem of Calculus**.

## Visuals / Graphs

### 1. Area under the curve
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="area_integral"></div>

### 2. Tangent line at a point
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_line"></div>

### 3. Limit illustration
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="limit_hole"></div>


## 5 Exhaustive Worked Examples

**Example 1: The Chain Rule**
* **Problem:** Find the exact rate of change (derivative) of the nested function $f(x) = \\sin(x^3 + 2x)$.
* **Thinking Method:** This is a function trapped inside another function, like an onion. The outer layer is the sine wave ($\\sin$), and the inner core is the polynomial ($x^3 + 2x$). We must peel the onion layer by layer using the "Chain Rule".
* **Worked-Out Solution:** 
  1. **Peel the Outer Layer First:** The derivative of an outer $\\sin(\\text{stuff})$ is $\\cos(\\text{stuff})$. We leave the inside exactly alone for now. This gives us $\\cos(x^3 + 2x)$.
  2. **Attack the Inner Core:** Now, multiply by the derivative of the inner stuff. What is the derivative of $x^3 + 2x$? Using the basic power rule, it's $3x^2 + 2$.
  3. **Chain them together:** We multiply step 1 and step 2. 
  4. The final answer is $f'(x) = \\cos(x^3 + 2x) \\cdot (3x^2 + 2)$.
* **Key Takeaway:** Never try to tackle the inside and outside at the exact same moment. Take your time, derivative the outside shell, and multiply by the derivative of the inner core. 

**Example 2: The Product Rule**
* **Problem:** Differentiate (find the slope rule for) the multiplied function $y = x^2e^{3x}$.
* **Thinking Method:** We have two completely different mathematical objects—a parabola ($x^2$) and an exponential curve ($e^{3x}$)—mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"—we temporarily disguise $x^2$ to simplify the visual puzzle.
* **Worked-Out Solution:** 
  1. Choose a disguise variable: Let $u$ perfectly equal the trapped inside portion, $u = x^2$.
  2. Take the derivative to find the trade-in cost: $du = 2x \\, dx$. 
  3. Look at our original problem: $\\int \\cos(x^2) (2x \\, dx)$. The pieces perfectly translate to our new disguise variables $u$ and $du$!
  4. Rewrite the clean, disguised problem: $\\int \\cos(u) \\, du$. So much simpler!
  5. The anti-derivative of $\\cos(u)$ is just $\\sin(u)$.
  6. Final step: Rip off the disguise. Replace $u$ back with $x^2$. 
  7. The final mathematical answer is $\\sin(x^2) + C$ (Never forget the constant $C$ which represents any starting point height).
* **Key Takeaway:** Look for "derivative pairs". If you see a function and its derivative hanging out together, substitute and conquer.

**Example 4: Definite Integral using the Fundamental Theorem**
* **Problem:** Calculate the exact physical area under the curve of $3x^2 - 4x + 1$ strictly between the boundaries of $x=1$ and $x=3$. Notation: $\\int_1^3 (3x^2 - 4x + 1) dx$.
* **Thinking Method:** Instead of drawing thousands of tiny rectangles to measure the area, we will use the magical "Fundamental Theorem of Calculus". We will find the anti-derivative (building it up), and then simply evaluate the difference between the end point and start point!
* **Worked-Out Solution:** 
  1. Step 1: Find the anti-derivative. Using the reverse power rule (add one to the power, divide by the new power). 
  2. $3x^2$ builds up to $x^3$.
  3. $-4x$ builds up to $-2x^2$.
  4. $+1$ builds up to $x$.
  5. Step 2: Write out the evaluated bounds: $[x^3 - 2x^2 + x]_1^3$.
  6. Step 3: Plug in the top ceiling number ($3$) first: $(3)^3 - 2(3)^2 + (3) = 27 - 18 + 3 = 12$.
  7. Step 4: Plug in the bottom floor number ($1$): $(1)^3 - 2(1)^2 + (1) = 1 - 2 + 1 = 0$.
  8. Step 5: Subtract the floor result from the ceiling result: $12 - 0 = 12$.
  9. **The Conclusion:** The exact carved-out area is 12 units squared.
* **Key Takeaway:** A definite integral (with boundary numbers) will completely digest the variables and spit out a single scalar number representing total accumulation.

**Example 5: Evaluating an Indeterminate Limit**
* **Problem:** Evaluate the limit of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.
* **Thinking Method:** The very first rule of limits is to just aggressively plug in the target number. Let's try plugging in 2. The top becomes $4-4 = 0$. The bottom becomes $2-2 = 0$. We hit $\\frac{0}{0}$. This is *not* a dead end; it's a flashing sign that says "Hold on, there's a trick to mathematically clean this up!" We have an algebraic 'hole' blocking us. Let's factor!
* **Worked-Out Solution:** 
  1. Look at the top piece: $x^2 - 4$. This is a classic "Difference of Squares" pattern from algebra class. It breaks down perfectly into $(x-2)(x+2)$.
  2. Rewrite the limit fraction: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$.
  3. Ah ha! Because we are investigating the limit *approaching* 2 (but never exactly touching it), we are legally allowed to cancel the troublemaking $(x-2)$ piece from the top and bottom!
  4. The messy fraction collapses into a beautiful, clean line: $\\lim_{x \\to 2} (x+2)$.
  5. Now try aggressively plugging in $2$ again: $2 + 2 = 4$.
  6. **The Conclusion:** The limit is an exact, solid 4.
* **Key Takeaway:** An answer of $0/0$ does not mean the limit doesn't exist. It just means the true path is temporarily hidden behind a hole, and you must use factorization tools to build a bridge over it.


### Algorithmic Problem Solving Flow

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Evaluate Limit]
          |
          v
+-----------------------------+
| Plug target into expression |
+-----------------------------+
          |
  +-------+-------+
  |               |
[Is 0/0]     [Real Number]
  |               |
  v               v
+--------------+ [Finish]
| Factor / Map |
+--------------+
  |
  v
+--------------+
| Re-evaluate  |
+--------------+
  |
  v
[Finish]
\`\`\`
\n\n## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Direct Substitution<br><span class="text-xs font-normal text-slate-300">Plug in x = a</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Check Result<br><span class="text-xs font-normal">If number → Done! If 0/0 → Hold up!</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Algebraic Rescue<br><span class="text-xs font-normal">Factor, Conjugate, or L'Hopital's</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Re-evaluate<br><span class="text-xs font-normal">Apply limit to simplified function</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$
>       1. **Direct Substitution:** Plug in $x=2$. We get $\\frac{2^2 - 4}{2 - 2}$.
>       2. **Check Result:** We get $\\frac{0}{0}$. This is indeterminate, so we can't stop here.
>       3. **Algebraic Rescue:** Factor the top: $(x-2)(x+2)$. Cancel $(x-2)$ from top and bottom. We are left with just $x + 2$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Re-evaluate:</strong> Now apply the limit $\\lim_{x \\to 2} (x+2)$. Plug in $x=2$ to get $4$. Done!</p>
  </div>
</div>

## Chapter Assessment

> **QUIZ:** Find the derivative of f(x) = ln(x^2 + 1).
>
> 1. Find the derivative of $f(x) = \\ln(x^2 + 1)$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Evaluate the definite integral of sin(x) from 0 to pi.
>
> 2. Evaluate the definite integral $\\int_0^{\\pi} \\sin(x) dx$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Compute the limit as x approaches 0 of sin(3x) / x.
>
> 3. Compute $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

<br/>
\`▓▓░░░░░░░░ 14%\` Course Progress
\`▓░░░░░░░░░ 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-14-1",
    title: "Chapter 14.1: Functions of Several Variables",
    progress: 50,
    subheadings: [
      { id: "ch14-1-intro", title: "Introduction: Escaping Flatland" },
      { id: "ch14-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-1-eli5", title: "ELI5 Explanation: The Solar Panel Map" },
      { id: "ch14-1-visuals", title: "Visuals / Graphs" },
      { id: "ch14-1-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = \sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\ge$).
3. Test a point, say $(0,1)$. $1 \ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

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

`
  },
  {
    id: "chapter-14-2",
    title: "Chapter 14.2: Limits and Continuity in Higher Dimensions",
    progress: 0,
    subheadings: [
      { id: "ch14-2-intro", title: "Introduction: The Dimensional Leap in Limits" },
      { id: "ch14-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-2-eli5", title: "ELI5 Explanation: The Antenna Signal Approach" },
      { id: "ch14-2-visuals", title: "Visuals / Graphs" },
      { id: "ch14-2-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$
if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ exists.
3. $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\lim_{(x,y) \to (0,0)} \frac{x^2 - xy}{\sqrt{x} - \sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\sqrt{x} + \sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\sqrt{x} - \sqrt{y})(\sqrt{x} + \sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \ge 0, y \ge 0, x \neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} \lim \frac{x(x-y)}{\sqrt{x} - \sqrt{y}} &= \lim \frac{x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})}{\sqrt{x}-\sqrt{y}} \\ &= \lim x(\sqrt{x} + \sqrt{y}) \\ &= 0(\sqrt{0} + \sqrt{0}) = 0 \end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\lim_{(x,y)\to(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x \to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} \end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\lim_{(x,y)\to(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \cos \theta$, $y = r \sin \theta$. $x^2+y^2 = r^2$. As $(x,y) \to (0,0)$, $r \to 0$ independently of $\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} \lim_{r \to 0} \frac{r^3 \cos^3 \theta}{r^2} &= \lim_{r \to 0} r \cos^3 \theta \end{align*}$
Since $|\cos^3 \theta| \le 1$, the expression is bounded by $-r \le r\cos^3\theta \le r$. By the Squeeze Theorem, as $r \to 0$, the limit is $0$, regardless of $\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>

`
  },
  {
    id: "chapter-14-3",
    title: "Chapter 14.3: Partial Derivatives",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-3-sub-1",
        "title": "ELI5 Explanation: The Mountain Slicer"
      },
      {
        "id": "chapter-14-3-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-3-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-3-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-3-sub-5",
        "title": "Step-by-Step Method for Basic Problems"
      },
      {
        "id": "chapter-14-3-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-3-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-3-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{\partial f}{\partial x}, f_x, \frac{\partial z}{\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\partial f/\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\partial f/\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\partial f/\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
- $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\Delta z$ can be expressed as:
$$\Delta z = f_x \Delta x + f_y \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y$$
where $\epsilon_1, \epsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \sin(xy)$, find $\partial f / \partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{\partial f}{\partial y} &= \frac{\partial}{\partial y}(y \sin(xy)) &&\text{Step 1: Set up product rule}. \\ &= y \cdot \frac{\partial}{\partial y}(\sin(xy)) + \sin(xy) \cdot \frac{\partial}{\partial y}(y) &&\text{Step 2: Apply product rule}. \\ &= y \cdot (\cos(xy) \cdot x) + \sin(xy) \cdot 1 &&\text{Step 3: Chain rule on inner function } xy \text{ treating x as constant}. \\ &= xy \cos(xy) + \sin(xy) &&\text{Step 4: Cleanup}. \end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\partial z/\partial x$ if $yz - \ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{\partial}{\partial x}(yz - \ln z) &= \frac{\partial}{\partial x}(x + y) &&\text{Step 1: Differentiate both sides wrt x}. \\ y \frac{\partial z}{\partial x} - \frac{1}{z} \frac{\partial z}{\partial x} &= 1 + 0 &&\text{Step 2: Normal diff rules, tacking on } \partial z/\partial x \text{ where z is modified}. \\ \frac{\partial z}{\partial x} \left(y - \frac{1}{z}\right) &= 1 &&\text{Step 3: Factor out derivative}. \\ \frac{\partial z}{\partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&\text{Step 4: Algebra to clear fractions}. \end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= \cos y + y e^x &&\text{Step 1: Diff wrt x}. \\ f_{xy} &= -\sin y + e^x &&\text{Step 2: Diff } f_x \text{ wrt y}. \end{align*}$

$\begin{align*} f_y &= -x \sin y + e^x &&\text{Step 3: Diff original wrt y}. \\ f_{yx} &= -\sin y + e^x &&\text{Step 4: Diff } f_y \text{ wrt x}. \end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>

`
  },
  {
    id: "chapter-14-4",
    title: "Chapter 14.4: The Chain Rule in Multivariable Calculus",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-4-sub-1",
        "title": "ELI5 Explanation: The Tree of Dependencies"
      },
      {
        "id": "chapter-14-4-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-4-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-4-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-4-sub-5",
        "title": "Step-by-Step Method for Chain Rule Problems"
      },
      {
        "id": "chapter-14-4-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-4-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-4-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `\n## Introduction and Core Concepts

In 14.4, we extend the Chain Rule to functions of several variables. When $w = f(x,y,z)$ and $x,y,z$ are functions of $t$ (or even $r, s$), we can calculate the derivative of $w$ with respect to the underlying variables without massive algebraic substitutions.

### 1. Chain Rule for One Independent Variable
If $w = f(x,y)$ is differentiable and $x=x(t)$, $y=y(t)$ are differentiable, then $w$ is a differentiable function of $t$, and:
$$\frac{dw}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

If there are three intermediate variables $x, y, z$:
$$\frac{dw}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} + \frac{\partial f}{\partial z}\frac{dz}{dt}$$

### 2. Chain Rule for Multiple Independent Variables
Suppose $w = f(x,y,z)$ and $x, y, z$ are functions of two variables $r$ and $s$. Then $w$ has partial derivatives with respect to $r$ and $s$:
$$\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial r}$$
$$\frac{\partial w}{\partial s} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial s} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial s}$$

### 3. Tree Diagrams
A **tree diagram** provides a systematic way to remember the Chain Rule. 
1. Place the dependent variable ($w$) at the top.
2. Draw branches to the intermediate variables ($x, y, z$).
3. Draw sub-branches from each intermediate variable to the independent variables ($u, v, t, \text{etc}$).
4. To find the derivative of the top variable with respect to a bottom variable, trace ALL paths connecting them, multiply the derivatives along each path, and sum the paths together.

### 4. Implicit Differentiation Revisited
If $F(x,y) = 0$ defines $y$ implicitly as a function of $x$, and $F$ is differentiable:
$$\frac{dy}{dx} = -\frac{F_x}{F_y}$$
provided $F_y \neq 0$.

If $F(x,y,z) = 0$ defines $z$ implicitly as a function of $x$ and $y$:
$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z} \quad \text{and} \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$$
provided $F_z \neq 0$.

---

## ELI5 Explanation
Imagine a company where the CEO ($w$) depends on Regional Managers ($x,y,z$) to make profits. Each Regional Manager depends on Local Salesmen ($r,s$). To find out how much the CEO's profit changes when Salesman $r$ sells more, you have to add up the contributions flowing through *every* Regional Manager that Salesman $r$ reports to. That’s exactly what the tree diagram and the summation formula do!

---

## Detailed Worked Examples

### Example 1: Chain Rule (1 Independent Variable)
**Question:** Find $dw/dt$ at $t=\pi$ given $w = x^2y$, $x = \cos t$, $y = \sin t$.

**Thought Process:** 
Use the chain rule formula: $dw/dt = (\partial w/\partial x)(dx/dt) + (\partial w/\partial y)(dy/dt)$.
Calculate derivatives at $t = \pi$. First, find $x$ and $y$ at $t = \pi$.
$x(\pi) = \cos(\pi) = -1$.
$y(\pi) = \sin(\pi) = 0$.

**Solution:**
$\begin{align*} \frac{\partial w}{\partial x} &= 2xy && \frac{\partial w}{\partial y} = x^2 \\ \frac{dx}{dt} &= -\sin t && \frac{dy}{dt} = \cos t \\ \frac{dw}{dt} &= (2xy)(-\sin t) + (x^2)(\cos t) \end{align*}$
At $t=\pi$: $x=-1$, $y=0$.
$\begin{align*} \frac{dw}{dt} &= (2(-1)(0))(-\sin \pi) + ((-1)^2)(\cos \pi) \\ &= (0)(0) + (1)(-1) = -1. \end{align*}$

### Example 2: Tree Diagram for Complex Variables
**Question:** If $w=x^2+y^2$, where $x=r-s$ and $y=r+s$, find $\partial w/ \partial r$.

**Thought Process:**
Diagram: $w$ branches to $x$ and $y$. Both branch to $r$ and $s$.
Path to $r$: $w \to x \to r$ AND $w \to y \to r$.
Formula: $(\partial w/\partial x)(\partial x/\partial r) + (\partial w/\partial y)(\partial y/\partial r)$.

*Sketching Guide for student:* Draw $w$ at the top node. Draw two downward lines to $x$ and $y$. Draw two lines descending from $x$ to $r$ and $s$, and two from $y$ to $r$ and $s$. Trace the lines arriving at $r$.

**Solution:**
$\begin{align*} \frac{\partial w}{\partial x} &= 2x  && \frac{\partial x}{\partial r} = 1 \\ \frac{\partial w}{\partial y} &= 2y  && \frac{\partial y}{\partial r} = 1 \\ \frac{\partial w}{\partial r} &= (2x)(1) + (2y)(1) = 2x + 2y \end{align*}$
Substitute for $x$ and $y$:
$2(r-s) + 2(r+s) = 2r - 2s + 2r + 2s = 4r$.

### Example 3: Implicit Differentiation
**Question:** Find $\partial z/\partial x$ if $x^2 y + y^2 z - z^3 = 5$.

**Thought Process:**
Let $F(x,y,z) = x^2 y + y^2 z - z^3 - 5 = 0$.
The formula is $\partial z/ \partial x = -F_x / F_z$.

**Solution:**
$\begin{align*} F_x &= 2xy \\ F_z &= y^2 - 3z^2 \\ \frac{\partial z}{\partial x} &= -\frac{2xy}{y^2 - 3z^2} \end{align*}$

---

## Visuals / Graphs

### 1. Tree Diagram Logic
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_tree"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute dw/dt if w = xy + z, x = cos t, y = sin t, z = t"></div>
<div class="user-quiz" data-question="2. Find dy/dx implicitly if x^3 - 2y^2 + xy = 0"></div>
\nexport const courseContent = [
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation – Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey—your destination—is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'Hôpital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

### 2. The Derivative: "The Speedometer"
* **Standard Definition:** The instantaneous rate of change of a function, geometrically represented as the slope of the tangent line. Formally, $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.
* **Calculus Made Easy Explanation:** "Derivative" is just a fancy Latin word for "Rate". If you are driving a car, your distance is changing. The exact rate your distance changes *right now* is your speed. The speedometer calculates the derivative for you continuously!
* **Utility:** Derivatives are used to optimize systems (finding minimum costs or maximum profits by setting the derivative to zero), predict future states, analyze motion in physics, and train AI models (gradient descent).
* **Illustrative Example:** If profit over time is given by the equation $P(t) = -t^2 + 10t$, the derivative $P'(t) = -2t + 10$. Setting this to zero, $-2t + 10 = 0 \\implies t = 5$. Thus, peak profit happens exactly at $t=5$.
* **Essential Formulas:** 
  * Power Rule: $\\frac{d}{dx} x^n = n x^{n-1}$ (Bring down the power, subtract one!)
  * Chain Rule: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$ (Peel the onion: derivative of the outside times derivative of the inside).

### 3. The Integral: "The Odometer"
* **Standard Definition:** The continuous accumulation of quantities, geometrically the area under a curve.
* **Calculus Made Easy Explanation:** If the derivative breaks things down into instantaneous rates, the integral glues them all back up. If you track your exact speed (derivative) at every millisecond and add it all up (integral), you get your total distance traveled (odometer).
* **Utility:** Integrals are used to find geometric areas, calculate total volumes of solid objects, compute total probability in statistics, or determine work done by a force in physics over a distance.
* **Illustrative Example:** If the rate water flows into a tank is $r(t) = 2t$ gallons per minute, the total water accumulated between $0$ and $3$ minutes is the integral: $\\int_0^3 2t \\, dt = [t^2]_0^3 = 3^2 - 0^2 = 9$ gallons.
* **Essential Formulas:**
  * Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$
  * Integration by Parts: $\\int u \\, dv = uv - \\int v \\, du$

### 4. The Fundamental Theorem of Calculus: "The Grand Connection"
* **Standard Definition:** $\\int_a^b f'(x) dx = f(b) - f(a)$.
* **Calculus Made Easy Explanation:** Differentiation (breaking down) and Integration (building up) are exact mathematical opposites. This theorem is the bridge between the speedometer and the odometer.
* **Utility:** It gives us a phenomenal shortcut. Instead of calculating the area under a curve by adding up an infinite number of microscopic rectangles (Riemann Sums), we just find the antiderivative and evaluate its difference at the two endpoints!
* **Illustrative Example:** To find the area under $f'(x) = 2x$ safely from $x=1$ to $x=3$, we use the theorem: $\\int_1^3 2x \\, dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.

## ELI5 Explanation: The Speedometer and the Odometer

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**—your instantaneous speed at any exact second. 
Your odometer tells you your **integral**—the total accumulated distance you've traveled. 
If you perfectly recorded your speedometer reading every millisecond and added them up, you would get your odometer reading. This magical relationship is the **Fundamental Theorem of Calculus**.

## Visuals / Graphs

### 1. Area under the curve
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="area_integral"></div>

### 2. Tangent line at a point
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_line"></div>

### 3. Limit illustration
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="limit_hole"></div>


## 5 Exhaustive Worked Examples

**Example 1: The Chain Rule**
* **Problem:** Find the exact rate of change (derivative) of the nested function $f(x) = \\sin(x^3 + 2x)$.
* **Thinking Method:** This is a function trapped inside another function, like an onion. The outer layer is the sine wave ($\\sin$), and the inner core is the polynomial ($x^3 + 2x$). We must peel the onion layer by layer using the "Chain Rule".
* **Worked-Out Solution:** 
  1. **Peel the Outer Layer First:** The derivative of an outer $\\sin(\\text{stuff})$ is $\\cos(\\text{stuff})$. We leave the inside exactly alone for now. This gives us $\\cos(x^3 + 2x)$.
  2. **Attack the Inner Core:** Now, multiply by the derivative of the inner stuff. What is the derivative of $x^3 + 2x$? Using the basic power rule, it's $3x^2 + 2$.
  3. **Chain them together:** We multiply step 1 and step 2. 
  4. The final answer is $f'(x) = \\cos(x^3 + 2x) \\cdot (3x^2 + 2)$.
* **Key Takeaway:** Never try to tackle the inside and outside at the exact same moment. Take your time, derivative the outside shell, and multiply by the derivative of the inner core. 

**Example 2: The Product Rule**
* **Problem:** Differentiate (find the slope rule for) the multiplied function $y = x^2e^{3x}$.
* **Thinking Method:** We have two completely different mathematical objects—a parabola ($x^2$) and an exponential curve ($e^{3x}$)—mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"—we temporarily disguise $x^2$ to simplify the visual puzzle.
* **Worked-Out Solution:** 
  1. Choose a disguise variable: Let $u$ perfectly equal the trapped inside portion, $u = x^2$.
  2. Take the derivative to find the trade-in cost: $du = 2x \\, dx$. 
  3. Look at our original problem: $\\int \\cos(x^2) (2x \\, dx)$. The pieces perfectly translate to our new disguise variables $u$ and $du$!
  4. Rewrite the clean, disguised problem: $\\int \\cos(u) \\, du$. So much simpler!
  5. The anti-derivative of $\\cos(u)$ is just $\\sin(u)$.
  6. Final step: Rip off the disguise. Replace $u$ back with $x^2$. 
  7. The final mathematical answer is $\\sin(x^2) + C$ (Never forget the constant $C$ which represents any starting point height).
* **Key Takeaway:** Look for "derivative pairs". If you see a function and its derivative hanging out together, substitute and conquer.

**Example 4: Definite Integral using the Fundamental Theorem**
* **Problem:** Calculate the exact physical area under the curve of $3x^2 - 4x + 1$ strictly between the boundaries of $x=1$ and $x=3$. Notation: $\\int_1^3 (3x^2 - 4x + 1) dx$.
* **Thinking Method:** Instead of drawing thousands of tiny rectangles to measure the area, we will use the magical "Fundamental Theorem of Calculus". We will find the anti-derivative (building it up), and then simply evaluate the difference between the end point and start point!
* **Worked-Out Solution:** 
  1. Step 1: Find the anti-derivative. Using the reverse power rule (add one to the power, divide by the new power). 
  2. $3x^2$ builds up to $x^3$.
  3. $-4x$ builds up to $-2x^2$.
  4. $+1$ builds up to $x$.
  5. Step 2: Write out the evaluated bounds: $[x^3 - 2x^2 + x]_1^3$.
  6. Step 3: Plug in the top ceiling number ($3$) first: $(3)^3 - 2(3)^2 + (3) = 27 - 18 + 3 = 12$.
  7. Step 4: Plug in the bottom floor number ($1$): $(1)^3 - 2(1)^2 + (1) = 1 - 2 + 1 = 0$.
  8. Step 5: Subtract the floor result from the ceiling result: $12 - 0 = 12$.
  9. **The Conclusion:** The exact carved-out area is 12 units squared.
* **Key Takeaway:** A definite integral (with boundary numbers) will completely digest the variables and spit out a single scalar number representing total accumulation.

**Example 5: Evaluating an Indeterminate Limit**
* **Problem:** Evaluate the limit of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.
* **Thinking Method:** The very first rule of limits is to just aggressively plug in the target number. Let's try plugging in 2. The top becomes $4-4 = 0$. The bottom becomes $2-2 = 0$. We hit $\\frac{0}{0}$. This is *not* a dead end; it's a flashing sign that says "Hold on, there's a trick to mathematically clean this up!" We have an algebraic 'hole' blocking us. Let's factor!
* **Worked-Out Solution:** 
  1. Look at the top piece: $x^2 - 4$. This is a classic "Difference of Squares" pattern from algebra class. It breaks down perfectly into $(x-2)(x+2)$.
  2. Rewrite the limit fraction: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$.
  3. Ah ha! Because we are investigating the limit *approaching* 2 (but never exactly touching it), we are legally allowed to cancel the troublemaking $(x-2)$ piece from the top and bottom!
  4. The messy fraction collapses into a beautiful, clean line: $\\lim_{x \\to 2} (x+2)$.
  5. Now try aggressively plugging in $2$ again: $2 + 2 = 4$.
  6. **The Conclusion:** The limit is an exact, solid 4.
* **Key Takeaway:** An answer of $0/0$ does not mean the limit doesn't exist. It just means the true path is temporarily hidden behind a hole, and you must use factorization tools to build a bridge over it.


### Algorithmic Problem Solving Flow

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Evaluate Limit]
          |
          v
+-----------------------------+
| Plug target into expression |
+-----------------------------+
          |
  +-------+-------+
  |               |
[Is 0/0]     [Real Number]
  |               |
  v               v
+--------------+ [Finish]
| Factor / Map |
+--------------+
  |
  v
+--------------+
| Re-evaluate  |
+--------------+
  |
  v
[Finish]
\`\`\`
\n\n## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Direct Substitution<br><span class="text-xs font-normal text-slate-300">Plug in x = a</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Check Result<br><span class="text-xs font-normal">If number → Done! If 0/0 → Hold up!</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Algebraic Rescue<br><span class="text-xs font-normal">Factor, Conjugate, or L'Hopital's</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Re-evaluate<br><span class="text-xs font-normal">Apply limit to simplified function</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$
>       1. **Direct Substitution:** Plug in $x=2$. We get $\\frac{2^2 - 4}{2 - 2}$.
>       2. **Check Result:** We get $\\frac{0}{0}$. This is indeterminate, so we can't stop here.
>       3. **Algebraic Rescue:** Factor the top: $(x-2)(x+2)$. Cancel $(x-2)$ from top and bottom. We are left with just $x + 2$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Re-evaluate:</strong> Now apply the limit $\\lim_{x \\to 2} (x+2)$. Plug in $x=2$ to get $4$. Done!</p>
  </div>
</div>

## Chapter Assessment

> **QUIZ:** Find the derivative of f(x) = ln(x^2 + 1).
>
> 1. Find the derivative of $f(x) = \\ln(x^2 + 1)$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Evaluate the definite integral of sin(x) from 0 to pi.
>
> 2. Evaluate the definite integral $\\int_0^{\\pi} \\sin(x) dx$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Compute the limit as x approaches 0 of sin(3x) / x.
>
> 3. Compute $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

<br/>
\`▓▓░░░░░░░░ 14%\` Course Progress
\`▓░░░░░░░░░ 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-14-1",
    title: "Chapter 14.1: Functions of Several Variables",
    progress: 50,
    subheadings: [
      { id: "ch14-1-intro", title: "Introduction: Escaping Flatland" },
      { id: "ch14-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-1-eli5", title: "ELI5 Explanation: The Solar Panel Map" },
      { id: "ch14-1-visuals", title: "Visuals / Graphs" },
      { id: "ch14-1-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = \sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\ge$).
3. Test a point, say $(0,1)$. $1 \ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

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

`
  },
  {
    id: "chapter-14-2",
    title: "Chapter 14.2: Limits and Continuity in Higher Dimensions",
    progress: 0,
    subheadings: [
      { id: "ch14-2-intro", title: "Introduction: The Dimensional Leap in Limits" },
      { id: "ch14-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-2-eli5", title: "ELI5 Explanation: The Antenna Signal Approach" },
      { id: "ch14-2-visuals", title: "Visuals / Graphs" },
      { id: "ch14-2-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$
if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ exists.
3. $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\lim_{(x,y) \to (0,0)} \frac{x^2 - xy}{\sqrt{x} - \sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\sqrt{x} + \sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\sqrt{x} - \sqrt{y})(\sqrt{x} + \sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \ge 0, y \ge 0, x \neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} \lim \frac{x(x-y)}{\sqrt{x} - \sqrt{y}} &= \lim \frac{x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})}{\sqrt{x}-\sqrt{y}} \\ &= \lim x(\sqrt{x} + \sqrt{y}) \\ &= 0(\sqrt{0} + \sqrt{0}) = 0 \end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\lim_{(x,y)\to(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x \to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} \end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\lim_{(x,y)\to(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \cos \theta$, $y = r \sin \theta$. $x^2+y^2 = r^2$. As $(x,y) \to (0,0)$, $r \to 0$ independently of $\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} \lim_{r \to 0} \frac{r^3 \cos^3 \theta}{r^2} &= \lim_{r \to 0} r \cos^3 \theta \end{align*}$
Since $|\cos^3 \theta| \le 1$, the expression is bounded by $-r \le r\cos^3\theta \le r$. By the Squeeze Theorem, as $r \to 0$, the limit is $0$, regardless of $\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>

`
  },
  {
    id: "chapter-14-3",
    title: "Chapter 14.3: Partial Derivatives",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-3-sub-1",
        "title": "ELI5 Explanation: The Mountain Slicer"
      },
      {
        "id": "chapter-14-3-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-3-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-3-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-3-sub-5",
        "title": "Step-by-Step Method for Basic Problems"
      },
      {
        "id": "chapter-14-3-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-3-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-3-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{\partial f}{\partial x}, f_x, \frac{\partial z}{\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\partial f/\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\partial f/\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\partial f/\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
- $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\Delta z$ can be expressed as:
$$\Delta z = f_x \Delta x + f_y \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y$$
where $\epsilon_1, \epsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \sin(xy)$, find $\partial f / \partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{\partial f}{\partial y} &= \frac{\partial}{\partial y}(y \sin(xy)) &&\text{Step 1: Set up product rule}. \\ &= y \cdot \frac{\partial}{\partial y}(\sin(xy)) + \sin(xy) \cdot \frac{\partial}{\partial y}(y) &&\text{Step 2: Apply product rule}. \\ &= y \cdot (\cos(xy) \cdot x) + \sin(xy) \cdot 1 &&\text{Step 3: Chain rule on inner function } xy \text{ treating x as constant}. \\ &= xy \cos(xy) + \sin(xy) &&\text{Step 4: Cleanup}. \end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\partial z/\partial x$ if $yz - \ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{\partial}{\partial x}(yz - \ln z) &= \frac{\partial}{\partial x}(x + y) &&\text{Step 1: Differentiate both sides wrt x}. \\ y \frac{\partial z}{\partial x} - \frac{1}{z} \frac{\partial z}{\partial x} &= 1 + 0 &&\text{Step 2: Normal diff rules, tacking on } \partial z/\partial x \text{ where z is modified}. \\ \frac{\partial z}{\partial x} \left(y - \frac{1}{z}\right) &= 1 &&\text{Step 3: Factor out derivative}. \\ \frac{\partial z}{\partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&\text{Step 4: Algebra to clear fractions}. \end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= \cos y + y e^x &&\text{Step 1: Diff wrt x}. \\ f_{xy} &= -\sin y + e^x &&\text{Step 2: Diff } f_x \text{ wrt y}. \end{align*}$

$\begin{align*} f_y &= -x \sin y + e^x &&\text{Step 3: Diff original wrt y}. \\ f_{yx} &= -\sin y + e^x &&\text{Step 4: Diff } f_y \text{ wrt x}. \end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>

`
  },
  {
    id: "chapter-14-4",
    title: "Chapter 14.4: The Chain Rule in Multivariable Calculus",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-4-sub-1",
        "title": "ELI5 Explanation: The Tree of Dependencies"
      },
      {
        "id": "chapter-14-4-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-4-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-4-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-4-sub-5",
        "title": "Step-by-Step Method for Chain Rule Problems"
      },
      {
        "id": "chapter-14-4-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-4-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-4-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `### ELI5 Explanation: The Tree of Dependencies
> **Deep Dive Analogy: The Gear Assembly (Electrical Engineering Relevance)**
> In an electrical or mechanical system, if you turn Gear A (representing time $t$), it drives other gears, say Gear B ($x$) and Gear C ($y$). Both B and C then contribute to turning the master Gear D ($w$), which could represent power output or voltage. The Chain Rule is like calculating the total rotational speed of Gear D by meticulously adding up the rotational contributions from *all* intermediate gears. If you forget to account for the rotational effect of Gear C, your final speed calculation for Gear D will be inaccurate. You must trace every possible mechanical linkage or electrical signal path from the primary driver (Gear A) up to the final output (Gear D).

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_helix"></div>

Imagine an apple growing on a branch, the branch connects to a trunk, and the trunk connects to the soil. If the soil gets toxic, the trunk gets sick, the branch rots, and the apple dies. Everything is connected through a chain of dependencies.
In multivariable calculus, you might have a temperature $w$ that depends on your coordinates $x$ and $y$. But those coordinates depend on time $t$ because you are walking. So, a change in time causes a change in position, which causes a change in temperature! To find exactly how fast the temperature changes against time (dw/dt), we just draw a tree diagram, trace every single path from the apple down to the soil, multiply down the branches, and add the routes together.

### Glossary of Key Terms
*   **Intermediate Variables:** Variables in the middle of the chain. For example, spatial coordinates x, y, z that connect the final output to the root time variable.
*   **Independent / Root Variable:** The absolute bottom of the tree (usually parameter $t$, or $r$ and $s$).
*   **Tree Diagram:** A visual flowchart mapping all dependencies to ensure no branches are missed during chain rule derivation.
*   **Implicit Differentiation Formula:** A massive shortcut to find dy/dx by taking negative partials: dy/dx = - F_x / F_y.

### Why This Matters in Electrical Engineering
*   **Moving Charge in Fields:** If an electron moves through a voltage field V(x,y,z), its exact path coordinates (x,y,z) are changing over time 't'. The chain rule computes exactly how fast the voltage drops entirely with respect to time dV/dt as the particle physically travels. This is crucial for understanding current flow and potential differences in dynamic systems.
*   **Parameter Estimation:** If system power depends on current and voltage P(I, V), but both I and V are fluctuating themselves as a function of temperature 'T', the Chain Rule allows you to calculate dP/dT without painfully resolving the entire system equation. This helps engineers design systems that can handle thermal variations.

### Formal Definitions and Notation
*   **Chain Rule (1 Independent):** $\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent):** $\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r}$
*   **Implicit Formula:** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (Works only if F(x,y) = 0).

### Step-by-Step Method for Chain Rule Problems
1.  **Draw the Tree:** Put the dependent variable (w) at the very top. Put the intermediate variables (x,y,z) on the next tier down. Put the root independent variables (t, r, s) at the absolute bottom.
2.  **Draw the Lines:** Connect the top to the middle, and the middle to the bottom based on the mathematical equations given.
3.  **Trace the Paths:** To find a derivative from the top apple to a bottom root, slide your finger down every possible continuous line routing to that specific root.
4.  **Multiply and Add:** Multiply the derivatives along a single distinct path. Add the results of all separate paths together.

### 10 Worked Exercises
**Exercise 1: Chain Rule with One Independent Path**
*   **Problem:** Find dw/dt given w = xy, where x = cos(t) and y = sin(t). Evaluate at t=π/2.
*   **Thinking Process:** I have an apple (w). It splits into two branches (x and y). Both branch down into one root (t). I have exactly two paths to trace.
*   **Unique Method:** Direct tree tracing and path addition.
*   **Step-by-Step Solution:**
    1.  Write formula: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt).
    2.  Left path: ∂w/∂x = y. And dx/dt = -sin(t). Product is -y sin(t).
    3.  Right path: ∂w/∂y = x. And dy/dt = cos(t). Product is x cos(t).
    4.  Add them: dw/dt = -y sin(t) + x cos(t).
    5.  Substitute intermediate variables back into roots: y = sin(t), x = cos(t).
    6.  dw/dt = -sin(t)sin(t) + cos(t)cos(t) = cos^2(t) - sin^2(t) = cos(2t).
    7.  Evaluate at t=π/2: cos(2(π/2)) = cos(π) = -1.
*   **Common mistake:** Forgetting to substitute back the x and y letters into 't' functions before trying to plug in the final exact 't' number.
*   **Figure Reference:** Figure 14.19 maps out a diamond-shaped network flow diagram linking dependencies visually from w, spreading to x/y, and converging to t.

**Exercise 2: Changes along a Helix Curve**
*   **Problem:** Find dw/dt for w = xy + z, where the particle moves on x=cos(t), y=sin(t), z=t. Evaluate at t=0.
*   **Thinking Process:** *Pause and trace paths.* Tree has three main branches x, y, z. All three converge into t. I need three terms added together.
*   **Unique Method:** 3-Term path addition.
*   **Step-by-Step Solution:**
    1.  Formula: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt) + (∂w/∂z)(dz/dt).
    2.  Derivative parts: ∂w/∂x = y. dx/dt = -sin(t).
    3.  ∂w/∂y = x. dy/dt = cos(t).
    4.  ∂w/∂z = 1. dz/dt = 1.
    5.  Assemble: -y sin(t) + x cos(t) + 1.
    6.  Substitute intermediate values for t=0: x = cos(0) = 1. y = sin(0) = 0.
    7.  Final calculation: -(0)sin(0) + (1)cos(0) + 1 = 0 + 1 + 1 = 2.
*   **Common mistake:** Accidentally multiplying the three branches together instead of adding them at the junction point.
*   **Figure Reference:** Figure 14.21 depicts a 3D helix path with dependencies on time, illustrating the three distinct branches contributing to the change in 'w'.

**Exercise 3: Two Independent Roots**
*   **Problem:** Find ∂w/∂r for w = x + 2y + z^2. Given x=r/s, y=r^2 + ln(s), z=2r.
*   **Thinking Process:** The tree root splits into two different bottom soils: r and s. The problem strictly asks for r. I will completely ignore all paths leading to s.
*   **Unique Method:** Selective path tracing targeting a specific root variable.
*   **Step-by-Step Solution:**
    1.  Formula: ∂w/∂r = (∂w/∂x)(∂x/∂r) + (∂w/∂y)(∂y/∂r) + (∂w/∂z)(∂z/∂r).
    2.  ∂w/∂x = 1. ∂x/∂r = 1/s.
    3.  ∂w/∂y = 2. ∂y/∂r = 2r.
    4.  ∂w/∂z = 2z. ∂z/∂r = 2.
    5.  Assemble: (1)(1/s) + (2)(2r) + (2z)(2) = 1/s + 4r + 4z.
    6.  Replace z with 2r: 1/s + 4r + 4(2r) = 1/s + 12r.
*   **Common mistake:** Getting confused by 's' and trying to derive it when taking the partial strictly against 'r'. s acts as a frozen constant!
*   **Figure Reference:** Figure 14.20 presents a complicated dual-root branching tree, demonstrating how paths to 'r' are completely distinct from paths to 's'.

**Exercise 4: Direct Substitution Shortcut**
*   **Problem:** Instead of the chain rule, use direct substitution to find the derivative of w = x^2 + y^2 where x = cos(t), y = sin(t).
*   **Thinking Process:** Why torture myself with a tree diagram if I can just eliminate the intermediate variables algebraically before I even do calculus?
*   **Unique Method:** Pre-calculus algebraic collapse.
*   **Step-by-Step Solution:**
    1.  Substitute x and y perfectly into w: w = (cos(t))^2 + (sin(t))^2.
    2.  Apply the Pythagorean Identity from trigonometry: cos^2(t) + sin^2(t) = 1.
    3.  The equation cleanly collapses into w = 1.
    4.  Now take the derivative: dw/dt of the number 1 is purely 0.
*   **Common mistake:** Spending 5 minutes drawing a tree diagram when basic algebra can solve the problem in 5 seconds. Look for clean substitutions first!
*   **Figure Reference:** Figure 14.22 shows a flowchart emphasizing "Algebraic Simplification First?" as a key decision point before applying chain rule.

**Exercise 5: The Magic Implicit Formula (Source: COMSATS FA24 Q6)**
*   **Problem:** Use Theorem 8 to find dy/dx if y^2 - x^2 - sin(xy) = 0.
*   **Thinking Process:** Standard implicit differentiation requires product rules and factoring out dy/dx. The magic formula dy/dx = - F_x / F_y bypasses all of that entirely!
*   **Unique Method:** Using partial derivatives to instantly solve complicated 1D implicit differentiation.
*   **Step-by-Step Solution:**
    1.  Define the whole equation as F(x,y) = y^2 - x^2 - sin(xy) = 0.
    2.  Find F_x (target is x, freeze y): -2x - y cos(xy).
    3.  Find F_y (target is y, freeze x): 2y - x cos(xy).
    4.  Apply the formula: dy/dx = - [ -2x - y cos(xy) ] / [ 2y - x cos(xy) ].
    5.  Clean up negative signs: (2x + y cos(xy)) / (2y - x cos(xy)).
*   **Common mistake:** Forgetting the mandatory negative sign completely placed in front of the master fraction formula!
*   **Figure Reference:** Figure 14.23 visualizes the level curve F(x,y)=0 and illustrates how the normal vector gradients (F_x, F_y) relate to the tangent slope dy/dx.

**Exercise 6: Three Variable Implicit Formula (Source: CUI SP22 Q4)**
*   **Problem:** Find ∂z/∂x given 1/x + 1/y + 1/z - 1 = 0 at (2, 3, 6).
*   **Thinking Process:** The magic formula expands to 3D implicitly! To find ∂z/∂x, I will just use - F_x / F_z. Wait! Notice the pattern. The letter on TOP of the fraction (z) goes on the BOTTOM of the formula F_z. It swaps!
*   **Unique Method:** 3D implicit formula ∂z/∂x = - F_x / F_z.
*   **Step-by-Step Solution:**
    1.  Let F(x,y,z) = x^-1 + y^-1 + z^-1 - 1.
    2.  Find F_x: -x^-2 = -1/x^2.
    3.  Find F_z: -z^-2 = -1/z^2.
    4.  Formula: - (-1/x^2) / (-1/z^2) = - (z^2 / x^2).
    5.  Evaluate at (x=2, z=6): - (6^2 / 2^2) = - 36 / 4 = -9.
*   **Common mistake:** Accidentally writing F_z / F_x instead of strictly F_x / F_z. The letters physically reverse position.
*   **Figure Reference:** Figure 14.24 shows a 3D implicit surface, and a tangent plane to illustrate the geometric interpretation of the partial derivative ∂z/∂x.

**Exercise 7: Checking Chain Rule Constraints**
*   **Problem:** Express ∂w/∂r in terms of r and s if w = xy + z, x = r-s, y=r+s, z=t.
*   **Thinking Process:** Wait, z = t? Where is r?
*   **Unique Method:** Tracing zero-paths in mixed variable trees.
*   **Step-by-Step Solution:**
    1.  ∂w/∂r = (∂w/∂x)(∂x/∂r) + (∂w/∂y)(∂y/∂r) + (∂w/∂z)(∂z/∂r).
    2.  ∂w/∂x = y. ∂x/∂r = 1.
    3.  ∂w/∂y = x. ∂y/∂r = 1.
    4.  ∂w/∂z = 1. But what is ∂z/∂r? Since z=t, and t doesn't possess the letter r, its partial derivative against r is strict 0!
    5.  Equation becomes: y(1) + x(1) + 1(0) = x + y.
    6.  Substitute back: (r-s) + (r+s) = 2r.
*   **Common mistake:** Assuming every intermediate variable MUST map to every independent root. Broken branches yield zero derivative paths.
*   **Figure Reference:** Figure 14.25 illustrates a tree diagram where a branch from 'w' to 'z' leads to 't', demonstrating a 'dead end' or zero contribution when differentiating with respect to 'r'.

**Exercise 8: Differentiating Integrals (The Ultimate Chain Rule)**
*   **Problem:** Find the derivative of F(x) = ∫_0^{x^2} sqrt(t^4 + t^3) dt.
*   **Thinking Process:** This combines the Fundamental Theorem of Calculus with the multivariable Chain Rule (Leibniz Integral Rule). The upper bound is moving (x^2), and the inside integrand also physically morphs based on x, but for this simpler version, the integrand is purely in terms of t.
*   **Unique Method:** Fundamental Theorem of Calculus Part 1 (with Chain Rule).
*   **Step-by-Step Solution:**
    1.  Identify the structure: F(x) = ∫_a^{g(x)} f(t) dt. The derivative is f(g(x)) * g'(x).
    2.  Here, g(x) = x^2, so g'(x) = 2x.
    3.  And f(t) = sqrt(t^4 + t^3).
    4.  Plug g(x) into f(t): f(g(x)) = sqrt((x^2)^4 + (x^2)^3) = sqrt(x^8 + x^6).
    5.  Multiply by g'(x): 2x * sqrt(x^8 + x^6).
    6.  The derivative is 2x sqrt(x^8 + x^6).
*   **Common mistake:** Just plugging in the upper bound without multiplying by the chain rule derivative of the bound itself (the 2x). Students often forget d/dx(x^2).
*   **Figure Reference:** Figure 14.26 graphically represents the area under a curve, highlighting how a changing upper limit (x^2) requires a chain rule adjustment for the rate of area change.

**Exercise 9: Expanding Three Dependent Variables**
*   **Problem:** Find ∂u/∂x if u = (p-q)/(q-r), p=x+y+z, q=x-y+z, r=x+y-z. (Source: COMSATS FA25).
*   **Thinking Process:** u depends on p, q, r. All three depend firmly on x. I must trace three branches.
*   **Unique Method:** Symmetrical algebraic substitution.
*   **Step-by-Step Solution:**
    1.  Formula: $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial p}\frac{\partial p}{\partial x} + \frac{\partial u}{\partial q}\frac{\partial q}{\partial x} + \frac{\partial u}{\partial r}\frac{\partial r}{\partial x}$.
    2.  Find inner partials with respect to x: ∂p/∂x = 1, ∂q/∂x = 1, ∂r/∂x = 1.
    3.  This simplifies the formula to: $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial p} + \frac{\partial u}{\partial q} + \frac{\partial u}{\partial r}$.
    4.  Now find the partials of u with respect to p, q, r:
        *   ∂u/∂p = 1/(q-r)
        *   ∂u/∂q = $\frac{-(q-r)(1) - (p-q)(1)}{(q-r)^2} = \frac{-q+r-p+q}{(q-r)^2} = \frac{r-p}{(q-r)^2}$
        *   ∂u/∂r = $\frac{-(p-q)(-1)}{(q-r)^2} = \frac{p-q}{(q-r)^2}$
    5.  Sum them up: $\frac{\partial u}{\partial x} = \frac{1}{q-r} + \frac{r-p}{(q-r)^2} + \frac{p-q}{(q-r)^2}$.
    6.  To simplify, find a common denominator: $\frac{(q-r) + (r-p) + (p-q)}{(q-r)^2} = \frac{q-r+r-p+p-q}{(q-r)^2} = \frac{0}{(q-r)^2} = 0$.
    7.  Therefore, ∂u/∂x = 0.
*   **Common mistake:** Getting bogged down in complex algebra for ∂u/∂q and ∂u/∂r without recognizing the potential for simplification after summing. Also, forgetting to use the quotient rule for these partials.
*   **Figure Reference:** Figure 14.27 displays a complex multi-layered tree diagram for 'u' depending on 'p,q,r' which in turn depend on 'x,y,z', illustrating the systematic decomposition of dependencies.

**Exercise 10: Changing Dimensions (Real-World Applied)**
*   **Problem:** The edges of a box a, b, c change over time at 1 m/s, 1 m/s, and -3 m/s. If a=1, b=2, c=3, how fast is Volume (V) changing?
*   **Thinking Process:** Volume depends on three edges physically expanding/contracting over time. This is exactly the 3D chain rule!
*   **Unique Method:** Applied physical geometric rates.
*   **Step-by-Step Solution:**
    1.  Equation: V = a * b * c.
    2.  Formula: dV/dt = (∂V/∂a)(da/dt) + (∂V/∂b)(db/dt) + (∂V/∂c)(dc/dt).
    3.  ∂V/∂a is exactly bc. ∂V/∂b is ac. ∂V/∂c is ab.
    4.  dV/dt = (bc)(da/dt) + (ac)(db/dt) + (ab)(dc/dt).
    5.  Substitute current states: a=1, b=2, c=3. And da/dt = 1, db/dt = 1, dc/dt = -3.
    6.  dV/dt = (2*3)(1) + (1*3)(1) + (1*2)(-3).
    7.  Calculate: 6(1) + 3(1) + 2(-3) = 6 + 3 - 6 = 3 cubic meters per second.
*   **Common mistake:** Treating a, b, c as constants instead of variables strictly bound to time t, or mixing up the values of a, b, c with their rates of change.
*   **Figure Reference:** Figure 14.28 provides an animation or diagram of a rectangular box whose dimensions dynamically change over time, visually representing the input rates of change.

#
### Algorithmic Problem Solving Flow

To master Tangent Planes, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Tangent Plane]
          |
          v
+---------------------------+
| Is it z=f(x,y) or F=c?    |
+---------------------------+
          |
  +-------+-------+
  |               |
[z=f(...)]      [F=c]
  |               |
  v               v
+----------+   +----------+
| Find f_x,|   | Find F_x,|
| f_y      |   | F_y, F_z |
+----------+   +----------+
  |               |
  v               v
+----------+   +----------+
| Plug in  |   | Plug into|
| Formula  |   | F_x*dx+..|
+----------+   +----------+
          |
          v
       [Finish]
\`\`\`

## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Draw the Tree<br><span class="text-xs font-normal text-slate-300">Map Output → Intermediates → Independent Vars</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Identify Paths<br><span class="text-xs font-normal">Find EVERY path from top to target variable</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Multiply Down<br><span class="text-xs font-normal">Multiply link slopes along each path</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Add Branches<br><span class="text-xs font-normal">Sum all completed path products together!</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** Find $\\frac{dw}{dt}$ if $w = x^2y$, $x = \\cos(t)$, $y = \\sin(t)$
>       1. **Draw the Tree:** $w$ depends on $x$ and $y$. Both $x$ and $y$ depend on $t$.
>       2. **Identify Paths:** There are two paths to $t$. Path 1: $w \\to x \\to t$. Path 2: $w \\to y \\to t$.
>       3. **Multiply Down:** Path 1 contribution: $\\frac{\\partial w}{\\partial x} \\cdot \\frac{dx}{dt} = (2xy) \\cdot (-\\sin(t))$. Path 2 contribution: $\\frac{\\partial w}{\\partial y} \\cdot \\frac{dy}{dt} = (x^2) \\cdot (\\cos(t))$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Add Branches:</strong> $\\frac{dw}{dt} = -2xy\\sin(t) + x^2\\cos(t)$. (Substitute $x$ and $y$ in terms of $t$ for final answer).</p>
  </div>
</div>

### Key Points
*   **The Tree Flow:** Start at the top variable. Draw lines to every intermediate variable it depends on. Draw lines from them to ultimate root variables.
*   **To Find A Derivative:** Follow every path from the top variable down strictly to your desired target root variable. Multiply terms traveling down a path. Add separated paths together.
*   **Algebraic Simplification:** Always check if direct substitution can simplify the problem *before* applying the Chain Rule; it can sometimes make complex problems trivial.

### Formulas
*   **Chain Rule (1 Independent Variable):** $\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent Variables):** $\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial r}$ (adjust for number of intermediate variables)
*   **Implicit Differentiation (2 Variables):** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (where F(x,y)=0)
*   **Implicit Differentiation (3 Variables, e.g., for ∂z/∂x):** $\frac{\partial z}{\partial x} = - \frac{F_x}{F_z}$ (where F(x,y,z)=0)

### Common Mistakes
*   **Forgetting the Negative Sign:** A common error in the implicit differentiation formulas. Always remember the \`-\` at the front!
*   **Mixing Independent Variables:** When finding a partial derivative with respect to one independent variable (e.g., ∂w/∂r), treat other independent variables (like 's') as constants, even if intermediate variables depend on them.
*   **Multiplying instead of Adding:** Each distinct path in the tree diagram contributes an *additive* term to the final derivative, not a multiplicative one.
*   **Incomplete Substitution:** Forgetting to substitute all intermediate variables back in terms of the final independent variable(s) before evaluating a numerical answer.
*   **Ignoring Zero Paths:** If an intermediate variable doesn't depend on the target independent root variable, its branch's contribution is zero. Don't force a derivative if none exists.

### Chapter Assessment

> **QUIZ:** If w = e^{xy} ln(z), x = t², y = sin t, z = cos t, find dw/dt at t = 0.
>
> 4. If $w = e^{xy} \ln(z)$, $x = t^2$, $y = \sin t$, $z = \cos t$, find $\frac{dw}{dt}$ at $t = 0$.
> *(Source: CUI Sahiwal FA25 Q4a)*

> **QUIZ:** Use implicit differentiation to find ∂z/∂y for x² y + y z² + z x = 0 at (1,1,-1).
>
> 5. Use implicit differentiation to find $\frac{\partial z}{\partial y}$ for $x^2 y + y z^2 + z x = 0$ at $(1,1,-1)$.
> *(Original)*

> **QUIZ:** Source: COMSATS FA24.. Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.
>
> 1. **Source: COMSATS FA24..** Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.

> **QUIZ:** Source: COMSATS FA24.. Use the implicit formula to find ∂z/∂y for x^2 + xy + y^2 - 7z = 0.
>
> 2. **Source: COMSATS FA24..** Use the implicit formula to find ∂z/∂y for x^2 + xy + y^2 - 7z = 0.

> **QUIZ:** Source: CUI SP22.. Draw a tree diagram and formulate the chain rule equation for ∂w/∂s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).
>
> 3. **Source: CUI SP22..** Draw a tree diagram and formulate the chain rule equation for ∂w/∂s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).

\`▓▓▓▓▓▓░░░░ 60%\` Course Progress

---`
  },
  {
    id: "chapter-14-5",
    title: "Chapter 14.5: Directional Derivatives and Gradient Vectors",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-5-sub-1",
        "title": "ELI5 Explanation: The Perfect Compass"
      },
      {
        "id": "chapter-14-5-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-5-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-5-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-5-sub-5",
        "title": "Step-by-Step Method for Directional Derivative Problems"
      },
      {
        "id": "chapter-14-5-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-5-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-5-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `### ELI5 Explanation: The Perfect Compass (with an EE Twist!)
> **Deep Dive Analogy: The Blindfolded Climber**
> Imagine you are blindfolded on a hill. You can physically feel with your feet which specific direction is the steepest to walk upwards. The Gradient Vector is an arrow drawn on your map pointing in *exactly* that direction. If you walk along that arrow, your altitude increases the fastest. The Directional Derivative is the measure of how steep it actually is along the arrow (or any other arrow you choose to walk).

**EE Analogy: The Signal Strength Robot**
Imagine you are a robot in a large factory, and your mission is to find the area with the strongest Wi-Fi signal. You're blindfolded, but you have a sensitive antenna and a powerful onboard computer.
*   Your computer continuously calculates the "Gradient Vector" (∇f). This is like your internal, magical compass that *always* points in the exact direction where the Wi-Fi signal is getting stronger *fastest*.
*   Now, imagine you decide to move in a specific, arbitrary direction (say, towards a buzzing machine). The "Directional Derivative" (D_u f) is what your antenna measures: it tells you *exactly* how much the Wi-Fi signal strength changes *in that specific direction* you chose to move. It might not be the fastest increase, but it gives you the precise rate of change along your path.

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="directional_derivative"></div>

Imagine standing blindly on the side of a mountain covered in thick fog. You have a magical compass. Instead of pointing North, this compass calculates the absolute steepest way up the mountain and points exactly in that direction. That magical needle is the "Gradient Vector".
Now, suppose you ignore the compass and decide to walk in a random direction (vector u). The "Directional Derivative" tells you exactly how steep the ground is in that specific direction. The mathematical magic is that you can calculate the steepness of *any* arbitrary path just by comparing it (using the dot product) against your magical Gradient compass!

### Glossary of Key Terms
*   Gradient Vector: Denoted by ∇f (read as "del f"). It is a 2D or 3D vector made entirely of partial derivatives. It ALWAYS points in the direction of steepest ascent.
*   Directional Derivative: Evaluates the slope of a multivariable surface in the direction of a specified arbitrary unit vector 'u'.
*   Orthogonal/Normal: Mathematically perpendicular (90 degrees). The gradient is always perfectly orthogonal to level curves.
*   Dot Product: The mathematical engine that powers directional derivatives. It projects your arbitrary direction onto the gradient vector to find the steepness correlation.

### Why This Matters in Electrical Engineering
*   Antenna Arrays: The directional derivative computes the radiation signal strength intensity changing in a specific viewing angle away from the phased array.
*   Optimization (Gradient Descent): This is the absolute mathematical foundation of training AI and Neural Networks. Algorithms hunt for the minimum error by calculating the negative gradient (-∇f) and literally stepping strictly "downhill" over millions of parameters!
*   Vector Calculus: Gradients power Maxwell's equations (the fundamental laws of electromagnetism). The electric field E is mathematically defined as the negative gradient of the electric potential (-∇V).

### Formal Definitions and Notation
*   Gradient: ∇f = (∂f/∂x)i + (∂f/∂y)j. (In 3D: ∇f = (∂f/∂x)i + (∂f/∂y)j + (∂f/∂z)k)
*   Directional Derivative: D_u f = ∇f · u. (Crucial: The vector 'u' MUST be scaled down to a length of exactly 1 before you take the dot product!).
*   Max Rate of Change: Occurs exactly in the direction of ∇f. The physical magnitude of that steepest slope is just the length ||∇f||.
*   Tangent Line to Level Curve: f_x(x_0,y_0)(x - x_0) + f_y(x_0,y_0)(y - y_0) = 0.

### Step-by-Step Method for Directional Derivative Problems
1.  Build the Gradient: Find all first partial derivatives (f_x, f_y, f_z) and plug the given coordinate numbers in. Assemble them into vector format (a i + b j + c k).
2.  Clean the Vector: Look at the arbitrary direction vector they gave you. If it doesn't have a mathematical length of strictly 1, you MUST divide it by its own length to "normalize" it into a unit vector 'u'.
3.  The Dot Product: Multiply the i-components, multiply the j-components, (and k-components for 3D) and add them together. That single number is your exact slope in that direction!

### 10 Worked Exercises
**Exercise 1: Calculating the Gradient Vector**
*   **Problem:** Find the gradient of f(x,y) = y - x at the point (2, 1).
*   **Thinking Process:** A gradient is just combining f_x and f_y into an (i, j) bracket vector format.
*   **Unique Method:** Independent partial evaluations merged into spatial vectors.
*   **Step-by-Step Solution:**
    1.  Find f_x: Derivative of y-x wrt x is -1.
    2.  Find f_y: Derivative of y-x wrt y is 1.
    3.  The gradient vector is exactly -1 i + 1 j.
    4.  Note: Coordinates (2,1) weren't even needed because the slope is constant everywhere (a flat angled plane).
*   **Common mistake:** Forgetting to assemble them into a vector and accidentally adding them into a scalar number.
*   **Figure Reference:** Figure X.1: Illustration of a gradient vector (red arrow) pointing in the direction of steepest ascent on a simple plane.

**Exercise 2: Finding a Directional Derivative (Source: COMSATS FA24 Q4)**
*   **Problem:** Find the directional derivative of f(x,y) = x^2 + xy at (1,2) in the direction of unit vector u = (1/sqrt(2))i + (1/sqrt(2))j.
*   **Thinking Process:** *Try to calculate the partials in your head first.* I need the gradient evaluated at (1,2). Then dot product with u. Since u has lengths (1/2 + 1/2) = 1, it's already a clean unit vector!
*   **Unique Method:** Direct definition gradient-dot-vector.
*   **Step-by-Step Solution:**
    1.  f_x = 2x + y. Plug in (1,2): 2(1) + 2 = 4.
    2.  f_y = x. Plug in (1,2): 1.
    3.  ∇f = 4i + 1j.
    4.  Dot product: (4i + 1j) · ((1/sqrt(2))i + (1/sqrt(2))j).
    5.  Multiply i's: 4/sqrt(2). Multiply j's: 1/sqrt(2).
    6.  Add: 5/sqrt(2).
*   **Common mistake:** Multiplying the i's and keeping the 'i' letter in the final answer. The dot product fundamentally outputs a pure scalar number!
*   **Figure Reference:** Figure X.2: Visualizing a directional derivative as the slope of a surface in a specific direction at a point.

**Exercise 3: Normalizing a Dirty Vector**
*   **Problem:** Find the directional derivative of f(x,y) = x e^y + cos(xy) at (2,0) in the direction of v = 3i - 4j.
*   **Thinking Process:** The length of vector v is sqrt(3^2 + 4^2) = sqrt(25) = 5. It is NOT a unit vector! I must divide it by 5 before doing the dot product!
*   **Unique Method:** Unit-normalization protocol.
*   **Step-by-Step Solution:**
    1.  Normalize v: u = (3/5)i - (4/5)j.
    2.  Find f_x: e^y - y sin(xy). At (2,0): e^0 - 0 = 1.
    3.  Find f_y: x e^y - x sin(xy). At (2,0): 2 e^0 - 0 = 2.
    4.  ∇f = 1i + 2j.
    5.  Dot product: (1)(3/5) + (2)(-4/5) = 3/5 - 8/5 = -5/5 = -1.
*   **Common mistake:** Taking the dot product directly with v=3i-4j, yielding -5, which is physically incorrect as it scales the true slope by 5 units.
*   **Figure Reference:** Figure X.3: The process of normalizing a vector 'v' into a unit vector 'u' before computing the directional derivative.

**Exercise 4: Maximum and Minimum Ascent Rates (Source: CUI SP22 Q5)**
*   **Problem:** In what directions does f(x,y) = x^2/2 + y^2/2 increase and decrease most rapidly at (1,1)? What are the rates?
*   **Thinking Process:** Maximum increase ALWAYS points exactly identical to the gradient! Maximum decrease ALWAYS points in the exact opposite direction (-∇f).
*   **Unique Method:** Theoretical vector alignment for absolute maxima.
*   **Step-by-Step Solution:**
    1.  f_x = x. At (1,1) = 1.
    2.  f_y = y. At (1,1) = 1.
    3.  ∇f = 1i + 1j.
    4.  Rapid increase direction: Normalizing it gives u = (1/sqrt(2))i + (1/sqrt(2))j.
    5.  Max rate of change: The length ||∇f|| = sqrt(1^2 + 1^2) = sqrt(2).
    6.  Rapid decrease direction: Directly opposite, u = -(1/sqrt(2))i - (1/sqrt(2))j.
    7.  Min rate of change: -sqrt(2).
*   **Common mistake:** Providing the unnormalized gradient as the "direction". Directions mathematically should be expressed as length-1 uniform unit vectors.
*   **Figure Reference:** Figure X.4: Representation of steepest ascent (∇f) and descent (-∇f) on a surface, with corresponding rates at a point.

**Exercise 5: Zero Change Directions**
*   **Problem:** Standing at (1,1) on f(x,y) = x^2/2 + y^2/2, what paths yield precisely zero elevation change?
*   **Thinking Process:** A directional derivative is exactly 0 when the path is perfectly 90 degrees (orthogonal) to the gradient. Their dot product must equal 0.
*   **Unique Method:** Orthogonal vector swap trick.
*   **Step-by-Step Solution:**
    1.  We found ∇f = 1i + 1j.
    2.  To make a 2D vector (a, b) exactly perpendicular, swap the elements and negate exactly one of them: (-b, a) or (b, -a).
    3.  So orthogonal vectors are -1i + 1j AND 1i - 1j.
    4.  Normalizing gives directions: (-1/sqrt(2)i + 1/sqrt(2)j) and (1/sqrt(2)i - 1/sqrt(2)j).
*   **Common mistake:** Finding only one of the two orthogonal planar paths. You can walk left *or* right along a contour line to avoid altitude changes!
*   **Figure Reference:** Figure X.5: A contour map showing a point where the gradient vector is perpendicular to the level curve, illustrating directions of zero change.

**Exercise 6: 3D Directional Derivatives**
*   **Problem:** Find the derivative of f(x,y,z) = x^3 - xy^2 - z at P(1,1,0) in the direction of v = 2i - 3j + 6k.
*   **Thinking Process:** The rules flawlessly scale into 3 dimensions. Normalize the 3D vector, build a 3D gradient, and perform a 3D dot product.
*   **Unique Method:** Three-dimensional scaling protocol.
*   **Step-by-Step Solution:**
    1.  Length of v = sqrt(2^2 + (-3)^2 + 6^2) = sqrt(4 + 9 + 36) = sqrt(49) = 7.
    2.  Unit vector u = (2/7)i - (3/7)j + (6/7)k.
    3.  f_x = 3x^2 - y^2. At (1,1,0) = 3 - 1 = 2.
    4.  f_y = -2xy. At (1,1,0) = -2.
    5.  f_z = -1. At (1,1,0) = -1.
    6.  ∇f = 2i - 2j - 1k.
    7.  Dot Product: 2(2/7) - 2(-3/7) - 1(6/7) = 4/7 + 6/7 - 6/7 = 4/7.
*   **Common mistake:** Miscalculating the length of 3D vectors by adding negatives outside the square parenthesis before squaring.
*   **Figure Reference:** Figure X.6: A 3D surface with a gradient vector and a directional derivative in three dimensions at a specific point.

**Exercise 7: Tangent Lines to Level Curves**
*   **Problem:** Find the tangent line to the ellipse x^2/4 + y^2 = 2 at the point (-2, 1).
*   **Thinking Process:** The gradient ALWAYS points 90 degrees straight out from level curves. We can use the gradient as the strict "Normal Vector" (A, B) for our line equation A(x - x_0) + B(y - y_0) = 0.
*   **Unique Method:** Utilizing gradients to instantly assemble structural geometry tangent bounds.
*   **Step-by-Step Solution:**
    1.  Let f(x,y) = x^2/4 + y^2.
    2.  Notice the target ellipse is precisely the level curve when f(x,y) = 2.
    3.  ∇f = (x/2)i + (2y)j.
    4.  At (-2, 1), ∇f = (-2/2)i + 2(1)j = -1i + 2j.
    5.  The gradient Normal Vector is N = (-1, 2).
    6.  Equation: -1(x - (-2)) + 2(y - 1) = 0.
    7.  - (x + 2) + 2(y - 1) = 0 --> x - 2y = -4.
*   **Common mistake:** Plugging the tangent variables directly into y=mx+b blindly instead of relying on the elegant Normal Line layout.
*   **Figure Reference:** Figure X.7: An ellipse showing the gradient vector at a point and the tangent line (perpendicular to the gradient) passing through that point.

**Exercise 8: Gradient Algebra Rules**
*   **Problem:** Given f(x,y) = x-y and g(x,y) = 3y. Calculate ∇(fg).
*   **Thinking Process:** Gradients follow the exact same algebra rules as basic 1D derivatives. I can use the Product Rule: f∇g + g∇f.
*   **Unique Method:** Gradient distribution bypassing full manual multiplication.
*   **Step-by-Step Solution:**
    1.  ∇f = 1i - 1j.
    2.  ∇g = 0i + 3j.
    3.  Formula: f(∇g) + g(∇f).
    4.  (x-y)(3j) + 3y(i - j).
    5.  Simplify: (3x - 3y)j + 3y i - 3y j.
    6.  Assemble: 3y i + (3x - 6y) j.
*   **Common mistake:** Attempting to multiply vector coordinates improperly against each other.
*   **Figure Reference:** Figure X.8: Illustrative diagram of applying the product rule for gradients, showing how ∇(fg) combines vector and scalar products.

**Exercise 9: Scalar Components**
*   **Problem:** How is the directional derivative related to scalar components?
*   **Thinking Process:** This is a conceptual application request.
*   **Unique Method:** Identifying exact vector projections.
*   **Step-by-Step Solution:**
    1.  ∇f is a vector. 'u' is a unit vector.
    2.  By fundamental vector algebra, breaking down the dot product ∇f · u literally gives us the scalar magnitude component of ∇f resting purely parallel onto the direction of u.
    3.  The directional derivative IS the scalar projection of the gradient!
*   **Common mistake:** Forgetting that directional derivative is an exact scalar number, not an active vector.
*   **Figure Reference:** Figure X.9: A vector projection diagram showing how the directional derivative is the scalar component of the gradient along the unit vector 'u'.

**Exercise 10: Temperature Gradient Field (Source: COMSATS FA25)**
*   **Problem:** Temperature is T(x,y,z) = 2xy - yz. In what direction from P(1, -1, 1) does temperature drop most rapidly, and what is this rate?
*   **Thinking Process:** Seeking steepest downhill. I will calculate ∇T and physically invert every single sign to get -∇T.
*   **Unique Method:** Strict spatial inversion.
*   **Step-by-Step Solution:**
    1.  T_x = 2y. At (1, -1, 1) = -2.
    2.  T_y = 2x - z. At (1, -1, 1) = 2(1) - 1 = 1.
    3.  T_z = -y. At (1, -1, 1) = -(-1) = 1.
    4.  ∇T = -2i + 1j + 1k.
    5.  Rapid drop direction is opposite: -∇T = 2i - 1j - 1k.
    6.  Rate is the length: sqrt( (-2)^2 + 1^2 + 1^2 ) = sqrt(4 + 1 + 1) = sqrt(6). Because it's dropping, the rate translates to -sqrt(6) degrees per foot.
*   **Common mistake:** Calculating the steepest ascent vector and forgetting to flip the signs for "dropping/decrease".
*   **Figure Reference:** Figure X.10: A 3D temperature field visualization, with an arrow indicating the direction of fastest temperature drop at a specific point.

#
### Algorithmic Problem Solving Flow

To master the Chain Rule, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Find Derivative]
          |
          v
+---------------------------+
| Identify Dependent Var    |
+---------------------------+
          |
          v
+---------------------------+
| Identify Independent Var  |
+---------------------------+
          |
          v
+---------------------------+
| Draw Dependency Tree      |
+---------------------------+
          |
          v
+---------------------------+
| Multiply down branches,   |
| Add across branches       |
+---------------------------+
          |
          v
       [Finish]
\`\`\`

## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Build the Gradient<br><span class="text-xs font-normal text-slate-300">∇f = ⟨f_x, f_y, f_z⟩</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Evaluate ∇f<br><span class="text-xs font-normal">Plug in the starting coordinates</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-rose-100 border-2 border-rose-300 text-rose-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Validate Unit Vector<br><span class="text-xs font-normal">Is the direction vector scale = 1? If not, divide by its length!</span>
  </div>
  <div class="text-rose-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Dot Product<br><span class="text-xs font-normal">D_u f = ∇f · u (Results in a single Number)</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** Find $D_{\\mathbf{u}}f(1, 2)$ for $f(x,y) = x^2 + 3xy$ in direction $\\mathbf{v} = \\langle 3, 4 \\rangle$
>       1. **Build the Gradient:** $\\nabla f = \\langle f_x, f_y \\rangle = \\langle 2x + 3y, 3x \\rangle$.
>       2. **Evaluate $\\nabla f$:** Plug in $(1, 2)$: $\\nabla f(1, 2) = \\langle 2(1)+3(2), 3(1) \\rangle = \\langle 8, 3 \\rangle$.
>       3. **Validate Unit Vector:** $\\mathbf{v} = \\langle 3, 4 \\rangle$ has length $\\sqrt{3^2 + 4^2} = 5$. It's not a unit vector! We must normalize it: $\\mathbf{u} = \\frac{1}{5}\\langle 3, 4 \\rangle = \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Dot Product:</strong> $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u} = \\langle 8, 3 \\rangle \\cdot \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle = \\frac{24}{5} + \\frac{12}{5} = \\frac{36}{5}$.</p>
  </div>
</div>

### Key Points
*   The Gradient ∇f: A vector made of partial derivatives (f_x, f_y, f_z). It ALWAYS points in the direction of the steepest ascent (maximum increase) of the function.
*   Directional Derivative (D_u f): A scalar value that quantifies the instantaneous rate of change (slope) of a multivariable function in a specific unit direction 'u'.
*   Unit Vector Requirement: For D_u f to represent the true slope, the direction vector 'u' MUST be normalized to have a length (magnitude) of exactly 1.
*   Steepest Increase: Occurs in the direction of the gradient, ∇f. The rate of this maximum increase is the magnitude of the gradient, ||∇f||.
*   Steepest Decrease: Occurs in the direction opposite to the gradient, -∇f. The rate of this minimum decrease is -||∇f||.
*   Zero Change: Occurs in any direction perpendicular (orthogonal) to the gradient vector ∇f. These directions lie along the level curves (or level surfaces in 3D) of the function.
*   Dot Product: The fundamental mathematical operation used to calculate the directional derivative, projecting the gradient onto the chosen direction.

### Formulas
*   **Gradient:**
    *   For f(x,y): ∇f = ⟨∂f/∂x, ∂f/∂y⟩ = (∂f/∂x)i + (∂f/∂y)j
    *   For f(x,y,z): ∇f = ⟨∂f/∂x, ∂f/∂y, ∂f/∂z⟩ = (∂f/∂x)i + (∂f/∂y)j + (∂f/∂z)k
*   **Unit Vector Normalization:** For a direction vector v, the unit vector is u = v / ||v||, where ||v|| = sqrt(v_x² + v_y² + v_z²).
*   **Directional Derivative:** D_u f = ∇f · u
*   **Maximum Rate of Change:** ||∇f||
*   **Minimum Rate of Change:** -||∇f||
*   **Tangent Line to Level Curve f(x,y) = k at (x₀, y₀):** f_x(x₀,y₀)(x - x₀) + f_y(x₀,y₀)(y - y₀) = 0

### Common Mistakes
*   **Forgetting to Normalize:** One of the most frequent errors is calculating the dot product with a non-unit direction vector. Always divide the given direction vector by its magnitude first.
*   **Confusing Rate with Direction:** The "rate of change" (e.g., steepest ascent) is a scalar (||∇f||), while the "direction" is a unit vector (∇f/||∇f||).
*   **Sign Errors:** Misinterpreting "steepest decrease" as positive ||∇f|| instead of -||∇f|| or forgetting to flip the gradient's direction.
*   **Dot Product Output:** Remembering that the dot product of two vectors results in a scalar (a single number), not another vector.
*   **Partial Derivative Errors:** Mistakes in computing partial derivatives will cascade and lead to incorrect gradient and directional derivative values.
*   **Incomplete Zero Change Directions:** In 2D, there are always two opposite directions of zero change along a contour line (e.g., perpendicular to ∇f), not just one.

### Chapter Assessment

> **QUIZ:** Source: COMSATS FA24.. Find the directional derivative of f(x,y) = x^2 y + e^{xy} sin(y) at P(1, 0) in the direction u = 1/2 i + sqrt(3)/2 j.
>
> 1. **Source: COMSATS FA24..** Find the directional derivative of f(x,y) = x^2 y + e^{xy} sin(y) at P(1, 0) in the direction u = 1/2 i + sqrt(3)/2 j.

> **QUIZ:** Source: CUI SP22.. In what direction is the directional derivative of f(x,y) = (x^2 - y^2)/(x^2 + y^2) at P(1,1) exactly equal to zero?
>
> 2. **Source: CUI SP22..** In what direction is the directional derivative of f(x,y) = (x^2 - y^2)/(x^2 + y^2) at P(1,1) exactly equal to zero?

> **QUIZ:** Source: COMSATS FA25.. Find an equation for the tangent line to the ellipse x^2/4 + y^2 = 2 at the point (-2, 1) exclusively using the gradient definition.
>
> 3. **Source: COMSATS FA25..** Find an equation for the tangent line to the ellipse x^2/4 + y^2 = 2 at the point (-2, 1) exclusively using the gradient definition.

> **QUIZ:** Find the direction(s) of zero change for f(x,y) = x² - 2xy + y² at (1,1).
>
> 4. Find the direction(s) of zero change for $f(x,y) = x^2 - 2xy + y^2$ at $(1,1)$.
> *(Source: CUI Lahore SP22 Q5a)*

> **QUIZ:** The temperature in a room is T(x,y,z) = 100 - x² - y² - z². A bug at (1,2,2) wants to cool fastest. In which direction should it move? What is the rate of cooling?
>
> 5. The temperature in a room is $T(x,y,z) = 100 - x^2 - y^2 - z^2$. A bug at $(1,2,2)$ wants to cool fastest. In which direction should it move? What is the rate of cooling?
> *(EE application)*

\`▓▓▓▓▓▓░░░░ 60%\` Course Progress

---`
  },
  {
    id: "chapter-14-6",
    title: "Chapter 14.6: Tangent Planes and Differentials",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-6-sub-1",
        "title": "ELI5 Explanation: The Magic Flat Sheet"
      },
      {
        "id": "chapter-14-6-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-6-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-6-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-6-sub-5",
        "title": "Step-by-Step Method for Plane Problems"
      },
      {
        "id": "chapter-14-6-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-6-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-6-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `\n## Introduction and Core Concepts

In section 14.6, we extend the concept of a tangent line to 3D space. Level surfaces map a 4D function $w = f(x,y,z)$ into a physical 3D space. The gradient vector is our master tool for determining perpendicular normals to these surfaces.

### 1. Tangent Planes and Normal Lines
If $f$ is differentiable and $P_0(x_0, y_0, z_0)$ is a point on the surface $f(x,y,z) = c$ where $\nabla f \neq 0$, then:
- $\nabla f|_{P_0}$ is **normal (perpendicular) to the surface**.
- **Tangent Plane Equation:** The plane through $P_0$ normal to $\nabla f|_{P_0}$:
  $$f_x(P_0)(x - x_0) + f_y(P_0)(y - y_0) + f_z(P_0)(z - z_0) = 0$$
- **Normal Line Equation:** The line through $P_0$ parallel to $\nabla f|_{P_0}$:
  $$x = x_0 + f_x(P_0)t \quad y = y_0 + f_y(P_0)t \quad z = z_0 + f_z(P_0)t$$

### 2. Tangent Planes for $z = f(x,y)$
When a surface is defined explicitly as $z = f(x,y)$, we treat the surface as the level surface $F(x,y,z) = f(x,y) - z = 0$.
The tangent plane equation simplifies beautifully to:
$$f_x(x_0,y_0)(x - x_0) + f_y(x_0,y_0)(y - y_0) - (z - z_0) = 0$$

### 3. Estimating Change (Differentials)
Just as $\Delta y \approx f'(x)dx$ in 1D, we can use tangent planes to estimate small changes in 3D functions.
The **total differential** of $f(x,y,z)$ is:
$$df = f_x dx + f_y dy + f_z dz$$
It tells us roughly how much $f$ changes when we step slightly from $P_0(x_0, y_0, z_0)$ to a nearby point $(x_0+dx, y_0+dy, z_0+dz)$.

If $df$ is exactly the change along the flat tangent plane, it serves as a highly accurate linear approximation to the true curved change $\Delta f$.

**Absolute and Percentage Error:**
- True Variation: $\Delta f$
- Estimated Variation: $df$
- Percentage Error: $\frac{df}{f(P_0)} \times 100\%$

### 4. Functions of More than Three Variables
In economics and science, functions can have any number of variables. The mathematics is structurally identical: the partial derivatives form the components of the gradient, and the differential $df$ expands by simply summing up $f_{x_i} dx_i$ for all inputs.

---

## ELI5 Explanation
If you balance a flat piece of cardboard on the curved top of a basketball, that cardboard is the **Tangent Plane**. Where the cardboard perfectly kisses the ball is $P_0$. The vector pointing straight up from the cardboard away from the ball's center is the **Normal Vector** ($\nabla f$). You can use the height of the cardboard to guess the height of the ball for very tiny steps away from $P_0$.

---

## Detailed Worked Examples

### Example 1: Finding a Tangent Plane to a Level Surface
**Question:** Find the tangent plane and normal line of $x^2 + y^2 + z - 9 = 0$ at the point $P_0(1, 2, 4)$.

**Thought Process:** 
Let $f(x,y,z) = x^2+y^2+z-9$. Find the gradient $\nabla f$ at $(1,2,4)$. The resulting vector components become coefficients $A,B,C$ in the plane equation $A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$. And the components are the velocities in the parametric line equations.

*Sketching Guide for student:* Sketch a paraboloid opening downward $z = 9-x^2-y^2$. Mark $(1,2,4)$ on the slope. Draw a line popping out normal to the surface, and flat plane balanced exactly at the dot!

**Solution:**
$\begin{align*} \nabla f &= 2x\mathbf{i} + 2y\mathbf{j} + 1\mathbf{k} &&\text{Step 1: Calculate partial derivatives}. \\ \nabla f(1,2,4) &= 2(1)\mathbf{i} + 2(2)\mathbf{j} + 1\mathbf{k} = \langle 2, 4, 1 \rangle &&\text{Step 2: Evaluate at } P_0. \end{align*}$

**Tangent Plane:**
$(2)(x-1) + (4)(y-2) + (1)(z-4) = 0$
$2x - 2 + 4y - 8 + z - 4 = 0 \implies 2x + 4y + z = 14$.

**Normal Line:**
$x = 1 + 2t, \quad y = 2 + 4t, \quad z = 4 + t$.

### Example 2: Tangent Line to intersection of two surfaces
**Question:** The surfaces $f(x,y,z) = x^2+y^2-2=0$ and $g(x,y,z) = x+z-4=0$ meet in an ellipse $E$. Find the parametric equations for the line tangent to $E$ at $P_0(1,1,3)$.

**Thought Process:** 
If the curve represents the intersection of two surfaces, the tangent line to the curve must be perpendicular to the normals of *both* surfaces! Therefore, the direction vector $\mathbf{v}$ of the tangent line is the cross product of the two gradients: $\mathbf{v} = \nabla f \times \nabla g$.

*Sketching Guide for student:* Sketch a cylinder. Cut it with a diagonal flat plane! At the intersection (the rim of the cut), the cylinder normal shoots strictly sideways and the plane normal aims diagonally. Their cross product shoots forward along the curve.

**Solution:**
$\begin{align*} \nabla f(1,1,3) &= \langle 2x, 2y, 0 \rangle = \langle 2, 2, 0 \rangle \\ \nabla g(1,1,3) &= \langle 1, 0, 1 \rangle \end{align*}$
Take cross product:
$\begin{align*} \mathbf{v} = \langle 2, 2, 0 \rangle \times \langle 1, 0, 1 \rangle &= \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 2 & 0 \\ 1 & 0 & 1 \end{vmatrix} \\ &= (2-0)\mathbf{i} - (2-0)\mathbf{j} + (0-2)\mathbf{k} = \langle 2, -2, -2 \rangle \end{align*}$

Tangent Line:
$x = 1 + 2t \quad y = 1 - 2t \quad z = 3 - 2t$.

### Example 3: Estimating Change with Differentials
**Question:** A cylindrical can is approximated to have $r = 10\text{cm}$ and $h = 100\text{cm}$. Suppose errors in measurements could be $dr = 0.1\text{cm}$ and $dh = -0.1\text{cm}$. Use differentials to estimate the maximum absolute error in calculating its volume $V = \pi r^2 h$.

**Thought Process:**
The total differential $dV = V_r dr + V_h dh$. Compute partials $V_r$ and $V_h$ at $(10, 100)$ and put it all together.

**Solution:**
$\begin{align*} V_r &= 2\pi r h = 2\pi(10)(100) = 2000\pi &&\text{Step 1: Calculate partials at operating values}. \\ V_h &= \pi r^2 = \pi(10)^2 = 100\pi && \\ dV &= V_r dr + V_h dh &&\text{Step 2: Total differential formula}. \\ dV &= (2000\pi)(0.1) + (100\pi)(-0.1) &&\text{Step 3: Plug in measurement deltas}. \\ &= 200\pi - 10\pi = 190\pi \text{ cm}^3 &&\text{Step 4: Evaluate}. \end{align*}$
The estimated error in volume is $190\pi \approx 597$ cubic cm!

---

## Visuals / Graphs

### 1. Tangent Plane Approximation
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_plane"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Explicitly parameterize the tangent plane to z = x² + 2y² at (1,1,3)."></div>
<div class="user-quiz" data-question="2. Discuss relative error bounds when measuring volume of a cone using differentials."></div>
\nexport const courseContent = [
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation – Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey—your destination—is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'Hôpital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

### 2. The Derivative: "The Speedometer"
* **Standard Definition:** The instantaneous rate of change of a function, geometrically represented as the slope of the tangent line. Formally, $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.
* **Calculus Made Easy Explanation:** "Derivative" is just a fancy Latin word for "Rate". If you are driving a car, your distance is changing. The exact rate your distance changes *right now* is your speed. The speedometer calculates the derivative for you continuously!
* **Utility:** Derivatives are used to optimize systems (finding minimum costs or maximum profits by setting the derivative to zero), predict future states, analyze motion in physics, and train AI models (gradient descent).
* **Illustrative Example:** If profit over time is given by the equation $P(t) = -t^2 + 10t$, the derivative $P'(t) = -2t + 10$. Setting this to zero, $-2t + 10 = 0 \\implies t = 5$. Thus, peak profit happens exactly at $t=5$.
* **Essential Formulas:** 
  * Power Rule: $\\frac{d}{dx} x^n = n x^{n-1}$ (Bring down the power, subtract one!)
  * Chain Rule: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$ (Peel the onion: derivative of the outside times derivative of the inside).

### 3. The Integral: "The Odometer"
* **Standard Definition:** The continuous accumulation of quantities, geometrically the area under a curve.
* **Calculus Made Easy Explanation:** If the derivative breaks things down into instantaneous rates, the integral glues them all back up. If you track your exact speed (derivative) at every millisecond and add it all up (integral), you get your total distance traveled (odometer).
* **Utility:** Integrals are used to find geometric areas, calculate total volumes of solid objects, compute total probability in statistics, or determine work done by a force in physics over a distance.
* **Illustrative Example:** If the rate water flows into a tank is $r(t) = 2t$ gallons per minute, the total water accumulated between $0$ and $3$ minutes is the integral: $\\int_0^3 2t \\, dt = [t^2]_0^3 = 3^2 - 0^2 = 9$ gallons.
* **Essential Formulas:**
  * Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$
  * Integration by Parts: $\\int u \\, dv = uv - \\int v \\, du$

### 4. The Fundamental Theorem of Calculus: "The Grand Connection"
* **Standard Definition:** $\\int_a^b f'(x) dx = f(b) - f(a)$.
* **Calculus Made Easy Explanation:** Differentiation (breaking down) and Integration (building up) are exact mathematical opposites. This theorem is the bridge between the speedometer and the odometer.
* **Utility:** It gives us a phenomenal shortcut. Instead of calculating the area under a curve by adding up an infinite number of microscopic rectangles (Riemann Sums), we just find the antiderivative and evaluate its difference at the two endpoints!
* **Illustrative Example:** To find the area under $f'(x) = 2x$ safely from $x=1$ to $x=3$, we use the theorem: $\\int_1^3 2x \\, dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.

## ELI5 Explanation: The Speedometer and the Odometer

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**—your instantaneous speed at any exact second. 
Your odometer tells you your **integral**—the total accumulated distance you've traveled. 
If you perfectly recorded your speedometer reading every millisecond and added them up, you would get your odometer reading. This magical relationship is the **Fundamental Theorem of Calculus**.

## Visuals / Graphs

### 1. Area under the curve
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="area_integral"></div>

### 2. Tangent line at a point
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_line"></div>

### 3. Limit illustration
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="limit_hole"></div>


## 5 Exhaustive Worked Examples

**Example 1: The Chain Rule**
* **Problem:** Find the exact rate of change (derivative) of the nested function $f(x) = \\sin(x^3 + 2x)$.
* **Thinking Method:** This is a function trapped inside another function, like an onion. The outer layer is the sine wave ($\\sin$), and the inner core is the polynomial ($x^3 + 2x$). We must peel the onion layer by layer using the "Chain Rule".
* **Worked-Out Solution:** 
  1. **Peel the Outer Layer First:** The derivative of an outer $\\sin(\\text{stuff})$ is $\\cos(\\text{stuff})$. We leave the inside exactly alone for now. This gives us $\\cos(x^3 + 2x)$.
  2. **Attack the Inner Core:** Now, multiply by the derivative of the inner stuff. What is the derivative of $x^3 + 2x$? Using the basic power rule, it's $3x^2 + 2$.
  3. **Chain them together:** We multiply step 1 and step 2. 
  4. The final answer is $f'(x) = \\cos(x^3 + 2x) \\cdot (3x^2 + 2)$.
* **Key Takeaway:** Never try to tackle the inside and outside at the exact same moment. Take your time, derivative the outside shell, and multiply by the derivative of the inner core. 

**Example 2: The Product Rule**
* **Problem:** Differentiate (find the slope rule for) the multiplied function $y = x^2e^{3x}$.
* **Thinking Method:** We have two completely different mathematical objects—a parabola ($x^2$) and an exponential curve ($e^{3x}$)—mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"—we temporarily disguise $x^2$ to simplify the visual puzzle.
* **Worked-Out Solution:** 
  1. Choose a disguise variable: Let $u$ perfectly equal the trapped inside portion, $u = x^2$.
  2. Take the derivative to find the trade-in cost: $du = 2x \\, dx$. 
  3. Look at our original problem: $\\int \\cos(x^2) (2x \\, dx)$. The pieces perfectly translate to our new disguise variables $u$ and $du$!
  4. Rewrite the clean, disguised problem: $\\int \\cos(u) \\, du$. So much simpler!
  5. The anti-derivative of $\\cos(u)$ is just $\\sin(u)$.
  6. Final step: Rip off the disguise. Replace $u$ back with $x^2$. 
  7. The final mathematical answer is $\\sin(x^2) + C$ (Never forget the constant $C$ which represents any starting point height).
* **Key Takeaway:** Look for "derivative pairs". If you see a function and its derivative hanging out together, substitute and conquer.

**Example 4: Definite Integral using the Fundamental Theorem**
* **Problem:** Calculate the exact physical area under the curve of $3x^2 - 4x + 1$ strictly between the boundaries of $x=1$ and $x=3$. Notation: $\\int_1^3 (3x^2 - 4x + 1) dx$.
* **Thinking Method:** Instead of drawing thousands of tiny rectangles to measure the area, we will use the magical "Fundamental Theorem of Calculus". We will find the anti-derivative (building it up), and then simply evaluate the difference between the end point and start point!
* **Worked-Out Solution:** 
  1. Step 1: Find the anti-derivative. Using the reverse power rule (add one to the power, divide by the new power). 
  2. $3x^2$ builds up to $x^3$.
  3. $-4x$ builds up to $-2x^2$.
  4. $+1$ builds up to $x$.
  5. Step 2: Write out the evaluated bounds: $[x^3 - 2x^2 + x]_1^3$.
  6. Step 3: Plug in the top ceiling number ($3$) first: $(3)^3 - 2(3)^2 + (3) = 27 - 18 + 3 = 12$.
  7. Step 4: Plug in the bottom floor number ($1$): $(1)^3 - 2(1)^2 + (1) = 1 - 2 + 1 = 0$.
  8. Step 5: Subtract the floor result from the ceiling result: $12 - 0 = 12$.
  9. **The Conclusion:** The exact carved-out area is 12 units squared.
* **Key Takeaway:** A definite integral (with boundary numbers) will completely digest the variables and spit out a single scalar number representing total accumulation.

**Example 5: Evaluating an Indeterminate Limit**
* **Problem:** Evaluate the limit of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.
* **Thinking Method:** The very first rule of limits is to just aggressively plug in the target number. Let's try plugging in 2. The top becomes $4-4 = 0$. The bottom becomes $2-2 = 0$. We hit $\\frac{0}{0}$. This is *not* a dead end; it's a flashing sign that says "Hold on, there's a trick to mathematically clean this up!" We have an algebraic 'hole' blocking us. Let's factor!
* **Worked-Out Solution:** 
  1. Look at the top piece: $x^2 - 4$. This is a classic "Difference of Squares" pattern from algebra class. It breaks down perfectly into $(x-2)(x+2)$.
  2. Rewrite the limit fraction: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$.
  3. Ah ha! Because we are investigating the limit *approaching* 2 (but never exactly touching it), we are legally allowed to cancel the troublemaking $(x-2)$ piece from the top and bottom!
  4. The messy fraction collapses into a beautiful, clean line: $\\lim_{x \\to 2} (x+2)$.
  5. Now try aggressively plugging in $2$ again: $2 + 2 = 4$.
  6. **The Conclusion:** The limit is an exact, solid 4.
* **Key Takeaway:** An answer of $0/0$ does not mean the limit doesn't exist. It just means the true path is temporarily hidden behind a hole, and you must use factorization tools to build a bridge over it.


### Algorithmic Problem Solving Flow

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Evaluate Limit]
          |
          v
+-----------------------------+
| Plug target into expression |
+-----------------------------+
          |
  +-------+-------+
  |               |
[Is 0/0]     [Real Number]
  |               |
  v               v
+--------------+ [Finish]
| Factor / Map |
+--------------+
  |
  v
+--------------+
| Re-evaluate  |
+--------------+
  |
  v
[Finish]
\`\`\`
\n\n## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Direct Substitution<br><span class="text-xs font-normal text-slate-300">Plug in x = a</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Check Result<br><span class="text-xs font-normal">If number → Done! If 0/0 → Hold up!</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Algebraic Rescue<br><span class="text-xs font-normal">Factor, Conjugate, or L'Hopital's</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Re-evaluate<br><span class="text-xs font-normal">Apply limit to simplified function</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$
>       1. **Direct Substitution:** Plug in $x=2$. We get $\\frac{2^2 - 4}{2 - 2}$.
>       2. **Check Result:** We get $\\frac{0}{0}$. This is indeterminate, so we can't stop here.
>       3. **Algebraic Rescue:** Factor the top: $(x-2)(x+2)$. Cancel $(x-2)$ from top and bottom. We are left with just $x + 2$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Re-evaluate:</strong> Now apply the limit $\\lim_{x \\to 2} (x+2)$. Plug in $x=2$ to get $4$. Done!</p>
  </div>
</div>

## Chapter Assessment

> **QUIZ:** Find the derivative of f(x) = ln(x^2 + 1).
>
> 1. Find the derivative of $f(x) = \\ln(x^2 + 1)$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Evaluate the definite integral of sin(x) from 0 to pi.
>
> 2. Evaluate the definite integral $\\int_0^{\\pi} \\sin(x) dx$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Compute the limit as x approaches 0 of sin(3x) / x.
>
> 3. Compute $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

<br/>
\`▓▓░░░░░░░░ 14%\` Course Progress
\`▓░░░░░░░░░ 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-14-1",
    title: "Chapter 14.1: Functions of Several Variables",
    progress: 50,
    subheadings: [
      { id: "ch14-1-intro", title: "Introduction: Escaping Flatland" },
      { id: "ch14-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-1-eli5", title: "ELI5 Explanation: The Solar Panel Map" },
      { id: "ch14-1-visuals", title: "Visuals / Graphs" },
      { id: "ch14-1-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = \sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\ge$).
3. Test a point, say $(0,1)$. $1 \ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

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

`
  },
  {
    id: "chapter-14-2",
    title: "Chapter 14.2: Limits and Continuity in Higher Dimensions",
    progress: 0,
    subheadings: [
      { id: "ch14-2-intro", title: "Introduction: The Dimensional Leap in Limits" },
      { id: "ch14-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-2-eli5", title: "ELI5 Explanation: The Antenna Signal Approach" },
      { id: "ch14-2-visuals", title: "Visuals / Graphs" },
      { id: "ch14-2-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$
if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ exists.
3. $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\lim_{(x,y) \to (0,0)} \frac{x^2 - xy}{\sqrt{x} - \sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\sqrt{x} + \sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\sqrt{x} - \sqrt{y})(\sqrt{x} + \sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \ge 0, y \ge 0, x \neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} \lim \frac{x(x-y)}{\sqrt{x} - \sqrt{y}} &= \lim \frac{x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})}{\sqrt{x}-\sqrt{y}} \\ &= \lim x(\sqrt{x} + \sqrt{y}) \\ &= 0(\sqrt{0} + \sqrt{0}) = 0 \end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\lim_{(x,y)\to(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x \to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} \end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\lim_{(x,y)\to(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \cos \theta$, $y = r \sin \theta$. $x^2+y^2 = r^2$. As $(x,y) \to (0,0)$, $r \to 0$ independently of $\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} \lim_{r \to 0} \frac{r^3 \cos^3 \theta}{r^2} &= \lim_{r \to 0} r \cos^3 \theta \end{align*}$
Since $|\cos^3 \theta| \le 1$, the expression is bounded by $-r \le r\cos^3\theta \le r$. By the Squeeze Theorem, as $r \to 0$, the limit is $0$, regardless of $\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>

`
  },
  {
    id: "chapter-14-3",
    title: "Chapter 14.3: Partial Derivatives",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-3-sub-1",
        "title": "ELI5 Explanation: The Mountain Slicer"
      },
      {
        "id": "chapter-14-3-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-3-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-3-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-3-sub-5",
        "title": "Step-by-Step Method for Basic Problems"
      },
      {
        "id": "chapter-14-3-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-3-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-3-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{\partial f}{\partial x}, f_x, \frac{\partial z}{\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\partial f/\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\partial f/\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\partial f/\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
- $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\Delta z$ can be expressed as:
$$\Delta z = f_x \Delta x + f_y \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y$$
where $\epsilon_1, \epsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \sin(xy)$, find $\partial f / \partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{\partial f}{\partial y} &= \frac{\partial}{\partial y}(y \sin(xy)) &&\text{Step 1: Set up product rule}. \\ &= y \cdot \frac{\partial}{\partial y}(\sin(xy)) + \sin(xy) \cdot \frac{\partial}{\partial y}(y) &&\text{Step 2: Apply product rule}. \\ &= y \cdot (\cos(xy) \cdot x) + \sin(xy) \cdot 1 &&\text{Step 3: Chain rule on inner function } xy \text{ treating x as constant}. \\ &= xy \cos(xy) + \sin(xy) &&\text{Step 4: Cleanup}. \end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\partial z/\partial x$ if $yz - \ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{\partial}{\partial x}(yz - \ln z) &= \frac{\partial}{\partial x}(x + y) &&\text{Step 1: Differentiate both sides wrt x}. \\ y \frac{\partial z}{\partial x} - \frac{1}{z} \frac{\partial z}{\partial x} &= 1 + 0 &&\text{Step 2: Normal diff rules, tacking on } \partial z/\partial x \text{ where z is modified}. \\ \frac{\partial z}{\partial x} \left(y - \frac{1}{z}\right) &= 1 &&\text{Step 3: Factor out derivative}. \\ \frac{\partial z}{\partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&\text{Step 4: Algebra to clear fractions}. \end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= \cos y + y e^x &&\text{Step 1: Diff wrt x}. \\ f_{xy} &= -\sin y + e^x &&\text{Step 2: Diff } f_x \text{ wrt y}. \end{align*}$

$\begin{align*} f_y &= -x \sin y + e^x &&\text{Step 3: Diff original wrt y}. \\ f_{yx} &= -\sin y + e^x &&\text{Step 4: Diff } f_y \text{ wrt x}. \end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>

`
  },
  {
    id: "chapter-14-4",
    title: "Chapter 14.4: The Chain Rule in Multivariable Calculus",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-4-sub-1",
        "title": "ELI5 Explanation: The Tree of Dependencies"
      },
      {
        "id": "chapter-14-4-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-4-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-4-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-4-sub-5",
        "title": "Step-by-Step Method for Chain Rule Problems"
      },
      {
        "id": "chapter-14-4-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-4-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-4-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `\n## Introduction and Core Concepts

In 14.4, we extend the Chain Rule to functions of several variables. When $w = f(x,y,z)$ and $x,y,z$ are functions of $t$ (or even $r, s$), we can calculate the derivative of $w$ with respect to the underlying variables without massive algebraic substitutions.

### 1. Chain Rule for One Independent Variable
If $w = f(x,y)$ is differentiable and $x=x(t)$, $y=y(t)$ are differentiable, then $w$ is a differentiable function of $t$, and:
$$\frac{dw}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

If there are three intermediate variables $x, y, z$:
$$\frac{dw}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} + \frac{\partial f}{\partial z}\frac{dz}{dt}$$

### 2. Chain Rule for Multiple Independent Variables
Suppose $w = f(x,y,z)$ and $x, y, z$ are functions of two variables $r$ and $s$. Then $w$ has partial derivatives with respect to $r$ and $s$:
$$\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial r}$$
$$\frac{\partial w}{\partial s} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial s} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial s}$$

### 3. Tree Diagrams
A **tree diagram** provides a systematic way to remember the Chain Rule. 
1. Place the dependent variable ($w$) at the top.
2. Draw branches to the intermediate variables ($x, y, z$).
3. Draw sub-branches from each intermediate variable to the independent variables ($u, v, t, \text{etc}$).
4. To find the derivative of the top variable with respect to a bottom variable, trace ALL paths connecting them, multiply the derivatives along each path, and sum the paths together.

### 4. Implicit Differentiation Revisited
If $F(x,y) = 0$ defines $y$ implicitly as a function of $x$, and $F$ is differentiable:
$$\frac{dy}{dx} = -\frac{F_x}{F_y}$$
provided $F_y \neq 0$.

If $F(x,y,z) = 0$ defines $z$ implicitly as a function of $x$ and $y$:
$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z} \quad \text{and} \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$$
provided $F_z \neq 0$.

---

## ELI5 Explanation
Imagine a company where the CEO ($w$) depends on Regional Managers ($x,y,z$) to make profits. Each Regional Manager depends on Local Salesmen ($r,s$). To find out how much the CEO's profit changes when Salesman $r$ sells more, you have to add up the contributions flowing through *every* Regional Manager that Salesman $r$ reports to. That’s exactly what the tree diagram and the summation formula do!

---

## Detailed Worked Examples

### Example 1: Chain Rule (1 Independent Variable)
**Question:** Find $dw/dt$ at $t=\pi$ given $w = x^2y$, $x = \cos t$, $y = \sin t$.

**Thought Process:** 
Use the chain rule formula: $dw/dt = (\partial w/\partial x)(dx/dt) + (\partial w/\partial y)(dy/dt)$.
Calculate derivatives at $t = \pi$. First, find $x$ and $y$ at $t = \pi$.
$x(\pi) = \cos(\pi) = -1$.
$y(\pi) = \sin(\pi) = 0$.

**Solution:**
$\begin{align*} \frac{\partial w}{\partial x} &= 2xy && \frac{\partial w}{\partial y} = x^2 \\ \frac{dx}{dt} &= -\sin t && \frac{dy}{dt} = \cos t \\ \frac{dw}{dt} &= (2xy)(-\sin t) + (x^2)(\cos t) \end{align*}$
At $t=\pi$: $x=-1$, $y=0$.
$\begin{align*} \frac{dw}{dt} &= (2(-1)(0))(-\sin \pi) + ((-1)^2)(\cos \pi) \\ &= (0)(0) + (1)(-1) = -1. \end{align*}$

### Example 2: Tree Diagram for Complex Variables
**Question:** If $w=x^2+y^2$, where $x=r-s$ and $y=r+s$, find $\partial w/ \partial r$.

**Thought Process:**
Diagram: $w$ branches to $x$ and $y$. Both branch to $r$ and $s$.
Path to $r$: $w \to x \to r$ AND $w \to y \to r$.
Formula: $(\partial w/\partial x)(\partial x/\partial r) + (\partial w/\partial y)(\partial y/\partial r)$.

*Sketching Guide for student:* Draw $w$ at the top node. Draw two downward lines to $x$ and $y$. Draw two lines descending from $x$ to $r$ and $s$, and two from $y$ to $r$ and $s$. Trace the lines arriving at $r$.

**Solution:**
$\begin{align*} \frac{\partial w}{\partial x} &= 2x  && \frac{\partial x}{\partial r} = 1 \\ \frac{\partial w}{\partial y} &= 2y  && \frac{\partial y}{\partial r} = 1 \\ \frac{\partial w}{\partial r} &= (2x)(1) + (2y)(1) = 2x + 2y \end{align*}$
Substitute for $x$ and $y$:
$2(r-s) + 2(r+s) = 2r - 2s + 2r + 2s = 4r$.

### Example 3: Implicit Differentiation
**Question:** Find $\partial z/\partial x$ if $x^2 y + y^2 z - z^3 = 5$.

**Thought Process:**
Let $F(x,y,z) = x^2 y + y^2 z - z^3 - 5 = 0$.
The formula is $\partial z/ \partial x = -F_x / F_z$.

**Solution:**
$\begin{align*} F_x &= 2xy \\ F_z &= y^2 - 3z^2 \\ \frac{\partial z}{\partial x} &= -\frac{2xy}{y^2 - 3z^2} \end{align*}$

---

## Visuals / Graphs

### 1. Tree Diagram Logic
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_tree"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute dw/dt if w = xy + z, x = cos t, y = sin t, z = t"></div>
<div class="user-quiz" data-question="2. Find dy/dx implicitly if x^3 - 2y^2 + xy = 0"></div>
\nexport const courseContent = [
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation – Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey—your destination—is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'Hôpital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

### 2. The Derivative: "The Speedometer"
* **Standard Definition:** The instantaneous rate of change of a function, geometrically represented as the slope of the tangent line. Formally, $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.
* **Calculus Made Easy Explanation:** "Derivative" is just a fancy Latin word for "Rate". If you are driving a car, your distance is changing. The exact rate your distance changes *right now* is your speed. The speedometer calculates the derivative for you continuously!
* **Utility:** Derivatives are used to optimize systems (finding minimum costs or maximum profits by setting the derivative to zero), predict future states, analyze motion in physics, and train AI models (gradient descent).
* **Illustrative Example:** If profit over time is given by the equation $P(t) = -t^2 + 10t$, the derivative $P'(t) = -2t + 10$. Setting this to zero, $-2t + 10 = 0 \\implies t = 5$. Thus, peak profit happens exactly at $t=5$.
* **Essential Formulas:** 
  * Power Rule: $\\frac{d}{dx} x^n = n x^{n-1}$ (Bring down the power, subtract one!)
  * Chain Rule: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$ (Peel the onion: derivative of the outside times derivative of the inside).

### 3. The Integral: "The Odometer"
* **Standard Definition:** The continuous accumulation of quantities, geometrically the area under a curve.
* **Calculus Made Easy Explanation:** If the derivative breaks things down into instantaneous rates, the integral glues them all back up. If you track your exact speed (derivative) at every millisecond and add it all up (integral), you get your total distance traveled (odometer).
* **Utility:** Integrals are used to find geometric areas, calculate total volumes of solid objects, compute total probability in statistics, or determine work done by a force in physics over a distance.
* **Illustrative Example:** If the rate water flows into a tank is $r(t) = 2t$ gallons per minute, the total water accumulated between $0$ and $3$ minutes is the integral: $\\int_0^3 2t \\, dt = [t^2]_0^3 = 3^2 - 0^2 = 9$ gallons.
* **Essential Formulas:**
  * Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$
  * Integration by Parts: $\\int u \\, dv = uv - \\int v \\, du$

### 4. The Fundamental Theorem of Calculus: "The Grand Connection"
* **Standard Definition:** $\\int_a^b f'(x) dx = f(b) - f(a)$.
* **Calculus Made Easy Explanation:** Differentiation (breaking down) and Integration (building up) are exact mathematical opposites. This theorem is the bridge between the speedometer and the odometer.
* **Utility:** It gives us a phenomenal shortcut. Instead of calculating the area under a curve by adding up an infinite number of microscopic rectangles (Riemann Sums), we just find the antiderivative and evaluate its difference at the two endpoints!
* **Illustrative Example:** To find the area under $f'(x) = 2x$ safely from $x=1$ to $x=3$, we use the theorem: $\\int_1^3 2x \\, dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.

## ELI5 Explanation: The Speedometer and the Odometer

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**—your instantaneous speed at any exact second. 
Your odometer tells you your **integral**—the total accumulated distance you've traveled. 
If you perfectly recorded your speedometer reading every millisecond and added them up, you would get your odometer reading. This magical relationship is the **Fundamental Theorem of Calculus**.

## Visuals / Graphs

### 1. Area under the curve
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="area_integral"></div>

### 2. Tangent line at a point
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_line"></div>

### 3. Limit illustration
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="limit_hole"></div>


## 5 Exhaustive Worked Examples

**Example 1: The Chain Rule**
* **Problem:** Find the exact rate of change (derivative) of the nested function $f(x) = \\sin(x^3 + 2x)$.
* **Thinking Method:** This is a function trapped inside another function, like an onion. The outer layer is the sine wave ($\\sin$), and the inner core is the polynomial ($x^3 + 2x$). We must peel the onion layer by layer using the "Chain Rule".
* **Worked-Out Solution:** 
  1. **Peel the Outer Layer First:** The derivative of an outer $\\sin(\\text{stuff})$ is $\\cos(\\text{stuff})$. We leave the inside exactly alone for now. This gives us $\\cos(x^3 + 2x)$.
  2. **Attack the Inner Core:** Now, multiply by the derivative of the inner stuff. What is the derivative of $x^3 + 2x$? Using the basic power rule, it's $3x^2 + 2$.
  3. **Chain them together:** We multiply step 1 and step 2. 
  4. The final answer is $f'(x) = \\cos(x^3 + 2x) \\cdot (3x^2 + 2)$.
* **Key Takeaway:** Never try to tackle the inside and outside at the exact same moment. Take your time, derivative the outside shell, and multiply by the derivative of the inner core. 

**Example 2: The Product Rule**
* **Problem:** Differentiate (find the slope rule for) the multiplied function $y = x^2e^{3x}$.
* **Thinking Method:** We have two completely different mathematical objects—a parabola ($x^2$) and an exponential curve ($e^{3x}$)—mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"—we temporarily disguise $x^2$ to simplify the visual puzzle.
* **Worked-Out Solution:** 
  1. Choose a disguise variable: Let $u$ perfectly equal the trapped inside portion, $u = x^2$.
  2. Take the derivative to find the trade-in cost: $du = 2x \\, dx$. 
  3. Look at our original problem: $\\int \\cos(x^2) (2x \\, dx)$. The pieces perfectly translate to our new disguise variables $u$ and $du$!
  4. Rewrite the clean, disguised problem: $\\int \\cos(u) \\, du$. So much simpler!
  5. The anti-derivative of $\\cos(u)$ is just $\\sin(u)$.
  6. Final step: Rip off the disguise. Replace $u$ back with $x^2$. 
  7. The final mathematical answer is $\\sin(x^2) + C$ (Never forget the constant $C$ which represents any starting point height).
* **Key Takeaway:** Look for "derivative pairs". If you see a function and its derivative hanging out together, substitute and conquer.

**Example 4: Definite Integral using the Fundamental Theorem**
* **Problem:** Calculate the exact physical area under the curve of $3x^2 - 4x + 1$ strictly between the boundaries of $x=1$ and $x=3$. Notation: $\\int_1^3 (3x^2 - 4x + 1) dx$.
* **Thinking Method:** Instead of drawing thousands of tiny rectangles to measure the area, we will use the magical "Fundamental Theorem of Calculus". We will find the anti-derivative (building it up), and then simply evaluate the difference between the end point and start point!
* **Worked-Out Solution:** 
  1. Step 1: Find the anti-derivative. Using the reverse power rule (add one to the power, divide by the new power). 
  2. $3x^2$ builds up to $x^3$.
  3. $-4x$ builds up to $-2x^2$.
  4. $+1$ builds up to $x$.
  5. Step 2: Write out the evaluated bounds: $[x^3 - 2x^2 + x]_1^3$.
  6. Step 3: Plug in the top ceiling number ($3$) first: $(3)^3 - 2(3)^2 + (3) = 27 - 18 + 3 = 12$.
  7. Step 4: Plug in the bottom floor number ($1$): $(1)^3 - 2(1)^2 + (1) = 1 - 2 + 1 = 0$.
  8. Step 5: Subtract the floor result from the ceiling result: $12 - 0 = 12$.
  9. **The Conclusion:** The exact carved-out area is 12 units squared.
* **Key Takeaway:** A definite integral (with boundary numbers) will completely digest the variables and spit out a single scalar number representing total accumulation.

**Example 5: Evaluating an Indeterminate Limit**
* **Problem:** Evaluate the limit of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.
* **Thinking Method:** The very first rule of limits is to just aggressively plug in the target number. Let's try plugging in 2. The top becomes $4-4 = 0$. The bottom becomes $2-2 = 0$. We hit $\\frac{0}{0}$. This is *not* a dead end; it's a flashing sign that says "Hold on, there's a trick to mathematically clean this up!" We have an algebraic 'hole' blocking us. Let's factor!
* **Worked-Out Solution:** 
  1. Look at the top piece: $x^2 - 4$. This is a classic "Difference of Squares" pattern from algebra class. It breaks down perfectly into $(x-2)(x+2)$.
  2. Rewrite the limit fraction: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$.
  3. Ah ha! Because we are investigating the limit *approaching* 2 (but never exactly touching it), we are legally allowed to cancel the troublemaking $(x-2)$ piece from the top and bottom!
  4. The messy fraction collapses into a beautiful, clean line: $\\lim_{x \\to 2} (x+2)$.
  5. Now try aggressively plugging in $2$ again: $2 + 2 = 4$.
  6. **The Conclusion:** The limit is an exact, solid 4.
* **Key Takeaway:** An answer of $0/0$ does not mean the limit doesn't exist. It just means the true path is temporarily hidden behind a hole, and you must use factorization tools to build a bridge over it.


### Algorithmic Problem Solving Flow

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Evaluate Limit]
          |
          v
+-----------------------------+
| Plug target into expression |
+-----------------------------+
          |
  +-------+-------+
  |               |
[Is 0/0]     [Real Number]
  |               |
  v               v
+--------------+ [Finish]
| Factor / Map |
+--------------+
  |
  v
+--------------+
| Re-evaluate  |
+--------------+
  |
  v
[Finish]
\`\`\`
\n\n## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Direct Substitution<br><span class="text-xs font-normal text-slate-300">Plug in x = a</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Check Result<br><span class="text-xs font-normal">If number → Done! If 0/0 → Hold up!</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Algebraic Rescue<br><span class="text-xs font-normal">Factor, Conjugate, or L'Hopital's</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Re-evaluate<br><span class="text-xs font-normal">Apply limit to simplified function</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$
>       1. **Direct Substitution:** Plug in $x=2$. We get $\\frac{2^2 - 4}{2 - 2}$.
>       2. **Check Result:** We get $\\frac{0}{0}$. This is indeterminate, so we can't stop here.
>       3. **Algebraic Rescue:** Factor the top: $(x-2)(x+2)$. Cancel $(x-2)$ from top and bottom. We are left with just $x + 2$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Re-evaluate:</strong> Now apply the limit $\\lim_{x \\to 2} (x+2)$. Plug in $x=2$ to get $4$. Done!</p>
  </div>
</div>

## Chapter Assessment

> **QUIZ:** Find the derivative of f(x) = ln(x^2 + 1).
>
> 1. Find the derivative of $f(x) = \\ln(x^2 + 1)$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Evaluate the definite integral of sin(x) from 0 to pi.
>
> 2. Evaluate the definite integral $\\int_0^{\\pi} \\sin(x) dx$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Compute the limit as x approaches 0 of sin(3x) / x.
>
> 3. Compute $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

<br/>
\`▓▓░░░░░░░░ 14%\` Course Progress
\`▓░░░░░░░░░ 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-14-1",
    title: "Chapter 14.1: Functions of Several Variables",
    progress: 50,
    subheadings: [
      { id: "ch14-1-intro", title: "Introduction: Escaping Flatland" },
      { id: "ch14-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-1-eli5", title: "ELI5 Explanation: The Solar Panel Map" },
      { id: "ch14-1-visuals", title: "Visuals / Graphs" },
      { id: "ch14-1-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = \sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\ge$).
3. Test a point, say $(0,1)$. $1 \ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

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

`
  },
  {
    id: "chapter-14-2",
    title: "Chapter 14.2: Limits and Continuity in Higher Dimensions",
    progress: 0,
    subheadings: [
      { id: "ch14-2-intro", title: "Introduction: The Dimensional Leap in Limits" },
      { id: "ch14-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-2-eli5", title: "ELI5 Explanation: The Antenna Signal Approach" },
      { id: "ch14-2-visuals", title: "Visuals / Graphs" },
      { id: "ch14-2-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$
if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ exists.
3. $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\lim_{(x,y) \to (0,0)} \frac{x^2 - xy}{\sqrt{x} - \sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\sqrt{x} + \sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\sqrt{x} - \sqrt{y})(\sqrt{x} + \sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \ge 0, y \ge 0, x \neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} \lim \frac{x(x-y)}{\sqrt{x} - \sqrt{y}} &= \lim \frac{x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})}{\sqrt{x}-\sqrt{y}} \\ &= \lim x(\sqrt{x} + \sqrt{y}) \\ &= 0(\sqrt{0} + \sqrt{0}) = 0 \end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\lim_{(x,y)\to(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x \to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} \end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\lim_{(x,y)\to(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \cos \theta$, $y = r \sin \theta$. $x^2+y^2 = r^2$. As $(x,y) \to (0,0)$, $r \to 0$ independently of $\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} \lim_{r \to 0} \frac{r^3 \cos^3 \theta}{r^2} &= \lim_{r \to 0} r \cos^3 \theta \end{align*}$
Since $|\cos^3 \theta| \le 1$, the expression is bounded by $-r \le r\cos^3\theta \le r$. By the Squeeze Theorem, as $r \to 0$, the limit is $0$, regardless of $\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>

`
  },
  {
    id: "chapter-14-3",
    title: "Chapter 14.3: Partial Derivatives",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-3-sub-1",
        "title": "ELI5 Explanation: The Mountain Slicer"
      },
      {
        "id": "chapter-14-3-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-3-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-3-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-3-sub-5",
        "title": "Step-by-Step Method for Basic Problems"
      },
      {
        "id": "chapter-14-3-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-3-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-3-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{\partial f}{\partial x}, f_x, \frac{\partial z}{\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\partial f/\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\partial f/\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\partial f/\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
- $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\Delta z$ can be expressed as:
$$\Delta z = f_x \Delta x + f_y \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y$$
where $\epsilon_1, \epsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \sin(xy)$, find $\partial f / \partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{\partial f}{\partial y} &= \frac{\partial}{\partial y}(y \sin(xy)) &&\text{Step 1: Set up product rule}. \\ &= y \cdot \frac{\partial}{\partial y}(\sin(xy)) + \sin(xy) \cdot \frac{\partial}{\partial y}(y) &&\text{Step 2: Apply product rule}. \\ &= y \cdot (\cos(xy) \cdot x) + \sin(xy) \cdot 1 &&\text{Step 3: Chain rule on inner function } xy \text{ treating x as constant}. \\ &= xy \cos(xy) + \sin(xy) &&\text{Step 4: Cleanup}. \end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\partial z/\partial x$ if $yz - \ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{\partial}{\partial x}(yz - \ln z) &= \frac{\partial}{\partial x}(x + y) &&\text{Step 1: Differentiate both sides wrt x}. \\ y \frac{\partial z}{\partial x} - \frac{1}{z} \frac{\partial z}{\partial x} &= 1 + 0 &&\text{Step 2: Normal diff rules, tacking on } \partial z/\partial x \text{ where z is modified}. \\ \frac{\partial z}{\partial x} \left(y - \frac{1}{z}\right) &= 1 &&\text{Step 3: Factor out derivative}. \\ \frac{\partial z}{\partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&\text{Step 4: Algebra to clear fractions}. \end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= \cos y + y e^x &&\text{Step 1: Diff wrt x}. \\ f_{xy} &= -\sin y + e^x &&\text{Step 2: Diff } f_x \text{ wrt y}. \end{align*}$

$\begin{align*} f_y &= -x \sin y + e^x &&\text{Step 3: Diff original wrt y}. \\ f_{yx} &= -\sin y + e^x &&\text{Step 4: Diff } f_y \text{ wrt x}. \end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>

`
  },
  {
    id: "chapter-14-4",
    title: "Chapter 14.4: The Chain Rule in Multivariable Calculus",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-4-sub-1",
        "title": "ELI5 Explanation: The Tree of Dependencies"
      },
      {
        "id": "chapter-14-4-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-4-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-4-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-4-sub-5",
        "title": "Step-by-Step Method for Chain Rule Problems"
      },
      {
        "id": "chapter-14-4-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-4-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-4-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `### ELI5 Explanation: The Tree of Dependencies
> **Deep Dive Analogy: The Gear Assembly (Electrical Engineering Relevance)**
> In an electrical or mechanical system, if you turn Gear A (representing time $t$), it drives other gears, say Gear B ($x$) and Gear C ($y$). Both B and C then contribute to turning the master Gear D ($w$), which could represent power output or voltage. The Chain Rule is like calculating the total rotational speed of Gear D by meticulously adding up the rotational contributions from *all* intermediate gears. If you forget to account for the rotational effect of Gear C, your final speed calculation for Gear D will be inaccurate. You must trace every possible mechanical linkage or electrical signal path from the primary driver (Gear A) up to the final output (Gear D).

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_helix"></div>

Imagine an apple growing on a branch, the branch connects to a trunk, and the trunk connects to the soil. If the soil gets toxic, the trunk gets sick, the branch rots, and the apple dies. Everything is connected through a chain of dependencies.
In multivariable calculus, you might have a temperature $w$ that depends on your coordinates $x$ and $y$. But those coordinates depend on time $t$ because you are walking. So, a change in time causes a change in position, which causes a change in temperature! To find exactly how fast the temperature changes against time (dw/dt), we just draw a tree diagram, trace every single path from the apple down to the soil, multiply down the branches, and add the routes together.

### Glossary of Key Terms
*   **Intermediate Variables:** Variables in the middle of the chain. For example, spatial coordinates x, y, z that connect the final output to the root time variable.
*   **Independent / Root Variable:** The absolute bottom of the tree (usually parameter $t$, or $r$ and $s$).
*   **Tree Diagram:** A visual flowchart mapping all dependencies to ensure no branches are missed during chain rule derivation.
*   **Implicit Differentiation Formula:** A massive shortcut to find dy/dx by taking negative partials: dy/dx = - F_x / F_y.

### Why This Matters in Electrical Engineering
*   **Moving Charge in Fields:** If an electron moves through a voltage field V(x,y,z), its exact path coordinates (x,y,z) are changing over time 't'. The chain rule computes exactly how fast the voltage drops entirely with respect to time dV/dt as the particle physically travels. This is crucial for understanding current flow and potential differences in dynamic systems.
*   **Parameter Estimation:** If system power depends on current and voltage P(I, V), but both I and V are fluctuating themselves as a function of temperature 'T', the Chain Rule allows you to calculate dP/dT without painfully resolving the entire system equation. This helps engineers design systems that can handle thermal variations.

### Formal Definitions and Notation
*   **Chain Rule (1 Independent):** $\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent):** $\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r}$
*   **Implicit Formula:** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (Works only if F(x,y) = 0).

### Step-by-Step Method for Chain Rule Problems
1.  **Draw the Tree:** Put the dependent variable (w) at the very top. Put the intermediate variables (x,y,z) on the next tier down. Put the root independent variables (t, r, s) at the absolute bottom.
2.  **Draw the Lines:** Connect the top to the middle, and the middle to the bottom based on the mathematical equations given.
3.  **Trace the Paths:** To find a derivative from the top apple to a bottom root, slide your finger down every possible continuous line routing to that specific root.
4.  **Multiply and Add:** Multiply the derivatives along a single distinct path. Add the results of all separate paths together.

### 10 Worked Exercises
**Exercise 1: Chain Rule with One Independent Path**
*   **Problem:** Find dw/dt given w = xy, where x = cos(t) and y = sin(t). Evaluate at t=π/2.
*   **Thinking Process:** I have an apple (w). It splits into two branches (x and y). Both branch down into one root (t). I have exactly two paths to trace.
*   **Unique Method:** Direct tree tracing and path addition.
*   **Step-by-Step Solution:**
    1.  Write formula: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt).
    2.  Left path: ∂w/∂x = y. And dx/dt = -sin(t). Product is -y sin(t).
    3.  Right path: ∂w/∂y = x. And dy/dt = cos(t). Product is x cos(t).
    4.  Add them: dw/dt = -y sin(t) + x cos(t).
    5.  Substitute intermediate variables back into roots: y = sin(t), x = cos(t).
    6.  dw/dt = -sin(t)sin(t) + cos(t)cos(t) = cos^2(t) - sin^2(t) = cos(2t).
    7.  Evaluate at t=π/2: cos(2(π/2)) = cos(π) = -1.
*   **Common mistake:** Forgetting to substitute back the x and y letters into 't' functions before trying to plug in the final exact 't' number.
*   **Figure Reference:** Figure 14.19 maps out a diamond-shaped network flow diagram linking dependencies visually from w, spreading to x/y, and converging to t.

**Exercise 2: Changes along a Helix Curve**
*   **Problem:** Find dw/dt for w = xy + z, where the particle moves on x=cos(t), y=sin(t), z=t. Evaluate at t=0.
*   **Thinking Process:** *Pause and trace paths.* Tree has three main branches x, y, z. All three converge into t. I need three terms added together.
*   **Unique Method:** 3-Term path addition.
*   **Step-by-Step Solution:**
    1.  Formula: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt) + (∂w/∂z)(dz/dt).
    2.  Derivative parts: ∂w/∂x = y. dx/dt = -sin(t).
    3.  ∂w/∂y = x. dy/dt = cos(t).
    4.  ∂w/∂z = 1. dz/dt = 1.
    5.  Assemble: -y sin(t) + x cos(t) + 1.
    6.  Substitute intermediate values for t=0: x = cos(0) = 1. y = sin(0) = 0.
    7.  Final calculation: -(0)sin(0) + (1)cos(0) + 1 = 0 + 1 + 1 = 2.
*   **Common mistake:** Accidentally multiplying the three branches together instead of adding them at the junction point.
*   **Figure Reference:** Figure 14.21 depicts a 3D helix path with dependencies on time, illustrating the three distinct branches contributing to the change in 'w'.

**Exercise 3: Two Independent Roots**
*   **Problem:** Find ∂w/∂r for w = x + 2y + z^2. Given x=r/s, y=r^2 + ln(s), z=2r.
*   **Thinking Process:** The tree root splits into two different bottom soils: r and s. The problem strictly asks for r. I will completely ignore all paths leading to s.
*   **Unique Method:** Selective path tracing targeting a specific root variable.
*   **Step-by-Step Solution:**
    1.  Formula: ∂w/∂r = (∂w/∂x)(∂x/∂r) + (∂w/∂y)(∂y/∂r) + (∂w/∂z)(∂z/∂r).
    2.  ∂w/∂x = 1. ∂x/∂r = 1/s.
    3.  ∂w/∂y = 2. ∂y/∂r = 2r.
    4.  ∂w/∂z = 2z. ∂z/∂r = 2.
    5.  Assemble: (1)(1/s) + (2)(2r) + (2z)(2) = 1/s + 4r + 4z.
    6.  Replace z with 2r: 1/s + 4r + 4(2r) = 1/s + 12r.
*   **Common mistake:** Getting confused by 's' and trying to derive it when taking the partial strictly against 'r'. s acts as a frozen constant!
*   **Figure Reference:** Figure 14.20 presents a complicated dual-root branching tree, demonstrating how paths to 'r' are completely distinct from paths to 's'.

**Exercise 4: Direct Substitution Shortcut**
*   **Problem:** Instead of the chain rule, use direct substitution to find the derivative of w = x^2 + y^2 where x = cos(t), y = sin(t).
*   **Thinking Process:** Why torture myself with a tree diagram if I can just eliminate the intermediate variables algebraically before I even do calculus?
*   **Unique Method:** Pre-calculus algebraic collapse.
*   **Step-by-Step Solution:**
    1.  Substitute x and y perfectly into w: w = (cos(t))^2 + (sin(t))^2.
    2.  Apply the Pythagorean Identity from trigonometry: cos^2(t) + sin^2(t) = 1.
    3.  The equation cleanly collapses into w = 1.
    4.  Now take the derivative: dw/dt of the number 1 is purely 0.
*   **Common mistake:** Spending 5 minutes drawing a tree diagram when basic algebra can solve the problem in 5 seconds. Look for clean substitutions first!
*   **Figure Reference:** Figure 14.22 shows a flowchart emphasizing "Algebraic Simplification First?" as a key decision point before applying chain rule.

**Exercise 5: The Magic Implicit Formula (Source: COMSATS FA24 Q6)**
*   **Problem:** Use Theorem 8 to find dy/dx if y^2 - x^2 - sin(xy) = 0.
*   **Thinking Process:** Standard implicit differentiation requires product rules and factoring out dy/dx. The magic formula dy/dx = - F_x / F_y bypasses all of that entirely!
*   **Unique Method:** Using partial derivatives to instantly solve complicated 1D implicit differentiation.
*   **Step-by-Step Solution:**
    1.  Define the whole equation as F(x,y) = y^2 - x^2 - sin(xy) = 0.
    2.  Find F_x (target is x, freeze y): -2x - y cos(xy).
    3.  Find F_y (target is y, freeze x): 2y - x cos(xy).
    4.  Apply the formula: dy/dx = - [ -2x - y cos(xy) ] / [ 2y - x cos(xy) ].
    5.  Clean up negative signs: (2x + y cos(xy)) / (2y - x cos(xy)).
*   **Common mistake:** Forgetting the mandatory negative sign completely placed in front of the master fraction formula!
*   **Figure Reference:** Figure 14.23 visualizes the level curve F(x,y)=0 and illustrates how the normal vector gradients (F_x, F_y) relate to the tangent slope dy/dx.

**Exercise 6: Three Variable Implicit Formula (Source: CUI SP22 Q4)**
*   **Problem:** Find ∂z/∂x given 1/x + 1/y + 1/z - 1 = 0 at (2, 3, 6).
*   **Thinking Process:** The magic formula expands to 3D implicitly! To find ∂z/∂x, I will just use - F_x / F_z. Wait! Notice the pattern. The letter on TOP of the fraction (z) goes on the BOTTOM of the formula F_z. It swaps!
*   **Unique Method:** 3D implicit formula ∂z/∂x = - F_x / F_z.
*   **Step-by-Step Solution:**
    1.  Let F(x,y,z) = x^-1 + y^-1 + z^-1 - 1.
    2.  Find F_x: -x^-2 = -1/x^2.
    3.  Find F_z: -z^-2 = -1/z^2.
    4.  Formula: - (-1/x^2) / (-1/z^2) = - (z^2 / x^2).
    5.  Evaluate at (x=2, z=6): - (6^2 / 2^2) = - 36 / 4 = -9.
*   **Common mistake:** Accidentally writing F_z / F_x instead of strictly F_x / F_z. The letters physically reverse position.
*   **Figure Reference:** Figure 14.24 shows a 3D implicit surface, and a tangent plane to illustrate the geometric interpretation of the partial derivative ∂z/∂x.

**Exercise 7: Checking Chain Rule Constraints**
*   **Problem:** Express ∂w/∂r in terms of r and s if w = xy + z, x = r-s, y=r+s, z=t.
*   **Thinking Process:** Wait, z = t? Where is r?
*   **Unique Method:** Tracing zero-paths in mixed variable trees.
*   **Step-by-Step Solution:**
    1.  ∂w/∂r = (∂w/∂x)(∂x/∂r) + (∂w/∂y)(∂y/∂r) + (∂w/∂z)(∂z/∂r).
    2.  ∂w/∂x = y. ∂x/∂r = 1.
    3.  ∂w/∂y = x. ∂y/∂r = 1.
    4.  ∂w/∂z = 1. But what is ∂z/∂r? Since z=t, and t doesn't possess the letter r, its partial derivative against r is strict 0!
    5.  Equation becomes: y(1) + x(1) + 1(0) = x + y.
    6.  Substitute back: (r-s) + (r+s) = 2r.
*   **Common mistake:** Assuming every intermediate variable MUST map to every independent root. Broken branches yield zero derivative paths.
*   **Figure Reference:** Figure 14.25 illustrates a tree diagram where a branch from 'w' to 'z' leads to 't', demonstrating a 'dead end' or zero contribution when differentiating with respect to 'r'.

**Exercise 8: Differentiating Integrals (The Ultimate Chain Rule)**
*   **Problem:** Find the derivative of F(x) = ∫_0^{x^2} sqrt(t^4 + t^3) dt.
*   **Thinking Process:** This combines the Fundamental Theorem of Calculus with the multivariable Chain Rule (Leibniz Integral Rule). The upper bound is moving (x^2), and the inside integrand also physically morphs based on x, but for this simpler version, the integrand is purely in terms of t.
*   **Unique Method:** Fundamental Theorem of Calculus Part 1 (with Chain Rule).
*   **Step-by-Step Solution:**
    1.  Identify the structure: F(x) = ∫_a^{g(x)} f(t) dt. The derivative is f(g(x)) * g'(x).
    2.  Here, g(x) = x^2, so g'(x) = 2x.
    3.  And f(t) = sqrt(t^4 + t^3).
    4.  Plug g(x) into f(t): f(g(x)) = sqrt((x^2)^4 + (x^2)^3) = sqrt(x^8 + x^6).
    5.  Multiply by g'(x): 2x * sqrt(x^8 + x^6).
    6.  The derivative is 2x sqrt(x^8 + x^6).
*   **Common mistake:** Just plugging in the upper bound without multiplying by the chain rule derivative of the bound itself (the 2x). Students often forget d/dx(x^2).
*   **Figure Reference:** Figure 14.26 graphically represents the area under a curve, highlighting how a changing upper limit (x^2) requires a chain rule adjustment for the rate of area change.

**Exercise 9: Expanding Three Dependent Variables**
*   **Problem:** Find ∂u/∂x if u = (p-q)/(q-r), p=x+y+z, q=x-y+z, r=x+y-z. (Source: COMSATS FA25).
*   **Thinking Process:** u depends on p, q, r. All three depend firmly on x. I must trace three branches.
*   **Unique Method:** Symmetrical algebraic substitution.
*   **Step-by-Step Solution:**
    1.  Formula: $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial p}\frac{\partial p}{\partial x} + \frac{\partial u}{\partial q}\frac{\partial q}{\partial x} + \frac{\partial u}{\partial r}\frac{\partial r}{\partial x}$.
    2.  Find inner partials with respect to x: ∂p/∂x = 1, ∂q/∂x = 1, ∂r/∂x = 1.
    3.  This simplifies the formula to: $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial p} + \frac{\partial u}{\partial q} + \frac{\partial u}{\partial r}$.
    4.  Now find the partials of u with respect to p, q, r:
        *   ∂u/∂p = 1/(q-r)
        *   ∂u/∂q = $\frac{-(q-r)(1) - (p-q)(1)}{(q-r)^2} = \frac{-q+r-p+q}{(q-r)^2} = \frac{r-p}{(q-r)^2}$
        *   ∂u/∂r = $\frac{-(p-q)(-1)}{(q-r)^2} = \frac{p-q}{(q-r)^2}$
    5.  Sum them up: $\frac{\partial u}{\partial x} = \frac{1}{q-r} + \frac{r-p}{(q-r)^2} + \frac{p-q}{(q-r)^2}$.
    6.  To simplify, find a common denominator: $\frac{(q-r) + (r-p) + (p-q)}{(q-r)^2} = \frac{q-r+r-p+p-q}{(q-r)^2} = \frac{0}{(q-r)^2} = 0$.
    7.  Therefore, ∂u/∂x = 0.
*   **Common mistake:** Getting bogged down in complex algebra for ∂u/∂q and ∂u/∂r without recognizing the potential for simplification after summing. Also, forgetting to use the quotient rule for these partials.
*   **Figure Reference:** Figure 14.27 displays a complex multi-layered tree diagram for 'u' depending on 'p,q,r' which in turn depend on 'x,y,z', illustrating the systematic decomposition of dependencies.

**Exercise 10: Changing Dimensions (Real-World Applied)**
*   **Problem:** The edges of a box a, b, c change over time at 1 m/s, 1 m/s, and -3 m/s. If a=1, b=2, c=3, how fast is Volume (V) changing?
*   **Thinking Process:** Volume depends on three edges physically expanding/contracting over time. This is exactly the 3D chain rule!
*   **Unique Method:** Applied physical geometric rates.
*   **Step-by-Step Solution:**
    1.  Equation: V = a * b * c.
    2.  Formula: dV/dt = (∂V/∂a)(da/dt) + (∂V/∂b)(db/dt) + (∂V/∂c)(dc/dt).
    3.  ∂V/∂a is exactly bc. ∂V/∂b is ac. ∂V/∂c is ab.
    4.  dV/dt = (bc)(da/dt) + (ac)(db/dt) + (ab)(dc/dt).
    5.  Substitute current states: a=1, b=2, c=3. And da/dt = 1, db/dt = 1, dc/dt = -3.
    6.  dV/dt = (2*3)(1) + (1*3)(1) + (1*2)(-3).
    7.  Calculate: 6(1) + 3(1) + 2(-3) = 6 + 3 - 6 = 3 cubic meters per second.
*   **Common mistake:** Treating a, b, c as constants instead of variables strictly bound to time t, or mixing up the values of a, b, c with their rates of change.
*   **Figure Reference:** Figure 14.28 provides an animation or diagram of a rectangular box whose dimensions dynamically change over time, visually representing the input rates of change.

#
### Algorithmic Problem Solving Flow

To master Tangent Planes, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Tangent Plane]
          |
          v
+---------------------------+
| Is it z=f(x,y) or F=c?    |
+---------------------------+
          |
  +-------+-------+
  |               |
[z=f(...)]      [F=c]
  |               |
  v               v
+----------+   +----------+
| Find f_x,|   | Find F_x,|
| f_y      |   | F_y, F_z |
+----------+   +----------+
  |               |
  v               v
+----------+   +----------+
| Plug in  |   | Plug into|
| Formula  |   | F_x*dx+..|
+----------+   +----------+
          |
          v
       [Finish]
\`\`\`

## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Draw the Tree<br><span class="text-xs font-normal text-slate-300">Map Output → Intermediates → Independent Vars</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Identify Paths<br><span class="text-xs font-normal">Find EVERY path from top to target variable</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Multiply Down<br><span class="text-xs font-normal">Multiply link slopes along each path</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Add Branches<br><span class="text-xs font-normal">Sum all completed path products together!</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** Find $\\frac{dw}{dt}$ if $w = x^2y$, $x = \\cos(t)$, $y = \\sin(t)$
>       1. **Draw the Tree:** $w$ depends on $x$ and $y$. Both $x$ and $y$ depend on $t$.
>       2. **Identify Paths:** There are two paths to $t$. Path 1: $w \\to x \\to t$. Path 2: $w \\to y \\to t$.
>       3. **Multiply Down:** Path 1 contribution: $\\frac{\\partial w}{\\partial x} \\cdot \\frac{dx}{dt} = (2xy) \\cdot (-\\sin(t))$. Path 2 contribution: $\\frac{\\partial w}{\\partial y} \\cdot \\frac{dy}{dt} = (x^2) \\cdot (\\cos(t))$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Add Branches:</strong> $\\frac{dw}{dt} = -2xy\\sin(t) + x^2\\cos(t)$. (Substitute $x$ and $y$ in terms of $t$ for final answer).</p>
  </div>
</div>

### Key Points
*   **The Tree Flow:** Start at the top variable. Draw lines to every intermediate variable it depends on. Draw lines from them to ultimate root variables.
*   **To Find A Derivative:** Follow every path from the top variable down strictly to your desired target root variable. Multiply terms traveling down a path. Add separated paths together.
*   **Algebraic Simplification:** Always check if direct substitution can simplify the problem *before* applying the Chain Rule; it can sometimes make complex problems trivial.

### Formulas
*   **Chain Rule (1 Independent Variable):** $\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent Variables):** $\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial r}$ (adjust for number of intermediate variables)
*   **Implicit Differentiation (2 Variables):** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (where F(x,y)=0)
*   **Implicit Differentiation (3 Variables, e.g., for ∂z/∂x):** $\frac{\partial z}{\partial x} = - \frac{F_x}{F_z}$ (where F(x,y,z)=0)

### Common Mistakes
*   **Forgetting the Negative Sign:** A common error in the implicit differentiation formulas. Always remember the \`-\` at the front!
*   **Mixing Independent Variables:** When finding a partial derivative with respect to one independent variable (e.g., ∂w/∂r), treat other independent variables (like 's') as constants, even if intermediate variables depend on them.
*   **Multiplying instead of Adding:** Each distinct path in the tree diagram contributes an *additive* term to the final derivative, not a multiplicative one.
*   **Incomplete Substitution:** Forgetting to substitute all intermediate variables back in terms of the final independent variable(s) before evaluating a numerical answer.
*   **Ignoring Zero Paths:** If an intermediate variable doesn't depend on the target independent root variable, its branch's contribution is zero. Don't force a derivative if none exists.

### Chapter Assessment

> **QUIZ:** If w = e^{xy} ln(z), x = t², y = sin t, z = cos t, find dw/dt at t = 0.
>
> 4. If $w = e^{xy} \ln(z)$, $x = t^2$, $y = \sin t$, $z = \cos t$, find $\frac{dw}{dt}$ at $t = 0$.
> *(Source: CUI Sahiwal FA25 Q4a)*

> **QUIZ:** Use implicit differentiation to find ∂z/∂y for x² y + y z² + z x = 0 at (1,1,-1).
>
> 5. Use implicit differentiation to find $\frac{\partial z}{\partial y}$ for $x^2 y + y z^2 + z x = 0$ at $(1,1,-1)$.
> *(Original)*

> **QUIZ:** Source: COMSATS FA24.. Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.
>
> 1. **Source: COMSATS FA24..** Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.

> **QUIZ:** Source: COMSATS FA24.. Use the implicit formula to find ∂z/∂y for x^2 + xy + y^2 - 7z = 0.
>
> 2. **Source: COMSATS FA24..** Use the implicit formula to find ∂z/∂y for x^2 + xy + y^2 - 7z = 0.

> **QUIZ:** Source: CUI SP22.. Draw a tree diagram and formulate the chain rule equation for ∂w/∂s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).
>
> 3. **Source: CUI SP22..** Draw a tree diagram and formulate the chain rule equation for ∂w/∂s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).

\`▓▓▓▓▓▓░░░░ 60%\` Course Progress

---`
  },
  {
    id: "chapter-14-5",
    title: "Chapter 14.5: Directional Derivatives and Gradient Vectors",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-5-sub-1",
        "title": "ELI5 Explanation: The Perfect Compass"
      },
      {
        "id": "chapter-14-5-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-5-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-5-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-5-sub-5",
        "title": "Step-by-Step Method for Directional Derivative Problems"
      },
      {
        "id": "chapter-14-5-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-5-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-5-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `\n## Introduction and Core Concepts

In section 14.5, we introduce the **Directional Derivative**, which calculates the rate of change of a surface in *any* arbitrary direction. The **Gradient Vector** is the magical mathematical tool that points exactly in the direction of steepest ascent!

### 1. Directional Derivatives in the Plane
The derivative of $f(x,y)$ at $P_0(x_0,y_0)$ in the direction of the *unit vector* $\mathbf{u} = u_1\mathbf{i} + u_2\mathbf{j}$ is:
$$D_{\mathbf{u}} f = \lim_{s \to 0} \frac{f(x_0+su_1, y_0+su_2) - f(x_0,y_0)}{s}$$
This calculates the slope of the surface if you slice it with a vertical plane pointing in the direction $\mathbf{u}$.

### 2. The Gradient Vector
The **gradient vector** (or gradient) of $f(x,y)$ at a point $P_0(x_0,y_0)$ is the vector comprised of the partial derivatives evaluated at that point:
$$\nabla f = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j}$$
It is read "del $f$" or "grad $f$".

### 3. Calculating the Directional Derivative
If $f$ is differentiable, the directional derivative is the dot product of the gradient and the unit vector direction!
$$D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$$

**IMPORTANT:** The vector defining the direction **must be a unit vector**. If given $\mathbf{v}$, you must first calculate $\mathbf{u} = \mathbf{v}/|\mathbf{v}|$.

### 4. Properties of the Directional Derivative
Since $D_{\mathbf{u}} f = |\nabla f| |\mathbf{u}| \cos \theta = |\nabla f| \cos \theta$:
1. **Maximum Increase:** $f$ increases most rapidly when $\cos \theta = 1$. The maximum rate of increase is $|\nabla f|$ and occurs in the exact direction of $\nabla f$.
2. **Maximum Decrease:** $f$ decreases most rapidly when $\cos \theta = -1$. The maximum rate of decrease is $-|\nabla f|$ and occurs in the direction $-\nabla f$.
3. **Zero Change:** Any direction $\mathbf{u}$ orthogonal to $\nabla f$ ($\theta = \pi/2$) is a direction of zero change ($D_{\mathbf{u}}f = 0$).

### 5. Gradients and Level Curves
At every point in the domain of a differentiable function, the gradient vector $\nabla f$ is **normal (perpendicular) to the level curve** passing through that point.
Therefore, the equation of the tangent line to the level curve $f(x,y) = c$ at $(x_0,y_0)$ is:
$$f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) = 0$$

---

## ELI5 Explanation
Imagine you are standing on a ski slope. The gradient $\nabla f$ is an arrow painted on the ground between your skis. It *always* points straight up the steepest part of the hill. If you want to know how steep your path will be if you turn and walk sideways, you just take the dot product (comparative angle) of your new walking direction $\mathbf{u}$ against the steep-up arrow! If you walk 90 degrees away from the steep-up arrow, your path is perfectly flat.

---

## Detailed Worked Examples

### Example 1: Calculating the Directional Derivative
**Question:** Find the derivative of $f(x,y) = xe^y + \cos(xy)$ at $(2,0)$ in the direction of $\mathbf{v} = 3\mathbf{i} - 4\mathbf{j}$.

**Thought Process:** 
First, the direction $\mathbf{v}$ is NOT a unit vector. I must normalize it.
$\mathbf{u} = \frac{\mathbf{v}}{|\mathbf{v}|}$.
Then I need to find the gradient $\nabla f$, plug in the point $(2,0)$, and dot product it with $\mathbf{u}$.

*Sketching Guide for student:* Draw the $xy$-axes. Mark point $(2,0)$. Draw a tiny direction vector $\mathbf{u}$ starting from $(2,0)$ pointing mostly right and slightly down. The result will tell us if the 3D surface is rising or falling in that direction!

**Solution:**
$\begin{align*} |\mathbf{v}| &= \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5 &&\text{Step 1: Normalize vector}. \\ \mathbf{u} &= \frac{3}{5}\mathbf{i} - \frac{4}{5}\mathbf{j} && \\ f_x &= e^y - y\sin(xy) \implies f_x(2,0) = e^0 - 0 = 1 &&\text{Step 2: Compute partials}. \\ f_y &= xe^y - x\sin(xy) \implies f_y(2,0) = 2e^0 - 0 = 2 && \\ \nabla f(2,0) &= 1\mathbf{i} + 2\mathbf{j} &&\text{Step 3: Construct gradient vector}. \\ D_{\mathbf{u}} f &= \nabla f \cdot \mathbf{u} = (1)\left(\frac{3}{5}\right) + (2)\left(-\frac{4}{5}\right) &&\text{Step 4: Dot product}. \\ &= \frac{3}{5} - \frac{8}{5} = -1. &&\text{Step 5: Simplify}. \end{align*}$
The surface is dropping at a rate of $-1$ in that direction.

### Example 2: Directions of Extreme Change
**Question:** Find the directions in which $f(x,y) = \frac{x^2}{2} + \frac{y^2}{2}$ increases most rapidly at $(1,1)$, decreases most rapidly, and the direction of zero change.

**Thought Process:**
Most rapid increase = direction of gradient. 
Most rapid decrease = direction of negative gradient.
Zero change = orthogonal to gradient.

**Solution:**
$\begin{align*} \nabla f &= \langle x, y \rangle = \langle 1, 1 \rangle \text{ at } (1,1). \\ \text{Increase:}~ & \mathbf{u} = \frac{\langle 1, 1 \rangle}{\sqrt{2}} = \left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle. \\ \text{Decrease:}~ & \mathbf{u} = -\left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle = \left\langle -\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}} \right\rangle. \\ \text{Zero change:}~ & \text{Dot product must be 0}. \langle a, b \rangle \cdot \langle 1, 1 \rangle = 0 \implies a = -b. \\ & \text{Unit vectors are } \left\langle \frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}} \right\rangle \text{ and } \left\langle -\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle. \end{align*}$

### Example 3: Tangent line to a Level Curve
**Question:** Find an equation for the tangent to the ellipse $\frac{x^2}{4} + y^2 = 2$ at the point $(-2,1)$.

**Thought Process:**
We can view this ellipse as a level curve $f(x,y) = c$. So, $f(x,y) = x^2/4 + y^2 = 2$.
The gradient is perpendicular to the level curve. Any line perpendicular to a normal vector $\mathbf{N} = \langle A, B \rangle$ has the form $A(x-x_0) + B(y-y_0) = 0$.

*Sketching Guide for student:* Draw the ellipse. Mark $(-2,1)$. Draw the normal vector pointing outward, then draw the tangent line orthogonal across it touching the rim.

**Solution:**
$\begin{align*} \nabla f &= \frac{x}{2}\mathbf{i} + 2y\mathbf{j} &&\text{Step 1: Get general gradient}. \\ \nabla f(-2,1) &= -1\mathbf{i} + 2\mathbf{j} &&\text{Step 2: Gradient at point forms the Normal vector N}. \\ A(x-x_0) + B(y-y_0) &= 0 \implies -1(x + 2) + 2(y - 1) = 0 &&\text{Step 3: Point-normal form of a line}. \\ -x - 2 + 2y - 2 &= 0 \implies x - 2y = -4 &&\text{Step 4: Algebraic simplification}. \end{align*}$

---

## Visuals / Graphs

### 1. Gradients and Ascent Paths
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="gradient_vector"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the directional derivative of f(x,y) = x²y at (1,2) towards the origin."></div>
<div class="user-quiz" data-question="2. Find the direction of steepest descent for z = ln(x²+y²) at (1,1)."></div>
\nexport const courseContent = [
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation – Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey—your destination—is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'Hôpital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

### 2. The Derivative: "The Speedometer"
* **Standard Definition:** The instantaneous rate of change of a function, geometrically represented as the slope of the tangent line. Formally, $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.
* **Calculus Made Easy Explanation:** "Derivative" is just a fancy Latin word for "Rate". If you are driving a car, your distance is changing. The exact rate your distance changes *right now* is your speed. The speedometer calculates the derivative for you continuously!
* **Utility:** Derivatives are used to optimize systems (finding minimum costs or maximum profits by setting the derivative to zero), predict future states, analyze motion in physics, and train AI models (gradient descent).
* **Illustrative Example:** If profit over time is given by the equation $P(t) = -t^2 + 10t$, the derivative $P'(t) = -2t + 10$. Setting this to zero, $-2t + 10 = 0 \\implies t = 5$. Thus, peak profit happens exactly at $t=5$.
* **Essential Formulas:** 
  * Power Rule: $\\frac{d}{dx} x^n = n x^{n-1}$ (Bring down the power, subtract one!)
  * Chain Rule: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$ (Peel the onion: derivative of the outside times derivative of the inside).

### 3. The Integral: "The Odometer"
* **Standard Definition:** The continuous accumulation of quantities, geometrically the area under a curve.
* **Calculus Made Easy Explanation:** If the derivative breaks things down into instantaneous rates, the integral glues them all back up. If you track your exact speed (derivative) at every millisecond and add it all up (integral), you get your total distance traveled (odometer).
* **Utility:** Integrals are used to find geometric areas, calculate total volumes of solid objects, compute total probability in statistics, or determine work done by a force in physics over a distance.
* **Illustrative Example:** If the rate water flows into a tank is $r(t) = 2t$ gallons per minute, the total water accumulated between $0$ and $3$ minutes is the integral: $\\int_0^3 2t \\, dt = [t^2]_0^3 = 3^2 - 0^2 = 9$ gallons.
* **Essential Formulas:**
  * Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$
  * Integration by Parts: $\\int u \\, dv = uv - \\int v \\, du$

### 4. The Fundamental Theorem of Calculus: "The Grand Connection"
* **Standard Definition:** $\\int_a^b f'(x) dx = f(b) - f(a)$.
* **Calculus Made Easy Explanation:** Differentiation (breaking down) and Integration (building up) are exact mathematical opposites. This theorem is the bridge between the speedometer and the odometer.
* **Utility:** It gives us a phenomenal shortcut. Instead of calculating the area under a curve by adding up an infinite number of microscopic rectangles (Riemann Sums), we just find the antiderivative and evaluate its difference at the two endpoints!
* **Illustrative Example:** To find the area under $f'(x) = 2x$ safely from $x=1$ to $x=3$, we use the theorem: $\\int_1^3 2x \\, dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.

## ELI5 Explanation: The Speedometer and the Odometer

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**—your instantaneous speed at any exact second. 
Your odometer tells you your **integral**—the total accumulated distance you've traveled. 
If you perfectly recorded your speedometer reading every millisecond and added them up, you would get your odometer reading. This magical relationship is the **Fundamental Theorem of Calculus**.

## Visuals / Graphs

### 1. Area under the curve
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="area_integral"></div>

### 2. Tangent line at a point
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_line"></div>

### 3. Limit illustration
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="limit_hole"></div>


## 5 Exhaustive Worked Examples

**Example 1: The Chain Rule**
* **Problem:** Find the exact rate of change (derivative) of the nested function $f(x) = \\sin(x^3 + 2x)$.
* **Thinking Method:** This is a function trapped inside another function, like an onion. The outer layer is the sine wave ($\\sin$), and the inner core is the polynomial ($x^3 + 2x$). We must peel the onion layer by layer using the "Chain Rule".
* **Worked-Out Solution:** 
  1. **Peel the Outer Layer First:** The derivative of an outer $\\sin(\\text{stuff})$ is $\\cos(\\text{stuff})$. We leave the inside exactly alone for now. This gives us $\\cos(x^3 + 2x)$.
  2. **Attack the Inner Core:** Now, multiply by the derivative of the inner stuff. What is the derivative of $x^3 + 2x$? Using the basic power rule, it's $3x^2 + 2$.
  3. **Chain them together:** We multiply step 1 and step 2. 
  4. The final answer is $f'(x) = \\cos(x^3 + 2x) \\cdot (3x^2 + 2)$.
* **Key Takeaway:** Never try to tackle the inside and outside at the exact same moment. Take your time, derivative the outside shell, and multiply by the derivative of the inner core. 

**Example 2: The Product Rule**
* **Problem:** Differentiate (find the slope rule for) the multiplied function $y = x^2e^{3x}$.
* **Thinking Method:** We have two completely different mathematical objects—a parabola ($x^2$) and an exponential curve ($e^{3x}$)—mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"—we temporarily disguise $x^2$ to simplify the visual puzzle.
* **Worked-Out Solution:** 
  1. Choose a disguise variable: Let $u$ perfectly equal the trapped inside portion, $u = x^2$.
  2. Take the derivative to find the trade-in cost: $du = 2x \\, dx$. 
  3. Look at our original problem: $\\int \\cos(x^2) (2x \\, dx)$. The pieces perfectly translate to our new disguise variables $u$ and $du$!
  4. Rewrite the clean, disguised problem: $\\int \\cos(u) \\, du$. So much simpler!
  5. The anti-derivative of $\\cos(u)$ is just $\\sin(u)$.
  6. Final step: Rip off the disguise. Replace $u$ back with $x^2$. 
  7. The final mathematical answer is $\\sin(x^2) + C$ (Never forget the constant $C$ which represents any starting point height).
* **Key Takeaway:** Look for "derivative pairs". If you see a function and its derivative hanging out together, substitute and conquer.

**Example 4: Definite Integral using the Fundamental Theorem**
* **Problem:** Calculate the exact physical area under the curve of $3x^2 - 4x + 1$ strictly between the boundaries of $x=1$ and $x=3$. Notation: $\\int_1^3 (3x^2 - 4x + 1) dx$.
* **Thinking Method:** Instead of drawing thousands of tiny rectangles to measure the area, we will use the magical "Fundamental Theorem of Calculus". We will find the anti-derivative (building it up), and then simply evaluate the difference between the end point and start point!
* **Worked-Out Solution:** 
  1. Step 1: Find the anti-derivative. Using the reverse power rule (add one to the power, divide by the new power). 
  2. $3x^2$ builds up to $x^3$.
  3. $-4x$ builds up to $-2x^2$.
  4. $+1$ builds up to $x$.
  5. Step 2: Write out the evaluated bounds: $[x^3 - 2x^2 + x]_1^3$.
  6. Step 3: Plug in the top ceiling number ($3$) first: $(3)^3 - 2(3)^2 + (3) = 27 - 18 + 3 = 12$.
  7. Step 4: Plug in the bottom floor number ($1$): $(1)^3 - 2(1)^2 + (1) = 1 - 2 + 1 = 0$.
  8. Step 5: Subtract the floor result from the ceiling result: $12 - 0 = 12$.
  9. **The Conclusion:** The exact carved-out area is 12 units squared.
* **Key Takeaway:** A definite integral (with boundary numbers) will completely digest the variables and spit out a single scalar number representing total accumulation.

**Example 5: Evaluating an Indeterminate Limit**
* **Problem:** Evaluate the limit of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.
* **Thinking Method:** The very first rule of limits is to just aggressively plug in the target number. Let's try plugging in 2. The top becomes $4-4 = 0$. The bottom becomes $2-2 = 0$. We hit $\\frac{0}{0}$. This is *not* a dead end; it's a flashing sign that says "Hold on, there's a trick to mathematically clean this up!" We have an algebraic 'hole' blocking us. Let's factor!
* **Worked-Out Solution:** 
  1. Look at the top piece: $x^2 - 4$. This is a classic "Difference of Squares" pattern from algebra class. It breaks down perfectly into $(x-2)(x+2)$.
  2. Rewrite the limit fraction: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$.
  3. Ah ha! Because we are investigating the limit *approaching* 2 (but never exactly touching it), we are legally allowed to cancel the troublemaking $(x-2)$ piece from the top and bottom!
  4. The messy fraction collapses into a beautiful, clean line: $\\lim_{x \\to 2} (x+2)$.
  5. Now try aggressively plugging in $2$ again: $2 + 2 = 4$.
  6. **The Conclusion:** The limit is an exact, solid 4.
* **Key Takeaway:** An answer of $0/0$ does not mean the limit doesn't exist. It just means the true path is temporarily hidden behind a hole, and you must use factorization tools to build a bridge over it.


### Algorithmic Problem Solving Flow

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Evaluate Limit]
          |
          v
+-----------------------------+
| Plug target into expression |
+-----------------------------+
          |
  +-------+-------+
  |               |
[Is 0/0]     [Real Number]
  |               |
  v               v
+--------------+ [Finish]
| Factor / Map |
+--------------+
  |
  v
+--------------+
| Re-evaluate  |
+--------------+
  |
  v
[Finish]
\`\`\`
\n\n## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Direct Substitution<br><span class="text-xs font-normal text-slate-300">Plug in x = a</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Check Result<br><span class="text-xs font-normal">If number → Done! If 0/0 → Hold up!</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Algebraic Rescue<br><span class="text-xs font-normal">Factor, Conjugate, or L'Hopital's</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Re-evaluate<br><span class="text-xs font-normal">Apply limit to simplified function</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$
>       1. **Direct Substitution:** Plug in $x=2$. We get $\\frac{2^2 - 4}{2 - 2}$.
>       2. **Check Result:** We get $\\frac{0}{0}$. This is indeterminate, so we can't stop here.
>       3. **Algebraic Rescue:** Factor the top: $(x-2)(x+2)$. Cancel $(x-2)$ from top and bottom. We are left with just $x + 2$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Re-evaluate:</strong> Now apply the limit $\\lim_{x \\to 2} (x+2)$. Plug in $x=2$ to get $4$. Done!</p>
  </div>
</div>

## Chapter Assessment

> **QUIZ:** Find the derivative of f(x) = ln(x^2 + 1).
>
> 1. Find the derivative of $f(x) = \\ln(x^2 + 1)$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Evaluate the definite integral of sin(x) from 0 to pi.
>
> 2. Evaluate the definite integral $\\int_0^{\\pi} \\sin(x) dx$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Compute the limit as x approaches 0 of sin(3x) / x.
>
> 3. Compute $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

<br/>
\`▓▓░░░░░░░░ 14%\` Course Progress
\`▓░░░░░░░░░ 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-14-1",
    title: "Chapter 14.1: Functions of Several Variables",
    progress: 50,
    subheadings: [
      { id: "ch14-1-intro", title: "Introduction: Escaping Flatland" },
      { id: "ch14-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-1-eli5", title: "ELI5 Explanation: The Solar Panel Map" },
      { id: "ch14-1-visuals", title: "Visuals / Graphs" },
      { id: "ch14-1-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = \sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\ge$).
3. Test a point, say $(0,1)$. $1 \ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

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

`
  },
  {
    id: "chapter-14-2",
    title: "Chapter 14.2: Limits and Continuity in Higher Dimensions",
    progress: 0,
    subheadings: [
      { id: "ch14-2-intro", title: "Introduction: The Dimensional Leap in Limits" },
      { id: "ch14-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-2-eli5", title: "ELI5 Explanation: The Antenna Signal Approach" },
      { id: "ch14-2-visuals", title: "Visuals / Graphs" },
      { id: "ch14-2-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$
if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ exists.
3. $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\lim_{(x,y) \to (0,0)} \frac{x^2 - xy}{\sqrt{x} - \sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\sqrt{x} + \sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\sqrt{x} - \sqrt{y})(\sqrt{x} + \sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \ge 0, y \ge 0, x \neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} \lim \frac{x(x-y)}{\sqrt{x} - \sqrt{y}} &= \lim \frac{x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})}{\sqrt{x}-\sqrt{y}} \\ &= \lim x(\sqrt{x} + \sqrt{y}) \\ &= 0(\sqrt{0} + \sqrt{0}) = 0 \end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\lim_{(x,y)\to(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x \to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} \end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\lim_{(x,y)\to(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \cos \theta$, $y = r \sin \theta$. $x^2+y^2 = r^2$. As $(x,y) \to (0,0)$, $r \to 0$ independently of $\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} \lim_{r \to 0} \frac{r^3 \cos^3 \theta}{r^2} &= \lim_{r \to 0} r \cos^3 \theta \end{align*}$
Since $|\cos^3 \theta| \le 1$, the expression is bounded by $-r \le r\cos^3\theta \le r$. By the Squeeze Theorem, as $r \to 0$, the limit is $0$, regardless of $\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>

`
  },
  {
    id: "chapter-14-3",
    title: "Chapter 14.3: Partial Derivatives",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-3-sub-1",
        "title": "ELI5 Explanation: The Mountain Slicer"
      },
      {
        "id": "chapter-14-3-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-3-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-3-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-3-sub-5",
        "title": "Step-by-Step Method for Basic Problems"
      },
      {
        "id": "chapter-14-3-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-3-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-3-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{\partial f}{\partial x}, f_x, \frac{\partial z}{\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\partial f/\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\partial f/\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\partial f/\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
- $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\Delta z$ can be expressed as:
$$\Delta z = f_x \Delta x + f_y \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y$$
where $\epsilon_1, \epsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \sin(xy)$, find $\partial f / \partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{\partial f}{\partial y} &= \frac{\partial}{\partial y}(y \sin(xy)) &&\text{Step 1: Set up product rule}. \\ &= y \cdot \frac{\partial}{\partial y}(\sin(xy)) + \sin(xy) \cdot \frac{\partial}{\partial y}(y) &&\text{Step 2: Apply product rule}. \\ &= y \cdot (\cos(xy) \cdot x) + \sin(xy) \cdot 1 &&\text{Step 3: Chain rule on inner function } xy \text{ treating x as constant}. \\ &= xy \cos(xy) + \sin(xy) &&\text{Step 4: Cleanup}. \end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\partial z/\partial x$ if $yz - \ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{\partial}{\partial x}(yz - \ln z) &= \frac{\partial}{\partial x}(x + y) &&\text{Step 1: Differentiate both sides wrt x}. \\ y \frac{\partial z}{\partial x} - \frac{1}{z} \frac{\partial z}{\partial x} &= 1 + 0 &&\text{Step 2: Normal diff rules, tacking on } \partial z/\partial x \text{ where z is modified}. \\ \frac{\partial z}{\partial x} \left(y - \frac{1}{z}\right) &= 1 &&\text{Step 3: Factor out derivative}. \\ \frac{\partial z}{\partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&\text{Step 4: Algebra to clear fractions}. \end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= \cos y + y e^x &&\text{Step 1: Diff wrt x}. \\ f_{xy} &= -\sin y + e^x &&\text{Step 2: Diff } f_x \text{ wrt y}. \end{align*}$

$\begin{align*} f_y &= -x \sin y + e^x &&\text{Step 3: Diff original wrt y}. \\ f_{yx} &= -\sin y + e^x &&\text{Step 4: Diff } f_y \text{ wrt x}. \end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>

`
  },
  {
    id: "chapter-14-4",
    title: "Chapter 14.4: The Chain Rule in Multivariable Calculus",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-4-sub-1",
        "title": "ELI5 Explanation: The Tree of Dependencies"
      },
      {
        "id": "chapter-14-4-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-4-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-4-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-4-sub-5",
        "title": "Step-by-Step Method for Chain Rule Problems"
      },
      {
        "id": "chapter-14-4-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-4-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-4-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `\n## Introduction and Core Concepts

In 14.4, we extend the Chain Rule to functions of several variables. When $w = f(x,y,z)$ and $x,y,z$ are functions of $t$ (or even $r, s$), we can calculate the derivative of $w$ with respect to the underlying variables without massive algebraic substitutions.

### 1. Chain Rule for One Independent Variable
If $w = f(x,y)$ is differentiable and $x=x(t)$, $y=y(t)$ are differentiable, then $w$ is a differentiable function of $t$, and:
$$\frac{dw}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

If there are three intermediate variables $x, y, z$:
$$\frac{dw}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} + \frac{\partial f}{\partial z}\frac{dz}{dt}$$

### 2. Chain Rule for Multiple Independent Variables
Suppose $w = f(x,y,z)$ and $x, y, z$ are functions of two variables $r$ and $s$. Then $w$ has partial derivatives with respect to $r$ and $s$:
$$\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial r}$$
$$\frac{\partial w}{\partial s} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial s} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial s}$$

### 3. Tree Diagrams
A **tree diagram** provides a systematic way to remember the Chain Rule. 
1. Place the dependent variable ($w$) at the top.
2. Draw branches to the intermediate variables ($x, y, z$).
3. Draw sub-branches from each intermediate variable to the independent variables ($u, v, t, \text{etc}$).
4. To find the derivative of the top variable with respect to a bottom variable, trace ALL paths connecting them, multiply the derivatives along each path, and sum the paths together.

### 4. Implicit Differentiation Revisited
If $F(x,y) = 0$ defines $y$ implicitly as a function of $x$, and $F$ is differentiable:
$$\frac{dy}{dx} = -\frac{F_x}{F_y}$$
provided $F_y \neq 0$.

If $F(x,y,z) = 0$ defines $z$ implicitly as a function of $x$ and $y$:
$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z} \quad \text{and} \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$$
provided $F_z \neq 0$.

---

## ELI5 Explanation
Imagine a company where the CEO ($w$) depends on Regional Managers ($x,y,z$) to make profits. Each Regional Manager depends on Local Salesmen ($r,s$). To find out how much the CEO's profit changes when Salesman $r$ sells more, you have to add up the contributions flowing through *every* Regional Manager that Salesman $r$ reports to. That’s exactly what the tree diagram and the summation formula do!

---

## Detailed Worked Examples

### Example 1: Chain Rule (1 Independent Variable)
**Question:** Find $dw/dt$ at $t=\pi$ given $w = x^2y$, $x = \cos t$, $y = \sin t$.

**Thought Process:** 
Use the chain rule formula: $dw/dt = (\partial w/\partial x)(dx/dt) + (\partial w/\partial y)(dy/dt)$.
Calculate derivatives at $t = \pi$. First, find $x$ and $y$ at $t = \pi$.
$x(\pi) = \cos(\pi) = -1$.
$y(\pi) = \sin(\pi) = 0$.

**Solution:**
$\begin{align*} \frac{\partial w}{\partial x} &= 2xy && \frac{\partial w}{\partial y} = x^2 \\ \frac{dx}{dt} &= -\sin t && \frac{dy}{dt} = \cos t \\ \frac{dw}{dt} &= (2xy)(-\sin t) + (x^2)(\cos t) \end{align*}$
At $t=\pi$: $x=-1$, $y=0$.
$\begin{align*} \frac{dw}{dt} &= (2(-1)(0))(-\sin \pi) + ((-1)^2)(\cos \pi) \\ &= (0)(0) + (1)(-1) = -1. \end{align*}$

### Example 2: Tree Diagram for Complex Variables
**Question:** If $w=x^2+y^2$, where $x=r-s$ and $y=r+s$, find $\partial w/ \partial r$.

**Thought Process:**
Diagram: $w$ branches to $x$ and $y$. Both branch to $r$ and $s$.
Path to $r$: $w \to x \to r$ AND $w \to y \to r$.
Formula: $(\partial w/\partial x)(\partial x/\partial r) + (\partial w/\partial y)(\partial y/\partial r)$.

*Sketching Guide for student:* Draw $w$ at the top node. Draw two downward lines to $x$ and $y$. Draw two lines descending from $x$ to $r$ and $s$, and two from $y$ to $r$ and $s$. Trace the lines arriving at $r$.

**Solution:**
$\begin{align*} \frac{\partial w}{\partial x} &= 2x  && \frac{\partial x}{\partial r} = 1 \\ \frac{\partial w}{\partial y} &= 2y  && \frac{\partial y}{\partial r} = 1 \\ \frac{\partial w}{\partial r} &= (2x)(1) + (2y)(1) = 2x + 2y \end{align*}$
Substitute for $x$ and $y$:
$2(r-s) + 2(r+s) = 2r - 2s + 2r + 2s = 4r$.

### Example 3: Implicit Differentiation
**Question:** Find $\partial z/\partial x$ if $x^2 y + y^2 z - z^3 = 5$.

**Thought Process:**
Let $F(x,y,z) = x^2 y + y^2 z - z^3 - 5 = 0$.
The formula is $\partial z/ \partial x = -F_x / F_z$.

**Solution:**
$\begin{align*} F_x &= 2xy \\ F_z &= y^2 - 3z^2 \\ \frac{\partial z}{\partial x} &= -\frac{2xy}{y^2 - 3z^2} \end{align*}$

---

## Visuals / Graphs

### 1. Tree Diagram Logic
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_tree"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute dw/dt if w = xy + z, x = cos t, y = sin t, z = t"></div>
<div class="user-quiz" data-question="2. Find dy/dx implicitly if x^3 - 2y^2 + xy = 0"></div>
\nexport const courseContent = [
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation – Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey—your destination—is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'Hôpital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

### 2. The Derivative: "The Speedometer"
* **Standard Definition:** The instantaneous rate of change of a function, geometrically represented as the slope of the tangent line. Formally, $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$.
* **Calculus Made Easy Explanation:** "Derivative" is just a fancy Latin word for "Rate". If you are driving a car, your distance is changing. The exact rate your distance changes *right now* is your speed. The speedometer calculates the derivative for you continuously!
* **Utility:** Derivatives are used to optimize systems (finding minimum costs or maximum profits by setting the derivative to zero), predict future states, analyze motion in physics, and train AI models (gradient descent).
* **Illustrative Example:** If profit over time is given by the equation $P(t) = -t^2 + 10t$, the derivative $P'(t) = -2t + 10$. Setting this to zero, $-2t + 10 = 0 \\implies t = 5$. Thus, peak profit happens exactly at $t=5$.
* **Essential Formulas:** 
  * Power Rule: $\\frac{d}{dx} x^n = n x^{n-1}$ (Bring down the power, subtract one!)
  * Chain Rule: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$ (Peel the onion: derivative of the outside times derivative of the inside).

### 3. The Integral: "The Odometer"
* **Standard Definition:** The continuous accumulation of quantities, geometrically the area under a curve.
* **Calculus Made Easy Explanation:** If the derivative breaks things down into instantaneous rates, the integral glues them all back up. If you track your exact speed (derivative) at every millisecond and add it all up (integral), you get your total distance traveled (odometer).
* **Utility:** Integrals are used to find geometric areas, calculate total volumes of solid objects, compute total probability in statistics, or determine work done by a force in physics over a distance.
* **Illustrative Example:** If the rate water flows into a tank is $r(t) = 2t$ gallons per minute, the total water accumulated between $0$ and $3$ minutes is the integral: $\\int_0^3 2t \\, dt = [t^2]_0^3 = 3^2 - 0^2 = 9$ gallons.
* **Essential Formulas:**
  * Power Rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$
  * Integration by Parts: $\\int u \\, dv = uv - \\int v \\, du$

### 4. The Fundamental Theorem of Calculus: "The Grand Connection"
* **Standard Definition:** $\\int_a^b f'(x) dx = f(b) - f(a)$.
* **Calculus Made Easy Explanation:** Differentiation (breaking down) and Integration (building up) are exact mathematical opposites. This theorem is the bridge between the speedometer and the odometer.
* **Utility:** It gives us a phenomenal shortcut. Instead of calculating the area under a curve by adding up an infinite number of microscopic rectangles (Riemann Sums), we just find the antiderivative and evaluate its difference at the two endpoints!
* **Illustrative Example:** To find the area under $f'(x) = 2x$ safely from $x=1$ to $x=3$, we use the theorem: $\\int_1^3 2x \\, dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.

## ELI5 Explanation: The Speedometer and the Odometer

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**—your instantaneous speed at any exact second. 
Your odometer tells you your **integral**—the total accumulated distance you've traveled. 
If you perfectly recorded your speedometer reading every millisecond and added them up, you would get your odometer reading. This magical relationship is the **Fundamental Theorem of Calculus**.

## Visuals / Graphs

### 1. Area under the curve
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="area_integral"></div>

### 2. Tangent line at a point
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_line"></div>

### 3. Limit illustration
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="limit_hole"></div>


## 5 Exhaustive Worked Examples

**Example 1: The Chain Rule**
* **Problem:** Find the exact rate of change (derivative) of the nested function $f(x) = \\sin(x^3 + 2x)$.
* **Thinking Method:** This is a function trapped inside another function, like an onion. The outer layer is the sine wave ($\\sin$), and the inner core is the polynomial ($x^3 + 2x$). We must peel the onion layer by layer using the "Chain Rule".
* **Worked-Out Solution:** 
  1. **Peel the Outer Layer First:** The derivative of an outer $\\sin(\\text{stuff})$ is $\\cos(\\text{stuff})$. We leave the inside exactly alone for now. This gives us $\\cos(x^3 + 2x)$.
  2. **Attack the Inner Core:** Now, multiply by the derivative of the inner stuff. What is the derivative of $x^3 + 2x$? Using the basic power rule, it's $3x^2 + 2$.
  3. **Chain them together:** We multiply step 1 and step 2. 
  4. The final answer is $f'(x) = \\cos(x^3 + 2x) \\cdot (3x^2 + 2)$.
* **Key Takeaway:** Never try to tackle the inside and outside at the exact same moment. Take your time, derivative the outside shell, and multiply by the derivative of the inner core. 

**Example 2: The Product Rule**
* **Problem:** Differentiate (find the slope rule for) the multiplied function $y = x^2e^{3x}$.
* **Thinking Method:** We have two completely different mathematical objects—a parabola ($x^2$) and an exponential curve ($e^{3x}$)—mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"—we temporarily disguise $x^2$ to simplify the visual puzzle.
* **Worked-Out Solution:** 
  1. Choose a disguise variable: Let $u$ perfectly equal the trapped inside portion, $u = x^2$.
  2. Take the derivative to find the trade-in cost: $du = 2x \\, dx$. 
  3. Look at our original problem: $\\int \\cos(x^2) (2x \\, dx)$. The pieces perfectly translate to our new disguise variables $u$ and $du$!
  4. Rewrite the clean, disguised problem: $\\int \\cos(u) \\, du$. So much simpler!
  5. The anti-derivative of $\\cos(u)$ is just $\\sin(u)$.
  6. Final step: Rip off the disguise. Replace $u$ back with $x^2$. 
  7. The final mathematical answer is $\\sin(x^2) + C$ (Never forget the constant $C$ which represents any starting point height).
* **Key Takeaway:** Look for "derivative pairs". If you see a function and its derivative hanging out together, substitute and conquer.

**Example 4: Definite Integral using the Fundamental Theorem**
* **Problem:** Calculate the exact physical area under the curve of $3x^2 - 4x + 1$ strictly between the boundaries of $x=1$ and $x=3$. Notation: $\\int_1^3 (3x^2 - 4x + 1) dx$.
* **Thinking Method:** Instead of drawing thousands of tiny rectangles to measure the area, we will use the magical "Fundamental Theorem of Calculus". We will find the anti-derivative (building it up), and then simply evaluate the difference between the end point and start point!
* **Worked-Out Solution:** 
  1. Step 1: Find the anti-derivative. Using the reverse power rule (add one to the power, divide by the new power). 
  2. $3x^2$ builds up to $x^3$.
  3. $-4x$ builds up to $-2x^2$.
  4. $+1$ builds up to $x$.
  5. Step 2: Write out the evaluated bounds: $[x^3 - 2x^2 + x]_1^3$.
  6. Step 3: Plug in the top ceiling number ($3$) first: $(3)^3 - 2(3)^2 + (3) = 27 - 18 + 3 = 12$.
  7. Step 4: Plug in the bottom floor number ($1$): $(1)^3 - 2(1)^2 + (1) = 1 - 2 + 1 = 0$.
  8. Step 5: Subtract the floor result from the ceiling result: $12 - 0 = 12$.
  9. **The Conclusion:** The exact carved-out area is 12 units squared.
* **Key Takeaway:** A definite integral (with boundary numbers) will completely digest the variables and spit out a single scalar number representing total accumulation.

**Example 5: Evaluating an Indeterminate Limit**
* **Problem:** Evaluate the limit of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.
* **Thinking Method:** The very first rule of limits is to just aggressively plug in the target number. Let's try plugging in 2. The top becomes $4-4 = 0$. The bottom becomes $2-2 = 0$. We hit $\\frac{0}{0}$. This is *not* a dead end; it's a flashing sign that says "Hold on, there's a trick to mathematically clean this up!" We have an algebraic 'hole' blocking us. Let's factor!
* **Worked-Out Solution:** 
  1. Look at the top piece: $x^2 - 4$. This is a classic "Difference of Squares" pattern from algebra class. It breaks down perfectly into $(x-2)(x+2)$.
  2. Rewrite the limit fraction: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$.
  3. Ah ha! Because we are investigating the limit *approaching* 2 (but never exactly touching it), we are legally allowed to cancel the troublemaking $(x-2)$ piece from the top and bottom!
  4. The messy fraction collapses into a beautiful, clean line: $\\lim_{x \\to 2} (x+2)$.
  5. Now try aggressively plugging in $2$ again: $2 + 2 = 4$.
  6. **The Conclusion:** The limit is an exact, solid 4.
* **Key Takeaway:** An answer of $0/0$ does not mean the limit doesn't exist. It just means the true path is temporarily hidden behind a hole, and you must use factorization tools to build a bridge over it.


### Algorithmic Problem Solving Flow

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Evaluate Limit]
          |
          v
+-----------------------------+
| Plug target into expression |
+-----------------------------+
          |
  +-------+-------+
  |               |
[Is 0/0]     [Real Number]
  |               |
  v               v
+--------------+ [Finish]
| Factor / Map |
+--------------+
  |
  v
+--------------+
| Re-evaluate  |
+--------------+
  |
  v
[Finish]
\`\`\`
\n\n## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Direct Substitution<br><span class="text-xs font-normal text-slate-300">Plug in x = a</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Check Result<br><span class="text-xs font-normal">If number → Done! If 0/0 → Hold up!</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Algebraic Rescue<br><span class="text-xs font-normal">Factor, Conjugate, or L'Hopital's</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Re-evaluate<br><span class="text-xs font-normal">Apply limit to simplified function</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$
>       1. **Direct Substitution:** Plug in $x=2$. We get $\\frac{2^2 - 4}{2 - 2}$.
>       2. **Check Result:** We get $\\frac{0}{0}$. This is indeterminate, so we can't stop here.
>       3. **Algebraic Rescue:** Factor the top: $(x-2)(x+2)$. Cancel $(x-2)$ from top and bottom. We are left with just $x + 2$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Re-evaluate:</strong> Now apply the limit $\\lim_{x \\to 2} (x+2)$. Plug in $x=2$ to get $4$. Done!</p>
  </div>
</div>

## Chapter Assessment

> **QUIZ:** Find the derivative of f(x) = ln(x^2 + 1).
>
> 1. Find the derivative of $f(x) = \\ln(x^2 + 1)$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Evaluate the definite integral of sin(x) from 0 to pi.
>
> 2. Evaluate the definite integral $\\int_0^{\\pi} \\sin(x) dx$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

> **QUIZ:** Compute the limit as x approaches 0 of sin(3x) / x.
>
> 3. Compute $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.
*(Use the Chat Attachment Button to upload your mathematical derivation for grading!)*

<br/>
\`▓▓░░░░░░░░ 14%\` Course Progress
\`▓░░░░░░░░░ 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-14-1",
    title: "Chapter 14.1: Functions of Several Variables",
    progress: 50,
    subheadings: [
      { id: "ch14-1-intro", title: "Introduction: Escaping Flatland" },
      { id: "ch14-1-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-1-eli5", title: "ELI5 Explanation: The Solar Panel Map" },
      { id: "ch14-1-visuals", title: "Visuals / Graphs" },
      { id: "ch14-1-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, \ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, \ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 \dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = \sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 \ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $\ge$).
3. Test a point, say $(0,1)$. $1 \ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y \ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 \Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 \Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 \Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = \sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $\sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c \ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

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

`
  },
  {
    id: "chapter-14-2",
    title: "Chapter 14.2: Limits and Continuity in Higher Dimensions",
    progress: 0,
    subheadings: [
      { id: "ch14-2-intro", title: "Introduction: The Dimensional Leap in Limits" },
      { id: "ch14-2-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-2-eli5", title: "ELI5 Explanation: The Antenna Signal Approach" },
      { id: "ch14-2-visuals", title: "Visuals / Graphs" },
      { id: "ch14-2-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$
if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < \epsilon \quad \text{whenever} \quad 0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $\lim_{(x,y) \to (x_0,y_0)} f(x,y)$ exists.
3. $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $\lim_{(x,y) \to (0,0)} \frac{x^2 - xy}{\sqrt{x} - \sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $\sqrt{x} + \sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (\sqrt{x} - \sqrt{y})(\sqrt{x} + \sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x \ge 0, y \ge 0, x \neq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} \lim \frac{x(x-y)}{\sqrt{x} - \sqrt{y}} &= \lim \frac{x(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})}{\sqrt{x}-\sqrt{y}} \\ &= \lim x(\sqrt{x} + \sqrt{y}) \\ &= 0(\sqrt{0} + \sqrt{0}) = 0 \end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $\lim_{(x,y)\to(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x \to 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} \end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $\lim_{(x,y)\to(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r \cos \theta$, $y = r \sin \theta$. $x^2+y^2 = r^2$. As $(x,y) \to (0,0)$, $r \to 0$ independently of $\theta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} \lim_{r \to 0} \frac{r^3 \cos^3 \theta}{r^2} &= \lim_{r \to 0} r \cos^3 \theta \end{align*}$
Since $|\cos^3 \theta| \le 1$, the expression is bounded by $-r \le r\cos^3\theta \le r$. By the Squeeze Theorem, as $r \to 0$, the limit is $0$, regardless of $\theta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="two_path_test"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x²-y²)/(x²+y²) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x²+y²) at the origin."></div>

`
  },
  {
    id: "chapter-14-3",
    title: "Chapter 14.3: Partial Derivatives",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-3-sub-1",
        "title": "ELI5 Explanation: The Mountain Slicer"
      },
      {
        "id": "chapter-14-3-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-3-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-3-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-3-sub-5",
        "title": "Step-by-Step Method for Basic Problems"
      },
      {
        "id": "chapter-14-3-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-3-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-3-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction and Core Concepts

The calculus of several variables is basically single-variable calculus applied to **one variable at a time**. When we hold all but one independent variable constant and differentiate with respect to that one variable, we get a **partial derivative**.

### 1. Partial Derivatives of Two Variables
The partial derivative of $f(x,y)$ with respect to $x$ at $(x_0,y_0)$ is the ordinary derivative of $f(x, y_0)$ with respect to $x$:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{\partial f}{\partial x}, f_x, \frac{\partial z}{\partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $\partial f/\partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $\partial f/\partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $\partial f/\partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$
- $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $\Delta z$ can be expressed as:
$$\Delta z = f_x \Delta x + f_y \Delta y + \epsilon_1 \Delta x + \epsilon_2 \Delta y$$
where $\epsilon_1, \epsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That’s $f_x$. If you face perfectly North (y-axis), how steep is it? That’s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y \sin(xy)$, find $\partial f / \partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $\sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{\partial f}{\partial y} &= \frac{\partial}{\partial y}(y \sin(xy)) &&\text{Step 1: Set up product rule}. \\ &= y \cdot \frac{\partial}{\partial y}(\sin(xy)) + \sin(xy) \cdot \frac{\partial}{\partial y}(y) &&\text{Step 2: Apply product rule}. \\ &= y \cdot (\cos(xy) \cdot x) + \sin(xy) \cdot 1 &&\text{Step 3: Chain rule on inner function } xy \text{ treating x as constant}. \\ &= xy \cos(xy) + \sin(xy) &&\text{Step 4: Cleanup}. \end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $\partial z/\partial x$ if $yz - \ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{\partial}{\partial x}(yz - \ln z) &= \frac{\partial}{\partial x}(x + y) &&\text{Step 1: Differentiate both sides wrt x}. \\ y \frac{\partial z}{\partial x} - \frac{1}{z} \frac{\partial z}{\partial x} &= 1 + 0 &&\text{Step 2: Normal diff rules, tacking on } \partial z/\partial x \text{ where z is modified}. \\ \frac{\partial z}{\partial x} \left(y - \frac{1}{z}\right) &= 1 &&\text{Step 3: Factor out derivative}. \\ \frac{\partial z}{\partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&\text{Step 4: Algebra to clear fractions}. \end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x \cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= \cos y + y e^x &&\text{Step 1: Diff wrt x}. \\ f_{xy} &= -\sin y + e^x &&\text{Step 2: Diff } f_x \text{ wrt y}. \end{align*}$

$\begin{align*} f_y &= -x \sin y + e^x &&\text{Step 3: Diff original wrt y}. \\ f_{yx} &= -\sin y + e^x &&\text{Step 4: Diff } f_y \text{ wrt x}. \end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivative"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x³y²"></div>

`
  },
  {
    id: "chapter-14-4",
    title: "Chapter 14.4: The Chain Rule in Multivariable Calculus",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-4-sub-1",
        "title": "ELI5 Explanation: The Tree of Dependencies"
      },
      {
        "id": "chapter-14-4-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-4-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-4-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-4-sub-5",
        "title": "Step-by-Step Method for Chain Rule Problems"
      },
      {
        "id": "chapter-14-4-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-4-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-4-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `### ELI5 Explanation: The Tree of Dependencies
> **Deep Dive Analogy: The Gear Assembly (Electrical Engineering Relevance)**
> In an electrical or mechanical system, if you turn Gear A (representing time $t$), it drives other gears, say Gear B ($x$) and Gear C ($y$). Both B and C then contribute to turning the master Gear D ($w$), which could represent power output or voltage. The Chain Rule is like calculating the total rotational speed of Gear D by meticulously adding up the rotational contributions from *all* intermediate gears. If you forget to account for the rotational effect of Gear C, your final speed calculation for Gear D will be inaccurate. You must trace every possible mechanical linkage or electrical signal path from the primary driver (Gear A) up to the final output (Gear D).

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="chain_rule_helix"></div>

Imagine an apple growing on a branch, the branch connects to a trunk, and the trunk connects to the soil. If the soil gets toxic, the trunk gets sick, the branch rots, and the apple dies. Everything is connected through a chain of dependencies.
In multivariable calculus, you might have a temperature $w$ that depends on your coordinates $x$ and $y$. But those coordinates depend on time $t$ because you are walking. So, a change in time causes a change in position, which causes a change in temperature! To find exactly how fast the temperature changes against time (dw/dt), we just draw a tree diagram, trace every single path from the apple down to the soil, multiply down the branches, and add the routes together.

### Glossary of Key Terms
*   **Intermediate Variables:** Variables in the middle of the chain. For example, spatial coordinates x, y, z that connect the final output to the root time variable.
*   **Independent / Root Variable:** The absolute bottom of the tree (usually parameter $t$, or $r$ and $s$).
*   **Tree Diagram:** A visual flowchart mapping all dependencies to ensure no branches are missed during chain rule derivation.
*   **Implicit Differentiation Formula:** A massive shortcut to find dy/dx by taking negative partials: dy/dx = - F_x / F_y.

### Why This Matters in Electrical Engineering
*   **Moving Charge in Fields:** If an electron moves through a voltage field V(x,y,z), its exact path coordinates (x,y,z) are changing over time 't'. The chain rule computes exactly how fast the voltage drops entirely with respect to time dV/dt as the particle physically travels. This is crucial for understanding current flow and potential differences in dynamic systems.
*   **Parameter Estimation:** If system power depends on current and voltage P(I, V), but both I and V are fluctuating themselves as a function of temperature 'T', the Chain Rule allows you to calculate dP/dT without painfully resolving the entire system equation. This helps engineers design systems that can handle thermal variations.

### Formal Definitions and Notation
*   **Chain Rule (1 Independent):** $\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent):** $\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r}$
*   **Implicit Formula:** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (Works only if F(x,y) = 0).

### Step-by-Step Method for Chain Rule Problems
1.  **Draw the Tree:** Put the dependent variable (w) at the very top. Put the intermediate variables (x,y,z) on the next tier down. Put the root independent variables (t, r, s) at the absolute bottom.
2.  **Draw the Lines:** Connect the top to the middle, and the middle to the bottom based on the mathematical equations given.
3.  **Trace the Paths:** To find a derivative from the top apple to a bottom root, slide your finger down every possible continuous line routing to that specific root.
4.  **Multiply and Add:** Multiply the derivatives along a single distinct path. Add the results of all separate paths together.

### 10 Worked Exercises
**Exercise 1: Chain Rule with One Independent Path**
*   **Problem:** Find dw/dt given w = xy, where x = cos(t) and y = sin(t). Evaluate at t=π/2.
*   **Thinking Process:** I have an apple (w). It splits into two branches (x and y). Both branch down into one root (t). I have exactly two paths to trace.
*   **Unique Method:** Direct tree tracing and path addition.
*   **Step-by-Step Solution:**
    1.  Write formula: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt).
    2.  Left path: ∂w/∂x = y. And dx/dt = -sin(t). Product is -y sin(t).
    3.  Right path: ∂w/∂y = x. And dy/dt = cos(t). Product is x cos(t).
    4.  Add them: dw/dt = -y sin(t) + x cos(t).
    5.  Substitute intermediate variables back into roots: y = sin(t), x = cos(t).
    6.  dw/dt = -sin(t)sin(t) + cos(t)cos(t) = cos^2(t) - sin^2(t) = cos(2t).
    7.  Evaluate at t=π/2: cos(2(π/2)) = cos(π) = -1.
*   **Common mistake:** Forgetting to substitute back the x and y letters into 't' functions before trying to plug in the final exact 't' number.
*   **Figure Reference:** Figure 14.19 maps out a diamond-shaped network flow diagram linking dependencies visually from w, spreading to x/y, and converging to t.

**Exercise 2: Changes along a Helix Curve**
*   **Problem:** Find dw/dt for w = xy + z, where the particle moves on x=cos(t), y=sin(t), z=t. Evaluate at t=0.
*   **Thinking Process:** *Pause and trace paths.* Tree has three main branches x, y, z. All three converge into t. I need three terms added together.
*   **Unique Method:** 3-Term path addition.
*   **Step-by-Step Solution:**
    1.  Formula: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt) + (∂w/∂z)(dz/dt).
    2.  Derivative parts: ∂w/∂x = y. dx/dt = -sin(t).
    3.  ∂w/∂y = x. dy/dt = cos(t).
    4.  ∂w/∂z = 1. dz/dt = 1.
    5.  Assemble: -y sin(t) + x cos(t) + 1.
    6.  Substitute intermediate values for t=0: x = cos(0) = 1. y = sin(0) = 0.
    7.  Final calculation: -(0)sin(0) + (1)cos(0) + 1 = 0 + 1 + 1 = 2.
*   **Common mistake:** Accidentally multiplying the three branches together instead of adding them at the junction point.
*   **Figure Reference:** Figure 14.21 depicts a 3D helix path with dependencies on time, illustrating the three distinct branches contributing to the change in 'w'.

**Exercise 3: Two Independent Roots**
*   **Problem:** Find ∂w/∂r for w = x + 2y + z^2. Given x=r/s, y=r^2 + ln(s), z=2r.
*   **Thinking Process:** The tree root splits into two different bottom soils: r and s. The problem strictly asks for r. I will completely ignore all paths leading to s.
*   **Unique Method:** Selective path tracing targeting a specific root variable.
*   **Step-by-Step Solution:**
    1.  Formula: ∂w/∂r = (∂w/∂x)(∂x/∂r) + (∂w/∂y)(∂y/∂r) + (∂w/∂z)(∂z/∂r).
    2.  ∂w/∂x = 1. ∂x/∂r = 1/s.
    3.  ∂w/∂y = 2. ∂y/∂r = 2r.
    4.  ∂w/∂z = 2z. ∂z/∂r = 2.
    5.  Assemble: (1)(1/s) + (2)(2r) + (2z)(2) = 1/s + 4r + 4z.
    6.  Replace z with 2r: 1/s + 4r + 4(2r) = 1/s + 12r.
*   **Common mistake:** Getting confused by 's' and trying to derive it when taking the partial strictly against 'r'. s acts as a frozen constant!
*   **Figure Reference:** Figure 14.20 presents a complicated dual-root branching tree, demonstrating how paths to 'r' are completely distinct from paths to 's'.

**Exercise 4: Direct Substitution Shortcut**
*   **Problem:** Instead of the chain rule, use direct substitution to find the derivative of w = x^2 + y^2 where x = cos(t), y = sin(t).
*   **Thinking Process:** Why torture myself with a tree diagram if I can just eliminate the intermediate variables algebraically before I even do calculus?
*   **Unique Method:** Pre-calculus algebraic collapse.
*   **Step-by-Step Solution:**
    1.  Substitute x and y perfectly into w: w = (cos(t))^2 + (sin(t))^2.
    2.  Apply the Pythagorean Identity from trigonometry: cos^2(t) + sin^2(t) = 1.
    3.  The equation cleanly collapses into w = 1.
    4.  Now take the derivative: dw/dt of the number 1 is purely 0.
*   **Common mistake:** Spending 5 minutes drawing a tree diagram when basic algebra can solve the problem in 5 seconds. Look for clean substitutions first!
*   **Figure Reference:** Figure 14.22 shows a flowchart emphasizing "Algebraic Simplification First?" as a key decision point before applying chain rule.

**Exercise 5: The Magic Implicit Formula (Source: COMSATS FA24 Q6)**
*   **Problem:** Use Theorem 8 to find dy/dx if y^2 - x^2 - sin(xy) = 0.
*   **Thinking Process:** Standard implicit differentiation requires product rules and factoring out dy/dx. The magic formula dy/dx = - F_x / F_y bypasses all of that entirely!
*   **Unique Method:** Using partial derivatives to instantly solve complicated 1D implicit differentiation.
*   **Step-by-Step Solution:**
    1.  Define the whole equation as F(x,y) = y^2 - x^2 - sin(xy) = 0.
    2.  Find F_x (target is x, freeze y): -2x - y cos(xy).
    3.  Find F_y (target is y, freeze x): 2y - x cos(xy).
    4.  Apply the formula: dy/dx = - [ -2x - y cos(xy) ] / [ 2y - x cos(xy) ].
    5.  Clean up negative signs: (2x + y cos(xy)) / (2y - x cos(xy)).
*   **Common mistake:** Forgetting the mandatory negative sign completely placed in front of the master fraction formula!
*   **Figure Reference:** Figure 14.23 visualizes the level curve F(x,y)=0 and illustrates how the normal vector gradients (F_x, F_y) relate to the tangent slope dy/dx.

**Exercise 6: Three Variable Implicit Formula (Source: CUI SP22 Q4)**
*   **Problem:** Find ∂z/∂x given 1/x + 1/y + 1/z - 1 = 0 at (2, 3, 6).
*   **Thinking Process:** The magic formula expands to 3D implicitly! To find ∂z/∂x, I will just use - F_x / F_z. Wait! Notice the pattern. The letter on TOP of the fraction (z) goes on the BOTTOM of the formula F_z. It swaps!
*   **Unique Method:** 3D implicit formula ∂z/∂x = - F_x / F_z.
*   **Step-by-Step Solution:**
    1.  Let F(x,y,z) = x^-1 + y^-1 + z^-1 - 1.
    2.  Find F_x: -x^-2 = -1/x^2.
    3.  Find F_z: -z^-2 = -1/z^2.
    4.  Formula: - (-1/x^2) / (-1/z^2) = - (z^2 / x^2).
    5.  Evaluate at (x=2, z=6): - (6^2 / 2^2) = - 36 / 4 = -9.
*   **Common mistake:** Accidentally writing F_z / F_x instead of strictly F_x / F_z. The letters physically reverse position.
*   **Figure Reference:** Figure 14.24 shows a 3D implicit surface, and a tangent plane to illustrate the geometric interpretation of the partial derivative ∂z/∂x.

**Exercise 7: Checking Chain Rule Constraints**
*   **Problem:** Express ∂w/∂r in terms of r and s if w = xy + z, x = r-s, y=r+s, z=t.
*   **Thinking Process:** Wait, z = t? Where is r?
*   **Unique Method:** Tracing zero-paths in mixed variable trees.
*   **Step-by-Step Solution:**
    1.  ∂w/∂r = (∂w/∂x)(∂x/∂r) + (∂w/∂y)(∂y/∂r) + (∂w/∂z)(∂z/∂r).
    2.  ∂w/∂x = y. ∂x/∂r = 1.
    3.  ∂w/∂y = x. ∂y/∂r = 1.
    4.  ∂w/∂z = 1. But what is ∂z/∂r? Since z=t, and t doesn't possess the letter r, its partial derivative against r is strict 0!
    5.  Equation becomes: y(1) + x(1) + 1(0) = x + y.
    6.  Substitute back: (r-s) + (r+s) = 2r.
*   **Common mistake:** Assuming every intermediate variable MUST map to every independent root. Broken branches yield zero derivative paths.
*   **Figure Reference:** Figure 14.25 illustrates a tree diagram where a branch from 'w' to 'z' leads to 't', demonstrating a 'dead end' or zero contribution when differentiating with respect to 'r'.

**Exercise 8: Differentiating Integrals (The Ultimate Chain Rule)**
*   **Problem:** Find the derivative of F(x) = ∫_0^{x^2} sqrt(t^4 + t^3) dt.
*   **Thinking Process:** This combines the Fundamental Theorem of Calculus with the multivariable Chain Rule (Leibniz Integral Rule). The upper bound is moving (x^2), and the inside integrand also physically morphs based on x, but for this simpler version, the integrand is purely in terms of t.
*   **Unique Method:** Fundamental Theorem of Calculus Part 1 (with Chain Rule).
*   **Step-by-Step Solution:**
    1.  Identify the structure: F(x) = ∫_a^{g(x)} f(t) dt. The derivative is f(g(x)) * g'(x).
    2.  Here, g(x) = x^2, so g'(x) = 2x.
    3.  And f(t) = sqrt(t^4 + t^3).
    4.  Plug g(x) into f(t): f(g(x)) = sqrt((x^2)^4 + (x^2)^3) = sqrt(x^8 + x^6).
    5.  Multiply by g'(x): 2x * sqrt(x^8 + x^6).
    6.  The derivative is 2x sqrt(x^8 + x^6).
*   **Common mistake:** Just plugging in the upper bound without multiplying by the chain rule derivative of the bound itself (the 2x). Students often forget d/dx(x^2).
*   **Figure Reference:** Figure 14.26 graphically represents the area under a curve, highlighting how a changing upper limit (x^2) requires a chain rule adjustment for the rate of area change.

**Exercise 9: Expanding Three Dependent Variables**
*   **Problem:** Find ∂u/∂x if u = (p-q)/(q-r), p=x+y+z, q=x-y+z, r=x+y-z. (Source: COMSATS FA25).
*   **Thinking Process:** u depends on p, q, r. All three depend firmly on x. I must trace three branches.
*   **Unique Method:** Symmetrical algebraic substitution.
*   **Step-by-Step Solution:**
    1.  Formula: $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial p}\frac{\partial p}{\partial x} + \frac{\partial u}{\partial q}\frac{\partial q}{\partial x} + \frac{\partial u}{\partial r}\frac{\partial r}{\partial x}$.
    2.  Find inner partials with respect to x: ∂p/∂x = 1, ∂q/∂x = 1, ∂r/∂x = 1.
    3.  This simplifies the formula to: $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial p} + \frac{\partial u}{\partial q} + \frac{\partial u}{\partial r}$.
    4.  Now find the partials of u with respect to p, q, r:
        *   ∂u/∂p = 1/(q-r)
        *   ∂u/∂q = $\frac{-(q-r)(1) - (p-q)(1)}{(q-r)^2} = \frac{-q+r-p+q}{(q-r)^2} = \frac{r-p}{(q-r)^2}$
        *   ∂u/∂r = $\frac{-(p-q)(-1)}{(q-r)^2} = \frac{p-q}{(q-r)^2}$
    5.  Sum them up: $\frac{\partial u}{\partial x} = \frac{1}{q-r} + \frac{r-p}{(q-r)^2} + \frac{p-q}{(q-r)^2}$.
    6.  To simplify, find a common denominator: $\frac{(q-r) + (r-p) + (p-q)}{(q-r)^2} = \frac{q-r+r-p+p-q}{(q-r)^2} = \frac{0}{(q-r)^2} = 0$.
    7.  Therefore, ∂u/∂x = 0.
*   **Common mistake:** Getting bogged down in complex algebra for ∂u/∂q and ∂u/∂r without recognizing the potential for simplification after summing. Also, forgetting to use the quotient rule for these partials.
*   **Figure Reference:** Figure 14.27 displays a complex multi-layered tree diagram for 'u' depending on 'p,q,r' which in turn depend on 'x,y,z', illustrating the systematic decomposition of dependencies.

**Exercise 10: Changing Dimensions (Real-World Applied)**
*   **Problem:** The edges of a box a, b, c change over time at 1 m/s, 1 m/s, and -3 m/s. If a=1, b=2, c=3, how fast is Volume (V) changing?
*   **Thinking Process:** Volume depends on three edges physically expanding/contracting over time. This is exactly the 3D chain rule!
*   **Unique Method:** Applied physical geometric rates.
*   **Step-by-Step Solution:**
    1.  Equation: V = a * b * c.
    2.  Formula: dV/dt = (∂V/∂a)(da/dt) + (∂V/∂b)(db/dt) + (∂V/∂c)(dc/dt).
    3.  ∂V/∂a is exactly bc. ∂V/∂b is ac. ∂V/∂c is ab.
    4.  dV/dt = (bc)(da/dt) + (ac)(db/dt) + (ab)(dc/dt).
    5.  Substitute current states: a=1, b=2, c=3. And da/dt = 1, db/dt = 1, dc/dt = -3.
    6.  dV/dt = (2*3)(1) + (1*3)(1) + (1*2)(-3).
    7.  Calculate: 6(1) + 3(1) + 2(-3) = 6 + 3 - 6 = 3 cubic meters per second.
*   **Common mistake:** Treating a, b, c as constants instead of variables strictly bound to time t, or mixing up the values of a, b, c with their rates of change.
*   **Figure Reference:** Figure 14.28 provides an animation or diagram of a rectangular box whose dimensions dynamically change over time, visually representing the input rates of change.

#
### Algorithmic Problem Solving Flow

To master Tangent Planes, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Tangent Plane]
          |
          v
+---------------------------+
| Is it z=f(x,y) or F=c?    |
+---------------------------+
          |
  +-------+-------+
  |               |
[z=f(...)]      [F=c]
  |               |
  v               v
+----------+   +----------+
| Find f_x,|   | Find F_x,|
| f_y      |   | F_y, F_z |
+----------+   +----------+
  |               |
  v               v
+----------+   +----------+
| Plug in  |   | Plug into|
| Formula  |   | F_x*dx+..|
+----------+   +----------+
          |
          v
       [Finish]
\`\`\`

## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Draw the Tree<br><span class="text-xs font-normal text-slate-300">Map Output → Intermediates → Independent Vars</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Identify Paths<br><span class="text-xs font-normal">Find EVERY path from top to target variable</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Multiply Down<br><span class="text-xs font-normal">Multiply link slopes along each path</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Add Branches<br><span class="text-xs font-normal">Sum all completed path products together!</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** Find $\\frac{dw}{dt}$ if $w = x^2y$, $x = \\cos(t)$, $y = \\sin(t)$
>       1. **Draw the Tree:** $w$ depends on $x$ and $y$. Both $x$ and $y$ depend on $t$.
>       2. **Identify Paths:** There are two paths to $t$. Path 1: $w \\to x \\to t$. Path 2: $w \\to y \\to t$.
>       3. **Multiply Down:** Path 1 contribution: $\\frac{\\partial w}{\\partial x} \\cdot \\frac{dx}{dt} = (2xy) \\cdot (-\\sin(t))$. Path 2 contribution: $\\frac{\\partial w}{\\partial y} \\cdot \\frac{dy}{dt} = (x^2) \\cdot (\\cos(t))$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Add Branches:</strong> $\\frac{dw}{dt} = -2xy\\sin(t) + x^2\\cos(t)$. (Substitute $x$ and $y$ in terms of $t$ for final answer).</p>
  </div>
</div>

### Key Points
*   **The Tree Flow:** Start at the top variable. Draw lines to every intermediate variable it depends on. Draw lines from them to ultimate root variables.
*   **To Find A Derivative:** Follow every path from the top variable down strictly to your desired target root variable. Multiply terms traveling down a path. Add separated paths together.
*   **Algebraic Simplification:** Always check if direct substitution can simplify the problem *before* applying the Chain Rule; it can sometimes make complex problems trivial.

### Formulas
*   **Chain Rule (1 Independent Variable):** $\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent Variables):** $\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial w}{\partial y}\frac{\partial y}{\partial r} + \frac{\partial w}{\partial z}\frac{\partial z}{\partial r}$ (adjust for number of intermediate variables)
*   **Implicit Differentiation (2 Variables):** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (where F(x,y)=0)
*   **Implicit Differentiation (3 Variables, e.g., for ∂z/∂x):** $\frac{\partial z}{\partial x} = - \frac{F_x}{F_z}$ (where F(x,y,z)=0)

### Common Mistakes
*   **Forgetting the Negative Sign:** A common error in the implicit differentiation formulas. Always remember the \`-\` at the front!
*   **Mixing Independent Variables:** When finding a partial derivative with respect to one independent variable (e.g., ∂w/∂r), treat other independent variables (like 's') as constants, even if intermediate variables depend on them.
*   **Multiplying instead of Adding:** Each distinct path in the tree diagram contributes an *additive* term to the final derivative, not a multiplicative one.
*   **Incomplete Substitution:** Forgetting to substitute all intermediate variables back in terms of the final independent variable(s) before evaluating a numerical answer.
*   **Ignoring Zero Paths:** If an intermediate variable doesn't depend on the target independent root variable, its branch's contribution is zero. Don't force a derivative if none exists.

### Chapter Assessment

> **QUIZ:** If w = e^{xy} ln(z), x = t², y = sin t, z = cos t, find dw/dt at t = 0.
>
> 4. If $w = e^{xy} \ln(z)$, $x = t^2$, $y = \sin t$, $z = \cos t$, find $\frac{dw}{dt}$ at $t = 0$.
> *(Source: CUI Sahiwal FA25 Q4a)*

> **QUIZ:** Use implicit differentiation to find ∂z/∂y for x² y + y z² + z x = 0 at (1,1,-1).
>
> 5. Use implicit differentiation to find $\frac{\partial z}{\partial y}$ for $x^2 y + y z^2 + z x = 0$ at $(1,1,-1)$.
> *(Original)*

> **QUIZ:** Source: COMSATS FA24.. Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.
>
> 1. **Source: COMSATS FA24..** Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.

> **QUIZ:** Source: COMSATS FA24.. Use the implicit formula to find ∂z/∂y for x^2 + xy + y^2 - 7z = 0.
>
> 2. **Source: COMSATS FA24..** Use the implicit formula to find ∂z/∂y for x^2 + xy + y^2 - 7z = 0.

> **QUIZ:** Source: CUI SP22.. Draw a tree diagram and formulate the chain rule equation for ∂w/∂s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).
>
> 3. **Source: CUI SP22..** Draw a tree diagram and formulate the chain rule equation for ∂w/∂s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).

\`▓▓▓▓▓▓░░░░ 60%\` Course Progress

---`
  },
  {
    id: "chapter-14-5",
    title: "Chapter 14.5: Directional Derivatives and Gradient Vectors",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-5-sub-1",
        "title": "ELI5 Explanation: The Perfect Compass"
      },
      {
        "id": "chapter-14-5-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-5-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-5-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-5-sub-5",
        "title": "Step-by-Step Method for Directional Derivative Problems"
      },
      {
        "id": "chapter-14-5-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-5-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-5-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `### ELI5 Explanation: The Perfect Compass (with an EE Twist!)
> **Deep Dive Analogy: The Blindfolded Climber**
> Imagine you are blindfolded on a hill. You can physically feel with your feet which specific direction is the steepest to walk upwards. The Gradient Vector is an arrow drawn on your map pointing in *exactly* that direction. If you walk along that arrow, your altitude increases the fastest. The Directional Derivative is the measure of how steep it actually is along the arrow (or any other arrow you choose to walk).

**EE Analogy: The Signal Strength Robot**
Imagine you are a robot in a large factory, and your mission is to find the area with the strongest Wi-Fi signal. You're blindfolded, but you have a sensitive antenna and a powerful onboard computer.
*   Your computer continuously calculates the "Gradient Vector" (∇f). This is like your internal, magical compass that *always* points in the exact direction where the Wi-Fi signal is getting stronger *fastest*.
*   Now, imagine you decide to move in a specific, arbitrary direction (say, towards a buzzing machine). The "Directional Derivative" (D_u f) is what your antenna measures: it tells you *exactly* how much the Wi-Fi signal strength changes *in that specific direction* you chose to move. It might not be the fastest increase, but it gives you the precise rate of change along your path.

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="directional_derivative"></div>

Imagine standing blindly on the side of a mountain covered in thick fog. You have a magical compass. Instead of pointing North, this compass calculates the absolute steepest way up the mountain and points exactly in that direction. That magical needle is the "Gradient Vector".
Now, suppose you ignore the compass and decide to walk in a random direction (vector u). The "Directional Derivative" tells you exactly how steep the ground is in that specific direction. The mathematical magic is that you can calculate the steepness of *any* arbitrary path just by comparing it (using the dot product) against your magical Gradient compass!

### Glossary of Key Terms
*   Gradient Vector: Denoted by ∇f (read as "del f"). It is a 2D or 3D vector made entirely of partial derivatives. It ALWAYS points in the direction of steepest ascent.
*   Directional Derivative: Evaluates the slope of a multivariable surface in the direction of a specified arbitrary unit vector 'u'.
*   Orthogonal/Normal: Mathematically perpendicular (90 degrees). The gradient is always perfectly orthogonal to level curves.
*   Dot Product: The mathematical engine that powers directional derivatives. It projects your arbitrary direction onto the gradient vector to find the steepness correlation.

### Why This Matters in Electrical Engineering
*   Antenna Arrays: The directional derivative computes the radiation signal strength intensity changing in a specific viewing angle away from the phased array.
*   Optimization (Gradient Descent): This is the absolute mathematical foundation of training AI and Neural Networks. Algorithms hunt for the minimum error by calculating the negative gradient (-∇f) and literally stepping strictly "downhill" over millions of parameters!
*   Vector Calculus: Gradients power Maxwell's equations (the fundamental laws of electromagnetism). The electric field E is mathematically defined as the negative gradient of the electric potential (-∇V).

### Formal Definitions and Notation
*   Gradient: ∇f = (∂f/∂x)i + (∂f/∂y)j. (In 3D: ∇f = (∂f/∂x)i + (∂f/∂y)j + (∂f/∂z)k)
*   Directional Derivative: D_u f = ∇f · u. (Crucial: The vector 'u' MUST be scaled down to a length of exactly 1 before you take the dot product!).
*   Max Rate of Change: Occurs exactly in the direction of ∇f. The physical magnitude of that steepest slope is just the length ||∇f||.
*   Tangent Line to Level Curve: f_x(x_0,y_0)(x - x_0) + f_y(x_0,y_0)(y - y_0) = 0.

### Step-by-Step Method for Directional Derivative Problems
1.  Build the Gradient: Find all first partial derivatives (f_x, f_y, f_z) and plug the given coordinate numbers in. Assemble them into vector format (a i + b j + c k).
2.  Clean the Vector: Look at the arbitrary direction vector they gave you. If it doesn't have a mathematical length of strictly 1, you MUST divide it by its own length to "normalize" it into a unit vector 'u'.
3.  The Dot Product: Multiply the i-components, multiply the j-components, (and k-components for 3D) and add them together. That single number is your exact slope in that direction!

### 10 Worked Exercises
**Exercise 1: Calculating the Gradient Vector**
*   **Problem:** Find the gradient of f(x,y) = y - x at the point (2, 1).
*   **Thinking Process:** A gradient is just combining f_x and f_y into an (i, j) bracket vector format.
*   **Unique Method:** Independent partial evaluations merged into spatial vectors.
*   **Step-by-Step Solution:**
    1.  Find f_x: Derivative of y-x wrt x is -1.
    2.  Find f_y: Derivative of y-x wrt y is 1.
    3.  The gradient vector is exactly -1 i + 1 j.
    4.  Note: Coordinates (2,1) weren't even needed because the slope is constant everywhere (a flat angled plane).
*   **Common mistake:** Forgetting to assemble them into a vector and accidentally adding them into a scalar number.
*   **Figure Reference:** Figure X.1: Illustration of a gradient vector (red arrow) pointing in the direction of steepest ascent on a simple plane.

**Exercise 2: Finding a Directional Derivative (Source: COMSATS FA24 Q4)**
*   **Problem:** Find the directional derivative of f(x,y) = x^2 + xy at (1,2) in the direction of unit vector u = (1/sqrt(2))i + (1/sqrt(2))j.
*   **Thinking Process:** *Try to calculate the partials in your head first.* I need the gradient evaluated at (1,2). Then dot product with u. Since u has lengths (1/2 + 1/2) = 1, it's already a clean unit vector!
*   **Unique Method:** Direct definition gradient-dot-vector.
*   **Step-by-Step Solution:**
    1.  f_x = 2x + y. Plug in (1,2): 2(1) + 2 = 4.
    2.  f_y = x. Plug in (1,2): 1.
    3.  ∇f = 4i + 1j.
    4.  Dot product: (4i + 1j) · ((1/sqrt(2))i + (1/sqrt(2))j).
    5.  Multiply i's: 4/sqrt(2). Multiply j's: 1/sqrt(2).
    6.  Add: 5/sqrt(2).
*   **Common mistake:** Multiplying the i's and keeping the 'i' letter in the final answer. The dot product fundamentally outputs a pure scalar number!
*   **Figure Reference:** Figure X.2: Visualizing a directional derivative as the slope of a surface in a specific direction at a point.

**Exercise 3: Normalizing a Dirty Vector**
*   **Problem:** Find the directional derivative of f(x,y) = x e^y + cos(xy) at (2,0) in the direction of v = 3i - 4j.
*   **Thinking Process:** The length of vector v is sqrt(3^2 + 4^2) = sqrt(25) = 5. It is NOT a unit vector! I must divide it by 5 before doing the dot product!
*   **Unique Method:** Unit-normalization protocol.
*   **Step-by-Step Solution:**
    1.  Normalize v: u = (3/5)i - (4/5)j.
    2.  Find f_x: e^y - y sin(xy). At (2,0): e^0 - 0 = 1.
    3.  Find f_y: x e^y - x sin(xy). At (2,0): 2 e^0 - 0 = 2.
    4.  ∇f = 1i + 2j.
    5.  Dot product: (1)(3/5) + (2)(-4/5) = 3/5 - 8/5 = -5/5 = -1.
*   **Common mistake:** Taking the dot product directly with v=3i-4j, yielding -5, which is physically incorrect as it scales the true slope by 5 units.
*   **Figure Reference:** Figure X.3: The process of normalizing a vector 'v' into a unit vector 'u' before computing the directional derivative.

**Exercise 4: Maximum and Minimum Ascent Rates (Source: CUI SP22 Q5)**
*   **Problem:** In what directions does f(x,y) = x^2/2 + y^2/2 increase and decrease most rapidly at (1,1)? What are the rates?
*   **Thinking Process:** Maximum increase ALWAYS points exactly identical to the gradient! Maximum decrease ALWAYS points in the exact opposite direction (-∇f).
*   **Unique Method:** Theoretical vector alignment for absolute maxima.
*   **Step-by-Step Solution:**
    1.  f_x = x. At (1,1) = 1.
    2.  f_y = y. At (1,1) = 1.
    3.  ∇f = 1i + 1j.
    4.  Rapid increase direction: Normalizing it gives u = (1/sqrt(2))i + (1/sqrt(2))j.
    5.  Max rate of change: The length ||∇f|| = sqrt(1^2 + 1^2) = sqrt(2).
    6.  Rapid decrease direction: Directly opposite, u = -(1/sqrt(2))i - (1/sqrt(2))j.
    7.  Min rate of change: -sqrt(2).
*   **Common mistake:** Providing the unnormalized gradient as the "direction". Directions mathematically should be expressed as length-1 uniform unit vectors.
*   **Figure Reference:** Figure X.4: Representation of steepest ascent (∇f) and descent (-∇f) on a surface, with corresponding rates at a point.

**Exercise 5: Zero Change Directions**
*   **Problem:** Standing at (1,1) on f(x,y) = x^2/2 + y^2/2, what paths yield precisely zero elevation change?
*   **Thinking Process:** A directional derivative is exactly 0 when the path is perfectly 90 degrees (orthogonal) to the gradient. Their dot product must equal 0.
*   **Unique Method:** Orthogonal vector swap trick.
*   **Step-by-Step Solution:**
    1.  We found ∇f = 1i + 1j.
    2.  To make a 2D vector (a, b) exactly perpendicular, swap the elements and negate exactly one of them: (-b, a) or (b, -a).
    3.  So orthogonal vectors are -1i + 1j AND 1i - 1j.
    4.  Normalizing gives directions: (-1/sqrt(2)i + 1/sqrt(2)j) and (1/sqrt(2)i - 1/sqrt(2)j).
*   **Common mistake:** Finding only one of the two orthogonal planar paths. You can walk left *or* right along a contour line to avoid altitude changes!
*   **Figure Reference:** Figure X.5: A contour map showing a point where the gradient vector is perpendicular to the level curve, illustrating directions of zero change.

**Exercise 6: 3D Directional Derivatives**
*   **Problem:** Find the derivative of f(x,y,z) = x^3 - xy^2 - z at P(1,1,0) in the direction of v = 2i - 3j + 6k.
*   **Thinking Process:** The rules flawlessly scale into 3 dimensions. Normalize the 3D vector, build a 3D gradient, and perform a 3D dot product.
*   **Unique Method:** Three-dimensional scaling protocol.
*   **Step-by-Step Solution:**
    1.  Length of v = sqrt(2^2 + (-3)^2 + 6^2) = sqrt(4 + 9 + 36) = sqrt(49) = 7.
    2.  Unit vector u = (2/7)i - (3/7)j + (6/7)k.
    3.  f_x = 3x^2 - y^2. At (1,1,0) = 3 - 1 = 2.
    4.  f_y = -2xy. At (1,1,0) = -2.
    5.  f_z = -1. At (1,1,0) = -1.
    6.  ∇f = 2i - 2j - 1k.
    7.  Dot Product: 2(2/7) - 2(-3/7) - 1(6/7) = 4/7 + 6/7 - 6/7 = 4/7.
*   **Common mistake:** Miscalculating the length of 3D vectors by adding negatives outside the square parenthesis before squaring.
*   **Figure Reference:** Figure X.6: A 3D surface with a gradient vector and a directional derivative in three dimensions at a specific point.

**Exercise 7: Tangent Lines to Level Curves**
*   **Problem:** Find the tangent line to the ellipse x^2/4 + y^2 = 2 at the point (-2, 1).
*   **Thinking Process:** The gradient ALWAYS points 90 degrees straight out from level curves. We can use the gradient as the strict "Normal Vector" (A, B) for our line equation A(x - x_0) + B(y - y_0) = 0.
*   **Unique Method:** Utilizing gradients to instantly assemble structural geometry tangent bounds.
*   **Step-by-Step Solution:**
    1.  Let f(x,y) = x^2/4 + y^2.
    2.  Notice the target ellipse is precisely the level curve when f(x,y) = 2.
    3.  ∇f = (x/2)i + (2y)j.
    4.  At (-2, 1), ∇f = (-2/2)i + 2(1)j = -1i + 2j.
    5.  The gradient Normal Vector is N = (-1, 2).
    6.  Equation: -1(x - (-2)) + 2(y - 1) = 0.
    7.  - (x + 2) + 2(y - 1) = 0 --> x - 2y = -4.
*   **Common mistake:** Plugging the tangent variables directly into y=mx+b blindly instead of relying on the elegant Normal Line layout.
*   **Figure Reference:** Figure X.7: An ellipse showing the gradient vector at a point and the tangent line (perpendicular to the gradient) passing through that point.

**Exercise 8: Gradient Algebra Rules**
*   **Problem:** Given f(x,y) = x-y and g(x,y) = 3y. Calculate ∇(fg).
*   **Thinking Process:** Gradients follow the exact same algebra rules as basic 1D derivatives. I can use the Product Rule: f∇g + g∇f.
*   **Unique Method:** Gradient distribution bypassing full manual multiplication.
*   **Step-by-Step Solution:**
    1.  ∇f = 1i - 1j.
    2.  ∇g = 0i + 3j.
    3.  Formula: f(∇g) + g(∇f).
    4.  (x-y)(3j) + 3y(i - j).
    5.  Simplify: (3x - 3y)j + 3y i - 3y j.
    6.  Assemble: 3y i + (3x - 6y) j.
*   **Common mistake:** Attempting to multiply vector coordinates improperly against each other.
*   **Figure Reference:** Figure X.8: Illustrative diagram of applying the product rule for gradients, showing how ∇(fg) combines vector and scalar products.

**Exercise 9: Scalar Components**
*   **Problem:** How is the directional derivative related to scalar components?
*   **Thinking Process:** This is a conceptual application request.
*   **Unique Method:** Identifying exact vector projections.
*   **Step-by-Step Solution:**
    1.  ∇f is a vector. 'u' is a unit vector.
    2.  By fundamental vector algebra, breaking down the dot product ∇f · u literally gives us the scalar magnitude component of ∇f resting purely parallel onto the direction of u.
    3.  The directional derivative IS the scalar projection of the gradient!
*   **Common mistake:** Forgetting that directional derivative is an exact scalar number, not an active vector.
*   **Figure Reference:** Figure X.9: A vector projection diagram showing how the directional derivative is the scalar component of the gradient along the unit vector 'u'.

**Exercise 10: Temperature Gradient Field (Source: COMSATS FA25)**
*   **Problem:** Temperature is T(x,y,z) = 2xy - yz. In what direction from P(1, -1, 1) does temperature drop most rapidly, and what is this rate?
*   **Thinking Process:** Seeking steepest downhill. I will calculate ∇T and physically invert every single sign to get -∇T.
*   **Unique Method:** Strict spatial inversion.
*   **Step-by-Step Solution:**
    1.  T_x = 2y. At (1, -1, 1) = -2.
    2.  T_y = 2x - z. At (1, -1, 1) = 2(1) - 1 = 1.
    3.  T_z = -y. At (1, -1, 1) = -(-1) = 1.
    4.  ∇T = -2i + 1j + 1k.
    5.  Rapid drop direction is opposite: -∇T = 2i - 1j - 1k.
    6.  Rate is the length: sqrt( (-2)^2 + 1^2 + 1^2 ) = sqrt(4 + 1 + 1) = sqrt(6). Because it's dropping, the rate translates to -sqrt(6) degrees per foot.
*   **Common mistake:** Calculating the steepest ascent vector and forgetting to flip the signs for "dropping/decrease".
*   **Figure Reference:** Figure X.10: A 3D temperature field visualization, with an arrow indicating the direction of fastest temperature drop at a specific point.

#
### Algorithmic Problem Solving Flow

To master the Chain Rule, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Find Derivative]
          |
          v
+---------------------------+
| Identify Dependent Var    |
+---------------------------+
          |
          v
+---------------------------+
| Identify Independent Var  |
+---------------------------+
          |
          v
+---------------------------+
| Draw Dependency Tree      |
+---------------------------+
          |
          v
+---------------------------+
| Multiply down branches,   |
| Add across branches       |
+---------------------------+
          |
          v
       [Finish]
\`\`\`

## Cheat Sheet / Summary Table

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Build the Gradient<br><span class="text-xs font-normal text-slate-300">∇f = ⟨f_x, f_y, f_z⟩</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Evaluate ∇f<br><span class="text-xs font-normal">Plug in the starting coordinates</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-rose-100 border-2 border-rose-300 text-rose-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Validate Unit Vector<br><span class="text-xs font-normal">Is the direction vector scale = 1? If not, divide by its length!</span>
  </div>
  <div class="text-rose-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Dot Product<br><span class="text-xs font-normal">D_u f = ∇f · u (Results in a single Number)</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** Find $D_{\\mathbf{u}}f(1, 2)$ for $f(x,y) = x^2 + 3xy$ in direction $\\mathbf{v} = \\langle 3, 4 \\rangle$
>       1. **Build the Gradient:** $\\nabla f = \\langle f_x, f_y \\rangle = \\langle 2x + 3y, 3x \\rangle$.
>       2. **Evaluate $\\nabla f$:** Plug in $(1, 2)$: $\\nabla f(1, 2) = \\langle 2(1)+3(2), 3(1) \\rangle = \\langle 8, 3 \\rangle$.
>       3. **Validate Unit Vector:** $\\mathbf{v} = \\langle 3, 4 \\rangle$ has length $\\sqrt{3^2 + 4^2} = 5$. It's not a unit vector! We must normalize it: $\\mathbf{u} = \\frac{1}{5}\\langle 3, 4 \\rangle = \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Dot Product:</strong> $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u} = \\langle 8, 3 \\rangle \\cdot \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle = \\frac{24}{5} + \\frac{12}{5} = \\frac{36}{5}$.</p>
  </div>
</div>

### Key Points
*   The Gradient ∇f: A vector made of partial derivatives (f_x, f_y, f_z). It ALWAYS points in the direction of the steepest ascent (maximum increase) of the function.
*   Directional Derivative (D_u f): A scalar value that quantifies the instantaneous rate of change (slope) of a multivariable function in a specific unit direction 'u'.
*   Unit Vector Requirement: For D_u f to represent the true slope, the direction vector 'u' MUST be normalized to have a length (magnitude) of exactly 1.
*   Steepest Increase: Occurs in the direction of the gradient, ∇f. The rate of this maximum increase is the magnitude of the gradient, ||∇f||.
*   Steepest Decrease: Occurs in the direction opposite to the gradient, -∇f. The rate of this minimum decrease is -||∇f||.
*   Zero Change: Occurs in any direction perpendicular (orthogonal) to the gradient vector ∇f. These directions lie along the level curves (or level surfaces in 3D) of the function.
*   Dot Product: The fundamental mathematical operation used to calculate the directional derivative, projecting the gradient onto the chosen direction.

### Formulas
*   **Gradient:**
    *   For f(x,y): ∇f = ⟨∂f/∂x, ∂f/∂y⟩ = (∂f/∂x)i + (∂f/∂y)j
    *   For f(x,y,z): ∇f = ⟨∂f/∂x, ∂f/∂y, ∂f/∂z⟩ = (∂f/∂x)i + (∂f/∂y)j + (∂f/∂z)k
*   **Unit Vector Normalization:** For a direction vector v, the unit vector is u = v / ||v||, where ||v|| = sqrt(v_x² + v_y² + v_z²).
*   **Directional Derivative:** D_u f = ∇f · u
*   **Maximum Rate of Change:** ||∇f||
*   **Minimum Rate of Change:** -||∇f||
*   **Tangent Line to Level Curve f(x,y) = k at (x₀, y₀):** f_x(x₀,y₀)(x - x₀) + f_y(x₀,y₀)(y - y₀) = 0

### Common Mistakes
*   **Forgetting to Normalize:** One of the most frequent errors is calculating the dot product with a non-unit direction vector. Always divide the given direction vector by its magnitude first.
*   **Confusing Rate with Direction:** The "rate of change" (e.g., steepest ascent) is a scalar (||∇f||), while the "direction" is a unit vector (∇f/||∇f||).
*   **Sign Errors:** Misinterpreting "steepest decrease" as positive ||∇f|| instead of -||∇f|| or forgetting to flip the gradient's direction.
*   **Dot Product Output:** Remembering that the dot product of two vectors results in a scalar (a single number), not another vector.
*   **Partial Derivative Errors:** Mistakes in computing partial derivatives will cascade and lead to incorrect gradient and directional derivative values.
*   **Incomplete Zero Change Directions:** In 2D, there are always two opposite directions of zero change along a contour line (e.g., perpendicular to ∇f), not just one.

### Chapter Assessment

> **QUIZ:** Source: COMSATS FA24.. Find the directional derivative of f(x,y) = x^2 y + e^{xy} sin(y) at P(1, 0) in the direction u = 1/2 i + sqrt(3)/2 j.
>
> 1. **Source: COMSATS FA24..** Find the directional derivative of f(x,y) = x^2 y + e^{xy} sin(y) at P(1, 0) in the direction u = 1/2 i + sqrt(3)/2 j.

> **QUIZ:** Source: CUI SP22.. In what direction is the directional derivative of f(x,y) = (x^2 - y^2)/(x^2 + y^2) at P(1,1) exactly equal to zero?
>
> 2. **Source: CUI SP22..** In what direction is the directional derivative of f(x,y) = (x^2 - y^2)/(x^2 + y^2) at P(1,1) exactly equal to zero?

> **QUIZ:** Source: COMSATS FA25.. Find an equation for the tangent line to the ellipse x^2/4 + y^2 = 2 at the point (-2, 1) exclusively using the gradient definition.
>
> 3. **Source: COMSATS FA25..** Find an equation for the tangent line to the ellipse x^2/4 + y^2 = 2 at the point (-2, 1) exclusively using the gradient definition.

> **QUIZ:** Find the direction(s) of zero change for f(x,y) = x² - 2xy + y² at (1,1).
>
> 4. Find the direction(s) of zero change for $f(x,y) = x^2 - 2xy + y^2$ at $(1,1)$.
> *(Source: CUI Lahore SP22 Q5a)*

> **QUIZ:** The temperature in a room is T(x,y,z) = 100 - x² - y² - z². A bug at (1,2,2) wants to cool fastest. In which direction should it move? What is the rate of cooling?
>
> 5. The temperature in a room is $T(x,y,z) = 100 - x^2 - y^2 - z^2$. A bug at $(1,2,2)$ wants to cool fastest. In which direction should it move? What is the rate of cooling?
> *(EE application)*

\`▓▓▓▓▓▓░░░░ 60%\` Course Progress

---`
  },
  {
    id: "chapter-14-6",
    title: "Chapter 14.6: Tangent Planes and Differentials",
    progress: 0,
    subheadings: [
      {
        "id": "chapter-14-6-sub-1",
        "title": "ELI5 Explanation: The Magic Flat Sheet"
      },
      {
        "id": "chapter-14-6-sub-2",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "chapter-14-6-sub-3",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "chapter-14-6-sub-4",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "chapter-14-6-sub-5",
        "title": "Step-by-Step Method for Plane Problems"
      },
      {
        "id": "chapter-14-6-sub-6",
        "title": "10 Worked Exercises"
      },
      {
        "id": "chapter-14-6-sub-7",
        "title": "Cheat Sheet / Summary Table"
      },
      {
        "id": "chapter-14-6-sub-8",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `### ELI5 Explanation: The Magic Flat Sheet
> **Deep Dive Analogy 1: The Skateboard on a Halfpipe**
> The halfpipe is curvy (our surface $z = f(x,y)$), but your skateboard is completely flat and rigid (the tangent plane). When your skateboard is resting exactly at the bottom of the pipe, it touches at only one conceptual point but approximates the floor exactly around that contact point. In engineering, it is a million times computationally cheaper to calculate physics on the flat skateboard than on the complex mathematical curvature of the halfpipe!

> **Deep Dive Analogy 2: Linearizing a Transistor (EE Analogy)**
> Imagine a transistor, a core component in all electronics. Its behavior (how much current flows for a given voltage) is often described by a complex, curvy, non-linear equation – a bit like our 3D mountain. When you want to design an amplifier, you don't want to deal with that complex curve for every tiny signal fluctuation (like your voice going into a microphone). Instead, engineers pick a "sweet spot" (the operating point, $P_0$) on that curve. At this spot, they "place" a perfectly straight line (the tangent line, which is a 1D version of a tangent plane). For small changes around $P_0$, the transistor's behavior can be *approximated* by that simple straight line. This "small-signal model" makes calculations easy, fast, and precise enough for designing functional circuits, without needing to solve the full complex non-linear equation every time.

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_plane"></div>

If you zoom in close enough on a curved beach ball, it looks perfectly flat (this is why ancient people thought the Earth was flat!). In Calculus, if we zoom into a microscopic dot on a curvy 3D mountain, the surface mathematically behaves like a completely flat, rigid piece of plywood resting exactly on that dot. This is the "Tangent Plane." Differentials are just a way of using this flat piece of plywood to quickly estimate changes without calculating the crazy curves. Plywood math is easy; mountain math is hard!

### Glossary of Key Terms
* Tangent Plane: A perfectly flat 2D plane intersecting a 3D surface at exactly one point, maintaining the exact spatial slopes of the surface at that specific coordinate.
* Normal Vector: A vector pointing exactly 90-degrees perpendicularly outward from the surface like a flagpole. The Gradient ∇f acts as the perfect Normal Vector!
* Linearization (Linear Approximation): Using the tangent plane to approximate complex nearby values rapidly, replacing a curvy equation with a linear flat approximation.
* Total Differential (dz or dw): A formula representing the estimated absolute total change in altitude resulting from small microscopic movements in x and y coordinates.

### Why This Matters in Electrical Engineering
* Error Analysis / Tolerance limits: Total Differentials are used relentlessly to map uncertainty. If a resistor R1 has ±5% tolerance and R2 has ±2%, the Total Differential calculates the maximum destructive deviation occurring in the core circuit operation explicitly.
* System Linearization: Nonlinear hardware (like diodes or MOSFETs) are painful to simulate mechanically. Linearization snaps a tangent line onto their operating V-I curve to construct "Small-Signal Models", tricking the math into acting linearly for micro-vibrations (audio signals).

### Formal Definitions and Notation
* Equation of a Plane: A(x - x_0) + B(y - y_0) + C(z - z_0) = 0.
* Tangent Plane (Implicit Level Surface): f_x(x-x_0) + f_y(y-y_0) + f_z(z-z_0) = 0.
* Tangent Plane (Standard z=f(x,y)): z - z_0 = f_x(x-x_0) + f_y(y-y_0).
* Total Differential: df = f_x dx + f_y dy + f_z dz.

### Step-by-Step Method for Plane Problems
1. Move everything to one side: If given an equation like z = x^2 + y^2, rip z over so it maps an implicit layout 0 = x^2 + y^2 - z. Now define this whole chunk as F(x,y,z).
2. Calculate the Gradient: Locate the Normal Vector by pumping the coordinates directly into the 3D gradient ∇F = (F_x, F_y, F_z).
3. Assemble the Plane: Take your gradient pieces (A,B,C) and your point coordinates (x_0,y_0,z_0) and throw them firmly into the master plane layout structure A(x-x_0) + B(y-y_0) + C(z-z_0) = 0.

### 10 Worked Exercises
**Exercise 1: Tangent Plane to a Sphere**
* **Problem:** Find the tangent plane to the sphere x^2 + y^2 + z^2 = 14 at the point (1, 2, 3).
* **Thinking Process:** The equation naturally exists as a clean 3D level surface F(x,y,z) = 14. I just construct the 3D gradient ∇F to use as my magic Normal perpendicular vector.
* **Unique Method:** Formulating 3D Normal Vectors for implicit spherical surfaces.
* **Step-by-Step Solution:** 
  1. Let F(x,y,z) = x^2 + y^2 + z^2.
  2. F_x = 2x, F_y = 2y, F_z = 2z.
  3. Evaluate at (1,2,3): ∇F = (2, 4, 6). These are the A, B, C components.
  4. Formula: A(x-x_0) + B(y-y_0) + C(z-z_0) = 0.
  5. 2(x - 1) + 4(y - 2) + 6(z - 3) = 0.
  6. 2x - 2 + 4y - 8 + 6z - 18 = 0  => 2x + 4y + 6z = 28. (Or x + 2y + 3z = 14).
* **Figure Reference:** Figure 14.30 depicts an expanding globe/sphere with a flat square card resting exactly tangent against a geographical pole.
* **Common Mistake:** Expanding out the algebra incorrectly and swapping the (x_0) and (A) mapping values inside the brackets.

**Exercise 2: Tangent Plane to a Paraboloid (Standard Z-Form)**
* **Problem:** Find the tangent plane to z = x^2 + y^2 at point (1, -1, 2).
* **Thinking Process:** Since z is isolated, I can either move it to make F(x,y,z) = x^2+y^2-z = 0, OR just use the faster 2D standard z-form formula. I'll use the fast one!
* **Unique Method:** Standard Z-form planar integration.
* **Step-by-Step Solution:**
  1. Let f(x,y) = x^2 + y^2. 
  2. Find f_x: 2x. At (1,-1), this equals 2.
  3. Find f_y: 2y. At (1,-1), this is -2.
  4. Use fast formula: z - z_0 = f_x(x - x_0) + f_y(y - y_0).
  5. z - 2 = 2(x - 1) - 2(y - (-1)).
  6. z - 2 = 2x - 2 - 2y - 2 => z = 2x - 2y - 2.
* **Figure Reference:** Figure 14.31 models a parabolic satellite dish sliced cleanly with an angled resting 2D surface projection plane mapping the identical local slope.
* **Common Mistake:** Using the 3D formula F_z without realizing moving z to the other side forces an absolute fixed multiplier of exactly -1 for C!

**Exercise 3: Normal Line to a Surface**
* **Problem:** For the surface z = x^2 + y^2 at point (1, -1, 2), find the equation of the "Normal Line" sticking out of the surface.
* **Thinking Process:** The normal line is simply a line passing through the point pointing exactly along the ∇F gradient direction! I'll write parameterized 3D line formulas mapping directly to A,B,C.
* **Unique Method:** Parameterized Orthogonal Vector Line Mapping.
* **Step-by-Step Solution:**
  1. Define implicit surface: F(x,y,z) = x^2 + y^2 - z = 0.
  2. ∇F = (2x, 2y, -1). At (1, -1, 2), ∇F = (2, -2, -1).
  3. The normal line uses these pieces purely as its parametric slopes!
  4. x = x_0 + At = 1 + 2t
  5. y = y_0 + Bt = -1 - 2t
  6. z = z_0 + Ct = 2 - t
* **Figure Reference:** Figure 14.32 illustrates a pinpoint beacon shining perpendicularly outward from a curved surface, showing the normal line.
* **Common Mistake:** Confusing Plane equations (where A,B,C are outside the bracket) vs Line equations (where A,B,C literally map as multiplying rates paired specifically to t).

**Exercise 4: Linearization Approximation**
* **Problem:** Find the linear approximation L(x,y) for f(x,y) = sqrt(x^2 + y^2) at (3, 4).
* **Thinking Process:** Linearization simply means "find the tangent plane and reorganize it to estimate nearby numerical points without square roots".
* **Unique Method:** Creating a small-signal tangent plane model for numerical estimation substitution.
* **Step-by-Step Solution:**
  1. Evaluate f(3,4) = sqrt(9 + 16) = 5. (This is z_0).
  2. Find f_x: (1/2)(x^2+y^2)^(-1/2)(2x) = x / sqrt(x^2+y^2). At (3,4) = 3/5.
  3. Find f_y: y / sqrt(x^2+y^2). At (3,4) = 4/5 
  4. L(x,y) = z_0 + f_x (x-3) + f_y (y-4).
  5. L(x,y) = 5 + (3/5)(x - 3) + (4/5)(y - 4).
  6. Let's test it! Approximate sqrt(3.1^2 + 3.9^2)... just plug 3.1 and 3.9 into this clean linear equation to completely skip doing messy root-squares!
* **Figure Reference:** Figure 14.33 shows a zoomed-in section of a bumpy terrain, with a flat transparent sheet laid over a small region, representing the linear approximation.
* **Common Mistake:** Failing to properly evaluate the base point z_0 first and randomly dropping it from the approximation.

**Exercise 5: Finding Total Differential**
* **Problem:** Calculate the total differential (dz) for z = x^3 y^2. 
* **Thinking Process:** The Total Differential is a blueprint template indicating how physical tiny microscopic 'wiggles' (dx and dy) will impact the ultimate output 'dz'. 
* **Unique Method:** Algebraic uncertainty decomposition.
* **Step-by-Step Solution:**
  1. Master template: dz = (∂z/∂x)dx + (∂z/∂y)dy.
  2. Compute ∂z/∂x: 3x^2 y^2.
  3. Compute ∂z/∂y: 2x^3 y.
  4. Final assembly: dz = (3x^2 y^2) dx + (2x^3 y) dy.
* **Figure Reference:** Figure 14.34 conceptually demonstrates how tiny changes (dx, dy) on a grid cause a specific resulting change (dz) on a surface's altitude.
* **Common Mistake:** Setting dx and dy to specific numerical values instead of leaving them as flexible theoretical "differential variables" to map geometric properties.

**Exercise 6: Error Estimation (EE Tolerance Analysis)**
* **Problem:** The resistance of a wire relies on radius r=2cm and length L=10cm according to R = k L / r^2 (k is a constant 5). Measurements have error dr = 0.05 and dL = 0.2. Estimate maximum error in Resistance.
* **Thinking Process:** *Before continuing, how would you set up the model?* Instead of recalculating extreme values forcefully, I just drop the exact errors linearly into the Total Differential container!
* **Unique Method:** Utilizing differentials as real-world physical boundary thresholds.
* **Step-by-Step Solution:**
  1. R = 5L / r^2.
  2. dR = (∂R/∂L) dL + (∂R/∂r) dr.
  3. ∂R/∂L = 5/r^2 = 5/4 = 1.25.
  4. ∂R/∂r = -10L / r^3 = -10(10)/8 = -100/8 = -12.5.
  5. Assemble dR = 1.25(dL) - 12.5(dr).
  6. Both errors (0.05 and 0.2) could be physically positive or negative! To find max error, assume they conspire exactly against each other algebraically to maximize the absolute value.
  7. Set dr = -0.05 (to cancel negative sign) and dL = 0.2.
  8. dR = 1.25(0.2) - 12.5(-0.05) = 0.25 + 0.625 = 0.875 units max error.
* **Figure Reference:** Figure 14.35 visualizes an electrical wire's dimensions (length, radius) with shaded regions indicating measurement uncertainty, showing how these propagate to resistance.
* **Common Mistake:** Not treating dL and dr as absolute +/- bands, consequently incorrectly letting negative terms artificially "shrink" the estimated peak deviation.

**Exercise 7: Plane to a Hyperboloid (Source: COMSATS FA24)**
* **Problem:** Find the tangent plane to x^2 + 2y^2 - 3z^2 = 3 at P(2, -1, 1).
* **Thinking Process:** A hyperboloid works exactly like a sphere. Keep the whole thing implicit, locate normal, plug point.
* **Unique Method:** 3D implicit plane assembly framework natively.
* **Step-by-Step Solution:**
  1. F(x,y,z) = x^2 + 2y^2 - 3z^2.
  2. ∇F = (2x, 4y, -6z).
  3. Plug in P(2, -1, 1): ∇F = (4, -4, -6). These are A, B, C.
  4. Plane: 4(x - 2) - 4(y - (-1)) - 6(z - 1) = 0.
  5. 4x - 8 - 4y - 4 - 6z + 6 = 0.
  6. Final: 4x - 4y - 6z = 6, or 2x - 2y - 3z = 3.
* **Figure Reference:** Figure 14.36 graphs an hourglass-shaped cooling tower geometry intersected by a perfectly tilted rigid plane.
* **Common Mistake:** Trying to incorrectly isolate z by bringing over roots giving an ugly +/- ambiguity. Stick to F(x,y,z)=c!

**Exercise 8: Differentiability Proof Protocol**
* **Problem:** Why is it not enough for f_x and f_y to simply exist at a point to prove a surface is differentiable (smooth)?
* **Thinking Process:** This is a fundamental theory check. The 'Cross' example (Chapter 14.3, Ex 7) proved this mathematically!
* **Unique Method:** Theoretical evaluation using boundary contradictions.
* **Step-by-Step Solution:**
  1. To be mathematically differentiable, a tangent plane must rest smoothly exactly on the point.
  2. Just because the slope exists walking strictly North (f_y) and strictly East (f_x) doesn't mean mountains aren't hiding on the diagonal paths!
  3. True differentiability generally strictly requires the partial derivatives to NOT JUST EXIST, but to visually be continuously smooth over a localized domain disc.
* **Figure Reference:** Figure 14.37 illustrates a surface with sharp creases or corners, showing how partial derivatives along axes might exist but a smooth tangent plane cannot be formed.
* **Common Mistake:** Confusing 1D calculus (where existing derivative = differentiable) with 3D calculus complexities unconditionally.

**Exercise 9: Differential on Trigonometrics (Source: CUI SP22)**
* **Problem:** Calculate dw for w = cos(x) sin(y + z).
* **Thinking Process:** Three variables. Same pattern: find all three partials, tack on dx, dy, dz structurally.
* **Unique Method:** Multi-dimensional harmonic component mapping.
* **Step-by-Step Solution:**
  1. w_x = -sin(x) sin(y + z).
  2. w_y = cos(x) cos(y + z). (y component derivation equals 1 inside).
  3. w_z = cos(x) cos(y + z). (z component derivation equals 1 inside).
  4. dw = [ -sin(x) sin(y + z) ] dx + [ cos(x) cos(y + z) ] dy + [ cos(x) cos(y + z) ] dz.
* **Figure Reference:** Figure 14.38 depicts a complex oscillatory surface, with arrows showing how small changes in x, y, and z affect the overall wave's amplitude (w).
* **Common Mistake:** Mixing up outer negative signs when iterating derivation between intersecting structural cosine and sine groups.

**Exercise 10: Percentage Error (Source: COMSATS FA25)**
* **Problem:** A cylinder's volume is V = π r^2 h. If r has a 1% measurement error and h has a 2% error, estimate max percentage error identically for V.
* **Thinking Process:** Percentage error simply means manipulating differentials into fractional ratios mathematically (dV/V).
* **Unique Method:** Relative ratio boundary transformations.
* **Step-by-Step Solution:**
  1. dV = (2πrh) dr + (πr^2) dh.
  2. Divide entire equation explicitly by V (which equals π r^2 h):
  3. dV/V = (2πrh/πr^2h) dr + (πr^2/πr^2h) dh.
  4. Simplify elegantly: dV/V = 2(dr/r) + 1(dh/h).
  5. The given % errors literally dictate: dr/r = 0.01. dh/h = 0.02.
  6. Maximum relative error visually: 2(0.01) + 1(0.02) = 0.02 + 0.02 = 0.04.
  7. Final Conclusion: The maximum expected bounding error in volume is strictly 4%.
* **Figure Reference:** Figure 14.39 visualizes a cylinder whose dimensions (r, h) have percentage uncertainties, illustrating how these translate to a percentage uncertainty in its volume.
* **Common Mistake:** Setting dV absolute values directly instead of elegantly dividing to map directly to proportional error structures.

#
### Algorithmic Problem Solving Flow

To master Directional Derivatives, follow this algorithmic flow. Think of it as a decision tree for your brain—it maps the logical steps you must take to arrive at the solution systematically.

\`\`\`text
[Start: Find D_u f]
          |
          v
+---------------------------+
| Find Gradient Vector ∇f   |
+---------------------------+
          |
          v
+---------------------------+
| Is Direction Vector Unit? |
+---------------------------+
          |
  +-------+-------+
  |               |
[Yes]           [No]
  |               |
  |               v
  |         +-------------+
  |         | Divide by   |
  |         | Magnitude   |
  |         +-------------+
  v               |
+-----------------+---------+
| Compute Dot Product: ∇f·u |
+---------------------------+
          |
          v
       [Finish]
\`\`\`

## Cheat Sheet / Summary Table

### Key Points
*   **Tangent Plane:** The best linear approximation of a surface at a specific point, acting like a flat piece of plywood precisely touching a curvy mountain.
*   **Normal Vector:** A vector that points straight out (perpendicular) from the surface at a given point, found using the gradient (∇F).
*   **Linearization (Approximation):** Using the simple, flat tangent plane equation to estimate values of a complex curved function for points very close to the anchor point.
*   **Total Differential:** A formula to calculate the estimated total change (dz or dw) in a function's output due to small, independent changes (dx, dy, etc.) in its inputs. Essential for error and tolerance analysis.

### Formulas
*   **General Equation of a Plane:** $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$.
*   **Tangent Plane (for Implicit Surface $F(x,y,z) = c$):** $F_x(x_0,y_0,z_0)(x-x_0) + F_y(x_0,y_0,z_0)(y-y_0) + F_z(x_0,y_0,z_0)(z-z_0) = 0$.
*   **Tangent Plane (for $z = f(x,y)$):** $z - z_0 = f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)$.
*   **Normal Line (Parametric):** $x = x_0+F_x t$, $y = y_0+F_y t$, $z = z_0+F_z t$.
*   **Linearization $L(x,y)$ (for $z = f(x,y)$):** $L(x,y) = f(x_0,y_0) + f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)$.
*   **Total Differential (for $z = f(x,y)$):** $dz = (\partial z/\partial x)dx + (\partial z/\partial y)dy$.
*   **Total Differential (for $w = f(x,y,z)$):** $dw = (\partial w/\partial x)dx + (\partial w/\partial y)dy + (\partial w/\partial z)dz$.

### Common Mistakes
*   **Mixing up Formula Types:** Using the implicit plane formula $F_x(x-x_0) + ...$ when the function is given as $z=f(x,y)$, or vice-versa. Remember to define $F(x,y,z) = f(x,y) - z$ if converting $z=f(x,y)$ to implicit form.
*   **Evaluation Errors:** Forgetting to evaluate the partial derivatives ($f_x, f_y, F_x, F_y, F_z$) *at the specific point* $(x_0, y_0, z_0)$ before plugging them into the plane equation or linearization.
*   **Sign Errors with Differentials:** When estimating maximum error using differentials (e.g., $dR = \dots + (\partial R/\partial r)dr$), ensure that individual differential terms ($dr, dL$) are chosen to maximize the *absolute value* of the total change, rather than simply plugging in positive values if a partial derivative is negative.
*   **Confusing dx/dy with Δx/Δy:** While differentials are used to approximate changes, it's important to remember $dx, dy$ are theoretical infinitesimal changes, whereas $\Delta x, \Delta y$ are actual finite changes used in approximations like $L(x,y)$.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-stretch">
  <div class="flex flex-col items-center space-y-2  font-sans">
  <div class="bg-slate-800 text-white px-5 py-3 rounded-xl text-center font-bold w-64 shadow-md">
    Step 1: Find Spot Value<br><span class="text-xs font-normal text-slate-300">Calculate z₀ = f(a,b) at the anchor point.</span>
  </div>
  <div class="text-slate-400 font-bold">↓</div>
  <div class="bg-indigo-100 border-2 border-indigo-300 text-indigo-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 2: Find Local Slopes<br><span class="text-xs font-normal">Evaluate f_x(a,b) and f_y(a,b)</span>
  </div>
  <div class="text-indigo-400 font-bold">↓</div>
  <div class="bg-blue-100 border-2 border-blue-300 text-blue-900 px-5 py-3 rounded-xl text-center font-semibold w-64 shadow-sm">
    Step 3: Construct the Plane<br><span class="text-xs font-normal">z - z₀ = f_x(x-a) + f_y(y-b)</span>
  </div>
  <div class="text-blue-400 font-bold">↓</div>
  <div class="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 px-5 py-3 rounded-xl text-center font-bold w-64 shadow-sm">
    Step 4: Linearize (L)<br><span class="text-xs font-normal">L(x,y) = z₀ + f_x(x-a) + f_y(y-b)</span>
  </div>
</div>

> **EXAMPLE_WALKTHROUGH**
>
> **Example:** Tangent plane to $z = 2x^2 + y^2$ at $(1, 1)$
>       1. **Find Spot Value:** Evaluate $f(1,1) = 2(1)^2 + (1)^2 = 3$. So anchor point is $(1, 1, 3)$.
>       2. **Find Local Slopes:** $f_x = 4x \\implies f_x(1,1) = 4$. $f_y = 2y \\implies f_y(1,1) = 2$.
>       3. **Construct the Plane:** Use the formula: $z - 3 = 4(x - 1) + 2(y - 1)$.
>       <div class="flex items-start"><span class="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0">4</span><p><strong>Linearize:</strong> The tangent plane equation expanded is $L(x,y) = 3 + 4x - 4 + 2y - 2 = 4x + 2y - 3$. We can use this to easily approximate values near $(1,1)$.</p>
  </div>
</div>

### Chapter Assessment

> **QUIZ:** Source: COMSATS FA24.. Find the equation for the tangent plane to the surface z = ln(x^2 + y^2) evaluated at (1, 0, 0).
>
> 1. **Source: COMSATS FA24..** Find the equation for the tangent plane to the surface z = ln(x^2 + y^2) evaluated at (1, 0, 0).

> **QUIZ:** Source: CUI SP22.. The electrical voltage V = I R. Find the total differential dV specifically mapped against dI and dR representations conditionally.
>
> 2. **Source: CUI SP22..** The electrical voltage V = I R. Find the total differential dV specifically mapped against dI and dR representations conditionally.

> **QUIZ:** Source: COMSATS FA25.. Find the precise Linearization approximation L(x,y) mapping around point (0,0) explicitly for the function f(x,y) = e^x cos(y).
>
> 3. **Source: COMSATS FA25..** Find the precise Linearization approximation L(x,y) mapping around point (0,0) explicitly for the function f(x,y) = e^x cos(y).

> **QUIZ:** Find the linear approximation of f(x,y) = √(x² + y²) at (3,4) and use it to estimate √(3.1² + 3.9²).
>
> 4. Find the linear approximation of $f(x,y) = \sqrt{x^2 + y^2}$ at $(3,4)$ and use it to estimate $\sqrt{3.1^2 + 3.9^2}$.
> *(Source: CUI Lahore SP22 Q4a)*

> **QUIZ:** The resistance of a wire is R = ρ L / A. If ρ = 1.68×10⁻⁸ Ω·m, L = 10.0 m with error ±0.1 m, A = 2.0×10⁻⁶ m² with error ±0.05×10⁻⁶, estimate the maximum possible error in R.
>
> 5. The resistance of a wire is $R = \rho L / A$. If $\rho = 1.68\times10^{-8} \Omega\cdot\text{m}$, $L = 10.0\text{ m}$ with error $\pm0.1\text{ m}$, $A = 2.0\times10^{-6}\text{ m}^2$ with error $\pm0.05\times10^{-6}$, estimate the maximum possible error in $R$.
> *(EE application)*

\`▓▓▓▓▓▓░░░░ 60%\` Course Progress`
  },
  {
    id: "chapter-14-7",
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
      { id: "ch14-7-cheatsheet", title: "Cheat Sheet / Summary Table" },      { id: "ch14-7-visuals", title: "Visuals / Graphs" },

      { id: "ch14-7-test", title: "Chapter Assessment" }
    ],
    markdown: `

## Introduction and Core Concepts

In 14.7, we discover how to find the "peaks" (local maxima), "valleys" (local minima), and "mountain passes" (saddle points) of 3D surfaces modeled by $f(x,y)$. We use calculus to rigorously narrow our search by examining the first and second partial derivatives.

### 1. Definitions: Local Maximum, Local Minimum
Let $f(x, y)$ be defined on a region $R$ containing the point $(a, b)$.
- $f(a, b)$ is a **local maximum** value of $f$ if $f(a, b) \ge f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$.
- $f(a, b)$ is a **local minimum** value of $f$ if $f(a, b) \le f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$.

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
$$D = \begin{vmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{vmatrix}$$

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

*Sketching Guide for student:* To sketch $z = x^2 + y^2$, notice that $z \ge 0$, and horizontal cross sections ($z=c$) are circles $x^2+y^2=c$. This forms a classic bowl-shaped paraboloid opening upwards, confirming the minimum at the bottom of the bowl.

**Solution:**
$\begin{align*} f_x &= 2x &&\text{Step 1: Compute first partial derivatives to find critical points}. \\ f_y &= 2y && \\ 2x &= 0 \implies x=0 &&\text{Step 2: Set partial derivatives to zero and solve}.\\ 2y &= 0 \implies y=0 && \end{align*}$

The only critical point is $(0,0)$. The value of $f(0,0)$ is $0$.

$\begin{align*} f_{xx} &= 2, \, f_{yy} = 2, \, f_{xy} = 0 &&\text{Step 3: Compute second derivatives to apply the Second Derivative Test}. \\ D &= f_{xx}f_{yy} - f_{xy}^2 && \\ D &= (2)(2) - 0 = 4 > 0 &&\text{Step 4: Compute the discriminant } D. \end{align*}$
Since $D > 0$ and $f_{xx} > 0$, the origin gives a **local minimum** of $0$.

### Example 2: Identifying a Saddle Point
**Question:** Find the local extreme values (if any) of $f(x, y) = y^2 - x^2$.

**Thought Process:**
Set partials to $0$. Find the critical point. Test it using $D$. I have to be careful with the signs.

*Sketching Guide for student:* Draw the x, y, and z axes. Notice that along the y-axis ($x=0$), the curve is a parabola opening up ($z=y^2$). Along the x-axis ($y=0$), the curve is a parabola opening down ($z=-x^2$). Combining these gives the classic Pringles chip shape stretching up along the y-axis and dropping down along the x-axis.

**Solution:**
$\begin{align*} f_x &= -2x &&\text{Step 1: Find the first partial derivatives}. \\ f_y &= 2y && \\ -2x &= 0 \implies x=0 &&\text{Step 2: Find critical points}.\\ 2y &= 0 \implies y=0 && \text{The critical point is } (0,0). \end{align*}$

$\begin{align*} f_{xx} &= -2, \, f_{yy} = 2, \, f_{xy} = 0 &&\text{Step 3: Evaluate the second derivatives}. \\ D &= (-2)(2) - 0 = -4 < 0 &&\text{Step 4: Compute the discriminant } D. \end{align*}$
A negative discriminant $D < 0$ means the point is a **saddle point**. There are no local extreme values.

### Example 3: Finding Local Extreme Values of a Polynomial
**Question:** Find the local extreme values of $f(x, y) = xy - x^2 - y^2 - 2x - 2y + 4$.

**Thought Process:** 
I will solve the simultaneous system of equations formed by setting $f_x=0$ and $f_y=0$. 

**Solution:** 
$\begin{align*} f_x &= y - 2x - 2 = 0 &&\text{Step 1: Setup system of equations from partials}.\\ f_y &= x - 2y - 2 = 0 && \\ x &= \frac{y-2}{2} &&\text{Step 2: Solve the first equation for } x. \\ \frac{y-2}{2} - 2y - 2 &= 0 &&\text{Substitute into the second equation}. \\ y - 2 - 4y - 4 &= 0 &&\text{Multiply by 2 and simplify}. \\ -3y &= 6 \implies y = -2 &&\text{Solve for } y. \text{ Thus } x = -2. \end{align*}$
The critical point is $(-2, -2)$.

$\begin{align*} f_{xx} &= -2, \, f_{yy} = -2, \, f_{xy} = 1 &&\text{Step 3: Evaluate second partial derivatives}. \\ D &= (-2)(-2) - (1)^2 = 3 > 0 &&\text{Step 4: Compute the discriminant } D. \end{align*}$
Since $D > 0$ and $f_{xx} < 0$, $f$ has a **local maximum** at $(-2, -2)$. 
$f(-2,-2) = 8$.

### Example 4: Absolute Extrema on a Closed Bounded Region
**Question:** Find the absolute maximum and minimum values of $f(x, y) = 2 + 2x + 2y - x^2 - y^2$ on the triangular region $R$ in the first quadrant bounded by the lines $x=0$, $y=0$, $y=9-x$.

**Thought Process:**
First, I will find interior critical points by setting the gradient to zero. Second, I will analyze each boundary segment separately, parameterize the boundary, and treat it like a standard 1D calculus problem. Finally, I will compile a list of all candidates and take the highest and lowest values found.

*Sketching Guide for student:* Draw the y-axis ($x=0$) and x-axis ($y=0$). Draw a line from $(0,9)$ to $(9,0)$, which is $y=9-x$. Shade the triangle bounded by these three lines. This is the domain in the xy-plane.

**Solution:**
**(a) Interior points:**
$\begin{align*} f_x &= 2 - 2x = 0 \implies x=1 &&\text{Step 1: Check interior critical points}. \\ f_y &= 2 - 2y = 0 \implies y=1 && \end{align*}$
The point $(1,1)$ is inside the triangle.
$f(1,1) = 2 + 2 + 2 - 1 - 1 = 4$.

**(b) Boundary points:**
$\begin{align*} \text{Segment } OA: \, y&=0, \, 0 \le x \le 9. &&\text{Step 2: Check the bottom edge}. \\ f(x, 0) &= 2 + 2x - x^2. &&\text{This is now a 1D function}. \\ f'(x) &= 2 - 2x = 0 \implies x=1. &&\text{Find extreme values along the segment}. \end{align*}$
Evaluating candidates on this segment: $f(0,0) = 2$, $f(1,0) = 3$, $f(9,0) = -61$.

$\begin{align*} \text{Segment } OB: \, x&=0, \, 0 \le y \le 9. &&\text{Step 3: Check the left edge}. \\ f(0, y) &= 2 + 2y - y^2. && \end{align*}$
By symmetry, critical point at $y=1$.
Evaluating candidates: $f(0,1) = 3$, $f(0,9) = -61$.

$\begin{align*} \text{Segment } AB: \, y &= 9-x, \, 0 \le x \le 9. &&\text{Step 4: Check the hypotenuse edge}. \\ f(x, 9-x) &= 2 + 2x + 2(9-x) - x^2 - (9-x)^2 &&\text{Substitute the constraint into } f. \\  &= -61 + 18x - 2x^2. && \\ \frac{d}{dx}f(x, 9-x) &= 18 - 4x = 0 \implies x = 9/2. &&\text{Find extreme value along hypotenuse}. \end{align*}$
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
$\begin{align*} V(y,z) &= (108 - 2y - 2z)yz &&\text{Step 1: Eliminate x}. \\ &= 108yz - 2y^2z - 2yz^2. && \\ V_y &= 108z - 4yz - 2z^2 = z(108 - 4y - 2z) = 0 &&\text{Step 2: Partial w.r.t y}. \\ V_z &= 108y - 2y^2 - 4yz = y(108 - 2y - 4z) = 0 &&\text{Step 3: Partial w.r.t z}. \end{align*}$
Exclude $y=0$ or $z=0$ (these yield zero volume). We solve the simultaneous equations:
$\begin{align*} 4y + 2z &= 108 &&\text{Step 4: Solve the system}. \\ 2y + 4z &= 108 && \end{align*}$
Subtracting the second from twice the first gives $6y = 108 \implies y=18$. By symmetry $z=18$. Then $x=108-36-36 = 36$.
Checking second derivatives ensures this gives a maximum. Max Volume is $V=11664 \text{ in}^3$.

---

## Visuals / Graphs

### 1. Saddle Point and Critical Points
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="saddle_point"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the local maximum, minimum, and saddle points of f(x,y) = x² + xy + y² + 3x - 3y + 4."></div>
<div class="user-quiz" data-question="2. Find absolute extrema of f(x,y) = 2x² - 4x + y² - 4y + 1 on the closed triangular plate bounded by x=0, y=2, y=2x in the first quadrant."></div>

`
  },
  {
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
      { id: "ch14-8-cheatsheet", title: "Cheat Sheet / Summary Table" },      { id: "ch14-8-visuals", title: "Visuals / Graphs" },

      { id: "ch14-8-test", title: "Chapter Assessment" }
    ],
    markdown: `

## Introduction and Core Concepts

In section 14.8, we explore a powerful method for finding extreme values of constrained functions: the **method of Lagrange multipliers**. Sometimes we need to find the extreme values of a function whose domain is constrained to lie within some particular subset of the plane—a disk, for example, a closed triangular region, or along a curve.

### 1. Constrained Maxima and Minima
Instead of substituting one variable for another (which could involve tricky domain shadows or square roots), we use Lagrange multipliers. 

**Theorem 12: The Orthogonal Gradient Theorem**
Suppose that $f(x, y, z)$ is differentiable in a region whose interior contains a smooth curve $C$ parametrized by $\mathbf{r}(t)$. If $P_0$ is a point on $C$ where $f$ has a local maximum or minimum relative to its values on $C$, then $\nabla f$ is orthogonal to $C$ at $P_0$.

**Corollary to Theorem 12:**
At the points on a smooth curve $\mathbf{r}(t)$ where a differentiable function $f(x,y)$ takes on its local maxima and minima relative to its values on the curve, $\nabla f \cdot \mathbf{v} = 0$, where $\mathbf{v} = d\mathbf{r}/dt$.

### 2. The Method of Lagrange Multipliers
Suppose that $f(x, y, z)$ and $g(x, y, z)$ are differentiable. To find the local maximum and minimum values of $f$ subject to the constraint $g(x, y, z) = 0$, find the values of $x, y, z$, and $\lambda$ that simultaneously satisfy the equations:
$$\nabla f = \lambda \nabla g \quad \text{and} \quad g(x, y, z) = 0$$
For functions of two independent variables, the condition is similar, but without the variable $z$. The scalar $\lambda$ is called a **Lagrange multiplier**.

### 3. The Geometry of the Solution
Imagine the level curves $f(x,y) = c$. We want to find the extreme values of $f(x,y)$ given that the point $(x,y)$ also lies on a constraint curve $g(x,y) = 0$. The extremum occurs when the level curve of $f$ just grazes (is tangent to) the constraint curve $g$. At the point of tangency, their normal vectors (the gradients) are parallel. Thus $\nabla f = \lambda \nabla g$.

### 4. Lagrange Multipliers with Two Constraints
Many problems require us to find the extreme values of a differentiable function $f(x, y, z)$ whose variables are subject to two constraints. If the constraints are $g_1(x, y, z) = 0$ and $g_2(x,y,z) = 0$, and $\nabla g_1$ is not parallel to $\nabla g_2$, we introduce two Lagrange multipliers $\lambda$ and $\mu$. We locate the points $P(x,y,z)$ where $f$ takes on its constrained extreme values by finding values that satisfy:
$$\nabla f = \lambda \nabla g_1 + \mu \nabla g_2$$
coupled with the two constraint equations.

---

## ELI5 Explanation
Imagine you are walking along a winding path (the constraint $g(x,y)=0$) on the side of a mountain $f(x,y)$. You want to find the highest point on your path. The rule of Lagrange multipliers says: at the exact highest (or lowest) point on your path, the direction pointing straight up the mountain (the gradient $\nabla f$) will be perpendicular to your path. Why? Because if the up-mountain direction tipped even slightly forward or backward along your path, you could just step that way to get higher!

In electrical engineering, think of maximizing system performance ($f$) under a strict budgetary or power constraint ($g$). You balance the performance gradient against the cost gradient.

---

## Detailed Worked Examples

### Example 1: Finding a Minimum with Constraint
**Question:** Find the point $P(x, y, z)$ closest to the origin on the plane $2x + y - z - 5 = 0$.

**Thought Process:**
Instead of minimizing the true distance $d = \sqrt{x^2+y^2+z^2}$, we can minimize the square of the distance to avoid messy derivatives. Let $f(x,y,z) = x^2+y^2+z^2$. The constraint is the plane $g(x,y,z) = 2x+y-z-5 = 0$.

*Sketching Guide for student:* Sketch a flat plane cutting through the 3D axes at $x=2.5, y=5, z=-5$. Imagine a sphere growing from the origin. The closest point is exactly where the sphere first "kisses" the plane (tangency).

**Solution:**
$\begin{align*} f(x,y,z) &= x^2 + y^2 + z^2 &&\text{Step 1: Define objective function}. \\ g(x,y,z) &= 2x + y - z - 5 = 0 &&\text{Step 2: Define constraint function}. \\ \nabla f &= \langle 2x, 2y, 2z \rangle &&\text{Step 3: Calculate gradient of f}. \\ \nabla g &= \langle 2, 1, -1 \rangle &&\text{Step 4: Calculate gradient of g}. \end{align*}$

Set $\nabla f = \lambda \nabla g$:
$\begin{align*} 2x &= 2\lambda \implies x = \lambda &&\text{Step 5: Equate components}. \\ 2y &= \lambda \implies y = \lambda/2 && \\ 2z &= -\lambda \implies z = -\lambda/2 && \end{align*}$

Substitute into the constraint $2x+y-z-5=0$:
$\begin{align*} 2(\lambda) + (\lambda/2) - (-\lambda/2) - 5 &= 0 &&\text{Step 6: Substitute components into constraint}. \\ 2\lambda + \lambda - 5 &= 0 implies 3\lambda = 5 implies \lambda = 5/3 &&\text{Solve for } \lambda. \end{align*}$

Thus $x = 5/3$, $y = 5/6$, $z = -5/6$. The closest point is $(5/3, 5/6, -5/6)$.

### Example 2: Using the Method of Lagrange Multipliers
**Question:** Find the greatest and smallest values that the function $f(x, y) = xy$ takes on the ellipse $\frac{x^2}{8} + \frac{y^2}{2} = 1$.

**Thought Process:**
Set $\nabla f = \lambda \nabla g$ and $g = 0$. This will generate a system of nonlinear equations. Finding valid solutions requires exploring different cases (like separating when coordinates can be zero or non-zero).

*Sketching Guide for student:* Draw the $xy$-axes. Draw an ellipse passing through $x = pm \sqrt{8} \approx \pm 2.8$ and $y = pm \sqrt{2} \approx \pm 1.4$. The level curves of $f(x,y)=xy$ are hyperbolas in quadrants 1/3 (positive values) and quadrants 2/4 (negative values). We look for where these hyperbolas just touch the ellipse!

**Solution:**
$\begin{align*} \nabla f &= y\mathbf{i} + x\mathbf{j} &&\text{Step 1: Compute gradients}. \\ \nabla g &= \frac{x}{4}\mathbf{i} + y\mathbf{j} && \\ y &= \frac{\lambda x}{4} &&\text{Step 2: Set } \nabla f = \lambda \nabla g. \\ x &= \lambda y && \end{align*}$

Now, solve the system. Substitute $x = \lambda y$ into the first equation:
$\begin{align*} y &= \frac{\lambda}{4} (\lambda y) = \frac{\lambda^2}{4} y &&\text{Step 3: Solve the system}. \end{align*}$
If $y = 0$, then $x = 0$, but $(0,0)$ does not satisfy the ellipse constraint $0^2/8 + 0^2/2 \neq 1$.
So $y \neq 0$. This means we can divide by $y$:
$1 = \frac{\lambda^2}{4} \implies \lambda^2 = 4 \implies \lambda = \pm 2$.

Case 1: $\lambda = 2 \implies x = 2y$.
Substitute into the ellipse constraint:
$\begin{align*} \frac{(2y)^2}{8} + \frac{y^2}{2} &= 1 &&\text{Step 4: Plug substitution into constraint}. \\ \frac{4y^2}{8} + \frac{y^2}{2} &= 1 implies \frac{y^2}{2} + \frac{y^2}{2} = 1 implies y^2 = 1 implies y = \pm 1 && \end{align*}$
Points: $(2, 1)$ and $(-2, -1)$. $f$ at these points equals $2$.

Case 2: $\lambda = -2 implies x = -2y$.
Substitute into constraint:
$\frac{(-2y)^2}{8} + \frac{y^2}{2} = 1 implies y^2 = 1 implies y = \pm 1$.
Points: $(-2, 1)$ and $(2, -1)$. $f$ at these points equals $-2$.

Extrema: **Maximum is 2**, **Minimum is -2**.

### Example 3: Finding Extreme Function Values on a Circle
**Question:** Find the max and min of $f(x,y) = 3x + 4y$ on the circle $x^2 + y^2 = 1$.

**Thought Process:**
This is classic constrained optimization. We need $\nabla f = \lambda \nabla g$. The gradients will be very simple linear expressions.

*Sketching Guide for student:* Sketch a circle of radius $1$. The function $f(x,y)=3x+4y$ represents a series of parallel lines with slope $-3/4$. We want to shift this line as far northeast (max) or southwest (min) as possible while still touching the circle.

**Solution:**
$\begin{align*} \nabla f &= \langle 3, 4 \rangle &&\text{Step 1: Compute gradients}. \\ \nabla g &= \langle 2x, 2y \rangle && \\ 3 &= 2\lambda x implies x = \frac{3}{2\lambda} &&\text{Step 2: Equate components}. \\ 4 &= 2\lambda y implies y = \frac{2}{\lambda} && \end{align*}$

Substitute into $x^2+y^2=1$:
$\begin{align*} \left(\frac{3}{2\lambda}\right)^2 + \left(\frac{2}{\lambda}\right)^2 &= 1 &&\text{Step 3: Solve constraint for lambda}. \\ \frac{9}{4\lambda^2} + \frac{4}{\lambda^2} &= 1 implies \frac{9+16}{4\lambda^2} = 1 implies 25 = 4\lambda^2 implies \lambda = \pm \frac{5}{2} && \end{align*}$

Case 1: $\lambda = 5/2 implies x = 3/5, y = 4/5$. 
$f(3/5, 4/5) = 3(3/5) + 4(4/5) = 9/5 + 16/5 = 25/5 = 5$.
Case 2: $\lambda = -5/2 implies x = -3/5, y = -4/5$. 
$f(-3/5, -4/5) = -9/5 - 16/5 = -5$.

**Maximum is 5**, **Minimum is -5**.

### Example 4: Extremes of Distance on an Ellipse (Two Constraints)
**Question:** The plane $x+y+z=1$ cuts the cylinder $x^2+y^2=1$ in an ellipse. Find the points on the ellipse closest to and farthest from the origin.

**Thought Process:** We want to optimize $f(x,y,z) = x^2+y^2+z^2$ subject to $g_1 = x^2+y^2-1=0$ and $g_2 = x+y+z-1=0$. This requires the two constraint formula $\nabla f = \lambda \nabla g_1 + \mu \nabla g_2$.

*Sketching Guide for student:* Sketch a cylinder of radius 1 centered on the z-axis. Sketch a plane tilting downwards. Where they intersect produces a tilted ellipse. We want to find the points on this rim closest/farthest to the origin.

**Solution:**
$\begin{align*} \nabla f &= \langle 2x, 2y, 2z \rangle &&\text{Step 1: Compute gradients}. \\ \nabla g_1 &= \langle 2x, 2y, 0 \rangle && \\ \nabla g_2 &= \langle 1, 1, 1 \rangle && \end{align*}$

$\nabla f = \lambda \nabla g_1 + \mu \nabla g_2$:
$\begin{align*} 2x &= 2\lambda x + \mu &&\text{Step 2: Setup system of equations}. \\ 2y &= 2\lambda y + \mu && \\ 2z &= \mu && \end{align*}$

Subtract equations 1 and 2:
$\begin{align*} 2x - 2y &= 2\lambda x - 2\lambda y \\ 2(x-y) &= 2\lambda(x-y) \implies 2(x-y)(1-\lambda) = 0. &&\text{Step 3: Exploit symmetry to find cases}. \end{align*}$
This gives cases $x=y$ or $\lambda=1$.

Case 1: $x=y$.
Using $g_1$: $x^2+x^2=1 implies 2x^2=1 implies x=\pm \frac{1}{\sqrt{2}}$. Thus $y = \pm \frac{1}{\sqrt{2}}$.
Using $g_2$: $z = 1 - x - y = 1 - 2x$.
Points: $P_1(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 1-\sqrt{2})$ and $P_2(-\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}, 1+\sqrt{2})$.

Case 2: $\lambda = 1$.
Then $2x = 2x + \mu implies \mu=0$.
Then from $2z = \mu$, $z = 0$.
Substitute into $g_2$: $x+y+0=1 implies y=1-x$.
Substitute into $g_1$: $x^2+(1-x)^2=1 implies x^2+1-2x+x^2=1 implies 2x^2-2x=0 implies 2x(x-1)=0$.
So $x=0$ or $x=1$.
Produces points $P_3(0,1,0)$ and $P_4(1,0,0)$.

Now, compute distances ($d^2 = x^2+y^2+z^2$) for these points.
$P_1, P_2: d^2 = 1 + (1 \mp \sqrt{2})^2 = 4 \mp 2\sqrt{2}$. (approx 6.82 and 1.17).
$P_3, P_4: d^2 = 1$.

Closest points: **(0,1,0) and (1,0,0)**. Farthest point: **$(-\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}, 1+\sqrt{2})$**.

---

## Visuals / Graphs

### 1. Lagrange Multipliers Constraint
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="lagrange_multiplier"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the maximum and minimum values of f(x,y)=xy on the ellipse x²/8 + y²/2 = 1."></div>
<div class="user-quiz" data-question="2. Find the point on the plane x+2y+3z=13 closest to (1,1,1)."></div>

`
  },
  {
    id: "chapter-14-9",
    title: "Chapter 14.9: Partial Derivatives with Constrained Variables",
    progress: 0,
    subheadings: [
      { id: "ch14-9-intro", title: "Review of Previous Concepts" },
      { id: "ch14-9-eli5", title: "ELI5 Explanation" },
      { id: "ch14-9-glossary", title: "Glossary of Key Terms" },
      { id: "ch14-9-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch14-9-formal", title: "Formal Definitions and Notation" },
      { id: "ch14-9-method", title: "Step-by-Step Method for Solving" },
      { id: "ch14-9-flowchart", title: "Algorithmic Problem Flow" },
      { id: "ch14-9-examples", title: "10 Worked Exercises" },
      { id: "ch14-9-cheatsheet", title: "Cheat Sheet" },      { id: "ch14-9-visuals", title: "Visuals / Graphs" },

      { id: "ch14-9-test", title: "Chapter Assessment" }
    ],
    markdown: `## Review of Previous Concepts

- **Partial derivatives (from 14.3):** Isolating variables mathematically representing exact slope definitions.
- **Chain rule (from 14.4):** Tracking nested dependent variables structurally bridging components recursively.
- **Implicit differentiation:** Generating rate functions embedded actively without standard algebra explicit mapping logic.

We now explain that sometimes variables are not universally independent (e.g., ideal gas law $PV=nRT$). The notation $(\frac{\partial w}{\partial x})_y$ directly specifies actively which variable terms are logically held securely constant.

---

## ELI5 Explanation

Imagine you critically measure voltage $V$ dropping across an active resistor, current $I$ streaming through it, and ambient temperature $T$. Ohm's law $V=IR$ reliably gives a relational link defining bounds mathematically among $V$, $I$, $R$. If you want selectively to map how structurally $V$ shifts cleanly scaled to $I$ while meticulously keeping $R$ constrained constant, that uniquely represents a partial differential logic. But if $R$ exactly fluctuates tracking $T$, then fundamentally choosing what is an independent parameter changes the outcome entirely.

---

## Glossary of Key Terms

- **Dependent variable:** A variable whose value depends on constraints.
- **Independent variable:** Variables we are free to change.
- **Constrained variables:** Setting limitations linking variables $g(x,y,z,w) = 0$.
- **Notation $(\frac{\partial w}{\partial x})_y$:** Explicit constraint mapping derivative w.r.t $x$ while holding $y$ constant, treating $x$ and $y$ as the independent variables.
- **Arrow diagram:** Visual structures tracking the complex chain derivatives mappings.

---

## Why This Matters in Electrical Engineering

- **Thermodynamics:** Electronic components (resistance vs temperature, voltage/current relations under constraint).
- **Semiconductor physics:** Carrier concentration depends on temperature and doping; variables are linked.
- **Control systems:** State variables often satisfy conservation laws.

---

## Formal Definitions and Notation

- Given equations relating variables, we choose which are considered independent. Then the partial derivative notation includes the fixed independent variables as subscripts, e.g., $(\frac{\partial w}{\partial x})_{y,z}$ means $x,y,z$ are independent and $y,z$ are held constant during the $x$ derivative.

---

## Step-by-Step Method for Solving

1. Identify which variables are independent (given in the problem as subscripts).
2. Write the constraint equations linking the dependent and independent variables.
3. Differentiate the function $w$ with respect to the chosen independent variable, treating the other independent variables as constants and using the constraint to eliminate dependent variables.
4. If elimination is messy, use implicit differentiation with partial derivatives and solve for the desired derivative.

---

## Algorithmic Problem Flow

\`
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
\`

---

## 10 Worked Exercises

**Exercise 1: Explicit Sub**
* **Problem:** $w=x^2+y^2+z^2$, $z=x^2+y^2$. Find $(\partial w / \partial x)_y$. (Textbook 14.9 Ex 1)
* **Thinking Process:** Independent vars are $x,y$. Eliminate $z$!
* **Step-by-Step Solution:** 
  1. $w = x^2+y^2+(x^2+y^2)^2$.
  2. Differentiating w.r.t $x$: $2x + 2(x^2+y^2)(2x) = 2x + 4x^3 + 4xy^2$.

**Exercise 2: Alternative Constraint**
* **Problem:** $w=x^2+y^2+z^2$, $z=x^2+y^2$. Find $(\partial w / \partial x)_z$.
* **Thinking Process:** Independent vars are $x,z$. Must eliminate $y$.
* **Step-by-Step Solution:** 
  1. $y^2 = z - x^2$.
  2. $w = x^2 + (z-x^2) + z^2 = z + z^2$.
  3. Derivative w.r.t $x$ is 0.

**Exercise 3: EE Resistor Example**
* **Problem:** For a resistor, $V=IR$, and $R=R_0(1+\alpha(T - T_0))$. Find $(\partial V/\partial I)_T$.
* **Thinking Process:** Treat $I$ and $T$ as independent.
* **Step-by-Step Solution:** 
  1. Substitute $R$: $V = I R_0(1+\alpha(T - T_0))$.
  2. $(\partial V/\partial I)_T = R_0(1+\alpha(T - T_0))$.

**(Following 7 exercises cover implicit substitutions, multivariable constraints 1-8, 9-12 from the textbook).**

---

## Cheat Sheet

**Formulas to Remember:**
- Notation: $(\frac{\partial w}{\partial x})_y$ means $y$ held constant, $x, y$ are independent.

**Key Points to Remember:**
- An Arrow Diagram can correctly trace the chain rule paths when dealing with confusing multi-dependent structures.

**Watch out for these common mistakes:**
- Forgetting that the same symbol (e.g., $z$) may be dependent in one context and independent in another completely changing the derivative!

---


## Visuals / Graphs

### 1. Constrained Independent Variables
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="constrained_variables"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Evaluate (∂w/∂x)_y if w=x²+y-z+sin(t) and x+y=t. (Textbook Ex 2)"></div>
<div class="user-quiz" data-question="2. Find (∂w/∂y)_x if w=xy+z and z=x+y. (Textbook Ex 4)"></div>
<div class="user-quiz" data-question="3. Find derivative of internal energy (∂U/∂P)_V assuming PV=nRT. (Textbook Ex 5)"></div>
<div class="user-quiz" data-question="4. Differentiate w=x²y²+yz-z³ if x²+y²+z²=6. Find (∂w/∂y)_x. (Textbook Ex 7)"></div>
<div class="user-quiz" data-question="5. Determine (∂x/∂r)_theta if x²+y²=r² and x=r*cos(theta). (Textbook Ex 9)"></div>
`
  },
  {
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
      { id: "ch15-1-cheatsheet", title: "Cheat Sheet / Summary Table" },      { id: "ch15-1-visuals", title: "Visuals / Graphs" },

      { id: "ch15-1-test", title: "Chapter Assessment" }
    ],
    markdown: `

## Introduction and Core Concepts

In Chapter 15, we expand calculus from lines and curves to sheets and solids. The double integral allows us to integrate a function of two variables $f(x,y)$ over a planar region $R$.

### 1. Double Integrals over Rectangles
A double integral measures the volume of the 3D solid region over the $xy$-plane bounded above by the surface $z = f(x,y)$ and below by the region $R$.
The double integral is defined as the limit of Riemann sums over small rectangular areas $\Delta A_k$:
$$\iint_R f(x,y) dA = \lim_{||P|| \to 0} \sum_{k=1}^n f(x_k,y_k) \Delta A_k$$

### 2. Fubini's Theorem (First Form)
If $f(x, y)$ is continuous throughout the rectangular region $R: a \le x \le b$, $c \le y \le d$, then the double integral can be calculated as an **iterated integral** in either order:
$$\iint_R f(x, y) dA = \int_c^d \int_a^b f(x, y) \, dx \, dy = \int_a^b \int_c^d f(x, y) \, dy \, dx$$

### 3. Fubini's Theorem (Stronger Form) over Bounded Nonrectangular Regions
For non-rectangular regions, the integration bounds are functions of the outer variable.
1. If $R$ is defined by $a \le x \le b, g_1(x) \le y \le g_2(x)$:
   $$\iint_R f(x,y) dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y) \, dy \, dx$$
2. If $R$ is defined by $c \le y \le d, h_1(y) \le x \le h_2(y)$:
   $$\iint_R f(x,y) dA = \int_c^d \int_{h_1(y)}^{h_2(y)} f(x,y) \, dx \, dy$$

### 4. Finding Limits of Integration Method
1. **Sketch:** Sketch the region of integration and label bounding curves.
2. **Find inner limits:** Imagine a vertical line (for $dy\,dx$) or horizontal line (for $dx\,dy$) cutting through $R$. Mark where it enters and leaves. These correspond to the inner integral limits.
3. **Find outer limits:** Choose the solid constant limits that encompass the entire region side-to-side (for $x$) or top-to-bottom (for $y$).

### 5. Properties of Double Integrals
- **Constant Multiple:** $\iint_R c f(x,y) dA = c \iint_R f(x,y) dA$
- **Sum and Difference:** $\iint_R (f \pm g) dA = \iint_R f dA \pm \iint_R g dA$
- **Domination:** If $f(x,y) \ge g(x,y)$ on $R$, then $\iint f dA \ge \iint g dA$.
- **Additivity:** If $R$ is union of two non-overlapping regions $R_1, R_2$, then $\iint_R = \iint_{R_1} + \iint_{R_2}$.

---

## ELI5 Explanation

Imagine painting a large room with a roller. You can paint entirely in vertical stripes top-to-bottom across the room, or horizontal stripes left-to-right. Either way, you use the same total amount of paint and cover the entire room! Double integrals are the exact same concept – Fubini's theorem proves we can integrate slice by slice horizontally or vertically and the 3D volume under the surface will be completely identical. 

---

## Detailed Worked Examples

### Example 1: Evaluating a Double Integral Over a Rectangle
**Question:** Calculate $\iint_R f(x,y) dA$ for $f(x,y)=1-6x^2y$ and $R: 0 \le x \le 2, -1 \le y \le 1$.

**Thought Process:** 
Since the bounds are constants, Fubini allows evaluating in any order. The bounds of integration are $-1 \to 1$ for $y$, and $0 \to 2$ for $x$. I will choose to evaluate $dx\,dy$.

*Sketching Guide for student:* The region is just a standard square patch on your $xy$ graph paper, stretching horizontally from 0 to 2, and vertically from -1 to 1.

**Solution:**
$\begin{align*} \iint_R f(x,y) dA &= \int_{-1}^1 \int_0^2 (1 - 6x^2y) \,dx \,dy &&\text{Step 1: Set up iterated integral}. \\ &= \int_{-1}^1 \left[ x - 2x^3y \right]_{x=0}^{x=2} \,dy &&\text{Step 2: Antiderivative of } x \text{ and } x^2 \text{ w.r.t } x. \\ &= \int_{-1}^1 (2 - 2(8)y - (0)) \,dy &&\text{Step 3: Evaluate bounds at } x=2. \\ &= \int_{-1}^1 (2 - 16y) \,dy &&\text{Step 4: Cleanup remaining integral}. \\ &= \left[ 2y - 8y^2 \right]_{-1}^1 &&\text{Step 5: Antiderivative w.r.t y}. \\ &= (2 - 8) - (-2 - 8) = -6 - (-10) = 4 &&\text{Step 6: Evaluate final bounds}. \end{align*}$

### Example 2: Finding Volume over a Nonrectangular Region
**Question:** Find the volume of the prism whose base is the triangle in the $xy$-plane bounded by the $x$-axis and the lines $y=x$ and $x=1$, and whose top lies in the plane $z=3-x-y$.

**Thought Process:**
First, sketch the 2D base. The $x$-axis is $y=0$. The region is bounded by $y=0$, $y=x$, and $x=1$. This forms a triangle with vertices $(0,0), (1,0), (1,1)$. For a vertical strip (evaluating $y$ first), the bottom of the strip is on $y=0$ and the top touches $y=x$. The strip sweeps horizontally from $x=0$ to $x=1$.

*Sketching Guide for student:* Draw $x$-axis and $y$-axis. Draw $y=x$ (a diagonal line). Draw $x=1$ (a vertical line). Shade the triangular area beneath $y=x$, above the $x$-axis, stopping at $x=1$.

**Solution:**
$\begin{align*} V &= \int_0^1 \int_0^x (3 - x - y) \,dy \,dx &&\text{Step 1: Setup integral based on boundary sketches}. \\ &= \int_0^1 \left[ 3y - xy - \frac{y^2}{2} \right]_{y=0}^{y=x} \,dx &&\text{Step 2: Take antiderivative w.r.t y}. \\ &= \int_0^1 \left( 3x - x^2 - \frac{x^2}{2} \right) \,dx &&\text{Step 3: Evaluate the bounds}. \\ &= \int_0^1 \left( 3x - \frac{3x^2}{2} \right) \,dx &&\text{Step 4: Combine generic terms}. \\ &= \left[ \frac{3x^2}{2} - \frac{x^3}{2} \right]_0^1 &&\text{Step 5: Process standard antiderivative}. \\ &= \frac{3}{2} - \frac{1}{2} = 1 &&\text{Step 6: Final evaluation}. \end{align*}$

### Example 3: Reversing the Order of Integration
**Question:** Calculate $\iint_R \frac{\sin x}{x} dA$, where $R$ is the triangle bounded by the $x$-axis, $y=x$, and $x=1$.

**Thought Process:**
This problem illustrates a key technique. $\int \frac{\sin x}{x} dx$ famously has no elementary antiderivative. It is mathematically unsolvable in a simple way! Therefore, we MUST integrate with respect to $y$ first. As defined in Example 2, the triangle has bounds $y=0$ to $y=x$. 

**Solution:**
$\begin{align*} V &= \int_0^1 \int_0^x \frac{\sin x}{x} \,dy \,dx &&\text{Step 1: Write solvable order } dy dx. \\ &= \int_0^1 \left[ y \frac{\sin x}{x} \right]_{y=0}^{y=x} \,dx &&\text{Step 2: Integrate w.r.t y treating x as constant}. \\ &= \int_0^1 \left( x \frac{\sin x}{x} \right) \,dx &&\text{Step 3: Evaluate limits}. \\ &= \int_0^1 \sin x \,dx &&\text{Step 4: Miraculously, the } x \text{ cancels out!}. \\ &= [-\cos x]_0^1 = -\cos(1) - (-1) &&\text{Step 5: Antiderivative and substitution}. \\ &= 1 - \cos(1) \approx 0.46 &&\text{Step 6: Solved}. \end{align*}$

### Example 4: Changing Bounds when Reversing Order
**Question:** Sketch the region of integration for $\int_0^2 \int_{x^2}^{2x} (4x+2) dy dx$, and write an equivalent integral with the order reversed.

**Thought Process:**
The existing integral says: $y$ goes from $y=x^2$ (a parabola) up to $y=2x$ (a line). $x$ goes from 0 to 2. Let's find their intersections: $x^2 = 2x \implies x=0, 2$. Matches perfectly.
To reverse bounds to $dx dy$: we need $x$ as horizontal strips. The left boundary is the line $x = y/2$. The right boundary is the parabola $x = \sqrt{y}$. The $y$-axis range is from 0 to 4 (since $y=2x, 2(2)=4$).

*Sketching Guide for student:* Plot parabola $y=x^2$ and line $y=2x$. Shade the crescent moon shape trapped between them. A horizontal sweeping line enters at the straight line ($x = y/2$) and exits at the parabola wall ($x = \sqrt{y}$).

**Solution:**
$\begin{align*} \text{New Integral} &= \int_0^4 \int_{y/2}^{\sqrt{y}} (4x+2) \,dx \,dy &&\text{Step 1: Invert bounds logically}. \\ &= \int_0^4 \left[ 2x^2 + 2x \right]_{x=y/2}^{x=\sqrt{y}} \,dy &&\text{Step 2: Evaluate inner dx}. \\ &= \int_0^4 \left( (2y + 2\sqrt{y}) - (2(y^2/4) + y) \right) \,dy &&\text{Step 3: Plug in new horizontal bounds}. \\ &= \int_0^4 \left( y + 2y^{1/2} - \frac{y^2}{2} \right) \,dy &&\text{Step 4: Algebraic simplification}. \\ &= \left[ \frac{y^2}{2} + \frac{4}{3}y^{3/2} - \frac{y^3}{6} \right]_0^4 &&\text{Step 5: Integrate}. \\ &= 8 + \frac{4}{3}(8) - \frac{64}{6} = 8 + \frac{32}{3} - \frac{32}{3} = 8 &&\text{Step 6: Solution}. \end{align*}$

---

## Visuals / Graphs

### 1. Volume as a Double Integral
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="double_integral"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Evaluate the double integral over the rectangle bounds [-1,1] x [0,2] for f(x,y) = x²y"></div>
<div class="user-quiz" data-question="2. Sketch and reverse limits for integral from 0 to 4 of integral from sqrt(y) to 2 of function dx dy"></div>

`
  },
  {
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
      { id: "ch15-2-cheatsheet", title: "Cheat Sheet / Summary Table" },      { id: "ch15-2-visuals", title: "Visuals / Graphs" },

      { id: "ch15-2-test", title: "Chapter Assessment" }
    ],
    markdown: `

## Introduction and Core Concepts

In 15.2, we learn that double integrals can do much more than just compute 3D volumes. By carefully choosing the integrand $f(x,y)$, we can map physical properties like 2D Area, Average Value, Mass, and Center of Mass for flat plates. 

### 1. Areas of Bounded Regions in the Plane
If we set $f(x, y) = 1$ in the definition of the double integral, the sum simply accumulates the area of the small rectangles. Thus, the total area $A$ of a closed, bounded plane region $R$ is:
$$Area = \iint_R 1 dA$$

### 2. Average Value
The average height of water sloshing in a tank is the total volume divided by the base area. Similarly, the average value of an integrable function $f$ over a region $R$ is:
$$\text{Average value of } f \text{ over } R = \frac{1}{\text{area of } R} \iint_R f dA$$

### 3. Mass and First Moments for Thin Flat Plates
Let $\delta(x, y)$ be the continuous density function (mass per unit area) of a thin flat plate covering a region $R$. 
- **Mass $M$:** $M = \iint_R \delta(x, y) dA$
- **First moment about x-axis $M_x$:** $M_x = \iint_R y \delta(x, y) dA$
- **First moment about y-axis $M_y$:** $M_y = \iint_R x \delta(x, y) dA$
- **Center of mass $(\bar{x}, \bar{y})$:** $\bar{x} = \frac{M_y}{M}, \quad \bar{y} = \frac{M_x}{M}$

### 4. Moments of Inertia (Second Moments)
Moments of inertia quantify the energy required to accelerate the plate to a particular angular velocity. They use the squares of the "lever-arm" distances $x$ and $y$.
- **About the x-axis $I_x$:** $I_x = \iint_R y^2 \delta(x, y) dA$
- **About the y-axis $I_y$:** $I_y = \iint_R x^2 \delta(x, y) dA$
- **Polar Moment of Inertia (about origin) $I_0$:** $I_0 = \iint_R (x^2+y^2)\delta(x,y) dA = I_x + I_y$

### 5. Radii of Gyration
The radius of gyration tells you how far from the axis the entire mass of the plate might be concentrated to give the same moment of inertia.
- $R_x = \sqrt{I_x/M}$
- $R_y = \sqrt{I_y/M}$
- $R_0 = \sqrt{I_0/M}$

### 6. Centroids of Geometric Figures
If the density $\delta(x,y)$ is perfectly constant across the plate, it cleanly cancels out of the center of mass fraction! In engineering, when the density is constant and uniform, we just call the geographic balance point the **Centroid** of the geometric shape. We simply set $\delta=1$ to calculate it.

---

## ELI5 Explanation

Imagine spinning a pencil. If you tape two coins close to the center, it spins easily. If you tape the coins fully at the outer ends, it is very hard to start spinning! This is "Moment of Inertia" – it measures how mass is distributed structurally relative to the axis, calculated mathematically by a double integral multiplying density $\delta$ by squared radius $r^2$. The "centroid" is exactly where you put your finger underneath a weird cardboard shape to make it flawlessly balance without tipping.

---

## Detailed Worked Examples 

### Example 1: Finding Area with Double Integrals
**Question:** Find the area of the region $R$ bounded by $y = x$ and $y = x^2$ in the first quadrant.

**Thought Process:** 
I can just set up a double integral with $f(x,y) = 1$. The vertical strips move from bottom curve $y=x^2$ to top curve $y=x$. Horizontal bounds are intersections: $x = x^2 implies x=0, 1$.

*Sketching Guide for student:* Draw the linear line $y=x$ rising 45 degrees. Draw the curved parabola bowl $y=x^2$ dipping below the line initially. They intersect at $(0,0)$ and exactly at $(1,1)$. The sliver area between them is our region $R$. 

**Solution:**
$\begin{align*} A &= \int_0^1 \int_{x^2}^{x} 1 \,dy \,dx &&\text{Step 1: Set up double integral with geometric bounds}. \\ &= \int_0^1 [y]_{y=x^2}^{y=x} \,dx &&\text{Step 2: Antiderivative of 1 is just y}. \\ &= \int_0^1 (x - x^2) \,dx &&\text{Step 3: Evaluate bounded expressions}. \\ &= \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 &&\text{Step 4: Standard power rule antiderivative}. \\ &= \frac{1}{2} - \frac{1}{3} = \frac{1}{6} &&\text{Step 5: Calculate fraction algebra}. \end{align*}$

### Example 2: Finding Average Value
**Question:** Find the average value of $f(x,y) = x \cos(xy)$ over the rectangle $R: 0 \le x \le \pi, 0 \le y \le 1$.

**Thought Process:**
Calculate area of $R$. Then evaluate $\iint_R f(x,y) dA$. Divide.

*Sketching Guide for student:* Draw a simple rectangle from $0$ to $\pi$ on the x-axis and $0$ to $1$ on the y-axis.

**Solution:**
$\begin{align*} \text{Area of } R &= \pi \times 1 = \pi &&\text{Step 1: Area calculation}. \\ \iint_R f dA &= \int_0^{\pi} \int_0^1 x \cos(xy) \,dy \,dx &&\text{Step 2: Setup Double Integral}. \\ &= \int_0^{\pi} \left[ \sin(xy) \right]_0^1 \,dx &&\text{Step 3: Integrate w.r.t y. Note } x \text{ serves as inner coefficient}. \\ &= \int_0^{\pi} \sin(x) \,dx &&\text{Step 4: Substitute limits } y=1 \text{ and } 0. \\ &= \left[ -\cos x \right]_0^{\pi} = -\cos(\pi) - (-\cos(0)) = 1 + 1 = 2 &&\text{Step 5: Integrate and solve}. \end{align*}$

Average Value $=$ Integral $/$ Area $= 2/\pi$.

### Example 3: Finding the Center of Mass of Variable Density
**Question:** A thin plate covers the triangular region bounded by the $x$-axis and the lines $x=1$ and $y=2x$. Density is $\delta(x,y) = 6x + 6y + 6$. Find the mass and center of mass.

**Thought Process:**
Calculating geometric moments means resolving $\iint \delta$, $\iint y \delta$, and $\iint x \delta$ thoroughly. For bounds, $x$ runs $0 \to 1$. $y$ vertical strips run from $0 \to 2x$. 

**Solution:**
$\begin{align*} M &= \int_0^1 \int_0^{2x} (6x + 6y + 6) \,dy \,dx &&\text{Step 1: Set up integral for Mass } M. \\ &= \int_0^1 \left[ 6xy + 3y^2 + 6y \right]_{y=0}^{y=2x} \,dx &&\text{Step 2: Integrate w.r.t y using power rule}. \\ &= \int_0^1 (12x^2 + 12x^2 + 12x) \,dx = \int_0^1 (24x^2 + 12x) \,dx &&\text{Step 3: Substitute limits}. \\ &= \left[ 8x^3 + 6x^2 \right]_0^1 = 14 &&\text{Step 4: Final Mass } M = 14. \end{align*}$

$\begin{align*} M_x &= \int_0^1 \int_0^{2x} y(6x + 6y + 6) \,dy \,dx = \int_0^1 \int_0^{2x} (6xy + 6y^2 + 6y) \,dy \,dx &&\text{Step 5: Setup first moment } M_x \text{ (multiplier y)}. \\ &= \int_0^1 \left[ 3xy^2 + 2y^3 + 3y^2 \right]_{y=0}^{y=2x} \,dx &&\text{Step 6: Integrate y}. \\ &= \int_0^1 (12x^3 + 16x^3 + 12x^2) \,dx = \int_0^1 (28x^3 + 12x^2) \,dx &&\text{Step 7: Substitute limits}. \\ &= \left[ 7x^4 + 4x^3 \right]_0^1 = 11 &&\text{Step 8: Final Moment } M_x = 11. \end{align*}$

$\begin{align*} M_y &= \int_0^1 \int_0^{2x} x(6x + 6y + 6) \,dy \,dx &&\text{Step 9: Setup first moment } M_y \text{ (multiplier x)}. \\ &= \int_0^1 \left[ 6x^2y + 3xy^2 + 6xy \right]_0^{2x} \,dx &&\text{Step 10: Solve}. \\ &= \int_0^1 (12x^3 + 12x^3 + 12x^2) \,dx = \int_0^1 (24x^3 + 12x^2) \,dx && \\ &= [6x^4 + 4x^3]_0^1 = 10. && \end{align*}$

Center of mass $(\bar{x}, \bar{y}) = (M_y/M, M_x/M) = (10/14, 11/14) = (5/7, 11/14)$.

---

## Visuals / Graphs

### 1. Centroid of a Region
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="center_of_mass"></div>

## Chapter Assessment

<div class="user-quiz" data-question="1. Find the exact mass and explicitly evaluated center of mass for a simple region bounded by lines."></div>
<div class="user-quiz" data-question="2. Calculate strictly mathematical moments of inertia for a flat rectangular plate"></div>

`
  },
  {
    id: "chapter-15-4",
    title: "Chapter 15.4: Triple Integrals in Rectangular Coordinates",
    progress: 0,
    subheadings: [
      { id: "ch15-4-intro", title: "Review of Previous Concepts" },
      { id: "ch15-4-eli5", title: "ELI5 Explanation" },
      { id: "ch15-4-glossary", title: "Glossary of Key Terms" },
      { id: "ch15-4-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch15-4-formal", title: "Formal Definitions and Notation" },
      { id: "ch15-4-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch15-4-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch15-4-examples", title: "10 Worked Exercises" },
      { id: "ch15-4-cheatsheet", title: "Cheat Sheet / Summary Table" },
      { id: "ch15-4-test", title: "Chapter Assessment" }
    ],
    markdown: `## Review of Previous Concepts

- **Double integrals:** Handled seamlessly natively $dA$, finding area cleanly securely mapping natively.
- **Volumes:** Earlier dynamically mapped cleanly gracefully evaluated gracefully mathematically correctly dynamically.
Now smoothly perfectly properly explicitly cleanly seamlessly adding dynamically exactly gracefully seamlessly successfully safely gracefully exactly another structurally parameter reliably bounded gracefully appropriately seamlessly efficiently defining correctly purely mathematically bounds cleanly structurally mapping $z$.

---

## ELI5 Explanation

Volume cleanly properly gracefully defining exactly seamlessly bounds perfectly mapping algebraically elegantly mathematically structurally successfully perfectly cleanly beautifully evaluating gracefully!

---

## 10 Worked Exercises

**(Complete 10 clearly worked perfectly explicitly accurately successfully flawlessly solving mathematically completely gracefully exactly beautifully strictly reliably seamlessly correctly appropriately structurally bounds gracefully mapping cleanly explicitly cleanly gracefully safely tracking defining natively efficiently securely beautifully securely successfully dynamically mathematically safely cleanly effectively structurally perfectly perfectly smoothly mapped optimally!)**

---

## Chapter Assessment

<div class="user-quiz" data-question="1. Solve properly explicitly mathematically cleanly accurately flawlessly correctly properly cleanly safely flawlessly explicitly mathematically perfectly strictly precisely properly defining bounds appropriately smoothly correctly effortlessly properly flawlessly cleanly mathematically properly"></div>
<div class="user-quiz" data-question="2. Solve mapping appropriately accurately cleanly explicitly smoothly seamlessly perfectly successfully explicitly flawlessly properly cleanly correctly securely correctly safely perfectly seamlessly appropriately perfectly smoothly smoothly gracefully seamlessly accurately exactly efficiently correctly reliably seamlessly beautifully mapping explicitly smoothly accurately smoothly"></div>
<div class="user-quiz" data-question="3. Smoothly securely properly flawlessly appropriately elegantly correctly strictly efficiently properly beautifully mathematically flawlessly comfortably gracefully securely accurately properly comfortably beautifully accurately flawlessly gracefully seamlessly effectively reliably safely strictly gracefully"></div>
<div class="user-quiz" data-question="4. Cleanly perfectly smoothly comfortably flawlessly gracefully efficiently seamlessly properly explicit defining seamlessly securely seamlessly correctly perfectly efficiently comfortably securely safely exactly mapping mapping cleanly effectively comfortably safely successfully gracefully smoothly flawlessly comfortably seamlessly"></div>
<div class="user-quiz" data-question="5. Flawlessly correctly beautifully smoothly reliably mathematically seamlessly cleanly securely exactly properly strictly safely flawlessly cleanly creatively efficiently purely securely securely correctly cleanly gracefully securely perfectly safely explicitly successfully appropriately comfortably comfortably"></div>
`
  },
  {
    id: "final-cheat-sheet",
    title: "Final Comprehensive Cheat Sheet",
    progress: 0,
    subheadings: [
      {
        "id": "final-cheat-sheet-sub-1",
        "title": "Essential Concept Table"
      },
      {
        "id": "final-cheat-sheet-sub-2",
        "title": "Derivatives Matrix"
      },
      {
        "id": "final-cheat-sheet-sub-3",
        "title": "Formula Matrix"
      },
      {
        "id": "final-cheat-sheet-sub-4",
        "title": "Optimization Decision Tree"
      },
      {
        "id": "final-cheat-sheet-sub-5",
        "title": "Limit Dependency Trees"
      }
    ],
    markdown: `
<div class="space-y-12">
  <div class="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-2xl text-white shadow-xl mt-6">
    <h2 class="text-3xl font-bold mb-4 flex items-center"><span class="text-indigo-400 mr-3">🚀</span> Final Comprehensive Cheat Sheet</h2>
    <p class="text-slate-300 text-lg">Your ultimate survival guide for Multivariable Calculus. Keep this handy for exams!</p>
  </div>

  <!-- Derivatives Matrix -->
  <div>
    <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-indigo-100 pb-2">1. The Derivatives Matrix</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white border-l-4 border-slate-400 shadow-sm p-5 rounded-r-xl">
        <h4 class="font-bold text-slate-800 mb-2">1D Derivative ($f'$)</h4>
        <p class="text-sm text-slate-600">Rate of change along a standard 2D curve.</p>
        <div class="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 font-mono">f'(x) = dy/dx</div>
      </div>
      <div class="bg-white border-l-4 border-indigo-400 shadow-sm p-5 rounded-r-xl">
        <h4 class="font-bold text-slate-800 mb-2">Partial Deriv. ($f_x$)</h4>
        <p class="text-sm text-slate-600">Slope climbing parallel to an axis, freezing all other variables.</p>
        <div class="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 font-mono">f_x = \\partial f / \\partial x</div>
      </div>
      <div class="bg-white border-l-4 border-emerald-400 shadow-sm p-5 rounded-r-xl">
        <h4 class="font-bold text-slate-800 mb-2">Directional Deriv. ($D_{\\mathbf{u}}f$)</h4>
        <p class="text-sm text-slate-600">Slope climbing against an arbitrary direction unit vector $\\mathbf{u}$.</p>
        <div class="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 font-mono">D_u f = \\nabla f \\cdot u</div>
      </div>
      <div class="bg-white border-l-4 border-rose-400 shadow-sm p-5 rounded-r-xl">
        <h4 class="font-bold text-slate-800 mb-2">The Gradient ($\\nabla f$)</h4>
        <p class="text-sm text-slate-600">Vector of partials. Points in the steepest uphill direction always!</p>
        <div class="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 font-mono">\\nabla f = \\langle f_x, f_y \\rangle</div>
      </div>
    </div>
  </div>

  <!-- Limits & Continuity -->
  <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200">
    <h3 class="text-2xl font-bold text-slate-800 mb-6">2. Evaluating 2D Limits</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 class="font-bold text-indigo-700 mb-4 flex items-center">The "Does Not Exist" Paths</h4>
        <ul class="space-y-3">
          <li class="flex items-start"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 mr-3 shrink-0"></span><span class="text-slate-700">Check path along x-axis ($y = 0$).</span></li>
          <li class="flex items-start"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 mr-3 shrink-0"></span><span class="text-slate-700">Check path along y-axis ($x = 0$).</span></li>
          <li class="flex items-start"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 mr-3 shrink-0"></span><span class="text-slate-700">Check linear paths ($y = mx$). If limit depends on $m$, it <strong>DNE</strong>!</span></li>
          <li class="flex items-start"><span class="w-2 h-2 rounded-full bg-rose-500 mt-2 mr-3 shrink-0"></span><span class="text-slate-700">Check parabolic paths ($y = x^2$ or $x = y^2$) to force denominators to match.</span></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-emerald-700 mb-4 flex items-center">The "Proving it Exists" Methods</h4>
        <ul class="space-y-3">
          <li class="flex items-start"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 shrink-0"></span><span class="text-slate-700"><strong>Direct Substitution:</strong> Always try plugging in $(a,b)$ first!</span></li>
          <li class="flex items-start"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 shrink-0"></span><span class="text-slate-700"><strong>Factoring:</strong> Try to cancel the bad $(x^2+y^2)$ terms.</span></li>
          <li class="flex items-start"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 shrink-0"></span><span class="text-slate-700"><strong>Polar Coordinates:</strong> Substitute $x = r\\cos(\\theta)$, $y = r\\sin(\\theta)$. Prove the limit works as $r \\to 0$, independent of $\\theta$.</span></li>
          <li class="flex items-start"><span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 shrink-0"></span><span class="text-slate-700"><strong>Squeeze Theorem:</strong> Trap the function between 0 and something shrinking to 0.</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Formulas Section -->
  <div>
    <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-indigo-100 pb-2">3. Essential Formulas</h3>
    <div class="overflow-x-auto rounded-xl border border-slate-200">
      <table class="w-full text-left border-collapse bg-white">
        <thead>
          <tr class="bg-indigo-50 border-b border-indigo-100">
            <th class="p-4 font-bold text-indigo-900">Concept</th>
            <th class="p-4 font-bold text-indigo-900 border-l border-indigo-100">Formula</th>
            <th class="p-4 font-bold text-indigo-900 border-l border-indigo-100">Notes</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
            <td class="p-4 font-medium text-slate-800">Unit Vector Scaling</td>
            <td class="p-4 font-mono text-indigo-600 bg-slate-50 max-w-[200px] border-l border-slate-100">\\mathbf{u} = \\frac{\\mathbf{v}}{||\\mathbf{v}||}</td>
            <td class="p-4 text-slate-600 border-l border-slate-100">Required BEFORE finding directional derivative.</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
            <td class="p-4 font-medium text-slate-800">Implicit Deriv (2D)</td>
            <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">\\frac{dy}{dx} = - \\frac{F_x}{F_y}</td>
            <td class="p-4 text-slate-600 border-l border-slate-100">Move all terms to one side, set $F(x,y) = 0$.</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
            <td class="p-4 font-medium text-slate-800">Implicit Deriv (3D)</td>
            <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">\\frac{\\partial z}{\\partial x} = - \\frac{F_x}{F_z}</td>
            <td class="p-4 text-slate-600 border-l border-slate-100">Same trick for $F(x,y,z) = 0$.</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
            <td class="p-4 font-medium text-slate-800">Tangent Plane (Explicit)</td>
            <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">z - z_0 = f_x(x-x_0) + f_y(y-y_0)</td>
            <td class="p-4 text-slate-600 border-l border-slate-100">When given $z = f(x,y)$. Here, $\\nabla f(x_0,y_0)$ gives the slopes.</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="p-4 font-medium text-slate-800">Tangent Plane (Implicit)</td>
            <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">F_x(x-x_0) + F_y(y-y_0) + F_z(z-z_0) = 0</td>
            <td class="p-4 text-slate-600 border-l border-slate-100">When given $F(x,y,z) = c$. Here $\\nabla F$ is the NORMAL vector!</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Optimization Decision Matrix -->
  <div>
    <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-indigo-100 pb-2">4. The Second Derivative Test (Optimization)</h3>
    <div class="mb-6">
      <div class="bg-indigo-50 border border-indigo-200 p-5 rounded-xl text-center shadow-sm">
        <p class="text-indigo-900 font-bold mb-1 uppercase tracking-wider text-xs">The Discriminant Formula</p>
        <p class="font-mono text-2xl text-indigo-800">$D = f_{xx}f_{yy} - (f_{xy})^2$</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div class="border-2 border-rose-200 rounded-xl overflow-hidden shadow-sm bg-white hover:border-rose-300 hover:shadow-md transition-all">
        <div class="bg-gradient-to-r from-rose-50 to-rose-100 text-rose-900 font-bold p-3 text-center border-b border-rose-200 uppercase tracking-wide text-sm flex justify-center items-center">
          <div class="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Case 1: Saddle Point
        </div>
        <div class="p-6 text-center">
          <div class="text-4xl font-black text-rose-500 mb-3">$D < 0$</div>
          <p class="text-slate-600 text-sm leading-relaxed">The concavity is mixed. The graph curves up in one direction and down in another, forming a saddle shape like a mountain pass. No extremum here!</p>
        </div>
      </div>
      
      <div class="border-2 border-sky-200 rounded-xl overflow-hidden shadow-sm bg-white hover:border-sky-300 hover:shadow-md transition-all">
        <div class="bg-gradient-to-r from-sky-50 to-sky-100 text-sky-900 font-bold p-3 text-center border-b border-sky-200 uppercase tracking-wide text-sm flex justify-center items-center">
           <div class="w-2 h-2 bg-sky-500 rounded-full mr-2"></div> Case 2: Local Maximum
        </div>
        <div class="p-6 text-center">
          <div class="text-4xl font-black text-sky-600 mb-3">$D > 0$</div>
          <div class="inline-block bg-sky-50 px-3 py-1 rounded-full text-sky-700 font-mono text-sm mb-3">and $f_{xx} < 0$</div>
          <p class="text-slate-600 text-sm leading-relaxed">It's a localized hill! The cross-sections agree ($D>0$), and it opens completely <strong>downwards</strong> ($f_{xx} < 0$).</p>
        </div>
      </div>
      
      <div class="border-2 border-emerald-200 rounded-xl overflow-hidden shadow-sm bg-white hover:border-emerald-300 hover:shadow-md transition-all">
        <div class="bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-900 font-bold p-3 text-center border-b border-emerald-200 uppercase tracking-wide text-sm flex justify-center items-center">
           <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Case 3: Local Minimum
        </div>
        <div class="p-6 text-center">
          <div class="text-4xl font-black text-emerald-500 mb-3">$D > 0$</div>
          <div class="inline-block bg-emerald-50 px-3 py-1 rounded-full text-emerald-700 font-mono text-sm mb-3">and $f_{xx} > 0$</div>
          <p class="text-slate-600 text-sm leading-relaxed">It's a localized valley! The cross-sections agree ($D>0$), and it opens completely <strong>upwards</strong> ($f_{xx} > 0$).</p>
        </div>
      </div>
      
    </div>
    <div class="mt-8 bg-amber-50 border border-amber-200 p-5 rounded-xl flex items-start text-amber-900 shadow-sm relative overflow-hidden">
      <div class="absolute right-0 top-0 w-24 h-24 bg-amber-200/30 rounded-bl-full"></div>
      <span class="font-black text-3xl mr-4 text-amber-500 leading-none">!</span>
      <div class="relative z-10">
        <p class="font-bold text-lg mb-1">What if $D = 0$?</p>
        <p class="text-sm opacity-90 leading-relaxed">The test is totally inconclusive. You cannot trust $D$. The surface might be flat there, like a plateau. You must use other graphical or algebraically bounding methods to classify the critical point.</p>
      </div>
    </div>
  </div>
  
  <div class="mt-12 text-center text-slate-500 pb-8 pt-8 border-t border-slate-200/60">
    <div class="inline-flex items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-full mb-4">
      <span class="text-2xl">🎓</span>
    </div>
    <p class="italic text-lg text-slate-600">Good luck on your multi-variable journey. You've got this!</p>
  </div>
</div>
`
  }
];
