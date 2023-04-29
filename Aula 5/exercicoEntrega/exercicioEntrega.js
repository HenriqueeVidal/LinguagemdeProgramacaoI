/*Crie uma classe chamada Estudante, essa classe deve conter os atributos: nome, e-mail, RA, curso e uma lista com o nome das disciplinas que o estudante está matriculado.
Para testar, crie dois estudantes de exemplo e imprima os valores na tela.*/

class estudante {
    constructor(nome, email, RA, curso, disciplinas) {
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplinas = disciplinas
    }

    MostraAluno() {
        console.log("\n" + `Nome: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`RA: ${this.RA}`)
        console.log(`Curso: ${this.curso}`)
        console.log(`Disciplinas matrículadas: ${this.disciplinas}` + "\n")
    }
}

const estudanteUm = new estudante("Henrique", "henrique.vidal@fatec.sp.gov.br", 1050482223020, "Análise e Desenvolvimento de sistemas", ["POO", "linguagem de programacao", "Eng Software I", "Eng Software II"])
const estudanteDois = new estudante("Emanuelson", "emanuelson.tobias@fatec.sp.gov.br", 1050846516844, "Análise e desenvolvimento de impressoras", ["POI", "linguagem de cartuchos", "Eng do Xerox I", "Eng da Fotocopiadora II"])

estudanteUm.MostraAluno()
estudanteDois.MostraAluno()

