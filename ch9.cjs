const { buildChapter } = require('./builder.cjs');

const ch9 = buildChapter({
  num: 9,
  title: "Related Rates",
  intro: `We enter a realm where time ($t$) is the great invisible conductor. In previous chapters, $y$ depended strictly on $x$. But what if both $x$ and $y$ are shrinking or growing as time progresses? 
If you blow air into a spherical balloon, the volume is expanding, but simultaneously the radius is expanding. Their rates of expansion are mechanically linked. By using the chain rule to implicitly differentiate geometric equations with respect to time ($t$), we can establish ratios between multiple moving velocities. These are called **Related Rates**.`,
  eli5: `**The Ladder Sliding Down a Wall:**
Imagine a ladder leaning against a wall. The bottom of the ladder is slipping exactly 1 foot per second outwards across the icy floor. Because the ladder isn't stretching or shrinking, the top of the ladder is forced to slide down the wall. Is the top sliding down at exactly 1 foot per second? NO! The speed of the top depends on the angle. Even though the ladder is stiff, the vertical speed and horizontal speed are locked in a mathematical dance controlled by the Pythagorean theorem.`,
  glossary: {
    "Related Rates": "Problems calculating the rate of change of one quantity using the known rate of change of another related quantity.",
    "Implicit Time Differentiation": "Taking $\\frac{d}{dt}$ of an equation, causing EVERY spatial variable ($x, y, r, V$) to sprout a derivative flag (e.g., $dx/dt$).",
    "Static Geometry": "Formulas like $A = \\pi r^2$ or $x^2 + y^2 = L^2$ that link the physical dimensions."
  },
  whyEE: `Imagine a parallel plate capacitor. If you physically start pulling the metal plates apart at a velocity of $0.1$ cm/sec, the capacitance $C$ decreases over time, which simultaneously causes the voltage $V$ to fluctuate over time. Finding the exact resulting fluctuation $\\frac{dV}{dt}$ based on the physical velocity $\\frac{dx}{dt}$ requires perfectly linking electrical laws with geometric related rates.`,
  formal: `**The Fundamental Methodology:**
You apply the $\\frac{d}{dt}$ operator to every term.
For $x^2 + y^2 = 25$:
$$ \\frac{d}{dt} (x^2 + y^2) = \\frac{d}{dt}(25) $$
$$ 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 $$
Unlike Chapter 8 where $x$ derived normally, here $x$ ALSO pops out a $dx/dt$ flag, because EVERYTHING is subject to the invisible variable $t$.`,
  method: `1. **Draw a Picture:** Label the moving parts with variable letters ($x, y, r, h, \\theta$). Label the stationary, unchanging parts with their hard numbers.
2. **Translate to Algebra:** Write down what you KNOW (e.g. $dx/dt = 5$) and what you WANT TO FIND (e.g. $dy/dt$).
3. **Draft the Master Equation:** Connect the variables with geometry (Pythagorean theorem, Volume, Area, Trig functions).
4. **Differentiate implicitly with respect to $t$:** Pop out $d(\\text{var})/dt$ for every variable.
5. **Substitute:** Plug in your freeze-frame numbers and known rates.
6. **Solve:** Isolate the target rate!`,
  flowchart: `
<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Start: Read word problem]
             |
             v
+-------------------------------+
| Find the geometric link (eq)  |
| e.g., Area, Volume, Triangles |
+-------------------------------+
             |
             v
+-------------------------------+
| Differentiate EVERYTHING      |
| with respect to time (d/dt)   |
+-------------------------------+
             |
             v
+-------------------------------+
| Plug in SNAPSHOT values       |
| and isolating the unknown rate|
+-------------------------------+
</div>
`,
  triggers: [
    { word: "Increasing / decreasing at a rate", action: "Write down the translation: $d(\\text{var})/dt = \\text{value}$." },
    { word: "How fast is...", action: "You are looking for the derivative of that variable." },
    { word: "Sliding ladder / moving ships", action: "Draft a right triangle, use Pythagoras $x^2+y^2=s^2$." }
  ],
  examples: [
    { title: "The Expanding Circle", question: "A ripple's radius increases at 2 in/s. How fast is the area growing when radius is 10 in?", steps: [
      { think: "Geometric link: Area of circle.", write: "$A = \\pi r^2$" },
      { think: "Derive with respect to $t$.", write: "$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$" },
      { think: "Plug in the snapshot $r=10$ and known rate $dr/dt=2$.", write: "$\\frac{dA}{dt} = 2\\pi (10) (2) = 40\\pi \\text{ sq in/s}$" }
    ]},
    { title: "The Sliding Ladder", question: "A 10ft ladder slides down. Top descends 1ft/s. How fast is the bottom sliding AWAY when bottom is 6ft from the wall?", steps: [
      { think: "Pythagorean link. The ladder is permanently 10.", write: "$x^2 + y^2 = 100$" },
      { think: "Derive.", write: "$2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$" },
      { think: "Snapshot: $x=6$. Find $y$ using $6^2+y^2=100$. So $y=8$. Top descents so $dy/dt = -1$.", write: "$2(6)\\frac{dx}{dt} + 2(8)(-1) = 0$" },
      { think: "Solve for $dx/dt$.", write: "$12\\frac{dx}{dt} = 16 \\implies \\frac{dx}{dt} = 1.33 \\text{ ft/s}$" }
    ]},
    { title: "Blowing up a Balloon", question: "Volume of a sphere grows at 100 cc/s. Find rate of change of radius when $r=5$.", steps: [
      { think: "Volume of sphere.", write: "$V = \\frac{4}{3}\\pi r^3$" },
      { think: "Derive w.r.t $t$.", write: "$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$" },
      { think: "Plug in $dV/dt = 100$, $r=5$.", write: "$100 = 4\\pi(25) \\frac{dr}{dt}$" },
      { think: "Solve.", write: "$\\frac{dr}{dt} = \\frac{100}{100\\pi} = \\frac{1}{\\pi} \\text{ cm/s}$" }
    ]},
    { title: "Two Cars Diverging", question: "Car A goes West at 40mph. Car B goes North at 30mph. Rates of separation when A is 4 miles and B is 3 miles from origin?", steps: [
      { think: "Distance between them $z^2 = x^2 + y^2$.", write: "$2z \\frac{dz}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$" },
      { think: "Snapshot: $x=4$, $y=3 \\implies z=5$. Rates $x'=40, y'=30$.", write: "$2(5)z' = 2(4)(40) + 2(3)(30)$" },
      { think: "Algebra.", write: "$10z' = 320 + 180 = 500 \\implies z' = 50 \\text{ mph}$" }
    ]},
    { title: "Cone Water Tank", question: "Water drains from a conical tank. Volume $V = \\frac{1}{3}\\pi r^2 h$. $r/h$ ratio is $1/2$. Find $dV/dt$ if $dh/dt = -1$, and $h=4$.", steps: [
      { think: "Too many variables. Substitute $r$ away. $r = h/2$.", write: "$V = \\frac{1}{3}\\pi (h/2)^2 h = \\frac{\\pi}{12} h^3$" },
      { think: "Derive.", write: "$\\frac{dV}{dt} = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}$" },
      { think: "Plug in.", write: "$\\frac{dV}{dt} = \\frac{\\pi}{4}(16)(-1) = -4\\pi$" }
    ]},
    { title: "Shadow Length", question: "A 6ft man walks away from a 15ft lamppost at 5ft/s. Rate of shadow tip moving?", steps: [
      { think: "Similar triangles. Let $x$ be man's position, $y$ be shadow tip. $\\frac{y}{15} = \\frac{y-x}{6}$.", write: "$6y = 15y - 15x \\implies 15x = 9y$" },
      { think: "Derive.", write: "$15\\frac{dx}{dt} = 9\\frac{dy}{dt}$" },
      { think: "Plug in man's speed $dx/dt = 5$.", write: "$15(5) = 9y' \\implies y' = \\frac{75}{9} = 8.33 \\text{ ft/s}$" }
    ]},
    { title: "Melting Ice Cube", question: "A cube melts, volume drops 2 in³/min. Rate of side $s$ shrinking when $s=3$?", steps: [
      { think: "Volume of cube.", write: "$V = s^3$" },
      { think: "Derive.", write: "$V' = 3s^2 s'$" },
      { think: "Plug in values. $V'$ is negative because it's melting.", write: "$-2 = 3(9) s' \\implies s' = \\frac{-2}{27}$" }
    ]},
    { title: "Electrical Resistance", question: "Resistors $R_1, R_2$ in parallel: $1/R = 1/R_1 + 1/R_2$. Find $dR/dt$.", steps: [
      { think: "Use negative exponents! $R^{-1} = R_1^{-1} + R_2^{-1}$. Derive.", write: "$-R^{-2} R' = -R_1^{-2} R_1' - R_2^{-2} R_2'$" },
      { think: "Multiply by $-1$.", write: "$\\frac{1}{R^2}\\frac{dR}{dt} = \\frac{1}{R_1^2}R_1' + \\frac{1}{R_2^2}R_2'$" }
    ]},
    { title: "The Winch", question: "A boat is pulled by a winch 10ft above dock. Rope reeled at 2ft/s. Speed of boat when rope is 26ft?", steps: [
      { think: "Pythagoras with stationary vertical leg 10. $x^2 + 10^2 = z^2$.", write: "$2x x' = 2z z'$" },
      { think: "Snapshot: $z=26$, $z'=-2$. Find $x$: $x^2+100=676 \\implies x=24$.", write: "$(24)x' = (26)(-2)$" },
      { think: "Solve.", write: "$x' = \\frac{-52}{24} = -2.17\\dots$" }
    ]},
    { title: "Cylindrical Tank radius", question: "Water in cylinder ($V = \\pi r^2 h$). If $r=10$ is constant, and water fills at rate $5$, find $dh/dt$.", steps: [
      { think: "Since $r$ is constant, DONT derive it as a variable! Plug $r$ in first.", write: "$V = 100\\pi h$" },
      { think: "Derive.", write: "$V' = 100\\pi h'$" },
      { think: "Solve.", write: "$5 = 100\\pi h' \\implies h' = \\frac{5}{100\\pi}$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **Crucial Snap-Judgements Checklist:**
  1. If a quantity is literally shrinking, its derivative rate MUST carry a negative sign $(-)$.
  2. If a part of the geometry NEVER changes (like ladder length), plug its number in BEFORE taking the derivative!
  3. If a part DOES change, NEVER plug its snapshot number in until AFTER taking the derivative.
</div>
`,
  traps: [
    { wrong: "Plug in the snapshot values first, then take the derivative.", correct: "Take the derivative while everything is a variable, plug in snapshot numbers exclusively at the end.", why: "If you plug in early, you turn moving variables into dead constants, annihilating the derivative." },
    { wrong: "Forgetting the chain rule flag (e.g. $s^2 \\to 2s$)", correct: "Everything sprouts a $ds/dt$ tag.", why: "Because time $t$ is the independent variable, not the spatial axes." }
  ],
  assessment: [
    "Write the time derivative equation for Area of a circle.",
    "If $x^2 + y^2 = 25$, write the implicit time derivative expression.",
    "True or False: If a dimension is fixed, you plug its value in BEFORE differentiating.",
    "Why must an expanding bubble have a positive $dV/dt$?",
    "Identify the hidden geometric formula for a sliding ladder problem."
  ]
});

module.exports = { ch9 };
