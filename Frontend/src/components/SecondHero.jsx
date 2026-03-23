import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Socials from '../data/Socials';
import { ThemeContext } from './context/ThemeContext';

function FuturisticSecondHero() {
    const [isDownloading, setIsDownloading] = useState(false);
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    const accentTextClass = isDark ? 'text-white font-semibold' : 'text-slate-900 font-semibold';
    const paragraphTextClass = isDark
        ? 'space-y-4 text-white/70 text-base leading-relaxed'
        : 'space-y-4 text-slate-700 text-base leading-relaxed';
    const downloadBtnClass = 'relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#7C3AED]/40 bg-[#7C3AED] px-6 py-2.5 text-sm font-mono text-white transition-all duration-200 group disabled:border-[#7C3AED]/20 disabled:text-white/70';
    const helloBtnClass = 'bg-[#7C3AED] hover:bg-[#6c21d6] text-white px-6 py-2.5 rounded-full font-mono text-sm transition-all duration-200 shadow-[0_0_20px_rgba(124,58,237,0.3)]';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    // CV Download Function
    const handleDownloadCV = async () => {
        setIsDownloading(true);

        try {
            // Option 1: If CV is in your public folder
            const cvPath = '/Bankole_Ifeoluwa_CV.pdf'; // Place your CV in public folder

            // Create invisible anchor element
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'Bankole_Ifeoluwa_CV.pdf'; // Filename for download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Optional: Add a small delay to show loading state
            setTimeout(() => {
                setIsDownloading(false);
            }, 1000);

        } catch (error) {
            console.error('Download failed:', error);
            setIsDownloading(false);
            alert('Failed to download CV. Please try again.');
        }
    };

    // Alternative: Download from external URL (Google Drive, Dropbox, etc.)
    const handleDownloadCVFromURL = async () => {
        setIsDownloading(true);

        try {
            // Use the direct Google Drive download link (not the view link)
            const cvURL = 'https://drive.google.com/uc?export=download&id=19BBAs-Cu0CoIqTdzNo7sZq9HKyQXxVe1';

            // Create a temporary invisible <a> tag for download
            const link = document.createElement('a');
            link.href = cvURL;
            link.setAttribute('download', 'Bankole_Ifeoluwa_CV.pdf'); // Suggested filename
            document.body.appendChild(link);

            // Trigger the click programmatically
            link.click();

            // Clean up
            document.body.removeChild(link);

        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download CV. Please try again.');
        } finally {
            // Reset loading state after a brief delay for smoother UI feedback
            setTimeout(() => setIsDownloading(false), 800);
        }
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-24 bg-white text-slate-900 dark:bg-[#1a1c23] dark:text-white" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                
                {/* Left Column - Text Content */}
                <motion.div 
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Small label */}
                    <motion.p 
                        className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-3"
                        variants={itemVariants}
                    >
                        $ cat about.txt
                    </motion.p>

                    {/* Heading */}
                    <motion.h2 
                        className="font-clash font-semibold text-4xl md:text-5xl tracking-wide mb-6 text-slate-900 dark:text-white"
                        variants={itemVariants}
                    >
                        About <span className="gradient-text">Me</span>
                    </motion.h2>

                    {/* Paragraph text */}
                    <motion.div 
                        className={paragraphTextClass}
                        variants={itemVariants}
                    >
                        <p>
                            I'm Bankole Ifeoluwa, a Fullstack Developer and ML Engineer living at the intersection of clean architecture and intelligent systems.
                            Someone once showed me what code could truly do, and that was the beginning of my journey.
                            Since then, I've built across the full stack—React, Node.js, PostgreSQL, Redis, TypeScript—and dug deep into machine learning with ONNX Runtime, XGBoost, and scikit-learn.
                            I build that way on purpose.
                        </p>
                        <p>
                            My most meaningful work is{' '}
                            <span className={accentTextClass}>AIMHER</span>, an AI-driven, clinical-grade diagnostic platform engineered for early detection of PCOS.
                            Because the most powerful code isn't the cleverest—it's the kind that helps someone.
                            Beyond that, I founded{' '}
                            <span className={accentTextClass}>Devalyze</span>, lead developers at{' '}
                            <span className={accentTextClass}>KodeBlock</span>, mentor at{' '}
                            <span className={accentTextClass}>CyberGenz</span>, and keep shipping.
                            If there's a real problem on the table, I'm already thinking about the solution.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div 
                        className="flex items-center gap-4 mt-8"
                        variants={itemVariants}
                    >
                        <button 
                            onClick={handleDownloadCVFromURL}
                            disabled={isDownloading}
                            className={downloadBtnClass}
                        >
                            <span className= absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-50 transition-opacity duration-300 aria-hidden=true />
                            <span className="relative inline-flex items-center gap-2 z-10">
                                {isDownloading ? (
                                    <>
                                        <motion.svg
                                            className="w-4 h-4 text-current"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </motion.svg>
                                        Downloading...
                                    </>
                                ) : (
                                    <>
                                        Download CV ↓
                                    </>
                                )}
                            </span>
                        </button>
                        <a 
                            href="https://wa.link/msu7w0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={helloBtnClass}
                        >
                            Say Hello! →
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column - Visual + Social Links */}
                <motion.div 
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Quick facts card */}
                    <motion.div 
                        className="bg-white/90 border border-slate-200 rounded-xl p-6 dark:bg-[#0d1117] dark:border-white/10"
                        variants={itemVariants}
                    >
                            <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4 dark:text-white/30">
                            $ ./quickfacts
                        </p>
                        <div className="space-y-3">
                            {[
                        { label: "Based in", value: "Lagos - Oyo, Nigeria 🇳🇬" },
                                { label: "Currently", value: "Building AIMHER 🧬" },
                                { label: "Focus", value: "Fullstack + ML Systems" },
                                { label: "Open to", value: "Fulltime & Freelance" },
                            ].map(({ label, value }) => (
                                <div className="flex items-center justify-between" key={label}>
                                    <span className="font-mono text-xs text-slate-500 dark:text-white/30">{label}</span>
                                    <span className="font-mono text-xs text-slate-900 dark:text-white/70">{value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social links */}
                    <motion.div 
                        className="flex flex-col gap-2"
                        variants={itemVariants}
                    >
                        <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-2">
                            $ connect --social
                        </p>
                                <div className="flex items-center gap-3 flex-wrap">
                                    {[
                                        { icon: Socials[0].img, label: "GitHub", href: "https://github.com/Ife-Banks" },
                                        { icon: Socials[1].img, label: "LinkedIn", href: "https://www.linkedin.com/in/ifeoluwa-bankole-384515334/" },
                                        { icon: Socials[2].img, label: "Twitter/X", href: "https://x.com/Ife_bankss" },
                                        { icon: Socials[4].img, label: "Instagram", href: "https://www.instagram.com/ifeba_nks/" },
                                    ].map(({ icon, label, href }) => (
                                        <a 
                                            href={href} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            key={label}
                                            className="flex items-center gap-2 bg-white/80 border border-slate-200
                                                       rounded-full px-4 py-2 text-xs font-mono text-slate-700
                                                       hover:border-purple-500/50 hover:text-slate-900 dark:bg-[#0d1117]
                                                       dark:border-white/10 dark:text-white transition-all duration-200"
                                        >
                                    <div className="w-4 h-4 flex items-center justify-center">
                                        {icon}
                                    </div>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default FuturisticSecondHero;