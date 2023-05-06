import { getAll } from "../Models/Contato.js"

class ContatoController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.params)
    }
}

export default ContatoController