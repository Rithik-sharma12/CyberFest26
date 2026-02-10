/**
 * 404 Not Found Page - Cyberpunk Theme
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import CircleElement from '@/components/ui/CircleElement';
import HudOverlay from '@/components/ui/HudOverlay';
import { MainLayout } from '@/components/layout';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <MainLayout showFooter={false}>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 gradient-radial-red" />
        
        {/* Decorative circles */}
        <CircleElement size="xl" position="-top-32 -left-32" delay={0.2} />
        <CircleElement size="lg" position="bottom-0 right-0" delay={0.4} />
        
        <HudOverlay variant="minimal" />
        
        <div className="container-responsive py-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/20 border border-destructive/30 mb-6">
                <AlertTriangle className="h-10 w-10 text-destructive" />
              </div>
              
              <h1 className="font-orbitron text-8xl md:text-9xl font-black text-glow-red-strong text-primary mb-4">
                404
              </h1>
            </motion.div>
            
            <span className="font-mono-tech text-xs text-primary tracking-[0.3em]">:: ERROR ::</span>
            
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold tracking-wide mt-2 mb-4">
              PAGE NOT FOUND
            </h2>
            
            <p className="text-muted-foreground font-rajdhani text-lg mb-8 max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved to another dimension.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="hover-glow font-rajdhani" 
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
              <Link to="/">
                <Button className="glow-border font-orbitron tracking-wider" size="lg">
                  <Home className="mr-2 h-4 w-4" />
                  HOME
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
