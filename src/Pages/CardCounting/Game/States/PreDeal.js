import "./States.scss";

export function PreDealState(props) {
  return (
    <button
      className="deal-btn"
      onClick={() => {
        props.setState("deal");
      }}
    >
      Deal
    </button>
  );
}
