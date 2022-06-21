// Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo (label) Calcular o fatorial de. O componente deve ainda possuir um botão calcular que quando acionado deve calcular o fatorial do número digitado, imprimido o resultado e o tempo necessário para a execução. (Dica: usar o objeto javascript Date)

// O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);
// O código deve calcular o fatorial e não apenas imprimir uma string com a resposta.

generateLayout();

console.log("Iniciando ALgoritmo Nr 02");

function fatorial(n) {
    if(n === 1) {
        return 1;
    }
    return n * fatorial(n-1)

}

//começo do timer

//calculo do tempo


function generateLayout() {
    var divTwo = document.getElementById("q2");

    var labelQuestao = document.createElement('label');
    labelQuestao.setAttribute("id","labelQuestao");
    labelQuestao.innerHTML = "Questão 2";
 

    var labelValor = document.createElement('label');
    labelValor.setAttribute("for","valor");
    labelValor.innerHTML = "Calcular o fatorial de:";

    var inputValor = document.createElement('input');
    inputValor.type = "number";
    inputValor.setAttribute("id","valor");
    inputValor.addEventListener('input', function () {
        console.log("Inputou valor");
    })

    var labelResult = document.createElement('label');
    labelResult.setAttribute("id","labelResultQ2");

    var button = generateButton(inputValor);

    divTwo.appendChild(labelQuestao);
    divTwo.appendChild(labelValor);
    divTwo.appendChild(inputValor);
    divTwo.appendChild(button);
    divTwo.appendChild(labelResult);


}


function hasValidValues(valor) {
    if(valor <= 0) {
        return false;
    }else if(isNaN(valor)) {
        return false;
    }

    return true;
}

function generateButton(inputValor) {
    var calcButton = document.createElement('button');
    calcButton.setAttribute("id","calcButton");
    calcButton.innerHTML = "Calcular";
    calcButton.addEventListener("click", function () {
        if(hasValidValues(inputValor.valueAsNumber)) {
            console.log("Valid values")
            var labelResult = document.getElementById("labelResultQ2");

            const startTime = Date.now();

            var result = fatorial(inputValor.valueAsNumber);
            
            const duration = Date.now() - startTime;


            labelResult.innerHTML = `${inputValor.value}! = ${result} (${duration} milisegundos)`
        } else {
            alert("Valores inválidos!");
        }
    });

    return calcButton;
}