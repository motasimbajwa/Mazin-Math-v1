const fs = require('fs');
let txt = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');

txt = txt.replace(/Stokes\\\\' Theorem/g, "Stokes' Theorem");

fs.writeFileSync('src/InteractivePlot.tsx', txt);
