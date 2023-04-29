import PromptSync from "prompt-sync"
const prompt = PromptSync()

const pessoas = []

function criarPessoa(nome, hobbies){
    return [
        nome, 
        hobbies
    ]
}

let nome = prompt("Digite o nome da pessoa ou deixa o vazio para sair")
while(nome!=""){
    console.log(nome)
    let nome = prompt("Digite o nome da pessoa ou deixa o vazio para sair")
}