function contaVogais() {
    let texto = document.getElementById('texto').value.toLowerCase();
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let quantidadeVogais = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            quantidadeVogais++;
        }
    }

    document.getElementById('resultado').textContent = `Quantidade de vogais: ${quantidadeVogais}`;
}