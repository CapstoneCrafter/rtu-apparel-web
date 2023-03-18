import React, { useState } from 'react'
import {BsCart3} from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PEPantsFront from '../components/PEPantsFront'
import PEPantsBack from '../components/PEPantsBack';
import PEPantsPackage from '../components/PEPantsPackage';
import RTUTumbler from '../components/RTUTumbler';

// import required modules
import { Pagination } from "swiper";

export const UserTumblerCart = () => {

  const [imageSlide, setImageSlide] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const decrementQuantity = () => {
      //If quantity is greater than 5, then, decrement the quantity til it will equal to 1. If quantity is === 1, stop.
      if(quantity > 1){
            setQuantity(quantity - 1)
      }
  }

  const incrementQuantity = () => {
    //If quantity is less than 5, then, increment the quantity til it will equal to 5. If quantity is === 5, stop.
    if(quantity < 5){
      setQuantity(quantity + 1)
    }
}
  
  const handlePEFront = () =>{
    setImageSlide(0)
  }

  const handlePEPackage = () => {
    setImageSlide(1)
  }
  
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>
    <div className='md:w-96 md:mr-5'>
    <RTUTumbler/>
    </div>
       <div>
      
        
        <h1 className='font-bold text-2xl mt-5'>RTU TUMBLER</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>

        <div className='flex items-center flex-wrap mt-5 '>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>SIZES:</h1>
          <button  className='border p-1 w-32 mr-2  text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>20 OUNCE</button>
          <button  className='border p-1 w-32 text-sm mr-2 font-semibold hover:border-orange-500 italic focus:border-orange-500'>30 OUNCE</button>
          
         
        </div>

        <div className='mt-5 flex items-center'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>QUANTITY:</h1>
          
          <div className='bg-gray-100 p-1 flex '>
            <button onClick={decrementQuantity} className='w-8 font-black'>-</button> 
            <h1 className='w-8 outline-0 text-center bg-gray-100'>{quantity}</h1>
            <button onClick={incrementQuantity} className='w-8 font-black'>+</button>
          </div>
      
        </div>
        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>RTU Tumbler by RTU Apparel is a durable and high-quality tumbler designed to keep your beverages at their desired temperature for extended periods. 
        Made with top-notch materials and features.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Made from premium quality 18/8 stainless steel that is durable and resistant to rust and corrosion</li>
        <li>eatures double-wall vacuum insulation that keeps your beverages hot or cold for hours</li>
        <li>Comes with a clear lid made from BPA-free plastic that is spill-resistant and easy to clean</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Available in 20 oz and 30 oz sizes to fit your desired capacity</li>
        <li>The exterior of the tumbler is powder-coated for a smooth and stylish finish that also provides a good grip</li>
        <li>Has a sweat-free design that prevents condensation on the outside, so your hands stay dry</li>
        <li>RTU Apparel logo embroidery on the front and back pockets, giving the pants a stylish touch</li>
        <li>Fits most cup holders and is easy to carry around</li>
        <li>Ideal for use at home, in the office, or on the go</li>
        </ul>

        <div className='flex justify-end mt-5'>
        <div className='flex items-center mr-2 bg-black rounded-md p-2 w-36 justify-center'>
          <BsCart3 size={20} className='mr-2 text-white'/>
          <button className='text-white'>Add to Cart</button>
        </div>

        <div>
          <button className='bg-indigo-700 p-2 w-32 text-white rounded-md'>Buy now</button>
        </div>

       </div>
       </div>
    </div>
    </div>
  )
}

export default UserTumblerCart

