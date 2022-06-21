
generateLayout();


console.log("Iniciando Algoritmo Nr 04:");

function generateRandomArray(min, max, quantidade) {
    let randomNumbers = [];
    console.log("Min: ", min, "Max: ", max, "Qtd: ", quantidade);
    for(let i = 0; i <= quantidade; i++) {
        randomNumbers.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    let sortedNumbers = randomNumbers.sort(function(a, b){return a-b});
    console.log(randomNumbers);
    var labelResult = document.getElementById("labelResultQ4");
    labelResult.innerHTML = `Números ordenados: ${sortedNumbers}`;
}


function generateLayout() {
    var divFour = document.getElementById("q4");

    var labelQuestao = document.createElement('label');
    labelQuestao.setAttribute("id","labelQuestao");
    labelQuestao.innerHTML = "Questão 4";

    var labelValorMaximo = document.createElement('label');
    labelValorMaximo.setAttribute("for","inputValorMaximo");
    labelValorMaximo.innerHTML = "Valor máximo";

    var labelValorMinimo = document.createElement('label');
    labelValorMinimo.setAttribute("for","inputValorMinimo");
    labelValorMinimo.innerHTML = "Valor mínimo";

    var labelQuantidadeNumeros = document.createElement('label');
    labelQuantidadeNumeros.setAttribute("for","inputQuantidadeNumeros");
    labelQuantidadeNumeros.innerHTML = "Quantidade de números:";

    var labelResult = document.createElement('label');
    labelResult.setAttribute("id","labelResultQ4");

    var inputValorMaximo = document.createElement('input');
    inputValorMaximo.type = "number";
    inputValorMaximo.setAttribute("id","inputValorMaximo");

    var inputValorMinimo = document.createElement('input');
    inputValorMinimo.type = "number";
    inputValorMinimo.setAttribute("id","inputValorMinimo");

    var inputQuantidadeNumeros = document.createElement('input');
    inputQuantidadeNumeros.type = "number";
    inputQuantidadeNumeros.setAttribute("id","inputQuantidadeNumeros");

    var calcButton = document.createElement('button');
    calcButton.setAttribute("id","calcButton");
    calcButton.innerHTML = "Calcular";
    calcButton.addEventListener("click", function () {

        var response = hasValidValues(inputValorMinimo.valueAsNumber, inputValorMaximo.valueAsNumber, inputQuantidadeNumeros.valueAsNumber);

        if(response.hasValidValues) {
            generateRandomArray(inputValorMinimo.valueAsNumber, inputValorMaximo.valueAsNumber, inputQuantidadeNumeros.valueAsNumber);
        } else {
            alert(response.errorMessage);
        }
    });
    
    divFour.appendChild(labelQuestao);
    divFour.appendChild(labelValorMinimo);
    divFour.appendChild(inputValorMinimo);
    divFour.appendChild(labelValorMaximo);
    divFour.appendChild(inputValorMaximo);
    divFour.appendChild(labelQuantidadeNumeros);
    divFour.appendChild(inputQuantidadeNumeros);
    divFour.appendChild(calcButton);
    divFour.appendChild(labelResult);


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
    } else if (quantidade >= (min+max)) {
        response.hasValidValues = false;
        response.errorMessage = "Quantidade de números excede o intervalo, por favor, aumente o intervalo!";
        return response;
    } else {
        response.hasValidValues = true;
    }

    return response;
}