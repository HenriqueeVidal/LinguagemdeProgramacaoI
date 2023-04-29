
class Pessoa {
    constructor(nome, email, idade, hobbies) {
        this.nome = nome
        this.email = email
        this.idade = idade
        this.hobbies = hobbies
    }
}

function criaPessoa() {
    return new Pessoa("Henrique", "henriqueevidal@hotmail.com", 25, ["Aeromodelismo", "Tiro esportivo", "Karting", "Leitura"])
}

export {Pessoa, criaPessoa}
