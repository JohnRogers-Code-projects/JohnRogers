'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react';
import { Section, Button } from '@/components/ui';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/RogersJohn',
    icon: Github,
    description: 'Code & projects',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/john-rogers',
    icon: Linkedin,
    description: 'Professional network',
  },
  {
    name: 'Email',
    href: 'mailto:rogersjoh@gmail.com',
    icon: Mail,
    description: 'Direct contact',
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted text-lg mb-8">
            Interested in discussing systems, AI safety, or potential opportunities?
            I&apos;m always open to thoughtful conversations.
          </p>
        </motion.div>

        {/* Location info */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Ireland
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent" />
            Remote / EU Timezone
          </span>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              href={link.href}
              variant="secondary"
              size="lg"
              external
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Button>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} John Rogers. Built with Next.js.</p>
        <nav className="flex gap-6">
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#cv" className="hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#philosophy" className="hover:text-foreground transition-colors">
            Philosophy
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
