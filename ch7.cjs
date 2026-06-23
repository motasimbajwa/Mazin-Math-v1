const { buildChapter } = require('./builder.cjs');

const ch7 = buildChapter({
  num: 7,
  title: "The Chain Rule (Function of a Function)",
  intro: `Sometimes one is stumped by finding that the expression to be differentiated is too complicated to tackle directly. Thus, the equation $y = (x^2 + a^2)^3$ is awkward to a beginner.
Now the dodge to turn the difficulty is this: Write some symbol, such as $u$, for the expression $x^2 + a^2$; then the equation becomes $y = u^3$. You can easily manage this, and you can easily manage $u$. Then all that remains is plain sailing by multiplying the derivatives together.
Thompson's "useful dodge" is known today as the chain rule. It is one of the most useful rules in calculus. It applies to composite functions—a function of a function.`,
  eli5: `**Peeling the Onion:**
Think of a Russian nesting doll or an onion. A composite function is a function wrapped inside another function. To reach the very center (to fully differentiate with respect to $x$), you must first "peel" the outer layer by differentiating it (while leaving the inside completely untouched), and then multiply that result by the derivative of the inside layer. Outer layer first, inner layer second!`,
  glossary: {
    "Composite Function": "A function that substitutes another function as its input instead of a plain $x$. Denoted as $f(g(x))$.",
    "Inner Function": "The formula tucked inside the parentheses, e.g. the $g(x)$.",
    "Outer Function": "The overarching operation surrounding the inner function, e.g. the $f()$.",
    "Chain Rule": "The multiplicative law used to differentiate layered functions: $\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$."
  },
  whyEE: `When analyzing alternating current, you will constantly differentiate sine and cosine wave equations like $V(t) = 170\\sin(377t + \\phi)$. Taking the derivative of this requires the Chain Rule perfectly, since the outer function is $\\sin()$ and the inner function is $(377t + \\phi)$. It pulls out the $377$ (the angular frequency $\\omega$) to multiply the front amplitude.`,
  formal: `**The Chain Rule (Leibniz Notation):**
If $y$ depends on $u$, and $u$ depends on $x$, then:
$$ \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} $$

**The Chain Rule (Newton/Lagrange Notation):**
If $y = f(g(x))$, then:
$$ y' = f'(g(x)) \\cdot g'(x) $$

**Generalized Power Rule (A common special case):**
If $y = [u(x)]^n$, then:
$$ y' = n[u(x)]^{n-1} \\cdot u'(x) $$`,
  interactiveHtml: `<div class="plot-interactive my-6" data-plot-id="chain_rule_tree"></div>`,
  method: `1. **Identify Inner ($u$) and Outer ($f$):** Recognize what part of the equation is nested inside parentheses, under a radical, or in an exponent. That is $u$. 
2. **Derivative of the Outer:** Differentiate the outside function exactly as normal, but KEEP the inner function $u$ completely untouched inside.
3. **Derivative of the Inner:** Find the derivative of the inner function $u' = du/dx$.
4. **Multiply:** Multiply the outer derivative by the inner derivative.`,
  flowchart: `
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
`,
  triggers: [
    { word: "Differentiate $(...)^{power}$", action: "Use generalized power rule (Chain rule). Bring power down, multiply by derivative of inside." },
    { word: "Differentiate $\\sqrt{x^2+1}$", action: "Rewrite as $(x^2+1)^{1/2}$ and apply chain rule." },
    { word: "Nested trig $\\sin(3x)$", action: "Derivative of sine is cosine (keep $3x$), multiply by derivative of $3x$." }
  ],
  examples: [
    { title: "Generalized Power Rule", question: "Differentiate $y = (x^2 + 5)^3$.", steps: [
      { think: "The outside is $u^3$. Inside is $x^2+5$. Bring 3 down, leave inside alone, reduce power to 2.", write: "$3(x^2 + 5)^2 \\dots$" },
      { think: "Multiply by the derivative of the inside ($2x$).", write: "$\\dots \\times (2x)$" },
      { think: "Clean up by multiplying coefficients.", write: "$y' = 6x(x^2 + 5)^2$" }
    ]},
    { title: "Root of a Polynomial", question: "Differentiate $y = \\sqrt{x^3 + 1}$.", steps: [
      { think: "Rewrite as a fractional power.", write: "$y = (x^3 + 1)^{1/2}$" },
      { think: "Apply chain rule. Outside first.", write: "$\\frac{1}{2}(x^3 + 1)^{-1/2} \\dots$" },
      { think: "Multiply by inner derivative ($3x^2$).", write: "$\\frac{dy}{dx} = \\frac{1}{2}(x^3+1)^{-1/2} \\times 3x^2 = \\frac{3x^2}{2\\sqrt{x^3+1}}$" }
    ]},
    { title: "Negative Exponents", question: "Differentiate $y = \\frac{1}{(2x-3)^4}$.", steps: [
      { think: "Rewrite using a negative exponent so we don't have to use quotient rule.", write: "$y = (2x - 3)^{-4}$" },
      { think: "Chain rule. Bring down $-4$, subtract $1$ from power.", write: "$-4(2x - 3)^{-5} \\dots$" },
      { think: "Multiply by inner derivative ($2$).", write: "$\\frac{dy}{dx} = -8(2x - 3)^{-5} = \\frac{-8}{(2x-3)^5}$" }
    ]},
    { title: "Chain Rule on Trig (Preview)", question: "If derivative of $\\sin(x)$ is $\\cos(x)$, differentiate $y = \\sin(x^2)$.", steps: [
      { think: "Outer is sine, inner is $x^2$. Derivative of outer is cosine (keeping $x^2$ inside).", write: "$\\cos(x^2) \\dots$" },
      { think: "Multiply by inner derivative ($2x$).", write: "$\\frac{dy}{dx} = 2x \\cos(x^2)$" }
    ]},
    { title: "Square of a Trig Function", question: "Differentiate $y = \\sin^2(x)$.", steps: [
      { think: "Rewrite to expose the structure. The SQUARE is the outside.", write: "$y = (\\sin x)^2$" },
      { think: "Outside derivative: bring 2 down.", write: "$2(\\sin x)^1 \\dots$" },
      { think: "Inner derivative: derive sine to get cosine.", write: "$\\frac{dy}{dx} = 2\\sin(x)\\cos(x)$" }
    ]},
    { title: "Three Layers Deep", question: "Differentiate $y = \\sqrt{\\sin(3x)}$.", steps: [
      { think: "Rewrite with exponent. $( \\sin(3x) )^{1/2}$", write: "Layers: $1/2$ power $\\to$ sine $\\to 3x$" },
      { think: "Peel layer 1: exact fraction.", write: "$\\frac{1}{2}(\\sin(3x))^{-1/2} \\dots$" },
      { think: "Peel layer 2: derive sine to cosine.", write: "$\\dots \\times \\cos(3x) \\dots$" },
      { think: "Peel layer 3: derive 3x to 3.", write: "$\\frac{dy}{dx} = \\frac{3\\cos(3x)}{2\\sqrt{\\sin(3x)}}$" }
    ]},
    { title: "Chain within Product", question: "Differentiate $y = x(x+1)^3$.", steps: [
      { think: "Primary rule needed is the Product Rule ($uv' + vu'$). $u = x$ and $v = (x+1)^3$.", write: "$u' = 1$" },
      { think: "Use chain rule to find $v'$.", write: "$v' = 3(x+1)^2(1)$" },
      { think: "Assemble Product Rule.", write: "$\\frac{dy}{dx} = x(3(x+1)^2) + (x+1)^3(1)$" }
    ]},
    { title: "Fractions without moving", question: "Differentiate $y = ( \\frac{x}{x+1} )^2$.", steps: [
      { think: "Outer function is the square.", write: "$2 \\left( \\frac{x}{x+1} \\right)^1 \\dots$" },
      { think: "Inner function requires the Quotient Rule.", write: "$\\frac{(x+1)(1) - x(1)}{(x+1)^2} = \\frac{1}{(x+1)^2}$" },
      { think: "Multiply them together.", write: "$y' = 2 \\left( \\frac{x}{x+1} \\right) \\frac{1}{(x+1)^2} = \\frac{2x}{(x+1)^3}$" }
    ]},
    { title: "Leibniz Train", question: "If $y = 5u^2$ and $u = 3x - 1$, find $dy/dx$.", steps: [
      { think: "Find $dy/du$.", write: "$dy/du = 10u$" },
      { think: "Find $du/dx$.", write: "$du/dx = 3$" },
      { think: "Multiply them and substitute $x$ back in.", write: "$dy/dx = 10(3x-1) \\times 3 = 30(3x-1)$" }
    ]},
    { title: "Electrical Angle", question: "Differentiate $y = \\cos(\\omega t + \\phi)$ with respect to $t$. (Assume derivative of cosine is negative sine).", steps: [
      { think: "Outer is cosine $\\to$ negative sine.", write: "$-\\sin(\\omega t + \\phi) \\dots$" },
      { think: "Inner is $(\\omega t + \\phi)$. $\\omega, \\phi$ are constants. Derivative is just $\\omega$.", write: "$\\dots \\times \\omega$" },
      { think: "Combine.", write: "$dy/dt = -\\omega \\sin(\\omega t + \\phi)$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **The Chain Rule Engine:**
  $y = f(g(x))$ 
  $y' = \\text{Outer}'(\\text{Inner}) \\times \\text{Inner}'$
  
  **Most useful shortcut $y = u^n$:**
  $\\frac{d}{dx} [u(x)]^n = n \\cdot u(x)^{n-1} \\cdot u'(x)$
</div>
`,
  traps: [
    { wrong: "$\\frac{d}{dx} (x^2+1)^3 = 3(2x)^2$", correct: "$3(x^2+1)^2 \\cdot (2x)$", why: "You MUST leave the original inner function completely untouched inside the outer brackets." },
    { wrong: "$\\frac{d}{dx} \\sin^2x = \\cos^2x$", correct: "$2\\sin x \\cdot \\cos x$", why: "You forgot that the exponent is the true 'outer' function." },
    { wrong: "Forgetting to take the derivative of the inside entirely.", correct: "Always trace the chain to the very end.", why: "The chain rule is an absolute mandate, not a suggestion." }
  ],
  assessment: [
    "Differentiate $y = (3x+4)^5$.",
    "Differentiate $y = \\sqrt{5x^2 - 2}$.",
    "Identify the inner and outer function of $y = e^{\\sin x}$.",
    "Given $y = f(u)$ and $u = g(x)$, write the formula for $dy/dx$.",
    "Explain why the derivative of $y=(x^3)^2$ using the chain rule yields the same result as expanding to $x^6$ first."
  ]
});

module.exports = { ch7 };
