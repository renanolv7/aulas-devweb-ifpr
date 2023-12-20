
const pElement = document.querySelector('p');

pElement.addEventListener('onmouseover', colorirComClique);

function colorirComClique() {
    pElement.style.backgroundColor = "red";
    pElement.style.color = "white";


}


sElement = document.querySelector('.over')

sElement.addEventListener('onmouseover', colorirComOver)

function colorirComOver() {
    sElement.style.backgroundColor = "purple"
    sElement.style.color = "white"

}

const imagem = document.querySelector("img");

imagem.addEventListener('click', trocaImagem)

function trocaImagem() {
    imagem.setAttribute('src', "imagem2.jpg")


}
