// ============= ModalMain.jsx =============
import React, { useContext } from "react";
import Projects from "../data/PortfolioData";
import ModalMainLayout from "../components/ModalMainLayout";
import LangContext from "../components/context/LangContext";
import { motion } from "framer-motion";

function FuturisticModalMain() {
  const { ide, setIde, setIsModalOpen } = useContext(LangContext);

  const goToPrevious = () => {
    if (ide > 1) {
      setIde(prev => prev - 1);
    }
  };

  const goToNext = () => {
    if (ide < Projects.length) {
      setIde(prev => prev + 1);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="relative w-full md:w-[90%] lg:w-[85%] max-w-7xl max-h-[90vh] md:max-h-[85vh] pointer-events-auto"
      onClick={(e) => e.stopPropagation()}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
    >
      {/* Animated Glow Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-600 rounded-t-3xl md:rounded-3xl opacity-30 blur-xl" />

      {/* Main Modal Container */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-3xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <motion.button
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 group"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-purple-300 rounded-full opacity-0 group-hover:opacity-30 blur transition duration-500" />
          <div className="relative w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center group-hover:border-purple-600/50 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </motion.button>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-20">
          <motion.button
            onClick={goToPrevious}
            disabled={ide <= 1}
            className="group disabled:opacity-30 disabled:cursor-not-allowed"
            whileHover={{ scale: ide > 1 ? 1.1 : 1, x: ide > 1 ? -5 : 0 }}
            whileTap={{ scale: ide > 1 ? 0.9 : 1 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-purple-300 rounded-full opacity-0 group-hover:opacity-30 blur transition duration-500" />
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/90 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-purple-600/50 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </motion.button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-20">
          <motion.button
            onClick={goToNext}
            disabled={ide >= Projects.length}
            className="group disabled:opacity-30 disabled:cursor-not-allowed"
            whileHover={{ scale: ide < Projects.length ? 1.1 : 1, x: ide < Projects.length ? 5 : 0 }}
            whileTap={{ scale: ide < Projects.length ? 0.9 : 1 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-purple-300 rounded-full opacity-0 group-hover:opacity-30 blur transition duration-500" />
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/90 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-purple-600/50 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </div>

        {/* Project Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            className="px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-full border border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-purple-600 font-mono text-sm font-semibold">
              {ide} / {Projects.length}
            </span>
          </motion.div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] md:max-h-[85vh] px-4 md:px-8 lg:px-12">
          {Projects.filter((project) => project.id === ide).map((project) => (
            <ModalMainLayout key={project.id} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default FuturisticModalMain;