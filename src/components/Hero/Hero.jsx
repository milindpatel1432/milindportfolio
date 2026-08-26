import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Download, Sparkles, ExternalLink } from 'lucide-react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Button from '../Button/Button';
import {
  staggerContainer,
  fadeUp,
  heroText,
} from '../../utils/animations';

import avatarImg from '../../assets/avatar.png';

const techBadges = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'PHP',
  'WordPress',
  'Tailwind CSS',
];

const socialLinks = [
  { href: 'https://github.com/milindpatel1432', Icon: FiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/milind', Icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:milindpatel1432@gmail.com', Icon: FiMail, label: 'Email' },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-none lg:h-screen lg:max-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10 lg:px-20 xl:px-32 pt-20 pb-6 lg:py-0"
    >
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none" aria-hidden="true" />

      {/* Mouse reactive subtle ambient glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* ── Left Column (Text) ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 md:gap-5 order-2 lg:order-1"
          >
            {/* Availability Badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-500/25 text-xs font-semibold text-emerald-400 shadow-lg shadow-emerald-950/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Freelance & Full-Time
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden">
              <motion.div variants={heroText}>
                <p className="text-lg md:text-xl font-medium font-outfit text-white/80 tracking-wide mb-1">
                  Hi, I'm <span className="text-white font-bold">Milind Patel</span>
                </p>
                <h1 className="font-outfit font-black leading-[1.08] text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                  Full Stack{' '}
                  <span className="text-gradient-violet">Developer</span>
                </h1>
              </motion.div>
            </div>

            {/* Value Proposition */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg font-semibold text-white/90 leading-snug"
            >
              Building Fast, Scalable & Modern Web Applications.
            </motion.p>

            {/* Professional Description */}
            <motion.div
              variants={fadeUp}
              className="text-xs sm:text-sm text-white/65 leading-relaxed max-w-xl space-y-2"
            >
              <p>
                I'm a Full Stack Developer with professional experience building business websites using PHP and WordPress, while expanding my expertise into React and the MERN stack.
              </p>
              <p>
                I create responsive, high-performance, SEO-friendly web applications with clean architecture and modern UI for businesses and startups.
              </p>
            </motion.div>

            {/* Tech Stack Chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-1.5 pt-1">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold glass border border-white/[0.08] text-white/80 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="glow"
                size="md"
                onClick={() => handleScroll('contact')}
                icon={<Sparkles size={16} />}
                iconPosition="right"
                className="animate-pulse-glow hover:scale-105 transition-transform"
                aria-label="Hire me for your project"
              >
                Hire Me
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => handleScroll('projects')}
                icon={<ExternalLink size={16} />}
                iconPosition="right"
                className="hover:scale-105 transition-transform"
                aria-label="View my projects"
              >
                View Projects
              </Button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white/70 hover:text-white glass border border-white/[0.08] hover:border-white/20 transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label="Download my resume PDF"
              >
                <Download size={14} className="text-violet-400" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links & Trust Indicator */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-xl glass border border-white/[0.08] text-white/50 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <div className="w-px h-6 bg-white/10 hidden sm:block" aria-hidden="true" />
              <div className="flex items-center gap-1.5 text-xs text-white/50 font-medium">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>100% Clean Architecture & Clean Code</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Visual Composition (Avatar Image) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end my-4 lg:my-0 order-1 lg:order-2"
            style={{
              transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)`,
            }}
          >
            {/* Outer ambient glow rings */}
            <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full bg-violet-600/20 blur-3xl" aria-hidden="true" />
            <div className="absolute w-[260px] h-[260px] rounded-full bg-cyan-400/15 blur-2xl translate-x-6 translate-y-6" aria-hidden="true" />

            {/* Avatar Circle Wrapper */}
            <div className="relative">
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full">
                {/* Glowing Conic Border Ring */}
                <div
                  className="absolute inset-0 rounded-full p-[2.5px] shadow-2xl"
                  style={{
                    background:
                      'conic-gradient(from 0deg, #a78bfa 0%, #38bdf8 30%, #f472b6 60%, #c084fc 85%, #a78bfa 100%)',
                    animation: 'aurora-drift-4 8s ease-in-out infinite',
                    boxShadow: '0 0 35px rgba(167, 139, 250, 0.45), 0 0 70px rgba(56, 189, 248, 0.25)',
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="w-full h-full rounded-full backdrop-blur-md relative overflow-hidden"
                    style={{
                      background:
                        'radial-gradient(circle at 35% 35%, rgba(167, 139, 250, 0.4), rgba(56, 189, 248, 0.3) 45%, rgba(30, 27, 75, 0.3) 100%)',
                    }}
                  >
                    <div className="absolute inset-0 bg-grid opacity-25" />
                  </div>
                </div>

                {/* Avatar Inner Image */}
                <div className="absolute inset-[3px] rounded-full bg-[#0a0a0f]/60 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-violet-400/30 shadow-inner z-10">
                  <img
                    src={avatarImg}
                    alt="Milind Patel - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-25"
                    style={{ background: 'radial-gradient(circle at 50% 100%, rgba(167, 139, 250, 0.4), transparent 70%)' }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* 4 Believable Floating Cards */}
              {/* Card 1: Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-4 md:-left-10 top-4 z-30 glass-card rounded-xl px-3.5 py-2.5 flex items-center gap-2 border border-emerald-500/30 shadow-lg shadow-black/40 animate-float"
              >
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white/90">Open for Freelance</span>
              </motion.div>

              {/* Card 2: Top Right */}
              {/*<motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-4 md:-right-8 top-1/4 z-30 glass-card rounded-xl px-3.5 py-2.5 flex items-center gap-2 border border-violet-500/30 shadow-lg shadow-black/40 animate-float-delayed"
              >
                <CheckCircle2 size={16} className="text-violet-400 shrink-0" />
                <span className="text-xs font-semibold text-violet-200">React & MERN Stack</span>
              </motion.div>*/}

              {/* Card 3: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-6 md:-left-12 bottom-1/4 z-30 glass-card rounded-xl px-3.5 py-2.5 flex items-center gap-2 border border-cyan-500/30 shadow-lg shadow-black/40 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span className="text-xs font-semibold text-cyan-200">Full Stack Developer</span>
              </motion.div>

              {/* Card 4: Bottom Center */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 glass-card rounded-xl px-4 py-2.5 flex items-center gap-2 whitespace-nowrap border border-white/15 shadow-xl shadow-black/40 animate-float-delayed"
                style={{ animationDelay: '2.8s' }}
              >
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white">Responsive Websites</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          onClick={() => handleScroll('about')}
          className="hidden xl:flex absolute -bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/30 hover:text-white/70 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
