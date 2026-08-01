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
      className={cn('relative min-h-none lg:min-h-screen flex flex-col justify-center py-16 md:py-20 lg:py-16 px-6 md:px-10 lg:px-20 xl:px-32 overflow-hidden', className)}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative z-10 max-w-7xl mx-auto w-full"
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
    <div className={cn('mb-8 md:mb-12 lg:mb-14', center && 'text-center')}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-400 mb-2 md:mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-white mb-3 md:mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-sm sm:text-base md:text-lg text-white/50 max-w-2xl leading-relaxed', center && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
