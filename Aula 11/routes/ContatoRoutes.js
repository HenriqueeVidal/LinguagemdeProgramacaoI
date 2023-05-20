import express from 'express'
import ContatoController from '../Controllers/ContatoController.js'

const contatoRouter = express.Router()

contatoRouter.get('/', ContatoController.list)
contatoRouter.post('/', ContatoController.createContato)
contatoRouter.get('/:id', ContatoController.getContatoById)
contatoRouter.delete('/:id', ContatoController.destroyContato)
contatoRouter.put('/:id', ContatoController.updateContato)

export default contatoRouter