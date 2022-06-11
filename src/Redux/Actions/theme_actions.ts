import { ThemeActionType } from "../Action-Types/theme_action_types";

// Defines the list of actions that can be taken to modify Theme store

interface ToggleThemeAction {
  type: ThemeActionType.TOGGLE;
}
interface DarkThemeAction {
  type: ThemeActionType.DARK;
}
interface LightThemeAction {
  type: ThemeActionType.LIGHT;
}

interface ToggleContrastAction {
  type: ThemeActionType.TOGGLE_CONTRAST;
}
interface HighContrastAction {
  type: ThemeActionType.HIGH_CONTRAST;
}
interface LowContrastAction {
  type: ThemeActionType.LOW_CONTRAST;
}

export type Action =
  | ToggleThemeAction
  | DarkThemeAction
  | LightThemeAction
  | ToggleContrastAction
  | HighContrastAction
  | LowContrastAction;
