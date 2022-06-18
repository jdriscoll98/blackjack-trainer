import { Link } from "react-router-dom";
import { Slider } from "../../../Components/";
import "./Settings.css";
export function CardCountingSettings() {
  const settings = [
    {
      name: "Number of decks",
      min: 1,
      max: 8,
      step: 1,
      value: 1,
      inputId: "deckCount",
    },
    {
      name: "Number of Table Players",
      min: 1,
      max: 7,
      step: 1,
      value: 1,
      inputId: "tablePlayerCount",
    },
  ];
  return (
    <div>
      <h1>Card Counting Settings</h1>
      <div className="settings-container">
        {settings.map((setting) => (
          <Slider key={setting.name} {...setting} />
        ))}
      </div>
      <Link to="/card-counting/game">
        <button className="play-btn">Play Game</button>
      </Link>
    </div>
  );
}
