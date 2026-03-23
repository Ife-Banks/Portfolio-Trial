import React, { useContext } from 'react';
import SecondHero from './SecondHero';
import { ThemeContext } from './context/ThemeContext';

// ==========================================
// VARIANT 3 (ACTIVE)
// ==========================================
const Hero = () => {
  const badges = [
    { label: "React", delay: "0s", top: "18%", left: "5%" },
    { label: "Python", delay: "0.5s", top: "14%", right: "7%" },
    { label: "Node.js", delay: "1s", top: "40%", left: "2%" },
    { label: "ONNX", delay: "1.4s", top: "48%", right: "6%" },
    { label: "TypeScript", delay: "0.8s", top: "68%", left: "6%" },
    { label: "PostgreSQL", delay: "1.2s", top: "64%", right: "5%" },
    { label: "Docker", delay: "0.3s", top: "82%", left: "13%" },
    { label: "Shopify", delay: "1.6s", top: "28%", right: "25%" },
    { label: "Supabase", delay: "1.9s", top: "58%", left: "32%" },
    { label: "XGBoost", delay: "1.8s", top: "74%", right: "12%" },
  ];

  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const badgeThemeClasses = isDark
    ? 'bg-[#0d1117] border border-white/10 text-white/40 hover:border-purple-500/50 hover:text-white/80'
    : 'bg-white/90 border border-slate-200 text-slate-900 hover:border-purple-500/50 hover:text-slate-900';

  const viewButtonClasses = isDark
    ? 'border border-white/20 hover:border-purple-500 text-white/70 hover:text-white px-8 py-3 rounded-full font-mono text-sm transition-all duration-200 w-full sm:w-auto hover:bg-purple-700'
    : 'border border-slate-200 hover:border-purple-500 text-slate-900 hover:text-white bg-white px-8 py-3 rounded-full font-mono text-sm transition-all duration-200 w-full sm:w-auto hover:bg-purple-600 shadow-inner';

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 bg-white text-slate-900 dark:bg-[#1a1c23] dark:text-white" id="hero">
        
          {/* Soft radial glow centered behind everything */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 rounded-full blur-3xl opacity-10 bg-[#7C3AED]/20" />

        <div className="w-full max-w-5xl mx-auto text-center relative z-10 pt-20">
          
          {/* Floating Tech Badges (Hidden on Mobile) */}
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`absolute rounded-full px-3 py-1 text-xs font-mono transition-all duration-200 animate-float hidden md:block ${badgeThemeClasses}`}
              style={{ animationDelay: badge.delay, top: badge.top, left: badge.left, right: badge.right }}
            >
              {badge.label}
            </div>
          ))}

          {/* Top Label */}
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-4">
            ~/portfolio $
          </p>

          {/* Available for Work Badge */}
          <div className="flex items-center gap-2 bg-white/80 border border-slate-200 rounded-full px-4 py-1.5 w-fit mx-auto mb-6 dark:bg-[#0d1117] dark:border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-500 tracking-widest uppercase dark:text-white/60">
              Available for Work
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-clash font-semibold tracking-wide text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
            <span className="text-slate-900 dark:text-white">I'm </span>
            <span className="text-[#7C3AED]">Bankole Ifeoluwa</span>
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-slate-500 tracking-[0.3em] text-xs md:text-sm uppercase mb-6 dark:text-white/40">
            Fullstack Developer | ML Engineer | Product Architect
          </p>

          {/* Short Bio */}
          <p className="text-slate-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10 dark:text-white/60">
            I build software that thinks. Crafting products that solve problems that actually matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.link/msu7w0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-mono text-sm transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.3)] w-full sm:w-auto"
            >
              Say Hello! →
            </a>
            <a href="#portfolio" className={viewButtonClasses}>
              View My Work → 
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-12">
            <div className="text-center">
              <p className="font-clash font-bold text-3xl text-slate-900 dark:text-white">10+</p>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1 dark:text-white/40">
                Projects Shipped
              </p>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-slate-200/40 dark:bg-white/10"></div>
            <div className="text-center">
              <p className="font-clash font-bold text-3xl text-slate-900 dark:text-white">4+</p>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1 dark:text-white/40">
                Years Building
              </p>
            </div>
            <div className="hidden sm:block w-[1px] h-10 bg-slate-200/40 dark:bg-white/10"></div>
            <div className="text-center">
              <p className="font-clash font-bold text-3xl text-slate-900 dark:text-white">3+</p>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1 dark:text-white/40">
                Communities
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Second card */}
      <SecondHero />
    </>
  );
}

export default Hero;
