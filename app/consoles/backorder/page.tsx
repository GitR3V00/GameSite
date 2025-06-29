"use client";
import React, { useEffect } from "react";
import { filteredBacklogConsoles } from "../consoleArrays";
import Image from "next/image";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import { Console } from "../consoleArrays";
import { GameWishlistItem } from "@/app/games/[game]/clientgame";
import { isGameItem } from "@/app/Components/Basket/BasketUtils";
import { WishlistItem } from "@/app/wishlist/page";
import { getStoredItem } from "@/app/wishlist/WishlistUtils";

const Backorder = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Console | null>(null);
  const [consoleWishlist, setConsoleWishlist] = useState<Console[]>([]);
  const [gameWishlist, setGameWishlist] = useState<GameWishlistItem[]>([]);

  useEffect(() => {
    const consoles = getStoredItem<Console>("ConsoleWishlist");
    const games = getStoredItem<GameWishlistItem>("GameWishlist");
    setConsoleWishlist(consoles);
    setGameWishlist(games);
  }, []);

  const handleAddToWishlist = (product: WishlistItem) => {
    if (isGameItem(product)) {
      const updatedGameList = [...gameWishlist, product];
      setGameWishlist(updatedGameList);
      localStorage.setItem("GameWishlist", JSON.stringify(updatedGameList));
    } else {
      const updatedConsoleList = [...consoleWishlist, product];
      setConsoleWishlist(updatedConsoleList);
      localStorage.setItem(
        "ConsoleWishlist",
        JSON.stringify(updatedConsoleList)
      );
    }
  };

  const handleRemoveFromWishlist = (product: WishlistItem) => {
    if (isGameItem(product)) {
      const updatedGameList = gameWishlist.filter(
        (item) => item.game.id !== product.game.id
      );
      setGameWishlist(updatedGameList);
      localStorage.setItem("GameWishlist", JSON.stringify(updatedGameList));
    } else {
      const updatedConsoleList = consoleWishlist.filter(
        (item) => item.id !== product.id
      );
      setConsoleWishlist(updatedConsoleList);
      localStorage.setItem(
        "ConsoleWishlist",
        JSON.stringify(updatedConsoleList)
      );
    }

    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="mt-32">
      <div className="border-b mx-auto px-4 max-w-screen-xl mb-10">
        <h1 className="text-black font-bold text-4xl">
          Consoles available for Backorder...
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-screen-xl mx-auto">
        {[...filteredBacklogConsoles]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((console) => (
            <div
              key={console.name}
              onClick={() => {
                setSelectedProduct(console);
                setOpenModal(true);
              }}
              className="items-center justify-center bg-gray-500/85 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-600/85"
            >
              <div className="flex gap-4 items-center">
                <div className="w-[250px]">
                  <h1>{console.name}</h1>
                </div>
                <div>
                  <Image
                    src={console.img}
                    alt={console.name}
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      {openModal && selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => {
            setOpenModal(false);
            setSelectedProduct(null);
          }}
          onRemove={handleRemoveFromWishlist}
          onAdd={handleAddToWishlist}
          consoleWishlist={consoleWishlist}
          gameWishlist={gameWishlist}
        />
      )}
    </div>
  );
};

export default Backorder;
