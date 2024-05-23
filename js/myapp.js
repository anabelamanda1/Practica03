$(document).ready(function() {
  $.getJSON('json/pokemon.json', function(data) {
    renderizarEntrenadores(data);
  });

  function renderizarEntrenadores(entrenadores) {
    entrenadores.forEach(entrenador => {
      let entrenadorDiv = $('<div class="trainer"></div>');
      let entrenadorName = $('<h2></h2>').text(entrenador.entrenador);
      entrenadorDiv.append(entrenadorName);

      entrenador.pokemons.forEach(pokemon => {
        let tipoClase = getTipoClase(pokemon.tipo);
        let pokemonDiv = $(`
          <div class="pokemon ${tipoClase}">
            <p>${pokemon.nombre}</p>
            <img src="${pokemon.foto}" alt="${pokemon.nombre}">
          </div>
        `);
        entrenadorDiv.append(pokemonDiv);
      });

      $('#trainers').append(entrenadorDiv);
    });
  }

  function getTipoClase(tipo) {
    switch (tipo.toLowerCase()) {
      case 'planta':
        return 'planta';
      case 'fuego':
        return 'fuego';
      case 'eléctrico':
        return 'electrico';
      case 'agua':
        return 'agua';
      case 'hada':
        return 'hada';
      case 'roca':
        return 'roca';
      case 'tierra':
        return 'tierra';
      case 'lucha':
        return 'lucha';
      case 'acero':
        return 'acero';
      case 'siniestro':
        return 'siniestro';
      case 'fantasma':
        return 'fantasma';
      default:
        return '';
    }
  }
});

