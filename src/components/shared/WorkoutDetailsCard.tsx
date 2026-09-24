import { IWorkout } from "@/types/workouttype";
import Image from "next/image";
import { MdBookmarkAdd } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

interface WorkoutDetailsCardProps {
  workout: IWorkout;
}

const WorkoutDetailsCard = ({ workout }: WorkoutDetailsCardProps) => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-10 rounded-2xl  p-6 shadow-sm md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={400}
            className="h-auto w-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{workout.name}</h1>

          <p className="mt-2">{workout.description}</p>

          <div className="flex flex-wrap gap-2 mt-1">
            {workout.muscleGroups.map((muscleGroup: string) => (
              <div
                key={muscleGroup}
                className="badge bg-[#ccff00] text-black font-bold rounded-2xl p-3"
              >
                {muscleGroup}
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-xl my-3 py-2 bg-[#151922]">
            <div className="flex items-center justify-between py-2 px-3 ">
              <span className="text-xs  text-gray-400">EQUIPMENT</span>
              <span className="text-xs text-gray-200">{workout.equipment}</span>
            </div>

            <div className="flex items-center justify-between py-2   px-3 ">
              <span className="text-xs  text-gray-400">DIFFICULTY</span>
              <span className="text-xs text-gray-200">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between py-2   px-3 ">
              <span className="text-xs  text-gray-400">SETS</span>
              <span className="text-xs text-gray-200">{workout.sets}</span>
            </div>

            <div className="flex items-center justify-between  py-2  px-3 ">
              <span className="text-xs  text-gray-400">REPS</span>
              <span className="text-xs text-gray-200">{workout.reps}</span>
            </div>

            <div className="flex items-center justify-between py-2  px-3 ">
              <span className="text-xs  text-gray-400">DURATION</span>
              <span className="text-xs text-gray-200">{workout.duration}</span>
            </div>

            <div className="flex items-center justify-between  py-2  px-3 ">
              <span className="text-xs  text-gray-400">CALORIES</span>
              <span className="text-xs text-gray-200">
                {workout.caloriesBurned}
              </span>
            </div>

            <div className="flex items-center justify-between py-2  px-3 ">
              <span className="text-xs  text-gray-400">RATING</span>
              <span className="text-xs text-gray-200">{workout.rating}</span>
            </div>
          </div>
          <div className="py-3">
            <h2 className="font-extrabold text-lg">INSTRUCTIONS</h2>
            <ol className="list-decimal pl-3 space-y-2 py-2">
              {workout.instructions.map((instruction: string, ind: number) => (
                <li key={ind} className=" text-[#D1D5DB]  text-sm">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex gap-4">
            <button className="flex gap-1 items-center bg-[#CCFF00] px-6 py-3 rounded-xl text-sm font-semibold text-black btn">
              <TbChecklist /> Add to todays plan
            </button>
            <button className="flex gap-1 items-center border border-[#374151] text-[#E5E7EB] px-6 py-3 rounded-xl text-sm font-semibold btn">
              <MdBookmarkAdd /> Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsCard;
