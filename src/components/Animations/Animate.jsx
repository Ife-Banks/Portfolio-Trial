 // eslint-disable-next-line no-unused-vars
 import react from 'react';
 // eslint-disable-next-line no-unused-vars
 import {motion} from 'framer-motion';

 const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };


    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, duration: 0.8 }
        }
    };

     const statItemVariants = {
        hover: {
            y: -5,
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };
     const socialCardVariants = {
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};
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

  const itemVariants2 = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };
export {containerVariants,itemVariants,imageVariants, statItemVariants,socialCardVariants,navBarVariants,menuVariants,itemVariants2 }