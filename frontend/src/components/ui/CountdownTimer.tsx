import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, className, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        onComplete?.();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HRS' },
    { value: timeLeft.minutes, label: 'MIN' },
    { value: timeLeft.seconds, label: 'SEC' },
  ];

  return (
    <div className={cn('flex justify-center gap-3 md:gap-6', className)}>
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <div className="bg-card border border-border rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[100px] glow-border">
            <span className="block font-orbitron text-2xl md:text-4xl font-bold text-glow-red text-center">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="block font-mono-tech text-xs text-muted-foreground text-center mt-2 tracking-widest">
              {unit.label}
            </span>
          </div>
          {/* Separator */}
          {index < timeUnits.length - 1 && (
            <span className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 text-primary text-xl md:text-2xl font-bold animate-pulse">
              :
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
