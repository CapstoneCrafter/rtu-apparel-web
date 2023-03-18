import React, { useContext,useEffect,useState } from 'react'
import { RTUPRODUCTS } from './UserProducts';
import { ShopContext } from '../functions/cartContext';
import { GiShoppingBag } from 'react-icons/gi'
import UserCart from './UserCart';

const UserCartMapping = () => {
    const { cartItems, getTotalCartAmount, clearFromCart} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const [isBreakpointsMedium, setIsBreakPointsMedium] = useState(false)
    const [isBreakpointSmall, setIsBreakPointSmall] = useState(false)

    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
      setIsEmpty(Object.values(cartItems).reduce((a, b) => a + b, 0) === 0);
    }, [cartItems]);


  
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

        <div className='mx-5'>
        <div className='text-base font-semibold uppercase md:grid md:grid-cols-6 md:justify-items-center md:shadow-lg md:mb-10  md:p-3 md:font-semibold'>
              <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Product</h1>
              <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Variations</h1>
              <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Unit Price</h1>
              <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Quantity</h1>
              <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Total Price</h1>
              <h1 className={`${isBreakpointsMedium ? 'hidden' : ''}`}>Action</h1> 
            </div>

         <div>
            {RTUPRODUCTS.map((product) => {
            if(cartItems[product.id] !== 0) {
                return <UserCart data={product} />
            }
        })} 
        </div>

        <div className='flex items-center justify-center my-10 '>
        {isEmpty ? <GiShoppingBag className='mr-2 text-orange-500' size={25}/> :null}
        {isEmpty ? <p className='uppercase font-medium text-base text-black md:text-2xl'>Explore our store and fill up your cart</p> : null}
        </div> 
        
       

        <div className='font-semibold mt-5 flex justify-end'>

                  <form>
                    <button onClick={clearFromCart} className='p-2 bg-indigo-600 w-36 rounded-md text-white mr-4'>Clear Cart</button>
                    <button className='p-2 bg-orange-500 w-36 rounded-md text-white'>CheckOut Items</button>
                  </form>
                </div>

        <div className='mt-5 flex justify-end text-sm font-semibold mx-5'>
            <h1>TOTAL AMOUNTS: <span className='text-red-600 text-2xl font-bold ml-2'>₱{totalAmount}.00</span></h1>
        </div>

        </div>
    </div>
  )
}

export default UserCartMapping