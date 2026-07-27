import { motion } from 'framer-motion';
import { Download, Code2, Briefcase, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import Section, { SectionHeading } from '../../layouts/Section';
import Button from '../Button/Button';
import Card from '../Card/Card';
import { stats } from '../../utils/data';
import { staggerContainer, fadeUp, fadeLeft, viewportOnce } from '../../utils/animations';

const statIcons = [Briefcase, Code2, ShieldCheck, Zap];

const keyStrengths = [
  { title: 'Full Stack Developer Mastery', desc: 'Custom Mongo, Express, React, Node.js applications built for scale.' },
  { title: 'Pixel-Perfect Execution', desc: 'Flawless translation of Figma mockups into fast, responsive interfaces.' },
  { title: 'Clean Architecture', desc: 'Maintainable, modular JavaScript & TypeScript code structure.' },
];

const timeline = [
  {
    year: 'November 2024 - Present',
    role: 'Full Stack Developer',
    company: 'Webtechneeq',
    desc: 'Building bespoke full-stack web applications, SaaS MVPs, and custom APIs for global clients.',
  },
  {
    year: 'August 2023 - October 2023',
    role: 'Freelancer Web Designer',
    company: '',
    desc: 'Developed RESTful services and interactive React frontends powering client web portals.',
  },
  {
    year: 'April 2023 - August 2023',
    role: 'Web Developer Internship',
    company: '',
    desc: 'Crafted responsive, high-converting client websites using React, CSS Grid, and Tailwind.',
  },
];

export default function About() {
  return (
    <Section id="about" label="About section">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── Left — Profile Card & Believable Stats ── */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative order-2 lg:order-1"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-8 bg-violet-600/8 rounded-3xl blur-3xl" aria-hidden="true" />

            <Card className="p-8 gradient-border-violet relative z-10">
              {/* Profile top */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30 shrink-0">
                  <span className="font-outfit font-black text-2xl text-white">M</span>
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-white text-xl">Milind</h3>
                  <p className="text-violet-400 text-sm font-medium">Full Stack Developer</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-white/50">Open for Freelance & Hiring</span>
                  </div>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Location', value: 'Mumbai, India 🇮🇳' },
                  { label: 'Core Focus', value: 'Full Stack Developer' },
                  { label: 'Availability', value: 'Freelance & Contract' },
                  { label: 'Quality', value: '100% Responsive' },
                ].map(({ label, value }) => (
                  <div key={label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <p className="text-xs text-white/30 mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              {/* Download button */}
              <Button
                variant="secondary"
                size="sm"
                icon={<Download size={16} />}
                className="w-full justify-center"
                href="/resume.pdf"
                target="_blank"
                aria-label="Download resume PDF"
              >
                Download Resume PDF
              </Button>
            </Card>

            {/* Believable Credibility Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {stats.map(({ value, label }, i) => {
                const Icon = statIcons[i];
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Card className="p-4 flex items-center gap-3" hoverable={false}>
                      <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 shrink-0">
                        <Icon size={16} className="text-violet-400" />
                      </div>
                      <div>
                        <p className="font-outfit font-bold text-lg text-white">{value}</p>
                        <p className="text-xs text-white/40 leading-tight">{label}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Right — Concise Copy & Journey ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="order-1 lg:order-2 flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="About Me"
              title={<>Delivering value through<br /><span className="text-gradient-violet">clean code & modern design</span></>}
            />
          </motion.div>

          {/* Concise, easy-to-scan summary */}
          <motion.div variants={fadeUp} className="text-white/60 leading-relaxed text-sm md:text-base space-y-3">
            <p>
              I am a results-oriented <span className="text-white font-semibold">Full Stack Developer</span> based in Mumbai, India. I help startups, founders, and businesses turn ideas into production-ready web products.
            </p>
            <p>
              By combining robust Node/Express backends with fluid React user interfaces, I build digital products that are lightning fast, responsive across all devices, and easy to maintain.
            </p>
          </motion.div>

          {/* Core Highlights */}
          <motion.div variants={fadeUp} className="grid gap-3 pt-1">
            {keyStrengths.map((item) => (
              <div key={item.title} className="p-3.5 rounded-xl glass border border-white/[0.05] flex items-start gap-3">
                <CheckCircle2 size={18} className="text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Experience Journey */}
          <motion.div variants={fadeUp} className="mt-2">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Professional Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent" aria-hidden="true" />

              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year + item.role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative pl-6"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-violet-500/60 bg-[#0a0a0f] z-10" aria-hidden="true" />

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-0.5">
                      <span className="text-violet-400 text-xs font-bold font-mono">{item.year}</span>
                      <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
                      <span className="text-white font-semibold text-sm">{item.role}</span>
                    </div>
                    <p className="text-xs text-white/40 font-medium mb-1">{item.company}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Get in touch with Milind"
            >
              Hire Me For Your Project
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="View projects"
            >
              Explore Recent Work
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}
