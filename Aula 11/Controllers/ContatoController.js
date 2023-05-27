import Contato from "../Models/Contato.js"

class ContatoController {
    static async list(req, res) {
        const contatos = await Contato.findAll()
        res.json(contatos)
    }
    //---------------------------------------------------------------------------
    static async getContatoById(req, res) {
        const id = parseInt(req.params.id)
        const contato = await Contato.findByPk(id)
        if (!contato) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        res.json(contato)
    }
    //---------------------------------------------------------------------------
    static async createContato(req, res) {
        const { nome, email, telefone } = req.body
        if (!nome || !email || !telefone) {
            res.status(400).json({ error: "Informe todos os campos!" })
            return
        }
        const createdcontato = await Contato.create({ nome, email, telefone })
        res.status(201).json(createdcontato)
    }
    //---------------------------------------------------------------------------
    static async destroyContato(req, res) {
        const id = parseInt(req.params.id)
        const contato = findByPk(id)
        if (!contato) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        await Contato.destroy({ where: { id: contato.id } })
        res.json({ message: "Removido com sucesso" })
    }
    //---------------------------------------------------------------------------
    static async updateContato(req, res) {
        const id = parseInt(req.params.id)
        const contato = await Contato.findByPk(id)
        if (!contato) {
            res.status(404).json({ error: "Não encontrado" })
            return
        }
        const { nome, email, telefone } = req.body
        if (!nome || !email || !telefone) {
            res.status(400).json({ error: "Informe todos os campos!" })
            return
        }
        const updatedContact = await Contato.update({ nome, email, telefone }, { where: { id: contato.id } })
        res.json(updatedContact)
    }
}

export default ContatoController