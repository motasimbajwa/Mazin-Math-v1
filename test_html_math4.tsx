import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const md = `
<div class="user-quiz" data-question="test">
1. Math $x = 1$
</div>

<div>
  <p>Some $y=2$</p>
</div>
`;

let processedMd = md.replace(/(<div[^>]*>)\\s*/g, '$1\\n\\n');
processedMd = processedMd.replace(/\\s*(<\\/div>)/g, '\\n\\n$1');

const result = renderToStaticMarkup(
  <ReactMarkdown
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeRaw, rehypeKatex]}
  >
    {processedMd}
  </ReactMarkdown>
);

console.log(result);
