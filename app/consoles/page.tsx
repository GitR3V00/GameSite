"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import "./carouselOverrides.css";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { availableConsoles, filteredBacklogConsoles } from "./consoleArrays";
import Modal from "../Components/Modal/Modal";
import { Console } from "./consoleArrays";
import Link from "next/link";

const Consoles = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Console | null>(null);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/consoles/${slug}`);
  };

  return (
    <div className="mt-32">
      <div className="border-b mx-auto px-4 max-w-screen-xl mb-10">
        <h1 className="text-black font-bold text-4xl">In Stock Consoles...</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-screen-xl mx-auto">
        {[...availableConsoles]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((console) => (
            <div
              key={console.name}
              onClick={() => handleClick(console.slug)}
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
      {/*Modal For Back-Order Consoles*/}

      {openModal && selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => {
            setOpenModal(false);
            setSelectedProduct(null);
          }}
          onRemove={() => {}}
        />
      )}

      {/*Backlog section*/}

      <div className="mt-20 border-t pt-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-black font-bold text-3xl mb-4">Back-Order</h2>

          <div className="relative max-w-screen-xl mx-auto">
            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={true}
              ssr={true}
              slidesToSlide={1}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={7000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass="px-4 justify-center"
            >
              {filteredBacklogConsoles.map((console) => (
                <div
                  onClick={() => {
                    setSelectedProduct(console);
                    setOpenModal(true);
                  }}
                  key={console.name}
                  className="w-full max-w-[350px] mx-auto flex flex-col justify-center bg-gray-500/85 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gray-600/85"
                >
                  <div className="flex gap-4 items-center">
                    <h1 className="text-white font-medium">{console.name}</h1>
                    <Image
                      src={console.img}
                      alt={console.name}
                      width={50}
                      height={50}
                      className="w-[50px] h-[50px]"
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex justify-center">
            <Link href={"http://localhost:3000/consoles/backorder"}>
              <button className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[400px] mt-4 cursor-pointer hover:scale-105 hover:bg-gray-700/85">
                All Consoles Available for Back-Order
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consoles;
