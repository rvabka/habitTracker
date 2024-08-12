// types.ts
interface DataEntry {
  day: string;
  done: number;
}

export interface Habit {
  id: string;
  name: string;
  date: string;
  reminder: string;
  goal: string;
  count: number;
  presentCount: number;
  data: DataEntry[];
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
