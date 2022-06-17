import { Mode } from "../Mode";
import "./ModeList.css";

export function ModeList(props) {
  return (
    <div className="modes">
      {props.modes.map((mode) => {
        return <Mode key={mode.name} name={mode.name}></Mode>;
      })}
    </div>
  );
}
