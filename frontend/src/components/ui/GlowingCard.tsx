import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

const GlowingCard = ({ children, className, glowOnHover = true }: GlowingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={glowOnHover ? { scale: 1.02 } : undefined}
      className={cn(
        'relative bg-card border border-border rounded-lg overflow-hidden',
        'transition-all duration-300',
        glowOnHover && 'hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--glow-red)/0.2)]',
        className
      )}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern-fine opacity-30 pointer-events-none" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowingCard;
