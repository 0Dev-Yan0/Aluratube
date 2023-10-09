import { conectaApi } from "./conectaApi.js"; //! Importando a const conectaApi do arquivo concectaApi.js;

const lista = document.querySelector("[data-lista]"); //! Traz a lista do HTML;

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<li>
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
</li>
`;
    return video; 
}; //! Constroi uma série de elementos HMTL usando parametros especificados;

async function listaVideo() {
    try {
        const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(element => lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }
}; //! Função assincrona que cria uma const onde é somente a função listaVideos() dentro da const conectaApi, depois pra cada elemento da ListaVideos ela adiciona um filho a const lista;

listaVideo();