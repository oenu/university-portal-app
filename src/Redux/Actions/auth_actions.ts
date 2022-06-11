import { AuthActionType } from "../Action-Types/auth_action_types";

// Defines the list of actions that can be taken to modify Auth store

interface loginAction {
  type: AuthActionType.LOGIN;
  payload: {
    username: string;
    password: string;
  };
}
interface logoutAction {
  type: AuthActionType.LOGOUT;
}
interface usernameAction {
  type: AuthActionType.USERNAME;
}
interface refreshTokenAction {
  type: AuthActionType.TOKEN;
}
interface registerAction {
  type: AuthActionType.REGISTER;
  payload: {
    username: string;
    password: string;
  };
}

export type Action =
  | loginAction
  | logoutAction
  | usernameAction
  | refreshTokenAction
  | registerAction;
