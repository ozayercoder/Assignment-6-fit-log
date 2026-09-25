"use client";

import React from "react";

interface TabsProps {
  selectedTab: "todays" | "saved";
  setSelectedTab: React.Dispatch<React.SetStateAction<"todays" | "saved">>;
  sortBy: "duration" | "calories" | "rating";
  setSortBy: React.Dispatch<
    React.SetStateAction<"duration" | "calories" | "rating">
  >;
}

const Tabs = ({
  selectedTab,
  setSelectedTab,
  sortBy,
  setSortBy,
}: TabsProps) => {
  return (
    <div className="mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:items-center md:justify-between">
      {/* Tabs */}
      <div className="flex w-fit rounded-xl bg-[#13161D] p-1">
        <button
          onClick={() => setSelectedTab("todays")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition md:px-5 md:text-base ${
            selectedTab === "todays"
              ? "bg-[#1D222C] text-[#CCFF00] shadow-sm"
              : "text-[#8A92A0]"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => setSelectedTab("saved")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition md:px-5 md:text-base ${
            selectedTab === "saved"
              ? "bg-[#1D222C] text-[#CCFF00] shadow-sm"
              : "text-[#8A92A0]"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2">
        <span className="whitespace-nowrap text-sm font-medium text-[#8A92A0]">
          Sort by
        </span>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "duration" | "calories" | "rating")
          }
          className="select w-full rounded-lg border border-[#232732] bg-[#13161D] outline-none md:w-auto"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default Tabs;