import React from 'react'
import IconsData from "../data/IconsData"
import Marquee from "react-fast-marquee";

function Icons() {
  return (
   <div className='relative overflow-hidden bg-transparent p-1 w-[50%] lg:w-[40%] mx-auto mb-2'>
     <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#2a2c38] to-transparent z-10 pointer-events-none "></div>
      {/* Right fade edge */}
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2a2c38] to-transparent z-10 pointer-events-none"></div>
         <div className="w-[100%] mx-auto">
      <Marquee
        speed={30}          // control speed (px/sec)
        gradient={false}    // disable fade edges
        pauseOnHover={true} // stop when hovering
        loop={0}            // infinite loop
      >
        {IconsData.map((icon, index) => (
          <div key={index} className="mx-3">
            {icon.img}
          </div>
        ))}
      </Marquee>
    </div>
   </div>
  )
}

export default Icons