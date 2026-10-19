import { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from '../data/PortfolioData';
import ResponsiveImage from './responsiveImage';

function ProjectVisual({ project, index }) {
  if (project.image) {
    return (
      <ResponsiveImage
        publicId={project.image}
        alt={project.alt}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className={`relative flex h-full min-h-60 items-end overflow-hidden p-7 ${index === 1 ? 'bg-[#17232b]' : 'bg-[#21183b]'}`}>
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -right-2 -top-10 h-44 w-44 rounded-full border border-white/10" />
        <div className="absolute -right-2 bottom-5 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
          {project.category}
        </p>
        <p className="font-clash text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.title}
        </p>
        {project.title === 'Tender Intelligence' && (
          <span className="mt-4 inline-flex rounded-full border border-amber-200/20 bg-amber-100/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-100/80">
            In active development
          </span>
        )}
      </div>
    </div>
  );
}

function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  const featuredProjects = Projects.filter((project) => project.featured);
  const otherProjectPriority = [18, 4, 6, 7];
  const otherProjects = Projects
    .filter((project) => !project.featured)
    .sort((a, b) => {
      const rank = (project) => {
        const priorityIndex = otherProjectPriority.indexOf(project.id);
        return priorityIndex === -1
          ? otherProjectPriority.length + Projects.indexOf(project) / Projects.length
          : priorityIndex;
      };

      return rank(a) - rank(b);
    });
  const visibleProjects = showMore ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden bg-[var(--editorial-paper)] px-6 py-16 text-[var(--editorial-ink)] transition-colors duration-500 sm:py-18 md:px-12 md:py-20 lg:px-16"
    >
      <div className="pointer-events-none absolute -left-40 top-28 -z-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 18, filter: 'blur(7px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[var(--editorial-accent)]">
            Selected work <span className="mx-2 text-[var(--editorial-muted)]">/</span> 01—03
          </p>
          <h2 className="mb-5 font-clash text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--editorial-ink)] md:text-6xl">
            Systems built for <span className="text-[var(--editorial-accent)]">real-world work.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[var(--editorial-muted)] md:text-lg">
            A selection of software and AI systems I’m building across health, finance, and operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const projectUrl = project.link || project.repoLink;
            const actionLabel = project.link ? 'View live site' : 'View repository';

            return (
              <motion.article
                key={project.id}
                className={`group flex h-full flex-col overflow-hidden border-y border-[var(--editorial-rule)] bg-[var(--editorial-card)] transition-[border-color,background-color,box-shadow,transform] duration-500 hover:border-[var(--editorial-accent)] hover:shadow-xl hover:shadow-black/5 ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.08fr_.92fr]' : ''}`}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`relative overflow-hidden bg-[#12141b] ${index === 0 ? 'h-72 md:h-full md:min-h-[28rem]' : 'h-60'}`}>
                  <ProjectVisual project={project} index={index} />
                  <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm">
                    0{index + 1}
                  </span>
                </div>
                <div className={`flex flex-1 flex-col p-6 md:p-8 ${index === 0 ? 'md:justify-center md:p-10 lg:p-12' : ''}`}>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--editorial-accent)]">
                      {project.category}
                    </span>
                    {project.title === 'Tender Intelligence' && (
                      <span className="shrink-0 text-[10px] font-medium text-amber-700 dark:text-amber-300">Building</span>
                    )}
                  </div>
                  <h3 className="mb-3 font-clash text-3xl font-semibold tracking-tight text-[var(--editorial-ink)] md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--editorial-muted)] md:text-base">
                    {project.description}
                  </p>
                  {project.contribution && (
                    <p className="mb-6 border-l border-[var(--editorial-accent)] pl-3 text-xs text-[var(--editorial-muted)]">
                      {project.contribution}
                    </p>
                  )}
                  {(project.roles || project.team) && (
                    <div className="mb-6 space-y-3 text-xs leading-relaxed text-[var(--editorial-muted)]">
                      {project.roles && (
                        <p>
                          <span className="font-semibold text-[var(--editorial-ink)]">My roles: </span>
                          {project.roles.join(' · ')}
                        </p>
                      )}
                      {project.team && (
                        <p>
                          <span className="font-semibold text-[var(--editorial-ink)]">Team: </span>
                          {project.team.join(' · ')}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags?.slice(0, 5).map((tag) => (
                      <span key={`${project.id}-${tag}`} className="rounded-full border border-[var(--editorial-rule)] px-2.5 py-1 font-mono text-[10px] text-[var(--editorial-muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border-b border-[var(--editorial-accent)] pb-1 text-sm font-semibold text-[var(--editorial-accent)] transition-[gap,color] duration-300 hover:gap-3"
                  >
                    {actionLabel} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-14 border-t border-[var(--editorial-rule)] pt-8 sm:mt-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted)]">More work</p>
                <h3 className="font-clash text-3xl font-semibold text-[var(--editorial-ink)]">Other projects</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowMore((current) => !current)}
                aria-expanded={showMore}
                className="rounded-full border border-[var(--editorial-rule)] px-5 py-2.5 text-sm font-medium text-[var(--editorial-ink)] transition-colors hover:border-[var(--editorial-accent)]"
              >
                {showMore ? 'Show fewer projects ↑' : `Browse ${otherProjects.length} more projects ↓`}
              </button>
            </div>
            {visibleProjects.length > 0 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project) => (
                  <a
                    key={project.id}
                    href={project.link || project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[var(--editorial-rule)] bg-[var(--editorial-card)] p-5 transition-colors hover:border-[var(--editorial-accent)]"
                  >
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--editorial-accent)]">{project.category}</p>
                    <h4 className="mb-2 font-clash text-lg font-semibold text-[var(--editorial-ink)]">{project.title}</h4>
                    <p className="text-xs leading-relaxed text-[var(--editorial-muted)]">{project.description.split(' ').slice(0, 22).join(' ')}…</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
