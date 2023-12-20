


// const btn_submit = document.getElementById("btn");
// btn_submit = addEventListener("click", submit)

// function submit() {
//     let pNum = parseInt(prompt("Informe o primeiro número: "))
//     let sNum = parseInt(prompt("Informe o segundo número: "))

//     let soma = pNum + sNum
//     let sub = pNum - sNum
//     let mult = pNum * sNum
//     let div = pNum / sNum

//     let result = ("SOMA = " + soma + "\n" + "SUBTRAÇÃO = " + sub + "\n" + "MULTIPLICAÇÃO = " + mult + "\n" + "DIVISÃO = " + div)

//     window.alert("RESULTADOS " + "\n" + result)
// }


// Código 2
const text1 = document.getElementById("input1");
const text2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2"); // Substitua "seuBotaoId" pelo ID real do seu botão

btn2.addEventListener("click", submit2);

function submit2() {
    let tmp = parseInt(text1.value);
    let tmp2 = parseInt(text2.value);

    let soma = tmp + tmp2
    let sub = tmp - tmp2
    let mult = tmp * tmp2
    let div = tmp / tmp2

    if (!isNaN(tmp) && !isNaN(tmp2)) {
        let result = ("SOMA = " + soma + "\n" + "SUBTRAÇÃO = " + sub + "\n" + "MULTIPLICAÇÃO = " + mult + "\n" + "DIVISÃO = " + div)

        window.alert("RESULTADOS " + "\n" + result)
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

    let soma = valor3 + valor4
    let sub = valor3 - valor4
    let mult = valor3 * valor4
    let div = valor3 / valor4


    let msg = {
        "SOMA": soma,
        "SUBTRAÇÃO": sub,
        "MULTIPLICAÇÃO": mult,
        "DIVISÃO": div
    };

    resposta.value = JSON.stringify(msg);

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


    let soma = valor1 + valor2
    let sub = valor1 - valor2
    let mult = valor1 * valor2
    let div = valor1 / valor2

    // Se os números números forem nulos
    if (!isNaN(valor1) && !isNaN(valor2)) {

        let msg = {
            "soma": soma,
            "subtração": sub,
            "multiplicação": mult,
            "divisao": div
        };

        respostas.value += JSON.stringify(msg);
    } else {
        alert("Por favor, insira números válidos em ambas as caixas de texto.");
    }

}


