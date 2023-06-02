/*const outroP = document.createElement('p')
outroP.innerText = "Um p gerado por JS"
outroP.className = "textoVermelho"
document.body.appendChild(outroP)

const titulo = document.getElementById('titulo')

titulo.innerText = "H1 alterado pelo JS"*/

function atualizarContatos() {

    const ul = document.getElementById('listaContatos')
    ul.innerHTML = ''

    const contatos = fetch('http://localhost:3000/contatos')
        .then(resposta => resposta.json())
        .then(contatosDados => {

            contatosDados.forEach(contato => {
                const li = document.createElement('li')
                li.innerText = `${contato.nome} - ${contato.email}`
                //botão deletar
                const btnDelete = document.createElement('button')
                btnDelete.innerText = "Remover"
                btnDelete.addEventListener('click', () => deletarContato(contato.id))
                li.appendChild(btnDelete)

                const ul = document.getElementById('listaContatos')
                ul.appendChild(li)
            })
        })
}

atualizarContatos()

const formCadastro = document.getElementById('formCadastro')
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault()
    cadastrarContato(event)
})

function cadastrarContato(form) {
    const contatoNovo = {
        nome: form.target.nome.value,
        email: form.target.email.value,
        telefone: form.target.telefone.value,
    }
    console.log(contatoNovo)
    fetch('http://localhost:3000/contatos', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(contatoNovo)
    }).then(resposta => {
        if (resposta.status != 201 && resposta.status != 201) {
            alert('Erro ao cadastrar')
            return
        }
        alert('Cadastrado com sucesso!')
        form.target.reset()
        atualizarContatos()
    })
}

function deletarContato(id) {
    fetch(`http://localhost:3000/contatos/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if (resposta.status != 200) {
            alert('Erro ao excluir')
            return
        }
        alert('Contato excluído com sucesso!')
        atualizarContatos()
    })
}