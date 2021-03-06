import "./Switch.scss";
import { useState } from "react";
export function Switch(props) {
  const [value, setValue] = useState(false);
  return (
    <div className="switch-container">
      {props.name}

      <label className="switch">
        <input
          type="checkbox"
          value={value}
          disabled={props.disabled}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange({
              name: props.name,
              id: props.inputId,
              value: e.target.value,
            });
          }}
        />
        <span
          className={`switch-slider round ${props.disabled ? "disabled" : ""}`}
        ></span>
      </label>
    </div>
  );
}
