class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];

    }
    getPlayerName() {
        return this.name;
    }

    incrementScore() {
        this.score += 1;
    }

    getScore(){
        return this.score;
    }


    // someway to compare score or get score
    // a name ...
    // a score...
    // a hand of cards
    // a method to draw a card from the hand
    drawCard() {
        return this.hand.pop();
    }
}


class Card {
    constructor(value, cardName) {
        this.value = value;
        this.cardName = cardName;
    }

    getValue(){
        return this.value;
    }


    describe() {
        return `${this.cardName} is equal to a value of ${this.value}`
    }
        // need to figure out how to get the number and suits assigned to each card...
        // (think about how you might do this in the card class or deck class)...
        // this about arrays of suits and numbers and inner and outer for-loops...
        // 4 types of each card ex. 2 of hearts, 2 of diamonds, 2 of clubs, and 2 of spades....
        // 4 suits...

    // a value...
    // a method to describe each card...
}

class Deck {
    constructor() {
        this.cards = []
        this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
    }
    createDeck() {
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 2; j <=14; j++ ) {
                if( j == 11 ) {
                    this.cards.push(new Card(j, `Jack of ${this.suits[i]}`));
                } else if (j == 12 ) {
                    this.cards.push(new Card(j, `Queen of ${this.suits[i]}`));
                } else if (j == 13 ) {
                    this.cards.push(new Card(j, `King of ${this.suits[i]}`));
                } else if (j == 14 ) {
                    this.cards.push(new Card(j, `Ace of ${this.suits[i]}`));
                } else {
                    this.cards.push(new Card(j, `${j} of ${this.suits[i]}`));
                }
            }
        }
    }
    shuffleCards() { 
        const { cards } = this;
        let m = 52, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            [cards[m], cards[i]] = [cards[i], cards[m]];
        }
        return this;
    }

    drawCard() {
        return this.cards.pop();
    }



    // an array of cards
    // build out the nested for-loops in the deck and create each card instance within that loop
    // push each instance to the array of cards
    // a method to shuffle the cards
    // a method to deal the cards to each player
}


class PlayGame {
    constructor(){
        this.player1 = new Player("Joe");
        this.player2 = new Player("Billy");
        this.deck = new Deck();
    }

    startGame(){
        this.deck.createDeck();
        this.deck.shuffleCards();
        this.dealCards(this.deck);
        console.log(this.deck);

    }

    dealCards(deck){
        for(let i = 0; i < 26; i++) {
            this.player1.hand.push(deck.drawCard());
            this.player2.hand.push(deck.drawCard());
        }
    }


    playRound() {
        for(let round = 1; round <= 26; round++) {
            let player1Card = this.player1.drawCard();
            let player2Card = this.player2.drawCard();
        if (player1Card.value > player2Card.value) {
            this.player1.incrementScore();
        } else if (player1Card.value < player2Card.value) {
               this.player2.incrementScore();
        } 
    }

    }


    whoWins() {
        if (this.player1.getScore() > this.player2.getScore()) {
            console.log(`
            Player 1 has won! They won with ${this.player1.getScore()} Points!
            `);
        } else if (this.player1.getScore() < this.player2.getScore()) {
            console.log(`
            Player 2 has won! They Won with ${this.player2.getScore()} Points!
            `);
        } else { 
            console.log('Its a Draw!');
        } 
     }
}


let game = new PlayGame();
game.startGame();
//console.log(player1.hand);
//console.log(player2.hand);
game.playRound();
game.whoWins();


