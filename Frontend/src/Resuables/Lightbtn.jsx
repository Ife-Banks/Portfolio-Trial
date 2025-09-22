import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"
function Lightbtn(props) {
  return (
    <motion.a 
        target='#'
         href={props.href}
         id={props.id}
        className={`flex justify-start items-start py-3 px-6  text-white font-semibold bg-[#871be6] hover:bg-[#9a3aed] transition-colors ${props.id === "desktop" ? 'w-fit mx-35 rounded-2xl' : 'mx-auto rounded-md' }`}
        whileHover={{ 
       scale: 1.05,
        boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
       }}
       whileTap={{ scale: 0.98 }}>
         {props.text}
        </motion.a>
  )
}

export default Lightbtn