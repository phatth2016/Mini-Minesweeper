import axios from "axios";

// Random function used for generating random value of x & y

function random(min = 0, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomBombs = (col, row, board, bombs) => {
  const mineLocation = [];
  let bombsCount = 0;
  // while (bombsCount < bombs.length) {
  //   let x = bombs(0, row - 1);
  //   let y = bombs(0, col - 1);

  //   if (board[x][y].value === 0) {
  //     board[x][y].value = "X";
  //     mineLocation.push([x, y]);
  //     bombsCount++;
  //   }
  // }

  return mineLocation;
};

const addNumbers = (col, row, board) => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j].value === "X") {
        continue;
      }

      // Top
      if (i > 0 && board[i - 1][j].value === "X") {
        board[i][j].value++;
      }

      // Top Right
      if (i > 0 && j < col - 1 && board[i - 1][j + 1].value === "X") {
        board[i][j].value++;
      }

      // Right
      if (j < col - 1 && board[i][j + 1].value === "X") {
        board[i][j].value++;
      }

      // Botoom Right
      if (i < row - 1 && j < col - 1 && board[i + 1][j + 1].value === "X") {
        board[i][j].value++;
      }

      // Bottom
      if (i < row - 1 && board[i + 1][j].value === "X") {
        board[i][j].value++;
      }

      // Bottom Left
      if (i < row - 1 && j > 0 && board[i + 1][j - 1].value === "X") {
        board[i][j].value++;
      }

      // LEft
      if (j > 0 && board[i][j - 1].value === "X") {
        board[i][j].value++;
      }

      // Top Left
      if (i > 0 && j > 0 && board[i - 1][j - 1].value === "X") {
        board[i][j].value++;
      }
    }
  }
  return board;
};

const initBoard = (col, row) => {
  const board = [];
  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false,
      });
    }
    board.push(subCol);
  }
  return board;
};

export default async function createBoard(row, col) {
  let bombs = [];
  let board = initBoard(col, row);
  const res = await axios.get(
    "https://tiki-minesweeper.herokuapp.com/getMines?size=9&mines=10"
  );
  bombs = res.data.data;
  console.log("bombs: ", bombs);
  for (let i = 0; i < bombs.length; i++) {
    board[bombs[i].x][bombs[i].y].value = "X";
  }
  console.log("board: ", board);
  board = addNumbers(col, row, board);
  return { board, bombs };
}
