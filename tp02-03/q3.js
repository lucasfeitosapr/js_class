console.log("Iniciando ALgoritmo Nr 03");

generateLayout();

function generateStudents() {
    let students = [];
    for(let i = 0; i < 20; i++) {
        let student = new Student(i, Math.floor(Math.random() * 100))
        
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
            student.result = `Aluno nr ${student.nr} - Nota ${student.nota} APROVADO`;
            totalAprovados += 1;
        } else {
            student.result = `Aluno nr ${student.nr} - Nota ${student.nota} REPROVADO`;
        }
    })

    let statistics = {
        aprovados: totalAprovados,
        reprovados: 20 - totalAprovados,
        aprovadosPercent: 5*totalAprovados,
        reprovadosPercent: 5*(20 - totalAprovados),
    }

    createTable(students, statistics);

}

function generateLayout() {
    
    var divThree = document.getElementById("q3");


    var labelResult = document.createElement('label');
    labelResult.setAttribute("id","labelResult");

    var button = generateButton(divThree);

    divThree.appendChild(button);
    divThree.appendChild(labelResult);

}

function generateButton(divThree) {
    var calcButton = document.createElement('button');
    calcButton.setAttribute("id","calcButton");
    calcButton.innerHTML = "Criar Relatório";

    calcButton.addEventListener("click", function () {
        var table = document.getElementById("tableStatistics");

        if(table){
            divThree.removeChild(table);
        }

        showStudentsStatistics();
    });

    return calcButton;
}

function createTable(students, statistics) {
    const table = document.createElement('table');
    table.setAttribute("id","tableStatistics");
    var divThree = document.getElementById("q3");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var headerCell = row.insertCell(0);
    
    headerCell.innerHTML = "RELATÓRIO DE ALUNOS APROVADOS/REPROVADOS";

    for (let i = 0; i < 20; i++) {
        const tr = table.insertRow();
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(students[i].result))
    }

    var footer = table.createTFoot();
    var row = footer.insertRow(0);  
    var footerCell = row.insertCell(0);
    footerCell.innerHTML = `APROVADOS ${statistics.aprovados} ${statistics.aprovadosPercent}% | REPROVADOS: ${statistics.reprovados} ${statistics.reprovadosPercent}%`

    divThree.appendChild(table);
}

class Student {
    constructor(nr, nota) {
        this.nr = nr;
        this.nota = nota;
    }
}