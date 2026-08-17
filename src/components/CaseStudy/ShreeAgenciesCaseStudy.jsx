import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Server,
  Code2,
  Globe,
  Smartphone,
  Mail,
  Layers,
  Sparkles,
  ChevronRight,
  FileText,
  Building2,
  Send,
  X,
  Maximize2
} from 'lucide-react';

import shreeAgenciesImg from '../../assets/shree-agencies.png';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function ShreeAgenciesCaseStudy({ onBack }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToPortfolio = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.pushState(null, '', '/#projects');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const liveUrl = 'https://www.shreeagenciesmumbai.com/';

  const techBadges = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'Bootstrap',
    'PHP',
    'PHP Mailer',
  ];

  const keyFeatures = [
    { title: 'Fully Responsive Design', desc: 'Fluid layout adapting seamlessly across desktop, tablet, and mobile screen sizes.' },
    { title: 'Mobile-Friendly Navigation', desc: 'Intuitive navigation header and mobile drawer for effortless browsing.' },
    { title: 'Modern Corporate UI', desc: 'Clean, trustworthy aesthetic tailored for paper sourcing and supply clients.' },
    { title: 'Products & Suppliers Section', desc: 'Clear presentation of paper grades, paper products, and mill suppliers.' },
    { title: 'Contact / Enquiry Form', desc: 'Interactive form enabling potential customers to send direct business inquiries.' },
    { title: 'PHP Mailer Integration', desc: 'Secure backend email transmission script delivering inquiries to the inbox.' },
    { title: 'Responsive Bootstrap Layout', desc: 'Robust multi-column grid foundation for structured content alignment.' },
    { title: 'JavaScript & jQuery Interactions', desc: 'Smooth UI transitions, dynamic dropdowns, and form validations.' },
    { title: 'Cross-Device Compatibility', desc: 'Tested across major browsers and operating systems for uniform performance.' },
    { title: 'Business-Focused UX', desc: 'Clear calls-to-action designed to convert site visitors into business leads.' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0f] text-white pt-20 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 selection:bg-rose-500 selection:text-white">
      
      {/* ── 1. Top Navigation Bar ── */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]"
        >
          <button
            onClick={handleBackToPortfolio}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl glass border border-white/10 text-white/80 hover:text-white hover:border-rose-500/40 hover:bg-rose-500/10 transition-all duration-200 text-sm font-medium group cursor-pointer"
            aria-label="Back to portfolio"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-white/50">
            <span className="hidden sm:inline">Portfolio</span>
            <ChevronRight size={14} className="hidden sm:inline" />
            <span>Case Study</span>
            <ChevronRight size={14} />
            <span className="text-rose-400 font-semibold">Shree Agencies</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 text-white font-semibold text-xs hover:bg-rose-500 transition-colors shadow-lg shadow-rose-600/25"
            >
              <ExternalLink size={14} /> Live Website
            </a>
          </div>
        </motion.div>

        {/* ── 2. Hero Section ── */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-rose-500/30 text-xs font-medium text-rose-300 bg-rose-500/10">
              <Sparkles size={14} className="text-rose-400" />
              Corporate / Business Website Case Study
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4 leading-[1.1]"
          >
            Shree Agencies – <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">
              Corporate Paper Sourcing Website
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed mb-6 font-light"
          >
            Designed and developed a modern, professional, and fully responsive corporate website for Shree Agencies, a Mumbai-based paper sourcing and supply business operating since the 1980s.
          </motion.p>

          {/* Metadata Grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl glass border border-white/[0.06]">
              <span className="text-[11px] text-white/40 block mb-1">Role</span>
              <span className="text-sm font-semibold text-white">Full Stack Web Developer</span>
            </div>
            <div className="p-4 rounded-xl glass border border-white/[0.06]">
              <span className="text-[11px] text-white/40 block mb-1">Category</span>
              <span className="text-sm font-semibold text-white">Business Website</span>
            </div>
            <div className="p-4 rounded-xl glass border border-white/[0.06]">
              <span className="text-[11px] text-white/40 block mb-1">Project Type</span>
              <span className="text-sm font-semibold text-white">Corporate Web Platform</span>
            </div>
            <div className="p-4 rounded-xl glass border border-white/[0.06]">
              <span className="text-[11px] text-white/40 block mb-1">Location</span>
              <span className="text-sm font-semibold text-white">Mumbai, India</span>
            </div>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold glass border border-white/[0.08] text-white/80 hover:text-rose-300 hover:border-rose-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Hero Visual Card (Thumbnail Screenshot) */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl shadow-rose-950/30 group"
          >
            <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
              <img
                src={shreeAgenciesImg}
                alt="Shree Agencies Homepage Screenshot"
                className="w-full h-[300px] sm:h-[420px] md:h-[500px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-xl glass text-xs font-semibold text-white flex items-center gap-2 border border-white/20">
                  <Maximize2 size={14} /> Click to View Full Image
                </span>
              </div>
            </div>

            <div className="p-5 rounded-b-3xl glass border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-black/40 backdrop-blur-md">
              <div>
                <p className="text-xs font-medium text-rose-400 uppercase tracking-wider mb-0.5">Homepage Interface</p>
                <p className="text-sm font-semibold text-white">Shree Agencies – Trusted Partner in Paper Sourcing Since the 1980s</p>
              </div>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-rose-600 text-white font-semibold text-xs hover:bg-rose-500 transition-colors flex items-center gap-1.5 shadow-lg shadow-rose-600/20"
              >
                <ExternalLink size={14} /> Visit Live Website
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Lightbox for Screenshot */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close image preview"
              >
                <X size={24} />
              </button>
              <img
                src={shreeAgenciesImg}
                alt="Shree Agencies Homepage Full Screenshot"
                className="max-w-full max-h-full object-contain rounded-xl border border-white/10"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── 3. Project Overview & Objective ── */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl glass border border-white/[0.08]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <Building2 size={22} />
              </div>
              <h2 className="font-outfit font-bold text-2xl text-white">Project Overview</h2>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Shree Agencies is a premier paper sourcing and supply business based in Mumbai, India, serving clients across the paper and printing industries since the 1980s.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              The website presents the company's paper products and mill supplier information in a clean, professional interface. It prioritizes responsive layout engineering, seamless mobile navigation, clear corporate messaging, and direct business lead generation.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass border border-white/[0.08]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <FileText size={22} />
              </div>
              <h2 className="font-outfit font-bold text-2xl text-white">Project Objective</h2>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              The primary objective was to establish a modern, trustworthy online presence for Shree Agencies, enabling commercial buyers, publishers, and printers to easily discover paper products and submit business enquiries.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              The platform was engineered to deliver consistent visual hierarchy, effortless user navigation, and high availability across desktop computers, tablets, and smartphones.
            </p>
          </div>
        </section>

        {/* ── 4. Development Approach & Architecture ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <Code2 size={22} />
            </div>
            <div>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Development Approach</h2>
              <p className="text-xs text-white/50">Frontend structure, UI layout framework, and server integration</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl glass border border-white/[0.08] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
                01
              </div>
              <h3 className="font-outfit font-bold text-lg text-white">Semantic HTML5 & CSS3</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Structured HTML5 markup ensures web accessibility and SEO indexability. Custom CSS3 styles define the visual palette, soft shadows, and clean typographic hierarchy.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass border border-white/[0.08] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
                02
              </div>
              <h3 className="font-outfit font-bold text-lg text-white">Bootstrap & JavaScript</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Utilized Bootstrap's responsive grid system for pixel-perfect device adaptation. Integrated JavaScript and jQuery for dropdown interactions, smooth scrolling, and client-side form validation.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass border border-white/[0.08] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
                03
              </div>
              <h3 className="font-outfit font-bold text-lg text-white">PHP Backend & Mailer</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Server-side PHP handles form processing, sanitizes user inputs, and connects to PHP Mailer to deliver commercial enquiry emails reliably directly to the company inbox.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. Key Features ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <Zap size={22} />
            </div>
            <div>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Key Features</h2>
              <p className="text-xs text-white/50">Comprehensive functional deliverables of the corporate portal</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {keyFeatures.map((feat, index) => (
              <div key={index} className="p-5 rounded-2xl glass border border-white/[0.06] flex items-start gap-3.5 hover:border-rose-500/30 transition-all duration-300">
                <CheckCircle2 size={18} className="text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-outfit font-bold text-sm text-white mb-1">{feat.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Responsive Design & PHP Mailer Integration Details ── */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl glass border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <Smartphone size={22} />
                </div>
                <h2 className="font-outfit font-bold text-2xl text-white">Responsive Design</h2>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                The layout was engineered mobile-first using Bootstrap's responsive breakpoint grid to ensure fluid scaling across screen sizes ranging from small smartphones (320px) to large desktop displays (1920px+).
              </p>
              <ul className="space-y-2 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Mobile drawer navigation menu for touch screens
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Optimized hero typography and legible readability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Touch-friendly button hit targets and form inputs
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-2xl glass border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <Send size={22} />
                </div>
                <h2 className="font-outfit font-bold text-2xl text-white">PHP Mailer Integration</h2>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                To replace basic PHP `mail()` functions which often fail or hit spam filters, the website incorporates PHP Mailer to route client enquiries directly to the sales team's inbox.
              </p>
              <ul className="space-y-2 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Form field validation (Name, Email, Phone, Message)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Input sanitization to prevent header injection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Instant user feedback status upon submission
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 7. Technology Stack Deep Dive ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <Layers size={22} />
            </div>
            <div>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Technology Stack</h2>
              <p className="text-xs text-white/50">Core technologies used in engineering the project</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'HTML5', desc: 'Semantic web layout & structure' },
              { name: 'CSS3', desc: 'Custom styles & UI aesthetics' },
              { name: 'JavaScript', desc: 'Frontend logic & DOM events' },
              { name: 'jQuery', desc: 'DOM manipulation & UI components' },
              { name: 'Bootstrap', desc: 'Responsive grid & layout framework' },
              { name: 'PHP', desc: 'Server-side request processing' },
              { name: 'PHP Mailer', desc: 'Email dispatch & delivery system' },
              { name: 'Apache Server', desc: 'Web server hosting environment' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl glass border border-white/[0.06] flex flex-col justify-between">
                <span className="font-outfit font-bold text-sm text-white mb-1">{item.name}</span>
                <span className="text-[11px] text-white/50">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. Project Outcome ── */}
        <section className="mb-16 p-8 rounded-3xl glass border border-white/10 bg-gradient-to-r from-rose-950/30 via-purple-950/20 to-slate-950/40">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-300">
              <ShieldCheck size={24} />
            </div>
            <h2 className="font-outfit font-bold text-2xl text-white">Project Outcome</h2>
          </div>
          <p className="text-sm text-white/80 leading-relaxed mb-4">
            The completion and launch of the Shree Agencies corporate website successfully established a modern, accessible digital presence for the business.
          </p>
          <p className="text-sm text-white/70 leading-relaxed">
            Corporate buyers and commercial print clients can now effortlessly browse products and mill offerings, verify company credentials, and send direct business enquiries from any device.
          </p>
        </section>

        {/* ── 9. Live Website CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl glass border border-rose-500/30 bg-gradient-to-r from-rose-900/40 via-purple-900/30 to-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <span className="text-xs font-semibold text-rose-300 uppercase tracking-wider block mb-2">Live Production Deployment</span>
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-white mb-2">Experience Shree Agencies Live</h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Explore the complete responsive website, paper product offerings, and corporate interface in action.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-rose-600/30 flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Visit Live Website
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
