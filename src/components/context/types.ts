// types.ts
export interface Habit {
  id: string;
  name: string;
  date: string;
  goal: number;
  time: string;
  repeat: string;
}

export interface State {
  habits: Habit[];
}

export interface Action {
  type: "ADD_HABIT";
  payload: Habit;
}