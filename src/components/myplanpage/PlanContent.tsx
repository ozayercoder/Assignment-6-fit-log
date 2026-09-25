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
  const currentPlans = selectedTab === "todays" ? todaysPlans : savedPlans;
  return (
    <div>
      <Stats currentPlans={currentPlans}></Stats>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "todays" ? (
        <TodaysPlanCard currentPlans={currentPlans} />
      ) : (
        <SavedPlanCard currentPlans={currentPlans} />
      )}
    </div>
  );
};

export default PlanContent;
