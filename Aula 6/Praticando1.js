
//Crie quatro funções (somar, subtrair, dividir e multiplicar). Em seguida faça uma função chamada calcular(), essa função deve receber 3 parâmetros, valor A, valor V e a função callback que será executada.

function somar(a, b) {
    return a + b
}
function subtrair(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b
}
function dividir(a, b) {
    return a / b
}
function calcular (a,b, callback){
    console.log(callback(a,b))
}

calcular(10,5,somar)
calcular(10,5,subtrair)
calcular(10,5,dividir)
calcular(10,5,multiplicar)


