import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import Section from '../../layouts/Section';
import { projects, projectFilters } from '../../utils/data';
import { fadeUp, viewportOnce } from '../../utils/animations';
import { cn } from '../../utils/cn';
import Button from '../Button/Button';
import ShreeAgenciesCaseStudy from '../CaseStudy/ShreeAgenciesCaseStudy';
import GameHubCaseStudy from '../CaseStudy/GameHubCaseStudy';

/**
 * Minimal Premium CTA Link with arrow & underline interaction
 */
function MinimalCTA({ href, onClick, label, isExternal = false, isGithub = false }) {
  const content = (
    <>
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-violet-400 to-indigo-400 group-hover/link:w-full transition-all duration-300 ease-out" />
      </span>
      {isGithub ? (
        <FiGithub size={13} className="transform group-hover/link:rotate-12 transition-transform duration-300 text-violet-400" />
      ) : isExternal ? (
        <ArrowUpRight size={14} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300 text-violet-400" />
      ) : (
        <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform duration-300 text-violet-400" />
      )}
    </>
  );

  const className = "group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-colors duration-300 py-1 cursor-pointer select-none";

  if (href && isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className} aria-label={label}>
      {content}
    </button>
  );
}

/**
 * Motion variants for coordinated project reveals
 */
const posterContainerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const imageRevealVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const panelSlideVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const techVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

