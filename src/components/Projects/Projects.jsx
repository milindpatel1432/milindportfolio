import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, AlertCircle, TrendingUp } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import Section, { SectionHeading } from '../../layouts/Section';
import { projects, projectFilters } from '../../utils/data';
import { fadeUp, viewportOnce } from '../../utils/animations';
import { cn } from '../../utils/cn';
import Button from '../Button/Button';

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-950/30"
      aria-label={`Project: ${project.title}`}
    >
      {/* Image / Visual Header */}
      <div className="relative h-48 overflow-hidden">
        {/* Gradient BG as image placeholder */}
        <div className={cn('absolute inset-0 bg-gradient-to-br', project.gradient)} />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />

        {/* Project initial typography icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: hovered ? 1.12 : 1, y: hovered ? -4 : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-7xl font-outfit font-black opacity-30 select-none"
            style={{ color: project.accent }}
          >
            {project.title.charAt(0)}
          </motion.div>
        </div>

        {/* Quick action hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-3"
          aria-hidden={!hovered}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 hover:bg-violet-600 text-white border border-white/20 transition-all duration-200 hover:scale-110 flex items-center gap-1.5 text-xs font-medium"
            aria-label={`View ${project.title} live demo`}
            tabIndex={hovered ? 0 : -1}
          >
            <ExternalLink size={16} /> Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 hover:scale-110 flex items-center gap-1.5 text-xs font-medium"
            aria-label={`View ${project.title} on GitHub`}
            tabIndex={hovered ? 0 : -1}
          >
            <FiGithub size={16} /> Code
          </a>
          <a
            href={project.caseStudyUrl}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 hover:scale-110 flex items-center gap-1.5 text-xs font-medium"
            aria-label={`Read ${project.title} case study`}
            tabIndex={hovered ? 0 : -1}
          >
            <BookOpen size={16} /> Details
          </a>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-violet-600/90 text-white backdrop-blur-sm border border-violet-400/30">
              ✦ Featured Full Stack Developer Project
            </span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold glass border border-white/10 text-white/70 capitalize">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="font-outfit font-bold text-xl text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs text-white/60 leading-relaxed mb-3">
            {project.description}
          </p>

          {/* Problem Solved */}
          {project.problem && (
            <div className="mb-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-2">
              <AlertCircle size={14} className="text-amber-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-white/50 leading-tight">
                <strong className="text-white/70 font-medium">Problem: </strong>{project.problem}
              </p>
            </div>
          )}

          {/* Business Impact / Value */}
          {project.businessValue && (
            <div className="p-2.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10 flex items-start gap-2">
              <TrendingUp size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-emerald-300/90 leading-tight">
                <strong className="text-emerald-300 font-semibold">Impact: </strong>{project.businessValue}
              </p>
            </div>
          )}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-lg text-[11px] font-medium bg-white/[0.04] border border-white/[0.06] text-white/60 group-hover:border-violet-500/20 transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/[0.05]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-white/80 hover:text-white bg-violet-600/20 hover:bg-violet-600 border border-violet-500/30 transition-all duration-200"
            aria-label={`Live demo of ${project.title}`}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-white/60 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-white/10 transition-all duration-200"
            aria-label={`GitHub repo of ${project.title}`}
          >
            <FiGithub size={13} />
            GitHub
          </a>
          <a
            href={project.caseStudyUrl}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-white/60 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-white/10 transition-all duration-200"
            aria-label={`Case study of ${project.title}`}
          >
            <BookOpen size={13} />
            Case Study
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter.toLowerCase());

  return (
    <Section id="projects" label="Projects section">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <SectionHeading
          eyebrow="Featured Case Studies"
          title={<>Selected Full Stack<br /><span className="text-gradient-violet">projects & solutions</span></>}
          subtitle="Real-world applications engineered to solve complex business problems with measurable results."
        />

        {/* Filter Tabs */}
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
                'px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500',
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

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <Button
          href="https://github.com/milindpatel1432"
          target="_blank"
          variant="secondary"
          size="lg"
          icon={<FiGithub size={18} />}
          aria-label="View all projects on GitHub"
        >
          Explore All Repositories on GitHub
        </Button>
      </motion.div>
    </Section>
  );
}
