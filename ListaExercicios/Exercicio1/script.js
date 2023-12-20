// Código 1

// Pegando meu botão do HTML
const pElement = document.getElementById('btn');

pElement.addEventListener('click', submit);

function submit() {
    let pNum = parseInt(prompt("Informe o primeiro número: "))
    let sNum = parseInt(prompt("Informe o segundo número: "))
    let result = pNum + sNum
    window.alert("Resultado: " + result)
}


// Código 2
const btn2 = document.getElementById("btn2");
const text1 = document.getElementById("input1");
const text2 = document.getElementById("input2");

btn2.addEventListener('click', submit2);

function submit2() {
    let tmp = parseInt(text1.value)
    let tmp2 = parseInt(text2.value);

    // Se os números números forem nulos
    if (!isNaN(tmp) && !isNaN(tmp2)) {

        let resultado = tmp + tmp2;

        alert("A soma dos números é: " + resultado);

    } else {

        alert("Por favor, insira números válidos em ambas as caixas de texto.");

    }

}

// Código 3

const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")

const btn3 = document.getElementById("btn3")

const resposta = document.getElementById("area")


btn3.addEventListener('click', submit3);


function submit3() {
    let valor3 = parseInt(input3.value);
    let valor4 = parseInt(input4.value);

    let result = valor3 + valor4

    let msg = " " + valor3 + " + " + valor4 + " = " + result + "\n";

    resposta.value = msg;

}


//  Código 4
const input5 = document.getElementById("input5")
const input6 = document.getElementById("input6")

const btn4 = document.getElementById("btn4")

const respostas = document.getElementById("area-dois")


btn3.addEventListener('click', submit4);

function submit4() {
    let valor1 = parseInt(input5.value);
    let valor2 = parseInt(input6.value);


    // Se os números números forem nulos
    if (!isNaN(valor1) && !isNaN(valor2)) {

        let result = valor1 + valor2

        let msg = " " + valor1 + " + " + valor2 + " = " + result + "\n";

        respostas.value += msg;

    } else {

        alert("Por favor, insira números válidos em ambas as caixas de texto.");

    }




}




