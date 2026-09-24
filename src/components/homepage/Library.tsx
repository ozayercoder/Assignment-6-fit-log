import { getAllWorkouts } from "@/lib/library";
import { IWorkout } from "@/types/workouttype";
import React from "react";
import WorkoutCard from "../shared/WorkoutCard";

const Library = async () => {
  const workouts = await getAllWorkouts();
  return (
    <section id="library" className="container mx-auto py-10">
      <div>
        <div className="pb-4">
          <h2 className="font-bold text-3xl">THE LIBRARY</h2>
          <p className="text-[#9CA3AF] text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {workouts.map((workout: IWorkout, ind: number) => {
            return (
              <WorkoutCard key={ind} workout={workout}></WorkoutCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Library;
