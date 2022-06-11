import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Action input types
interface loginParams {
  username: string;
  password: string;
}

// Redux store template
interface authState {
  user?: String;
  isLoggedIn: Boolean;
  token?: String;
  refreshToken?: String;
}

// Initial state for redux store
const initialState: authState = {
  isLoggedIn: false,
};

// Slicer for auth features
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginParams>) => {
      return state;
    },
    register: (state, action: PayloadAction<loginParams>) => {
      return state;
    },
    username: (state) => {
      return state;
    },
    token: (state) => {
      return state;
    },
    logout: (state) => {
      return state;
    },
  },
});

export const { login, register, username, token, logout } = authSlice.actions;
export default authSlice.reducer;
