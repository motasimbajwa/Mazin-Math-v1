const fs = require('fs');
const cheatsheets = {
  "chapter-0": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Evaluate the limit", "Find the derivative", "Compute the integral"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see "Find the limit as $x \\to a$":**
"Okay, my first step is ALWAYS direct substitution. Plug in the number. If I get a real number, I'm done. If I get $0/0$ or $\\infty/\\infty$, I have an indeterminate form and need to use L'Hôpital's Rule or factor. If I get $c/0$, there's a vertical asymptote."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Indeterminate Limit**

**Question:** Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Plug in 0. The top is $\\sin(0) = 0$. The bottom is 0. Form is $0/0$. I will use L'Hôpital's Rule or the known trig limit."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\lim_{x \\to 0} \\frac{3\\cos(3x)}{1}$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Plug in 0 again. $\\cos(0) = 1$. The limit is 3."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= 3(1) = 3$</div>
</div>
</div>

### Quick Memory Jog
<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">If you see ...</th>
        <th class="p-3 border-b">Ask yourself ...</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr>
        <td class="p-3 border-b text-sm font-mono">$0/0$ or $\\infty/\\infty$</td>
        <td class="p-3 border-b text-sm">Can I apply L'Hôpital's?</td>
        <td class="p-3 border-b text-sm">Derive top and bottom separately.</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">Product Rule</td>
        <td class="p-3 border-b text-sm">Is it $(uv)'$?</td>
        <td class="p-3 border-b text-sm">$u'v + uv'$</td>
      </tr>
      <tr>
        <td class="p-3 border-b text-sm font-mono">Chain Rule</td>
        <td class="p-3 border-b text-sm">Is there an inside function?</td>
        <td class="p-3 border-b text-sm">$f'(g(x))g'(x)$</td>
      </tr>
    </tbody>
  </table>
</div>`,

  "chapter-14-1": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Find the domain", "range", "level curve", "sketch the level surface"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see "Find the domain":**
"Okay, domain means all $(x, y)$ such that this expression evaluates to a real number. I need to scan the equation for three mathematical hazards:
1. Is there a square root? The inside MUST be $\\ge 0$.
2. Is there a logarithm? The inside MUST be $> 0$.
3. Is there a denominator? That CANNOT be zero.
If I see $\\sin^{-1}$ or $\\cos^{-1}$, the argument must be between –1 and 1. I'll write each condition as an inequality, then combine them to see the physical shape."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Domain with square root and denominator**

**Question:** Find the domain of $f(x, y) = \\frac{\\sqrt{x - y}}{\\ln(4 - x^2 - y^2)}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"I see a square root on top $\\to$ inside $\\ge 0 \\to x - y \\ge 0 \\to y \\le x$. That's a half-plane."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y \\le x$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"I see a logarithm in the denominator $\\to$ inside of log must be $> 0 \\to 4 - x^2 - y^2 > 0 \\to x^2 + y^2 < 4$. Also, the denominator itself cannot be zero $\\to \\ln \\ne 0 \\to$ the inside cannot be 1. So, $4 - x^2 - y^2 \\ne 1 \\to x^2 + y^2 \\ne 3$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$x^2 + y^2 < 4$ and $x^2 + y^2 \\ne 3$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Combine: The region is inside the open disk of radius 2, but I must remove the circle of radius $\\sqrt{3}$, and I only shade the part where $y \\le x$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Domain = $\\{(x,y) \\mid x^2 + y^2 < 4, x^2 + y^2 \\ne 3, y \\le x\\}$</div>
</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Level curve through a point**

**Question:** Find the level curve of $f(x, y) = \\frac{x^2}{9} + \\frac{y^2}{4}$ that passes through $(3, 2)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Level curve means locking the output to a constant, setting $f(x, y) = c$. To find $c$, I just plug the given coordinate into $f$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$c = f(3, 2) = \\frac{3^2}{9} + \\frac{2^2}{4} = 1 + 1 = 2$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"So the level curve equation is $\\frac{x^2}{9} + \\frac{y^2}{4} = 2$. I can multiply everything by 36 to clear the fractions and get a standard conic form."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$4x^2 + 9y^2 = 72$ (ellipse)</div>
</div>
</div>

### Quick Memory Jog
<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">If you see ...</th>
        <th class="p-3 border-b">Ask yourself ...</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr>
        <td class="p-3 border-b text-sm font-mono">$\\sqrt{\\dots}$</td>
        <td class="p-3 border-b text-sm">Inside $\\ge 0$?</td>
        <td class="p-3 border-b text-sm">Write inequality</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">$\\ln(\\dots)$</td>
        <td class="p-3 border-b text-sm">Inside $> 0$?</td>
        <td class="p-3 border-b text-sm">Write inequality</td>
      </tr>
      <tr>
        <td class="p-3 border-b text-sm font-mono">Denominator</td>
        <td class="p-3 border-b text-sm">$= 0$?</td>
        <td class="p-3 border-b text-sm">Exclude those points</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">"Level curve"</td>
        <td class="p-3 border-b text-sm">Set $f(x, y) = c$</td>
        <td class="p-3 border-b text-sm">Find $c$ from point if given</td>
      </tr>
    </tbody>
  </table>
</div>`,

  "chapter-14-2": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Find the limit", "does the limit exist?", "continuous at"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see a limit at $(0, 0)$:**
"I substitute $(0, 0)$ first. If I get a number, that's the limit. If I get $0/0$, I have work to do.
- I look at the denominator. If I see exactly $x^2+y^2$, I immediately try polar coordinates: $x = r\\cos\\theta, y = r\\sin\\theta$. Then the limit becomes as $r \\to 0$.
- If polar gives me something like $r \\times (\\text{bounded function})$, then the limit = 0.
- If the degrees in the denominator are mixed (like $x^4 + y^2$), straight lines will lie to me. I must use the two-path test and test a parabola like $y = x^2$ to force the powers to match. If two paths give different numbers, the limit does not exist."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Two-path test (Mixed Powers – Limit does not exist)**

**Question:** Does $\\lim_{(x,y) \\to (0,0)} \\frac{x^2 y}{x^4 + y^2}$ exist?

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Substituting gives 0/0. The denominator has mixed powers. I'll try paths. First path: x-axis ($y = 0$)."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Path 1 ($y = 0$): $f(x, 0) = \\frac{0}{x^4} = 0 \\to \\text{limit } 0$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Second path: I need to make the powers match so they cancel. Let $y = x^2$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Path 2 ($y = x^2$): $f(x, x^2) = \\frac{x^2(x^2)}{x^4+(x^2)^2} = \\frac{x^4}{2x^4} = \\frac{1}{2} \\to \\text{limit } \\frac{1}{2}$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"$0 \\ne 1/2$. The limit changes depending on how you walk toward the origin."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Limit does not exist.</div>
</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Polar coordinates (Limit exists)**

**Question:** Find $\\lim_{(x,y) \\to (0,0)} \\frac{x^3 + y^3}{x^2 + y^2}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Denominator is exactly $x^2 + y^2$, so I use polar coordinates. The numerator has a higher degree, so it should shrink to 0."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Let $x = r\\cos\\theta, y = r\\sin\\theta$.</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Substitute and simplify. The denominator becomes $r^2$. Cosine and sine are trapped between -1 and 1. Squeeze Theorem!"</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f = \\frac{r^3(\\cos^3\\theta + \\sin^3\\theta)}{r^2} = r(\\cos^3\\theta + \\sin^3\\theta) \\to \\text{limit = } 0$</div>
</div>
</div>

### Quick Memory Jog
<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">Situation</th>
        <th class="p-3 border-b">Inner question</th>
        <th class="p-3 border-b">Action</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr>
        <td class="p-3 border-b text-sm">Sub gives a number</td>
        <td class="p-3 border-b text-sm">Is function continuous?</td>
        <td class="p-3 border-b text-sm">That's the limit</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border-b text-sm">Sub gives 0/0</td>
        <td class="p-3 border-b text-sm">Does denominator have $x^2+y^2$?</td>
        <td class="p-3 border-b text-sm">Try polar coordinates</td>
      </tr>
      <tr>
        <td class="p-3 border-b text-sm">Denominator has $x^4+y^2$</td>
        <td class="p-3 border-b text-sm">Will lines lie to me?</td>
        <td class="p-3 border-b text-sm">Yes. Use parabola $y = x^2$</td>
      </tr>
    </tbody>
  </table>
</div>`,

  "chapter-14-3": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Find $f_x$", "find $f_y$", "verify $f_{xy} = f_{yx}$", "implicit differentiation"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see "find $f_x$":**
"$f_x$ means I differentiate with respect to $x$. I treat $y$ as a completely frozen constant (like the number 5). I scan the term. If it has $x$'s multiplying other $x$'s, I use the product rule. If not, I just differentiate normally."

**When you see an equation NOT solved for $z$:**
"This defines $z$ implicitly. I cannot isolate it. To find $\\partial z/\\partial x$, I differentiate the entire equation with respect to $x$. $y$ is a constant. But $z$ is a function of $x$! Every time I differentiate a $z$-term, I MUST multiply by $\\partial z/\\partial x$ (Chain Rule). Then I factor it out and solve."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: First partial derivatives (Product Rule)**

**Question:** Find $f_x$ and $f_y$ for $f(x, y) = e^{xy} \\ln y$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"For $f_x$, $y$ is constant. $\\ln y$ is just a constant multiplier attached to the front. Derivative of $e^{xy}$ w.r.t $x$ is $y e^{xy}$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f_x = (\\ln y) \\cdot y e^{xy} = y e^{xy} \\ln y$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"For $f_y$, $x$ is constant. But I have $y$ in the exponent AND $y$ in the log. Two $y$'s means Product Rule: $u'v + uv'$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f_y = (x e^{xy})(\\ln y) + (e^{xy})(\\frac{1}{y}) = x e^{xy} \\ln y + \\frac{e^{xy}}{y}$</div>
</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Implicit partial derivative**

**Question:** If $xyz + \\ln z = x^2 + y^2$, find $\\frac{\\partial z}{\\partial y}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Differentiate both sides with respect to $y$. $x$ is constant. $z$ is a function of $y$. $xyz$ requires product rule on the $yz$ part."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\frac{\\partial}{\\partial y}(xyz) + \\frac{\\partial}{\\partial y}(\\ln z) = \\frac{\\partial}{\\partial y}(x^2 + y^2)$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"First term: product rule. Second term: chain rule. Right side: $x^2$ is 0."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$xz + xy(\\frac{\\partial z}{\\partial y}) + \\frac{1}{z}(\\frac{\\partial z}{\\partial y}) = 2y$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Group all $z_y$ terms on one side and factor it out. Divide to isolate, multiply top/bottom by $z$ to clean."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$z_y(xy + \\frac{1}{z}) = 2y - xz \\to \\frac{\\partial z}{\\partial y} = \\frac{z(2y - xz)}{xyz + 1}$</div>
</div>
</div>

### Quick Memory Jog
<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">You see</th>
        <th class="p-3 border-b">Inner voice</th>
        <th class="p-3 border-b">Formula</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr>
        <td class="p-3 border-b text-sm font-mono">$f_x$</td>
        <td class="p-3 border-b text-sm">"treat $y$ as constant number"</td>
        <td class="p-3 border-b text-sm">$\\frac{\\partial f}{\\partial x}$</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border-b text-sm font-mono">$f_{xy}$</td>
        <td class="p-3 border-b text-sm">"first $x$, then $y$"</td>
        <td class="p-3 border-b text-sm">$(f_x)_y$</td>
      </tr>
      <tr>
        <td class="p-3 border-b text-sm font-mono">Implicit equation</td>
        <td class="p-3 border-b text-sm">"differentiate both sides, solve"</td>
        <td class="p-3 border-b text-sm">$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$</td>
      </tr>
    </tbody>
  </table>
</div>`,

  "chapter-14-4": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Find $dw/dt$", "find $\\partial w/\\partial r$", "implicit differentiation (shortcut)"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**The Tree Diagram Master Rule:**
"I will NEVER try to memorize the Chain Rule formulas. I will draw the circuit board (Tree Diagram) every single time.
- Top node = dependent variable ($w$).
- Middle nodes = intermediate variables ($x, y, z$).
- Bottom nodes = independent variables ($t$, or $r, s$).
To find a derivative, I trace every path from the top to the desired bottom variable. I multiply down a single branch, and I add the branches together. That is the only rule."

**When you see $F(x, y) = 0$ and "find $dy/dx$":**
"I can skip long-form implicit differentiation. I define the whole left side as $F$, and use the magic shortcut: $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Chain rule (One independent variable)**

**Question:** Find $\\frac{dw}{dt}$ if $w = x^2 + y^2$, $x = \\cos t + \\sin t$, $y = \\cos t - \\sin t$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Tree diagram: $w$ connects to $x$ and $y$. $x$ and $y$ connect to $t$. Two paths. I multiply down and add."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\frac{dw}{dt} = \\frac{\\partial w}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial w}{\\partial y}\\frac{dy}{dt}$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Calculate the pieces: partials for $w$, ordinary derivatives for $x$ and $y$. Assemble."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\frac{dw}{dt} = 2x(-\\sin t + \\cos t) + 2y(-\\sin t - \\cos t)$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Substitute $x$ and $y$ expressions in, expand difference of squares and simplify."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= 2(\\cos t + \\sin t)(\\cos t - \\sin t) + 2(\\cos t - \\sin t)(-\\sin t - \\cos t) = 0$</div>
</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Implicit differentiation shortcut (2D)**

**Question:** Find $dy/dx$ at $(1, 1)$ if $x^3 - 2y^2 + xy = 0$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Let $F(x, y) = x^3 - 2y^2 + xy$. I will use the shortcut formula. DO NOT FORGET THE NEGATIVE SIGN."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\frac{dy}{dx} = -\\frac{F_x}{F_y} = -\\frac{3x^2+y}{-4y+x} = \\frac{3x^2+y}{4y-x}$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Assemble and plug in $(1, 1)$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\frac{dy}{dx}\\Big\\vert_{(1,1)} = \\frac{3(1)^2+1}{4(1)-1} = \\frac{4}{3}$</div>
</div>
</div>`,

  "chapter-14-5": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "derivative ... in the direction of vector $\\mathbf{v}$", "most rapid increase", "tangent line to the level curve"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see "derivative ... in the direction of $\\mathbf{v}$":**
"TRAP WARNING. I cannot just dot the gradient with $\\mathbf{v}$. I MUST turn $\\mathbf{v}$ into a unit vector first. So I compute $|\\mathbf{v}|$ and divide to get $\\mathbf{u} = \\mathbf{v}/|\\mathbf{v}|$. Then I find the gradient $\\nabla f = \\langle f_x, f_y \\rangle$ at the point. The answer is the dot product: $D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u}$."

**When you see "most rapidly":**
"The gradient vector IS the compass pointing to the steepest ascent. Direction of max increase = $\\nabla f$. Rate of max increase = $|\\nabla f|$. Direction of max decrease = $-\\nabla f$."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Directional derivative (2D)**

**Question:** Find derivative of $f(x, y) = 2xy - 3y^2$ at $P_0(5, 5)$ in direction of $\\mathbf{A} = 4\\mathbf{i} + 3\\mathbf{j}$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Normalize A. It's a 3-4-5 triangle, so length is 5."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\mathbf{u} = \\langle \\frac{4}{5}, \\frac{3}{5} \\rangle$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Find the Gradient at (5,5)."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f_x = 2y \\to 10, f_y = 2x - 6y \\to -20 \\to \\nabla f = 10\\mathbf{i} - 20\\mathbf{j}$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Dot product of Gradient and Unit Vector."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$D_{\\mathbf{u}} f = 10(\\frac{4}{5}) + (-20)(\\frac{3}{5}) = 8 - 12 = -4$</div>
</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 2: Direction of most rapid increase**

**Question:** For $f(x, y) = x^2 y + e^{xy} \\sin y$ at $(1, 0)$, find direction of most rapid increase and the rate.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Gradient equals max direction. Rate is the magnitude."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f_x = 2xy + y e^{xy} \\sin y \\to 0$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Compute fy"</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f_y = x^2 + e^{xy}(x \\sin y + \\cos y) \\to 2$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Build vector and find magnitude"</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\nabla f = 2\\mathbf{j}$. Rate = $|\\nabla f| = 2$.</div>
</div>
</div>`,

  "chapter-14-6": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "tangent plane", "normal line", "linearization", "estimate"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see "tangent plane to a surface":**
"If it's $z = f(x, y)$, I move $z$ over to make it a level surface $F(x, y, z) = f(x, y) - z = 0$. The 3D gradient $\\nabla F$ evaluated at the point is my normal vector $\\langle A, B, C \\rangle$ for the plane equation."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Tangent Plane to a Surface**

**Question:** Find tangent plane to $z = x^2 + y^2$ at $(1, 1, 2)$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Bring z over to create F(x,y,z)=0."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$F = x^2 + y^2 - z = 0$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Gradient of F gives the normal vector."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\nabla F = \\langle 2x, 2y, -1 \\rangle \\to \\langle 2, 2, -1 \\rangle$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Plug into scalar plane equation."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Plane: $2(x - 1) + 2(y - 1) - 1(z - 2) = 0$</div>
</div>
</div>`,

  "chapter-14-7": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "local maximum", "absolute maximum", "saddle point", "critical points"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see "local maxima, minima, saddle points":**
"This is a strict mechanical flowchart.
1. **Step 1:** Critical points – solve $f_x = 0$ and $f_y = 0$.
2. **Step 2:** Compute second partials and the discriminant $D = f_{xx}f_{yy} - (f_{xy})^2$.
3. **Step 3:** Classify. If $D > 0$ and $f_{xx} > 0$ (holds water) $\\to$ local min. If $D > 0$ and $f_{xx} < 0$ (sheds water) $\\to$ local max. If $D < 0 \\to$ saddle point."

**When you see "absolute max/min on a closed region":**
"I cannot just use $D$ here. I must physically test points. Check critical points inside the boundary. Parametrize each edge and check 1D critical points. Check the sharp corners! Compare all values; highest wins, lowest loses."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Saddle point identification**

**Question:** Find local extrema and saddle points of $f(x, y) = x^3 - y^3 - 2xy + 6$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Set partials to 0. Isolate and substitute."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$f_x = 3x^2 - 2y = 0 \\to y = 1.5x^2$. Sub into $f_y = -3y^2 - 2x = 0 \\to 27x^4 + 8x = 0 \\to x = 0$ or $x = -2/3$.</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Test $(0,0)$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$D = 0 - 4 = -4 < 0 \\to$ Saddle point.</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Test $(-2/3, 2/3)$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$D = 16 - 4 = 12 > 0, f_{xx} = -4 < 0 \\to$ Local maximum.</div>
</div>
</div>`,

  "chapter-14-8": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "subject to the constraint", "maximum/minimum on the curve", "closest point"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see one constraint $g(x, y) = 0$:**
"I am physically trapped on a path. To find the peak, the gradient of the terrain MUST perfectly align with the gradient of my path. I set up: $\\nabla f = \\lambda\\nabla g$ AND $g(x, y) = 0$. I solve for $x, y,$ and $\\lambda$ by equating the components. Then I plug the points into $f$."

**When you see 'Closest point':**
"Minimize the distance formula. But wait—never minimize the square root! Minimize the distance squared: $f = x^2 + y^2 + z^2$. The math is infinitely cleaner."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: One constraint (Ellipse)**

**Question:** Find max and min of $f(x, y) = xy$ on the ellipse $x^2 + 2y^2 = 1$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Constraint $g(x, y) = x^2 + 2y^2 - 1 = 0$. Set up $\\nabla f = \\lambda\\nabla g$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$y = \\lambda(2x), \\> x = \\lambda(4y)$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Isolate $\\lambda$ in first eq, substitute into second."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\lambda = \\frac{y}{2x} \\to x = 4(\\frac{y}{2x})y \\to x^2 = 2y^2$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Plug relation back into constraint to find points."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$2y^2 + 2y^2 = 1 \\to y = \\pm 1/2, x = \\pm 1/\\sqrt{2}$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Evaluate objective $f=xy$ at these points."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Max: $\\frac{1}{2\\sqrt{2}}$. Min: $-\\frac{1}{2\\sqrt{2}}$.</div>
</div>
</div>`,

  "chapter-14-9": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Partial derivative with dependent variables", "Constrained partials", "Find $(\\partial w/\\partial x)_y$"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see a subscript notation like $(\\frac{\\partial w}{\\partial x})_y$:**
"The subscript $y$ tells me EXACTLY what the independent variables are. In this case, $x$ and $y$. Everything else (like $z$) is dependent and must be eliminated. I need to use the constraint equations to express $w$ PURELY in terms of $x$ and $y$ before I differentiate. If substitution is too hard, I use implicit differentiation via the chain rule."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Direct Substitution**

**Question:** Let $w = x^2 + y^2 + z^2$ with constraint $z = x^2+y^2$. Find $(\\frac{\\partial w}{\\partial x})_y$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Independent vars are $x$ and $y$. I must kill $z$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$w = x^2 + y^2 + (x^2+y^2)^2$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Differentiate w.r.t $x$, treating $y$ as a fixed constant."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$(\\frac{\\partial w}{\\partial x})_y = 2x + 2(x^2+y^2)(2x) = 2x + 4x^3 + 4xy^2$</div>
</div>
</div>`,

  "chapter-15-1": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Evaluate $\\iint_R f dA$", "Find the volume", "Reverse the order"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see a double integral over a rectangle:**
"Rectangle means constant limits. Fubini says I can integrate in either order. I'll pick the order that looks easier—no sketch needed!"

**When you see an integral you can't integrate (like $\\int \\sin(y^2) dy$):**
"TRAP! I cannot integrate this. I must reverse the order of integration. Sketch the region, then swap $dx \\leftrightarrow dy$."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Reversing the order of integration (Classic Trap!)**

**Question:** Evaluate $\\int_0^2 \\int_{x/2}^1 x \\sin(y^3) dy dx$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"I see $\\sin(y^3)$—I cannot integrate this with respect to $y$! Reverse order."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">Region: $x: 0 \\to 2$, $y: x/2 \\to 1 \\implies x = 2y$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Sketch: $y$ goes 0 to 1, for fixed $y$, $x$ goes 0 to $2y$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\int_0^1 \\int_0^{2y} x \\sin(y^3) dx dy$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Inner integral: $x$ integrates easily."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\int_0^1 [\\frac{x^2}{2}]_0^{2y} \\sin(y^3) dy = \\int_0^1 2y^2 \\sin(y^3) dy$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Outer integral: substitute $u = y^3$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$= -[\\frac{2}{3} \\cos(y^3)]_0^1 = \\frac{2}{3}(1 - \\cos 1)$</div>
</div>
</div>`,

  "chapter-15-2": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Area of region", "Center of mass", "Centroid", "Moment of inertia", "Average value"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see "Center of mass" or "Centroid":**
"Mass first! $M = \\iint \\delta dA$. Then moments: $M_y = \\iint x\\delta dA$, $M_x = \\iint y\\delta dA$. Then $\\bar{x} = M_y/M$, $\\bar{y} = M_x/M$. If density is constant (centroid), $\\delta = 1$."

**When you see "Moment of inertia about x-axis":**
"$I_x = \\iint y^2 \\delta dA$. Square the distance from the axis!"
</div>

### Quick Memory Jog
<div class="w-full overflow-x-auto shadow-sm rounded-lg mb-6">
  <table class="w-full text-left border-collapse min-w-[500px]">
    <thead>
      <tr class="bg-indigo-900 text-white">
        <th class="p-3 border-b">You See</th>
        <th class="p-3 border-b">Formula</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr>
        <td class="p-3 border-b text-sm">Area</td>
        <td class="p-3 border-b text-sm font-mono">$A = \\iint_R 1 dA$</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border-b text-sm">Mass</td>
        <td class="p-3 border-b text-sm font-mono">$M = \\iint_R \\delta(x,y) dA$</td>
      </tr>
      <tr>
        <td class="p-3 border-b text-sm">Center of mass</td>
        <td class="p-3 border-b text-sm font-mono">$\\bar{x} = M_y/M, \\bar{y} = M_x/M$</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border-b text-sm">Average value</td>
        <td class="p-3 border-b text-sm font-mono">$(1/\\text{Area}) \\iint_R f dA$</td>
      </tr>
    </tbody>
  </table>
</div>`,

"chapter-15-4": `## Ultimate Exam Room Cheat Sheet

**Trigger words:** "Triple integral", "Volume of solid", "Integrate over D"

### Inner Voice Diagnostic
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
**When you see "Find the volume of a 3D solid $D$":**
"Volume equals $\\iiint_D 1 dV$. Set up the bounds. Z-bounds are functions of $x$ and $y$ (roof and floor). Then project the solid onto the $xy$-plane to find the 2D region $R$ for the outer two integrals."
</div>

### Worked Examples
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto">
**Example 1: Volume between planes**

**Question:** Find volume of the tetrahedron bounded by $x=0$, $y=0$, $z=0$, and $x+y+z=1$.

<div class="grid grid-cols-2 gap-4 mt-2 border-t border-slate-200 pt-2 min-w-[600px]">
  <div><strong>Inner voice (what you think)</strong></div>
  <div><strong>What you write</strong></div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Floor is $z=0$, roof is $z = 1 - x - y$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\int_0^{1-x-y} 1 dz = 1 - x - y$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Project onto xy-plane. It's the triangle $x+y=1$, so $y$ goes $0 \\to 1-x$."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\int_0^{1-x} (1-x-y) dy = [\\dots] = \\frac{(1-x)^2}{2}$</div>
  <div class="col-span-2 border-t border-slate-100"></div>
  <div class="text-sm text-slate-700">"Outer integral is $x$ from 0 to 1."</div>
  <div class="text-sm font-mono bg-slate-100 p-1 rounded whitespace-normal">$\\int_0^1 \\frac{(1-x)^2}{2} dx = \\frac{1}{6}$</div>
</div>
</div>`
};

