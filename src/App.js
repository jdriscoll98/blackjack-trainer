import "./App.css";
import { CurvedText } from "./Components/CurvedText";
function App() {
  return (
    <div className="App">
      <CurvedText text="Blackjack Trainer" />
      <h2>Choose your mode</h2>
      <div className="modes">
        <div className="mode">Basic Strategy</div>
        <div className="mode">Card Counting</div>
      </div>
    </div>
  );
}

export default App;
