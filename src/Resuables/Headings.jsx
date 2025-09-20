import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {itemVariants,containerVariants} from "../components/Animations/WorkAnimate";
function Headings(props) {
  return (
     <motion.main 
        className='w-full lg:w-[45%] flex flex-col p-1 gap-4 lg:gap-2 '
        variants={containerVariants}>
        <motion.h1 
        className={`h1 ${props.styh1} text-center`}
        variants={itemVariants}>
            {props.text}
        </motion.h1>
        <motion.div 
            className={`paragraph ${props.styp}  text-[#95A3B9]`}
            variants={itemVariants}>
            <p>{props.subText}</p>
        </motion.div>
    </motion.main>
  )
}

export default Headings