let listaProdutos = [];

function limparTextArea() {
    document.querySelector('textarea').value = '';
}

function exibirProdutos() {
    limparTextArea();
    listaProdutos.forEach(produto => {
        document.querySelector('textarea').value += `Tipo: ${produto.tipo}, Nome: ${produto.nome}, Quantidade: ${produto.quantidade}, Cor: ${produto.cor}\n`;
    });
    // prints
}

function novo() {
    const tipoProduto = document.getElementById('tipo_produto').value;
    const nomeProduto = document.getElementById('nome').value;
    const quantidade = parseInt(document.getElementById('qtde').value);
    const cor = document.getElementById('cor').value;

    listaProdutos.push({ tipo: tipoProduto, nome: nomeProduto, quantidade: quantidade, cor: cor });

    exibirProdutos();
}


document.querySelector('input[value="novo"]').addEventListener('click', novo);
document.querySelector('input[value="media"]').addEventListener('click', media);
document.querySelector('input[value="contar"]').addEventListener('click', contar);
document.querySelector('input[value="limpar"]').addEventListener('click', limpar);