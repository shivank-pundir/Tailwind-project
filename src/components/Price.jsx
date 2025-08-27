import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import {features, pricingOptions} from "../constants"

const Price = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:5xl lg:6xl text-center my-8  tracking-wide'>
            Pricing
        </h2>
     <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap">
        {pricingOptions.map((option, idx) => (
           <div key={idx} className='w-full sm:w-1/2 lg:w-1/3 mr-2 ' >
            <div className='p-10 border border-neutral-700 rounded-xl '> 
                    <p className='text-4xl mb-6'>
                        {option.title}
                        {option.title === "Pro" &&(
                            <span className='bg-gradient-to-r from orange-500 to-red-400 
                            text-transparent bg-clip-text text-xl mb-4 ml-2'>
                                (Most popular)</span>

                        )}
                    </p>
                    <p className='mb-8'>
                        <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                        <span className='text-neutral-500 tracking-tight'>/Month</span>
                    </p>
                    <ul>
                        {option.features.map((features, idx) => (
                           <li key={idx} className='mt-8 flex items-center'>
                            <CheckCircle2 />
                            <span className='ml-2'>{features}</span>
                           </li> 
                        ))}
                    </ul>
                    <a href="#" className='inline-flex justify-center items-center  text-center
                    w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 
                    border border-orange-900  rounded-lg transition duration-200'>
                        Subscribe
                    </a>
                </div>
            </div>
        ))}
     </div>
    </div>
  )
}

export default Price
