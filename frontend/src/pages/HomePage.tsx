/**
 * Home Page - Event Listing
 * 
 * Cyberpunk-themed landing page with events showcase.
 */

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventsService } from '@/services';
import { Button, LoadingState } from '@/components/ui';
import GlowingCard from '@/components/ui/GlowingCard';
import HudOverlay from '@/components/ui/HudOverlay';
import CircleElement from '@/components/ui/CircleElement';
import SectionTitle from '@/components/ui/SectionTitle';
import Marquee from '@/components/ui/Marquee';
import CountdownTimer from '@/components/ui/CountdownTimer';
import ErrorState from '@/components/common/ErrorState';
import EmptyState from '@/components/common/EmptyState';
import { MainLayout } from '@/components/layout';
import { formatDateTime, formatCurrency } from '@/lib/utils';
import { Calendar, MapPin, Users, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import type { Event } from '@/types/api';

// Hero Section Component
function HeroSection() {
  // Next major event date (adjust as needed)
  const nextEventDate = new Date();
  nextEventDate.setDate(nextEventDate.getDate() + 30); // 30 days from now

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 gradient-radial-red" />
      
      {/* Decorative circles */}
      <CircleElement size="xl" position="-top-20 -right-20" delay={0.2} />
      <CircleElement size="lg" position="-bottom-10 -left-10" delay={0.4} />
      <CircleElement size="md" position="top-1/4 left-10" delay={0.6} />
      
      {/* HUD Overlay */}
      <HudOverlay variant="hero" />
      
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-orbitron text-[20vw] font-black text-primary/5 tracking-wider">
          5.0
        </span>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container-responsive text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono-tech text-sm text-primary tracking-[0.3em] mb-4">
            :: WELCOME TO ::
          </span>
          
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-6">
            <span className="text-glow-red-strong text-primary">KCG</span>
            <span className="text-foreground ml-4">EVENTS</span>
          </h1>
          
          <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your gateway to exciting tech events, workshops, and hackathons.
            Where innovation meets collaboration.
          </p>
          
          {/* Countdown */}
          <div className="mb-10">
            <p className="font-mono-tech text-xs text-primary/60 tracking-widest mb-4">
              NEXT MAJOR EVENT IN
            </p>
            <CountdownTimer targetDate={nextEventDate} />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#events">
              <Button size="lg" className="glow-border font-orbitron tracking-wider gap-2">
                <Zap className="w-5 h-5" />
                EXPLORE EVENTS
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="font-orbitron tracking-wider gap-2 hover-glow">
                <Target className="w-5 h-5" />
                JOIN NOW
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}

// Event Card Component
function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <GlowingCard className="h-full">
        {event.image_url && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={event.image_url}
              alt={event.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 text-xs font-mono-tech bg-primary/20 text-primary rounded">
              {event.category || 'EVENT'}
            </span>
          </div>
          
          <h3 className="font-orbitron text-lg font-bold tracking-wide line-clamp-2 mb-3">
            {event.title}
          </h3>
          
          <div className="space-y-2 text-sm text-muted-foreground font-rajdhani mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{formatDateTime(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>{event.available_spots} spots available</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="font-orbitron font-bold text-primary text-glow-red">
              {formatCurrency(event.registration_fee)}
            </span>
            <Link to={`/event/${event.id}`}>
              <Button variant="outline" size="sm" className="gap-2 hover-glow">
                View
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </GlowingCard>
    </motion.div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Tech Workshops',
      description: 'Hands-on sessions with industry experts covering cutting-edge technologies.',
    },
    {
      icon: Target,
      title: 'Hackathons',
      description: 'Compete, collaborate, and create innovative solutions in 24-48 hour sprints.',
    },
    {
      icon: Sparkles,
      title: 'Networking',
      description: 'Connect with peers, mentors, and industry professionals.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-responsive">
        <SectionTitle 
          title="What We Offer" 
          subtitle="Discover opportunities to learn, grow, and excel"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-orbitron text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground font-rajdhani">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-fine opacity-20" />
      <CircleElement size="lg" position="top-0 right-0" delay={0} />
      
      <div className="container-responsive relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono-tech text-sm text-primary tracking-widest">:: ABOUT US ::</span>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wide mt-2 mb-6 text-glow-red">
              KCG COLLEGE OF TECHNOLOGY
            </h2>
            <div className="space-y-4 text-muted-foreground font-rajdhani text-lg">
              <p>
                We are a vibrant community of tech enthusiasts, innovators, and future leaders.
                Our events platform brings together the best opportunities for learning and growth.
              </p>
              <p>
                From hands-on workshops to competitive hackathons, we create experiences that
                shape careers and foster innovation.
              </p>
            </div>
            
            <div className="mt-8 flex gap-8">
              {[
                { value: '50+', label: 'Events/Year' },
                { value: '5000+', label: 'Participants' },
                { value: '100+', label: 'Partners' },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block font-orbitron text-3xl font-bold text-primary text-glow-red">
                    {stat.value}
                  </span>
                  <span className="font-mono-tech text-xs text-muted-foreground tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-lg border border-primary/30 flex items-center justify-center">
              <span className="font-orbitron text-8xl font-black text-primary/20">KCG</span>
            </div>
            <HudOverlay variant="minimal" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const {
    data: events,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['events'],
    queryFn: () => eventsService.getEvents({ upcoming: true }),
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Marquee */}
      <Marquee text="REGISTER NOW • WORKSHOPS • HACKATHONS • SEMINARS • COMPETITIONS" />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Events Section */}
      <section id="events" className="py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container-responsive relative z-10">
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="Don't miss out on these exciting opportunities"
          />
          
          {isLoading ? (
            <LoadingState message="Loading events..." />
          ) : error ? (
            <ErrorState
              title="Failed to load events"
              message="There was an error loading the events. Please try again."
              onRetry={() => refetch()}
            />
          ) : events && events.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No upcoming events"
              description="Check back later for new events!"
            />
          )}
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Bottom Marquee */}
      <Marquee text="INNOVATE • CREATE • COLLABORATE • LEARN • GROW" speed="slow" />
    </MainLayout>
  );
}
