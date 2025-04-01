
const canvasWidth= 860;
const canvasHeight = 900;
var pokemonsIndex = [1, 4, 7, 25, 94, 112, 131, 149, 150, 197];
var pokemons = [];
var cards = [];
var images = [];
var i = 0;
var clicks = 0;
var selectedCards = [];
var isWaiting = false;
var points = 0;

getPokemons();
getPokemons();

function getPokemons() {
    pokemonsIndex = barajarArray(pokemonsIndex);
    pokemonsIndex.forEach((index) => {
        ApiRequest.getPokemon(index)
        .then(data => {
            
            pokemons[i] = new Pokemon(data.name, data.sprites.front_default)

            if (i<5) {
                cards[i] = new Card(50 + (i * 160), 50, pokemons[i], "abajo");
            } else if (i<10) {
                cards[i] = new Card(50 + ((i-5) * 160), 250, pokemons[i], "abajo");
            } else if (i<15) {
                cards[i] = new Card(50 + ((i-10) * 160), 450, pokemons[i], "abajo");
            } else {
                cards[i] = new Card(50 + ((i-15) * 160), 650, pokemons[i], "abajo");
            }

            images[i] = loadImage(cards[i].image);
            i++;
        })
        .catch(error => {
            console.log(error);
            return;
        });
    });

}

function barajarArray(array) {
    const nuevoArray = [...array];
    
    for (let i = nuevoArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]]; 
    }
    
    return nuevoArray;
}

function changeState(card) {
    if (card.state == 'arriba') {
        card.state = 'abajo';
    } else if (card.state == 'abajo') {
        card.state = 'arriba';
    }
}

function sleepBlocking(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {}
}