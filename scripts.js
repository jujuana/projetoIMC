function calcularIMC() {
    var pesoInput = document.getElementById("peso");
    var alturaInput = document.getElementById("altura");
    var resultadoElement = document.getElementById("resultado");

    var peso = parseFloat(pesoInput.value);
    var altura = parseFloat(alturaInput.value);

    var imc = peso / (altura * altura);
    resultadoElement.innerHTML = "O IMC é: " + imc.toFixed(2);



}

