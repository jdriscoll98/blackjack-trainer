import { useEffect, useState } from "react";
import { getSuitChar } from "../../Utils/";
import "./Card.css";

export function Card(props) {
  const [number] = useState(props.number ?? "A");
  const [suit] = useState(props.suit ?? "spades");
  const [isHidden, setIsHidden] = useState(props.showDelay);

  useEffect(() => {
    if (props.showDelay) {
      setTimeout(() => {
        setIsHidden(false);
      }, props.showDelay);
    }
  }, [props.showDelay]);
  return (
    <div
      className={`card ${props.className} ${props.flipped ? "flipped" : ""} ${
        isHidden ? "hidden" : ""
      }  card-color-${["hearts", "diamonds"].includes(suit) ? "red" : "black"}`}
    >
      <div className="card-number-top">{!props.flipped ? number : ""}</div>
      <div className="card-suit">{!props.flipped ? getSuitChar(suit) : ""}</div>
      <div className="card-number-bottom">{!props.flipped ? number : ""}</div>
    </div>
  );
}
