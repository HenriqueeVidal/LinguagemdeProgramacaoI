import express from 'express'
import ContatoController from '../Controllers/ContatoController.js'
import { deflate } from 'zlib'

const contatoRouter = express.Router()

contatoRouter.get('/', ContatoController.list)

contatoRouter.get('/pao', ContatoController.find)

export default contatoRouter