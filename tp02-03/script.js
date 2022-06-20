

console.log("Iniciando Algoritmo Nr 01");


function algoritmoUm() {
    let count = 0;
    for(let i = 2; i < 1000000; i++) {
        if(i%3===0 && i%2===0) {
            console.log(`${i} é multiplo de 3 e 2.`)
            count += 1;
        }
    }

    console.log("Total de múltiplos de 2 e 3 é: ", count);
}

// algoritmoUm();


console.log("Iniciando ALgoritmo Nr 02");

function fatorial(n) {
    if(n === 1) {
        return 1;
    }

    return n * fatorial(n-1)

}

//começo do timer
const startTime = Date.now();
let result = fatorial(53);

//calculo do tempo
const duration = Date.now() - startTime;
console.log('53! = ', result, `(${duration} milliseconds)`)


console.log("Iniciando ALgoritmo Nr 03");

function generateStudents() {
    let students = [];
    for(let i = 0; i < 20; i++) {
        let student = {
            nr: i,
            nota: Math.floor(Math.random() * 100)
        }
        students.push(student);
    }
    return students;
}

function showStudentsStatistics() {
    let students = generateStudents();
    let totalAprovados = 0;

    console.log("RELATÓRIO DOS ESTUDANTES:")

    students.forEach(student => {
        if(student.nota >= 50) {
            console.log(`Aluno ${student.nr} - Nota ${student.nota} APROVADO`);
            totalAprovados += 1;
        } else {
            console.log(`Aluno ${student.nr} - Nota ${student.nota} REPROVADO`);
        }
    })

    let totalReprovados = 20 - totalAprovados;
    let totalAprovadosPercent = 5*totalAprovados;
    let totalReprovadosPercent = 5*totalReprovados;

    console.log(`APROVADOS ${totalAprovados} ${totalAprovadosPercent}% | REPROVADOS: ${totalReprovados} ${totalReprovadosPercent}%`)

}

showStudentsStatistics();


console.log("Iniciando Algoritmo Nr 04:");

function generateRandomArray() {
    let randomNumbers = [];
    for(let i = 0; i < 50; i++) {
        randomNumbers.push(Math.floor(Math.random() * 5001));
    }

    let sortedNumbers = randomNumbers.sort(function(a, b){return a-b});

    console.log(sortedNumbers);
}

generateRandomArray();

console.log("Iniciando Algoritmo Nr 05:")


function checkTriangle(ladoUm, ladoDois, ladoTres) {

    if(ladoUm === ladoDois && ladoUm === ladoTres) {
        return "Triângulo equilátero";
    } else if(ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres) {
        return "Triangulo isósceles";
    } else {
        return "Triangulo escaleno";
    }

}

console.log(checkTriangle(5,5,5));
console.log(checkTriangle(45,45,90));
console.log(checkTriangle(25,35,45));
