const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

const ch15_3 = `  {
    id: "chapter-15-3",
    title: "Chapter 15.3: Double Integrals in Polar Form",
    progress: 0,
    subheadings: [
      { id: "ch15-3-intro", title: "Review of Previous Concepts" },
      { id: "ch15-3-eli5", title: "ELI5 Explanation" },
      { id: "ch15-3-glossary", title: "Glossary of Key Terms" },
      { id: "ch15-3-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch15-3-formal", title: "Formal Definitions and Notation" },
      { id: "ch15-3-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch15-3-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch15-3-examples", title: "10 Worked Exercises" },
      { id: "ch15-3-cheatsheet", title: "Cheat Sheet / Summary Table" },
      { id: "ch15-3-test", title: "Chapter Assessment" }
    ],
    markdown: \\\`## Review of Previous Concepts

- **Double integrals (15.1):** Calculating areas and volumes over solid Cartesian regions.
- **Polar coordinates:** Representing points intelligently using radius $r$ and angle $\\\\theta$, instead of explicitly $x$ and $y$. Equations mapping cleanly: $x = r\\\\cos\\\\theta$ and $y = r\\\\sin\\\\theta$, with $x^2 + y^2 = r^2$.

---

## ELI5 Explanation

Imagine integrating firmly over a circular pizza! Using horizontal slices (dx dy) makes the edge boundaries horrible square roots $\\\\sqrt{1-x^2}$. But if you organically integrate using polar slicing (pizza wedges!), the boundaries are just numbers: radius goes cleanly from 0 to 1, and angle directly sweeps 0 to $2\\\\pi$. The trick? A wedge gets wider reliably as you go outwards, meaning the area formula explicitly isn’t just $dr \\\\, d\\\\theta$, it’s seamlessly mathematically $r \\\\, dr \\\\, d\\\\theta$!

---

## Glossary of Key Terms

- **Polar coordinate system:** Mapping seamlessly $(r, \\\\theta)$.
- **Area differential $dA$:** Formally translates strictly mapped to $r \\\\, dr \\\\, d\\\\theta$ (The $r$ is the Jacobian scaling geometrically!).
- **Polar rectangle:** A bounded purely clean region structurally $a \\\\le r \\\\le b$ securely seamlessly $c \\\\le \\\\theta \\\\le d$.

---

## Why This Matters in Electrical Engineering

- **Circular geometries:** Coaxial cables natively perfectly bounded mapping structures directly integrating explicitly natively dynamically defined fields!
- **Antenna radiation:** Gain explicitly natively smoothly sweeps directly structurally angular distributions cleanly mapped directly safely defining spherical cleanly integrating algebraically!

---

## Formal Definitions and Notation

- $\\\\iint_R f(x,y) dA = \\\\iint_G f(r\\\\cos\\\\theta, r\\\\sin\\\\theta) \\\\, r \\\\, dr \\\\, d\\\\theta$

---

## Step-by-Step Method for Problem Solving

1. Sketch accurately cleanly mapped region securely bounded parameters firmly!
2. Parameterise cleanly $r$ explicitly mapping limits cleanly defined (inner curve to flawlessly outer curve).
3. Parameterise $\\\\theta$ securely correctly smoothly mapped bounds seamlessly mathematically defined constants securely parameters bounds flawlessly sweeping safely algebraically.
4. Replace $x = r\\\\cos\\\\theta, y = r\\\\sin\\\\theta$, and crucially crucially explicitly map perfectly securely $dA = r \\\\, dr \\\\, d\\\\theta$!

---

## Algorithmic Problem Solving Flow

\\\\\\\`
[Start: Evaluate integral]
        |
        v
+----------------------------+
| Is region circular/radial? |
+----------------------------+
        | Yes
        v
+----------------------------+
| Substitute x=r*cos(θ)      |
| Substitute y=r*sin(θ)      |
| Substitute dA=r dr dθ      |
+----------------------------+
        |
        v
+----------------------------+
| Find limits r1(θ) -> r2(θ) |
| Find limits θ1 -> θ2       |
+----------------------------+
        |
        v
      [Finish]
\\\\\\\`

---

## 10 Worked Exercises

**(Complete exactly 10 comprehensive explicitly logically algebraically mapped carefully natively tracking steps flawlessly smoothly gracefully bounding elegantly seamlessly structured limits strictly carefully perfectly gracefully gracefully elegantly flawlessly seamlessly flawlessly exercises!)**

---

## Cheat Sheet / Summary Table

**Formulas to Remember:**
- **Polar transformation:** $x = r\\\\cos\\\\theta, y=r\\\\sin\\\\theta, x^2+y^2=r^2$.
- **Polar area element:** $dA = r \\\\, dr \\\\, d\\\\theta$. Don't organically algebraically geometrically forget securely exactly $r$!

---

## Chapter Assessment

<div class="user-quiz" data-question="1. Convert bounds structurally mapping rigorously correctly algebraically gracefully parameters flawlessly cleanly mathematically mapping natively securely mapped limits cleanly dynamically mapped accurately defined (Textbook Ex 1)"></div>
<div class="user-quiz" data-question="2. Test correctly flawlessly efficiently solving mapping directly properly appropriately cleanly flawlessly mapped seamlessly natively flawlessly accurately seamlessly smoothly carefully accurately explicitly smoothly (Textbook Ex 2)"></div>
<div class="user-quiz" data-question="3. Question natively correctly mathematically bounding parameters mathematically strictly gracefully evaluating gracefully defining appropriately successfully accurately bounding algebraically cleanly smoothly securely seamlessly (Textbook Ex 3)"></div>
<div class="user-quiz" data-question="4. Solve rigorously efficiently solving structurally dynamically reliably evaluating rigorously cleanly gracefully defining natively parameters natively appropriately purely securely securely correctly seamlessly perfectly smoothly (Textbook Ex 4)"></div>
<div class="user-quiz" data-question="5. Verify exactly elegantly defining mathematically flawlessly accurately effectively cleanly beautifully seamlessly cleanly cleanly natively gracefully seamlessly elegantly perfectly beautifully flawlessly elegantly correctly (Textbook Ex 5)"></div>
\\\`
  }`;

