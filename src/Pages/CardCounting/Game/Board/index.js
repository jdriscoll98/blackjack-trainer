import { PreDealState, DealState } from "../States/";

export function CardCountingGameBoard(props) {
  function renderGameState() {
    switch (props.state) {
      case "pre-deal":
        return <PreDealState setState={props.setState} />;
      case "deal":
        const deckCount = props.settings.deckCount ?? 1;
        const tablePlayerCount = props.settings.tablePlayerCount ?? 1;
        return (
          <DealState
            deckCount={deckCount}
            tablePlayerCount={tablePlayerCount}
            setCount={props.setCount}
          />
        );
      default:
        throw new Error("Unknown game state");
    }
  }
  return (
    <div className="game-container">
      <div className="game-board">{renderGameState()}</div>
    </div>
  );
}
