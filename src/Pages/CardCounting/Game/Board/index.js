import { PreDealState, DealState } from "../States/";

export function CardCountingGameBoard(props) {
  function renderGameState() {
    switch (props.state) {
      case "pre-deal":
        return <PreDealState setState={props.setState} />;
      case "deal":
        const tablePlayerCount = props.settings.tablePlayerCount ?? 1;
        return (
          <DealState
            dealerCards={props.dealerCards}
            playerCards={props.playerCards}
            tablePlayerCount={tablePlayerCount}
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
