"use client";
import Image from "next/image";
import Link from "next/link";
import { Sofia_Sans_Extra_Condensed, Oswald } from "next/font/google";
import { NAV_LINKS } from "../../constants";
import { useState } from "react";

const sofia = Sofia_Sans_Extra_Condensed({
  subsets: [],
  weight: ["600"],
});

const sofia_light = Sofia_Sans_Extra_Condensed({
  subsets: [],
  weight: ["400"],
});

const oswald = Oswald({
  subsets: [],
  weight: ["400"],
});

const oswald_light = Oswald({
  subsets: [],
  weight: ["300"],
});

interface NavLink {
  href: string;
  key: string;
  label: string;
}

interface NavBarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavBarProps> = ({ navLinks }) => {
  const [showNav, setShowNav] = useState(false);
  const handleNavbar = () => {
    setShowNav(!showNav);
  };
  const menuActive = showNav == true ? "top-[60px]" : "-top-full";
  const menuActive2 = showNav == true ? "ri-arrow-up-line" : "ri-menu-line";
  return (
    <nav className="navbar fixed w-full transition-all bg-white z-10">
      <div className="container mx-auto py-5 px-10 transition-all">
        <div className="navbar-box flex justify-between items-center">
          <div className={oswald.className}>
            <div className="flex items-end">
              <div className="bg-lime-400 mb-1 mx-1 w-2 h-2" />
              <Link href="/#home" className="text-xl transition-all">
                ROY BELMIRO VIRGIANT
              </Link>
            </div>
          </div>
          <div className={oswald_light.className}>
            <div className="flex">
              <ul
                className={`flex ${menuActive} items-center right-0 left-0 transition-all lg:gap-16 gap-8 md:static fixed rounded-lg mx-4 shadow-lg md:shadow-none md:flex-row py-6 md:py-0 flex-col text-center bg-white md:bg-transparent`}
              >
                {navLinks.map((link) => (
                  <Link
                    href={link.href}
                    className="w-full ease-out duration-100 transition-all text-lg"
                  >
                    <li
                      key={link.key}
                      className=" border-b-2 border-transparent hover:border-lime-400 "
                    >
                      {link.label}
                    </li>
                  </Link>
                ))}
              </ul>
              <i
                className={` md:hidden h-full justify-center transition-all items-center text-center ${menuActive2} active:text-gray-400`}
                onClick={handleNavbar}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
