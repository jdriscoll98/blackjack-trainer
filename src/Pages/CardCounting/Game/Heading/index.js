import "./Heading.scss";

export function CardCountingGameHeading(props) {
  function getPercent() {
    if (props.total === 0) {
      return 0;
    }
    return Math.trunc((props.correct / props.total) * 100);
  }
  return (
    <div className="game-heading">
      <h1 className="card-counting-heading">{props.title}</h1>
      <div className="score-container">
        <p>Current Score:</p>
        <p>
          {props.correct} / {props.total}
        </p>
        <p>{getPercent()}%</p>
      </div>
    </div>
  );
}
