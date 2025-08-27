import React from 'react';
import { ListChecks } from "lucide-react";
import codeImg from "../assets/code.jpg";

// ✅ Define checklist items here
const checklistItems = [
  {
    title: "Code merge made easy",
    description: "Track the performance of your VR apps and gain insights into user behavior."
  },
  {
    title: "Review code without worry",
    description: "Track the performance of your VR apps and gain insights into user behavior."
  },
  {
    title: "AI Assistance to reduce time",
    description: "Track the performance of your VR apps and gain insights into user behavior."
  },
  {
    title: "Share work in minutes",
    description: "Track the performance of your VR apps and gain insights into user behavior."
  },
];


const WorkflowSection = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl lg:text-6xl sm:text-5xl text-center mt-6 tracking-wide'>
        Accelerate your 
        <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>
          {" "}coding workflow
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        {/* Left side: Image */}
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code" />
        </div>

        {/* Right side: Checklist */}
        <div className="p-12 w-full lg:w-1/2">
          {checklistItems.map((item, idx) => (
            <div key={idx} className='flex mb-8 items-center'>
              <div className="flex items-center justify-center text-green-400 mx-4 bg-neutral-900 h-10 w-10 rounded-full">
                <ListChecks size={20} />
              </div>
            <div> 
                       <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                    <p className='text-md text-neutral-500'>{item.description}</p>
            </div>
              

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
