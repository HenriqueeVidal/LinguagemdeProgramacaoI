import express from 'express'
import contatoRouter from './routes/ContatoRoutes.js'
import db from './db.js'

//npm i cors
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


db.sync(() => console.log("Banco de dados preparado"))

app.use('/contatos',contatoRouter)

app.listen(3000, () => {console.log('API Rodando na porta 3000!')})