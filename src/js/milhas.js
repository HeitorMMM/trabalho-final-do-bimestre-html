// -----------------BOTÃO DE MILHAS-------------------

// Estado atual
let mostrandoMilhas = false;

function alternarMilhas() {

    // Valor do milheiro
    const valorMilheiro = 36.43;

    // Seleciona todos os valores
    const valores = document.querySelectorAll(".valor-passagem");

    valores.forEach(function(elemento) {

        // Valor original salvo no HTML
        const valorOriginal = parseFloat(
            elemento.dataset.valor
        );

        // Se estiver mostrando REAL → converte para MILHAS
        if (!mostrandoMilhas) {

            const milhas = (valorOriginal / valorMilheiro) * 1000;

            elemento.innerText =
                milhas.toLocaleString("pt-BR", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }) + " milhas";

        } else {

            // Volta para REAL
            elemento.innerText =
                valorOriginal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                });
        }
    });

    // Alterna estado
    mostrandoMilhas = !mostrandoMilhas;
}