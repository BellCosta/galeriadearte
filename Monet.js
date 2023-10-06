//Monet
var imagensMonet = [
    { src: "Imagens/Monet/Impressão, Nascer do Sol (1872).jpg", nome: "Impressão, Nascer do Sol (1872)", },
    { src: "Imagens/Monet/Impressão, Nascer do Sol (1872).jpg", nome: "Impressão, Nascer do Sol (1872)", },
    { src: "Imagens/Monet/Lírios de água (1919).jpg", nome: "Lírios de água (1919)", },
    { src: "Imagens/Monet/Meules (1890).jpg", nome: "Meules (1890)", },
    { src: "Imagens/Monet/Mulher com Sombrinha (1875).jpg", nome: "Mulher com Sombrinha (1875)", },
    { src: "Imagens/Monet/Mulheres no Jardim (1866).jpg", nome: "Mulheres no Jardim (1866)", },
    { src: "Imagens/Monet/Ponte Sobre Uma Lagoa de Lírios de Água (1899).jpeg", nome: "Ponte Sobre Uma Lagoa de Lírios de Água (1899)", },
];

var indiceAtualMonet = 0;

function atualizarImagemMonet() {
    var imagemElement = document.querySelector(".imagem_monet"); 
    var imagem = document.createElement("img");
    var link = document.createElement("a");
    var nomeObra = document.querySelector("#nomeObra");

    var imagemAtual = imagensMonet[indiceAtualMonet];

    imagem.src = imagemAtual.src;
    imagem.alt = "Imagem " + (indiceAtualMonet + 1);
    imagem.className = "imagem_responsiva";
 
    nomeObra.textContent = imagemAtual.nome;

    link.appendChild(imagem);
    imagemElement.innerHTML = "";
    imagemElement.appendChild(link);
    imagemElement.appendChild(nomeObra);
}

function mudarFotoMonet(direcao) {
    indiceAtualMonet += direcao; 

    if (indiceAtualMonet < 0) {
        indiceAtualMonet = imagensMonet.length - 1;
    } else if (indiceAtualMonet >= imagensMonet.length) {
        indiceAtualMonet = 0;
    }

    atualizarImagemMonet();
}

atualizarImagemMonet();


