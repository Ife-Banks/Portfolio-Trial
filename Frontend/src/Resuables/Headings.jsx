import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

function Headings(props) {
    return (
        <motion.main
            className={`w-full flex flex-col items-center gap-3 lg:gap-4 ${props.className || ''}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {/* Badge/Label */}
            {props.badge && (
                <motion.div
                    className="inline-block mb-2 px-4 py-2 bg-[#2A2C38]/50 backdrop-blur-sm rounded-full border border-white/10"
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.05,
                        borderColor: 'rgba(135, 27, 230, 0.5)',
                        transition: { duration: 0.3 }
                    }}
                >
          <span className="text-[#871BE6] font-mono text-xs lg:text-sm tracking-wider uppercase font-semibold">
            {props.badge}
          </span>
                </motion.div>
            )}

            {/* Main Heading */}
            <motion.h1
                className={`text-3xl lg:text-5xl xl:text-6xl font-bold text-white ${props.styh1 || 'text-center'}`}
                variants={itemVariants}
            >
                {props.text}
                {props.highlightText && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#871BE6] to-[#C4B5FD]">
            {' '}{props.highlightText}
          </span>
                )}
            </motion.h1>

            {/* Subtext/Description */}
            {props.subText && (
                <motion.div
                    className={`text-[#95A3B9] text-base lg:text-lg max-w-3xl leading-relaxed ${props.styp || 'text-center'} px-4`}
                    variants={itemVariants}
                >
                    <p>{props.subText}</p>
                </motion.div>
            )}
        </motion.main>
    );
}

export default Headings;