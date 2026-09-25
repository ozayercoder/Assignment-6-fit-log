import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200 px-4 md:px-6">
      <div className="w-full max-w-xl text-center">
        {/* 404 */}
        <div className="relative mb-5 md:mb-6 lg:mb-8">
          <h1 className="select-none text-[100px] font-black leading-none tracking-tighter text-[#CCFF00]/10 md:text-[150px] lg:text-[180px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black text-[#CCFF00] md:text-6xl lg:text-7xl">
              404
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed text-base-content/60 md:mb-8 md:text-lg">
          Oops! The page you are looking for does not exist or may have been
          moved to another location.
        </p>

        {/* Button */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="btn w-full bg-[#CCFF00] px-6 font-semibold text-black md:w-auto"
          >
            <FaHome />
            Back to Home
          </Link>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 flex items-center justify-center gap-2 md:mt-10 lg:mt-12">
          <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
          <span className="h-0.5 w-12 bg-base-content/10 md:w-16" />
          <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
        </div>
      </div>
    </main>
  );
}