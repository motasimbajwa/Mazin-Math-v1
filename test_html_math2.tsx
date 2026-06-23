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

<quiz data-question="test">
1. Math $x = 1$
</quiz>

Here is a paragraph with <span class="bg-red-500">inline html and $y=2$ math</span>.
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
