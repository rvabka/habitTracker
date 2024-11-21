// habitContext.tsx
import React, {
  createContext,
  useReducer,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { State, Action } from "./types";
import habitReducer from "./reducer";
import { initialState } from "./reducer";
import { getHabitsFromFirestore } from "../../firebase/firebase";

interface HabitContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const HabitContext = createContext<HabitContextProps | undefined>(
  undefined,
);

interface HabitProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useHabit = (id: string | undefined) => {
  const context = useContext(HabitContext);
  if (!context) throw new Error("useHabit must be used within HabitProvider");

  return context.state.habits.find((habit) => habit.id === id);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHabitContext = () => {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error("useHabitContext must be used within a HabitProvider");
  }
  return context;
};

export const HabitProvider: React.FC<HabitProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(habitReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const habits = await getHabitsFromFirestore();
      dispatch({ type: "SET_DATA", payload: habits });
    };
    fetchData();
  }, []);

  return (
    <HabitContext.Provider value={{ state, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
};
