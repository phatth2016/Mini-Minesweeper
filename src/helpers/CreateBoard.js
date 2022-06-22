import axios from "axios";

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

export default async function createBoard(level) {
  let minesLocation = [];

  const { mines, size } = level;
  const row = size,
    col = size;

  let board = initBoard(col, row);
  const res = await axios.get(
    `https://tiki-minesweeper.herokuapp.com/getMines?size=${size}&mines=${mines}`
  );
  minesLocation = res.data.data;
  for (let i = 0; i < minesLocation.length; i++) {
    board[minesLocation[i].x][minesLocation[i].y].value = "X";
  }
  board = addNumbers(col, row, board);
  return { board, minesLocation };
}
