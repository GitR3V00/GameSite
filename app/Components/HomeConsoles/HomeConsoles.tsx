import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Console, consoles } from "@/app/consoles/consoleArrays";

const HomeConsoles = () => {
  const homeConsoles: Console[] = [...consoles.slice(0, 5)];

  return (
    <div className="h-[800px] w-full mt-14 overflow-hidden relative">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-[url('/ConsolesWallpaper.jpg')] bg-cover bg-center blur-sm z-10" />

      {/* Overlay content */}
      <div className="absolute inset-0 z-20 flex my-10 mx-30 flex-col">
        <div className="">
          <h1 className="text-white text-4xl font-bold mb-4">
            Browse our range of featured consoles...
          </h1>
        </div>

        <div className="w-[90%] h-[80%] flex gap-8">
          {/*Consoles*/}
          <div className="flex flex-row gap-6">
            {homeConsoles.map((console) => (
              <div
                key={console.name}
                className="h-[550px] w-[350px] bg-gray-300/85 p-6 rounded-2xl shadow-2xl
                transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <Link href={`consoles/${console.slug}`}>
                  <Image
                    src={console.img}
                    alt={console.name}
                    width={350}
                    height={550}
                    className="top-0 left-0 w-[350px] h-[350px] rounded-2xl opacity-100"
                  />
                  <h1 className="font-bold text-black mt-4">{console.name}</h1>
                </Link>
              </div>
            ))}
          </div>

          <div
            className="h-[550px] w-[550px] rounded-lg bg-gray-300 flex items-center justify-center
          transition-all duration-200 hover:scale-105 text-2xl p-2 text-black font-medium cursor-pointer
          "
          >
            <Link href={"/consoles"}>
              <h1>
                Browse All Consoles
                <FaArrowRight className="h-4 w-4" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeConsoles;
