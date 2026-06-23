const fs = require("fs");
let txt = fs.readFileSync("src/data.ts", "utf8");

txt = txt.replace("The **Divergence** of a vector field is a scalar operation that measures precisely this.",
"The **Divergence** of a vector field is a scalar operation that measures precisely this.\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"divergence_cuboid\\"></div>");

txt = txt.replace("Imagine throwing a tiny, microscopic paddle wheel (like a water wheel) into a flowing river.",
"Imagine throwing a tiny, microscopic paddle wheel (like a water wheel) into a flowing river.\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"curl_paddle_wheel\\"></div>");

txt = txt.replace("Stokes\\' Theorem:** Relates the circulation of a field around a closed loop",
"Stokes\\' Theorem:** Relates the circulation of a field around a closed loop to any surface bounded by it.\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"stokes_capping_surface\\"></div>\\n Relates the circulation of a field around a closed loop");

txt = txt.replace("Project the surface onto an appropriate plane",
"Project the surface onto an appropriate plane (like the xy-plane):\\n<div class=\\"plot-interactive my-6\\" data-plot-id=\\"surface_integral_projection\\"></div>\\nProject the surface onto an appropriate plane");

if (!txt.includes("surface_integral_projection")) {
    console.log("surface_integral_projection failed to insert");
}

fs.writeFileSync("src/data.ts", txt);
console.log("patched data.ts properly");
