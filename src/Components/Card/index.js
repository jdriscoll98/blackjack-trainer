import { useState } from "react";
import "./Card.css";

export function Card(props) {
  const [number] = useState(props.number ?? "A");
  const [suit] = useState(props.suit ?? "♠");
  return (
    <div className="card">
      <div className="card-number-top">{number}</div>
      <div className="card-suit">{suit}</div>
      <div className="card-number-bottom">{number}</div>
    </div>
  );
}
