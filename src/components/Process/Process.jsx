import { motion } from 'framer-motion';
import { Compass, Layout, Palette, Code, CheckCircle2, Rocket } from 'lucide-react';
import Section, { SectionHeading } from '../../layouts/Section';
import { processSteps } from '../../utils/data';
import { fadeUp, viewportOnce } from '../../utils/animations';

const iconMap = {
  compass: Compass,
  layout: Layout,
  palette: Palette,
  code: Code,
  'check-circle-2': CheckCircle2,
  rocket: Rocket,
};

export default function Process() {
  return (
    <Section id="process" label="My Process section">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-16"
      >
        <SectionHeading
          eyebrow="Workflow & Delivery"
          title={<>A simple, predictable<br /><span className="text-gradient-violet">development process</span></>}
          subtitle="From initial discovery to live production — clear communication every step of the way."
          center
        />
      </motion.div>

      {/* Visual Timeline Steps */}
      <div className="relative max-w-5xl mx-auto">
        {/* Connecting Line for Large Screens */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-violet-600/40 via-cyan-500/40 to-emerald-500/40 -translate-y-6 pointer-events-none" aria-hidden="true" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] ?? Code;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative group p-5 rounded-2xl glass border border-white/[0.06] hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:text-violet-300 group-hover:border-violet-500/30 transition-all">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-outfit font-bold text-base text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-white/[0.04] flex items-center gap-1.5 text-[10px] font-semibold text-white/30 uppercase tracking-wider">
                  <span>Phase 0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
