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
      <div className="flex justify-around rounded-2xl bg-[#13161D] px-6 py-8">
        <div className="flex flex-col items-center">
          <p className="text-[#8A92A0] text-xs">Exercises</p>
          <h2 className="py-0.5 text-4xl font-bold text-[#CCFF00]">
            {currentPlans.length}
          </h2>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="flex flex-col items-center">
          <p className="text-[#8A92A0] text-xs">Minutes</p>
          <h2 className="py-0.5 text-4xl font-bold">{totalMinutes}</h2>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="flex flex-col items-center">
          <p className="text-[#8A92A0] text-xs">Calories</p>
          <h2 className="py-0.5 text-4xl font-bold">{totalCalories}</h2>
        </div>
      </div>
    </div>
  );
};

export default Stats;
