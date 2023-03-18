import React, { useState } from 'react'
import {BsCart3} from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import CapWhite from '../components/CapWhite'
import CapBlack from '../components/CapBlack'
import CapBlue from '../components/CapBlue'

// import required modules
import { Pagination } from "swiper";

export const UserCapCart = () => {

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
  
  const handleWhiteCap = () =>{
    setImageSlide(0)
  }

  const handleBlackCap = () => {
    setImageSlide(1)
  }

  const handleBlueCap = () => {
    setImageSlide(2)
  }


  
  
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>

          <div className='md:mt-5 md:w-1080 md:mr-5 lg:w-c'>
            {imageSlide === 0 && <CapWhite/>}
            {imageSlide === 1 && <CapBlack/>}
            {imageSlide === 2 && <CapBlue/>}
       </div>
       <div>
        <h1 className='font-bold text-2xl mt-5'>RTU CAP</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center flex-wrap'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>COLORS:</h1>

         <div className='p-1'>
          <button onClick={handleWhiteCap} className='border p-1 w-32 mr-2 text-sm mb-1 font-semibold hover:border-orange-500 italic focus:border-orange-500'>WHITE</button>
          <button onClick={handleBlackCap}  className='border p-1 w-32 text-sm font-semibold mr-1 hover:border-orange-500 italic focus:border-orange-500'>BLACK</button>
          <button onClick={handleBlueCap} className='border p-1 w-32 mr-2 text-sm font-semibold  hover:border-orange-500 italic focus:border-orange-500'>BLUE</button>
         
          </div>
      
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
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU Cap is a stylish and comfortable headwear accessory designed for Rizal Technological University students, 
        faculty, and alumni. It features the RTU logo and colors to represent school pride and identity. </p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>100% cotton for the body of the cap</li>
        <li>Adjustable strap with metal buckle for a comfortable and customizable fit</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>High-quality embroidery of the RTU logo on the front of the cap for a stylish and recognizable look.</li>
        <li>Available in multiple colors to match the RTU color scheme.</li>
        <li>Durable 100% cotton material provides comfort and breathability for all-day wear.</li>
        <li>Six-panel construction with embroidered eyelets provides ventilation to keep your head cool.</li>
        <li>Adjustable strap with metal buckle allows for a customizable fit to accommodate different head sizes.</li>
        <li>Perfect for representing RTU pride on campus or at events.</li>
        </ul>

        <div className='border-b pb-2'>
        <h1 className='text-lg font-semibold text-indigo-600'>CARE INSTRUCTIONS:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4 '>
        <li>Machine washable for easy cleaning</li>
        <li>Tumble dry low or hang dry to avoid shrinking or damaging the fabric</li>
        <li>Do not bleach or iron the print to ensure it lasts for a long time</li>
        </ul>
        </div>

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

export default UserCapCart



// import React from 'react'
// import UserUniformCartSlider from './UserUniformCartSlider'
// import {BsCartDash} from 'react-icons/bs'

// export const UserUniformCart = () => {

  
//   return (
//     <div className='max-w-7xl mx-auto'>
//     <div className='mx-5 md:flex lg:flex lg:items-center'>
//        <UserUniformCartSlider/>
      
//        <div>
        
//         <h1 className='font-bold text-2xl mt-5'>P.E SHIRT</h1>
//         <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

//         <div className='border-b pb-2'>
//         <div className='flex items-center'>
//           <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATION:</h1>
//           <button className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic'>T-SHIRT</button>
//           <button  className='border p-1 w-32 text-sm font-semibold hover:border-orange-500 italic'>PACKAGE</button>
         
//         </div>

//         <div>
//           <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>QUANTITY:</h1>
//         </div>
//         </div>

//         <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
//         <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU Shirt is not only stylish and comfortable but also made to last. 
//         Its high-quality cotton material, double-needle stitching,
//         and seamless collar make it an excellent addition to any wardrobe.</p>

//         <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
//         <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
//         <li>Made from 100% high-quality cotton, ensuring comfort and breathability</li>
//         <li>Pre-shrunk to minimize shrinkage after washing</li>
//         <li>Fabric weight of 6 oz/sq. yd., making it lightweight and easy to wear</li>
//         </ul>

//         <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
//         <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
//         <li>Classic fit with a seamless collar for added comfort</li>
//         <li>Double-needle stitched for added durability</li>
//         <li>Shoulder-to-shoulder taping for added strength and shape retention</li>
//         <li>Available in a variety of colors and sizes, catering to all preferences and needs</li>
//         <li>RTU logo printed on the front with vibrant, long-lasting colors</li>
//         </ul>

//         <div className='border-b pb-2'>
//         <h1 className='text-lg font-semibold text-indigo-600'>CARE INSTRUCTIONS:</h1>
//         <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4 '>
//         <li>Machine washable for easy cleaning</li>
//         <li>Tumble dry low or hang dry to avoid shrinking or damaging the fabric</li>
//         <li>Do not bleach or iron the print to ensure it lasts for a long time</li>
//         </ul>
//         </div>

//         <div className='flex justify-end mt-5'>
//         <div className='flex items-center mr-2 bg-yellow-500  rounded-md p-2 w-36 justify-center'>
//           <BsCartDash size={20} className='mr-2 text-white'/>
//           <button className='text-white'>Add to Cart</button>
//         </div>

//         <div>
//           <button className='bg-orange-500 p-2 w-32 text-white rounded-md'>Buy now</button>
//         </div>

//        </div>
//        </div>

   

//     </div>

//     </div>
//   )
// }

// export default UserUniformCart