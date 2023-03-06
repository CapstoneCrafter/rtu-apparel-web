//USER ACCOUNT PAGE
import React from 'react'
import { UserAuth } from '../functions/authContext'
import { useNavigate } from 'react-router-dom'

export const UserAccount = () => {
  const {user, logout} = UserAuth()

  const navigate = useNavigate()
  
  const handleLogOut = async () =>{
    try{
      await logout()
      navigate('/')

    }catch(err){
        console.log(err.message)
    }

  }

  return (
    <div className='max-w-7xl mx-auto'>
        <div className='m-5'>
                <h1 className='font-bold text-5xl mb-2' >My Account</h1>
                <p className='text-gray-500 italic'>Ensure the safety and security of your account by managing and taking protective measures.</p>

            <div className='flex justify-between items-center pb-10 '>
            
                <div className='font-medium mt-10' >
                    <div className='flex'>
                    <h1 className='mr-2'>Username:</h1> <h1 className='italic text-orange-500'> {user && user.displayName}</h1>
                    </div>

                    <div className='flex'>
                    <h1 className=' mr-2 '>Email:</h1> <h1 className='italic text-orange-500'> {user && user.email}</h1>
                    </div>

                </div>

                <div className='mt-10'>
                    <img className='' src={user?.photoURL} alt='' width="100" height="100"  />
               </div>
                </div>

                <div className='mt-10'>
                  <button 
                  onClick={handleLogOut}
                  className='text-sm text-gray-500 py-2 w-32 rounded-md border-2' 
                  type='submit'>Log Out</button>
                </div>
        </div>

    
    </div>
  )
}

export default UserAccount