import { createSlice } from "@reduxjs/toolkit";
import createBoard from "../../helpers/CreateBoard";

const initialState = {
  board: [],
  noneMine: 0,
  mines: [],
  loading: false,
};

const boardsSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetState: (state, action) => {
      return initialState;
    },
    setLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setBoard, resetState, setLoading } = boardsSlice.actions;

export default boardsSlice.reducer;

export const createBoardAction = (level) => (dispatch) => {
  const { size } = level;
  dispatch(setLoading(true));
  createBoard(level).then((res) => {
    const data = {
      board: res.board,
      noneMine: size * size - res.minesLocation.length,
      mines: res.minesLocation,
    };
    dispatch(setLoading(false));
    dispatch(setBoard(data));
  });
};
