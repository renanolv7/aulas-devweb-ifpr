
/* Definir todos os elementos HTML que vamos utilizar */
const el1 = document.getElementById("txt1");
const el2 = document.getElementById("txt2");
const result = document.getElementById("resp");

/* Criar função */
function teste2(){
    let valor1 = el1.value;
    let valor2 = el2.value;
    let resposta = valor1 + valor2;

    result.value = resposta;
    
    el1.value = "";
    el2.value = "";
}