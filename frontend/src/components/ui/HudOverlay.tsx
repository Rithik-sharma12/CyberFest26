import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HudOverlayProps {
  className?: string;
  variant?: 'hero' | 'section' | 'minimal';
}

const HudOverlay = ({ className, variant = 'hero' }: HudOverlayProps) => {
  const hudElements = [
    { text: 'SYS::ONLINE', position: 'top-4 left-4' },
    { text: 'STATUS::ACTIVE', position: 'top-4 right-4' },
    { text: 'MODE::EVENTS', position: 'bottom-4 left-4' },
    { text: 'CONNECTION::SECURE', position: 'bottom-4 right-4' },
  ];

  if (variant === 'minimal') {
    return (
      <div className={cn('absolute inset-0 pointer-events-none', className)}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-2 right-2 text-xs font-mono-tech text-primary/50 animate-flicker"
        >
          ::LIVE
        </motion.span>
      </div>
    );
  }

  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}>
      {hudElements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={cn(
            'absolute font-mono-tech text-xs tracking-wider animate-flicker',
            'text-primary/40',
            element.position
          )}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          {element.text}
        </motion.span>
      ))}

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/30" />

      {variant === 'hero' && (
        <>
          {/* Scan line effect */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '100vh' }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          />
        </>
      )}
    </div>
  );
};

export default HudOverlay;
