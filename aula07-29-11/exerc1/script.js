
// 7-- Ler: nome, idade e gênero e armazenar em uma estrutura: pessoa = ['nome', 22, 'M']; 
// Depois coloque esta variável 'pessoa' dentro de uma lista. 
// Feito isso, implemente um text-area que irá receber os resultados.

// a. imprimir o nome de cada pessoa da lista
// b. imprimir o nome da pessoa mais velha;
// c. imprimir o nome da pessoa mais nova;
// d. imprimir a média de idade das pessoas;
// e. imprimir a média de idade das pessoas que são mulheres;
// f. imprimir a média de idade das pessoas que são homens;


const PESSOAS = [];
const RESULT = document.getElementById("resultados");

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const genero = document.getElementById("genero");

function adicionar_pessoa() {
    let pessoa = [];
    let info = nome.value;
    pessoa.push(info);
    info = idade.value;
    pessoa.push(info);
    info = genero.value;
    pessoa.push(info);

    PESSOAS.push(pessoa);
    nome.value = "";
    idade.value = "";
    genero.value = "";

    RESULT.value = "";
    RESULT.value = "Ok, pessoa adicionada!";
}


function mostrar_info() {
    RESULT.value = "";

    for (let pe of PESSOAS) {
        let msg = `nome: ${pe[0]} - idade: ${pe[1]} - genero: ${pe[2]}`;
        let txt = RESULT.value;
        txt = txt + msg + '\n';
        RESULT.value = txt;
    };
};


function verificaMaior() {
    RESULT.value = "";

    let idadeMaisVelha = 0;
    let salvo = 0;

    for (let pessoa of PESSOAS) {

        if (pessoa[2] != "M") continue;

        if (pessoa[1] > idadeMaisVelha) {
            idadeMaisVelha = pessoa[1];
            salvo = pessoa;
        }


    }

    msg = `Pessoa mais velha : ${salvo[0]}`

    RESULT.value = msg

}