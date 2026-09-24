import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/banner.png";
const Banner = () => {
  return (
    <div className=" container mx-auto my-10">
      <div className="hero bg-base-200 py-5 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40 md:space-y-10">
          <Image src={BannerImage} alt="Banner Image" />
          <div className="w-200">
            <h3 className="text-sm text-[#ccff00]">WORKOUT LIBRARY</h3>
            <h1 className="text-6xl font-bold text-white mt-3">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="py-6 text-[#9CA3AF] text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
              <br />
              into todays plan, and watch the weeks work add up.
            </p>
            <a
              href="#library"
              className="btn bg-[#ccff00] text-black py-6 px-5 text-sm font-bold"
            >
              BROWSE WORKOUTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
