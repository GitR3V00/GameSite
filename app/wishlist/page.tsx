'use client'
import React, { useEffect, useState } from "react";
import { Console } from '../consoles/consoleArrays';
import { GameWishlistItem } from "../games/[game]/clientgame";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Modal from "../Components/Modal/Modal";


const getStoredItem = <T,>(key: string): T[] => {

  const item = localStorage.getItem(key);
  if (!item) return [];
  try {
    return JSON.parse(item) as T[];
  } catch (e) {
    console.error(`Failed to parse localStorage item with key "${key}"`, e);
    return [];
  }
};


const Wishlist = () => {
  const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Console |GameWishlistItem |null>(null);
  const [consoleWishlist, setConsoleWishlist] = useState<Console[]>([]);
  const [gameWishlist, setGameWishlist] = useState<GameWishlistItem[]>([]);
   const [activeCategory, setActiveCategory] = useState<string>("");

   const renderWishList = () => {
       switch (activeCategory) {
         case "Consoles":
           return consoleWishlist;
         case "Games":
           return gameWishlist;
         default:
           return consoleWishlist;
       }
     };

   const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const router = useRouter();


  useEffect(() => {
    const consoles = getStoredItem<Console>("ConsoleWishlist");
    const games = getStoredItem<GameWishlistItem>("GameWishlist");
    setConsoleWishlist(consoles);
    setGameWishlist(games);
  }, []);

  const wishlistCategory:string[] = ["Consoles","Games"];

  const isGameItem = (item: Console | GameWishlistItem): item is GameWishlistItem =>
    (item as GameWishlistItem).game !== undefined;



  return (
         <div className="w-full h-full mt-24">
              <div className="items-center justify-center text-center bg-red-600 w-full h-[120px]">
                <div className="mx-[500px] text-left pt-4 ">
                  <div className="border-b-1">
                    <div className="w-[600px] ">
                      <h1 className="text-5xl font-bold text-white pt-2">
                        Product Wishlist
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-6 text-center justify-center p-1">
                    {wishlistCategory.map((category) => (
                      <div key={category}>
                        <div className="p-1">
                          <button
                            onClick={() => handleCategoryClick(category)}
                            className="text-2xl font-semibold cursor-pointer transition-all rounded-lg duration-150 hover:bg-red-400 px-2"
                          >
                            {category}
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
                    {activeCategory ? activeCategory : "All Games"}
                  </h1>
                </div>
               {renderWishList().map((product, index) => {
  
  if (isGameItem(product)) {
    return (
      <div
        onClick={() => {
                    setSelectedProduct(product);
                    setOpenModal(true);
                  }}
        key={product.game.id}
        className="mx-[500px] cursor-pointer"
      >
        <div className="mb-4">
          <h1 className="text-black text-2xl">{product.game.name}</h1>
          <div className="flex gap-3 border-b-2 my-2">
            <Image
              src={product.game.img}
              width={200}
              height={250}
              alt={product.game.name}
              className="w-[150px] h-[200px] mb-2 shadow-2xl border-1 border-black"
            />
            <div>
              <p className="text-black">{product.game.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
                    setSelectedProduct(product);
                    setOpenModal(true);
                  }}
        key={product.id}
        className="mx-[500px] cursor-pointer"
      >
        <div className="mb-4">
          <h1 className="text-black text-2xl">{product.name}</h1>
          <div className="flex gap-3 border-b-2 my-2">
            <Image
              src={product.img}
              width={200}
              height={250}
              alt={product.name}
              className="w-[150px] h-[200px] mb-2 shadow-2xl border-1 border-black"
            />
            <div>
              <p className="text-black">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
})}
              </div>
               {openModal && selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => {
            setOpenModal(false);
            setSelectedProduct(null);
          }}
        />
      )}
            </div>

  )
};

export default Wishlist;