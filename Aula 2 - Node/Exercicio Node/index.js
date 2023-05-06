const prompt = require('prompt-sync')()

let salario = Number(prompt('Insira o seu salário: '))
let percentual = Number(prompt('Insira o percentual do reajuste: '))

let reajuste = salario * (1 + (percentual / 100))

console.log("O valor do salario reajustado é de: " + reajuste)