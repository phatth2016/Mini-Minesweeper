import { combineReducers } from "redux";
import boardsReducer from "./board.slice";

export default combineReducers({
  board: boardsReducer,
});
