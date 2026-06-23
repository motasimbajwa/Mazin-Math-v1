const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data.ts');
let data = fs.readFileSync(dataPath, 'utf8');

const replacements = [
  {
    from: /F\(x\) = ∫_0\^\{x\^2\} sqrt\(t\^4 \+ t\^3\) dt/g,
    to: '$F(x) = \\int_0^{x^2} \\sqrt{t^4 + t^3} \\, dt$'
  },
  {
    from: /F\(x\) = ∫_a\^\{g\(x\)\} f\(t\) dt/g,
    to: '$F(x) = \\int_a^{g(x)} f(t) \\, dt$'
  },
  {
    from: /g\(x\) = x\^2, so g'\(x\) = 2x/g, 
    to: '$g(x) = x^2$, so $g\'(x) = 2x$'
  },
  {
    from: /f\(t\) = sqrt\(t\^4 \+ t\^3\)/g, 
    to: '$f(t) = \\sqrt{t^4 + t^3}$'
  },
  {
    from: /f\(g\(x\)\) = sqrt\(\(x\^2\)\^4 \+ \(x\^2\)\^3\) = sqrt\(x\^8 \+ x\^6\)/g, 
    to: '$f(g(x)) = \\sqrt{(x^2)^4 + (x^2)^3} = \\sqrt{x^8 + x^6}$'
  },
  {
    from: /2x \* sqrt\(x\^8 \+ x\^6\)/g, 
    to: '$2x \\sqrt{x^8 + x^6}$'
  },
  {
    from: /2x sqrt\(x\^8 \+ x\^6\)/g, 
    to: '$2x \\sqrt{x^8 + x^6}$'
  },
  {
    from: /d\/dx\(x\^2\)/g, 
    to: '$\\frac{d}{dx}(x^2)$'
  }
];

replacements.forEach(({from, to}) => {
  data = data.replace(from, to);
});

fs.writeFileSync(dataPath, data);
console.log('Fixed math in data.ts');
