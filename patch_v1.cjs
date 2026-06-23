const fs = require('fs');
let txt = fs.readFileSync('src/data.ts', 'utf8');

txt = txt.replace(
  '*   **Tangential Field:** A vector field where vectors circulate around a central origin, tangent to concentric circles. Example: $F(x, y) = -iy + jx$.',
  '*   **Tangential Field:** A vector field where vectors circulate around a central origin, tangent to concentric circles. Example: $F(x, y) = -iy + jx$.\\n\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"vector_field_tangential\\"></div>\\n\\n'
);

fs.writeFileSync('src/data.ts', txt);
