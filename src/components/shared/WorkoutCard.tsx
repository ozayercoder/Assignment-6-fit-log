import { IWorkout } from "@/types/workouttype";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`./${workout.id}`} className="cursor-pointer">
      <div className="card bg-base-200 p-4 shadow-sm md:p-5">
        <figure>
          <Image
            src={workout.image}
            alt={workout.name}
            width={400}
            height={250}
            className="h-52 w-full object-cover md:h-60 lg:h-62.5"
          />
        </figure>

        <div className="pt-6 md:pt-8">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscleGroup: string) => (
              <div
                key={muscleGroup}
                className="badge rounded-2xl bg-[#ccff00] p-3 font-bold text-black"
              >
                {muscleGroup}
              </div>
            ))}
          </div>

          <h2 className="card-title py-2 text-lg font-bold md:text-xl">
            {workout.name.toUpperCase()}
          </h2>

          <div className="flex flex-wrap gap-1 py-2 text-sm text-[#9CA3AF]">
            {workout.equipment}
          </div>

          <div className="divider"></div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-base-content/60 md:gap-5">
            <div className="flex items-center gap-1.5">
              <FaClock className="text-xs" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaFire className="text-xs" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaStar />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;