"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workouttype";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { FaRegClock, FaRegStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TbFlameFilled } from "react-icons/tb";
import { Bounce, toast } from "react-toastify";

interface IStatsProps {
  currentPlans: IWorkout[];
}

const SavedPlanCard = ({ currentPlans }: IStatsProps) => {
  const { savedPlans, setSavedPlans } = useContext(WorkoutContext);

  const handleRemove = (id: number) => {
    toast.success("Removed Workout", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setSavedPlans(savedPlans.filter((workout) => workout.id !== id));
  };

  return (
    <div className="my-4 flex flex-col gap-4 md:my-5">
      {currentPlans.map((workout) => {
        return (
          <div
            key={workout.id}
            className="flex w-full flex-col gap-4 rounded-2xl border border-[#232732] bg-[#0f141c] p-4 shadow-lg md:flex-row md:items-center md:justify-between md:p-5"
          >
           
            <div className="flex min-w-0 gap-4">
              <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-gray-800 md:h-25 md:w-40 lg:h-28 lg:w-44">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <h2 className="pb-1 text-lg font-bold text-white md:text-xl">
                  {workout.name.toUpperCase()}
                </h2>

                <p className="text-xs text-[#8e9bae] md:text-sm">
                  {workout.equipment}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#d0d7de] md:mt-4 md:gap-4">
                  <span className="flex items-center gap-1">
                    <FaRegClock className="text-[#ccff00]" />
                    {workout.duration} min
                  </span>

                  <span className="flex items-center gap-1">
                    <TbFlameFilled className="text-[#ccff00]" />
                    {workout.caloriesBurned} kcal
                  </span>

                  <span className="flex items-center gap-1">
                    <FaRegStar className="text-[#ccff00]" />
                    {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            
            <div className="flex items-center justify-end gap-3 md:shrink-0">
              <Link href={`/${workout.id}`} className="flex-1 md:flex-none">
                <button className="btn w-full rounded-full border border-[#374151] md:w-auto">
                  View Details
                </button>
              </Link>

              <button
                onClick={() => handleRemove(workout.id)}
                className="cursor-pointer p-1.5"
              >
                <RxCross2 className="text-xl" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SavedPlanCard;