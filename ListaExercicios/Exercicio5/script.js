

const input = document.getElementById("salario")
const result = document.getElementById("result")
const btn_calcular = document.getElementById("calculate")

btn_calcular.addEventListener("click", show_info)

function show_info(){

    let salario_bruto = parseFloat(input.value);
    let desconto = 0.10 * salario_bruto;

    let salario_liquido = salario_bruto - desconto;

    result.value = "R$ " + salario_liquido 

}