import { motion } from 'framer-motion';
import potrait from "/public/potrait.png";

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
            className='w-full lg:w-[75%] mx-auto mt-10 lg:mt-30'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Mobile Layout (lg:hidden) */}
            <div className='lg:hidden flex flex-col items-center px-4 gap-8'>
                {/* Image with animation */}
                <motion.div 
                    className='w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-lg'
                    variants={imageVariants}
                >
                    <motion.img 
                        src={potrait} 
                        alt="Bankole Ifeoluwa" 
                        className='w-full h-full object-cover object-top'
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div className='flex flex-col gap-4 text-center' variants={itemVariants}>
                    <motion.h1 
                        className='text-[#cbd6e8] font-workSan text-3xl font-semibold tracking-wide'
                        whileHover={{ scale: 1.02 }}
                    >
                        Hello, I'm Bankole Ifeoluwa
                    </motion.h1>
                    <motion.p className='text-[#808080] font-workSan text-base font-thin'>
                        I'm a Freelance <span className='text-[#871BE6]'>UI/UX Designer </span>and <span className='text-[#871BE6]'>Developer</span> based in London, England.
                    </motion.p>
                    <motion.button 
                        className='mx-auto py-3 px-6 rounded-md text-white font-semibold bg-[#871be6] hover:bg-[#9a3aed] transition-colors'
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Say Hello!
                    </motion.button>
                </motion.div>

                {/* Stats with animations */}
                <motion.div className='w-full grid grid-cols-1 gap-2 mt-4' variants={containerVariants}>
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
            <div className='hidden lg:grid grid-flow-col grid-rows-1.5 gap-10'>
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
                    <motion.button 
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
                    </motion.button>
                </motion.div>

                <motion.div 
                    className='flex gap-1 w-[93%] flex-wrap bg-[#2a2c38]'
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {[
                        { value: "4 Yrs.", label: "Experience", className: "rounded-l-lg w-[33%]" },
                        { value: "10+", label: "Project Completed", className: "w-[33%]" },
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
                        className='shadow-[0_24px_116px_0_rgba(43,56,76,0.09)] rounded-xl object-cover object-top h-110 w-90 bg-[#2A2C38]' 
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Hero;