import { createSlice } from "@reduxjs/toolkit";
import createBoard from "../../helpers/CreateBoard";

const initialState = {
  board: [],
  screen: 1,
  noneMine: 0,
  mines: [],
  isShowPopup: false,
  isLoading: false,
};

const boardsSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setBoard } = boardsSlice.actions;

export default boardsSlice.reducer;

export const createBoardAction = (level) => (dispatch) => {
  const { size } = level;
  createBoard(level).then((res) => {
    const data = {
      board: res.board,
      noneMine: size * size - res.minesLocation.length,
      mines: res.minesLocation,
    };
    dispatch(setBoard(data));
  });
};
