import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * Glass-morphism card with hover elevation, gradient border, and optional glow.
 */
export default function Card({
  children,
  className,
  glowColor = 'violet',
  hoverable = true,
  gradient = false,
  ...props
}) {
  const glowMap = {
    violet: 'hover:shadow-violet-500/20',
    cyan: 'hover:shadow-cyan-500/20',
    emerald: 'hover:shadow-emerald-500/20',
    orange: 'hover:shadow-orange-500/20',
    pink: 'hover:shadow-pink-500/20',
  };

  return (
    <motion.div
      whileHover={hoverable ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm',
        'shadow-xl shadow-black/20',
        hoverable && 'transition-shadow duration-300 hover:shadow-2xl cursor-default',
        hoverable && glowMap[glowColor],
        gradient &&
          'before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-white/10 before:to-transparent before:-z-10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
