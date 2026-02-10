import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ title, subtitle, className, align = 'center' }: SectionTitleProps) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12', alignmentClass[align], className)}
    >
      <div className="relative inline-block">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wider text-glow-red">
          {title}
        </h2>
        {/* Decorative line */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="w-12 h-px bg-primary/50" />
          <div className="w-2 h-2 bg-primary rotate-45" />
          <div className="w-12 h-px bg-primary/50" />
        </div>
      </div>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg font-rajdhani">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
