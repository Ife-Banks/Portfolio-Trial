import React, {useContext} from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import LangContext from './context/LangContext';
import ResponsiveImage from "./responsiveImage.jsx";

function PortfolioLayout(props) {
  const {setIde,setIsModalOpen} =useContext(LangContext)
     const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: props.index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(135, 27, 230, 0.2)",
      transition: { type: "spring", stiffness: 300 }
    }
  };
    const settingIDE = () => {
        setIde(props.id)
        setIsModalOpen(prev => !prev)
        
    }
  return (
     <motion.div 
      className='border flex flex-col gap-4 rounded-lg border-[#474C54] shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] pb-5  lg:w-full w-[100%] h-auto mx-auto'
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      
    >
      <motion.div 
        className='overflow-hidden rounded-t-lg'
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/*<img */}
        {/*  src={props.image} */}
        {/*  alt={props.alt}  */}
        {/*  className='object-cover object-center h-48 w-full'*/}
        {/*/>*/}
          <ResponsiveImage
              publicId={props.image}
              alt={props.alt}
              className='object-cover object-center h-48 w-full'
          />
      </motion.div>
      <div className='flex flex-col gap-3 px-2'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col '>
            {/* <p className='uppercase font-workSan text-xs font-light text-[#646B76]'>{props.category}</p> */}
            <h2 className='font-workSan text-xl font-medium text-[#CBD6E8]'>{props.title}</h2>
          </div>
          <p className='text-[#929aa7] font-workSan text-xs/5 font-normal'>
            {props.description}
          </p>
        </div>
        <motion.button 
           onClick={settingIDE}
          className='w-full sm:w-fit flex justify-center items-center py-2 px-3 rounded-md text-white font-semibold border border-[#871be6] cursor-pointer gap-3'
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className='text-[#a43dff] font-workSan text-base lg:text-lg font-medium'>Case Study</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.92 11.6199C17.8724 11.4972 17.801 11.385 17.71 11.2899L12.71 6.28994C12.6168 6.1967 12.5061 6.12274 12.3842 6.07228C12.2624 6.02182 12.1319 5.99585 12 5.99585C11.7337 5.99585 11.4783 6.10164 11.29 6.28994C11.1968 6.38318 11.1228 6.49387 11.0723 6.61569C11.0219 6.73751 10.9959 6.86808 10.9959 6.99994C10.9959 7.26624 11.1017 7.52164 11.29 7.70994L14.59 10.9999H7C6.73478 10.9999 6.48043 11.1053 6.29289 11.2928C6.10536 11.4804 6 11.7347 6 11.9999C6 12.2652 6.10536 12.5195 6.29289 12.707C6.48043 12.8946 6.73478 12.9999 7 12.9999H14.59L11.29 16.2899C11.1963 16.3829 11.1219 16.4935 11.0711 16.6154C11.0203 16.7372 10.9942 16.8679 10.9942 16.9999C10.9942 17.132 11.0203 17.2627 11.0711 17.3845C11.1219 17.5064 11.1963 17.617 11.29 17.7099C11.383 17.8037 11.4936 17.8781 11.6154 17.9288C11.7373 17.9796 11.868 18.0057 12 18.0057C12.132 18.0057 12.2627 17.9796 12.3846 17.9288C12.5064 17.8781 12.617 17.8037 12.71 17.7099L17.71 12.7099C17.801 12.6148 17.8724 12.5027 17.92 12.3799C18.02 12.1365 18.02 11.8634 17.92 11.6199Z" fill="#871BE6"/>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default PortfolioLayout