// Theme reducer defines actions that can be called to modify the state of the Theme store

// Import actions for this reducer
import { ThemeActionType } from "../Action-Types/theme_action_types";
import { Action } from "../Actions/theme_actions";

// State stored in object for boolean logic
type State = {
  darkMode: Boolean;
  highContrast: Boolean;
};
const initialState: State = { darkMode: false, highContrast: false };

const themeReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ThemeActionType.TOGGLE:
      return { ...state, darkMode: !state.darkMode };
    case ThemeActionType.DARK:
      return { ...state, darkMode: true };
    case ThemeActionType.LIGHT:
      return { ...state, darkMode: false };

    case ThemeActionType.TOGGLE_CONTRAST:
      return { ...state, highContrast: !state.highContrast };
    case ThemeActionType.HIGH_CONTRAST:
      return { ...state, highContrast: true };
    case ThemeActionType.LOW_CONTRAST:
      return { ...state, highContrast: false };

    default:
      return state;
  }
};

export default themeReducer;
