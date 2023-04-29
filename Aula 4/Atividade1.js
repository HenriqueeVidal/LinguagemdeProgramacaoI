import PromptSync from "prompt-sync"
const prompt = PromptSync()

let numero = Number(prompt("Digite o número, ou 0 para sair: "))
let maior = numero
let menor = numero
const lista = []

while(numero !=0){
    lista.push(numero)
    numero = Number(prompt("Digite o número ou 0 mais sair: "))
}

let max = lista[0]
let min = lista[0]

lista.forEach(function (valor) {
    if (valor > max) max = valor
    if (valor < min) min = valor
})

console.log(max)
console.log(min)
