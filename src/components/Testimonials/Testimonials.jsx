import { motion } from 'framer-motion';
import { MessageSquare, Clock, FileCheck, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Section, { SectionHeading } from '../../layouts/Section';
import { trustPillars } from '../../utils/data';
import { fadeUp, viewportOnce } from '../../utils/animations';
import Button from '../Button/Button';

const iconMap = {
  'message-square': MessageSquare,
  'clock': Clock,
  'file-check': FileCheck,
  'shield-check': ShieldCheck,
};

export default function Testimonials() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="guarantee" label="Trust & Guarantee section">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-14"
      >
        <SectionHeading
          eyebrow="Client Commitment"
          title={<>Available for freelance —<br /><span className="text-gradient-violet">built on trust & quality</span></>}
          subtitle="I believe in clear communication, realistic deadlines, and delivering code that exceeds expectations."
          center
        />
      </motion.div>

      {/* Main Freelance Trust Card */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-950/20"
        >
          {/* Background Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          {/* Top Banner Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">Currently Accepting New Projects</span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
              100% Satisfaction Guarantee
            </span>
          </div>

          {/* 4 Trust Pillars */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {trustPillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon] ?? ShieldCheck;
              return (
                <div key={pillar.title} className="p-5 rounded-2xl glass border border-white/[0.05] flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 shrink-0 text-violet-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-white text-base mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>Fast response time (usually within 24 hours)</span>
            </div>
            <Button
              variant="glow"
              size="md"
              onClick={handleScrollToContact}
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              aria-label="Discuss project availability"
            >
              Check Availability & Get Started
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
