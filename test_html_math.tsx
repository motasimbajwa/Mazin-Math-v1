import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const md = `
<div class="test">
  This is $\\\\lim_{x \\\\to 2}$ math!
</div>
`;

const result = renderToStaticMarkup(
  <ReactMarkdown
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeRaw, rehypeKatex]}
  >
    {md}
  </ReactMarkdown>
);

console.log(result);
