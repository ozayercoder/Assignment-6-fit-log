"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workouttype";
import { useContext } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

interface SaveButtonProps {
  workout: IWorkout;
}

const SaveButton = ({ workout }: SaveButtonProps) => {
  const { savedPlans, setSavedPlans } = useContext(WorkoutContext);

  const handleSaveButton = () => {
    const alreadyAdded = savedPlans.some(
      (savedWorkout: IWorkout) => savedWorkout.id === workout.id,
    );

    if (alreadyAdded) {
      toast.error("Already Added to Saved", {
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
      toast.success("Added to Saved", {
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

      setSavedPlans([...savedPlans, workout]);
    }
  };

  return (
    <div>
      <button
        onClick={handleSaveButton}
        className="btn flex w-full items-center justify-center gap-1 rounded-xl border border-[#374151] px-6 py-3 text-sm font-semibold text-[#E5E7EB] md:w-auto"
      >
        <MdBookmarkAdd />
        Save for later
      </button>
    </div>
  );
};

export default SaveButton;