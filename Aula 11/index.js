import express from 'express'
import contatoRouter from './routes/ContatoRoutes.js'
import db from './db.js'

const app = express()
app.use(express.json())

db.sync(() => console.log("Banco de dados preparado"))

app.use('/contatos',contatoRouter)

app.listen(3000, () => {console.log('API Rodando na porta 3000!')})