import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const md = `
<div class="test">

This is math: $\\int_0^1 x^2 dx$

| A | B |
|---|---|
| $\\alpha$ | Beta |

</div>
`;

console.log(renderToString(
  React.createElement(ReactMarkdown, {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeRaw]
  }, md)
));
