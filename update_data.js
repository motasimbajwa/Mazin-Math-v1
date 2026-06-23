const fs = require('fs');

const dataTsSource = fs.readFileSync('src/data.ts', 'utf8');

const updatedDataTsSource = dataTsSource; // We will manipulate it using regex or AST, but since it's a JS object, let's see.
