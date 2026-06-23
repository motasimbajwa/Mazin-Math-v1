import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, CornerDownRight, CheckCircle2, BookOpen, Brain, MousePointerClick, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface Node {
  id: string;
  label: string;
  isAction?: boolean;
  branches?: Branch[];
}

interface Branch {
  label: string;
  node: Node;
}

interface FlowchartData {
  title: string;
  subtitle: string;
  startNode: Node;
  howTo: string;
  branchesExplanation: { [key: string]: string };
  exercises: {
    question: string;
    level: string;
    neuroTip: string;
    solution: string[];
  }[];
}

const flows: Record<string, FlowchartData> = {
  limit: {
    title: "Mastering the Limit: Approaching 3D Paths",
    subtitle: "A logical tree for evaluating limits of functions with several variables.",
    startNode: {
      id: "start",
      label: "Evaluate $\\lim_{(x,y) \\to (a,b)} f(x,y)$",
      branches: [
        {
          label: "Try Direct Substitution",
          node: {
            id: "sub",
            label: "Plug in $(a,b)$",
            branches: [
              {
                label: "Gives a solid number $L$",
                node: { id: "finish_1", label: "Limit is $L$", isAction: true }
              },
              {
                label: "Gives $0/0$",
                node: {
                  id: "indeterminate",
                  label: "Manipulate Algebraically",
                  branches: [
                    {
                      label: "Factor / Rationalize",
                      node: { id: "finish_2", label: "Cancel & Substitute Again", isAction: true }
                    },
                    {
                      label: "Algebra fails",
                      node: {
                        id: "paths",
                        label: "Two-Path Test",
                        branches: [
                          {
                            label: "Path 1 limit $\\neq$ Path 2 limit",
                            node: { id: "finish_3", label: "Limit DOES NOT EXIST", isAction: true }
                          },
                          {
                            label: "All simple paths match",
                            node: { id: "polar", label: "Use Polar Coordinates ($r \\to 0$)", isAction: true }
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
    howTo: `### 🧠 Neuro-Cognitive Approach to Limits
When your brain sees $0/0$, it triggers a cognitive pause—a 'conflict signal'. Instead of freezing, use this signal to transition from 'evaluation mode' to 'investigation mode'. 
1. **The Anchor:** First, try standard algebra (factoring). 
2. **The Divergence:** If you can't factor, your goal shifts from *solving* to *breaking*. Try to find two paths (like $y=x$ and $y=x^2$) that give different answers.
3. **The Squeeze:** If you suspect the limit *does* exist but algebra is messy, mapping the 2D plane into a 1D radius using polar coordinates collapses the complexity, reducing cognitive load.`,
    branchesExplanation: {
      "Direct Substitution": "Always anchor yourself. Substituting $(0,0)$ into $f(x,y) = x+y+2$ gives $2$. The simplest answer is often right.",
      "Factor / Rationalize": "Example: $\\lim \\frac{x^2-y^2}{x-y}$ becomes $\\lim (x+y)$. The 'hole' is mathematically patched.",
      "Two-Path Test": "Example: $f(x,y) = \\frac{xy}{x^2+y^2}$. Along $y=0$, limit is $0$. Along $y=x$, limit is $1/2$. The paths disagree, creating a spatial contradiction.",
      "Polar Coordinates": "When $r^2 = x^2+y^2$ appears, $r \\to 0$ evaluates all approach angles $\\theta$ simultaneously. Example: $\\frac{x^3}{x^2+y^2} = \\frac{r^3 \\cos^3\\theta}{r^2} = r \\cos^3\\theta \\to 0$."
    },
    exercises: [
      {
        question: "Evaluate $\\lim_{(x,y) \\to (0,0)} \\frac{x^2 - y^2}{x^2 + y^2}$.",
        level: "Medium",
        neuroTip: "Pattern Recognition: The degrees in numerator and denominator are identical (degree 2). This is a strong heuristic signal that the limit will depend on the angle of approach.",
        solution: [
          "Try path $y = 0$: $\\lim_{x \\to 0} \\frac{x^2 - 0}{x^2 + 0} = 1$.",
          "Try path $x = 0$: $\\lim_{y \\to 0} \\frac{0 - y^2}{0 + y^2} = -1$.",
          "Conclusion: Since $1 \\neq -1$, the Two-Path Test proves the limit DOES NOT EXIST."
        ]
      },
      {
        question: "Evaluate $\\lim_{(x,y) \\to (0,0)} \\frac{x y^2}{x^2 + y^4}$.",
        level: "Difficult",
        neuroTip: "Weight Imbalance: Notice $x^2$ and $y^4$. If we substitute $x = y^2$, they match perfectly ($y^4$ and $y^4$). Standard paths like $y=mx$ might give a false positive.",
        solution: [
          "Try generic paths $y = mx$: The limit becomes $\\lim_{x \\to 0} \\frac{x(mx)^2}{x^2 + (mx)^4} = \\lim_{x \\to 0} \\frac{xm^2}{1 + m^4x^2} = 0$. (Seems like the limit is 0).",
          "Now, apply the neuro-tip. Let's try the parabolic path $x = y^2$.",
          "Substitute $x = y^2$: $\\lim_{y \\to 0} \\frac{(y^2) y^2}{(y^2)^2 + y^4} = \\lim_{y \\to 0} \\frac{y^4}{2y^4} = \\frac{1}{2}$.",
          "Conclusion: Since $0 \\neq 1/2$, the limit DOES NOT EXIST."
        ]
      },
      {
        question: "Evaluate $\\lim_{(x,y) \\to (0,0)} \\frac{2x^3 - y^3}{x^2 + y^2}$.",
        level: "Medium",
        neuroTip: "Degree Hierarchy: The numerator is degree 3, the denominator is degree 2. The numerator shrinks faster. This signals Polar Coordinates for a clean kill.",
        solution: [
          "Substitute $x = r\\cos\\theta$ and $y = r\\sin\\theta$. The limit becomes $r \\to 0$.",
          "$\\lim_{r \\to 0} \\frac{2r^3\\cos^3\\theta - r^3\\sin^3\\theta}{r^2}$.",
          "Factor out $r^2$: $\\lim_{r \\to 0} r(2\\cos^3\\theta - \\sin^3\\theta)$.",
          "Since trig functions are bounded between -1 and 1, as $r \\to 0$, the whole expression goes to $0$.",
          "Conclusion: The limit equals $0$."
        ]
      }
    ]
  },
  tangent_plane: {
    title: "Tangent Plane Constructor",
    subtitle: "A systematic approach to deriving tangent equations on 3D surfaces.",
    startNode: {
      id: "start",
      label: "Find Tangent Plane",
      branches: [
        {
          label: "Assess the given equation format",
          node: {
            id: "format",
            label: "Is it $z=f(x,y)$ or $F(x,y,z)=c$?",
            branches: [
              {
                label: "Explicit: $z = f(x,y)$",
                node: {
                  id: "explicit",
                  label: "Find $f_x$ and $f_y$",
                  branches: [
                    {
                      label: "Evaluate at $(x_0, y_0)$",
                      node: { id: "finish_exp", label: "Use: $z - z_0 = f_x(x-x_0) + f_y(y-y_0)$", isAction: true }
                    }
                  ]
                }
              },
              {
                label: "Implicit: $F(x,y,z) = c$",
                node: {
                  id: "implicit",
                  label: "Find $F_x, F_y, F_z$ (Gradient $\\nabla F$)",
                  branches: [
                    {
                      label: "Evaluate at $(x_0, y_0, z_0)$",
                      node: { id: "finish_imp", label: "Use: $F_x(x-x_0) + F_y(y-y_0) + F_z(z-z_0) = 0$", isAction: true }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    howTo: `### 🧠 Structural Cognition for Planes
A plane is defined by two things: a point and a normal vector (perpendicular to the plane). 
1. **The Shape Parser:** When your brain sees $z = x^2 + y^2$, categorize it as an "Explicit Height Map". The slopes $f_x$ and $f_y$ tilt the plane.
2. **The Volume Parser:** When you see $x^2 + y^2 + z^2 = 9$, categorize it as an "Implicit Solid". The gradient vector $\\nabla F = \\langle F_x, F_y, F_z \\rangle$ is the 3D normal vector pushing outward from the surface.`,
    branchesExplanation: {
      "Explicit $z=f(x,y)$": "Best for functions representing height. Example: A paraboloid bowl. The plane rests on top, supported by the x-slope ($f_x$) and y-slope ($f_y$).",
      "Implicit $F(x,y,z)=c$": "Best for closed 3D shapes. Example: A sphere. The gradient $\\nabla F$ acts like a ray of light shining outward exactly perpendicular to the surface."
    },
    exercises: [
      {
        question: "Find the equation of the tangent plane to $z = e^{x^2 - y^2}$ at the point $(1, -1, 1)$.",
        level: "Medium",
        neuroTip: "Categorization: This is explicitly $z = f(x,y)$. Use the Explicit branch. The derivative of an exponential is the chain rule in action.",
        solution: [
          "Format is Explicit: $f(x,y) = e^{x^2 - y^2}$.",
          "Compute partials: $f_x = 2x e^{x^2 - y^2}$ and $f_y = -2y e^{x^2 - y^2}$.",
          "Evaluate at $(1, -1)$: $f_x(1, -1) = 2(1)e^0 = 2$. $f_y(1, -1) = -2(-1)e^0 = 2$.",
          "Apply formula: $z - 1 = 2(x - 1) + 2(y - (-1))$.",
          "Simplify: $z = 2x + 2y + 1$."
        ]
      },
      {
        question: "Find the tangent plane to the ellipsoid $x^2 + 2y^2 + 3z^2 = 21$ at the point $(4, 1, 1)$.",
        level: "Medium",
        neuroTip: "Categorization: The variables are mixed together, defining a closed shape. This triggers the Implicit branch. Compute the 3D Gradient $\\nabla F$.",
        solution: [
          "Format is Implicit: $F(x,y,z) = x^2 + 2y^2 + 3z^2$.",
          "Compute gradient $\\nabla F = \\langle F_x, F_y, F_z \\rangle$: $\\langle 2x, 4y, 6z \\rangle$.",
          "Evaluate at $(4, 1, 1)$: $\\nabla F = \\langle 8, 4, 6 \\rangle$. This is the normal vector to the plane.",
          "Apply formula: $8(x - 4) + 4(y - 1) + 6(z - 1) = 0$.",
          "Simplify: $8x + 4y + 6z = 42$ (or $4x + 2y + 3z = 21$)."
        ]
      },
      {
        question: "Find the tangent plane to $x\\cos(z) - y^2\\sin(x) + z^3 = 0$ at the origin $(0,0,0)$.",
        level: "Difficult",
        neuroTip: "Sensory Overload Prevention: The equation looks terrifying. Don't panic. Categorize it. It is an Implicit function $F=0$. Calculate partials methodically at $(0,0,0)$. Most terms will collapse to zero.",
        solution: [
          "Implicit function: $F(x,y,z) = x\\cos(z) - y^2\\sin(x) + z^3$.",
          "$F_x = \\cos(z) - y^2\\cos(x)$. At $(0,0,0)$, $F_x = \\cos(0) - 0 = 1$.",
          "$F_y = -2y\\sin(x)$. At $(0,0,0)$, $F_y = 0$.",
          "$F_z = -x\\sin(z) + 3z^2$. At $(0,0,0)$, $F_z = 0$.",
          "Normal vector is $\\langle 1, 0, 0 \\rangle$.",
          "Plane equation: $1(x - 0) + 0(y - 0) + 0(z - 0) = 0$.",
          "Conclusion: The tangent plane is simply $x = 0$."
        ]
      }
    ]
  },
  chain_rule: {
    title: "The Multivariable Chain Rule",
    subtitle: "Drawing dependency trees to accurately track cascading derivatives.",
    startNode: {
      id: "start",
      label: "Find Derivative (e.g., $\\partial z / \\partial t$)",
      branches: [
        {
          label: "Step 1",
          node: {
            id: "id_vars",
            label: "Identify Top (Dependent) and Bottom (Independent) Variables",
            branches: [
              {
                label: "Step 2",
                node: {
                  id: "tree",
                  label: "Draw the Dependency Tree (Top $\\to$ Intermediates $\\to$ Bottom)",
                  branches: [
                    {
                      label: "Step 3",
                      node: {
                        id: "calc",
                        label: "Trace Paths & Calculate",
                        branches: [
                          {
                            label: "Vertical Paths",
                            node: { id: "finish_1", label: "MULTIPLY down a single branch", isAction: true }
                          },
                          {
                            label: "Parallel Paths",
                            node: { id: "finish_2", label: "ADD separate branches together", isAction: true }
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
    howTo: `### 🧠 Visualizing the Cascade
The Chain Rule is often perceived as a confusing formula to memorize. **Neuro-hack: Treat it as a map.**
1. **The Nodes:** Your dependent variable $z$ is the executive. It delegates to managers $x$ and $y$. They delegate to ground workers $s$ and $t$.
2. **The Paths:** To find how $s$ affects $z$, you trace every communication line from $s$ up to $z$.
3. **The Math:** Walking *along* a path requires multiplying the effects (derivatives). If there are *multiple* paths leading from $s$ to $z$, you add those distinct paths together.`,
    branchesExplanation: {
      "Dependent vs Independent": "Top vs Bottom. In $z = f(x,y)$ where $x(s,t)$ and $y(s,t)$, $z$ is top, $s,t$ are bottom.",
      "Draw the Tree": "Literally sketch it. Connect $z$ to $x$ and $y$. Then connect $x$ to $s$ and $t$. Connect $y$ to $s$ and $t$.",
      "Multiply Down": "Path $z \\to x \\to s$ means $\\frac{\\partial z}{\\partial x} \\cdot \\frac{\\partial x}{\\partial s}$.",
      "Add Across": "Total effect of $s$ on $z$ = (Path through $x$) $+$ (Path through $y$)."
    },
    exercises: [
      {
        question: "Let $z = x^2y - y^2x$, where $x = u\\sin(v)$ and $y = u\\cos(v)$. Find $\\partial z / \\partial u$.",
        level: "Medium",
        neuroTip: "Map the dependencies: $z$ depends on $x,y$. Both $x,y$ depend on $u$. There are two distinct paths to $u$. Calculate them separately, then add.",
        solution: [
          "Tree paths to $u$: ($z \\to x \\to u$) and ($z \\to y \\to u$).",
          "Formula: $\\frac{\\partial z}{\\partial u} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial u} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial u}$.",
          "Partials of $z$: $\\partial z/\\partial x = 2xy - y^2$, and $\\partial z/\\partial y = x^2 - 2xy$.",
          "Partials of $x,y$: $\\partial x/\\partial u = \\sin(v)$, and $\\partial y/\\partial u = \\cos(v)$.",
          "Combine: $(2xy - y^2)\\sin(v) + (x^2 - 2xy)\\cos(v)$."
        ]
      },
      {
        question: "Let $w = x e^y$, where $x = t^2$, $y = 1 - t$. Find $dw/dt$ at $t = 1$.",
        level: "Medium",
        neuroTip: "Strategic Evaluation: Do NOT substitute the $t$ equations into $w$ first, and do NOT algebraically combine the massive derivative. Compute the numerical values of the partials FIRST, then combine. Numbers are easier for the brain to process than variables.",
        solution: [
          "At $t = 1$: $x = (1)^2 = 1$; $y = 1 - 1 = 0$.",
          "Partials of $w$: $\\partial w/\\partial x = e^y$. At $(1,0)$, $e^0 = 1$.",
          "Partials of $w$: $\\partial w/\\partial y = xe^y$. At $(1,0)$, $1(e^0) = 1$.",
          "Partials of $x,y$: $dx/dt = 2t = 2(1) = 2$. $dy/dt = -1$.",
          "Chain Rule Formula: $dw/dt = (\\partial w/\\partial x)(dx/dt) + (\\partial w/\\partial y)(dy/dt)$.",
          "Plug in numbers: $1(2) + 1(-1) = 1$."
        ]
      },
      {
        question: "Let $u = r^2 + s^2$, where $r = y+x\\cos(t)$ and $s = x+y\\sin(t)$. Find $\\partial u / \\partial x$, $\\partial u / \\partial y$, and $\\partial u / \\partial t$ at $(x,y,t) = (1, 2, 0)$.",
        level: "Difficult",
        neuroTip: "Hierarchy Isolation: Notice that $u$ is the top, $r,s$ are mid, and $x,y,t$ are bottom. Focus entirely on one bottom variable at a time to prevent cognitive overload. Treat the other bottom variables as invisible.",
        solution: [
          "Evaluate intermediate states at $(1, 2, 0)$: $r = 2 + 1\\cos(0) = 3$. $s = 1 + 2\\sin(0) = 1$.",
          "Compute top partials: $\\partial u/\\partial r = 2r = 6$. $\\partial u/\\partial s = 2s = 2$.",
          "Path for $x$: $\\partial u/\\partial x = (\\partial u/\\partial r)(\\partial r/\\partial x) + (\\partial u/\\partial s)(\\partial s/\\partial x)$.",
          "$\\partial r/\\partial x = \\cos(t) = 1$. $\\partial s/\\partial x = 1$. So $\\partial u/\\partial x = 6(1) + 2(1) = 8$.",
          "Path for $y$: $\\partial u/\\partial y = (\\partial u/\\partial r)(\\partial r/\\partial y) + (\\partial u/\\partial s)(\\partial s/\\partial y)$.",
          "$\\partial r/\\partial y = 1$. $\\partial s/\\partial y = \\sin(t) = 0$. So $\\partial u/\\partial y = 6(1) + 2(0) = 6$.",
          "Path for $t$: $\\partial u/\\partial t = (\\partial u/\\partial r)(\\partial r/\\partial t) + (\\partial u/\\partial s)(\\partial s/\\partial t)$.",
          "$\\partial r/\\partial t = -x\\sin(t) = 0$. $\\partial s/\\partial t = y\\cos(t) = 2$. So $\\partial u/\\partial t = 6(0) + 2(2) = 4$."
        ]
      }
    ]
  },
  directional_derivative: {
    title: "Directional Derivatives & Gradient Action",
    subtitle: "Mastering the rate of change in any 3D direction.",
    startNode: {
      id: "start",
      label: "Find Directional Derivative $D_{\\mathbf{u}}f$",
      branches: [
        {
          label: "Step 1: The Compass",
          node: {
            id: "gradient",
            label: "Calculate Gradient $\\nabla f = \\langle f_x, f_y \\rangle$",
            branches: [
              {
                label: "Step 2: The Path",
                node: {
                  id: "vector",
                  label: "Examine the given direction vector $\\mathbf{v}$",
                  branches: [
                    {
                      label: "Vector length is exactly 1",
                      node: { id: "unit_v", label: "Use $\\mathbf{u} = \\mathbf{v}$", isAction: true }
                    },
                    {
                      label: "Vector length $\\neq 1$",
                      node: { id: "norm_v", label: "Normalize: $\\mathbf{u} = \\mathbf{v} / ||\\mathbf{v}||$", isAction: true }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    howTo: `### 🧠 Vectors vs Unit Rates
Think of measuring the steepness of a hill. The "rate" must be consistently measured over "1 unit of distance". 
1. **The Gradient Engine:** The gradient vector $\\nabla f$ mathematically encodes ALL slopes at your current coordinate. 
2. **The Vector Filter:** Taking the dot product of the gradient with a vector "filters" out the steepness pointing precisely in that direction.
3. **The Normalization Trap:** If you use a direction vector of length 5, your result will be 5 times too large. You MUST normalize it to length 1 (a unit vector $\\mathbf{u}$) first to get the true "per-step" steepness.`,
    branchesExplanation: {
      "Calculate Gradient": "The Gradient $\\langle f_x, f_y \\rangle$ points straight up the steepest path of the mountain.",
      "Normalize Vector": "If you are told 'go in the direction $\\langle 3, 4 \\rangle$', its length is 5. Divide by 5 to get the unit vector $\\langle 3/5, 4/5 \\rangle$."
    },
    exercises: [
      {
        question: "Find the directional derivative of $f(x,y) = 2x^2y^3 + 6xy$ at $(1, 1)$ in the direction of the angle $\\theta = \\pi/6$.",
        level: "Easy-Medium",
        neuroTip: "Implicit Unit Vector: When you are given an angle $\\theta$, the unit vector is automatically generated using $\\langle \\cos\\theta, \\sin\\theta \\rangle$. It is guaranteed to have length 1.",
        solution: [
          "Gradient $\\nabla f = \\langle 4xy^3 + 6y, 6x^2y^2 + 6x \\rangle$.",
          "Evaluate at $(1,1)$: $\\nabla f(1,1) = \\langle 10, 12 \\rangle$.",
          "Unit vector from angle: $\\mathbf{u} = \\langle \\cos(\\pi/6), \\sin(\\pi/6) \\rangle = \\langle \\sqrt{3}/2, 1/2 \\rangle$.",
          "Dot product: $D_\\mathbf{u}f = \\nabla f \\cdot \\mathbf{u} = 10(\\sqrt{3}/2) + 12(1/2) = 5\\sqrt{3} + 6$."
        ]
      },
      {
        question: "Find the max rate of change of $f(x,y) = y e^{xy}$ at $(0, 2)$, and the direction it occurs in.",
        level: "Medium",
        neuroTip: "Gradient Superpower: You don't need a formula for max rate. The gradient vector literally IS the direction of maximum change, and its magnitude IS the maximum rate. This is the fundamental definition of the gradient.",
        solution: [
          "Gradient $\\nabla f = \\langle y^2 e^{xy}, e^{xy} + xy e^{xy} \\rangle$.",
          "Evaluate at $(0,2)$: $f_x = (2)^2 e^0 = 4$. $f_y = e^0 + 0 = 1$.",
          "The Gradient is $\\langle 4, 1 \\rangle$. This IS the direction of maximum rate of change.",
          "The max rate is the length: $||\\langle 4, 1 \\rangle|| = \\sqrt{16 + 1} = \\sqrt{17}$."
        ]
      },
      {
        question: "Find the directional derivative of $f(x,y,z) = x^2z + y^3z^2 - xyz$ at $P(1, 1, 1)$ in the direction of $Q(3, -1, 2)$.",
        level: "Difficult",
        neuroTip: "Positional Construction: A direction is not a point. You must construct the vector from $P$ to $Q$ first ($Q - P$), and then you MUST remember to normalize it.",
        solution: [
          "Construct direction vector $\\mathbf{v} = \\vec{PQ} = \\langle 3-1, -1-1, 2-1 \\rangle = \\langle 2, -2, 1 \\rangle$.",
          "Calculate length of $\\mathbf{v}$: $\\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$.",
          "Normalize to unit vector $\\mathbf{u} = \\langle 2/3, -2/3, 1/3 \\rangle$.",
          "Compute $\\nabla f = \\langle 2xz - yz, 3y^2z^2 - xz, x^2 + 2y^3z - xy \\rangle$.",
          "Evaluate $\\nabla f$ at $(1,1,1)$: $\\langle 2-1, 3-1, 1+2-1 \\rangle = \\langle 1, 2, 2 \\rangle$.",
          "Dot product: $1(2/3) + 2(-2/3) + 2(1/3) = 2/3 - 4/3 + 2/3 = 0$.",
          "Conclusion: The derivative is 0. We are walking along a contour line!"
        ]
      }
    ]
  }
  ,
  constrained_vars: {
    title: "Partial Derivatives with Constrained Variables",
    subtitle: "A logical flow for isolating independent variables.",
    startNode: {
      id: "start",
      label: "Find $(\\partial w / \\partial x)_{indep}$",
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
    howTo: `### 🧠 Constrained Dependencies
When finding partial derivatives under constraints, you must differentiate between variables you control (independent) and those rigidly tied to them (dependent).
1. **The Target:** Usually, the question specifies the independent variables in the format $(\\frac{\\partial w}{\\partial x})_{y,z}$ meaning $x,y,z$ are independent.
2. **The Bottleneck:** Express $w$ strictly in terms of the independent variables. If direct substitution is algebraic hell, use implicit differentiation.
3. **The Execution:** Differentiate $w$ with respect to the variable of interest, treating all other independent variables as pure constants.`,
    branchesExplanation: {
      "Identify independent variables": "Look at the subscript on the derivative notation. E.g., $(\frac{\partial w}{\partial x})_y$ means $x$ and $y$ are the independent ones.",
      "Express w using indep vars": "If $w=x^2+y^2+z$ and constraint is $z=xy$, substitute to get $w(x,y)=x^2+y^2+xy$.",
      "Implicit Differentiation": "When you cannot substitute easily, take the total derivative $dw$ and apply the chain rule across constraints."
    },
    exercises: [
      {
        question: "Let $w=x^2+y^2+z^2$ with constraint $z=x^2+y^2$. Find $(\\partial w / \\partial x)_y$.",
        level: "Medium",
        neuroTip: "Direct Substitution: Since $z$ is explicitly given in terms of $x$ and $y$, eliminate $z$ completely before differentiating. Thus making $w$ solely a function of independent vars $x$ and $y$.",
        solution: [
          "Independent variables are $x,y$.",
          "Substitute $z$: $w = x^2+y^2+(x^2+y^2)^2$.",
          "Differentiate w.r.t $x$ holding $y$ constant: $2x + 2(x^2+y^2)(2x) = 2x + 4x^3 + 4xy^2$."
        ]
      }
    ]
  }
};

const TreeNode = ({ node, depth = 0 }: { node: Node, depth?: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: depth * 0.15 }}
      className="flex flex-col items-center">
      <div className={`
        relative px-6 py-3 rounded-lg border-2 shadow-sm whitespace-nowrap text-sm font-semibold
        ${node.isAction 
          ? 'bg-emerald-50 border-emerald-500 text-emerald-800' 
          : 'bg-indigo-50 border-indigo-500 text-indigo-900'}
        transition-all hover:-translate-y-0.5 hover:shadow-md z-10
      `}>
        <div className="prose prose-sm prose-p:my-0 max-w-none text-inherit">
          <ReactMarkdown 
            remarkPlugins={[remarkMath]} 
            rehypePlugins={[rehypeKatex]}
          >
            {node.label}
          </ReactMarkdown>
        </div>
      </div>
      
      {node.branches && node.branches.length > 0 && (
        <div className="flex flex-row relative pt-6 mt-1 w-full justify-center gap-8 md:gap-16">
          {/* Connecting lines */}
          <div className="absolute top-0 w-[calc(100%-4rem)] h-6 border-t-2 border-slate-300 pointer-events-none" />
          <div className="absolute top-0 h-6 border-l-2 border-slate-300 pointer-events-none" />
          
          {node.branches.map((branch, i) => (
            <div key={i} className="flex flex-col items-center flex-1 relative">
              <div className="absolute top-0 h-6 border-r-2 border-slate-300 right-1/2 w-1/2" style={{
                display: node.branches?.length === 1 ? 'none' : 'block',
                borderTopRightRadius: i === 0 ? '0' : '0',
                borderTopLeftRadius: i === node.branches!.length - 1 ? '0' : '0',
                borderTopStyle: i > 0 && i < node.branches!.length - 1 ? 'solid' : 'hidden',
              }}></div>

              {/* Arrow and Label */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-slate-400 bg-white px-1">
                <ArrowDown size={14} />
              </div>
              <div className="mb-4 mt-2 px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-500 rounded-full z-10 text-center max-w-[150px] shadow-sm">
                 <div className="prose prose-sm prose-p:my-0 max-w-none text-inherit">
                   <ReactMarkdown 
                      remarkPlugins={[remarkMath]} 
                      rehypePlugins={[rehypeKatex]}
                    >
                      {branch.label}
                    </ReactMarkdown>
                  </div>
              </div>
              
              <TreeNode node={branch.node} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export const ProblemSolvingFlow = ({ flowType }: { flowType: string }) => {
  const data = flows[flowType];
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);

  if (!data) return <div className="text-red-500 border p-4 font-mono">Flow parameter '{flowType}' not found.</div>;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="my-10 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm font-sans mx-auto max-w-[900px]">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
           <Brain size={160} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-indigo-200 font-semibold tracking-wider text-xs uppercase mb-2">
            <CheckCircle2 size={16} /> Algorithmic Decision Tree
          </div>
          <h2 className="text-2xl md:text-3xl mt-0 font-bold tracking-tight text-white mb-2">{data.title}</h2>
          <p className="text-indigo-100 max-w-xl text-sm leading-relaxed mb-0">{data.subtitle}</p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        
        {/* Visual Map */}
        <div className="bg-white border text-center border-slate-200 p-8 pt-10 rounded-xl overflow-x-auto overflow-y-hidden shadow-inner mb-8">
          <div className="inline-block min-w-max mx-auto relative pt-4">
            <TreeNode node={data.startNode} />
          </div>
        </div>

        <hr className="border-slate-200 my-8" />

        {/* The Master Tutor's Guide */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-4 tracking-tight">
               <Brain className="text-indigo-600" size={20} /> 
               How to Navigate
            </h3>
            <div className="prose prose-sm prose-slate max-w-none text-slate-600">
               <div className="markdown-body">
                 <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                   {data.howTo}
                 </ReactMarkdown>
               </div>
            </div>
          </div>
          
          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-4 tracking-tight">
               <CornerDownRight className="text-indigo-600" size={20} /> 
               Branch Diagnostics
            </h3>
            <ul className="space-y-4">
              {Object.entries(data.branchesExplanation).map(([branch, exp], idx) => (
                <li key={idx}>
                  <strong className="text-indigo-900 block text-sm font-bold bg-indigo-100 w-fit px-2 py-0.5 rounded-md mb-1.5">{branch}</strong>
                  <div className="text-sm text-slate-600 leading-relaxed prose prose-sm prose-p:my-0 max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{exp}</ReactMarkdown>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-slate-200 my-8" />

        {/* Master Tutor Exercises */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-6 tracking-tight">
             <BookOpen className="text-indigo-600" size={20} /> 
             Master Tutor Exercises
          </h3>
          
          <div className="space-y-4">
            {data.exercises.map((ex, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition-all hover:border-indigo-300 bg-white">
                <button 
                  onClick={() => setExpandedExercise(expandedExercise === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-start gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-md flex items-center justify-center shrink-0 border 
                    ${ex.level.includes('Difficult') ? 'bg-red-50 text-red-600 border-red-200' : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
                    <MousePointerClick size={14} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[10px] uppercase tracking-bold font-bold px-2 py-0.5 rounded-full
                        ${ex.level.includes('Difficult') ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {ex.level}
                      </span>
                    </div>
                    <div className="text-slate-800 font-medium prose prose-slate max-w-none prose-p:my-0">
                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                        {ex.question}
                      </ReactMarkdown>
                    </div>
                  </div>
                  <div className="shrink-0 text-slate-400 mt-1">
                    {expandedExercise === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                {expandedExercise === idx && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50">
                    <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg mb-5 mt-2 flex items-start gap-3">
                      <Brain className="text-indigo-500 shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="font-bold text-indigo-900 text-sm block mb-1">Master Tutor Insight:</span>
                        <p className="text-sm text-indigo-800 leading-relaxed mb-0">{ex.neuroTip}</p>
                      </div>
                    </div>
                    <div className="pl-4 border-l-2 border-indigo-200 ml-2 space-y-3">
                      {ex.solution.map((step, sIdx) => (
                        <div key={sIdx} className="flex gap-3">
                          <span className="text-xs font-bold text-indigo-400 mt-1 shrink-0">{sIdx + 1}.</span>
                          <div className="text-sm text-slate-600 prose prose-sm prose-slate max-w-none prose-p:my-0">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {step}
                            </ReactMarkdown>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
