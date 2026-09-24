"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workouttype";
import React, { useContext } from "react";
import { TbChecklist } from "react-icons/tb";
import { Bounce, toast } from "react-toastify";
interface TodaysPlanButtonProps {
  workout: IWorkout;
}
const TodaysPlanButton = ({ workout }: TodaysPlanButtonProps) => {
  const data = useContext(WorkoutContext);
  const { todaysPlans, setTodaysPlans } = data;
  const handleTodaysPlanButton = () => {
    const alreadyAdded = todaysPlans.some(
      (todaysworkout: IWorkout) => todaysworkout.id === workout.id,
    );
    if (alreadyAdded) {
      toast.error("Already Added to today's plan", {
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
    } else {
      toast.success("Added to today's plan", {
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
      setTodaysPlans([...todaysPlans, workout]);
    }
  };
  return (
    <div>
      <button
        onClick={handleTodaysPlanButton}
        className="flex gap-1 items-center bg-[#CCFF00] px-6 py-3 rounded-xl text-sm font-semibold text-black btn"
      >
        <TbChecklist /> Add to todays plan
      </button>
    </div>
  );
};

export default TodaysPlanButton;
