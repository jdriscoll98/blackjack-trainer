import { Link } from "react-router-dom";
import "./Mode.css";

export function Mode(props) {
  return (
    <Link className="mode" to={props.path}>
      {props.name}
    </Link>
  );
}
