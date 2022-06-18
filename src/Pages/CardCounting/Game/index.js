import { useState } from "react";
import { Card } from "../../../Components";
import "./Game.scss";

export function CardCountingGame() {
  const [value, setValue] = useState(0);
  return (
    <div className="game">
      <div className="game-heading">
        <h1 className="card-counting-heading">Card Counting</h1>
        <div className="score-container">
          <p>Current Score:</p>
          <p>0 / 0</p>
          <p>(100%)</p>
        </div>
      </div>
      <div className="game-container">
        <div className="game-board">
          <Card className="deck" flipped />
          <Card className="dealer card-1" />
          <Card className="dealer card-2" />
          <Card className="player-1 card-1" />
          <Card className="player-1 card-2" />
          <Card className="player-2 card-1" />
          <Card className="player-2 card-2" />
          <Card className="player-3 card-1" />
          <Card className="player-3 card-2" />
          <Card className="player-4 card-1" />
          <Card className="player-4 card-2" />
          <Card className="player-5 card-1" />
          <Card className="player-5 card-2" />
          <Card className="player-6 card-1" />
          <Card className="player-6 card-2" />
          <Card className="player-7 card-1" />
          <Card className="player-7 card-2" />
        </div>
      </div>
      <div className="game-input">
        <p>What is the count?</p>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="number"
        />
        <button>Submit</button>
      </div>
    </div>
  );
}
