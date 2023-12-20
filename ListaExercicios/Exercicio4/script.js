

const btnAdd = document.getElementById("btnAdd");
const tela = document.getElementById("content");
const segundaTela = document.getElementById("resposta")



var numbers = [];
var listPar = []

function addNumber() {

    var input = prompt("Informe o número que deseja adicionar: ");
    var number = parseFloat(input);

    if (!isNaN(number)) {
        numbers.push(number);
        tela.innerHTML = numbers.join(', '); // Converte o array para uma string separada por vírgulas
    } else {
        alert("Por favor, insira um número válido.");
    }
}


const btnMaior = document.getElementById("btnMaior")

function maior() {

    let maiorNum = numbers[0]

    for (number of numbers) {
        if (number > maiorNum) {
            maiorNum = number;
        }
    }

    segundaTela.innerHTML = ("O maior número da lista: " + maiorNum)

}


const btnMenor = document.getElementById("btnMenor");

function menor() {

    let menorNum = numbers[0]

    for (number of numbers) {
        if (number < menorNum) {
            menorNum = number;
        }
    }

    segundaTela.innerHTML = ("O menor número da lista: " + menorNum)

}

const btnSoma = document.getElementById("btnSoma")

function soma() {

    let soma = 0

    for (number of numbers) {
        soma = soma + number
    }

    segundaTela.innerHTML = ("A soma dos números da lista: " + soma)


}


const btnMedia = document.getElementById("btnMedia")

function media() {

    let media = 0
    let sum = 0
    let tamanho = numbers.length;

    for (number of numbers) {
        sum += number
    }

    media = sum / tamanho

    segundaTela.innerHTML = ("A soma dos números da lista: " + media)

}



const btnPar = document.getElementById('btnPar');

function par() {

    let valorPar = 0


    for (number of numbers) {
        if (number % 2 == 0) {
            valorPar = number
            listPar.push(valorPar)
        }
    }

    segundaTela.innerHTML = ("Os números pares da lista são: " + listPar.join(', '))
}


const btnImpar = document.getElementById('btnImpar');

function impar() {

    let valorImpar = 0
    let listImpar = []

    for (number of numbers) {
        if (number % 2 == 1) {
            valorImpar = number
            listImpar.push(valorImpar)
        }
    }

    segundaTela.innerHTML = ("Os números ímpares da lista são: " + listImpar.join(', '))
}


const btnSomaPar = document.getElementById('btnSomaPar');

function somaPar() {

    let soma = 0

    for (number of numbers) {

        if (number % 2 == 0) {
            soma = soma + number
        }
        if (number % 2 == 1) {
            alert("Número " + number + " é impar!");
        }
    }
    segundaTela.innerHTML = ("Soma dos pares: " + soma)
}

const btnSomaImpar = document.getElementById('btnSomaImpar');

function somaImpar() {

    let soma = 0

    for (number of numbers) {

        if (number % 2 == 1) {
            soma = soma + number
        }
    }
    segundaTela.innerHTML = ("Soma dos ímpares: " + soma)
}


const btnMaiorMenor = document.getElementById('btnMaiorMenor');



function maiorMenorPar() {


    let maiorNum = listPar[0];
    let menorNum = listPar[0];

    for (let number of listPar) {


        if (number % 2 === 0 && number > maiorNum) {

            maiorNum = number;
        }
        else if (number % 2 === 1 && number < menorNum) {
            menorNum = number
        }

    }

    segundaTela.innerHTML = ("O maior número da lista: " + maiorNum + " O menor número da lista: " + menorNum)


}

// function maiorMenorPar() {

//     if (listPar.length === 0) {
//         segundaTela.innerHTML = "A lista está vazia.";
//         return;
//     }

//     let maiorNum = listPar[0];
//     let menorNum = listPar[0];

//     for (let number of listPar) {
//         if (number % 2 === 0 && number > maiorNum) {
//             maiorNum = number;
//         } else if (number % 2 === 1 && number < menorNum) {
//             menorNum = number;
//         }
//     }

//     segundaTela.innerHTML = "O maior número par da lista: " + maiorNum + ". O menor número ímpar da lista: " + menorNum;
// }


function maiorMenorPar() {
    if (listPar.length === 0) {
        segundaTela.innerHTML = "A lista está vazia.";
        return;
    }

    let maiorPar = -Infinity;
    let menorPar = Infinity;

    for (let number of listPar) {
        if (number % 2 === 0) {
            if (number > maiorPar) {
                maiorPar = number;
            }
            if (number < menorPar) {
                menorPar = number;
            }
        }
    }

    segundaTela.innerHTML = "O maior número par da lista: " + maiorPar + ". O menor número par da lista: " + menorPar;
}









const btnTresMaiores = document.getElementById('btnTresMaiores');

function mediaTresMaiores(){

    let maiorNum = numbers[0]

    for(let i; i = 0; i++){

        
    }

    for (number of numbers) {
        if (number > maiorNum) {
            maiorNum = number;
        }
    }

    segundaTela.innerHTML = ("O maior número da lista: " + maiorNum)



}








