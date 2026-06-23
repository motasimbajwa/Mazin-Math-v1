const { buildChapter } = require('./builder.cjs');

const ch3 = buildChapter({
  num: 3,
  title: "Derivatives - The Power Rule",
  intro: `All round the calculus we are dealing with quantities that are growing, and with rates of growth. We classify all quantities into two classes: constants and variables. Those which we regard as of fixed value we call constants ($a, b, c$). Those capable of growing we denote by letters from the end of the alphabet ($x, y, z$).
When one variable depends on another (e.g. $y$ depends on $x$), an alteration in $x$ will bring about an alteration in $y$. Let us call the little bit of growth added to $x$ as $dx$ ("a little bit of x"). The corresponding growth in $y$ will be $dy$. The fundamental question of differential calculus is: what is the true exact ratio of $dy$ to $dx$ when both are infinitely small?
This ratio $\\frac{dy}{dx}$ is called the differential coefficient or the **derivative**. It measures relative continuous growth.`,
  eli5: `**The Growing Square:** 
Imagine a monster living in Flatland that is born a square of side $x$. Its area is $y = x^2$. We let it grow at a steady rate. If its side grows a tiny bit ($dx$), its area grows by ($dy$). The ratio of its area growth to its side growth is exactly $2x$. The mathematics says: if the square's side is 10 inches, its area is growing $2 \\times 10 = 20$ times as fast as its edge is growing!
**The Speedometer:**
When you drive, you aren't doing point-to-point average math in your head. Your speedometer points to $45$ mph. It is taking an infinitely small snapshot of your distance traveled ($dy$) over an infinitely small slice of time ($dx$) and displaying the derivative: $\\frac{dy}{dt}$.`,
  glossary: {
    "Derivative": "The exact rate at which a dependent variable grows with respect to an independent variable. Symbolized as $\\frac{dy}{dx}$.",
    "Differential ($dx$, $dy$)": "An infinitesimally small increment or little bit of a variable.",
    "Tangent": "A straight line that perfectly kisses a curve at exactly one point, representing its exact continuous slope.",
    "Power Rule": "The primary workhorse rule for differentiating powers of $x$.",
    "Constant Rule": "The derivative of any constant number is absolute zero."
  },
  whyEE: `Voltage $V_L$ across an inductor is directly proportional to the **rate of change** of the current: $V_L = L \\frac{di}{dt}$. A derivative! Capacitor current $I_C$ is proportional to the **rate of change** of voltage: $I_C = C \\frac{dV}{dt}$. The entire universe of electrical transients and differential equations hinges entirely upon calculating these derivatives using the power rule.`,
  formal: `**Formal Definition of the Derivative:**
$$ \\frac{dy}{dx} = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x} $$

**The Power Rule:**
For any real number $n$, if $y = a x^n$, then the derivative is:
$$ \\frac{dy}{dx} = na x^{n-1} $$

**The Constant Rule:**
If $y = c$ (where $c$ is a constant), then $\\frac{dy}{dx} = 0$.

**The Sum Rule:**
$\\frac{d}{dx} [f(x) + g(x)] = f'(x) + g'(x)$. You can just differentiate them one after the other.`,
  interactiveHtml: `<div class="plot-interactive my-6" data-plot-id="tangent_line"></div>`,
  method: `1. **Prepare the Expression:** Convert all roots into fractional exponents (e.g. $\\sqrt{x} \\to x^{1/2}$) and all bottom-heavy fractions into negative exponents (e.g. $\\frac{1}{x^3} \\to x^{-3}$).
2. **Apply Power Rule:** For each term $ax^n$, bring the power $n$ down to multiply the front constant $a$, and subtract exactly $1$ from the power $n$.
3. **Delete Constants:** Any standalone number completely disappears (becomes $0$).
4. **Clean Up:** Return negative and fractional exponents back to standard notation if explicitly requested by your cruel professor.`,
  flowchart: `
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
`,
  triggers: [
    { word: "Differentiate", action: "Apply the power rule to every term." },
    { word: "Find the slope of the curve", action: "Take the derivative and plug in the given $x$-value." },
    { word: "Rate of change", action: "Instantly indicates you must find the derivative." }
  ],
  examples: [
    { title: "Basic Polynomial", question: "Differentiate $y = x^3$.", steps: [
      { think: "The power is $3$. I'll bring the $3$ down.", write: "$\\frac{dy}{dx} = 3x^{\\dots}$" },
      { think: "Subtract 1 from the power $3-1 = 2$.", write: "$\\frac{dy}{dx} = 3x^2$" }
    ]},
    { title: "Polynomial with a Coefficient", question: "Differentiate $y = 7x^4$.", steps: [
      { think: "Bring the $4$ down and multiply it by $7$. ($4 \\times 7 = 28$).", write: "$\\frac{dy}{dx} = 28x^{\\dots}$" },
      { think: "Subtract 1 from the power $4-1 = 3$.", write: "$\\frac{dy}{dx} = 28x^3$" }
    ]},
    { title: "The Sum Rule", question: "Differentiate $y = x^2 + x^3 + 5$.", steps: [
      { think: "Differentiate term by term.", write: "$d/dx (x^2) = 2x$" },
      { think: "Next term.", write: "$d/dx (x^3) = 3x^2$" },
      { think: "The constant $5$ just vanishes.", write: "$d/dx (5) = 0$" },
      { think: "Combine them.", write: "$\\frac{dy}{dx} = 2x + 3x^2$" }
    ]},
    { title: "Negative Exponents", question: "Differentiate $y = x^{-2}$.", steps: [
      { think: "Bring down the $-2$.", write: "$\\frac{dy}{dx} = -2x^{\\dots}$" },
      { think: "Subtract 1 from $-2$. Beware: $-2 - 1 = -3$.", write: "$\\frac{dy}{dx} = -2x^{-3}$" },
      { think: "Rewrite as a fraction if desired.", write: "$\\frac{dy}{dx} = -\\frac{2}{x^3}$" }
    ]},
    { title: "Fractions in Disguise", question: "Differentiate $y = \\frac{5}{x^4}$.", steps: [
      { think: "Prepare the expression first by moving $x$ up.", write: "$y = 5x^{-4}$" },
      { think: "Bring down $-4$, multiply by $5$ to get $-20$. Reduce power to $-5$.", write: "$\\frac{dy}{dx} = -20x^{-5} = -\\frac{20}{x^5}$" }
    ]},
    { title: "Fractional Exponents (Square Roots)", question: "Differentiate $y = \\sqrt{x}$.", steps: [
      { think: "Prepare: rewrite square root as a half power.", write: "$y = x^{1/2}$" },
      { think: "Bring down $1/2$. Subtract 1 from $1/2$ to get $-1/2$.", write: "$\\frac{dy}{dx} = \\frac{1}{2}x^{-1/2}$" },
      { think: "Rewrite nicely. Negative half power means square root on the bottom.", write: "$\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}}$" }
    ]},
    { title: "Linear Function", question: "Differentiate $y = 10x$.", steps: [
      { think: "The power of $x$ is logically $1$. Bring down the $1$...", write: "$10 \\times 1 = 10$" },
      { think: "Reduce power: $x^0 = 1$. The $x$ disappears.", write: "$\\frac{dy}{dx} = 10$" }
    ]},
    { title: "Complicated Mixture", question: "Differentiate $y = 3x^4 - \\frac{2}{x} + 7\\sqrt{x} - 42$.", steps: [
      { think: "Prepare all terms to power form.", write: "$y = 3x^4 - 2x^{-1} + 7x^{1/2} - 42$" },
      { think: "Apply the rule across the board.", write: "$12x^3 - (-1)2x^{-2} + \\frac{1}{2}(7)x^{-1/2} - 0$" },
      { think: "Clean it up.", write: "$\\frac{dy}{dx} = 12x^3 + \\frac{2}{x^2} + \\frac{7}{2\\sqrt{x}}$" }
    ]},
    { title: "Physics Kinematics", question: "If distance $s = 16t^2$, find the velocity $v$ (which is $ds/dt$).", steps: [
      { think: "Differentiating position with respect to time gives velocity.", write: "$v = \\frac{ds}{dt}$" },
      { think: "Apply power rule to $16t^2$. Bring down $2$.", write: "$v = 32t$" }
    ]},
    { title: "Tangent Line Slope Check", question: "Find slope of $y = x^2 - 4x$ at the point $x=3$.", steps: [
      { think: "Find the general derivative equation first.", write: "$\\frac{dy}{dx} = 2x - 4$" },
      { think: "Plug the specific coordinate $x=3$ into the slope generator.", write: "$\\frac{dy}{dx} = 2(3) - 4 = 6$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **The Power Rule Mastery Table:**
  | Function $y$ | Setup | Derivative $\\frac{dy}{dx}$ | Cleaned Up |
  | :--- | :--- | :--- | :--- |
  | Constant $C$ | $Cx^0$ | $0$ | $0$ |
  | $x^n$ | $x^n$ | $n x^{n-1}$ | $n x^{n-1}$ |
  | $Cx^n$ | $Cx^n$ | $nC x^{n-1}$ | $nC x^{n-1}$ |
  | $1/x^n$ | $x^{-n}$ | $-n x^{-n-1}$ | $-n / x^{n+1}$ |
  | $\\sqrt{x}$ | $x^{1/2}$ | $\\frac{1}{2}x^{-1/2}$ | $\\frac{1}{2\\sqrt{x}}$ |
</div>
`,
  traps: [
    { wrong: "$\\frac{d}{dx} x^3 = x^2$", correct: "$\\frac{d}{dx} x^3 = 3x^2$", why: "Forgot to bring the power down as a multiplier." },
    { wrong: "$\\frac{d}{dx} 5 = 1$", correct: "$\\frac{d}{dx} 5 = 0$", why: "Constants have zero rate of change." },
    { wrong: "$\\frac{d}{dx} x^{-2} = -2x^{-1}$", correct: "$\\frac{d}{dx} x^{-2} = -2x^{-3}$", why: "Subtracting 1 from a negative number makes it MORE negative." }
  ],
  assessment: [
    "Differentiate $y = 10x^5$.",
    "What is the derivative of $y = 42$?",
    "Find $\\frac{dy}{dx}$ for $y = 3x^{-4}$.",
    "Differentiate $y = 2x^2 + 5x - 7$.",
    "Prepare $\\frac{7}{x^3}$ into power notation."
  ]
});

module.exports = { ch3 };
