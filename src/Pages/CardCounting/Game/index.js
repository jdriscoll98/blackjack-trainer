import { useState } from "react";
import "./Game.scss";
import { CardCountingGameHeading } from "./Heading";
import { CardCountingGameInput } from "./Input";
import { CardCountingGameBoard } from "./Board";

export function CardCountingGame(props) {
  const [value, setValue] = useState(0);
  const [state, setState] = useState("pre-deal");

  return (
    <div className="game">
      <CardCountingGameHeading title="Card Counting" correct={0} total={0} />
      <CardCountingGameBoard
        state={state}
        setState={setState}
        settings={props.settings}
      />
      <CardCountingGameInput value={value} setValue={setValue} />
    </div>
  );
}
