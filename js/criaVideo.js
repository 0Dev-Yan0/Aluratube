import { conectaApi } from "./conectaApi.js"; //! Importando a const conectaApi do arquivo concectaApi.js;

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaApi.criaVideos(titulo, descricao, url, imagem);
    
        window.location.href = "../pages/envio-concluido.html"; 
    } catch (error) {
        alert(error)
    } //! catch significa caso o erro aconteça e o parametro define o erro, erro ocorrido esse que criamos com o "throw new Error()";
}

formulario.addEventListener("submit", evento => criarVideo(evento));


