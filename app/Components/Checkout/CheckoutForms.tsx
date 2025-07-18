import React from 'react';

const CheckoutForms = () => {
  return (
    <div className="max-w-xl mx-auto mt-10">
        <h1 className='text-black font-bold mb-4 text-2xl'>Personal Details</h1>
      <form>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Full Name:</label>
          <input type="text" className="border border-black flex-1 p-1" />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Address Line 1:</label>
          <input type="text" className="border border-black flex-1 p-1" />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">Address Line 2:</label>
          <input type="text" className="border border-black flex-1 p-1" />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">City:</label>
          <input type="text" className="border border-black flex-1 p-1" />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-black w-[200px]">PostCode:</label>
          <input type="text" className="border border-black flex-1 p-1" />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForms;