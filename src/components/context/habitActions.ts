import {
  addHabitToFirestore,
  deleteHabitFromFirestore,
  getHabitsFromFirestore,
  updateCountInFirestore,
  updateDoneStatus,
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

// Funkcja aktualizująca status done i dispatchująca akcję
export const updateDoneStatusAndDispatch = async (
  habitId: string,
  targetDate: string,
  dispatch: React.Dispatch<Action>,
) => {
  try {
    await updateDoneStatus(habitId, targetDate);
    dispatch({
      type: "UPDATE_DONE_STATUS",
      payload: { id: habitId, targetDate },
    });
  } catch (error) {
    console.error("Error updating done status: ", error);
    throw error;
  }
};

// Funkcja aktualizująca licznik i dispatchująca akcję
export const updateCountAndDispatch = async (
  habit: Habit,
  dispatch: React.Dispatch<Action>,
) => {
  try {
    await updateCountInFirestore(habit);
    dispatch({
      type: "UPDATE_PRESENT_COUNT",
      payload: {
        id: habit.id,
        presentCount:
          habit.data.find(
            (entry) => entry.day === new Date().toISOString().split("T")[0],
          )?.presentCount || 0,
        targetDate: new Date().toISOString().split("T")[0],
      },
    });
  } catch (error) {
    console.error("Error updating count: ", error);
    throw error;
  }
};

export { updateDoneStatus };
