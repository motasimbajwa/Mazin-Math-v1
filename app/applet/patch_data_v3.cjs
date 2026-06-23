const fs = require("fs");
let txt = fs.readFileSync("src/data.ts", "utf8");

txt = txt.replace("The concept of Divergence applies when dealing with vector fields representing",
"Here is a visualization of how we derive Divergence using an infinitesimally small cuboid volume:\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"divergence_cuboid\\"></div>\\n\\nThe concept of Divergence applies when dealing with vector fields representing");

txt = txt.replace("If you place a tiny paddle wheel in a flowing fluid", 
"To visualize what Curl means in fluid flow, imagine placing a tiny paddle wheel in a sheer flow where velocity increases with y:\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"curl_paddle_wheel\\"></div>\\n\\nIf you place a tiny paddle wheel in a flowing fluid");

if (txt.includes("Stokes' theorem relies on using a capping surface")) {
  txt = txt.replace("Stokes' theorem relies on using a capping surface",
"Stokes Theorem connects the circulation along the boundary loop to the surface integral of Curl over any capping surface:\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"stokes_capping_surface\\"></div>\\n\\nStokes' theorem relies on using a capping surface");
} else if (txt.includes("This relates a line integral around a closed path")) {
  txt = txt.replace("This relates a line integral around a closed path",
"Stokes Theorem connects the circulation along the boundary loop to the surface integral of Curl over any capping surface:\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"stokes_capping_surface\\"></div>\\n\\nThis relates a line integral around a closed path");
}

if (txt.includes("evaluate a surface integral")) {
  txt = txt.replace("evaluate a surface integral",
"evaluate a surface integral. One common strategy is to project the surface onto the xy-plane:\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"surface_integral_projection\\"></div>\\n\\nevaluate a surface integral");
}

fs.writeFileSync("src/data.ts", txt);
console.log("patched data.ts");
