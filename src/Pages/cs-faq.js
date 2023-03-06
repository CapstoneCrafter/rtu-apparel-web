//FOOTER PAGES

import React from 'react'
import { Link } from 'react-router-dom'
import FAQ from '../components/faq-accordion' //Exporting FAQ0-accordion components
 
export const Asked = () => {
  return (
    
    <div className='max-w-7xl mx-auto  '>
        <div className='mx-5 my-10 '> 

            <h1 className='text-5xl font-bold'>Frequently Asked Questions!</h1>
            <p className='mt-2 text-gray-500 mb-10 font-bold md:text-sm md:w-96 lg:text-base lg:w-cc '>Can't find the answer you're looking for? Reach out to our <Link to='contact-us' className='text-orange-500'>customer support </Link>team.</p>
            <FAQ/>

   </div>
</div>

  )
}

export default Asked