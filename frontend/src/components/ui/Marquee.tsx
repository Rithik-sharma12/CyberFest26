import { cn } from '@/lib/utils';

interface MarqueeProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

const speedMap = {
  slow: '40s',
  normal: '20s',
  fast: '10s',
};

const Marquee = ({ text, className, speed = 'normal' }: MarqueeProps) => {
  const repeatedText = Array(10).fill(text).join(' • ');

  return (
    <div className={cn('overflow-hidden py-4 bg-muted/50 border-y border-border', className)}>
      <div
        className="whitespace-nowrap font-orbitron text-sm tracking-[0.3em] text-primary/60"
        style={{
          animation: `scroll-left ${speedMap[speed]} linear infinite`,
        }}
      >
        {repeatedText} • {repeatedText}
      </div>
    </div>
  );
};

export default Marquee;
