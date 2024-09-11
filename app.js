let sectionResults = document.getElementById("results");
let cards = "";
// let pokemonTags = "";

for (pokemon of pokemons) {

   let listaDeTipos = "";

   for (let i = 0; i < pokemon.type.length; i++){
      // pokemonTags += type; 
      listaDeTipos += `<span class="type ${pokemon.color[i]}">${pokemon.type[i]}</span>\n`;
   }

   cards += `
      <section class="pokemon-card ${pokemon.color[0]}">
         <div class="image">
            <img src=${pokemon.image} alt="nome">
         </div>
         <div class="info">
            <h2 class="name">${pokemon.name}</h2>
            <p class="description">${pokemon.description}</p>
            <div id="typesContainer">
               ${listaDeTipos}
            </div>
         </div>
      </section>
   `;
}

sectionResults.innerHTML = cards;