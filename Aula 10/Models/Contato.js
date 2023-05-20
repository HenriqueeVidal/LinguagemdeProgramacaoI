export class Contato {
    constructor(id, nome, email, telefone) {
        this.id = id
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}
let idAtual = 2

export const create = (contato) => {
    idAtual++
    contato.id = idAtual
    dbContatos.push(contato)
    return contato
} // Função para criar registro dentro do array dbContatos

export const destroy = (id) => {
    const contato = findByPk(id)
    if (!contato) return false //só uma condição dá pra fazer em só uma linha
    const index = dbContatos.indexOf(contato)
    dbContatos.splice(index, 1)
    return true
}

export const update = (id, contatoUpdate) => {
    const contato = findByPk(id)
    if (!contato) return false
    const index = dbContatos.indexOf(contato)
    dbContatos[index] = contatoUpdate
    return true
}

export const findByPk = () => {
    return dbContatos.find(contato => contato.id === id)
}

export const findAll = () => {
    return dbContatos
} // Função para buscar no banco de dados

export const dbContatos = [
    new Contato(1, "Felipe", "email@gmail.com", "12345678")
] // Array simulando banco de dados