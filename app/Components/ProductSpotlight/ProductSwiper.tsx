"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

// Step 1: Define a type for a single image object
type ProductImg = {
  img: string;
};

// Step 2: Define the prop type for the component
type ProductSwiperProps = {
  productImgs: ProductImg[];
};

// Step 3: Apply the type and map the images into slides
const ProductSwiper: React.FC<ProductSwiperProps> = ({ productImgs }) => {
  return (
    <div className="mr-15">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[800px] md:h-[500px] "
      >
        {productImgs.map((image, index) => (
          <SwiperSlide key={index} className="bg-white rounded-3xl block">
            <div className="my-10">
              <div className="flex items-center space-x-4 relative w-[800px] h-[500px]">
                <Image
                  src={image.img}
                  alt=""
                  fill
                  className="rounded-lg border-2 border-gray-600"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
