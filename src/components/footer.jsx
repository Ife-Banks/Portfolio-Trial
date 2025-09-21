// eslint-disable-next-line no-unused-vars
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

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={navBarVariants}
      className="flex w-full flex-col lg:flex-row items-center relative justify-evenly py-4 px-4 lg:px-40 bg-[#1C222C] gap-3 lg:pt-40"
    >
      {/* Copyright - Enhanced for mobile */}
      <motion.div
        className="flex gap-1 items-center p-2 text-[#ccc] tracking-wide text-lg font-light"
        transition={{ delay: 0.4 }}
      >
        <span className='font-poppins italic'>Copyright © {new Date().getFullYear()}</span><span className='font-IBM italic'>Ife-Banks.</span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;