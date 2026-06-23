const { buildChapter } = require('./builder.cjs');

const ch6 = buildChapter({
  num: 6,
  title: "Applications of Differentiation (Velocity/Acceleration)",
  intro: `Some of the most important problems of the calculus are those where time is the independent variable, and we have to think about the values of some other quantity that varies when the time varies. The distance that a train has travelled from its starting place goes on ever increasing as time goes on. Trees grow taller as the years go by.
In both these cases we are making a mental comparison of something that is happening, and the length of time it takes to happen. If the car goes 10 yards per second, a simple bit of mental arithmetic will show us that this is equivalent to 600 yards per minute.
The rate of doing anything is simply the ratio between the thing done and the time taken to do it. The exact instantaneous rate of change of position $s$ with respect to time $t$ is the velocity $v$. Differentiation is the mathematical key to motion.`,
  eli5: `**The Falling Stone:**
Imagine you drop a stone from a bridge. If you take a picture every second, the distance between the stone in each picture gets larger and larger. The speed is increasing constantly! Calculus allows you to take infinitely fast pictures. If position is a function $s(t) = 16t^2$, the first derivative $v(t) = 32t$ gives you the exact speed at any microsecond. The second derivative $a(t) = 32$ confirms the constant pull of Earth's gravity.`,
  glossary: {
    "Position ($s(t)$)": "The location of an object at a given time.",
    "Velocity ($v(t)$)": "The rate at which position changes over time. It tells you speed AND direction. $v = \\frac{ds}{dt}$.",
    "Acceleration ($a(t)$)": "The rate at which velocity changes over time. $a = \\frac{dv}{dt}$ or $a = \\frac{d^2s}{dt^2}$.",
    "Rest": "A state where the object is momentarily stopped. Mathematically, velocity is exactly $0$."
  },
  whyEE: `This mathematical structure directly applies to electric charge. The electric current $i(t)$ is simply the exact continuous rate of change (velocity) of the electrical charge $q(t)$ moving through a wire. $i = \\frac{dq}{dt}$. All physics problems mapping physical location to velocity directly map to evaluating charge and the resulting current in power systems.`,
  formal: `**Equations of Motion:**
1. Position: $s(t)$
2. Velocity: $v(t) = \\frac{ds}{dt} = s'(t)$
3. Acceleration: $a(t) = \\frac{dv}{dt} = s''(t)$

**Key Properties:**
- If $v(t) > 0$, the object is moving in the positive direction.
- If $v(t) < 0$, the object is moving in the negative direction.
- If $v(t) = 0$, the object is turning around or at rest.
- If $a(t)$ and $v(t)$ have the same sign, the object is speeding up.
- If $a(t)$ and $v(t)$ have opposite signs, the object is slowing down.`,
  method: `1. **Write the equation:** Obtain the primary equation for position $s(t)$.
2. **Derive Velocity:** Take the first derivative $v(t) = s'(t)$.
3. **Derive Acceleration:** Take the second derivative $a(t) = v'(t) = s''(t)$.
4. **Answer the specific question:**
   - "When is it at rest?" $\\to$ Set $v(t) = 0$ and solve for $t$.
   - "What is the speed at $t=3$?" $\\to$ Plug 3 into $v(t)$ and take absolute value.
   - "When does it hit the ground?" $\\to$ Set position $s(t) = 0$ and solve for $t$.`,
  flowchart: `
<div class="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm font-mono text-xs overflow-x-auto whitespace-pre">
[Position: s(t)] 
       |
     d/dt
       v
[Velocity: v(t)]  --- set to 0 ---> [Find turning points]
       |
     d/dt
       v
[Acceleration: a(t)]
</div>
`,
  triggers: [
    { word: "At rest / turning around", action: "Set velocity $v(t) = 0$." },
    { word: "Hits the ground", action: "Set position $s(t) = 0$." },
    { word: "Initial velocity", action: "Evaluate velocity at $t = 0$." }
  ],
  examples: [
    { title: "Velocity from Position", question: "If $s(t) = 5t^2 + 2t + 4$, find velocity at $t=2$.", steps: [
      { think: "Take the derivative to find the velocity function.", write: "$v(t) = 10t + 2$" },
      { think: "Substitute $t=2$.", write: "$v(2) = 10(2) + 2 = 22$" }
    ]},
    { title: "Finding When Object is at Rest", question: "If $s(t) = t^3 - 6t^2 + 9t$, when is it horizontally at rest?", steps: [
      { think: "At rest means velocity is zero. Find $v(t)$.", write: "$v(t) = 3t^2 - 12t + 9$" },
      { think: "Set to zero and factor.", write: "$3(t^2 - 4t + 3) = 0 \\implies 3(t-3)(t-1) = 0$" },
      { think: "Solve for $t$.", write: "$t = 1$ and $t = 3$" }
    ]},
    { title: "Calculating Acceleration", question: "For the previous problem, what is the acceleration at $t=1$?", steps: [
      { think: "Take the derivative of velocity to get acceleration.", write: "$a(t) = 6t - 12$" },
      { think: "Plug in $t=1$.", write: "$a(1) = 6(1) - 12 = -6$" }
    ]},
    { title: "Dropping a Stone", question: "A stone is dropped: $s(t) = 16t^2$. How far has it fallen when its velocity is 64 ft/s?", steps: [
      { think: "Find velocity formula.", write: "$v(t) = 32t$" },
      { think: "Find out WHEN velocity is 64.", write: "$32t = 64 \\implies t = 2$" },
      { think: "Plug that time back into the distance formula.", write: "$s(2) = 16(2)^2 = 16(4) = 64\\text{ ft}$" }
    ]},
    { title: "Speeding up or Slowing down", question: "If $v(2) = -5$ and $a(2) = -10$, is the object speeding up or slowing down?", steps: [
      { think: "Velocity is negative (moving backwards) and acceleration is negative (pushing backwards).", write: "Signs match ($-$) and ($-$)" },
      { think: "If forces align, speed increases.", write: "Speeding up" }
    ]},
    { title: "Constant Acceleration", question: "Prove that a falling object $s(t) = -4.9t^2 + v_0t + s_0$ has constant acceleration.", steps: [
      { think: "Take first derivative.", write: "$v(t) = -9.8t + v_0$" },
      { think: "Take second derivative.", write: "$a(t) = -9.8$" },
      { think: "The final answer has no $t$ variables left.", write: "Since $-9.8$ is a constant, acceleration is constant." }
    ]},
    { title: "Maximum Height", question: "A bullet is shot up: $s(t) = -16t^2 + 128t$. What is the maximum height?", steps: [
      { think: "Max height occurs when the bullet stops at the top (velocity = 0).", write: "$v(t) = -32t + 128 = 0$" },
      { think: "Solve for time.", write: "$32t = 128 \\implies t = 4$" },
      { think: "Plug $t=4$ back into position.", write: "$s(4) = -16(16) + 128(4) = 256\\text{ ft}$" }
    ]},
    { title: "Acceleration Given Velocity", question: "If $v(t) = \\frac{1}{t+1}$, find $a(t)$.", steps: [
      { think: "Prepare expression for power rule.", write: "$v(t) = (t+1)^{-1}$" },
      { think: "Take derivative to find acceleration.", write: "$a(t) = -(t+1)^{-2} = \\frac{-1}{(t+1)^2}$" }
    ]},
    { title: "Finding Initial States", question: "Given $s(t) = t^3 - 4t + 10$, what is its initial position and initial velocity?", steps: [
      { think: "'Initial' means $t=0$. Plug 0 into position.", write: "$s(0) = 0 - 0 + 10 = 10$" },
      { think: "Find velocity formula, then plug in 0.", write: "$v(t) = 3t^2 - 4 \\implies v(0) = -4$" }
    ]},
    { title: "Moving Backwards", question: "If $s(t) = t^2 - 8t$, during what time interval is it moving backwards?", steps: [
      { think: "Moving backwards means $v(t) < 0$.", write: "$v(t) = 2t - 8$" },
      { think: "Solve the inequality.", write: "$2t - 8 < 0 \\implies t < 4$" },
      { think: "Assuming time starts at $0$.", write: "$0 \\le t < 4$" }
    ]}
  ],
  cheatsheet: `
<div class="bg-white border rounded-lg p-4 shadow-sm text-sm font-mono mt-4">
  **Kinematics Dictionary:**
  | Math Term | Physics Concept |
  | :--- | :--- |
  | $s(t)$ | Position / Distance |
  | $s'(t)$ or $v(t)$ | Velocity |
  | $s''(t)$ or $a(t)$ | Acceleration |
  | $v(t) = 0$ | "At rest", "Stopped", "Changes direction", "Peak height" |
  | $|v(t)|$ | Speed (direction doesn't matter) |
  | $s(t) = 0$ | "Hits the ground", "At origin" |
  | $t = 0$ | "Initial" |
</div>
`,
  traps: [
    { wrong: "Velocity is zero means acceleration is zero.", correct: "A thrown ball at its peak has $v=0$ but $a = -9.8$.", why: "Acceleration is continuous gravity regardless of momentary speed." },
    { wrong: "Negative velocity means slowing down.", correct: "Negative velocity just means moving in reverse.", why: "Speed measures magnitude. Direction is independent of speed change." },
    { wrong: "Solve for max height by plugging $t=0$ into position.", correct: "Solve for $v(t)=0$ to find the peak time, then plug that time into $s(t)$.", why: "$t=0$ is the start of the throw, not the peak." }
  ],
  assessment: [
    "If $s(t) = 3t^2 - 12t$, find the velocity at $t=2$.",
    "If $v(t) = -32t + 64$, at what time is the object at rest?",
    "If a rocket's position is $s(t) = t^3 + t$, find its acceleration at $t=3$.",
    "True or False: An object with negative velocity and negative acceleration is slowing down.",
    "Write the formula for current $i(t)$ given a charge function $q(t)$."
  ]
});

module.exports = { ch6 };
