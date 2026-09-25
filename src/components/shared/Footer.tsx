import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#0C0D10] shadow-sm">
      <footer className="container mx-auto flex flex-col items-center gap-3 p-4 text-neutral-content md:flex-row md:justify-between md:gap-0">
        <aside className="flex items-center gap-2">
          <Image src={logo} alt="logo" />
          <p className="text-lg font-bold">FITLOG</p>
        </aside>

        <nav>
          <p className="text-center text-xs text-[#6B7280] md:text-right md:text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;