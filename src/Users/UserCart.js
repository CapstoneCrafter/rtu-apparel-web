import React, { useState, useEffect, useContext} from 'react'

import { BsTrash } from 'react-icons/bs'
import { ShopContext } from '../functions/cartContext'

export const UserCart = (props) => {

  const{id, productName, price, productImage, productVariation, productSize} = props.data

  const { cartItems, addToCart, removeFromCart, deleteFromCart, getTotalAmountForItem} = useContext(ShopContext)
  const [selectedVariation, setSelectedVariation] = useState()
  const [selectedSize, setSelectedSize] = useState()

  const [isBreakpointsMedium, setIsBreakPointsMedium] = useState(false)
  const [isBreakpointSmall, setIsBreakPointSmall] = useState(false)

  const cartAmount = getTotalAmountForItem(id)

  const handleVariation = (e) => {
    setSelectedVariation(e.target.value)
  }

  const handleSize = (e) => {
    setSelectedSize(e.target.value)
  }

  useEffect(() => {

    const handleMedium = () => {
      if (window.innerWidth <= 768) {
        setIsBreakPointsMedium(true);
      } else {
        setIsBreakPointsMedium(false);
      }
    };
    handleMedium();
    window.addEventListener('resize', handleMedium);
    return () => {
      window.removeEventListener('resize', handleMedium);
    };
  }, []);

  useEffect(() => {

    const handleSmall = () => {
      if (window.innerWidth <= 640) {
        setIsBreakPointSmall(false);
      } else {
        setIsBreakPointSmall(true);
      }
    };
    handleSmall();
    window.addEventListener('resize', handleSmall);
    return () => {
      window.removeEventListener('resize', handleSmall);
    };
  }, []);


  return (
    <div className='max-w-7xl mx-auto'>
      <div className='mx-5 '>
       
        <div className='div-for-medium-large-breakpoints'>
       
            <div className=' md:shadow-md md:grid md:grid-cols-6 md:justify-items-center md:items-center md:mt-5 md:mb-10'>
                <div className={`${isBreakpointsMedium ? 'hidden' : ''} md:w-26 md:mr-0 md:ml-5 `}>
                <img src={productImage} alt='' />
                </div>

                {/* <h1 className={`${isBreakpointsMedium ? 'hidden' : ''} text-black font-semibold `}>Package <span className='block mx-5'>M</span></h1> */}
                
               <div className={`${isBreakpointsMedium? 'hidden' : 'mx-2 grid grid-cols-1  '}`}>

                <select className=' font-semibold text-orange-600 p-1 outline-none text-left uppercase mr-1 md:text-sm ' required value={selectedVariation} onChange={handleVariation}>
                  <option className='font-semibold text-left ' label='VARIATIONS'>  </option>
                  {productVariation.map((variationOption) => (

                      <option 
                      className='text-orange-600 font-semibold uppercase text-left  md:text-sm'
                      key={variationOption} 
                      value={variationOption}>
                      {variationOption}
                      </option>
          
                  ))}
                </select>

                <select className=' mt-2  font-semibold text-orange-600 p-1 outline-none text-left uppercase mr-1' required value={selectedSize} onChange={handleSize}>
                  <option className='font-semibold text-left' label='SIZES'>  </option>
                  {productSize.map((sizeOption) => (

                      <option 
                      className='text-orange-600 font-semibold uppercase text-left'
                      key={sizeOption} 
                      value={sizeOption}>
                      {sizeOption}
    
                      </option>
          
                  ))}
                </select>
                </div>
            

                <h1 className={`${isBreakpointsMedium ? 'hidden' : 'text-orange-600 font-semibold'} `}>₱{price}</h1>

                <div className={`${isBreakpointsMedium? 'hidden' : 'bg-gray-300 p-1 flex '}`}>
                <button onClick={() => removeFromCart(id)} className='w-8 font-black'>-</button> 
                <h1 className='w-8 outline-0 text-center bg-gray-300 text-orange-600 font-semibold'>{cartItems[id]}</h1>
                <button onClick={() => addToCart(id)} className='w-8 font-black'>+</button>
                </div>

  
                <h1 className={`${isBreakpointsMedium ? 'hidden' : ''} text-orange-600 font-semibold `}>₱{cartAmount}</h1>

                <div className='mx-10 mb-5 mt-5 lg:mx-16 '>
               
                
                <button onClick={() => deleteFromCart(id)}  className={`${isBreakpointsMedium ? 'hidden' : ''} text-red-600 p-2 `}><BsTrash size={20}/></button>
               
                </div>
            </div>
            </div>

            <div className={`div-for-small-breakpoints ${isBreakpointSmall ? 'hidden' : ' mt-5 mb-10  font-semibold p-2 shadow-2xl text-base uppercase '} `}>
            <div className={`${isBreakpointSmall ? 'hidden' : ''} `}>
            <img src={productImage} alt='' />
                </div>

                <div className='flex '>
                <div>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-5'} `}>Product:</h1> 
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-14'} `}>Variations:</h1>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-5'} `}>Unit Price:</h1>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-6 '} `}>Quantity:</h1>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-4'} `}>Total Price:</h1>
                </div>

                <div className='ml-5 '>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'text-orange-600 font-semibold mb-4'} `}>{productName}</h1> 

                {/* <h1 className={`${isBreakpointSmall ? 'hidden' : 'text-black mb-4'} `}>PACKAGE <span>M</span></h1> */}
                <div className={`${isBreakpointSmall? 'hidden' : 'grid grid-cols-1 mb-3   '}`}>

                <select className='border border-black  font-semibold text-orange-600 p-1 outline-none text-left uppercase mr-1 text-sm ' required value={selectedVariation} onChange={handleVariation}>
                  <option className='font-semibold text-left ' label='VARIATIONS'>  </option>
                  {productVariation.map((variationOption) => (

                      <option 
                      className='text-orange-600 font-semibold uppercase text-left  md:text-sm'
                      key={variationOption} 
                      value={variationOption}>
                      {variationOption}
                      </option>
          
                  ))}
                </select>

                <select className='border mt-2 border-black font-semibold text-orange-600 p-1 outline-none text-left uppercase mr-1' required value={selectedSize} onChange={handleSize}>
                  <option className='font-semibold text-left' label='SIZES'>  </option>
                  {productSize.map((sizeOption) => (

                      <option 
                      className='text-orange-600 font-semibold uppercase text-left'
                      key={sizeOption} 
                      value={sizeOption}>
                      {sizeOption}
    
                      </option>
          
                  ))}
                </select>
                </div>

                <h1 className={`${isBreakpointSmall ? 'hidden' : 'text-orange-600 font-semibold mb-4' } `}>₱{price}</h1>

                <div className={`${isBreakpointSmall? 'hidden' : 'bg-gray-200 mb-5 p-1 flex'}`}>
                <button onClick={() => removeFromCart(id)} className='w-8 font-black'>-</button> 
                <h1 className='w-8 outline-0 text-center bg-gray-200 text-orange-600 font-semibold'>{cartItems[id]}</h1>
                <button onClick={() => addToCart(id)} className='w-8 font-black'>+</button>
                </div>
              
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'text-orange-600 font-semibold mb-4'} `}>₱{cartAmount}</h1>

                </div>
                </div>

                <div className='flex justify-end mt-5 mb-2'>
                  <button onClick={() => deleteFromCart(id)} className={`${isBreakpointSmall ? 'hidden' : ''} text-white bg-red-600 p-2 w-32 rounded-md mr-2`}>Delete</button>
                  <button className={`${isBreakpointSmall ? 'hidden' : ''} text-white bg-black p-2 w-32 rounded-md`}>Check Out</button>
                </div>
            </div>

      </div>
    </div>
  )
}

