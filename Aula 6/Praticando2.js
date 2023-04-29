//Crie uma classe Cliente, essa classe deve ter nome, telefone, renda e e-mail como atributos e um método verificarCredito(), esse método deve retornar uma promise que retorna: Crédito aprovado (renda>2000) ou Crédito recusado (renda<2000)

class Cliente {
    constructor(nome, telefone, renda, email) {
        this.nome = nome
        this.telefone = telefone
        this.renda = renda
        this.email = email
    }

    verificarCredito() {
        return new Promise((resolve, reject) => {
            if (this.renda > 2000) {
                resolve("Crédito aprovado (renda > 2000)")
            } else {
                reject("Crédito recusado (renda < 2000)")
            }
        })
    }
}

let C1 = new Cliente("Henrique", "19994393012", 3000, "henrique.vidal@fatecid.com")


C1.verificarCredito() // retorna uma promisse e portanto precisa da estrutura promise
    .then((retorno) => {
        console.log(retorno)
    })
    .catch((retorno) => {
        console.log(retorno)
    })


