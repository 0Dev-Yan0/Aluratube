import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo (evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) { 
        lista.removeChild(lista.firstChild)
    } //! enquanto a lista tiver um primeiro filho ( um elemento dentro ) ela então vai apagar tal filho até zerar a si mesma e assim a condição se tornar falsa, onde ela para;

    busca.forEach( (elemento) => {
        lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem));
    })

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com o termo de busca</h2>`
    }

};

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", (evento) => {
    buscarVideo(evento)
})