export default UserCart
// import React, { useState, useEffect} from 'react'
// import JerseyPackage from '../components/JerseyPackage';

// import {  BsTrash } from 'react-icons/bs'


// export const UserCart = () => {

//   const [isBreakpointsMedium, setIsBreakPointsMedium] = useState(false)
//   const [isBreakpointSmall, setIsBreakPointSmall] = useState(false)

//   useEffect(() => {

//     const handleMedium = () => {
//       if (window.innerWidth <= 768) {
//         setIsBreakPointsMedium(true);
//       } else {
//         setIsBreakPointsMedium(false);
//       }
//     };
//     handleMedium();
//     window.addEventListener('resize', handleMedium);
//     return () => {
//       window.removeEventListener('resize', handleMedium);
//     };
//   }, []);

//   useEffect(() => {

//     const handleSmall = () => {
//       if (window.innerWidth <= 640) {
//         setIsBreakPointSmall(false);
//       } else {
//         setIsBreakPointSmall(true);
//       }
//     };
//     handleSmall();
//     window.addEventListener('resize', handleSmall);
//     return () => {
//       window.removeEventListener('resize', handleSmall);
//     };
//   }, []);



//   return (
//     <div className='max-w-7xl mx-auto'>
//       <div className='mx-5 '>

//         <div className='div-for-medium-large-breakpoints'>
//             <div className=' text-base font-semibold uppercase md:grid md:grid-cols-6 md:justify-items-center md:border md:p-3 md:font-semibold'>
//               <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Product</h1>
//               <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Variations</h1>
//               <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Unit Price</h1>
//               <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Quantity</h1>
//               <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Total Price</h1>
//               <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Action</h1> 
//             </div>

