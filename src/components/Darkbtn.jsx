/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
function Darkbtn(props) {
  return (
    <motion.button 
          className='w-full sm:w-fit flex justify-center items-center py-3 px-4 rounded-md text-white font-semibold border border-[#871be6] cursor-pointer gap-3'
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
         
          <p className='text-[#a43dff] font-workSan text-base lg:text-lg font-medium'>{props.text}</p>
           {props.svg}
        </motion.button>
  )
}

export default Darkbtn