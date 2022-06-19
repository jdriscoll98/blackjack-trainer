import { useEffect, useState } from "react";
import { Card } from "../../../../Components";
import { shuffleDeck, createDecks, getCountingValue } from "../../../../Utils/";
import "./States.scss";
export function DealState(props) {
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [deck] = useState(shuffleDeck(createDecks(props.deckCount)));

  const { tablePlayerCount, setCount } = props;

  // Deal cards to each player
  useEffect(() => {
    const dealCards = [];
    for (let i = 0; i < 2; i++) {
      dealCards.push(deck.pop());
    }
    const playCards = [];
    for (let i = 0; i < tablePlayerCount * 2; i++) {
      playCards.push(deck.pop());
    }
    setDealerCards(dealCards);
    setPlayerCards(playCards);
    const playerCardCount = playCards.reduce(
      (acc, card) => acc + getCountingValue(card.number),
      0
    );
    const dealerCardCount = dealCards.reduce(
      (acc, card) => acc + getCountingValue(card.number),
      0
    );
    setCount(playerCardCount + dealerCardCount);
  }, [tablePlayerCount, setCount, deck]);

  return (
    <>
      <Card className="deck" flipped></Card>
      <p className="dealer-label">Dealer</p>
      {dealerCards.map((card, index) => {
        const showDelay =
          index === 0
            ? (props.tablePlayerCount + 1) * 1000
            : (props.tablePlayerCount * 2 + 2) * 1000;
        return (
          <Card
            className={`dealer card-${index + 1}`}
            key={`dealer-${index + 1}`}
            suit={card.suit}
            number={card.number}
            id={`dealer-${index + 1}`}
            showDelay={showDelay}
          ></Card>
        );
      })}
      {playerCards.map((card, index) => {
        const player = (index % props.tablePlayerCount) + 1;
        const numberOfCard = index < props.tablePlayerCount ? "1" : "2";
        const showDelay =
          player * 1000 +
          (index >= props.tablePlayerCount
            ? props.tablePlayerCount * 1000 + 1000
            : 0);

        return (
          <Card
            number={card.number}
            suit={card.suit}
            key={`${card.number}-${card.suit}-${index}`}
            className={`player-${player} card-${numberOfCard}`}
            showDelay={showDelay}
          ></Card>
        );
      })}
    </>
  );
}
