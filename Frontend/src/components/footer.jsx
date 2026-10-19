// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  return (
    <motion.footer
      initial={{ y: 18, opacity: 0, filter: 'blur(7px)' }}
      whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col items-center justify-center gap-3 border-t border-[var(--editorial-rule)] bg-[var(--editorial-paper)] px-6 py-8 text-[var(--editorial-ink)] transition-colors duration-500"
    >
      {/* Copyright - Enhanced for mobile */}
      <motion.div
        className="flex items-center gap-1 p-2 text-sm font-light tracking-wide text-[var(--editorial-muted)]"
        transition={{ delay: 0.4 }}
      >
        <span className='font-poppins italic'>Copyright © {new Date().getFullYear()}</span><span className='font-IBM italic'>Ife-Banks.</span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
