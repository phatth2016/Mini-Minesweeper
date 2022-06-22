import React from "react";
import Board from "./components/Board";
import "./App.css";
import Iphone from "./components/IphoneFrame.js/Iphone";

function App() {
  return (
    <div>
      <Iphone>
        <Board />
      </Iphone>
    </div>
  );
}

export default App;
