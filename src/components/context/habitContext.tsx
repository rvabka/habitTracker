// habitContext.tsx
import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import { State, Action } from "./types";
import habitReducer from "./reducer";
import { initialState } from "./reducer";
import { getHabitsFromFirestore } from '../../firebase/firebase';

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
