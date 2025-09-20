import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import {Link} from 'react-scroll';
import {navBarVariants} from './Animations/Animate'
import MobileNav from '../views/MobileNav';
import LangContext from './context/LangContext';


const Navigate = () => { 
  const {isMenuOpen, setIsMenuOpen} = useContext(LangContext)
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navBarVariants}
      className='flex w-fit mx-auto items-center 
      bg-transparent absolute right-8 lg:top-10  lg:right-1/2 
      lg:translate-x-1/2 justify-between rounded-full lg:rounded-3xl 
      p-1 lg:px-3 border-black/50 border-l-3 border-b-3 shadow-[-6px_6px_12px_rgba(0,0,0,0.2)]'
    >
      {/* Logo Section */}
      {/* <motion.div 
        className='flex gap-3 items-center justify-start w-auto lg:w-[20%]'
        transition={{ delay: 0.2 }}
      >
        <div className='w-11 h-11 flex items-center justify-center flex-col rounded-full bg-[#871be6]'>
          <p className='text-white font-poppins text-xl font-medium'>B</p>
        </div>
        <p className='text-[#cbd6e8] font-workSan text-lg font-medium border'>
        Ife-Banks
        </p>
      </motion.div> */}

      {/* Desktop Navigation */}
      <motion.ul 
        className='hidden lg:flex gap-7 items-center p-2 text-[#ccc] font-workSan text-md font-medium'
        transition={{ delay: 0.3 }}
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
          whileHover={{ 
            
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className='flex justify-center items-center py-2 px-4 rounded-md text-white font-semibold cursor-pointer bg-gradient-to-r from-[#871be6] via-[#871be6]/50 to-transparent backdrop-blur-sm'
        >
          Contact
        </motion.button>
      </motion.ul>

      {/* Mobile Menu Button */}
      <motion.button 
        className='lg:hidden text-[#ccc] p-2 cursor-pointer'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.2 }}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Mobile Menu with AnimatePresence */}
     <MobileNav/>
    </motion.div>
  );
}

export default Navigate;