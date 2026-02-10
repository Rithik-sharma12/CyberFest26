import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CircleElementProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: string;
  delay?: number;
  className?: string;
}

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
};

const CircleElement = ({
  size = 'md',
  position = '',
  delay = 0,
  className,
}: CircleElementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className={cn(
        'absolute rounded-full border border-primary/20 pointer-events-none',
        sizeMap[size],
        position,
        className
      )}
    >
      {/* Inner ring */}
      <div className="absolute inset-4 rounded-full border border-primary/10" />
      
      {/* Animated pulse */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full border border-primary/20"
      />
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};

export default CircleElement;
