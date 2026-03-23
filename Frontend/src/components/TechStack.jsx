import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'framer-motion';
import  Headings  from '../Resuables/Headings';

const techStack = [
  { name: 'React',        slug: 'react',             color: '61DAFB' },
  { name: 'Next.js',      slug: 'nextdotjs',         color: 'ffffff' },
  { name: 'TypeScript',   slug: 'typescript',        color: '3178C6' },
  { name: 'JavaScript',   slug: 'javascript',        color: 'F7DF1E' },
  { name: 'Tailwind CSS', slug: 'tailwindcss',       color: '06B6D4' },
  { name: 'Node.js',      slug: 'nodedotjs',         color: '339933' },
  { name: 'Express.js',   slug: 'express',           color: 'ffffff' },
  { name: 'Python',       slug: 'python',            color: '3776AB' },
  { name: 'MongoDB',      slug: 'mongodb',           color: '47A248' },
  { name: 'PostgreSQL',   slug: 'postgresql',        color: '4169E1' },
  { name: 'TensorFlow',   slug: 'tensorflow',        color: 'FF6F00' },
  { name: 'Git',          slug: 'git',               color: 'F05032' },
  { name: 'GitHub',       slug: 'github',            color: 'ffffff' },
  { name: 'Docker',       slug: 'docker',            color: '2496ED' },
  { name: 'Vite',         slug: 'vite',              color: '646CFF' },
  { name: 'Postman',      slug: 'postman',           color: 'FF6C37' },
  { name: 'Vue.js',       slug: 'vuedotjs',          color: '4FC08D' },
  { name: 'HTML5',        slug: 'html5',             color: 'E34F26' },
  { name: 'CSS3',         slug: 'css3',              color: '1572B6' },
  { name: 'VS Code',      slug: 'visualstudiocode',  color: '007ACC' },
];

const iconUrl = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="w-full px-4 sm:px-8 py-16 bg-white text-slate-900 relative dark:bg-[#1a1c23] dark:text-white"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Section header */}
      <div className="text-center mb-8">
        {/* <h2 className="font-clash font-semibold text-3xl text-white mb-2">
          Technical Proficiency
        </h2>
        <p className="text-sm text-white/40 font-mono2">
          Technologies and tools I use to bring ideas to life
        </p> */}
         <Headings
                      // badge="WORK EXPERIENCE"
                      text=" Technical "
                      highlightText="Proficiency"
                      subText="Technologies and tools I use to bring ideas to life"
                      styh1="text-center"
                      styp="text-center font-mono2"
                  />
      </div>

      {/* ── Marquee + popup wrapper (relative anchor for the popup) ── */}
      <div className="relative">

        {/* Scroll marquee with CSS mask fade edges */}
        <div className="w-full overflow-hidden">
          <Marquee speed={40} gradient={false} play={!isExpanded}>
            {[...techStack, ...techStack].map((tech, i) => (
                <React.Fragment key={`mq-${i}`}>
                  <div className="flex items-center gap-2 mx-6">
                    <img
                      src={iconUrl(tech.slug, tech.color)}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm font-mono2 text-slate-600 dark:text-white/60 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                  <span className="text-slate-300/80 text-sm select-none mx-1 leading-none self-center dark:text-white/20">·</span>
                </React.Fragment>
            ))}
          </Marquee>
        </div>

        {/* Hint — fades out when expanded */}
        <AnimatePresence>
          {!isExpanded && (
              <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center text-[10px] font-mono2 text-slate-500 tracking-widest mt-4 uppercase select-none dark:text-white/20"
            >
              ↑ hover to explore full stack
            </motion.p>
          )}
        </AnimatePresence>

        {/* ── Floating popup grid — z-50, absolute, does NOT push page content ── */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="tech-grid-popup"
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-full sm:w-[110%] z-50"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/40 shadow-[0_24px_64px_rgba(0,0,0,0.7)] p-4 dark:bg-[#0d1117] dark:border-white/[0.08]">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={`grid-${tech.slug}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.018, duration: 0.2 }}
                      className="bg-white/90 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 h-24 hover:border-purple-500/30 hover:bg-slate-50 transition-all duration-200 cursor-default group dark:bg-[#161b22] dark:border-white/5 dark:hover:bg-[#12111a]"
                    >
                      <img
                        src={iconUrl(tech.slug, tech.color)}
                        alt={tech.name}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                        loading="lazy"
                      />
                      <span className="text-xs font-mono2 text-slate-700 text-center leading-tight group-hover:text-slate-900 transition-colors dark:text-white/50 dark:group-hover:text-white/80">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TechStack;
