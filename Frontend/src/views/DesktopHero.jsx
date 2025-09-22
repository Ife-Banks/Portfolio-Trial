import React, { useState,useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import potrait from "../assets/IfeBanks.jpg";
import Lightbtn from '../Resuables/Lightbtn';
import { Typewriter } from 'react-simple-typewriter';
// eslint-disable-next-line no-unused-vars
import {containerVariants,itemVariants,imageVariants,statItemVariants,socialCardVariants } from "../components/Animations/Animate"
function Desktop() {
    const [name, setName] = useState(false)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setName(true)
        },2000)
        return ()=>{clearTimeout(timer)}
    },[])
    const [bio, setBio] = useState(false)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setBio(true)
        },4000)
        return ()=>{clearTimeout(timer)}
    },[])

  return (
     <div className='hidden lg:grid grid-flow-col grid-rows-1.5 gap-10 z-1 pt-10 min-h-90'>
                <motion.div 
                    className='w-[93%] p-1 flex flex-col gap-5'
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='flex gap-5.5 items-center'>
                         <motion.div 
                    className='row-span-2 z-1 rounded-full  place-self-start'
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    <motion.img 
                        src={potrait} 
                        alt="" 
                        className=' rounded-full bg-gradient-to-tr from-black via-black/15 to-[#2A2C38] object-contain object-center h-30 w-30 hover transition transform z-1' 
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    </motion.div>
                    <motion.h1 
                        className='text-[#cbd6e8] font-poppins text-5xl/13 font-medium tracking-wide text-left w-[85%]'
                        whileHover={{ scale: 1.02, x:10,type:"stiffness" }}
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
                       {name && <Typewriter 
                        words={[`I'm Bankole Ifeoluwa`]}
                         />}
                    </motion.h1>
                    </div>
                    {bio && <motion.p 
                        className='px-35 text-justify text-[#95A3B9] font-workSan text-md/5 font-light w-[80%] transition-all duration-300 ease-in-out'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    > 
                       <Typewriter
                       words={["I'm a Web Developer based in Lagos, Nigeria. I focus on building responsive and functional web applications using clean code and user-centered logic. My goal is to create immersive digital experiences by combining frontend tools like React and Tailwind CSS with backend technologies such as Express and MongoDB. Every project I work on is crafted with care from dynamic interfaces to fullstack systems that solve real-world problems."]}
                       cursor="true"
                       typeSpeed={30}
                       />

                    </motion.p>}
                    <Lightbtn text={'Say Hello!'} id={'desktop'} href={'https://wa.link/msu7w0'} />
                </motion.div>

                {/* <motion.div 
                    className='flex justify-between w-[93%] flex-wrap bg-[#2a2c38] z-1'
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {[
                        { value: "3 Yrs.", label: "Experience", className: "rounded-l-lg w-[32.5%]" },
                        { value: "10+", label: "Project Completed", className: "w-[32.5%]" },
                        { value: "58", label: "Happy Client", className: "rounded-r-lg w-[32.5%]" }
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            className={`flex flex-col justify-center items-center bg-[rgba(67,13,114,0.5)] shadow-[0_24px_116px_0_rgba(43,56,76,0.09)] ${stat.className}`}
                            whileHover={{ 
                                y: -5,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <h1 className='text-[#a2acba] text-center font-workSan text-3xl font-semibold'>{stat.value}</h1>
                            <p className='text-[#7F8794] text-center font-workSan text-sm font-light'>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div> */}

               
            </div>
  )
}

export default Desktop