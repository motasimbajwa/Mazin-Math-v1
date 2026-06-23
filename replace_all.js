import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const full141 = fs.readFileSync('full141.md', 'utf8');

const promptInstructions = {
    '14-2': "> **QUIZ:** Use polar coordinates to evaluate lim_{(x,y)->(0,0)} (x² y)/(x² + y²).\\n>\\n> 4. Use polar coordinates to evaluate $\\lim_{(x,y)\\to(0,0)} \\frac{x^2 y}{x^2 + y^2}$.\\n> *(Source: CUI Lahore SP22 Q2b)*\\n\\n> **QUIZ:** Is the function f(x,y) = { (x³ - y³)/(x² + y²) for (x,y)≠(0,0), 0 at (0,0) } continuous at the origin? Justify.\\n>\\n> 5. Is the function $f(x,y) = \\begin{cases} \\frac{x^3 - y^3}{x^2 + y^2}, & (x,y) \\neq (0,0) \\\\ 0, & (x,y) = (0,0) \\end{cases}$ continuous at the origin? Justify.\\n> *(Original)*",
    '14-3': "> **QUIZ:** Find f_xy and f_yx for f(x,y) = e^{xy} sin(x+y). Verify Clairaut’s theorem.\\n>\\n> 4. Find $f_{xy}$ and $f_{yx}$ for $f(x,y) = e^{xy} \\sin(x+y)$. Verify Clairaut’s theorem.\\n> *(Source: COMSATS FA24 Q3b)*\\n\\n> **QUIZ:** If z = x³ y² + 2x y⁴, find ∂²z/∂x∂y at (1, -1).\\n>\\n> 5. If $z = x^3 y^2 + 2x y^4$, find $\\frac{\\partial^2 z}{\\partial x \\partial y}$ at $(1, -1)$.\\n> *(Original)*",
    '14-4': "> **QUIZ:** If w = e^{xy} ln(z), x = t², y = sin t, z = cos t, find dw/dt at t = 0.\\n>\\n> 4. If $w = e^{xy} \\ln(z)$, $x = t^2$, $y = \\sin t$, $z = \\cos t$, find $\\frac{dw}{dt}$ at $t = 0$.\\n> *(Source: CUI Sahiwal FA25 Q4a)*\\n\\n> **QUIZ:** Use implicit differentiation to find ∂z/∂y for x² y + y z² + z x = 0 at (1,1,-1).\\n>\\n> 5. Use implicit differentiation to find $\\frac{\\partial z}{\\partial y}$ for $x^2 y + y z^2 + z x = 0$ at $(1,1,-1)$.\\n> *(Original)*",
    '14-5': "> **QUIZ:** Find the direction(s) of zero change for f(x,y) = x² - 2xy + y² at (1,1).\\n>\\n> 4. Find the direction(s) of zero change for $f(x,y) = x^2 - 2xy + y^2$ at $(1,1)$.\\n> *(Source: CUI Lahore SP22 Q5a)*\\n\\n> **QUIZ:** The temperature in a room is T(x,y,z) = 100 - x² - y² - z². A bug at (1,2,2) wants to cool fastest. In which direction should it move? What is the rate of cooling?\\n>\\n> 5. The temperature in a room is $T(x,y,z) = 100 - x^2 - y^2 - z^2$. A bug at $(1,2,2)$ wants to cool fastest. In which direction should it move? What is the rate of cooling?\\n> *(EE application)*",
    '14-6': "> **QUIZ:** Find the linear approximation of f(x,y) = √(x² + y²) at (3,4) and use it to estimate √(3.1² + 3.9²).\\n>\\n> 4. Find the linear approximation of $f(x,y) = \\sqrt{x^2 + y^2}$ at $(3,4)$ and use it to estimate $\\sqrt{3.1^2 + 3.9^2}$.\\n> *(Source: CUI Lahore SP22 Q4a)*\\n\\n> **QUIZ:** The resistance of a wire is R = ρ L / A. If ρ = 1.68×10⁻⁸ Ω·m, L = 10.0 m with error ±0.1 m, A = 2.0×10⁻⁶ m² with error ±0.05×10⁻⁶, estimate the maximum possible error in R.\\n>\\n> 5. The resistance of a wire is $R = \\rho L / A$. If $\\rho = 1.68\\times10^{-8} \\Omega\\cdot\\text{m}$, $L = 10.0\\text{ m}$ with error $\\pm0.1\\text{ m}$, $A = 2.0\\times10^{-6}\\text{ m}^2$ with error $\\pm0.05\\times10^{-6}$, estimate the maximum possible error in $R$.\\n> *(EE application)*",
    '14-7': "> **QUIZ:** Find all critical points of f(x,y) = x³ + y³ - 3xy and classify them.\\n>\\n> 4. Find all critical points of $f(x,y) = x^3 + y^3 - 3xy$ and classify them.\\n> *(Source: COMSATS FA24 Q5b)*\\n\\n> **QUIZ:** Find the absolute maximum and minimum of f(x,y) = x² + 2y² - x on the disk x² + y² ≤ 1.\\n>\\n> 5. Find the absolute maximum and minimum of $f(x,y) = x^2 + 2y^2 - x$ on the disk $x^2 + y^2 \\le 1$.\\n> *(Original)*"
};

