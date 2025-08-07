import { motion } from 'framer-motion';
import potrait from "/public/potrait.png";
import { useEffect, useState } from 'react';

const Hero = () => {
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


    
    return (
        <motion.div 
            className=' w-full lg:w-[75%] mx-auto mt-10 lg:mt-30 flex flex-col gap-50  overflow-visible'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Mobile Layout (lg:hidden) */}
            <div className='lg:hidden flex flex-col items-center px-4 gap-8 z-1'>
                {/* Image with animation */}
                <motion.div 
                    className='w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-lg z-1'
                    variants={imageVariants}
                >
                    <motion.img 
                        src={potrait} 
                        alt="Bankole Ifeoluwa" 
                        className='w-full h-full object-cover object-top z-1'
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div className='flex flex-col gap-4 text-center z-1' variants={itemVariants}>
                    <motion.h1 
                        className='text-[#cbd6e8] font-workSan text-3xl font-semibold tracking-wide'
                        whileHover={{ scale: 1.02 }}
                    >
                        Hello, I'm Bankole Ifeoluwa
                    </motion.h1>
                    <motion.p className='text-[#808080] font-workSan text-base font-light'>
                        I'm a Freelance <span className='text-[#871BE6]'>UI/UX Designer </span>and <span className='text-[#871BE6]'>Developer</span> based in London, England.
                    </motion.p>
                    <motion.a 
                    href='https://wa.link/msu7w0'
                        className='mx-auto py-3 px-6 rounded-md text-white font-semibold bg-[#871be6] hover:bg-[#9a3aed] transition-colors'
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Say Hello!
                    </motion.a>
                </motion.div>

                {/* Stats with animations */}
                <motion.div className='w-full grid grid-cols-1 gap-2 mt-4 z-1' variants={containerVariants}>
                    {[
                        { value: "15 Y.", label: "Experience" },
                        { value: "250+", label: "Project Completed" },
                        { value: "58", label: "Happy Client" }
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            className='rounded-lg p-4 bg-[rgba(67,13,114,0.5)] shadow-md text-center'
                            variants={itemVariants}
                            whileHover="hover"
                            variants={statItemVariants}
                        >
                            <h1 className='text-white text-xl font-bold'>{stat.value}</h1>
                            <p className='text-[#cbd6e8] text-sm'>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Desktop Layout (hidden on mobile) */}
            <div className='hidden lg:grid grid-flow-col grid-rows-1.5 gap-10 z-1 '>
                <motion.div 
                    className='w-[93%] p-1 flex flex-col gap-4'
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        className='text-[#cbd6e8] font-workSan text-5xl/13 font-semibold tracking-wide text-left w-[79%]'
                        whileHover={{ scale: 1.02 }}
                    >
                        Hello, I'm Bankole Ifeoluwa
                    </motion.h1>
                    <motion.p 
                        className='text-left text-[#556070] font-workSan text-md/5 font-light w-[92%]'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    > 
                        I'm a Freelance <span className='text-[#871BE6]'>UI/UX Designer </span>and <span className='text-[#871BE6]'>Developer</span> based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
                    </motion.p>
                    <motion.a 
                        href='https://wa.link/msu7w0'
                        className='place-self-start w-25 flex justify-center items-center py-3 px-3 mt-2 rounded-md text-white font-semibold bg-[#871be6] cursor-pointer'
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: '#9a3aed',
                            boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Say Hello!
                    </motion.a>
                </motion.div>

                <motion.div 
                    className='flex gap-1 w-[93%] flex-wrap bg-[#2a2c38] z-1'
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {[
                        { value: "4 Yrs.", label: "Experience", className: "rounded-l-lg w-[32.5%]" },
                        { value: "10+", label: "Project Completed", className: "w-[32.5%]" },
                        { value: "58", label: "Happy Client", className: "rounded-r-lg w-[32.5%]" }
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            className={`flex flex-col justify-center items-center bg-[rgba(67,13,114,0.5)] shadow-[0_24px_116px_0_rgba(43,56,76,0.09)] ${stat.className}`}
                            whileHover={{ 
                                y: -5,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <h1 className='text-[#a2acba] text-center font-workSan text-2xl font-semibold'>{stat.value}</h1>
                            <p className='text-[7f8794] text-center font-workSan text-sm font-light'>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className='row-span-2 z-1 rounded-2xl shadow-[0_24px_116px_0_rgba(43,56,76,0.09)]'
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    <motion.img 
                        src={potrait} 
                        alt="" 
                        className='shadow-[0_24px_116px_0_rgba(43,56,76,0.09)] rounded-xl object-cover object-top h-110 w-90 bg-[#2A2C38] z-1' 
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>
            </div>


{/* Second card */}

            <div className='inline-flex w-full mx-auto items-center justify-evenly rounded-xl bg-[#2a2c38] z-2  shadow-[0_36px_105px_0_rgba(43,56,76,0.1)] -mb-30'>
                    <div className='z-1 rounded-2xl'>
                        <img src={potrait} alt="" className='rounded-xl object-cover object-top h-110 w-90 z-1 '/>
                    </div>
                    <div className='w-[45%] flex flex-col p-1 gap-2'>
                        <h1 className='self-stretch text-[#cbd6e8] font-workSan text-2xl font-semibold text-left p-1 w-[70%] tracking-wide'>
                            I am Professional User Experience Designer
                        </h1>
                       <div className='flex flex-col gap-1 text-[#929aa7] font-workSan text-sm/6 font-normal text-left w-[91%] '>
                         <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                        <p>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                       </div>
                       <div className='flex gap-4 items-center justify-start p-1 '>
                        <motion.a 
                        href='https://wa.link/msu7w0'
                        className=' w-fit flex justify-center items-center py-3 px-6 mt-2 rounded-md text-white font-semibold bg-[#871be6] cursor-pointer'
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: '#9a3aed',
                            boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        My Projects
                    </motion.a>
                        <motion.button className='w-fit flex justify-center items-center py-3 px-4 mt-2 rounded-md text-white font-semibold border border-[#871be6] cursor-pointer gap-3'
                        whileHover={{ 
                            scale: 1.05,
                            
                            boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15C4 14.7348 3.89464 14.4804 3.70711 14.2929C3.51957 14.1054 3.26522 14 3 14C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.7397 15.9729 11.8691 16.0002 12 16.0002C12.1309 16.0002 12.2603 15.9729 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29L13 12.59V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V12.59L8.71 10.29C8.61676 10.1968 8.50607 10.1228 8.38425 10.0723C8.26243 10.0219 8.13186 9.99591 8 9.99591C7.86814 9.99591 7.73757 10.0219 7.61575 10.0723C7.49393 10.1228 7.38324 10.1968 7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3842C7.1228 11.5061 7.19676 11.6168 7.29 11.71L11.29 15.71Z" fill="#871BE6"/>
                            </svg>
                            <p className='text-[#a43dff] font-workSan text-lg font-medium'>Download my CV</p>
                        </motion.button>
                       </div>
                    </div>
            </div>
        </motion.div>
    );
}

export default Hero;