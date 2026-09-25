"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/context/WorkoutContext";

const Navbar = () => {
  const { todaysPlans, savedPlans } = useContext(WorkoutContext);
  const pathname = usePathname();
  const links = (
    <>
      <li className="">
        <Link
          href={"./"}
          className={pathname === "/" ? "text-[#ccff00]" : "text-white"}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href={"./myplan"}
          className={pathname === "/myplan" ? "text-[#ccff00]" : "text-white"}
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <div className="shadow-sm bg-[#0C0D10]   ">
      <div className="max-lg:collapse container mx-auto">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div className="flex gap-2 items-center justify-center">
              <Image src={logo} alt="logo"></Image>
              <p className="text-xl font-bold">FITLOG</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-4 px-1 text-lg font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <Link href={"./"}>
              <div className="badge bg-[#0C0D10]">
                Plan{" "}
                <span className="bg-[#ccff00] rounded-[9999] px-1.5 text-black font-semibold">
                  {todaysPlans.length}
                </span>
              </div>
            </Link>
            <Link href={"./"}>
              {" "}
              <div className="badge bg-[#0C0D10]">
                Saved{" "}
                <span className=" rounded-[9999] border px-1.5 text-white font-semibold">
                  {savedPlans.length}
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
