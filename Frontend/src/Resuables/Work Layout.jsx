import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"
import { cardVariants } from '../components/Animations/WorkAnimate'
import { GrWorkshop } from 'react-icons/gr'
import WorkData from '../data/WorkData'

function WorkLayout(props) {
  return (
     <motion.div 
        className=' p-4 lg:p-2 flex flex-col items-start gap-3 rounded-xl bg-[#2A2C38] shadow-lg lg:shadow-[32px_32px_124px_0_rgba(43,56,76,0.1)] place-self-center'
        variants={cardVariants}
        whileHover="hover">
            <div className={`w-12 h-12 lg:w-15 lg:h-15 flex items-center justify-center rounded-md shadow-md ${props.Title === "1. Research"?'bg-[#871be6]' : 'bg-[rgba(67,13,114,0.5)]'}`}>
                {props.img}
            </div>
            <div className='gap-2 flex flex-col'>
                <h1 className='text-[#cbd6e8] font-workSan text-lg lg:text-xl font-semibold'>{props.Title}</h1>
                <p className='text-[#95A3B9] font-workSan text-sm lg:text-sm/5 font-normal'>
                
                {props.details}
                </p>
            </div>
    </motion.div>
  )
}

export default WorkLayout