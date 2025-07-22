'use client'
import React, { useState } from 'react';
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaPaypal } from 'react-icons/fa';
import { CheckoutProps } from './CheckoutLogic';


export type Courier = "Royal Mail" | "Evri";

export type DeliveryOption = {
  id:number;
  courier:Courier;
  service:string;
  price:string;
  estimatedDelivery:string;
}

const CheckoutForms: React.FC<CheckoutProps> = ({basketTotal}) => {

const [selectedOption, setSelectedOption] = useState<number>(0);
const [selectedPaymentOption, setSelectedPaymentOption] = useState<number>(0);

const [guestFullName, setGuestFullName] = useState<string>("");
const [guestAddressLine, setGuestAddressLine] = useState<string>("");
const [guestCity, setGuestCity] = useState<string>("");
const [guestPostcode, setGuestPostcode] = useState<string>("");

const [cardNumber,setCardNumber] = useState<string>("");
const [cardName, setCardName] = useState<string>("");
const [sortCode, setSortCode] = useState<string>("");
const [securityCode, setSecurityCode] = useState<string>("");
const [error, setError] = useState<boolean>(false);

const deliveryOptions:DeliveryOption[] = [
  {id:1,courier:"Royal Mail",service:"Standard Delivery", price:"3.49", estimatedDelivery:"3-4 Days"},
  {id:2,courier:"Royal Mail",service:"Tracked 48", price:"5.49", estimatedDelivery:"1-2 Days"},
  {id:3,courier:"Evri",service:"Standard Delivery", price:"3.49", estimatedDelivery:"3-4 Days"},
] 

const paymentOptions = [
  {id:1, merchant:"Paypal", logo: <FaPaypal />},
  {id:2, merchant:"Mastercard", logo: <FaCcMastercard />},
  {id:3, merchant:"Amex", logo: <FaCcAmex />},
]

function guestDetailsCheck() {
  if(!guestFullName || !guestAddressLine || !guestCity || !guestPostcode)
  {
    setError(true);
  }
 else setError(false);
}

function cardDetailsCheck() {
  if(!cardName || !cardNumber || !securityCode || !sortCode)
  {
    setError(true);
  }
 else setError(false);
}


  return (
    <div className="max-w-xl mx-auto mt-10">
        <h1 className='text-black font-bold mb-4 text-2xl'>Personal Details</h1>
      <form>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Full Name:</label>
          <input
          onChange={(e) => setGuestFullName(e.target.value)}
          type="text" className={`border flex-1 p-1 text-black  ${error ? "bg-red-300 border-red-800": "border-black" }`}/> 
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Address Line 1:</label>
          <input
          onChange={(e) => setGuestAddressLine(e.target.value)}
          type="text" className={`border flex-1 p-1 text-black  ${error ? "bg-red-300 border-red-800": "border-black" }`}/>
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Address Line 2:</label>
          <input type="text" className={`border flex-1 p-1 text-black  ${error ? "bg-red-300 border-red-800": "border-black" }`}/> 
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">City:</label>
          <input 
          onChange={(e) => setGuestCity(e.target.value)}
          type="text" className={`border flex-1 p-1 text-black  ${error ? "bg-red-300 border-red-800": "border-black" }`}/> 
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">PostCode:</label>
          <input type="text" 
          onChange={(e) => setGuestPostcode(e.target.value)}
          className={`border flex-1 p-1 text-black  ${error ? "bg-red-300 border-red-800": "border-black" }`}/>
        </div>
      </form>
        
            <h1 className='text-black font-bold mb-4 text-2xl mt-10'>Delivery Options</h1>
      <div>
          <div className='border-b mb-10'>
           {deliveryOptions.map((option)=> <div 
           onClick={()=>setSelectedOption(option.id)}
           key={option.id} className={`border-1 border-black rounded-lg w-[580px] h-[100px] p-2 mb-4
            ${selectedOption === option.id ? "border-green-800 bg-green-200":"transition-all duration-150 hover:bg-gray-200"}`}>
            <div>
              <div className='flex gap-2'>
              <h1 className='text-black'>{option.courier}</h1>
              <h1 className='text-black'>{option.service}</h1>
              </div>
              <div>
               <p className='text-black'>{option.price}</p>
               <p className='font-medium text-gray-500'>{option.estimatedDelivery}</p>
               </div>
            </div>
           </div>)}

        </div>

        <div>
          {selectedOption ? <div>
            <h1 className='text-black font-bold mb-4 text-2xl flex items-center'>Payment Options: <FaCcVisa className='w-12 h-8' /></h1>
      <form>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Card Holder Name:</label>
          <input
          onChange={(e) => setCardName(e.target.value)}
          type="text" className={`border  flex-1 p-1 text-black ${error ? "bg-red-300 border-red-800": "border-black" }`} />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Card Number:</label>
          <input
          onChange={(e) => setCardNumber(e.target.value)}
          type="text" className={`border  flex-1 p-1 text-black ${error ? "bg-red-300 border-red-800": "border-black" }`}/>
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Sort Code:</label>
          <input 
          onChange={(e) => setSortCode(e.target.value)}
          type="text" className={`border  flex-1 p-1 w-[75px] text-black ${error ? "bg-red-300 border-red-800": "border-black" }`} />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Security Code:</label>
          <input
          onChange={(e) => setSecurityCode(e.target.value)}
          type="text" className={`border  flex-1 p-1 w-[50px] text-black ${error ? "bg-red-300 border-red-800": "border-black" }`} />
        </div>
      </form>

      <button
      onClick={()=>{
          guestDetailsCheck();
          cardDetailsCheck();
         }}
      className="flex items-center text-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-full my-2 cursor-pointer 
              transition-all duration-200 hover:scale-105 hover:bg-gray-400">Pay by card</button>
          </div> : <></>}
          
        </div>

        

        <div>
          {selectedOption ? 
            <div className='border-b mb-10'>
              <h1 className='text-black font-bold mb-4 text-2xl mt-10'>Other Options:</h1>
              <div className='flex gap-2'>
           {paymentOptions.map((merchant)=> <div 
           onClick={()=>setSelectedPaymentOption(merchant.id)}
           key={merchant.id} className={`border-1 border-black rounded-lg w-[200px] h-[50px] p-2 mb-4
            ${selectedPaymentOption === merchant.id ? "border-green-800 bg-green-200":"transition-all duration-150 hover:bg-gray-200"}`}>
            <div>
              <div className='flex gap-2 items-center'>
              <h1 className='text-black'>{merchant.merchant}</h1>
              <h1 className='text-black'>{merchant.logo}</h1>
              </div>
            </div>
            
           </div>)}
         </div>
         {selectedPaymentOption ? <div>
         <button
         onClick={()=>{
          guestDetailsCheck();
         }}
         className="flex items-center text-center justify-center gap-2 text-white bg-gray-500 rounded-lg p-2 w-full my-2 cursor-pointer 
              transition-all duration-200 hover:scale-105 hover:bg-gray-400">Procceed to Merchant</button>

         </div>: <></>}
         

               <div className='text-black font-medium  gap-4 items-center'>
            
          <h1 className='font-bold text-black text-2xl'>Total: £{basketTotal}</h1>
       
        </div>

        </div> :<></>}
         
         
        </div>

      </div>
    </div>
  );
};

export default CheckoutForms;