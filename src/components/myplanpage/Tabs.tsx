"use client";

import React from "react";

interface TabsProps {
  selectedTab: "todays" | "saved";
  setSelectedTab: React.Dispatch<React.SetStateAction<"todays" | "saved">>;
}

const Tabs = ({ selectedTab, setSelectedTab }: TabsProps) => {
  return (
    <div>
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
    </div>
  );
};

export default Tabs;
