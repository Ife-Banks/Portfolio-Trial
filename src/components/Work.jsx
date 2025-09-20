// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from "react";
import Slider from "react-slick";
import {sliderVariants,containerVariants, settings} from "./Animations/WorkAnimate";
import WorkData from '../data/WorkData';
import WorkLayout from '../Resuables/Work Layout';
import Headings from '../Resuables/Headings';

const Work = () => {

    return (
         <motion.div 
            className='relative bg-[#27292F] flex justify-center gap-15 py-30 lg:pt-50 z-1 px-4 lg:px-0 '
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            id='work'
        >
           <div className='relative flex w-full lg:w-[70%] mx-auto items-center justify-evenly overflow-visible flex-col lg:flex-row gap-8 lg:gap-0  p-2'>
                {/* Text Content */}
                <Headings text={'Work Process'} subText={'Every project is approached with clarity, precision, and purpose guided by a structured workflow that ensures delivery with performance, usability, and long-term scalability from concept to deployment.'} styp={'lg:text-left w-[90%] mx-auto lg:mx-0 text-center lg:text-lg'} styh1={'lg:text-left'}/>
                {/* Cards Grid */}
                <div className="slider w-[80%] lg:w-[30%] p-2 bg-transparent relative  gradient-border">
  {/* Blur border effect */}
  <div className="absolute rounded-xl border border-white/10 backdrop-blur-sm pointer-events-none " />
  
  <Slider 
    {...settings} 
    className='slide w-auto h-fit flex p-2  relative justify-center items-center '
    variants={sliderVariants}
  >
    {/* Research Card */}
        {WorkData.map((works)=> <WorkLayout 
        key={works.key}
        img={works.img}
        Title={works.Title} 
        details={works.details}/>
        )}
    
    {/* Other cards with same structure */}
  </Slider>
                </div>
            </div>
        </motion.div>
    );
}

export default Work;