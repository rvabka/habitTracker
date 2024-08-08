import {
  addHabitToFirestore,
  deleteHabitFromFirestore,
  getHabitsFromFirestore,
  updateHabitInFirestore,
} from "../../firebase/firebase";
import { Habit, Action } from "./types";

export const addHabit = async (
  habit: Omit<Habit, "id">,
  dispatch: React.Dispatch<Action>,
) => {
  const habitWithId = await addHabitToFirestore(habit as Habit);
  dispatch({ type: "ADD_DATA", payload: habitWithId });
};

export const deleteHabit = async (
  id: string,
  dispatch: React.Dispatch<Action>,
) => {
  await deleteHabitFromFirestore(id);
  dispatch({ type: "DELETE_HABIT", payload: id });
};

export const fetchHabits = async (dispatch: React.Dispatch<Action>) => {
  try {
    const habits: Habit[] = await getHabitsFromFirestore();
    dispatch({ type: "SET_DATA", payload: habits });
  } catch (e) {
    console.error("Error fetching habits: ", e);
  }
};

export const updateHabit = async (
  habit: Habit,
  dispatch: React.Dispatch<Action>,
) => {
  try {
    await updateHabitInFirestore(habit);
    dispatch({ type: "UPDATE_PRESENT_COUNT", payload: habit });
  } catch (e) {
    console.error("Error updating habit: ", e);
  }
};
