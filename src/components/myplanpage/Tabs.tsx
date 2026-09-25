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
    <div className="flex justify-between items-center">
      <div className="flex w-fit rounded-xl  bg-[#13161D] p-1 mt-10">
        <button
          onClick={() => setSelectedTab("todays")}
          className={`rounded-lg px-5 py-2 text-md  font-semibold transition ${
            selectedTab === "todays"
              ? "bg-[#1D222C] text-[#CCFF00] shadow-sm"
              : "text-[#8A92A0]"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => setSelectedTab("saved")}
          className={`rounded-lg px-5 py-2 text-md font-semibold transition ${
            selectedTab === "saved"
              ? "bg-[#1D222C] text-[#CCFF00]  shadow-sm"
              : "text-[#8A92A0]"
          }`}
        >
          Saved
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="whitespace-nowrap text-sm font-medium text-[#8A92A0]">
          Sort by
        </span>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "duration" | "calories" | "rating")
          }
          className="select outline-none border border-[#232732] space-x-1 bg-[#13161D] rounded-lg"
        >
          <option value={"duration"}>Duration</option>
          <option value={"calories"}>Calories</option>
          <option value={"rating"}>Rating</option>
        </select>
      </div>
    </div>
  );
};

export default Tabs;
