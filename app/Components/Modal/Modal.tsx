import React, { useState } from "react";
import { Console } from "@/app/consoles/consoleArrays";
import { Game } from "@/app/games/GameArrays";
import Image from "next/image";

export type Product = Console | Game;

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[660px] relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-black"
          onClick={onClose}
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold mb-4 text-black">{product.name}</h1>
        <div className="flex gap-2">
          <div className="flex-row">
            {product.images.slice(0, 5).map((src, index) => (
              <div
                key={index}
                className="w-20 h-20 mb-4"
                onClick={() => setSelectedImg(index)}
              >
                <Image
                  src={src}
                  width={400}
                  height={450}
                  alt={`${product.name} image ${index + 1}`}
                  className={`${
                    index === selectedImg ? "border-2 border-black" : ""
                  } h-22 w-22 rounded-lg `}
                />
              </div>
            ))}
          </div>
          <div className="bg-gray-500 w-[520px] h-[470px] border-b mb-10">
            <Image
              src={product.images[selectedImg]}
              alt={product.name}
              width={500}
              height={430}
              className="h-[470px] w-[520px] border"
            />
          </div>
        </div>
        <h1 className="text-black font-bold mb-2">Product Description:</h1>
        <p className="text-black">{product.description}</p>
        <p className="mt-2 font-bold text-black">{product.Price}</p>
      </div>
    </div>
  );
};

export default Modal;
