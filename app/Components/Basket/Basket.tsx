"use client";
import { useEffect, useMemo, useState } from "react";
import { BasketItem, getStoredBasket, quantity, url } from "./BasketUtils";
import { isGameItem } from "./BasketUtils";
import Image from "next/image";
import Link from "next/link";
import { handlePrice } from "./BasketUtils";

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

  const basketTotal = useMemo(() => {
    const total = basket.reduce((sum, item) => {
      const itemTotal = parseFloat(handlePrice(item));
      return sum + (isNaN(itemTotal) ? 0 : itemTotal);
    }, 0);
    return total.toFixed(2);
  }, [basket]);

  return (
    <div className="mt-[140px]">
      <div className="mx-[500px] border-b-1 mb-4">
        <h1 className="text-5xl font-semibold text-black mt-2">Basket</h1>
      </div>
      <div>
        <h1 className="text-center text-black text-4xl font-bold mt-20">
          {basket.length === 0 ? "Your Basket is Empty!" : ""}
        </h1>
      </div>

      {basket.map((product) => {
        if (isGameItem(product)) {
          return (
            <div key={product.game.id} className="mx-[500px]">
              <div className="mb-4">
                <Link href={url(product)}>
                  <h1 className="text-black text-2xl cursor-pointer">
                    {product.game.name}
                  </h1>
                </Link>
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

                      <div className="w-[200px] mt-6">
                        <h1 className="font-semibold text-black bg-gray-300/80 p-2 rounded-lg text-[14px]">
                          <form>
                            <select
                              id={`platform-select-${product.game.id}`}
                              name="platform"
                              value={product.selectedPlatform || ""}
                              onChange={(e) => {
                                const selected = e.target.value;

                                const updatedBasket = basket.map((item) => {
                                  if (
                                    isGameItem(item) &&
                                    item.game.id === product.game.id
                                  ) {
                                    return {
                                      ...item,
                                      selectedPlatform: selected,
                                    };
                                  }
                                  return item;
                                });

                                setBasket(updatedBasket);
                                localStorage.setItem(
                                  "Basket",
                                  JSON.stringify(updatedBasket)
                                );
                              }}
                              className="w-full p-2 rounded"
                            >
                              <option value="">Select Platform</option>
                              {product.game.platform.map((platform, index) => (
                                <option key={index} value={platform}>
                                  {platform}
                                </option>
                              ))}
                            </select>
                          </form>
                        </h1>
                        <h1 className="font-semibold text-black bg-gray-300/80 p-2 rounded-lg text-[14px] mt-2">
                          <form>
                            <select
                              id={`quantity-select-${product.game.id}`}
                              name="quantity"
                              value={
                                product.quantity === undefined
                                  ? ""
                                  : product.quantity
                              }
                              onChange={(e) => {
                                const selectedQty = Number(e.target.value);

                                const updatedBasket = basket.map((item) => {
                                  if (
                                    isGameItem(item) &&
                                    item.game.id === product.game.id
                                  ) {
                                    return {
                                      ...item,
                                      quantity: selectedQty,
                                    };
                                  }
                                  return item;
                                });

                                setBasket(updatedBasket);
                                localStorage.setItem(
                                  "Basket",
                                  JSON.stringify(updatedBasket)
                                );
                              }}
                              className="w-full p-2 rounded mt-2"
                            >
                              <option value="">Quantity</option>
                              {quantity.map((qty) => (
                                <option key={qty} value={qty}>
                                  {qty}
                                </option>
                              ))}
                            </select>
                          </form>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleRemoveFromBasket(product)}
                      className="flex items-center justify-center gap-2 text-white bg-red-500 rounded-lg p-2 h-10 w-[300px] mt-4 cursor-pointer 
                    transition-all duration-200 hover:scale-105 hover:bg-red-400"
                    >
                      Remove from Basket
                    </button>
                  </div>
                  <div>
                    <p className="text-black mt-40 ml-80">
                      {product.quantity === 1
                        ? product.game.Price
                        : `£${handlePrice(product)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={product.id} className="mx-[500px]">
              <div className="mb-4">
                <Link href={url(product)}>
                  <h1 className="text-black text-2xl">{product.name}</h1>
                </Link>
                <div className="flex gap-3 border-b-2 my-2">
                  <Image
                    src={product.img}
                    width={200}
                    height={250}
                    alt={product.name}
                    className="w-[150px] h-[200px] mb-2 shadow-2xl border-1 border-black"
                  />
                  <div className="flex gap-3">
                    <div className="w-[600px]">
                      <p className="text-black">{product.description}</p>

                      <div className="w-[200px] mt-6">
                        <h1 className="font-semibold text-black bg-gray-300/80 p-2 rounded-lg text-[14px] mt-2">
                          <form>
                            <select
                              id={`quantity-select-${product.id}`}
                              name="quantity"
                              value={
                                product.quantity === undefined
                                  ? ""
                                  : product.quantity
                              }
                              onChange={(e) => {
                                const selectedQty = Number(e.target.value);

                                const updatedBasket = basket.map((item) => {
                                  if (
                                    !isGameItem(item) &&
                                    item.id === product.id
                                  ) {
                                    return {
                                      ...item,
                                      quantity: selectedQty,
                                    };
                                  }
                                  return item;
                                });

                                setBasket(updatedBasket);
                                localStorage.setItem(
                                  "Basket",
                                  JSON.stringify(updatedBasket)
                                );
                              }}
                              className="w-full p-2 rounded"
                            >
                              <option value="">Quantity</option>
                              {quantity.map((qty) => (
                                <option key={qty} value={qty}>
                                  {qty}
                                </option>
                              ))}
                            </select>
                          </form>
                        </h1>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemoveFromBasket(product)}
                        className="flex items-center justify-center gap-2 text-white bg-red-500 rounded-lg p-2 h-10 w-[300px] mt-4 cursor-pointer 
                transition-all duration-200 hover:scale-105 hover:bg-red-400"
                      >
                        Remove from Basket
                      </button>
                      {product.isBacklog && (
                        <h1 className="font-semibold text-[12px] mt-2 text-gray-400">
                          **Console is part of backorder** increased dispatch
                          time.
                        </h1>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-black mt-40 ml-80">
                      {product.quantity === 1
                        ? product.Price
                        : `£${handlePrice(product)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className="w-full">
        <div>
          <h1 className="text-black text-2xl text-right mr-[586px] mt-3">
            Total:£{basketTotal}
          </h1>
        </div>
        <div className="my-3 ml-[1500px]">
        <Link href={'/checkout'}>
        <button
                     
                      className="flex items-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-[300px] mt-4 cursor-pointer 
                                transition-all duration-200 hover:scale-105 hover:bg-gray-400"
                    >
                     Checkout 
                    </button>
                    </Link>
                    </div>
      </div>
    </div>
  );
};

export default BasketComp;
