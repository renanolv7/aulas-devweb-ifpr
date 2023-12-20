function contaPalavrasLinhas() {
    let texto = document.getElementById('texto').value;
    let linhas = (texto.match(/\n/g) || []).length + 1;
    let palavras = texto.trim().split(/\s+/).length;

    document.getElementById('resultado').innerHTML = `Palavras: ${palavras}<br>Linhas: ${linhas}`;
}