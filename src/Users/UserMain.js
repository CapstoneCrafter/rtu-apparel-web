//THIS FILE WILL SHOW IF USER LOGIN THEIR ACCOUNT

import UserCategory from '../components/user-img-cate';
import UserLace from '../components/user-img-lace'
import UserPatch from '../components/user-img-patch';
import UserUniform from '../components/user-img-uniform';
import UserPants from '../components/user-img-pants';
import UserJersey from '../components/user-img-jersey';
import UserRTUCollection from './UserRTUCollection';

import React from 'react'
import { Link } from 'react-router-dom';
import SliderComponent from '../Users/UserSlider';
import { RTUPRODUCTS } from './UserProducts';

const UserMain = () => {



  return (
    <div className='max-w-7xl mx-auto mb-52 '>

    <div className='mx-5 my-10'>

      <SliderComponent/>  
   
    <div className='my-10 '>
        <h1 className='font-bold text-2xl text-orange-500 '>Shop Our Categories</h1>
        <p className='text-gray-500 italic text-sm text-justify md:text-base'>Welcome to RTU Apparel, your one-stop-shop for all your clothing needs. Browse our extensive collection of high-quality items organized into convenient categories, 
            including Uniforms, Pants, Jerseys, ID Laces, Patches, and Accessories. Find the perfect apparel to suit your needs and show off your RTU pride.</p>
    </div>


      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-8'>

       
        <Link to='uniform'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl  lg:w-48 '>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            UNIFORM
        </div>
        <UserUniform/>
        </div>
        </Link>

        <Link to='pants'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            PANTS
        </div>
        <UserPants/>
        </div>
        </Link>

        <Link to='jersey'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48 '>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            JERSEY
        </div>
        <UserJersey/>
        </div>
        </Link>

        <Link to='IDlace'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            ID LACE
        </div>
        <UserLace/>
        </div>
        </Link>

        <Link to='patch'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            PATCH
        </div>
        <UserPatch/>
        </div>
        </Link>

        <Link to='accessory'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48  lg:gap-11'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            ACCESSORIES
        </div>
        <UserCategory/>
        </div>
        </Link>
     
      </div>  


 
     </div>


     <div className='mx-5 md:mb-10 '>
            <h1 className='font-bold text-2xl text-orange-500'>RTU Collection</h1>
            <p className='text-gray-500 italic text-sm text-justify md:text-base'>Stay stylish and show your school pride with the RTUCollection section of RTU apparel, 
            featuring a variety of trendy and high-quality clothing items adorned with the university's iconic logo.</p>
        </div>
        {/* <div className='border flex'>
     <Link to='cart'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-6 h-6'>
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      </Link>
  
      
    </div> */}

    <div className='mx-5 mt-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5'>
     {RTUPRODUCTS.map((product) => (
        <UserRTUCollection data={product}/>
     ))}
     </div>
 
    </div>
  )
}

export default UserMain

// //THIS FILE WILL SHOW IF USER LOGIN THEIR ACCOUNT

// import UserCategory from '../components/user-img-cate';
// import UserLace from '../components/user-img-lace'
// import UserPatch from '../components/user-img-patch';
// import UserUniform from '../components/user-img-uniform';
// import UserPants from '../components/user-img-pants';
// import UserJersey from '../components/user-img-jersey';

// import React from 'react'
// import { Link } from 'react-router-dom';

// import PECollection from '../components/collection-img-p.e';
// import TumblerCollection from '../components/collection-img-tumbler';
// import LaceCollection from '../components/collection-img-lace';
// import ToteCollection from '../components/collection-img-tote';
// import PatchCollection from '../components/collection-img-patch';
// import HandkCollection from '../components/collection-img-handk';
// import AccountancyCollection from '../components/collection-img-acc';
// import EngCollection from '../components/collection-img-eng';
// import ArkiCollection from '../components/collection-img-arki';
// import CapCollection from '../components/collection-img-cap';
// import SliderComponent from '../Users/UserSlider';


// const UserMain = () => {
//   return (
//     <div className='max-w-7xl mx-auto mb-52 '>

//     <div className='mx-5 my-10'>

//       <SliderComponent/>  
   
//     <div className='font-bold text-2xl text-black'>
//         <h1 className='my-10 '>Shop Our Categories</h1>
//     </div>

//       <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-8'>

       
//         <Link to='uniform'>
//         <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48 '>
//         <div className='text-center font-bold text-lg mt-5 text-black'>
//             UNIFORM
//         </div>
//         <UserUniform/>
//         </div>
//         </Link>

//         <Link to='pants'>
//         <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48'>
//         <div className='text-center font-bold text-lg mt-5 text-black'>
//             PANTS
//         </div>
//         <UserPants/>
//         </div>
//         </Link>

//         <Link to='jersey'>
//         <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48 '>
//         <div className='text-center font-bold text-lg mt-5 text-black'>
//             JERSEY
//         </div>
//         <UserJersey/>
//         </div>
//         </Link>

//         <Link to='IDlace'>
//         <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48'>
//         <div className='text-center font-bold text-lg mt-5 text-black'>
//             ID LACE
//         </div>
//         <UserLace/>
//         </div>
//         </Link>

//         <Link to='patch'>
//         <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48'>
//         <div className='text-center font-bold text-lg mt-5 text-black'>
//             PATCH
//         </div>
//         <UserPatch/>
//         </div>
//         </Link>

//         <Link to='accessory'>
//         <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-gray-200 h-auto w-auto rounded-2xl lg:w-48 border-2 lg:gap-11'>
//         <div className='text-center font-bold text-lg mt-5 text-black'>
//             ACCESSORIES
//         </div>
//         <UserCategory/>
//         </div>
//         </Link>
     
//       </div>  

//       <div className='mt-20'>
//         <div className='font-bold mb-10 text-2xl text-black'>
//             RTU Collection
//         </div>

//         <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5'>

//         <Link to='PEShirt'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <PECollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>P.E T-Shirt</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 pb-4 mt-5 italic lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
                
        
//             </div>

           
//             </Link>


//         <Link to='Tumbler'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <TumblerCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>Tumbler</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 italic pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>

            
//         <Link to='IDLace/IDLace'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <LaceCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>ID lace</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 italic pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>


//         <Link to='Totebag'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <ToteCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>Tote</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 italic pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>


//         <Link to='Patch'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <PatchCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>Uniform patch</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 italic pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>


//         <Link to='Handkerchief'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <HandkCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>Handkerchief</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 italic pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>


//         <Link to='Mug'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <AccountancyCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>Accountancy mug</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 italic pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>


//         <Link to='Mug'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <EngCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>Engineering mug</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 italic pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>


//         <Link to='Mug'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <ArkiCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>Architecture mug</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>


//         <Link to='Cap'>
//         <div className='border-2 w-auto h-auto hover:border-orange-500'>

//                 <CapCollection/>
               
//             <div className='flex justify-between italic mx-2 mb-8 mt-5'>
//                 <h1 className='font-medium text-lg lg:text-sm'>Cap</h1>
//                 <h1 className='font-medium text-orange-500 text-lg lg:text-sm'>₱100.00</h1>
//             </div>

//             <div className='mx-2 text-gray-500 italic pb-4 mt-5 lg:text-sm'>
//                  <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
//                 </div>
//             </div>
//             </Link>
     
//        </div>
//       </div>
//      </div>
//     </div>
//   )
// }

// export default UserMain