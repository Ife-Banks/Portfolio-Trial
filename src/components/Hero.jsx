// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {containerVariants} from "./Animations/Animate"
import SecondHero from './SecondHero'
import Mobile from '../views/MobileHero';
import Desktop from '../views/DesktopHero';
const Hero = () => {
    // Language greeting state
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