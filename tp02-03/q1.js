console.log("Iniciando Algoritmo Nr 01");

generateLayout();

function calcMultiplos(min, max) {
    let count = 0;

    for(let i = min; i < max; i++) {
        if(i%3===0 && i%2===0) {
            console.log(`${i} é multiplo de 3 e 2.`)
            count += 1;
        }
    }

    var labelResult = document.getElementById("labelResultQ1");
    labelResult.innerHTML = `Total de múltiplos de 2 e 3 é: ${count}`;
}

function generateLayout() {
    var divOne = document.getElementById("q1");

    var labelQuestao = document.createElement('label');
    labelQuestao.setAttribute("id", "labelQuestao");
    labelQuestao.innerHTML = "Questão 1";

    var labelValorMaximo = document.createElement('label');
    labelValorMaximo.setAttribute("for","inputValorMaximo");
    labelValorMaximo.innerHTML = "Valor máximo";

    var labelValorMinimo = document.createElement('label');
    labelValorMinimo.setAttribute("for","inputValorMinimo");
    labelValorMinimo.innerHTML = "Valor mínimo";

    var labelResult = document.createElement('label');
    labelResult.setAttribute("id","labelResultQ1");

    var inputValorMaximo = document.createElement('input');
    inputValorMaximo.type = "number";
    inputValorMaximo.setAttribute("id","inputValorMaximo");
    inputValorMaximo.addEventListener('input', function () {
        console.log("Inputou maximo");
    })

    var inputValorMinimo = document.createElement('input');
    inputValorMinimo.type = "number";
    inputValorMinimo.setAttribute("id","inputValorMinimo");
    inputValorMinimo.addEventListener('input', function () {
        console.log("Inputou minimo");
    })

    var calcButton = document.createElement('button');
    calcButton.setAttribute("id","calcButton");
    calcButton.innerHTML = "Calcular";
    calcButton.addEventListener("click", function () {
        if(hasValidValues(inputValorMinimo.valueAsNumber, inputValorMaximo.valueAsNumber)) {
            console.log("Valid values")
            calcMultiplos(inputValorMinimo.valueAsNumber, inputValorMaximo.valueAsNumber);
        } else {
            console.log("Invalid values")
            alert("Valores inválidos!");
        }
    });
    
    divOne.appendChild(labelQuestao);
    divOne.appendChild(labelValorMinimo);
    divOne.appendChild(inputValorMinimo);
    divOne.appendChild(labelValorMaximo);
    divOne.appendChild(inputValorMaximo);
    divOne.appendChild(calcButton);
    divOne.appendChild(labelResult);


}


function hasValidValues(min, max) {
    console.log(min, max)
    if(min <= 0 || max <= 0 || max < min) {
        return false;
    }else if(isNaN(min) || isNaN(max)) {
        return false;
    }else if(max === min) {
        return false;
    
    }
    return true;
}