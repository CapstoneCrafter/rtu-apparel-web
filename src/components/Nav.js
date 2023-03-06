//NAVBAR WHEN USER DOESN'T LOGIN THEIR ACCOUNT

import React from 'react'
import { Link } from 'react-router-dom'
import RTULogo from './rtu-logo'


export const Nav = () => {

  return ( 
    <div className='max-w-7xl mx-auto'>
       
       <div className='hidden md:mx-0 md:flex justify-between items-center p-5'>

        <div className='flex items-center lg:ml-2  '>
        
        <Link to='/'> {<RTULogo/>} </Link>
        <Link to='/' className='ml-1 font-black text-orange-500 text-lg lg:ml-3'>RTU Apparel</Link>

        </div>


  
        <div className='hidden font-bold text-lg md:flex '>
        <Link className='pr-2 hover:text-orange-500 md:mx-5 lg:mx-8' to='men'>Men</Link>
        <Link className='pr-2 hover:text-orange-500 md:mx-5 lg:mr-8' to='women'>Women</Link>
        <Link className='hover:text-orange-500 md:mx-5 lg:mr-8' to='accessories'>Accessories</Link>
        </div>

        <div className='hidden md:flex items-center'>
            <Link to='signin' className='py-2 text-center font-bold rounded-md bg-black w-20 text-white hover:bg-indigo-600 lg:mr-8'>Sign in</Link>
  

         </div>
       </div>
    </div>
  )
}

export default Nav