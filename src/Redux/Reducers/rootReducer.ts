import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
// import counterReducer from "./Counter/counter.reducer";

const reducers = combineReducers({
  theme: themeReducer,
  // counter: counterReducer,
});

export default reducers;
