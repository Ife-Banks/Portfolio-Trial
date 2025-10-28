import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { menuVariants, itemVariants2 } from '../components/Animations/Animate';
import LangContext from '../components/context/LangContext';

function MobileNav() {
    const { isMenuOpen, setIsMenuOpen } = useContext(LangContext);

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
                    {/* Backdrop with blur */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Mobile Menu Panel */}
                    <motion.div
                        className="fixed top-20 right-4 w-64 z-50"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        {/* Gradient Border Container */}
                        <div className="relative">
                            {/* Animated Gradient Border */}
                            <motion.div
                                className="absolute -inset-[1px] bg-gradient-to-br from-[#871BE6] via-[#C4B5FD] to-[#871BE6] rounded-2xl opacity-60 blur-sm"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                style={{
                                    backgroundSize: '200% 200%',
                                }}
                            />

                            {/* Main Menu Container */}
                            <div className="relative bg-[#1f2128]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(135,27,230,0.3)] overflow-hidden">
                                {/* Menu Items */}
                                <motion.ul
                                    className="flex flex-col p-4 gap-1"
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <Link
                                                to={item.path || item.id}
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                                activeClass="active-link-mobile"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group relative cursor-pointer block px-4 py-3 rounded-xl text-[#95A3B9] font-workSan text-sm font-medium transition-all duration-300 hover:text-white"
                                            >
                                                {/* Hover Background */}
                                                <span className="absolute inset-0 bg-gradient-to-r from-[#871BE6]/10 to-[#C4B5FD]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                {/* Active Indicator */}
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#871BE6] to-[#C4B5FD] rounded-full transition-all duration-300 group-hover:h-8 group-[.active-link-mobile]:h-8" />

                                                {/* Text */}
                                                <span className="relative ml-2 group-[.active-link-mobile]:text-white">
                          {item.name}
                        </span>
                                            </Link>
                                        </motion.li>
                                    ))}

                                    {/* Divider */}
                                    <motion.div
                                        className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.4 }}
                                    />

                                    {/* Contact Button */}
                                    <motion.li
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Link
                                            to="contact"
                                            smooth={true}
                                            duration={500}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="relative group cursor-pointer block mt-2"
                                        >
                                            <motion.div
                                                className="relative px-4 py-3 rounded-xl bg-gradient-to-r from-[#871BE6] to-[#9a3aed] text-white font-workSan text-sm font-semibold text-center shadow-[0_4px_16px_rgba(135,27,230,0.4)] overflow-hidden"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {/* Animated Shine Effect */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                    animate={{
                                                        x: ['-100%', '100%'],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatDelay: 1,
                                                        ease: 'easeInOut',
                                                    }}
                                                />
                                                <span className="relative">Contact Me</span>
                                            </motion.div>
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </div>

                            {/* Ambient Glow Effect */}
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-br from-[#871BE6]/20 to-[#C4B5FD]/20 rounded-2xl blur-2xl pointer-events-none"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default MobileNav;