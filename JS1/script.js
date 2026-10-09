let filmes = [
    { titulo: "Matrix", ano: 1999, genero: "Ficção", nota: 8.7, poster: "img/matrix.jpg" },
    { titulo: "Toy Story", ano: 1995, genero: "Animação", nota: 8.3, poster: "img/toystory.jpg" },
    { titulo: "Batman Begins", ano: 2005, genero: "Ação", nota: 8.2, poster: "img/batmanbegins.jpg" },
    { titulo: "Batman - O Cavaleiro das Trevas", ano: 2008, genero: "Crime", nota: 9.1, poster: "img/cavaleirodastrevas.png" },
    { titulo: "Batman - O Cavaleiro das Trevas Ressurge", ano: 2012, genero: "Aventura", nota: 8.4, poster: "img/cavaleiroressurge.jpg" },
    { titulo: "Interestelar", ano: 2014, genero: "Ficção", nota: 8.7, poster: "img/interestelar.webp" },
    { titulo: "Divertida Mente", ano: 2015, genero: "Animação", nota: 8.1, poster: "img/divertidamente.webp" },
    { titulo: "Oppenheimer", ano: 2023, genero: "Thriller", nota: 8.3, poster: "img/oppenheimer.jfif" }
];

const busca = document.getElementById("busca");
const cards = document.querySelector(".cards");
const contador = document.getElementById("contador");
const filtroGenero = document.getElementById("filtro-genero");

function atualizarCatalogo() {
    const texto = busca.value.toLowerCase();
    const generoSelecionado = filtroGenero.value;
    let filmesFiltrados;

    if (generoSelecionado === "Todos") {
        filmesFiltrados = filmes.filter(filme =>
            filme.titulo.toLowerCase().includes(texto)
        );
    } else {
        filmesFiltrados = filmes.filter(filme =>
            filme.genero === generoSelecionado &&
            filme.titulo.toLowerCase().includes(texto)
        );
    }

    mostrarFilmes(filmesFiltrados);
}

filtroGenero.addEventListener("change", atualizarCatalogo);
busca.addEventListener("input", atualizarCatalogo);

function mostrarFilmes(filmes) {
    contador.innerHTML = "Quantia de filmes: " + filmes.length;

    if (filmes.length == 0) {
        cards.innerHTML = "<p>Nenhum filme encontrado</p>";
        return;
    }

    cards.innerHTML = filmes.map(filme => `
        <div class="card">
            <img class="poster" src="${filme.poster}" alt="Pôster de ${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p>Ano: ${filme.ano}</p>
            <p>Gênero: ${filme.genero}</p>
            <p>Nota: ${filme.nota}</p>
            ${filme.nota >= 8 ? "<p>Recomendado</p>" : ""}
        </div>
    `).join("");
}

mostrarFilmes(filmes);