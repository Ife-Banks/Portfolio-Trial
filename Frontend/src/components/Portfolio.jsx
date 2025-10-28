// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import PortfolioGradient from '../Resuables/PortfolioGradient';
import Projects from '../data/PortfolioData';
import PortfolioLayout from './PortfolioLayout';
import Headings from '../Resuables/Headings';
import { containerVariants, itemVariants } from './Animations/PortfolioAnimate';

// 🔑 helper function to truncate

const truncateText = (text, wordLimit = 20) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const Portfolio = () => {

   const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const toggleProjects = () => {
    if (showAll) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll((prev) => !prev);
  };

 

  
  return (
    <motion.div
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center pt-10 pb-10 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id='portfolio'
    >
      {/*<Headings*/}
      {/*  text={'Portfolio'}*/}
      {/*  subText={*/}
      {/*    'A collection of selected projects showcasing expertise in frontend and backend development, API integration, and responsive design.'*/}
      {/*  }*/}
      {/*  styp={'text-center mx-auto w-[90%] lg:w-[30%]'}*/}
      {/*  styh1={'place-self-center'}*/}
      {/*/>*/}
        <Headings
            badge="Portfolio"
            text="Projects"
            highlightText="Highlight"
            subText="A journey through innovation, collaboration, and impact-driven development across diverse tech ecosystems"
            styh1="text-center"
            styp="text-center"
        />

      <motion.main
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[70%] mt-10 z-2"
        variants={containerVariants}
      >
        {/* Always render first 3 */}
        {Projects.slice(0, 3).map((project) => (
          <PortfolioLayout
            key={project.index}
            index={project.index}
            {...project}
            description={truncateText(project.description, 20)} // 🔥 truncate here
          />
        ))}

        {/* Animate extra ones with stagger + reverse exit */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              className="contents "
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2, // enter stagger
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.2,
                    staggerDirection: -1, // reverse stagger on exit
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {Projects.slice(3).map((project) => (
                <motion.div
                  key={project.index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 30 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <PortfolioLayout
                    index={project.index}
                    {...project}
                    description={truncateText(project.description, 20)} // 🔥 truncate here
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>

      {/* <motion.button
        onClick={toggleProjects}
        variants={itemVariants}
        whileHover={{
          backgroundColor: '#9a3aed',
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
        className="w-fit flex justify-center items-center py-3 px-3 mt-2 rounded-md text-white font-semibold bg-[#871be6] cursor-pointer"
      >
        {showAll ? 'Show Less' : 'More Projects'}
      </motion.button> */}
      <motion.button
  onClick={toggleProjects}
  className="relative flex justify-center items-center group px-8 py-4 rounded-xl font-semibold text-white overflow-hidden w-fit"
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

  {/* Button Text */}
  <p className="relative z-10 text-white font-workSan text-lg font-semibold">
    {showAll ? 'Show Less' : 'More Projects'}
  </p>
</motion.button>

      {/*<PortfolioGradient />*/}
    </motion.div>
  );
};

export default Portfolio;
