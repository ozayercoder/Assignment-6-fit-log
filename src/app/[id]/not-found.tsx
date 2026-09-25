import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div className="relative mb-6">
          <h1 className="text-[140px] sm:text-[180px] font-black leading-none tracking-tighter text-[#CCFF00]/10 select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl sm:text-7xl font-black text-[#CCFF00]">
              404
            </span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h2>

        <p className="text-base-content/60 text-lg leading-relaxed mb-8">
          Oops! The page you are looking for does not exist or may have been
          moved to another location.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn bg-[#CCFF00] gap-2 px-6 text-black font-semibold">
            <FaHome />
            Back to Home
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
          <span className="w-16 h-0.5 bg-base-content/10" />
          <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
        </div>
      </div>
    </main>
  );
}
