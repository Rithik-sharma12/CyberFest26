/**
 * Dashboard Page - Cyberpunk Theme
 * 
 * Shows user's registrations and their status.
 */

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { registrationsService } from '@/services';
import { Button, LoadingState } from '@/components/ui';
import GlowingCard from '@/components/ui/GlowingCard';
import SectionTitle from '@/components/ui/SectionTitle';
import HudOverlay from '@/components/ui/HudOverlay';
import CircleElement from '@/components/ui/CircleElement';
import { MainLayout } from '@/components/layout';
import ErrorState from '@/components/common/ErrorState';
import EmptyState from '@/components/common/EmptyState';
import { formatDateTime, getStatusColor, cn } from '@/lib/utils';
import { Calendar, MapPin, ExternalLink, LayoutGrid, Clock, CheckCircle, XCircle } from 'lucide-react';
import type { Registration } from '@/types/api';

function RegistrationCard({ registration, index }: { registration: Registration; index: number }) {
  const statusIcons = {
    PENDING: <Clock className="h-4 w-4" />,
    VERIFIED: <CheckCircle className="h-4 w-4" />,
    REJECTED: <XCircle className="h-4 w-4" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <GlowingCard className="p-5">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-orbitron text-lg font-bold tracking-wide line-clamp-1">
            {registration.event.title}
          </h3>
          <span
            className={cn(
              'flex items-center gap-1 px-3 py-1 text-xs font-mono-tech rounded border',
              getStatusColor(registration.payment_status)
            )}
          >
            {statusIcons[registration.payment_status as keyof typeof statusIcons]}
            {registration.status_display}
          </span>
        </div>
        
        <div className="space-y-3 font-rajdhani">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{formatDateTime(registration.event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{registration.event.venue}</span>
            </div>
          </div>

          {registration.payment_proof_url && (
            <a
              href={registration.payment_proof_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-mono-tech"
            >
              <ExternalLink className="mr-1 h-3 w-3" />
              VIEW PROOF
            </a>
          )}

          {registration.transaction_id && (
            <p className="text-sm text-muted-foreground font-mono-tech">
              TXN: {registration.transaction_id}
            </p>
          )}

          <div className="pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono-tech">
              REGISTERED: {formatDateTime(registration.created_at)}
            </p>
          </div>
        </div>
      </GlowingCard>
    </motion.div>
  );
}

export default function DashboardPage() {
  const {
    data: registrations,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['my-registrations'],
    queryFn: registrationsService.getMyRegistrations,
  });

  if (isLoading) {
    return (
      <MainLayout>
        <LoadingState message="Loading your registrations..." />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <ErrorState
          title="Failed to load registrations"
          message="There was an error loading your registrations. Please try again."
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
        <CircleElement size="lg" position="-top-20 -right-20" delay={0.2} />
        
        <div className="container-responsive py-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <LayoutGrid className="h-6 w-6 text-primary" />
              <span className="font-mono-tech text-xs text-primary tracking-[0.3em]">:: DASHBOARD ::</span>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wide text-glow-red">
              MY REGISTRATIONS
            </h1>
            <p className="text-muted-foreground font-rajdhani mt-2 text-lg">
              Track the status of your event registrations
            </p>
          </motion.div>

          {/* Status Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {[
              { status: 'PENDING', label: 'Pending', desc: 'Awaiting verification', icon: Clock },
              { status: 'VERIFIED', label: 'Verified', desc: 'Payment confirmed', icon: CheckCircle },
              { status: 'REJECTED', label: 'Rejected', desc: 'Not verified', icon: XCircle },
            ].map((item) => (
              <div key={item.status} className="flex items-center gap-2 text-sm">
                <span className={cn(
                  'flex items-center gap-1 px-3 py-1 rounded border font-mono-tech text-xs',
                  getStatusColor(item.status)
                )}>
                  <item.icon className="h-3 w-3" />
                  {item.label}
                </span>
                <span className="text-muted-foreground font-rajdhani hidden sm:inline">{item.desc}</span>
              </div>
            ))}
          </motion.div>

          {/* Registrations Grid */}
          {registrations && registrations.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {registrations.map((registration, index) => (
                <RegistrationCard key={registration.id} registration={registration} index={index} />
              ))}
            </div>
          ) : (
            <GlowingCard className="p-12" glowOnHover={false}>
              <EmptyState
                title="No registrations yet"
                description="You haven't registered for any events. Browse available events and register!"
                action={
                  <Link to="/">
                    <Button className="glow-border font-orbitron tracking-wider">
                      Browse Events
                    </Button>
                  </Link>
                }
              />
            </GlowingCard>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
