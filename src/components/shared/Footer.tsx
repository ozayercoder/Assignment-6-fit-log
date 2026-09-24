import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-[#0C0D10]">
      <footer className="footer sm:footer-horizontal container mx-auto  text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <Image src={logo} alt="logo"></Image>
          <p className="text-xl font-bold">FITLOG</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-[#6B7280] text-sm">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
