/*  
    npm init -y
    npm i express
    adjust package (type:modules)
*/

import express from 'express'
import Nota from './notas.js'

const app = express()
const port = 3000

//rota  /  endpoint

/*
app.get('/',(requisicao,resposta)=>{
    resposta.send("Olá mundo!")
}) 
*/

app.get('/nota',(requisicao,resposta)=>{
    const nota1 = new Nota(1,"teste",true)
    resposta.json(nota1)
})

app.get('/notas',(requisicao,resposta)=>{
    const nota1 = new Nota(1,"teste",true)
    const nota2 = new Nota(2,"teste2",false)
    resposta.json([nota1,nota2])
})


app.get('/pessoa',(requisicao,resposta)=>{
    const pessoa = {id:1,nome:"Teste"}
    console.log(pessoa)
    resposta.json(pessoa) // resposta é o que envia a resposta da requisição e o '.' é o que define o que está sendo mandado.
})

app.listen(port, ()=>{
    console.log(`API executando na porta ${port}`)
})
