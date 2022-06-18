import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  CardCountingHome,
  CardCountingSettings,
  CardCountingGame,
} from "./Pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/card-counting/"} element={<CardCountingHome />} />
          <Route
            path={"/card-counting/settings"}
            element={<CardCountingSettings />}
          />
          <Route path={"/card-counting/game"} element={<CardCountingGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
