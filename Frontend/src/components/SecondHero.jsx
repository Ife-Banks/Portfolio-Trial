import React, {useState} from 'react';
import { motion } from 'framer-motion';
import Socials from '../data/Socials';
import Icons from './Icons';
import { Link } from 'react-scroll';

function FuturisticSecondHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

         const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative flex flex-col lg:flex-row w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#1f2128]/90 to-[#2A2C38]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(135,27,230,0.15)] lg:-mb-20 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:place-self-end items-center justify-between z-10 mx-auto lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            id="about"
        >
            {/* Subtle Animated Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#871BE6]/5 to-[#C4B5FD]/5 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl pointer-events-none"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* LEFT: Social Sidebar (Desktop Only) */}
            <motion.div
                className="hidden lg:flex flex-col gap-3 xl:gap-4 relative z-10 items-center justify-center lg:mr-6 xl:mr-8"
                variants={containerVariants}
            >
                <motion.div
                    className="text-[#871BE6] font-mono text-[10px] xl:text-xs tracking-wider uppercase font-semibold mb-2 xl:mb-4 -rotate-90 origin-center whitespace-nowrap"
                    variants={itemVariants}
                >
                    Connect
                </motion.div>

                {Socials.map((item, index) => (
                    <motion.a
                        key={item.key}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ scale: 1.1, y: -5 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500" />
                        <div
                            className={`relative p-2 xl:p-3 flex items-center justify-center h-10 w-10 xl:h-12 xl:w-12 rounded-lg transition-all duration-300 ${
                                item.bg
                                    ? 'bg-[#871be6] shadow-lg'
                                    : 'bg-[#2A2C38]/80 border border-white/10 group-hover:border-[#871BE6]/50'
                            }`}
                        >
                            {item.img}
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            {/* RIGHT: Main Content */}
            <motion.div
                className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5 relative z-10 lg:pl-6 xl:pl-10 text-center lg:text-left w-full"
                variants={containerVariants}
            >
                {/* About Badge */}
                <motion.div
                    className="inline-block mx-auto lg:mx-0 w-fit px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2A2C38]/50 backdrop-blur-sm rounded-full border border-white/10"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(135, 27, 230, 0.5)' }}
                >
                    <span className="text-[#871BE6] font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold">
                        💼 About Me
                    </span>
                </motion.div>

                {/* Centered Tech Icons */}
                <motion.div
                    className="flex justify-center lg:justify-start"
                    variants={itemVariants}
                >
                    <Icons />
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-[#95A3B9] font-sans text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0 text-justify sm:text-center lg:text-left px-2 sm:px-0"
                    variants={itemVariants}
                >
                    I'm a fullstack developer passionate about solving problems through code and driving social impact.
                    I founded  <span className="text-[#cbd6e8] font-medium">
                       Devalyze
                    </span>, a smart link utility app turned startup, which won top honors at <span className="text-[#cbd6e8] font-medium">
                      Selfless Heart TechCon '25
                    </span>.
                    I've built platforms like  <span className="text-[#cbd6e8] font-medium">
                      MyPDMTutors (Phoenix Technologies), Finance Daily (Opex Consulting), and SheInnovate (ATC Africa)
                    </span>, focusing on responsive design, accessibility, and regional tech growth. As a software tester at <span className="text-[#cbd6e8] font-medium">
                      Test.io
                    </span>, I ensured quality across global platforms.
                    Beyond development, I lead at <span className="text-[#cbd6e8] font-medium">
                     CyberGenz
                    </span>, mentor interns, and actively contribute to communities like <span className="text-[#cbd6e8] font-medium">
                    KodeBlock
                    </span> —all while turning ideas into immersive digital experiences.

                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center lg:justify-start mt-4 sm:mt-6"
                    variants={itemVariants}
                >
                    {/* Download CV */}
                    <motion.a
                        href="/path-to-cv.pdf"
                        download
                        className="group relative w-full sm:w-auto sm:flex-1 lg:flex-initial"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500" />
                        <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-[#871BE6] bg-transparent group-hover:bg-[#871BE6]/10 transition-all duration-300">
                            <span className="text-[#871BE6] font-sans text-sm sm:text-base lg:text-lg font-semibold group-hover:text-white transition-colors">
                                Download CV
                            </span>
                        </div>
                    </motion.a>

                    {/* View Projects */}
                     <motion.a
                                            href="#portfolio"
                                                
                                                                                className="relative group px-8 py-4 rounded-xl font-semibold text-white overflow-hidden lg:w-fit flex items-center justify-center"
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

                {/* Mobile Social Links */}
                <motion.div
                    className="lg:hidden flex gap-3 sm:gap-4 justify-center mt-4 sm:mt-6 flex-wrap"
                    variants={containerVariants}
                >
                    {Socials.map((item, index) => (
                        <motion.a
                            key={item.key}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                            variants={itemVariants}
                            custom={index}
                            whileHover={{ scale: 1.1, y: -5 }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500" />
                            <div
                                className={`relative p-2 sm:p-2.5 flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-lg transition-all duration-300 ${
                                    item.bg
                                        ? 'bg-[#871be6] shadow-lg'
                                        : 'bg-[#2A2C38]/80 border border-white/10 group-hover:border-[#871BE6]/50'
                                }`}
                            >
                                {item.img}
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Soft Accent */}
            <motion.div
                className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#871BE6]/10 to-transparent rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
            />
        </motion.div>
    );
}

export default FuturisticSecondHero;