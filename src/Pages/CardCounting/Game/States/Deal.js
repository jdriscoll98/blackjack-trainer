import { useEffect, useState } from "react";
import { Card } from "../../../../Components";
import { shuffleDeck, createDeck } from "../../../../Utils/";
import "./States.scss";
export function DealState(props) {
  const [dealtCards, setDealtCards] = useState([]);
  const [deck, setDeck] = useState(shuffleDeck(createDeck()));

  useEffect(() => {
    console.log(deck);
  }, [deck]);

  return (
    <>
      <Card className="deck" flipped></Card>
      {dealtCards.map((card, index) => {
        const player = index / 2;
        const numberOfCard = index % 2;
        console.log(player, numberOfCard);
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
