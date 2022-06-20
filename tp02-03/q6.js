// Criar um componente para criação de usuário e login em aplicação(sign up/ sign in).

// No 1o cenário, antes de estar logado, o visitante se depara com o formulário de login ou de criação de usuário. Se for feito o login com sucesso, o componente deve levar ao cenário 2, se falhar ele deve alertar o usuário e voltar ao início do cenário 1. Se o usuário optar por criar um usuário, o componente deve criar o registro de um novo usuário e voltar para início do cenário 1.

// No cenário 2, após logado, mostrar apenas um texto de logado no componente e um botão (ou link) para deslogar, retornando ao início do cenário 1.

// Deve ser possível criar múltiplos usuários e, se fechada, a página não pode perder os registros de usuários  armazenados.


//criar formulário de login - ok
//criar formulario de registro - ok
//criar comp de logado com botão de logout que volta para a tela de login - ok
//salvar no localstorage as coisas

let users = JSON.parse(localStorage.getItem("users"));
if(users == null || users.length == 0) {
    users = [];
    generateRegister();
} else {
    generateLogin();
}

//generateRegister();
//generateLoggedIn();

function generateLogin() {

    var divSix = document.getElementById("q6");
    var container = document.createElement("div");
    container.setAttribute("id","container")

    var loginForm = document.createElement("form");

    var inputEmail = document.createElement('input');
    inputEmail.setAttribute("id","inputEmail");
    inputEmail.placeholder = "Email";
    inputEmail.type = "text";

    var inputSenha = document.createElement('input');
    inputSenha.setAttribute("id","inputSenha");
    inputSenha.placeholder = "Senha";
    inputSenha.type = "text";

    var loginButton = generateLoginButton(divSix);
    var registerButton = generateRegisterButton();

    loginForm.appendChild(inputEmail);
    loginForm.appendChild(inputSenha);
    
    container.appendChild(loginForm);
    container.appendChild(loginButton);
    container.appendChild(registerButton);

    divSix.appendChild(container);

}


function generateLoginButton(inputValor) {
    var loginButton = document.createElement('button');
    loginButton.setAttribute("id","loginButton");
    loginButton.innerHTML = "Login";
    loginButton.addEventListener("click", function () {
        if(hasValidValues(inputValor.valueAsNumber)) {
            // console.log("Valid values")
            // var labelResult = document.getElementById("labelResult");

            // const startTime = Date.now();

            // var result = fatorial(inputValor.valueAsNumber);
            
            // const duration = Date.now() - startTime;


            // labelResult.innerHTML = `${inputValor.value}! = ${result} (${duration} milisegundos)`
        } else {
            alert("Valores inválidos!");
        }
    });

    return loginButton;
}

function generateRegisterButton() {
    var registerButton = document.createElement('button');
    registerButton.setAttribute("id","registerButton");
    registerButton.innerHTML = "Cadastrar";

    registerButton.addEventListener("click", function() {
        generateRegister();
        deleteLoginScreen();
    });

    return registerButton;
}

function generateRegister() {
    var divSix = document.getElementById("q6");
    
    var registerContainer = document.createElement("div");
    registerContainer.setAttribute("id", "registerContainer");

    var registerForm = document.createElement("form");

    var inputNome = document.createElement('input');
    inputNome.setAttribute("name","nomeCompleto");
    inputNome.placeholder = "Nome completo";
    inputNome.type = "text";

    var inputIdade = document.createElement('input');
    inputIdade.setAttribute("name","idade");
    inputIdade.placeholder = "Idade";
    inputIdade.type = "number";

    var inputEmail = document.createElement('input');
    inputEmail.setAttribute("name","email");
    inputEmail.placeholder = "Email";
    inputEmail.type = "text";

    var inputSenha = document.createElement("input");
    inputSenha.setAttribute("type", "password");
    inputSenha.setAttribute("name", "senha");
    inputSenha.setAttribute("placeholder", "Senha");

    var inputRepeteSenha = document.createElement("input");
    inputRepeteSenha.setAttribute("type", "password");
    inputRepeteSenha.setAttribute("name", "repetirSenha");
    inputRepeteSenha.setAttribute("placeholder", "Confirmar senha");

    registerForm.appendChild(inputNome);
    registerForm.appendChild(inputIdade);
    registerForm.appendChild(inputEmail);
    registerForm.appendChild(inputSenha);
    registerForm.appendChild(inputRepeteSenha);

    registerContainer.appendChild(registerForm);

    var saveButton = generateSaveButton(registerForm);
    registerContainer.appendChild(saveButton);
    divSix.appendChild(registerContainer);


}

function generateSaveButton(registerForm) {
    var saveButton = document.createElement('button');
    saveButton.setAttribute("id","saveButton");
    saveButton.innerHTML = "Salvar";
    saveButton.addEventListener("click", function() {
        //validate input
        var hasValidValues = validateForms(registerForm);
        if(hasValidValues) {
            alert("Usuário cadastrado com sucesso!");
            saveUser(registerForm);
            deleteRegisterScreen();
            generateLogin();
        } else {
            alert("Insira todas as informações!")
        }
        //destroy register on correct input
        //show alerts
    });

    return saveButton;
}

function validateForms(registerForm) {
    var nome = registerForm.nomeCompleto.value;
    var idade = registerForm.idade.valueAsNumber;
    var email = registerForm.email.value;
    var senha = registerForm.senha.value;
    var confirmaSenha = registerForm.repetirSenha.value;

    if(isEmpty(nome) || idade <= 0 || isEmpty(email) || isEmpty(senha) || isEmpty(confirmaSenha)) {
        return false;
    }

    return true;
}


function generateLoggedIn() {
    var divSix = document.getElementById("q6");

    var loggedLabel = document.createElement('label');
    loggedLabel.innerHTML = "Usuário logado!";

    var logoutButton = document.createElement('button');
    logoutButton.setAttribute("id","logoutButton");
    logoutButton.innerHTML = "Sair";

    divSix.appendChild(loggedLabel);
    divSix.appendChild(logoutButton);
}

function deleteLoginScreen() {
    var container = document.getElementById("container");
    var divSix = document.getElementById("q6");

    divSix.removeChild(container);
}

function deleteRegisterScreen() {
    var container = document.getElementById("registerContainer");
    var divSix = document.getElementById("q6");
    divSix.removeChild(container);
}

function saveUser(form) {
    var nome = form.nomeCompleto.value;
    var idade = form.idade.valueAsNumber;
    var email = form.email.value;
    var senha = form.senha.value;

    var user = new User(nome, idade, email, senha);
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
}

function isEmpty(str) {
    return !str.trim().length;
}

class User {
    constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}