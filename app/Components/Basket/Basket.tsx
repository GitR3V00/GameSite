"use client";
import { useEffect, useState } from "react";
import { BasketItem, getStoredBasket, url } from "./BasketUtils";
import { isGameItem } from "./BasketUtils";
import Image from "next/image";
import Link from "next/link";

const BasketComp = () => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    setBasket(getStoredBasket());
  }, []);

  const handleRemoveFromBasket = (productToRemove: BasketItem) => {
    const updatedBasket = basket.filter((item) => {
      if ("game" in item && "game" in productToRemove) {
        return item.game.id !== productToRemove.game.id;
      } else if ("id" in item && "id" in productToRemove) {
        return item.id !== productToRemove.id;
      }
      return true;
    });

    setBasket(updatedBasket);
    localStorage.setItem("Basket", JSON.stringify(updatedBasket));
  };

  return (
    <div className="mt-[140px]">
      <div className="mx-[500px] border-b-1 mb-4">
        <h1 className="text-5xl font-semibold text-black mt-2">Basket</h1>
      </div>
      {basket.map((product, index) => {
        if (isGameItem(product)) {
          return (
            <div key={product.game.id} className="mx-[500px] cursor-pointer">
              <Link href={url(product)}>
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
                    <div className="flex gap-[300px]">
                      <div className="w-[600px]">
                        <p className="text-black">{product.game.description}</p>
                      </div>
                      <div className="">
                        <h1 className="font-semibold text-black bg-gray-500/80 p-4 rounded-lg">
                          {" "}
                          Selected Platform:
                          {product.selectedPlatform}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        } else {
          return (
            <div key={product.id} className="mx-[500px] cursor-pointer">
              <Link href={url(product)}>
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
                    <div className="w-[600px]">
                      <p className="text-black">{product.description}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemoveFromBasket(product)}
                        className="flex items-center justify-center gap-2 text-white bg-red-500 rounded-lg p-2 h-10 w-[300px] mt-4 cursor-pointer 
                    transition-all duration-200 hover:scale-105 hover:bg-red-400"
                      >
                        Remove from wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default BasketComp;
