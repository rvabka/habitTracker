// types.ts
export interface Habit {
  id: string;
  name: string;
  date: string;
  goal: string;
  reminder: string;
  count: number;
  presentCount: number;
}

export interface State {
  habits: Habit[];
}

export type Action =
  | {
      type: "UPDATE_PRESENT_COUNT";
      payload: { id: string; presentCount: number };
    }
  | { type: "SET_DATA"; payload: Habit[] }
  | { type: "ADD_DATA"; payload: Habit } 
  | { type: "DELETE_HABIT"; payload: string };
