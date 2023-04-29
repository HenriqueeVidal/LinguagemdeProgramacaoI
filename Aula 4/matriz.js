//Exemplo de matriz (array de arrays)

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matriz)

console.log(matriz[1][2])

matriz.forEach(linha=> {
    linha.forEach(valor => console.log(valor))
})

const lista = [11,8,4,5,45,47,5,19,214,15,54,5,48,9,977]
let max = 0

lista.forEach(function(valor) {
    if(valor>max){ max = valor} 
})

let min = max

lista.forEach(function(valor) {
    if(valor<min){ min = valor} 
})

console.log(max)
console.log(min)