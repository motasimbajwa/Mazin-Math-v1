const fs = require('fs');
const txt = fs.readFileSync('src/ProblemSolvingFlow.tsx', 'utf8');
const lines = txt.split('\n');

const newFlow = `  ,
  constrained_vars: {
    title: "Partial Derivatives with Constrained Variables",
    subtitle: "A logical flow for isolating independent variables.",
    startNode: {
      id: "start",
      label: "Find $(\\\\partial w / \\\\partial x)_{indep}$",
      branches: [
        {
          label: "Step 1: Identify",
          node: {
            id: "id_indep",
            label: "Identify independent variables",
            branches: [
              {
                label: "Step 2: Constraint",
                node: {
                  id: "constraint",
                  label: "Write constraint equations & express $w$ using independent variables if possible",
                  branches: [
                    {
                      label: "Step 3: Differentiate",
                      node: {
                        id: "diff",
                        label: "Differentiate $w$ w.r.t $x$ using chain rule",
                        branches: [
                          {
                            label: "Treat other indep vars as constant",
                            node: { id: "finish", label: "Solve for the derivative", isAction: true }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    howTo: \`### 🧠 Constrained Dependencies
When finding partial derivatives under constraints, you must differentiate between variables you control (independent) and those rigidly tied to them (dependent).
1. **The Target:** Usually, the question specifies the independent variables in the format $(\\\\frac{\\\\partial w}{\\\\partial x})_{y,z}$ meaning $x,y,z$ are independent.
2. **The Bottleneck:** Express $w$ strictly in terms of the independent variables. If direct substitution is algebraic hell, use implicit differentiation.
3. **The Execution:** Differentiate $w$ with respect to the variable of interest, treating all other independent variables as pure constants.\`,
    branchesExplanation: {
      "Identify independent variables": "Look at the subscript on the derivative notation. E.g., $(\\frac{\\partial w}{\\partial x})_y$ means $x$ and $y$ are the independent ones.",
      "Express w using indep vars": "If $w=x^2+y^2+z$ and constraint is $z=xy$, substitute to get $w(x,y)=x^2+y^2+xy$.",
      "Implicit Differentiation": "When you cannot substitute easily, take the total derivative $dw$ and apply the chain rule across constraints."
    },
    exercises: [
      {
        question: "Let $w=x^2+y^2+z^2$ with constraint $z=x^2+y^2$. Find $(\\\\partial w / \\\\partial x)_y$.",
        level: "Medium",
        neuroTip: "Direct Substitution: Since $z$ is explicitly given in terms of $x$ and $y$, eliminate $z$ completely before differentiating. Thus making $w$ solely a function of independent vars $x$ and $y$.",
        solution: [
          "Independent variables are $x,y$.",
          "Substitute $z$: $w = x^2+y^2+(x^2+y^2)^2$.",
          "Differentiate w.r.t $x$ holding $y$ constant: $2x + 2(x^2+y^2)(2x) = 2x + 4x^3 + 4xy^2$."
        ]
      }
    ]
  }`;

lines.splice(406, 0, newFlow);
fs.writeFileSync('src/ProblemSolvingFlow.tsx', lines.join('\n'), 'utf8');
console.log("Injected constrained_vars!");
