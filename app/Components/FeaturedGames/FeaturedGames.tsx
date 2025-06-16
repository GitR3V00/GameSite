import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FeaturedGames = () => {
  const featuredGames = [
    {
      title: "Grand Theft Auto V",
      price: "£24.99",
      releaseYear: 2013,
      img: "/GtaV.jpg",
    },
    {
      title: "EA Sports FC 25 - Ultimate Edition",
      price: "£34.99",
      releaseYear: 2024,
      img: "/EAFC25.jpg",
    },
    {
      title: "Elden Ring",
      price: "£44.99",
      releaseYear: 2022,
      img: "/EldenRing.jpg",
    },
    {
      title: "Call of Duty: Black Ops 6",
      price: "£34.99",
      releaseYear: 2024,
      img: "/BlackOps6.jpg",
    },
    {
      title: "Minecraft",
      price: "£12.99",
      releaseYear: 2011,
      img: "/Minecraft.jpg",
    },
  ];

  return (
    <div className="h-[800px] w-full overflow-hidden relative">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-[url('/Background.jpg')] bg-cover bg-center blur-sm z-10" />

      {/* Overlay content */}
      <div className="absolute inset-0 z-20 flex my-10 mx-30 flex-col">
        <div className="">
          <h1 className="text-white text-4xl font-bold mb-4">
            Browse our Most Popular Titles...
          </h1>
        </div>

        <div className="w-[90%] h-[80%] flex gap-8">
          {/*Consoles*/}
          <div className="flex flex-row gap-6">
            {featuredGames.map((game) => (
              <div
                key={game.title}
                className="h-[550px] w-[350px] bg-gray-300/85 p-6 rounded-2xl shadow-2xl
                    transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <Image
                  src={game.img}
                  alt={game.title}
                  width={350}
                  height={550}
                  className="top-0 left-0 w-[350px] h-[350px] rounded-2xl opacity-100"
                />
                <h1 className="font-bold text-black mt-4">{game.title}</h1>
                <h1 className="font-bold text-black mt-4">{game.price}</h1>
                <h1 className="font-bold text-black mt-4">
                  {game.releaseYear}
                </h1>
              </div>
            ))}
          </div>
          <div
            className="h-[550px] w-[550px] rounded-lg bg-gray-300 flex items-center justify-center
              transition-all duration-200 hover:scale-105 text-2xl p-2 text-black font-medium cursor-pointer
              "
          >
            <h1>
              Browse All
              <FaArrowRight className="h-4 w-4" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGames;
