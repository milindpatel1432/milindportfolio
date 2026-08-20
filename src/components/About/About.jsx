import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../../layouts/Section';
import { staggerContainer, fadeUp, fadeLeft, viewportOnce } from '../../utils/animations';

const highlights = [
  { num: '01', text: 'Real-world experience' },
  { num: '02', text: 'Modern React/MERN stack' },
  { num: '03', text: 'Full-stack development' },
];

export default function About() {
  const handleScrollToSkills = (e) => {
    e.preventDefault();
    const el = document.getElementById('skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="about" label="About section" className="py-12 md:py-16 lg:py-20 lg:min-h-0">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 flex flex-col justify-between gap-10 lg:gap-12"
      >
        {/* ── Two-Column Main Content ── */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 xl:gap-16 items-center">
          
          {/* ── Left Column: Heading, Description & CTA ── */}
          <motion.div variants={fadeUp} className="flex flex-col items-start">
            {/* Eyebrow Label */}
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              ABOUT ME
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-outfit text-white leading-[1.15] mb-5 tracking-tight">
              Full Stack Developer{' '}
              <span className="text-gradient-violet block sm:inline lg:block xl:inline">
                with a Modern Approach.
              </span>
            </h2>

            {/* Description — Exact copy only */}
            <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-xl mb-6 font-normal">
              I'm a Full Stack Developer with professional experience in PHP, WordPress and MySQL. While working professionally, I expanded my skills into React and the MERN stack to build modern, scalable and responsive web applications.
            </p>

            {/* Single Text CTA */}
            <a
              href="#skills"
              onClick={handleScrollToSkills}
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
              aria-label="More about my skills and experience"
            >
              <span>More About Me</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* ── Right Column: Compact Developer Profile Card ── */}
          <motion.div variants={fadeLeft} className="w-full">
            <div className="relative">
              {/* Outer soft glow border wrapper */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 gradient-border-violet relative overflow-hidden shadow-2xl backdrop-blur-xl">
                {/* Accent background highlight */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-violet-500/15 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
                <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

                {/* Card Title & Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="font-outfit font-extrabold text-base sm:text-lg text-white tracking-wider uppercase">
                      FULL STACK DEVELOPER
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open for Freelance Work</span>
                  </div>
                </div>

                {/* Tech & Capabilities Stack List */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.05] flex flex-wrap items-center justify-between gap-2 hover:border-violet-500/20 transition-colors">
                    <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Traditional</span>
                    <span className="text-xs sm:text-sm font-semibold text-white/90">PHP · WordPress · MySQL</span>
                  </div>

                  <div className="p-3 rounded-xl bg-violet-500/[0.06] border border-violet-500/20 flex flex-wrap items-center justify-between gap-2 hover:border-violet-500/40 transition-colors">
                    <span className="text-xs font-medium text-violet-300/70 uppercase tracking-wider">Modern Stack</span>
                    <span className="text-xs sm:text-sm font-semibold text-violet-200">React · Node.js · Express · MongoDB</span>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/15 flex flex-wrap items-center justify-between gap-2 hover:border-cyan-500/30 transition-colors">
                    <span className="text-xs font-medium text-cyan-400/70 uppercase tracking-wider">Standards</span>
                    <span className="text-xs sm:text-sm font-semibold text-cyan-200">Performance · Responsive UI · Clean Code</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom Highlights: 3 Small Inline Items ── */}
        <motion.div
          variants={fadeUp}
          className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6"
        >
          {highlights.map((item) => (
            <div key={item.num} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/70 font-medium">
              <span className="font-mono text-violet-400 font-bold">{item.num} —</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

