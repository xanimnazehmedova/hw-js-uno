class Deck {
    cards = [];
    constructor() {
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
    }
    shuffle() {
        this.cards.sort(() => Math.random() - 0.5)
    }
}