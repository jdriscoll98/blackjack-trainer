import { useState } from "react";
import "./Slider.css";

export function Slider(props) {
  const [value, setValue] = useState(props.value ?? 0);
  return (
    <>
      <p>
        {props.name}: {value}
      </p>
      <div className="slidecontainer">
        <p>{props.min}</p>
        <input
          type="range"
          min={props.min ?? 0}
          max={props.max ?? 100}
          step={props.step ?? 1}
          value={value}
          className="slider"
          onChange={(e) => setValue(e.target.value)}
          id={props.inputId ?? "myRange"}
        />
        <p>{props.max}</p>
      </div>
    </>
  );
}
