import express from 'express'
import contatoRouter from './routes/ContatoRoutes.js'


const app = express()
app.use(express.json())

app.use('/contatos',contatoRouter)

app.listen(3000, () => {console.log('API Rodando na porta 3000!')})