"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGamepad, FaHeart, FaShoppingBasket } from "react-icons/fa";
import { usePathname } from "next/navigation";

type NavProps = {
  name: string;
  url: string;
};

const Navbar = () => {
  const [navBg, setnavBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 90) setnavBg(true);
      else setnavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const shouldBeSolid = pathname !== "/" || navBg;

  const navLinks: NavProps[] = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Consoles", url: "/consoles" },
    { name: "Games", url: "/games" },
  ];

  return (
    <div>
      <div
        className={`${
          shouldBeSolid ? "bg-red-800 shadow-md" : ""
        } fixed top-0 w-full px-[200px] py-4 z-50 flex justify-between items-center transition-all duration-200`}
      >
        <div>
          <FaGamepad className="w-16 h-16" />
        </div>
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link href={link.url}>{link.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="p-4 bg-white text-black font-semibold rounded-lg cursor-pointer hover:bg-gray-200">
            Contact Us
          </button>

          <Link href={"/basket"}>
            <FaShoppingBasket className="w-8 h-8 cursor-pointer" />
          </Link>

          <Link href={"/wishlist"}>
            <FaHeart className="cursor-pointer w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
