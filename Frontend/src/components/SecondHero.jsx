import React from 'react';
import { motion } from 'framer-motion';
import Socials from '../data/Socials';
import Icons from './Icons';

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
                    Specializes in building modern websites, fullstack applications, and
                    scalable web services. Experienced with a wide range of frontend
                    technologies including{' '}
                    <span className="text-[#cbd6e8] font-medium">
                        HTML, CSS, JavaScript, React, Tailwind CSS
                    </span>
                    , and component-based frameworks. Backend expertise includes working
                    with{' '}
                    <span className="text-[#cbd6e8] font-medium">
                        Node.js, Express, MongoDB
                    </span>
                    , and integrating RESTful APIs and third-party services. Focuses on
                    creating responsive, user-friendly experiences with clean
                    architecture, efficient data handling, and smooth deployment
                    workflows.
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
                        className="group relative w-full sm:w-auto sm:flex-1 lg:flex-initial"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="absolute -inset-0.5 rounded-lg sm:rounded-xl opacity-70 group-hover:opacity-100 blur transition duration-300" />
                        <div className="relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#871BE6] hover:bg-[#9a3aed] rounded-lg sm:rounded-xl transition-colors">
                            <span className="text-white font-sans text-sm sm:text-base lg:text-lg font-semibold">
                                View Projects
                            </span>
                        </div>
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