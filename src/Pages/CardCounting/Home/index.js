import { Link } from "react-router-dom";
import "./Home.css";

export function CardCountingHome() {
  return (
    <>
      <div className="card-counting-home">
        <h1>Card Counting</h1>
        <p>
          This game will teach you how to count cards at the blackjack table.
        </p>
        <p>The rules are simple: </p>
        <ul>
          <li>Any card on the table under 7 is a +1</li>
          <li>Any card on the table from 7-9 is a 0</li>
          <li>Any card on the table above a 9 is a -1</li>
        </ul>
        <p>
          The idea is that a higher count favors the player, giving them better
          odds at winning.
        </p>
        <p>
          This game will deal out cards to you and you will have to submit your
          guess at the count. Wait for the cards to be dealt, add them up and
          submit your guess.
        </p>
        <strong>Are you ready?</strong>
        <Link to="/card-counting/settings">
          <button className="begin-btn">Begin Game</button>
        </Link>
      </div>
    </>
  );
}
