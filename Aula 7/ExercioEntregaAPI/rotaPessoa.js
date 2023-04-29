
import express from 'express'
import { Pessoa } from './pessoa.js'
import { criaPessoa } from './pessoa.js'

const app = express()
const port = 3000

app.get('/pessoa', (requisicao, resposta) => {
    const pessoa = criaPessoa()
    resposta.json(pessoa)
})

app.get('/pessoas', (requisicao, resposta) => {
    let pessoa = {}
    for (let i = 1; i <= 5; i++) {
        pessoa[i] = criaPessoa()
    }
    resposta.json(pessoa)
})

app.listen(port, () => {
    console.log(`API executando na porta ${port}`)
})
