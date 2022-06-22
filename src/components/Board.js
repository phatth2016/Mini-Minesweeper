import React, { useState, useEffect } from "react";
import revealed from "../helpers/Reviealed";
import createBoard from "../helpers/CreateBoard";
import Cell from "./Cell";
import styled from "styled-components";

function Board() {
  const [grid, setGrid] = useState([]);
  const [nonMinecount, setNonMinecount] = useState(0);
  const [mineLocation, setmineLocation] = useState([]);

  useEffect(() => {
    const initBoard = () => {
      createBoard(9, 9).then((res) => {
        setNonMinecount(9 * 9 - res.bombs.length);
        setmineLocation(res.bombs);
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
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert("you clicked mine");
      //baät heât caùc traùi mìn leân thaønh true
      for (let i = 0; i < mineLocation.length; i++) {
        newGrid[mineLocation[i].x][mineLocation[i].y].revealed = true;
      }
      setGrid(newGrid);
    } else {
      let revealedboard = revealed(newGrid, x, y, nonMinecount);
      setGrid(revealedboard.arr);
      setNonMinecount(revealedboard.newNonMines);
    }
  };

  return (
    <BoardStyled>
      <Point>Non-Mines : {nonMinecount}</Point>
      <div>
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
    </BoardStyled>
  );
}
export default Board;

const Point = styled.div`
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
`;

const BoardStyled = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #000;
  padding: 10px;
  width: max-content;
`;
