export class Contato {
    constructor(id, nome,email,telefone){
        this.id = id
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}

export const getAll = () => {
    return dbContatos
} // Função para buscar no banco de dados

export const dbContatos = [
    new Contato(1,"Felipe","email@gmail.com","12345678")
] // Array simulando banco de dados