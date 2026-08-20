import { motion } from 'framer-motion';
import Section from '../../layouts/Section';
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/animations';

const skillGroups = [
  {
    num: '01',
    category: 'FRONTEND',
    desc: 'Building responsive interfaces with modern component-based tools.',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    num: '02',
    category: 'BACKEND & DATABASE',
    desc: 'Engineering robust server-side applications and data architectures.',
    skills: ['Node.js', 'Express.js', 'PHP', 'MongoDB', 'MySQL'],
  },
  {
    num: '03',
    category: 'CMS & WORKFLOW',
    desc: 'Streamlining client content systems and modern development workflows.',
    skills: ['WordPress', 'Git', 'GitHub', 'REST APIs', 'Responsive Design', 'SEO'],
  },
];

export default function Skills() {
  return (
    <Section id="skills" label="Skills section" className="py-12 md:py-16 lg:py-20 lg:min-h-0">
      {/* Abstract technical background accent */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* ── Section Header ── */}
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            TECH STACK
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-white leading-tight mb-4 tracking-tight">
            Tools I Use{' '}
            <span className="text-gradient-violet block sm:inline">
              to Build for the Web.
            </span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            From frontend interfaces to backend systems, I use a focused modern stack to build responsive and scalable web applications.
          </p>
        </motion.div>

        {/* ── 3 Skill Category Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="group relative p-6 sm:p-7 rounded-2xl glass-card border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(124,58,237,0.15)]"
            >
              {/* Subtle top accent gradient line on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

              <div>
                {/* Category Header: Number + Name */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-violet-400/40 group-hover:text-violet-400 transition-colors duration-300">
                    {group.num}
                  </span>
                  <span className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 group-hover:text-violet-300 transition-colors duration-300">
                    {group.category}
                  </span>
                </div>

                {/* Short One-line Description */}
                <p className="text-xs sm:text-sm text-white/55 leading-relaxed mb-6 font-normal">
                  {group.desc}
                </p>
              </div>

              {/* Technology Pills */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold glass border border-white/[0.08] text-white/80 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/15 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

