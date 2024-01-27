"use strict";

const form = document.querySelector("#form");

//criar uma nova div e adiciona-la ao document

function criaDiv(msg) {
    const newDiv = document.createElement("div");
    const p  = document.createElement("p");
    p.innerHTML = msg;
    newDiv.appendChild(p);
    newDiv.classList.add("Error-div");
    body.appendChild(newDiv);
}

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    validaNome();
    validaEmail();
    validaSenha();
    validaConfirmaSenha();
})


function validaNome() {
    const name = form.name.value;
    
    if (name) {
        console.log(name);
    } else {
        criaDiv('não há nome');
    }

    
}

function validaSenha () {
    const senha = form.senha.value
    if (senha) {
        console.log(senha);
    } else {
        criaDiv('não há senha');
    }
}
function validaEmail () {
    const email = form.email.value
    if (email) {
        console.log(email);
    } else {
        criaDiv('não há email');
    }
}
function validaConfirmaSenha () {
    const confirmaSenha = form.confirmaSenha.value;
    const senha = form.senha.value;
    if(!confirmaSenha) {
        criaDiv("não há confirmação de senha")
    }else
    if (confirmaSenha === senha ) {
        console.log("As senhas conferem");
    } else {
        criaDiv("As Senhas não conferem!!")
    }
}