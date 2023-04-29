function somar(a,b, callback){
    const resultado = a+b
    callback(resultado)
}

function imprimirResultado(resultado){
    console.log(`O resultado é ${resultado}`)
}

function verificarSeMaiorQue100(valor){
    if (valor>100){
        console.log("Maior que 100")
    }
}

somar(10,20,imprimirResultado)

somar(100,200, verificarSeMaiorQue100)

const minhaPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const resultado = Math.random()
        if(resultado<0.5){
            resolve("Sucesso!")
        }else{
            reject("Falha!")
        }
    },1000)
})


minhaPromise
.then((resposta)=>{
    console.log(`Executou e o resultado foi - Resposta: ${resposta}`)
})
.catch((resposta)=>{
    console.log(`Falhou durante a execução - Resposta: ${resposta}`)
})