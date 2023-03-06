//SIGN-UP COMPONENT

import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../functions/authContext'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const {CreateUser} = UserAuth()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
       
        try{
            await CreateUser(email,password)
            navigate('/signin')

        }catch(err){
            setError(err.message)
            console.log(err.message)
        }
    }

  return (
 
    <div className='max-w-7xl mx-auto mb-52'>

        <div className='mx-5 my-10 mb-20  md:flex items-center  '>
            <div className=' md:w-72 md:mr-10 lg:w-cc lg:ml-10'>

            <h1 className='font-bold text-center text-5xl text-orange-500 md:text-4xl md:text-left lg:text-5xl '>RTU Apparel</h1>
            <p className='text-gray-500 mt-4 text-center text-lg md:text-sm md:text-left md:mt-2 lg:text-2xl'>To receive updates on RTU apparel and exclusive promotions, 
            sign up with your email today.
            </p>
            </div>

            <div className='h-auto w-96 mx-auto shadow-2xl rounded-md mt-5 bg-slate-100 lg:mr-20'>
                <div className='mx-5 pt-5'>
                 
                 <form onSubmit={handleSubmit}>

                    <div className='mb-5'>
                    <input 
                     onChange={(e) => setEmail(e.target.value)}
                     type='email' 
                     className='block border-2 border-gray-300 w-full rounded-md h-14 pl-5 hover:border-orange-500' 
                     placeholder='Email'/>
                     
                   
                    
                    </div>

                    <div className='mb-5'>
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' 
                    className='block  border-2 border-gray-300 w-full rounded-md h-14 pl-5 hover:border-orange-500' 
                    placeholder='Password'/>
                    
                   
                    
                    </div>
                    <button 
                    type='submit'
                    className='w-full bg-orange-500 mt-2 p-3 mb-4 font-bold text-white rounded-lg hover:opacity-80'>
                    Sign Up
                    </button>

                </form>

                    <div className='mt-3 italic'>
                        <p className='text-sm text-center'>RTU Apparel's <Link to='term-of-service' target="_blank" className='text-orange-500'>terms of service</Link> and <Link to='term-of-service' target="_blank"  className='text-orange-500'>privacy policy</Link> must be agreed to when signing up.</p>
                    </div>           

                        <div className='border-t-2 border-gray-300 text-center pt-5 pb-10 mt-5 text-gray-500 text-sm italic '>
                           
                            <h1>Do you already have an account? <Link to='signin' className='text-orange-500 hover:text-indigo-600'>Sign in</Link></h1> 
                           
                        </div>

                     </div>
                </div>
            </div>
        </div>
      
  )
}

export default SignUp