"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Game } from "../GameArrays";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { addToBasket } from "@/app/Components/Basket/BasketUtils";

type Props = {
  gameData: Game;
};

export type GameWishlistItem = {
  game: Game;
  selectedPlatform?: string;
};

const ClientGame = ({ gameData }: Props) => {
  const searchParams = useSearchParams();
  const initialPlatform = searchParams.get("platform") ?? "";
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedPlatform, setSelectedPlatform] =
    useState<string>(initialPlatform);

  const [gameWishlist, setGameWishlist] = useState<GameWishlistItem[]>([]);
  const [loadedFromStorage, setLoadedFromStorage] = useState(false);

  const updateWishlist = (
    updater: (prev: GameWishlistItem[]) => GameWishlistItem[]
  ) => {
    setGameWishlist((prev) => {
      const updated = updater(prev);
      localStorage.setItem("GameWishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const isInWishlist = gameWishlist.some(
    (item) => item.game.id === gameData.id
  );

  const toggleWishlist = () => {
    updateWishlist((prev) => {
      const exists = prev.some((item) => item.game.id === gameData.id);
      if (exists) {
        return prev.filter((item) => item.game.id !== gameData.id);
      } else {
        return [
          ...prev,
          {
            game: gameData,
            ...(selectedPlatform && { selectedPlatform }),
          },
        ];
      }
    });
  };

  useEffect(() => {
    const stored = localStorage.getItem("GameWishlist");
    if (stored) {
      try {
        setGameWishlist(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse GameWishlist from localStorage:", e);
      }
    }
    setLoadedFromStorage(true);
  }, []);

  return (
    <div className="flex gap-5">
      <div className="ml-134">
        {gameData.images.slice(0, 5).map((src, index) => (
          <div
            key={index}
            className="w-20 h-20 mb-4"
            onClick={() => setSelectedImg(index)}
          >
            <Image
              src={src}
              width={100}
              height={150}
              alt={`${gameData.name} image ${index + 1}`}
              className={`${
                index === selectedImg ? "border-2 border-black" : ""
              } h-22 w-22 rounded-lg `}
            />
          </div>
        ))}
      </div>
      <div className="bg-gray-500 w-[520px] h-[470px] border-b mb-10">
        <Image
          src={gameData.images[selectedImg]}
          alt={gameData.name}
          width={500}
          height={430}
          className="h-[470px] w-[520px] border"
        />
      </div>
      <div className="flex gap-2 max-w-[500px]">
        <div className="flex-col">
          <h1 className="font-semibold text-black"> Description: </h1>
          <p className="text-black">{gameData.description}</p>
          <div className="mt-5 font-semibold text-black">
            <h1>{gameData.Price}</h1>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() =>
                addToBasket({
                  game: gameData,
                  quantity: 1,
                  ...(selectedPlatform && { selectedPlatform }),
                })
              }
              className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[300px] mt-4 cursor-pointer 
              transition-all duration-200 hover:scale-105 hover:bg-gray-400"
            >
              Add To Basket
              <FaArrowRight />
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[300px] mt-4 cursor-pointer 
              transition-all duration-200 hover:scale-105 hover:bg-gray-400"
              onClick={toggleWishlist}
            >
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              <FaHeart />
            </button>
          </div>
          <div className="flex gap-2 text-center justify-center">
            {gameData.platform.map((platform) => (
              <div key={platform}>
                <button
                  onClick={() => setSelectedPlatform(platform)}
                  className={`p-2 rounded-lg mt-10 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    platform === selectedPlatform
                      ? "bg-gray-300 border-1 border-gray-500"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                >
                  {platform}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGame;
