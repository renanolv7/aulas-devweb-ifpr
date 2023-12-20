
/* TESTE 1 */
const elemento1 = document.getElementById("meutexto");
const elemento2 = document.getElementById("texto2");

function teste() {
    let texto = elemento1.value;
    console.log(texto);
    elemento1.value = "";
    elemento2.value = texto;
};



