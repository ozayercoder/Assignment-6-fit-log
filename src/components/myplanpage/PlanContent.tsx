"use client";
import React, { useContext, useState } from "react";
import Stats from "./Stats";
import { WorkoutContext } from "@/context/WorkoutContext";
import Tabs from "./Tabs";

import TodaysPlanCard from "./TodaysPlanCard";
import SavedPlanCard from "./SavedPlanCard";

const PlanContent = () => {
  const { todaysPlans, savedPlans } = useContext(WorkoutContext);
  const [selectedTab, setSelectedTab] = useState<"todays" | "saved">("todays");

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const currentPlans = selectedTab === "todays" ? todaysPlans : savedPlans;

  const sortedPlans = [...currentPlans].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });
  return (
    <div>
      <Stats currentPlans={currentPlans}></Stats>
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {currentPlans.length === 0 ? (
        <div className="my-5 rounded-2xl border border-[#232732] bg-[#0f141c] py-16 text-center">
          <h2 className="text-xl font-bold text-white">
            {selectedTab === "todays"
              ? "No workouts in today's plan"
              : "No saved workouts"}
          </h2>

          <p className="mt-2 text-sm text-[#8A92A0]">
            {selectedTab === "todays"
              ? "Add some workouts to your plan to get started."
              : "Save some workouts to see them here."}
          </p>
        </div>
      ) : selectedTab === "todays" ? (
        <TodaysPlanCard currentPlans={sortedPlans} />
      ) : (
        <SavedPlanCard currentPlans={sortedPlans} />
      )}
    </div>
  );
};

export default PlanContent;
