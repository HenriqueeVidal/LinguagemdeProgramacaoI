import axios from "axios"

/* 
    fetch("https://pokeapi.co/api/v2/pokemon/30")
        .then((dadosFormatados) => dadosFormatados.json())
        .then((dadosFormatados) => { console.log(dadosFormatados) })
        .catch((error)=> { console.log(error)}) */


/* axios.get("https://pokeapi.co/api/v2/pokemon/30")
    .then((dadosFormatados) => { console.log(dadosFormatados.data) })
    .catch((error)=> { console.log(error)}) */

// Funçao assincrona rodam em paralelo, permitem outras funções serem chamdas e executadas enquanto ainda estão rodando.

    async function getPokemon(){
        try{
            const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/1")
            const pokemon = await resposta.json()
            console.log(pokemon.name)
            console.log(pokemon.height)
            console.log(pokemon.weight)
        } catch{}
    }
    getPokemon()