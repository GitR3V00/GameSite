import React from "react";
import { Console, consoles } from "@/app/consoles/consoleArrays";
import { Game, gameArray } from "@/app/games/GameArrays";
import Image from "next/image";

export type Product = Console | Game;

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4 text-black">{product.name}</h1>
        <Image
          src={product.img}
          alt={product.name}
          className="w-32 h-32 object-contain mx-auto mb-4"
          width={200}
          height={200}
        />
        <p>{product.description}</p>
        <p className="mt-2 font-bold text-black">{product.Price}</p>
      </div>
    </div>
  );
};

export default Modal;
