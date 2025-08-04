'use client'

import CheckoutLogic from '../Components/Checkout/CheckoutLogic'
import React, { useEffect, useMemo, useState } from 'react'
import { getStoredBasket, handlePrice, BasketItem } from '../Components/Basket/BasketUtils'

const Checkout = () => {
  const [checkoutItems, setCheckoutItems] = useState<BasketItem[]>([]);

  useEffect(() => {
    const items = getStoredBasket();
    setCheckoutItems(items);
  }, []);

  const basketTotal = useMemo(() => {
    const total = checkoutItems.reduce((sum, item) => {
      const itemTotal = parseFloat(handlePrice(item));
      return sum + (isNaN(itemTotal) ? 0 : itemTotal);
    }, 0);
    return total.toFixed(2);
  }, [checkoutItems]);

  return (
    <div>
      <CheckoutLogic checkoutItems={checkoutItems} basketTotal={basketTotal} />
    </div>
  )
}

export default Checkout