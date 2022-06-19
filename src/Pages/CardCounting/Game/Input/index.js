import "./Input.scss";

export function CardCountingGameInput(props) {
  return (
    <div className={`game-input ${props.isHidden ? "hidden" : ""}`}>
      <p>What is the count?</p>
      <input
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        type="number"
      />
      <button
        onClick={() => {
          props.onSubmit(props.value);
        }}
      >
        Submit
      </button>
    </div>
  );
}
