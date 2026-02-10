/**
 * Event Detail Page
 * 
 * Shows full event details with registration button - Cyberpunk theme.
 */

import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventsService } from '@/services';
import { useAuth } from '@/context/AuthContext';
import { Button, LoadingState } from '@/components/ui';
import GlowingCard from '@/components/ui/GlowingCard';
import HudOverlay from '@/components/ui/HudOverlay';
import { MainLayout } from '@/components/layout';
import ErrorState from '@/components/common/ErrorState';
import { formatDateTime, formatCurrency, cn } from '@/lib/utils';
import { Calendar, MapPin, Users, Mail, ExternalLink, ArrowLeft, Clock, Zap } from 'lucide-react';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();

  const {
    data: event,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['event', id],
    queryFn: () => eventsService.getEventById(id!),
    enabled: !!id,
  });

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
          message="The event you're looking for doesn't exist or has been removed."
          onRetry={() => refetch()}
        />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        
        <div className="container-responsive py-8 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              to="/"
              className="inline-flex items-center font-mono-tech text-sm text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              :: BACK TO EVENTS
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {event.image_url && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                  <HudOverlay variant="minimal" />
                </div>
              )}

              <GlowingCard glowOnHover={false} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-mono-tech bg-primary/20 text-primary rounded border border-primary/30">
                    {event.category || 'EVENT'}
                  </span>
                  {event.is_registration_open && (
                    <span className="px-3 py-1 text-xs font-mono-tech bg-success/20 text-success rounded border border-success/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                      OPEN
                    </span>
                  )}
                </div>

                <h1 className="font-orbitron text-2xl md:text-4xl font-bold tracking-wide mb-6 text-glow-red">
                  {event.title}
                </h1>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-mono-tech">DATE</p>
                      <p className="font-rajdhani font-semibold">{formatDateTime(event.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-mono-tech">VENUE</p>
                      <p className="font-rajdhani font-semibold">{event.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-mono-tech">CAPACITY</p>
                      <p className="font-rajdhani font-semibold">
                        {event.registration_count} / {event.capacity}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h2 className="font-orbitron text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                    <span className="text-primary">::</span> DESCRIPTION
                  </h2>
                  <div className="font-rajdhani text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {event.description}
                  </div>
                </div>

                {event.contact_email && (
                  <div className="flex items-center gap-2 pt-6 border-t border-border mt-6">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-mono-tech text-sm text-muted-foreground">Contact:</span>
                    <a
                      href={`mailto:${event.contact_email}`}
                      className="text-primary hover:text-primary/80 font-mono-tech text-sm"
                    >
                      {event.contact_email}
                    </a>
                  </div>
                )}
              </GlowingCard>
            </motion.div>

            {/* Sidebar - Registration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <GlowingCard className="sticky top-24 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-orbitron font-bold tracking-wide">REGISTER</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg border border-border">
                    <span className="text-muted-foreground font-mono-tech text-sm">FEE</span>
                    <span className="font-orbitron text-2xl font-bold text-primary text-glow-red">
                      {formatCurrency(event.registration_fee)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground font-mono-tech">SPOTS LEFT</span>
                    <span
                      className={cn(
                        'font-orbitron font-bold',
                        event.available_spots === 0
                          ? 'text-destructive'
                          : event.available_spots < 10
                          ? 'text-warning'
                          : 'text-success'
                      )}
                    >
                      {event.available_spots}
                    </span>
                  </div>

                  <div className="pt-4 space-y-3">
                    {event.is_registration_open ? (
                      isAuthenticated ? (
                        <Link to={`/register/${event.id}`} className="block">
                          <Button className="w-full glow-border font-orbitron tracking-wider" size="lg">
                            <Zap className="mr-2 h-4 w-4" />
                            REGISTER NOW
                          </Button>
                        </Link>
                      ) : (
                        <Link to="/login" state={{ from: `/event/${event.id}` }}>
                          <Button className="w-full glow-border font-orbitron tracking-wider" size="lg">
                            LOGIN TO REGISTER
                          </Button>
                        </Link>
                      )
                    ) : (
                      <Button disabled className="w-full font-orbitron tracking-wider" size="lg">
                        {event.is_full ? 'EVENT FULL' : 'REGISTRATION CLOSED'}
                      </Button>
                    )}

                    {event.payment_form_url && (
                      <a
                        href={event.payment_form_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full hover-glow font-rajdhani">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Payment Form
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
