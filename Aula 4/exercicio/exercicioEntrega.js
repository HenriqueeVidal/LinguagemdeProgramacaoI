/* Crie um código que vai ficar executando pedindo o nome do cliente (enquanto não digitar “” ele segue) e que vai pedir uma lista de hobbies da pessoa (enquanto não digitar “” vai adicionar os hobbies). No final escreva o nome da pessoa e seu hobbies no seguinte formato:
Nome | Hobby 1, Hobby 2, … */

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let matriz = []

do {
    let linha = []
    linha.push(prompt("Digite o nome do cliente: "))
    if (linha[0] != "")
        do {
            linha.push(prompt(`Insira o hobbie número ${linha.length} de ${linha[0]}: `))
        } while (linha[(linha.length) - 1] != "")
    matriz.push(linha)
} while (matriz[matriz.length - 1] != "")


matriz.forEach(function (linha) {
    let texto = ""
    if (linha[0] != "") {
        linha.forEach(function (valor, index) {
            if (index == 0) {
                texto += valor + " | "
            } else if (valor != "") {
                texto += valor + ", "
            }
        })
    }
    console.log(texto)
})