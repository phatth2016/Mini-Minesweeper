import React, { useState, useEffect, useRef } from "react";
import revealed from "../../helpers/Reviealed";
import createBoard from "../../helpers/CreateBoard";
import Cell from "../Cell";
import { BoardStyled, Point } from "./styled";
import Popup from "../Popup";
import { Button } from "../Button";
import useTimer from "../../hooks/useTimer";
import { Timer } from "../Timer";

function Board({ level, setScreen }) {
  const [grid, setGrid] = useState([]);
  const [nonMinecount, setNonMinecount] = useState(0);
  const [mineLocation, setmineLocation] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { size } = level;

  const ref = useRef(null);

  const { handleStart, handlePauseResume, handleReset } = useTimer(ref);
  useEffect(() => {
    const initBoard = () => {
      createBoard(level).then((res) => {
        setNonMinecount(size * size - res.minesLocation.length);
        setmineLocation(res.minesLocation);
        setGrid(res.board);
      });
    };
    initBoard();
  }, []);

  const updateFlag = (e, x, y) => {
    e.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };
  //revealing all cells and the minelocation with all mines when clicked on mines
  const revealcell = (x, y) => {
    handleStart();
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      setShowPopup(true);
      handlePauseResume();
      //baät heât caùc traùi mìn leân thaønh true
      for (let i = 0; i < mineLocation.length; i++) {
        newGrid[mineLocation[i].x][mineLocation[i].y].revealed = true;
      }
      setGrid(newGrid);
    } else {
      let revealedboard = revealed(newGrid, x, y, nonMinecount);
      setGrid(revealedboard.arr);
      setNonMinecount(revealedboard.newNonMines);
      if (revealedboard.newNonMines === 0) {
        handlePauseResume();
        setShowPopup(true);
      }
    }
  };

  const handlePlayAgain = () => {
    // setScreen("HOME");
    setShowPopup(false);
    handleReset();
    createBoard(level).then((res) => {
      setNonMinecount(size * size - res.minesLocation.length);
      setmineLocation(res.minesLocation);
      setGrid(res.board);
    });
  };

  console.log("render");

  const renderPopup = () => {
    if (showPopup) {
      let content = "";
      if (nonMinecount === 0) content = "You Win!";
      content = "You Lose!";
      const timer = ref.current.value;
      return (
        <Popup closePopup={handlePlayAgain}>
          <h2>{content}</h2>
          <div>{timer}</div>
          <Button className="btn" onClick={() => setShowPopup(false)}>
            Show result
          </Button>
          <Button className="btn" onClick={handlePlayAgain}>
            Play again!
          </Button>
        </Popup>
      );
    }
    return null;
  };

  return (
    <BoardStyled>
      <Point>Non-Mines: {nonMinecount}</Point>
      <Timer ref={ref} defaultValue="00 : 00 : 00" />
      <div className="btn-back" onClick={() => setScreen("HOME")}>
        Back
      </div>
      <div className="grid">
        {grid.map((singlerow, index1) => {
          return (
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
              key={index1}
            >
              {singlerow.map((singlecol, index2) => {
                return (
                  <Cell
                    size={level.size}
                    details={singlecol}
                    key={index2}
                    updateFlag={updateFlag}
                    revealcell={revealcell}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {renderPopup()}
    </BoardStyled>
  );
}
export default Board;
