import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { navLinks } from '../../utils/data';
import { viewportOnce } from '../../utils/animations';

const socialLinks = [
  { href: 'https://github.com/milindpatel1432', Icon: FiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/milind', Icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:milindpatel1432@gmail.com', Icon: FiMail, label: 'Email' },
];

const handleNavClick = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] px-6 md:px-10 lg:px-20 xl:px-32 py-12 overflow-hidden"
      aria-label="Site footer"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-600/5 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-2 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
              aria-label="Milind — back to top"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow duration-300">
                <span className="text-white font-bold font-outfit text-lg">M</span>
              </div>
              <span className="font-outfit font-bold text-xl text-white">
                Milind<span className="text-violet-400">.</span>
              </span>
            </a>
            <p className="text-xs md:text-sm text-white/40 leading-relaxed max-w-xs">
              Full Stack Developer. Building high-performance, conversion-focused web applications for startups and global clients.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-2" role="list">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="text-xs text-white/40 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact quick info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
              Direct Contact
            </h3>
            <div className="space-y-2.5">
              <a
                href="mailto:milindpatel1432@gmail.com"
                className="block text-xs text-white/50 hover:text-violet-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded font-mono"
                aria-label="Email Milind"
              >
                milindpatel1432@gmail.com
              </a>
              <p className="text-xs text-white/40">Mumbai, India 🇮🇳 (IST / UTC+5:30)</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-xs text-emerald-400/90 font-medium">Open for Freelance & Hiring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-separator mb-6" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} Milind. All rights reserved. <span className="hidden sm:inline text-white/20">•</span> <span className="text-white/60 font-medium">Crafted by Milind Patel</span>
          </p>
          <p className="text-xs text-white/40">
            Engineered with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-500/30 hover:bg-violet-500 hover:shadow-violet-500/50 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
        aria-label="Back to top"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </motion.button>
    </footer>
  );
}
