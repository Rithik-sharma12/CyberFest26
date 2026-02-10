/**
 * Login Page - Cyberpunk Theme
 */

import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { getErrorMessage } from '@/services';
import { loginSchema, type LoginSchema } from '@/lib/validations';
import {
  Button,
  Input,
  Label,
  Alert,
  AlertDescription,
} from '@/components/ui';
import GlowingCard from '@/components/ui/GlowingCard';
import HudOverlay from '@/components/ui/HudOverlay';
import CircleElement from '@/components/ui/CircleElement';
import { MainLayout } from '@/components/layout';
import { AlertCircle, Zap } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    setError(null);
    try {
      await login(data);
      navigate(from, { replace: true });
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  return (
    <MainLayout showFooter={false}>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 gradient-radial-red" />
        
        {/* Decorative circles */}
        <CircleElement size="lg" position="-top-20 -left-20" delay={0.2} />
        <CircleElement size="md" position="bottom-10 right-10" delay={0.4} />
        
        <div className="container-responsive py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <GlowingCard className="p-8">
              <HudOverlay variant="minimal" />
              
              <div className="text-center mb-8">
                <span className="font-mono-tech text-xs text-primary tracking-[0.3em]">:: ACCESS ::</span>
                <h1 className="font-orbitron text-3xl font-bold tracking-wide mt-2 text-glow-red">
                  WELCOME BACK
                </h1>
                <p className="text-muted-foreground font-rajdhani mt-2">
                  Sign in to your account to continue
                </p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono-tech text-xs tracking-wider">
                      EMAIL
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="bg-muted/50 border-border focus:border-primary"
                      {...register('email')}
                      error={errors.email?.message}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive font-rajdhani">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-mono-tech text-xs tracking-wider">
                      PASSWORD
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="bg-muted/50 border-border focus:border-primary"
                      {...register('password')}
                      error={errors.password?.message}
                    />
                    {errors.password && (
                      <p className="text-sm text-destructive font-rajdhani">{errors.password.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full glow-border font-orbitron tracking-wider" 
                    size="lg"
                    isLoading={isSubmitting}
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    SIGN IN
                  </Button>
                  
                  <p className="text-sm text-center text-muted-foreground font-rajdhani">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary hover:text-primary/80 font-semibold">
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </GlowingCard>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
