// types.ts
export interface DataEntry {
  day: string;
  done: number;
  presentCount: number;
}

export interface Habit {
  id: string;
  count: number;
  name: string;
  date: string;
  color: string;
  goal: string;
  data: DataEntry[];
}

export interface State {
  habits: Habit[];
  loading: boolean;
}

export type Action =
  | {
      type: "UPDATE_PRESENT_COUNT";
      payload: { id: string; presentCount: number; targetDate: string };
    }
  | { type: "SET_DATA"; payload: Habit[] }
  | { type: "ADD_DATA"; payload: Habit }
  | { type: "DELETE_HABIT"; payload: string }
  | {
      type: "UPDATE_DONE_STATUS";
      payload: { id: string; targetDate: string };
    }
  | {
      type: "SET_LOADING";
      payload: boolean;
    }
  | { type: "UPDATE_HABIT_DATA"; payload: { id: string; data: DataEntry[] } };
