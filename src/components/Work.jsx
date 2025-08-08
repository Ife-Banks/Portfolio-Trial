import { motion } from 'framer-motion';

const Work = () => {
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

    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            y: -5,
            boxShadow: "0 10px 25px rgba(135, 27, 230, 0.2)",
            transition: { type: "spring", stiffness: 300 }
        }
    };

    return (
        <motion.div 
            className='relative bg-[#27292F] flex justify-center gap-15 py-20 lg:pt-50 z-1 px-4 lg:px-0 '
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className='relative flex w-full lg:w-[70%] mx-auto items-center justify-center overflow-visible flex-col lg:flex-row gap-8 lg:gap-0'>
                {/* Text Content */}
                <motion.main 
                    className='w-full lg:w-[45%] flex flex-col p-1 gap-4 lg:gap-2'
                    variants={containerVariants}
                >
                    <motion.h1 
                        className='h1 lg:text-left text-center'
                        variants={itemVariants}
                    >
                        Work Process
                    </motion.h1>
                    <motion.div 
                        className='paragraph lg:text-left text-center'
                        variants={itemVariants}
                    >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.</p>
                        <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                    </motion.div>
                </motion.main>

                {/* Cards Grid */}
                <motion.aside 
                    className='grid grid-cols-1 sm:grid-cols-2 w-full lg:w-[45%] gap-4'
                    variants={containerVariants}
                >
                    {/* Research Card */}
                    <motion.div 
                        className='p-4 lg:p-3 flex flex-col items-start gap-3 rounded-xl bg-[#2A2C38] shadow-lg lg:shadow-[32px_32px_124px_0_rgba(43,56,76,0.1)]'
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className='w-12 h-12 lg:w-15 lg:h-15 flex items-center justify-center bg-[#871be6] rounded-md shadow-md'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M21.3333 18.6667H10.6667C10.313 18.6667 9.97391 18.8072 9.72386 19.0573C9.47381 19.3073 9.33333 19.6465 9.33333 20.0001C9.33333 20.3537 9.47381 20.6928 9.72386 20.9429C9.97391 21.1929 10.313 21.3334 10.6667 21.3334H21.3333C21.687 21.3334 22.0261 21.1929 22.2761 20.9429C22.5262 20.6928 22.6667 20.3537 22.6667 20.0001C22.6667 19.6465 22.5262 19.3073 22.2761 19.0573C22.0261 18.8072 21.687 18.6667 21.3333 18.6667ZM21.3333 13.3334H13.3333C12.9797 13.3334 12.6406 13.4739 12.3905 13.7239C12.1405 13.974 12 14.3131 12 14.6667C12 15.0204 12.1405 15.3595 12.3905 15.6096C12.6406 15.8596 12.9797 16.0001 13.3333 16.0001H21.3333C21.687 16.0001 22.0261 15.8596 22.2761 15.6096C22.5262 15.3595 22.6667 15.0204 22.6667 14.6667C22.6667 14.3131 22.5262 13.974 22.2761 13.7239C22.0261 13.4739 21.687 13.3334 21.3333 13.3334ZM26.6667 5.33341H22.6667V4.00008C22.6667 3.64646 22.5262 3.30732 22.2761 3.05727C22.0261 2.80722 21.687 2.66675 21.3333 2.66675C20.9797 2.66675 20.6406 2.80722 20.3905 3.05727C20.1405 3.30732 20 3.64646 20 4.00008V5.33341H17.3333V4.00008C17.3333 3.64646 17.1929 3.30732 16.9428 3.05727C16.6928 2.80722 16.3536 2.66675 16 2.66675C15.6464 2.66675 15.3072 2.80722 15.0572 3.05727C14.8071 3.30732 14.6667 3.64646 14.6667 4.00008V5.33341H12V4.00008C12 3.64646 11.8595 3.30732 11.6095 3.05727C11.3594 2.80722 11.0203 2.66675 10.6667 2.66675C10.313 2.66675 9.97391 2.80722 9.72386 3.05727C9.47381 3.30732 9.33333 3.64646 9.33333 4.00008V5.33341H5.33333C4.97971 5.33341 4.64057 5.47389 4.39052 5.72394C4.14048 5.97399 4 6.31313 4 6.66675V25.3334C4 26.3943 4.42143 27.4117 5.17157 28.1618C5.92172 28.912 6.93913 29.3334 8 29.3334H24C25.0609 29.3334 26.0783 28.912 26.8284 28.1618C27.5786 27.4117 28 26.3943 28 25.3334V6.66675C28 6.31313 27.8595 5.97399 27.6095 5.72394C27.3594 5.47389 27.0203 5.33341 26.6667 5.33341ZM25.3333 25.3334C25.3333 25.687 25.1929 26.0262 24.9428 26.2762C24.6928 26.5263 24.3536 26.6667 24 26.6667H8C7.64638 26.6667 7.30724 26.5263 7.05719 26.2762C6.80714 26.0262 6.66667 25.687 6.66667 25.3334V8.00008H9.33333V9.33342C9.33333 9.68704 9.47381 10.0262 9.72386 10.2762C9.97391 10.5263 10.313 10.6667 10.6667 10.6667C11.0203 10.6667 11.3594 10.5263 11.6095 10.2762C11.8595 10.0262 12 9.68704 12 9.33342V8.00008H14.6667V9.33342C14.6667 9.68704 14.8071 10.0262 15.0572 10.2762C15.3072 10.5263 15.6464 10.6667 16 10.6667C16.3536 10.6667 16.6928 10.5263 16.9428 10.2762C17.1929 10.0262 17.3333 9.68704 17.3333 9.33342V8.00008H20V9.33342C20 9.68704 20.1405 10.0262 20.3905 10.2762C20.6406 10.5263 20.9797 10.6667 21.3333 10.6667C21.687 10.6667 22.0261 10.5263 22.2761 10.2762C22.5262 10.0262 22.6667 9.68704 22.6667 9.33342V8.00008H25.3333V25.3334Z" fill="#2A2C38"/>
</svg>
                        </div>
                        <div className='gap-2 flex flex-col'>
                            <h1 className='text-[#cbd6e8] font-workSan text-lg lg:text-xl font-semibold'>1. Research</h1>
                            <p className='text-[#929aa7] font-workSan text-sm lg:text-xs/5 font-normal'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                            </p>
                        </div>
                    </motion.div>

                    {/* Analyze Card */}
                    <motion.div 
                        className='p-4 lg:p-3 flex flex-col items-start gap-3 rounded-xl bg-[#2A2C38] shadow-lg lg:shadow-[32px_32px_124px_0_rgba(43,56,76,0.1)]'
                        variants={cardVariants}
                        whileHover="hover"
                        transition={{ delay: 0.1 }}
                    >
                        <div className='w-12 h-12 lg:w-15 lg:h-15 flex items-center justify-center bg-[rgba(67,13,114,0.5)] rounded-md shadow-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M9.33333 21.3334C9.86377 21.3334 10.3725 21.1227 10.7475 20.7476C11.1226 20.3726 11.3333 19.8638 11.3333 19.3334C11.3398 19.2669 11.3398 19.1999 11.3333 19.1334L15.0533 15.4134H15.36H15.6667L17.8133 17.5601C17.8133 17.5601 17.8133 17.6267 17.8133 17.6667C17.8133 18.1972 18.024 18.7059 18.3991 19.081C18.7742 19.456 19.2829 19.6667 19.8133 19.6667C20.3438 19.6667 20.8525 19.456 21.2275 19.081C21.6026 18.7059 21.8133 18.1972 21.8133 17.6667V17.5601L26.6667 12.6667C27.0622 12.6667 27.4489 12.5495 27.7778 12.3297C28.1067 12.1099 28.363 11.7976 28.5144 11.4321C28.6658 11.0667 28.7054 10.6645 28.6282 10.2766C28.5511 9.88861 28.3606 9.53224 28.0809 9.25253C27.8012 8.97283 27.4448 8.78235 27.0568 8.70518C26.6689 8.62801 26.2668 8.66761 25.9013 8.81899C25.5358 8.97036 25.2235 9.22671 25.0037 9.55561C24.784 9.88451 24.6667 10.2712 24.6667 10.6667C24.6602 10.7333 24.6602 10.8002 24.6667 10.8667L19.8533 15.6801H19.64L17.3333 13.3334C17.3333 12.803 17.1226 12.2943 16.7475 11.9192C16.3725 11.5441 15.8638 11.3334 15.3333 11.3334C14.8029 11.3334 14.2942 11.5441 13.9191 11.9192C13.544 12.2943 13.3333 12.803 13.3333 13.3334L9.33333 17.3334C8.8029 17.3334 8.29419 17.5441 7.91912 17.9192C7.54405 18.2943 7.33333 18.803 7.33333 19.3334C7.33333 19.8638 7.54405 20.3726 7.91912 20.7476C8.29419 21.1227 8.8029 21.3334 9.33333 21.3334V21.3334ZM27.3333 26.6667H4.66667V4.00008C4.66667 3.64646 4.52619 3.30732 4.27614 3.05727C4.02609 2.80722 3.68696 2.66675 3.33333 2.66675C2.97971 2.66675 2.64057 2.80722 2.39052 3.05727C2.14048 3.30732 2 3.64646 2 4.00008V28.0001C2 28.3537 2.14048 28.6928 2.39052 28.9429C2.64057 29.1929 2.97971 29.3334 3.33333 29.3334H27.3333C27.687 29.3334 28.0261 29.1929 28.2761 28.9429C28.5262 28.6928 28.6667 28.3537 28.6667 28.0001C28.6667 27.6465 28.5262 27.3073 28.2761 27.0573C28.0261 26.8072 27.687 26.6667 27.3333 26.6667Z" fill="#871BE6"/>
</svg>
                        </div>
                        <div className='gap-2 flex flex-col'>
                            <h1 className='text-[#cbd6e8] font-workSan text-lg lg:text-xl font-semibold'>3. Analyze</h1>
                            <p className='text-[#929aa7] font-workSan text-sm lg:text-xs/5 font-normal'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                            </p>
                        </div>
                    </motion.div>

                    {/* Design Card */}
                    <motion.div 
                        className='p-4 lg:p-3 flex flex-col items-start gap-3 rounded-xl bg-[#2A2C38] shadow-lg lg:shadow-[32px_32px_124px_0_rgba(43,56,76,0.1)]'
                        variants={cardVariants}
                        whileHover="hover"
                        transition={{ delay: 0.2 }}
                    >
                        <div className='w-12 h-12 lg:w-15 lg:h-15 flex items-center justify-center bg-[rgba(67,13,114,0.5)] rounded-md shadow-md'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M29.3333 9.65344C29.3343 9.47796 29.3007 9.30401 29.2343 9.14156C29.168 8.97911 29.0702 8.83136 28.9466 8.70677L23.2933 3.05344C23.1687 2.92986 23.021 2.83209 22.8585 2.76574C22.6961 2.69939 22.5221 2.66576 22.3466 2.66677C22.1712 2.66576 21.9972 2.69939 21.8348 2.76574C21.6723 2.83209 21.5246 2.92986 21.4 3.05344L17.6266 6.82677L3.05331 21.4001C2.92974 21.5247 2.83197 21.6724 2.76562 21.8349C2.69927 21.9973 2.66563 22.1713 2.66665 22.3468V28.0001C2.66665 28.3537 2.80712 28.6929 3.05717 28.9429C3.30722 29.193 3.64636 29.3334 3.99998 29.3334H9.65331C9.83988 29.3436 10.0265 29.3144 10.2011 29.2478C10.3756 29.1812 10.5343 29.0786 10.6666 28.9468L25.16 14.3734L28.9466 10.6668C29.0683 10.5375 29.1675 10.3888 29.24 10.2268C29.2528 10.1205 29.2528 10.013 29.24 9.90677C29.2462 9.8447 29.2462 9.78217 29.24 9.7201L29.3333 9.65344ZM9.10665 26.6668H5.33331V22.8934L18.5733 9.65344L22.3466 13.4268L9.10665 26.6668ZM24.2266 11.5468L20.4533 7.77344L22.3466 5.89344L26.1066 9.65344L24.2266 11.5468Z" fill="#871BE6"/>
</svg>
                        </div>
                        <div className='gap-2 flex flex-col'>
                            <h1 className='text-[#cbd6e8] font-workSan text-lg lg:text-xl font-semibold'>2. Design</h1>
                            <p className='text-[#929aa7] font-workSan text-sm lg:text-xs/5 font-normal'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                            </p>
                        </div>
                    </motion.div>

                    {/* Launch Card */}
                    <motion.div 
                        className='p-4 lg:p-3 flex flex-col items-start gap-3 rounded-xl bg-[#2A2C38] shadow-lg lg:shadow-[32px_32px_124px_0_rgba(43,56,76,0.1)]'
                        variants={cardVariants}
                        whileHover="hover"
                        transition={{ delay: 0.3 }}
                    >
                        <div className='w-12 h-12 lg:w-15 lg:h-15 flex items-center justify-center bg-[rgba(67,13,114,0.5)] rounded-md shadow-md'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M28 18.6666H26.6666V9.33325C26.6666 8.27239 26.2452 7.25497 25.4951 6.50482C24.7449 5.75468 23.7275 5.33325 22.6666 5.33325H9.33329C8.27243 5.33325 7.25501 5.75468 6.50487 6.50482C5.75472 7.25497 5.33329 8.27239 5.33329 9.33325V18.6666H3.99996C3.64634 18.6666 3.3072 18.8071 3.05715 19.0571C2.8071 19.3072 2.66663 19.6463 2.66663 19.9999V22.6666C2.66663 23.7275 3.08805 24.7449 3.8382 25.495C4.58834 26.2452 5.60576 26.6666 6.66663 26.6666H25.3333C26.3942 26.6666 27.4116 26.2452 28.1617 25.495C28.9119 24.7449 29.3333 23.7275 29.3333 22.6666V19.9999C29.3333 19.6463 29.1928 19.3072 28.9428 19.0571C28.6927 18.8071 28.3536 18.6666 28 18.6666ZM7.99996 9.33325C7.99996 8.97963 8.14044 8.64049 8.39048 8.39044C8.64053 8.14039 8.97967 7.99992 9.33329 7.99992H22.6666C23.0202 7.99992 23.3594 8.14039 23.6094 8.39044C23.8595 8.64049 24 8.97963 24 9.33325V18.6666H7.99996V9.33325ZM26.6666 22.6666C26.6666 23.0202 26.5262 23.3593 26.2761 23.6094C26.0261 23.8594 25.6869 23.9999 25.3333 23.9999H6.66663C6.313 23.9999 5.97387 23.8594 5.72382 23.6094C5.47377 23.3593 5.33329 23.0202 5.33329 22.6666V21.3333H26.6666V22.6666Z" fill="#871BE6"/>
</svg>
                        </div>
                        <div className='gap-2 flex flex-col'>
                            <h1 className='text-[#cbd6e8] font-workSan text-lg lg:text-xl font-semibold'>4. Launch</h1>
                            <p className='text-[#929aa7] font-workSan text-sm lg:text-xs/5 font-normal'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                            </p>
                        </div>
                    </motion.div>
                </motion.aside>
            </div>
        </motion.div>
    );
}

export default Work;