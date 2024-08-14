const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

const body = document.querySelector("body");


botaoAlterarTema.addEventListener("click", () => {
    
    if (body.classList.contains("modo-claro")) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }   
    
    body.classList.toggle("modo-claro")

});