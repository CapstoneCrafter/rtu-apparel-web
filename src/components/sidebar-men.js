//MEN SECTION --NAVBAR

import React from 'react'
import { Link } from 'react-router-dom'

import MenWomenShirt from './women-men'
import MenWomenPants from './men-women'

export const SidebarMen = () => {
  return (
    <div className='max-w-7xl mx-auto mb-52'>
      <div className='mx-5 my-5'>
       
          <h1 className='text-5xl font-bold'>Men</h1>
          <p className='text-justify text-md text-gray-500'>
          Browse our extensive collection of RTU Apparel for Men, featuring high-quality, 
          stylish clothing that will keep you looking sharp and feeling comfortable.
          </p>   

      <div className='grid grid-cols-1 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-5'>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <MenWomenShirt/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold'>P.E T-shirt</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <MenWomenPants/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold'>P.E Pants</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

       
        </div>

  
      </div>
    </div>
  )
}

export default SidebarMen
