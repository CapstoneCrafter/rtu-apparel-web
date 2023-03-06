//ACCESSORIES SECTION --NAVBAR

import React from 'react'
import { Link } from 'react-router-dom'

import AccountancyCollection from '../components/collection-img-acc'
import ArkiCollection from './collection-img-arki'
import CapCollection from './collection-img-cap'
import EngCollection from './collection-img-eng'
import HandkCollection from './collection-img-handk'
import ToteCollection from './collection-img-tote'
import TumblerCollection from './collection-img-tumbler'
import PatchCollection from './collection-img-patch'
import LaceCollection from './collection-img-lace'


export const SidebarAcs = () => {
  return (
    <div className='max-w-7xl mx-auto mb-52'>
      <div className='mx-5 my-5'>
       
          <h1 className='text-5xl font-bold'>Accessories</h1>
          <p className='text-justify text-md text-gray-500'>
          Get ready to accessorize in style with our selection of must-have accessories at RTU, 
          featuing trendy ID laces, chic caps, stylish mugs, practical handkerchiefs, spacious totes,
          durable umbrellas, and handy tumblers to keep you looking and feeling your best.
          </p>   

      <div className='grid grid-cols-1 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-5'>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <AccountancyCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >Accountancy Mug</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

          <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <ArkiCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >Architecture Mug</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <EngCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >Engineering Mug</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <CapCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >Cap</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <HandkCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >Handkerchief</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <ToteCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >Tote bag</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>
        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <TumblerCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >Tumbler</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <PatchCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >University patch</h1>
            <h1 className='text-orange-500'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto border-2 border-gray-200 '>
        <div>
        <LaceCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='font-bold' >ID lace</h1>
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

export default SidebarAcs

