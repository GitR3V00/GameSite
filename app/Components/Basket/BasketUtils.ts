import { WishlistItem } from "@/app/wishlist/page";
import { GameWishlistItem } from "@/app/games/[game]/clientgame";
import { Console } from "@/app/consoles/consoleArrays";


export type BasketItem = WishlistItem 

const STORAGE_KEY = "Basket";

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
    return `game-${item.game.id}`;
  } else if (isConsoleItem(item)) {
    return `console-${item.id}`;
  }
  return "unknown"; 
}

export function addToBasket<T extends BasketItem>(product: T) {
  const current = getStoredBasket();
  const updated = [...current, product];
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

   
        