//             <div className='md:border md:grid md:grid-cols-6 md:justify-items-center md:items-center md:mt-2'>
//                 <div className={`${isBreakpointsMedium ? 'hidden' : ''} md:w-26 md:mr-0 md:ml-5 `}>
//                 <JerseyPackage/>
//                 </div>

//                 <h1 className={`${isBreakpointsMedium ? 'hidden' : ''} text-orange-500 font-semibold `}>Package <span className='block mx-5'>M</span></h1>
//                 <h1 className={`${isBreakpointsMedium ? 'hidden' : ''} text-orange-500 font-semibold `}>₱100</h1>
//                 <h1 className={`${isBreakpointsMedium ? 'hidden' : ''} text-orange-500 font-semibold `}>1</h1>
//                 <h1 className={`${isBreakpointsMedium ? 'hidden' : ''} text-orange-500 font-semibold `}>₱100</h1>

//                 <div className='mx-10 mb-5 mt-5 lg:mx-16 '>
//                 {/* <button className={`${isBreakpointsMedium ? 'hidden' : ''} text-white bg-red-600 p-2 w-24 mb-4 rounded-md`}>Delete</button> */}
//                 <button className={`${isBreakpointsMedium ? 'hidden' : ''} text-red-600 p-2 `}><BsTrash size={20}/></button>
//                 {/* <button className={`${isBreakpointsMedium ? 'hidden' : ''} text-white bg-black p-2 w-24 rounded-md`}>Check Out</button> */}
//                 </div>
//             </div>
//             </div>

//             <div className={`div-for-small-breakpoints ${isBreakpointSmall ? 'hidden' : ''} mt-5 font-semibold p-2 border text-base uppercase`}>
//             <div className={`${isBreakpointSmall ? 'hidden' : ''} `}>
//                 <JerseyPackage/>
//                 </div>

//                 <div className='flex '>
//                 <div>
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>Product:</h1> 
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>Variations:</h1>
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>Unit Price:</h1>
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>Quantity:</h1>
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>Total Price:</h1>
//                 </div>

//                 <div className='ml-5 text-orange-500'>
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>P.E TSHIRT</h1> 
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>PACKAGE <span>M</span></h1>
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>₱100</h1>
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>1</h1>
//                 <h1 className={`${isBreakpointSmall ? 'hidden' : ''} `}>₱100</h1>
//                 </div>
//                 </div>

//                 <div className='flex justify-end mt-5 mb-5'>
//                   <button className={`${isBreakpointSmall ? 'hidden' : ''} text-white bg-red-600 p-2 w-32 rounded-md mr-4`}>Delete</button>
//                   <button className={`${isBreakpointSmall ? 'hidden' : ''} text-white bg-black p-2 w-32 rounded-md`}>Check Out</button>
//                 </div>
//             </div>

//             <div className='font-semibold mt-5 flex justify-end'>
//                   <form>
//                     <button className='p-2 bg-indigo-600 w-36 rounded-md text-white mr-4'>Clear Cart</button>
//                     <button className='p-2 bg-orange-500 w-36 rounded-md text-white'>CheckOut Items</button>
//                   </form>
//                 </div>


//       </div>
//     </div>
//   )
// }

// export default UserCart