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

    const socialCardVariants = {
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};


    const facebookIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
    <path d="M13.4866 0.25H10.43C8.61604 0.25 6.59845 1.02784 6.59845 3.70863C6.60731 4.64273 6.59845 5.53731 6.59845 6.54411H4.5V9.94872H6.66339V19.75H10.6387V9.88404H13.2626L13.5 6.53456H10.5702C10.5702 6.53456 10.5768 5.04457 10.5702 4.61187C10.5702 3.55248 11.6514 3.61314 11.7164 3.61314C12.2309 3.61314 13.2313 3.61467 13.4881 3.61314V0.25H13.4866Z" fill="#871BE6"/>
  </svg>
);

const XIcon = (
  <svg width="18" height="18" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#871be6"/>
</svg>
);

const instagramIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <g clipPath="url(#clip0_52_156)">
      <path d="M6.00048 9C6.00048 7.34321 7.34322 5.99976 9 5.99976C10.6568 5.99976 12.0002 7.34321 12.0002 9C12.0002 10.6568 10.6568 12.0002 9 12.0002C7.34322 12.0002 6.00048 10.6568 6.00048 9ZM4.37859 9C4.37859 11.5524 6.44758 13.6214 9 13.6214C11.5524 13.6214 13.6214 11.5524 13.6214 9C13.6214 6.44758 11.5524 4.37859 9 4.37859C6.44758 4.37859 4.37859 6.44758 4.37859 9ZM12.7243 4.1954C12.7243 4.79152 13.2078 5.27569 13.8046 5.27569C14.4007 5.27569 14.8849 4.79152 14.8849 4.1954C14.8849 3.59927 14.4015 3.11583 13.8046 3.11583C13.2078 3.11583 12.7243 3.59927 12.7243 4.1954ZM5.36365 16.3258C4.48619 16.2858 4.00929 16.1397 3.69233 16.0161C3.27213 15.8525 2.97262 15.6577 2.65711 15.3429C2.34233 15.0281 2.14677 14.7286 1.98393 14.3084C1.86034 13.9914 1.71422 13.5145 1.67423 12.6371C1.63061 11.6884 1.62189 11.4034 1.62189 9C1.62189 6.59661 1.63134 6.31236 1.67423 5.36292C1.71422 4.48546 1.86107 4.00929 1.98393 3.6916C2.1475 3.27141 2.34233 2.97189 2.65711 2.65638C2.97189 2.3416 3.27141 2.14604 3.69233 1.9832C4.00929 1.85961 4.48619 1.71349 5.36365 1.67351C6.31236 1.62989 6.59733 1.62116 9 1.62116C11.4034 1.62116 11.6876 1.63061 12.6371 1.67351C13.5145 1.71349 13.9907 1.86034 14.3084 1.9832C14.7286 2.14604 15.0281 2.3416 15.3436 2.65638C15.6584 2.97116 15.8532 3.27141 16.0168 3.6916C16.1404 4.00856 16.2865 4.48546 16.3265 5.36292C16.3701 6.31236 16.3788 6.59661 16.3788 9C16.3788 11.4027 16.3701 11.6876 16.3265 12.6371C16.2865 13.5145 16.1397 13.9914 16.0168 14.3084C15.8532 14.7286 15.6584 15.0281 15.3436 15.3429C15.0288 15.6577 14.7286 15.8525 14.3084 16.0161C13.9914 16.1397 13.5145 16.2858 12.6371 16.3258C11.6884 16.3694 11.4034 16.3781 9 16.3781C6.59733 16.3781 6.31236 16.3694 5.36365 16.3258ZM5.2895 0.0545234C4.33134 0.0981422 3.67706 0.250081 3.10493 0.472536C2.51317 0.702262 2.01155 1.0105 1.51066 1.51066C1.0105 2.01082 0.702262 2.51244 0.472536 3.10493C0.250081 3.67706 0.0981422 4.33134 0.0545234 5.2895C0.0101777 6.24911 0 6.5559 0 9C0 11.4441 0.0101777 11.7509 0.0545234 12.7105C0.0981422 13.6687 0.250081 14.3229 0.472536 14.8951C0.702262 15.4868 1.00977 15.9892 1.51066 16.4893C2.01082 16.9895 2.51244 17.297 3.10493 17.5275C3.67779 17.7499 4.33134 17.9019 5.2895 17.9455C6.24984 17.9891 6.5559 18 9 18C11.4448 18 11.7509 17.9898 12.7105 17.9455C13.6687 17.9019 14.3229 17.7499 14.8951 17.5275C15.4868 17.297 15.9885 16.9895 16.4893 16.4893C16.9895 15.9892 17.297 15.4868 17.5275 14.8951C17.7499 14.3229 17.9026 13.6687 17.9455 12.7105C17.9891 11.7502 17.9993 11.4441 17.9993 9C17.9993 6.5559 17.9891 6.24911 17.9455 5.2895C17.9019 4.33134 17.7499 3.67706 17.5275 3.10493C17.297 2.51317 16.9895 2.01155 16.4893 1.51066C15.9892 1.0105 15.4868 0.702262 14.8958 0.472536C14.3229 0.250081 13.6687 0.0974152 12.7112 0.0545234C11.7516 0.0109047 11.4448 0 9.00073 0C6.5559 0 6.24984 0.0101777 5.2895 0.0545234Z" fill="#871BE6"/>
    </g>
  </svg>
);

const linkedinIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <g clipPath="url(#clip0_52_159)">
      <path d="M0 2.09066C0 1.48459 0.202708 0.98459 0.608108 0.590664C1.01351 0.196719 1.54055 -0.000244141 2.18919 -0.000244141C2.82626 -0.000244141 3.34169 0.193683 3.73552 0.581573C4.14092 0.981572 4.34363 1.50277 4.34363 2.14521C4.34363 2.72702 4.14672 3.21186 3.7529 3.59975C3.3475 3.99975 2.81467 4.19975 2.15444 4.19975H2.13707C1.49999 4.19975 0.984562 3.99975 0.590734 3.59975C0.196905 3.19975 0 2.69671 0 2.09066ZM0.225869 17.9997V5.85429H4.08301V17.9997H0.225869ZM6.22008 17.9997H10.0772V11.2179C10.0772 10.7937 10.1236 10.4664 10.2162 10.2361C10.3784 9.82397 10.6245 9.47548 10.9546 9.19065C11.2847 8.90579 11.6988 8.76338 12.1969 8.76338C13.4942 8.76338 14.1429 9.67852 14.1429 11.5088V17.9997H18V11.0361C18 9.24216 17.5946 7.88156 16.7838 6.95429C15.973 6.02702 14.9016 5.56338 13.5695 5.56338C12.0753 5.56338 10.9112 6.23611 10.0772 7.58156V7.61792H10.0598L10.0772 7.58156V5.85429H6.22008C6.24324 6.24216 6.25483 7.44822 6.25483 9.47247C6.25483 11.4967 6.24324 14.3391 6.22008 17.9997Z" fill="#2A2C38"/>
    </g>
  </svg>
);

const GithubIcon = (
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#871BE6" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
);

    
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

           <motion.div 
    className='inline-flex flex-col lg:flex-row w-full mx-auto items-center justify-center lg:justify-evenly rounded-xl bg-[#2a2c38] z-2 shadow-[0_36px_105px_0_rgba(43,56,76,0.1)] -mb-30 p-6 lg:p-0 gap-8 lg:gap-0'
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Image section */}
    <motion.div 
      className='z-1 rounded-2xl w-[280px] h-[320px] lg:w-auto lg:h-auto relative'
      variants={imageVariants}
    >
      <img 
        src={potrait} 
        alt="Professional UX Designer" 
        className='rounded-xl object-cover object-top w-full h-full lg:h-110 lg:w-90 -z-1'
      />
      
      <motion.div 
        className='absolute bottom-10 place-self-center inset-x-0 inline-flex px-3 py-2 items-center justify-center rounded-lg bg-[#2a2c38] shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] gap-3'
        variants={itemVariants}
      >
        {[
          { icon: facebookIcon, key: 'facebook', link:"https://web.facebook.com/ifeoluwa.bankole.2025" },
          { icon: XIcon, key: 'dribble', link:"https://x.com/Ife_bankss" },
          { icon: instagramIcon, key: 'instagram', link :"https://www.instagram.com/ifeba_nks/"},
          { icon: linkedinIcon, key: 'linkedin', bg: true , link : "https://www.linkedin.com/in/ifeoluwa-bankole-384515334/"},
          { icon: GithubIcon, key: 'behance', link:"https://github.com/Ife-Banks" }
        ].map((item) => (
          <motion.a 
            key={item.key}
            href={item.link}
            className={`p-2 flex flex-col justify-center items-center gap-2 ${item.bg ? 'bg-[#871be6] rounded-md shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]' : ''}`}
            variants={socialCardVariants}
            whileHover="hover"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>

    {/* Content section */}
    <motion.div 
      className='w-full lg:w-[45%] flex flex-col p-1 gap-4 lg:gap-2'
      variants={containerVariants}
    >
      <motion.h1 
        className='h1 lg:text-left text-center'
        variants={itemVariants}
      >
        I am Professional User Experience Designer
      </motion.h1>
      
      <motion.div 
        className='paragraph lg:text-left text-center'
        variants={itemVariants}
      >
        <p>I design and develop services for customers specializing in creating stylish, modern websites, web services and online stores.</p>
        <p className='hidden lg:block'>My passion is to design digital user experiences through carefully crafted interfaces.</p>
      </motion.div>
      
      <motion.div 
        className='flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start p-1 mt-2'
        variants={itemVariants}
      >
        <motion.a 
          href='https://wa.link/msu7w0'
          className='w-full sm:w-fit flex justify-center items-center py-3 px-6 rounded-md text-white font-semibold bg-[#871be6] cursor-pointer'
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
        
        <motion.button 
          className='w-full sm:w-fit flex justify-center items-center py-3 px-4 rounded-md text-white font-semibold border border-[#871be6] cursor-pointer gap-3'
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(135, 27, 230, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15C4 14.7348 3.89464 14.4804 3.70711 14.2929C3.51957 14.1054 3.26522 14 3 14C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.7397 15.9729 11.8691 16.0002 12 16.0002C12.1309 16.0002 12.2603 15.9729 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29L13 12.59V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V12.59L8.71 10.29C8.61676 10.1968 8.50607 10.1228 8.38425 10.0723C8.26243 10.0219 8.13186 9.99591 8 9.99591C7.86814 9.99591 7.73757 10.0219 7.61575 10.0723C7.49393 10.1228 7.38324 10.1968 7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3842C7.1228 11.5061 7.19676 11.6168 7.29 11.71L11.29 15.71Z" fill="#871BE6"/>
          </svg>
          <p className='text-[#a43dff] font-workSan text-base lg:text-lg font-medium'>Download CV</p>
        </motion.button>
      </motion.div>
    </motion.div>
  </motion.div>
        </motion.div>
    );
}

export default Hero;