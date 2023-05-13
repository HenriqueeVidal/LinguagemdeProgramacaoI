import { Contato, create, destroy, findByPk, findAll } from "../Models/Contato.js"

class ContatoController {
    static list(req, res) {
        res.json(findAll())
    }

    static getContatoById(req, res) {
        const id = parseInt(req.params.id)
        const contato = findByPk(id)
        if (!contato) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        res.json(contato)
    }

    static createContato(req, res) {
        const { nome, email, telefone } = req.body
        if (!nome || !email || !telefone) {
            res.status(400).json({ error: "Informe todos os campos!" })
            return
        }
        const contato = new Contato(0, nome, email, telefone)
        const createdcontato = create(contato)
        res.status(201).json(createdcontato)
    }

    static destroyContato(req, res) {
        const id = parseInt(re.params.id)
        const contato = findByPk(id)
        if (!contato) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        destroy(id)
        res.json({ message: "Removido com sucesso" })
    }

    static updateContato(req, res) {
        const id = parseInt(req.params.id)
        const contato = findByPk(id)
        if (!contato) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }

        const { nome, email, telefone } = req.body
        if (!nome || !email || !telefone) {
            res.status(400).json({ error: "Informe todos os campos!" })
            return
        }
        contato.nome = nome
        contato.email = email
        contato.telefone = telefone

        update(id, contato)
        res.json(contato)
    }
}

export default ContatoController