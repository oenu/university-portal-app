import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
// import counterReducer from "./Counter/counter.reducer";

const reducers = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  // counter: counterReducer,
});

export default reducers;
