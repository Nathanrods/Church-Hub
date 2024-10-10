document.addEventListener('DOMContentLoaded', () => {
    const listaMusicas = document.getElementById('musicas');
    const tituloMusica = document.getElementById('musica-titulo');
    const letraMusica = document.getElementById('letra-musica');

    // Função para carregar músicas do arquivo JSON
    fetch('musicas.json')
        .then(response => response.json())
        .then(musicas => {
            // Exibir a lista de músicas
            musicas.forEach((musica, index) => {
                const li = document.createElement('li');
                li.textContent = `${musica.nome} - ${musica.artista}`;
                li.addEventListener('click', () => exibirMusica(musica));
                listaMusicas.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar músicas:', error));

    // Função para exibir a música com cifras
    function exibirMusica(musica) {
        tituloMusica.textContent = `${musica.nome} - ${musica.artista}`;
        letraMusica.innerHTML = ''; // Limpar conteúdo anterior

        musica.letra.forEach(linha => {
            const p = document.createElement('p');
            p.innerHTML = `<span id="acorde">${linha.acorde}</span> ${linha.texto}`;
            letraMusica.appendChild(p);
        });
    }
});
