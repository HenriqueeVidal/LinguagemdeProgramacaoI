const podeDirigir = true
const podeBeber = false

console.log((podeDirigir) ? "Pode dirigir" : "Não pode" )  // Operador ternário


if(podeDirigir && podeBeber){
    console.log("Manda prender")
}else console.log("Deixa solto")

console.log(podeBeber == podeDirigir)  //checa o conteúdo sem verificar o tipo do dado

console.log(podeBeber === podeDirigir) // checa o conteúdo verificando o tipo do dado 0 <> "0" <> false


const lista = [1,3,7,9]

console.log(lista)
console.log(lista[2])
lista.push(15)
console.log(lista)
lista.pop()
console.log(lista)
console.log(`Existem ${lista.length} itens na lista`)

function imprimir(valor){
    console.log(valor)
}


for(let i=0;i<lista.length;i++){
    console.log(lista[i])
}

lista.forEach(function(item) {
    console.log(item)
})


const abc = (a) => {  // arrow function
    return a*10
}

lista.forEach(function(valor){
    imprimir(valor)
})

lista.forEach(valor => imprimir(valor))  //Arrow function dentro do forEach

