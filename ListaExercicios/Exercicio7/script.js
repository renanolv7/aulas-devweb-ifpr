let pessoas = [];

function adicionarPessoa() {
    let nome = document.getElementById('nome').value;
    let idade = parseInt(document.getElementById('idade').value);
    let genero = document.getElementById('genero').value;

    pessoas.push({ nome, idade, genero });

    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('genero').value = 'masculino';
}

function imprimirNomes() {
    let nomes = pessoas.map(pessoa => pessoa.nome);
    document.getElementById('resposta').value = nomes.join('\n');
}

function imprimirNomeMaisVelho() {
    let pessoaMaisVelha = pessoas.reduce((acumulador, pessoaAtual) => {
        return pessoaAtual.idade > acumulador.idade ? pessoaAtual : acumulador;
    });
    document.getElementById('resposta').value = pessoaMaisVelha.nome;
}

function imprimirNomeMaisNovo() {
    let pessoaMaisNova = pessoas.reduce((acumulador, pessoaAtual) => {
        return pessoaAtual.idade < acumulador.idade ? pessoaAtual : acumulador;
    });
    document.getElementById('resposta').value = pessoaMaisNova.nome;
}

function imprimirMediaIdade() {
    let somaIdades = pessoas.reduce((acumulador, pessoaAtual) => {
        return acumulador + pessoaAtual.idade;
    }, 0);
    let mediaIdade = somaIdades / pessoas.length;
    document.getElementById('resposta').value = mediaIdade.toFixed(2);
}

function imprimirPessoasEntreAeK() {
    let pessoasEntreAeK = pessoas.filter(pessoa => {
        let primeiraLetra = pessoa.nome.charAt(0).toUpperCase();
        return primeiraLetra >= 'A' && primeiraLetra <= 'K';
    });
    let nomes = pessoasEntreAeK.map(pessoa => pessoa.nome);
    document.getElementById('resposta').value = nomes.join('\n');
}

function imprimirMediaMenoresIdade() {
    let somaIdades = pessoas.reduce((acumulador, pessoaAtual) => {
        return acumulador + (pessoaAtual.idade < 18 ? pessoaAtual.idade : 0);
    }, 0);
    let mediaIdade = somaIdades / pessoas.filter(pessoa => pessoa.idade < 18).length;
    document.getElementById('resposta').value = mediaIdade.toFixed(2);
}

function imprimirMediaMulheres() {
    let somaIdades = pessoas.reduce((acumulador, pessoaAtual) => {
        return pessoaAtual.genero === 'feminino' ? acumulador + pessoaAtual.idade : acumulador;
    }, 0);
    let mediaIdade = somaIdades / pessoas.filter(pessoa => pessoa.genero === 'feminino').length;
    document.getElementById('resposta').value = mediaIdade.toFixed(2);
}

function imprimirMediaHomens() {
    let somaIdades = pessoas.reduce((acumulador, pessoaAtual) => {
        return pessoaAtual.genero === 'masculino' ? acumulador + pessoaAtual.idade : acumulador;
    }, 0);
    let mediaIdade = somaIdades / pessoas.filter(pessoa => pessoa.genero === 'masculino').length;
    document.getElementById('resposta').value = mediaIdade.toFixed(2);
}

function imprimirMediaMaioresIdadeMulheres() {
    let somaIdades = pessoas.reduce((acumulador, pessoaAtual) => {
        return pessoaAtual.genero === 'feminino' && pessoaAtual.idade > 18 ? acumulador + pessoaAtual.idade : acumulador;
    }, 0);
    let mediaIdade = somaIdades / pessoas.filter(pessoa => pessoa.genero === 'feminino' && pessoa.idade > 18).length;
    document.getElementById('resposta').value = mediaIdade.toFixed(2);
}

function imprimirPessoasOrdemReversa() {
    let nomes = pessoas.map(pessoa => pessoa.nome).reverse();
    document.getElementById('resposta').value = nomes.join('\n');
}