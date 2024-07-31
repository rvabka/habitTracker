import { State, Action } from "./types";

export const initialState: State = {
  habits: [],
};

export default function habitReducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_HABIT":
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    default:
      return state;
  }
}
