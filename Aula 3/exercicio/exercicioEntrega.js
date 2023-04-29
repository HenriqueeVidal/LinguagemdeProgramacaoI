/*Criar um código com Node para realizar as operações básicas (soma, subtração, divisão e multiplicação)
O projeto deve pedir a quantidade de valores que serão digitados
O projeto vai solicitar qual operação será realizada
Em seguida vai executar a operação com cada um deles
No final deve apresentar o resultado*/

import PromptSync from "prompt-sync"

const prompt = PromptSync()
const numValores = Number(prompt("Informe a quantidade de valores desejada: "))
let valores = []
let resultado

    for(let i=0; i<numValores;i++){
    valores[i] = Number(prompt(`Insira o valor número ${i+1}: `))
    }

let oper = prompt("Insira qual a operação desejada: + | - | * | / : ")

switch(oper){   
    case '+':
        for(let i=0; i<numValores;i++){
            if(i==0){
                resultado = valores[0]
            }else resultado += valores[i]
           }
    console.log(`A soma é de ${resultado}`)
    break
    case '-':
        for(let i=0; i<numValores;i++){
            if(i==0){
                resultado = valores[0]
            }else resultado -= valores[i]
           }
    console.log(`A diferença é de ${resultado}`)
    break
    case '*':
        for(let i=0; i<numValores;i++){
            if(i==0){
                resultado = valores[0]
            }else resultado *= valores[i]
           }
    console.log(`O produto é de ${resultado}`)
    break
    case '/':
        for(let i=0; i<numValores;i++){
            if(i==0){
                resultado = valores[0]
            }else resultado /= valores[i]
           }
    console.log(`O quociente é de ${resultado}`)
    break
}