import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HomeTradeIn = () => {
  return (
    <div className="bg-red-600 h-[300px] w-full ">
      <div className="bg-black/40 h-full flex items-center justify-center text-center">
        <div className="m-20 text-center">
          {/*Text and Button */}
          <h1 className="font-bold text-5xl">Want some quick cash?</h1>
          <h2>Trade in your old games for money!</h2>
          <div className="flex justify-center">
            <button className="flex items-center justify-center gap-2 text-white bg-gray-600 rounded-lg p-2 w-[300px] mt-4 cursor-pointer">
              Trade in here <FaArrowRight />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeTradeIn;
