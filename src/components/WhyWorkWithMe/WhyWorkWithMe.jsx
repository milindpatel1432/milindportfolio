import { motion } from 'framer-motion';
import { CodeXml, Zap, Smartphone, Search, Sparkles, Headphones } from 'lucide-react';
import Section, { SectionHeading } from '../../layouts/Section';
import { whyWorkWithMe } from '../../utils/data';
import { fadeUp, viewportOnce } from '../../utils/animations';

const iconMap = {
  'code-xml': CodeXml,
  'zap': Zap,
  'smartphone': Smartphone,
  'search': Search,
  'sparkles': Sparkles,
  'headphones': Headphones,
};

export default function WhyWorkWithMe() {
  return (
    <Section id="why-me" label="Why Work With Me section">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-14"
      >
        <SectionHeading
          eyebrow="Value & Standards"
          title={<>Why founders & clients<br /><span className="text-gradient-violet">choose to work with me</span></>}
          subtitle="Engineering standards and work ethics focused on building code you can rely on."
          center
        />
      </motion.div>

      {/* Grid of 6 Pillars */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyWorkWithMe.map((item, index) => {
          const Icon = iconMap[item.icon] ?? CodeXml;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl glass border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Background accent glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.accent}12 0%, transparent 70%)` }}
                aria-hidden="true"
              />

              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}
                >
                  <Icon size={22} style={{ color: item.accent }} />
                </div>

                <h3 className="font-outfit font-bold text-lg text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-white/30">
                <span>Standard 0{index + 1}</span>
                <span className="text-emerald-400 font-semibold">Guaranteed</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
