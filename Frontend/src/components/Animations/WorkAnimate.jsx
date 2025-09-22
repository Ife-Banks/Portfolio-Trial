import React from 'react';
import {motion} from "framer-motion";
    const settings = {
    dots: false,
    infinite: true,
    
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    pauseOnHover: true
  };
  
    // Animation variants
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
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

  
const sliderVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "32px 32px 124px 0 rgba(43,56,76,0.1)",
    zIndex: 20,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export{cardVariants, sliderVariants,itemVariants,containerVariants, settings}