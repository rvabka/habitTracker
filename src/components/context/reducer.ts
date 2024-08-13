import { State, Action } from "./types";

export const initialState: State = {
  habits: [],
};

export default function habitReducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_PRESENT_COUNT": {
      const { id, presentCount, targetDate } = action.payload;

      return {
        ...state,
        habits: state.habits.map((habit) => {
          if (habit.id === id) {
            const updatedData = habit.data.map((entry) =>
              entry.day === targetDate
                ? { ...entry, presentCount } 
                : entry,
            );
            return { ...habit, data: updatedData };
          }
          return habit;
        }),
      };
    }
    case "UPDATE_DONE_STATUS": {
      const { id, targetDate } = action.payload;

      return {
        ...state,
        habits: state.habits.map((habit) => {
          if (habit.id === id) {
            const updatedData = habit.data.map((entry) =>
              entry.day === targetDate && entry.done === 0
                ? { ...entry, done: 1 }
                : entry,
            );
            return { ...habit, data: updatedData };
          }
          return habit;
        }),
      };
    }
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
