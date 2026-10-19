import React, { useContext, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import LangContext from '../components/context/LangContext';

function MobileNav() {
    const { isMenuOpen, setIsMenuOpen } = useContext(LangContext);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (!isMenuOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', closeOnEscape);
        };
    }, [isMenuOpen, setIsMenuOpen]);

    const navItems = [
        { name: 'Home', path: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'work' },
        { name: 'Portfolio', id: 'portfolio' },
    ];

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <>
                    {/* Quiet backdrop keeps the page visible while focusing the menu. */}
                    <motion.div
                        className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[2px] dark:bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Mobile Menu Panel */}
                    <motion.div
                        role="dialog"
                        aria-label="Mobile navigation"
                        aria-modal="true"
                        className="fixed inset-x-4 top-[5.25rem] z-50 mx-auto w-auto max-w-sm overflow-y-auto"
                        style={{ maxHeight: 'calc(100dvh - 6.5rem)' }}
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.985 }}
                        transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="overflow-hidden rounded-[1.6rem] border border-[var(--editorial-rule)] bg-[var(--editorial-card)]/95 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.42)]">
                                {/* Menu Items */}
                                <motion.ul
                                    aria-label="Mobile navigation links"
                                    className="flex flex-col gap-1 p-3 sm:p-4"
                                >
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: reduceMotion ? 0 : 0.045 * index, duration: reduceMotion ? 0.01 : 0.2 }}
                                        >
                                            <Link
                                                to={item.path || item.id}
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                                activeClass="active-link-mobile"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group relative block min-h-12 cursor-pointer rounded-xl px-4 py-3 font-mono text-sm font-medium text-[var(--editorial-muted)] transition-colors duration-200 hover:bg-[var(--editorial-accent)]/10 hover:text-[var(--editorial-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--editorial-accent)]"
                                            >
                                                {/* Active Indicator */}
                                                <span className="absolute left-0 top-1/2 h-0 w-1 -translate-y-1/2 rounded-full bg-[var(--editorial-accent)] transition-all duration-200 group-hover:h-7 group-[.active-link-mobile]:h-7" />

                                                {/* Text */}
                                                <span className="relative ml-2 group-[.active-link-mobile]:text-[var(--editorial-ink)]">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ))}

                                    {/* Divider */}
                                    <motion.div
                                        className="my-2 h-px bg-[var(--editorial-rule)]"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: reduceMotion ? 0 : 0.2, duration: reduceMotion ? 0.01 : 0.2 }}
                                    />

                                    {/* Contact Button */}
                                    <motion.li
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: reduceMotion ? 0 : 0.22, duration: reduceMotion ? 0.01 : 0.2 }}
                                    >
                                        <Link
                                            to="contact"
                                            smooth={true}
                                            duration={500}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="group relative mt-2 block min-h-12 cursor-pointer rounded-xl bg-[#7C3AED] px-4 py-3 text-center font-mono text-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,58,237,0.2)] transition-colors hover:bg-[#6c21d6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--editorial-accent)]"
                                        >
                                            Contact Me
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default MobileNav;
