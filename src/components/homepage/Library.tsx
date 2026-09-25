import { getAllWorkouts } from "@/lib/library";
import { IWorkout } from "@/types/workouttype";
import WorkoutCard from "../shared/WorkoutCard";

const Library = async () => {
  const workouts = await getAllWorkouts();

  return (
    <section
      id="library"
      className="container mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10"
    >
      <div>
        <div className="pb-4">
          <h2 className="text-2xl font-bold md:text-3xl">THE LIBRARY</h2>

          <p className="text-sm text-[#9CA3AF] md:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {workouts.map((workout: IWorkout, ind: number) => {
            return <WorkoutCard key={ind} workout={workout} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Library;
