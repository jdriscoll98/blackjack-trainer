import { Card } from "../../../../Components";
import "./States.scss";
export function DealState(props) {
  return (
    <>
      <Card className="deck" flipped></Card>
      <p className="dealer-label">Dealer</p>
      {props.dealerCards?.map((card, index) => {
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
      {props.playerCards?.map((card, index) => {
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
