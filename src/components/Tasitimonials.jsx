import React from 'react'
import {testimonials} from "../constants"
const Tasitimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className='text-3xl sm:5xl lg:6xl text-center my-10 lg:my-20'>
            What people are saying
        </h2>
    <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonials, idx) => (
           <div key={idx} className='w-full sm:w-1/2 lg:w-1/3 px-3 py-2' >
            <div className='border border-neutral-800 bg-neutral rounded-md p-6 text-md font-thin '>
                <p>{testimonials.text}</p>
                <div className="flex mt-8 items-start">
                    <img className="w-12 h-12 rounded-full border border-neutral-300"  
                    src={testimonials.image} 
                    alt={testimonials.user} />
                     <div className='ml-2'>
                    <h6>{testimonials.user}</h6>
                    <span className='text-sm font-normal italic text-neutral-500'>
                        {testimonials.company}
                    </span>
                </div>
                </div>
               
            </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Tasitimonials
