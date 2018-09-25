// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
$.ajax({
  url: 'https://swapi.co/api/films/',
  dataType: 'json',
  success: function(resposta) {
    // escreve a resposta no console (para ver o que foi recebido)
    console.log(resposta);
    let listaFilmes = document.querySelectorAll('#movies > ul > li');
  }
});