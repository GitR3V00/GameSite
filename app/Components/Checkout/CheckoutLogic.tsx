
import React  from 'react'
import { BasketItem} from '../Basket/BasketUtils'
import CheckoutForms from './CheckoutForms';

interface CheckoutProps {
    basketTotal: string,
    checkoutItems:BasketItem[];
}

const CheckoutLogic:React.FC<CheckoutProps> = ({basketTotal,checkoutItems}) => {

  return (
        <div className="mt-32 px-4">
      <div className="border-b max-w-screen-xl mx-auto mb-10">
        <h1 className="text-black font-bold text-4xl"> Checkout</h1>
      </div>
      <CheckoutForms />

    
        <div className='text-black font-medium ml-[1500px]'><h1>Total: £{basketTotal}</h1></div>
    </div>
  )
}

export default CheckoutLogic
