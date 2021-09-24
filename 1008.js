var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numFuncionario = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());

console.log(`NUMBER = ${numFuncionario}`);
console.log(`SALARY = U$ ${(horasTrabalhadas*valorHora).toFixed(2)}`);