import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../utils/data';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { cn } from '../../utils/cn';
import Button from '../Button/Button';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds, 80);

  /* Track scroll for blur backdrop trigger */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass border-b border-white/[0.06] shadow-2xl shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Milind — home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow duration-300">
              <span className="text-white font-bold font-outfit text-lg">M</span>
            </div>
            <span className="font-outfit font-bold text-xl text-white hidden sm:block">
              Milind<span className="text-violet-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'relative nav-link px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500',
                      isActive
                        ? 'text-violet-400 nav-link-active'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA + Social */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/milindpatel1432"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-white/50 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/milind"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/50 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
            >
              <FiLinkedin size={18} />
            </a>
            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              variant="primary"
              size="sm"
              className="ml-1"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                <span className="font-outfit font-bold text-xl text-white">
                  Milind<span className="text-violet-400">.</span>
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="space-y-1" role="list">
                  {navLinks.map((link, i) => {
                    const isActive = activeId === link.id;
                    return (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <a
                          href={`#${link.id}`}
                          onClick={(e) => handleNavClick(e, link.id)}
                          aria-current={isActive ? 'page' : undefined}
                          className={cn(
                            'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                            isActive
                              ? 'bg-violet-500/15 text-violet-400 border border-violet-500/20'
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                          )}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                          {link.label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 pb-8 pt-4 border-t border-white/[0.06] space-y-4">
                <Button href="#contact" onClick={(e) => handleNavClick(e, 'contact')} variant="primary" className="w-full justify-center">
                  Hire Me
                </Button>
                <div className="flex items-center justify-center gap-4">
                  {[
                    { href: 'https://github.com/milindpatel1432', Icon: FiGithub, label: 'GitHub' },
                    { href: 'https://linkedin.com/in/milind', Icon: FiLinkedin, label: 'LinkedIn' },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white/50 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
