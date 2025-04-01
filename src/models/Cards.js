class Card {
    constructor(xPosition, yPosition, pokemon, state) {

        this.xPosition = xPosition;
        this.yPosition = yPosition;

        this.name = pokemon.name;
        this.image = pokemon.image;

        this.width = 120;
        this.height = this.width * 1.4;

        this.state = state;
    }
}