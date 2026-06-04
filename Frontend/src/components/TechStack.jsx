import Marquee from 'react-fast-marquee';
import  Headings  from '../Resuables/Headings';

const techStack = [
  { name: 'React',        slug: 'react',             color: '61DAFB' },
  { name: 'Next.js',      slug: 'nextdotjs',         color: 'ffffff' },
  { name: 'TypeScript',   slug: 'typescript',        color: '3178C6' },
  { name: 'JavaScript',   slug: 'javascript',        color: 'F7DF1E' },
  { name: 'Tailwind CSS', slug: 'tailwindcss',       color: '06B6D4' },
  { name: 'Node.js',      slug: 'nodedotjs',         color: '339933' },
  { name: 'Express.js',   slug: 'express',           color: 'ffffff' },
  { name: 'Python',       slug: 'python',            color: '3776AB' },
  { name: 'MongoDB',      slug: 'mongodb',           color: '47A248' },
  { name: 'PostgreSQL',   slug: 'postgresql',        color: '4169E1' },
  { name: 'TensorFlow',   slug: 'tensorflow',        color: 'FF6F00' },
  { name: 'Git',          slug: 'git',               color: 'F05032' },
  { name: 'GitHub',       slug: 'github',            color: 'ffffff' },
  { name: 'Docker',       slug: 'docker',            color: '2496ED' },
  { name: 'Vite',         slug: 'vite',              color: '646CFF' },
  { name: 'Postman',      slug: 'postman',           color: 'FF6C37' },
  { name: 'Vue.js',       slug: 'vuedotjs',          color: '4FC08D' },
  { name: 'HTML5',        slug: 'html5',             color: 'E34F26' },
  { name: 'CSS3',         slug: 'css3',              color: '1572B6' },
  { name: 'VS Code',      slug: 'visualstudiocode',  color: '007ACC' },
];

const iconUrl = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

function TechStack() {
  return (
    <section className="w-full px-4 sm:px-8 py-16 bg-white text-slate-900 relative dark:bg-[#1a1c23] dark:text-white">
      <div className="text-center mb-8">
         <Headings
                      text=" Technical "
                      highlightText="Proficiency"
                      subText="Technologies and tools I use to bring ideas to life"
                      styh1="text-center"
                      styp="text-center font-mono2"
                  />
      </div>

      <div className="w-full overflow-hidden">
        <Marquee speed={40} gradient={false}>
          {[...techStack, ...techStack].map((tech, i) => (
              <span key={`mq-${i}`} className="flex items-center gap-2 mx-6">
                <img
                  src={iconUrl(tech.slug, tech.color)}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-mono2 text-slate-600 dark:text-white/60 whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-slate-300/80 text-sm select-none ml-4 leading-none self-center dark:text-white/20">·</span>
              </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default TechStack;
