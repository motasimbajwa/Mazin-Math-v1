const fs = require('fs');

const cheatsheets = {
  "chapter-0": {
    exampleTitle: "Example: Limits and Evaluation",
    question: "Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.",
    voice: [
      ["\"Direct substitution gives $0/0$. I need to factor the numerator to remove the discontinuity.\"", "$\\frac{(x-2)(x+2)}{x-2}$"],
      ["\"Cancel the $(x-2)$ terms, then plug in $x = 2$ again.\"", "$\\lim_{x \\to 2} (x+2) = 4$"]
    ],
    jog: [
      ["$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{0}{0}$", "Can I factor or use L'Hôpital?", "Differentiate top and bottom."],
      ["$\\infty / \\infty$", "Which grows faster?", "Divide by highest power or L'Hôpital."]
    ]
  },
  "chapter-1": {
    exampleTitle: "Example: Evaluating a Piecewise Function",
    question: "Given $f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x + 1 & x \\ge 0 \\end{cases}$, find $f(-2)$ and $f(0)$.",
    voice: [
      ["\"For $x = -2$, the condition $x < 0$ is true. I use the first piece.\"", "$f(-2) = (-2)^2 = 4$"],
      ["\"For $x = 0$, the condition $x \\ge 0$ is true. I use the second piece.\"", "$f(0) = 2(0) + 1 = 1$"]
    ],
    jog: [
      ["Denominator", "$= 0$?", "Exclude those points from domain."],
      ["Square root", "Inside $< 0$?", "Exclude from domain."]
    ]
  },
  "chapter-2": {
    exampleTitle: "Example: Infinite Geometric Series",
    question: "Find the sum of the series $\\sum_{n=0}^{\\infty} 3 \\left(\\frac{1}{2}\\right)^n$.",
    voice: [
      ["\"This is a geometric series. The first term $a$ is $3$ (when $n=0$).\"", "$a = 3$"],
      ["\"The common ratio $r$ is $1/2$. Since $|r| < 1$, it converges. Use $S = a / (1 - r)$.\"", "$S = \\frac{3}{1 - 1/2} = 6$"]
    ],
    jog: [
      ["$r^n$ in sum", "$|r| < 1$?", "Converges to $a/(1-r)$"],
      ["$\\lim_{n \\to \\infty} a_n \
eq 0$", "Does the sequence approach zero?", "Divergence Test: Series diverges."]
    ]
  },
  "chapter-3": {
    exampleTitle: "Example: Power Rule Application",
    question: "Find the derivative of $f(x) = 4x^3 - \\frac{1}{x^2}$.",
    voice: [
      ["\"Before differentiating, rewrite the fraction with a negative exponent so I can use the power rule.\"", "$f(x) = 4x^3 - x^{-2}$"],
      ["\"Bring down the exponent, subtract one from the power.\"", "$f'(x) = 12x^2 - (-2)x^{-3} = 12x^2 + \\frac{2}{x^3}$"]
    ],
    jog: [
      ["$1/x^n$", "Rewrite as $x^{-n}$?", "Apply power rule."],
      ["$\\sqrt{x}$", "Rewrite as $x^{1/2}$?", "Apply power rule."]
    ]
  },
  "chapter-4": {
    exampleTitle: "Example: Product Rule",
    question: "Differentiate $y = (x^2 + 1) e^x$.",
    voice: [
      ["\"I see two distinct functions of $x$ multiplied together. I must use the Product Rule: $u'v + uv'$.\"", "Let $u = x^2+1, v = e^x$"],
      ["\"Calculate $u'$ and $v'$, then plug into the formula.\"", "$y' = (2x)(e^x) + (x^2+1)(e^x)$"]
    ],
    jog: [
      ["$u(x)v(x)$", "Are they multiplied?", "Use Product Rule: $u'v + uv'$"],
      ["$\\frac{u(x)}{v(x)}$", "Is it a fraction?", "Use Quotient Rule: $\\frac{u'v - uv'}{v^2}$"]
    ]
  },
  "chapter-5": {
    exampleTitle: "Example: Second Derivative",
    question: "Find the second derivative of $y = \\ln(2x)$.",
    voice: [
      ["\"First, find the first derivative. Since $\\ln(kx)$ differentiates to $1/x$, I'll just write that.\"", "$y' = \\frac{1}{x} = x^{-1}$"],
      ["\"Now differentiate $y'$ to get $y''$. Use the standard power rule.\"", "$y'' = -1 \\cdot x^{-2} = -\\frac{1}{x^2}$"]
    ],
    jog: [
      ["Find $f''(x)$", "Do I have $f'(x)$ simplified?", "Simplify $f'(x)$ first, then derive."],
      ["Inflection point", "Does $f''(x) = 0$ or undefined?", "Find roots of $f''$ and test signs."]
    ]
  },
  "chapter-6": {
    exampleTitle: "Example: Kinematics (Velocity & Acceleration)",
    question: "Position is $s(t) = t^3 - 6t^2$. When is the particle at rest?",
    voice: [
      ["\"'At rest' means velocity is zero. I need to find the velocity function by taking the derivative of position.\"", "$v(t) = s'(t) = 3t^2 - 12t$"],
      ["\"Set $v(t) = 0$ and solve for $t$.\"", "$3t(t - 4) = 0 \\implies t = 0, t = 4$"]
    ],
    jog: [
      ["\"At rest\"", "Is $v(t) = 0$?", "Set first derivative to zero."],
      ["\"Changing direction\"", "Does $v(t)$ change sign?", "Test intervals around $v(t)=0$."]
    ]
  },
  "chapter-7": {
    exampleTitle: "Example: The Chain Rule",
    question: "Find $\\frac{dy}{dx}$ for $y = \\sin(x^2 + 3)$.",
    voice: [
      ["\"There's an 'inside' function $x^2+3$ inside an 'outside' function $\\sin()$. I apply the Chain Rule.\"", "Outer: $\\sin(u) \\rightarrow \\cos(u)$"],
      ["\"Derivative of outside, keep inside exactly the same, multiply by derivative of inside.\"", "$y' = \\cos(x^2+3) \\cdot (2x)$"]
    ],
    jog: [
      ["$f(g(x))$", "Is there an inside function?", "Derivative is $f'(g(x)) \\cdot g'(x)$"],
      ["$\\sin^2(x)$", "Is it really $(\\sin x)^2$?", "Outer is $(.)^2$, inner is $\\sin x$."]
    ]
  },
  "chapter-8": {
    exampleTitle: "Example: Implicit Differentiation",
    question: "Find $\\frac{dy}{dx}$ if $x^2 + y^2 = 25$.",
    voice: [
      ["\"We have a mix of $x$ and $y$. Differentiate both sides with respect to $x$. When differentiating a $y$ term, I MUST multiply by $y'$ (Chain rule).\"", "$2x + 2y y' = 0$"],
      ["\"Solve algebraically for $y'$.\"", "$2y y' = -2x \\implies y' = -\\frac{x}{y}$"]
    ],
    jog: [
      ["Term with $y$", "Deriving wrt $x$?", "Multiply result by $\\frac{dy}{dx}$."],
      ["$xy$", "Is it a product?", "Use product rule: $x y' + y$."]
    ]
  },
  "chapter-9": {
    exampleTitle: "Example: Related Rates",
    question: "A circle's radius is growing at $2\\text{ m/s}$. How fast is its area growing when $r=5$?",
    voice: [
      ["\"Write the geometric equation, then take the time derivative $\\frac{d}{dt}$ of both sides.\"", "Area: $A = \\pi r^2$ \
 $A' = 2\\pi r \\cdot r'$"],
      ["\"Now plug in the specific moment values ($r=5$, $r'=2$).\"", "$A' = 2\\pi(5)(2) = 20\\pi\\text{ m}^2\\text{/s}$"]
    ],
    jog: [
      ["\"Growing at...\"", "Is it a rate?", "Identify as $\\frac{dr}{dt}$, $\\frac{dV}{dt}$, etc."],
      ["Equation ties vars", "Do I need rates?", "Differentiate everything with respect to $t$."]
    ]
  },
  "chapter-10": {
    exampleTitle: "Example: Optimization (Maxima)",
    question: "Find the maximum area of a rectangle with perimeter $20$.",
    voice: [
      ["\"Write the constraint and the objective equations.\"", "Const: $2x+2y=20 \\implies y=10-x$ \
 Obj: $A = xy$"],
      ["\"Substitute constraint into objective, then take derivative and find critical points.\"", "$A = x(10-x) = 10x - x^2$ \
 $A' = 10 - 2x = 0 \\implies x=5$"]
    ],
    jog: [
      ["\"Maximize...\"", "What formula is being optimized?", "Write objective function."],
      ["Constraint given", "Can I substitute?", "Solve constraint for one var and plug in."]
    ]
  },
  "chapter-14-1": {
    exampleTitle: "Example: The Inverse Trig Constraint",
    question: "Find the domain of $f(x,y) = \\sin^{-1}(x^2 + y^2 - 2)$.",
    voice: [
      ["\"Inverse sine is incredibly picky. It only accepts inputs exactly between $-1$ and $1$. I will trap the inner argument and solve the inequality.\"", "$-1 \\le x^2 + y^2 - 2 \\le 1$"],
      ["\"Add $2$ to all sides to isolate the $x^2 + y^2$ circle equation. This forms an annulus (a ring).\"", "$1 \\le x^2 + y^2 \\le 3$<br>**Domain:** Annulus between circles $1$ and $\\sqrt{3}$."]
    ],
    jog: [
      ["$\\sqrt{\\dots}$", "Inside $\\ge 0$?", "Write inequality"],
      ["$\\ln(\\dots)$", "Inside $> 0$?", "Write inequality"],
      ["Denominator", "$= 0$?", "Exclude those points"],
      ["\"Level curve\"", "Set $f(x,y) = c$", "Find $c$ from point if given"]
    ]
  },
  "chapter-14-2": {
    exampleTitle: "Example: Two-Path Test for Non-existence",
    question: "Show $\\lim_{(x,y) \\to (0,0)} \\frac{xy}{x^2 + y^2}$ does not exist.",
    voice: [
      ["\"I will approach along the path $y = kx$. If the limit answer depends on my chosen slope $k$, the limit cannot exist.\"", "$\\lim_{x \\to 0} \\frac{x(kx)}{x^2 + (kx)^2}$"],
      ["\"Factor out $x^2$ and simplify.\"", "$\\lim_{x \\to 0} \\frac{k}{1+k^2} = \\frac{k}{1+k^2}$.<br>Depends on $k$. Does not exist."]
    ],
    jog: [
      ["Evaluate limit", "Can I substitute?", "Plug in. If continuous, done."],
      ["Path $y=x$", "Do I get a different limit?", "If paths give diff values, DNE."],
      ["$x^2+y^2$ in denom", "Can I use polar $(r \\to 0)$?", "Substitute $x=r\\cos\\theta, y=r\\sin\\theta$."]
    ]
  },
  "chapter-14-3": {
    exampleTitle: "Example: First-Order Partial Derivatives",
    question: "Find $f_x$ and $f_y$ for $f(x,y) = x^2 y^3 + \\sin(x)$.",
    voice: [
      ["\"To find $f_x$, I treat $y$ entirely as a constant number. Just derive the $x$ parts.\"", "$f_x = 2x(y^3) + \\cos(x)$"],
      ["\"To find $f_y$, I treat $x$ as the constant. $\\sin(x)$ is purely constant, so its derivative is 0.\"", "$f_y = x^2(3y^2) + 0 = 3x^2 y^2$"]
    ],
    jog: [
      ["Find $f_x$", "Is $y$ treated as constant?", "Derive only $x$ terms."],
      ["Find $f_y$", "Is $x$ treated as constant?", "Derive only $y$ terms."],
      ["Mixed $f_{xy}$", "Did I do $x$ then $y$?", "Differentiate $f_x$ with respect to $y$."]
    ]
  },
  "chapter-14-4": {
    exampleTitle: "Example: Multivariable Chain Rule",
    question: "Let $z = xy$, where $x=\\cos t, y=\\sin t$. Find $\\frac{dz}{dt}$ without substituting first.",
    voice: [
      ["\"$z$ depends on $x,y$, which depend on $t$. I draw the tree and write the chain sum.\"", "$\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial z}{\\partial y}\\frac{dy}{dt}$"],
      ["\"Compute partials and substitute the $t$ derivatives.\"", "$\\frac{dz}{dt} = (y)(-\\sin t) + (x)(\\cos t)$"]
    ],
    jog: [
      ["$w$ depends on $x,y$", "$x,y$ depend on $u,v$", "Draw dependency tree."],
      ["$\\frac{\\partial w}{\\partial u}$", "Did I trace all paths?", "Sum product of derivatives down paths."]
    ]
  },
  "chapter-14-5": {
    exampleTitle: "Example: Directional Derivative",
    question: "Find directional derivative of $f(x,y)=xe^y$ at $(1,0)$ in direction of $v=(3,4)$.",
    voice: [
      ["\"First, I need the gradient vector $\
abla f$ at the point $(1,0)$.\"", "$\
abla f = \\langle e^y, xe^y \\rangle \\rightarrow \\langle 1, 1 \\rangle$"],
      ["\"Second, I must normalize the direction vector $v$ to a unit vector $u$.\"", "$u = \\frac{\\langle 3,4 \\rangle}{5} = \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$"],
      ["\"Dot the gradient with the unit vector.\"", "$D_u f = \\langle 1, 1 \\rangle \\cdot \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle = \\frac{7}{5}$"]
    ],
    jog: [
      ["Directional Deriv", "Is $v$ a unit vector?", "Must divide $v$ by $|v|$."],
      ["Max rate of increase", "Is it in gradient direction?", "Max magnitude is $|\
abla f|$."]
    ]
  },
  "chapter-14-6": {
    exampleTitle: "Example: Tangent Plane to a Surface",
    question: "Find tangent plane to surface $F(x,y,z) = x^2+y^2+z^2 = 14$ at $(1,2,3)$.",
    voice: [
      ["\"For a level surface $F(x,y,z)=c$, the normal vector to the plane is precisely the gradient of $F$ at the point.\"", "$\
abla F = \\langle 2x, 2y, 2z \\rangle$"],
      ["\"Evaluate $\
abla F$ at $(1,2,3)$.\"", "$n = \\langle 2, 4, 6 \\rangle$"],
      ["\"Use the point-normal plane equation: $n \\cdot (r - r_0) = 0$.\"", "$2(x-1) + 4(y-2) + 6(z-3) = 0$"]
    ],
    jog: [
      ["Tangent Plane", "Do I have $z=f(x,y)$?", "Rewrite as $F(x,y,z)=f(x,y)-z=0$."],
      ["Normal vector", "Is it the gradient?", "$\
abla F(x_0, y_0, z_0)$ is the normal $n$."]
    ]
  },
  "chapter-14-7": {
    exampleTitle: "Example: Finding Local Extrema",
    question: "Find and classify critical points of $f(x,y)=x^2+y^2-2x$.",
    voice: [
      ["\"First, set both partial derivatives to zero simultaneously to find critical points.\"", "$f_x = 2x-2=0 \\implies x=1$ \
 $f_y = 2y=0 \\implies y=0$. Point: $(1,0)$"],
      ["\"Use the Second Derivative Test (discriminant $D$).\"", "$f_{xx}=2, f_{yy}=2, f_{xy}=0$ \
 $D = (2)(2) - 0 = 4 > 0$. $f_{xx}>0 \\implies$ Local Min."]
    ],
    jog: [
      ["$D > 0$ and $f_{xx} > 0$", "Is it a cup up?", "Local Minimum."],
      ["$D > 0$ and $f_{xx} < 0$", "Is it a cup down?", "Local Maximum."],
      ["$D < 0$", "Saddle shape?", "Saddle Point."]
    ]
  },
  "chapter-14-8": {
    exampleTitle: "Example: Lagrange Multiplier Method",
    question: "Minimize $f(x,y)=x^2+y^2$ subject to $x+y=2$.",
    voice: [
      ["\"Set up the Lagrange equation: gradients must be parallel. $\
abla f = \\lambda \
abla g$.\"", "$\\langle 2x, 2y \\rangle = \\lambda \\langle 1, 1 \\rangle$"],
      ["\"We get $2x=\\lambda$, $2y=\\lambda$, so $x=y$. Plug this back into the constraint.\"", "$x+x=2 \\implies x=1, y=1$"],
      ["\"The constrained minimum is just the function value there.\"", "$f(1,1) = 1^2+1^2 = 2$"]
    ],
    jog: [
      ["\"Subject to...\"", "Is it an equality constraint?", "Use $\
abla f = \\lambda \
abla g$."],
      ["System of eqs", "Did I forget the constraint?", "Always include $g(x,y)=c$ to solve."]
    ]
  },
  "chapter-14-9": {
    exampleTitle: "Example: Constrained Variables (Implicit Jacobian)",
    question: "Given $F(x,y,z)=0$, find $(\\partial z / \\partial x)_y$.",
    voice: [
      ["\"When we have an implicit surface and want a partial derivative, we use the negative ratio of partials.\"", "$(\\partial z / \\partial x)_y = -\\frac{F_x}{F_z}$"],
      ["\"The subscript $y$ just means we hold $y$ constant, which matches how $F_x$ treats $y$.\"", "Verify $F_z \
eq 0$"]
    ],
    jog: [
      ["Implicit relationship", "Are we deriving $z$ wrt $x$?", "Use $-F_x / F_z$."],
      ["Subscript notation", "$(\\partial w / \\partial x)_y$", "$y$ is explicitly held constant."]
    ]
  },
  "chapter-15-1": {
    exampleTitle: "Example: Reversing Limits of Integration",
    question: "Reverse the bounds of $\\int_0^1 \\int_x^1 e^{y^2} dy dx$.",
    voice: [
      ["\"I can't integrate $e^{y^2}$ wrt $y$. The given bounds mean: $y$ goes from $x \\to 1$; $x$ goes from $0 \\to 1$.\"", "Draw triangle: Vertices $(0,0), (1,1), (0,1)$."],
      ["\"Reverse order: shoot horizontal arrows. $x$ goes from left ($0$) to right ($y$). $y$ goes $0 \\to 1$.\"", "$\\int_0^1 \\int_0^y e^{y^2} dx dy = \\dots = \\frac{1}{2}(e-1)$"]
    ],
    jog: [
      ["Impossible integral", "Can I switch $dx dy$ to $dy dx$?", "Sketch the region and slice other way."],
      ["Type I Region", "Top/bottom curves?", "$\\int_a^b \\int_{g_1(x)}^{g_2(x)}$"]
    ]
  },
  "chapter-15-2": {
    exampleTitle: "Example: Centroid/Center of Mass",
    question: "Set up integrals for the center of mass $(\\bar{x}, \\bar{y})$ of region $R$.",
    voice: [
      ["\"The total mass $M$ is the double integral of the density over the region.\"", "$M = \\iint_R \\delta(x,y) dA$"],
      ["\"The $x$-coordinate of the COM requires multiplying the density by $x$ (lever arm).\"", "$\\bar{x} = \\frac{1}{M} \\iint_R x \\delta(x,y) dA$"]
    ],
    jog: [
      ["\"Center of mass\"", "Do I need $x$ lever?", "$\\bar{x}$ uses integral of $x \\delta$."],
      ["\"Moment of inertia\"", "Distance squared?", "$I_y$ uses integral of $x^2 \\delta$."]
    ]
  },
  "chapter-15-4": {
    exampleTitle: "Example: Triple Integral Bounds",
    question: "Set up the integral for the volume enclosed by $z = x^2+y^2$ and $z = 4$.",
    voice: [
      ["\"The volume is a triple integral of $1 dV$. Inner bounds for $z$ go from floor (paraboloid) to roof ($4$).\"", "$0 \\le x^2+y^2 \\le z \\le 4$"],
      ["\"The shadow on the $xy$-plane is the intersection $x^2+y^2=4$, a circle. I can use polar components here later.\"", "$V = \\iint_D \\left[ \\int_{x^2+y^2}^4 dz \\right] dA$"]
    ],
    jog: [
      ["Volume", "Is it $\\iiint 1 dV$?", "Yes, bounds determine region."],
      ["Integration order", "Which variable simplifies best?", "Usually $z$ first if bounded by surfaces."]
    ]
  }
};