function FeaturedProjectPoster({ project, index, onOpenCaseStudy }) {
  const isEven = index % 2 === 0;
  const isModalCaseStudy = project.hasCaseStudyModal || project.id === 'shree-agencies' || project.id === 'gamehub';

  const handleCaseStudyClick = (e) => {
    if (isModalCaseStudy) {
      e?.preventDefault();
      onOpenCaseStudy(project.id);
    }
  };

  return (
    <motion.article
      variants={posterContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative mb-20 lg:mb-32 last:mb-12 max-w-7xl mx-auto w-full group"
      aria-label={`Project: ${project.title}`}
    >
      {/* ── Background Decorative Low-Opacity Number ── */}
      <span
        className={cn(
          "absolute font-outfit text-8xl sm:text-9xl lg:text-[180px] font-black text-white/[0.04] select-none pointer-events-none z-0 tracking-tighter leading-none -top-10 sm:-top-14",
          isEven ? "left-0 sm:left-4" : "right-0 sm:right-4"
        )}
        aria-hidden="true"
      >
        {project.number || `0${index + 1}`}
      </span>

      <div className="relative z-10">
        {/* ── Asymmetric Layout Grid ── */}
        <div className="relative flex flex-col lg:block">

          {/* ── 1. Screenshot Image Container (~70-75% visual attention on Desktop) ── */}
          <motion.div
            variants={imageRevealVariants}
            className={cn(
              "relative w-full lg:w-[72%] xl:w-[75%] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#0d0916] shadow-2xl transition-all duration-700 shadow-[0_0_50px_rgba(124,58,237,0.12)] group-hover:shadow-[0_0_75px_rgba(124,58,237,0.22)] group-hover:border-white/20",
              isEven ? "lg:ml-auto" : "lg:mr-auto"
            )}
          >
            {/* Real Client Project Badge (Floating inside screenshot) */}
            {project.isRealClient && (
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0a0f]/85 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase tracking-wider shadow-xl shadow-black/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                REAL CLIENT PROJECT
              </div>
            )}

            {/* Screenshot Display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-slate-950">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot Preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-[1.04]"
                />
              ) : (
                <div className={cn("w-full h-full bg-gradient-to-br flex items-center justify-center", project.gradient)}>
                  <span className="text-8xl font-outfit font-black opacity-20 text-white select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              {/* Soft Gradient Bottom Edge for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* ── 2. Floating Info Panel (Overlaps lower portion of screenshot on Desktop) ── */}
          <motion.div
            variants={panelSlideVariants}
            className={cn(
              "relative z-20 w-full mt-4 lg:mt-0 lg:absolute lg:bottom-4 lg:w-[460px] xl:w-[500px]",
              isEven ? "lg:left-0" : "lg:right-0"
            )}
          >
            <div className="bg-[#0d091a]/90 backdrop-blur-xl border border-white/15 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] group-hover:border-violet-500/35 transition-all duration-500">
              
              {/* Top Meta Row */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="font-mono text-xs font-bold text-violet-400 tracking-widest uppercase">
                  {project.number || `0${index + 1}`}
                </span>

                <span className="text-[11px] font-semibold text-white/60 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                  {project.categoryDisplay || project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-violet-200 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Role Subtitle */}
              {project.role && (
                <p className="text-[11px] font-bold text-violet-400 uppercase tracking-widest mb-3">
                  Role: {project.role}
                </p>
              )}

              {/* Description Quote */}
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-5 font-normal italic border-l-2 border-violet-500/40 pl-3 py-0.5">
                "{project.description}"
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    variants={techVariants}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] border border-white/[0.08] text-white/70 hover:text-white hover:border-violet-500/30 transition-colors"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Minimal CTAs Row */}
              <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-white/[0.08]">
                {project.liveUrl && (
                  <MinimalCTA
                    href={project.liveUrl}
                    label="View Live Website"
                    isExternal={true}
                  />
                )}

                {isModalCaseStudy ? (
                  <MinimalCTA
                    onClick={handleCaseStudyClick}
                    label="View Case Study"
                    isExternal={false}
                  />
                ) : project.githubUrl ? (
                  <MinimalCTA
                    href={project.githubUrl}
                    label="View GitHub Code"
                    isExternal={true}
                    isGithub={true}
                  />
                ) : null}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
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

  // Filter normalization
  const filterKey = activeFilter.toLowerCase();
  
  const filteredProjects = projects.filter((p) => {
    if (filterKey === 'all') return true;
    return p.category.toLowerCase() === filterKey;
  });

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Section id="projects" label="Projects section" className="py-16 md:py-24 lg:py-32 lg:min-h-0 relative overflow-hidden">
        
        {/* Ambient background lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

        {/* ── 1. SECTION INTRO & 2. NAVIGATION ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-24 max-w-7xl mx-auto w-full relative z-10"
        >
          {/* Header text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-violet-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
              SELECTED WORK / 01
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-outfit text-white leading-tight tracking-tight mb-3">
              Projects that <br className="hidden sm:inline" />
              <span className="text-gradient-violet">speak for themselves.</span>
            </h2>

            <p className="text-white/60 text-sm sm:text-base font-normal max-w-lg">
              Real-world websites and applications built with modern technologies.
            </p>
          </div>

          {/* Minimal Horizontal Filter Bar */}
          <div
            className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shrink-0 self-start md:self-auto"
            role="tablist"
            aria-label="Project category filters"
          >
            {projectFilters.map((filter) => {
              const uppercaseFilter = filter.toUpperCase();
              const isActive = activeFilter === uppercaseFilter || (activeFilter === 'ALL' && filter === 'All');

              return (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(uppercaseFilter)}
                  className={cn(
                    "relative px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors duration-300 focus:outline-none cursor-pointer z-10 select-none",
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterGlow"
                      className="absolute inset-0 rounded-xl bg-violet-600/30 border border-violet-500/50 shadow-[0_0_20px_rgba(124,58,237,0.4)] z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  {uppercaseFilter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── 3. FEATURED PROJECT POSTERS SHOWCASE ── */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <FeaturedProjectPoster
                  key={project.id}
                  project={project}
                  index={idx}
                  onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
                />
              ))
            ) : (
              <div className="text-center py-16 text-white/40 font-mono text-sm">
                No projects found in this category.
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* ── SECTION CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mt-24 max-w-4xl mx-auto w-full relative z-10"
        >
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-violet-600/15 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-violet-400 mb-3 inline-block">
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

