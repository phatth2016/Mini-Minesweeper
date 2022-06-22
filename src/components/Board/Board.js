import React, { useState, useEffect, useRef } from "react";
import revealed from "../../helpers/Reviealed";
import Cell from "../Cell";
import { BoardStyled, Point } from "./styled";
import Popup from "../Popup";
import { Button } from "../Button";
import useTimer from "../../hooks/useTimer";
import { Timer } from "../Timer";
import { useDispatch, useSelector } from "react-redux";
import { createBoardAction, setBoard } from "../../redux/slide/board.slice";

function Board({ level, setScreen }) {
  const { board, mines, noneMine } = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);
  const { handleStartTime, handlePauseResume, handleResetTime } = useTimer(ref);

  useEffect(() => {
    dispatch(createBoardAction(level));
  }, []);

  const updateFlag = (e, x, y) => {
    e.preventDefault();
    let newBoard = JSON.parse(JSON.stringify(board));
    newBoard[x][y].flagged = true;
    dispatch(setBoard({ board: newBoard }));
  };

  //revealing all cells and the minelocation with all mines when clicked on mines
  const revealcell = (x, y) => {
    handleStartTime();
    let newBoard = JSON.parse(JSON.stringify(board));
    if (newBoard[x][y].value === "X") {
      setShowPopup(true);
      handlePauseResume();
      for (let i = 0; i < mines.length; i++) {
        newBoard[mines[i].x][mines[i].y].revealed = true;
      }
      dispatch(setBoard({ board: newBoard }));
    } else {
      let revealedboard = revealed(newBoard, x, y, noneMine);
      dispatch(
        setBoard({
          board: revealedboard.arr,
          noneMine: revealedboard.newNonMines,
        })
      );
      if (revealedboard.newNonMines === 0) {
        handlePauseResume();
        setShowPopup(true);
      }
    }
  };

  const handlePlayAgain = () => {
    setShowPopup(false);
    handleResetTime();
    dispatch(createBoardAction(level));
  };

  const renderPopup = () => {
    if (showPopup) {
      const timer = ref.current.value;
      return (
        <Popup closePopup={handlePlayAgain}>
          <h2>{noneMine === 0 ? "You Win!" : "You Lose!"}</h2>
          <div>{timer}</div>
          <Button className="btn" onClick={() => setShowPopup(false)}>
            Show result
          </Button>
          <Button className="btn" onClick={handlePlayAgain}>
            Play again!
          </Button>
          <Button className="btn" onClick={() => setScreen("HOME")}>
            Home
          </Button>
        </Popup>
      );
    }
    return null;
  };

  return (
    <BoardStyled>
      <Point>Mini Minesweeper</Point>
      <Timer ref={ref} defaultValue="00 : 00 : 00" />
      <div className="btn-back" onClick={() => setScreen("HOME")}>
        Back
      </div>
      <div className="grid">
        {board.map((singlerow, index1) => {
          return (
            <div className="row" key={index1}>
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
