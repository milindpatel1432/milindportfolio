import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import Section from '../../layouts/Section';
import { projects, projectFilters } from '../../utils/data';
import { fadeUp, viewportOnce } from '../../utils/animations';
import { cn } from '../../utils/cn';
import Button from '../Button/Button';
import ShreeAgenciesCaseStudy from '../CaseStudy/ShreeAgenciesCaseStudy';
import GameHubCaseStudy from '../CaseStudy/GameHubCaseStudy';

function FeaturedProjectItem({ project, index, onOpenCaseStudy }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;
  const isModalCaseStudy = project.hasCaseStudyModal || project.id === 'shree-agencies' || project.id === 'gamehub';

  const handleCaseStudyClick = (e) => {
    if (isModalCaseStudy) {
      e.preventDefault();
      onOpenCaseStudy(project.id);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative py-8 lg:py-12 border-b border-white/[0.08] last:border-b-0"
      aria-label={`Project: ${project.title}`}
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* ── Image Column (Alternates Left / Right on Desktop) ── */}
        <div className={cn('lg:col-span-7 relative', isEven ? 'lg:order-1' : 'lg:order-2')}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl group/img transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]">
            
            <div className="relative aspect-[16/10] overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover object-top transform group-hover/img:scale-[1.03] transition-transform duration-700 ease-out"
                />
              ) : (
                <div className={cn('w-full h-full bg-gradient-to-br flex items-center justify-center', project.gradient)}>
                  <span className="text-8xl font-outfit font-black opacity-20 text-white select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              {/* Hover Dark Overlay & Quick Action Links */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center gap-3 p-4 z-10">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-semibold shadow-lg shadow-violet-600/30 hover:bg-violet-500 transition-all flex items-center gap-1.5 transform hover:scale-105"
                  aria-label={`Visit live site for ${project.title}`}
                >
                  <ExternalLink size={14} /> Live Website
                </a>

                {isModalCaseStudy ? (
                  <button
                    type="button"
                    onClick={handleCaseStudyClick}
                    className="px-4 py-2.5 rounded-xl glass border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-all flex items-center gap-1.5 transform hover:scale-105 cursor-pointer"
                    aria-label={`View case study for ${project.title}`}
                  >
                    View Case Study
                  </button>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-all flex items-center gap-1.5 transform hover:scale-105"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FiGithub size={14} /> GitHub
                  </a>
                ) : null}
              </div>
            </div>

          </div>
        </div>

        {/* ── Content Column ── */}
        <div className={cn('lg:col-span-5 flex flex-col items-start', isEven ? 'lg:order-2' : 'lg:order-1')}>
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-sm font-bold text-violet-400 tracking-wider">
              {project.number || `0${index + 1}`}
            </span>

            {project.isRealClient && (
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                REAL CLIENT PROJECT
              </span>
            )}

            <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
              {project.categoryDisplay || project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white mb-2 leading-snug group-hover:text-violet-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Role Subtitle */}
          {project.role && (
            <p className="text-xs font-semibold text-violet-400/90 mb-3 tracking-wide uppercase">
              Role: {project.role}
            </p>
          )}

          {/* Short Description */}
          <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold glass border border-white/[0.08] text-white/70 hover:text-white hover:border-violet-500/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-500 shadow-lg shadow-violet-600/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label={`Visit live website for ${project.title}`}
            >
              <span>Live Website</span>
              <ExternalLink size={14} />
            </a>

            {isModalCaseStudy ? (
              <button
                type="button"
                onClick={handleCaseStudyClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-white/80 hover:text-white hover:bg-white/10 text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label={`View case study for ${project.title}`}
              >
                <span>View Case Study</span>
                <ArrowRight size={14} />
              </button>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-white/80 hover:text-white hover:bg-white/10 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FiGithub size={14} />
                <span>GitHub</span>
              </a>
            ) : null}
          </div>

        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);

  useEffect(() => {
    if (activeCaseStudyId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCaseStudyId]);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Section id="projects" label="Projects section" className="py-16 md:py-20 lg:py-24 lg:min-h-0">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />

        {/* ── Section Header & Filter Bar ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 max-w-7xl mx-auto w-full relative z-10"
        >
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              SELECTED WORK
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-white leading-tight mb-3 tracking-tight">
              Things I've <span className="text-gradient-violet">Built.</span>
            </h2>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              A selection of real-world websites and applications I've designed and developed.
            </p>
          </div>

          {/* Minimal Pill Category Filter */}
          <div
            className="flex items-center gap-2 flex-wrap shrink-0"
            role="tablist"
            aria-label="Project filters"
          >
            {projectFilters.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer',
                  activeFilter === filter
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'glass border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/5'
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Editorial Featured Projects Showcase ── */}
        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <FeaturedProjectItem
                key={project.id}
                project={project}
                index={idx}
                onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* ── Final Section CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto w-full relative z-10"
        >
          <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 gradient-border-violet text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-violet-600/15 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3 inline-block">
              HAVE A PROJECT IN MIND?
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-white mb-6">
              Let's build something <span className="text-gradient-violet">great.</span>
            </h3>

            <div className="flex justify-center">
              <Button
                variant="glow"
                size="lg"
                onClick={handleScrollToContact}
                icon={<Sparkles size={18} />}
                iconPosition="right"
                className="animate-pulse-glow hover:scale-105 transition-transform"
                aria-label="Start a project with Milind"
              >
                Start a Project →
              </Button>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Case Study Modals */}
      <AnimatePresence>
        {activeCaseStudyId === 'shree-agencies' && (
          <ShreeAgenciesCaseStudy onBack={() => setActiveCaseStudyId(null)} />
        )}
        {activeCaseStudyId === 'gamehub' && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0f]">
            <GameHubCaseStudy onBack={() => setActiveCaseStudyId(null)} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

