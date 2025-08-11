import { motion } from 'framer-motion';

const Footer = () => {
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

  const navItems = ['Home', 'About', 'Process', 'Portfolio', 'Blog', 'Services'];

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={navBarVariants}
      className="flex w-full flex-col lg:flex-row items-center relative justify-evenly py-4 px-4 lg:px-40 bg-[#1C222C] gap-3"
    >
      {/* Logo Section - Unchanged */}
      <motion.div 
        className="flex gap-3 items-center justify-start w-auto lg:w-[20%]"
        transition={{ delay: 0.2 }}
      >
        <div className="w-11 h-11 flex items-center justify-center flex-col rounded-full bg-[#871be6]">
          <p className="text-white font-poppins text-xl font-medium">B</p>
        </div>
        <p className="text-[#cbd6e8] font-workSan text-2xl font-medium">
          Ife-Banks
        </p>
      </motion.div>

      {/* Navigation - Enhanced mobile layout */}
      <motion.nav 
        className="w-full lg:w-auto"
        transition={{ delay: 0.3 }}
      >
        <motion.ul 
          className="grid grid-cols-2 lg:flex gap-4 lg:gap-7 items-center justify-center lg:justify-start p-2 text-[#ccc] font-workSan text-sm font-medium"
          variants={menuVariants}
        >
          {navItems.map((item) => (
            <motion.li 
              key={item}
              variants={itemVariants}
              whileHover={{ 
                color: '#fff',
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="cursor-pointer py-2 lg:py-0 text-center lg:text-left"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>

      {/* Copyright - Enhanced for mobile */}
      <motion.div
        className="hidden lg:flex gap-7 items-center p-2 text-[#ccc] font-workSan text-sm font-medium"
        transition={{ delay: 0.4 }}
      >
        Copyright © {new Date().getFullYear()} Ife-Banks.
      </motion.div>

      {/* Mobile Copyright - Only shows on mobile */}
      <motion.p 
        className="lg:hidden text-[#929aa7] text-xs mt-4 text-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} Ife-Banks. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;