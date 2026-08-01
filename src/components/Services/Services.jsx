import { motion } from 'framer-motion';
import {
  Code2, Palette, Smartphone, Zap, Server, Shield, CheckCircle2, ArrowRight
} from 'lucide-react';
import Section, { SectionHeading } from '../../layouts/Section';
import { services } from '../../utils/data';
import { fadeUp, viewportOnce } from '../../utils/animations';
import { cn } from '../../utils/cn';

const iconMap = {
  code: Code2,
  palette: Palette,
  smartphone: Smartphone,
  zap: Zap,
  server: Server,
  shield: Shield,
};

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] ?? Code2;

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      whileHover={{ y: -6 }}
      className={cn(
        'group relative p-7 rounded-2xl border transition-all duration-400 flex flex-col justify-between',
        'bg-gradient-to-br',
        service.gradient,
        'glass border-white/[0.08] hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/20'
      )}
    >
      {/* Top accent glow line */}
      <div
        className="absolute top-0 left-6 right-6 h-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
        aria-hidden="true"
      />

      <div>
        {/* Icon Header */}
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
            style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}35` }}
          >
            <Icon size={26} style={{ color: service.accent }} />
          </div>
          <span className="text-[11px] font-mono font-semibold tracking-wider text-white/30 group-hover:text-white/60 transition-colors uppercase">
            Service 0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-outfit font-bold text-xl text-white mb-3 group-hover:text-violet-300 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-white/60 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2.5 mb-8" aria-label={`Deliverables for ${service.title}`}>
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-xs text-white/70 group-hover:text-white/90 transition-colors duration-300">
              <CheckCircle2 size={15} style={{ color: service.accent }} className="shrink-0" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer CTA */}
      <button
        onClick={handleScrollToContact}
        className="w-full flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-semibold text-white/50 group-hover:text-violet-300 transition-colors focus:outline-none"
      >
        <span>Discuss This Service</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Hover background glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${service.accent}10 0%, transparent 70%)` }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <Section id="services" label="Services section">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <SectionHeading
          eyebrow="Freelance Services"
          title={<>End-to-end solutions for<br /><span className="text-gradient-violet">ambitious products</span></>}
          subtitle="Delivering production-grade Full stack web applications with pixel-perfect design and fast turnarounds."
          center
        />
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.4 }}
        className="mt-10 lg:mt-12 text-center"
      >
        <p className="text-white/50 text-sm mb-4">
          Need a custom full-stack application tailored to your specific business requirements?
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
          aria-label="Request a custom project quote"
        >
          Request Custom Quote
          <span aria-hidden="true">→</span>
        </button>
      </motion.div>
    </Section>
  );
}
