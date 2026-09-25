"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workouttype";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { FaRegClock, FaRegStar } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import { TbFlameFilled } from "react-icons/tb";
import { Bounce, toast } from "react-toastify";

interface IStatsProps {
  currentPlans: IWorkout[];
}

const TodaysPlanCard = ({ currentPlans }: IStatsProps) => {
  const {
    todaysPlans,
    setTodaysPlans,
    setCompletedWorkouts,
    completedWorkouts,
  } = useContext(WorkoutContext);

  const handleMarkedButton = (id: number) => {
    setCompletedWorkouts((prev) => [...prev, id]);

    toast.success("Workout is done", {
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
  };

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

    setTodaysPlans(todaysPlans.filter((workout) => workout.id !== id));
  };

  return (
    <div className="my-5 flex flex-col gap-4">
      {currentPlans.map((workout) => {
        const isCompleted = completedWorkouts.includes(workout.id);

        return (
          <div
            key={workout.id}
            className="flex w-full items-center justify-between rounded-2xl border border-[#232732] bg-[#0f141c] p-4 shadow-lg"
          >
            <div className="flex gap-4">
              <div className="relative h-25 w-45 shrink-0 overflow-hidden rounded-xl bg-gray-800">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="pb-1 text-xl font-bold text-white">
                  {workout.name.toUpperCase()}
                </h2>

                <p className="text-xs text-[#8e9bae] sm:text-sm">
                  {workout.equipment}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-[#d0d7de]">
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

           
            <div className="flex items-center gap-3">
              <Link href={`/${workout.id}`}>
                <button className="btn rounded-full border border-[#374151]">
                  View Details
                </button>
              </Link>

              <button
                onClick={() => handleMarkedButton(workout.id)}
                disabled={isCompleted}
                className={`btn rounded-full ${
                  isCompleted
                    ? "bg-green-500 text-black"
                    : "bg-[#ccff00] text-black"
                }`}
              >
                <MdOutlineDone />
                {isCompleted ? "Completed" : "Mark as Done"}
              </button>

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

export default TodaysPlanCard;
