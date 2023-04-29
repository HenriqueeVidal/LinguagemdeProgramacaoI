// Tabuada - pedir o número e mostrar de 1 a 10 o resultado
import PromptSync from "prompt-sync";

const prompt = PromptSync()

const numero = prompt("Insira o número que se deseha a tabuada: ")


for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}