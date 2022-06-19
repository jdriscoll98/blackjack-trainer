const suits = ["spades", "hearts", "diamonds", "clubs"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const deck = [];
export function createDeck() {
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
}
export function shuffleDeck(deck) {
  for (let i = 0; i < 1000; i++) {
    let rand1 = Math.floor(Math.random() * deck.length);
    let rand2 = Math.floor(Math.random() * deck.length);
    let temp = deck[rand1];
    deck[rand1] = deck[rand2];
    deck[rand2] = temp;
  }
  return deck;
}
