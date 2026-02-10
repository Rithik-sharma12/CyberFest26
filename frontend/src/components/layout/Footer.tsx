import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:events@kcg.edu', label: 'Email' },
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      <div className="relative container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-orbitron text-xl font-bold">
                <span className="text-primary text-glow-red">KCG</span>
                <span className="text-foreground ml-1">EVENTS</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground font-rajdhani">
              Your gateway to exciting college events, workshops, and hackathons.
              Register now and be part of something extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-sm font-bold tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {['Home', 'Events', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors font-rajdhani"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron text-sm font-bold tracking-wider mb-4">
              CONNECT
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted hover:bg-primary/20 hover:border-primary border border-border transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground font-mono-tech">
              KCG College of Technology
              <br />
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono-tech">
            © {currentYear} KCG Events. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono-tech">
            <span className="animate-flicker">SYS::OPERATIONAL</span>
            <span>•</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
