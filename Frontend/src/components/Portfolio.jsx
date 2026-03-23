import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import Projects from '../data/PortfolioData';
import { ThemeContext } from './context/ThemeContext';
import { containerVariants, itemVariants } from './Animations/PortfolioAnimate';

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const featuredProject = Projects.find((project) => project.featured);
  const remainingProjects = Projects.filter((project) => !project.featured);
  const visibleProjects = showMore ? remainingProjects : remainingProjects.slice(0, 3);
  const hiddenCount = Math.max(0, remainingProjects.length - 3);
  const hasMoreProjects = remainingProjects.length > 3;

  useEffect(() => {
    console.log('Projects total:', Projects.length);
    console.log('Remaining projects:', remainingProjects.length);
  }, [remainingProjects.length]);

  return (
      <motion.section
        id="portfolio"
        className={`py-24 px-6 md:px-16 max-w-7xl mx-auto min-h-screen relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1a1c23] text-white' : 'bg-white text-slate-900'}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-100px' }}
        variants={containerVariants}
      >
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full blur-3xl bg-[#7C3AED]/20" />
      </div>
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-3 text-center">
            $ ls projects/
          </p>
          <h2 className={`font-clash font-semibold tracking-wide text-4xl md:text-5xl text-center mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Projects <span className="text-[#7C3AED]">Highlight</span>
          </h2>
          <p className={`text-sm text-center mb-16 ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
            A journey through innovation, collaboration, and impact-driven development
          </p>
      </motion.div>

      {featuredProject && (
        <motion.div
          variants={itemVariants}
          className="w-full bg-white/95 border border-[#7C3AED]/30 rounded-2xl overflow-hidden
                     transition-all duration-300 group mb-6 grid grid-cols-1 md:grid-cols-2 dark:bg-[#0d1117] dark:border-[#7C3AED]/30"
        >
          <div className="relative p-8 flex flex-col justify-between bg-[#0f0f1a]">
            <div className="absolute top-4 left-4 bg-[#0d1117]/80 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5 font-mono text-xs text-white/40">
              {featuredProject.title?.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                  {featuredProject.category}
                </span>
                <span className="text-[10px] font-mono text-white/60 px-2 py-1 border border-white/10 rounded-full">
                  Featured
                </span>
              </div>
              <div className="text-9xl font-clash font-black text-white/10 leading-none select-none">
                {featuredProject.title?.charAt(0)}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs font-mono tracking-[0.4em] uppercase text-white/30">
                01 — Featured Project
              </p>
            </div>
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-clash font-semibold text-2xl text-slate-900 mb-3 dark:text-white">
                {featuredProject.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 dark:text-white/50">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7C3AED] hover:bg-[#6c21d6] text-white px-6 py-2.5
                           rounded-full font-mono text-xs transition-all duration-200
                           shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Case Study →
              </a>
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#7C3AED]/40 hover:border-[#7C3AED]
                           text-white/60 hover:text-white px-6 py-2.5 rounded-full
                           font-mono text-xs transition-all duration-200"
              >
                Live ↗
              </a>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative bg-white/95 border border-[#7C3AED]/20 rounded-2xl overflow-hidden
                       hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]
                       transition-all duration-300 group dark:bg-[#0d1117] dark:border-[#7C3AED]/30"
          >
            <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-2 py-0.5 font-mono text-xs text-slate-500 dark:bg-[#0d1117]/80 dark:border-white/10 dark:text-white/40">
              {project.title?.charAt(0).toUpperCase()}
            </span>
            <div className="p-5 pt-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-clash font-semibold text-base text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] dark:text-white/40">
                  {project.category}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3 dark:text-white/40">
                {project.description.split(' ').slice(0, 30).join(' ')}...
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="text-[10px] font-mono text-[#7C3AED] bg-[#7C3AED]/10
                               border border-[#7C3AED]/30 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-5 pb-5 flex items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-600 hover:text-slate-900 transition-colors duration-200 dark:text-white/50 dark:hover:text-white"
                >
                  Case Study →
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-500 hover:text-slate-900/80 transition-colors duration-200 dark:text-white/40 dark:hover:text-white/80"
                >
                  Live ↗
                </a>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMoreProjects && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            type="button"
            onClick={() => setShowMore((prev) => !prev)}
            className="border border-[#7C3AED]/40 text-slate-900 hover:border-[#7C3AED] hover:text-white px-8 py-3
                       rounded-full font-mono text-sm transition-all duration-200 mx-auto block dark:border-[#7C3AED]/40 dark:text-white hover:bg-[#7C3AED]/10 dark:hover:bg-[#7C3AED]/20"
          >
            {showMore
              ? 'Show Less ←'
              : 'More Projects →' + (hiddenCount > 0 ? ' (' + hiddenCount + ' more)' : '')}
          </button>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Portfolio;