async function main() {
    let data = fs.readFileSync('src/data.ts', 'utf8');

    // Manually parse the JSON-like array by finding 'id: "chapter-X"' blocks
    const chapters = ['14-1', '14-2'];
    
    for (const ch of chapters) {
        let pattern = new RegExp(`id:\\s*"chapter-${ch}",[\\s\\S]*?markdown:\\s*\`([\\s\\S]*?)\`\\n\\s*(},?)`, 'g');
        let match = pattern.exec(data);
        if (!match) {
            console.log("Could not find " + ch);
            continue;
        }
        let originalMarkdown = match[1];
        let newMarkdown = originalMarkdown;
        
        if (ch === '14-1') {
            console.log("Processing 14-1 locally...");
            let exMatch = originalMarkdown.match(/## 5 Exhaustive Worked Examples[\\s\\S]*?(?=### Algorithmic Problem Solving Flow)/);
            let exercises = exMatch ? exMatch[0] : '';
            exercises = exercises.replace(/\\*\\*Example 1:(.*?)\\*\\*/g, '**Example 1:$1**\\n* **Figure Reference:** Figure 14.3 shows a similar domain (parabola boundary).');
            exercises = exercises.replace(/\\*\\*Example 2:(.*?)\\*\\*/g, '**Example 2:$1**\\n* **Figure Reference:** Figure 14.4 illustrates level curves of a paraboloid.');
            exercises = exercises.replace(/\\*\\*Example 3:(.*?)\\*\\*/g, '**Example 3:$1**\\n* **Common mistake:** Forgetting that the domain is open (strict inequality) because denominator cannot be zero.');
            exercises = exercises.replace(/\\*\\*Example 4:(.*?)\\*\\*/g, '**Example 4:$1**\\n* **Figure Reference:** Figure 14.7 shows concentric spheres as level surfaces.');
            exercises = exercises.replace(/\\*\\*Example 5:(.*?)\\*\\*/g, '**Example 5:$1**\\n* **Common mistake:** Including origin in domain of ln(x²+y²).');
            
            newMarkdown = full141.replace('[WILL BE REPLACED WITH EXISTING 5 + REFS]', exercises);
            
            // replace original with new
            data = data.replace(match[0], match[0].replace(originalMarkdown, newMarkdown));
            
        } else {
            console.log("Processing " + ch + " with Gemini...");
            const p = "You are updating a calculus textbook chapter.\\n" +
                "Below is the original markdown. Provide the FULL rewritten markdown. No intro or backticks.\\n" +
                "Requirements:\\n" +
                "1. Provide an 'ELI5 Explanation' section with an Electrical Engineering (EE) analogy if not present. Improve existing ones.\\n" +
                "2. In '10 Worked Exercises' or 'Exhaustive Worked Examples' section, ensure EACH example has '* **Figure Reference:** Figure ...' and '* **Common mistake:** ...' (invent reasonable ones!). DO NOT change the math.\\n" +
                "3. Ensure the 'Cheat Sheet / Summary Table' has 'Key Points', 'Formulas', and 'Common Mistakes'.\\n" +
                "4. In 'Chapter Assessment', KEEP all existing quiz questions, but ADD THIS EXACT TEXT BLOCK before the progress bar:\\n\\n" +
                promptInstructions[ch] + "\\n\\nOriginal Markdown:\\n" + originalMarkdown;
            try {
                const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: p });
                let t = response.text || '';
                t = t.replace(/^\\s*\\`\\`\\`markdown\\n/g, '').replace(/\\n\\`\\`\\`\\s*$/g, '');
                t = t.replace(/^\\s*\\`\\`\\`\\n/g, '').replace(/\\n\\`\\`\\`\\s*$/g, '');
                
                // Be careful to not replace the wrong thing, use exact replace inside the block
                const blockToReplace = 'id: "chapter-' + ch + '"';
                data = data.replace(match[0], match[0].replace(originalMarkdown, t));
                console.log("Updated " + ch);
            } catch(e) {
                console.error("Failed on " + ch, e.message);
            }
        }
        // Save inside the loop so progress is preserved!
        fs.writeFileSync('src/data.ts', data);
    }
    
    console.log("All done!");
}

main();
