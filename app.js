const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  //console.dir(pokemon, { maxArrayLength: null })
//Exercise 1
  console.log(pokemon[59].name)
//Exercise 2
//console.log(game)
//Exercise 3
game.difficulty = 'Med'
console.log(game)
//Exercise 4
const starterPokemon = pokemon.find(p => p.starter)
if(starterPokemon) {
    game.party.push(starterPokemon)
}
console.log(game)
//Exercise 5
const pokemonToAdd = [
    pokemon[27],
    pokemon[56],
    pokemon[121]
]
game.party.push(...pokemonToAdd)
console.log(game)
//Exercise 6
game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
})
console.log(game)
//Exercise 7
const evolution = {
    'Charmander': 'Charmeleon'
}
const index = game.party.findIndex(pokemon => pokemon.name === 'Charmander')
if (evolution[game.party[index].name]) {
    const evolvedForm = evolution[game.party[index].name]
    game.party[index] = { name: evolvedForm}
}
console.log(game)
//Exercise 8
for (let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name);
}
//Exercise 9
const starterPokemon = pokemon.filter(p => p.starter)
starterPokemon.forEach(pokemon => {
    console.log(pokemon.name);
})
//Exercise 10
catchPokemon: function(pokemonObj) {
    this.party.push(pokemonObj);
}
const pokemonToCatch = { name: ['Sandshrew'], type: 'ground', HP: 50 }
game.catchPokemon(pokemonToCatch)
console.log(game)
//Exercise 11
catchPokemon: function(pokemonObj) {
    party.push(pokemonObj)
    const pokeballIndex = this.items.findIndex(item => item.name === "pokeball");
        if (pokeballIndex !== -1) {
            this.items[pokeballIndex].quantity--;
        }
    }
const pokemonToCatch = { name: 'Pikachu', type: Electric, HP: 35 }
game.catchPokemon(pokemonToCatch)
console.log(game)
//Exercise 12
completeGyms: function() {
    this.gyms.forEach(gym => {
        if (gym.difficulty < 6) {
            gym.completed = true;
        }
    });
}
game.completeGyms()
console.log(game)
//Exercise 13
gymStatus: function() {
    const gymTally = {
        completed: 0,
        incomplete: 0
    }
    this.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    })
    console.log("Gym Tally:");
        console.log(gymTally);
    }

game.gymStatus()
//Exercise 14
partyCount: function() {
    return this.party.length;
}
const numberOfPokemon = game.partyCount();
console.log(`Number of Pokémon in the party: ${numberOfPokemon}`)
//Exercise 15
completeGymsBelow8: function() {
    this.gyms.forEach(gym => {
        if (gym.difficulty < 8) {
            gym.completed = true;
        }
    });
}
game.completeGymsBelow8()
console.log(game)
//Exercise 16
console.log(game);