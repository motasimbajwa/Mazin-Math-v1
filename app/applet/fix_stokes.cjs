const fs = require('fs');
let txt = fs.readFileSync('src/InteractivePlot.tsx', 'utf8');

txt = txt.replace(
  "defaultLayout.title = 'Stokes\\\\' Theorem: Capping Surfaces';",
  "defaultLayout.title = 'Stokes\\\\\\' Theorem: Capping Surfaces';"
);
txt = txt.replace(
  '{ text: "Stokes\\\\' Theorem states that integrating Curl over the soap bubble is exactly equal to the circulation along the wire ring!" }',
  '{ text: "Stokes\\\\\\' Theorem states that integrating Curl over the soap bubble is exactly equal to the circulation along the wire ring!" }'
);

fs.writeFileSync('src/InteractivePlot.tsx', txt);
