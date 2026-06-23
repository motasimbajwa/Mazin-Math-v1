const md = \`
<div class="user-quiz" data-question="test">
1. Math $x = 1$
</div>
\`;

let processedMd = md.replace(new RegExp("(<div[^>]*>)\\\\s*", "g"), '$1\\n\\n');
processedMd = processedMd.replace(new RegExp("\\\\s*(<\\\\/div>)", "g"), '\\n\\n$1');

console.log(JSON.stringify(processedMd));
