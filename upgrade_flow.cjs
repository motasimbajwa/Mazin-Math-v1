const fs = require('fs');

let txt = fs.readFileSync('src/ProblemSolvingFlow.tsx', 'utf8');

// Insert import if missing
if (!txt.includes('import { motion }')) {
  txt = txt.replace(/import React, \{ useState \} from 'react';/, "import React, { useState } from 'react';\nimport { motion } from 'motion/react';");
}

// Replace TreeNode div with motion.div
if (!txt.includes('<motion.div')) {

txt = txt.replace(
  /<div className="flex flex-col items-center">/,
  '<motion.div \n      initial={{ opacity: 0, y: 10 }}\n      animate={{ opacity: 1, y: 0 }}\n      transition={{ duration: 0.4, delay: depth * 0.15 }}\n      className="flex flex-col items-center"'
);

// We must also change the closing div for TreeNode
// But since there might be multiple divs, let's just use string replace very carefully

let lines = txt.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const TreeNode = ({ node, depth = 0 }')) {
    // find the return
    let depthCount = 0;
    for (let j = i; j < lines.length; j++) {
      if (lines[j].includes('<div className="flex flex-col items-center">')) {
         lines[j] = lines[j].replace('<div className="flex flex-col items-center">', '<motion.div \n      initial={{ opacity: 0, y: 10 }}\n      whileInView={{ opacity: 1, y: 0 }}\n      viewport={{ once: true, margin: "-50px" }}\n      transition={{ duration: 0.4, delay: depth * 0.15 }}\n      className="flex flex-col items-center">');
      }
      if (lines[j] === '    </div>' && lines[j+1] === '  );' && lines[j+2] === '};') {
         lines[j] = '    </motion.div>';
         break;
      }
    }
    break;
  }
}
txt = lines.join('\n');

// Let's add an animation to the main wrapper as well
txt = txt.replace(
  /<div className="my-10 bg-slate-50/,
  '<motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="my-10 bg-slate-50'
);

lines = txt.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const ProblemSolvingFlow =')) {
    for (let j = i; j < lines.length; j++) {
      if (lines[j] === '    </div>' && lines[j+1] === '  );' && lines[j+2] === '};') {
         lines[j] = '    </motion.div>';
      }
    }
  }
}
txt = lines.join('\n');

fs.writeFileSync('src/ProblemSolvingFlow.tsx', txt, 'utf8');
}
console.log("Upgraded animations!");
