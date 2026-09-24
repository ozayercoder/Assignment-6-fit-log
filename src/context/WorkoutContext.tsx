"use client";

import { IWorkout } from "@/types/workouttype";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IWorkoutContext {
  todaysPlans: IWorkout[];
  setTodaysPlans: Dispatch<SetStateAction<IWorkout[]>>;
  savedPlans: IWorkout[];
  setSavedPlans: Dispatch<SetStateAction<IWorkout[]>>;
}

interface WorkoutProviderProps {
  children: ReactNode;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  todaysPlans: [],
  setTodaysPlans: () => {},
  savedPlans: [],
  setSavedPlans: () => {},
});

const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
  const [todaysPlans, setTodaysPlans] = useState<IWorkout[]>([]);
  const [savedPlans, setSavedPlans] = useState<IWorkout[]>([]);
  const sharedData: IWorkoutContext = {
    todaysPlans,
    setTodaysPlans,
    savedPlans,
    setSavedPlans,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
