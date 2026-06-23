const { buildChapter } = require('./builder.cjs');

const ch1 = buildChapter({
  num: 1,
  title: "Functions (y = f(x))",
  intro: `No concept in mathematics, especially in calculus, is more fundamental than the concept of a function. The term was first used in a 1673 letter written by Gottfried Wilhelm Leibniz, the German mathematician and philosopher who invented calculus independently of Isaac Newton. Since then the term has undergone a gradual extension of meaning. 
In traditional calculus a function is defined as a relation between two terms called variables because their values vary. Call the terms $x$ and $y$. If every value of $x$ is associated with exactly one value of $y$, then $y$ is said to be a function of $x$. It is customary to use $x$ for what is called the independent variable, and $y$ for what is called the dependent variable because its value depends on the value of $x$.
As Thompson explains, letters at the end of the alphabet are traditionally applied to variables, and letters elsewhere in the alphabet (usually first letters such as $a, b, c$) are applied to constants. Constants are terms in an equation that have a fixed value.`,
  eli5: `**The Square's Area:**
Imagine a literal square. The area of the square is the length of its side multiplied by itself. To express the area as a function of the side, let $y$ be the area, $x$ the side, then write $y = x^2$. Here, $y$ depends entirely on $x$. 
**The Magic Black Box:**
A useful way to think of functions is to imagine a black box with input and output openings. Any element in a domain, numbers or otherwise, is put into the box. Out will pop a single element in the range. The machinery inside the box magically provides the correlation!`,
  glossary: {
    "Function": "A relation between an independent variable and a dependent variable where every input yields exactly one output.",
    "Independent Variable": "The input value to the function, usually denoted by $x$.",
    "Dependent Variable": "The output value, usually denoted by $y$, which depends on $x$.",
    "Constant": "A value that does not change within the context of a given problem, often denoted by $a, b,$ or $c$.",
    "Domain": "The complete set of valid inputs ($x$-values) that can be passed into the function.",
    "Range": "The set of all possible resulting output values ($y$-values).",
    "Explicit Function": "A function expressed directly in terms of the independent variable, like $y = 2x - 7$.",
    "Implicit Function": "A function where the dependent and independent variables are mixed, like $2x - y - 7 = 0$."
  },
  whyEE: `In Electrical Engineering, you'll rarely just deal with "$x$" and "$y$". You deal with real-world physical quantities. Voltage ($V$) is often a function of Time ($t$), $V(t) = 170\\sin(377t)$. Current ($I$) across a resistor is a function of Voltage ($V$) according to Ohm's law. Without the strict formalized concept of a function mapping inputs to single continuous outputs, AC circuit analysis would collapse into chaos.`,
  formal: `**Formal Set Mapping:**
A function $f: X \\to Y$ is a rule that assigns to each element $x \\in X$ exactly one element $y \\in Y$.
- $X$ is the **domain**.
- $Y$ contains the **range**.
- We write $y = f(x)$.

**Conditions for a Valid Function:**
A vertical line test is standard: A curve in the Cartesian plane represents a valid function $y = f(x)$ if and only if no vertical line intersects the curve more than once.`,
  method: `1. **Identify Variables:** Determine which is the dependent variable (output) and independent variable (input).
2. **Translate to Algebra:** Convert the word problem into a functional equation (e.g., $y = f(x)$).
3. **Check Domain:** Ensure inputs are logically allowed (e.g., no division by 0, no square root of a negative).
4. **Solve or Graph:** Use Cartesian mapping to visualize the correspondence.`,
  flowchart: `
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
`,
  triggers: [
    { word: "Find the domain", action: "Check for denominators (cannot be 0) and even roots (must be $\\ge 0$)." },
    { word: "Write $y$ as a function of $x$", action: "Isolate $y$ on one side of the equation." },
    { word: "Determine if it's a function", action: "Perform the vertical line test or check if $x$ produces multiple $y$ values." }
  ],
  examples: [
    { title: "Area of a Square", question: "Write the area $A$ of a square as a function of its side $s$.", steps: [
      { think: "Area is side multiplied by side.", write: "$A = s \\times s$" },
      { think: "Write in functional notation.", write: "$A(s) = s^2$" }
    ]},
    { title: "Diagonal of a Square", question: "Write the diagonal $d$ of a square as a function of its side $s$.", steps: [
      { think: "Use the Pythagorean theorem for an isosceles right triangle: $d^2 = s^2 + s^2$.", write: "$d^2 = 2s^2$" },
      { think: "Take the positive square root because length is positive.", write: "$d(s) = s\\sqrt{2}$" }
    ]},
    { title: "Domain of a square root", question: "Find the domain of $y = \\sqrt{x-2}$.", steps: [
      { think: "The inside of a square root cannot be negative.", write: "$x - 2 \\ge 0$" },
      { think: "Solve the inequality.", write: "$x \\ge 2$\nDomain: $[2, \\infty)$" }
    ]},
    { title: "Implicit to Explicit", question: "Convert the implicit function $2x - y - 7 = 0$ to an explicit function $y = f(x)$.", steps: [
      { think: "I need to isolate $y$. Move $y$ to the other side.", write: "$2x - 7 = y$" },
      { think: "Rewrite in standard functional form.", write: "$f(x) = 2x - 7$" }
    ]},
    { title: "Evaluating a function at a point", question: "If $f(x) = 2x - 7$, evaluate $f(6)$.", steps: [
      { think: "Substitute $6$ wherever I see $x$.", write: "$f(6) = 2(6) - 7$" },
      { think: "Perform the arithmetic.", write: "$f(6) = 12 - 7 = 5$" }
    ]},
    { title: "Domain with a denominator", question: "Find the domain of $f(x) = \\frac{1}{x-5}$.", steps: [
      { think: "Denominators cannot equal zero.", write: "$x - 5 \\ne 0$" },
      { think: "Solve for $x$.", write: "$x \\ne 5$\nDomain: $(-\\infty, 5) \\cup (5, \\infty)$" }
    ]},
    { title: "Domain of combined restrictions", question: "Find the domain of $f(x) = \\frac{\\sqrt{x}}{x-1}$.", steps: [
      { think: "Numerator root requires $x \\ge 0$.", write: "$x \\ge 0$" },
      { think: "Denominator requires $x - 1 \\ne 0$.", write: "$x \\ne 1$" },
      { think: "Combine both conditions.", write: "Domain: $[0, 1) \\cup (1, \\infty)$" }
    ]},
    { title: "Volume of a sphere", question: "Write the volume $V$ of a sphere as a function of its radius $r$.", steps: [
      { think: "Recall the geometric formula for the volume of a sphere.", write: "$V = \\frac{4}{3}\\pi r^3$" },
      { think: "Write it explicitly as $V(r)$.", write: "$V(r) = \\frac{4}{3}\\pi r^3$" }
    ]},
    { title: "Period of a pendulum", question: "The period $T$ of a simple pendulum relates to its length $L$ by $T = 2\\pi\\sqrt{\\frac{L}{g}}$. Identify the independent and dependent variables.", steps: [
      { think: "Length $L$ is the physical trait we control. $T$ changes as a result.", write: "Independent: $L$" },
      { think: "Period $T$ is the outcome. (Assume $g$ is a constant).", write: "Dependent: $T$" }
    ]},
    { title: "Vertical line test logic", question: "Does the equation $x^2 + y^2 = 9$ represent $y$ as a function of $x$?", steps: [
      { think: "Attempt to isolate y.", write: "$y^2 = 9 - x^2 \\implies y = \\pm\\sqrt{9 - x^2}$" },
      { think: "There are two outputs for a single $x$ (e.g. at $x=0$, $y=3$ and $y=-3$). This fails the vertical line test.", write: "No, it is not a function." }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm">
  <ul class="list-disc ml-4 space-y-2">
    <li><strong>Function Notation:</strong> $y = f(x)$</li>
    <li><strong>Domain Rules:</strong>
      <ol class="list-decimal ml-4 mt-1">
        <li>Denominators $\\ne 0$</li>
        <li>Evens Roots ($\\sqrt{x}$) $\\to$ Inside $\\ge 0$</li>
        <li>Logarithms $(\\ln(x))$ $\\to$ Inside $> 0$</li>
      </ol>
    </li>
    <li><strong>Vertical Line Test:</strong> If a vertical line crosses a graph more than once, it's NOT a function.</li>
    <li><strong>Explicit:</strong> $y = \\text{math involving } x$</li>
    <li><strong>Implicit:</strong> $x$ and $y$ are mixed together.</li>
  </ul>
</div>
`,
  traps: [
    { wrong: "$\\sqrt{x^2} = x$", correct: "$\\sqrt{x^2} = |x|$", why: "The square root returns the principal (positive) root." },
    { wrong: "Domain of $1/x$: all real numbers", correct: "Domain of $1/x$: $x \\ne 0$", why: "You can NEVER divide by zero." },
    { wrong: "A circle is a function", correct: "A circle is a relation, but NOT a function", why: "Fails the vertical line test." }
  ],
  assessment: [
    "Write the area of a circle as a function of its diameter $D$.",
    "Identify the domain of $f(x) = \\ln(x-3)$.",
    "True or False: $y^2 = x$ is a function of $x$.",
    "Find $f(2)$ if $f(x) = 3x^2 - x + 1$.",
    "What is the independent variable in $p(t) = e^{rt}$ (assuming $r$ is constant)?"
  ]
});

module.exports = { ch1 };
