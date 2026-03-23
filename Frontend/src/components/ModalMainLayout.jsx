import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveImage from "./responsiveImage.jsx";

function FuturisticModalMainLayout(props) {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 pt-16 md:pt-12 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      {/* IMAGE SECTION */}
      <motion.div
        className="w-full lg:w-[52%] relative group rounded-2xl overflow-visible"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Glow Border */}
        <div className="absolute -inset-1 bg-[#7C3AED]/20 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition duration-500" />

        <div className="relative rounded-2xl border border-slate-300 dark:border-white/10 shadow-2xl overflow-hidden">
          <ResponsiveImage
            publicId={props.image}
            alt={props.alt}
            className="w-full h-auto max-h-80 sm:max-h-96 md:max-h-[500px] lg:max-h-[580px] object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#05050d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-5">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              <p className="text-sm font-medium">Click to view full size</p>
            </motion.div>
          </div>
        </div>

        {/* Project Link Button */}
        {props.link && (
          <motion.a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6c21d6] text-white font-semibold transition-all duration-300 shadow-lg">
              View Live Project
              <svg
                className="w-5 h-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </motion.a>
        )}

        {/* Tags */}
        {props.tags?.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {props.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-[#11121b] border border-[#7C3AED]/30 rounded-full text-[#1b1d27] dark:text-white/60 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* CONTENT SECTION */}
      <motion.aside
        className="w-full lg:w-[45%] flex flex-col gap-4 lg:gap-6 text-center lg:text-left"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Category Badge */}
        <motion.div
          className="mx-auto lg:mx-0 inline-block w-fit px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-slate-300 dark:border-white/10"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-purple-700 dark:text-purple-600 font-mono2 text-xs tracking-wider uppercase font-semibold">
            💼 Case Study
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-slate-900 dark:text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {props.title}
        </motion.h1>

        {/* Description */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute -inset-1 bg-[#7C3AED]/10 rounded-2xl blur" />
          <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-slate-300 dark:border-white/10 shadow-md">
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed text-left">
              {props.description}
            </p>
          </div>
        </motion.div>
      </motion.aside>
    </motion.div>
  );
}

export default FuturisticModalMainLayout;
