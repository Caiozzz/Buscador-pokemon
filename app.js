function adicionarPokemon(pokemon) {

   let typesList = "";
   for (let i = 0; i < pokemon.type.length; i++) {
      typesList += `<span class="type ${pokemon.color[i]}">${pokemon.type[i]}</span>\n`;
   }

   let pokemonCard = `
      <section class="pokemon-card ${pokemon.color[0]}">
         <div class="image">
            <img src=${pokemon.image} alt="nome">
         </div>
         <div class="info">
            <h2 class="name">${pokemon.name}</h2>
            <p class="description">${pokemon.description}</p>
            <div id="typesContainer">
               ${typesList}
            </div>
         </div>
      </section>
   `;
   return pokemonCard;
}

function pesquisar() {

   let sectionResults = document.getElementById("results");
   let input = document.getElementById("input").value.toLowerCase();
   let cards = "";
   
   if (input.trim() != "") {

      for (pokemon of pokemons) {
   
         const name = pokemon.name.toLowerCase();
         if (name.includes(input)){
   
            cards += adicionarPokemon(pokemon);
         }
      }

      if (!cards) {
         sectionResults.innerHTML = `<span class="error-message">Nenhum Pokémon foi encontrado...</span>`;
         return;
      }
   
      sectionResults.innerHTML = `<section class="cards-list">${cards}</section>`;
   } else {
      sectionResults.innerHTML = `<span class="error-message">Digite o nome de um Pokémon!</span>`;
   }

}

function filtrar() {
   let sectionResults = document.getElementById("results");
   let selection = document.getElementById("filter").value;
   let cards = "";

   for (pokemon of pokemons) {

      if (pokemon.type.includes(selection)) {
         cards += adicionarPokemon(pokemon);
      }
   }

   sectionResults.innerHTML = `<section class="cards-list">${cards}</section>`;
   
}