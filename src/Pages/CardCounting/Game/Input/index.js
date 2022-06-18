import "./Input.scss";

export function CardCountingGameInput(props) {
  return (
    <div className="game-input">
      <p>What is the count?</p>
      <input
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        type="number"
      />
      <button>Submit</button>
    </div>
  );
}
