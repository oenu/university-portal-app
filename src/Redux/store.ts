import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Reducers/rootReducer";

export const store = configureStore({
  reducer: reducers,
});

export default store;

export type State = ReturnType<typeof reducers>;
