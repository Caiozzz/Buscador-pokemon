const pokemons = [
   {
      name: "Bulbassauro",
      description: "Uma semente cresce nas suas costas a partir do nascimento e floresce com o passar do tempo.",
      type: ["Grama", "Veneno"],
      color: ["-grass", "-poison"],
      image: "./img/001.png"
   },
   {
      name: "Charmander",
      description: "O fogo na ponta da cauda deste Pokémon nunca se apaga. Diz-se que a chama se torna mais forte quando está com raiva.",
      type: ["Fogo"],
      color: ["-fire"],
      image: "./img/004.png"
   },
   {
      name: "Squirtle",
      description: "Quando se retrai para dentro da carapaça, dispara jatos de água com força suficiente para apagar um incêndio a uma distância de mais de 50 metros.",
      type: ["Água"],
      color: ["-water"],
      image: "./img/007.png"
   },
   {
      name: "Butterfree",
      description: "Este Pokémon se alimenta do néctar das flores. Possui asas coloridas e delicadas.",
      type: ["Inseto", "Voador"],
      color: ["-bug", "-flying"],
      image: "./img/012.png"
   },
   {
      name: "Pidgey",
      description: "Uma ave Pokémon muito comum. Voa para todos os lugares procurando por comida.",
      type: ["Normal", "Voador"],
      color: ["", "-flying"],
      image: "./img/016.png"
   },
   {
      name: "Rattata",
      description: "Adapta-se muito facilmente a qualquer ambiente. Vive em grupos e se alimenta de quase tudo.",
      type: ["Normal"],
      color: [""],
      image: "./img/019.png"
   },
   {
      name: "Ekans",
      description: "Este Pokémon ataca enrolando-se no corpo do inimigo e apertando-o com força.",
      type: ["Veneno"],
      color: ["-poison"],
      image: "./img/023.png"
   },
   {
      name: "Pikachu",
      description: "Este Pokémon armazena eletricidade em suas bochechas. Quando está ameaçado, solta faíscas elétricas.",
      type: ["Elétrico"],
      color: ["-electric"],
      image: "./img/025.png"
   },
   {
      name: "Sandshrew",
      description: "Este Pokémon enterra-se na areia e se move rapidamente. A ponta de sua cabeça é muito dura.",
      type: ["Terra"],
      color: ["-ground"],
      image: "./img/027.png"
   },
   {
      name: "Clefairy",
      description: "Diz-se que este Pokémon flutua com a lua cheia. É muito tímido e se esconde quando vê pessoas.",
      type: ["Fada"],
      color: ["-fairy"],
      image: "./img/035.png"
   },
   {
      name: "Zubat",
      description: "Este Pokémon vive em cavernas escuras. Usa o sonar para se localizar.",
      type: ["Veneno", "Voador"],
      color: ["-poison", "-flying"],
      image: "./img/041.png"
   },
   {
      name: "Diglett",
      description: "Este Pokémon vive no subsolo e emerge à superfície para se alimentar de raízes.",
      type: ["Terra"],
      color: ["-ground"],
      image: "./img/050.png"
   },
   {
      name: "Meowth",
      description: "Este Pokémon gosta de coisas brilhantes. Diz-se que ele pode entender a linguagem humana.",
      type: ["Normal"],
      color: "",
      image: "./img/052.png"
   },
   {
      name: "Psyduck",
      description: "Este Pokémon tem fortes dores de cabeça causadas por uma pedra presa em seu cérebro.",
      type: ["Água"],
      color: ["-water"],
      image: "./img/054.png"
   },
   {
      name: "Mankey",
      description: "Este Pokémon é muito violento. Se alguém o irritar, ele ataca imediatamente.",
      type: ["Luta"],
      color: ["-fighting"],
      image: "./img/056.png"
   },
   {
      name: "Abra",
      description: "Este Pokémon tem a capacidade de sentir o futuro. Ele pode prever o tempo e os terremotos.",
      type: ["Psíquico"],
      color: ["-psychic"],
      image: "./img/063.png"
   },
   {
      name: "Geodude",
      description: "Este Pokémon é feito de rocha. Ele rola para atacar seus inimigos.",
      type: ["Pedra", "Terra"],
      color: ["-rock", "-ground"],
      image: "./img/074.png"
   },
   {
      name: "Grimer",
      description: "Este Pokémon nasceu de lama tóxica. Seu corpo exala um odor fétido.",
      type: ["Veneno"],
      color: ["-poison"],
      image: "./img/088.png"
   },
   {
      name: "Gastly",
      description: "Este Pokémon flutua livremente. Ele pode atravessar paredes e assustar as pessoas.",
      type: ["Fantasma", "Veneno"],
      color: ["-ghost", "-poison"],
      image: "./img/092.png"
   },
   {
      name: "Onix",
      description: "Este Pokémon é feito de rocha. Ele pode se enterrar no chão e se mover por longas distâncias.",
      type: ["Pedra", "Terra"],
      color: ["-rock", "-ground"],
      image: "./img/095.png"
   },
   {
      name: "Koffing",
      description: "Este Pokémon exala um gás venenoso por sua boca. Ele é muito perigoso para se aproximar.",
      type: ["Veneno"],
      color: ["-poison"],
      image: "./img/109.png"
   },
   {
      name: "Staryu",
      description: "Este Pokémon é uma estrela do mar. Ele se regenera quando é ferido.",
      type: ["Água"],
      color: ["-water"],
      image: "./img/120.png"
   },
   {
      name: "Eevee",
      description: "Este Pokémon tem a capacidade de evoluir para diferentes formas dependendo do ambiente.",
      type: ["Normal"],
      color: "",
      image: "./img/133.png"
   },
   {
      name: "Vaporeon",
      description: "Este Pokémon se originou quando um Eevee foi exposto a uma Pedra Água. Pode controlar a água com perfeição.",
      type: ["Água"],
      color: ["-water"],
      image: "./img/134.png"
   },
   {
      name: "Jolteon",
      description: "Este Pokémon se originou quando um Eevee foi exposto a uma Pedra Trovão. Ele pode gerar eletricidade estática.",
      type: ["Elétrico"],
      color: ["-electric"],
      image: "./img/135.png"
   },
   {
      name: "Flareon",
      description: "Este Pokémon se originou quando um Eevee foi exposto a uma Pedra Fogo. Ele pode cuspir chamas intensas.",
      type: ["Fogo"],
      color: ["-fire"],
      image: "./img/136.png"
   },
   {
      name: "Snorlax",
      description: "Quando está acordado, este Pokémon come incansavelmente. Diz-se que ele pode comer mais de mil quilogramas de comida por dia.",
      type: ["Normal"],
      color: [""],
      image: "./img/143.png"
   }
]