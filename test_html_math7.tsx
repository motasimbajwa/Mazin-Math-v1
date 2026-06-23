import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const md = `
<div class="test">

<span>1</span><p>Text $\\\\lim_{x \\\\to 2} x$</p>

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
