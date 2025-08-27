import { features } from '../constants';
import React from 'react';

const FeatuerSection = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
      <div className="text-center">
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm 
        font-medium px-3 py-2 uppercase'>
          Feature
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
          Easily build 
          <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>
            {" "} your code
          </span>
        </h2>
      </div>

      {/* Grid Layout */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-20">
  {features.map((feature, idx) => (
    <div
      key={idx}
      className="p-6 rounded-xl flex flex-col space-y-4"
    >
      {/* Icon + Title in one line */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center h-12 w-12 p-2 bg-neutral-900 text-orange-500 rounded-full">
          {feature.icon}
        </div>
        <h5 className="text-lg font-semibold text-white">
          {feature.text}
        </h5>
      </div>

      {/* Description below */}
      <p className="text-sm text-neutral-400">
        {feature.description}
      </p>
    </div>
  ))}
</div>


    </div>
  );
};

export default FeatuerSection;
