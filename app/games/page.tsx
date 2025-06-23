"use client";

import React, { useState } from "react";
import {
  gameArray,
  Platform,
  pc,
  xbox,
  playstation,
  nintendo,
} from "./GameArrays";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Games = () => {
  const [activePlatform, setActivePlatform] = useState<string>("");

  const router = useRouter();

  const handleClick = (slug: string) => {
    const url = `/games/${slug}?platform=${activePlatform}`;
    router.push(url);
  };

  const handlePlatformClick = (platform: string) => {
    setActivePlatform(platform);
  };

  const renderGameList = () => {
    switch (activePlatform) {
      case "Nintendo":
        return nintendo;
      case "PC":
        return pc;
      case "Playstation":
        return playstation;
      case "Xbox":
        return xbox;
      case "All":
        return gameArray;
      default:
        return gameArray;
    }
  };

  const platform: Platform[] = ["Nintendo", "PC", "Playstation", "Xbox", "All"];

  return (
    <div className="w-full h-full mt-24">
      <div className="items-center justify-center text-center bg-red-600 w-full h-[170px]">
        <div className="mx-[500px] text-left pt-4 ">
          <div className="border-b-1">
            <div className="w-[400px] ">
              <h1 className="text-5xl font-bold text-gray-300  pb-2">
                Shop All Games By Platform
              </h1>
            </div>
          </div>
          <div className="flex gap-6 text-center justify-center p-1">
            {platform.map((platform) => (
              <div key={platform}>
                <div className="p-1">
                  <button
                    onClick={() => handlePlatformClick(platform)}
                    className="text-2xl font-semibold cursor-pointer transition-all rounded-lg duration-150 hover:bg-red-400 px-2"
                  >
                    {platform}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="mx-[500px] border-b-1 mb-4">
          <h1 className="text-5xl font-semibold text-black mt-2">
            {activePlatform ? activePlatform : "All Games"}
          </h1>
        </div>
        {renderGameList().map((game) => (
          <div
            onClick={() => handleClick(game.slug)}
            key={game.name}
            className="mx-[500px] cursor-pointer"
          >
            <div className="mb-4">
              <h1 className="text-black text-2xl">{game.name}</h1>
              <div className="flex gap-3 border-b-2 my-2">
                <Image
                  src={game.img}
                  width={200}
                  height={250}
                  alt={game.name}
                  className="w-[150px] h-[200px] mb-2 shadow-2xl border-1 border-black"
                />
                <div>
                  <p className="text-black">{game.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
