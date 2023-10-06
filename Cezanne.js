//Cezanne
var imagensCezanne = [
    { src: "Imagens/Paul Cézanne/Ainda vida com cranio (1898).jpg", nome: "Ainda vida com cranio (1898)", },
    { src: "Imagens/Paul Cézanne/As banhistas (1898).jpg", nome: "As banhistas (1898)", },
    { src: "Imagens/Paul Cézanne/Cesta de Maçãs (1895).jpg", nome: "Cesta de Maçãs (1895)", },
    { src: "Imagens/Paul Cézanne/Monte de Sainte Victorie visto de Bellevue (1895).jpg", nome: "Monte de Sainte Victorie visto de Bellevue (1895)", },
    { src: "Imagens/Paul Cézanne/O grande pinheiro (1896).jpg", nome: "O grande pinheiro (1896)", },
    { src: "Imagens/Paul Cézanne/Piramide de cranios (1901).jpg", nome: "Piramide de cranios (1901)", },
    { src: "Imagens/Paul Cézanne/Uma Olympia moderna (1874).jpg", nome: "Uma Olympia moderna (1874)", },
];

var indiceAtualCezanne = 0;

function atualizarImagemCezanne() {
    var imagemElement = document.querySelector(".imagem_cezanne"); 
    var imagem = document.createElement("img");
    var link = document.createElement("a");
    var nomeObra = document.querySelector("#nomeObra");

    var imagemAtual = imagensCezanne[indiceAtualCezanne]; 

    imagem.src = imagemAtual.src;
    imagem.alt = "Imagem " + (indiceAtualCezanne + 1);
    imagem.className = "imagem_responsiva";

    nomeObra.textContent = imagemAtual.nome;

    link.appendChild(imagem);
    imagemElement.innerHTML = "";
    imagemElement.appendChild(link);
    imagemElement.appendChild(nomeObra);
}

function mudarFotoCezanne(direcao) {
    indiceAtualCezanne += direcao; 
    if (indiceAtualCezanne < 0) {
        indiceAtualCezanne = imagensCezanne.length - 1;
    } else if (indiceAtualCezanne >= imagensCezanne.length) {
        indiceAtualCezanne = 0;
    }

    atualizarImagemCezanne();
}

atualizarImagemCezanne();

