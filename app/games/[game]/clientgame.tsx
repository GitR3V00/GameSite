"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Game } from "../GameArrays";
import { FaArrowRight, FaHeart } from "react-icons/fa";

type Props = {
  gameData: Game;
};

const ClientGame = ({ gameData }: Props) => {
  const [selectedImg, setSelectedImg] = useState(0);

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
          <div className="flex justify-center">
            <button
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
            >
              Add To WishList
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGame;
