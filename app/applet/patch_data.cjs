const fs = require('fs');
let txt = fs.readFileSync('src/data.ts', 'utf8');

// Insert into Chapter V2: The Divergence
txt = txt.replace('The concept of Divergence applies when dealing with vector fields representing',
\`Here is a visualization of how we derive Divergence using an infinitesimally small cuboid volume:
<div class="plot-interactive my-6" data-plot-id="divergence_cuboid"></div>

The concept of Divergence applies when dealing with vector fields representing\`);

// Insert into Chapter V3: The Curl
txt = txt.replace('If you place a tiny paddle wheel in a flowing fluid', 
\`To visualize what Curl means in fluid flow, imagine placing a tiny paddle wheel in a sheer flow where velocity increases with $y$:
<div class="plot-interactive my-6" data-plot-id="curl_paddle_wheel"></div>

If you place a tiny paddle wheel in a flowing fluid\`);

// Insert into Chapter V3 (Stokes' Theorem)
if (txt.includes('Stokes\\' theorem relies on using a capping surface')) {
  txt = txt.replace('Stokes\\' theorem relies on using a capping surface',
\`Stokes\\' Theorem connects the circulation along the boundary loop to the surface integral of Curl over *any* capping surface:
<div class="plot-interactive my-6" data-plot-id="stokes_capping_surface"></div>

Stokes\\' theorem relies on using a capping surface\`);
} else {
  txt = txt.replace('This relates a line integral around a closed path',
\`Stokes\\' Theorem connects the circulation along the boundary loop to the surface integral of Curl over *any* capping surface:
<div class="plot-interactive my-6" data-plot-id="stokes_capping_surface"></div>

This relates a line integral around a closed path\`);
}

// Insert into Chapter II: Surface Integrals Projection
// Try to find a good spot in Chapter V2 or earlier. Let's look for "Surface Integrals".
if (txt.includes('evaluate a surface integral')) {
  txt = txt.replace('evaluate a surface integral',
\`evaluate a surface integral. One common strategy is to project the surface onto the xy-plane:
<div class="plot-interactive my-6" data-plot-id="surface_integral_projection"></div>

evaluate a surface integral\`);
}

fs.writeFileSync('src/data.ts', txt);
console.log('patched data.ts');
