//  nome
const inputNome = document.getElementById("nome");

// idade
const inputIdade = document.getElementById("idade");

// botão
const btn = document.getElementById("submit_button");

//  Resultado
const resultado = document.getElementById("resultado");

btn.addEventListener("click", execute);


function execute(){
    let nome = inputNome.value;
    let idade = inputIdade.value;
    let msg = "";

    msg += (idade >= 18) ? "é de maior!" : "é de menor!";

    resultado.innerHTML = nome + ", " + msg;
    
}