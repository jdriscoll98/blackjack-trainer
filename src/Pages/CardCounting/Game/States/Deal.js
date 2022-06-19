import { useEffect, useState } from "react";
import { Card } from "../../../../Components";
import { shuffleDeck, createDecks } from "../../../../Utils/";
import "./States.scss";
export function DealState(props) {
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [deck, setDeck] = useState(shuffleDeck(createDecks(props.deckCount)));

  // Deal cards to each player
  useEffect(() => {
    const dealCards = [];
    for (let i = 0; i < 2; i++) {
      dealCards.push(deck.pop());
    }
    const playCards = [];
    for (let i = 0; i < props.tablePlayerCount * 2; i++) {
      playCards.push(deck.pop());
    }
    setDealerCards(dealCards);
    setPlayerCards(playCards);
  }, [props.tablePlayerCount, deck]);

  return (
    <>
      <Card className="deck" flipped></Card>
      {dealerCards.map((card, index) => (
        <Card
          className={`dealer card-${index + 1}`}
          key={`dealer-${index + 1}`}
          suit={card.suit}
          number={card.number}
        ></Card>
      ))}
      {playerCards.map((card, index) => {
        const player = (index % props.tablePlayerCount) + 1;
        const numberOfCard = index < props.tablePlayerCount ? "1" : "2";

        return (
          <Card
            number={card.number}
            suit={card.suit}
            key={`${card.number}-${card.suit}-${index}`}
            className={`player-${player} card-${numberOfCard}`}
          ></Card>
        );
      })}
    </>
  );
}
