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
      <div className="card bg-base-200 p-5 shadow-sm">
        <figure>
          <Image
            src={workout.image}
            alt={workout.name}
            width={400}
            height={250}
            className="w-full h-62.5 object-cover"
          />
        </figure>
        <div className="pt-8">
          <div>
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscleGroup: string) => (
                <div
                  key={muscleGroup}
                  className="badge bg-[#ccff00] text-black font-bold rounded-2xl p-3"
                >
                  {muscleGroup}
                </div>
              ))}
            </div>
          </div>
          <h2 className="card-title font-bold text-xl py-2">
            {workout.name.toUpperCase()}
          </h2>
          <div className="flex flex-wrap gap-1 py-2 text-[#9CA3AF] text-sm">
            {workout.equipment}
          </div>
          <div className="divider"></div>

          <div className="flex items-center gap-5 text-xs text-base-content/60">
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
