import React from 'react'
import {motion} from "framer-motion"
import potrait from "../assets/potrait.png";
import Socials from './Socials'
import Lightbtn from './Lightbtn'
import Darkbtn from './Darkbtn'
// eslint-disable-next-line no-unused-vars
import {containerVariants,itemVariants,imageVariants,statItemVariants,socialCardVariants } from "./Animations/Animate"
function SecondHero() {
  return (
    <motion.div 
    className='inline-flex flex-col lg:flex-row lg:w-full mx-auto items-center justify-center lg:justify-evenly rounded-xl bg-[#2a2c38] -z-0 lg:z-2 shadow-[0_36px_105px_0_rgba(43,56,76,0.1)] lg:-mb-20 p-6 lg:p-0 gap-8 lg:gap-0'
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    id='about'
  >
    {/* Image section */}
    <motion.div 
      className='z-1 rounded-2xl w-[280px] h-[320px] lg:w-auto lg:h-auto relative'
      variants={imageVariants}
    >
      <img 
        src={potrait} 
        alt="Professional UX Designer" 
        className='rounded-xl object-cover object-top w-full h-full lg:h-110 lg:w-90 -z-1'
      />
      
      <motion.div 
        className='absolute bottom-10 place-self-center inset-x-0 inline-flex px-3 py-2 items-center justify-center rounded-lg bg-[#2a2c38] shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] gap-3'
        variants={itemVariants}
      >
        {Socials.map((item) => (
          <motion.a 
            key={item.key}
            href={item.link}
            className={`p-2 flex flex-col justify-center items-center gap-2 ${item.bg ? 'bg-[#871be6] rounded-md shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]' : ''}`}
            variants={socialCardVariants}
            whileHover="hover"
          >
            {item.img}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>

    {/* Content section */}
    <motion.div 
      className='w-full lg:w-[45%] flex flex-col p-1 gap-4 lg:gap-2'
      variants={containerVariants}
    >
      <motion.h1 
        className='h1 lg:text-left text-center'
        variants={itemVariants}
      >
        I am Professional User Experience Designer
      </motion.h1>
      
      <motion.div 
        className='paragraph lg:text-left text-center'
        variants={itemVariants}
      >
        <p>I design and develop services for customers specializing in creating stylish, modern websites, web services and online stores.</p>
        <p className='hidden lg:block'>My passion is to design digital user experiences through carefully crafted interfaces.</p>
      </motion.div>
      
      <motion.div 
        className='flex w-fit mx-auto lg:mx-0 flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start p-1 mt-2'
        variants={itemVariants}
      >
       <Lightbtn text={'My Projects'} />
        <Darkbtn text={'Download CV'} svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15C4 14.7348 3.89464 14.4804 3.70711 14.2929C3.51957 14.1054 3.26522 14 3 14C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.7397 15.9729 11.8691 16.0002 12 16.0002C12.1309 16.0002 12.2603 15.9729 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29L13 12.59V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V12.59L8.71 10.29C8.61676 10.1968 8.50607 10.1228 8.38425 10.0723C8.26243 10.0219 8.13186 9.99591 8 9.99591C7.86814 9.99591 7.73757 10.0219 7.61575 10.0723C7.49393 10.1228 7.38324 10.1968 7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3842C7.1228 11.5061 7.19676 11.6168 7.29 11.71L11.29 15.71Z" fill="#871BE6"/>
                  </svg>}/>
      </motion.div>
    </motion.div>
  </motion.div>
  )
}

export default SecondHero