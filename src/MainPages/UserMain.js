//THIS FILE WILL SHOW IF USER LOGIN THEIR ACCOUNT

import UserCategory from '../components/user-img-cate';
import UserLace from '../components/user-img-lace'
import UserPatch from '../components/user-img-patch';
import UserUniform from '../components/user-img-uniform';
import UserPants from '../components/user-img-pants';
import UserJersey from '../components/user-img-jersey';

import React from 'react'
import { Link } from 'react-router-dom';

import PECollection from '../components/collection-img-p.e';
import TumblerCollection from '../components/collection-img-tumbler';
import LaceCollection from '../components/collection-img-lace';
import ToteCollection from '../components/collection-img-tote';
import PatchCollection from '../components/collection-img-patch';
import HandkCollection from '../components/collection-img-handk';
import AccountancyCollection from '../components/collection-img-acc';
import EngCollection from '../components/collection-img-eng';
import ArkiCollection from '../components/collection-img-arki';
import CapCollection from '../components/collection-img-cap';
import SliderComponent from '../components/useSlider';


const UserMain = () => {
  return (
    <div className='max-w-7xl mx-auto mb-52 '>

    <div className='mx-5 my-10'>

      <SliderComponent/>  
   
    <div className='font-bold text-2xl text-black'>
        <h1 className='my-10 '>Shop Our Categories</h1>
    </div>

      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-8'>

       
        <Link to='uniform'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48 '>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            UNIFORM
        </div>
        <UserUniform/>
        </div>
        </Link>

        <Link to='pants'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            PANTS
        </div>
        <UserPants/>
        </div>
        </Link>

        <Link to='jersey'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48 '>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            JERSEY
        </div>
        <UserJersey/>
        </div>
        </Link>

        <Link to='IDlace'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            ID LACE
        </div>
        <UserLace/>
        </div>
        </Link>

        <Link to='patch'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            PATCH
        </div>
        <UserPatch/>
        </div>
        </Link>

        <Link to='accessory'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48 border-2 lg:gap-11'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            ACCESSORIES
        </div>
        <UserCategory/>
        </div>
        </Link>
     
      </div>  

      <div className='mt-20'>
        <div className='font-bold mb-10 text-2xl text-black'>
            RTU Collection
        </div>

        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5'>

        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <PECollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>P.E uniform</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>


        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <TumblerCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>Tumbler</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>

            
        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <LaceCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>ID lace</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>


        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <ToteCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>Tote</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>


        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <PatchCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>Uniform patch</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>


        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <HandkCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>Handkerchief</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>


        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <AccountancyCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>Accountancy mug</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>


        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <EngCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>Engineering mug</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>


        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <ArkiCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>Architecture mug</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>


        <Link to=''>
        <div className='border-2 w-auto h-auto hover:border-orange-500'>

                <CapCollection/>
               
            <div className='flex justify-between mx-2 mb-8'>
                <h1 className='font-medium text-lg lg:text-sm'>Cap</h1>
                <h1 className='font-medium text-lg lg:text-sm'>₱100.00</h1>
            </div>

            <div className='pb-5'>
                <button className='bg-black mx-2 w-28 text-white font-bold text-sm p-2 h-auto hover:opacity-90' type='submit'>Add to Cart</button>
            </div>
            </div>
            </Link>
     
       </div>
      </div>
     </div>
    </div>
  )
}

export default UserMain