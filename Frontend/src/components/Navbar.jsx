import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { navBarVariants } from './Animations/Animate';
import MobileNav from '../views/MobileNav';
import LangContext from './context/LangContext';

const Navigate = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(LangContext);

    const navItems = [
        { name: 'Home', path: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'work' },
        { name: 'Portfolio', id: 'portfolio' },
        {name: 'Contact', id: 'contact'}
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            className='flex w-fit mx-auto items-center fixed right-4 top-4 lg:top-6 lg:right-1/2 lg:translate-x-1/2 z-50'
        >
            {/* Glassmorphic Container with Gradient Border */}
            <div className='relative'>
                {/* Animated Gradient Border */}
                <motion.div
                    className='absolute -inset-[1px] bg-gradient-to-r from-[#871BE6] via-[#C4B5FD] to-[#871BE6] rounded-full lg:rounded-3xl opacity-60 blur-sm'
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

                {/* Main Nav Container */}
                <div className='relative bg-[#1f2128]/95 backdrop-blur-xl rounded-full lg:rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(135,27,230,0.2)]'>
                    {/* Desktop Navigation */}
                    <motion.ul
                        className='hidden lg:flex gap-2 items-center p-2 text-[#95A3B9] font-workSan text-sm font-medium'
                        transition={{ delay: 0.3 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.li
  key={item.name}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 * index }}
>
  <Link
    to={item.path || item.id}
    spy={true}
    smooth={true}
    duration={500}
    activeClass="active-link"
    className="group relative cursor-pointer px-4 py-2 rounded-2xl transition-all duration-300 hover:text-white block"
  >
    {/* Hover Background Effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-[#871BE6]/10 to-[#C4B5FD]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Underline (Hover + Active) */}
    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] transition-all duration-300 rounded-full group-hover:w-3/4 group-[.active-link]:w-3/4" />

    {/* Text */}
    <span className="relative group-[.active-link]:text-white">{item.name}</span>
  </Link>
</motion.li>

                        ))}

                    </motion.ul>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className='lg:hidden text-[#cbd6e8] p-3 cursor-pointer relative group'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Button Background Glow */}
                        <motion.div
                            className='absolute inset-0 bg-[#871BE6]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                            whileHover={{ scale: 1.2 }}
                        />

                        <motion.div
                            initial={false}
                            animate={{ rotate: isMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                            className='relative z-10'
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </motion.div>
                    </motion.button>
                </div>

                {/* Ambient Glow Effect */}
                <motion.div
                    className='absolute -inset-4 bg-gradient-to-r from-[#871BE6]/10 to-[#C4B5FD]/10 rounded-full blur-2xl pointer-events-none opacity-50'
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Mobile Menu */}
            <MobileNav />
        </motion.div>
    );
}

export default Navigate;