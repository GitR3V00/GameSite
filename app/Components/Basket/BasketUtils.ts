'use client'
import { WishlistItem } from "@/app/wishlist/page";
import { GameWishlistItem } from "@/app/games/[game]/clientgame";
import { Console } from "@/app/consoles/consoleArrays";


export type BasketItem = WishlistItem & {
  quantity: number;
};

export const quantity:number[] = [1,2,3,4,5,6,7,8,9];

const STORAGE_KEY = "Basket";


export function handlePrice(product: BasketItem): string {
  const priceStr = isGameItem(product) ? product.game.Price : product.Price;

  const cleaned = priceStr?.replace(/[^\d.]/g, "") ?? "0";

  const price = parseFloat(cleaned);
  const quantity = Number(product.quantity);

  if (isNaN(price) || isNaN(quantity)) return "0.00";

  return (price * quantity).toFixed(2);
}

export function getStoredBasket(): BasketItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as BasketItem[]) : [];
  } catch (err) {
    console.error("Failed to read basket:", err);
    return [];
  }
}

export function getBasketItemKey(item: BasketItem): string {
  if (isGameItem(item)) {
    const platformPart = item.selectedPlatform ? `-${item.selectedPlatform}` : "";
    return `game-${item.game.id}${platformPart}`;
  } else if (isConsoleItem(item)) {
    return `console-${item.id}`;
  }
  return "unknown";
}


export function addToBasket<T extends BasketItem>(product: T) {
  const current = getStoredBasket();

  const productKey = getBasketItemKey(product);

  const existingIndex = current.findIndex(item => getBasketItemKey(item) === productKey);

  let updated;

  if (existingIndex !== -1) {
    updated = [...current];
    const existingItem = updated[existingIndex];
    updated[existingIndex] = {
      ...existingItem,
      quantity: (existingItem.quantity || 1) + 1,
    };
  } else {
    updated = [...current, { ...product, quantity: product.quantity || 1 }];
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function isGameItem(item: WishlistItem): item is GameWishlistItem {
  return "game" in item;
}

export function isConsoleItem(item: WishlistItem): item is Console {
  return "spec" in item;
}


export const url = (product:BasketItem) => isGameItem(product)
    ? `/games/${product.game.slug}`
    : `/consoles/${product.slug}`;

   
        
