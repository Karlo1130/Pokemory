function setup() {

    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(100);

    Draw.drawCards(cards);

    if (points == 10) Draw.drawVictory();

    update();
}

function update() {

}

async function mouseClicked() {

    if (clicks == 2 || isWaiting) return;

    cards.forEach((card) => {
        if (mouseX > card.xPosition
            && mouseX < card.xPosition + card.width
            && mouseY > card.yPosition
            && mouseY < card.yPosition + card.height
        ) {

            changeState(card);
            selectedCards[clicks] = card;
            clicks++;

            if (clicks == 2){
                if(selectedCards[0].name == selectedCards[1].name
                    && selectedCards[0] != selectedCards[1]
                ){
                    console.log('el par es correcto');
                    selectedCards.forEach((selectedCard) => {
                        selectedCard.state = 'ARRIBA'
                    })
                    selectedCards = [];
                    clicks = 0;
                    points++;

                } else {
                    console.log('Par incorrecto');
                    isWaiting = true; 
                    
                    setTimeout(() => {
                        selectedCards.forEach((selectedCard) => {
                            changeState(selectedCard);
                        });
                        selectedCards = [];
                        clicks = 0;
                        isWaiting = false;
                    }, 2000);
                }
            }
        }
    })


    
}