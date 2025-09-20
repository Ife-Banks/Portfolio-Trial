import React,{useContext} from 'react'
import {Link} from 'react-scroll';
// eslint-disable-next-line no-unused-vars
import {motion, AnimatePresence} from "framer-motion"
import{menuVariants,itemVariants2 } from '../components/Animations/Animate'
import LangContext from "../components/context/LangContext"
function MobileNav() {
    const {isMenuOpen} = useContext(LangContext)
  return (
    
     <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className='absolute top-14 -left-7 w-fit bg-[#2a2c38] py-4 px-4 lg:hidden z-50  shadow-[6px_6px_12px_rgba(0,0,0,0.2)] '
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul 
              className='flex flex-col gap-4 text-[#ccc] font-workSan text-md font-medium items-center'
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
               {[
  { name: 'Home', path: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Process', id: 'work' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Services', id: 'have-project' }
].map((item) => (
  <Link 
    key={item.name}
    to={item.path || item.id}
    smooth={true} duration={500}
    whileHover={{ 
      color: '#fff',
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    className='cursor-pointer'
  >
    {item.name}
  </Link>
))}
              <motion.button
                variants={itemVariants2}
                whileHover={{ 
                  backgroundColor: '#9a3aed',
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className='w-full flex justify-center items-center py-3 mt-2 rounded-md text-white font-semibold bg-[#871be6] cursor-pointer'
              >
                Contact
              </motion.button>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default MobileNav