import React from "react";
import ProductSwiper from "./ProductSwiper";
import { FaArrowRight } from "react-icons/fa";

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
          <button className="flex items-center justify-center gap-2 text-white bg-gray-600 rounded-lg p-2 w-[300px] mt-4 cursor-pointer">
            Pre-Order Now <FaArrowRight />
          </button>
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
