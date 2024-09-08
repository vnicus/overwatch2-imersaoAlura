

// Função que é chamada para pesquisar e exibir os personagens
function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados" e o armazena na variável 'sectionResultados'
    let sectionResultados = document.getElementById("resultados");

    const campoPesquisa = document.getElementById("campo_pesquisa").value;

    // Inicializa uma variável 'resultado' como uma string vazia para armazenar o HTML gerado
    let resultado = "";

    // Loop através de cada personagem no array 'personagens'
    for (let personagem of personagens) {

        personagem.nome.includes(campoPesquisa);

        // Concatena um bloco de código HTML para cada personagem, criando um card com o nome e descrição
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

    // Insere o HTML gerado na seção de resultados, exibindo os cards na página
    sectionResultados.innerHTML = resultado;
    sectionResultados.style.height = '46vh';
}
