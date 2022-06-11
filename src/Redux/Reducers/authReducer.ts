// Reducer to handle authentication

import { AuthActionType } from "../Action-Types/auth_action_types";
import { Action } from "../Actions/auth_actions";

type State = {
  user?: String;
  isLoggedIn: Boolean;
  token?: String;
  refreshToken?: String;
};

const initialState: State = { isLoggedIn: false };

const authReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case AuthActionType.LOGIN: // Logs in user
      // action.payload.username;
      return state;
    case AuthActionType.LOGOUT: // Logs out user
      return state;
    case AuthActionType.USERNAME: // Returns username
      return state;
    case AuthActionType.TOKEN: // Returns JWT token, if expired refreshes token then returns
      return state;
    case AuthActionType.REGISTER: // Registers User
      return state;

    default:
      return state;
  }
};

export default authReducer;
