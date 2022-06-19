import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  CardCountingHome,
  CardCountingSettings,
  CardCountingGame,
} from "./Pages";
function App() {
  const [settings, setSettings] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/card-counting/"} element={<CardCountingHome />} />
          <Route
            path={"/card-counting/settings"}
            element={
              <CardCountingSettings
                settings={settings}
                setSettings={setSettings}
              />
            }
          />
          <Route
            path={"/card-counting/game"}
            element={<CardCountingGame settings={settings} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
