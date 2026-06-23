const { buildChapter } = require('./builder.cjs');

const ch5 = buildChapter({
  num: 5,
  title: "Higher Derivatives (Second, Third...)",
  intro: `Let us try the effect of repeating several times over the operation of differentiating a function. Start with a concrete case: Let $y=x^5$.
First differentiation: $5x^4$.
Second differentiation: $5 \\times 4x^3 = 20x^3$.
Third: $20 \\times 3x^2 = 60x^2$.
Fourth: $60 \\times 2x = 120x$.
Fifth: $120 \\times 1 = 120$.
Sixth: $0$.
There is a certain notation with which we are already acquainted... $f'(x)$ is the derived function. $f''(x)$ is the second derivative. The formal notation is $\\frac{d^2y}{dx^2}$, read as "dee-two-why over dee-ex-squared". It means that the operation of differentiating $y$ with respect to $x$ has been performed twice over.`,
  eli5: `**Position, Velocity, Acceleration:**
Imagine you are driving a car ($x$ is your position). The first derivative is how fast your position changes—that is your **Velocity** (speedometer). The second derivative is how fast your velocity changes—that is your **Acceleration** (pushing the gas or brake pedal). The third derivative is how fast your acceleration changes—physicists call this **Jerk** (the sudden bodily lurch backward when the driver stomps the gas too fast). You are physically feeling higher-order derivatives in your spine!`,
  glossary: {
    "First Derivative": "The rate of change of a function. The velocity. $f'(x)$ or $\\frac{dy}{dx}$.",
    "Second Derivative": "The rate of change of the rate of change! The acceleration. $f''(x)$ or $\\frac{d^2y}{dx^2}$.",
    "Third Derivative": "The rate of change of the acceleration. Jerk. $f'''(x)$ or $\\frac{d^3y}{dx^3}$.",
    "Prime Notation": "The use of hash marks $f'(x), f''(x)$ created by Joseph-Louis Lagrange."
  },
  whyEE: `The fundamental equation governing a capacitor-inductor (LC) oscillation circuit is $L \\frac{d^2 i}{dt^2} + \\frac{1}{C}i = 0$. That right there is a **Second Order Differential Equation**, governed entirely by the second derivative. Without the second derivative, we could not mathematically describe radio waves, Wi-Fi, audio frequencies, or AC power grids.`,
  formal: `**Successive Differentiation Notation:**
1st Derivative: $\\frac{dy}{dx}$ or $y'$ or $f'(x)$ or $D_x y$
2nd Derivative: $\\frac{d^2y}{dx^2}$ or $y''$ or $f''(x)$ or $D^2_x y$
3rd Derivative: $\\frac{d^3y}{dx^3}$ or $y'''$ or $f'''(x)$ or $D^3_x y$
nth Derivative: $\\frac{d^ny}{dx^n}$ or $y^{(n)}$ or $f^{(n)}(x)$

**Note:** The 2 in $\\frac{d^2y}{dx^2}$ DOES NOT mean squared. It simply means "execute the derivative operator $d/dx$ two times sequentially on $y$".`,
  method: `1. **Find the first derivative** using all the normal rules (power, product, quotient).
2. **Clean it up!** You CANNOT skip simplifying. If you leave the first derivative as a chaotic unsimplified mess, taking the second derivative will be a hideous nightmare of nested quotient rules.
3. **Take the derivative of that new result.** Treat the first derivative as if it were a brand new problem entirely.
4. **Repeat** as needed for third or fourth derivatives.`,
  flowchart: `
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
`,
  triggers: [
    { word: "Find $y''$", action: "Differentiate twice sequentially." },
    { word: "Find the acceleration", action: "Identify position function $s(t)$, take TWO derivatives to reach $a(t)$." },
    { word: "Evaluate $f''(2)$", action: "Find the algebraic formula for $f''(x)$ FIRST, then plug in 2." }
  ],
  examples: [
    { title: "Successive Polynomial Derivation", question: "If $y = 3x^4 - 2x^2 + 5x$, find $y''$.", steps: [
      { think: "Find $y'$ first.", write: "$y' = 12x^3 - 4x + 5$" },
      { think: "Derive $y'$ to get $y''$.", write: "$y'' = 36x^2 - 4$" }
    ]},
    { title: "The Third Derivative", question: "Given $y = x^5$, find $f'''(x)$.", steps: [
      { think: "Step 1: First derivative.", write: "$y' = 5x^4$" },
      { think: "Step 2: Second derivative.", write: "$y'' = 20x^3$" },
      { think: "Step 3: Third derivative.", write: "$y''' = 60x^2$" }
    ]},
    { title: "Negative Exponents", question: "Find the second derivative of $y = \\frac{1}{x}$.", steps: [
      { think: "Rewrite as a negative power.", write: "$y = x^{-1}$" },
      { think: "First derivative.", write: "$y' = -1x^{-2}$" },
      { think: "Second derivative. Multiply $-1$ by $-2$.", write: "$y'' = 2x^{-3} = \\frac{2}{x^3}$" }
    ]},
    { title: "Square Roots", question: "Find $y''$ for $y = \\sqrt{x}$.", steps: [
      { think: "Rewrite.", write: "$y = x^{1/2}$" },
      { think: "First derivative.", write: "$y' = \\frac{1}{2}x^{-1/2}$" },
      { think: "Second derivative. $(-1/2) \\times (1/2) = -1/4$.", write: "$y'' = -\\frac{1}{4}x^{-3/2} = -\\frac{1}{4\\sqrt{x^3}}$" }
    ]},
    { title: "Simplification is Mandatory", question: "Find $y''$ of $y = (x^2+1)^2$.", steps: [
      { think: "I should probably foil this first! Much easier.", write: "$y = x^4 + 2x^2 + 1$" },
      { think: "First derivative.", write: "$y' = 4x^3 + 4x$" },
      { think: "Second derivative.", write: "$y'' = 12x^2 + 4$" }
    ]},
    { title: "Quotient Rule Successive", question: "Find $y''$ for $y = \\frac{x}{x+1}$.", steps: [
      { think: "$y' = \\frac{(x+1)(1) - x(1)}{(x+1)^2}$", write: "$y' = \\frac{1}{(x+1)^2}$" },
      { think: "Before deriving, rewrite as negative power to avoid nested quotient rules!", write: "$y' = (x+1)^{-2}$" },
      { think: "Derive using simple chain rule (preview)", write: "$y'' = -2(x+1)^{-3} = \\frac{-2}{(x+1)^3}$" }
    ]},
    { title: "Evaluating a Second Derivative", question: "Evaluate $f''(1)$ for $f(x) = 4x^3 - 2x^2$.", steps: [
      { think: "Derive.", write: "$f'(x) = 12x^2 - 4x$" },
      { think: "Derive again.", write: "$f''(x) = 24x - 4$" },
      { think: "Substitute $x=1$ into the result.", write: "$f''(1) = 24(1) - 4 = 20$" }
    ]},
    { title: "Pattern Recognition", question: "Find the 5th derivative of $y = x^4$.", steps: [
      { think: "The power is 4. The 4th derivative will be a constant ($4 \\times 3 \\times 2 \\times 1$).", write: "$y^{(4)} = 24$" },
      { think: "The derivative of any constant is zero.", write: "$y^{(5)} = 0$" }
    ]},
    { title: "Kinematics Prep", question: "If distance $s = 5t^3 + 2t$, find formula for acceleration $a$.", steps: [
      { think: "Velocity is $s'$.", write: "$v = 15t^2 + 2$" },
      { think: "Acceleration is $v'$ or $s''$.", write: "$a = 30t$" }
    ]},
    { title: "Annihilation of Constants", question: "Given $y = ax^2 + bx + c$, find $y''$.", steps: [
      { think: "$a, b, c$ are constants. First derive.", write: "$y' = 2ax + b$" },
      { think: "Second derivative. $b$ vanishes.", write: "$y'' = 2a$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **Notational Equivalents:**
  $y \\iff f(x) \\iff s(t)$   (Position/Function)
  $y' \\iff f'(x) \\iff \\frac{dy}{dx} \\iff v(t)$ (Velocity/Rate)
  $y'' \\iff f''(x) \\iff \\frac{d^2y}{dx^2} \\iff a(t)$ (Acceleration)
  
  **Ultimate Rule:** ALWAYS simplify the $f'(x)$ equation before attempting to find $f''(x)$.
</div>
`,
  traps: [
    { wrong: "Plug 2 into $f(x)$ then derive to find $f'(2)$", correct: "Derive $f(x)$ to $f'(x)$ FIRST, then plug in 2.", why: "If you plug the number in first, you get a pure constant. The derivative of a constant is 0. You will ALWAYS get 0." },
    { wrong: "$\\frac{d^2y}{dx^2} = (\\frac{dy}{dx})^2$", correct: "They are entirely different things.", why: "One means 'take the derivative again'. The other means 'square the slope'." }
  ],
  assessment: [
    "Find $y''$ if $y = 7x^3$.",
    "True or False: $f''(x)$ tells you the acceleration of a particle.",
    "Find the 4th derivative of $y = x^2$.",
    "Evaluate $y''$ at $x=1$ for $y = 5x^2 - x$.",
    "If $y = 1/x^2$, what is $y''$?"
  ]
});

module.exports = { ch5 };
