class Player {
  constructor(id, wins, keyDeal, keySlap) {
    this.id = id
    this.wins = 0
    this.hand = []
    this.keyDeal = keyDeal
    this.keySlap = keySlap
    this.outOfCards = true
    this.cardsLeft = 0
  }

  showPlayersCards() {
    this.cardsLeft = this.hand.length
    return this.cardsLeft
  }

  hasCards() {
    return this.hand.length > 0
  }

  playCard() {
    if(this.hand.length > 0) {
      var lostCard = this.hand.splice(0, 1)
      return lostCard
    }
    return
  }

  addCard(card) {
    this.hand.unshift(card)
    this.outOfCards = false
  }

  addCards(cards) {
    this.hand = this.hand.concat(cards)
    this.outOfCards = false
    this.shuffleDeck()
  }

  checkIsOutOfCards() {
      this.outOfCards = this.hand.length == 0
  }

  removeTopCard() {
    var card = this.hand.splice(0, 1)[0]
    this.checkIsOutOfCards()
    return card
  }

  addCardToBottom(card) {
    this.hand.push(card)
    this.checkIsOutOfCards()
  }

  clearHands() {
    this.hand = []
  }

  shuffleDeck() {
    for (var i = this.hand.length-1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * i)
      var index = this.hand[i]
      this.hand[i] = this.hand[randomIndex]
      this.hand[randomIndex] = index
    }
  }

  saveToStorage() {

  }
}
