import React, { useState } from 'react'
import { DiVim } from 'react-icons/di';

interface ContactModalProps {
    onClose: ()=> void
}

const ContactModal: React.FC<ContactModalProps> = ({
  onClose,
})  => {

    const [submitted, setSubmitted] = useState(false);


  return (
     <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[660px] relative">

         <button
          className="absolute top-2 right-2 text-xl font-bold text-black"
          onClick={() => {setSubmitted(false); onClose(); }}
        >
          &times;
        </button>
         <h1 className='text-black font-bold mb-4'>Contact Us</h1>
         <div>
            {submitted ? (<div className='bg-green-200 border-1 border-green-800 p-2 rounded-lg'> <h1 className='text-green-800'> Thank you! We shall be in touch regarding this shortly! </h1></div>)
            : ( <form onSubmit={() => setSubmitted(true)}>
                <div className='rounded-lg border-1 border-black mb-3'>
                <input type="text" placeholder='Enter your Email address...' className='border-0 font-medium p-2 w-full text-black' />
                </div>
                <div className='rounded-lg border-1 border-black mb-6'>
                    <input type="text" placeholder='Please describe the Issue/Question you are having...' className='border-0 font-medium p-2 w-full text-start text-black'/>
                </div>

                <button type='submit' className='bg-gray-500 p-2 rounded-lg transition-all duration-200 hover:bg-gray-300 hover:scale-105'>
                    Submit Enquiry
                </button>
            </form>) }
           
         </div>
      </div>
    </div>
  )
}

export default ContactModal