let content = fs.readFileSync('src/data.ts', 'utf8');

function buildCheatSheet(data) {
  let md = `## Ultimate Exam Room Cheat Sheet

<div class="border border-slate-300 rounded overflow-hidden mb-8 bg-white shadow-sm">
<div class="bg-blue-800 text-white font-bold px-4 py-3 text-lg">${data.exampleTitle}</div>
<div class="p-4">

**Question:** ${data.question}

| Inner voice | What you write |
| :--- | :--- |
`;

  data.voice.forEach(row => {
    md += `| ${row[0]} | ${row[1]} |\n`;
  });

  md += `
</div>
</div>

<div class="border border-slate-700 rounded overflow-hidden mb-8 mt-8 shadow-sm">
<div class="bg-slate-700 text-white font-bold px-4 py-3 text-lg">Quick Memory Jog</div>
<div class="p-4 bg-slate-50">

| If you see $\\dots$ | Ask yourself $\\dots$ | Action |
| :--- | :--- | :--- |
`;

  data.jog.forEach(row => {
    md += `| ${row[0]} | ${row[1]} | ${row[2]} |\n`;
  });

  md += `
</div>
</div>`;
  return md;
}

Object.keys(cheatsheets).forEach(chapId => {
  const cSheet = buildCheatSheet(cheatsheets[chapId]) + "\
\
";
  const startIdx = content.indexOf(`id: "${chapId}"`);
  if (startIdx === -1) {
    console.log("NOT FOUND:", chapId);
    return;
  }
  
  // Find the exact boundaries of the chapter content to restrict replacement
  let endIdx = content.indexOf('id: "chapter-', startIdx + 20);
  if (endIdx === -1) endIdx = content.length;
  
  let chunk = content.substring(startIdx, endIdx);
  
  // Now we need to replace the ENTIRE ## Ultimate Exam Room Cheat Sheet up to ## Chapter Assessment
  const cheatStart = chunk.indexOf('## Ultimate Exam Room Cheat Sheet');
  let cheatEnd = chunk.indexOf('## Chapter Assessment', cheatStart);
  if (cheatEnd === -1) cheatEnd = chunk.indexOf('## Test', cheatStart);
  if (cheatEnd === -1) cheatEnd = chunk.indexOf('## Chapter', cheatStart);
  if (cheatEnd === -1) cheatEnd = chunk.length;
  
  if (cheatStart !== -1) {
    chunk = chunk.substring(0, cheatStart) + cSheet + chunk.substring(cheatEnd);
    content = content.substring(0, startIdx) + chunk + content.substring(endIdx);
    console.log("Replaced for", chapId);
  } else {
    console.log("Cheat sheet section not found in", chapId);
  }
});

fs.writeFileSync('src/data.ts', content, 'utf8');
console.log('Update finished.');
