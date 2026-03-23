import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function HeroHeader() {
  const [visibleLines, setVisibleLines] = useState(0);

  // Terminal typing effect logic
  useEffect(() => {
    // Total number of lines to show (1 through 5, then the blinking cursor at line 6)
    const totalLines = 5;
    
    if (visibleLines <= totalLines) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, 600); // 600ms per line
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="relative min-h-screen flex items-center px-4 md:px-16 bg-[#1a1c23] overflow-hidden" id="hero">
      {/* Soft radial glow centered behind everything */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: '#05060d' }} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto pt-20 pb-16">
        
        {/* LEFT SIDE — Terminal Window & CTAs */}
        <div className="flex flex-col z-10 w-full mt-10 md:mt-0">
          
          {/* AVAILABLE FOR WORK badge */}
          <div className="flex items-center gap-2 mb-4 bg-[#0d1117] border border-white/10 rounded-full px-4 py-1.5 w-fit shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-white/60 tracking-widest uppercase">Available for Work</span>
          </div>

          {/* Terminal Container */}
          <div className="bg-[#0d1117] rounded-xl border border-white/10 p-6 shadow-2xl w-full">
            {/* Terminal top bar */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-3 text-xs font-mono text-white/30">bash — ifebanks</span>
            </div>

            {/* Terminal Content */}
            <div className="space-y-4">
              {/* Line 1 */}
              {visibleLines >= 1 && (
                <div>
                  <div className="flex gap-2">
                    <span className="text-cyan-400 font-mono text-sm whitespace-nowrap">~/ifebanks $</span>
                    <span className="text-white/50 font-mono text-sm">whoami</span>
                  </div>
                  <div className="text-white/80 font-mono text-sm mt-1">&gt; Bankole Ifeoluwa</div>
                </div>
              )}

              {/* Line 2 */}
              {visibleLines >= 2 && (
                <div>
                  <div className="flex gap-2 mt-4">
                    <span className="text-cyan-400 font-mono text-sm whitespace-nowrap">~/ifebanks $</span>
                    <span className="text-white/50 font-mono text-sm">cat role.txt</span>
                  </div>
                  <div className="text-white/80 font-mono text-sm mt-1">&gt; Fullstack Developer & ML Engineer</div>
                </div>
              )}

              {/* Line 3 */}
              {visibleLines >= 3 && (
                <div>
                  <div className="flex gap-2 mt-4">
                    <span className="text-cyan-400 font-mono text-sm whitespace-nowrap">~/ifebanks $</span>
                    <span className="text-white/50 font-mono text-sm">./status --check</span>
                  </div>
                  <div className="text-white/80 font-mono text-sm flex items-center gap-2 mt-1">
                    &gt; <span className="text-green-400">●</span> Available for work
                  </div>
                </div>
              )}

              {/* Line 4 */}
              {visibleLines >= 4 && (
                <div>
                  <div className="flex gap-2 mt-4">
                    <span className="text-cyan-400 font-mono text-sm whitespace-nowrap">~/ifebanks $</span>
                    <span className="text-white/50 font-mono text-sm">cat bio.txt</span>
                  </div>
                  <div className="text-white/80 font-mono text-sm mt-1 flex flex-col">
                    <span>&gt; I build software that thinks.</span>
                    <span>&gt; Crafting products that solve</span>
                    <span>&gt; problems that actually matter.</span>
                  </div>
                </div>
              )}

              {/* Line 5 (Waiting Prompt with Blinking Cursor) */}
              {visibleLines >= 5 && (
                <div className="flex gap-2 mt-4 items-center">
                  <span className="text-cyan-400 font-mono text-sm whitespace-nowrap">~/ifebanks $</span>
                  <span className="text-white/80 font-mono text-sm animate-blink">_</span>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex items-center gap-4 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a 
              href="https://wa.link/msu7w0"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-mono text-sm transition-all duration-200"
            >
              Say Hello! →
            </a>
            <a 
              href="#portfolio"
              className="border border-white/20 hover:border-purple-500 text-white/70 hover:text-white px-6 py-2.5 rounded-full font-mono text-sm transition-all duration-200"
            >
              View My Work →
            </a>
          </motion.div>
        </div>


        {/* RIGHT SIDE — VS Code Code Block */}
        <div className="relative w-full z-10 mt-10 md:mt-0">
          
          {/* Purple glow behind the code block */}
          <div className="absolute -inset-4 -z-10 rounded-2xl blur-3xl opacity-20 bg-[#7C3AED]/20" />

          {/* Floating Container */}
          <motion.div 
            className="bg-[#0d1117] rounded-xl border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.15)] overflow-hidden animate-float"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* VS Code top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0d14] border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-4 text-xs font-mono text-white/30">developer.js</span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
              <div>
                <span className="text-purple-400">const </span>
                <span className="text-blue-300">developer</span>
                <span className="text-white/60"> = </span>
                <span className="text-white/60">{"{"}</span>
              </div>
              
              <div>
                <span className="text-white/40 pl-4">  name</span>
                <span className="text-white/60">: </span>
                <span className="text-cyan-300">"Bankole Ifeoluwa"</span>
                <span className="text-white/60">,</span>
              </div>
              
              <div>
                <span className="text-white/40 pl-4">  alias</span>
                <span className="text-white/60">: </span>
                <span className="text-cyan-300">"Ifebanks"</span>
                <span className="text-white/60">,</span>
              </div>
              
              <div>
                <span className="text-white/40 pl-4">  stack</span>
                <span className="text-white/60">: [</span>
                <span className="text-cyan-300">"React"</span>
                <span className="text-white/60">, </span>
                <span className="text-cyan-300">"Node.js"</span>
                <span className="text-white/60">, </span>
                <span className="text-cyan-300">"Python"</span>
                <span className="text-white/60">, </span>
                <span className="text-cyan-300">"PostgreSQL"</span>
                <span className="text-white/60">],</span>
              </div>
              
              <div>
                <span className="text-white/40 pl-4">  ml</span>
                <span className="text-white/60">: [</span>
                <span className="text-cyan-300">"PyTorch"</span>
                <span className="text-white/60">, </span>
                <span className="text-cyan-300">"XGBoost"</span>
                <span className="text-white/60">, </span>
                <span className="text-cyan-300">"scikit-learn"</span>
                <span className="text-white/60">, </span>
                <span className="text-cyan-300">"ONNX"</span>
                <span className="text-white/60">],</span>
              </div>
              
              <div>
                <span className="text-white/40 pl-4">  currently</span>
                <span className="text-white/60">: </span>
                <span className="text-cyan-300">"Building AIMHER 🧬"</span>
                <span className="text-white/60">,</span>
              </div>
              
              <div>
                <span className="text-white/40 pl-4">  available</span>
                <span className="text-white/60">: </span>
                <span className="text-green-400">true</span>
                <span className="text-white/60">,</span>
              </div>
              
              <div>
                <span className="text-white/60">{"}"}</span>
              </div>
              <br/>
              <div>
                <span className="text-purple-400">export default </span>
                <span className="text-blue-300">developer</span>
                <span className="text-white/60">;</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default HeroHeader;
