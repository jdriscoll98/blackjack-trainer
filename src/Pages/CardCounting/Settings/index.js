import { Link } from "react-router-dom";
import { Slider, Switch } from "../../../Components/";
import "./Settings.css";
export function CardCountingSettings(props) {
  const settings = [
    {
      name: "Number of decks",
      min: 1,
      max: 8,
      step: 1,
      value: 1,
      inputId: "deckCount",
      component: Slider,
    },
    {
      name: "Number of Table Players",
      min: 1,
      max: 7,
      step: 1,
      value: 1,
      inputId: "tablePlayerCount",
      component: Slider,
    },
    {
      name: "Running Count",
      value: false,
      component: Switch,
      disabled: true,
    },
    {
      name: "Total Count",
      value: false,
      component: Switch,
      disabled: true,
    },
  ];
  return (
    <div>
      <h1>Card Counting Settings</h1>
      <div className="settings-container">
        {settings.map((setting) => (
          <setting.component
            key={setting.name}
            {...setting}
            onChange={(e) => {
              props.setSettings(() => {
                return {
                  ...props.settings,
                  [setting.inputId]: parseInt(e.value),
                };
              });
            }}
          />
        ))}
      </div>
      <Link to="/card-counting/game">
        <button className="play-btn">Play Game</button>
      </Link>
    </div>
  );
}
