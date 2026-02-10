/**
 * Registration Page - Cyberpunk Theme
 * 
 * Form for event registration with payment proof submission.
 */

import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { eventsService, registrationsService, getErrorMessage } from '@/services';
import { registrationSchema, type RegistrationSchema } from '@/lib/validations';
import {
  Button,
  Input,
  Label,
  LoadingState,
  Alert,
  AlertDescription,
} from '@/components/ui';
import GlowingCard from '@/components/ui/GlowingCard';
import HudOverlay from '@/components/ui/HudOverlay';
import CircleElement from '@/components/ui/CircleElement';
import { MainLayout } from '@/components/layout';
import ErrorState from '@/components/common/ErrorState';
import { formatDateTime, formatCurrency } from '@/lib/utils';
import { ArrowLeft, AlertCircle, ExternalLink, FileText, Zap, Calendar, MapPin, CreditCard } from 'lucide-react';

export default function RegisterEventPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch event details
  const {
    data: event,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['event', id],
    queryFn: () => eventsService.getEventById(id!),
    enabled: !!id,
  });

  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      payment_proof_url: '',
      transaction_id: '',
    },
  });

  // Registration mutation
  const createRegistration = useMutation({
    mutationFn: (data: RegistrationSchema) =>
      registrationsService.createRegistration({
        event: id!,
        payment_proof_url: data.payment_proof_url || undefined,
        transaction_id: data.transaction_id || undefined,
      }),
    onSuccess: () => {
      navigate('/success', { state: { eventTitle: event?.title } });
    },
    onError: (error) => {
      setSubmitError(getErrorMessage(error));
    },
  });

  const onSubmit = (data: RegistrationSchema) => {
    setSubmitError(null);
    createRegistration.mutate(data);
  };

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingState message="Loading event details..." />
      </MainLayout>
    );
  }

  if (error || !event) {
    return (
      <MainLayout>
        <ErrorState
          title="Event not found"
          message="The event you're trying to register for doesn't exist."
        />
      </MainLayout>
    );
  }

  if (!event.is_registration_open) {
    return (
      <MainLayout>
        <div className="container-responsive py-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Registration for this event is currently closed.
            </AlertDescription>
          </Alert>
          <Link to={`/event/${id}`} className="inline-block mt-4">
            <Button variant="outline" className="hover-glow font-rajdhani">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Event
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <CircleElement size="lg" position="-top-20 -right-20" delay={0.2} />
        
        <div className="container-responsive py-8 max-w-2xl relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              to={`/event/${id}`}
              className="inline-flex items-center font-mono-tech text-sm text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              :: BACK TO EVENT
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlowingCard className="p-8">
              <HudOverlay variant="minimal" />
              
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <div>
                  <span className="font-mono-tech text-xs text-primary tracking-[0.3em]">:: REGISTRATION ::</span>
                  <h1 className="font-orbitron text-2xl font-bold tracking-wide">
                    COMPLETE REGISTRATION
                  </h1>
                </div>
              </div>

              {/* Event Summary */}
              <div className="mb-8 p-5 bg-muted/50 rounded-lg border border-border space-y-3">
                <h2 className="font-orbitron font-bold tracking-wide text-lg">{event.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm font-rajdhani">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    {formatDateTime(event.date)}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.venue}
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="font-orbitron text-xl font-bold text-primary text-glow-red">
                    {formatCurrency(event.registration_fee)}
                  </span>
                </div>
              </div>

              {/* Payment Instructions */}
              {event.registration_fee > 0 && (
                <div className="mb-8 p-5 bg-primary/5 rounded-lg border border-primary/30">
                  <p className="font-orbitron text-sm tracking-wider text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    PAYMENT INSTRUCTIONS
                  </p>
                  <ol className="list-decimal list-inside text-sm space-y-2 font-rajdhani text-muted-foreground">
                    <li>Complete the payment using the payment form link below</li>
                    <li>Copy the payment proof URL (Google Drive link, etc.)</li>
                    <li>Paste it in the form and submit</li>
                    <li>Your registration will be verified by the admin</li>
                  </ol>
                  {event.payment_form_url && (
                    <a
                      href={event.payment_form_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-primary hover:text-primary/80 font-mono-tech text-sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      OPEN PAYMENT FORM
                    </a>
                  )}
                </div>
              )}

              {/* Registration Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {submitError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{submitError}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="payment_proof_url" className="font-mono-tech text-xs tracking-wider">
                    PAYMENT PROOF URL {event.registration_fee > 0 && <span className="text-destructive">*</span>}
                  </Label>
                  <Input
                    id="payment_proof_url"
                    type="url"
                    placeholder="https://drive.google.com/file/..."
                    className="bg-muted/50 border-border focus:border-primary"
                    {...register('payment_proof_url')}
                    error={errors.payment_proof_url?.message}
                  />
                  {errors.payment_proof_url && (
                    <p className="text-sm text-destructive font-rajdhani">{errors.payment_proof_url.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground font-rajdhani">
                    Upload your payment screenshot to Google Drive and paste the shareable link
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transaction_id" className="font-mono-tech text-xs tracking-wider">
                    TRANSACTION ID <span className="text-muted-foreground">(OPTIONAL)</span>
                  </Label>
                  <Input
                    id="transaction_id"
                    type="text"
                    placeholder="Enter transaction/reference number"
                    className="bg-muted/50 border-border focus:border-primary"
                    {...register('transaction_id')}
                    error={errors.transaction_id?.message}
                  />
                  {errors.transaction_id && (
                    <p className="text-sm text-destructive font-rajdhani">{errors.transaction_id.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full glow-border font-orbitron tracking-wider"
                  size="lg"
                  isLoading={isSubmitting || createRegistration.isPending}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  SUBMIT REGISTRATION
                </Button>
              </form>
            </GlowingCard>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
