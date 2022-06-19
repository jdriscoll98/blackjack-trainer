import { useState } from "react";
import "./Game.scss";
import { CardCountingGameHeading } from "./Heading";
import { CardCountingGameInput } from "./Input";
import { CardCountingGameBoard } from "./Board";

export function CardCountingGame(props) {
  const [value, setValue] = useState(0);
  const [state, setState] = useState("pre-deal");
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className="game">
      <CardCountingGameHeading
        title="Card Counting"
        correct={score}
        total={total}
      />
      <CardCountingGameBoard
        state={state}
        setState={setState}
        settings={props.settings}
        setCount={setCount}
      />
      <CardCountingGameInput
        isHidden={state === "pre-deal"}
        value={value}
        setValue={setValue}
        onSubmit={(e) => {
          // check if value is correct
          if (parseInt(value) === parseInt(count)) {
            setScore(score + 1);
            setTotal(total + 1);
            alert("Correct!");
          } else {
            alert("Incorrect! The count was " + count);
            setTotal(total + 1);
          }
          setState("pre-deal");
        }}
      />
    </div>
  );
}
