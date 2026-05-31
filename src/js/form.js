// -----------FORMULÁRIO DE CADASTRO-----------------

// Seleciona o formulário
const formCadastro = document.getElementById("formCadastro");

// Evento de envio
formCadastro.addEventListener("submit", function(event) {

    event.preventDefault();

    // Campos obrigatórios
    const camposObrigatorios = document.querySelectorAll("#formCadastro [required]");

    let formularioValido = true;

    // Validação
    camposObrigatorios.forEach(function(campo) {

        if (campo.value.trim() === "") {

            formularioValido = false;

            campo.style.border = "2px solid red";

        } else {

            campo.style.border = "1px solid #ccc";
        }
    });

    // Sucesso
    if (formularioValido) {

        Swal.fire({
            icon: "success",
            title: "Cadastro realizado!",
            text: "Usuário cadastrado com sucesso.",
            confirmButtonText: "Continuar"
        });

        formCadastro.reset();

    } else {

        // Erro
        Swal.fire({
            icon: "error",
            title: "Campos obrigatórios",
            text: "Preencha todos os campos antes de continuar.",
            confirmButtonText: "Ok"
        });
    }
});

