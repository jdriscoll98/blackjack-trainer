import { Card } from "../../../Components";
import "./Game.css";

export function CardCountingGame() {
  return (
    <>
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
          <div className="game-board-row">
            <div className="game-board-cell">
              <div className="game-board-cell-content">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
