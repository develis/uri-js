var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());

console.log(`A=${(raio*raio*3.14159).toFixed(4)}`);