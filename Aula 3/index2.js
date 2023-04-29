import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync()
const qtde = prompt("Quantas vezes imprimir a mensagem? ")

let soma = 0
for (let i=1; i<=qtde; i++) {
    soma += i
    console.log(`Mensagem ${i}`)
    console.log(`Soma ${soma}`)
}