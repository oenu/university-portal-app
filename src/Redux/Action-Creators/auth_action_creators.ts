import { AuthActionType } from "../Action-Types/auth_action_types";
import { Dispatch } from "@reduxjs/toolkit";

// Takes the action types specified and exports functions that can be called to interact with redux store

export const loginAuth = (username: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionType.LOGIN,
      payload: {
        username,
        password,
      },
    });
  };
};
export const logoutAuth = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionType.LOGOUT,
    });
  };
};
export const getUsername = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionType.USERNAME,
    });
  };
};
export const getToken = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionType.TOKEN,
    });
  };
};
export const registerAuth = (username: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionType.REGISTER,
      payload: {
        username,
        password,
      },
    });
  };
};
