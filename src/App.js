import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/card-counting-settings"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
