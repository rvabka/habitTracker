import { State, Action } from "./types";

export const initialState: State = {
  habits: [],
};

export default function habitReducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_PRESENT_COUNT":
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.payload.id
            ? { ...habit, presentCount: action.payload.presentCount }
            : habit,
        ),
      };
    case "SET_DATA":
      return { ...state, habits: action.payload, loading: false };
    case "ADD_DATA":
      return { ...state, habits: [...state.habits, action.payload] };
    case "DELETE_HABIT":
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== action.payload),
      };
    default:
      return state;
  }
}
