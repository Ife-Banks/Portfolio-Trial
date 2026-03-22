import React, { useState } from 'react';
import IconsData from "../data/IconsData";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from 'framer-motion';

function Icons() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className='relative w-full mx-auto '
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* ─── MARQUEE (always in document flow) ─── */}
      <div className="relative w-full overflow-hidden h-[56px]">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white dark:from-[#1f2128] via-white/80 dark:via-[#1f2128]/80 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white dark:from-[#1f2128] via-white/80 dark:via-[#1f2128]/80 to-transparent z-10 pointer-events-none" />

        <Marquee
          speed={35}
          gradient={false}
          pauseOnHover={false}
          play={!isExpanded}
        >
          {IconsData.map((icon, index) => (
            <div key={`mq-${index}`} className="mx-6 md:mx-8">
              <div className="w-9 h-9 flex items-center justify-center opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                {icon.img}
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Hover hint */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.p
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[10px] font-mono text-slate-400 dark:text-white/20 text-center mt-1.5 select-none"
          >
            hover to explore full stack
          </motion.p>
        )}
      </AnimatePresence>

      {/* ─── FLOATING POPUP GRID ─── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="grid-popup"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] w-full sm:w-[110%] z-50"
          >
            {/* Popup card */}
            <div className="bg-white/95 dark:bg-[#13151a]/98 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.6)] p-4">
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2.5">
                {IconsData.map((icon, index) => (
                  <motion.div
                    key={`grid-${index}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.018, duration: 0.2 }}
                    className="bg-slate-50 dark:bg-[#1a1f2b] rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-slate-200 dark:border-white/5 hover:border-purple-400 dark:hover:border-purple-500/40 hover:bg-slate-100 dark:hover:bg-[#1e2435] transition-all duration-200 h-20 sm:h-24 cursor-default group"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      {icon.img}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-white/50 font-mono text-center leading-tight group-hover:text-slate-800 dark:group-hover:text-white/80 transition-colors">
                      {icon.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Icons;
