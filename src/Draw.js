class Draw{
    
    static drawCards(cards) {
        let i = 0;

        fill(0);
        cards.forEach((card) => {
            
            rect(
                card.xPosition, 
                card.yPosition, 
                card.width, 
                card.height
            );

            
            if (card.state == 'abajo' ) {
                fill(0);
                rect(
                    card.xPosition, 
                    card.yPosition, 
                    card.width, 
                    card.height
                );
            } else {
                image(images[i], card.xPosition-13, card.yPosition, 150, 150) 
            }
            i++;
        })

    }

    static drawVictory() {

        fill(0)
        rect(
            0,
            0,
            canvasWidth,
            canvasHeight
        )

        fill(255);
        textSize(60);
        text("Has ganado!!!", (canvasWidth/4), 400);
    }
}