const { buildChapter } = require('./builder.cjs');

const ch2 = buildChapter({
  num: 2,
  title: "Limits and Infinite Series",
  intro: `It is possible, though difficult, to understand calculus without a firm grasp on the meaning of a limit. A derivative, the fundamental concept of differential calculus, is a limit. An integral, the fundamental concept of integral calculus, is a limit.
To explain what is meant by a limit, we will be concerned first with limits of discrete functions and infinite series. 
When terms of an infinite series get closer and closer to a number $L$, so that by continuing the series you can make the sum as close to $L$ as you please, then $L$ is called the limit of the partial sums, or the limit of the infinite series. The terms are said to "converge" on $L$. If there is no convergence, the series is said to "diverge."`,
  eli5: `**Zeno's Runner:**
Imagine a runner going from $A$ to $B$. He first runs half the distance, then half the remaining distance, then again half the remaining distance, and so on. The distances he runs get smaller and smaller in the halving series $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots$. Distances from $B$ approach zero as their limit! Does the runner ever reach the goal? In reality, motion is continuous and time also shrinks, meaning the sequence converges in a finite time.
**The Bouncing Ball:**
An ideally elastic ball is dropped 4 feet. Each bounce it rises $3/4$ of the previous height. By summing an infinite series of smaller and smaller bounces, we find that the ball travels exactly $28$ feet before coming to rest completely. Infinite events can result in finite sums!`,
  glossary: {
    "Limit": "The value that a function (or sequence) approaches as the input (or index) approaches some value.",
    "Convergent Series": "An infinite series whose partial sums approach a single, finite limit.",
    "Divergent Series": "An infinite series that does not converge to a finite limit (e.g., it goes to $\\infty$).",
    "Infinitesimal": "A quantity that is infinitely small, closer to zero than any standard real number, yet not exactly zero. Once debated, now fully respected in nonstandard analysis.",
    "Partial Sum": "The sum of the first $n$ terms of an infinite series.",
    "Harmonic Series": "The series $1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\dots$ which famously diverges to infinity."
  },
  whyEE: `Limits prevent engineers from dividing by zero and causing universal explosions. In circuit analysis, what happens to the steady-state value of a capacitor voltage as time $t \\to \\infty$? It's a limit! What happens to an inductor's impedance as frequency $\\omega \\to 0$? It's a limit! Limits allow us to mathematically predict the behavior of dynamic systems at the extreme boundaries (initial startup or infinite time) without physically simulating eternity.`,
  formal: `**Formal Definition of a Limit (The $\\epsilon - \\delta$ definition):**
$\\lim_{x \\to a} f(x) = L$ means that for every real number $\\epsilon > 0$, there exists a real number $\\delta > 0$ such that for all $x$, if $0 < |x - a| < \\delta$, then $|f(x) - L| < \\epsilon$.
**In English:** As $x$ gets arbitrarily close to $a$ (but not exactly $a$), $f(x)$ gets arbitrarily close to $L$.

**For Series:**
The limit of an infinite sum $S = \\sum_{n=1}^\\infty a_n$ is defined as the limit of its partial sums as $N \\to \\infty$.`,
  interactiveHtml: `<div class="plot-interactive my-6" data-plot-id="limit_hole"></div>`,
  method: `1. **Direct Substitution:** Always try plugging in the objective value first. If it yields a real number, that is your limit.
2. **Handle Indeterminate Forms:** If you get $0/0$ or $\\infty/\\infty$, the limit might still exist! You must use algebraic manipulation (factoring, conjugate) or L'Hôpital's Rule.
3. **Analyze Infinite Bounds:** If the denominator shrinks to $0$ while the numerator is a constant (e.g., $1/0$), the limit goes to $\\pm\\infty$ or does not exist.
4. **For Series:** Check if it's a geometric series. If it is $a + ar + ar^2 + \\dots$, and $|r| < 1$, the limit is $\\frac{a}{1 - r}$.`,
  flowchart: `
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
`,
  triggers: [
    { word: "Evaluate the limit", action: "Always do direct substitution first." },
    { word: "Sum the infinite geometric series", action: "Identify $a$ and $r$, then use $S = a/(1-r)$." },
    { word: "Find horizontal asymptote", action: "Take the limit of the function as $x \\to \\infty$ and $x \\to -\\infty$." }
  ],
  examples: [
    { title: "Zeno's Halving Series", question: "Sum the series $1/2 + 1/4 + 1/8 + \\dots$", steps: [
      { think: "This is a geometric series. The first term is $a=1/2$. The multiplier is $r=1/2$.", write: "$S = \\frac{a}{1-r}$" },
      { think: "Substitute the values.", write: "$S = \\frac{1/2}{1 - 1/2} = \\frac{1/2}{1/2} = 1$" }
    ]},
    { title: "Direct Substitution Limit", question: "Evaluate $\\lim_{x \\to 3} (x^2 + 2x - 5)$.", steps: [
      { think: "Just plug in $x = 3$. This is a continuous polynomial.", write: "$\\lim_{x\\to 3} (x^2+2x-5) = 3^2 + 2(3) - 5$" },
      { think: "Do the basic math.", write: "$= 9 + 6 - 5 = 10$" }
    ]},
    { title: "The 0/0 Indeterminate Form (Factoring)", question: "Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.", steps: [
      { think: "Plugging in $x=2$ gives $(4-4)/(2-2) = 0/0$. I need to factor the top.", write: "$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2}$" },
      { think: "Cancel the common $(x-2)$ terms, then plug in.", write: "$\\lim_{x \\to 2} (x+2) = 2 + 2 = 4$" }
    ]},
    { title: "Limit to Infinity (Polynomials)", question: "Evaluate $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{2x^2 - 1}$.", steps: [
      { think: "As $x \\to \\infty$, only the highest power terms matter. Divide everything by $x^2$.", write: "$\\lim_{x \\to \\infty} \\frac{3 + 5/x}{2 - 1/x^2}$" },
      { think: "Any number over $\\infty$ goes to $0$.", write: "$=\\frac{3 + 0}{2 - 0} = \\frac{3}{2}$" }
    ]},
    { title: "The Bouncing Ball (Geometric Series trick)", question: "A ball drops 4ft, rises 3ft, falls 3ft, rises 9/4ft... Total distance? $x = 4 + 6 + 4.5 + 3.375 + \\dots$ after the first drop.", steps: [
      { think: "Let's treat the bounces (up and down) as a series: $6 + 6(3/4) + 6(3/4)^2...$", write: "$a=6$, $r=\\frac{3}{4}$" },
      { think: "Sum the infinite bounces, then add the initial 4ft drop.", write: "$\\frac{6}{1 - 3/4} = \\frac{6}{1/4} = 24$\nTotal $= 4 + 24 = 28$ feet" }
    ]},
    { title: "Harmonic Series Divergence", question: "Evaluate the limit of $1 + 1/2 + 1/3 + 1/4 + \\dots$", steps: [
      { think: "This is the famous harmonic series. Even though the terms shrink, they do not shrink fast enough.", write: "$\\sum_{n=1}^\\infty \\frac{1}{n}$" },
      { think: "State the mathematical known fact.", write: "The series diverges to $\\infty$." }
    ]},
    { title: "Limits with Radicals (Conjugate Trick)", question: "Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x+9} - 3}{x}$.", steps: [
      { think: "Plugging in $0$ gives $0/0$. Multiply top and bottom by the conjugate $\\sqrt{x+9} + 3$.", write: "$\\frac{\\sqrt{x+9}-3}{x} \\cdot \\frac{\\sqrt{x+9}+3}{\\sqrt{x+9}+3}$" },
      { think: "Foil the top.", write: "$= \\frac{(x+9)-9}{x(\\sqrt{x+9}+3)} = \\frac{x}{x(\\sqrt{x+9}+3)}$" },
      { think: "Cancel $x$ and plug in 0.", write: "$\\lim_{x\\to 0} \\frac{1}{\\sqrt{x+9}+3} = \\frac{1}{\\sqrt{9}+3} = \\frac{1}{6}$" }
    ]},
    { title: "Approaching Asymptotes", question: "Find $\\lim_{x \\to 0^+} \\frac{1}{x}$.", steps: [
      { think: "I am approaching zero from the positive side (small positive fractions).", write: "$1 / (\\text{tiny positive}) \\to \\infty$" },
      { think: "The value explodes to positive infinity.", write: "$= \\infty$" }
    ]},
    { title: "Repeating Decimal to Fraction", question: "Write $0.3333\\dots$ as a fraction using limits.", steps: [
      { think: "This is $3/10 + 3/100 + 3/1000 + \\dots$", write: "$a=3/10$, $r=1/10$" },
      { think: "Use the sum formula.", write: "$S = \\frac{3/10}{1 - 1/10} = \\frac{3/10}{9/10} = \\frac{3}{9} = \\frac{1}{3}$" }
    ]},
    { title: "Basic L'Hopital's (Preview)", question: "Find $\\lim_{x \\to 0} \\frac{\\sin x}{x}$.", steps: [
      { think: "$0/0$ form. A geometry proof works, but let's remember this is a fundamental known limit.", write: "$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$" },
      { think: "State the answer directly.", write: "$= 1$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **Limit Evaluator Checklist:**
  1. $f(a)$ is a number $\\to$ DONE.
  2. $0 / 0 \\to$ Factor, Conjugate, or L'Hôpital.
  3. $\\text{number} / 0 \\to$ Check left & right bounds, usually $\\pm\\infty$.
  4. $\\lim_{x \\to \\infty} \\frac{p(x)}{q(x)}$: 
     - degree(top) > degree(bottom) $\\to \\infty$
     - degree(top) < degree(bottom) $\\to 0$
     - degree(top) == degree(bottom) $\\to$ ratio of leading coefficients
  
  **Geometric Series:** $S = \\frac{a}{1 - r}$ (converges if $|r| < 1$)
</div>
`,
  traps: [
    { wrong: "$\\lim_{x\\to 2} \\frac{x-2}{x^2-4} = 0/0 \\text{ so it doesn't exist}$", correct: "$= \\lim \\frac{1}{x+2} = 1/4$", why: "Always attempt algebraic manipulation before giving up." },
    { wrong: "$\\infty / \\infty = 1$", correct: "It is an indeterminate form", why: "Infinities have different 'speeds'. Use leading term rules." },
    { wrong: "Sum of $1 + 2 + 4 + 8\\dots = \\frac{1}{1-2} = -1$", correct: "Diverges", why: "The formula only works strictly if $|r| < 1$." }
  ],
  assessment: [
    "Evaluate $\\lim_{x \\to 5} (2x - 1)$.",
    "Evaluate $\\lim_{x \\to \\infty} \\frac{4x^3}{2x^3 - 7}$.",
    "Sum the infinite series where $a=5$ and $r=1/3$.",
    "Evaluate $\\lim_{x \\to 0} \\frac{x^2+3x}{x}$.",
    "What is the limit of the harmonic series?"
  ]
});

module.exports = { ch2 };
