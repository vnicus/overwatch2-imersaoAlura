function pesquisar() {
    let sectionResultados = document.getElementById("resultados");
    let campoPesquisa = document.getElementById("campo_pesquisa").value.toLowerCase();

    let resultado = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    for (let personagem of personagens) {
        nome = personagem.nome.toLowerCase();
        descricao = personagem.descricao.toLowerCase();
        tags = personagem.tags.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultado +=
                `<div onclick="expandir()" class="card blur-effect light-effect">
                    <div class="card-header">
                        <h2>${personagem.nome}</h2>
                    </div>
                    <div class="card-content">
                        <p>${personagem.descricao}</p>
                    </div>
                </div>`;
        }
    }

    if (!resultado) {
        resultado = `<p style="text-align: center;" class="card blur-effect light-effect">Personagem não encontrado. Digite o nome de um personagens</p>`;
    }

    sectionResultados.innerHTML = resultado;
    sectionResultados.style.height = '46vh';
}