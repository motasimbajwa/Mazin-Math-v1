const { buildChapter } = require('./builder.cjs');

const ch10 = buildChapter({
  num: 10,
  title: "Maxima and Minima (Optimization)",
  intro: `If a curve first ascends and then goes up again, presenting a concavity upwards, its slope will at some point be zero at the exact bottom of the trough. If a curve ascends then descends, making a summit, its slope exactly at the mountaintop is zero.
We now arrive at one of the supreme utilities of the calculus: locating the exact peak maximums or valley minimums of mathematically described phenomena. If we possess the equation of a line, we can differentiate it, set the derivative to zero, and analytically pinpoint the absolute limits of nature.`,
  eli5: `**Throwing a ball in the air:**
When you throw a ball straight up, it starts fast, slows down, stops entirely for one invisible microsecond at the very top, and then falls back down. That microsecond of stopping means its velocity is ZERO. If we want to find the highest point the universe allows the ball to reach, we just calculate the velocity equation (the derivative), force it to equal zero, and solve!`,
  glossary: {
    "Local Maximum": "A summit on the graph where the function transitions from increasing to decreasing. Slope is zero.",
    "Local Minimum": "A trough on the graph where the function transitions from decreasing to increasing. Slope is zero.",
    "Critical Point": "Any $x$-value where the derivative $f'(x) = 0$ or is completely undefined.",
    "Optimization": "The art of using maxima and minima to find the 'best' possible outcome (e.g. maximum profit, minimum waste)."
  },
  whyEE: `Power Transfer Theorem states that maximum power is delivered to a load when the load resistance perfectly matches the internal source resistance ($R_L = R_S$). How did engineers prove this? They wrote the power equation $P = I^2 R_L$, took the derivative $\\frac{dP}{dR_L}$, set it to exactly zero to seek the maximum limit, and algebraically solved for the peak.`,
  formal: `**Fermat's Theorem for Local Extrema:**
If $f$ has a local maximum or minimum at $c$, and if $f'(c)$ exists, then $f'(c) = 0$.

**The First Derivative Test:**
- If $f'(x)$ changes from positive (up) to negative (down) at $c$, it's a **Maximum**.
- If $f'(x)$ changes from negative (down) to positive (up) at $c$, it's a **Minimum**.

**The Second Derivative Test:**
- At a point where $f'(c) = 0$, check the concavity using $f''(c)$.
- If $f''(c) < 0$ (concave down, like a frowning face), it's a **Maximum**.
- If $f''(c) > 0$ (concave up, like a smiling face), it's a **Minimum**.`,
  method: `1. **Establish the Objective Equation:** Create an equation for whatever you are trying to maximize/minimize. Ensure it only utilizes ONE independent variable across the board.
2. **Differentiate:** Take the first derivative of the equation.
3. **Set to Zero:** Set the derivative exactly to 0 and solve for the independent variable algebraically. This is your candidate point.
4. **Verify Extrema:** Confirm it is a maximum (e.g., via the Second Derivative Test) so you don't accidentally design a bridge with minimum strength!
5. **Answer the Prompt:** Ensure you provide the value the problem asked for (e.g. the maximum Area, not just the $x$ dimension).`,
  flowchart: `
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
`,
  triggers: [
    { word: "Maximize / Minimize", action: "Write function, derive, set to zero." },
    { word: "Largest / Least possible area", action: "Optimization problem! Requires two equations: Constraint and Objective." },
    { word: "Find extrema", action: "Locate where $f'(x) = 0$." }
  ],
  examples: [
    { title: "Standard Summit Search", question: "Find local extrema of $y = x^2 - 4x + 3$.", steps: [
      { think: "Derive.", write: "$y' = 2x - 4$" },
      { think: "Set to zero and solve.", write: "$2x - 4 = 0 \\implies 2x = 4 \\implies x = 2$" },
      { think: "Check 2nd derivative.", write: "$y'' = 2$. Positive $\\implies$ Minimum." }
    ]},
    { title: "Cubic Functions", question: "Find extrema of $y = x^3 - 3x$.", steps: [
      { think: "Derive and set to zero.", write: "$y' = 3x^2 - 3 = 0$" },
      { think: "Solve for $x$.", write: "$3(x^2-1) = 0 \\implies x = 1, x = -1$" },
      { think: "Test points in $y'' = 6x$.", write: "$y''(1) = 6$ (Min). $y''(-1) = -6$ (Max)." }
    ]},
    { title: "Box Optimization", question: "A 100cm string makes a flat rectangle. Find dimensions for maximum area.", steps: [
      { think: "Constraint is perimeter. $2x + 2y = 100 \\implies y = 50 - x$. Objective is Area $A = xy$.", write: "$A = x(50-x) = 50x - x^2$" },
      { think: "Derive area.", write: "$A' = 50 - 2x$" },
      { think: "Set to zero.", write: "$50 - 2x = 0 \\implies x = 25$. So $y = 25$. Square is optimal!" }
    ]},
    { title: "Open Box Volume", question: "Cut squares of side $x$ from 12x12 cardboard to fold an open box. Maximize volume.", steps: [
      { think: "Volume is length * width * height. The sides become $(12-2x)$ and height is $x$.", write: "$V = x(12-2x)^2 = x(144-48x+4x^2)$" },
      { think: "Multiply out.", write: "$V = 4x^3 - 48x^2 + 144x$" },
      { think: "Derive and set to $0$.", write: "$12x^2 - 96x + 144 = 0 \\implies 12(x^2-8x+12)=0$" },
      { think: "Factor $(x-2)(x-6)=0$. $x=6$ makes volume $0$. Max is at 2.", write: "Max volume at $x=2$." }
    ]},
    { title: "Minimum Distance", question: "Find the point on $y=x^2$ closest to $(3,0)$.", steps: [
      { think: "Distance squared is $D = (x-3)^2 + (y-0)^2$. Substitute $y=x^2$.", write: "$D = (x-3)^2 + x^4$" },
      { think: "Derive and set to $0$.", write: "$D' = 2(x-3) + 4x^3 = 4x^3 + 2x - 6 = 0$" },
      { think: "Notice $x=1$ works! $4(1) + 2(1) - 6 = 0$.", write: "Point is $(1,1)$." }
    ]},
    { title: "Profit Margin", question: "Profit $P(x) = -0.5x^2 + 40x - 100$. Find units $x$ to maximize profit.", steps: [
      { think: "Derivative.", write: "$P'(x) = -x + 40$" },
      { think: "Set zero.", write: "$-x + 40 = 0 \\implies x=40$" },
      { think: "Verify max.", write: "$P''(x) = -1 < 0 \\implies$ Maximum confirmed." }
    ]},
    { title: "False Alarm Point", question: "Find extrema of $y = x^3$.", steps: [
      { think: "Derive.", write: "$y' = 3x^2 = 0 \\implies x=0$" },
      { think: "Check 2nd derivative. $y''=6x$. At $x=0$, $y''=0$. Indicates Inflection, NOT max/min.", write: "No local extrema." }
    ]},
    { title: "Cylindrical Can", question: "Minimize surface area of 1-liter ($1000cm^3$) can. $V = \\pi r^2 h = 1000$.", steps: [
      { think: "Area is circle caps + wall.", write: "$A = 2\\pi r^2 + 2\\pi r h$" },
      { think: "Substitute constraint $h = 1000/(\\pi r^2)$.", write: "$A = 2\\pi r^2 + 2000/r = 2\\pi r^2 + 2000r^{-1}$" },
      { think: "Derive and set zero.", write: "$4\\pi r - 2000/r^2 = 0 \\implies r^3 = \\frac{500}{\\pi}$" }
    ]},
    { title: "Norman Window", question: "Rectangle topped with semicircle. Perimeter is 10. Maximize light area.", steps: [
      { think: "Objective: Area. Constraint: Perimeter.", write: "Write formulas." },
      { think: "This is heavy algebra, but process remains identical.", write: "Derive, set $0$, solve." }
    ]},
    { title: "Electrical Power", question: "Power $P = I^2 R = \\frac{V^2}{(r + R)^2}R$. Maximize $P$ with respect to load $R$.", steps: [
      { think: "Quotient rule. Variable is $R$. $V, r$ are constants.", write: "$P' = V^2 \\left[ \\frac{ (r+R)^2(1) - R[2(r+R)] }{ (r+R)^4 } \\right]$" },
      { think: "Set numerator strictly to zero.", write: "$(r+R)^2 - 2R(r+R) = 0$" },
      { think: "Factor out $(r+R)$.", write: "$(r+R)[(r+R) - 2R] = 0 \\implies r - R = 0 \\implies r = R$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **2nd Derivative Test Translator:**
  $f''(c) < 0$ (Negative) $\\to$ Gravity is pulling it down into a dome. $\\to$ **MAXIMUM** 
  $f''(c) > 0$ (Positive) $\\to$ A bowl smiling upwards holding water. $\\to$ **MINIMUM**
</div>
`,
  traps: [
    { wrong: "Check $y=0$ instead of $y'=0$ to find maximum.", correct: "Check $y'=0$!", why: "$y=0$ simply finds the x-intercepts of the curve, not the peaks!" },
    { wrong: "$f''(c)$ is negative, therefore it's a minimum.", correct: "Negative means MAXIMUM.", why: "Negative second derivative means negative concavity (upside down bowl), which yields a peak top." }
  ],
  assessment: [
    "What MUST be true about $f'(x)$ at a local maximum?",
    "If $f'(c) = 0$ and $f''(c) = 5$, is $c$ a peak or a valley?",
    "Set up the Area and Constraint equation to maximize a rectangular pasture with 500ft of fencing.",
    "Find the minimum value of $y = x^2 - 10x$.",
    "Why must independent variables be consolidated before deriving an objective function?"
  ]
});

module.exports = { ch10 };
