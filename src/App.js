import React, { useState } from "react";
import Board from "./components/Board/Board";
import "./App.css";
import Iphone from "./components/IphoneFrame/Iphone";
import { LEVEL } from "./constant";
import { Button } from "./components/Button";
import { Screen } from "./components/Screen";

function App() {
  const [screen, setScreen] = useState("HOME");
  const [level, setLevel] = useState(LEVEL["BEGINER"]);
  const handleSelectLevel = (level) => {
    setLevel(LEVEL[level]);
    setScreen(2);
  };

  const renderScreen = () => {
    if (screen === "HOME")
      return (
        <Screen>
          <div className="title">
            Welcome to <br />
            Mini Minesweeper
          </div>
          <Button className="btn" onClick={() => handleSelectLevel("BEGINER")}>
            Beginner
          </Button>
          <Button onClick={() => handleSelectLevel("ADVANTAGE")}>
            Advantage
          </Button>
        </Screen>
      );
    return (
      <Screen>
        <Board level={level} setScreen={setScreen} />
      </Screen>
    );
  };

  return <Iphone>{renderScreen()}</Iphone>;
}

export default App;
