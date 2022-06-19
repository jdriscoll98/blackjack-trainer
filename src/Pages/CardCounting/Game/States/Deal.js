import { useEffect, useState } from "react";
import { Card } from "../../../../Components";
import "./States.scss";
export function DealState(props) {
  const [dealtCards, setDealtCards] = useState([]);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    console.log("Dealing", props);
  }, [props.settings]);

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
