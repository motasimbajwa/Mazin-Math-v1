const { buildChapter } = require('./builder.cjs');

const ch8 = buildChapter({
  num: 8,
  title: "Implicit Differentiation",
  intro: `So far, all the functions we have differentiated have been "explicit" functions, where $y$ is neatly isolated on the left side of the equals sign: $y = x^2 + 3x$.
However, equations defining curves often come completely scrambled, such as the equation of a circle $x^2 + y^2 = 25$. Attempting to isolate $y$ here forces us to deal with a $\\pm$ square root, introducing unnecessary brutality to the algebra.
Calculus offers a far more elegant path: **Implicit Differentiation**. We differentiate the entire scrambled equation term by term, treating $y$ as a chain-rule-dependent function of $x$.`,
  eli5: `**The Hidden Camera:**
When an equation is implicit, $y$ isn't just a simple letter; it's a hidden function of $x$ wearing a disguise. If you take the derivative of $x^3$ with respect to $x$, you just get $3x^2$. But if you take the derivative of $y^3$ with respect to $x$, the chain rule says you must peel the onion: outer derivative $3y^2$, multiplied by the hidden core's derivative $dy/dx$ (or $y'$). Every time you differentiate a $y$ term, a $y'$ pops out like a little flag!`,
  glossary: {
    "Explicit Function": "An equation solved definitively for $y$, e.g., $y = f(x)$.",
    "Implicit Function": "An equation where $x$ and $y$ are jumbled together, e.g., $f(x, y) = 0$.",
    "Implicit Differentiation": "The act of taking the derivative of an implicit function without attempting to isolate $y$ first."
  },
  whyEE: `In semiconductor device modeling and Maxwell's equations, variables are rarely cleanly separable. The relationship between electrical current and carrier density in a junction $F(I, p) = 0$ is highly non-linear and inextricably tangled. Calculating the small-signal sensitivity $dI/dp$ requires you to implicitly differentiate the governing boundary condition.`,
  formal: `**The Implicit Rule:**
We apply the derivative operator $\\frac{d}{dx}$ to both sides of the equation.
1. When differentiating $x$ terms, differentiate normally.
2. When differentiating $y$ terms, differentiate normally, but MULTIPLY the result by $\\frac{dy}{dx}$ (due to the Chain Rule).
3. If $x$ and $y$ are multiplied together (e.g. $xy$), you MUST use the Product Rule.`,
  method: `1. **Differentiate both sides:** Apply $\\frac{d}{dx}$ to every term strictly. Attach $y'$ to any derivation of a $y$ term. Be paranoid about product rules for terms like $xy$.
2. **Sort the equation:** Algebraically move all the terms containing $y'$ to the left side of the equals sign, and move all non-$y'$ terms to the right side.
3. **Factor:** Factor out $y'$ on the left side: $y'(...)$.
4. **Divide:** Isolate $y'$ by dividing both sides by the factored algebraic block. Your final answer will contain both $x$ and $y$ variables.`,
  flowchart: `
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
`,
  triggers: [
    { word: "Find slope of a circle/ellipse", action: "Do implicit differentiation directly." },
    { word: "Equation contains both $x$ and $y$ mixed together", action: "Apply $\\frac{d}{dx}$ to both sides immediately." },
    { word: "Differentiate $xy$", action: "WARNING: Use product rule: $x(y') + y(1)$." }
  ],
  examples: [
    { title: "The Circle", question: "Find $dy/dx$ for $x^2 + y^2 = 25$.", steps: [
      { think: "Differentiate term by term.", write: "$2x + 2y \\cdot (y') = 0$" },
      { think: "Isolate $y'$ term.", write: "$2y \\cdot y' = -2x$" },
      { think: "Divide.", write: "$y' = \\frac{-2x}{2y} = -\\frac{x}{y}$" }
    ]},
    { title: "Higher Powers", question: "Find $y'$ for $y^3 + x^3 = 8$.", steps: [
      { think: "Derive left and right.", write: "$3y^2 \\cdot y' + 3x^2 = 0$" },
      { think: "Move the $x$ term.", write: "$3y^2 \\cdot y' = -3x^2$" },
      { think: "Divide.", write: "$y' = -\\frac{3x^2}{3y^2} = -\\frac{x^2}{y^2}$" }
    ]},
    { title: "The Dreaded 'xy' Term", question: "Find $y'$ for $xy = 10$.", steps: [
      { think: "Use the product rule for $xy$. $u=x, v=y$.", write: "$x(y') + y(1) = 0$" },
      { think: "Isolate $y'$.", write: "$x \\cdot y' = -y$" },
      { think: "Divide.", write: "$y' = -\\frac{y}{x}$" }
    ]},
    { title: "A Mixed Jumble", question: "Find $y'$ for $x^2 + xy + y^2 = 7$.", steps: [
      { think: "Differentiate every piece. Product rule on middle term.", write: "$2x + [x(y') + y(1)] + 2y(y') = 0$" },
      { think: "Group the $y'$ terms.", write: "$xy' + 2yy' = -2x - y$" },
      { think: "Factor $y'$.", write: "$y'(x + 2y) = -2x - y$" },
      { think: "Final division.", write: "$y' = \\frac{-2x - y}{x + 2y}$" }
    ]},
    { title: "Trig Involvement (Preview)", question: "Find $y'$ for $\\sin(y) = x$.", steps: [
      { think: "Derivation of $\\sin(y)$ requires chain rule yielding $y'$.", write: "$\\cos(y) \\cdot y' = 1$" },
      { think: "Isolate.", write: "$y' = \\frac{1}{\\cos(y)}$" }
    ]},
    { title: "Equation of a Tangent Line", question: "Find slope of $x^2y + y^2x = -2$ at point $(1, -2)$.", steps: [
      { think: "Product rule twice!", write: "$[x^2 y' + y(2x)] + [y^2(1) + x(2y y')] = 0$" },
      { think: "Rather than messy algebra, plug in $(1,-2)$ NOW.", write: "$ [1(-2)' + (-2)(2)] + [4 + (-4)(-2)'] = 0 $" },
      { think: "Wait, the '$'$ means $y'$!", write: "$1y' - 4 + 4 - 4y' = 0 \\implies -3y' = 0 \\implies y'=0$" }
    ]},
    { title: "Constants Disappear", question: "Find $y'$ for $x^4 + y^4 = c^4$.", steps: [
      { think: "$c$ is a constant, so $c^4$ is just a number.", write: "$4x^3 + 4y^3(y') = 0$" },
      { think: "Isolate.", write: "$y' = -\\frac{4x^3}{4y^3} = -\\frac{x^3}{y^3}$" }
    ]},
    { title: "Double Y terms", question: "Find $y'$ for $y^2 + y = x^2$.", steps: [
      { think: "Derive.", write: "$2y y' + 1 y' = 2x$" },
      { think: "Factor.", write: "$y'(2y + 1) = 2x$" },
      { think: "Divide.", write: "$y' = \\frac{2x}{2y+1}$" }
    ]},
    { title: "Fractions without Quotient Rule", question: "Find $y'$ for $\\frac{x}{y} = 5$.", steps: [
      { think: "Don't use quotient rule! Multiply $y$ to the other side first.", write: "$x = 5y$" },
      { think: "Now implicitly differentiate.", write: "$1 = 5y'$" },
      { think: "Isolate.", write: "$y' = \\frac{1}{5}$" }
    ]},
    { title: "Second Derivative Implicitly", question: "If $x^2+y^2=r^2$, and $y' = -x/y$, find $y''$.", steps: [
      { think: "Take derivative of $y'$ using quotient rule. $u=-x, v=y$.", write: "$y'' = \\frac{y(-1) - (-x)(y')}{y^2}$" },
      { think: "Substitute the known $y'$ into the answer.", write: "$y'' = \\frac{-y + x(-x/y)}{y^2}$" },
      { think: "Simplify. Multiply top and bottom by $y$.", write: "$y'' = \\frac{-y^2 - x^2}{y^3} = \\frac{-(x^2+y^2)}{y^3} = \\frac{-r^2}{y^3}$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **The Golden Implicit Rules:**
  1. Every $x$ differentiates as normal.
  2. Every $y$ differentiates like $x$, but MUST pop out a $\\cdot y'$.
  3. Every $xy$ MUST invoke the holy Product Rule: $x y' + y$.
  4. The right side is often a number; its derivative is ALWAYS 0.
</div>
`,
  traps: [
    { wrong: "Derivative of $y^3$ is $3y^2$. Done.", correct: "Derivative of $y^3$ is $3y^2 \\cdot y'$", why: "You forgot the mandatory chain rule flag $y'$." },
    { wrong: "Derivative of $xy$ is $1 \\cdot y'$", correct: "$x y' + y$", why: "You violated the Product Rule. Two variables multiplying together must spawn two terms." },
    { wrong: "$\\frac{d}{dx} (25) = 25$", correct: "$\\frac{d}{dx} (25) = 0$", why: "Constants do not change. Rate is zero." }
  ],
  assessment: [
    "Differentiate implicitly: $x^2 + y^2 = 16$.",
    "Identify the mistake: $\\frac{d}{dx}[xy] = xy'$.",
    "Find $y'$ for $3x - 4y = 12$.",
    "Implicitly differentiate $y^4 - x^2 = 2$.",
    "Why must we output a $y'$ when differentiating $y$?"
  ]
});

module.exports = { ch8 };
