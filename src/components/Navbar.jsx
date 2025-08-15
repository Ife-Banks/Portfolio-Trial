import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const navBarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navBarVariants}
      className='flex w-full items-center bg-[#2A2C38] relative justify-between py-2 px-4 lg:px-40 '
    >
      {/* Logo Section */}
      <motion.div 
        className='flex gap-3 items-center justify-start w-auto lg:w-[20%]'
        transition={{ delay: 0.2 }}
      >
        <div className='w-11 h-11 flex items-center justify-center flex-col rounded-full bg-[#871be6]'>
          <p className='text-white font-poppins text-xl font-medium'>B</p>
        </div>
        <p className='text-[#cbd6e8] font-workSan text-2xl font-medium'>
        Ife-Banks
        </p>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.ul 
        className='hidden lg:flex gap-7 items-center p-2 text-[#ccc] font-workSan text-md font-medium'
        transition={{ delay: 0.3 }}
      >
      {[
  { name: 'Home', path: '/' },
  { name: 'About', id: '#about' },
  { name: 'Process', id: '#work' },
  { name: 'Portfolio', id: '#portfolio' },
  { name: 'Services', id: '#have-project' }
].map((item) => (
  <motion.a 
    key={item.name}
    href={item.path || item.id}
    whileHover={{ 
      color: '#fff',
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    className='cursor-pointer'
  >
    {item.name}
  </motion.a>
))}
        <motion.button 
          whileHover={{ 
            backgroundColor: '#9a3aed',
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className='flex justify-center items-center py-2 px-4 rounded-md text-white font-semibold bg-[#871be6] cursor-pointer'
        >
          Contact
        </motion.button>
      </motion.ul>

      {/* Mobile Menu Button */}
      <motion.button 
        className='lg:hidden text-[#ccc] p-2'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.2 }}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className='absolute top-16 left-0 w-full bg-[#2a2c38] py-4 px-6 lg:hidden z-50 shadow-lg'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul 
              className='flex flex-col gap-4 text-[#ccc] font-workSan text-md font-medium'
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {['Home', 'About', 'Process', 'Portfolio', 'Blog', 'Services'].map((item) => (
                <motion.li 
                  key={item}
                  variants={itemVariants}
                  whileHover={{ 
                    color: '#fff',
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className='cursor-pointer py-2'
                >
                  {item}
                </motion.li>
              ))}
              <motion.button
                variants={itemVariants}
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
    </motion.div>
  );
}

export default Navigate;