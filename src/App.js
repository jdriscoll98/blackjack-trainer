import "./App.css";
import { CurvedText, ModeList } from "./Components";
function App() {
  const modes = [
    {
      name: "Basic Strategy",
    },
    {
      name: "Card Counting",
    },
  ];
  return (
    <div className="App">
      <CurvedText text="Blackjack Trainer" />
      <h2>Choose your mode</h2>
      <ModeList modes={modes} />
    </div>
  );
}

export default App;
