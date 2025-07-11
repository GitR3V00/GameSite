"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Console } from "../consoleArrays";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { addToBasket } from "../../Components/Basket/BasketUtils";

type Props = {
  consoleData: Console;
};

const ClientConsole = ({ consoleData }: Props) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [consoleWishlist, setConsoleWishlist] = useState<Console[]>([]);
  const [loadedFromStorage, setLoadedFromStorage] = useState(false);

  const updateWishlist = (updater: (prev: Console[]) => Console[]) => {
    setConsoleWishlist((prev) => {
      const updated = updater(prev);
      localStorage.setItem("ConsoleWishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const isInWishlist = consoleWishlist.some(
    (item) => item.id === consoleData.id
  );

  const toggleWishlist = () => {
    updateWishlist((prev) => {
      const exists = prev.some((item) => item.id === consoleData.id);
      if (exists) {
        return prev.filter((item) => item.id !== consoleData.id);
      } else {
        return [...prev, consoleData];
      }
    });
  };

  useEffect(() => {
    const stored = localStorage.getItem("ConsoleWishlist");
    if (stored) {
      try {
        setConsoleWishlist(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse ConsoleWishlist from localStorage:", e);
      }
    }
    setLoadedFromStorage(true);
  }, []);

  return (
    <div className="flex gap-5">
      <div className="ml-134">
        {consoleData.images.slice(0, 5).map((src, index) => (
          <div
            key={index}
            className="w-20 h-20 mb-4"
            onClick={() => setSelectedImg(index)}
          >
            <Image
              src={src}
              width={100}
              height={150}
              alt={`${consoleData.name} image ${index + 1}`}
              className={`${
                index === selectedImg ? "border-2 border-black" : ""
              } h-22 w-22 rounded-lg `}
            />
          </div>
        ))}
      </div>
      <div className="bg-gray-500 w-[520px] h-[470px] border-b mb-10">
        <Image
          src={consoleData.images[selectedImg]}
          alt={consoleData.name}
          width={500}
          height={430}
          className="h-[470px] w-[520px] border"
        />
      </div>
      <div className="flex gap-2 max-w-[500px]">
        <div className="flex-col">
          <h1 className="font-semibold text-black"> Description: </h1>
          <p className="text-black">{consoleData.description}</p>
          <div className="mt-5 font-semibold text-black">
            <h1>{consoleData.Price}</h1>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                addToBasket({ ...consoleData, quantity: 1 });
                window.dispatchEvent(new Event("basket:add"));
              }}
              className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[300px] mt-4 cursor-pointer 
              transition-all duration-200 hover:scale-105 hover:bg-gray-400"
            >
              Add To Basket
              <FaArrowRight />
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                toggleWishlist();
                if (!isInWishlist)
                  window.dispatchEvent(new Event("wishlist:add"));
              }}
              className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[300px] mt-4 cursor-pointer 
                        transition-all duration-200 hover:scale-105 hover:bg-gray-400"
            >
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientConsole;
