import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Socials from '../data/Socials';
import ResponsiveImage from "../components/responsiveImage.jsx"

function FuturisticMobileHero() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const description = `I craft scalable digital solutions that drive innovation and social impact. 
    From building smart utility apps to mentoring future developers, 
    I bring ideas to life with clean code and modern tech stacks like MERN & PERN. 
    🚀 Founder of Devalyze, winner of Selfless Heart TechCon '25 +
💡 Frontend Developer at Phoenix Technologies & ATC Africa,🎓 
Mentor & Intern Lead at Opex Consulting, 🌍 Active contributor to CyberGenz, KodeBlock`;

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(" ") + "...";
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
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

    return (
        <div className='lg:hidden relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-5 pb-5 overflow-hidden' id='hero'>
            {/* Animated Background Orbs */}
            <motion.div
                className="absolute top-20 right-0 w-64 h-64 bg-[#871BE6]/15 rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 20, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-0 w-56 h-56 bg-[#C4B5FD]/15 rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -20, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <motion.div
                className='relative z-10 flex flex-col items-center gap-7 w-full max-w-md'
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Badge */}
                <motion.div
                    className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2A2C38]/50 backdrop-blur-sm rounded-full border border-white/10"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(135, 27, 230, 0.5)' }}
                >
          <span className="text-[#871BE6] font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold">
            👋 Available for Work
          </span>
                </motion.div>

                {/* Image Section with Floating Icons */}
                <motion.div
                    className='relative flex flex-col items-center gap-4'
                    variants={itemVariants}
                >
                    {/* Image Container with Glow */}
                    <div className='relative group'>
                        {/* Animated Glow Ring */}
                        <motion.div
                            className="absolute -inset-3 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-full opacity-20 blur-xl"
                            animate={{
                                scale: [1, 1.15, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                        />

                        {/* Image Border Effect */}
                        <div className="relative">
                            <div className="absolute -inset-1  rounded-full blur-3xl opacity-50" />
                            {/*<motion.img*/}
                            {/*    src={potrait}*/}
                            {/*    alt="Bankole Ifeoluwa"*/}
                            {/*    className='relative rounded-full object-cover object-bottom h-40 w-40 sm:h-48 sm:w-48 border-4 border-[#2A2C38]'*/}
                            {/*    whileHover={{ scale: 1.05 }}*/}
                            {/*    transition={{ type: "spring", stiffness: 200 }}*/}
                            {/*/>*/}
                            <ResponsiveImage publicId={`WhatsApp_Image_2025-10-10_at_23.29.30_67e6cb04_pzy6yh`} alt={`Image`}
                                             className='relative rounded-full object-cover object-bottom h-40 w-40 sm:h-48 sm:w-48 border-4 border-[#2A2C38]'/>
                        </div>

                        {/* Floating Tech Icons */}
                        <motion.div
                            className="absolute -top-2 -right-2 w-12 h-12 bg-[#2A2C38]/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10"
                            animate={{
                                y: [0, -8, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <span className="text-2xl">⚡</span>
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-2 -left-2 w-12 h-12 bg-[#2A2C38]/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10"
                            animate={{
                                y: [0, 8, 0],
                                rotate: [0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        className='flex gap-2 items-center bg-[#2A2C38]/50 backdrop-blur-sm rounded-full p-2 border border-white/10'
                        variants={itemVariants}
                    >
                        {Socials.map((item, index) => (
                            <motion.a
                                key={item.key}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative p-2 flex gap-2 items-center justify-center h-7 w-7 rounded-lg transition-all duration-300 ${
                                    item.bg
                                        ? 'bg-[#871be6] shadow-lg'
                                        : 'bg-[#1f2128] border border-white/10'
                                }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * index }}
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-300" />
                                <div className='relative'>{item.img}</div>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className='flex flex-col gap-6 text-center items-center w-full'
                    variants={containerVariants}
                >
                    {/* Greeting */}
                    <motion.div
                        className='text-[#95A3B9] font-workSan text-lg sm:text-xl font-light'
                        variants={itemVariants}
                    >
                        <Typewriter
                            words={['Hello,', 'Halo,', 'Bonjour,', 'Hallo,']}
                            cursor={true}
                            cursorStyle='_'
                            loop={0}
                            delaySpeed={3000}
                        />
                    </motion.div>

                    {/* Name */}
                    {showContent && (
                        <motion.h1
                            className='text-white font-poppins text-3xl sm:text-4xl font-bold tracking-tight'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            I'm{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#871BE6] to-[#C4B5FD]">
                Bankole Ifeoluwa
              </span>
                        </motion.h1>
                    )}

                    {/* Role */}
                    <motion.p
                        className='text-[#cbd6e8] font-workSan text-sm sm:text-base font-medium'
                        variants={itemVariants}
                    >
                        Fullstack Web Developer
                    </motion.p>

                    {/* Description Card */}
                    <motion.div
                        className='relative w-full'
                        variants={itemVariants}
                    >
                        <div className='absolute -inset-1 bg-gradient-to-r from-[#871BE6]/20 to-[#C4B5FD]/20 rounded-2xl blur-lg' />
                        <div className='relative bg-gradient-to-br from-[#2A2C38]/80 to-[#1f2128]/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/10'>
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={isExpanded ? 'expanded' : 'collapsed'}
                                    className='text-[#95A3B9] font-workSan text-sm sm:text-base font-light leading-relaxed'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isExpanded ? description : truncateText(description, 25)}
                                </motion.p>
                            </AnimatePresence>

                            <motion.button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-3 text-[#871BE6] font-semibold text-sm hover:text-[#9a3aed] transition-colors inline-flex items-center gap-1"
                                whileHover={{ x: 3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <svg
                                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.a
                                           href='https://wa.link/msu7w0'
                                               target='_blank'
                                               rel='noopener noreferrer'
                                               
                                               className="relative group px-8 py-4 rounded-xl font-semibold text-white overflow-hidden w-full flex items-center justify-center"
                                                onHoverStart={() => setIsHovered(true)}
                                               onHoverEnd={() => setIsHovered(false)}
                                               whileHover={{ scale: 1.02 }}
                                               whileTap={{ scale: 0.98 }}
                                                                           >
                                                                               {/* Button Background */}
                                                                               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300" />
                                                                               <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                           
                                                                               {/* Shine Effect */}
                                                                               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                           
                                                                               <span className="relative flex items-center gap-2">
                                                               Say Hello!
                                                               <motion.svg
                                                                   xmlns="http://www.w3.org/2000/svg"
                                                                   width="20"
                                                                   height="20"
                                                                   viewBox="0 0 25 24"
                                                                   fill="none"
                                                                   animate={isHovered ? {
                                                                       x: [0, 5, 0],
                                                                       transition: { repeat: Infinity, duration: 0.8 }
                                                                   } : {}}
                                                               >
                                                                 <path
                                                                     d="M18.42 11.6202C18.3724 11.4974 18.301 11.3853 18.21 11.2902L13.21 6.29019C13.1168 6.19695 13.0061 6.12299 12.8842 6.07253C12.7624 6.02207 12.6319 5.99609 12.5 5.99609C12.2337 5.99609 11.9783 6.10188 11.79 6.29019C11.6968 6.38342 11.6228 6.49411 11.5723 6.61594C11.5219 6.73776 11.4959 6.86833 11.4959 7.00019C11.4959 7.26649 11.6017 7.52188 11.79 7.71019L15.09 11.0002H7.5C7.23478 11.0002 6.98043 11.1055 6.79289 11.2931C6.60536 11.4806 6.5 11.735 6.5 12.0002C6.5 12.2654 6.60536 12.5198 6.79289 12.7073C6.98043 12.8948 7.23478 13.0002 7.5 13.0002H15.09L11.79 16.2902C11.6963 16.3831 11.6219 16.4937 11.5711 16.6156C11.5203 16.7375 11.4942 16.8682 11.4942 17.0002C11.4942 17.1322 11.5203 17.2629 11.5711 17.3848C11.6219 17.5066 11.6963 17.6172 11.79 17.7102C11.883 17.8039 11.9936 17.8783 12.1154 17.9291C12.2373 17.9798 12.368 18.006 12.5 18.006C12.632 18.006 12.7627 17.9798 12.8846 17.9291C13.0064 17.8783 13.117 17.8039 13.21 17.7102L18.21 12.7102C18.301 12.6151 18.3724 12.5029 18.42 12.3802C18.52 12.1367 18.52 11.8636 18.42 11.6202Z"
                                                                     fill="white"
                                                                 />
                                                               </motion.svg>
                                                             </span>
                                            </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                {/*<motion.div*/}
                {/*    className='flex flex-col items-center gap-2 mt-4'*/}
                {/*    initial={{ opacity: 0 }}*/}
                {/*    animate={{ opacity: 1 }}*/}
                {/*    transition={{ delay: 1.5 }}*/}
                {/*>*/}
                {/*    <p className='text-[#95A3B9] text-xs font-workSan'>Scroll to explore</p>*/}
                {/*    <motion.div*/}
                {/*        animate={{ y: [0, 8, 0] }}*/}
                {/*        transition={{ duration: 1.5, repeat: Infinity }}*/}
                {/*    >*/}
                {/*        <svg className="w-5 h-5 text-[#871BE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />*/}
                {/*        </svg>*/}
                {/*    </motion.div>*/}
                {/*</motion.div>*/}
            </motion.div>
        </div>
    );
}

export default FuturisticMobileHero;