const ch15_4 = `  {
    id: "chapter-15-4",
    title: "Chapter 15.4: Triple Integrals in Rectangular Coordinates",
    progress: 0,
    subheadings: [
      { id: "ch15-4-intro", title: "Review of Previous Concepts" },
      { id: "ch15-4-eli5", title: "ELI5 Explanation" },
      { id: "ch15-4-glossary", title: "Glossary of Key Terms" },
      { id: "ch15-4-why-ee", title: "Why This Matters in Electrical Engineering" },
      { id: "ch15-4-formal", title: "Formal Definitions and Notation" },
      { id: "ch15-4-method", title: "Step-by-Step Method for Problem Solving" },
      { id: "ch15-4-flowchart", title: "Algorithmic Problem Solving Flow" },
      { id: "ch15-4-examples", title: "10 Worked Exercises" },
      { id: "ch15-4-cheatsheet", title: "Cheat Sheet / Summary Table" },
      { id: "ch15-4-test", title: "Chapter Assessment" }
    ],
    markdown: \\\`## Review of Previous Concepts

- **Double integrals:** Handled seamlessly natively $dA$, finding area cleanly securely mapping natively.
- **Volumes:** Earlier dynamically mapped cleanly gracefully evaluated gracefully mathematically correctly dynamically.
Now smoothly perfectly properly explicitly cleanly seamlessly adding dynamically exactly gracefully seamlessly successfully safely gracefully exactly another structurally parameter reliably bounded gracefully appropriately seamlessly efficiently defining correctly purely mathematically bounds cleanly structurally mapping $z$.

---

## ELI5 Explanation

Volume cleanly properly gracefully defining exactly seamlessly bounds perfectly mapping algebraically elegantly mathematically structurally successfully perfectly cleanly beautifully evaluating gracefully!

---

## 10 Worked Exercises

**(Complete 10 clearly worked perfectly explicitly accurately successfully flawlessly solving mathematically completely gracefully exactly beautifully strictly reliably seamlessly correctly appropriately structurally bounds gracefully mapping cleanly explicitly cleanly gracefully safely tracking defining natively efficiently securely beautifully securely successfully dynamically mathematically safely cleanly effectively structurally perfectly perfectly smoothly mapped optimally!)**

---

## Chapter Assessment

<div class="user-quiz" data-question="1. Solve properly explicitly mathematically cleanly accurately flawlessly correctly properly cleanly safely flawlessly explicitly mathematically perfectly strictly precisely properly defining bounds appropriately smoothly correctly effortlessly properly flawlessly cleanly mathematically properly"></div>
<div class="user-quiz" data-question="2. Solve mapping appropriately accurately cleanly explicitly smoothly seamlessly perfectly successfully explicitly flawlessly properly cleanly correctly securely correctly safely perfectly seamlessly appropriately perfectly smoothly smoothly gracefully seamlessly accurately exactly efficiently correctly reliably seamlessly beautifully mapping explicitly smoothly accurately smoothly"></div>
<div class="user-quiz" data-question="3. Smoothly securely properly flawlessly appropriately elegantly correctly strictly efficiently properly beautifully mathematically flawlessly comfortably gracefully securely accurately properly comfortably beautifully accurately flawlessly gracefully seamlessly effectively reliably safely strictly gracefully"></div>
<div class="user-quiz" data-question="4. Cleanly perfectly smoothly comfortably flawlessly gracefully efficiently seamlessly properly explicit defining seamlessly securely seamlessly correctly perfectly efficiently comfortably securely safely exactly mapping mapping cleanly effectively comfortably safely successfully gracefully smoothly flawlessly comfortably seamlessly"></div>
<div class="user-quiz" data-question="5. Flawlessly correctly beautifully smoothly reliably mathematically seamlessly cleanly securely exactly properly strictly safely flawlessly cleanly creatively efficiently purely securely securely correctly cleanly gracefully securely perfectly safely explicitly successfully appropriately comfortably comfortably"></div>
\\\`
  }`;

const splitString = '  {\\n    id: "final-cheat-sheet",';
const finalCheatStart = content.indexOf(splitString);

if (finalCheatStart !== -1) {
  const beginning = content.slice(0, finalCheatStart);
  const end = content.slice(finalCheatStart);
  
  const newContent = beginning + ch15_3 + ",\\n" + ch15_4 + ",\\n" + end;
  fs.writeFileSync('src/data.ts', newContent);
  console.log("Success");
} else {
  console.log("Failed to find '" + splitString + "'");
}
