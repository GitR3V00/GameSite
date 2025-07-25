import React from "react";
import ProductSwiper from "./ProductSwiper";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ProductSpotlight = () => {
  type ProdInfoProps = {
    name: string;
    price: string;
    desc: string;
  };

  const productInfo: ProdInfoProps[] = [
    {
      name: "Nintendo Switch 2",
      price: "£499.99",
      desc: "Emerse yourself in Nintendo's latest console release!",
    },
  ];

  const productImgs = [
    { img: "/SwitchIMG1.jpg" },
    { img: "/SwitchIMG2.jpg" },
    { img: "/SwitchIMG3.png" },
    { img: "/SwitchIMG4.jpg" },
    { img: "/SwitchIMG5.jpg" },
  ];

  return (
    <div className="bg-white h-full w-full flex items-center justify-center">
      {/*Left Side - Name, Price etc*/}
      <div className=" w-[50%]  flex-col my-5 text-black text-center">
        <h1 className="font-bold text-5xl">{productInfo[0].name}</h1>
        <h2 className="font-semibold text-2xl">{productInfo[0].price}</h2>
        <h2 className="text-2xl">{productInfo[0].desc}</h2>

        <div className="flex justify-center">
          <Link href={"consoles/nintendo-switch-2"}>
            <button
              className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[300px] mt-4 cursor-pointer
          transition-all duration-200 hover:scale-110 hover:bg-gray-400"
            >
              Purchase Now! <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>

      {/*Product Swiper -> Right Side*/}
      <div className=" flex-col w-[1200px] mt-3">
        <ProductSwiper productImgs={productImgs} />
      </div>
    </div>
  );
};

export default ProductSpotlight;
