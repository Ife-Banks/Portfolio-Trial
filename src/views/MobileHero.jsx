import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import potrait from "../assets/IfeBanks.jpg";
import Lightbtn from '../Resuables/Lightbtn';
import { Typewriter } from 'react-simple-typewriter';
// eslint-disable-next-line no-unused-vars
import { containerVariants, itemVariants, imageVariants, statItemVariants, socialCardVariants } from "../components/Animations/Animate"
import Socials from '../data/Socials';

function Mobile() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Full description
  const description = `I'm a Web Developer based in Lagos, Nigeria. 
  I focus on building responsive and functional web applications using clean code 
  and user-centered logic. My goal is to create immersive digital experiences 
  by combining frontend tools like React and Tailwind CSS with backend technologies 
  such as Express and MongoDB. Every project I work on is crafted with care from 
  dynamic interfaces to fullstack systems that solve real-world problems.`;

  // Utility function to truncate to 20 words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className='lg:hidden flex flex-col items-center justify-center px-4 gap-10 z-1'>
      {/* Image with animation */}
      <div className='flex flex-col items-center justify-center gap-2'>
        <motion.img
          src={potrait}
          alt=""
          className='rounded-full bg-gradient-to-tr from-black via-black/15 to-[#2A2C38] object-contain object-center h-30 w-30 hover transition transform z-1 mt-10'
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <div className='flex gap-1 lg:w-[10%] items-center bg-black/20 backdrop-blur-sm z-1 p-1 rounded-4xl px-2'>
          {Socials.map((item) => (
            <motion.a
              key={item.key}
              href={item.link}
              className={`p-1 flex flex-col justify-center items-center gap-2 h-10 w-10 ${item.bg ? 'bg-[#871be6] rounded-md shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]' : ''}`}
              variants={socialCardVariants}
              whileHover="hover"
            >
              {item.img}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <motion.div className='flex flex-col gap-10 text-center z-1 items-center' variants={itemVariants}>
        <motion.h1
          className='text-[#cbd6e8] font-workSan text-3xl font-semibold tracking-wide place-self-center'
          whileHover={{ scale: 1.02 }}
        >
          <div className="">
            <Typewriter
              words={['Hello,', 'Halo,', 'Bonjour,', 'Hallo,']}
              cursor='true'
              cursorStyle='_'
              loop={0}
              delaySpeed={3000}
            />
          </div>
          <Typewriter words={[`I'm Bankole Ifeoluwa`]} />
        </motion.h1>

        {/* Description with Read More toggle */}
        <motion.p className='text-[#95A3B9] font-workSan text-sm font-light rounded-lg p-2 px-3 bg-black/20 backdrop-blur-sm w-[80%]'>
          {isExpanded ? description : truncateText(description, 30)}{" "}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#871be6] font-semibold hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </motion.p>

        {/* Button */}
        <Lightbtn text={'Say Hello!'} />
      </motion.div>
    </div>
  )
}

export default Mobile;
