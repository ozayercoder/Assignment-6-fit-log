"use client";

import { IWorkout } from "@/types/workouttype";

interface IStatsProps {
  currentPlans: IWorkout[];
}

const Stats = ({ currentPlans }: IStatsProps) => {
  const totalMinutes = currentPlans.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentPlans.reduce(
    (accumulator, workout) => accumulator + workout.caloriesBurned,
    0,
  );

  return (
    <div>
      <div className="flex justify-around rounded-2xl bg-[#13161D] px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col items-center">
          <p className="text-xs text-[#8A92A0]">Exercises</p>
          <h2 className="py-0.5 text-3xl font-bold text-[#CCFF00] md:text-4xl">
            {currentPlans.length}
          </h2>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="flex flex-col items-center">
          <p className="text-xs text-[#8A92A0]">Minutes</p>
          <h2 className="py-0.5 text-3xl font-bold md:text-4xl">
            {totalMinutes}
          </h2>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="flex flex-col items-center">
          <p className="text-xs text-[#8A92A0]">Calories</p>
          <h2 className="py-0.5 text-3xl font-bold md:text-4xl">
            {totalCalories}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Stats;