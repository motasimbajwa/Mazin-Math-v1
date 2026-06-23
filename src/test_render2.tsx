import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { renderToString } from 'react-dom/server';

const md = `### Formulas
*   **Chain Rule (1 Independent Variable):** $\\frac{dw}{dt} = \\frac{\\partial w}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial w}{\\partial y}\\frac{dy}{dt}$
*   **Chain Rule (2 Independent Variables):** $\\frac{\\partial w}{\\partial r} = \\frac{\\partial w}{\\partial x}\\frac{\\partial x}{\\partial r} + \\frac{\\partial w}{\\partial y}\\frac{\\partial y}{\\partial r} + \\frac{\\partial w}{\\partial z}\\frac{\\partial z}{\\partial r}$ (adjust for number of intermediate variables)
`;

const html = renderToString(
  <ReactMarkdown
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeRaw, rehypeKatex]}
  >
    {md}
  </ReactMarkdown>
);
console.log(html);
