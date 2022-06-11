import { ThemeActionType } from "../Action-Types/theme_action_types";
import { Dispatch } from "@reduxjs/toolkit";

export const toggleTheme = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ThemeActionType.TOGGLE,
    });
  };
};

export const setDarkTheme = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ThemeActionType.DARK,
    });
  };
};

export const setLightTheme = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ThemeActionType.LIGHT,
    });
  };
};
