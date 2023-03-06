//THIS NAVBAR WILL SHOW WHEN THE USER LOGIN TO THEIR ACCOUNT.

import React from 'react'
import { Link } from 'react-router-dom'
import RTULogo from './rtu-logo'
import UserDropdown from './UserDropdown'
import { UserAuth } from '../functions/authContext'


export const NavUser = () => {

  const {user} = UserAuth()

  return ( 
    <div className='max-w-7xl mx-auto'>
       
    <div className='flex md:mx-0 md:flex justify-between items-center p-5'>

     <div className='flex items-center  lg:ml-2  '>
     
     <Link to='/RTUApparel'> {<RTULogo/>} </Link>
     <Link to='/RTUApparel' className='ml-1 font-black text-orange-500 text-lg lg:ml-3'>RTU Apparel</Link>

     </div>

     <div className=' flex items-center '>

     <div>
     <img className="object-cover w-10 h-10 rounded-full" src={user?.photoURL || "https://pcgacademia.pl/wp-content/themes/pcgacademia-child/images/png/avatar-placeholder.png"} alt="" />
     </div>

     <UserDropdown />

     <div className=''>
     <Link to='cart'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-6 h-6'>
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      </Link>
    </div>

     </div>
     
    </div>
 </div>
  )
}

export default NavUser

