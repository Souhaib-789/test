import { combineReducers } from "redux";
import AppReducer from "./AppReducer";

const xReducer = combineReducers({
  AppReducer,
});

const Reducer = (state, action) => {
  return xReducer(state, action);
};

export default Reducer;
