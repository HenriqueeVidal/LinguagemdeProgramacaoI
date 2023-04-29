// Receber um peso a cada 30seg esse peso -15%, quanto tempo leva para o peso chegar em 0,10 ou menos

import PromptSync from "prompt-sync"

const prompt = PromptSync()

let peso = prompt("Insira o peso desejado: ")
let contTime = 0

while (peso > 0.10) {
    peso -= (peso * 0.15)
    contTime += 30
}

console.log(`O tempo necessário é de ${contTime} segundos`)
