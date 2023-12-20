function substituiPalavra() {
    let frase = document.getElementById('frase').value;
    let textoParaSubstituir = document.getElementById('textoParaSubstituir').value;
    let textoSubstituto = document.getElementById('textoSubstituto').value;

    let regex = new RegExp('\\b' + textoParaSubstituir + '\\b', 'gi');
    let novaFrase = frase.replace(regex, textoSubstituto);

    document.getElementById('resultado').textContent = `Frase com substituição: ${novaFrase}`;
}