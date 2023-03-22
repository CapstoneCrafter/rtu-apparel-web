import React, {useContext} from 'react'
import { ShopContext } from '../functions/cartContext';
import UserCheckOut from './UserCheckOut';
import { RTUPRODUCTS } from './UserProducts';

const UserCheckOutMapping = () => {
    
    const { cartItems, getTotalCartAmount, getTotalPayment} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const TotalPayment = getTotalPayment()

  return (
    <div className='max-w-7xl mx-auto'>
    <div className='mx-5'>
        <div className='checkout-header mt-5'>
                <h1 className='uppercase text-orange-500 text-3xl font-bold'>PURCHASE CONFIRMATION</h1>
                <p className='text-gray-500 text-sm text-justify italic'>The RTU Apparel checkout page is where you can review your items,  enter your payment 
                and shipping information to complete your purchase.</p>

        </div>

        <div className='checkout-form mt-5 lg:flex lg:justify-between '>
            <div className=' lg:w-3/5 lg:mr-5 xl:w-3/6'>
            <form>
                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Email</label>
                    <input className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none hover:border-orange-600 focus:border-orange-600' placeholder='ENTER YOUR EMAIL ADDRESS' type='email'/>
                </div>

                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Student Number</label>
                    <input className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none hover:border-orange-600 focus:border-orange-600' placeholder='ENTER YOUR STUDENT NUMBER' type='number'/>
                </div>

                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Delivery Address</label>
                    <textarea className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none resize-none hover:border-orange-600 focus:border-orange-600' placeholder='ENTER YOUR FULL DELIVERY ADDRESS' />
                </div>

                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Name</label>
                    <input className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none hover:border-orange-600 focus:border-orange-600' placeholder='ENTER YOUR FULL NAME' type='email'/>
                </div>

                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Phone Number</label>
                    <input className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none hover:border-orange-600 focus:border-orange-600' placeholder='ENTER YOUR CONTACT NUMBER' type='number'/>
                </div>

                <div className='mb-4'>
                    <div className='flex justify-between'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Message</label>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Optional</label>
                    </div>
                    <textarea className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none resize-none hover:border-orange-600 focus:border-orange-600' placeholder='ENTER YOUR MESSAGE. (OPTIONAL)' />
                </div>

               
            </form>

            <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Payment Option:</label>
                    
                    <div className='md:flex'>
                        <button className='border  bg-blue-900 w-full p-3 mb-3 rounded-sm text-sm outline-none resize-none uppercase font-semibold text-white hover:bg-red-600 focus:bg-red-600 md:mb-0'>Cash on Delivery</button>
                        <button className='border bg-[#22333B] w-full p-3 rounded-sm text-sm outline-none resize-none cursor-not-allowed text-white font-semibold hover:bg-red-600 focus:bg-red-600'>GCASH</button>
                    </div>
                </div>
                <p className='text-red-600 text-sm text-justify italic font-semibold'>NOTE: Unfortunately, the GCASH payment method is not currently available at this time.</p>
                </div>

            {/* PAYMENT INFO START */}
            <div className='payment-info  lg:w-2/5 2xl:w-auto 2xl:px-16 2xl:pt-3 '>
            <div className='mt-10 lg:mt-0'>

                {/* PRODUCT DETAILS START */}
                {/* <h1 className='text-2xl uppercase font-bold text-indigo-600 mb-2 2xl:text-red-500'>Product Details</h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Product: <span className='text-sm text-red-500 font-bold ml-5'>{productName}</span></h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Variations: <span className='text-sm text-red-500 font-bold ml-1 '>Package</span></h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Size: <span className='text-sm text-red-500 font-bold ml-14 '>S</span></h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Quantity: <span className='text-sm text-red-500 font-bold ml-4'>1</span></h1> */}
                <div>
                <h1 className='text-2xl uppercase font-bold text-indigo-600 mb-2 '>Product Details</h1>
                 {RTUPRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <UserCheckOut data={product} />
                    }
                })} 
                </div>  
                {/* PRODUCT DETAILS END */}

                {/* PAYMENT DETAILS START */}
                <div className='payment-details flex mt-10'>


                {/* PAYMENT TEXT DETAILS START */}
                <div>
                <h1 className=' text-2xl uppercase font-bold text-indigo-600 mb-2'>Payment Details</h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Merchandise Subtotal: </h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Shipping Subtotal: </h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Total Payment: </h1>
                </div>
                 {/* PAYMENT TEXT DETAILS END */}


                 {/* PAYMENT DATA DETAILS START */}
                <div className='text-sm uppercase font-bold text-red-500 mt-10'>
                <h1 className='merchandise subtotal'>₱{totalAmount}.00 </h1>
                <h1 className='shipping-subtotal'>₱30.00 </h1>
                <h1 className='total-payment'>₱{TotalPayment}.00 </h1>
                </div>
                 {/* PAYMENT DATA DETAILS END */}

                </div>
                {/* PRODUCT DETAILS END */}


            </div>

            <form className='mt-10'>
                <button className='uppercase w-full bg-orange-600 text-white p-3 rounded-sm font-semibold hover:opacity-80'>Place Order</button>
            </form>

            </div>
             {/* PAYMENT INFO END */}

           
        </div>
    </div>

</div>
  
  )
}

export default UserCheckOutMapping

// import React, {useContext} from 'react'
// import { ShopContext } from '../functions/cartContext';
// import UserCheckOut from './UserCheckOut';
// import { RTUPRODUCTS } from './UserProducts';

// const UserCheckOutMapping = () => {
    
//     const { cartItems   } = useContext(ShopContext)

//   return (
//     <div>
//     {RTUPRODUCTS.map((product) => {
//     if(cartItems[product.id] !== 0) {
//         return <UserCheckOut data={product} />
//     }
// })} 
// </div>
//   )
// }

// export default UserCheckOutMapping