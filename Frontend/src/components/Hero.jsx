import React, { useContext } from 'react';
import SecondHero from './SecondHero';
import { ThemeContext } from './context/ThemeContext';
import { motion } from 'framer-motion';
import TechOrbit from './TechOrbit';

// ==========================================
// VARIANT 3 (ACTIVE)
// ==========================================
const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const viewButtonClasses = isDark
    ? 'border border-white/20 hover:border-purple-500 text-white/70 hover:text-white px-8 py-3 rounded-sm font-mono text-sm transition-all duration-300 w-full sm:w-auto hover:bg-purple-700'
    : 'border border-slate-300 hover:border-purple-500 text-slate-900 hover:text-white bg-[var(--editorial-card)] px-8 py-3 rounded-sm font-mono text-sm transition-all duration-300 w-full sm:w-auto hover:bg-purple-600';

  return (
    <>
      <div className="relative flex min-h-[82svh] flex-col justify-center overflow-hidden bg-[var(--editorial-paper)] px-5 pb-14 pt-28 text-[var(--editorial-ink)] sm:px-6 sm:py-24 md:px-16" id="hero">
        <motion.div
          className="mx-auto w-full max-w-7xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-6 xl:gap-12">
          <div className="min-w-0">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-muted)] sm:mb-7 sm:text-xs sm:tracking-[0.22em]">
            Independent engineer <span className="mx-2 text-[var(--editorial-accent)]">/</span> Lagos, Nigeria
          </p>

          <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[var(--editorial-rule)] bg-[var(--editorial-card)] px-3.5 py-1.5 sm:mb-8 sm:px-4">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[var(--editorial-muted)]">
              Available for Work
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 max-w-5xl font-clash text-[3.25rem] font-semibold leading-[0.93] tracking-[-0.055em] text-[var(--editorial-ink)] min-[390px]:text-6xl sm:mb-5 sm:text-7xl lg:text-8xl">
            Bankole<br className="sm:hidden" /> Ifeoluwa<span className="text-[var(--editorial-accent)]">.</span>
          </h1>

          <p className="mb-4 max-w-[19rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[var(--editorial-muted)] min-[390px]:text-xs sm:mb-6 sm:max-w-none sm:text-sm sm:tracking-[0.18em]">
            Software Engineer | AI Systems Engineer
          </p>

          <p className="mb-6 max-w-2xl text-base leading-relaxed text-[var(--editorial-muted)] sm:mb-9 sm:text-lg md:text-xl">
            I design and build reliable software and AI systems for health, finance, and operations.
          </p>

          <div className="mb-8 flex flex-col items-stretch justify-start gap-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:gap-4 sm:mb-12">
            <a
              href="https://wa.link/msu7w0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-sm bg-[#7C3AED] px-6 py-3.5 font-mono text-sm text-white transition-all duration-300 hover:bg-[#6c21d6] min-[420px]:w-auto sm:px-8 sm:py-3"
            >
              Say Hello! →
            </a>
            <a href="#portfolio" className={viewButtonClasses}>
              View My Work → 
            </a>
          </div>

          {/* Stats Row */}
          <div className="mb-1 grid grid-cols-3 items-start gap-3 min-[420px]:flex min-[420px]:items-center min-[420px]:gap-6 sm:mb-0 sm:flex-nowrap sm:gap-12">
            <div className="text-left">
              <p className="font-clash text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">10+</p>
              <p className="mt-1 text-[9px] font-mono uppercase leading-snug tracking-[0.08em] text-[var(--editorial-muted)] min-[420px]:text-xs min-[420px]:tracking-[0.14em]">
                Projects Shipped
              </p>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-slate-200/40 dark:bg-white/10"></div>
            <div className="text-left">
              <p className="font-clash text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">4+</p>
              <p className="mt-1 text-[9px] font-mono uppercase leading-snug tracking-[0.08em] text-[var(--editorial-muted)] min-[420px]:text-xs min-[420px]:tracking-[0.14em]">
                Years Building
              </p>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-slate-200/40 dark:bg-white/10"></div>
            <div className="text-left">
              <p className="font-clash text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">3+</p>
              <p className="mt-1 text-[9px] font-mono uppercase leading-snug tracking-[0.08em] text-[var(--editorial-muted)] min-[420px]:text-xs min-[420px]:tracking-[0.14em]">
                Communities
              </p>
            </div>
          </div>
          </div>
          <div className="mx-auto w-full max-w-[15rem] sm:max-w-[22rem] lg:max-w-[27rem]">
            <TechOrbit />
          </div>
          </div>
        </motion.div>
      </div>

      {/* Second card */}
      <SecondHero />
    </>
  );
}

export default Hero;
