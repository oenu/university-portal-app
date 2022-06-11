import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Redux store template
interface themeState {
  darkMode: Boolean;
  highContrast: Boolean;
}

// Initial state for redux store
const initialState: themeState = {
  darkMode: false,
  highContrast: false,
};

// Slicer for auth features
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return { ...state, darkMode: !state.darkMode };
    },
    setDarkTheme: (state) => {
      return state;
    },
    setLightTheme: (state) => {
      return state;
    },
    toggleThemeContrast: (state) => {
      return state;
    },
    setThemeHighContrast: (state) => {
      return state;
    },
    setThemeLowContrast: (state) => {
      return state;
    },
  },
});

export const {
  toggleTheme,
  setDarkTheme,
  setLightTheme,
  toggleThemeContrast,
  setThemeHighContrast,
  setThemeLowContrast,
} = themeSlice.actions;
export default themeSlice.reducer;
