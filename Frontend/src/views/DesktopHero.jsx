import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import ResponsiveImage from "../components/responsiveImage.jsx";

function FuturisticDesktopHero() {
    const [name, setName] = useState(false);
    const [bio, setBio] = useState(false);
     const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const nameTimer = setTimeout(() => setName(true), 2000);
        const bioTimer = setTimeout(() => setBio(true), 4000);
        return () => {
            clearTimeout(nameTimer);
            clearTimeout(bioTimer);
        };
    }, []);

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

    const stats = [
        { value: "3+", label: "Years Experience", icon: "🎯" },
        { value: "10+", label: "Projects Completed", icon: "🚀" },
        { value: "58", label: "Happy Clients", icon: "⭐" }
    ];

    return (
        <div className='hidden lg:block relative min-h-[50vh]' id='hero'>
            {/* Animated Background Orbs */}
            <motion.div
                className="absolute top-20 right-20 w-96 h-96 bg-[#871BE6]/10 rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 30, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-80 h-80 bg-[#C4B5FD]/10 rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, -30, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.div
                className='max-w-7xl mx-auto px-8 relative z-10'
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Main Content Grid */}
                <div className='grid grid-cols-12 gap-10 items-center'>
                    {/* Left Content - Text */}
                    <motion.div
                        className='col-span-7 flex flex-col gap-8'
                        variants={itemVariants}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-block w-fit px-4 py-2 bg-[#2A2C38]/50 backdrop-blur-sm rounded-full border border-white/10"
                            whileHover={{ scale: 1.05, borderColor: 'rgba(135, 27, 230, 0.5)' }}
                        >
                            <span className="text-[#871BE6] font-mono text-sm tracking-wider uppercase font-semibold">
                                👋 Available for Work
                            </span>
                        </motion.div>

                        {/* Greeting with Typewriter */}
                        <div className='flex flex-col gap-2'>
                            <motion.div
                                className='text-[#95A3B9] font-workSan text-2xl font-light'
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
                            {name && (
                                <motion.h1
                                    className='text-white font-poppins text-6xl font-bold tracking-tight'
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    I'm{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#871BE6] to-[#C4B5FD]">
                                        <Typewriter words={['Bankole Ifeoluwa']} />
                                    </span>
                                </motion.h1>
                            )}

                            {/* Role/Title */}
                            <motion.p
                                className='text-[#cbd6e8] font-workSan text-xl font-medium'
                                variants={itemVariants}
                            >
                                Fullstack Web Developer | Founder | Tech Community Builder
                            </motion.p>
                        </div>

                        {/* Bio */}
                        {bio && (
                            <motion.div
                                className='relative'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                <div className='absolute -inset-1 bg-gradient-to-r from-[#871BE6]/20 to-[#C4B5FD]/20 rounded-2xl blur-3xl' />
                                <div className='relative bg-gradient-to-br from-[#2A2C38]/80 to-[#1f2128]/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10'>
                                    <p className='text-[#95A3B9] font-workSan text-base leading-relaxed'>
                                        <Typewriter
                                            words={[
                                                "I craft scalable digital solutions that drive innovation and social impact.  \n" +
                                                "From building smart utility apps to mentoring future developers, I bring ideas to life with clean code and modern tech stacks like MERN & PERN.\n" +
                                                "\n" +
                                                "🚀 Founder of Devalyze, winner of Selfless Heart TechCon '25  \n" +
                                                "💡 Frontend Developer at Phoenix Technologies & ATC Africa  \n" +
                                                "🎓 Mentor & Intern Lead at Opex Consulting  \n" +
                                                "🌍 Active contributor to CyberGenz, KodeBlock\n"
                                            ]}
                                            cursor={true}
                                            typeSpeed={20}
                                        />
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* CTA Button */}
                        <motion.a
                        href='https://wa.link/msu7w0'
                            target='_blank'
                            rel='noopener noreferrer'
                            
                            className="relative group px-8 py-4 rounded-xl font-semibold text-white overflow-hidden w-fit"
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

                    {/* Right Content - Image & Stats */}
                    <motion.div
                        className='col-span-5 flex flex-col gap-8'
                        variants={itemVariants}
                    >
                        {/* Image Container with Glow */}
                        <motion.div
                            className='relative group'
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                        >
                            {/* Animated Glow Ring */}
                            <motion.div
                                className="absolute -inset-4  rounded-full opacity-30 blur-xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />

                            {/* Image with Border */}
                            {/*<div className="relative">*/}
                            {/*    <div className="absolute -inset-1 bg-gradient-to-br from-[#1a1c23]  to-[#2A2C38] rounded-full blur " />*/}
                            {/*    <motion.img*/}
                            {/*        src={potrait}*/}
                            {/*        alt="Bankole Ifeoluwa"*/}
                            {/*        className='relative rounded-full object-cover object-bottom w-full aspect-square border-4 border-[#2A2C38]'*/}
                            {/*        whileHover={{ scale: 1.05 }}*/}
                            {/*        transition={{ type: "spring", stiffness: 200 }}*/}
                            {/*    />*/}
                            {/*</div>*/}
                            <ResponsiveImage
                            publicId={`WhatsApp_Image_2025-10-10_at_23.29.30_67e6cb04_pzy6yh`}
                            alt="Bankole Ifeoluwa"
                            className='relative rounded-full object-cover object-bottom w-full aspect-square border-4 border-[#2A2C38]'
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            />

                            {/* Floating Tech Icons */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-transparent rounded-2xl flex items-center justify-center "
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <span className="text-3xl">⚡</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-16 h-16 bg-transparent rounded-2xl flex items-center justify-center"
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                            >
                                <span className="text-3xl">💻</span>
                            </motion.div>
                        </motion.div>

                        {/* Stats Cards */}
                        {/*<motion.div*/}
                        {/*    className='grid grid-cols-3 gap-4'*/}
                        {/*    variants={containerVariants}*/}
                        {/*>*/}
                        {/*    {stats.map((stat, index) => (*/}
                        {/*        <motion.div*/}
                        {/*            key={index}*/}
                        {/*            className='group relative'*/}
                        {/*            variants={itemVariants}*/}
                        {/*            whileHover={{ y: -5, scale: 1.05 }}*/}
                        {/*        >*/}
                        {/*            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500" />*/}
                        {/*            <div className='relative bg-gradient-to-br from-[#2A2C38] to-[#1f2128] p-4 rounded-xl border border-white/10 group-hover:border-[#871BE6]/50 transition-all duration-300'>*/}
                        {/*                <div className='flex flex-col items-center gap-2'>*/}
                        {/*                    <span className='text-2xl'>{stat.icon}</span>*/}
                        {/*                    <h3 className='text-white text-2xl font-bold'>{stat.value}</h3>*/}
                        {/*                    <p className='text-[#95A3B9] text-xs text-center font-medium'>{stat.label}</p>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </motion.div>*/}
                        {/*    ))}*/}
                        {/*</motion.div>*/}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                {/*<motion.div*/}
                {/*    className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2'*/}
                {/*    initial={{ opacity: 0 }}*/}
                {/*    animate={{ opacity: 1 }}*/}
                {/*    transition={{ delay: 2 }}*/}
                {/*>*/}
                {/*    <p className='text-[#95A3B9] text-sm font-workSan'>Scroll to explore</p>*/}
                {/*    <motion.div*/}
                {/*        animate={{ y: [0, 10, 0] }}*/}
                {/*        transition={{ duration: 1.5, repeat: Infinity }}*/}
                {/*    >*/}
                {/*        <svg className="w-6 h-6 text-[#871BE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />*/}
                {/*        </svg>*/}
                {/*    </motion.div>*/}
                {/*</motion.div>*/}
            </motion.div>
        </div>
    );
}

export default FuturisticDesktopHero;