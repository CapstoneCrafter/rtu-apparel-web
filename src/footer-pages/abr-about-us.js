//FOOTER PAGES

import React from 'react'

const About = () => {
  return (
    
    <div className='about max-w-7xl mx-auto h-screen'>
        <div className='mx-5 my-5'>
          
          <div className=' h-96 w-full bg-cover bg-center  '>
            <img className="h-full w-full object-cover " src='https://upload.wikimedia.org/wikipedia/commons/5/57/RTU_Seal.png' alt='' />

            <h1 className='font-bold text-5xl mt-4 '>ABOUT <span className='text-orange-500'>RTU Apparel!</span></h1>

            <p className='text-justify my-2 text-md text-gray-500'>RTU Apparel is your go-to online store for all your RTU uniform and merchandise needs. 
            We are dedicated to providing top-notch quality products to the students of Boni and Pasig branches. 
            With a wide range of options, we guarantee to have the perfect fit for you. 
            And the best part? All our products, including ID lace, are exclusively available to these branches. 
            So whether you're looking for comfortable and stylish uniform pieces, or unique and trendy RTU merchandise, 
            RTU Apparel has got you covered. Shop with us now for a hassle-free and convenient shopping experience.</p>
            
            </div>
          </div>
        </div>
  )
}

export default About