let users = JSON.parse(localStorage.getItem("users"));
let userLogged = JSON.parse(localStorage.getItem("userLogged"));

console.log("User logado", userLogged);

if (users == null || users.length == 0) {
    users = [];
}

if(userLogged) {
    generateLoggedIn();
} else {
    generateLogin();
}

function generateLogin() {

    var divSix = document.getElementById("q6");

    var container = document.createElement("div");
    container.setAttribute("id","container")

    var labelQuestao = document.createElement('label');
    labelQuestao.setAttribute("id","labelQuestao");
    labelQuestao.innerHTML = "Questão 6";

    var loginForm = document.createElement("form");

    var inputEmail = document.createElement('input');
    inputEmail.setAttribute("id","email");
    inputEmail.placeholder = "Email";
    inputEmail.type = "text";

    var inputSenha = document.createElement('input');
    inputSenha.setAttribute("id","senha");
    inputSenha.placeholder = "Senha";
    inputSenha.type = "password";

    var loginButton = generateLoginButton(loginForm);
    var registerButton = generateRegisterButton();

    loginForm.appendChild(inputEmail);
    loginForm.appendChild(inputSenha);
    
    container.appendChild(labelQuestao);
    container.appendChild(loginForm);
    container.appendChild(loginButton);
    container.appendChild(registerButton);

    divSix.appendChild(container);

}


function generateLoginButton(loginForm) {
    var loginButton = document.createElement('button');
    loginButton.setAttribute("id","loginButton");
    loginButton.innerHTML = "Login";
    loginButton.addEventListener("click", function () {

        var isValid = validateLogin(loginForm);
        if(isValid) {
            var userExists = verifyLogin(loginForm);
            if(userExists) {
                deleteLoginScreen();
                generateLoggedIn();
                userLogged = true;
                localStorage.setItem("userLogged", JSON.stringify(true));
            } else {
                alert("Email ou senha inválidos!");
            }
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
        var hasValidValues = validateForms(registerForm);
        if(hasValidValues) {
            if(userDoesNotExists(registerForm)) {
                alert("Usuário cadastrado com sucesso!");
                saveUser(registerForm);
                deleteRegisterScreen();
                generateLogin();
            } else {
                alert("Usuário já existe!");
            }
            
        } else {
            alert("Insira todas as informações!")
        }

    });

    return saveButton;
}

function validateLogin(forms) {
    var email = forms.email.value;
    var senha = forms.senha.value;

    if(isEmpty(email) || isEmpty(senha)) {
        return false;
    }

    return true;

}

function verifyLogin(forms) {
    var email = forms.email.value;
    var senha = forms.senha.value;
    console.log("Email: ", email, "Senha: ", senha)
    for(let i = 0; i < users.length; i++) {
        console.log("Email: ", users[i].email, "Senha: ", users[i].password)
        if(users[i].email === email && users[i].password === senha) {

            return true;
        }
    }

    return false;
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

    var container = document.createElement("div");
    container.setAttribute("id", "containerLogged");

    var loggedLabel = document.createElement('label');
    loggedLabel.innerHTML = "Usuário logado!";

    var logoutButton = document.createElement('button');
    logoutButton.setAttribute("id","logoutButton");
    logoutButton.innerHTML = "Sair";
    logoutButton.addEventListener("click", function() {
        deleteLoggedScreen();
        generateLogin();
    })

    container.appendChild(loggedLabel);
    container.appendChild(logoutButton);

    divSix.appendChild(container);
}

function deleteLoggedScreen() {
    var container = document.getElementById("containerLogged");
    var divSix = document.getElementById("q6");

    localStorage.setItem("userLogged", JSON.stringify(false));
    divSix.removeChild(container);
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

function userDoesNotExists(form) {
    var email = form.email.value;

    for(let i = 0; i < users.length; i++) {
        if(users[i].email === email) {
            return false;
        }
    }

    return true;;
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