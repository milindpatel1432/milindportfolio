import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * Reusable Button component with variants: primary, secondary, ghost, outline.
 * Supports magnetic hover, glow effects, and icon slots.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    className,
    href,
    target,
    disabled = false,
    type = 'button',
    onClick,
    ...props
  },
  ref
) {
  const base =
    'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5',
    secondary:
      'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-violet-500/50 backdrop-blur-sm hover:-translate-y-0.5',
    ghost:
      'text-white/70 hover:text-white hover:bg-white/5',
    outline:
      'border border-violet-500/50 text-violet-400 hover:bg-violet-500/10 hover:border-violet-400 hover:-translate-y-0.5',
    glow:
      'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50 hover:-translate-y-1 after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:from-violet-400 after:to-purple-400 after:opacity-0 hover:after:opacity-20 after:transition-opacity after:duration-300',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  );
});

export default Button;
