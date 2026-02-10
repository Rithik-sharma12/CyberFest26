/**
 * Success Page - Cyberpunk Theme
 * 
 * Shown after successful registration.
 */

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import GlowingCard from '@/components/ui/GlowingCard';
import CircleElement from '@/components/ui/CircleElement';
import { MainLayout } from '@/components/layout';
import { CheckCircle, ArrowRight, LayoutGrid, Sparkles } from 'lucide-react';

export default function SuccessPage() {
  const location = useLocation();
  const eventTitle = location.state?.eventTitle;

  return (
    <MainLayout showFooter={false}>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(142 76% 36% / 0.1) 0%, transparent 60%)' }} />
        
        {/* Decorative circles */}
        <CircleElement size="lg" position="-top-20 -right-20" delay={0.2} />
        <CircleElement size="md" position="bottom-10 left-10" delay={0.4} />
        
        <div className="container-responsive py-12 max-w-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GlowingCard className="text-center p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="mx-auto w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mb-6 border border-success/30"
              >
                <CheckCircle className="h-10 w-10 text-success" />
              </motion.div>
              
              <span className="font-mono-tech text-xs text-success tracking-[0.3em]">:: SUCCESS ::</span>
              
              <h1 className="font-orbitron text-2xl md:text-3xl font-bold tracking-wide mt-2 mb-4">
                REGISTRATION SUBMITTED!
              </h1>
              
              <p className="text-muted-foreground font-rajdhani text-lg mb-6">
                {eventTitle
                  ? `Your registration for "${eventTitle}" has been submitted successfully.`
                  : 'Your registration has been submitted successfully.'}
              </p>
              
              <div className="p-4 bg-muted/50 rounded-lg border border-border text-sm mb-6">
                <p className="font-orbitron text-xs tracking-wider text-primary mb-3 flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  WHAT HAPPENS NEXT?
                </p>
                <ol className="list-decimal list-inside text-left text-muted-foreground space-y-2 font-rajdhani">
                  <li>Our team will verify your payment proof</li>
                  <li>You'll receive a confirmation once verified</li>
                  <li>Check your dashboard for registration status</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/dashboard" className="flex-1">
                  <Button className="w-full glow-border font-orbitron tracking-wider" size="lg">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    MY REGISTRATIONS
                  </Button>
                </Link>
                <Link to="/" className="flex-1">
                  <Button variant="outline" className="w-full hover-glow font-rajdhani" size="lg">
                    Browse More Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </GlowingCard>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
