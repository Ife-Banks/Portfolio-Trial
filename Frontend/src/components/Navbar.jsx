import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-scroll';
import MobileNav from '../views/MobileNav';
import { ThemeContext } from './context/ThemeContext';
import LangContext from './context/LangContext';

const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'work' },
    { name: 'Projects', id: 'portfolio' },
];

const Navigate = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(LangContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        // Ignore browser scroll restoration on load; only respond after the
        // visitor has initiated a scroll themselves.
        let hasUserScrolled = false;
        const updateNavbar = () => {
            if (hasUserScrolled) setIsCompact(window.scrollY > 8);
        };
        const enableScrollResponse = () => {
            hasUserScrolled = true;
            updateNavbar();
        };
        const handleKeydown = (event) => {
            if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'End', 'Home'].includes(event.key)) return;
            if (event.target instanceof HTMLElement && event.target.isContentEditable) return;
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target?.tagName)) return;
            enableScrollResponse();
        };

        window.addEventListener('scroll', updateNavbar, { passive: true });
        window.addEventListener('wheel', enableScrollResponse, { passive: true });
        window.addEventListener('touchmove', enableScrollResponse, { passive: true });
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('scroll', updateNavbar);
            window.removeEventListener('wheel', enableScrollResponse);
            window.removeEventListener('touchmove', enableScrollResponse);
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    const linkColor = isCompact
        ? 'text-slate-700 hover:text-slate-950 dark:text-white/75 dark:hover:text-white'
        : 'text-[var(--editorial-muted)] hover:text-[var(--editorial-ink)]';

    return (
        <>
        <motion.header
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
        >
            <motion.div
                layout
                transition={{ layout: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } }}
                animate={{ y: isCompact ? 12 : 0 }}
                className={`pointer-events-auto grid items-center transition-[background-color,border-color,box-shadow,padding,border-radius] duration-500 ${isCompact
                    ? 'w-fit max-w-[calc(100vw-2rem)] grid-cols-[1fr_auto] gap-3 rounded-full border border-white/60 bg-white/75 px-3 py-2.5 text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/65 dark:text-white lg:grid-cols-[auto_auto_auto] lg:gap-5 lg:px-4'
                    : 'w-full max-w-7xl grid-cols-[1fr_auto] gap-4 border border-transparent bg-transparent px-2 py-6 text-[var(--editorial-ink)] md:px-6 lg:grid-cols-[1fr_auto_1fr]'
                    }`}
            >
                <Link
                    to="hero"
                    smooth
                    duration={650}
                    className={`flex cursor-pointer items-center gap-2.5 justify-self-start rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 ${isCompact ? 'focus-visible:outline-slate-700 dark:focus-visible:outline-white' : 'focus-visible:outline-[var(--editorial-accent)]'}`}
                    aria-label="Ifebanks home"
                >
                    <img
                        src="/Ife.png"
                        alt=""
                        className={`shrink-0 rounded-full object-cover transition-[width,height] duration-500 ${isCompact ? 'h-8 w-8' : 'h-10 w-10'}`}
                    />
                    <span className={`font-clash text-lg font-semibold tracking-tight transition-colors duration-300 ${isCompact ? 'text-slate-900 dark:text-white' : 'text-[var(--editorial-ink)]'}`}>
                        Ifebanks<span className="text-[var(--editorial-accent)]">.</span>
                    </span>
                </Link>

                <nav aria-label="Main navigation" className="hidden lg:block">
                    <ul className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={item.id}
                                    spy
                                    smooth
                                    duration={650}
                                    activeClass="active-link"
                                    className={`group relative block cursor-pointer whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors duration-300 ${linkColor} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`}
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-3 right-3 h-px origin-left scale-x-0 bg-[var(--editorial-accent)] transition-transform duration-300 group-hover:scale-x-100 group-[.active-link]:scale-x-100" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden items-center justify-self-end lg:flex">
                    <motion.button
                        type="button"
                        className={`mr-4 flex h-9 w-9 items-center justify-center transition-colors duration-300 ${isCompact ? 'text-slate-600 hover:text-slate-950 dark:text-white/75 dark:hover:text-white' : 'text-[var(--editorial-muted)] hover:text-[var(--editorial-accent)]'}`}
                        whileTap={{ scale: 0.92 }}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
                    </motion.button>
                    <Link
                        to="contact"
                        smooth
                        duration={650}
                        className={`cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm font-medium transition-[background-color,color,border-radius] duration-300 ${isCompact
                            ? 'rounded-full bg-[#7C3AED] text-white hover:bg-[#6c21d6]'
                            : 'rounded-sm bg-[#7C3AED] text-white hover:bg-[#6c21d6]'
                            }`}
                    >
                        Let&apos;s talk <span aria-hidden="true">↗</span>
                    </Link>
                </div>

                <motion.button
                    type="button"
                    className={`relative justify-self-end p-2 lg:hidden ${isCompact ? 'text-slate-700 dark:text-white' : 'text-[var(--editorial-ink)]'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    whileTap={{ scale: 0.92 }}
                >
                    <motion.span
                        className="block"
                        initial={false}
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </motion.span>
                </motion.button>
            </motion.div>

        </motion.header>
        <MobileNav />
        </>
    );
};

export default Navigate;
