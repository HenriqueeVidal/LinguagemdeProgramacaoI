import PromptSync from "prompt-sync"
// const prompt = require("prompt-sync")()

const prompt = PromptSync()
const print = console.log

const nome = prompt("Qual seu nome? ")
print(nome)
