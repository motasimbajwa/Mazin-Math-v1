const fs = require('fs');
let txt = fs.readFileSync('src/data.ts', 'utf8');
txt = txt.replace('data-plot-id="surface"', 'data-plot-id="contour_paraboloid"');
txt = txt.replace('data-plot-id="partial_derivative"', 'data-plot-id="partial_derivatives"');
fs.writeFileSync('src/data.ts', txt);
