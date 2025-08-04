
import React  from 'react'
import CheckoutForms from './CheckoutForms';

export interface CheckoutProps {
    basketTotal: string,
}

const CheckoutLogic:React.FC<CheckoutProps> = ({basketTotal}) => {


  return (
        <div className="mt-32 px-4">
      <div className="border-b max-w-screen-xl mx-auto mb-10">
        <h1 className="text-black font-bold text-4xl"> Checkout</h1>
      </div>
      <CheckoutForms basketTotal={basketTotal}/>
       
    
       
    </div>
  )
}

export default CheckoutLogic
