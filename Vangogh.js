//Van Gogh
var imagensVanGogh = [
    { src: "Imagens/Van gogh/A noite estrelada (1889).jpg", nome: "A noite estrelada (1889)", },
    { src: "Imagens/Van gogh/Amendoeira em flor (1890).jpg", nome: "Amendoeira em flor (1890)", },
    { src: "Imagens/Van gogh/Campo de trigo com corvos (1890).jpg", nome: "Campo de trigo com corvos (1890)", },
    { src: "Imagens/Van gogh/O quarto (1888).jpg", nome: "O quarto (1888)", },
    { src: "Imagens/Van gogh/Os comedores de batata (1885).jpg", nome: "Os comedores de batata (1885)", },
    { src: "Imagens/Van gogh/Os girassóis (1889).jpg", nome: "Os girassóis (1889)", },
    { src: "Imagens/Van gogh/Terraço do café à noite (1888).jpg", nome: "Terraço do café à noite (1888)", },
];

var indiceAtualVanGogh = 0;

atualizarImagemVanGogh();

function atualizarImagemVanGogh() {
    var imagemElement = document.querySelector(".imagem_gogh"); 
    var imagem = document.createElement("img");
    var link = document.createElement("a");
    var nomeObra = document.querySelector("#nomeObra");

    var imagemAtual = imagensVanGogh[indiceAtualVanGogh];

    imagem.src = imagemAtual.src;
    imagem.alt = "Imagem " + (indiceAtualVanGogh + 1);
    imagem.className = "imagem_responsiva";


    nomeObra.textContent = imagemAtual.nome;

    link.appendChild(imagem);
    imagemElement.innerHTML = "";
    imagemElement.appendChild(link);
    imagemElement.appendChild(nomeObra);
}

function mudarFotoVanGogh(direcao) {
    indiceAtualVanGogh += direcao;

    if (indiceAtualVanGogh < 0) {
        indiceAtualVanGogh = imagensVanGogh.length - 1;
    } else if (indiceAtualVanGogh >= imagensVanGogh.length) {
        indiceAtualVanGogh = 0;
    }

    atualizarImagemVanGogh();
}

    atualizarImagemVanGogh();



