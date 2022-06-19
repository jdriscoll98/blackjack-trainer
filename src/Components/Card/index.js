import { useState } from "react";
import { getSuitChar } from "../../Utils/";
import "./Card.css";

export function Card(props) {
  const [number] = useState(props.number ?? "A");
  const [suit] = useState(props.suit ?? "spades");
  return (
    <div
      className={`card ${props.className} ${props.flipped ? "flipped" : ""}`}
    >
      <div className="card-number-top">{number}</div>
      <div className="card-suit">{getSuitChar(suit)}</div>
      <div className="card-number-bottom">{number}</div>
    </div>
  );
}
