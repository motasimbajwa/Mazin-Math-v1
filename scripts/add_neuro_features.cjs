const fs = require('fs');
const path = require('path');

async function main() {
    fs.cpSync(path.join(__dirname, '../dist/test_data.cjs'), path.join(__dirname, '../dist/neuro_data.cjs'));
    const { courseContent } = require('../dist/neuro_data.cjs');
    
    const neuroTips = {
        "Chapter 0: The Foundation – Calculus Recall": {
            intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Spaced Repetition & Retrieval:** Before we dive in, try to recall: What does finding the slope of a line actually give you in the real world? (Pause... it gives you the *Rate of Change*). 
**Interleaving Concept:** Calculus is simply taking algebra (finding slopes and areas) and applying the concept of "infinity" (shrinking distances to zero). It's the mathematics of continuous change.

`,
            glossary: `### 📖 Neuro-Enhanced Glossary (with Analogies)
**Dual Coding:** Words + Visual Analogies are easier for the brain to store.
* **Derivative:** The "Speedometer". The exact rate of change right now. (*Example:* Look at your car's dash at a stoplight. It says 0. When driving, 60 mph. That's a derivative).
* **Integral:** The "Odometer". The accumulation of rates over time. (*Example:* Driving 60mph for 2 hours accumulates 120 miles. The integral adds it up).
* **Limit:** The "Destination". Where a path is pointing, even if there's a pothole exactly there.
`
        },
        "Chapter 14.1: Functions of Several Variables": {
            intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** Recall $y = f(x)$. One input ($x$), one output ($y$). This creates a 2D graph (a line or curve). 
**Cognitive Chunking:** Now, what if we have TWO inputs? $z = f(x, y)$. Imagine dropping a pin on a map (Longitude $x$, Latitude $y$), and asking "what is the elevation ($z$) here?" We've just escaped Flatland!
**Prediction Error:** You might think 3D graphs are just thicker 2D lines. *Surprise!* They are curved, flowing blankets ("Surfaces").

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Domain ($D$):** The "Safe Zone" or "Floor Plan". The set of all acceptable inputs $(x,y)$. (*Example:* A drone flying. Its domain is anywhere it can fly without hitting walls or losing signal).
* **Range:** The "Ceiling and Floor". The possible outputs ($z$ or altitude). (*Example:* A mountain range's elevation varies from 0 to 5000ft. That's the range).
* **Level Curves:** "Contour Lines". Slices of the mountain at a perfectly flat elevation. (*Example:* Topographical maps hikers use to avoid steep cliffs).
`
        },
        "Chapter 14.2: Limits and Continuity in Higher Dimensions": {
            intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** In Calc 1, how many ways could you approach a point $x = a$ on a 2D line? (Answer: Only TWO ways. From the left or the right).
**Spatial Reasoning (Analogical):** In 3D space, $z = f(x,y)$, how many ways can you walk towards a point $(a,b)$ on the floor? (Answer: Infinite! You can spiral, zigzag, or walk straight).
**The Hook:** For a limit to exist in 3D, ALL infinite paths must agree on the same destination altitude. This is why 3D limits are vastly harder to prove.

`,
            glossary: `### 📖 Neuro-Enhanced Glossary 
* **Two-Path Test:** The "Detective's Alibi". If you catch a suspect lying on even ONE path (gives a different answer), the entire limit is busted and Does Not Exist.
* **Continuity:** The "Unbroken Blanket" rule. No rips, no tears, no wormholes at the point $(x,y)$.
* **Polar Coordinates ($r,\\theta$):** The "Universal Sweeper". Instead of testing $x$ and $y$ separately, testing $r \\to 0$ checks all infinite angles (paths) instantly.
`
        },
        "Chapter 14.3: Partial Derivatives": {
            intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** In Calc 1, $f'(x)$ told us how steep the curve was. But on a 3D mountain blanket, "steepness" depends entirely on *which way you are facing*.
**Selective Attention (Focus Mechanism):** The brain struggles to track two changing variables at once. So, we cheat. We freeze one! 
**Concept:** A Partial Derivative holds $y$ constant (acts like it's a fixed number, like 5) and only derives $x$. It's like locking your steering wheel and only stepping on the gas.

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Partial w.r.t $x$ ($f_x$):** The North-South slope. You lock your East-West position. (*Example:* Walking straight North on a hill. How steep is it?)
* **Partial w.r.t $y$ ($f_y$):** The East-West slope. Lock North-South.
* **Second Partials ($f_{xx}, f_{yy}$):** The "Curvature" or "Acceleration". Is the slope itself getting steeper?
* **Mixed Partials ($f_{xy}$):** Clairaut's Theorem says $f_{xy} = f_{yx}$ for nice functions. Taking the $x$-slope then $y$-slope yields the same result. (*Example:* Turning the steering wheel then hitting the gas vs hitting gas then turning).
`
        },
         "Chapter 14.4: The Chain Rule in Multivariable Calculus": {
            intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** Recall the 1D Chain Rule: peeling the onion layers $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$.
**Cognitive Load Management:** In 3D, the "onion" has branches, like an organizational chart. A change in raw material costs ($t$) affects intermediate managers ($x, y$), which both affect the CEO's profit ($z$).
**The Algorithmic Flow:** Multiply down vertical chains, ADD horizontal paths.

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Dependent Variable ($z$):** The Final Output/CEO.
* **Intermediate Variables ($x, y$):** The Middle Managers pushing the effect up.
* **Independent Variable ($t, u, v$):** The Root Cause/Ground Workers.
* **Dependency Tree:** A visual map of your variables. Your brain processes spatial trees 60,000x faster than linear algebra. Always draw the tree!
`
        },
        "Chapter 14.5: Directional Derivatives and Gradient Vectors": {
             intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** $f_x$ is slope East, $f_y$ is slope North. What if you want to walk Northeast?
**Analogical Mapping:** The Gradient Vector $\\nabla f$ is a magic compass. It automatically points in the direction of the absolute steepest uphill path.
**Prediction Error:** You might think the max steepness is an angle. No, it's a 2D vector on the floor $\\langle f_x, f_y \\rangle$.

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Gradient Vector ($\\nabla f$):** The "Steepest Uphill Compass". Constructed purely of partial derivatives $\\langle f_x, f_y \\rangle$.
* **Directional Derivative ($D_u f$):** The slope you experience walking in an arbitrary direction $u$. Calculated via dot product: $\\nabla f \\cdot u$.
* **Unit Vector ($u$):** A distilled direction. Vector $v$ divided by its own length. (*Crucial:* Doing math with a non-unit vector is like measuring speed with a broken ruler).
`
        },
        "Chapter 14.6: Tangent Planes and Differentials": {
            intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** In Calc 1, we used a tangent *line* $y - y_1 = m(x - x_1)$ to approximate curves closely.
**Spatial Extension:** Expand that line into a flat sheet of glass. A tangent *plane* kisses a 3D curved surface perfectly at one single point. 
**Neuro-Application:** Our brains prefer linear objects (flat things) over complex curves. Differentials use this flat plane to substitute agonizingly complex arithmetic (like $\\sqrt{3.9^2 + 4.1^2}$) with simple addition.

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Normal Vector ($\\vec{n}$):** The rod sticking perfectly 90-degrees out of a flat plane. For an implicit surface $F=c$, the gradient $\\nabla F$ is exactly the normal vector!
* **Tangent Plane:** The rigid sheet resting on the mountain. Formula involves matching slopes in $x$ and $y$.
* **Linear Approximation ($L(x,y)$):** Using the tangent plane's height to guess the mountain's height for nearby points. (*Example:* Guessing a storm's trajectory assuming it moves in a straight line for the next hour).
`
        },
        "Chapter 14.7: Extreme Values and Saddle Points": {
             intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** To find peaks/valleys in 1D, we set $f'(x) = 0$. 
**Interleaving:** In 3D, we must set BOTH $f_x = 0$ AND $f_y = 0$ simultaneously. This stops the tangent plane from tilting in any direction, making it perfectly horizontal.
**Surprise Element:** In 3D, a horizontal plane doesn't guarantee a peak or valley. You could be sitting on a Saddle Point piece of a Pringles chip (chips curve up left-right, but down front-back).

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Critical Point:** A location $(x,y)$ where the ground is perfectly flat ($f_x=0$ and $f_y=0$).
* **Saddle Point:** Flat ground, but walking one way goes up, and another way goes down. (Looks like a horse saddle).
* **The Second Derivative Test ($D$):** The "Shape Discriminator". $D = f_{xx}f_{yy} - (f_{xy})^2$. It measures concavity overlap to prove if it's a bowl (min), a dome (max), or a Pringles chip (saddle).
`
        },
        "Chapter 14.8: Lagrange Multipliers": {
             intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** A gradient vector $\\nabla f$ points exactly perpendicular to contour lines.
**The "Aha!" Moment (Insight Learning):** Suppose you are forced to walk on a specific trail ($g=c$) on a mountain ($f$). Where is your highest possible altitude? It must happen when your trail perfectly kisses a mountain contour line. If they kiss, they are parallel. If they are parallel, their gradients point the same way! $\\nabla f = \\lambda \\nabla g$.

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Objective Function ($f$):** The thing you want to maximize/minimize. (*Example:* Profit, Volume, Altitude).
* **Constraint ($g=c$):** The strict rule or budget you are trapped by. (*Example:* You only have $1000 of materials).
* **Lagrange Multiplier ($\\lambda$):** The scaling factor that aligns the objective's gradient with the constraint's gradient. Mathematically links the two.
`
        },
        "Chapter 14.9: Partial Derivatives with Constrained Variables": {
             intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** The Chain Rule map traces roots. But what if the roots themselves are tangled?
**Cognitive Load:** When $x, y,$ and $z$ are explicitly bound by an equation (like $x+y+z=10$), they cannot move freely. If $x$ changes, $y$ or $z$ MUST adjust.
**Strategy:** We define strictly independent and locked dependent variables when taking derivatives along constrained surfaces.

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Constraint Envelope:** The fixed mathematical relationship linking variables.
* **Implicit Differentiation:** Taking derivatives on both sides of an equation without cleanly isolating $y$ or $z$ first. Used when isolating variables is impossible or too messy.
`
        },
        "Chapter 15.1: Double Integrals over Rectangles and General Regions": {
             intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** A 1D Integral $\\int f(x) dx$ accumulates area under a curve by slicing it into infinite vertical 1D rectangles $dx$.
**Dimensional Ladder:** A 2D Double Integral $\\iint f(x,y) dA$ accumulates VOLUME under a 3D surface by slicing it into infinite 3D French fries (pillars) with a tiny base $dA$.
**Feynman Technique:** Instead of counting every pillar at once, we sum them up row by row (integrate $dx$), and then add all the rows together (integrate $dy$). This converts a scary 2D problem into two simple 1D problems!

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Fubini's Theorem:** The "Slice Order Doesn't Matter" rule. Slicing a cake front-to-back then left-to-right gives the same total cake as slicing left-to-right then front-to-back. (You can swap $dx dy$ to $dy dx$).
* **Area Element ($dA$):** The tiny base of our pillar. In rectangles, $dA = dx \\, dy$.
* **Iterated Integral:** An integral inside an integral. You solve the inner brackets completely first, treating the outer variable as a frozen constant.
`
        },
        "Chapter 15.2: Area, Moments, and Centers of Mass": {
             intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Retrieval Practice:** Calculating regular Area is just a double integral where the ceiling height is flat at $f(x,y) = 1$. $\\iint_R 1 \\, dA = \\text{Area}$.
**Real-World Mapping:** What if the flat metal plate isn't uniformly dense? What if one side is heavier? 
**The Physics Connection:** We integrate the density function $\\delta(x,y)$ to find Total Mass. Then we find the "balance point" (Center of Mass) by calculating how the mass is distributed relative to the axes (Moments).

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Density Function ($\\delta(x,y)$):** The weight of the plate at any exact point.
* **Moments ($M_x, M_y$):** The tendency of the plate to forcefully rotate around an axis. $M_x$ uses distance $y$, $M_y$ uses distance $x$.
* **Center of Mass ($\\bar{x}, \\bar{y}$):** The exact coordinate where you could balance the entire wobbly plate on the tip of a pencil perfectly. (Calculated as $M_y/M$ and $M_x/M$).
`
        },
        "Chapter 15.4: Triple Integrals in Rectangular Coordinates": {
             intro: `### 🧠 Neuro-Cognitive Intro & Revision
**Dimensional Ladder:** We've gone from 1D Lines (length) to 2D Surfaces (area). Now, Triple Integrals $\\iiint f(x,y,z) dV$ operate over a solid 3D chunk of space (volume).
**Cognitive Chunking:** If $f(x,y,z) = 1$, the triple integral literally just computes the classic geometric volume of the shape. If $f(x,y,z)$ is density, it computes 4D mass across that 3D block.
**The Shadow Method:** To solve, think of shining a flashlight straight down on the 3D solid. Step 1: Integrate the vertical height ($dz$). Step 2: Integrate the 2D "shadow" left on the floor ($dx dy$).

`,
            glossary: `### 📖 Neuro-Enhanced Glossary
* **Volume Element ($dV$):** A microscopic sugar cube of space. In rectangular, $dV = dz \\, dy \\, dx$.
* **The Projection (Region $R$):** The 2D shadow the 3D solid casts on the $xy$-plane.
* **Order of Integration:** Six possible ways to slice the solid ($dxdydz, dzdydx$, etc). Usually, $dz$ first (floor to ceiling) is vastly easier for human brains to visualize.
`
        }
    };

    const updatedContent = courseContent.map(chapter => {
        let newMarkdown = chapter.markdown;

        newMarkdown = newMarkdown.replace(/### Glossary, Rules & Formulas[\s\S]*?(?=## Visuals \/ Graphs|## ELI5|## 5 Exhaustive|## )/, '');
        newMarkdown = newMarkdown.replace(/## Review of Previous Concepts[\s\S]*?(?=## )/g, '');
        newMarkdown = newMarkdown.replace(/### Glossary of Key Terms[\s\S]*?(?=## |### )/g, '');
        newMarkdown = newMarkdown.replace(/## Glossary of Key Terms[\s\S]*?(?=## |### )/g, '');

        let tip = neuroTips[chapter.title];

        if (!tip) {
            const possible = Object.keys(neuroTips).find(k => chapter.title.includes(k) || k.includes(chapter.title.split(':')[0]));
            if (possible) tip = neuroTips[possible];
        }

        if (tip) {
            newMarkdown = `${tip.intro}\n${tip.glossary}\n---\n\n` + newMarkdown;
        }

        const subheadings = chapter.subheadings || [];
        const cleanSubheadings = subheadings.filter(s => !s.id.includes('intro') && !s.id.includes('glossary'));
        
        cleanSubheadings.unshift({ id: `${chapter.id}-intro`, title: "Neuro-Cognitive Intro & Revision" });
        cleanSubheadings.unshift({ id: `${chapter.id}-glossary`, title: "Neuro-Enhanced Glossary" });

        return {
            ...chapter,
            subheadings: cleanSubheadings,
            markdown: newMarkdown
        };
    });

    let tsContent = 'export const courseContent = [\n';
    updatedContent.forEach((ch, idx) => {
        tsContent += `  {\n    id: ${JSON.stringify(ch.id)},\n    title: ${JSON.stringify(ch.title)},\n    progress: ${ch.progress},\n    subheadings: ${JSON.stringify(ch.subheadings, null, 2)},\n`;
        const escapedMarkdown = ch.markdown.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
        tsContent += `    markdown: \`\n${escapedMarkdown}\n\`\n  }${idx < updatedContent.length - 1 ? ',' : ''}\n`;
    });
    tsContent += '];\n';

    fs.writeFileSync(path.join(__dirname, '../src/data.ts'), tsContent);
    console.log("Successfully injected neuroscience tips into data.ts");
}

main().catch(console.error);
