import { IWorkout } from "@/types/workouttype";
import Image from "next/image";
import TodaysPlanButton from "../button/todaysPlanButton";
import SaveButton from "../button/SaveButton";

interface WorkoutDetailsCardProps {
  workout: IWorkout;
}

const WorkoutDetailsCard = ({ workout }: WorkoutDetailsCardProps) => {
  return (
    <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
      <div className="grid gap-6 rounded-2xl p-4 shadow-sm md:gap-8 md:p-6 lg:grid-cols-2 lg:gap-10">
        <div className="overflow-hidden rounded-2xl hover-3d">
          {/* content */}
          <figure className="rounded-2xl">
            <Image
              src={workout.image}
              alt={workout.name}
              width={500}
              height={400}
              className="h-auto w-full object-cover"
            />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div>
          <h1 className="text-2xl font-bold md:text-3xl">{workout.name}</h1>

          <p className="mt-2 text-sm text-[#D1D5DB] md:text-base">
            {workout.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscleGroup: string) => (
              <div
                key={muscleGroup}
                className="badge rounded-2xl bg-[#ccff00] p-3 font-bold text-black"
              >
                {muscleGroup}
              </div>
            ))}
          </div>

          <div className="my-3 overflow-hidden rounded-xl bg-[#151922] py-2">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs text-gray-400">EQUIPMENT</span>
              <span className="text-right text-xs text-gray-200">
                {workout.equipment}
              </span>
            </div>

            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs text-gray-400">DIFFICULTY</span>
              <span className="text-xs text-gray-200">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs text-gray-400">SETS</span>
              <span className="text-xs text-gray-200">{workout.sets}</span>
            </div>

            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs text-gray-400">REPS</span>
              <span className="text-xs text-gray-200">{workout.reps}</span>
            </div>

            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs text-gray-400">DURATION</span>
              <span className="text-xs text-gray-200">{workout.duration}</span>
            </div>

            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs text-gray-400">CALORIES</span>
              <span className="text-xs text-gray-200">
                {workout.caloriesBurned}
              </span>
            </div>

            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs text-gray-400">RATING</span>
              <span className="text-xs text-gray-200">{workout.rating}</span>
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-lg font-extrabold">INSTRUCTIONS</h2>

            <ol className="list-decimal space-y-2 py-2 pl-5">
              {workout.instructions.map((instruction: string, ind: number) => (
                <li key={ind} className="text-sm text-[#D1D5DB]">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <TodaysPlanButton workout={workout} />
            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsCard;
