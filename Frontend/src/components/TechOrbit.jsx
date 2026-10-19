import { motion, useReducedMotion } from 'framer-motion';
import {
  SiDocker,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiTypescript,
} from 'react-icons/si';

const technologies = [
  { name: 'Next.js', Icon: SiNextdotjs, x: '50%', y: '5%', tone: '#C7C9D1' },
  { name: 'TypeScript', Icon: SiTypescript, x: '82%', y: '20%', tone: '#6B9AE0' },
  { name: 'Node.js', Icon: SiNodedotjs, x: '91%', y: '51%', tone: '#82B883' },
  { name: 'PostgreSQL', Icon: SiPostgresql, x: '73%', y: '81%', tone: '#7996D2' },
  { name: 'Python', Icon: SiPython, x: '50%', y: '94%', tone: '#83A9D4' },
  { name: 'Docker', Icon: SiDocker, x: '19%', y: '79%', tone: '#78A9D7' },
  { name: 'PyTorch', Icon: SiPytorch, x: '9%', y: '48%', tone: '#D58C76' },
  { name: 'JavaScript', Icon: SiJavascript, x: '20%', y: '19%', tone: '#D3B85D' },
  { name: 'React Native', Icon: SiReact, x: '68%', y: '35%', tone: '#61DAFB' },
  { name: 'Redis', Icon: SiRedis, x: '32%', y: '64%', tone: '#D57F83' },
];

const floatOffsets = [8, 11, 7, 10, 6, 9, 7, 12, 8, 10];

function TechOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="Floating icons for Next.js, TypeScript, Node.js, PostgreSQL, Python, Docker, PyTorch, JavaScript, React Native and Redis"
      className="relative mx-auto aspect-square w-full max-w-[27rem] overflow-visible"
    >
      <div className="absolute inset-[7%] rounded-full border border-[var(--editorial-rule)]" />
      <div className="absolute inset-[19%] rounded-full border border-[var(--editorial-rule)]" />
      <div className="absolute inset-[32%] rounded-full border border-[var(--editorial-rule)]" />
      <div className="absolute inset-[7%] rotate-45 rounded-[2.5rem] border border-[var(--editorial-rule)]" />
      <div className="absolute inset-x-[7%] top-1/2 h-px -translate-y-1/2 bg-[var(--editorial-rule)]" />
      <div className="absolute inset-y-[7%] left-1/2 w-px -translate-x-1/2 bg-[var(--editorial-rule)]" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-[19%]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--editorial-accent)] shadow-[0_0_24px_var(--editorial-accent)]" />
      </motion.div>

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[var(--editorial-accent)]/30 bg-[var(--editorial-card)]/90 shadow-[0_0_50px_rgba(124,58,237,0.12)] backdrop-blur-md sm:h-28 sm:w-28">
        <span className="font-clash text-3xl font-semibold tracking-[-0.06em] text-[var(--editorial-ink)] sm:text-4xl">AI</span>
        <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--editorial-muted)] sm:text-[9px]">Systems</span>
      </div>

      {technologies.map(({ name, Icon, x, y, tone }, index) => (
        <motion.div
          key={name}
          title={name}
          className="absolute z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[var(--editorial-rule)] bg-[var(--editorial-card)]/90 shadow-lg shadow-black/10 backdrop-blur-md sm:h-[3.75rem] sm:w-[3.75rem]"
          style={{ left: x, top: y, color: tone }}
          initial={false}
          animate={reduceMotion ? undefined : { y: [0, -floatOffsets[index], 0], rotate: [0, index % 2 ? 3 : -3, 0] }}
          transition={reduceMotion ? undefined : { duration: 3.6 + (index % 4) * 0.45, repeat: Infinity, ease: 'easeInOut', delay: index * 0.13 }}
          whileHover={reduceMotion ? undefined : { scale: 1.13, zIndex: 20, boxShadow: `0 0 28px ${tone}40`, transition: { duration: 0.2 } }}
        >
          <Icon aria-hidden="true" className="h-[1.3rem] w-[1.3rem] sm:h-7 sm:w-7" />
          <span className="sr-only">{name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default TechOrbit;
