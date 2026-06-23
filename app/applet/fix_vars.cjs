const fs = require('fs');
let lines = fs.readFileSync('src/data.ts', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('1.  f_x = 2x + y. Plug in (1,2): 2(1) + 2 = 4.')) {
    lines[i] = lines[i].replace('f_x = 2x + y', '$f_x = 2x + y$').replace('2(1) + 2 = 4', '$2(1) + 2 = 4$').replace('(1,2)', '$(1,2)$');
  }
  if (lines[i].includes('f_y = x. Plug')) {
    lines[i] = lines[i].replace('f_y = x', '$f_y = x$').replace('(1,2): 1', '$(1,2)$: $1$');
  }
  if (lines[i].includes('  f_x = x. At (1,1) = 1.')) {
    lines[i] = lines[i].replace('f_x = x', '$f_x = x$').replace('(1,1) = 1', '$(1,1) = 1$');
  }
  if (lines[i].includes('  f_y = y. At (1,1) = 1.')) {
    lines[i] = lines[i].replace('f_y = y', '$f_y = y$').replace('(1,1) = 1', '$(1,1) = 1$');
  }
  if (lines[i].includes('3.  f_x = 3x^2 - y^2. At (1,1,0) = 3 - 1 = 2.')) {
    lines[i] = lines[i].replace('f_x = 3x^2 - y^2', '$f_x = 3x^2 - y^2$').replace('(1,1,0) = 3 - 1 = 2', '$(1,1,0) = 3 - 1 = 2$');
  }
  if (lines[i].includes('4.  f_y = -2xy. At (1,1,0) = -2.')) {
    lines[i] = lines[i].replace('f_y = -2xy', '$f_y = -2xy$').replace('(1,1,0) = -2', '$(1,1,0) = -2$');
  }
  if (lines[i].includes('Unit vector u = (2/7)i - (3/7)j + (6/7)k.')) {
    lines[i] = lines[i].replace('Unit vector u = (2/7)i - (3/7)j + (6/7)k', 'Unit vector $\\\\mathbf{u} = \\\\frac{2}{7}\\\\mathbf{i} - \\\\frac{3}{7}\\\\mathbf{j} + \\\\frac{6}{7}\\\\mathbf{k}$');
  }
}

fs.writeFileSync('src/data.ts', lines.join('\n'), 'utf8');
