function validarNome() {
    const nome = document.getElementById("nome").value.trim();
    const erro = document.getElementById("erro-nome");

    if (nome.length < 3) {
        erro.textContent = "O nome deve conter pelo menos 3 letras.";
        return false;
    } else {
        erro.textContent = "";
        return true;
    }
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const erro = document.getElementById("erro-email");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        erro.textContent = "Digite um e-mail válido.";
        return false;
    } else {
        erro.textContent = "";
        return true;
    }
}

function validarAssunto() {
    const assunto = document.getElementById("assunto").value.trim();
    const erro = document.getElementById("erro-assunto");

    if (assunto.length < 5) {
        erro.textContent = "O assunto deve conter pelo menos 5 caracteres.";
        return false;
    } else {
        erro.textContent = "";
        return true;
    }
}

function validarMensagem() {
    const mensagem = document.getElementById("mensagem").value.trim();
    const erro = document.getElementById("erro-mensagem");

    if (mensagem.length === 0) {
        erro.textContent = "Escreva uma mensagem.";
        return false;
    } else {
        erro.textContent = "";
        return true;
    }
}

function validarFormulario() {
    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const assuntoValido = validarAssunto();
    const mensagemValida = validarMensagem();

    if (nomeValido && emailValido && assuntoValido && mensagemValida) {
        alert("Formulário enviado!");
        return true;
    }

    return false;
}
