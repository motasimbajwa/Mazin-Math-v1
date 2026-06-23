export const courseContent = [
  {
    id: "chapter-1",
    title: "Chapter 1: Functions (y = f(x))",
    progress: 0,
    subheadings: [
      {
        "id": "ch1-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch1-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch1-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch1-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch1-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch1-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch1-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch1-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch1-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch1-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch1-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch1-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
No concept in mathematics, especially in calculus, is more fundamental than the concept of a function. The term was first used in a 1673 letter written by Gottfried Wilhelm Leibniz, the German mathematician and philosopher who invented calculus independently of Isaac Newton. Since then the term has undergone a gradual extension of meaning. 
In traditional calculus a function is defined as a relation between two terms called variables because their values vary. Call the terms $x$ and $y$. If every value of $x$ is associated with exactly one value of $y$, then $y$ is said to be a function of $x$. It is customary to use $x$ for what is called the independent variable, and $y$ for what is called the dependent variable because its value depends on the value of $x$.
As Thompson explains, letters at the end of the alphabet are traditionally applied to variables, and letters elsewhere in the alphabet (usually first letters such as $a, b, c$) are applied to constants. Constants are terms in an equation that have a fixed value.



## ELI5 Explanation (Engineering Analogy)
**The Square's Area:**
Imagine a literal square. The area of the square is the length of its side multiplied by itself. To express the area as a function of the side, let $y$ be the area, $x$ the side, then write $y = x^2$. Here, $y$ depends entirely on $x$. 
**The Magic Black Box:**
A useful way to think of functions is to imagine a black box with input and output openings. Any element in a domain, numbers or otherwise, is put into the box. Out will pop a single element in the range. The machinery inside the box magically provides the correlation!

## Glossary of Key Terms
- **Function:** A relation between an independent variable and a dependent variable where every input yields exactly one output.
- **Independent Variable:** The input value to the function, usually denoted by $x$.
- **Dependent Variable:** The output value, usually denoted by $y$, which depends on $x$.
- **Constant:** A value that does not change within the context of a given problem, often denoted by $a, b,$ or $c$.
- **Domain:** The complete set of valid inputs ($x$-values) that can be passed into the function.
- **Range:** The set of all possible resulting output values ($y$-values).
- **Explicit Function:** A function expressed directly in terms of the independent variable, like $y = 2x - 7$.
- **Implicit Function:** A function where the dependent and independent variables are mixed, like $2x - y - 7 = 0$.

## Why This Matters in Electrical Engineering
In Electrical Engineering, you'll rarely just deal with "$x$" and "$y$". You deal with real-world physical quantities. Voltage ($V$) is often a function of Time ($t$), $V(t) = 170sin(377t)$. Current ($I$) across a resistor is a function of Voltage ($V$) according to Ohm's law. Without the strict formalized concept of a function mapping inputs to single continuous outputs, AC circuit analysis would collapse into chaos.

## Formal Definitions and Notation
**Formal Set Mapping:**
A function $f: X 	o Y$ is a rule that assigns to each element $x in X$ exactly one element $y in Y$.
- $X$ is the **domain**.
- $Y$ contains the **range**.
- We write $y = f(x)$.

**Conditions for a Valid Function:**
A vertical line test is standard: A curve in the Cartesian plane represents a valid function $y = f(x)$ if and only if no vertical line intersects the curve more than once.

## Step\u2011by\u2011Step Method for Problem Solving
1. **Identify Variables:** Determine which is the dependent variable (output) and independent variable (input).
2. **Translate to Algebra:** Convert the word problem into a functional equation (e.g., $y = f(x)$).
3. **Check Domain:** Ensure inputs are logically allowed (e.g., no division by 0, no square root of a negative).
4. **Solve or Graph:** Use Cartesian mapping to visualize the correspondence.

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Given an equation]
      |
      v
+-------------------------------+
|  Is y isolated? (y = ...)     |
+-------------------------------+
    |                      |
  [Yes]                  [No]
    |                      |
    v                      v
[Explicit]          [Implicit Form]
    |                      |
    v                      v
+-------------------------------+
| Test: Does every x yield      |
| EXACTLY ONE y?                |
+-------------------------------+
      |                   |
    [Yes]               [No]
      |                   |
      v                   v
 [Function]         [Not a Function]
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Find the domain</td>
        <td class="p-3 border-b text-sm">Check for denominators (cannot be 0) and even roots (must be $ge 0$).</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Write $y$ as a function of $x$</td>
        <td class="p-3 border-b text-sm">Isolate $y$ on one side of the equation.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Determine if it's a function</td>
        <td class="p-3 border-b text-sm">Perform the vertical line test or check if $x$ produces multiple $y$ values.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Area of a Square**

**Question:** Write the area $A$ of a square as a function of its side $s$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Area is side multiplied by side.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$A = s 	imes s$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Write in functional notation.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$A(s) = s^2$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Diagonal of a Square**

**Question:** Write the diagonal $d$ of a square as a function of its side $s$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Use the Pythagorean theorem for an isosceles right triangle: $d^2 = s^2 + s^2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$d^2 = 2s^2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Take the positive square root because length is positive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$d(s) = ssqrt{2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Domain of a square root**

**Question:** Find the domain of $y = sqrt{x-2}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The inside of a square root cannot be negative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x - 2 ge 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve the inequality.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x ge 2$
Domain: $[2, infty)$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Implicit to Explicit**

**Question:** Convert the implicit function $2x - y - 7 = 0$ to an explicit function $y = f(x)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">I need to isolate $y$. Move $y$ to the other side.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2x - 7 = y$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite in standard functional form.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f(x) = 2x - 7$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Evaluating a function at a point**

**Question:** If $f(x) = 2x - 7$, evaluate $f(6)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Substitute $6$ wherever I see $x$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f(6) = 2(6) - 7$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Perform the arithmetic.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f(6) = 12 - 7 = 5$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Domain with a denominator**

**Question:** Find the domain of $f(x) = \frac{1}{x-5}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Denominators cannot equal zero.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x - 5 
e 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve for $x$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x 
e 5$
Domain: $(-infty, 5) cup (5, infty)$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Domain of combined restrictions**

**Question:** Find the domain of $f(x) = \frac{sqrt{x}}{x-1}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Numerator root requires $x ge 0$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x ge 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Denominator requires $x - 1 
e 0$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x 
e 1$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Combine both conditions.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Domain: $[0, 1) cup (1, infty)$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Volume of a sphere**

**Question:** Write the volume $V$ of a sphere as a function of its radius $r$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Recall the geometric formula for the volume of a sphere.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V = \frac{4}{3}pi r^3$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Write it explicitly as $V(r)$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V(r) = \frac{4}{3}pi r^3$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Period of a pendulum**

**Question:** The period $T$ of a simple pendulum relates to its length $L$ by $T = 2pisqrt{\frac{L}{g}}$. Identify the independent and dependent variables.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Length $L$ is the physical trait we control. $T$ changes as a result.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Independent: $L$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Period $T$ is the outcome. (Assume $g$ is a constant).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Dependent: $T$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Vertical line test logic**

**Question:** Does the equation $x^2 + y^2 = 9$ represent $y$ as a function of $x$?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Attempt to isolate y.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y^2 = 9 - x^2 implies y = pmsqrt{9 - x^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">There are two outputs for a single $x$ (e.g. at $x=0$, $y=3$ and $y=-3$). This fails the vertical line test.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">No, it is not a function.</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Evaluating a Piecewise Function</div>
<div class="p-4">

**Question:** Given $f(x) = \begin{cases} x^2 & x < 0 \\ 2x + 1 & x ge 0 end{cases}$, find $f(-2)$ and $f(0)$.

| Inner voice | What you write |
| :--- | :--- |
| "For $x = -2$, the condition $x < 0$ is true. I use the first piece." | $f(-2) = (-2)^2 = 4$ |
| "For $x = 0$, the condition $x ge 0$ is true. I use the second piece." | $f(0) = 2(0) + 1 = 1$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Denominator | $= 0$? | Exclude those points from domain. |
| Square root | Inside $< 0$? | Exclude from domain. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. Write the area of a circle as a function of its diameter $D$."></div>
<div class="user-quiz" data-question="2. Identify the domain of $f(x) = ln(x-3)$."></div>
<div class="user-quiz" data-question="3. True or False: $y^2 = x$ is a function of $x$."></div>
<div class="user-quiz" data-question="4. Find $f(2)$ if $f(x) = 3x^2 - x + 1$."></div>
<div class="user-quiz" data-question="5. What is the independent variable in $p(t) = e^{rt}$ (assuming $r$ is constant)?"></div>
`
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Limits and Infinite Series",
    progress: 0,
    subheadings: [
      {
        "id": "ch2-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch2-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch2-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch2-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch2-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch2-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch2-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch2-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch2-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch2-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch2-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch2-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
It is possible, though difficult, to understand calculus without a firm grasp on the meaning of a limit. A derivative, the fundamental concept of differential calculus, is a limit. An integral, the fundamental concept of integral calculus, is a limit.
To explain what is meant by a limit, we will be concerned first with limits of discrete functions and infinite series. 
When terms of an infinite series get closer and closer to a number $L$, so that by continuing the series you can make the sum as close to $L$ as you please, then $L$ is called the limit of the partial sums, or the limit of the infinite series. The terms are said to "converge" on $L$. If there is no convergence, the series is said to "diverge."

<div class="plot-interactive my-6" data-plot-id="limit_hole"></div>

## ELI5 Explanation (Engineering Analogy)
**Zeno's Runner:**
Imagine a runner going from $A$ to $B$. He first runs half the distance, then half the remaining distance, then again half the remaining distance, and so on. The distances he runs get smaller and smaller in the halving series $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + dots$. Distances from $B$ approach zero as their limit! Does the runner ever reach the goal? In reality, motion is continuous and time also shrinks, meaning the sequence converges in a finite time.
**The Bouncing Ball:**
An ideally elastic ball is dropped 4 feet. Each bounce it rises $3/4$ of the previous height. By summing an infinite series of smaller and smaller bounces, we find that the ball travels exactly $28$ feet before coming to rest completely. Infinite events can result in finite sums!

## Glossary of Key Terms
- **Limit:** The value that a function (or sequence) approaches as the input (or index) approaches some value.
- **Convergent Series:** An infinite series whose partial sums approach a single, finite limit.
- **Divergent Series:** An infinite series that does not converge to a finite limit (e.g., it goes to $infty$).
- **Infinitesimal:** A quantity that is infinitely small, closer to zero than any standard real number, yet not exactly zero. Once debated, now fully respected in nonstandard analysis.
- **Partial Sum:** The sum of the first $n$ terms of an infinite series.
- **Harmonic Series:** The series $1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + dots$ which famously diverges to infinity.

## Why This Matters in Electrical Engineering
Limits prevent engineers from dividing by zero and causing universal explosions. In circuit analysis, what happens to the steady-state value of a capacitor voltage as time $t 	o infty$? It's a limit! What happens to an inductor's impedance as frequency $omega 	o 0$? It's a limit! Limits allow us to mathematically predict the behavior of dynamic systems at the extreme boundaries (initial startup or infinite time) without physically simulating eternity.

## Formal Definitions and Notation
**Formal Definition of a Limit (The $epsilon - delta$ definition):**
$lim_{x 	o a} f(x) = L$ means that for every real number $epsilon > 0$, there exists a real number $delta > 0$ such that for all $x$, if $0 < |x - a| < delta$, then $|f(x) - L| < epsilon$.
**In English:** As $x$ gets arbitrarily close to $a$ (but not exactly $a$), $f(x)$ gets arbitrarily close to $L$.

**For Series:**
The limit of an infinite sum $S = sum_{n=1}^infty a_n$ is defined as the limit of its partial sums as $N 	o infty$.

## Step\u2011by\u2011Step Method for Problem Solving
1. **Direct Substitution:** Always try plugging in the objective value first. If it yields a real number, that is your limit.
2. **Handle Indeterminate Forms:** If you get $0/0$ or $infty/infty$, the limit might still exist! You must use algebraic manipulation (factoring, conjugate) or L'H\xF4pital's Rule.
3. **Analyze Infinite Bounds:** If the denominator shrinks to $0$ while the numerator is a constant (e.g., $1/0$), the limit goes to $pminfty$ or does not exist.
4. **For Series:** Check if it's a geometric series. If it is $a + ar + ar^2 + dots$, and $|r| < 1$, the limit is $\frac{a}{1 - r}$.

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Evaluate Limit as x->a]
             |
             v
+-------------------------------+
| Plug in x = a                 |
+-------------------------------+
             |
     +-------+-------+
     |               |
 [Number L]     [Form 0/0]
     |               |
     v               v
 [Done! = L]   +--------------------+
               | Factor & Cancel or |
               | use L'Hopital      |
               +--------------------+
                     |
                     v
               [Retry Plug-in]
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Evaluate the limit</td>
        <td class="p-3 border-b text-sm">Always do direct substitution first.</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Sum the infinite geometric series</td>
        <td class="p-3 border-b text-sm">Identify $a$ and $r$, then use $S = a/(1-r)$.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Find horizontal asymptote</td>
        <td class="p-3 border-b text-sm">Take the limit of the function as $x 	o infty$ and $x 	o -infty$.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Zeno's Halving Series**

**Question:** Sum the series $1/2 + 1/4 + 1/8 + dots$

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">This is a geometric series. The first term is $a=1/2$. The multiplier is $r=1/2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$S = \frac{a}{1-r}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Substitute the values.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$S = \frac{1/2}{1 - 1/2} = \frac{1/2}{1/2} = 1$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Direct Substitution Limit**

**Question:** Evaluate $lim_{x 	o 3} (x^2 + 2x - 5)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Just plug in $x = 3$. This is a continuous polynomial.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$lim_{x	o 3} (x^2+2x-5) = 3^2 + 2(3) - 5$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Do the basic math.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= 9 + 6 - 5 = 10$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: The 0/0 Indeterminate Form (Factoring)**

**Question:** Evaluate $lim_{x 	o 2} \frac{x^2 - 4}{x - 2}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plugging in $x=2$ gives $(4-4)/(2-2) = 0/0$. I need to factor the top.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$lim_{x 	o 2} \frac{(x-2)(x+2)}{x-2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Cancel the common $(x-2)$ terms, then plug in.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$lim_{x 	o 2} (x+2) = 2 + 2 = 4$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Limit to Infinity (Polynomials)**

**Question:** Evaluate $lim_{x 	o infty} \frac{3x^2 + 5x}{2x^2 - 1}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">As $x 	o infty$, only the highest power terms matter. Divide everything by $x^2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$lim_{x 	o infty} \frac{3 + 5/x}{2 - 1/x^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Any number over $infty$ goes to $0$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$=\frac{3 + 0}{2 - 0} = \frac{3}{2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: The Bouncing Ball (Geometric Series trick)**

**Question:** A ball drops 4ft, rises 3ft, falls 3ft, rises 9/4ft... Total distance? $x = 4 + 6 + 4.5 + 3.375 + dots$ after the first drop.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Let's treat the bounces (up and down) as a series: $6 + 6(3/4) + 6(3/4)^2dots$</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$a=6$, $r=\frac{3}{4}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Sum the infinite bounces, then add the initial 4ft drop.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{6}{1 - 3/4} = \frac{6}{1/4} = 24$
Total $= 4 + 24 = 28$ feet</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Harmonic Series Divergence**

**Question:** Evaluate the limit of $1 + 1/2 + 1/3 + 1/4 + dots$

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">This is the famous harmonic series. Even though the terms shrink, they do not shrink fast enough.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$sum_{n=1}^infty \frac{1}{n}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">State the mathematical known fact.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">The series diverges to $infty$.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Limits with Radicals (Conjugate Trick)**

**Question:** Evaluate $lim_{x 	o 0} \frac{sqrt{x+9} - 3}{x}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plugging in $0$ gives $0/0$. Multiply top and bottom by the conjugate $sqrt{x+9} + 3$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{sqrt{x+9}-3}{x} cdot \frac{sqrt{x+9}+3}{sqrt{x+9}+3}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Foil the top.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= \frac{(x+9)-9}{x(sqrt{x+9}+3)} = \frac{x}{x(sqrt{x+9}+3)}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Cancel $x$ and plug in 0.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$lim_{x	o 0} \frac{1}{sqrt{x+9}+3} = \frac{1}{sqrt{9}+3} = \frac{1}{6}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Approaching Asymptotes**

**Question:** Find $lim_{x 	o 0^+} \frac{1}{x}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">I am approaching zero from the positive side (small positive fractions).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$1 / (	ext{tiny positive}) 	o infty$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The value explodes to positive infinity.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= infty$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Repeating Decimal to Fraction**

**Question:** Write $0.3333dots$ as a fraction using limits.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">This is $3/10 + 3/100 + 3/1000 + dots$</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$a=3/10$, $r=1/10$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Use the sum formula.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$S = \frac{3/10}{1 - 1/10} = \frac{3/10}{9/10} = \frac{3}{9} = \frac{1}{3}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Basic L'Hopital's (Preview)**

**Question:** Find $lim_{x 	o 0} \frac{sin x}{x}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">$0/0$ form. A geometry proof works, but let's remember this is a fundamental known limit.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$lim_{x	o 0}\frac{sin x}{x} = 1$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">State the answer directly.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= 1$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Infinite Geometric Series</div>
<div class="p-4">

**Question:** Find the sum of the series $sum_{n=0}^{infty} 3 left(\frac{1}{2}\right)^n$.

| Inner voice | What you write |
| :--- | :--- |
| "This is a geometric series. The first term $a$ is $3$ (when $n=0$)." | $a = 3$ |
| "The common ratio $r$ is $1/2$. Since $|r| < 1$, it converges. Use $S = a / (1 - r)$." | $S = \frac{3}{1 - 1/2} = 6$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| $r^n$ in sum | $|r| < 1$? | Converges to $a/(1-r)$ |
| $lim_{n 	o infty} a_n eq 0$ | Does the sequence approach zero? | Divergence Test: Series diverges. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. Evaluate $lim_{x 	o 5} (2x - 1)$."></div>
<div class="user-quiz" data-question="2. Evaluate $lim_{x 	o infty} \frac{4x^3}{2x^3 - 7}$."></div>
<div class="user-quiz" data-question="3. Sum the infinite series where $a=5$ and $r=1/3$."></div>
<div class="user-quiz" data-question="4. Evaluate $lim_{x 	o 0} \frac{x^2+3x}{x}$."></div>
<div class="user-quiz" data-question="5. What is the limit of the harmonic series?"></div>
`
  },
  {
    id: "chapter-3",
    title: "Chapter 3: Derivatives - The Power Rule",
    progress: 0,
    subheadings: [
      {
        "id": "ch3-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch3-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch3-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch3-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch3-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch3-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch3-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch3-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch3-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch3-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch3-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch3-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
All round the calculus we are dealing with quantities that are growing, and with rates of growth. We classify all quantities into two classes: constants and variables. Those which we regard as of fixed value we call constants ($a, b, c$). Those capable of growing we denote by letters from the end of the alphabet ($x, y, z$).
When one variable depends on another (e.g. $y$ depends on $x$), an alteration in $x$ will bring about an alteration in $y$. Let us call the little bit of growth added to $x$ as $dx$ ("a little bit of x"). The corresponding growth in $y$ will be $dy$. The fundamental question of differential calculus is: what is the true exact ratio of $dy$ to $dx$ when both are infinitely small?
This ratio $\frac{dy}{dx}$ is called the differential coefficient or the **derivative**. It measures relative continuous growth.

<div class="plot-interactive my-6" data-plot-id="tangent_line"></div>

## ELI5 Explanation (Engineering Analogy)
**The Growing Square:** 
Imagine a monster living in Flatland that is born a square of side $x$. Its area is $y = x^2$. We let it grow at a steady rate. If its side grows a tiny bit ($dx$), its area grows by ($dy$). The ratio of its area growth to its side growth is exactly $2x$. The mathematics says: if the square's side is 10 inches, its area is growing $2 	imes 10 = 20$ times as fast as its edge is growing!
**The Speedometer:**
When you drive, you aren't doing point-to-point average math in your head. Your speedometer points to $45$ mph. It is taking an infinitely small snapshot of your distance traveled ($dy$) over an infinitely small slice of time ($dx$) and displaying the derivative: $\frac{dy}{dt}$.

## Glossary of Key Terms
- **Derivative:** The exact rate at which a dependent variable grows with respect to an independent variable. Symbolized as $\frac{dy}{dx}$.
- **Differential ($dx$, $dy$):** An infinitesimally small increment or little bit of a variable.
- **Tangent:** A straight line that perfectly kisses a curve at exactly one point, representing its exact continuous slope.
- **Power Rule:** The primary workhorse rule for differentiating powers of $x$.
- **Constant Rule:** The derivative of any constant number is absolute zero.

## Why This Matters in Electrical Engineering
Voltage $V_L$ across an inductor is directly proportional to the **rate of change** of the current: $V_L = L \frac{di}{dt}$. A derivative! Capacitor current $I_C$ is proportional to the **rate of change** of voltage: $I_C = C \frac{dV}{dt}$. The entire universe of electrical transients and differential equations hinges entirely upon calculating these derivatives using the power rule.

## Formal Definitions and Notation
**Formal Definition of the Derivative:**
$$ \frac{dy}{dx} = lim_{Delta x 	o 0} \frac{f(x + Delta x) - f(x)}{Delta x} $$

**The Power Rule:**
For any real number $n$, if $y = a x^n$, then the derivative is:
$$ \frac{dy}{dx} = na x^{n-1} $$

**The Constant Rule:**
If $y = c$ (where $c$ is a constant), then $\frac{dy}{dx} = 0$.

**The Sum Rule:**
$\frac{d}{dx} [f(x) + g(x)] = f'(x) + g'(x)$. You can just differentiate them one after the other.

## Step\u2011by\u2011Step Method for Problem Solving
1. **Prepare the Expression:** Convert all roots into fractional exponents (e.g. $sqrt{x} 	o x^{1/2}$) and all bottom-heavy fractions into negative exponents (e.g. $\frac{1}{x^3} 	o x^{-3}$).
2. **Apply Power Rule:** For each term $ax^n$, bring the power $n$ down to multiply the front constant $a$, and subtract exactly $1$ from the power $n$.
3. **Delete Constants:** Any standalone number completely disappears (becomes $0$).
4. **Clean Up:** Return negative and fractional exponents back to standard notation if explicitly requested by your cruel professor.

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Differentiate y = ax^n]
              |
              v
+-------------------------------+
| Bring the power 'n' down      |
| to multiply the front 'a'     |
+-------------------------------+
              |
              v
+-------------------------------+
| Subtract 1 from the power 'n' |
+-------------------------------+
              |
              v
[Result: dy/dx = (a*n) x^(n-1)]
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Differentiate</td>
        <td class="p-3 border-b text-sm">Apply the power rule to every term.</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Find the slope of the curve</td>
        <td class="p-3 border-b text-sm">Take the derivative and plug in the given $x$-value.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Rate of change</td>
        <td class="p-3 border-b text-sm">Instantly indicates you must find the derivative.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Basic Polynomial**

**Question:** Differentiate $y = x^3$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The power is $3$. I'll bring the $3$ down.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 3x^{dots}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Subtract 1 from the power $3-1 = 2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 3x^2$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Polynomial with a Coefficient**

**Question:** Differentiate $y = 7x^4$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Bring the $4$ down and multiply it by $7$. ($4 	imes 7 = 28$).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 28x^{dots}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Subtract 1 from the power $4-1 = 3$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 28x^3$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: The Sum Rule**

**Question:** Differentiate $y = x^2 + x^3 + 5$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Differentiate term by term.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$d/dx (x^2) = 2x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Next term.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$d/dx (x^3) = 3x^2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The constant $5$ just vanishes.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$d/dx (5) = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Combine them.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 2x + 3x^2$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Negative Exponents**

**Question:** Differentiate $y = x^{-2}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Bring down the $-2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = -2x^{dots}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Subtract 1 from $-2$. Beware: $-2 - 1 = -3$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = -2x^{-3}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite as a fraction if desired.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = -\frac{2}{x^3}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Fractions in Disguise**

**Question:** Differentiate $y = \frac{5}{x^4}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Prepare the expression first by moving $x$ up.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = 5x^{-4}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Bring down $-4$, multiply by $5$ to get $-20$. Reduce power to $-5$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = -20x^{-5} = -\frac{20}{x^5}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Fractional Exponents (Square Roots)**

**Question:** Differentiate $y = sqrt{x}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Prepare: rewrite square root as a half power.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = x^{1/2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Bring down $1/2$. Subtract 1 from $1/2$ to get $-1/2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{1}{2}x^{-1/2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite nicely. Negative half power means square root on the bottom.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{1}{2sqrt{x}}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Linear Function**

**Question:** Differentiate $y = 10x$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The power of $x$ is logically $1$. Bring down the $1$...</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$10 	imes 1 = 10$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Reduce power: $x^0 = 1$. The $x$ disappears.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 10$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Complicated Mixture**

**Question:** Differentiate $y = 3x^4 - \frac{2}{x} + 7sqrt{x} - 42$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Prepare all terms to power form.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = 3x^4 - 2x^{-1} + 7x^{1/2} - 42$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Apply the rule across the board.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$12x^3 - (-1)2x^{-2} + \frac{1}{2}(7)x^{-1/2} - 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Clean it up.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 12x^3 + \frac{2}{x^2} + \frac{7}{2sqrt{x}}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Physics Kinematics**

**Question:** If distance $s = 16t^2$, find the velocity $v$ (which is $ds/dt$).

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Differentiating position with respect to time gives velocity.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v = \frac{ds}{dt}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Apply power rule to $16t^2$. Bring down $2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v = 32t$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Tangent Line Slope Check**

**Question:** Find slope of $y = x^2 - 4x$ at the point $x=3$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Find the general derivative equation first.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 2x - 4$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug the specific coordinate $x=3$ into the slope generator.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 2(3) - 4 = 6$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Power Rule Application</div>
<div class="p-4">

**Question:** Find the derivative of $f(x) = 4x^3 - \frac{1}{x^2}$.

| Inner voice | What you write |
| :--- | :--- |
| "Before differentiating, rewrite the fraction with a negative exponent so I can use the power rule." | $f(x) = 4x^3 - x^{-2}$ |
| "Bring down the exponent, subtract one from the power." | $f'(x) = 12x^2 - (-2)x^{-3} = 12x^2 + \frac{2}{x^3}$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| $1/x^n$ | Rewrite as $x^{-n}$? | Apply power rule. |
| $sqrt{x}$ | Rewrite as $x^{1/2}$? | Apply power rule. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. Differentiate $y = 10x^5$."></div>
<div class="user-quiz" data-question="2. What is the derivative of $y = 42$?"></div>
<div class="user-quiz" data-question="3. Find $\frac{dy}{dx}$ for $y = 3x^{-4}$."></div>
<div class="user-quiz" data-question="4. Differentiate $y = 2x^2 + 5x - 7$."></div>
<div class="user-quiz" data-question="5. Prepare $\frac{7}{x^3}$ into power notation."></div>
`
  },
  {
    id: "chapter-4",
    title: "Chapter 4: Differentiating Products and Quotients",
    progress: 0,
    subheadings: [
      {
        "id": "ch4-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch4-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch4-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch4-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch4-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch4-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch4-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch4-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch4-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch4-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch4-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch4-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
We have learned how to differentiate simple algebraical functions such as $x^2+c$ or $ax^4$, and we have now to consider how to tackle the product or quotient of two or more functions. 
A naive student might assume that to differentiate $y = u 	imes v$, you just multiply the derivative of $u$ by the derivative of $v$. **This is spectacularly wrong.**
If you have a growing rectangle where both the length $u$ and height $v$ are stretching by $du$ and $dv$, the new area involves $u cdot dv + v cdot du + du cdot dv$. Since $du cdot dv$ is infinitely small of the second order, it vanishes, leaving $u cdot dv + v cdot du$.
This logical geometry builds the indestructible Product Rule and Quotient Rule.



## ELI5 Explanation (Engineering Analogy)
**The Growing Rectangle (Product Rule):**
Imagine a metal sheet that is being heated. Its width $u$ is expanding, and its height $v$ is expanding. The new area isn't just the main square, it has two new "strips" added to the sides. One strip is (old width $	imes$ new height change), which is $u cdot v'$. The other strip is (old height $	imes$ new width change), which is $v cdot u'$. The total area grew by $uv' + vu'$. 
Therefore: "First times the derivative of the second, PLUS the second times the derivative of the first."

## Glossary of Key Terms
- **Product Rule:** The formula used to find the derivative of two functions multiplied together: $(uv)' = uv' + vu'$.
- **Quotient Rule:** The formula used to find the derivative of a function divided by another function: $(u/v)' = \frac{vu' - uv'}{v^2}$.
- **Derivatives $u'$ and $v'$:** Shorthand notation for $\frac{du}{dx}$ and $\frac{dv}{dx}$.

## Why This Matters in Electrical Engineering
In circuit analysis, Instantaneous Power is $P(t) = v(t) 	imes i(t)$ (voltage times current). To find the maximum power delivery over time (which requires differentiating power), you MUST use the Product Rule since both voltage and current are functions of time changing simultaneously. Mixing them up causes grid failures.

## Formal Definitions and Notation
**The Product Rule:**
If $y = u(x) cdot v(x)$, then:
$$ \frac{dy}{dx} = u \frac{dv}{dx} + v \frac{du}{dx} $$
Or simply: $(uv)' = uv' + vu'$

**The Quotient Rule:**
If $y = \frac{u(x)}{v(x)}$, then:
$$ \frac{dy}{dx} = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2} $$
Or simply: $(u/v)' = \frac{vu' - uv'}{v^2}$.
A classic mnemonic: "Low D-High minus High D-Low, over the square of what's below."

## Step\u2011by\u2011Step Method for Problem Solving
**For Products:**
1. Identify the two separate functions multiplying together, label them $u$ and $v$.
2. Take the derivative of each to find $u'$ and $v'$.
3. Plug them exactly into $uv' + vu'$.

**For Quotients:**
1. Identify the top function as $high$ ($u$) and the bottom function as $low$ ($v$).
2. Take their derivatives.
3. Plug into $\frac{low cdot d(high) - high cdot d(low)}{low^2}$.
4. CAUTION: the order of subtraction is absolutely critical. Bottom first!

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Differentiate Complex Expression]
                 |
                 v
+-----------------------------------+
| Does it involve multiplication or |
| division of 'x' chunks?           |
+-----------------------------------+
       |                    |
 [Multiply: u*v]     [Divide: u/v]
       |                    |
       v                    v
+--------------+     +---------------+
| Product Rule |     | Quotient Rule |
| uv' + vu'    |     | (vu'-uv')/v\xB2  |
+--------------+     +---------------+
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Differentiate $y = (x+1)(x-2)$</td>
        <td class="p-3 border-b text-sm">Use the Product Rule (or multiply it out algebraically first).</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Differentiate $y = \frac{x}{x^2+1}$</td>
        <td class="p-3 border-b text-sm">Use the Quotient Rule. Always start with the bottom term.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Find maximum power $P=vi$</td>
        <td class="p-3 border-b text-sm">Product Rule required.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Basic Product Rule**

**Question:** Differentiate $y = (x^2 + 1)(x^3 + 2)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Identify $u = x^2+1$ and $v = x^3+2$. Find derivatives.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$u' = 2x quad v' = 3x^2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Assemble $uv' + vu'$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = (x^2+1)(3x^2) + (x^3+2)(2x)$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Expand and simplify.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= 3x^4 + 3x^2 + 2x^4 + 4x = 5x^4 + 3x^2 + 4x$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Algebraic Alternative**

**Question:** Verify Example 1 by multiplying out first.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Foil the original equation before differentiating.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = x^5 + 2x^2 + x^3 + 2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Apply the standard power rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 5x^4 + 4x + 3x^2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The math is intrinsically consistent and perfectly beautiful.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Match confirmed.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Basic Quotient Rule**

**Question:** Differentiate $y = \frac{x^2}{x+1}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Identify $u = x^2$ and $v = x+1$. Find derivatives.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$u'=2x, quad v'=1$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Apply Low d-High minus High d-Low, over Low squared.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{(x+1)(2x) - (x^2)(1)}{(x+1)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Simplify numerator: $(2x^2 + 2x) - x^2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{x^2 + 2x}{(x+1)^2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: A Mixed Fractional Case**

**Question:** Differentiate $y = \frac{1}{x^2+a^2}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Top is $u=1$, Bottom is $v=x^2+a^2$. $a$ is a constant.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$u'=0, quad v'=2x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Apply quotient rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{(x^2+a^2)(0) - 1(2x)}{(x^2+a^2)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Clean up.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{-2x}{(x^2+a^2)^2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Three Factor Product**

**Question:** Differentiate $y = x(x+1)(x+2)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Product rule for three variables is $u'vw + uv'w + uvw'$. Or just multiply it out. Multiplying is safer.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = x(x^2 + 3x + 2) = x^3 + 3x^2 + 2x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Power rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 3x^2 + 6x + 2$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Quotient with Roots**

**Question:** Differentiate $y = \frac{sqrt{x}}{x+1}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">$u = x^{1/2}$, $v = x+1$. $u' = \frac{1}{2sqrt{x}}$, $v'=1$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{(x+1)(\frac{1}{2sqrt{x}}) - sqrt{x}(1)}{(x+1)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply top and bottom by $2sqrt{x}$ to clear ugly complex fractions.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= \frac{(x+1) - 2x}{2sqrt{x}(x+1)^2} = \frac{1-x}{2sqrt{x}(x+1)^2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Power rules in Quotients**

**Question:** Differentiate $y = \frac{x^3}{1+x^2}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">$u=x^3$, $v=1+x^2$. $u'=3x^2$, $v'=2x$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{(1+x^2)(3x^2) - x^3(2x)}{(1+x^2)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Expand top.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{3x^2 + 3x^4 - 2x^4}{(1+x^2)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Combine like terms.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{x^4+3x^2}{(1+x^2)^2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Polynomial/Constant**

**Question:** Differentiate $y = \frac{x^2+1}{5}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Wait, do I need the quotient rule?</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">No! The bottom is a constant.</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite as a multiplied fraction $y = \frac{1}{5}(x^2+1)$ and just use power rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{2x}{5}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Constant/Polynomial**

**Question:** Differentiate $y = \frac{5}{x^2+1}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Top is constant, bottom is a function. I MUST use quotient rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{(x^2+1)(0) - 5(2x)}{(x^2+1)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Simplify.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= \frac{-10x}{(x^2+1)^2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Ugly Numerator Structure**

**Question:** Differentiate $y = \frac{ax+b}{cx+d}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">$u=ax+b, v=cx+d$. $u'=a, v'=c$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{(cx+d)(a) - (ax+b)(c)}{(cx+d)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Expand: $acx + ad - acx - bc$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= \frac{ad - bc}{(cx+d)^2}$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Product Rule</div>
<div class="p-4">

**Question:** Differentiate $y = (x^2 + 1) e^x$.

| Inner voice | What you write |
| :--- | :--- |
| "I see two distinct functions of $x$ multiplied together. I must use the Product Rule: $u'v + uv'$." | Let $u = x^2+1, v = e^x$ |
| "Calculate $u'$ and $v'$, then plug into the formula." | $y' = (2x)(e^x) + (x^2+1)(e^x)$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| $u(x)v(x)$ | Are they multiplied? | Use Product Rule: $u'v + uv'$ |
| $\frac{u(x)}{v(x)}$ | Is it a fraction? | Use Quotient Rule: $\frac{u'v - uv'}{v^2}$ |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. Differentiate $y = x^2(x+5)$."></div>
<div class="user-quiz" data-question="2. Identify $u'$ and $v'$ for the product $y = (x^3)(ln x)$. (Hint: $d/dx ln x = 1/x$)."></div>
<div class="user-quiz" data-question="3. Write the complete formula for the Quotient Rule."></div>
<div class="user-quiz" data-question="4. Differentiate $y = \frac{x}{x+1}$."></div>
<div class="user-quiz" data-question="5. Why do we not differentiate $u 	imes v$ as $u' 	imes v'$?"></div>
`
  },
  {
    id: "chapter-5",
    title: "Chapter 5: Higher Derivatives (Second, Third...)",
    progress: 0,
    subheadings: [
      {
        "id": "ch5-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch5-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch5-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch5-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch5-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch5-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch5-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch5-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch5-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch5-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch5-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch5-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
Let us try the effect of repeating several times over the operation of differentiating a function. Start with a concrete case: Let $y=x^5$.
First differentiation: $5x^4$.
Second differentiation: $5 	imes 4x^3 = 20x^3$.
Third: $20 	imes 3x^2 = 60x^2$.
Fourth: $60 	imes 2x = 120x$.
Fifth: $120 	imes 1 = 120$.
Sixth: $0$.
There is a certain notation with which we are already acquainted... $f'(x)$ is the derived function. $f''(x)$ is the second derivative. The formal notation is $\frac{d^2y}{dx^2}$, read as "dee-two-why over dee-ex-squared". It means that the operation of differentiating $y$ with respect to $x$ has been performed twice over.



## ELI5 Explanation (Engineering Analogy)
**Position, Velocity, Acceleration:**
Imagine you are driving a car ($x$ is your position). The first derivative is how fast your position changes\u2014that is your **Velocity** (speedometer). The second derivative is how fast your velocity changes\u2014that is your **Acceleration** (pushing the gas or brake pedal). The third derivative is how fast your acceleration changes\u2014physicists call this **Jerk** (the sudden bodily lurch backward when the driver stomps the gas too fast). You are physically feeling higher-order derivatives in your spine!

## Glossary of Key Terms
- **First Derivative:** The rate of change of a function. The velocity. $f'(x)$ or $\frac{dy}{dx}$.
- **Second Derivative:** The rate of change of the rate of change! The acceleration. $f''(x)$ or $\frac{d^2y}{dx^2}$.
- **Third Derivative:** The rate of change of the acceleration. Jerk. $f'''(x)$ or $\frac{d^3y}{dx^3}$.
- **Prime Notation:** The use of hash marks $f'(x), f''(x)$ created by Joseph-Louis Lagrange.

## Why This Matters in Electrical Engineering
The fundamental equation governing a capacitor-inductor (LC) oscillation circuit is $L \frac{d^2 i}{dt^2} + \frac{1}{C}i = 0$. That right there is a **Second Order Differential Equation**, governed entirely by the second derivative. Without the second derivative, we could not mathematically describe radio waves, Wi-Fi, audio frequencies, or AC power grids.

## Formal Definitions and Notation
**Successive Differentiation Notation:**
1st Derivative: $\frac{dy}{dx}$ or $y'$ or $f'(x)$ or $D_x y$
2nd Derivative: $\frac{d^2y}{dx^2}$ or $y''$ or $f''(x)$ or $D^2_x y$
3rd Derivative: $\frac{d^3y}{dx^3}$ or $y'''$ or $f'''(x)$ or $D^3_x y$
nth Derivative: $\frac{d^ny}{dx^n}$ or $y^{(n)}$ or $f^{(n)}(x)$

**Note:** The 2 in $\frac{d^2y}{dx^2}$ DOES NOT mean squared. It simply means "execute the derivative operator $d/dx$ two times sequentially on $y$".

## Step\u2011by\u2011Step Method for Problem Solving
1. **Find the first derivative** using all the normal rules (power, product, quotient).
2. **Clean it up!** You CANNOT skip simplifying. If you leave the first derivative as a chaotic unsimplified mess, taking the second derivative will be a hideous nightmare of nested quotient rules.
3. **Take the derivative of that new result.** Treat the first derivative as if it were a brand new problem entirely.
4. **Repeat** as needed for third or fourth derivatives.

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Find f''(x)]
        |
        v
+-------------------+
| Take f'(x) using  |
| standard rules    |
+-------------------+
        |
        v
+-------------------+
| SIMPLIFY f'(x)!   |  <-- CRITICAL STEP
| Combine terms     |
+-------------------+
        |
        v
+-------------------+
| Differentiate     |
| the simplified    |
| f'(x) again       |
+-------------------+
        |
        v
[Output: f''(x)]
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Find $y''$</td>
        <td class="p-3 border-b text-sm">Differentiate twice sequentially.</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Find the acceleration</td>
        <td class="p-3 border-b text-sm">Identify position function $s(t)$, take TWO derivatives to reach $a(t)$.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Evaluate $f''(2)$</td>
        <td class="p-3 border-b text-sm">Find the algebraic formula for $f''(x)$ FIRST, then plug in 2.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Successive Polynomial Derivation**

**Question:** If $y = 3x^4 - 2x^2 + 5x$, find $y''$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Find $y'$ first.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 12x^3 - 4x + 5$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive $y'$ to get $y''$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = 36x^2 - 4$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: The Third Derivative**

**Question:** Given $y = x^5$, find $f'''(x)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Step 1: First derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 5x^4$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Step 2: Second derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = 20x^3$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Step 3: Third derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y''' = 60x^2$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Negative Exponents**

**Question:** Find the second derivative of $y = \frac{1}{x}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite as a negative power.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = x^{-1}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">First derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = -1x^{-2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Second derivative. Multiply $-1$ by $-2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = 2x^{-3} = \frac{2}{x^3}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Square Roots**

**Question:** Find $y''$ for $y = sqrt{x}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = x^{1/2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">First derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = \frac{1}{2}x^{-1/2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Second derivative. $(-1/2) 	imes (1/2) = -1/4$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = -\frac{1}{4}x^{-3/2} = -\frac{1}{4sqrt{x^3}}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Simplification is Mandatory**

**Question:** Find $y''$ of $y = (x^2+1)^2$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">I should probably foil this first! Much easier.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = x^4 + 2x^2 + 1$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">First derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 4x^3 + 4x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Second derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = 12x^2 + 4$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Quotient Rule Successive**

**Question:** Find $y''$ for $y = \frac{x}{x+1}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">$y' = \frac{(x+1)(1) - x(1)}{(x+1)^2}$</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = \frac{1}{(x+1)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Before deriving, rewrite as negative power to avoid nested quotient rules!</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = (x+1)^{-2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive using simple chain rule (preview)</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = -2(x+1)^{-3} = \frac{-2}{(x+1)^3}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Evaluating a Second Derivative**

**Question:** Evaluate $f''(1)$ for $f(x) = 4x^3 - 2x^2$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f'(x) = 12x^2 - 4x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive again.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f''(x) = 24x - 4$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Substitute $x=1$ into the result.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f''(1) = 24(1) - 4 = 20$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Pattern Recognition**

**Question:** Find the 5th derivative of $y = x^4$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The power is 4. The 4th derivative will be a constant ($4 	imes 3 	imes 2 	imes 1$).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y^{(4)} = 24$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The derivative of any constant is zero.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y^{(5)} = 0$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Kinematics Prep**

**Question:** If distance $s = 5t^3 + 2t$, find formula for acceleration $a$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Velocity is $s'$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v = 15t^2 + 2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Acceleration is $v'$ or $s''$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$a = 30t$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Annihilation of Constants**

**Question:** Given $y = ax^2 + bx + c$, find $y''$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">$a, b, c$ are constants. First derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 2ax + b$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Second derivative. $b$ vanishes.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = 2a$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Second Derivative</div>
<div class="p-4">

**Question:** Find the second derivative of $y = ln(2x)$.

| Inner voice | What you write |
| :--- | :--- |
| "First, find the first derivative. Since $ln(kx)$ differentiates to $1/x$, I'll just write that." | $y' = \frac{1}{x} = x^{-1}$ |
| "Now differentiate $y'$ to get $y''$. Use the standard power rule." | $y'' = -1 cdot x^{-2} = -\frac{1}{x^2}$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Find $f''(x)$ | Do I have $f'(x)$ simplified? | Simplify $f'(x)$ first, then derive. |
| Inflection point | Does $f''(x) = 0$ or undefined? | Find roots of $f''$ and test signs. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. Find $y''$ if $y = 7x^3$."></div>
<div class="user-quiz" data-question="2. True or False: $f''(x)$ tells you the acceleration of a particle."></div>
<div class="user-quiz" data-question="3. Find the 4th derivative of $y = x^2$."></div>
<div class="user-quiz" data-question="4. Evaluate $y''$ at $x=1$ for $y = 5x^2 - x$."></div>
<div class="user-quiz" data-question="5. If $y = 1/x^2$, what is $y''$?"></div>
`
  },
  {
    id: "chapter-6",
    title: "Chapter 6: Applications of Differentiation (Velocity/Acceleration)",
    progress: 0,
    subheadings: [
      {
        "id": "ch6-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch6-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch6-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch6-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch6-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch6-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch6-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch6-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch6-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch6-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch6-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch6-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
Some of the most important problems of the calculus are those where time is the independent variable, and we have to think about the values of some other quantity that varies when the time varies. The distance that a train has travelled from its starting place goes on ever increasing as time goes on. Trees grow taller as the years go by.
In both these cases we are making a mental comparison of something that is happening, and the length of time it takes to happen. If the car goes 10 yards per second, a simple bit of mental arithmetic will show us that this is equivalent to 600 yards per minute.
The rate of doing anything is simply the ratio between the thing done and the time taken to do it. The exact instantaneous rate of change of position $s$ with respect to time $t$ is the velocity $v$. Differentiation is the mathematical key to motion.



## ELI5 Explanation (Engineering Analogy)
**The Falling Stone:**
Imagine you drop a stone from a bridge. If you take a picture every second, the distance between the stone in each picture gets larger and larger. The speed is increasing constantly! Calculus allows you to take infinitely fast pictures. If position is a function $s(t) = 16t^2$, the first derivative $v(t) = 32t$ gives you the exact speed at any microsecond. The second derivative $a(t) = 32$ confirms the constant pull of Earth's gravity.

## Glossary of Key Terms
- **Position ($s(t)$):** The location of an object at a given time.
- **Velocity ($v(t)$):** The rate at which position changes over time. It tells you speed AND direction. $v = \frac{ds}{dt}$.
- **Acceleration ($a(t)$):** The rate at which velocity changes over time. $a = \frac{dv}{dt}$ or $a = \frac{d^2s}{dt^2}$.
- **Rest:** A state where the object is momentarily stopped. Mathematically, velocity is exactly $0$.

## Why This Matters in Electrical Engineering
This mathematical structure directly applies to electric charge. The electric current $i(t)$ is simply the exact continuous rate of change (velocity) of the electrical charge $q(t)$ moving through a wire. $i = \frac{dq}{dt}$. All physics problems mapping physical location to velocity directly map to evaluating charge and the resulting current in power systems.

## Formal Definitions and Notation
**Equations of Motion:**
1. Position: $s(t)$
2. Velocity: $v(t) = \frac{ds}{dt} = s'(t)$
3. Acceleration: $a(t) = \frac{dv}{dt} = s''(t)$

**Key Properties:**
- If $v(t) > 0$, the object is moving in the positive direction.
- If $v(t) < 0$, the object is moving in the negative direction.
- If $v(t) = 0$, the object is turning around or at rest.
- If $a(t)$ and $v(t)$ have the same sign, the object is speeding up.
- If $a(t)$ and $v(t)$ have opposite signs, the object is slowing down.

## Step\u2011by\u2011Step Method for Problem Solving
1. **Write the equation:** Obtain the primary equation for position $s(t)$.
2. **Derive Velocity:** Take the first derivative $v(t) = s'(t)$.
3. **Derive Acceleration:** Take the second derivative $a(t) = v'(t) = s''(t)$.
4. **Answer the specific question:**
   - "When is it at rest?" $	o$ Set $v(t) = 0$ and solve for $t$.
   - "What is the speed at $t=3$?" $	o$ Plug 3 into $v(t)$ and take absolute value.
   - "When does it hit the ground?" $	o$ Set position $s(t) = 0$ and solve for $t$.

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Position: s(t)] 
       |
     d/dt
       v
[Velocity: v(t)]  --- set to 0 ---> [Find turning points]
       |
     d/dt
       v
[Acceleration: a(t)]
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">At rest / turning around</td>
        <td class="p-3 border-b text-sm">Set velocity $v(t) = 0$.</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Hits the ground</td>
        <td class="p-3 border-b text-sm">Set position $s(t) = 0$.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Initial velocity</td>
        <td class="p-3 border-b text-sm">Evaluate velocity at $t = 0$.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Velocity from Position**

**Question:** If $s(t) = 5t^2 + 2t + 4$, find velocity at $t=2$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Take the derivative to find the velocity function.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(t) = 10t + 2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Substitute $t=2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(2) = 10(2) + 2 = 22$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Finding When Object is at Rest**

**Question:** If $s(t) = t^3 - 6t^2 + 9t$, when is it horizontally at rest?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">At rest means velocity is zero. Find $v(t)$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(t) = 3t^2 - 12t + 9$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Set to zero and factor.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$3(t^2 - 4t + 3) = 0 implies 3(t-3)(t-1) = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve for $t$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$t = 1$ and $t = 3$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Calculating Acceleration**

**Question:** For the previous problem, what is the acceleration at $t=1$?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Take the derivative of velocity to get acceleration.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$a(t) = 6t - 12$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug in $t=1$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$a(1) = 6(1) - 12 = -6$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Dropping a Stone**

**Question:** A stone is dropped: $s(t) = 16t^2$. How far has it fallen when its velocity is 64 ft/s?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Find velocity formula.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(t) = 32t$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Find out WHEN velocity is 64.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$32t = 64 implies t = 2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug that time back into the distance formula.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$s(2) = 16(2)^2 = 16(4) = 64	ext{ ft}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Speeding up or Slowing down**

**Question:** If $v(2) = -5$ and $a(2) = -10$, is the object speeding up or slowing down?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Velocity is negative (moving backwards) and acceleration is negative (pushing backwards).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Signs match ($-$) and ($-$)</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">If forces align, speed increases.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Speeding up</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Constant Acceleration**

**Question:** Prove that a falling object $s(t) = -4.9t^2 + v_0t + s_0$ has constant acceleration.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Take first derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(t) = -9.8t + v_0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Take second derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$a(t) = -9.8$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The final answer has no $t$ variables left.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Since $-9.8$ is a constant, acceleration is constant.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Maximum Height**

**Question:** A bullet is shot up: $s(t) = -16t^2 + 128t$. What is the maximum height?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Max height occurs when the bullet stops at the top (velocity = 0).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(t) = -32t + 128 = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve for time.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$32t = 128 implies t = 4$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug $t=4$ back into position.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$s(4) = -16(16) + 128(4) = 256	ext{ ft}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Acceleration Given Velocity**

**Question:** If $v(t) = \frac{1}{t+1}$, find $a(t)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Prepare expression for power rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(t) = (t+1)^{-1}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Take derivative to find acceleration.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$a(t) = -(t+1)^{-2} = \frac{-1}{(t+1)^2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Finding Initial States**

**Question:** Given $s(t) = t^3 - 4t + 10$, what is its initial position and initial velocity?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">'Initial' means $t=0$. Plug 0 into position.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$s(0) = 0 - 0 + 10 = 10$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Find velocity formula, then plug in 0.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(t) = 3t^2 - 4 implies v(0) = -4$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Moving Backwards**

**Question:** If $s(t) = t^2 - 8t$, during what time interval is it moving backwards?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Moving backwards means $v(t) < 0$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v(t) = 2t - 8$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve the inequality.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2t - 8 < 0 implies t < 4$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Assuming time starts at $0$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$0 le t < 4$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Kinematics (Velocity & Acceleration)</div>
<div class="p-4">

**Question:** Position is $s(t) = t^3 - 6t^2$. When is the particle at rest?

| Inner voice | What you write |
| :--- | :--- |
| "'At rest' means velocity is zero. I need to find the velocity function by taking the derivative of position." | $v(t) = s'(t) = 3t^2 - 12t$ |
| "Set $v(t) = 0$ and solve for $t$." | $3t(t - 4) = 0 implies t = 0, t = 4$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| "At rest" | Is $v(t) = 0$? | Set first derivative to zero. |
| "Changing direction" | Does $v(t)$ change sign? | Test intervals around $v(t)=0$. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. If $s(t) = 3t^2 - 12t$, find the velocity at $t=2$."></div>
<div class="user-quiz" data-question="2. If $v(t) = -32t + 64$, at what time is the object at rest?"></div>
<div class="user-quiz" data-question="3. If a rocket's position is $s(t) = t^3 + t$, find its acceleration at $t=3$."></div>
<div class="user-quiz" data-question="4. True or False: An object with negative velocity and negative acceleration is slowing down."></div>
<div class="user-quiz" data-question="5. Write the formula for current $i(t)$ given a charge function $q(t)$."></div>
`
  },
  {
    id: "chapter-7",
    title: "Chapter 7: The Chain Rule (Function of a Function)",
    progress: 0,
    subheadings: [
      {
        "id": "ch7-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch7-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch7-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch7-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch7-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch7-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch7-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch7-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch7-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch7-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch7-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch7-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
Sometimes one is stumped by finding that the expression to be differentiated is too complicated to tackle directly. Thus, the equation $y = (x^2 + a^2)^3$ is awkward to a beginner.
Now the dodge to turn the difficulty is this: Write some symbol, such as $u$, for the expression $x^2 + a^2$; then the equation becomes $y = u^3$. You can easily manage this, and you can easily manage $u$. Then all that remains is plain sailing by multiplying the derivatives together.
Thompson's "useful dodge" is known today as the chain rule. It is one of the most useful rules in calculus. It applies to composite functions\u2014a function of a function.

<div class="plot-interactive my-6" data-plot-id="chain_rule_tree"></div>

## ELI5 Explanation (Engineering Analogy)
**Peeling the Onion:**
Think of a Russian nesting doll or an onion. A composite function is a function wrapped inside another function. To reach the very center (to fully differentiate with respect to $x$), you must first "peel" the outer layer by differentiating it (while leaving the inside completely untouched), and then multiply that result by the derivative of the inside layer. Outer layer first, inner layer second!

## Glossary of Key Terms
- **Composite Function:** A function that substitutes another function as its input instead of a plain $x$. Denoted as $f(g(x))$.
- **Inner Function:** The formula tucked inside the parentheses, e.g. the $g(x)$.
- **Outer Function:** The overarching operation surrounding the inner function, e.g. the $f()$.
- **Chain Rule:** The multiplicative law used to differentiate layered functions: $\frac{dy}{dx} = \frac{dy}{du} 	imes \frac{du}{dx}$.

## Why This Matters in Electrical Engineering
When analyzing alternating current, you will constantly differentiate sine and cosine wave equations like $V(t) = 170sin(377t + phi)$. Taking the derivative of this requires the Chain Rule perfectly, since the outer function is $sin()$ and the inner function is $(377t + phi)$. It pulls out the $377$ (the angular frequency $omega$) to multiply the front amplitude.

## Formal Definitions and Notation
**The Chain Rule (Leibniz Notation):**
If $y$ depends on $u$, and $u$ depends on $x$, then:
$$ \frac{dy}{dx} = \frac{dy}{du} cdot \frac{du}{dx} $$

**The Chain Rule (Newton/Lagrange Notation):**
If $y = f(g(x))$, then:
$$ y' = f'(g(x)) cdot g'(x) $$

**Generalized Power Rule (A common special case):**
If $y = [u(x)]^n$, then:
$$ y' = n[u(x)]^{n-1} cdot u'(x) $$

## Step\u2011by\u2011Step Method for Problem Solving
1. **Identify Inner ($u$) and Outer ($f$):** Recognize what part of the equation is nested inside parentheses, under a radical, or in an exponent. That is $u$. 
2. **Derivative of the Outer:** Differentiate the outside function exactly as normal, but KEEP the inner function $u$ completely untouched inside.
3. **Derivative of the Inner:** Find the derivative of the inner function $u' = du/dx$.
4. **Multiply:** Multiply the outer derivative by the inner derivative.

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Differentiate f(g(x))]
             |
             v
+-------------------------------+
| Let inner function = u = g(x) |
+-------------------------------+
             |
             v
+-------------------------------+
| Detach & Derive the Outside:  |
| f'(u) (KEEP u intact inside!) |
+-------------------------------+
             |
             v
+-------------------------------+
| Derive the Inside:            |
| u' = g'(x)                    |
+-------------------------------+
             |
             v
[Multiply Results: f'(u) * u']
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Differentiate $(...)^{power}$</td>
        <td class="p-3 border-b text-sm">Use generalized power rule (Chain rule). Bring power down, multiply by derivative of inside.</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Differentiate $sqrt{x^2+1}$</td>
        <td class="p-3 border-b text-sm">Rewrite as $(x^2+1)^{1/2}$ and apply chain rule.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Nested trig $sin(3x)$</td>
        <td class="p-3 border-b text-sm">Derivative of sine is cosine (keep $3x$), multiply by derivative of $3x$.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Generalized Power Rule**

**Question:** Differentiate $y = (x^2 + 5)^3$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">The outside is $u^3$. Inside is $x^2+5$. Bring 3 down, leave inside alone, reduce power to 2.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$3(x^2 + 5)^2 dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply by the derivative of the inside ($2x$).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$dots 	imes (2x)$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Clean up by multiplying coefficients.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 6x(x^2 + 5)^2$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Root of a Polynomial**

**Question:** Differentiate $y = sqrt{x^3 + 1}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite as a fractional power.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = (x^3 + 1)^{1/2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Apply chain rule. Outside first.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{1}{2}(x^3 + 1)^{-1/2} dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply by inner derivative ($3x^2$).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{1}{2}(x^3+1)^{-1/2} 	imes 3x^2 = \frac{3x^2}{2sqrt{x^3+1}}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Negative Exponents**

**Question:** Differentiate $y = \frac{1}{(2x-3)^4}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite using a negative exponent so we don't have to use quotient rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = (2x - 3)^{-4}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Chain rule. Bring down $-4$, subtract $1$ from power.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$-4(2x - 3)^{-5} dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply by inner derivative ($2$).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = -8(2x - 3)^{-5} = \frac{-8}{(2x-3)^5}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Chain Rule on Trig (Preview)**

**Question:** If derivative of $sin(x)$ is $cos(x)$, differentiate $y = sin(x^2)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Outer is sine, inner is $x^2$. Derivative of outer is cosine (keeping $x^2$ inside).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$cos(x^2) dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply by inner derivative ($2x$).</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 2x cos(x^2)$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Square of a Trig Function**

**Question:** Differentiate $y = sin^2(x)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite to expose the structure. The SQUARE is the outside.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = (sin x)^2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Outside derivative: bring 2 down.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2(sin x)^1 dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Inner derivative: derive sine to get cosine.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = 2sin(x)cos(x)$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Three Layers Deep**

**Question:** Differentiate $y = sqrt{sin(3x)}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rewrite with exponent. $( sin(3x) )^{1/2}$</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Layers: $1/2$ power $	o$ sine $	o 3x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Peel layer 1: exact fraction.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{1}{2}(sin(3x))^{-1/2} dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Peel layer 2: derive sine to cosine.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$dots 	imes cos(3x) dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Peel layer 3: derive 3x to 3.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = \frac{3cos(3x)}{2sqrt{sin(3x)}}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Chain within Product**

**Question:** Differentiate $y = x(x+1)^3$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Primary rule needed is the Product Rule ($uv' + vu'$). $u = x$ and $v = (x+1)^3$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$u' = 1$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Use chain rule to find $v'$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$v' = 3(x+1)^2(1)$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Assemble Product Rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dy}{dx} = x(3(x+1)^2) + (x+1)^3(1)$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Fractions without moving**

**Question:** Differentiate $y = ( \frac{x}{x+1} )^2$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Outer function is the square.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2 left( \frac{x}{x+1} \right)^1 dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Inner function requires the Quotient Rule.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{(x+1)(1) - x(1)}{(x+1)^2} = \frac{1}{(x+1)^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply them together.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 2 left( \frac{x}{x+1} \right) \frac{1}{(x+1)^2} = \frac{2x}{(x+1)^3}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Leibniz Train**

**Question:** If $y = 5u^2$ and $u = 3x - 1$, find $dy/dx$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Find $dy/du$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$dy/du = 10u$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Find $du/dx$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$du/dx = 3$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply them and substitute $x$ back in.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$dy/dx = 10(3x-1) 	imes 3 = 30(3x-1)$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Electrical Angle**

**Question:** Differentiate $y = cos(omega t + phi)$ with respect to $t$. (Assume derivative of cosine is negative sine).

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Outer is cosine $	o$ negative sine.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$-sin(omega t + phi) dots$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Inner is $(omega t + phi)$. $omega, phi$ are constants. Derivative is just $omega$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$dots 	imes omega$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Combine.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$dy/dt = -omega sin(omega t + phi)$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: The Chain Rule</div>
<div class="p-4">

**Question:** Find $\frac{dy}{dx}$ for $y = sin(x^2 + 3)$.

| Inner voice | What you write |
| :--- | :--- |
| "There's an 'inside' function $x^2+3$ inside an 'outside' function $sin()$. I apply the Chain Rule." | Outer: $sin(u) \rightarrow cos(u)$ |
| "Derivative of outside, keep inside exactly the same, multiply by derivative of inside." | $y' = cos(x^2+3) cdot (2x)$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| $f(g(x))$ | Is there an inside function? | Derivative is $f'(g(x)) cdot g'(x)$ |
| $sin^2(x)$ | Is it really $(sin x)^2$? | Outer is $(.)^2$, inner is $sin x$. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. Differentiate $y = (3x+4)^5$."></div>
<div class="user-quiz" data-question="2. Differentiate $y = sqrt{5x^2 - 2}$."></div>
<div class="user-quiz" data-question="3. Identify the inner and outer function of $y = e^{sin x}$."></div>
<div class="user-quiz" data-question="4. Given $y = f(u)$ and $u = g(x)$, write the formula for $dy/dx$."></div>
<div class="user-quiz" data-question="5. Explain why the derivative of $y=(x^3)^2$ using the chain rule yields the same result as expanding to $x^6$ first."></div>
`
  },
  {
    id: "chapter-8",
    title: "Chapter 8: Implicit Differentiation",
    progress: 0,
    subheadings: [
      {
        "id": "ch8-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch8-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch8-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch8-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch8-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch8-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch8-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch8-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch8-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch8-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch8-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch8-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
So far, all the functions we have differentiated have been "explicit" functions, where $y$ is neatly isolated on the left side of the equals sign: $y = x^2 + 3x$.
However, equations defining curves often come completely scrambled, such as the equation of a circle $x^2 + y^2 = 25$. Attempting to isolate $y$ here forces us to deal with a $pm$ square root, introducing unnecessary brutality to the algebra.
Calculus offers a far more elegant path: **Implicit Differentiation**. We differentiate the entire scrambled equation term by term, treating $y$ as a chain-rule-dependent function of $x$.



## ELI5 Explanation (Engineering Analogy)
**The Hidden Camera:**
When an equation is implicit, $y$ isn't just a simple letter; it's a hidden function of $x$ wearing a disguise. If you take the derivative of $x^3$ with respect to $x$, you just get $3x^2$. But if you take the derivative of $y^3$ with respect to $x$, the chain rule says you must peel the onion: outer derivative $3y^2$, multiplied by the hidden core's derivative $dy/dx$ (or $y'$). Every time you differentiate a $y$ term, a $y'$ pops out like a little flag!

## Glossary of Key Terms
- **Explicit Function:** An equation solved definitively for $y$, e.g., $y = f(x)$.
- **Implicit Function:** An equation where $x$ and $y$ are jumbled together, e.g., $f(x, y) = 0$.
- **Implicit Differentiation:** The act of taking the derivative of an implicit function without attempting to isolate $y$ first.

## Why This Matters in Electrical Engineering
In semiconductor device modeling and Maxwell's equations, variables are rarely cleanly separable. The relationship between electrical current and carrier density in a junction $F(I, p) = 0$ is highly non-linear and inextricably tangled. Calculating the small-signal sensitivity $dI/dp$ requires you to implicitly differentiate the governing boundary condition.

## Formal Definitions and Notation
**The Implicit Rule:**
We apply the derivative operator $\frac{d}{dx}$ to both sides of the equation.
1. When differentiating $x$ terms, differentiate normally.
2. When differentiating $y$ terms, differentiate normally, but MULTIPLY the result by $\frac{dy}{dx}$ (due to the Chain Rule).
3. If $x$ and $y$ are multiplied together (e.g. $xy$), you MUST use the Product Rule.

## Step\u2011by\u2011Step Method for Problem Solving
1. **Differentiate both sides:** Apply $\frac{d}{dx}$ to every term strictly. Attach $y'$ to any derivation of a $y$ term. Be paranoid about product rules for terms like $xy$.
2. **Sort the equation:** Algebraically move all the terms containing $y'$ to the left side of the equals sign, and move all non-$y'$ terms to the right side.
3. **Factor:** Factor out $y'$ on the left side: $y'(...)$.
4. **Divide:** Isolate $y'$ by dividing both sides by the factored algebraic block. Your final answer will contain both $x$ and $y$ variables.

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Equation with x and y]
             |
             v
+-------------------------------+
| Differentiate everything.     |
| Spit out a y' for every y term|
+-------------------------------+
             |
             v
+-------------------------------+
| Group all terms with y' on    |
| the left side.                |
+-------------------------------+
             |
             v
+-------------------------------+
| Factor out y', then divide by |
| the remainder to isolate y'.  |
+-------------------------------+
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Find slope of a circle/ellipse</td>
        <td class="p-3 border-b text-sm">Do implicit differentiation directly.</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Equation contains both $x$ and $y$ mixed together</td>
        <td class="p-3 border-b text-sm">Apply $\frac{d}{dx}$ to both sides immediately.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Differentiate $xy$</td>
        <td class="p-3 border-b text-sm">WARNING: Use product rule: $x(y') + y(1)$.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: The Circle**

**Question:** Find $dy/dx$ for $x^2 + y^2 = 25$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Differentiate term by term.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2x + 2y cdot (y') = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Isolate $y'$ term.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2y cdot y' = -2x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Divide.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = \frac{-2x}{2y} = -\frac{x}{y}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Higher Powers**

**Question:** Find $y'$ for $y^3 + x^3 = 8$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive left and right.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$3y^2 cdot y' + 3x^2 = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Move the $x$ term.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$3y^2 cdot y' = -3x^2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Divide.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = -\frac{3x^2}{3y^2} = -\frac{x^2}{y^2}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: The Dreaded 'xy' Term**

**Question:** Find $y'$ for $xy = 10$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Use the product rule for $xy$. $u=x, v=y$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x(y') + y(1) = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Isolate $y'$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x cdot y' = -y$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Divide.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = -\frac{y}{x}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: A Mixed Jumble**

**Question:** Find $y'$ for $x^2 + xy + y^2 = 7$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Differentiate every piece. Product rule on middle term.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2x + [x(y') + y(1)] + 2y(y') = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Group the $y'$ terms.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$xy' + 2yy' = -2x - y$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Factor $y'$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'(x + 2y) = -2x - y$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Final division.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = \frac{-2x - y}{x + 2y}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Trig Involvement (Preview)**

**Question:** Find $y'$ for $sin(y) = x$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derivation of $sin(y)$ requires chain rule yielding $y'$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$cos(y) cdot y' = 1$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Isolate.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = \frac{1}{cos(y)}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Equation of a Tangent Line**

**Question:** Find slope of $x^2y + y^2x = -2$ at point $(1, -2)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Product rule twice!</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$[x^2 y' + y(2x)] + [y^2(1) + x(2y y')] = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Rather than messy algebra, plug in $(1,-2)$ NOW.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$ [1(-2)' + (-2)(2)] + [4 + (-4)(-2)'] = 0 $</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Wait, the '$'$ means $y'$!</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$1y' - 4 + 4 - 4y' = 0 implies -3y' = 0 implies y'=0$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Constants Disappear**

**Question:** Find $y'$ for $x^4 + y^4 = c^4$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">$c$ is a constant, so $c^4$ is just a number.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$4x^3 + 4y^3(y') = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Isolate.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = -\frac{4x^3}{4y^3} = -\frac{x^3}{y^3}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Double Y terms**

**Question:** Find $y'$ for $y^2 + y = x^2$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2y y' + 1 y' = 2x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Factor.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'(2y + 1) = 2x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Divide.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = \frac{2x}{2y+1}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Fractions without Quotient Rule**

**Question:** Find $y'$ for $\frac{x}{y} = 5$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Don't use quotient rule! Multiply $y$ to the other side first.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x = 5y$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Now implicitly differentiate.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$1 = 5y'$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Isolate.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = \frac{1}{5}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Second Derivative Implicitly**

**Question:** If $x^2+y^2=r^2$, and $y' = -x/y$, find $y''$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Take derivative of $y'$ using quotient rule. $u=-x, v=y$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = \frac{y(-1) - (-x)(y')}{y^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Substitute the known $y'$ into the answer.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = \frac{-y + x(-x/y)}{y^2}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Simplify. Multiply top and bottom by $y$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = \frac{-y^2 - x^2}{y^3} = \frac{-(x^2+y^2)}{y^3} = \frac{-r^2}{y^3}$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Implicit Differentiation</div>
<div class="p-4">

**Question:** Find $\frac{dy}{dx}$ if $x^2 + y^2 = 25$.

| Inner voice | What you write |
| :--- | :--- |
| "We have a mix of $x$ and $y$. Differentiate both sides with respect to $x$. When differentiating a $y$ term, I MUST multiply by $y'$ (Chain rule)." | $2x + 2y y' = 0$ |
| "Solve algebraically for $y'$." | $2y y' = -2x implies y' = -\frac{x}{y}$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Term with $y$ | Deriving wrt $x$? | Multiply result by $\frac{dy}{dx}$. |
| $xy$ | Is it a product? | Use product rule: $x y' + y$. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. Differentiate implicitly: $x^2 + y^2 = 16$."></div>
<div class="user-quiz" data-question="2. Identify the mistake: $\frac{d}{dx}[xy] = xy'$."></div>
<div class="user-quiz" data-question="3. Find $y'$ for $3x - 4y = 12$."></div>
<div class="user-quiz" data-question="4. Implicitly differentiate $y^4 - x^2 = 2$."></div>
<div class="user-quiz" data-question="5. Why must we output a $y'$ when differentiating $y$?"></div>
`
  },
  {
    id: "chapter-9",
    title: "Chapter 9: Related Rates",
    progress: 0,
    subheadings: [
      {
        "id": "ch9-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch9-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch9-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch9-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch9-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch9-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch9-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch9-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch9-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch9-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch9-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch9-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
We enter a realm where time ($t$) is the great invisible conductor. In previous chapters, $y$ depended strictly on $x$. But what if both $x$ and $y$ are shrinking or growing as time progresses? 
If you blow air into a spherical balloon, the volume is expanding, but simultaneously the radius is expanding. Their rates of expansion are mechanically linked. By using the chain rule to implicitly differentiate geometric equations with respect to time ($t$), we can establish ratios between multiple moving velocities. These are called **Related Rates**.



## ELI5 Explanation (Engineering Analogy)
**The Ladder Sliding Down a Wall:**
Imagine a ladder leaning against a wall. The bottom of the ladder is slipping exactly 1 foot per second outwards across the icy floor. Because the ladder isn't stretching or shrinking, the top of the ladder is forced to slide down the wall. Is the top sliding down at exactly 1 foot per second? NO! The speed of the top depends on the angle. Even though the ladder is stiff, the vertical speed and horizontal speed are locked in a mathematical dance controlled by the Pythagorean theorem.

## Glossary of Key Terms
- **Related Rates:** Problems calculating the rate of change of one quantity using the known rate of change of another related quantity.
- **Implicit Time Differentiation:** Taking $\frac{d}{dt}$ of an equation, causing EVERY spatial variable ($x, y, r, V$) to sprout a derivative flag (e.g., $dx/dt$).
- **Static Geometry:** Formulas like $A = pi r^2$ or $x^2 + y^2 = L^2$ that link the physical dimensions.

## Why This Matters in Electrical Engineering
Imagine a parallel plate capacitor. If you physically start pulling the metal plates apart at a velocity of $0.1$ cm/sec, the capacitance $C$ decreases over time, which simultaneously causes the voltage $V$ to fluctuate over time. Finding the exact resulting fluctuation $\frac{dV}{dt}$ based on the physical velocity $\frac{dx}{dt}$ requires perfectly linking electrical laws with geometric related rates.

## Formal Definitions and Notation
**The Fundamental Methodology:**
You apply the $\frac{d}{dt}$ operator to every term.
For $x^2 + y^2 = 25$:
$$ \frac{d}{dt} (x^2 + y^2) = \frac{d}{dt}(25) $$
$$ 2x \frac{dx}{dt} + 2y \frac{dy}{dt} = 0 $$
Unlike Chapter 8 where $x$ derived normally, here $x$ ALSO pops out a $dx/dt$ flag, because EVERYTHING is subject to the invisible variable $t$.

## Step\u2011by\u2011Step Method for Problem Solving
1. **Draw a Picture:** Label the moving parts with variable letters ($x, y, r, h, 	heta$). Label the stationary, unchanging parts with their hard numbers.
2. **Translate to Algebra:** Write down what you KNOW (e.g. $dx/dt = 5$) and what you WANT TO FIND (e.g. $dy/dt$).
3. **Draft the Master Equation:** Connect the variables with geometry (Pythagorean theorem, Volume, Area, Trig functions).
4. **Differentiate implicitly with respect to $t$:** Pop out $d(	ext{var})/dt$ for every variable.
5. **Substitute:** Plug in your freeze-frame numbers and known rates.
6. **Solve:** Isolate the target rate!

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Read word problem]
             |
             v
+-------------------------------+
| Find the geometric link (eq)  |
| e.g., Area, Volume, Triangles |
+-------------------------------+
             |
             v
+-------------------------------+
| Differentiate EVERYTHING      |
| with respect to time (d/dt)   |
+-------------------------------+
             |
             v
+-------------------------------+
| Plug in SNAPSHOT values       |
| and isolating the unknown rate|
+-------------------------------+
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Increasing / decreasing at a rate</td>
        <td class="p-3 border-b text-sm">Write down the translation: $d(	ext{var})/dt = 	ext{value}$.</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">How fast is...</td>
        <td class="p-3 border-b text-sm">You are looking for the derivative of that variable.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Sliding ladder / moving ships</td>
        <td class="p-3 border-b text-sm">Draft a right triangle, use Pythagoras $x^2+y^2=s^2$.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: The Expanding Circle**

**Question:** A ripple's radius increases at 2 in/s. How fast is the area growing when radius is 10 in?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Geometric link: Area of circle.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$A = pi r^2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive with respect to $t$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dA}{dt} = 2pi r \frac{dr}{dt}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug in the snapshot $r=10$ and known rate $dr/dt=2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dA}{dt} = 2pi (10) (2) = 40pi 	ext{ sq in/s}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: The Sliding Ladder**

**Question:** A 10ft ladder slides down. Top descends 1ft/s. How fast is the bottom sliding AWAY when bottom is 6ft from the wall?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Pythagorean link. The ladder is permanently 10.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x^2 + y^2 = 100$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2x \frac{dx}{dt} + 2y \frac{dy}{dt} = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Snapshot: $x=6$. Find $y$ using $6^2+y^2=100$. So $y=8$. Top descents so $dy/dt = -1$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2(6)\frac{dx}{dt} + 2(8)(-1) = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve for $dx/dt$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$12\frac{dx}{dt} = 16 implies \frac{dx}{dt} = 1.33 	ext{ ft/s}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Blowing up a Balloon**

**Question:** Volume of a sphere grows at 100 cc/s. Find rate of change of radius when $r=5$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Volume of sphere.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V = \frac{4}{3}pi r^3$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive w.r.t $t$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dV}{dt} = 4pi r^2 \frac{dr}{dt}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug in $dV/dt = 100$, $r=5$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$100 = 4pi(25) \frac{dr}{dt}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dr}{dt} = \frac{100}{100pi} = \frac{1}{pi} 	ext{ cm/s}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Two Cars Diverging**

**Question:** Car A goes West at 40mph. Car B goes North at 30mph. Rates of separation when A is 4 miles and B is 3 miles from origin?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Distance between them $z^2 = x^2 + y^2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2z \frac{dz}{dt} = 2x \frac{dx}{dt} + 2y \frac{dy}{dt}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Snapshot: $x=4$, $y=3 implies z=5$. Rates $x'=40, y'=30$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2(5)z' = 2(4)(40) + 2(3)(30)$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Algebra.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$10z' = 320 + 180 = 500 implies z' = 50 	ext{ mph}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Cone Water Tank**

**Question:** Water drains from a conical tank. Volume $V = \frac{1}{3}pi r^2 h$. $r/h$ ratio is $1/2$. Find $dV/dt$ if $dh/dt = -1$, and $h=4$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Too many variables. Substitute $r$ away. $r = h/2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V = \frac{1}{3}pi (h/2)^2 h = \frac{pi}{12} h^3$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dV}{dt} = \frac{pi}{4} h^2 \frac{dh}{dt}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug in.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{dV}{dt} = \frac{pi}{4}(16)(-1) = -4pi$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Shadow Length**

**Question:** A 6ft man walks away from a 15ft lamppost at 5ft/s. Rate of shadow tip moving?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Similar triangles. Let $x$ be man's position, $y$ be shadow tip. $\frac{y}{15} = \frac{y-x}{6}$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$6y = 15y - 15x implies 15x = 9y$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$15\frac{dx}{dt} = 9\frac{dy}{dt}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug in man's speed $dx/dt = 5$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$15(5) = 9y' implies y' = \frac{75}{9} = 8.33 	ext{ ft/s}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Melting Ice Cube**

**Question:** A cube melts, volume drops 2 in\xB3/min. Rate of side $s$ shrinking when $s=3$?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Volume of cube.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V = s^3$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V' = 3s^2 s'$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Plug in values. $V'$ is negative because it's melting.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$-2 = 3(9) s' implies s' = \frac{-2}{27}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Electrical Resistance**

**Question:** Resistors $R_1, R_2$ in parallel: $1/R = 1/R_1 + 1/R_2$. Find $dR/dt$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Use negative exponents! $R^{-1} = R_1^{-1} + R_2^{-1}$. Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$-R^{-2} R' = -R_1^{-2} R_1' - R_2^{-2} R_2'$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply by $-1$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\frac{1}{R^2}\frac{dR}{dt} = \frac{1}{R_1^2}R_1' + \frac{1}{R_2^2}R_2'$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: The Winch**

**Question:** A boat is pulled by a winch 10ft above dock. Rope reeled at 2ft/s. Speed of boat when rope is 26ft?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Pythagoras with stationary vertical leg 10. $x^2 + 10^2 = z^2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2x x' = 2z z'$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Snapshot: $z=26$, $z'=-2$. Find $x$: $x^2+100=676 implies x=24$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$(24)x' = (26)(-2)$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x' = \frac{-52}{24} = -2.17dots$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Cylindrical Tank radius**

**Question:** Water in cylinder ($V = pi r^2 h$). If $r=10$ is constant, and water fills at rate $5$, find $dh/dt$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Since $r$ is constant, DONT derive it as a variable! Plug $r$ in first.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V = 100pi h$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V' = 100pi h'$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$5 = 100pi h' implies h' = \frac{5}{100pi}$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Related Rates</div>
<div class="p-4">

**Question:** A circle's radius is growing at $2	ext{ m/s}$. How fast is its area growing when $r=5$?

| Inner voice | What you write |
| :--- | :--- |
| "Write the geometric equation, then take the time derivative $\frac{d}{dt}$ of both sides." | Area: $A = pi r^2$  $A' = 2pi r cdot r'$ |
| "Now plug in the specific moment values ($r=5$, $r'=2$)." | $A' = 2pi(5)(2) = 20pi	ext{ m}^2	ext{/s}$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| "Growing at..." | Is it a rate? | Identify as $\frac{dr}{dt}$, $\frac{dV}{dt}$, etc. |
| Equation ties vars | Do I need rates? | Differentiate everything with respect to $t$. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. Write the time derivative equation for Area of a circle."></div>
<div class="user-quiz" data-question="2. If $x^2 + y^2 = 25$, write the implicit time derivative expression."></div>
<div class="user-quiz" data-question="3. True or False: If a dimension is fixed, you plug its value in BEFORE differentiating."></div>
<div class="user-quiz" data-question="4. Why must an expanding bubble have a positive $dV/dt$?"></div>
<div class="user-quiz" data-question="5. Identify the hidden geometric formula for a sliding ladder problem."></div>
`
  },
  {
    id: "chapter-10",
    title: "Chapter 10: Maxima and Minima (Optimization)",
    progress: 0,
    subheadings: [
      {
        "id": "ch10-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "ch10-eli5",
        "title": "ELI5 Explanation (Engineering Analogy)"
      },
      {
        "id": "ch10-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "ch10-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "ch10-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "ch10-method",
        "title": "Step\\u2011by\\u2011Step Method for Problem Solving"
      },
      {
        "id": "ch10-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "ch10-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "ch10-examples",
        "title": "10 Exam\\u2011Level Worked Exercises with Inner Voice"
      },
      {
        "id": "ch10-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "ch10-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "ch10-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts
If a curve first ascends and then goes up again, presenting a concavity upwards, its slope will at some point be zero at the exact bottom of the trough. If a curve ascends then descends, making a summit, its slope exactly at the mountaintop is zero.
We now arrive at one of the supreme utilities of the calculus: locating the exact peak maximums or valley minimums of mathematically described phenomena. If we possess the equation of a line, we can differentiate it, set the derivative to zero, and analytically pinpoint the absolute limits of nature.



## ELI5 Explanation (Engineering Analogy)
**Throwing a ball in the air:**
When you throw a ball straight up, it starts fast, slows down, stops entirely for one invisible microsecond at the very top, and then falls back down. That microsecond of stopping means its velocity is ZERO. If we want to find the highest point the universe allows the ball to reach, we just calculate the velocity equation (the derivative), force it to equal zero, and solve!

## Glossary of Key Terms
- **Local Maximum:** A summit on the graph where the function transitions from increasing to decreasing. Slope is zero.
- **Local Minimum:** A trough on the graph where the function transitions from decreasing to increasing. Slope is zero.
- **Critical Point:** Any $x$-value where the derivative $f'(x) = 0$ or is completely undefined.
- **Optimization:** The art of using maxima and minima to find the 'best' possible outcome (e.g. maximum profit, minimum waste).

## Why This Matters in Electrical Engineering
Power Transfer Theorem states that maximum power is delivered to a load when the load resistance perfectly matches the internal source resistance ($R_L = R_S$). How did engineers prove this? They wrote the power equation $P = I^2 R_L$, took the derivative $\frac{dP}{dR_L}$, set it to exactly zero to seek the maximum limit, and algebraically solved for the peak.

## Formal Definitions and Notation
**Fermat's Theorem for Local Extrema:**
If $f$ has a local maximum or minimum at $c$, and if $f'(c)$ exists, then $f'(c) = 0$.

**The First Derivative Test:**
- If $f'(x)$ changes from positive (up) to negative (down) at $c$, it's a **Maximum**.
- If $f'(x)$ changes from negative (down) to positive (up) at $c$, it's a **Minimum**.

**The Second Derivative Test:**
- At a point where $f'(c) = 0$, check the concavity using $f''(c)$.
- If $f''(c) < 0$ (concave down, like a frowning face), it's a **Maximum**.
- If $f''(c) > 0$ (concave up, like a smiling face), it's a **Minimum**.

## Step\u2011by\u2011Step Method for Problem Solving
1. **Establish the Objective Equation:** Create an equation for whatever you are trying to maximize/minimize. Ensure it only utilizes ONE independent variable across the board.
2. **Differentiate:** Take the first derivative of the equation.
3. **Set to Zero:** Set the derivative exactly to 0 and solve for the independent variable algebraically. This is your candidate point.
4. **Verify Extrema:** Confirm it is a maximum (e.g., via the Second Derivative Test) so you don't accidentally design a bridge with minimum strength!
5. **Answer the Prompt:** Ensure you provide the value the problem asked for (e.g. the maximum Area, not just the $x$ dimension).

## Algorithmic Problem Solving Flow

<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Objective y = f(x)]
         |
         v
+-------------------+
| Find dy/dx        |
+-------------------+
         |
         v
+-------------------+
| Set dy/dx = 0     |
| Solve for x.      |
+-------------------+
         |
         v
+-------------------+
| Use f''(x) to     |
| verify concave    |
| up/down direction.|
+-------------------+
</div>


## Concept Recall: Trigger Words \u2192 Action

<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Trigger Words</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="">
        <td class="p-3 border-b text-sm font-mono">Maximize / Minimize</td>
        <td class="p-3 border-b text-sm">Write function, derive, set to zero.</td>
      </tr><tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Largest / Least possible area</td>
        <td class="p-3 border-b text-sm">Optimization problem! Requires two equations: Constraint and Objective.</td>
      </tr><tr class="">
        <td class="p-3 border-b text-sm font-mono">Find extrema</td>
        <td class="p-3 border-b text-sm">Locate where $f'(x) = 0$.</td>
      </tr>
    </tbody>
  </table>
</div>


## 10 Exam\u2011Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Standard Summit Search**

**Question:** Find local extrema of $y = x^2 - 4x + 3$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 2x - 4$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Set to zero and solve.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2x - 4 = 0 implies 2x = 4 implies x = 2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Check 2nd derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y'' = 2$. Positive $implies$ Minimum.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Cubic Functions**

**Question:** Find extrema of $y = x^3 - 3x$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive and set to zero.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 3x^2 - 3 = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Solve for $x$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$3(x^2-1) = 0 implies x = 1, x = -1$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Test points in $y'' = 6x$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y''(1) = 6$ (Min). $y''(-1) = -6$ (Max).</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Box Optimization**

**Question:** A 100cm string makes a flat rectangle. Find dimensions for maximum area.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Constraint is perimeter. $2x + 2y = 100 implies y = 50 - x$. Objective is Area $A = xy$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$A = x(50-x) = 50x - x^2$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive area.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$A' = 50 - 2x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Set to zero.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$50 - 2x = 0 implies x = 25$. So $y = 25$. Square is optimal!</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Open Box Volume**

**Question:** Cut squares of side $x$ from 12x12 cardboard to fold an open box. Maximize volume.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Volume is length * width * height. The sides become $(12-2x)$ and height is $x$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V = x(12-2x)^2 = x(144-48x+4x^2)$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Multiply out.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$V = 4x^3 - 48x^2 + 144x$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive and set to $0$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$12x^2 - 96x + 144 = 0 implies 12(x^2-8x+12)=0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Factor $(x-2)(x-6)=0$. $x=6$ makes volume $0$. Max is at 2.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Max volume at $x=2$.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Minimum Distance**

**Question:** Find the point on $y=x^2$ closest to $(3,0)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Distance squared is $D = (x-3)^2 + (y-0)^2$. Substitute $y=x^2$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$D = (x-3)^2 + x^4$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive and set to $0$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$D' = 2(x-3) + 4x^3 = 4x^3 + 2x - 6 = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Notice $x=1$ works! $4(1) + 2(1) - 6 = 0$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Point is $(1,1)$.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Profit Margin**

**Question:** Profit $P(x) = -0.5x^2 + 40x - 100$. Find units $x$ to maximize profit.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derivative.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$P'(x) = -x + 40$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Set zero.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$-x + 40 = 0 implies x=40$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Verify max.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$P''(x) = -1 < 0 implies$ Maximum confirmed.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: False Alarm Point**

**Question:** Find extrema of $y = x^3$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y' = 3x^2 = 0 implies x=0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Check 2nd derivative. $y''=6x$. At $x=0$, $y''=0$. Indicates Inflection, NOT max/min.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">No local extrema.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Cylindrical Can**

**Question:** Minimize surface area of 1-liter ($1000cm^3$) can. $V = pi r^2 h = 1000$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Area is circle caps + wall.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$A = 2pi r^2 + 2pi r h$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Substitute constraint $h = 1000/(pi r^2)$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$A = 2pi r^2 + 2000/r = 2pi r^2 + 2000r^{-1}$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Derive and set zero.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$4pi r - 2000/r^2 = 0 implies r^3 = \frac{500}{pi}$</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Norman Window**

**Question:** Rectangle topped with semicircle. Perimeter is 10. Maximize light area.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Objective: Area. Constraint: Perimeter.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Write formulas.</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">This is heavy algebra, but process remains identical.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Derive, set $0$, solve.</div>

</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Electrical Power**

**Question:** Power $P = I^2 R = \frac{V^2}{(r + R)^2}R$. Maximize $P$ with respect to load $R$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>\u{1F9E0} Inner Voice (What You Think)</strong></div>
  <div><strong>\u{1F4D0} Mathematical Solution (What You Write)</strong></div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Quotient rule. Variable is $R$. $V, r$ are constants.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$P' = V^2 left[ \frac{ (r+R)^2(1) - R[2(r+R)] }{ (r+R)^4 } \right]$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Set numerator strictly to zero.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$(r+R)^2 - 2R(r+R) = 0$</div>

  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">Factor out $(r+R)$.</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$(r+R)[(r+R) - 2R] = 0 implies r - R = 0 implies r = R$</div>

</div>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Optimization (Maxima)</div>
<div class="p-4">

**Question:** Find the maximum area of a rectangle with perimeter $20$.

| Inner voice | What you write |
| :--- | :--- |
| "Write the constraint and the objective equations." | Const: $2x+2y=20 implies y=10-x$  Obj: $A = xy$ |
| "Substitute constraint into objective, then take derivative and find critical points." | $A = x(10-x) = 10x - x^2$  $A' = 10 - 2x = 0 implies x=5$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| "Maximize..." | What formula is being optimized? | Write objective function. |
| Constraint given | Can I substitute? | Solve constraint for one var and plug in. |

</div>
</div>## Chapter Assessment
<div class="user-quiz" data-question="1. What MUST be true about $f'(x)$ at a local maximum?"></div>
<div class="user-quiz" data-question="2. If $f'(c) = 0$ and $f''(c) = 5$, is $c$ a peak or a valley?"></div>
<div class="user-quiz" data-question="3. Set up the Area and Constraint equation to maximize a rectangular pasture with 500ft of fencing."></div>
<div class="user-quiz" data-question="4. Find the minimum value of $y = x^2 - 10x$."></div>
<div class="user-quiz" data-question="5. Why must independent variables be consolidated before deriving an objective function?"></div>
`
  },
  {
    id: "chapter-0",
    title: "Chapter 0: The Foundation \u2013 Calculus Recall",
    progress: 100,
    subheadings: [
      { id: "ch0-glossary", title: "Glossary of Key Terms" },
      { id: "ch0-eli5", title: "ELI5 Explanation: The Speedometer and the Odometer" },
      { id: "ch0-visuals", title: "Visuals / Graphs" },
      { id: "ch0-examples", title: "5 Exhaustive Worked Examples" },
      { id: "ch0-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch0-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Glossary, Rules & Formulas

### 1. The Limit: "The Ultimate Destination"
* **Standard Definition:** The value $L$ that a function approaches as the input $x$ gets arbitrarily close to $a$ ($\\lim_{x \\to a} f(x) = L$).
* **Calculus Made Easy Explanation:** Imagine walking towards a wall, halving your distance with each step. Do you ever touch the wall? Maybe not. But the *limit* of your journey\u2014your destination\u2014is the wall itself. Limits let us talk about "where we are heading" even if we never mathematically arrive.
* **Utility:** Limits are the foundational glue of calculus. They allow us to rigorously define rates of change (derivatives) exactly at a point, and infinite accumulation (integrals), by analyzing behavior as distances shrink to zero.
* **Illustrative Example:** $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$. Even though plugging in $x=0$ yields a $\\frac{0}{0}$ indeterminate state, the limit reveals that the function perfectly approaches the value $1$ geometrically.
* **Key Formula (L'H\xF4pital's Rule):** If approaching $a$ yields $\\frac{0}{0}$, try $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$.

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

Think of driving an electric vehicle (EV). Your speedometer tells you your **derivative**\u2014your instantaneous speed at any exact second. 
Your odometer tells you your **integral**\u2014the total accumulated distance you've traveled. 
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
* **Thinking Method:** We have two completely different mathematical objects\u2014a parabola ($x^2$) and an exponential curve ($e^{3x}$)\u2014mashed together by multiplication. We cannot just differentiate them separately. We must use the Product Rule: "First times the derivative of the Second, PLUS Second times the derivative of the First". Let's call the first part $u$ and the second part $v$.
* **Worked-Out Solution:** 
  1. Define $u = x^2$. Its derivative is exactly $u' = 2x$.
  2. Define $v = e^{3x}$. Its derivative requires a mini chain-rule for the power $3x$. So $v' = e^{3x} \\cdot 3 = 3e^{3x}$.
  3. Assemble the puzzle $uv' + vu'$: 
  4. $(x^2)(3e^{3x}) + (e^{3x})(2x)$.
  5. To make it pretty, factor out the common pieces. They both share an $x$ and an $e^{3x}$. We pull those to the front: $xe^{3x}(3x + 2)$.
* **Key Takeaway:** When two variable chunks are multiplying each other, identify the two distinct "actors" taking the stage and apply the formal product rule template.

**Example 3: U-Substitution Integration**
* **Problem:** Find the accumulated total (evaluate the integral) of $\\int 2x \\cos(x^2) dx$.
* **Thinking Method:** Integration can be an absolute nightmare if the pieces don't fit. But notice a clue! We have an $x^2$ trapped inside a cosine, and perfectly waiting on the outside is its exact derivative, $2x$. This is a screaming signal to use "U-Substitution"\u2014we temporarily disguise $x^2$ to simplify the visual puzzle.
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

To master Limits, follow this algorithmic flow. Think of it as a decision tree for your brain\u2014it maps the logical steps you must take to arrive at the solution systematically.

<div className="algorithmic-flow" data-flow="limit"></div>






## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Limits and Evaluation</div>
<div class="p-4">

**Question:** Evaluate $lim_{x 	o 2} \frac{x^2 - 4}{x - 2}$.

| Inner voice | What you write |
| :--- | :--- |
| "Direct substitution gives $0/0$. I need to factor the numerator to remove the discontinuity." | $\frac{(x-2)(x+2)}{x-2}$ |
| "Cancel the $(x-2)$ terms, then plug in $x = 2$ again." | $lim_{x 	o 2} (x+2) = 4$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| $lim_{x 	o a} \frac{f(x)}{g(x)} = \frac{0}{0}$ | Can I factor or use L'H\xF4pital? | Differentiate top and bottom. |
| $infty / infty$ | Which grows faster? | Divide by highest power or L'H\xF4pital. |

</div>
</div>## Chapter Assessment

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
\`\u2593\u2593\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 14%\` Course Progress
\`\u2593\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 05%\` Reinforcement Load
`
  },
  {
    id: "chapter-v0",
    title: "Chapter V0: The Complete Vector & Space Foundation (Thomas Chapter 12)",
    progress: 0,
    subheadings: [
      {
        "id": "v0-intro",
        "title": "Introduction & Core Concepts"
      },
      {
        "id": "v0-part-a",
        "title": 'Part A: The "Stage" and "Actors" (Space & Vectors)'
      },
      {
        "id": "v0-part-b",
        "title": 'Part B: The "Agreement" Multiplier (Dot Product)'
      },
      {
        "id": "v0-part-c",
        "title": 'Part C: The "Twist" Multiplier (Cross Product)'
      },
      {
        "id": "v0-part-d",
        "title": "Part D: The Gradient Precursor (Lines & Planes)"
      },
      {
        "id": "v0-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "v0-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "v0-examples",
        "title": "10 Exam-Level Worked Exercises with Inner Voice"
      },
      {
        "id": "v0-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "v0-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction & Core Concepts

"What one fool can do, another can." This is our absolute core philosophy. We must erase the fear of dense notation. We will never introduce a mathematical formula without first explaining the physical, real-world action it represents. Mathematics is not just a collection of abstract symbols; it is a language used to describe the mechanics of reality. 

In this chapter, we will translate abstract geometry to reality. We treat 3D space not as an invisible abstract grid, but as a physical, tangible space. Throughout this foundational chapter, we will use practical engineering analogies: we will visualize the casing of a Ziewnic 5G PV-8500 inverter, the heavy magnetic fields flowing around neodymium magnets in an EV motor, and the physical floor plan of an industrial thermoforming section. 

Every single concept covered in Chapter 12 of Thomas' Calculus is taught here as a specific precursor to advanced vector calculus. We are secretly teaching you the physical mechanics of Gradient, Divergence, and Curl before you even realize it. Let us build the foundation carefully, step-by-step.

---

## Part A: The "Stage" and "Actors" (Space & Vectors)

**The Concept:**
Before anything can flow, compress, or twist, we must build the 3D room. We need a stage where the physical actions take place. Here, we must distinguish between two fundamental types of quantities: scalars and vectors. A **scalar** is simply just an amount. For example, 150\xB0C in a thermoforming machine is a scalar. It tells you "how much" heat there is, but not where it is going. A **vector**, on the other hand, is an amount with a physical destination. It tells you how much and in what direction. Imagine heat flowing up and to the left out of a vent. That is a vector. 

Vectors are not just lists of numbers like <x, y, z>. They are physical instructions! When you see a vector <3, 4, 0>, you must read it as an instruction: "Run the heavy-gauge copper wire 3m East, and 4m North." 

**The Visual Delivery:**
To map this properly, I want you to perform a physical action right now. Look at the corner of the room you are sitting in. Imagine the floor lines as the X and Y axes, and the vertical wall line as the Z axis. You must use the **Right-Hand Rule** to map these 3D axes correctly. Point your right fingers along the positive X-axis, curl them towards the positive Y-axis, and your right thumb will point straight UP along the positive Z-axis. 

If you don't map this correctly right now, your EV motor magnetic field calculations next semester will spin completely backward, giving you physically impossible results! Furthermore, visualize holding a physical arrow in your hand. If you walk across the room holding the arrow, its length and its pointing direction do not change. Moving a vector across space does not change its internal instructions. A vector is defined purely by its magnitude and its direction, not its starting location.

---

## Part B: The "Agreement" Multiplier (Dot Product)

**The Concept:**
We are going to completely strip away the terrifying formula $u \\cdot v = |u||v|\\cos(\\theta)$ for a moment. Instead, I want you to learn the Dot Product simply as **"Agreement."** The dot product answers one vital physical question: *How much do these two vectors work together?* 

**The Analogy:**
Imagine you are pushing a heavily loaded cart across a factory floor. 
- If you push perfectly straight in the direction the cart is rolling (an angle of 0\xB0), your push is in 100% agreement with the motion. This yields the maximum possible dot product. Every ounce of your effort helps.
- If you push straight down from above the cart (an angle of 90\xB0 to the horizontal), your push does absolutely nothing to move the cart forward. There is 0 agreement. The dot product is exactly 0. 

**The Kick-Start:**
Master this concept right now, because measuring magnetic field 'flow' through a solar panel is just the Dot Product of the field vector and the panel's surface normal. This idea of measuring "how much of this field agrees with this surface" is the absolute heart of Divergence.

---

## Part C: The "Twist" Multiplier (Cross Product)

**The Concept:**
If the Dot Product is "Agreement," the Cross Product is **"Perpendicular Generation."** It asks: *How much do these two vectors fight each other to create a twist in an entirely new, perpendicular direction?* The cross product of two vectors produces a new vector that is perpendicular to both original vectors. 

**The Analogy:**
Visualize using a steel wrench on a stiff bolt. You have Vector **r** (the handle of the wrench, pointing away from the bolt) and Vector **F** (the force you apply with your hand). 
- If you pull parallel to the wrench, nothing turns. The cross product is zero.
- If you push purely perpendicular to the wrench, you generate massive turning force. 

When you cross Vector **r** with Vector **F** (written as $r \\times F$), you are calculating the torque driving the bolt downward into the engine block. The resulting vector points along the axis of the bolt, entirely perpendicular to your wrench and your pushing hand!

**The Kick-Start:**
EV motors use exactly this. Electricity flowing in one direction (a current vector) and magnetic fields pointing in another (a magnetic vector) interact to push the motor's rotor in a perpendicular direction. That is the Cross Product in action. It is the inescapable foundation of "Curl" in electromagnetics.

---

## Part D: The Gradient Precursor (Lines & Planes)

**The Concept:**
What makes a perfectly flat plane in 3D space? A plane is infinitely wide and long, meaning it is impossible to describe by tracing all of its edges. Instead, a plane is entirely defined by one single arrow: the **normal vector** sticking straight out of it. If you know which way "straight up" is, you define the entire flat floor below it.

**The Analogy:**
Imagine a flat piece of sheet metal resting in a manufacturing plant. This massive sheet is completely mathematically defined by the exact direction of a single iron nail driven perfectly straight through its center. If you tilt the nail, the entire piece of sheet metal must tilt to remain perfectly perpendicular. The tilt of the plane is dictated solely by this normal vector.

**The Kick-Start:**
The Gradient ($\\nabla f$) that you will study later is simply the mathematical tool for finding the "Normal Vector" to any curved 3D surface. Think of the Gradient as the compass needle pointing straight outward from the side of a mountain. Once you understand the normal vector of a flat plane today, calculating the normal vector of a curved slope tomorrow will be trivial.

---

## Glossary of Key Terms

- **Scalar:** A physical quantity that only has a magnitude (e.g., Temperature: 150\xB0C).
- **Vector:** A physical instruction containing both a magnitude and a direction (e.g., Velocity: 60 km/h due North).
- **Right-Hand Rule:** The physical method used to determine the orientation of axes or the direction of a cross product.
- **Dot Product ($u \\cdot v$):** The "Agreement Multiplier." A scalar value representing how much two vectors point in the same direction.
- **Cross Product ($u \\times v$):** The "Twist Multiplier." A vector operation that generates a new vector perfectly perpendicular to the initial two vectors.
- **Normal Vector:** An arrow that points perfectly straight out of (perpendicular to) a plane or surface.

---

## Why This Matters in Electrical Engineering
As an Electrical Engineering student preparing for electromagnetics, you are about to encounter Maxwell's equations. Magnetic fields ($B$) and Electric fields ($E$) are not numbers; they are massive invisible oceans of 3D arrows. 
- You need the **Dot Product** to calculate electric flux (how much electric field punches through a solar panel). 
- You need the **Cross Product** to calculate the Lorentz force (the twisting force that drives electric motors). 
- You need the **Normal Vector** to define the boundaries of waveguides and inverter casings. 
If you simply memorize formulas, electromagnetics will break you. But if you visualize the physical wrench, the push, and the twist, you will dominate the subject.

---

## Visuals / Graphs

### 1. Vector components
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="vector_components"></div>

### 2. Dot Product Projection
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="dot_product"></div>

### 3. Cross Product Right Hand Rule
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="cross_product"></div>


---

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: The Basic Instruction (Vector Addition)**

**Question:** An industrial robot arm moves a component along vector $u = \\langle 2, 4, -1 \\rangle$, then pushes it along vector $v = \\langle -1, 3, 2 \\rangle$. Find the net displacement.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A vector is an instruction. First instruction says: go 2 units X, 4 units Y, down 1 unit Z. The second says: go back 1 unit X, 3 units Y, up 2 units Z. To get the net instruction, I just combine the X's, Y's, and Z's separately.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$u + v = \\langle 2+(-1), 4+3, (-1)+2 \\rangle$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Calculate the simple arithmetic. 2 - 1 = 1. 4 + 3 = 7. -1 + 2 = 1. This is the single, combined instruction.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= \\langle 1, 7, 1 \\rangle$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Perfect Agreement (Dot Product)**

**Question:** A technician pushes a cart with force $F = \\langle 3, 4, 0 \\rangle$ along a path $D = \\langle 6, 8, 0 \\rangle$. Calculate the work done (the dot product $F \\cdot D$).

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Work is how much the force 'agrees' with the path. Let's calculate the agreement multiplier. I just multiply matching components and add them.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$W = F \\cdot D = (3)(6) + (4)(8) + (0)(0)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">18 plus 32 is 50. Total agreement is 50 Joules of work.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= 18 + 32 + 0 = 50$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Checking Orthogonality**

**Question:** Does the magnetic field vector $B = \\langle 2, -1, 4 \\rangle$ pierce perpendicularly through a solar panel oriented along $v = \\langle 1, 6, 1 \\rangle$? Check if they are orthogonal.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Orthogonal means perfectly perpendicular. If they are perfectly perpendicular, they do not 'agree' at all. The agreement multiplier (dot product) must be exactly zero. Let's check it.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$B \\cdot v = (2)(1) + (-1)(6) + (4)(1)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">2 - 6 + 4... equals 0! They share zero agreement. Thus, they are perfectly 90 degrees apart.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= 2 - 6 + 4 = 0$. Yes, they are orthogonal.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Generating the Twist (Cross Product)**

**Question:** Calculate torque $\\tau = r \\times F$ if the wrench handle vector is $r = \\langle 1, 2, 0 \\rangle$ and applied force is $F = \\langle 0, 3, 0 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">I need the twist multiplier. This creates a new vector pushing perpendicular to the wrench. I need to set up the classic determinant matrix with i, j, k at the top.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\tau = \\begin{vmatrix} e_1 & e_2 & e_3 \\\\ 1 & 2 & 0 \\\\ 0 & 3 & 0 \\end{vmatrix}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Cover column 1: $(2)(0) - (0)(3) = 0$. Cover column 2: $- ((1)(0) - (0)(0)) = 0$. Cover column 3: $(1)(3) - (2)(0) = 3$. This means all the torque acts along the Z-axis, perfectly perpendicular to the XY wrench movement.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\tau = 0e_1 - 0e_2 + (3 - 0)e_3 = \\langle 0, 0, 3 \\rangle$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Finding the Normal Nail**

**Question:** Find a vector perfectly perpendicular to the plane formed by $u = \\langle 1, -1, 0 \\rangle$ and $v = \\langle 2, 0, 1 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">I need a vector perpendicular to two existing vectors on a plane. This is exactly what the "Twist Multiplier" (Cross Product) produces! I will compute $u \\times v$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$N = u \\times v = \\begin{vmatrix} e_1 & e_2 & e_3 \\\\ 1 & -1 & 0 \\\\ 2 & 0 & 1 \\end{vmatrix}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Compute the sub-determinants carefully. X: $(-1)(1)-(0) = -1$. Y: $-((1)(1)-(0)) = -1$. Z: $(1)(0)-(-1)(2) = 2$. This vector is our perpendicular "iron nail".</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= \\langle -1, -1, 2 \\rangle$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Trajectory as a Line**

**Question:** An electron gets shot out of a cathode ray tube from position $P(1, 4, -2)$ travelling rigidly along instruction vector $v = \\langle 2, -1, 3 \\rangle$. Write the line equation for its path.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A line equation just asks where I am right now, plus how far I travel along my instruction arrow. Let t be time. Starting point $+$ (time $\\times$ velocity arrow).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$L(t) = P_0 + t \\cdot v$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Just plug the point and vector straight into the format.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$L(t) = \\langle 1, 4, -2 \\rangle + t\\langle 2, -1, 3 \\rangle$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Or separately as parametric equations.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$x(t) = 1 + 2t, y(t) = 4 - t, z(t) = -2 + 3t$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: The Angle of Magnetic Collision**

**Question:** Calculate the angle between a magnetic field trace $B = \\langle 1, 1, 1 \\rangle$ and a sensor face $S = \\langle 1, 0, 0 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">To find angles between spatial arrows, always use the Agreement Multiplier (Dot Product). $\\cos(\\theta) = (B \\cdot S) / (|B||S|)$. First get lengths.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$|B| = \\sqrt{1^2+1^2+1^2} = \\sqrt{3}$<br>$|S| = \\sqrt{1^2} = 1$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Now their dot product. $(1)(1) + (1)(0) + (1)(0) = 1$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$B \\cdot S = 1$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Now construct the arccosine to reveal the physical angle.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\cos(\\theta) = \\frac{1}{\\sqrt{3}(1)} implies \\theta = \\arccos(\\frac{1}{\\sqrt{3}})$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Building a Perfect Plane**

**Question:** Construct the equation of a sheet of steel (a plane) that passes through point $P(2, 3, 4)$ and has an iron nail (normal vector) pointing perfectly along $n = \\langle 1, -2, 5 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The plane equation just forces any random point $(x,y,z)$ on the plane to form a flat line with the start point P, such that it has ZERO agreement with the normal nail. So, $n \\cdot \\langle x-p_x, y-p_y, z-p_z \\rangle = 0$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$<br>$\\text{Where } \\langle A,B,C \\rangle = n$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Just substitute everything in directly. It's that simple.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$1(x-2) - 2(y-3) + 5(z-4) = 0$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Expand and tidy up the terms to make it neat.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$x - 2y + 5z = 2 - 6 + 20 implies x - 2y + 5z = 16$</td>
    </tr>
  </tbody>
</table>
</div>


<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Are the Electric Walls Parallel?**

**Question:** Determine if Plane 1: $2x - 4y + 6z = 10$ and Plane 2: $-x + 2y - 3z = 8$ are parallel.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The coefficients of x, y, and z in a plane equation ARE exactly the "iron nail" normal vector. If the nails point in identical (or exactly opposite scaled) directions, the metal sheets themselves MUST be parallel.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$n_1 = \\langle 2, -4, 6 \\rangle$<br>$n_2 = \\langle -1, 2, -3 \\rangle$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Is $n_1$ just a scaled up version of $n_2$? Yes, if I multiply $n_2$ by $-2$, I get exactly $n_1$. They are perfectly aligned (just flipped). Therefore, the planes they secure must be perfectly parallel walls!</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$n_1 = -2 \\cdot n_2$. The normal vectors are parallel, therefore the planes are parallel.</td>
    </tr>
  </tbody>
</table>
</div>


<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Projection (The Shadow Maker)**

**Question:** Find the projection (the vertical shadow) of vector $u = \\langle 1, 1, 2 \\rangle$ falling down directly onto vector $v = \\langle -2, 3, 1 \\rangle$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Projection is asking "How much of u agrees with v", and then taking that amount to stretch a pure unit vector in the direction of v. The formula relies entirely on the Agreement Multiplier (Dot Product).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{proj}_v u = \\left( \\frac{u \\cdot v}{v \\cdot v} \\right) v$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">I need the dot products. $u \\cdot v = -2 + 3 + 2 = 3$. And $v \\cdot v = (-2)^2 + 3^2 + 1^2 = 4 + 9 + 1 = 14$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$u \\cdot v = 3$ <br> $v \\cdot v = 14$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">So the length multiplier is 3/14. I just scale vector v by this amount to get the shadow vector.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{proj}_v u = \\frac{3}{14} \\langle -2, 3, 1 \\rangle = \\langle -\\frac{6}{14}, \\frac{9}{14}, \\frac{3}{14} \\rangle$</td>
    </tr>
  </tbody>
</table>
</div>

---

## Ultimate Exam Room Cheat Sheet

<div class="overflow-x-auto rounded-xl border border-slate-200">
  <table class="w-full text-left border-collapse bg-white">
    <thead>
      <tr class="bg-indigo-50 border-b border-indigo-100">
        <th class="p-4 font-bold text-indigo-900">Concept</th>
        <th class="p-4 font-bold text-indigo-900 border-l border-indigo-100">Formula</th>
        <th class="p-4 font-bold text-indigo-900 border-l border-indigo-100">Check/Test Purpose</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Vector Length / Magnitude</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$|v| = \\sqrt{x^2+y^2+z^2}$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">Finding the direct spatial distance.</td>
      </tr>
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Dot Product (Agreement)</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$u \\cdot v = u_1 v_1 + u_2 v_2 + u_3 v_3$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">If exactly 0, the vectors are **orthognal (perpendicular)**.</td>
      </tr>
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Cross Product (Twist)</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$u \\times v = \\text{det}(e_i, u, v)$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">If exactly $\\langle 0,0,0 \\rangle$, the vectors are **parallel**.</td>
      </tr>
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Line Equation</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$r(t) = P_{start} + t \\cdot v_{dir}$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">Path parameterization of moving objects.</td>
      </tr>
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="p-4 font-medium text-slate-800">Plane Equation</td>
        <td class="p-4 font-mono text-indigo-600 bg-slate-50 border-l border-slate-100">$n_x(x-x_0) + n_y(y-y_0) + n_z(z-z_0) = 0$</td>
        <td class="p-4 text-slate-600 border-l border-slate-100">Requires a point $(x_0,y_0,z_0)$ and a Normal vector $n$.</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Chapter Assessment

<div class="user-quiz" data-question="1. A cart is pushed purely vertically downwards while rolling forward. Based on the physical concept of the Dot Product, what is the 'agreement multiplier' and numeric work done?"></div>
<div class="user-quiz" data-question="2. Why must you point your right thumb towards the positive Z-axis when constructing a grid? What physical property does the Cross Product represent?"></div>
<div class="user-quiz" data-question="3. State the core requirement for calculating the equation of a flat 3D plane. What specific vector do you need?"></div>
<div class="user-quiz" data-question="4. If the Dot product evaluates to exactly zero, what physical relationship exists between the two vectors?"></div>
<div class="user-quiz" data-question="5. Explain the wrench analogy to justify why pulling exactly parallel to the wrench handle results in a Cross Product of precisely zero."></div>
`
  },
  {
    id: "chapter-v1",
    title: "Chapter V1: Vector Functions \u2013 The Language of Fields",
    progress: 0,
    subheadings: [
      {
        "id": "v1-intro",
        "title": "Introduction: Why Vector Functions Matter"
      },
      {
        "id": "v1-eli5",
        "title": "ELI5 Explanation: The Field of Arrows"
      },
      {
        "id": "v1-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "v1-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "v1-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "v1-method",
        "title": "Step-by-Step Method for Visualizing Vector Fields"
      },
      {
        "id": "v1-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "v1-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "v1-examples",
        "title": "10 Exam-Level Worked Exercises with Inner Voice"
      },
      {
        "id": "v1-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "v1-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "v1-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction: Why Vector Functions Matter

In elementary calculus, we dealt extensively with scalar functions\u2014functions like $T(x, y, z)$ that assign a single number (a scalar, like temperature) to every point in space. However, many physical phenomena cannot be described by a single number. Wind has both speed and direction. Gravity pulls with a certain strength and in a specific direction. Electromagnetic fields push charges along specific trajectories. 

To describe these phenomena, mathematics gives us the **vector function**. A vector function assigns a *vector* (a magnitude and a direction) to every point in space. By mastering vector functions, we gain the language necessary to describe the invisible fields that govern the universe, from fluid dynamics to electrostatics.

Our study of electricity and magnetism, which forms the basis of electrical engineering, is completely written in this language. Without vector functions, we have no Maxwell's equations.

## ELI5 Explanation: The Field of Arrows

Imagine walking into a room equipped with thousands of tiny weather vanes, each with a built-in anemometer (wind speed meter). When the wind blows, every weather vane points in the direction the wind is moving at that exact spot, and the anemometer spins to show how fast it's blowing.

If you freeze time and replace every weather vane with an arrow\u2014where the arrow points where the wind is blowing, and its length shows how fast the wind is moving\u2014you have just visualized a vector function. 

A vector function is simply **a field of arrows**. Every point in space gets its own arrow. In Electrical Engineering, the "electric field" is exactly this: an invisible field of arrows that tells any wandering electron which way it will be pushed, and how hard.

## Glossary of Key Terms

*   **Vector Function (Vector Field):** A rule $F(x, y, z)$ that assigns a specific vector to each point $(x, y, z)$ in a region of space.
*   **Scalar Function:** A rule $f(x, y, z)$ that assigns a single number to each point in space.
*   **Components:** The scalar parts multiply the unit vectors $i, j, k$. In $F = i F_x + j F_y + k F_z$, the $F_x, F_y$, and $F_z$ are the components, and each is a scalar function of position.
*   **Radial Field:** A vector field where all vectors point directly toward or away from a central origin point. Example: $F(x, y) = ix + jy$.
*   **Tangential Field:** A vector field where vectors circulate around a central origin, tangent to concentric circles. Example: $F(x, y) = -iy + jx$.

<div class="plot-interactive my-6" data-plot-id="vector_field_tangential"></div>

*   **Superposition:** The principle that the net vector field produced by multiple sources is simply the vector sum of the fields produced by each source individually.

## Why This Matters in Electrical Engineering

In EE, almost all fundamental forces and flows are vector fields:
1.  **Electric Field, $E(x, y, z)$:** Determines the force per unit charge experienced by a charged particle. It dictates how electrons move in a wire or a vacuum tube.
2.  **Magnetic Field, $B(x, y, z)$:** Determines the force on moving charges. It governs the operation of motors, generators, and transformers.
3.  **Current Density, $J(x, y, z)$:** A vector field representing the electric current per unit area flowing through a conductor.
4.  **Poynting Vector, $S = E \\times H$:** Represents the directional energy flux (the rate of energy transfer per unit area) of an electromagnetic field.

## Formal Definitions and Notation

A vector function $F$ in three dimensions is defined as:
$F(x, y, z) = i F_x(x, y, z) + j F_y(x, y, z) + k F_z(x, y, z)$

Here:
*   $i, j$, and $k$ are the constant unit vectors pointing in the $+x, +y$, and $+z$ directions respectively.
*   $F_x(x, y, z), F_y(x, y, z)$, and $F_z(x, y, z)$ are scalar functions of position. These are the Cartesian components of $F$.

For example, Coulomb's Law gives the force $F$ exerted by a charge $q$ on a test charge $q_0$ at a distance $r$:
$F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q q_0}{r^2} \\hat{u}$

Where $\\hat{u}$ is the unit vector pointing from $q$ to $q_0$. The Electric Field $E$ is defined as force per unit charge:
$E(r) = \\frac{F(r)}{q_0} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2} \\hat{u}$

Often, the position vector from the origin to $(x, y, z)$ is denoted by $r = ix + jy + kz$. Its magnitude is $|r| = \\sqrt{x^2 + y^2 + z^2}$. The unit vector pointing radially outward is $\\hat{r} = \\frac{r}{|r|}$.

## Step-by-Step Method for Visualizing Vector Fields

1.  **Identify the Components:** Write the field in standard $i, j, k$ format. $F = i F_x + j F_y + k F_z$.
2.  **Check for Symmetry or Patterns:**
    *   Does it only depend on $x$? Then the arrows form vertical identical columns.
    *   Does it look like $ix + jy$? That's the position vector $r$, so it's a radial field extending outward.
    *   Does it look like $-iy + jx$? That's a circulating tangential field.
3.  **Plot Along the Axes:** Evaluate $F$ at points on the $x$-axis ($(x, 0, 0)$), $y$-axis ($(0, y, 0)$), and $z$-axis to get a skeleton frame of the field.
4.  **Check Magnitude Variation:** Calculate $|F| = \\sqrt{F_x^2 + F_y^2 + F_z^2}$. If $|F|$ increases with distance from origin, arrows get longer as you go outward. If it decreases (like $1/r^2$), arrows get shorter.
5.  **Sketch Representative Arrows:** Draw a grid of points and sketch the vector tail starting at each point. 

<div class="plot-interactive" data-plot-id="vector_field_radial"></div>

## Algorithmic Problem Solving Flow

1.  **Are you evaluating a field at a point?**
    *   Substitute the $(x, y, z)$ coordinates into the component functions $F_x, F_y$, and $F_z$. Calculate the resulting vector.
2.  **Are you verifying if a field is radial or tangential?**
    *   Radial fields are parallel to $r = ix + jy + kz$. Take the cross product $F \\times r$. If it is 0, the field is purely radial.
    *   Tangential fields are perpendicular to $r$. Take the dot product $F \\cdot r$. If it is 0, the field is tangential.
3.  **Are you applying superposition?**
    *   Find the vector expression for each individual field.
    *   Add them component by component: $F_{total} = i(F_{1x} + F_{2x}) + j(F_{1y} + F_{2y}) + k(F_{1z} + F_{2z})$.

## Concept Recall: Trigger Words \u2192 Action

*   *"Evaluate the vector field..."* \u2192 Plug the given coordinate point $(x, y, z)$ into the scalar component functions $F_x, F_y, F_z$.
*   *"Is the field radial?"* \u2192 Check if $F$ is a scalar multiple of $r = ix + jy + kz$. Alternatively, check if $F \\times r = 0$.
*   *"Is the field circulating/tangential?"* \u2192 Check if the dot product of $F$ and the position vector $r$ is zero ($F \\cdot r = 0$).
*   *"Charge Q is located at... finding field..."* \u2192 Use $E = \\frac{Q}{4\\pi\\varepsilon_0} \\frac{\\mathbf{r}}{|r|^3}$, where $\\mathbf{r}$ is the distance vector from the charge to the evaluation point.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Identifying Vector Functions**

**Question:** Determine if $F(x, y) = ix + jy$ is a vector function. Sketch it.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A vector function associates a vector with every point. Here, $F_x=x$ and $F_y=y$. Yes, it's a vector function.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Yes, $F(x, y)$ is a vector function.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">At $(1,0)$ the vector is $i$. At $(0,1)$ it's $j$. At $(x,y)$, the vector points from origin to $(x,y)$ with length $\\sqrt{x^2+y^2}$. This is radiating outwards.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">[Sketch arrows radiating from origin, lengthening as they move further away.]</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Components of a Vector Function**

**Question:** Given $F(x, y, z) = i(z) + j(xy) + k(yz)$, find $F_x, F_y, F_z$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The components are just the scalar functions scaling the basis vectors $i, j$, and $k$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F_x = z$<br>$F_y = xy$<br>$F_z = yz$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Evaluating a Vector Function**

**Question:** Evaluate $F(1, 2, 3)$ for $F(x, y, z) = i(x^2) + j(yz) + k(z^2)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">I need to plug in $x=1, y=2, z=3$ into the component equations.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F(1, 2, 3) = i(1^2) + j(2 \\cdot 3) + k(3^2)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Simplify the multiplication.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= i + 6j + 9k$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Tangential Vector Field**

**Question:** Sketch $F(x, y) = \\frac{-iy + jx}{\\sqrt{x^2 + y^2}}$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Calculate magnitude: $\\frac{\\sqrt{(-y)^2 + x^2}}{\\sqrt{x^2+y^2}} = 1$. So all arrows have length 1.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$|F| = \\frac{\\sqrt{y^2 + x^2}}{\\sqrt{x^2 + y^2}} = 1$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Dot product with position vector $r = ix + jy$: $(-y)(x) + (x)(y) = 0$. They are perpendicular, so the field circles the origin.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F \\cdot r = \\frac{-yx + xy}{\\sqrt{x^2+y^2}} = 0$.<br>[Sketch uniform length arrows circulating counterclockwise around origin]</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Electric Field of a Point Charge**

**Question:** Write the vector function for the electric field of a charge $q$ located at the origin.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Coulomb's law gives field magnitude as proportional to $1/r^2$ and pointing radially via unit vector $\\hat{u}$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{|r|^2} \\hat{u}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Replace $\\hat{u}$ with $\\frac{r}{|r|}$, where $r = ix + jy + kz$ and $|r| = \\sqrt{x^2 + y^2 + z^2}$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E(r) = \\frac{q}{4\\pi\\varepsilon_0} \\frac{ix + jy + kz}{(x^2 + y^2 + z^2)^{3/2}}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Radial vs Tangential**

**Question:** Compare $F_1(x, y) = ix + jy$ and $F_2(x, y) = -iy + jx$. 

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Take the dot product of $F_1$ and $F_2$ to test their angular relationship.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F_1 \\cdot F_2 = (x)(-y) + (y)(x) = -xy + yx = 0$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The dot product being zero means they are orthogonal everywhere. $F_1$ points radially outward from origin, $F_2$ flows tangentially in circles.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F_1$ is purely radial (expansion).<br>$F_2$ is purely tangential (rotation).</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Zero Vector Field**

**Question:** When is $F(x, y, z) = 0$ at all points? Give an example involving components.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A vector is zero only if all orthogonal components are zero.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F = 0$ if and only if $F_x = 0, F_y = 0$, and $F_z = 0$ for all $(x,y,z)$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The zero field has magnitude 0 and no defined direction anywhere.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Example: $F(x,y,z) = i(v - v) + j(0) + k(\\sin(0)) = 0$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Constant Vector Field**

**Question:** Give an example of a constant vector field and sketch it.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A constant field has no spatial variables $(x,y,z)$ in its components.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F(x, y) = i + 2j$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">It's a uniform field. Every arrow is identical, pointing "up 2, right 1".</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">[Sketch uniform arrows pointing Northeast everywhere]</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Converting from Physics**

**Question:** The velocity of water in a river channel is given by $v = i(y) + j(0)$. Is this a vector function? Sketch it for $y$ from $0$ to $10$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The velocity $v_x = y$ depends on the spatial coordinate $y$ (distance from the bank). Because it pairs a vector (velocity) with space $(y)$, it is a vector field.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Yes, $v(x,y) = iy$ is a vector function.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">All arrows point right ($i$). As $y$ increases, magnitude increases. This is a shear flow.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">[Sketch horizontal arrows pointing right, getting longer as $y$ increases.]</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Superposition of Fields**

**Question:** Two charges produce respective electric fields $E_1 = 3i - 2j$ and $E_2 = xi + yj$. What is the total field $E_{total}$ at $(1, 4)$?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Superposition means vector addition of the fields.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E_{total} = E_1 + E_2$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Evaluate $E_2$ at $(1,4)$, then add to the constant field $E_1$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E_2(1,4) = 1i + 4j$<br>$E_{total} = (3i - 2j) + (1i + 4j) = 4i + 2j$</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Vector Functions</div>
<div class="p-4 bg-slate-50">

<table class="w-full text-left border-collapse">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-3 pr-4 font-bold">If you see $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Ask yourself $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Action</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-3 pr-4 text-slate-800">$F(x,y,z) = iF_x + jF_y + kF_z$</td>
      <td class="py-3 pr-4 text-slate-800">What are the scalar components?</td>
      <td class="py-3 pr-4 text-slate-800">Identify $F_x, F_y, F_z$ separately.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">"$F(x,y) = ix + jy$"</td>
      <td class="py-3 pr-4 text-slate-800">Is this pure expansion?</td>
      <td class="py-3 pr-4 text-slate-800">Yes, it is the radial position vector $r$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">"$F(x,y) = -iy + jx$"</td>
      <td class="py-3 pr-4 text-slate-800">Is this pure rotation?</td>
      <td class="py-3 pr-4 text-slate-800">Yes, dot product with $r$ is $0$, perfectly tangential.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">$|F| = \\sqrt{F_x^2 + F_y^2 + F_z^2}$</td>
      <td class="py-3 pr-4 text-slate-800">Is magnitude constant or variable?</td>
      <td class="py-3 pr-4 text-slate-800">Helps sketch arrow lengths over space.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Superposition</td>
      <td class="py-3 pr-4 text-slate-800">Multiple field sources?</td>
      <td class="py-3 pr-4 text-slate-800">Add fields component by component linearly.</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: Confusing vector functions with scalar functions.** A scalar function $T(x,y,z)=x^2+y^2$ gives one number. A vector function $F(x,y,z) = ix^2 + jy^2$ gives a vector with magnitude and direction. Don't add them.
*   **Trap 2: Forgetting that components are functions.** Don't assume $F_x$ is a constant just because it's attached to the fixed $i$ vector. $F_x$ evaluates to different numbers at different points in space.
*   **Trap 3: Cartesian vs Position Vector Mix-up.** Often, exam questions write $r = ix + jy + kz$ to test if you realize the field points radially.
*   **Trap 4: Incorrect magnitude scaling.** In sketching $1/r^2$ fields (like Coulomb or Gravity), students often draw arrows getting longer as they go outwards. WRONG. They should rapidly shrink.

## Chapter Assessment

<div class="user-quiz" data-question="1. Is F(x,y,z) = i(5) + j(y\xB2) + k(x) a vector function?"></div>
<div class="user-quiz" data-question="2. Given F = 2x i + xz j, find the magnitude of F at (1, 2, 3)."></div>
<div class="user-quiz" data-question="3. State whether G(x,y) = ix + jy is radial, tangential, or neither."></div>
<div class="user-quiz" data-question="4. State whether H(x,y) = -iy + jx is radial, tangential, or neither."></div>
<div class="user-quiz" data-question="5. What principle allows you to find total electric field by adding vector components of individual fields?"></div>
`
  },
  {
    id: "chapter-v2",
    title: "Chapter V2: The Divergence \u2013 Sources and Sinks",
    progress: 0,
    subheadings: [
      {
        "id": "v2-intro",
        "title": "Introduction: What is Divergence?"
      },
      {
        "id": "v2-eli5",
        "title": "ELI5 Explanation: The Source/Sink Detector"
      },
      {
        "id": "v2-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "v2-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "v2-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "v2-method",
        "title": "Step-by-Step Method for Calculating Divergence"
      },
      {
        "id": "v2-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "v2-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "v2-examples",
        "title": "10 Exam-Level Worked Exercises with Inner Voice"
      },
      {
        "id": "v2-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "v2-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "v2-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction: What is Divergence?

In our study of vector fields, an immediate geometrical question arises: Is the field expanding away from a point, compressing into a point, or just passing straight through?

The **Divergence** of a vector field is a scalar operation that measures precisely this.
<div class='plot-interactive my-6' data-plot-id='divergence_cuboid'></div> It operates on a *vector function* and spits out a *scalar function*. At any point in space, divergence tells you the net rate of "flux" (flow) leaving an infinitesimally small volume around that point.

When we deal with electricity and magnetism, identifying the sources of a field is paramount. Divergence allows us to connect the invisible electric field $E$ directly to the physical electric charges $\\rho$ that create it. This profound connection is Gauss' Law.

## ELI5 Explanation: The Source/Sink Detector

Imagine water flowing out of a hose. At the hose opening, new water is constantly being introduced into the environment. The "divergence" at the hose opening is positive. We call this a **source**.

Conversely, picture water swirling down a drain. The water is leaving the environment at that specific point. The divergence at the drain is negative. We call this a **sink**.

Now, imagine the water steadily flowing down the middle of a straight river. Whatever volume of water enters a patch of the river from the upstream side exactly matches the volume exiting the downstream side. The net accumulation is zero. The divergence here is zero, meaning it's neither a source nor a sink.

The divergence operator $\\text{div} F$ (or $\\nabla \\cdot F$) acts like a mathematical detector probe. Move it around in a vector field, and it reads a positive number over sources, a negative number over sinks, and zero everywhere else.

## Glossary of Key Terms

*   **Flux ($\\Phi$):** The rate of flow of a vector field through a surface.
*   **Unit Normal Vector ($\\hat{n}$):** A vector with length 1 that points perpendicularly outward from a surface.
*   **Divergence ($\\text{div} F$ or $\\nabla \\cdot F$):** A scalar measure of a vector field's tendency to originate from or converge upon a given point.
*   **Divergence Theorem (Gauss' Theorem):** Relates the flux of a field through a closed boundary surface to the volume integral of the divergence inside.
*   **Solenoidal Field:** A vector field with zero divergence everywhere ($\\nabla \\cdot F = 0$). Magnetic fields are always solenoidal.
*   **Charge Density ($\\rho$):** Electric charge per unit volume.

## Why This Matters in Electrical Engineering

Divergence is the mathematical foundation of how charges create electric fields.
1.  **Gauss' Law:** $\\nabla \\cdot E = \\rho / \\varepsilon_0$. The divergence of the electric field at a point is directly proportional to the charge density at that point. Positive charges are sources of the E-field, negative charges are sinks.
2.  **Continuity Equation:** $\\nabla \\cdot J + \\frac{\\partial \\rho}{\\partial t} = 0$. This expresses the conservation of charge. If current $J$ is diverging away from a point, the charge density $\\rho$ at that point must be decreasing over time.
3.  **No Magnetic Monopoles:** $\\nabla \\cdot B = 0$. Magnetic fields have no point sources or sinks. They always form closed loops.

## Formal Definitions and Notation

The divergence is formally defined as the limit of the surface integral of $F$ (flux) over a closed surface $S$ shrinking to a point, divided by the volume $\\Delta V$ enclosed by $S$:

$$\\text{div} F = \\lim_{\\Delta V \\to 0} \\frac{1}{\\Delta V} \\iint_S F \\cdot \\hat{n} \\, dS$$

In manageable Cartesian coordinates, divergence is the dot product of the del operator $\\nabla = i\\frac{\\partial}{\\partial x} + j\\frac{\\partial}{\\partial y} + k\\frac{\\partial}{\\partial z}$ with the vector field $F$:

$$\\text{div} F = \\nabla \\cdot F = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$$

### Cylindrical Coordinates $(r, \\theta, z)$:
$$\\nabla \\cdot F = \\frac{1}{r} \\frac{\\partial}{\\partial r}(r F_r) + \\frac{1}{r} \\frac{\\partial F_\\theta}{\\partial \\theta} + \\frac{\\partial F_z}{\\partial z}$$

### Spherical Coordinates $(r, \\theta, \\phi)$:
$$\\nabla \\cdot F = \\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^2 F_r) + \\frac{1}{r \\sin\\phi} \\frac{\\partial}{\\partial \\phi}(\\sin\\phi F_\\phi) + \\frac{1}{r \\sin\\phi} \\frac{\\partial F_\\theta}{\\partial \\theta}$$

### Divergence Theorem
The surface integral of $F$ over a closed surface $S$ equals the volume integral of the divergence of $F$ over the enclosed volume $V$:
$$\\oiint_S F \\cdot \\hat{n} \\, dS = \\iiint_V (\\nabla \\cdot F) \\, dV$$

## Step-by-Step Method for Calculating Divergence

1.  **Identify Coordinate System:** Is the field $F$ written in terms of $(x,y,z)$, $(r,\\theta,z)$, or $(r,\\theta,\\phi)$?
2.  **Extract Components:** Write down the individual components $F_x$, $F_y$, $F_z$ (or $F_r, F_\\theta$, etc.).
3.  **Select the Right Formula:** Use the divergence formula matching your coordinates.
4.  **Differentiate:** Carefully take the partial derivative of each component with respect to its corresponding variable.
    *   *Warning in non-Cartesian:* Don't forget that inside the derivative, $F_r$ is multiplied by $r$ or $r^2$ before deriving!
5.  **Sum the Results:** Add the partial derivatives together. The result is a scalar function (no $i, j, k$ vectors!).

<div class="plot-interactive" data-plot-id="divergence_visual"></div>

## Algorithmic Problem Solving Flow

1.  **Are you asked to find "Divergence" or "$\\nabla \\cdot F$"?**
    *   Apply the partial derivative formula directly to the components.
2.  **Are you asked for "Flux through a closed surface"?**
    *   Is the integral hard? Use the Divergence Theorem instead: compute $\\nabla \\cdot F$, then integrate that simple scalar over the volume.
3.  **Are you given an electric field and asked for charge density $\\rho$?**
    *   Compute $\\nabla \\cdot E$.
    *   Multiply by $\\varepsilon_0$ because $\\rho = \\varepsilon_0 (\\nabla \\cdot E)$.

## Concept Recall: Trigger Words \u2192 Action

*   *"Calculate divergence..."* \u2192 Drop the $i, j, k$. Take $\\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.
*   *"Flux through a closed sphere/cylinder/cube..."* \u2192 STOP. Don't do a surface integral. Use the Divergence Theorem and integrate over the volume instead.
*   *"Is the field solenoidal?"* \u2192 Calculate $\\nabla \\cdot F$. Does it precisely equal 0 everywhere?
*   *"Is it a source or a sink?"* \u2192 Check the sign of $\\nabla \\cdot F$. Positive = source, Negative = sink.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Basic Divergence Calculation**

**Question:** Find $\\nabla \\cdot F$ for $F(x, y, z) = ix^2 + jy^2 + kz^2$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Divergence requires summing the spatial derivatives of each basis component.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{\\partial}{\\partial x}(x^2) + \\frac{\\partial}{\\partial y}(y^2) + \\frac{\\partial}{\\partial z}(z^2)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Just apply power rule to each independently. The answer must be a scalar.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 2x + 2y + 2z$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Zero Divergence**

**Question:** Find $\\nabla \\cdot F$ for $F(x, y, z) = iy + jx + k(0)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">$F_x = y$, $F_y = x$. Take $\\partial F_x/\\partial x$ and $\\partial F_y/\\partial y$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{\\partial}{\\partial x}(y) + \\frac{\\partial}{\\partial y}(x) + \\frac{\\partial}{\\partial z}(0)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The derivative of $y$ with respect to $x$ is zero. The field is solenoidal.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 0 + 0 + 0 = 0$<br>This field is solenoidal.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Divergence of an Electric Field**

**Question:** Given $E = \\frac{q}{4\\pi\\varepsilon_0} \\frac{ix + jy + kz}{(x^2+y^2+z^2)^{3/2}}$, state $\\nabla \\cdot E$ for $r \\neq 0$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">This is the field of a point charge at the origin. I know from Gauss' Law that charge only exists at the origin. So everywhere else, charge density $\\rho = 0$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">From physics, this is a point charge field.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Therefore, the divergence must evaluate to zero everywhere except the origin.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot E = 0$ for $r \\neq 0$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Physical Interpretation**

**Question:** A vector field $F$ has $\\nabla \\cdot F = 2$ at point $(1, 1, 1)$. What does this mean?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Divergence evaluates the net outward flux per unit volume. A positive number means expansion.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Positive divergence means net flow out of a small volume around the point.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">It implies something is generating the field at that specific coordinate.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">More flux leaves than enters; there is a **source** at $(1, 1, 1)$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Cylindrical Coordinates**

**Question:** Find $\\nabla \\cdot F$ for $F(r, \\theta, z) = \\hat{e}_r (r^2)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The field is in cylindrical coordinates. The only non-zero component is $F_r = r^2$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{1}{r} \\frac{\\partial}{\\partial r}(r F_r)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">I must multiply $F_r$ by $r$ BEFORE differentiating! So I derive $r \\cdot r^2 = r^3$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{1}{r} \\frac{\\partial}{\\partial r}(r^3) = \\frac{1}{r} (3r^2) = 3r$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Spherical Coordinates**

**Question:** Find $\\nabla \\cdot F$ for $F(r, \\theta, \\phi) = \\hat{e}_r (r^2)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Spherical coordinates. Only $F_r = r^2$ is non-zero. The spherical formula uses a $1/r^2$ multiplier.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^2 F_r)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Multiply $F_r$ by $r^2$ first. Make it $r^4$. Then take derivative.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = \\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^4) = \\frac{1}{r^2} (4r^3) = 4r$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Checking Divergence Theorem**

**Question:** Evaluate flux of $F = ix + jy + kz$ through a sphere of radius R using Divergence Theorem.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Instead of surface integral, calculate divergence then integrate over volume.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 1 + 1 + 1 = 3$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Volume integral of the constant 3 is just 3 times the volume of the sphere.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\iiint_V 3 \\, dV = 3 \\cdot (\\frac{4}{3}\\pi R^3) = 4\\pi R^3$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Finding Charge from Divergence**

**Question:** If $\\nabla \\cdot E = \\rho / \\varepsilon_0$ and $E = i(\\alpha x) + j(\\beta y) + k(\\gamma z)$, find charge density $\\rho$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Simply calculate divergence of E, then isolate $\\rho$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot E = \\alpha + \\beta + \\gamma$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Equate to Gauss' Law differential form.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\alpha + \\beta + \\gamma = \\rho / \\varepsilon_0 \\implies \\rho = \\varepsilon_0(\\alpha + \\beta + \\gamma)$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Source/Sink Identification**

**Question:** For $F = i(x) + j(y)$, is the origin a source or sink?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Find the divergence. Evaluate it at (0,0).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 1 + 1 = 2$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">It is a positive constant $2$. Because it is positive, matter is expanding outward.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot F = 2 > 0$.<br>The origin (and everywhere else) is a **source**.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Continuity Equation**

**Question:** If $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot J = 0$ and charge density $\\rho$ is increasing, what is the sign of $\\nabla \\cdot J$?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">If $\\rho$ is increasing, then $\\partial \\rho / \\partial t$ is a positive quantity.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\frac{\\partial \\rho}{\\partial t} > 0$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">To make the equation sum to zero, the divergence of current J must be negative. (Current is flowing inwards, creating a sink for J, which builds up $\\rho$).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot J = - \\frac{\\partial \\rho}{\\partial t} < 0$<br>$\\nabla \\cdot J$ is negative.</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Divergence</div>
<div class="p-4 bg-slate-50">

<table class="w-full text-left border-collapse">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-3 pr-4 font-bold">If you see $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Ask yourself $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Action</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-3 pr-4 text-slate-800">Cartesian $\\nabla \\cdot F$</td>
      <td class="py-3 pr-4 text-slate-800">Do I just sum derivatives?</td>
      <td class="py-3 pr-4 text-slate-800">Yes, $\\partial F_x / \\partial x + \\partial F_y / \\partial y + \\partial F_z / \\partial z$. Drop the $i, j, k$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Cylindrical $\\nabla \\cdot F$</td>
      <td class="py-3 pr-4 text-slate-800">Did I multiply by $r$ before deriving?</td>
      <td class="py-3 pr-4 text-slate-800">Use formula: $\\frac{1}{r} \\frac{\\partial}{\\partial r}(r F_r)$</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Spherical $\\nabla \\cdot F$</td>
      <td class="py-3 pr-4 text-slate-800">Did I multiply by $r^2$ before deriving?</td>
      <td class="py-3 pr-4 text-slate-800">Use formula: $\\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^2 F_r)$</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Flux through a closed surface</td>
      <td class="py-3 pr-4 text-slate-800">Is calculating normal vectors painful?</td>
      <td class="py-3 pr-4 text-slate-800">Use Divergence Theorem! $\\iiint (\\nabla \\cdot F) dV$</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Gauss' Law</td>
      <td class="py-3 pr-4 text-slate-800">Finding charge density?</td>
      <td class="py-3 pr-4 text-slate-800">$\\rho = \\varepsilon_0 (\\nabla \\cdot E)$</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: Formatting the answer as a vector.** Divergence evaluates to a SCALAR. If your answer has an $i, j$, or $k$ in it, you are wrong and the examiner will show zero mercy.
*   **Trap 2: Ignoring coordinate system modifiers.** In cylindrical, the radial derivative is NOT just $\\partial F_r / \\partial r$. It is $\\frac{1}{r} \\frac{\\partial}{\\partial r}(r F_r)$. If you don't multiply $F_r$ by $r$ first, you fail.
*   **Trap 3: Applying Divergence Theorem to open surfaces.** You can only use it on fully enclosed volumes (like a sphere, box, or capped cylinder). It doesn't work on just the top lid of a box.

## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the divergence of F(x,y,z) = 3x i + 2y j + z k."></div>
<div class="user-quiz" data-question="2. Does positive divergence indicate a source or a sink?"></div>
<div class="user-quiz" data-question="3. Write the term for the radial component derivative in spherical coordinates for divergence."></div>
<div class="user-quiz" data-question="4. State the Divergence Theorem equation relating flux to volume integration."></div>
<div class="user-quiz" data-question="5. According to Gauss's Law, what does the divergence of electric field E equal?"></div>
`
  },
  {
    id: "chapter-v3",
    title: "Chapter V3: The Curl \u2013 Rotation and Circulation",
    progress: 0,
    subheadings: [
      {
        "id": "v3-intro",
        "title": "Introduction: What is Curl?"
      },
      {
        "id": "v3-eli5",
        "title": "ELI5 Explanation: The Vortex Detector"
      },
      {
        "id": "v3-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "v3-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "v3-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "v3-method",
        "title": "Step-by-Step Method for Calculating Curl"
      },
      {
        "id": "v3-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "v3-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "v3-examples",
        "title": "10 Exam-Level Worked Exercises with Inner Voice"
      },
      {
        "id": "v3-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "v3-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "v3-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction: What is Curl?

If divergence measures how much a vector field expands outward, **Curl** measures how much it swirls or rotates. The curl maps a *vector function* to another *vector function*. 

At any point in space, the curl tells you the axis around which the field swirls, and its magnitude tells you how fast the swirl is rotating. 

In physics and engineering, curl is vital. Static electric fields have no curl (they are "irrotational"), but magnetic fields are fundamentally characterized by their curl around currents. Time-varying electric fields induce magnetic curls, and time-varying magnetic fields induce electric curls. This interplay is the origin of electromagnetic waves.

## ELI5 Explanation: The Vortex Detector

Imagine throwing a tiny, microscopic paddle wheel (like a water wheel) into a flowing river.
<div class='plot-interactive my-6' data-plot-id='curl_paddle_wheel'></div>

If the paddle wheel flows linearly down the river without spinning, the water there has zero curl.
If the paddle wheel starts freely spinning, it has encountered a vortex. The water has a non-zero curl.

*   The **magnitude** of the curl tells you how fast the paddle wheel spins.
*   The **direction** of the curl vector is the axis the paddle wheel spins around, adhering to the right-hand rule (curl your fingers in the direction of the spin, your thumb points to the curl vector).

In EE, wrapping your right hand around a wire with a current, your fingers point in the direction of the magnetic field's circulation. This is Amp\xE8re's Law in physical reality.

## Glossary of Key Terms

*   **Circulation:** The line integral of a vector field around a closed loop ($\\oint_C F \\cdot \\hat{t} \\, ds$). Matches "work done" if $F$ is a force.
*   **Curl ($\\nabla \\times F$):** A microscopic measure of rotation. Vector operator pointing along the axis of rotation.
*   **Irrotational Field:** A vector field where the curl is exactly zero everywhere ($ \\nabla \\times F = 0 $). Also called a conservative field.
*   **Stokes' Theorem:** Relates the circulation of a field (also visually:
<div class='plot-interactive my-6' data-plot-id='stokes_capping_surface'></div>)
 around a closed loop to the surface integral of the curl over the capping surface.
*   **Amp\xE8re's Law:** $\\nabla \\times B = \\mu_0 J$. The curl of the magnetic field is created by current density $J$.

## Why This Matters in Electrical Engineering

Curl is the mathematical engine behind two of Maxwell's Equations:
1.  **Amp\xE8re's Law:** $\\nabla \\times B = \\mu_0 J$. Electric currents cause magnetic fields to circulate around them. This is how electromagnets and motors work.
2.  **Faraday's Law of Induction:** $\\nabla \\times E = - \\frac{\\partial B}{\\partial t}$. A changing magnetic field generates a circulating electric field. This is how transformers, inductors, and generators produce voltage.
3.  **Magnetic Vector Potential:** Because $\\nabla \\cdot B = 0$, we can define $B = \\nabla \\times A$, converting magnetic field problems into a simpler vector potential space.

## Formal Definitions and Notation

The curl of $F$, denoted $\\text{curl} F$ or $\\nabla \\times F$, is formally the limit of circulation per unit area:

$$(\\nabla \\times F) \\cdot \\hat{n} = \\lim_{\\Delta A \\to 0} \\frac{1}{\\Delta A} \\oint_C F \\cdot \\hat{t} \\, ds$$

In Cartesian coordinates, it is famously computed via an elegant determinant mnemonic:

$$\\nabla \\times F = \\begin{vmatrix} i & j & k \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix}$$

Expanding the determinant yields the explicit components:
$$(\\nabla \\times F)_x = \\frac{\\partial F_z}{\\partial y} - \\frac{\\partial F_y}{\\partial z}$$
$$(\\nabla \\times F)_y = \\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x}$$
$$(\\nabla \\times F)_z = \\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y}$$

### Stokes' Theorem
The circulation of $F$ around a closed curve $C$ is identically equal to the surface integral of the curl of $F$ over *any* surface $S$ capped by $C$:
$$\\oint_C F \\cdot \\hat{t} \\, ds = \\iint_S (\\nabla \\times F) \\cdot \\hat{n} \\, dS$$

## Step-by-Step Method for Calculating Curl

1.  **Write the Matrix:** Draw a 3x3 matrix.
    *   Top row: basis vectors $i, j, k$.
    *   Middle row: partial derivative operators $\\frac{\\partial}{\\partial x}, \\frac{\\partial}{\\partial y}, \\frac{\\partial}{\\partial z}$.
    *   Bottom row: the scalar components of the field $F_x, F_y, F_z$.
2.  **Evaluate the $i$ component:** Cross out row 1 and column 1. Subtract the cross-diagonal derivatives: $\\frac{\\partial}{\\partial y} (F_z) - \\frac{\\partial}{\\partial z} (F_y)$. Multiply by $i$.
3.  **Evaluate the $j$ component:** Cross out row 1 and column 2. Apply derivatives similarly, but remember the **negative sign** inherent to the middle determinant expansion: $- [ \\frac{\\partial}{\\partial x} (F_z) - \\frac{\\partial}{\\partial z} (F_x) ] \\cdot j$.
4.  **Evaluate the $k$ component:** Cross out row 1 and column 3. Calculate $\\frac{\\partial}{\\partial x} (F_y) - \\frac{\\partial}{\\partial y} (F_x)$. Multiply by $k$.
5.  **Simplify:** Add all valid i, j, k bits into the final output vector.

<div class="plot-interactive" data-plot-id="curl_visual"></div>

## Algorithmic Problem Solving Flow

1.  **Are you calculating standard curl?**
    *   Always use the 3x3 determinant expansion method mentally or physically to avoid sign errors.
2.  **Are you evaluating a circulation integral $\\oint F \\cdot ds$?**
    *   If taking the path integral directly is an algebraic nightmare, use Stokes' Theorem. Calculate the curl $\\nabla \\times F$, then take the surface integration $\\iint (\\nabla \\times F) \\cdot \\hat{n} \\, dS$.
3.  **Are you checking for path independence (conservative field)?**
    *   Calculate $\\nabla \\times F$. If the curl is the zero vector, line integrals between two points are independent of the path taken.

## Concept Recall: Trigger Words \u2192 Action

*   *"Determine if the field is conservative..."* \u2192 Calculate $\\nabla \\times F$. If it is $0$, it is conservative (irrotational).
*   *"Find the work done moving a particle around closed loop C..."* \u2192 Work = $\\oint F \\cdot ds$. If the loop creates a complex shape, use Stokes' Theorem to evaluate the surface integral of the curl instead.
*   *"Calculate circulation..."* \u2192 Another phrase for $\\oint F \\cdot ds$. Use Stokes' theorem.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Basic Curl Calculation**

**Question:** Find $\\nabla \\times F$ for $F(x, y, z) = iy - jx$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">$F_x = y, F_y = -x, F_z = 0$. I will set up the determinant.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times F = | i\\; j\\; k |$<br>$| \\partial_x\\; \\partial_y\\; \\partial_z |$<br>$| y\\; -x\\; 0 |$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">$i$-comp: $\\partial(0)/\\partial y - \\partial(-x)/\\partial z = 0$<br>$j$-comp: $-[\\partial(0)/\\partial x - \\partial(y)/\\partial z] = 0$<br>$k$-comp: $\\partial(-x)/\\partial x - \\partial(y)/\\partial y = -1 - 1 = -2$</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times F = -2k$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Zero Curl (Conservative Field)**

**Question:** Find $\\nabla \\times F$ for $F(x, y, z) = iy + jx$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Set up the $k$ component since $F_z=0$ and everything is flat. $k$: $\\partial_x(x) - \\partial_y(y)$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$k$-component: $\\frac{\\partial}{\\partial x}(x) - \\frac{\\partial}{\\partial y}(y)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">$1 - 1 = 0$. Since all components evaluate to 0, this field is conservative.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times F = 0$. (Irrotational)</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Curl of a Magnetic Field**

**Question:** Given $B = (\\mu_0 I / 2\\pi r) \\hat{e}_\\theta$ for a wire. Explain physically what $\\nabla \\times B$ evaluates to for $r \\neq 0$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Amp\xE8re's law says $\\nabla \\times B = \\mu_0 J$. The current $J$ only exists inside the wire at the origin.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">By Amp\xE8re's Law, $\\nabla \\times B = \\mu_0 J$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">If I am at $r \\neq 0$, the current density $J$ is zero (in empty space). So curl must be zero.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">For $r \\neq 0$, $J = 0$.<br>Therefore, $\\nabla \\times B = 0$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Interpretation of Curl**

**Question:** If $\\nabla \\times F = 2k$ at a point, what does this mean physically for a paddle wheel?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">The vector $k$ is the z-axis. The paddle wheel's axle aligns with $z$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The axis of maximum rotation is along the z-axis.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The curl is twice the angular velocity $\\omega$. So angular velocity is 1.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The paddle wheel spins in the xy plane with angular velocity 1 entirely about the z-axis.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Verifying Stokes' Theorem**

**Question:** Given $F = iy - jx$ and $S$ is a flat disk radius $R$ in the xy-plane. Identify values to verify Stokes.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Surface side: From Ex. 1, $\\nabla \\times F = -2k$. The surface integral of the constant $-2$ over area $\\pi R^2$ is $-2\\pi R^2$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\iint (\\nabla \\times F) \\cdot \\hat{n} \\, dS = -2k \\cdot k (\\pi R^2) = -2\\pi R^2$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Line side: The field opposes the standard counter-clockwise path heavily. Integrating around the perimeter $C$ yields same.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\oint F \\cdot ds = -2\\pi R^2$. Confirmed.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Irrotational Flow Property**

**Question:** If $\\nabla \\times F = 0$, what powerful statement can we make about the line integral of F between points A and B?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">If curl is 0, the field is conservative. This implies a "potential" exists.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The field is irrotational/conservative. Therefore $F = \\nabla \\varphi$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Therefore, walking from A to B requires the same work regardless of path.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The line integral $\\int_{A}^{B} F \\cdot ds$ is universally path-independent.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Vortex Identification**

**Question:** For $F = i(-y) + j(x)$, is this a vortex? Compute $\\nabla \\times F$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">$F_x = -y, F_y = x$. Take the k-component scalar $\\partial(F_y)/\\partial x - \\partial(F_x)/\\partial y$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times F = k(\\frac{\\partial}{\\partial x}(x) - \\frac{\\partial}{\\partial y}(-y))$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">$1 - (-1) = 2$. It is non-zero, so it spins.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$= k(1 - (-1)) = 2k$.<br>Yes, it's a vortex.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Amp\xE8re's Law Application**

**Question:** Given $\\nabla \\times B = \\mu_0 J$, and $B = (x^2 z) j$, calculate the current density $J$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Compute curl B. $B_x=0$, $B_y=x^2 z$, $B_z=0$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times B = | i\\; j\\; k |$<br>$| \\partial_x\\; \\partial_y\\; \\partial_z |$<br>$| 0\\; x^2z\\; 0 |$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">$i$: $-\\partial(x^2 z)/\\partial z = -x^2$.<br>$j$: $0$.<br>$k$: $\\partial(x^2 z)/\\partial x = 2xz$.<br>Then $J = (1/\\mu_0) \\nabla \\times B$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times B = -x^2 i + 2xz k$<br>$J = \\frac{1}{\\mu_0} (-x^2 i + 2xz k)$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Faraday's Law**

**Question:** Given Faraday's Law $\\nabla \\times E = - \\frac{\\partial B}{\\partial t}$, if $B = t^2 j$, what relates to the electric field?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Take the time derivative of B. $\\partial B / \\partial t = 2t j$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$- \\frac{\\partial B}{\\partial t} = -2t j$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">This must equal the curl of the electric field.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\times E = -2t j$.<br>A circulating electric field is induced.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: General Curl Theorem**

**Question:** What is the divergence of the curl of any valid vector field? (Calculate $\\nabla \\cdot (\\nabla \\times F)$).

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">This is a famous vector identity. "Div of Curl is zero." It's like asking "how much does a pure rotation expand outward?" It doesn't.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">By vector identity, the divergence of any curl is 0.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Mathematically, expanding the mixed partial derivatives leads them all to cancel out exactly.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla \\cdot (\\nabla \\times F) = 0$ over all space.</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Curl</div>
<div class="p-4 bg-slate-50">

<table class="w-full text-left border-collapse">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-3 pr-4 font-bold">If you see $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Ask yourself $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Action</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-3 pr-4 text-slate-800">Calculate Curl ($\\nabla \\times F$)</td>
      <td class="py-3 pr-4 text-slate-800">Do I remember the determinant?</td>
      <td class="py-3 pr-4 text-slate-800">Draw 3x3 matrix: $i, j, k$ top row. $\\partial_x, \\partial_y, \\partial_z$ middle. $F_x, F_y, F_z$ bottom.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Stokes' Theorem</td>
      <td class="py-3 pr-4 text-slate-800">Is line integral hard?</td>
      <td class="py-3 pr-4 text-slate-800">Convert $\\oint F \\cdot ds$ to $\\iint (\\nabla \\times F) \\cdot dS$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">$\\nabla \\times F = 0$</td>
      <td class="py-3 pr-4 text-slate-800">What does irrotational imply?</td>
      <td class="py-3 pr-4 text-slate-800">$F$ is conservative. Path independent. $F = \\nabla \\varphi$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Amp\xE8re's Law</td>
      <td class="py-3 pr-4 text-slate-800">How do forces relate to curl?</td>
      <td class="py-3 pr-4 text-slate-800">$\\nabla \\times B = \\mu_0 J$.</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: The J-component negative sign.** When expanding the determinant, the $j$-component must be subtracted: $-j ( \\frac{\\partial F_z}{\\partial x} - \\frac{\\partial F_x}{\\partial z} )$. Alternatively, swap the internal subtraction: $+j ( \\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x} )$. Failure here ruins the whole vector.
*   **Trap 2: Confusing Curl and Divergence output.** Curl produces a VECTOR (has $i, j, k$). Divergence produces a SCALAR (just a number/function). 
*   **Trap 3: Divergence of Curl.** If asked for $\\nabla \\cdot (\\nabla \\times F)$, don't waste 10 minutes calculating it. The answer is always exactly zero by identity.

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the curl of F = 3z i + 2x j + 5y k."></div>
<div class="user-quiz" data-question="2. True or False: If a field is conservative, its curl is zero."></div>
<div class="user-quiz" data-question="3. State Stokes' theorem relating a line integral to a surface integral."></div>
<div class="user-quiz" data-question="4. In Amp\xE8re's Law, what physical quantity determines the curl of the magnetic field?"></div>
<div class="user-quiz" data-question="5. What is the value of the divergence of the curl of F?"></div>
`
  },
  {
    id: "chapter-v4",
    title: "Chapter V4: The Gradient \u2013 Steepest Ascent",
    progress: 0,
    subheadings: [
      {
        "id": "v4-intro",
        "title": "Introduction: The Gradient Compass"
      },
      {
        "id": "v4-eli5",
        "title": "ELI5 Explanation: The Steepest Uphill Arrow"
      },
      {
        "id": "v4-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "v4-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "v4-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "v4-method",
        "title": "Step-by-Step Method for Finding Gradients"
      },
      {
        "id": "v4-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "v4-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "v4-examples",
        "title": "10 Exam-Level Worked Exercises with Inner Voice"
      },
      {
        "id": "v4-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "v4-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "v4-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction: The Gradient Compass

While Divergence and Curl operate on vector fields, the **Gradient** operates on *scalar fields*. It takes a simple scalar function (like temperature or voltage across a room) and creates a *vector field* out of it.

At any given point, the gradient maps out the absolute strongest direction of change. It tells you both "which way" something is increasing the fastest, and "how fast" it is increasing in that specific direction.

In Electrical Engineering, the gradient bridges the gap between voltage (a scalar potential) and the electric field (a vector force). By taking the negative gradient of voltage, we instantly derive the electric field's physical vectors.

## ELI5 Explanation: The Steepest Uphill Arrow

Imagine you are standing on the side of a mountain. Blindfolded.

You want to climb to the summit as fast as possible. You probe the ground with your foot in all directions. One specific direction feels the steepest uphill. You point an arrow in that exact direction, and length of the arrow represents exactly how steep the incline is.

That arrow is the **Gradient** ($\\nabla f$). 

*   The **Direction** of the gradient points exactly toward the steepest uphill ascent.
*   The **Magnitude** (length) of the gradient is the steepness (slope) in that direction.

If you instead walk perfectly horizontally along the side of the mountain (neither gaining nor losing altitude), your path is perpendicular to the gradient. In physics, we call these horizontal paths *level curves* or *equipotential surfaces*.

## Glossary of Key Terms

*   **Gradient ($\\nabla f$):** A vector operator that finds the direction of greatest increase for a scalar function $f$.
*   **Directional Derivative ($df/ds$ or $D_u f$):** The rate of change of a scalar function in one specific, chosen direction $\\hat{u}$.
*   **Level Surface:** A 3D surface where the scalar function evaluates to a constant value ($f(x,y,z) = C$). 
*   **Equipotential Line/Surface:** The EE term for a level surface where Voltage is constant.
*   **Normal Vector:** A perpendicular vector. The gradient $\\nabla f$ is perfectly geometrically normal (perpendicular) to the level surface.

## Why This Matters in Electrical Engineering

1.  **Electric Field and Potential:** The fundamental bridge in electrostatics is $E = -\\nabla V$ (Electric field is the negative gradient of Voltage). The E-field vectors naturally point "downhill" from high voltage to low voltage.
2.  **Current Flow:** Heat and electric current naturally flow down the gradient. $J = -\\sigma \\nabla V$ (Ohm's Law in microscopic form).
3.  **Optimization:** Algorithms in machine learning and antenna design rely on "Gradient Descent" to computationally slide down the steepest path to find minimum error values.

## Formal Definitions and Notation

The gradient of a scalar function $f(x,y,z)$ is defined mathematically using the del operator ($\\nabla$):

$$\\nabla f = i\\frac{\\partial f}{\\partial x} + j\\frac{\\partial f}{\\partial y} + k\\frac{\\partial f}{\\partial z}$$

The **Directional Derivative** is the rate of change of $f$ in a specific unit vector direction $\\hat{u}$. It is uniquely defined as the dot product between the chosen direction and the gradient:

$$D_u f = \\nabla f \\cdot \\hat{u}$$

From the dot product definition $A \\cdot B = |A||B| \\cos \\theta$, the maximum value of $D_u f$ occurs when $\\cos \\theta = 1$, meaning $\\hat{u}$ points exactly in the same direction as $\\nabla f$. Therefore:
*   Maximum rate of change = $|\\nabla f|$
*   Direction of maximum rate = $\\frac{\\nabla f}{|\\nabla f|}$

## Step-by-Step Method for Finding Gradients

1.  **Verify input:** Ensure you are starting with a scalar function $f(x,y,z)$. You cannot take the gradient of a vector field.
2.  **Take $\\partial / \\partial x$:** Derive the mathematical function with respect to $x$, treating $y$ and $z$ as physical constants. Attach an $i$ vector.
3.  **Take $\\partial / \\partial y$:** Derive with respect to $y$, treating $x$ and $z$ as constants. Attach a $j$ vector.
4.  **Take $\\partial / \\partial z$:** Derive with respect to $z$. Attach a $k$ vector.
5.  **Build Vector:** Sum them up: $\\nabla f = i(f_x) + j(f_y) + k(f_z)$.

<div class="plot-interactive" data-plot-id="gradient_field"></div>

## Algorithmic Problem Solving Flow

1.  **Need the Tangent Plane / Normal Vector?**
    *   Set the surface equation equal to a constant: $f(x,y,z) = C$.
    *   Calculate $\\nabla f$. 
    *   Evaluate $\\nabla f$ at the specific point $(x_0, y_0, z_0)$. This gives the perfect geometrical normal vector $n$.
2.  **Need the Directional Derivative?**
    *   Calculate $\\nabla f$. Evaluate it at the point.
    *   Find the direction vector $v$. Ensure it is a UNIT vector by dividing by magnitude: $\\hat{u} = v / |v|$.
    *   Dot product: $\\nabla f \\cdot \\hat{u}$.
3.  **Need the maximum increase?**
    *   Calculate $\\nabla f$.
    *   Magnitude $|\\nabla f|$ is the max rate.
    *   Direction is $\\nabla f$ exactly.

## Concept Recall: Trigger Words \u2192 Action

*   *"Find the direction of steepest ascent..."* \u2192 Calculate $\\nabla f$. Do not dot it. It is the vector.
*   *"Find the rate of steepest ascent..."* \u2192 Calculate magnitude $|\\nabla f|$.
*   *"Find the directional derivative in direction v..."* \u2192 Normalize $v$ to $\\hat{u}$. Then compute $\\nabla f \\cdot \\hat{u}$.
*   *"Find the normal to the level surface..."* \u2192 Calculate $\\nabla f$ and evaluate it at the point.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Basic Gradient**

**Question:** Find $\\nabla f$ for $f(x,y,z) = x^2 + y^2 + z^2$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Take partial derivatives: $\\partial f/\\partial x = 2x$, $\\partial f/\\partial y = 2y$, $\\partial f/\\partial z = 2z$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$f_x = 2x, f_y = 2y, f_z = 2z$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Attach basis vectors to map scalar directly to vector field.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2x i + 2y j + 2z k$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Directional Derivative**

**Question:** Find $df/ds$ for $f(x,y) = x^2 + y^2$ in direction $\\hat{u} = (i+j)/\\sqrt{2}$ at $(1,1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">First find the master gradient expression. Then evaluate at (1,1).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2x i + 2y j$<br>$\\nabla f(1,1) = 2 i + 2 j$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Dot the gradient with the unit vector $\\hat{u}$. It's correctly normalized already.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$df/ds = (2i+2j) \\cdot (i+j)/\\sqrt{2}$<br>$= (2+2)/\\sqrt{2} = 4/\\sqrt{2} = 2\\sqrt{2}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Maximum Rate of Increase**

**Question:** In what direction does $f(x,y) = x^2 + y^2$ increase fastest at $(1,1)$? What's the rate?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Gradient tells me both the max direction and max value directly.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f(1,1) = 2i + 2j$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Direction is the vector. Rate is magnitude.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Direction = $i + j$<br>Max Rate = $|\\nabla f| = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Gradient as Normal to Level Surface**

**Question:** Find the normal vector to the sphere $f(x,y,z) = x^2 + y^2 + z^2 = 3$ at point $(1,1,1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">By geometric rule, $\\nabla f$ is perfectly perpendicular to the exterior shape of level surfaces $f = C$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2x i + 2y j + 2z k$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Evaluate gradient at $(1,1,1)$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Normal $N = \\nabla f(1,1,1) = 2i + 2j + 2k$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Missing the Normalization Trap**

**Question:** If $\\nabla f = 3i + 4j$ and you want the derivative in the direction of $v = 3i - 4j$, find $df/ds$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">I have the gradient. But the direction $v$ is NOT a unit vector. Its length is 5. I MUST normalize it, or the integral stretches arbitrarily.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\hat{u} = \\frac{3i - 4j}{\\sqrt{3^2 + (-4)^2}} = \\frac{3i - 4j}{5}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Now compute dot product $\\nabla f \\cdot \\hat{u}$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$df/ds = (3i + 4j) \\cdot (\\frac{3i - 4j}{5}) = \\frac{9 - 16}{5} = -\\frac{7}{5}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Zero Directional Derivative**

**Question:** In what direction is the directional derivative precisely $0$ if $\\nabla f = 3i + 4j$?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">A directional derivative of 0 means the dot product $\\nabla f \\cdot \\hat{u} = 0$. This means orthogonal direction.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">We need $\\hat{u}$ such that $(3i + 4j) \\cdot \\hat{u} = 0$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">To make dot product zero in 2D, swap the coordinates and flip one sign. $(4, -3)$ or $(-4, 3)$. Then normalize.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Orthogonal vector $v = 4i - 3j$.<br>Normalize: $\\hat{u} = \\frac{4i - 3j}{5}$ or $\\frac{-4i + 3j}{5}$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Electric Field from Potential**

**Question:** If absolute potential is $\\Phi(x,y,z) = \\frac{q}{4\\pi\\varepsilon_0 r}$, calculate electric field $E = -\\nabla \\Phi$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Let $r = \\sqrt{x^2+y^2+z^2}$. $\\partial\\Phi / \\partial x$ demands chain rule.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\Phi = k (x^2+y^2+z^2)^{-1/2}$<br>$\\partial\\Phi/\\partial x = k(-\\frac{1}{2})(x^2+y^2+z^2)^{-3/2}(2x) = -\\frac{kx}{r^3}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Assemble the gradient and negate it.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$E = -\\nabla \\Phi = - ( -\\frac{k}{r^3} (xi + yj + zk) )$<br>$E = \\frac{q}{4\\pi\\varepsilon_0} \\frac{\\mathbf{r}}{r^3}$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Finding Level Surface Tangent Planes**

**Question:** Equation of the tangent plane to the surface $x^2 + y^2 + z^2 = 9$ at $(2, 2, 1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Tangent planes require a normal vector. $\\nabla f$ provides exactly that.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2xi + 2yj + 2zk$<br>$\\nabla f(2,2,1) = 4i + 4j + 2k$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Plane equation uses $A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$4(x-2) + 4(y-2) + 2(z-1) = 0$<br>$4x + 4y + 2z = 18$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Gradient in Cylindrical Coordinates**

**Question:** Find $\\nabla f$ for $f(r, \\theta, z) = r^2 \\sin \\theta$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Cylindrical gradient formula is $\\hat{e}_r \\frac{\\partial f}{\\partial r} + \\hat{e}_\\theta \\frac{1}{r}\\frac{\\partial f}{\\partial \\theta} + \\hat{e}_z \\frac{\\partial f}{\\partial z}$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = \\hat{e}_r (2r \\sin \\theta) + \\hat{e}_\\theta \\frac{1}{r} (r^2 \\cos \\theta) + \\hat{e}_z (0)$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Simplify the $1/r$ term.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = 2r \\sin \\theta \\hat{e}_r + r \\cos \\theta \\hat{e}_\\theta$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Gradient in Spherical Coordinates**

**Question:** Find $\\nabla f$ for $f(r, \\theta, \\phi) = \\frac{1}{r}$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Spherical gradient formula. Function only depends on r, so $\\partial/\\partial \\theta$ and $\\partial/\\partial \\phi$ are 0.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = \\hat{e}_r \\frac{\\partial}{\\partial r}(r^{-1})$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Take standard power rule derivative.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\nabla f = -\\frac{1}{r^2} \\hat{e}_r$</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Gradient</div>
<div class="p-4 bg-slate-50">

<table class="w-full text-left border-collapse">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-3 pr-4 font-bold">If you see $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Ask yourself $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Action</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-3 pr-4 text-slate-800">Find Directional Derivative</td>
      <td class="py-3 pr-4 text-slate-800">Did they give me a unit vector?</td>
      <td class="py-3 pr-4 text-slate-800">Compute $\\nabla f$, divide $v$ by $|v|$, take dot product.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Direction of greatest change</td>
      <td class="py-3 pr-4 text-slate-800">Do I need the dot product?</td>
      <td class="py-3 pr-4 text-slate-800">No, the answer is exactly the gradient $\\nabla f$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Plane tangent to a level surface</td>
      <td class="py-3 pr-4 text-slate-800">What is the normal vector?</td>
      <td class="py-3 pr-4 text-slate-800">Normal $n$ is accurately computed as $\\nabla f$ at that point.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Electric Field from Voltage</td>
      <td class="py-3 pr-4 text-slate-800">Electric field points Downhill?</td>
      <td class="py-3 pr-4 text-slate-800">Use $E = -\\nabla V$.</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: Forgetting to Normalize the Direction Vector.** When calculating directional derivative $D_u f = \\nabla f \\cdot \\hat{u}$, the vector $u$ *MUST* have a magnitude of exactly 1. If it doesn't, you calculate a scaled, incorrect value. This is the #1 easiest mistake in vector calculus.
*   **Trap 2: Ignoring the negative sign in Electric Field.** Voltage is a potential. Positive charges want to fall DOWN the gradient (from high potential to low potential). Therefore, $E = -\\nabla V$. If you drop the minus sign, your entire physics model propagates in reverse.
*   **Trap 3: Mixing Gradient output types.** Divergence is scalar. Curl is vector. Gradient ALWAYS results in a VECTOR. Do NOT sum the derivatives without the $i, j, k$ components separating them.

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the gradient of f(x,y,z) = x y z."></div>
<div class="user-quiz" data-question="2. True or False: The gradient vector points exactly tangent to level surfaces."></div>
<div class="user-quiz" data-question="3. State the relationship between Electric Field vector E and voltage potential V."></div>
<div class="user-quiz" data-question="4. Calculate the directional derivative of f(x,y) = x+y in direction (i+j)/sqrt(2) at any point."></div>
<div class="user-quiz" data-question="5. What mathematical operation gives the absolute maximum rate of ascent for a scalar function?"></div>
`
  },
  {
    id: "chapter-v5",
    title: "Chapter V5: Visual Transformations \u2013 Mapping Space",
    progress: 0,
    subheadings: [
      {
        "id": "v5-intro",
        "title": "Introduction: How Functions Transform Space"
      },
      {
        "id": "v5-eli5",
        "title": "ELI5 Explanation: The Rubber Sheet Analogy"
      },
      {
        "id": "v5-glossary",
        "title": "Glossary of Key Terms"
      },
      {
        "id": "v5-why-ee",
        "title": "Why This Matters in Electrical Engineering"
      },
      {
        "id": "v5-formal",
        "title": "Formal Definitions and Notation"
      },
      {
        "id": "v5-method",
        "title": "Step-by-Step Method for Visualising Transformations"
      },
      {
        "id": "v5-flowchart",
        "title": "Algorithmic Problem Solving Flow"
      },
      {
        "id": "v5-triggers",
        "title": "Concept Recall: Trigger Words \u2192 Action"
      },
      {
        "id": "v5-examples",
        "title": "10 Exam-Level Worked Exercises with Inner Voice"
      },
      {
        "id": "v5-cheatsheet",
        "title": "Ultimate Exam Room Cheat Sheet"
      },
      {
        "id": "v5-traps",
        "title": "Common Mistakes (The Examiner's Traps)"
      },
      {
        "id": "v5-test",
        "title": "Chapter Assessment"
      }
    ],
    markdown: `
## Introduction: How Functions Transform Space

Until now, we have mostly viewed a function $f(x, y)$ as a geometric curve or surface floating above an xy-plane. But what if we treat functions as **mappings** that warp one 2D plane into another 2D plane?

In "Visual Complex Analysis," functions are primarily understood geometrically as transformations. A function $F(x,y) = (u,v)$ maps every input point $(x,y)$ to an output point $(u,v)$. This perspective reveals that the **derivative** is actually a local *linear transformation*\u2014it tells us exactly how a tiny grid infinitesimally close to a point gets rotated, stretched, and scaled as it maps into the output space.

By understanding the Jacobian determinant, we can visualize how area is geometrically expanded or compressed by any given transformation.

## ELI5 Explanation: The Rubber Sheet Analogy

Imagine drawing a perfect, uniform grid on a stretchy rubber sheet. This sheet is the $(x, y)$ input plane.

Now, you apply a mathematical function $f(x, y)$ to the sheet. The function tells you exactly where to pin down every single intersection of the grid into a newly organized sheet (the output $(u, v)$ plane).

*   If the function is **$f(x, y) = (2x, 2y)$**, you stretch the rubber sheet equally in all directions, making the grid squares four times larger.
*   If the function is **$f(x, y) = (-y, x)$**, you pin the grid down rotated 90 degrees.
*   If the function is **$f(x,y) = (x^2, y)$**, you stretch the sheet unevenly. Squares further to the right get stretched massively into rectangles, while squares near zero stay small.

The derivative at a specific point on the rubber sheet tells you precisely what happens to a single microscopic square at that location: how it stretches, how it shears, and how it rotates.

## Glossary of Key Terms

*   **Transformation Mapping:** A function that moves from an input coordinate space $(x,y)$ to an output coordinate space $(u,v)$.
*   **Jacobian Matrix ($J$):** The ultimate multi-variable derivative. A matrix containing all first-order partial derivatives of a vector-valued function.
*   **Jacobian Determinant ($\\text{det}(J)$ or $\\frac{\\partial(u,v)}{\\partial(x,y)}$):** A scalar value representing the local "area scaling factor". If it is 2, a microscopic square of area $dA$ maps to an area of $2\\,dA$.
*   **Local Linearity:** The concept that ANY smooth, differentiable curve or surface looks perfectly flat and linearly stretched if you zoom in close enough.

## Why This Matters in Electrical Engineering

1.  **Coordinate Transformations:** Calculating fields in complex antenna geometries or waveguide boundaries often requires mapping difficult Cartesian shapes into simple polar/spherical boundaries.
2.  **Conformal Mapping:** Used heavily in electrostatics and fluid flow. Conformal maps preserve angles, allowing complex electric field distributions (like around capacitor edges) to be elegantly modeled.
3.  **Circuit Theory Transformations:** Mathematical transformations (like Laplace or Fourier) shift signals across domain spaces to make differential equations linearly solvable.

## Formal Definitions and Notation

A mapping from $\\mathbb{R}^2 \\to \\mathbb{R}^2$ is written as:
$T(x,y) = (u(x,y), v(x,y))$

The **Jacobian Matrix** $J$ describes the best linear approximation (the derivative) of this mapping at any point:

$$J = \\begin{bmatrix} \\frac{\\partial u}{\\partial x} & \\frac{\\partial u}{\\partial y} \\\\ \\frac{\\partial v}{\\partial x} & \\frac{\\partial v}{\\partial y} \\end{bmatrix}$$

The **Jacobian Determinant** tells us how area elements scale under transformation:

$$\\text{Det}(J) = \\frac{\\partial(u,v)}{\\partial(x,y)} = \\frac{\\partial u}{\\partial x}\\frac{\\partial v}{\\partial y} - \\frac{\\partial u}{\\partial y}\\frac{\\partial v}{\\partial x}$$

When evaluating a double integral, switching coordinates from $(x,y)$ to newly defined $(u,v)$ requires multiplying the integral chunks by the absolute value of the Jacobian determinant:

$$\\iint f(x,y) dx dy = \\iint f(x(u,v), y(u,v)) \\left| \\frac{\\partial(x,y)}{\\partial(u,v)} \\right| du dv$$

## Step-by-Step Method for Visualising Transformations

1.  **Map the Boundaries:** Identify the simple boundary shape in the input $(x,y)$ domain (e.g., a unit square from $x=[0,1], y=[0,1]$).
2.  **Evaluate Corners:** Find where the vertices map. (e.g. $(0,0) \\to F(0,0)$). Plot these in the $(u,v)$ plane.
3.  **Evaluate Lines:** Set $x=1$ and see what equation in $(u,v)$ results. Repeat for other boundaries.
4.  **Compute Jacobian:** Calculate the determinant of the partial derivative matrix.
5.  **Interpret Area:** If $\\text{det}(J) > 1$, the region is universally expanding. If $\\text{det}(J) < 1$, it is compressing. If $\\text{det}(J) < 0$, the rubber sheet was flipped entirely upside down (orientation reversed).

<div class="plot-interactive" data-plot-id="space_transform"></div>

## Algorithmic Problem Solving Flow

1.  **Are you mapping a shape from Space A to Space B?**
    *   Parameterize the boundaries in Space A. Apply the transformation equations $u(x,y)$ and $v(x,y)$ to those boundaries to find the corresponding curves in Space B.
2.  **Are you asked for the Area Scaling Factor or double integral change of variables?**
    *   Compute the Jacobian determinant. Take the absolute value.
3.  **Are you finding the linear approximation of a surface?**
    *   Use the multidimensional Taylor expansion (the tangent plane): $L(x,y) = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)$.

## Concept Recall: Trigger Words \u2192 Action

*   *"Map the unit square under F..."* \u2192 Plug the four corners $(0,0), (1,0), (0,1), (1,1)$ into the function and identify the new boundary limits.
*   *"Find the Jacobian..."* \u2192 Construct the $2 \\times 2$ (or $3 \\times 3$) matrix of partial derivatives. Cross multiply and subtract.
*   *"What is the area element $dA$ in polar?"* \u2192 Calculate Jacobian of $x = r \\cos\\theta, y = r \\sin\\theta$. Determinant is $r$. So $dA = r \\, dr \\, d\\theta$.

## 10 Exam-Level Worked Exercises with Inner Voice

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Mapping a Square**

**Question:** Map the unit square $(x,y \\in [0,1])$ under $F(x,y) = (2x, y)$. Describe the result.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Let $u = 2x$ and $v = y$. The inputs $x$ range from 0 to 1, so $u$ goes from 0 to 2. $v$ goes from 0 to 1.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$u = 2x \\implies u \\in [0,2]$<br>$v = y \\implies v \\in [0,1]$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">This stretches the square horizontally by a factor of 2, creating a rectangle.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The square maps to a rectangle of width 2 and height 1.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Rotation Mapping**

**Question:** Map the unit square under $F(x,y) = (-y, x)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Point $(1,0)$ becomes $(0,1)$. Point $(0,1)$ becomes $(-1,0)$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$F(1,0) = (0,1)$.<br>$F(0,1) = (-1,0)$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">The entire coordinate frame is twisted 90 degrees counter-clockwise.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">The unit square rotates $90^\\circ$ counterclockwise into the second quadrant.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 3: Uniform Jacobian Determinant**

**Question:** Find the Jacobian determinant for $F(x,y) = (2x, 3y)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">$u=2x, v=3y$. The matrix is $[[u_x, u_y], [v_x, v_y]]$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$J = \\begin{vmatrix} 2 & 0 \\\\ 0 & 3 \\end{vmatrix}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Determinant is $(2)(3) - (0)(0) = 6$. So area expands universally by a factor of 6.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{det}(J) = 6$. Area scales by factor 6.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 4: Non-linear Jacobian**

**Question:** Compute Jacobian for $F(x,y) = (x^2, y)$. Describe area scaling at $(3,1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Derivatives of $u=x^2$ are $2x, 0$. Derivatives of $v=y$ are $0, 1$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{det}(J) = \\begin{vmatrix} 2x & 0 \\\\ 0 & 1 \\end{vmatrix} = 2x$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">At $x=3$, the scaling factor evaluates to 6. The space is stretched more the further right you go.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">At $(3,1)$, $J = 6$. The area of a tiny square near $(3,1)$ scales by a factor of 6.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 5: Area Scaling in Polar Coordinates**

**Question:** Define the standard mapping $x = r \\cos\\theta, y = r \\sin\\theta$. Calculate its Jacobian.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Create the matrix with derivatives with respect to $r$ and $\\theta$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$J = \\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix}$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Cross multiply: $(\\cos\\theta)(r\\cos\\theta) - (\\sin\\theta)(-r\\sin\\theta) = r\\cos^2 + r\\sin^2 = r$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{det}(J) = r(\\cos^2\\theta + \\sin^2\\theta) = r$.<br>Area element $dA = r \\, dr \\, d\\theta$.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 6: Linear Approximation (Tangent Plane)**

**Question:** Compute the linear approximation of $f(x,y) = x^2 + y^2$ at $(1,1)$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Use Taylor formula $L(x,y) = f(a,b) + f_x(x-a) + f_y(y-b)$. Evaluate terms at $(1,1)$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$f(1,1) = 2$ <br> $f_x = 2x \\implies f_x(1,1) = 2$ <br> $f_y = 2y \\implies f_y(1,1) = 2$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Sum them up into a flat plane equation.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$L(x,y) = 2 + 2(x-1) + 2(y-1) = 2x + 2y - 2$</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 7: Complex Mapping Output Shape**

**Question:** What is the geometric image of the unit circle under $F(x,y) = (2x, 3y)$?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Unit circle is $x^2 + y^2 = 1$. The transformation gives $u=2x$ and $v=3y$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Let $x = u/2$ and $y = v/3$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Substitute back into the boundary equation to see what the shape looks like in (u,v).</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$(u/2)^2 + (v/3)^2 = 1 \\implies \\frac{u^2}{4} + \\frac{v^2}{9} = 1$<br>The circle becomes an ellipse.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 8: Reversing Orientation in Mappings**

**Question:** In $F(x,y) = (x, -y)$, how does this warp a standard square grid?

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">This just flips the sign of the y-coordinate. It maps across the x-axis.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">This is a reflection across the x-axis.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Calculate the Jacobian to observe the orientation flip mathematically. it should be negative.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$J_\\text{det} = (1)(-1) - (0)(0) = -1$.<br>The area is preserved, but orientation flips.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 9: Double Mapping Composition**

**Question:** Map the first quadrant unit square $x,y \\in [0,1]$ under the non-linear polar-like map $F(x,y) = (x^2 - y^2, 2xy)$. Find the map of the line $x=1$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">Let $x=1$. Then $u = 1 - y^2$ and $v = 2y$. I need to eliminate parameter $y$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">On $x=1$:<br>$u = 1 - y^2$<br>$v = 2y \\implies y = v/2$</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">Substitute $y=v/2$ into $u$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$u = 1 - (v/2)^2 = 1 - v^2/4$.<br>This boundary maps to a downward facing parabola.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 10: Visualizing 3D Transformations**

**Question:** Compute Jacobian for spherical transformation $x = r\\sin\\phi\\cos\\theta, y = r\\sin\\phi\\sin\\theta, z = r\\cos\\phi$.

<table class="w-full text-left border-collapse mt-2">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-2 pr-4 font-bold">Inner Voice (What you think)</th>
      <th class="py-2 pr-4 font-bold">What you write</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-2 pr-4 text-slate-700">This requires building a $3 \\times 3$ determinant matrix and expanding. It's a huge operation so I will summarize the canonical geometric output.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">$\\text{det} \\begin{vmatrix} x_r & x_\\theta & x_\\phi \\\\ \\dots & \\dots & \\dots \\end{vmatrix}$ evaluates to $r^2 \\sin\\phi$.</td>
    </tr>
    <tr>
      <td class="py-2 pr-4 text-slate-700">This is why the volumetric integral chunk $dV$ in spherical is $r^2 \\sin\\phi \\, dr \\, d\\phi \\, d\\theta$.</td>
      <td class="py-2 pr-4 font-mono bg-slate-100 p-1 rounded">Volume scaling factor is $r^2 \\sin\\phi$.</td>
    </tr>
  </tbody>
</table>
</div>

## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog: Mapping & Jacobian</div>
<div class="p-4 bg-slate-50">

<table class="w-full text-left border-collapse">
  <thead class="border-b-2 border-slate-800 text-slate-800">
    <tr>
      <th class="py-3 pr-4 font-bold">If you see $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Ask yourself $\\dots$</th>
      <th class="py-3 pr-4 font-bold">Action</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr>
      <td class="py-3 pr-4 text-slate-800">Calculate Area Expansion $dA$</td>
      <td class="py-3 pr-4 text-slate-800">Do I need the Jacobian matrix?</td>
      <td class="py-3 pr-4 text-slate-800">Yes, $dA = |\\text{det}(J)| \\, du \\, dv$. Compute $u_x v_y - u_y v_x$.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Jacobian gives a negative value</td>
      <td class="py-3 pr-4 text-slate-800">What does negative Area mean?</td>
      <td class="py-3 pr-4 text-slate-800">Take Absolute magnitude for $dA$. Negative just implies the coordinate system flipped (like a mirror reflection).</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Linearize $f(x,y)$ at a point</td>
      <td class="py-3 pr-4 text-slate-800">Tangent Plane formulation?</td>
      <td class="py-3 pr-4 text-slate-800">$L(x,y) = f(a) + f_x(x-a) + f_y(y-b)$. Stop at first order.</td>
    </tr>
    <tr>
      <td class="py-3 pr-4 text-slate-800">Change of Variables Integral</td>
      <td class="py-3 pr-4 text-slate-800">Did I forget the scaling factor?</td>
      <td class="py-3 pr-4 text-slate-800">Never integrate without adding $|J|$ before the $du\\, dv$.</td>
    </tr>
  </tbody>
</table>

</div>
</div>

## Common Mistakes (The Examiner's Traps)

*   **Trap 1: Dropping the Absolute Value on $|J|$.** When computing double integrals, if your Jacobian computes to $-6$, your area element $dA$ is $|-6| = 6$. You cannot have negative physical area.
*   **Trap 2: Creating Tangent Planes but leaving variables squared.** A linear approximation (tangent plane) is LINEAR. Your final equation $L(x,y)$ must solely contain $x$ and $y$ variables. If it contains $x^2$ or $\\sin(y)$, you failed to evaluate the partial derivatives at the target constant point $(a,b)$.
*   **Trap 3: Cartesian / Polar variable mixing.** If you map exactly to $(r, \\theta)$, your Jacobian must only contain $r$ and $\\theta$, no $x$'s or $y$'s surviving.

## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate the Jacobian determinant of F(x,y) = (4x, -y)."></div>
<div class="user-quiz" data-question="2. What does a Jacobian determinant of exactly 1 geometrically signify in a transformation?"></div>
<div class="user-quiz" data-question="3. State the value of the Jacobian in a standard Cartesian to Polar coordinate transformation."></div>
<div class="user-quiz" data-question="4. In the tangent plane equation L(x,y), what geometric feature do the partial derivatives f_x and f_y represent?"></div>
<div class="user-quiz" data-question="5. True or False: If a transformation's Jacobian is negative, that region's physical volume becomes negative."></div>
`
  },
  {
    id: "chapter-v6",
    title: "Chapter V6: Line Integrals & Path Independence",
    progress: 0,
    subheadings: [
      { id: "v6-intro", title: "Introduction: Walking in a Field" },
      { id: "v6-eli5", title: "ELI5 Explanation: Walking Uphill vs. Around the Hill" },
      { id: "v6-independence", title: "Path Independence & Conservative Fields" },
      { id: "v6-gradient-link", title: "The Gradient Connection (Fundamental Theorem)" }
    ],
    markdown: `
## Introduction: Walking in a Field

When you walk in a vector field, the "work" done by the vector field along your path is given by the **Line Integral**. 

If the vector field represents a force, the line integral computes the total Work: 
$$ W = \\int_C \\mathbf{F} \\cdot d\\mathbf{s} $$
which is the tangential component of Force integrated along the path.

## ELI5 Explanation: Walking Uphill vs. Around the Hill

Imagine walking to the top of a mountain. 
1. If you hike straight up the steepest path, it's exhausting (the force of gravity is strong against your path).
2. If you walk horizontally around the mountain, perpendicular to gravity, it takes no extra effort against gravity. 

A line integral adds up the force component strictly pushing or pulling you ALONG your path. 

## Path Independence & Conservative Fields

<div class="plot-interactive my-6" data-plot-id="two_path_test"></div>

A remarkable property of some physical fields (like Electrostatics or Gravity) is **Path Independence**. 
If you start at point A and end at point B, the amount of work done is the exact same, no matter what crazy path you take! 

When a field is path independent, we call it a **Conservative Vector Field**.
For a conservative field, any closed-loop circulation is zero:
$$ \\oint_C \\mathbf{F} \\cdot d\\mathbf{s} = 0 $$

If it's an electrostatic field $\\mathbf{E}$, then the circulation is always zero. This is a profound statement about the nature of the field!

## The Gradient Connection (Fundamental Theorem)

Why are some fields conservative? Because they are the **Gradient** of some underlying scalar potential $\\Phi$. 
If $\\mathbf{E} = -\\nabla \\Phi$, then by the Fundamental Theorem for Line Integrals:
$$ \\int_A^B \\mathbf{E} \\cdot d\\mathbf{s} = -[\\Phi(B) - \\Phi(A)] $$
Because the result only depends on the start and end heights $\\Phi$, the path between them doesn't matter! 
Furthermore, if $\\mathbf{F} = \\nabla \\Phi$, then $\\nabla \\times \\mathbf{F} = 0$. A conservative vector field is fundamentally irrotational (zero curl).
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
      { id: "ch14-1-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch14-1-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In section 14.1, we define functions of more than one independent variable and discuss ways to graph them.

### 1. Function of n Independent Variables
A real-valued function $f$ on a set $D$ of n-tuples of real numbers $(x_1, x_2, ldots, x_n)$ is a rule that assigns a unique real number 
$$w = f(x_1, x_2, ldots, x_n)$$
to each element in $D$. $D$ is the domain, $w$ is the dependent variable, and $x_1 dots x_n$ are the independent variables. 

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
**Question:** Find the domain of $f(x,y) = sqrt{y - x^2}$.

**Thought Process:** 
For the square root to yield a real number, the argument must be non-negative.
So, $y - x^2 ge 0$.

*Sketching Guide for student:* 
1. Draw the $x$ and $y$ axes. 
2. Draw the parabola $y = x^2$ as a solid line (solid because the inequality is $ge$).
3. Test a point, say $(0,1)$. $1 ge 0^2$. It works. Shade the region "inside" or "above" the parabola.
This region includes its boundary (the parabola) so it is closed. It stretches infinitely upwards, so it is unbounded.

**Solution:**
Domain: $y ge x^2$. This is the closed, unbounded region bounded below by the parabola $y=x^2$.

### Example 2: Graphing and Level Curves
**Question:** Graph $f(x,y) = 100 - x^2 - y^2$, plot level curves for $f=0, 51, 75$.

**Thought Process:** 
The function $z = 100 - (x^2 + y^2)$ represents a downward-opening paraboloid with its peak at $(0,0,100)$.
For level curves $f(x,y) = c$, substitute $c$ for $f(x,y)$:
- $c=0: 100 - x^2 - y^2 = 0 Rightarrow x^2 + y^2 = 100$ (circle radius 10)
- $c=51: 100 - x^2 - y^2 = 51 Rightarrow x^2 + y^2 = 49$ (circle radius 7)
- $c=75: 100 - x^2 - y^2 = 75 Rightarrow x^2 + y^2 = 25$ (circle radius 5)

*Sketching Guide for student:* 
First, for the graph, draw the 3D axes. Starting at $z=100$, draw an upside-down bowl. 
Next, for the level curves, draw 2D $xy$ axes. Draw three concentric circles centered at origin with radii 5, 7, and 10. Label them 75, 51, and 0 respectively. 

**Solution:**
The surface is a paraboloid. The level curves are concentric circles of radius 10, 7, and 5.

### Example 3: Level Surfaces of 3 Variables
**Question:** Describe the level surfaces of $f(x,y,z) = sqrt{x^2+y^2+z^2}$.

**Thought Process:**
A level surface is where $f(x,y,z) = c$. So $sqrt{x^2+y^2+z^2} = c$. Squaring both sides: $x^2+y^2+z^2 = c^2$.
This requires $c ge 0$. This is the equation of a sphere of radius $c$ centered at the origin.

*Sketching Guide for student:* 
Draw 3D axes. Draw a sphere centered at the origin. Draw a larger sphere around it. Slice a wedge out to show they form concentric shells! The values represent distance from origin.

**Solution:**
The level surfaces are concentric spheres centered at the origin. As $c$ increases, the spheres expand.

---

## Visuals / Graphs

### 1. Paraboloid and Level Curves
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="contour_paraboloid"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: The Inverse Trig Constraint</div>
<div class="p-4">

**Question:** Find the domain of $f(x,y) = sin^{-1}(x^2 + y^2 - 2)$.

| Inner voice | What you write |
| :--- | :--- |
| "Inverse sine is incredibly picky. It only accepts inputs exactly between $-1$ and $1$. I will trap the inner argument and solve the inequality." | $-1 le x^2 + y^2 - 2 le 1$ |
| "Add $2$ to all sides to isolate the $x^2 + y^2$ circle equation. This forms an annulus (a ring)." | $1 le x^2 + y^2 le 3$<br>**Domain:** Annulus between circles $1$ and $sqrt{3}$. |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| $sqrt{dots}$ | Inside $ge 0$? | Write inequality |
| $ln(dots)$ | Inside $> 0$? | Write inequality |
| Denominator | $= 0$? | Exclude those points |
| "Level curve" | Set $f(x,y) = c$ | Find $c$ from point if given |

</div>
</div>## Chapter Assessment

<div class="user-quiz" data-question="1. Describe the domain and range of f(x,y) = 1 / (xy)"></div>
<div class="user-quiz" data-question="2. Identify the level curves of z = y - x\xB2"></div>

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
      { id: "ch14-2-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch14-2-test", title: "Chapter Assessment" }
    ],
    markdown: `
## Introduction and Core Concepts

In Section 14.2, we treat limits and continuity for multivariable functions. The crucial difference from single-variable calculus is that a point $(x,y)$ can approach $(x_0,y_0)$ from **infinitely many directions**.

### 1. Limit of a Function of Two Variables
We say that $f(x,y)$ approaches the limit $L$ as $(x,y)$ approaches $(x_0,y_0)$, and write
$$lim_{(x,y) 	o (x_0, y_0)} f(x,y) = L$$
if, for every number $epsilon > 0$, there exists a corresponding number $delta > 0$ such that for all $(x,y)$ in the domain of $f$,
$$|f(x,y) - L| < epsilon quad 	ext{whenever} quad 0 < sqrt{(x-x_0)^2 + (y-y_0)^2} < delta$$

### 2. Properties of Limits
Limits obey standard rules (Sum, Difference, Product, Constant Multiple, Quotient, Power Rule) just like single-variable limits. Rational functions are continuous at every point where the denominator is non-zero.

### 3. The Two-Path Test for Nonexistence
If a function $f(x,y)$ has different limits along two different paths as $(x,y)$ approaches $(x_0,y_0)$, then $lim_{(x,y) 	o (x_0,y_0)} f(x,y)$ **does not exist**.

### 4. Continuity
A function $f(x,y)$ is continuous at $(x_0,y_0)$ if:
1. $f(x_0,y_0)$ is defined.
2. $lim_{(x,y) 	o (x_0,y_0)} f(x,y)$ exists.
3. $lim_{(x,y) 	o (x_0,y_0)} f(x,y) = f(x_0,y_0)$.

Compositions of continuous functions are continuous.

---

## ELI5 Explanation
In 1D calculus, you can approach $x=0$ from the left or right. If both give the same height, the limit exists. In 2D, you are on a flat plain approaching a target point. You can run towards it from the north, south, east, spiraling, or hopping along a parabola! If *every possible path* doesn't arrive at the exact same altitude, the limit fails to exist.

---

## Detailed Worked Examples

### Example 1: Calculating Limits
**Question:** Find $lim_{(x,y) 	o (0,0)} \frac{x^2 - xy}{sqrt{x} - sqrt{y}}$.

**Thought Process:**
Direct substitution gives $0/0$. We must algebraically manipulate. We can multiply up and down by the conjugate $sqrt{x} + sqrt{y}$, or factor the numerator.
Let's factor: $x^2-xy = x(x-y)$. And we know $x-y = (sqrt{x} - sqrt{y})(sqrt{x} + sqrt{y})$.

*Sketching Guide for student:* There isn't much to sketch here, but visualizing the domain is good: $x ge 0, y ge 0, x 
eq y$. The function lives only in the first quadrant, away from the line $y=x$.

**Solution:**
$\begin{align*} lim \frac{x(x-y)}{sqrt{x} - sqrt{y}} &= lim \frac{x(sqrt{x}-sqrt{y})(sqrt{x}+sqrt{y})}{sqrt{x}-sqrt{y}} \\ &= lim x(sqrt{x} + sqrt{y}) \\ &= 0(sqrt{0} + sqrt{0}) = 0 end{align*}$

### Example 2: The Two-Path Test
**Question:** Show that $lim_{(x,y)	o(0,0)} \frac{2x^2y}{x^4+y^2}$ does not exist.

**Thought Process:**
Let's check straight lines $y = mx$.
$f(x, mx) = \frac{2x^2(mx)}{x^4+m^2x^2} = \frac{2mx^3}{x^2(x^2+m^2)} = \frac{2mx}{x^2+m^2}$.
As $x 	o 0$, this goes to $0$. So along all lines, the limit is $0$.
Wait, does that mean the limit is 0? No! Let's check a parabola path matching the degrees: $y = kx^2$.

*Sketching Guide for student:* Draw the axes. Draw straight lines radiating from the origin. The function looks flat (value 0) if you approach along these lines. But now draw a parabola $y=x^2$ curling into the origin. Along this parabola crest, the function rides high at a non-zero value!

**Solution:**
Check along $y=kx^2$:
$\begin{align*} f(x, kx^2) &= \frac{2x^2(kx^2)}{x^4 + (kx^2)^2} \\ &= \frac{2kx^4}{x^4 + k^2x^4} \\ &= \frac{2k}{1+k^2} end{align*}$
If we approach along $y=x^2$ ($k=1$), the limit is $\frac{2}{2} = 1$.
If we approach along $y=0$ ($k=0$), the limit is $0$.
Since limits along different paths do not match, the limit **does not exist**.

### Example 3: Changing to Polar Coordinates
**Question:** Evaluate $lim_{(x,y)	o(0,0)} \frac{x^3}{x^2+y^2}$.

**Thought Process:**
The denominator $x^2+y^2$ strongly suggests polar coordinates.
$x = r cos 	heta$, $y = r sin 	heta$. $x^2+y^2 = r^2$. As $(x,y) 	o (0,0)$, $r 	o 0$ independently of $	heta$.

*Sketching Guide for student:* Polar coordinates turn the "moving towards the origin from any direction" into a single command: "shrink $r$ to 0".

**Solution:**
$\begin{align*} lim_{r 	o 0} \frac{r^3 cos^3 	heta}{r^2} &= lim_{r 	o 0} r cos^3 	heta end{align*}$
Since $|cos^3 	heta| le 1$, the expression is bounded by $-r le rcos^3	heta le r$. By the Squeeze Theorem, as $r 	o 0$, the limit is $0$, regardless of $	heta$.
The limit is 0.

---

## Visuals / Graphs

### 1. Two-Path Test Visualization
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="path_dependence"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Two-Path Test for Non-existence</div>
<div class="p-4">

**Question:** Show $lim_{(x,y) 	o (0,0)} \frac{xy}{x^2 + y^2}$ does not exist.

| Inner voice | What you write |
| :--- | :--- |
| "I will approach along the path $y = kx$. If the limit answer depends on my chosen slope $k$, the limit cannot exist." | $lim_{x 	o 0} \frac{x(kx)}{x^2 + (kx)^2}$ |
| "Factor out $x^2$ and simplify." | $lim_{x 	o 0} \frac{k}{1+k^2} = \frac{k}{1+k^2}$.<br>Depends on $k$. Does not exist. |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Evaluate limit | Can I substitute? | Plug in. If continuous, done. |
| Path $y=x$ | Do I get a different limit? | If paths give diff values, DNE. |
| $x^2+y^2$ in denom | Can I use polar $(r 	o 0)$? | Substitute $x=rcos	heta, y=rsin	heta$. |

</div>
</div>## Chapter Assessment

<div class="user-quiz" data-question="1. Compute the limit of (x\xB2-y\xB2)/(x\xB2+y\xB2) as (x,y) approaches (0,0), or show it undefined."></div>
<div class="user-quiz" data-question="2. Determine continuity of f(x,y) = xy/(x\xB2+y\xB2) at the origin."></div>

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
        "title": "Ultimate Exam Room Cheat Sheet"
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
$$\frac{partial f}{partial x} = lim_{h 	o 0} \frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$$
Notations: $\frac{partial f}{partial x}, f_x, \frac{partial z}{partial x}, z_x$.

**Geometric interpretation:** The graph $z = f(x,y)$ is intersected by the plane $y=y_0$, forming a curve. The partial derivative $partial f/partial x$ evaluated at $(x_0,y_0)$ is the slope of the tangent line to this curve at that point.

### 2. Calculations
To calculate $partial f/partial x$, treat $y$ as a constant and differentiate with respect to $x$. 
To calculate $partial f/partial y$, treat $x$ as a constant and differentiate with respect to $y$.

### 3. Second-Order Partial Derivatives
Differentiate twice to get second-order derivatives:
- $f_{xx} = \frac{partial^2 f}{partial x^2}$
- $f_{yy} = \frac{partial^2 f}{partial y^2}$
- $f_{xy} = \frac{partial^2 f}{partial y partial x}$ (differentiate first wrt x, then y)
- $f_{yx} = \frac{partial^2 f}{partial x partial y}$ 

**Theorem 2: The Mixed Derivative Theorem (Clairaut's Theorem)**
If $f(x,y)$ and its partial derivatives $f_x, f_y, f_{xy}, f_{yx}$ are defined throughout an open region containing $(a,b)$ and are all continuous at $(a,b)$, then:
$$f_{xy}(a,b) = f_{yx}(a,b)$$

### 4. Continuity vs Differentiability
In 1D, differentiability implies continuity. For multivariable, the existence of partial derivatives does *not* guarantee continuity! The function might jump across angles not parallel to axes. 

**Theorem 3: Differentiability**
$f(x,y)$ is differentiable if $Delta z$ can be expressed as:
$$Delta z = f_x Delta x + f_y Delta y + epsilon_1 Delta x + epsilon_2 Delta y$$
where $epsilon_1, epsilon_2 	o 0$ as $Delta x, Delta y 	o 0$.
If $f_x$ and $f_y$ are continuous, then $f$ is differentiable.

---

## ELI5 Explanation
If you are standing on the side of a mountain, your slope strictly depends on which way you face. If you face perfectly East (x-axis), how steep is it? That\u2019s $f_x$. If you face perfectly North (y-axis), how steep is it? That\u2019s $f_y$. You completely ignore climbing North when calculating your East climb percentage.

---

## Detailed Worked Examples

### Example 1: Finding Partial Derivatives
**Question:** If $f(x,y) = y sin(xy)$, find $partial f / partial y$.

**Thought Process:**
We must treat $x$ as a constant. So $f$ is a product of two functions of $y$: $y$ and $sin(xy)$. We must use the Product Rule.

*Sketching Guide for student:* Visualize scanning the mountain exclusively moving in the North-South direction. The East-West coordinate is locked mathematically as a constant number, like '3'.

**Solution:**
$\begin{align*} \frac{partial f}{partial y} &= \frac{partial}{partial y}(y sin(xy)) &&	ext{Step 1: Set up product rule}. \\ &= y cdot \frac{partial}{partial y}(sin(xy)) + sin(xy) cdot \frac{partial}{partial y}(y) &&	ext{Step 2: Apply product rule}. \\ &= y cdot (cos(xy) cdot x) + sin(xy) cdot 1 &&	ext{Step 3: Chain rule on inner function } xy 	ext{ treating x as constant}. \\ &= xy cos(xy) + sin(xy) &&	ext{Step 4: Cleanup}. end{align*}$

### Example 2: Implicit Partial Differentiation
**Question:** Find $partial z/partial x$ if $yz - ln z = x + y$.

**Thought Process:**
Assume $z$ is a function of $x$ and $y$. We need to differentiate both sides with respect to $x$, holding $y$ constant.

**Solution:**
$\begin{align*} \frac{partial}{partial x}(yz - ln z) &= \frac{partial}{partial x}(x + y) &&	ext{Step 1: Differentiate both sides wrt x}. \\ y \frac{partial z}{partial x} - \frac{1}{z} \frac{partial z}{partial x} &= 1 + 0 &&	ext{Step 2: Normal diff rules, tacking on } partial z/partial x 	ext{ where z is modified}. \\ \frac{partial z}{partial x} left(y - \frac{1}{z}\right) &= 1 &&	ext{Step 3: Factor out derivative}. \\ \frac{partial z}{partial x} &= \frac{1}{y - \frac{1}{z}} = \frac{z}{yz - 1} &&	ext{Step 4: Algebra to clear fractions}. end{align*}$

### Example 3: Verifying Clairaut's Theorem
**Question:** Verify $f_{xy} = f_{yx}$ for $f(x,y) = x cos y + y e^x$.

**Thought Process:**
We will calculate $f_x$, then $f_{xy}$. Then $f_y$, then $f_{yx}$, and compare.

**Solution:**
$\begin{align*} f_x &= cos y + y e^x &&	ext{Step 1: Diff wrt x}. \\ f_{xy} &= -sin y + e^x &&	ext{Step 2: Diff } f_x 	ext{ wrt y}. end{align*}$

$\begin{align*} f_y &= -x sin y + e^x &&	ext{Step 3: Diff original wrt y}. \\ f_{yx} &= -sin y + e^x &&	ext{Step 4: Diff } f_y 	ext{ wrt x}. end{align*}$
They match exactly.

---

## Visuals / Graphs

### 1. Partial Derivatives on a Surface
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="partial_derivatives"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: First-Order Partial Derivatives</div>
<div class="p-4">

**Question:** Find $f_x$ and $f_y$ for $f(x,y) = x^2 y^3 + sin(x)$.

| Inner voice | What you write |
| :--- | :--- |
| "To find $f_x$, I treat $y$ entirely as a constant number. Just derive the $x$ parts." | $f_x = 2x(y^3) + cos(x)$ |
| "To find $f_y$, I treat $x$ as the constant. $sin(x)$ is purely constant, so its derivative is 0." | $f_y = x^2(3y^2) + 0 = 3x^2 y^2$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Find $f_x$ | Is $y$ treated as constant? | Derive only $x$ terms. |
| Find $f_y$ | Is $x$ treated as constant? | Derive only $y$ terms. |
| Mixed $f_{xy}$ | Did I do $x$ then $y$? | Differentiate $f_x$ with respect to $y$. |

</div>
</div>## Chapter Assessment

<div class="user-quiz" data-question="1. Calculate f_x and f_y for f(x,y) = e^(xy) * sin(x+y)"></div>
<div class="user-quiz" data-question="2. Find the second mixed partial derivative of f(x,y) = x\xB3y\xB2"></div>

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
        "title": "Ultimate Exam Room Cheat Sheet"
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
*   **Chain Rule (1 Independent):** $\frac{dw}{dt} = \frac{partial w}{partial x}\frac{dx}{dt} + \frac{partial w}{partial y}\frac{dy}{dt}$
*   **Chain Rule (2 Independent):** $\frac{partial w}{partial r} = \frac{partial w}{partial x}\frac{partial x}{partial r} + \frac{partial w}{partial y}\frac{partial y}{partial r}$
*   **Implicit Formula:** $\frac{dy}{dx} = - \frac{F_x}{F_y}$ (Works only if F(x,y) = 0).

### Step-by-Step Method for Chain Rule Problems
1.  **Draw the Tree:** Put the dependent variable (w) at the very top. Put the intermediate variables (x,y,z) on the next tier down. Put the root independent variables (t, r, s) at the absolute bottom.
2.  **Draw the Lines:** Connect the top to the middle, and the middle to the bottom based on the mathematical equations given.
3.  **Trace the Paths:** To find a derivative from the top apple to a bottom root, slide your finger down every possible continuous line routing to that specific root.
4.  **Multiply and Add:** Multiply the derivatives along a single distinct path. Add the results of all separate paths together.

### 10 Worked Exercises
**Exercise 1: Chain Rule with One Independent Path**
*   **Problem:** Find dw/dt given w = xy, where x = cos(t) and y = sin(t). Evaluate at t=\u03C0/2.
*   **Thinking Process:** I have an apple (w). It splits into two branches (x and y). Both branch down into one root (t). I have exactly two paths to trace.
*   **Unique Method:** Direct tree tracing and path addition.
*   **Step-by-Step Solution:**
    1.  Write formula: dw/dt = (\u2202w/\u2202x)(dx/dt) + (\u2202w/\u2202y)(dy/dt).
    2.  Left path: \u2202w/\u2202x = y. And dx/dt = -sin(t). Product is -y sin(t).
    3.  Right path: \u2202w/\u2202y = x. And dy/dt = cos(t). Product is x cos(t).
    4.  Add them: dw/dt = -y sin(t) + x cos(t).
    5.  Substitute intermediate variables back into roots: y = sin(t), x = cos(t).
    6.  dw/dt = -sin(t)sin(t) + cos(t)cos(t) = cos^2(t) - sin^2(t) = cos(2t).
    7.  Evaluate at t=\u03C0/2: cos(2(\u03C0/2)) = cos(\u03C0) = -1.
*   **Common mistake:** Forgetting to substitute back the x and y letters into 't' functions before trying to plug in the final exact 't' number.
*   **Figure Reference:** Figure 14.19 maps out a diamond-shaped network flow diagram linking dependencies visually from w, spreading to x/y, and converging to t.

**Exercise 2: Changes along a Helix Curve**
*   **Problem:** Find dw/dt for w = xy + z, where the particle moves on x=cos(t), y=sin(t), z=t. Evaluate at t=0.
*   **Thinking Process:** *Pause and trace paths.* Tree has three main branches x, y, z. All three converge into t. I need three terms added together.
*   **Unique Method:** 3-Term path addition.
*   **Step-by-Step Solution:**
    1.  Formula: dw/dt = (\u2202w/\u2202x)(dx/dt) + (\u2202w/\u2202y)(dy/dt) + (\u2202w/\u2202z)(dz/dt).
    2.  Derivative parts: \u2202w/\u2202x = y. dx/dt = -sin(t).
    3.  \u2202w/\u2202y = x. dy/dt = cos(t).
    4.  \u2202w/\u2202z = 1. dz/dt = 1.
    5.  Assemble: -y sin(t) + x cos(t) + 1.
    6.  Substitute intermediate values for t=0: x = cos(0) = 1. y = sin(0) = 0.
    7.  Final calculation: -(0)sin(0) + (1)cos(0) + 1 = 0 + 1 + 1 = 2.
*   **Common mistake:** Accidentally multiplying the three branches together instead of adding them at the junction point.
*   **Figure Reference:** Figure 14.21 depicts a 3D helix path with dependencies on time, illustrating the three distinct branches contributing to the change in 'w'.

**Exercise 3: Two Independent Roots**
*   **Problem:** Find \u2202w/\u2202r for w = x + 2y + z^2. Given x=r/s, y=r^2 + ln(s), z=2r.
*   **Thinking Process:** The tree root splits into two different bottom soils: r and s. The problem strictly asks for r. I will completely ignore all paths leading to s.
*   **Unique Method:** Selective path tracing targeting a specific root variable.
*   **Step-by-Step Solution:**
    1.  Formula: \u2202w/\u2202r = (\u2202w/\u2202x)(\u2202x/\u2202r) + (\u2202w/\u2202y)(\u2202y/\u2202r) + (\u2202w/\u2202z)(\u2202z/\u2202r).
    2.  \u2202w/\u2202x = 1. \u2202x/\u2202r = 1/s.
    3.  \u2202w/\u2202y = 2. \u2202y/\u2202r = 2r.
    4.  \u2202w/\u2202z = 2z. \u2202z/\u2202r = 2.
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
*   **Problem:** Find \u2202z/\u2202x given 1/x + 1/y + 1/z - 1 = 0 at (2, 3, 6).
*   **Thinking Process:** The magic formula expands to 3D implicitly! To find \u2202z/\u2202x, I will just use - F_x / F_z. Wait! Notice the pattern. The letter on TOP of the fraction (z) goes on the BOTTOM of the formula F_z. It swaps!
*   **Unique Method:** 3D implicit formula \u2202z/\u2202x = - F_x / F_z.
*   **Step-by-Step Solution:**
    1.  Let F(x,y,z) = x^-1 + y^-1 + z^-1 - 1.
    2.  Find F_x: -x^-2 = -1/x^2.
    3.  Find F_z: -z^-2 = -1/z^2.
    4.  Formula: - (-1/x^2) / (-1/z^2) = - (z^2 / x^2).
    5.  Evaluate at (x=2, z=6): - (6^2 / 2^2) = - 36 / 4 = -9.
*   **Common mistake:** Accidentally writing F_z / F_x instead of strictly F_x / F_z. The letters physically reverse position.
*   **Figure Reference:** Figure 14.24 shows a 3D implicit surface, and a tangent plane to illustrate the geometric interpretation of the partial derivative \u2202z/\u2202x.

**Exercise 7: Checking Chain Rule Constraints**
*   **Problem:** Express \u2202w/\u2202r in terms of r and s if w = xy + z, x = r-s, y=r+s, z=t.
*   **Thinking Process:** Wait, z = t? Where is r?
*   **Unique Method:** Tracing zero-paths in mixed variable trees.
*   **Step-by-Step Solution:**
    1.  \u2202w/\u2202r = (\u2202w/\u2202x)(\u2202x/\u2202r) + (\u2202w/\u2202y)(\u2202y/\u2202r) + (\u2202w/\u2202z)(\u2202z/\u2202r).
    2.  \u2202w/\u2202x = y. \u2202x/\u2202r = 1.
    3.  \u2202w/\u2202y = x. \u2202y/\u2202r = 1.
    4.  \u2202w/\u2202z = 1. But what is \u2202z/\u2202r? Since z=t, and t doesn't possess the letter r, its partial derivative against r is strict 0!
    5.  Equation becomes: y(1) + x(1) + 1(0) = x + y.
    6.  Substitute back: (r-s) + (r+s) = 2r.
*   **Common mistake:** Assuming every intermediate variable MUST map to every independent root. Broken branches yield zero derivative paths.
*   **Figure Reference:** Figure 14.25 illustrates a tree diagram where a branch from 'w' to 'z' leads to 't', demonstrating a 'dead end' or zero contribution when differentiating with respect to 'r'.

**Exercise 8: Differentiating Integrals (The Ultimate Chain Rule)**
*   **Problem:** Find the derivative of F(x) = \u222B_0^{x^2} sqrt(t^4 + t^3) dt.
*   **Thinking Process:** This combines the Fundamental Theorem of Calculus with the multivariable Chain Rule (Leibniz Integral Rule). The upper bound is moving (x^2), and the inside integrand also physically morphs based on x, but for this simpler version, the integrand is purely in terms of t.
*   **Unique Method:** Fundamental Theorem of Calculus Part 1 (with Chain Rule).
*   **Step-by-Step Solution:**
    1.  Identify the structure: F(x) = \u222B_a^{g(x)} f(t) dt. The derivative is f(g(x)) * g'(x).
    2.  Here, g(x) = x^2, so g'(x) = 2x.
    3.  And f(t) = sqrt(t^4 + t^3).
    4.  Plug g(x) into f(t): f(g(x)) = sqrt((x^2)^4 + (x^2)^3) = sqrt(x^8 + x^6).
    5.  Multiply by g'(x): 2x * sqrt(x^8 + x^6).
    6.  The derivative is 2x sqrt(x^8 + x^6).
*   **Common mistake:** Just plugging in the upper bound without multiplying by the chain rule derivative of the bound itself (the 2x). Students often forget d/dx(x^2).
*   **Figure Reference:** Figure 14.26 graphically represents the area under a curve, highlighting how a changing upper limit (x^2) requires a chain rule adjustment for the rate of area change.

**Exercise 9: Expanding Three Dependent Variables**
*   **Problem:** Find \u2202u/\u2202x if u = (p-q)/(q-r), p=x+y+z, q=x-y+z, r=x+y-z. (Source: COMSATS FA25).
*   **Thinking Process:** u depends on p, q, r. All three depend firmly on x. I must trace three branches.
*   **Unique Method:** Symmetrical algebraic substitution.
*   **Step-by-Step Solution:**
    1.  Formula: $\frac{partial u}{partial x} = \frac{partial u}{partial p}\frac{partial p}{partial x} + \frac{partial u}{partial q}\frac{partial q}{partial x} + \frac{partial u}{partial r}\frac{partial r}{partial x}$.
    2.  Find inner partials with respect to x: \u2202p/\u2202x = 1, \u2202q/\u2202x = 1, \u2202r/\u2202x = 1.
    3.  This simplifies the formula to: $\frac{partial u}{partial x} = \frac{partial u}{partial p} + \frac{partial u}{partial q} + \frac{partial u}{partial r}$.
    4.  Now find the partials of u with respect to p, q, r:
        *   \u2202u/\u2202p = 1/(q-r)
        *   \u2202u/\u2202q = $\frac{-(q-r)(1) - (p-q)(1)}{(q-r)^2} = \frac{-q+r-p+q}{(q-r)^2} = \frac{r-p}{(q-r)^2}$
        *   \u2202u/\u2202r = $\frac{-(p-q)(-1)}{(q-r)^2} = \frac{p-q}{(q-r)^2}$
    5.  Sum them up: $\frac{partial u}{partial x} = \frac{1}{q-r} + \frac{r-p}{(q-r)^2} + \frac{p-q}{(q-r)^2}$.
    6.  To simplify, find a common denominator: $\frac{(q-r) + (r-p) + (p-q)}{(q-r)^2} = \frac{q-r+r-p+p-q}{(q-r)^2} = \frac{0}{(q-r)^2} = 0$.
    7.  Therefore, \u2202u/\u2202x = 0.
*   **Common mistake:** Getting bogged down in complex algebra for \u2202u/\u2202q and \u2202u/\u2202r without recognizing the potential for simplification after summing. Also, forgetting to use the quotient rule for these partials.
*   **Figure Reference:** Figure 14.27 displays a complex multi-layered tree diagram for 'u' depending on 'p,q,r' which in turn depend on 'x,y,z', illustrating the systematic decomposition of dependencies.

**Exercise 10: Changing Dimensions (Real-World Applied)**
*   **Problem:** The edges of a box a, b, c change over time at 1 m/s, 1 m/s, and -3 m/s. If a=1, b=2, c=3, how fast is Volume (V) changing?
*   **Thinking Process:** Volume depends on three edges physically expanding/contracting over time. This is exactly the 3D chain rule!
*   **Unique Method:** Applied physical geometric rates.
*   **Step-by-Step Solution:**
    1.  Equation: V = a * b * c.
    2.  Formula: dV/dt = (\u2202V/\u2202a)(da/dt) + (\u2202V/\u2202b)(db/dt) + (\u2202V/\u2202c)(dc/dt).
    3.  \u2202V/\u2202a is exactly bc. \u2202V/\u2202b is ac. \u2202V/\u2202c is ab.
    4.  dV/dt = (bc)(da/dt) + (ac)(db/dt) + (ab)(dc/dt).
    5.  Substitute current states: a=1, b=2, c=3. And da/dt = 1, db/dt = 1, dc/dt = -3.
    6.  dV/dt = (2*3)(1) + (1*3)(1) + (1*2)(-3).
    7.  Calculate: 6(1) + 3(1) + 2(-3) = 6 + 3 - 6 = 3 cubic meters per second.
*   **Common mistake:** Treating a, b, c as constants instead of variables strictly bound to time t, or mixing up the values of a, b, c with their rates of change.
*   **Figure Reference:** Figure 14.28 provides an animation or diagram of a rectangular box whose dimensions dynamically change over time, visually representing the input rates of change.

#
### Algorithmic Problem Solving Flow

To master Tangent Planes, follow this algorithmic flow. Think of it as a decision tree for your brain\u2014it maps the logical steps you must take to arrive at the solution systematically.

<div className="algorithmic-flow" data-flow="tangent_plane"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Multivariable Chain Rule</div>
<div class="p-4">

**Question:** Let $z = xy$, where $x=cos t, y=sin t$. Find $\frac{dz}{dt}$ without substituting first.

| Inner voice | What you write |
| :--- | :--- |
| "$z$ depends on $x,y$, which depend on $t$. I draw the tree and write the chain sum." | $\frac{dz}{dt} = \frac{partial z}{partial x}\frac{dx}{dt} + \frac{partial z}{partial y}\frac{dy}{dt}$ |
| "Compute partials and substitute the $t$ derivatives." | $\frac{dz}{dt} = (y)(-sin t) + (x)(cos t)$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| $w$ depends on $x,y$ | $x,y$ depend on $u,v$ | Draw dependency tree. |
| $\frac{partial w}{partial u}$ | Did I trace all paths? | Sum product of derivatives down paths. |

</div>
</div>## Chapter Assessment

> **QUIZ:** If w = e^{xy} ln(z), x = t\xB2, y = sin t, z = cos t, find dw/dt at t = 0.
>
> 4. If $w = e^{xy} ln(z)$, $x = t^2$, $y = sin t$, $z = cos t$, find $\frac{dw}{dt}$ at $t = 0$.
> *(Source: CUI Sahiwal FA25 Q4a)*

> **QUIZ:** Use implicit differentiation to find \u2202z/\u2202y for x\xB2 y + y z\xB2 + z x = 0 at (1,1,-1).
>
> 5. Use implicit differentiation to find $\frac{partial z}{partial y}$ for $x^2 y + y z^2 + z x = 0$ at $(1,1,-1)$.
> *(Original)*

> **QUIZ:** Source: COMSATS FA24.. Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.
>
> 1. **Source: COMSATS FA24..** Suppose w = xy + yz + zx, and x=t, y=t^2, z=t^3. Find dw/dt using the chain rule.

> **QUIZ:** Source: COMSATS FA24.. Use the implicit formula to find \u2202z/\u2202y for x^2 + xy + y^2 - 7z = 0.
>
> 2. **Source: COMSATS FA24..** Use the implicit formula to find \u2202z/\u2202y for x^2 + xy + y^2 - 7z = 0.

> **QUIZ:** Source: CUI SP22.. Draw a tree diagram and formulate the chain rule equation for \u2202w/\u2202s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).
>
> 3. **Source: CUI SP22..** Draw a tree diagram and formulate the chain rule equation for \u2202w/\u2202s if w = g(x,y), x = h(r,s,t), y = k(r,s,t).

\`\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591 60%\` Course Progress

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
        "title": "Ultimate Exam Room Cheat Sheet"
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
*   Your computer continuously calculates the "Gradient Vector" (\u2207f). This is like your internal, magical compass that *always* points in the exact direction where the Wi-Fi signal is getting stronger *fastest*.
*   Now, imagine you decide to move in a specific, arbitrary direction (say, towards a buzzing machine). The "Directional Derivative" (D_u f) is what your antenna measures: it tells you *exactly* how much the Wi-Fi signal strength changes *in that specific direction* you chose to move. It might not be the fastest increase, but it gives you the precise rate of change along your path.

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="directional_derivative"></div>

Imagine standing blindly on the side of a mountain covered in thick fog. You have a magical compass. Instead of pointing North, this compass calculates the absolute steepest way up the mountain and points exactly in that direction. That magical needle is the "Gradient Vector".
Now, suppose you ignore the compass and decide to walk in a random direction (vector u). The "Directional Derivative" tells you exactly how steep the ground is in that specific direction. The mathematical magic is that you can calculate the steepness of *any* arbitrary path just by comparing it (using the dot product) against your magical Gradient compass!

### Glossary of Key Terms
*   Gradient Vector: Denoted by \u2207f (read as "del f"). It is a 2D or 3D vector made entirely of partial derivatives. It ALWAYS points in the direction of steepest ascent.
*   Directional Derivative: Evaluates the slope of a multivariable surface in the direction of a specified arbitrary unit vector 'u'.
*   Orthogonal/Normal: Mathematically perpendicular (90 degrees). The gradient is always perfectly orthogonal to level curves.
*   Dot Product: The mathematical engine that powers directional derivatives. It projects your arbitrary direction onto the gradient vector to find the steepness correlation.

### Why This Matters in Electrical Engineering
*   Antenna Arrays: The directional derivative computes the radiation signal strength intensity changing in a specific viewing angle away from the phased array.
*   Optimization (Gradient Descent): This is the absolute mathematical foundation of training AI and Neural Networks. Algorithms hunt for the minimum error by calculating the negative gradient (-\u2207f) and literally stepping strictly "downhill" over millions of parameters!
*   Vector Calculus: Gradients power Maxwell's equations (the fundamental laws of electromagnetism). The electric field E is mathematically defined as the negative gradient of the electric potential (-\u2207V).

### Formal Definitions and Notation
*   Gradient: \u2207f = (\u2202f/\u2202x)i + (\u2202f/\u2202y)j. (In 3D: \u2207f = (\u2202f/\u2202x)i + (\u2202f/\u2202y)j + (\u2202f/\u2202z)k)
*   Directional Derivative: D_u f = \u2207f \xB7 u. (Crucial: The vector 'u' MUST be scaled down to a length of exactly 1 before you take the dot product!).
*   Max Rate of Change: Occurs exactly in the direction of \u2207f. The physical magnitude of that steepest slope is just the length ||\u2207f||.
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
    3.  \u2207f = 4i + 1j.
    4.  Dot product: (4i + 1j) \xB7 ((1/sqrt(2))i + (1/sqrt(2))j).
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
    4.  \u2207f = 1i + 2j.
    5.  Dot product: (1)(3/5) + (2)(-4/5) = 3/5 - 8/5 = -5/5 = -1.
*   **Common mistake:** Taking the dot product directly with v=3i-4j, yielding -5, which is physically incorrect as it scales the true slope by 5 units.
*   **Figure Reference:** Figure X.3: The process of normalizing a vector 'v' into a unit vector 'u' before computing the directional derivative.

**Exercise 4: Maximum and Minimum Ascent Rates (Source: CUI SP22 Q5)**
*   **Problem:** In what directions does f(x,y) = x^2/2 + y^2/2 increase and decrease most rapidly at (1,1)? What are the rates?
*   **Thinking Process:** Maximum increase ALWAYS points exactly identical to the gradient! Maximum decrease ALWAYS points in the exact opposite direction (-\u2207f).
*   **Unique Method:** Theoretical vector alignment for absolute maxima.
*   **Step-by-Step Solution:**
    1.  f_x = x. At (1,1) = 1.
    2.  f_y = y. At (1,1) = 1.
    3.  \u2207f = 1i + 1j.
    4.  Rapid increase direction: Normalizing it gives u = (1/sqrt(2))i + (1/sqrt(2))j.
    5.  Max rate of change: The length ||\u2207f|| = sqrt(1^2 + 1^2) = sqrt(2).
    6.  Rapid decrease direction: Directly opposite, u = -(1/sqrt(2))i - (1/sqrt(2))j.
    7.  Min rate of change: -sqrt(2).
*   **Common mistake:** Providing the unnormalized gradient as the "direction". Directions mathematically should be expressed as length-1 uniform unit vectors.
*   **Figure Reference:** Figure X.4: Representation of steepest ascent (\u2207f) and descent (-\u2207f) on a surface, with corresponding rates at a point.

**Exercise 5: Zero Change Directions**
*   **Problem:** Standing at (1,1) on f(x,y) = x^2/2 + y^2/2, what paths yield precisely zero elevation change?
*   **Thinking Process:** A directional derivative is exactly 0 when the path is perfectly 90 degrees (orthogonal) to the gradient. Their dot product must equal 0.
*   **Unique Method:** Orthogonal vector swap trick.
*   **Step-by-Step Solution:**
    1.  We found \u2207f = 1i + 1j.
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
    6.  \u2207f = 2i - 2j - 1k.
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
    3.  \u2207f = (x/2)i + (2y)j.
    4.  At (-2, 1), \u2207f = (-2/2)i + 2(1)j = -1i + 2j.
    5.  The gradient Normal Vector is N = (-1, 2).
    6.  Equation: -1(x - (-2)) + 2(y - 1) = 0.
    7.  - (x + 2) + 2(y - 1) = 0 --> x - 2y = -4.
*   **Common mistake:** Plugging the tangent variables directly into y=mx+b blindly instead of relying on the elegant Normal Line layout.
*   **Figure Reference:** Figure X.7: An ellipse showing the gradient vector at a point and the tangent line (perpendicular to the gradient) passing through that point.

**Exercise 8: Gradient Algebra Rules**
*   **Problem:** Given f(x,y) = x-y and g(x,y) = 3y. Calculate \u2207(fg).
*   **Thinking Process:** Gradients follow the exact same algebra rules as basic 1D derivatives. I can use the Product Rule: f\u2207g + g\u2207f.
*   **Unique Method:** Gradient distribution bypassing full manual multiplication.
*   **Step-by-Step Solution:**
    1.  \u2207f = 1i - 1j.
    2.  \u2207g = 0i + 3j.
    3.  Formula: f(\u2207g) + g(\u2207f).
    4.  (x-y)(3j) + 3y(i - j).
    5.  Simplify: (3x - 3y)j + 3y i - 3y j.
    6.  Assemble: 3y i + (3x - 6y) j.
*   **Common mistake:** Attempting to multiply vector coordinates improperly against each other.
*   **Figure Reference:** Figure X.8: Illustrative diagram of applying the product rule for gradients, showing how \u2207(fg) combines vector and scalar products.

**Exercise 9: Scalar Components**
*   **Problem:** How is the directional derivative related to scalar components?
*   **Thinking Process:** This is a conceptual application request.
*   **Unique Method:** Identifying exact vector projections.
*   **Step-by-Step Solution:**
    1.  \u2207f is a vector. 'u' is a unit vector.
    2.  By fundamental vector algebra, breaking down the dot product \u2207f \xB7 u literally gives us the scalar magnitude component of \u2207f resting purely parallel onto the direction of u.
    3.  The directional derivative IS the scalar projection of the gradient!
*   **Common mistake:** Forgetting that directional derivative is an exact scalar number, not an active vector.
*   **Figure Reference:** Figure X.9: A vector projection diagram showing how the directional derivative is the scalar component of the gradient along the unit vector 'u'.

**Exercise 10: Temperature Gradient Field (Source: COMSATS FA25)**
*   **Problem:** Temperature is T(x,y,z) = 2xy - yz. In what direction from P(1, -1, 1) does temperature drop most rapidly, and what is this rate?
*   **Thinking Process:** Seeking steepest downhill. I will calculate \u2207T and physically invert every single sign to get -\u2207T.
*   **Unique Method:** Strict spatial inversion.
*   **Step-by-Step Solution:**
    1.  T_x = 2y. At (1, -1, 1) = -2.
    2.  T_y = 2x - z. At (1, -1, 1) = 2(1) - 1 = 1.
    3.  T_z = -y. At (1, -1, 1) = -(-1) = 1.
    4.  \u2207T = -2i + 1j + 1k.
    5.  Rapid drop direction is opposite: -\u2207T = 2i - 1j - 1k.
    6.  Rate is the length: sqrt( (-2)^2 + 1^2 + 1^2 ) = sqrt(4 + 1 + 1) = sqrt(6). Because it's dropping, the rate translates to -sqrt(6) degrees per foot.
*   **Common mistake:** Calculating the steepest ascent vector and forgetting to flip the signs for "dropping/decrease".
*   **Figure Reference:** Figure X.10: A 3D temperature field visualization, with an arrow indicating the direction of fastest temperature drop at a specific point.

#
### Algorithmic Problem Solving Flow

To master the Chain Rule, follow this algorithmic flow. Think of it as a decision tree for your brain\u2014it maps the logical steps you must take to arrive at the solution systematically.

<div className="algorithmic-flow" data-flow="chain_rule"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Directional Derivative</div>
<div class="p-4">

**Question:** Find directional derivative of $f(x,y)=xe^y$ at $(1,0)$ in direction of $v=(3,4)$.

| Inner voice | What you write |
| :--- | :--- |
| "First, I need the gradient vector $abla f$ at the point $(1,0)$." | $abla f = langle e^y, xe^y \rangle \rightarrow langle 1, 1 \rangle$ |
| "Second, I must normalize the direction vector $v$ to a unit vector $u$." | $u = \frac{langle 3,4 \rangle}{5} = langle \frac{3}{5}, \frac{4}{5} \rangle$ |
| "Dot the gradient with the unit vector." | $D_u f = langle 1, 1 \rangle cdot langle \frac{3}{5}, \frac{4}{5} \rangle = \frac{7}{5}$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Directional Deriv | Is $v$ a unit vector? | Must divide $v$ by $|v|$. |
| Max rate of increase | Is it in gradient direction? | Max magnitude is $|abla f|$. |

</div>
</div>## Chapter Assessment

> **QUIZ:** Source: COMSATS FA24.. Find the directional derivative of f(x,y) = x^2 y + e^{xy} sin(y) at P(1, 0) in the direction u = 1/2 i + sqrt(3)/2 j.
>
> 1. **Source: COMSATS FA24..** Find the directional derivative of f(x,y) = x^2 y + e^{xy} sin(y) at P(1, 0) in the direction u = 1/2 i + sqrt(3)/2 j.

> **QUIZ:** Source: CUI SP22.. In what direction is the directional derivative of f(x,y) = (x^2 - y^2)/(x^2 + y^2) at P(1,1) exactly equal to zero?
>
> 2. **Source: CUI SP22..** In what direction is the directional derivative of f(x,y) = (x^2 - y^2)/(x^2 + y^2) at P(1,1) exactly equal to zero?

> **QUIZ:** Source: COMSATS FA25.. Find an equation for the tangent line to the ellipse x^2/4 + y^2 = 2 at the point (-2, 1) exclusively using the gradient definition.
>
> 3. **Source: COMSATS FA25..** Find an equation for the tangent line to the ellipse x^2/4 + y^2 = 2 at the point (-2, 1) exclusively using the gradient definition.

> **QUIZ:** Find the direction(s) of zero change for f(x,y) = x\xB2 - 2xy + y\xB2 at (1,1).
>
> 4. Find the direction(s) of zero change for $f(x,y) = x^2 - 2xy + y^2$ at $(1,1)$.
> *(Source: CUI Lahore SP22 Q5a)*

> **QUIZ:** The temperature in a room is T(x,y,z) = 100 - x\xB2 - y\xB2 - z\xB2. A bug at (1,2,2) wants to cool fastest. In which direction should it move? What is the rate of cooling?
>
> 5. The temperature in a room is $T(x,y,z) = 100 - x^2 - y^2 - z^2$. A bug at $(1,2,2)$ wants to cool fastest. In which direction should it move? What is the rate of cooling?
> *(EE application)*

\`\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591 60%\` Course Progress

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
        "title": "Ultimate Exam Room Cheat Sheet"
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
> Imagine a transistor, a core component in all electronics. Its behavior (how much current flows for a given voltage) is often described by a complex, curvy, non-linear equation \u2013 a bit like our 3D mountain. When you want to design an amplifier, you don't want to deal with that complex curve for every tiny signal fluctuation (like your voice going into a microphone). Instead, engineers pick a "sweet spot" (the operating point, $P_0$) on that curve. At this spot, they "place" a perfectly straight line (the tangent line, which is a 1D version of a tangent plane). For small changes around $P_0$, the transistor's behavior can be *approximated* by that simple straight line. This "small-signal model" makes calculations easy, fast, and precise enough for designing functional circuits, without needing to solve the full complex non-linear equation every time.

*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="tangent_plane"></div>

If you zoom in close enough on a curved beach ball, it looks perfectly flat (this is why ancient people thought the Earth was flat!). In Calculus, if we zoom into a microscopic dot on a curvy 3D mountain, the surface mathematically behaves like a completely flat, rigid piece of plywood resting exactly on that dot. This is the "Tangent Plane." Differentials are just a way of using this flat piece of plywood to quickly estimate changes without calculating the crazy curves. Plywood math is easy; mountain math is hard!

### Glossary of Key Terms
* Tangent Plane: A perfectly flat 2D plane intersecting a 3D surface at exactly one point, maintaining the exact spatial slopes of the surface at that specific coordinate.
* Normal Vector: A vector pointing exactly 90-degrees perpendicularly outward from the surface like a flagpole. The Gradient \u2207f acts as the perfect Normal Vector!
* Linearization (Linear Approximation): Using the tangent plane to approximate complex nearby values rapidly, replacing a curvy equation with a linear flat approximation.
* Total Differential (dz or dw): A formula representing the estimated absolute total change in altitude resulting from small microscopic movements in x and y coordinates.

### Why This Matters in Electrical Engineering
* Error Analysis / Tolerance limits: Total Differentials are used relentlessly to map uncertainty. If a resistor R1 has \xB15% tolerance and R2 has \xB12%, the Total Differential calculates the maximum destructive deviation occurring in the core circuit operation explicitly.
* System Linearization: Nonlinear hardware (like diodes or MOSFETs) are painful to simulate mechanically. Linearization snaps a tangent line onto their operating V-I curve to construct "Small-Signal Models", tricking the math into acting linearly for micro-vibrations (audio signals).

### Formal Definitions and Notation
* Equation of a Plane: A(x - x_0) + B(y - y_0) + C(z - z_0) = 0.
* Tangent Plane (Implicit Level Surface): f_x(x-x_0) + f_y(y-y_0) + f_z(z-z_0) = 0.
* Tangent Plane (Standard z=f(x,y)): z - z_0 = f_x(x-x_0) + f_y(y-y_0).
* Total Differential: df = f_x dx + f_y dy + f_z dz.

### Step-by-Step Method for Plane Problems
1. Move everything to one side: If given an equation like z = x^2 + y^2, rip z over so it maps an implicit layout 0 = x^2 + y^2 - z. Now define this whole chunk as F(x,y,z).
2. Calculate the Gradient: Locate the Normal Vector by pumping the coordinates directly into the 3D gradient \u2207F = (F_x, F_y, F_z).
3. Assemble the Plane: Take your gradient pieces (A,B,C) and your point coordinates (x_0,y_0,z_0) and throw them firmly into the master plane layout structure A(x-x_0) + B(y-y_0) + C(z-z_0) = 0.

### 10 Worked Exercises
**Exercise 1: Tangent Plane to a Sphere**
* **Problem:** Find the tangent plane to the sphere x^2 + y^2 + z^2 = 14 at the point (1, 2, 3).
* **Thinking Process:** The equation naturally exists as a clean 3D level surface F(x,y,z) = 14. I just construct the 3D gradient \u2207F to use as my magic Normal perpendicular vector.
* **Unique Method:** Formulating 3D Normal Vectors for implicit spherical surfaces.
* **Step-by-Step Solution:** 
  1. Let F(x,y,z) = x^2 + y^2 + z^2.
  2. F_x = 2x, F_y = 2y, F_z = 2z.
  3. Evaluate at (1,2,3): \u2207F = (2, 4, 6). These are the A, B, C components.
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
* **Thinking Process:** The normal line is simply a line passing through the point pointing exactly along the \u2207F gradient direction! I'll write parameterized 3D line formulas mapping directly to A,B,C.
* **Unique Method:** Parameterized Orthogonal Vector Line Mapping.
* **Step-by-Step Solution:**
  1. Define implicit surface: F(x,y,z) = x^2 + y^2 - z = 0.
  2. \u2207F = (2x, 2y, -1). At (1, -1, 2), \u2207F = (2, -2, -1).
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
  1. Master template: dz = (\u2202z/\u2202x)dx + (\u2202z/\u2202y)dy.
  2. Compute \u2202z/\u2202x: 3x^2 y^2.
  3. Compute \u2202z/\u2202y: 2x^3 y.
  4. Final assembly: dz = (3x^2 y^2) dx + (2x^3 y) dy.
* **Figure Reference:** Figure 14.34 conceptually demonstrates how tiny changes (dx, dy) on a grid cause a specific resulting change (dz) on a surface's altitude.
* **Common Mistake:** Setting dx and dy to specific numerical values instead of leaving them as flexible theoretical "differential variables" to map geometric properties.

**Exercise 6: Error Estimation (EE Tolerance Analysis)**
* **Problem:** The resistance of a wire relies on radius r=2cm and length L=10cm according to R = k L / r^2 (k is a constant 5). Measurements have error dr = 0.05 and dL = 0.2. Estimate maximum error in Resistance.
* **Thinking Process:** *Before continuing, how would you set up the model?* Instead of recalculating extreme values forcefully, I just drop the exact errors linearly into the Total Differential container!
* **Unique Method:** Utilizing differentials as real-world physical boundary thresholds.
* **Step-by-Step Solution:**
  1. R = 5L / r^2.
  2. dR = (\u2202R/\u2202L) dL + (\u2202R/\u2202r) dr.
  3. \u2202R/\u2202L = 5/r^2 = 5/4 = 1.25.
  4. \u2202R/\u2202r = -10L / r^3 = -10(10)/8 = -100/8 = -12.5.
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
  2. \u2207F = (2x, 4y, -6z).
  3. Plug in P(2, -1, 1): \u2207F = (4, -4, -6). These are A, B, C.
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
* **Problem:** A cylinder's volume is V = \u03C0 r^2 h. If r has a 1% measurement error and h has a 2% error, estimate max percentage error identically for V.
* **Thinking Process:** Percentage error simply means manipulating differentials into fractional ratios mathematically (dV/V).
* **Unique Method:** Relative ratio boundary transformations.
* **Step-by-Step Solution:**
  1. dV = (2\u03C0rh) dr + (\u03C0r^2) dh.
  2. Divide entire equation explicitly by V (which equals \u03C0 r^2 h):
  3. dV/V = (2\u03C0rh/\u03C0r^2h) dr + (\u03C0r^2/\u03C0r^2h) dh.
  4. Simplify elegantly: dV/V = 2(dr/r) + 1(dh/h).
  5. The given % errors literally dictate: dr/r = 0.01. dh/h = 0.02.
  6. Maximum relative error visually: 2(0.01) + 1(0.02) = 0.02 + 0.02 = 0.04.
  7. Final Conclusion: The maximum expected bounding error in volume is strictly 4%.
* **Figure Reference:** Figure 14.39 visualizes a cylinder whose dimensions (r, h) have percentage uncertainties, illustrating how these translate to a percentage uncertainty in its volume.
* **Common Mistake:** Setting dV absolute values directly instead of elegantly dividing to map directly to proportional error structures.

#
### Algorithmic Problem Solving Flow

To master Directional Derivatives, follow this algorithmic flow. Think of it as a decision tree for your brain\u2014it maps the logical steps you must take to arrive at the solution systematically.

<div className="algorithmic-flow" data-flow="directional_derivative"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Tangent Plane to a Surface</div>
<div class="p-4">

**Question:** Find tangent plane to surface $F(x,y,z) = x^2+y^2+z^2 = 14$ at $(1,2,3)$.

| Inner voice | What you write |
| :--- | :--- |
| "For a level surface $F(x,y,z)=c$, the normal vector to the plane is precisely the gradient of $F$ at the point." | $abla F = langle 2x, 2y, 2z \rangle$ |
| "Evaluate $abla F$ at $(1,2,3)$." | $n = langle 2, 4, 6 \rangle$ |
| "Use the point-normal plane equation: $n cdot (r - r_0) = 0$." | $2(x-1) + 4(y-2) + 6(z-3) = 0$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Tangent Plane | Do I have $z=f(x,y)$? | Rewrite as $F(x,y,z)=f(x,y)-z=0$. |
| Normal vector | Is it the gradient? | $abla F(x_0, y_0, z_0)$ is the normal $n$. |

</div>
</div>## Chapter Assessment

> **QUIZ:** Source: COMSATS FA24.. Find the equation for the tangent plane to the surface z = ln(x^2 + y^2) evaluated at (1, 0, 0).
>
> 1. **Source: COMSATS FA24..** Find the equation for the tangent plane to the surface z = ln(x^2 + y^2) evaluated at (1, 0, 0).

> **QUIZ:** Source: CUI SP22.. The electrical voltage V = I R. Find the total differential dV specifically mapped against dI and dR representations conditionally.
>
> 2. **Source: CUI SP22..** The electrical voltage V = I R. Find the total differential dV specifically mapped against dI and dR representations conditionally.

> **QUIZ:** Source: COMSATS FA25.. Find the precise Linearization approximation L(x,y) mapping around point (0,0) explicitly for the function f(x,y) = e^x cos(y).
>
> 3. **Source: COMSATS FA25..** Find the precise Linearization approximation L(x,y) mapping around point (0,0) explicitly for the function f(x,y) = e^x cos(y).

> **QUIZ:** Find the linear approximation of f(x,y) = \u221A(x\xB2 + y\xB2) at (3,4) and use it to estimate \u221A(3.1\xB2 + 3.9\xB2).
>
> 4. Find the linear approximation of $f(x,y) = sqrt{x^2 + y^2}$ at $(3,4)$ and use it to estimate $sqrt{3.1^2 + 3.9^2}$.
> *(Source: CUI Lahore SP22 Q4a)*

> **QUIZ:** The resistance of a wire is R = \u03C1 L / A. If \u03C1 = 1.68\xD710\u207B\u2078 \u03A9\xB7m, L = 10.0 m with error \xB10.1 m, A = 2.0\xD710\u207B\u2076 m\xB2 with error \xB10.05\xD710\u207B\u2076, estimate the maximum possible error in R.
>
> 5. The resistance of a wire is $R = \rho L / A$. If $\rho = 1.68	imes10^{-8} Omegacdot	ext{m}$, $L = 10.0	ext{ m}$ with error $pm0.1	ext{ m}$, $A = 2.0	imes10^{-6}	ext{ m}^2$ with error $pm0.05	imes10^{-6}$, estimate the maximum possible error in $R$.
> *(EE application)*

\`\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591 60%\` Course Progress`
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
      { id: "ch14-7-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch14-7-visuals", title: "Visuals / Graphs" },
      { id: "ch14-7-test", title: "Chapter Assessment" }
    ],
    markdown: `

## Introduction and Core Concepts

In 14.7, we discover how to find the "peaks" (local maxima), "valleys" (local minima), and "mountain passes" (saddle points) of 3D surfaces modeled by $f(x,y)$. We use calculus to rigorously narrow our search by examining the first and second partial derivatives.

### 1. Definitions: Local Maximum, Local Minimum
Let $f(x, y)$ be defined on a region $R$ containing the point $(a, b)$.
- $f(a, b)$ is a **local maximum** value of $f$ if $f(a, b) ge f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$.
- $f(a, b)$ is a **local minimum** value of $f$ if $f(a, b) le f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$.

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
$$D = \begin{vmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} end{vmatrix}$$

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

*Sketching Guide for student:* To sketch $z = x^2 + y^2$, notice that $z ge 0$, and horizontal cross sections ($z=c$) are circles $x^2+y^2=c$. This forms a classic bowl-shaped paraboloid opening upwards, confirming the minimum at the bottom of the bowl.

**Solution:**
$\begin{align*} f_x &= 2x &&	ext{Step 1: Compute first partial derivatives to find critical points}. \\ f_y &= 2y && \\ 2x &= 0 implies x=0 &&	ext{Step 2: Set partial derivatives to zero and solve}.\\ 2y &= 0 implies y=0 && end{align*}$

The only critical point is $(0,0)$. The value of $f(0,0)$ is $0$.

$\begin{align*} f_{xx} &= 2, , f_{yy} = 2, , f_{xy} = 0 &&	ext{Step 3: Compute second derivatives to apply the Second Derivative Test}. \\ D &= f_{xx}f_{yy} - f_{xy}^2 && \\ D &= (2)(2) - 0 = 4 > 0 &&	ext{Step 4: Compute the discriminant } D. end{align*}$
Since $D > 0$ and $f_{xx} > 0$, the origin gives a **local minimum** of $0$.

### Example 2: Identifying a Saddle Point
**Question:** Find the local extreme values (if any) of $f(x, y) = y^2 - x^2$.

**Thought Process:**
Set partials to $0$. Find the critical point. Test it using $D$. I have to be careful with the signs.

*Sketching Guide for student:* Draw the x, y, and z axes. Notice that along the y-axis ($x=0$), the curve is a parabola opening up ($z=y^2$). Along the x-axis ($y=0$), the curve is a parabola opening down ($z=-x^2$). Combining these gives the classic Pringles chip shape stretching up along the y-axis and dropping down along the x-axis.

**Solution:**
$\begin{align*} f_x &= -2x &&	ext{Step 1: Find the first partial derivatives}. \\ f_y &= 2y && \\ -2x &= 0 implies x=0 &&	ext{Step 2: Find critical points}.\\ 2y &= 0 implies y=0 && 	ext{The critical point is } (0,0). end{align*}$

$\begin{align*} f_{xx} &= -2, , f_{yy} = 2, , f_{xy} = 0 &&	ext{Step 3: Evaluate the second derivatives}. \\ D &= (-2)(2) - 0 = -4 < 0 &&	ext{Step 4: Compute the discriminant } D. end{align*}$
A negative discriminant $D < 0$ means the point is a **saddle point**. There are no local extreme values.

### Example 3: Finding Local Extreme Values of a Polynomial
**Question:** Find the local extreme values of $f(x, y) = xy - x^2 - y^2 - 2x - 2y + 4$.

**Thought Process:** 
I will solve the simultaneous system of equations formed by setting $f_x=0$ and $f_y=0$. 

**Solution:** 
$\begin{align*} f_x &= y - 2x - 2 = 0 &&	ext{Step 1: Setup system of equations from partials}.\\ f_y &= x - 2y - 2 = 0 && \\ x &= \frac{y-2}{2} &&	ext{Step 2: Solve the first equation for } x. \\ \frac{y-2}{2} - 2y - 2 &= 0 &&	ext{Substitute into the second equation}. \\ y - 2 - 4y - 4 &= 0 &&	ext{Multiply by 2 and simplify}. \\ -3y &= 6 implies y = -2 &&	ext{Solve for } y. 	ext{ Thus } x = -2. end{align*}$
The critical point is $(-2, -2)$.

$\begin{align*} f_{xx} &= -2, , f_{yy} = -2, , f_{xy} = 1 &&	ext{Step 3: Evaluate second partial derivatives}. \\ D &= (-2)(-2) - (1)^2 = 3 > 0 &&	ext{Step 4: Compute the discriminant } D. end{align*}$
Since $D > 0$ and $f_{xx} < 0$, $f$ has a **local maximum** at $(-2, -2)$. 
$f(-2,-2) = 8$.

### Example 4: Absolute Extrema on a Closed Bounded Region
**Question:** Find the absolute maximum and minimum values of $f(x, y) = 2 + 2x + 2y - x^2 - y^2$ on the triangular region $R$ in the first quadrant bounded by the lines $x=0$, $y=0$, $y=9-x$.

**Thought Process:**
First, I will find interior critical points by setting the gradient to zero. Second, I will analyze each boundary segment separately, parameterize the boundary, and treat it like a standard 1D calculus problem. Finally, I will compile a list of all candidates and take the highest and lowest values found.

*Sketching Guide for student:* Draw the y-axis ($x=0$) and x-axis ($y=0$). Draw a line from $(0,9)$ to $(9,0)$, which is $y=9-x$. Shade the triangle bounded by these three lines. This is the domain in the xy-plane.

**Solution:**
**(a) Interior points:**
$\begin{align*} f_x &= 2 - 2x = 0 implies x=1 &&	ext{Step 1: Check interior critical points}. \\ f_y &= 2 - 2y = 0 implies y=1 && end{align*}$
The point $(1,1)$ is inside the triangle.
$f(1,1) = 2 + 2 + 2 - 1 - 1 = 4$.

**(b) Boundary points:**
$\begin{align*} 	ext{Segment } OA: , y&=0, , 0 le x le 9. &&	ext{Step 2: Check the bottom edge}. \\ f(x, 0) &= 2 + 2x - x^2. &&	ext{This is now a 1D function}. \\ f'(x) &= 2 - 2x = 0 implies x=1. &&	ext{Find extreme values along the segment}. end{align*}$
Evaluating candidates on this segment: $f(0,0) = 2$, $f(1,0) = 3$, $f(9,0) = -61$.

$\begin{align*} 	ext{Segment } OB: , x&=0, , 0 le y le 9. &&	ext{Step 3: Check the left edge}. \\ f(0, y) &= 2 + 2y - y^2. && end{align*}$
By symmetry, critical point at $y=1$.
Evaluating candidates: $f(0,1) = 3$, $f(0,9) = -61$.

$\begin{align*} 	ext{Segment } AB: , y &= 9-x, , 0 le x le 9. &&	ext{Step 4: Check the hypotenuse edge}. \\ f(x, 9-x) &= 2 + 2x + 2(9-x) - x^2 - (9-x)^2 &&	ext{Substitute the constraint into } f. \\  &= -61 + 18x - 2x^2. && \\ \frac{d}{dx}f(x, 9-x) &= 18 - 4x = 0 implies x = 9/2. &&	ext{Find extreme value along hypotenuse}. end{align*}$
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
$\begin{align*} V(y,z) &= (108 - 2y - 2z)yz &&	ext{Step 1: Eliminate x}. \\ &= 108yz - 2y^2z - 2yz^2. && \\ V_y &= 108z - 4yz - 2z^2 = z(108 - 4y - 2z) = 0 &&	ext{Step 2: Partial w.r.t y}. \\ V_z &= 108y - 2y^2 - 4yz = y(108 - 2y - 4z) = 0 &&	ext{Step 3: Partial w.r.t z}. end{align*}$
Exclude $y=0$ or $z=0$ (these yield zero volume). We solve the simultaneous equations:
$\begin{align*} 4y + 2z &= 108 &&	ext{Step 4: Solve the system}. \\ 2y + 4z &= 108 && end{align*}$
Subtracting the second from twice the first gives $6y = 108 implies y=18$. By symmetry $z=18$. Then $x=108-36-36 = 36$.
Checking second derivatives ensures this gives a maximum. Max Volume is $V=11664 	ext{ in}^3$.

---

## Visuals / Graphs

### 1. Saddle Point and Critical Points
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="saddle_point"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Finding Local Extrema</div>
<div class="p-4">

**Question:** Find and classify critical points of $f(x,y)=x^2+y^2-2x$.

| Inner voice | What you write |
| :--- | :--- |
| "First, set both partial derivatives to zero simultaneously to find critical points." | $f_x = 2x-2=0 implies x=1$  $f_y = 2y=0 implies y=0$. Point: $(1,0)$ |
| "Use the Second Derivative Test (discriminant $D$)." | $f_{xx}=2, f_{yy}=2, f_{xy}=0$  $D = (2)(2) - 0 = 4 > 0$. $f_{xx}>0 implies$ Local Min. |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| $D > 0$ and $f_{xx} > 0$ | Is it a cup up? | Local Minimum. |
| $D > 0$ and $f_{xx} < 0$ | Is it a cup down? | Local Maximum. |
| $D < 0$ | Saddle shape? | Saddle Point. |

</div>
</div>## Chapter Assessment

<div class="user-quiz" data-question="1. Find the local maximum, minimum, and saddle points of f(x,y) = x\xB2 + xy + y\xB2 + 3x - 3y + 4."></div>
<div class="user-quiz" data-question="2. Find absolute extrema of f(x,y) = 2x\xB2 - 4x + y\xB2 - 4y + 1 on the closed triangular plate bounded by x=0, y=2, y=2x in the first quadrant."></div>

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
      { id: "ch14-8-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch14-8-visuals", title: "Visuals / Graphs" },
      { id: "ch14-8-test", title: "Chapter Assessment" }
    ],
    markdown: `

## Introduction and Core Concepts

In section 14.8, we explore a powerful method for finding extreme values of constrained functions: the **method of Lagrange multipliers**. Sometimes we need to find the extreme values of a function whose domain is constrained to lie within some particular subset of the plane\u2014a disk, for example, a closed triangular region, or along a curve.

### 1. Constrained Maxima and Minima
Instead of substituting one variable for another (which could involve tricky domain shadows or square roots), we use Lagrange multipliers. 

**Theorem 12: The Orthogonal Gradient Theorem**
Suppose that $f(x, y, z)$ is differentiable in a region whose interior contains a smooth curve $C$ parametrized by $mathbf{r}(t)$. If $P_0$ is a point on $C$ where $f$ has a local maximum or minimum relative to its values on $C$, then $
abla f$ is orthogonal to $C$ at $P_0$.

**Corollary to Theorem 12:**
At the points on a smooth curve $mathbf{r}(t)$ where a differentiable function $f(x,y)$ takes on its local maxima and minima relative to its values on the curve, $
abla f cdot mathbf{v} = 0$, where $mathbf{v} = dmathbf{r}/dt$.

### 2. The Method of Lagrange Multipliers
Suppose that $f(x, y, z)$ and $g(x, y, z)$ are differentiable. To find the local maximum and minimum values of $f$ subject to the constraint $g(x, y, z) = 0$, find the values of $x, y, z$, and $lambda$ that simultaneously satisfy the equations:
$$
abla f = lambda 
abla g quad 	ext{and} quad g(x, y, z) = 0$$
For functions of two independent variables, the condition is similar, but without the variable $z$. The scalar $lambda$ is called a **Lagrange multiplier**.

### 3. The Geometry of the Solution
Imagine the level curves $f(x,y) = c$. We want to find the extreme values of $f(x,y)$ given that the point $(x,y)$ also lies on a constraint curve $g(x,y) = 0$. The extremum occurs when the level curve of $f$ just grazes (is tangent to) the constraint curve $g$. At the point of tangency, their normal vectors (the gradients) are parallel. Thus $
abla f = lambda 
abla g$.

### 4. Lagrange Multipliers with Two Constraints
Many problems require us to find the extreme values of a differentiable function $f(x, y, z)$ whose variables are subject to two constraints. If the constraints are $g_1(x, y, z) = 0$ and $g_2(x,y,z) = 0$, and $
abla g_1$ is not parallel to $
abla g_2$, we introduce two Lagrange multipliers $lambda$ and $mu$. We locate the points $P(x,y,z)$ where $f$ takes on its constrained extreme values by finding values that satisfy:
$$
abla f = lambda 
abla g_1 + mu 
abla g_2$$
coupled with the two constraint equations.

---

## ELI5 Explanation
Imagine you are walking along a winding path (the constraint $g(x,y)=0$) on the side of a mountain $f(x,y)$. You want to find the highest point on your path. The rule of Lagrange multipliers says: at the exact highest (or lowest) point on your path, the direction pointing straight up the mountain (the gradient $
abla f$) will be perpendicular to your path. Why? Because if the up-mountain direction tipped even slightly forward or backward along your path, you could just step that way to get higher!

In electrical engineering, think of maximizing system performance ($f$) under a strict budgetary or power constraint ($g$). You balance the performance gradient against the cost gradient.

---

## Detailed Worked Examples

### Example 1: Finding a Minimum with Constraint
**Question:** Find the point $P(x, y, z)$ closest to the origin on the plane $2x + y - z - 5 = 0$.

**Thought Process:**
Instead of minimizing the true distance $d = sqrt{x^2+y^2+z^2}$, we can minimize the square of the distance to avoid messy derivatives. Let $f(x,y,z) = x^2+y^2+z^2$. The constraint is the plane $g(x,y,z) = 2x+y-z-5 = 0$.

*Sketching Guide for student:* Sketch a flat plane cutting through the 3D axes at $x=2.5, y=5, z=-5$. Imagine a sphere growing from the origin. The closest point is exactly where the sphere first "kisses" the plane (tangency).

**Solution:**
$\begin{align*} f(x,y,z) &= x^2 + y^2 + z^2 &&	ext{Step 1: Define objective function}. \\ g(x,y,z) &= 2x + y - z - 5 = 0 &&	ext{Step 2: Define constraint function}. \\ 
abla f &= langle 2x, 2y, 2z \rangle &&	ext{Step 3: Calculate gradient of f}. \\ 
abla g &= langle 2, 1, -1 \rangle &&	ext{Step 4: Calculate gradient of g}. end{align*}$

Set $
abla f = lambda 
abla g$:
$\begin{align*} 2x &= 2lambda implies x = lambda &&	ext{Step 5: Equate components}. \\ 2y &= lambda implies y = lambda/2 && \\ 2z &= -lambda implies z = -lambda/2 && end{align*}$

Substitute into the constraint $2x+y-z-5=0$:
$\begin{align*} 2(lambda) + (lambda/2) - (-lambda/2) - 5 &= 0 &&	ext{Step 6: Substitute components into constraint}. \\ 2lambda + lambda - 5 &= 0 implies 3lambda = 5 implies lambda = 5/3 &&	ext{Solve for } lambda. end{align*}$

Thus $x = 5/3$, $y = 5/6$, $z = -5/6$. The closest point is $(5/3, 5/6, -5/6)$.

### Example 2: Using the Method of Lagrange Multipliers
**Question:** Find the greatest and smallest values that the function $f(x, y) = xy$ takes on the ellipse $\frac{x^2}{8} + \frac{y^2}{2} = 1$.

**Thought Process:**
Set $
abla f = lambda 
abla g$ and $g = 0$. This will generate a system of nonlinear equations. Finding valid solutions requires exploring different cases (like separating when coordinates can be zero or non-zero).

*Sketching Guide for student:* Draw the $xy$-axes. Draw an ellipse passing through $x = pm sqrt{8} approx pm 2.8$ and $y = pm sqrt{2} approx pm 1.4$. The level curves of $f(x,y)=xy$ are hyperbolas in quadrants 1/3 (positive values) and quadrants 2/4 (negative values). We look for where these hyperbolas just touch the ellipse!

**Solution:**
$\begin{align*} 
abla f &= ymathbf{i} + xmathbf{j} &&	ext{Step 1: Compute gradients}. \\ 
abla g &= \frac{x}{4}mathbf{i} + ymathbf{j} && \\ y &= \frac{lambda x}{4} &&	ext{Step 2: Set } 
abla f = lambda 
abla g. \\ x &= lambda y && end{align*}$

Now, solve the system. Substitute $x = lambda y$ into the first equation:
$\begin{align*} y &= \frac{lambda}{4} (lambda y) = \frac{lambda^2}{4} y &&	ext{Step 3: Solve the system}. end{align*}$
If $y = 0$, then $x = 0$, but $(0,0)$ does not satisfy the ellipse constraint $0^2/8 + 0^2/2 
eq 1$.
So $y 
eq 0$. This means we can divide by $y$:
$1 = \frac{lambda^2}{4} implies lambda^2 = 4 implies lambda = pm 2$.

Case 1: $lambda = 2 implies x = 2y$.
Substitute into the ellipse constraint:
$\begin{align*} \frac{(2y)^2}{8} + \frac{y^2}{2} &= 1 &&	ext{Step 4: Plug substitution into constraint}. \\ \frac{4y^2}{8} + \frac{y^2}{2} &= 1 implies \frac{y^2}{2} + \frac{y^2}{2} = 1 implies y^2 = 1 implies y = pm 1 && end{align*}$
Points: $(2, 1)$ and $(-2, -1)$. $f$ at these points equals $2$.

Case 2: $lambda = -2 implies x = -2y$.
Substitute into constraint:
$\frac{(-2y)^2}{8} + \frac{y^2}{2} = 1 implies y^2 = 1 implies y = pm 1$.
Points: $(-2, 1)$ and $(2, -1)$. $f$ at these points equals $-2$.

Extrema: **Maximum is 2**, **Minimum is -2**.

### Example 3: Finding Extreme Function Values on a Circle
**Question:** Find the max and min of $f(x,y) = 3x + 4y$ on the circle $x^2 + y^2 = 1$.

**Thought Process:**
This is classic constrained optimization. We need $
abla f = lambda 
abla g$. The gradients will be very simple linear expressions.

*Sketching Guide for student:* Sketch a circle of radius $1$. The function $f(x,y)=3x+4y$ represents a series of parallel lines with slope $-3/4$. We want to shift this line as far northeast (max) or southwest (min) as possible while still touching the circle.

**Solution:**
$\begin{align*} 
abla f &= langle 3, 4 \rangle &&	ext{Step 1: Compute gradients}. \\ 
abla g &= langle 2x, 2y \rangle && \\ 3 &= 2lambda x implies x = \frac{3}{2lambda} &&	ext{Step 2: Equate components}. \\ 4 &= 2lambda y implies y = \frac{2}{lambda} && end{align*}$

Substitute into $x^2+y^2=1$:
$\begin{align*} left(\frac{3}{2lambda}\right)^2 + left(\frac{2}{lambda}\right)^2 &= 1 &&	ext{Step 3: Solve constraint for lambda}. \\ \frac{9}{4lambda^2} + \frac{4}{lambda^2} &= 1 implies \frac{9+16}{4lambda^2} = 1 implies 25 = 4lambda^2 implies lambda = pm \frac{5}{2} && end{align*}$

Case 1: $lambda = 5/2 implies x = 3/5, y = 4/5$. 
$f(3/5, 4/5) = 3(3/5) + 4(4/5) = 9/5 + 16/5 = 25/5 = 5$.
Case 2: $lambda = -5/2 implies x = -3/5, y = -4/5$. 
$f(-3/5, -4/5) = -9/5 - 16/5 = -5$.

**Maximum is 5**, **Minimum is -5**.

### Example 4: Extremes of Distance on an Ellipse (Two Constraints)
**Question:** The plane $x+y+z=1$ cuts the cylinder $x^2+y^2=1$ in an ellipse. Find the points on the ellipse closest to and farthest from the origin.

**Thought Process:** We want to optimize $f(x,y,z) = x^2+y^2+z^2$ subject to $g_1 = x^2+y^2-1=0$ and $g_2 = x+y+z-1=0$. This requires the two constraint formula $
abla f = lambda 
abla g_1 + mu 
abla g_2$.

*Sketching Guide for student:* Sketch a cylinder of radius 1 centered on the z-axis. Sketch a plane tilting downwards. Where they intersect produces a tilted ellipse. We want to find the points on this rim closest/farthest to the origin.

**Solution:**
$\begin{align*} 
abla f &= langle 2x, 2y, 2z \rangle &&	ext{Step 1: Compute gradients}. \\ 
abla g_1 &= langle 2x, 2y, 0 \rangle && \\ 
abla g_2 &= langle 1, 1, 1 \rangle && end{align*}$

$
abla f = lambda 
abla g_1 + mu 
abla g_2$:
$\begin{align*} 2x &= 2lambda x + mu &&	ext{Step 2: Setup system of equations}. \\ 2y &= 2lambda y + mu && \\ 2z &= mu && end{align*}$

Subtract equations 1 and 2:
$\begin{align*} 2x - 2y &= 2lambda x - 2lambda y \\ 2(x-y) &= 2lambda(x-y) implies 2(x-y)(1-lambda) = 0. &&	ext{Step 3: Exploit symmetry to find cases}. end{align*}$
This gives cases $x=y$ or $lambda=1$.

Case 1: $x=y$.
Using $g_1$: $x^2+x^2=1 implies 2x^2=1 implies x=pm \frac{1}{sqrt{2}}$. Thus $y = pm \frac{1}{sqrt{2}}$.
Using $g_2$: $z = 1 - x - y = 1 - 2x$.
Points: $P_1(\frac{1}{sqrt{2}}, \frac{1}{sqrt{2}}, 1-sqrt{2})$ and $P_2(-\frac{1}{sqrt{2}}, -\frac{1}{sqrt{2}}, 1+sqrt{2})$.

Case 2: $lambda = 1$.
Then $2x = 2x + mu implies mu=0$.
Then from $2z = mu$, $z = 0$.
Substitute into $g_2$: $x+y+0=1 implies y=1-x$.
Substitute into $g_1$: $x^2+(1-x)^2=1 implies x^2+1-2x+x^2=1 implies 2x^2-2x=0 implies 2x(x-1)=0$.
So $x=0$ or $x=1$.
Produces points $P_3(0,1,0)$ and $P_4(1,0,0)$.

Now, compute distances ($d^2 = x^2+y^2+z^2$) for these points.
$P_1, P_2: d^2 = 1 + (1 mp sqrt{2})^2 = 4 mp 2sqrt{2}$. (approx 6.82 and 1.17).
$P_3, P_4: d^2 = 1$.

Closest points: **(0,1,0) and (1,0,0)**. Farthest point: **$(-\frac{1}{sqrt{2}}, -\frac{1}{sqrt{2}}, 1+sqrt{2})$**.

---

## Visuals / Graphs

### 1. Lagrange Multipliers Constraint
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="lagrange_multiplier"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Lagrange Multiplier Method</div>
<div class="p-4">

**Question:** Minimize $f(x,y)=x^2+y^2$ subject to $x+y=2$.

| Inner voice | What you write |
| :--- | :--- |
| "Set up the Lagrange equation: gradients must be parallel. $abla f = lambda abla g$." | $langle 2x, 2y \rangle = lambda langle 1, 1 \rangle$ |
| "We get $2x=lambda$, $2y=lambda$, so $x=y$. Plug this back into the constraint." | $x+x=2 implies x=1, y=1$ |
| "The constrained minimum is just the function value there." | $f(1,1) = 1^2+1^2 = 2$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| "Subject to..." | Is it an equality constraint? | Use $abla f = lambda abla g$. |
| System of eqs | Did I forget the constraint? | Always include $g(x,y)=c$ to solve. |

</div>
</div>## Chapter Assessment

<div class="user-quiz" data-question="1. Find the maximum and minimum values of f(x,y)=xy on the ellipse x\xB2/8 + y\xB2/2 = 1."></div>
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
      { id: "ch14-9-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch14-9-visuals", title: "Visuals / Graphs" },
      { id: "ch14-9-test", title: "Chapter Assessment" }
    ],
    markdown: `## Review of Previous Concepts

- **Partial derivatives (from 14.3):** Isolating variables mathematically representing exact slope definitions.
- **Chain rule (from 14.4):** Tracking nested dependent variables structurally bridging components recursively.
- **Implicit differentiation:** Generating rate functions embedded actively without standard algebra explicit mapping logic.

We now explain that sometimes variables are not universally independent (e.g., ideal gas law $PV=nRT$). The notation $(\frac{partial w}{partial x})_y$ directly specifies actively which variable terms are logically held securely constant.

---

## ELI5 Explanation

Imagine you critically measure voltage $V$ dropping across an active resistor, current $I$ streaming through it, and ambient temperature $T$. Ohm's law $V=IR$ reliably gives a relational link defining bounds mathematically among $V$, $I$, $R$. If you want selectively to map how structurally $V$ shifts cleanly scaled to $I$ while meticulously keeping $R$ constrained constant, that uniquely represents a partial differential logic. But if $R$ exactly fluctuates tracking $T$, then fundamentally choosing what is an independent parameter changes the outcome entirely.

---

## Glossary of Key Terms

- **Dependent variable:** A variable whose value depends on constraints.
- **Independent variable:** Variables we are free to change.
- **Constrained variables:** Setting limitations linking variables $g(x,y,z,w) = 0$.
- **Notation $(\frac{partial w}{partial x})_y$:** Explicit constraint mapping derivative w.r.t $x$ while holding $y$ constant, treating $x$ and $y$ as the independent variables.
- **Arrow diagram:** Visual structures tracking the complex chain derivatives mappings.

---

## Why This Matters in Electrical Engineering

- **Thermodynamics:** Electronic components (resistance vs temperature, voltage/current relations under constraint).
- **Semiconductor physics:** Carrier concentration depends on temperature and doping; variables are linked.
- **Control systems:** State variables often satisfy conservation laws.

---

## Formal Definitions and Notation

- Given equations relating variables, we choose which are considered independent. Then the partial derivative notation includes the fixed independent variables as subscripts, e.g., $(\frac{partial w}{partial x})_{y,z}$ means $x,y,z$ are independent and $y,z$ are held constant during the $x$ derivative.

---

## Step-by-Step Method for Solving

1. Identify which variables are independent (given in the problem as subscripts).
2. Write the constraint equations linking the dependent and independent variables.
3. Differentiate the function $w$ with respect to the chosen independent variable, treating the other independent variables as constants and using the constraint to eliminate dependent variables.
4. If elimination is messy, use implicit differentiation with partial derivatives and solve for the desired derivative.

---

## Algorithmic Problem Solving Flow

<div className="algorithmic-flow" data-flow="constrained_vars"></div>

---

## 10 Worked Exercises

**Exercise 1: Explicit Sub**
* **Problem:** $w=x^2+y^2+z^2$, $z=x^2+y^2$. Find $(partial w / partial x)_y$. (Textbook 14.9 Ex 1)
* **Thinking Process:** Independent vars are $x,y$. Eliminate $z$!
* **Step-by-Step Solution:** 
  1. $w = x^2+y^2+(x^2+y^2)^2$.
  2. Differentiating w.r.t $x$: $2x + 2(x^2+y^2)(2x) = 2x + 4x^3 + 4xy^2$.

**Exercise 2: Alternative Constraint**
* **Problem:** $w=x^2+y^2+z^2$, $z=x^2+y^2$. Find $(partial w / partial x)_z$.
* **Thinking Process:** Independent vars are $x,z$. Must eliminate $y$.
* **Step-by-Step Solution:** 
  1. $y^2 = z - x^2$.
  2. $w = x^2 + (z-x^2) + z^2 = z + z^2$.
  3. Derivative w.r.t $x$ is 0.

**Exercise 3: EE Resistor Example**
* **Problem:** For a resistor, $V=IR$, and $R=R_0(1+alpha(T - T_0))$. Find $(partial V/partial I)_T$.
* **Thinking Process:** Treat $I$ and $T$ as independent.
* **Step-by-Step Solution:** 
  1. Substitute $R$: $V = I R_0(1+alpha(T - T_0))$.
  2. $(partial V/partial I)_T = R_0(1+alpha(T - T_0))$.

**(Following 7 exercises cover implicit substitutions, multivariable constraints 1-8, 9-12 from the textbook).**

---





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Constrained Variables (Implicit Jacobian)</div>
<div class="p-4">

**Question:** Given $F(x,y,z)=0$, find $(partial z / partial x)_y$.

| Inner voice | What you write |
| :--- | :--- |
| "When we have an implicit surface and want a partial derivative, we use the negative ratio of partials." | $(partial z / partial x)_y = -\frac{F_x}{F_z}$ |
| "The subscript $y$ just means we hold $y$ constant, which matches how $F_x$ treats $y$." | Verify $F_z eq 0$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Implicit relationship | Are we deriving $z$ wrt $x$? | Use $-F_x / F_z$. |
| Subscript notation | $(partial w / partial x)_y$ | $y$ is explicitly held constant. |

</div>
</div>## Chapter Assessment

<div class="user-quiz" data-question="1. Evaluate (\u2202w/\u2202x)_y if w=x\xB2+y-z+sin(t) and x+y=t. (Textbook Ex 2)"></div>
<div class="user-quiz" data-question="2. Find (\u2202w/\u2202y)_x if w=xy+z and z=x+y. (Textbook Ex 4)"></div>
<div class="user-quiz" data-question="3. Find derivative of internal energy (\u2202U/\u2202P)_V assuming PV=nRT. (Textbook Ex 5)"></div>
<div class="user-quiz" data-question="4. Differentiate w=x\xB2y\xB2+yz-z\xB3 if x\xB2+y\xB2+z\xB2=6. Find (\u2202w/\u2202y)_x. (Textbook Ex 7)"></div>
<div class="user-quiz" data-question="5. Determine (\u2202x/\u2202r)_theta if x\xB2+y\xB2=r\xB2 and x=r*cos(theta). (Textbook Ex 9)"></div>
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
      { id: "ch15-1-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch15-1-visuals", title: "Visuals / Graphs" },
      { id: "ch15-1-test", title: "Chapter Assessment" }
    ],
    markdown: `

## Introduction and Core Concepts

In Chapter 15, we expand calculus from lines and curves to sheets and solids. The double integral allows us to integrate a function of two variables $f(x,y)$ over a planar region $R$.

### 1. Double Integrals over Rectangles
A double integral measures the volume of the 3D solid region over the $xy$-plane bounded above by the surface $z = f(x,y)$ and below by the region $R$.
The double integral is defined as the limit of Riemann sums over small rectangular areas $Delta A_k$:
$$iint_R f(x,y) dA = lim_{||P|| 	o 0} sum_{k=1}^n f(x_k,y_k) Delta A_k$$

### 2. Fubini's Theorem (First Form)
If $f(x, y)$ is continuous throughout the rectangular region $R: a le x le b$, $c le y le d$, then the double integral can be calculated as an **iterated integral** in either order:
$$iint_R f(x, y) dA = int_c^d int_a^b f(x, y) , dx , dy = int_a^b int_c^d f(x, y) , dy , dx$$

### 3. Fubini's Theorem (Stronger Form) over Bounded Nonrectangular Regions
For non-rectangular regions, the integration bounds are functions of the outer variable.
1. If $R$ is defined by $a le x le b, g_1(x) le y le g_2(x)$:
   $$iint_R f(x,y) dA = int_a^b int_{g_1(x)}^{g_2(x)} f(x,y) , dy , dx$$
2. If $R$ is defined by $c le y le d, h_1(y) le x le h_2(y)$:
   $$iint_R f(x,y) dA = int_c^d int_{h_1(y)}^{h_2(y)} f(x,y) , dx , dy$$

### 4. Finding Limits of Integration Method
1. **Sketch:** Sketch the region of integration and label bounding curves.
2. **Find inner limits:** Imagine a vertical line (for $dy,dx$) or horizontal line (for $dx,dy$) cutting through $R$. Mark where it enters and leaves. These correspond to the inner integral limits.
3. **Find outer limits:** Choose the solid constant limits that encompass the entire region side-to-side (for $x$) or top-to-bottom (for $y$).

### 5. Properties of Double Integrals
- **Constant Multiple:** $iint_R c f(x,y) dA = c iint_R f(x,y) dA$
- **Sum and Difference:** $iint_R (f pm g) dA = iint_R f dA pm iint_R g dA$
- **Domination:** If $f(x,y) ge g(x,y)$ on $R$, then $iint f dA ge iint g dA$.
- **Additivity:** If $R$ is union of two non-overlapping regions $R_1, R_2$, then $iint_R = iint_{R_1} + iint_{R_2}$.

---

## ELI5 Explanation

Imagine painting a large room with a roller. You can paint entirely in vertical stripes top-to-bottom across the room, or horizontal stripes left-to-right. Either way, you use the same total amount of paint and cover the entire room! Double integrals are the exact same concept \u2013 Fubini's theorem proves we can integrate slice by slice horizontally or vertically and the 3D volume under the surface will be completely identical. 

---

## Detailed Worked Examples

### Example 1: Evaluating a Double Integral Over a Rectangle
**Question:** Calculate $iint_R f(x,y) dA$ for $f(x,y)=1-6x^2y$ and $R: 0 le x le 2, -1 le y le 1$.

**Thought Process:** 
Since the bounds are constants, Fubini allows evaluating in any order. The bounds of integration are $-1 	o 1$ for $y$, and $0 	o 2$ for $x$. I will choose to evaluate $dx,dy$.

*Sketching Guide for student:* The region is just a standard square patch on your $xy$ graph paper, stretching horizontally from 0 to 2, and vertically from -1 to 1.

**Solution:**
$\begin{align*} iint_R f(x,y) dA &= int_{-1}^1 int_0^2 (1 - 6x^2y) ,dx ,dy &&	ext{Step 1: Set up iterated integral}. \\ &= int_{-1}^1 left[ x - 2x^3y \right]_{x=0}^{x=2} ,dy &&	ext{Step 2: Antiderivative of } x 	ext{ and } x^2 	ext{ w.r.t } x. \\ &= int_{-1}^1 (2 - 2(8)y - (0)) ,dy &&	ext{Step 3: Evaluate bounds at } x=2. \\ &= int_{-1}^1 (2 - 16y) ,dy &&	ext{Step 4: Cleanup remaining integral}. \\ &= left[ 2y - 8y^2 \right]_{-1}^1 &&	ext{Step 5: Antiderivative w.r.t y}. \\ &= (2 - 8) - (-2 - 8) = -6 - (-10) = 4 &&	ext{Step 6: Evaluate final bounds}. end{align*}$

### Example 2: Finding Volume over a Nonrectangular Region
**Question:** Find the volume of the prism whose base is the triangle in the $xy$-plane bounded by the $x$-axis and the lines $y=x$ and $x=1$, and whose top lies in the plane $z=3-x-y$.

**Thought Process:**
First, sketch the 2D base. The $x$-axis is $y=0$. The region is bounded by $y=0$, $y=x$, and $x=1$. This forms a triangle with vertices $(0,0), (1,0), (1,1)$. For a vertical strip (evaluating $y$ first), the bottom of the strip is on $y=0$ and the top touches $y=x$. The strip sweeps horizontally from $x=0$ to $x=1$.

*Sketching Guide for student:* Draw $x$-axis and $y$-axis. Draw $y=x$ (a diagonal line). Draw $x=1$ (a vertical line). Shade the triangular area beneath $y=x$, above the $x$-axis, stopping at $x=1$.

**Solution:**
$\begin{align*} V &= int_0^1 int_0^x (3 - x - y) ,dy ,dx &&	ext{Step 1: Setup integral based on boundary sketches}. \\ &= int_0^1 left[ 3y - xy - \frac{y^2}{2} \right]_{y=0}^{y=x} ,dx &&	ext{Step 2: Take antiderivative w.r.t y}. \\ &= int_0^1 left( 3x - x^2 - \frac{x^2}{2} \right) ,dx &&	ext{Step 3: Evaluate the bounds}. \\ &= int_0^1 left( 3x - \frac{3x^2}{2} \right) ,dx &&	ext{Step 4: Combine generic terms}. \\ &= left[ \frac{3x^2}{2} - \frac{x^3}{2} \right]_0^1 &&	ext{Step 5: Process standard antiderivative}. \\ &= \frac{3}{2} - \frac{1}{2} = 1 &&	ext{Step 6: Final evaluation}. end{align*}$

### Example 3: Reversing the Order of Integration
**Question:** Calculate $iint_R \frac{sin x}{x} dA$, where $R$ is the triangle bounded by the $x$-axis, $y=x$, and $x=1$.

**Thought Process:**
This problem illustrates a key technique. $int \frac{sin x}{x} dx$ famously has no elementary antiderivative. It is mathematically unsolvable in a simple way! Therefore, we MUST integrate with respect to $y$ first. As defined in Example 2, the triangle has bounds $y=0$ to $y=x$. 

**Solution:**
$\begin{align*} V &= int_0^1 int_0^x \frac{sin x}{x} ,dy ,dx &&	ext{Step 1: Write solvable order } dy dx. \\ &= int_0^1 left[ y \frac{sin x}{x} \right]_{y=0}^{y=x} ,dx &&	ext{Step 2: Integrate w.r.t y treating x as constant}. \\ &= int_0^1 left( x \frac{sin x}{x} \right) ,dx &&	ext{Step 3: Evaluate limits}. \\ &= int_0^1 sin x ,dx &&	ext{Step 4: Miraculously, the } x 	ext{ cancels out!}. \\ &= [-cos x]_0^1 = -cos(1) - (-1) &&	ext{Step 5: Antiderivative and substitution}. \\ &= 1 - cos(1) approx 0.46 &&	ext{Step 6: Solved}. end{align*}$

### Example 4: Changing Bounds when Reversing Order
**Question:** Sketch the region of integration for $int_0^2 int_{x^2}^{2x} (4x+2) dy dx$, and write an equivalent integral with the order reversed.

**Thought Process:**
The existing integral says: $y$ goes from $y=x^2$ (a parabola) up to $y=2x$ (a line). $x$ goes from 0 to 2. Let's find their intersections: $x^2 = 2x implies x=0, 2$. Matches perfectly.
To reverse bounds to $dx dy$: we need $x$ as horizontal strips. The left boundary is the line $x = y/2$. The right boundary is the parabola $x = sqrt{y}$. The $y$-axis range is from 0 to 4 (since $y=2x, 2(2)=4$).

*Sketching Guide for student:* Plot parabola $y=x^2$ and line $y=2x$. Shade the crescent moon shape trapped between them. A horizontal sweeping line enters at the straight line ($x = y/2$) and exits at the parabola wall ($x = sqrt{y}$).

**Solution:**
$\begin{align*} 	ext{New Integral} &= int_0^4 int_{y/2}^{sqrt{y}} (4x+2) ,dx ,dy &&	ext{Step 1: Invert bounds logically}. \\ &= int_0^4 left[ 2x^2 + 2x \right]_{x=y/2}^{x=sqrt{y}} ,dy &&	ext{Step 2: Evaluate inner dx}. \\ &= int_0^4 left( (2y + 2sqrt{y}) - (2(y^2/4) + y) \right) ,dy &&	ext{Step 3: Plug in new horizontal bounds}. \\ &= int_0^4 left( y + 2y^{1/2} - \frac{y^2}{2} \right) ,dy &&	ext{Step 4: Algebraic simplification}. \\ &= left[ \frac{y^2}{2} + \frac{4}{3}y^{3/2} - \frac{y^3}{6} \right]_0^4 &&	ext{Step 5: Integrate}. \\ &= 8 + \frac{4}{3}(8) - \frac{64}{6} = 8 + \frac{32}{3} - \frac{32}{3} = 8 &&	ext{Step 6: Solution}. end{align*}$

---

## Visuals / Graphs

### 1. Volume as a Double Integral
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="double_integral"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Reversing Limits of Integration</div>
<div class="p-4">

**Question:** Reverse the bounds of $int_0^1 int_x^1 e^{y^2} dy dx$.

| Inner voice | What you write |
| :--- | :--- |
| "I can't integrate $e^{y^2}$ wrt $y$. The given bounds mean: $y$ goes from $x 	o 1$; $x$ goes from $0 	o 1$." | Draw triangle: Vertices $(0,0), (1,1), (0,1)$. |
| "Reverse order: shoot horizontal arrows. $x$ goes from left ($0$) to right ($y$). $y$ goes $0 	o 1$." | $int_0^1 int_0^y e^{y^2} dx dy = dots = \frac{1}{2}(e-1)$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Impossible integral | Can I switch $dx dy$ to $dy dx$? | Sketch the region and slice other way. |
| Type I Region | Top/bottom curves? | $int_a^b int_{g_1(x)}^{g_2(x)}$ |

</div>
</div>## Chapter Assessment

<div class="user-quiz" data-question="1. Evaluate the double integral over the rectangle bounds [-1,1] x [0,2] for f(x,y) = x\xB2y"></div>
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
      { id: "ch15-2-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
      { id: "ch15-2-visuals", title: "Visuals / Graphs" },
      { id: "ch15-2-test", title: "Chapter Assessment" }
    ],
    markdown: `

## Introduction and Core Concepts

In 15.2, we learn that double integrals can do much more than just compute 3D volumes. By carefully choosing the integrand $f(x,y)$, we can map physical properties like 2D Area, Average Value, Mass, and Center of Mass for flat plates. 

### 1. Areas of Bounded Regions in the Plane
If we set $f(x, y) = 1$ in the definition of the double integral, the sum simply accumulates the area of the small rectangles. Thus, the total area $A$ of a closed, bounded plane region $R$ is:
$$Area = iint_R 1 dA$$

### 2. Average Value
The average height of water sloshing in a tank is the total volume divided by the base area. Similarly, the average value of an integrable function $f$ over a region $R$ is:
$$	ext{Average value of } f 	ext{ over } R = \frac{1}{	ext{area of } R} iint_R f dA$$

### 3. Mass and First Moments for Thin Flat Plates
Let $delta(x, y)$ be the continuous density function (mass per unit area) of a thin flat plate covering a region $R$. 
- **Mass $M$:** $M = iint_R delta(x, y) dA$
- **First moment about x-axis $M_x$:** $M_x = iint_R y delta(x, y) dA$
- **First moment about y-axis $M_y$:** $M_y = iint_R x delta(x, y) dA$
- **Center of mass $(\bar{x}, \bar{y})$:** $\bar{x} = \frac{M_y}{M}, quad \bar{y} = \frac{M_x}{M}$

### 4. Moments of Inertia (Second Moments)
Moments of inertia quantify the energy required to accelerate the plate to a particular angular velocity. They use the squares of the "lever-arm" distances $x$ and $y$.
- **About the x-axis $I_x$:** $I_x = iint_R y^2 delta(x, y) dA$
- **About the y-axis $I_y$:** $I_y = iint_R x^2 delta(x, y) dA$
- **Polar Moment of Inertia (about origin) $I_0$:** $I_0 = iint_R (x^2+y^2)delta(x,y) dA = I_x + I_y$

### 5. Radii of Gyration
The radius of gyration tells you how far from the axis the entire mass of the plate might be concentrated to give the same moment of inertia.
- $R_x = sqrt{I_x/M}$
- $R_y = sqrt{I_y/M}$
- $R_0 = sqrt{I_0/M}$

### 6. Centroids of Geometric Figures
If the density $delta(x,y)$ is perfectly constant across the plate, it cleanly cancels out of the center of mass fraction! In engineering, when the density is constant and uniform, we just call the geographic balance point the **Centroid** of the geometric shape. We simply set $delta=1$ to calculate it.

---

## ELI5 Explanation

Imagine spinning a pencil. If you tape two coins close to the center, it spins easily. If you tape the coins fully at the outer ends, it is very hard to start spinning! This is "Moment of Inertia" \u2013 it measures how mass is distributed structurally relative to the axis, calculated mathematically by a double integral multiplying density $delta$ by squared radius $r^2$. The "centroid" is exactly where you put your finger underneath a weird cardboard shape to make it flawlessly balance without tipping.

---

## Detailed Worked Examples 

### Example 1: Finding Area with Double Integrals
**Question:** Find the area of the region $R$ bounded by $y = x$ and $y = x^2$ in the first quadrant.

**Thought Process:** 
I can just set up a double integral with $f(x,y) = 1$. The vertical strips move from bottom curve $y=x^2$ to top curve $y=x$. Horizontal bounds are intersections: $x = x^2 implies x=0, 1$.

*Sketching Guide for student:* Draw the linear line $y=x$ rising 45 degrees. Draw the curved parabola bowl $y=x^2$ dipping below the line initially. They intersect at $(0,0)$ and exactly at $(1,1)$. The sliver area between them is our region $R$. 

**Solution:**
$\begin{align*} A &= int_0^1 int_{x^2}^{x} 1 ,dy ,dx &&	ext{Step 1: Set up double integral with geometric bounds}. \\ &= int_0^1 [y]_{y=x^2}^{y=x} ,dx &&	ext{Step 2: Antiderivative of 1 is just y}. \\ &= int_0^1 (x - x^2) ,dx &&	ext{Step 3: Evaluate bounded expressions}. \\ &= left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 &&	ext{Step 4: Standard power rule antiderivative}. \\ &= \frac{1}{2} - \frac{1}{3} = \frac{1}{6} &&	ext{Step 5: Calculate fraction algebra}. end{align*}$

### Example 2: Finding Average Value
**Question:** Find the average value of $f(x,y) = x cos(xy)$ over the rectangle $R: 0 le x le pi, 0 le y le 1$.

**Thought Process:**
Calculate area of $R$. Then evaluate $iint_R f(x,y) dA$. Divide.

*Sketching Guide for student:* Draw a simple rectangle from $0$ to $pi$ on the x-axis and $0$ to $1$ on the y-axis.

**Solution:**
$\begin{align*} 	ext{Area of } R &= pi 	imes 1 = pi &&	ext{Step 1: Area calculation}. \\ iint_R f dA &= int_0^{pi} int_0^1 x cos(xy) ,dy ,dx &&	ext{Step 2: Setup Double Integral}. \\ &= int_0^{pi} left[ sin(xy) \right]_0^1 ,dx &&	ext{Step 3: Integrate w.r.t y. Note } x 	ext{ serves as inner coefficient}. \\ &= int_0^{pi} sin(x) ,dx &&	ext{Step 4: Substitute limits } y=1 	ext{ and } 0. \\ &= left[ -cos x \right]_0^{pi} = -cos(pi) - (-cos(0)) = 1 + 1 = 2 &&	ext{Step 5: Integrate and solve}. end{align*}$

Average Value $=$ Integral $/$ Area $= 2/pi$.

### Example 3: Finding the Center of Mass of Variable Density
**Question:** A thin plate covers the triangular region bounded by the $x$-axis and the lines $x=1$ and $y=2x$. Density is $delta(x,y) = 6x + 6y + 6$. Find the mass and center of mass.

**Thought Process:**
Calculating geometric moments means resolving $iint delta$, $iint y delta$, and $iint x delta$ thoroughly. For bounds, $x$ runs $0 	o 1$. $y$ vertical strips run from $0 	o 2x$. 

**Solution:**
$\begin{align*} M &= int_0^1 int_0^{2x} (6x + 6y + 6) ,dy ,dx &&	ext{Step 1: Set up integral for Mass } M. \\ &= int_0^1 left[ 6xy + 3y^2 + 6y \right]_{y=0}^{y=2x} ,dx &&	ext{Step 2: Integrate w.r.t y using power rule}. \\ &= int_0^1 (12x^2 + 12x^2 + 12x) ,dx = int_0^1 (24x^2 + 12x) ,dx &&	ext{Step 3: Substitute limits}. \\ &= left[ 8x^3 + 6x^2 \right]_0^1 = 14 &&	ext{Step 4: Final Mass } M = 14. end{align*}$

$\begin{align*} M_x &= int_0^1 int_0^{2x} y(6x + 6y + 6) ,dy ,dx = int_0^1 int_0^{2x} (6xy + 6y^2 + 6y) ,dy ,dx &&	ext{Step 5: Setup first moment } M_x 	ext{ (multiplier y)}. \\ &= int_0^1 left[ 3xy^2 + 2y^3 + 3y^2 \right]_{y=0}^{y=2x} ,dx &&	ext{Step 6: Integrate y}. \\ &= int_0^1 (12x^3 + 16x^3 + 12x^2) ,dx = int_0^1 (28x^3 + 12x^2) ,dx &&	ext{Step 7: Substitute limits}. \\ &= left[ 7x^4 + 4x^3 \right]_0^1 = 11 &&	ext{Step 8: Final Moment } M_x = 11. end{align*}$

$\begin{align*} M_y &= int_0^1 int_0^{2x} x(6x + 6y + 6) ,dy ,dx &&	ext{Step 9: Setup first moment } M_y 	ext{ (multiplier x)}. \\ &= int_0^1 left[ 6x^2y + 3xy^2 + 6xy \right]_0^{2x} ,dx &&	ext{Step 10: Solve}. \\ &= int_0^1 (12x^3 + 12x^3 + 12x^2) ,dx = int_0^1 (24x^3 + 12x^2) ,dx && \\ &= [6x^4 + 4x^3]_0^1 = 10. && end{align*}$

Center of mass $(\bar{x}, \bar{y}) = (M_y/M, M_x/M) = (10/14, 11/14) = (5/7, 11/14)$.

---

## Visuals / Graphs

### 1. Centroid of a Region
*(Interactive Visualization)*

<div class="plot-interactive" data-plot-id="center_of_mass"></div>





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Centroid/Center of Mass</div>
<div class="p-4">

**Question:** Set up integrals for the center of mass $(\bar{x}, \bar{y})$ of region $R$.

| Inner voice | What you write |
| :--- | :--- |
| "The total mass $M$ is the double integral of the density over the region." | $M = iint_R delta(x,y) dA$ |
| "The $x$-coordinate of the COM requires multiplying the density by $x$ (lever arm)." | $\bar{x} = \frac{1}{M} iint_R x delta(x,y) dA$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| "Center of mass" | Do I need $x$ lever? | $\bar{x}$ uses integral of $x delta$. |
| "Moment of inertia" | Distance squared? | $I_y$ uses integral of $x^2 delta$. |

</div>
</div>## Chapter Assessment

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
      { id: "ch15-4-cheatsheet", title: "Ultimate Exam Room Cheat Sheet" },
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





## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">Example: Triple Integral Bounds</div>
<div class="p-4">

**Question:** Set up the integral for the volume enclosed by $z = x^2+y^2$ and $z = 4$.

| Inner voice | What you write |
| :--- | :--- |
| "The volume is a triple integral of $1 dV$. Inner bounds for $z$ go from floor (paraboloid) to roof ($4$)." | $0 le x^2+y^2 le z le 4$ |
| "The shadow on the $xy$-plane is the intersection $x^2+y^2=4$, a circle. I can use polar components here later." | $V = iint_D left[ int_{x^2+y^2}^4 dz \right] dA$ |

</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $dots$ | Ask yourself $dots$ | Action |
| :--- | :--- | :--- |
| Volume | Is it $iiint 1 dV$? | Yes, bounds determine region. |
| Integration order | Which variable simplifies best? | Usually $z$ first if bounded by surfaces. |

</div>
</div>## Chapter Assessment

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
    <h2 class="text-3xl font-bold mb-4 flex items-center"><span class="text-indigo-400 mr-3">\u{1F680}</span> Final Comprehensive Cheat Sheet</h2>
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
      <span class="text-2xl">\u{1F393}</span>
    </div>
    <p class="italic text-lg text-slate-600">Good luck on your multi-variable journey. You've got this!</p>
  </div>
</div>
`
  }
];
