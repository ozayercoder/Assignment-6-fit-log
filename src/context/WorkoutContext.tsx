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
  completedWorkouts: number[];
  setCompletedWorkouts: Dispatch<SetStateAction<number[]>>;
}

interface WorkoutProviderProps {
  children: ReactNode;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  todaysPlans: [],
  setTodaysPlans: () => {},
  savedPlans: [],
  setSavedPlans: () => {},
  completedWorkouts: [],
  setCompletedWorkouts: () => {},
});

const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
  const [todaysPlans, setTodaysPlans] = useState<IWorkout[]>([]);
  const [savedPlans, setSavedPlans] = useState<IWorkout[]>([]);
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

  const sharedData: IWorkoutContext = {
    todaysPlans,
    setTodaysPlans,
    savedPlans,
    setSavedPlans,
    completedWorkouts,
    setCompletedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
