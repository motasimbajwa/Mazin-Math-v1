import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { renderToString } from 'react-dom/server';

const md = "* **Chain Rule:** $\\frac{dw}{dt} = \\frac{\\partial w}{\\partial x}$";
const html = renderToString(
  <ReactMarkdown
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeRaw, rehypeKatex]}
  >
    {md}
  </ReactMarkdown>
);
console.log(html);
