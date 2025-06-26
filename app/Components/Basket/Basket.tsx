import { WishlistItem } from "@/app/wishlist/page";
import { Product } from "../Product/Products";

export type BasketItem = WishlistItem | Product;

const Basket = () => {
  return <div className="w-[100px] h-[500px] bg-white"></div>;
};

export default Basket;
