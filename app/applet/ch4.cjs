const { buildChapter } = require('./builder.cjs');

const ch4 = buildChapter({
  num: 4,
  title: "Differentiating Products and Quotients",
  intro: `We have learned how to differentiate simple algebraical functions such as $x^2+c$ or $ax^4$, and we have now to consider how to tackle the product or quotient of two or more functions. 
A naive student might assume that to differentiate $y = u \\times v$, you just multiply the derivative of $u$ by the derivative of $v$. **This is spectacularly wrong.**
If you have a growing rectangle where both the length $u$ and height $v$ are stretching by $du$ and $dv$, the new area involves $u \\cdot dv + v \\cdot du + du \\cdot dv$. Since $du \\cdot dv$ is infinitely small of the second order, it vanishes, leaving $u \\cdot dv + v \\cdot du$.
This logical geometry builds the indestructible Product Rule and Quotient Rule.`,
  eli5: `**The Growing Rectangle (Product Rule):**
Imagine a metal sheet that is being heated. Its width $u$ is expanding, and its height $v$ is expanding. The new area isn't just the main square, it has two new "strips" added to the sides. One strip is (old width $\\times$ new height change), which is $u \\cdot v'$. The other strip is (old height $\\times$ new width change), which is $v \\cdot u'$. The total area grew by $uv' + vu'$. 
Therefore: "First times the derivative of the second, PLUS the second times the derivative of the first."`,
  glossary: {
    "Product Rule": "The formula used to find the derivative of two functions multiplied together: $(uv)' = uv' + vu'$.",
    "Quotient Rule": "The formula used to find the derivative of a function divided by another function: $(u/v)' = \\frac{vu' - uv'}{v^2}$.",
    "Derivatives $u'$ and $v'$": "Shorthand notation for $\\frac{du}{dx}$ and $\\frac{dv}{dx}$."
  },
  whyEE: `In circuit analysis, Instantaneous Power is $P(t) = v(t) \\times i(t)$ (voltage times current). To find the maximum power delivery over time (which requires differentiating power), you MUST use the Product Rule since both voltage and current are functions of time changing simultaneously. Mixing them up causes grid failures.`,
  formal: `**The Product Rule:**
If $y = u(x) \\cdot v(x)$, then:
$$ \\frac{dy}{dx} = u \\frac{dv}{dx} + v \\frac{du}{dx} $$
Or simply: $(uv)' = uv' + vu'$

**The Quotient Rule:**
If $y = \\frac{u(x)}{v(x)}$, then:
$$ \\frac{dy}{dx} = \\frac{v \\frac{du}{dx} - u \\frac{dv}{dx}}{v^2} $$
Or simply: $(u/v)' = \\frac{vu' - uv'}{v^2}$.
A classic mnemonic: "Low D-High minus High D-Low, over the square of what's below."`,
  method: `**For Products:**
1. Identify the two separate functions multiplying together, label them $u$ and $v$.
2. Take the derivative of each to find $u'$ and $v'$.
3. Plug them exactly into $uv' + vu'$.

**For Quotients:**
1. Identify the top function as $high$ ($u$) and the bottom function as $low$ ($v$).
2. Take their derivatives.
3. Plug into $\\frac{low \\cdot d(high) - high \\cdot d(low)}{low^2}$.
4. CAUTION: the order of subtraction is absolutely critical. Bottom first!`,
  flowchart: `
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
| uv' + vu'    |     | (vu'-uv')/v²  |
+--------------+     +---------------+
</div>
`,
  triggers: [
    { word: "Differentiate $y = (x+1)(x-2)$", action: "Use the Product Rule (or multiply it out algebraically first)." },
    { word: "Differentiate $y = \\frac{x}{x^2+1}$", action: "Use the Quotient Rule. Always start with the bottom term." },
    { word: "Find maximum power $P=vi$", action: "Product Rule required." }
  ],
  examples: [
    { title: "Basic Product Rule", question: "Differentiate $y = (x^2 + 1)(x^3 + 2)$.", steps: [
      { think: "Identify $u = x^2+1$ and $v = x^3+2$. Find derivatives.", write: "$u' = 2x \\quad v' = 3x^2$" },
      { think: "Assemble $uv' + vu'$.", write: "$\\frac{dy}{dx} = (x^2+1)(3x^2) + (x^3+2)(2x)$" },
      { think: "Expand and simplify.", write: "$= 3x^4 + 3x^2 + 2x^4 + 4x = 5x^4 + 3x^2 + 4x$" }
    ]},
    { title: "Algebraic Alternative", question: "Verify Example 1 by multiplying out first.", steps: [
      { think: "Foil the original equation before differentiating.", write: "$y = x^5 + 2x^2 + x^3 + 2$" },
      { think: "Apply the standard power rule.", write: "$\\frac{dy}{dx} = 5x^4 + 4x + 3x^2$" },
      { think: "The math is intrinsically consistent and perfectly beautiful.", write: "Match confirmed." }
    ]},
    { title: "Basic Quotient Rule", question: "Differentiate $y = \\frac{x^2}{x+1}$.", steps: [
      { think: "Identify $u = x^2$ and $v = x+1$. Find derivatives.", write: "$u'=2x, \\quad v'=1$" },
      { think: "Apply Low d-High minus High d-Low, over Low squared.", write: "$\\frac{dy}{dx} = \\frac{(x+1)(2x) - (x^2)(1)}{(x+1)^2}$" },
      { think: "Simplify numerator: $(2x^2 + 2x) - x^2$.", write: "$\\frac{dy}{dx} = \\frac{x^2 + 2x}{(x+1)^2}$" }
    ]},
    { title: "A Mixed Fractional Case", question: "Differentiate $y = \\frac{1}{x^2+a^2}$.", steps: [
      { think: "Top is $u=1$, Bottom is $v=x^2+a^2$. $a$ is a constant.", write: "$u'=0, \\quad v'=2x$" },
      { think: "Apply quotient rule.", write: "$\\frac{(x^2+a^2)(0) - 1(2x)}{(x^2+a^2)^2}$" },
      { think: "Clean up.", write: "$\\frac{dy}{dx} = \\frac{-2x}{(x^2+a^2)^2}$" }
    ]},
    { title: "Three Factor Product", question: "Differentiate $y = x(x+1)(x+2)$.", steps: [
      { think: "Product rule for three variables is $u'vw + uv'w + uvw'$. Or just multiply it out. Multiplying is safer.", write: "$y = x(x^2 + 3x + 2) = x^3 + 3x^2 + 2x$" },
      { think: "Power rule.", write: "$\\frac{dy}{dx} = 3x^2 + 6x + 2$" }
    ]},
    { title: "Quotient with Roots", question: "Differentiate $y = \\frac{\\sqrt{x}}{x+1}$.", steps: [
      { think: "$u = x^{1/2}$, $v = x+1$. $u' = \\frac{1}{2\\sqrt{x}}$, $v'=1$.", write: "$\\frac{dy}{dx} = \\frac{(x+1)(\\frac{1}{2\\sqrt{x}}) - \\sqrt{x}(1)}{(x+1)^2}$" },
      { think: "Multiply top and bottom by $2\\sqrt{x}$ to clear ugly complex fractions.", write: "$= \\frac{(x+1) - 2x}{2\\sqrt{x}(x+1)^2} = \\frac{1-x}{2\\sqrt{x}(x+1)^2}$" }
    ]},
    { title: "Power rules in Quotients", question: "Differentiate $y = \\frac{x^3}{1+x^2}$.", steps: [
      { think: "$u=x^3$, $v=1+x^2$. $u'=3x^2$, $v'=2x$.", write: "$\\frac{(1+x^2)(3x^2) - x^3(2x)}{(1+x^2)^2}$" },
      { think: "Expand top.", write: "$\\frac{3x^2 + 3x^4 - 2x^4}{(1+x^2)^2}$" },
      { think: "Combine like terms.", write: "$\\frac{x^4+3x^2}{(1+x^2)^2}$" }
    ]},
    { title: "Polynomial/Constant", question: "Differentiate $y = \\frac{x^2+1}{5}$.", steps: [
      { think: "Wait, do I need the quotient rule?", write: "No! The bottom is a constant." },
      { think: "Rewrite as a multiplied fraction $y = \\frac{1}{5}(x^2+1)$ and just use power rule.", write: "$\\frac{dy}{dx} = \\frac{2x}{5}$" }
    ]},
    { title: "Constant/Polynomial", question: "Differentiate $y = \\frac{5}{x^2+1}$.", steps: [
      { think: "Top is constant, bottom is a function. I MUST use quotient rule.", write: "$\\frac{(x^2+1)(0) - 5(2x)}{(x^2+1)^2}$" },
      { think: "Simplify.", write: "$= \\frac{-10x}{(x^2+1)^2}$" }
    ]},
    { title: "Ugly Numerator Structure", question: "Differentiate $y = \\frac{ax+b}{cx+d}$.", steps: [
      { think: "$u=ax+b, v=cx+d$. $u'=a, v'=c$.", write: "$\\frac{(cx+d)(a) - (ax+b)(c)}{(cx+d)^2}$" },
      { think: "Expand: $acx + ad - acx - bc$.", write: "$= \\frac{ad - bc}{(cx+d)^2}$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **Product Rule:** $(uv)' = u'v + uv'$ \\
  *Memory Hack:* "Derivative of the first times second, plus derivative of second times first."
  
  **Quotient Rule:** $(u/v)' = \\frac{vu' - uv'}{v^2}$ \\
  *Memory Hack:* "Low D-High minus High D-Low, over the square of what's below."
  (The minus sign matters immensely. Always start with the bottom term, 'Low').
</div>
`,
  traps: [
    { wrong: "$(u \\times v)' = u' \\times v'$", correct: "$(u \\times v)' = u'v + uv'$", why: "Fatal instinct error. Growth happens on two independent axes simultaneously." },
    { wrong: "$(u/v)' = \\frac{uv' - vu'}{v^2}$", correct: "$(u/v)' = \\frac{vu' - uv'}{v^2}$", why: "Flipped subtraction order. You will get the exact negative of the real answer." },
    { wrong: "Use quotient rule on $\\frac{x^2}{5}$", correct: "Just write $\\frac{1}{5}x^2$ and use power rule.", why: "Wasting time on the quotient rule when the denominator is a pure constant." }
  ],
  assessment: [
    "Differentiate $y = x^2(x+5)$.",
    "Identify $u'$ and $v'$ for the product $y = (x^3)(\\ln x)$. (Hint: $d/dx \\ln x = 1/x$).",
    "Write the complete formula for the Quotient Rule.",
    "Differentiate $y = \\frac{x}{x+1}$.",
    "Why do we not differentiate $u \\times v$ as $u' \\times v'$?"
  ]
});

module.exports = { ch4 };
