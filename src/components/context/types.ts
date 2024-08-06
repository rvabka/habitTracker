// types.ts
export interface Habit {
  id: string;
  name: string;
  date: string;
  goal: string;
  reminder: string;
}

export interface State {
  habits: Habit[];
}

export interface Action {
  type: "ADD_HABIT";
  payload: Habit;
}