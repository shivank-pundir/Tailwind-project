import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSecrion = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-10">
    <h1 className='text-4xl lg:text-7xl  sm:text-6xl text-center tracking-wide'> 
        VirtualR build tools 
        <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>
          {" "}  for developers
        </span>
    </h1>
    <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl mb-6'>
        Empower your creativity and bring your VR app ideas to life eith our intuitive development tools. 
        Get started today and trun your imagination into immersive reality
    </p>
    <div className="flex justify-center my-10 space-x-10">
        <a href="#" className='bg-gradient-to-r from bg-orange-500 to-orange-900 py-2 px-3 border rounded-md'>
        Start for free 
    </a>
    <a href="#" className='border rounded-md text-white-200 py-2 px-3'>Documentation</a>
    </div>

    <div className="flex justify-center mt-10">
        <video autoPlay loop muted 
        className='rounded-lg  w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
        >
            <source src={video1} type='video/mp4' />
        </video>
         <video autoPlay loop muted 
        className='rounded-lg  w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
        >
            <source src={video2} type='video/mp4' />
        </video>
    </div>
    
   </div>
  )
}

export default HeroSecrion
