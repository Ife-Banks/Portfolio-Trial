import React, { useContext } from 'react';
import SecondHero from './SecondHero';
import { ThemeContext } from './context/ThemeContext';
import { motion } from 'framer-motion';

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
      <div className="relative flex min-h-[82svh] flex-col justify-center overflow-hidden bg-[var(--editorial-paper)] px-6 py-24 text-[var(--editorial-ink)] md:px-16" id="hero">
        <motion.div
          className="mx-auto w-full max-w-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >

          <p className="mb-7 font-mono text-xs uppercase tracking-[0.22em] text-[var(--editorial-muted)]">
            Independent engineer <span className="mx-2 text-[var(--editorial-accent)]">/</span> Lagos, Nigeria
          </p>

          <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-[var(--editorial-rule)] bg-[var(--editorial-card)] px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[var(--editorial-muted)]">
              Available for Work
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-5 max-w-5xl font-clash text-6xl font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--editorial-ink)] sm:text-7xl lg:text-8xl">
            Bankole<br className="sm:hidden" /> Ifeoluwa<span className="text-[var(--editorial-accent)]">.</span>
          </h1>

          <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-[var(--editorial-muted)] md:text-sm">
            Software Engineer | AI Systems Engineer
          </p>

          <p className="mb-9 max-w-2xl text-lg leading-relaxed text-[var(--editorial-muted)] md:text-xl">
            I design and build reliable software and AI systems for health, finance, and operations.
          </p>

          <div className="mb-16 flex flex-wrap items-center justify-start gap-4">
            <a
              href="https://wa.link/msu7w0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7C3AED] hover:bg-[#6c21d6] text-white px-8 py-3 rounded-sm font-mono text-sm transition-all duration-300 w-full sm:w-auto"
            >
              Say Hello! →
            </a>
            <a href="#portfolio" className={viewButtonClasses}>
              View My Work → 
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-start gap-6 sm:flex-nowrap sm:gap-12">
            <div className="text-left">
              <p className="font-clash font-bold text-3xl text-slate-900 dark:text-white">10+</p>
              <p className="mt-1 text-xs font-mono uppercase tracking-[0.14em] text-[var(--editorial-muted)]">
                Projects Shipped
              </p>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-slate-200/40 dark:bg-white/10"></div>
            <div className="text-left">
              <p className="font-clash font-bold text-3xl text-slate-900 dark:text-white">4+</p>
              <p className="mt-1 text-xs font-mono uppercase tracking-[0.14em] text-[var(--editorial-muted)]">
                Years Building
              </p>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-slate-200/40 dark:bg-white/10"></div>
            <div className="text-left">
              <p className="font-clash font-bold text-3xl text-slate-900 dark:text-white">3+</p>
              <p className="mt-1 text-xs font-mono uppercase tracking-[0.14em] text-[var(--editorial-muted)]">
                Communities
              </p>
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
