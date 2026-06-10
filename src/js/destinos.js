function filtrarDestinos() {

    // Pega valor selecionado
    const categoriaSelecionada =
        document.getElementById("filtroDestino").value;

    // Seleciona todos os cards
    const destinos =
        document.querySelectorAll(".cards-destinos");

    destinos.forEach(function(destino) {

        // Categoria do card
        const categoriaCard =
            destino.dataset.categoria;

        // Mostrar todos
        if (categoriaSelecionada === "todos") {

            destino.style.display = "flex";

        }

        // Mostrar apenas categoria selecionada
        else if (categoriaCard === categoriaSelecionada) {

            destino.style.display = "flex";

        }

        // Esconde os outros
        else {

            destino.style.display = "none";
        }
    });
}