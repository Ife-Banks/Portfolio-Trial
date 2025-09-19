import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import potrait from "../assets/potrait.png";
import Lightbtn from '../components/Lightbtn';
import { Typewriter } from 'react-simple-typewriter';
// eslint-disable-next-line no-unused-vars
import {containerVariants,itemVariants,imageVariants,statItemVariants,socialCardVariants } from "../components/Animations/Animate"
function Mobile() {
  return (
     <div className='lg:hidden flex flex-col items-center px-4 gap-8 z-1'>
                {/* Image with animation */}
                <motion.div 
                    className='w-[280px] h-[320px] rounded-2xl overflow-hidden lg:shadow-lg z-1'
                    variants={imageVariants}
                >
                    <motion.img 
                        src={potrait} 
                        alt="Bankole Ifeoluwa" 
                        className='w-full h-full object-cover object-top z-1'
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Text Content - Modified to include greeting */}
                <motion.div className='flex flex-col gap-4 text-center z-1 ' variants={itemVariants}>
                    <motion.h1 
                        className='text-[#cbd6e8] font-workSan text-3xl font-semibold tracking-wide'
                        whileHover={{ scale: 1.02 }}
                    >
                       
                        <div className="">
                          <Typewriter 
                          words={['Hello,', 'Halo,', 'Bonjour,', 'Hallo,']}
                          cursor = 'true'
                          cursorStyle= '_'
                          loop= {0}
                          delaySpeed={3000}
                          />
                          </div>
                        <Typewriter 
                        words={[`I'm Bankole Ifeoluwa`]}
                         />
                    </motion.h1>
                    <motion.p className='text-[#808080] font-workSan text-base font-light'>
                        I'm a Freelance <span className='text-[#871BE6]'>UI/UX Designer </span>and <span className='text-[#871BE6]'>Developer</span> based in London, England.
                    </motion.p>
                    {/* ... rest of your mobile layout */}
                    <Lightbtn text={'Say Hello!'}/>
                </motion.div>

                {/* Stats with animations */}
                <motion.div className='w-full grid grid-cols-1 gap-2 mt-4 z-1' variants={containerVariants}>
                    {[
                        { value: "15 Y.", label: "Experience" },
                        { value: "250+", label: "Project Completed" },
                        { value: "58", label: "Happy Client" }
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            className='rounded-lg p-4 bg-[rgba(67,13,114,0.5)] shadow-md text-center'
                            variants={itemVariants}
                            whileHover="hover"
                            variants={statItemVariants}
                        >
                            <h1 className='text-white text-xl font-bold'>{stat.value}</h1>
                            <p className='text-[#cbd6e8] text-sm'>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
  )
}

export default Mobile