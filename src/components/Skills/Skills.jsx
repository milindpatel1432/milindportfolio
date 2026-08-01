import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Code2, Server, Terminal } from 'lucide-react';
import Section, { SectionHeading } from '../../layouts/Section';
import { skillCategories, techStack } from '../../utils/data';
import { fadeUp, viewportOnce } from '../../utils/animations';
import { cn } from '../../utils/cn';

const tagStyles = {
  Expert: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Advanced: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  Proficient: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

function SkillCard({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ delay, duration: 0.4 }}
      className="group relative p-5 rounded-2xl glass border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <CheckCircle2 size={16} />
            </div>
            <h4 className="font-outfit font-semibold text-white text-base group-hover:text-violet-300 transition-colors">
              {skill.name}
            </h4>
          </div>
          <span className={cn('px-2.5 py-0.5 rounded-full text-[11px] font-semibold border', tagStyles[skill.tag] ?? tagStyles.Proficient)}>
            {skill.tag}
          </span>
        </div>
        <p className="text-xs text-white/45 leading-relaxed">
          {skill.desc}
        </p>
      </div>

      {/* Ambient bottom glow line */}
      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-2 text-[11px] text-white/30">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
        <span>Production Tested</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeCategory = skillCategories.find((c) => c.id === activeTab);

  return (
    <Section id="skills" label="Skills section">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <SectionHeading
          eyebrow="Technical Stack"
          title={<>Core technologies &<br /><span className="text-gradient-violet">development capabilities</span></>}
          subtitle="A battle-tested tech stack focused on building fast, scalable, and secure applications."
          center
        />
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-center gap-2 mb-8 md:mb-10 flex-wrap"
        role="tablist"
        aria-label="Skill categories"
      >
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeTab === cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={cn(
              'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 flex items-center gap-2',
              activeTab === cat.id
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                : 'glass border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/5'
            )}
          >
            {cat.id === 'frontend' && <Code2 size={16} />}
            {cat.id === 'backend' && <Server size={16} />}
            {cat.id === 'tools' && <Terminal size={16} />}
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Skill Cards Grid (Replacing arbitrary progress bars) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          role="tabpanel"
          aria-label={`${activeCategory?.label} skills`}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 lg:mb-12"
        >
          {activeCategory?.skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              delay={i * 0.06}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Tech Stack Marquee Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="border-t border-white/[0.06] pt-6 lg:pt-8"
      >
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4 md:mb-6">
          Full Stack & Ecosystem Tools
        </p>
        <div className="overflow-hidden mask-gradient-x">
          <div className="animate-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-2 mx-6 text-sm font-medium text-white/40 hover:text-white transition-colors duration-200 shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60" aria-hidden="true" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
