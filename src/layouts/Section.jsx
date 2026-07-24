import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { fadeUp, viewportOnce } from '../utils/animations';

/**
 * Reusable Section layout wrapper with consistent padding + scroll reveal.
 */
export default function Section({ id, className, children, label }) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn('relative py-24 md:py-32 px-6 md:px-10 lg:px-20 xl:px-32 overflow-hidden', className)}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}

/**
 * Section heading with eyebrow + title + subtitle pattern.
 */
export function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={cn('mb-16', center && 'text-center')}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-lg text-white/50 max-w-2xl leading-relaxed', center && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
