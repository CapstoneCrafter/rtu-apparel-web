import React, { useState } from 'react'
import {BsCart3} from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PatchBB from '../components/PatchBB';
import PatchBW from '../components/PatchBW';
import PatchWB from '../components/PatchWB';
import PatchWBL from '../components/PatchWBL';

// import required modules
import { Pagination } from "swiper";

export const UserPatchCart = () => {

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
  
  const handleBlacknBlue = () =>{
    setImageSlide(0)
  }

  const handleBluenWhite = () => {
    setImageSlide(1)
  }

  const handleWhitenBlack = () => {
    setImageSlide(2)
  }

  const handleWhitenBlue = () => {
    setImageSlide(3)
  }

  
  
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>
    <div className='md:w-96 md:mr-5'>
    <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              {imageSlide === 0 && <SwiperSlide><PatchBB/></SwiperSlide>}
              {imageSlide === 1 && <SwiperSlide><PatchBW/></SwiperSlide>}
              {imageSlide === 2 && <SwiperSlide><PatchWB/></SwiperSlide>}
              {imageSlide === 3 && <SwiperSlide><PatchWBL/></SwiperSlide>}

          </Swiper>
              
          </div>
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>RTU PATCH</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center flex-wrap'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATIONS:</h1>

         <div className='p-1'>
          <button onClick={handleBlacknBlue} className='border p-1 w-32 mr-2 text-sm mb-1 font-semibold hover:border-orange-500 italic focus:border-orange-500'>BLACK & BLUE</button>
          <button onClick={handleBluenWhite}  className='border p-1 w-32 text-sm font-semibold mr-1 hover:border-orange-500 italic focus:border-orange-500'>BLUE & WHITE</button>
          <button onClick={handleWhitenBlack} className='border p-1 w-32 mr-2 text-sm font-semibold  hover:border-orange-500 italic focus:border-orange-500'>WHITE & BLACK</button>
          <button onClick={handleWhitenBlue}  className='border p-1 w-32 text-sm font-semibold  hover:border-orange-500 italic focus:border-orange-500'>WHITE & BLUE</button>
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
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU patch is an embroidered patch that is specially designed to be affixed onto RTU Uniforms. 
        The patch features the RTU logo, adding a touch of personalization and professionalism to the uniform. </p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>High-quality embroidery thread for durability and longevity</li>
        <li>Twill fabric backing for added strength and structure</li>
        <li>Heat-seal adhesive backing for easy application</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Vibrant and bold colors to match the RTU branding</li>
        <li>High-quality stitching for a professional finish</li>
        <li>Easy to apply using a heat-seal adhesive backing</li>
        <li>Can be used on a variety of RTU Apparel such as jackets, hats, and backpacks</li>
        <li>Adds a personalized touch to RTU Apparel, making it stand out from the crowd</li>
        </ul>

        <div className='border-b pb-2'>
        <h1 className='text-lg font-semibold text-indigo-600'>CARE INSTRUCTIONS:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4 '>
        <li>Machine washable for easy cleaning</li>
        <li>Tumble dry low or hang dry to avoid shrinking or damaging the fabric</li>
        <li>Do not bleach or iron the print to ensure it lasts for a long time</li>
        </ul>
        </div>

       </div>
    </div>
    </div>
  )
}

export default UserPatchCart



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