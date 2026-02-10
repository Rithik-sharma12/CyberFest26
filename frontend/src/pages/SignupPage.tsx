/**
 * Signup Page - Cyberpunk Theme
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { getErrorMessage } from '@/services';
import { signupSchema, type SignupSchema } from '@/lib/validations';
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
import { AlertCircle, UserPlus } from 'lucide-react';

export default function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupSchema) => {
    setError(null);
    try {
      await signup(data);
      navigate('/', { replace: true });
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  return (
    <MainLayout showFooter={false}>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-8">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 gradient-radial-red" />
        
        {/* Decorative circles */}
        <CircleElement size="lg" position="-top-20 -right-20" delay={0.2} />
        <CircleElement size="md" position="bottom-10 left-10" delay={0.4} />
        
        <div className="container-responsive py-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto"
          >
            <GlowingCard className="p-8">
              <HudOverlay variant="minimal" />
              
              <div className="text-center mb-8">
                <span className="font-mono-tech text-xs text-primary tracking-[0.3em]">:: NEW USER ::</span>
                <h1 className="font-orbitron text-3xl font-bold tracking-wide mt-2 text-glow-red">
                  CREATE ACCOUNT
                </h1>
                <p className="text-muted-foreground font-rajdhani mt-2">
                  Sign up to register for events
                </p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first_name" className="font-mono-tech text-xs tracking-wider">
                        FIRST NAME
                      </Label>
                      <Input
                        id="first_name"
                        placeholder="John"
                        className="bg-muted/50 border-border focus:border-primary"
                        {...register('first_name')}
                        error={errors.first_name?.message}
                      />
                      {errors.first_name && (
                        <p className="text-sm text-destructive font-rajdhani">{errors.first_name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last_name" className="font-mono-tech text-xs tracking-wider">
                        LAST NAME
                      </Label>
                      <Input
                        id="last_name"
                        placeholder="Doe"
                        className="bg-muted/50 border-border focus:border-primary"
                        {...register('last_name')}
                        error={errors.last_name?.message}
                      />
                      {errors.last_name && (
                        <p className="text-sm text-destructive font-rajdhani">{errors.last_name.message}</p>
                      )}
                    </div>
                  </div>

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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="font-mono-tech text-xs tracking-wider">
                        PASSWORD
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        className="bg-muted/50 border-border focus:border-primary"
                        {...register('password')}
                        error={errors.password?.message}
                      />
                      {errors.password && (
                        <p className="text-sm text-destructive font-rajdhani">{errors.password.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password_confirm" className="font-mono-tech text-xs tracking-wider">
                        CONFIRM
                      </Label>
                      <Input
                        id="password_confirm"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        className="bg-muted/50 border-border focus:border-primary"
                        {...register('password_confirm')}
                        error={errors.password_confirm?.message}
                      />
                      {errors.password_confirm && (
                        <p className="text-sm text-destructive font-rajdhani">{errors.password_confirm.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone_number" className="font-mono-tech text-xs tracking-wider">
                      PHONE <span className="text-muted-foreground">(OPTIONAL)</span>
                    </Label>
                    <Input
                      id="phone_number"
                      type="tel"
                      placeholder="+91 9876543210"
                      className="bg-muted/50 border-border focus:border-primary"
                      {...register('phone_number')}
                      error={errors.phone_number?.message}
                    />
                    {errors.phone_number && (
                      <p className="text-sm text-destructive font-rajdhani">{errors.phone_number.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="college_name" className="font-mono-tech text-xs tracking-wider">
                        COLLEGE <span className="text-muted-foreground">(OPT)</span>
                      </Label>
                      <Input
                        id="college_name"
                        placeholder="Your College"
                        className="bg-muted/50 border-border focus:border-primary"
                        {...register('college_name')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="college_id" className="font-mono-tech text-xs tracking-wider">
                        STUDENT ID <span className="text-muted-foreground">(OPT)</span>
                      </Label>
                      <Input
                        id="college_id"
                        placeholder="Student ID"
                        className="bg-muted/50 border-border focus:border-primary"
                        {...register('college_id')}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full glow-border font-orbitron tracking-wider" 
                    size="lg"
                    isLoading={isSubmitting}
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    CREATE ACCOUNT
                  </Button>
                  
                  <p className="text-sm text-center text-muted-foreground font-rajdhani">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:text-primary/80 font-semibold">
                      Sign in
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
