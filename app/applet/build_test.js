import { build } from 'esbuild';

const buildTest = async () => {
  await build({
    entryPoints: ['src/test_math_html.tsx'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/test.js',
    external: ['react', 'react-dom', 'react-markdown', 'remark-math', 'rehype-katex', 'rehype-raw', 'clsx', 'tailwind-merge'],
  });
};

buildTest();
