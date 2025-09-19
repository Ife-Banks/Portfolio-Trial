// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import potrait from "../assets/potrait.png";
import Lightbtn from './Lightbtn'
import {containerVariants,itemVariants,imageVariants,statItemVariants,socialCardVariants } from "./Animations/Animate"
import LangContext from "./context/LangContext"
import { useContext } from 'react';
import SecondHero from './SecondHero'
import { Typewriter } from 'react-simple-typewriter';
import Mobile from '../views/MobileHero';
import Desktop from '../views/DesktopHero';
const Hero = () => {
    // Language greeting state
   const currentGreeting = useContext(LangContext)
    return (
        <motion.div 
            className='w-full lg:w-[85%] mx-auto mt-10 lg:mt-30 flex flex-col gap-30 overflow-visible'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            id='hero'
        >
            {/* Mobile Layout (lg:hidden) */}
            <Mobile/>
            {/* Desktop Layout (hidden on mobile) */}
           <Desktop />

            {/* ... rest of your component */}
            {/* Second card */}
          <SecondHero/>
        </motion.div>
    );
}

export default Hero;