const txt = fs.readFileSync('src/data.ts', 'utf8');
console.log("length of txt:", txt.length);
console.log("direct check:", txt.indexOf('id: "chapter-0"'));
let newTxt = txt;

Object.keys(cheatsheets).forEach(chapId => {
  const cSheet = `\n\n${cheatsheets[chapId]}\n\n`;
  const startIdx = newTxt.indexOf(`id: "${chapId}"`);
  if (startIdx === -1) {
    console.log("Not found:", JSON.stringify(chapId));
    return;
  }
  
  const assessmentPattern = /## Chapter Assessment/;
  const cheatPattern1 = /## Cheat Sheet(?: \/ Summary Table)?/g;
  const cheatPattern2 = /## Ultimate Exam Room Cheat Sheet/;
  const cheatPattern3 = /## Cheat Sheet/;
  
  let endIdx = newTxt.indexOf('id: "chapter-', startIdx + 20);
  if (endIdx === -1) endIdx = newTxt.length;
  if (endIdx === -1) endIdx = newTxt.indexOf('id: "final-cheat-sheet"');
  if (endIdx === -1) endIdx = newTxt.length;
  
  let chapterChunk = newTxt.substring(startIdx, endIdx);
  
  let newChapterChunk = chapterChunk;
  
  const astMatch = newChapterChunk.match(assessmentPattern);
  const ctMatch = newChapterChunk.match(cheatPattern1) || newChapterChunk.match(cheatPattern2) || newChapterChunk.match(cheatPattern3);
  
  if (astMatch) {
    const astIndex = astMatch.index;
    if (ctMatch && ctMatch.index < astIndex) {
      // Remove everything from cheat sheet to assessment
      newChapterChunk = newChapterChunk.substring(0, ctMatch.index) + cSheet + newChapterChunk.substring(astIndex);
    } else {
      // Just insert before assessment
      newChapterChunk = newChapterChunk.substring(0, astIndex) + cSheet + newChapterChunk.substring(astIndex);
    }
  } else {
    // Just append
    newChapterChunk += cSheet;
  }
  
  // Now replace it in the full string
  newTxt = newTxt.substring(0, startIdx) + newChapterChunk + newTxt.substring(endIdx);
});

fs.writeFileSync('src/data.ts', newTxt, 'utf8');
console.log("Done");
