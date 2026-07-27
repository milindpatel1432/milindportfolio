import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import Button from '../Button/Button';
import {
  staggerContainer,
  fadeUp,
  heroText,
} from '../../utils/animations';

import avatarImg from '../../assets/avatar.png';

const techBadges = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'Tailwind CSS'];

const socialLinks = [
  { href: 'https://github.com/milindpatel1432', Icon: FiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/milind', Icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/milind', Icon: FiTwitter, label: 'Twitter' },
  { href: 'mailto:milindpatel1432@gmail.com', Icon: FiMail, label: 'Email' },
];

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10 lg:px-20 xl:px-32 pt-20"
    >
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)] py-16">

          {/* ── Left Column ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Availability badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-500/20 text-xs font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance & Full-Time
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <motion.h1
                variants={heroText}
                className="font-outfit font-black leading-[1.05] text-white"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
              >
                Full Stack{' '}
                <span className="text-gradient-primary">Developer</span>
                <br />
                <span className="text-white/30 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-normal">
                  Building Scalable Digital Products.
                </span>
              </motion.h1>
            </div>

            {/* Value Proposition */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl"
            >
              Hi, I'm <span className="text-white font-semibold">Milind</span>. I engineer high-performing, pixel-perfect web applications using MongoDB, Express, React, and Node.js for ambitious startups and businesses looking to convert visitors into loyal clients.
            </motion.p>

            {/* Tech Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium glass border border-white/[0.08] text-white/70 hover:text-white hover:border-violet-500/30 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="glow"
                size="lg"
                onClick={() => handleScroll('projects')}
                icon={<ExternalLink size={18} />}
                iconPosition="right"
                className="animate-pulse-glow"
                aria-label="View my featured projects"
              >
                View Selected Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleScroll('contact')}
                icon={<ArrowDown size={18} />}
                iconPosition="right"
                aria-label="Let's talk about your project"
              >
                Let's Talk Project
              </Button>
            </motion.div>

            {/* Social Links + Credibility Subtext */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl glass border border-white/[0.08] text-white/50 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" aria-hidden="true" />
              <div className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>100% Responsive & Clean Code</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Visual Layout ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Outer glow ring */}
            <div className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-violet-600/10 blur-3xl" aria-hidden="true" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-2xl translate-x-8 translate-y-8" aria-hidden="true" />

            {/* Avatar Container */}
            <div className="relative animate-float">
              {/* Main avatar circle */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full">
                {/* Vibrant Glowing Conic Ring */}
                <div
                  className="absolute inset-0 rounded-full p-[2.5px] shadow-2xl"
                  style={{
                    background:
                      'conic-gradient(from 0deg, #7c3aed 0%, #06b6d4 25%, #ec4899 50%, #8b5cf6 75%, #7c3aed 100%)',
                    animation: 'aurora-drift-4 8s ease-in-out infinite',
                    boxShadow: '0 0 35px rgba(124, 58, 237, 0.35), 0 0 60px rgba(6, 182, 212, 0.2)',
                  }}
                  aria-hidden="true"
                >
                  {/* Glass Mesh Interior */}
                  <div
                    className="w-full h-full rounded-full backdrop-blur-md relative overflow-hidden"
                    style={{
                      background:
                        'radial-gradient(circle at 35% 35%, rgba(124, 58, 237, 0.2), rgba(6, 182, 212, 0.15) 45%, rgba(10, 10, 15, 0.5) 85%)',
                    }}
                  >
                    {/* Glowing Mesh Lines */}
                    <div className="absolute inset-0 bg-grid opacity-30" />

                    {/* Orbiting Aesthetic Spark 1 */}
                    <div
                      className="absolute top-4 left-1/4 w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
                      style={{ boxShadow: '0 0 12px #06b6d4, 0 0 20px #06b6d4' }}
                    />

                    {/* Orbiting Aesthetic Spark 2 */}
                    <div
                      className="absolute bottom-8 right-6 w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse"
                      style={{ boxShadow: '0 0 10px #ec4899, 0 0 18px #ec4899', animationDelay: '1s' }}
                    />

                    {/* Orbiting Aesthetic Spark 3 */}
                    <div
                      className="absolute top-1/2 right-4 w-3 h-3 rounded-full bg-violet-400 animate-pulse"
                      style={{ boxShadow: '0 0 14px #a78bfa, 0 0 22px #a78bfa', animationDelay: '2s' }}
                    />
                  </div>
                </div>

                {/* Avatar inner */}
                <div className="absolute inset-[3px] rounded-full bg-[#0a0a0f]/70 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-violet-500/20 shadow-inner z-10">
                  <img
                    src={avatarImg}
                    alt="Milind - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Inner ambient glow overlay (transparent) */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{ background: 'radial-gradient(circle at 50% 100%, rgba(124, 58, 237, 0.2), transparent 70%)' }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Grounded Floating Info Cards (High Credibility - z-30 to stay above avatar image) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-6 md:-left-14 top-1/4 z-30 glass-card rounded-2xl px-4 py-3 animate-float-delayed shadow-xl border border-white/10"
              >
                <p className="text-xl font-bold font-outfit text-white">10+</p>
                <p className="text-xs text-white/70 font-medium">Projects Built</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-6 md:-right-12 bottom-1/4 z-30 glass-card rounded-2xl px-4 py-3 animate-float shadow-xl border border-white/10"
                style={{ animationDelay: '2.5s' }}
              >
                <p className="text-xl font-bold font-outfit text-violet-400">Full Stack</p>
                <p className="text-xs text-white/70 font-medium">Developer</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 glass-card rounded-2xl px-4 py-3 flex items-center gap-2.5 whitespace-nowrap border border-emerald-500/30 shadow-xl"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs text-white/90 font-medium">Open for Freelance Work</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={() => handleScroll('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
