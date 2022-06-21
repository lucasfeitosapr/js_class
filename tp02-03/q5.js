// Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) lado A, lado B e lado C. O componente deve ainda possuir um botão calcular que quando acionado deve dizer se um triângulo formado por esses 3 lados é um triângulo equilátero, isósceles ou escaleno.


generateLayout();


console.log("Iniciando Algoritmo Nr 05:")


function checkTriangle(ladoUm, ladoDois, ladoTres) {

    var response = '';

    if(ladoUm === ladoDois && ladoUm === ladoTres) {
        response = "Equilátero";
    } else if(ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres) {
        response = "Isósceles";
    } else {
        response = "Escaleno";
    }

    var labelResult = document.getElementById("labelResultQ5");
    labelResult.innerHTML = `É um triângulo: ${response}`;

}

function generateLayout() {
    var divFive = document.getElementById("q5");

    var labelQuestao = document.createElement('label');
    labelQuestao.setAttribute("id","labelQuestao");
    labelQuestao.innerHTML = "Questão 5";

    var labelLadoA = document.createElement('label');
    labelLadoA.setAttribute("for","inputLadoA");
    labelLadoA.innerHTML = "Insira o Lado A:";

    var labelLadoB = document.createElement('label');
    labelLadoB.setAttribute("for","inputLadoB");
    labelLadoB.innerHTML = "Insira o Lado B:";

    var labelLadoC = document.createElement('label');
    labelLadoC.setAttribute("for","inputLadoC");
    labelLadoC.innerHTML = "Insira o Lado C:";

    var labelResult = document.createElement('label');
    labelResult.setAttribute("id","labelResultQ5");

    var inputLadoA = document.createElement('input');
    inputLadoA.type = "number";
    inputLadoA.setAttribute("id","inputLadoA");

    var inputLadoB = document.createElement('input');
    inputLadoB.type = "number";
    inputLadoB.setAttribute("id","inputLadoB");

    var inputLadoC = document.createElement('input');
    inputLadoC.type = "number";
    inputLadoC.setAttribute("id","inputLadoC");

    var calcButton = document.createElement('button');
    calcButton.setAttribute("id","calcButton");
    calcButton.innerHTML = "Calcular";
    calcButton.addEventListener("click", function () {

        var response = hasValidValues(inputLadoA.valueAsNumber, inputLadoB.valueAsNumber, inputLadoC.valueAsNumber);

        if(response.hasValidValues) {
            checkTriangle(inputLadoA.valueAsNumber, inputLadoB.valueAsNumber, inputLadoC.valueAsNumber);
        } else {
            alert(response.errorMessage);
        }
    });
    
    divFive.appendChild(labelQuestao)
    divFive.appendChild(labelLadoA);
    divFive.appendChild(inputLadoA);
    divFive.appendChild(labelLadoB);
    divFive.appendChild(inputLadoB);
    divFive.appendChild(labelLadoC);
    divFive.appendChild(inputLadoC);
    divFive.appendChild(calcButton);
    divFive.appendChild(labelResult);


}

function hasValidValues(min, max, quantidade) {
    let response = {
        hasValidValues: false,
        errorMessage: ""
    }
    
    if(isNaN(min) || isNaN(max) || isNaN(quantidade)) {
        response.hasValidValues = false;
        response.errorMessage = "Todos os valores devem conter números!";
        return response;
    } else if (min <= 0 || max <= 0 || quantidade <= 0) {
        response.hasValidValues = false;
        response.errorMessage = "Todos os valores devem ser maiores que zero!";
        return response;
    }else{
        response.hasValidValues = true;
    }

    return response;
}