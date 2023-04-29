const prompt = require('prompt-sync')()

// const a = Number(prompt('Digite o valor de A: '))
// const b = Number(prompt('Digite o valor de B: '))

// const resultado = a*b

// console.log(resultado)

const temperatura = Number(prompt('Digite a temperatura: '))

if (temperatura < 37) {
    console.log("tá de boa")
} else {
    console.log("Deu ruim")
}


//para comentar várias linhas, selecionar e ctrl+;

// npm init --> ajuda a criar um pacote json para as configurações do projeto