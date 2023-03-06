//SIGN-IN COMPONENT

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../functions/authContext'

import {FcGoogle} from 'react-icons/fc'


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { logIn, googleSignin, user } = UserAuth()


    //email add sign in function
    const handSignIn = async (e) => {
        e.preventDefault()
        setError('')

        try{
            await logIn(email, password)
            navigate('/RTUApparel')

        }catch(err){
            setError(err.message)
            console.log(err.message)
        }
    }

    //google sign in function
    const handleGoogleSignIn = async (e) => {
        e.preventDefault()

        try{
            await googleSignin()
        } catch(err){
            console.log(err)

        }
    }
    
    //useEffect for google signIn, if user is not null then go to rtuapparel page
    //this function will not show the content instantly
    useEffect(() =>{
        if(user != null){
            navigate('/RTUApparel')
        }
    }, [user])


  return (
 
    <div className='max-w-7xl mx-auto mb-52'>

        <div className='mx-5 my-10 mb-20  md:flex items-center  '>
            <div className=' md:w-72 md:mr-10 lg:w-cc lg:ml-10'>

            <h1 className='font-bold text-center text-5xl text-orange-500 md:text-4xl md:text-left lg:text-5xl '>RTU Apparel</h1>
            <p className='text-gray-500 mt-4 text-center text-lg md:text-sm md:text-left md:mt-2 lg:text-2xl'>To access your RTU Apparel account, 
                please enter your login credentials.
            </p>
            </div>

            <div className='h-auto w-96 mx-auto shadow-2xl rounded-md mt-5 bg-slate-100 lg:mr-20'>
                <div className='mx-5 pt-5'>

                <form onSubmit={handSignIn}>

                    <div> 
                    <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type='text' 
                    className='block mb-4 border-2 border-gray-300 w-full rounded-md h-14 pl-5 hover:border-orange-500' 
                    placeholder='Email or phone number'/>
                    </div>

                    <div>                    
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' 
                    className='block mb-2 border-2 border-gray-300 w-full rounded-md h-14 pl-5 hover:border-orange-500' 
                    placeholder='Password'/>
                    </div>
                   
                    <button className='w-full bg-orange-500 mt-6 p-3 mb-4 font-bold text-white rounded-lg hover:opacity-80'>Sign In</button>


                </form>
           
            <div className='text-center pb-5 border-b-2 border-gray-300'>
                  <Link to='' className=' text-indigo-600 hover:underline'>Forget password?</Link>
                  
                  </div>

                  <div className='mt-5'>
                 
                    <button onClick={handleGoogleSignIn}  className='flex items-center font-bold justify-center p-3 rounded-md border-2 border-gray-300 w-full hover:opacity-80 hover:border-black'> {<FcGoogle size={25} className='mr-2'/>} Google </button>
                    
                        </div>

                        <div className='text-center pb-10 mt-5 italic'>

                            <h1 className='text-gray-500'>New to RTU Apparel? <Link className='text-orange-500 hover:text-indigo-600' to='signup'>Sign Up</Link></h1>
                          
                        </div>

                     </div>
                </div>
            </div>
        </div>
      
  )
}

export default SignIn