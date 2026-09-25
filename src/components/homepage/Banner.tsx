import Image from "next/image";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-6 px-4 md:my-8 md:px-6 lg:my-10 lg:px-8">
      <div className="hero rounded-2xl bg-base-200 py-6 md:py-8 lg:py-5">
        <div className="hero-content flex-col md:gap-8 lg:flex-row-reverse lg:gap-20">
          {/* Image */}
          <Image
            src={BannerImage}
            alt="Banner Image"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />

          {/* Content */}
          <div className="w-full">
            <h3 className="text-sm text-[#ccff00]">WORKOUT LIBRARY</h3>

            <h1 className="mt-3 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="py-5 text-base text-[#9CA3AF] md:py-6 md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into todays plan, and watch the weeks work add up.
            </p>

            <a
              href="#library"
              className="btn bg-[#ccff00] px-5 py-5 text-sm font-bold text-black md:py-6"
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
