const loadHeader = async () => {
    const placeholder = document.querySelector("#header-placeholder");
    if (!placeholder) return;

    try {
        const response = await fetch("header.html");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        placeholder.innerHTML = await response.text();
    } catch (error) {
        console.error("Erro ao carregar o header:", error);
    }
};

loadHeader();

const loadFooter = async () => {
    const placeholder = document.querySelector("#footer-placeholder");
    if (!placeholder) return;

    try {
        const response = await fetch("footer.html");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        placeholder.innerHTML = await response.text();
    } catch (error) {
        console.error("Erro ao carregar o footer:", error);
    }
};

loadFooter();




let imagens = document.querySelectorAll(".imgCarrossel")
let indice = 0

function mostrarImagens() {
    imagens.forEach(function(img) {
        img.classList.remove("ativa")
    })

    imagens[indice].classList.add("ativa")
}

function passar() {
    indice++

    if (indice >= imagens.length) {
        indice = 0
    }

    mostrarImagens()
}

setInterval(passar, 4000)




let pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
    let texto = pesquisa.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    let encontrados = 0;

    cards.forEach(function (card) {
        let titulo = card.querySelector("h3").textContent.toLowerCase();

        if (titulo.includes(texto)) {
            card.style.display = "block";
            encontrados++;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("resultado").innerText =
        encontrados + " resultados encontrados";
        }
});

let botoesComprar = document.querySelectorAll(".comprar");

botoesComprar.forEach(function(botao) {
    botao.addEventListener("click", function() {
        alert("Produto adicionado ao carrinho com sucesso! (Funcionalidade de loja será implementada no futuro)");
    });
});