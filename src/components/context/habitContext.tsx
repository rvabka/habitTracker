// habitContext.tsx
import React, { createContext, useReducer, ReactNode } from 'react';
import { State, Action } from './types'; 
import habitReducer from './reducer';   
import { initialState } from './reducer'; 

interface HabitContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const HabitContext = createContext<HabitContextProps | undefined>(undefined);

interface HabitProviderProps {
  children: ReactNode;
}

export const HabitProvider: React.FC<HabitProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(habitReducer, initialState);

  return (
    <HabitContext.Provider value={{ state, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
};
