import React, { useState } from 'react'
import {BsCart3} from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import IDLaceCart from '../components/IDLaceCart';
import ComingSoon from '../components/ComingSoon';

// import required modules
import { Pagination } from "swiper";

export const UserIDLaceCart = () => {

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

  
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>
    <div className='md:w-96 md:mr-5'>
    <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >

    <SwiperSlide>
        <IDLaceCart/>  
    </SwiperSlide>

    <SwiperSlide>
        <ComingSoon/>  
    </SwiperSlide>

          </Swiper>
              
          </div>
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>RTU ID LACE</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATIONS:</h1>
          <button className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>RTU ID LACE</button>
          <button  disabled className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic cursor-not-allowed focus:border-orange-500'>CEAT</button>
          <button  disabled className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic cursor-not-allowed focus:border-orange-500'>CBET</button>
          <button disabled className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic cursor-not-allowed focus:border-orange-500'>COED</button>
          <button  disabled className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 cursor-not-allowed italic focus:border-orange-500'>CAS</button>
          <button  disabled  className='border p-1 w-32 text-sm font-semibold hover:border-orange-500 cursor-not-allowed italic focus:border-orange-500'>IHK</button>
         
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
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU ID Laces from RTU Apparel are high-quality and durable lanyards designed to hold your identification card securely and stylishly. 
        Each ID lace is specific to a particular department, with options available for CEA, CBET, College of Education, College of Arts and Sciences,
        and the Institute of Human Kinetics.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Made from high-quality nylon material that is strong and durable</li>
        <li>Lightweight and comfortable to wear around your neck all day</li>
        <li>Comes in a variety of colors, allowing you to choose the perfect one to match your style</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Features a metal lobster claw hook that securely attaches your ID card to the lanyard</li>
        <li>Comes with a safety breakaway feature that snaps apart if the lanyard gets caught or tangled, preventing injury</li>
        <li>Includes a plastic badge holder that keeps your ID card safe from wear and tear, as well as any spills or splashes that may occur throughout the day</li>
        <li>Printed with the RTU logo and the name of your specific department, showing your pride and affiliation with your school and department</li>
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

export default UserIDLaceCart



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