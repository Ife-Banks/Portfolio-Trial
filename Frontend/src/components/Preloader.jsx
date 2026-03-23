import { useState, useEffect } from 'react';

const Preloader = ({ onExitComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  
  // Loading Stages
  // INITIALIZING... → 0–20%
  // IMPORTING MODULES... → 20–50%
  // TRAINING MODEL... → 50–75%
  // DEPLOYING... → 75–99%
  // READY → 100%
  const getStatusText = () => {
    if (progress <= 20) return 'INITIALIZING...';
    if (progress <= 50) return 'IMPORTING MODULES...';
    if (progress <= 75) return 'TRAINING MODEL...';
    if (progress < 100) return 'DEPLOYING...';
    return 'READY';
  };

  useEffect(() => {
    // We want a minimum display time of 3 seconds.
    const minDisplayTime = 3000;
    const startTime = Date.now();
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Increment progress slightly faster to reach 99% quickly
        const next = prev + Math.random() * 8 + 2; 
        return next > 99 ? 99 : next;
      });
    }, 150);

    const finishLoading = () => {
      setProgress(100);
      
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
      
      setTimeout(() => {
        setExiting(true);
        // After 600ms exit animation, call onExitComplete
        setTimeout(() => {
          onExitComplete();
        }, 600);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      // If already complete, we still want to finish out the 3 seconds via the logic
      // But wait a moment so the progress bar can animate a bit first
      setTimeout(finishLoading, 500);
    } else {
      window.addEventListener('load', finishLoading);
      return () => window.removeEventListener('load', finishLoading);
    }

    return () => clearInterval(interval);
  }, [onExitComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a1c23] ${
        exiting ? 'preloader-exit' : ''
      }`}
    >
      <div className="flex flex-col items-start">
        {/* Terminal line */}
        <div className="text-xs font-mono2 text-cyan-400/60 flex items-center">
          <span>~/portfolio $</span>
          <span className="ml-1 animate-pulse">|</span>
        </div>
        {/* Subtitle comment */}
        <div className="mt-1 mb-2 text-xs font-mono2 text-white/30">
          // Fullstack Developer &amp; ML Engineer
        </div>
        {/* Centered Main Text */}
        <h1 className="text-4xl md:text-5xl font-mono2 font-bold tracking-tight gradient-text select-none">
          &lt;Ifebanks/&gt;
        </h1>
      </div>

      {/* Progress Bar Container */}
      <div className="w-72 md:w-80 h-[2px] bg-white/10 rounded overflow-hidden mt-8">
        <div
          className="h-full progress-bar-fill"
          style={{ 
            width: `${progress}%`,
            backgroundColor: '#7C3AED'
          }}
        />
      </div>

      {/* Status Text */}
      <div className="mt-3 text-[10px] font-mono2 tracking-[0.3em] uppercase text-white/40 h-4 flex items-center gap-2">
        <span>&gt; {getStatusText()}</span>
      </div>
    </div>
  );
};

export default Preloader;
