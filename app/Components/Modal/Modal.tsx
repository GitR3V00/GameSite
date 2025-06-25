import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Product } from "../Product/Products";
import { GameWishlistItem } from "@/app/games/[game]/clientgame";

interface ModalProps {
  product: Product | GameWishlistItem;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const isGameItem = (
    item: Product | GameWishlistItem
  ): item is GameWishlistItem => (item as GameWishlistItem).game !== undefined;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[660px] relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-black"
          onClick={onClose}
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold mb-4 text-black">
          {isGameItem(product) ? product.game.name : product.name}
        </h1>
        <div className="flex gap-2">
          <div className="flex-row">
            {isGameItem(product)
              ? product.game.images
                  .slice(0, 5)
                  .map((src: string, index: number) => (
                    <div
                      key={index}
                      className="w-20 h-20 mb-4"
                      onClick={() => setSelectedImg(index)}
                    >
                      <Image
                        src={src}
                        width={400}
                        height={450}
                        alt={product.game.name}
                        className={`${
                          index === selectedImg ? "border-2 border-black" : ""
                        } h-22 w-22 rounded-lg `}
                      />
                    </div>
                  ))
              : product.images.slice(0, 5).map((src: string, index: number) => (
                  <div
                    key={index}
                    className="w-20 h-20 mb-4"
                    onClick={() => setSelectedImg(index)}
                  >
                    <Image
                      src={src}
                      width={400}
                      height={450}
                      alt={`${
                        isGameItem(product) ? product.game.name : product
                      } image ${index + 1}`}
                      className={`${
                        index === selectedImg ? "border-2 border-black" : ""
                      } h-22 w-22 rounded-lg `}
                    />
                  </div>
                ))}
          </div>
          <div className="bg-gray-500 w-[520px] h-[470px] border-b mb-10">
            {isGameItem(product) ? (
              <Image
                src={product.game.images[selectedImg]}
                alt={product.game.name}
                width={500}
                height={430}
                className="h-[470px] w-[520px] border"
              />
            ) : (
              <Image
                src={product.images[selectedImg]}
                alt={product.name}
                width={500}
                height={430}
                className="h-[470px] w-[520px] border"
              />
            )}
          </div>
        </div>
        <h1 className="text-black font-bold mb-2">Product Description:</h1>
        <p className="text-black">
          {isGameItem(product) ? product.game.description : product.name}
        </p>
        <p className="mt-2 font-bold text-black">
          {isGameItem(product) ? product.game.Price : product.Price}
        </p>
        <div>
          {isGameItem(product) ? (
            <button
              className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[300px] mt-4 cursor-pointer 
                    transition-all duration-200 hover:scale-105 hover:bg-gray-400"
            >
              Add To Basket
              <FaArrowRight />
            </button>
          ) : (
            <div>
              <button
                className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[300px] mt-4 cursor-pointer 
                    transition-all duration-200 hover:scale-105 hover:bg-gray-400"
              >
                {product.isBacklog
                  ? "Add to basket as Back-Order"
                  : "Add to Basket"}
                <FaArrowRight />
              </button>
              <p className="font-semibold text-[12px] mt-2 text-gray-400">
                *If a product is purchased as Backorder this will take longer to
                ship and deliver*
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
