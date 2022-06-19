const suits = ["spades", "hearts", "diamonds", "clubs"];
const numbers = [
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

export function createDecks(numberOfDecks) {
  const deck = [];
  for (let i = 0; i < numberOfDecks; i++) {
    for (let suit of suits) {
      for (let number of numbers) {
        deck.push({ suit, number });
      }
    }
  }
  return deck;
}

export function createDeck() {
  const deck = [];

  for (let suit of suits) {
    for (let number of numbers) {
      deck.push({ suit, number });
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

export function getSuitChar(suit) {
  switch (suit) {
    case "spades":
      return "♠";
    case "hearts":
      return "♥";
    case "diamonds":
      return "♦";
    case "clubs":
      return "♣";
    default:
      throw new Error("Unexpected suit");
  }
}

export function getCountingValue(number) {
  if (["A", "Q", "J", "K", "10"].includes(number)) {
    return -1;
  } else if (parseInt(number) <= 9 && parseInt(number) >= 7) {
    return 0;
  } else {
    return 1;
  }
}
