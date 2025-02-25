class Hand {
  myCards = [];
  constructor() {
    this.myCards = [];
  }
  addMyCard(...myCard) {
    this.myCards.push(...myCard);
  }

  get hand() {
    return this.myCards;
  }
}
